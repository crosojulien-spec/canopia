import { z } from 'zod';
import type { DiscoveryState, Message } from '../shared/types.ts';

export const discoverySchema = z.object({
  threads: z
    .array(
      z.object({
        person: z.string().min(1).max(100),
        topic: z.string().min(1).max(80),
        status: z.enum(['open', 'understood', 'unknown', 'indifferent', 'declined']),
        detail: z.string().min(1).max(220),
        sourceMessageIds: z.array(z.string().min(1)).min(1).max(4),
      }),
    )
    .max(12),
  nextMove: z.enum([
    'answer',
    'clarify',
    'deepen',
    'include',
    'bridge',
    'closing_invitation',
    'close',
    'withdraw',
  ]),
  focus: z.string().max(180),
});

// References must exist in this stay's user messages. This checks provenance,
// not semantic truth: the transcript remains authoritative for both prompts.
export function groundedDiscovery(state: DiscoveryState, messages: Message[]): DiscoveryState {
  const userIds = new Set(messages.filter((m) => m.role === 'user').map((m) => m.id));
  return {
    ...state,
    threads: state.threads.filter(
      (thread) =>
        thread.sourceMessageIds.length > 0 && thread.sourceMessageIds.every((id) => userIds.has(id)),
    ),
  };
}

export function discoveryReady(state: DiscoveryState): boolean {
  return state.nextMove === 'closing_invitation' || state.nextMove === 'close';
}
