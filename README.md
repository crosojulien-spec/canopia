# Canopia — local application

Status: 8 October 2026. Julien authorised construction on 5 October.

This repository contains the local application, approved product decisions, prompts, six enriched hotel DNA profiles and historical examples. The console, guest conversation, briefs and maintained documentation are in English. Julien authorised initial GPT-6.1 Sol trials on fictional stays within a persistent application-controlled USD 5 allowance, then raised its total ceiling to USD 50 on 8 October 2026 while preserving all accounted costs. No real email or deployment has taken place. The six DNAs were researched on 5 October, keeping menus, prices, capabilities, proposals and limits distinct; they are not hotel-approved operational profiles. The [review guide](data/dna/Review%20guide.md) explains their structure, gaps and versioned import, which protects operator edits and existing stays.

## Run locally

Requires Node.js 22.12+; this installation used 24.18. From this folder:

```powershell
npm ci
npm run dev
```

Open **http://127.0.0.1:4310**. On a new installation, create your operator account with your own password; no account is preconfigured. The default database is `.local/postgres`, with a local key in `.local/installation.key`. Keep the database and its installation key together when moving an installation. They are excluded from Git. Julien's existing authorised trial uses `.local/rehearsal` and its existing account; preserve that database and its ledger.

AI and email are disabled by default in the configuration template. Julien's ignored local configuration enables the authorised GPT trial; the [AI trial guide](docs/AI%20trial%20and%20budget.md) explains the cap and persistent accounting. For fixed scripted replies without external calls, use a separate local data directory:

```powershell
$env:CANOPIA_AI_MODE='simulation'
$env:CANOPIA_DATA_DIR='.local/scripted-demo'
npm run dev
```

`npm run demo` also forces scripted mode and disables external connections, using the directory configured in `scripts/demo.ts`. Simulated replies are fixed and clearly labelled. They do not establish GPT conversation quality or proposal feasibility. Close the PowerShell session to discard its temporary settings. Never run two servers against the same data directory or create another real-AI ledger to refill the trial allowance.

