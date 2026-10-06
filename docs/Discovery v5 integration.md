# Discovery role integration and live evidence — 6 October 2026

The approved discovery role is implemented in the application, with GPT-6 Luna pinned for the existing fictional trial. Conversation-v5.1, discovery output/examples v1.1 and brief-v4.2 are the active instructions. The human-readable role reproduces the complete behavioural prompt. This implementation is not a claim that every generated conversation or brief meets Julien's quality standard.

## What changed

Discovery actively seeks actionable tastes, drinks, snacks, bedding, comfort and home habits, routines, interests, sensory preferences, individual context and interaction preferences. Purpose and the guest's answers determine order. Explicit time pressure permits a shorter exchange; message length alone does not. The guest need not design the hotel's attention.

Eleven coverage domains distinguish unexplored, open, understood, indifferent, declined, unknown and not relevant. They coexist with personal follow-up threads. A model-declared host-led ending with unresolved coverage triggers at most one corrective generation, charged to the same budget. A guest can finish without full coverage. These are structural checks, not proof that the interpretation or next question is correct.

Structured output now restricts references to existing guest-message IDs. Returned facts still require an exact quotation from that message. This prevents malformed or foreign IDs from silently erasing known coverage; a valid reference alone does not prove semantic accuracy. Full transcripts remain available to both agents. Existing stays remain readable.

The brief instructions explicitly connect discovered preferences to existing welcome, minibar, room, breakfast and other processes, plus optional paid compositions. They distinguish a proposed adaptation from an established service. A preference can justify a hotel proposal without an explicit purchase request. Hotel approval, feasibility and relevant constraints remain necessary.

The recovered Replit source prompts are preserved verbatim with hashes in the source manifest. Current instructions supersede their fixed ordering, mandatory fields and brevity-based impatience rules. Original-language evidence is labelled historical, not translated into invented new results.

## Model choice and configuration

Julien requested a cheaper application model. Luna supports the Responses API and structured output; the integration uses medium reasoning and a 7,000-token output ceiling for chat and briefs. The full reservation context, selected hotel DNA, transcript, facts and prior discovery are supplied. There is no silent model fallback, tool use, booking or email.

Published Standard input/output rates are USD 0.10/0.50 per million tokens for Luna, versus USD 2/10 for Sol. This is a token-price comparison, not proof of equal quality. See the official [Luna model page](https://developers.openai.com/api/docs/models/gpt-6-luna) and [Sol model page](https://developers.openai.com/api/docs/models/gpt-6.1-sol). The role describes model-independent intent; parameters, format support and behavioural quality must be retested for another model. Luna is a tested lower-cost trial choice, not an established universal best model.

## Three live application journeys

All guests are fictional. Codex played fixed profiles by answering the actual questions, without sending the hidden profile to the model. One profile replays the historical Seven Secrets reference; two are new. Creation, guest messages, completion, automatic generation and selected-version export used the real local application HTTP routes. Authentication remained enabled; temporary local test sessions were revoked after each campaign. No hotel was contacted.

| Case | Guest replies | Useful discovery | Observed weaknesses |
|---|---:|---|---|
| Clara, Marc and Leo — Seven Secrets | 21 | Individual juices and snacks, severe shellfish allergy, pillows/duvets/temperature, scent/flower preferences, note in French, staff interaction, family marine interests and individual cooking/diving interests | Repetitive acknowledgement; unnecessary activity-format and timing questions; the guest ultimately ended the exchange. Some hidden interests such as temples and a pearl farm were never elicited. |
| Nora and Ben — Golden Well | 12 | Distinct snacks and drinks, two duvets and different pillows, morning rituals, no added fragrance and irises, private anniversary story, independent exploring and staff interaction | Repetitive paraphrasing and an execution-like phrase about keeping the room fragrance-free. First brief led with a poorly matched full tasting menu. |
| Sam Patel — Sukhothai | 5 | Espresso before running, banana/yoghurt afterwards, early departure, allergy answer, quiet/cool room, firm pillow, no scent | Asked an unnecessary extra-snack question despite explicit time pressure; stopped normally when asked. |

The first campaign used frozen conversation-v5/brief-v4. Its 38 guest replies caused 41 chat generations, including three bounded corrective generations, plus three briefs. Median guest-turn latency was 24.753 seconds; the slowest was 77.652 seconds including correction. This latency is a material limitation for an interactive product.

## Corrections and actual outcomes

Six live adapter replays used exact archived contexts with conversation-v5.1. They are targeted checks, not six fresh conversations. The busy case now offers to finish; the scent case makes no execution promise; snacks lead naturally to comfort; the two late family contexts offer completion without more scheduling or booking design. The comfort replay still probes Marc's light sleep. Therefore the evidence supports specific improvements, not removal of all redundant follow-ups.

Brief-v4.1 was then generated through the application for all three completed stays. It corrected the dinner offer but still tended to treat some sensory preferences as unusable without an explicit installation request and could merge separate morning moments. Brief-v4.2 was generated for the same three stays to address these findings. All nine original generated drafts remain unedited; exports match the selected version exactly.

The final Golden Well draft proposes a shorter dinner for a new quote and an iris illustration on a private card, respecting the no-fragrance preference. Sam's final draft preserves espresso before the run and banana/yoghurt afterwards. Seven Secrets explores an internal hands-on cooking adaptation before outside research, alongside the couple's dinner and family/individual water activities.

Residual final-draft failures are visible: the Golden Well F heading says Concierge despite a reception handoff; its body correctly assigns reception. The final Seven Secrets draft retains the snacks in the profile but omits a concrete welcome/minibar adaptation that an earlier version proposed, and does not operationalise the flower/scent information beyond limits. This is regression, not a uniformly improving sequence. Drafts need human review, and quality acceptance remains open. The last model output must not be treated as automatically the best version.

## Evidence and technical verification

- [Fixed profiles and first campaign](../fixtures/evaluations/2026-10-06%20discovery%20v5/scenarios.json): full transcripts, original briefs, per-turn facts/coverage, DNA snapshots, timing, usage and frozen runtime hashes.
- [Targeted replays and intermediate briefs](../fixtures/evaluations/2026-10-06%20discovery%20v5%20refinements/run.json): full replay inputs/outputs, six criteria, intermediate drafts and usage.
- [Final briefs](../fixtures/evaluations/2026-10-06%20discovery%20v5%20final%20briefs/run.json): preserved previous versions, selected final exports, usage and runtime hashes.

Eighteen server/data tests, TypeScript/Vite build and source formatting pass. Checks cover model-specific historical accounting, uncertain costs, closure boundaries, source constraints, correction calls, privacy and existing workflows. A complete scripted Playwright browser journey also passed with its own database and no live AI; it is separate from these real application calls. No claim of independent guest/hotel validation, production readiness, email delivery or deployment is made.

## Cost and final state

First campaign: USD 0.160956. Six replays plus the intermediate three briefs: USD 0.033538. Final three briefs: USD 0.009764. Total new conservative application accounting: USD 0.204258. The original USD 5 allowance ends at USD 4.599348 accounted and USD 0.400652 remaining. The one older uncertain Sol call remains retained; there are no new uncertain calls and no budget increase. These figures are local accounting, not the provider invoice.

The local application runs at http://127.0.0.1:4310 with Luna, email disabled and real stays disabled. Conversation, prompts, support code and maintained documentation are English; exact historical sources and guest note wording retain their original language. No generated output was manually rewritten to improve the reported result.
