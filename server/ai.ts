import { readFile } from 'node:fs/promises';
import OpenAI from 'openai';
import { z } from 'zod';
import { zodTextFormat } from 'openai/helpers/zod';
import type { AiProvider, ChatResult, GenerationInput } from '../shared/types.ts';
import type { Config } from './config.ts';
import { AppError } from './security.ts';

const resultSchema = z.object({
  reply: z.string().min(1).max(3000),
  readyToFinish: z.boolean(),
  stopRequested: z.boolean(),
  facts: z
    .array(
      z.object({
        label: z.string(),
        value: z.string(),
        sourceMessageId: z.string(),
        sourceQuote: z.string(),
      }),
    )
    .max(60),
});
export function makeProvider(config: Config): AiProvider {
  if (config.aiMode === 'simulation') return new SimulationProvider();
  if (config.aiMode !== 'openai' || !config.apiKey || !config.model || !config.allowAiCalls)
    return {
      name: 'disabled',
      model: 'unconfigured',
      async chat() {
        throw new AppError(
          503,
          'The AI connection is not enabled. Your message is saved. Please try again when the operator has connected it.',
        );
      },
      async brief() {
        throw new AppError(503, 'Connect and enable the AI provider to generate a brief.');
      },
    };
  const client = new OpenAI({ apiKey: config.apiKey, maxRetries: 0, timeout: 60_000 });
  const inputData = (input: GenerationInput) =>
    JSON.stringify({
      reservation: {
        guestName: input.stay.guestName,
        arrival: input.stay.arrival,
        departure: input.stay.departure,
        partySize: input.stay.partySize,
        notes: input.stay.reservationNotes,
        handoff: input.stay.handoff,
      },
      hotelDNA: input.hotel,
      transcript: input.messages,
    });
  return {
    name: 'openai',
    model: config.model,
    async chat(input, signal) {
      const result = await client.responses.parse(
        {
          model: config.model!,
          store: false,
          max_output_tokens: 4000,
          instructions: await readFile('prompts/conversation-v1.txt', 'utf8'),
          input: inputData(input),
          text: { format: zodTextFormat(resultSchema, 'canopia_turn') },
        },
        { signal },
      );
      if (!result.output_parsed)
        throw new AppError(
          502,
          'The AI response could not be read. Your message is saved; retry when ready.',
        );
      const output = resultSchema.parse(result.output_parsed);
      output.facts = output.facts.filter(
        (f) =>
          f.sourceQuote.length > 0 &&
          input.messages.some(
            (m) => m.role === 'user' && m.id === f.sourceMessageId && m.content.includes(f.sourceQuote),
          ),
      );
      return output;
    },
    async brief(input, signal) {
      const response = await client.responses.create(
        {
          model: config.model!,
          store: false,
          max_output_tokens: 7000,
          instructions: await readFile('prompts/brief-v1.txt', 'utf8'),
          input: inputData(input),
        },
        { signal },
      );
      const text = response.output_text?.trim();
      if (
        response.status !== 'completed' ||
        !text ||
        !['A)', 'B)', 'C)', 'D)', 'E)', 'F)'].every((h) => text.includes(h))
      )
        throw new AppError(502, 'The brief was incomplete. No existing version has been replaced.');
      return text;
    },
  };
}

// Explicitly labelled rehearsal. No model, no external call, no field-quality claim.
export class SimulationProvider implements AiProvider {
  name = 'simulation' as const;
  model = 'scripted-local-rehearsal';
  async chat(input: GenerationInput): Promise<ChatResult> {
    const users = input.messages.filter((m) => m.role === 'user');
    const latest = users.at(-1);
    const stop = Boolean(
      latest &&
      /(?:stop (?:here|this|asking)|do not (?:use|personalize)|don.t (?:use|trust)|human instead|no personali[sz]ation)/i.test(
        latest.content,
      ),
    );
    const replies = [
      `Hello ${input.stay.guestName.split(' ')[0]}. This optional conversation helps the team at ${input.hotel.name} prepare your stay. What brings you here, and what would make this time feel worthwhile?`,
      'Thank you. Is there one part of that you would especially like the hotel team to understand?',
      'Is there anything practical about your comfort, food or the way you like to interact with the team that would help us prepare?',
      'Before we finish, is there anything you would like to add or correct? You can also finish with what you have shared.',
    ];
    return {
      reply: stop
        ? 'Understood. We will stop here. The team will receive a minimal record clearly stating that you do not want personalization.'
        : replies[Math.min(users.length, 3)],
      readyToFinish: users.length >= 3,
      stopRequested: stop,
      facts: users
        .filter((m) => m !== latest || !stop)
        .map((m, i) => ({
          label: `Shared preference ${i + 1}`,
          value: m.content,
          sourceMessageId: m.id,
          sourceQuote: m.content,
        })),
    };
  }
  async brief(input: GenerationInput) {
    const facts =
      input.stay.facts.map((f) => `- ${f.value}`).join('\n') || 'No explicit preferences recorded.';
    return `SIMULATED REHEARSAL — not an AI-generated or hotel-validated brief\n\nA) BASIC INFO\nGuest: ${input.stay.guestName}\nHotel: ${input.hotel.name}\nDates: ${input.stay.arrival} to ${input.stay.departure}\nParty: ${input.stay.partySize}\n\nB) COORDINATION\nHandoff: ${input.stay.handoff}. Hotel team to confirm feasibility.\n\nC) GUEST PROFILE\nCollected statements, for operator review:\n${facts}\n\nExperience suggestions\nNot generated in this scripted rehearsal. Connect the AI provider to evaluate composition against the hotel DNA.\n\nD) RECEPTION\nReview the collected preferences and confirm relevant preparation with the appropriate teams.\n\nE) ROOM PREPARATION\nNo unconfirmed setup instructions. Review explicitly shared comfort preferences.\n\nF) ${input.stay.handoff === 'concierge' ? 'CONCIERGE' : 'RECEPTION — EXPERIENCE SUPPORT'}\nNo activities, partners or reservations selected. Any future proposal needs hotel confirmation.`;
  }
}

export const withdrawalNotice =
  'PERSONALIZATION DECLINED — THE GUEST HAS ASKED NOT TO HAVE THEIR INFORMATION USED FOR PERSONALIZATION.\nCollected information below is a minimal record only. Do not use it to prepare personalized attentions, experiences or outreach. Any change requires a new explicit instruction from the guest through a human contact.';
export function minimalBrief(input: GenerationInput) {
  const facts =
    input.messages
      .filter((m) => m.role === 'user')
      .map((m) => `- Guest statement (verbatim): ${m.content}`)
      .join('\n') || 'No guest statements collected.';
  return `${withdrawalNotice}\n\nA) BASIC INFO\nGuest: ${input.stay.guestName}\nHotel: ${input.hotel.name}\nDates: ${input.stay.arrival} to ${input.stay.departure}\nParty: ${input.stay.partySize}\n\nB) COORDINATION\n${input.stay.handoff === 'concierge' ? 'Concierge' : 'Reception'}: respect the guest\u2019s request. No personalization.\n\nC) COLLECTED INFORMATION — DO NOT ACT ON IT\n${facts}\n\nD) RECEPTION\nThe guest stopped the conversation and does not want the information used for personalization. Offer a human channel if requested.\n\nE) ROOM PREPARATION\nNo personalized preparation instructions.\n\nF) ${input.stay.handoff === 'concierge' ? 'CONCIERGE' : 'RECEPTION — EXPERIENCE SUPPORT'}\nNo experience suggestions or research requests. Respect the guest\u2019s expressed wish.`;
}
