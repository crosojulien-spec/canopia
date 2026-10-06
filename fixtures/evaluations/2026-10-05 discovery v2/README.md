# Six live discovery conversations — 5 October 2026

See the [test report](../../../docs/Six%20discovery%20tests.md) for findings and limitations.

These are fictional guests played by Codex through the local application's HTTP guest routes with live GPT-6.1 Sol responses and briefs. They are not real hotel stays, human-user research or proof that proposed services were accepted or delivered.

`scenarios.json` was written before the live run. Only ordinary reservation data and each short adaptive guest reply were provided to the model. Hidden profile details were not passed to the app. Additional small details introduced naturally while playing a guest, such as the card game being rummy, are explicit in the transcripts; the profile is a roleplay guide, not a claim of independently known facts.

Each numbered case has a full service export, a readable conversation and its unchanged generated brief. No email invitations were created. Local guest links, credentials and database files are excluded. `run.json` records model, prompt hashes, hotel snapshot hashes and before/after budget. `turn review.json` records message-level measurements; `call log.json` also preserves the failed call and explicit retry. On a failed call, its last-message `reply` field can be the saved guest message, and must not be counted as an assistant answer. The readable transcript contains only the successful saved exchange.

`verification.json` reports deterministic checks: 52 guest replies of 4–23 words and one or two sentences, six completed stays, six unedited A–F OpenAI briefs, unchanged prompt hashes and matching source quotes for retained structured facts. Quote matching alone does not certify the meaning or completeness of a paraphrase.

The first chat attempt for Camille's final message timed out. One explicit retry succeeded without duplicating that message. Its uncertain maximum reservation remains accounted for. No successful reply or brief was regenerated to improve the result, and prompts were not changed during or after the six conversations.

The evaluator also played the guests. One run per hotel gives diagnostic examples, not an independent quality score, statistical comparison with v1 or production acceptance.
