# Three live anniversary journeys

Recorded on 6 October 2026 after Julien authorised integrating the offline behaviour workshop into the product and testing three travelling couples. Read the [assessment and complete journey summary](../../../docs/Three%20anniversary%20journeys.md).

- `scenarios.json`: fictional profiles and intended areas of observation, written before calls. Hidden profile details were not supplied to the model.
- `01/02/03 conversation.txt`: complete application transcripts, including the fixed opening and unedited live model replies.
- `01/02/03 brief.txt`: actual text returned by the operator export route, byte-for-byte equal to the saved original generation.
- The named couple JSON files: complete operator stay details, including retained facts, final discovery state, messages and original brief.
- `turns/`: application responses and internal state read back after each guest message or completion request. No guest links, session cookies or API keys are included.
- Hotel snapshot JSON files: the hotel context selected for each fictional stay. Profiles are public-source preparation, not hotel approvals.
- `run.json`: baseline commit, active prompt/runtime hashes, unchanged-runtime check, budget readings and actual usage for 22 chat calls plus three briefs.
- `Verification.json`: reproducible structural checks and metrics from `node scripts/verify-anniversary-evidence.mjs` (no API calls).

The live path used authenticated operator HTTP creation, guest-link retrieval, guest-message routes, normal completion, automatic brief generation, operator readback and export. The temporary harness session did not replace the operator account and was revoked afterwards. Browser UI regression was tested separately with scripted AI; do not describe it as a live-model browser journey.

Codex authored the guest replies and reviewed the outputs. These are real application/model results for fictional people, not independent human evaluation or field validation. No retries, regeneration or quality edits were made. The full HTTP harness and its credentials remained in ignored local storage. To repeat the experiment, create new fictional stays through the console, play each profile progressively, finish normally and export the saved draft. Repetition incurs new model usage and must stay within the remaining approved allowance; do not reset the ledger.
