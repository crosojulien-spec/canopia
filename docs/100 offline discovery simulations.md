# One hundred offline discovery simulations — 6 October 2026

**Completed: 100 authored simulations in ten sequential batches, with a review and a behavioural revision after every ten cases.** The result is a more explicit candidate for discovery behaviour, supported by readable examples and retained mistakes. It has not been installed in Canopia or validated against the application's model.

Julien requested this workshop after discussing the old Replit prompt and control code, the historical Sukhothai tests and the recent conversation-v3/v3.1 trials. The requested method was simulation in this conversation without triggering Canopia API calls. Runtime code, active prompts, model settings and databases were left unchanged. Documentation and evidence are saved in English under the existing private-repository workflow.

## What was actually done

The same Codex assistant authored the fictional travellers, simulated the host, and reviewed the result. The then-active v3.1 role was the initial writing reference. Each subsequent batch used the cumulative workshop revision from the preceding review. This is an editorial design exercise, not one hundred independent model experiments, not a blind test, and not training of model weights.

There are **98 exchanges from the guest's opening after the assumed welcome, plus two continuation cases**: repetition repair (078) and withdrawal after prior participation (080). All exchanges end. Together they contain **686 guest messages and 686 host messages**, between one and ten guest turns per case. Some short endings are intentionally appropriate to the guest's stated needs; the count is not a target length.

The scenario roster was written before the first batch. It mixes occasions, city discovery, work, rest, solo travel, couples, families, friends, groups, short and long replies, privacy questions, corrections and refusal. Each case includes a possible internal handoff and an editorial finding. Capabilities and feasibility of real hotels were not tested. No application brief was generated.

Read [all evidence and the method](../fixtures/evaluations/2026-10-06%20offline%20discovery%20workshop/README.md), or start with [the final ten exchanges](../fixtures/evaluations/2026-10-06%20offline%20discovery%20workshop/Batch%2010.md).

## Ten revisions

| After cases | Revision applied to the workshop                                                                       | Basis in the written cases                                                                               |
| ----------- | ------------------------------------------------------------------------------------------------------ | -------------------------------------------------------------------------------------------------------- |
| 001–010     | Track meaningful open threads; verify relevant context and room assumptions.                           | 003 closes before evening timing; 007 assumes shared accommodation.                                      |
| 011–020     | Distinguish sufficient detail, indifference, unknown information and refusal.                          | 016 keeps probing comfort; 017 seeks a named artist unnecessarily.                                       |
| 021–030     | Separate interests, possessions, wishes and arrangements; reduce evaluative commentary.                | Music is not a concert request (022); a book brought is not a book request (027).                        |
| 031–040     | Include companions without a roll call; make humour responsive rather than formulaic.                  | Group questioning burden in 035; rehearsed-joke risk in 039–040.                                         |
| 041–050     | Preserve person, domain, condition and certainty; accept a sentiment for a note.                       | Orchid liking versus no flowers (042); scent memory versus room fragrance (043); uncertainty in 046/050. |
| 051–060     | Choose among valuable leads rather than repeating an interests/food/sleep sequence.                    | Adult drawing remains shallow in 057; several conversations follow similar transitions.                  |
| 061–070     | Separate city/hotel/relationship familiarity and plan/booking/request status.                          | 067 leaves city familiarity unknown; 068 leaves dinner status uncertain.                                 |
| 071–080     | Check attribution before speaking and explicitly repair a mistaken assumption.                         | 075 invents a second traveller and fails to acknowledge the correction.                                  |
| 081–090     | Distinguish ordinary ending, skipping discovery and withdrawal; control late clarification.            | Time limit in 083, final correction in 086, skip request in 090.                                         |
| 091–100     | Check mixed purposes before closure; remove duplicate closing invitations and redundant confirmations. | Untouched city dimension in 094, duplicate close in 097, unnecessary confirmation in 098.                |

Revisions 01–09 were used as guidance in subsequent written batches. **Revision 10 was made after case 100 and has no subsequent simulation.** The [consolidated candidate](../fixtures/evaluations/2026-10-06%20offline%20discovery%20workshop/Discovery%20behavior%20candidate.md) includes this final, untested revision. It is a design reference, not a complete replacement for the application's output schema and policy instructions.

## Most useful design outcomes

The host needs a compact working understanding of what is known, what is still promising, what is already sufficient and what the guest does not want to discuss. It must use this to choose a question, without displaying a checklist or trying to collect every preference. The application does not yet implement the proposed state tracking.

Personal specificity is useful when it changes the team's understanding. Toastosaurus and the family's shared drawing in 091 can support a private birthday reference and a suitable day rhythm. Samir's evening availability in 093 makes a dinner/music research task more workable. A guest's exact flower species or favourite artist is not always necessary.

Facts need their context. A quiet room can coexist with sociable dining (064/096); separate blankets do not imply separate beds; a scent memory does not invite perfume (043); one person's restriction is not the group's (100). A wish is not a confirmed service. Guests may give useful material without wanting an activity, an upsell or a surprise.

Closure is a judgement about the value and effort of another question, bounded by the guest's freedom to finish. It must not depend on message length, a quota of interests or a completed sensory checklist. A complete final addition or correction should not restart an interview.

## Limitations that remain

These texts do not establish an improvement rate. The same author knew the scenarios and wrote both sides; later cases were not blind, the batches are not statistically comparable, and no independent human judged them. Some repetitions in interests and wording remain, and several guests are more cooperative than real travellers may be. Only English was explored. Hotel-specific DNA, real latency, application state transitions, structured fact extraction and final brief quality were not exercised.

Errors remain visible: the companion assumption in 075, underexplored mixed purpose in 094, repeated closure in 097 and redundant confirmation in 098. Their presence is useful evidence about the candidate's limits. A larger number of written examples does not demonstrate reliable model compliance.

The next decision would be which behaviour changes to adopt. If implementation is later authorised, validate the adopted version with complete application conversations, new scenarios and human review. This report does not authorise or run that next stage.

## Verification and cost boundary

Local structural checks verified exactly 100 sequential unique case IDs, ten cases per batch, alternating guest/host messages, ten review files, the baseline plus ten revision files, and 100 distinct transcript fingerprints. These checks concern completeness and integrity, not hospitality quality. All 26 files under the runtime source/prompt directories matched their pre-workshop SHA-256 values. The baseline prompt copy also matches the active prompt byte for byte.

There were **zero Canopia model API calls** and no application-model spending in this workshop. Work was authored in the current Codex session, which is not a claim of free or unlimited Codex usage. No runtime tests or builds were rerun for these documentation-only additions. No email, deployment, real stay or new external account was involved.


Subsequent implementation: Julien later authorised integrating this design work into the product and running three live anniversary journeys. The workshop files remain unchanged as evidence of the offline stage. Current runtime changes and real model outputs are documented separately in [Three anniversary journeys](Three%20anniversary%20journeys.md).
