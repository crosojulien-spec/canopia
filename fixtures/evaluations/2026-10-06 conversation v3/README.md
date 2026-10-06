# Three fictional guest conversations — 6 October 2026

See the [test report](../../../docs/Three%20conversation%20tests.md) and [readable role](../../../docs/Conversation%20agent%20role.md).

Three new guests were defined in `scenarios.json` before any paid calls. Codex played them in one or two short sentences after reading the actual model question. The hidden profiles were never supplied to the model. The main run used the application's HTTP guest routes, the existing local database and persistent USD 5 ledger, GPT-6.1 Sol, conversation-v3 and unchanged brief-v2. Baseline Git commit: `f9a6b1bc998f08c2a43f53271735832d06b1b922`.

- [Elena — full conversation](01%20Elena%20conversation.txt) · [generated brief](01%20Elena%20brief.txt)
- [Frederik — full conversation](02%20Frederik%20conversation.txt) · [generated brief](02%20Frederik%20brief.txt)
- [Samir — full conversation](03%20Samir%20conversation.txt) · [generated brief](03%20Samir%20brief.txt)

The corresponding JSON files are complete service exports with no guest tokens, credentials or invitations. `run.json` records prompt hashes, hotel snapshot hashes, usage metadata and before/after budget. `call log.json` and `turn review.json` preserve the actual replies, readiness flags and timings. `verification.json` records deterministic checks. All main-run prompts and successful outputs were left unchanged; no quality retries or brief revisions were used.

The initial API launch was blocked by automatic approval review over potentially private input. Before retrying the same action, `payload verification.json` confirmed fictional reservations, empty emails and notes, no attached documents, and hotel DNA matching the repository preparation profiles. Review then allowed the calls. No rejected call reached the provider, and no protection was bypassed.

After exporting the main run, conversation-v3.1 was created to address early closure, missing destination familiarity and a readiness flag inconsistency. `targeted follow-ups.json` contains five real one-turn prefix replays; `targeted continuations.json` contains two adaptive continuations of those outputs. They used the same real adapter, model and original persistent budget directly, without altering the completed stays or generating new briefs. These are seven targeted checks, not additional full conversations and not an A/B model comparison. All input prefixes and outputs are retained so changes can be reviewed.

Neither v3 nor v3.1 was tried with real travellers. The evaluator also played the guests; three deliberately selected cases do not establish statistical quality, operational hotel approval, or quality equivalence between Sol and a cheaper model.
