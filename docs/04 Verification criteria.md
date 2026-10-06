# Proposed verification criteria

These criteria reflect product decisions. Their execution status and limits are in `Verification report.md`; listing a criterion here does not mean it has passed.

| Journey / risk | Useful verification |
|---|---|
| Correct hotel | Two stays at different hotels retain the correct DNA in conversation, generation and dashboard. |
| Reservation | Known information is reused; the guest is not needlessly asked to repeat it. |
| Invitation | The operator checks the recipient and triggers sending; success or failure is visible; a double click does not send duplicate invitations. |
| Access privacy | A guest can access only their stay; the operator console is protected. |
| Flexible conversation | A relevant interest leads to follow-up; a short answer or an absent topic does not force an exhaustive questionnaire. |
| Personal discovery — central criterion | From one- or two-sentence replies, the agent discovers intentions, tastes, habits or personal details, as illustrated by the Sukhothai cases. Distinguish information elicited by follow-up from spontaneous guest additions. |
| Personalisation and upsell potential | Discovery gives the hotel concrete preparation, adaptation, personal-touch and relevant paid-service possibilities. Guests need not design these themselves; each proposal retains its rationale and hotel decision. |
| Conversation role | DNA guides follow-up without turning the exchange into a presentation of rules, menus or prices. Correctly checking opening hours does not validate discovery. |
| Interaction style | The brief does not infer discretion or limited contact solely from short replies; the desired interaction should be understood from the traveller. |
| Capability fit | The bot does not develop a known-unavailable option and can explore a realistic adaptation of an existing capability. |
| Automatic generation | Normal completion triggers a draft; an AI error remains visible and does not present the brief as ready. |
| Fidelity | Explicit preferences and important transcript constraints survive; unknowns remain identifiable. |
| Creativity | A suggestion may combine capabilities without claiming the result already exists as a marketed service. |
| Concierge/reception | Proposals reach the right role; a known absence of concierge routes them to reception. |
| External research in the core | The brief supplies a research task when an external activity must be found; no provider-search web call is triggered in this journey. |
| Refusal/withdrawal | The branch follows Julien's approved decision; no personalised experience is generated against an expressed refusal. |
| Human work | Draft edits survive viewing/export operations; regeneration does not silently erase them. |
| Export | Copied/downloaded text matches the chosen version, is readable and contains no system artifacts or technical references. |
| Language | Guest dialogue, briefs and maintained repository content are in English. Exact guest-provided note wording in another language remains faithful to the source; clarify a real conflict if one arises. |
| Demonstration | A complete fictional case is reproducible and an already-generated example is available as fallback. |

## Comparison with historical material

The corpus contains known errors. Assess the new output's fidelity and usefulness; do not require it to reproduce every old proposal.

Earlier Replit checks passed 18 server assertions with simulated services and found eight TypeScript errors. Those results do not validate this application or prove its current AI, email or external-service calls work.

## Handoff criterion

Present an actually verified journey, the prompt and DNA versions used, launch commands, relevant checks performed and remaining limits. Distinguish a usable demonstration from operational validation with a real hotel. Update documentation, commit and push the authorised changes after verification, as Julien confirmed on 6 October.


## Approved discovery replacement: quality acceptance

A rich cooperating guest should yield purpose and individual context plus concrete everyday preparation material: food and drink tastes, snacks, comfort/home habits, routines, meaningful interests, useful scent/flower preferences and staff interaction. Assess discovery of available information, not only correct retention if the guest happens to volunteer it. A missed valuable lead is a quality failure even when JSON and export checks pass.

The order is adaptive. Unknown, indifferent, refused and unexplored are distinct. Do not require every detail from every guest. Explicit time pressure, refusal or completion must allow ending without a full profile, and a short factual answer alone must not trigger that interpretation. Evaluate humour, specific follow-ups, lack of repetitive paraphrasing, and individual attribution.

The resulting brief must turn knowledge into concrete existing-process adaptations and relevant optional paid compositions, with guest basis, hotel capability, owner and material checks. Assess it against the historical Seven Secrets usefulness, not a fixed word count or offer quota. Guests never have to design the whole attention. No guarantee, fabricated capability, hidden-profile leak or unsupported preference is acceptable.

Run fixed fictional profiles through the real application; preserve full transcripts and generated exports, costs, configuration and failed outcomes. Separate structural/unit/browser tests from authored live roleplays and independent guest/hotel validation. Model portability requires re-evaluation, not simply accepting a new model identifier.