Git was initialised here on 5 October. The confirmed private repository is [crosojulien-spec/canopia](https://github.com/crosojulien-spec/canopia), on `main`. Initial commit `a7a9ed4` preserves the original preparation package. Hosting remains undecided. Do not assume connectors or chat history will carry over to another session.

The repository contains application code, documentation, prompts, DNA and reviewed examples. `.gitignore` excludes secrets, local databases, logs and unscreened exports. `FILE_MANIFEST.json` inventories maintained repository files, excluding itself and Git metadata.

## Features and verification

Password-protected console; versioned DNA with text/Markdown documents; stay creation; random, expiring, revocable guest links; editable invitations; conversation; automatic brief generation; human review; separate versions; and `.txt` export. Withdrawal creates a minimal record explicitly prohibiting personalisation. Saved edits are protected against concurrent writes.

React/TypeScript/Vite provide the interface; Express runs the server; PGlite provides local PostgreSQL. `DATABASE_URL` enables a later PostgreSQL connection, which has not been tested remotely. The old Replit application remains intact. The research agent is not built; only its integration contract exists.

```powershell
npm run build
npm test
npm run test:e2e
```

Browser tests use an isolated database on port 4311 and a test Edge/Chrome profile, without opening the user's personal profile. Screenshots are in `.local/screenshots`. Initial GPT tests checked dialogue/brief generation for Hôtel Amour Nice and withdrawal for Golden Well. Later short-conversation campaigns covered all six hotels; their results and limits follow below. SMTP has not been tested live. Real stays remain blocked until retention and guest-information rules are agreed and implemented.

See [Connections and operation](docs/Connections%20and%20operation.md) for required access and [Verification report](docs/Verification%20report.md) for the checks performed. `.env.example` contains configuration names only. Never copy real keys into source code or chat.

The [ten short conversations review](docs/Ten%20short%20conversations%20review.md) covers six hotels, 41 one- or two-sentence guest replies and ten original records. It identifies limited depth, mechanical tone and oversized briefs. Technical operation is not validation of hospitality quality.

The [six discovery tests](docs/Six%20discovery%20tests.md) evaluated the then-active `conversation-v2` and `brief-v2`, based on the Sukhothai examples and Julien's corrected product definition. Three family cases in Nice, Bangkok and Prague were followed by friends reuniting, work plus a personal day, and a honeymoon. All 52 guest replies contained 4–23 words; six real briefs remain unedited. Useful preparation and service proposals emerged, but important cues were missed and the tone remained repetitive. This is not product or field validation.

On 6 October, the [conversation agent role](docs/Conversation%20agent%20role.md) was rewritten from Julien's clarifications and test archive. The [three new conversation tests](docs/Three%20conversation%20tests.md) preserve 24 guest replies and three real briefs, followed by seven targeted checks of refinements. Those checks used `conversation-v3.1` and `brief-v2`, with GPT-6.1 Sol. Conservative accounting for that campaign was USD 0.911052, leaving USD 1.532531 of the initial allowance at the end of the checks. Tone and discovery depth still require user assessment; no qualitative comparison with Luna or Astra has been made.

The role document is a readable explanation. The actual model instructions are in [conversation-v5.1.txt](prompts/conversation-v5.1.txt), selected by `server/ai.ts`; each call also includes the reservation, hotel DNA, transcript, retained facts and previous working discovery state. The active brief prompt is `brief-v4.2`; the pinned model is GPT-6 Luna. The runtime also sends the explicit discovery output contract and illustrative moves, and checks declared coverage before host-led closure. See [Discovery v5 integration](docs/Discovery%20v5%20integration.md) for current evaluation evidence.

The [100 offline discovery simulations](docs/100%20offline%20discovery%20simulations.md) are a separate design workshop requested on 6 October: ten batches of self-authored roleplays, ten reviews and ten cumulative behaviour revisions, with no Canopia API calls. Their original outputs remain design evidence, not model-performance or field validation. Julien subsequently authorised their integration into the product and three real anniversary journeys. See [the implementation and end-to-end report](docs/Three%20anniversary%20journeys.md) for the historical results and limits; Julien subsequently rejected their qualitative level.

## Reading order

| File | Purpose |
|---|---|
| `AGENTS.md` | Working rules, unknowns and documentation/Git workflow |
| `docs/01 Product decisions.md` | Authoritative product scope |
| `docs/02 Reconstruction plan.md` | Proposed work sequence and subsequent implementation context |
| `docs/03 Open questions.md` | Remaining decisions and their impact |
| `docs/04 Verification criteria.md` | How to assess the rebuilt product |
| `docs/05 Hackathon extension.md` | Component reserved for the event |
| `data/hotel_selection.json` | Six selected hotels and profile status |
| `prompts/legacy/hotel_ops_brief_v1.txt` | Complete instructions copied from Julien's historical GPT |
| `references/knowledge/` | Extracted historical hotel profiles |
| `fixtures/historical/` | Ten Sukhothai conversations, eleven briefs and Seven Secrets material |
| `sources/source_index.json` | Origin and status of extracted sources |
| `references/audit/` | Earlier 17-page audit retained as historical evidence |

## Authority and updates

Julien's current instructions take precedence. Within the repository, `docs/01 Product decisions.md` takes precedence over old prompts, test briefs and the audit. A historical document alone does not establish that a feature is active or correct.

DNA is rich context for understanding and composing service. A text brief is generated automatically on normal completion; dialogue quality with the chosen model still requires evaluation. Final formatting and delivery remain manual. Additional research is reserved for the hackathon.

Julien confirmed on 6 October that relevant documentation should be updated as work changes the product, followed by a commit and push to this existing private repository once the work is complete and verified. Report local, committed and pushed states accurately. This does not authorise deployment, public sharing or committing unrelated/private runtime files.

## Included data and language

Maintained documentation, filenames, code comments and commit messages are in English. Communication with Julien remains in French. Proper names, exact source quotations and original test evidence retain their original language. The French historical audit, historical source extracts and old translated brief are labelled archives; translating them in place would change the evidence. English navigation and source descriptions explain their status.

Historical texts are document extractions, not the original Word/PDF files, except for the explicitly retained audit document. Conversations are test scenarios, not evidence of real guest stays delivered. Briefs support review and fidelity checks; their recommendations are not automatically approved.

This material is for Julien's private work and preparation. Explicitly select anything to share with the hackathon team; the repository does not grant public publication permission.
