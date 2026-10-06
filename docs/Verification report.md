# Verification report — updated 6 October 2026

The local implementation passes compilation, twelve server/data tests and one complete simulated browser journey. The live GPT-6.1 Sol integration has initial connection checks, a ten-case baseline and a new six-hotel discovery campaign within Julien's authorised USD 5 trial. The latter produces useful personalisation material but still misses meaningful cues and uses repetitive conversation patterns; **product quality is not accepted**. Email delivery, remote PostgreSQL and hosting remain **unverified**.

## Checks completed

| Evidence | Result and scope |
|---|---|
| `npm run build` | Strict TypeScript check and Vite production bundle pass. |
| `npm test` | Twelve tests pass against real in-memory PGlite and Express endpoints, including research refresh protection and persistent AI-budget enforcement; AI is simulated or deliberately made to fail. |
| `npm run test:e2e` | One full journey passes in a fresh Edge context using a separate local database. |
| `npm run format:check` | Source formatting passes. |
| Screenshot inspection | Desktop console, six-hotel collection, guest conversation on desktop/mobile, edited brief, refusal record and mobile console inspected. Mobile overflow found during testing and corrected. |
| Dependency installation audit | npm reported zero known vulnerabilities at installation time; not a security audit or a durable guarantee. |

Server scenarios cover unauthenticated and cross-origin requests; guest token expiry/revocation; omission of internal fields from guest responses; two-hotel isolation; immutable DNA snapshots and attached text in AI inputs; preserved messages and idempotent retries after a provider outage; automatic generation; optimistic edit conflicts; regeneration preserving human corrections; selected-version export; explicit historical provenance; refusal preserving raw collected statements even without successful extraction; late generation after refusal/deletion; disabled email; and restart recovery.

The browser scenario creates the operator, prepares a Sukhothai stay and invitation, opens its guest link, sends three fictional messages, finishes, reviews the automatic simulated draft, edits it, regenerates, reselects the earlier edited version and triggers export. It also verifies that a second window's unsaved edit cannot overwrite a newer saved revision after polling. A Golden Well stay tests reception routing and explicit refusal. The scenario edits hotel DNA and checks narrow-screen overflow.

Export evidence: the browser emitted a download with the expected `.txt` filename; the authenticated HTTP response was checked for the saved correction. Windows denied reading/copying the browser's temporary download file with `EPERM`. Therefore disk-level verification of that particular browser download is not claimed. The API test compares the exported response text with the selected saved version exactly.

## Sources and historical limits

The original GPT instructions, Sukhothai DNA and case 02 conversation/brief were read, along with the refusal scenario and Seven Secrets references and reviews. Historical briefs remain examples with known errors, not golden outputs. Case 02 can be loaded explicitly in the console with an unvalidated-history banner; original generation model/prompt provenance is unknown.

All six profiles were enriched through public research, including a fresh review of Seven Secrets and Sukhothai. The profiles share eleven sections and contain 88 source entries. Official pages and linked menus/brochures provide prices, ingredients, spaces and operational conditions; dated reporting and OTA leads are explicitly separated. Missing menus, ambiguous charges, seasonal closures and conflicting rules remain visible. The historical source texts remain unchanged. No hotel has approved these profiles in this session.

The DNA reader was checked in the browser: expandable sections, composition tables, source links and raw-text editing. The Golden Well review screenshot was visually inspected. The migration test verifies that changed text, attachments, operator review and hotel confirmation prevent automatic replacement; earlier versions and existing stay snapshots remain intact. The local rehearsal's six unchanged preparation profiles were updated to version 2. A before/after hash confirmed that existing stay snapshots did not change. New stays use the enriched active profiles; the older stays deliberately retain their earlier DNA. The subsequent live GPT checks below use these enriched profiles.

The Replit connector performed a read-only inspection of the old Admin Console. It reported no filtered archive or usable external Git remote. Its Replit-managed AI connection is not a portable API key. A separate local frontend prototype was inspected but did not contain the required backend. Neither old project was modified; the new code is independent.

## Live GPT trial

On 5 October 2026, two fictional stays were tested directly through the application service and its real OpenAI adapter, using the same local database as the console. These are live service tests, not a claim that the browser automation used GPT.

- **Maya Fictional — API check, Hôtel Amour Nice, DNA v2:** two guest turns took about 12 and 13 seconds. The model retained the anniversary, no alcohol, severe peanut allergy, preference for discretion, 7 pm arrival and rejection of flowers, decorations and surprises. Normal completion produced an English A–F draft visible in the console. The draft distinguished guest wishes from hotel capabilities, routed experience support to reception, and required staff confirmation of allergy handling, stock and charges. It identified the documented fresh-juice cutoff versus the evening arrival and a linked menu's venue ambiguity. These are proposed adaptations, not hotel-approved arrangements.
- **Ben Fictional — refusal check, Golden Well, DNA v2:** one live model turn took about 6 seconds and recognised withdrawal of personalisation. The service stopped the conversation and generated its deterministic minimal A–F record, with the collected statement and a prominent prohibition on using it for personalisation. No experience suggestions were added.

Three chat generations and one normal brief accounted for **USD 0.082086** of the local **USD 5** conservative allowance, leaving **USD 4.917914** immediately after these checks. All four returned usage; no uncertain calls remained. This is application accounting, not the provider invoice, and subsequent user trials change the balance. No email was sent and no real stay was created.

The added budget tests cover concurrent reservations, persistent limits, idempotent settlement, uncertain network outcomes, failure before dispatch, disabled automatic retries, disallowed models and pausing after unexpected usage. See [AI trial and budget](AI%20trial%20and%20budget.md). The real sample is deliberately small: it does not establish quality across all six hotels, short or ambiguous answers, prolonged conversations or prompt-injection attempts. The generated normal brief also needs editorial review for length and repetition.

## Before real use

A subsequent ten-case live baseline covers all six hotels using 41 adaptive guest replies of one or two sentences, 3–20 words each. Nine GPT briefs and one refusal record were produced. This establishes broader integration coverage but **does not validate conversation quality**: shallow follow-ups, unsupported interaction-style inference and disproportionately long briefs remain. Read [Ten short conversations review](Ten%20short%20conversations%20review.md) and its unedited transcripts before treating any case as a successful product demonstration. Prompts and app code were unchanged throughout that baseline.

Julien then identified a more fundamental evaluation error: scenarios and judgments overvalued operational request handling. The product's core is rich guest discovery, using the historical Sukhothai tests as the design baseline, to support hotel-decided preparation, adaptation, personal touches and relevant upsell. The review and project instructions reflect this correction. The ten-case corpus is retained as an imperfect baseline, not a product acceptance benchmark.

The prompts used for that campaign were `conversation-v2` and `brief-v2`, with a revised fixed introduction. Six fresh fictional profiles tested these prompts unchanged: families in Nice, Bangkok and Prague, friends reuniting at Golden Well, work plus a personal day in Paris, and a honeymoon in Lombok. All 52 guest replies were one or two sentences, 4–23 words. Six real A–F briefs were generated, 529–575 words each. Read the [six-case discovery report](Six%20discovery%20tests.md) for the actual discoveries, missed cues and resulting hotel proposals, with complete unedited transcripts and briefs.

This campaign accounts for USD 1.481970, including a retained uncertain reservation following one 60.6-second chat timeout. Explicit retry succeeded without a duplicate guest message. Median successful chat latency was 10 seconds; the maximum was 20.3 seconds. The ledger after export was USD 2.556417 used, USD 2.443583 remaining, one uncertain call and no budget block. Six local HTTP guest journeys completed; no emails or real stays were created. Build, twelve server/data tests and source formatting passed after the prompt integration changes. The earlier simulated browser journey was not rerun for this campaign. A single agent played and assessed the fictional guests; this is not independent evaluation or hotel validation.

On 6 October, conversation-v3 was exercised through three new fictional HTTP guest journeys: a family birthday in Bangkok, a couple exploring Nice and a solo work trip in Paris. All 24 live chat replies and three unedited brief-v2 drafts completed without failure. Each guest reply contained one or two sentences, 14–22 words. Median chat latency was 11.6 seconds, maximum 22.7. The main run accounted for USD 0.732144. Personal-note initiative, individual tastes and concrete business routines emerged, while early closure and a late-question readiness inconsistency remained.

Conversation-v3.1 was then activated. Five direct-provider prefix replays and two adaptive continuations checked destination familiarity, memory follow-up, work timing, a sleep question, the duvet readiness flag, the birthday-note initiative and ordinary completion. All seven returned the intended behaviour on those checks; the original three conversations were not replaced or rerun end to end. The additional accounting was USD 0.178908. The ledger ended at USD 3.467469 accounted and USD 1.532531 remaining, with the prior one uncertain call retained and no new uncertain calls. The full [three-case report](Three%20conversation%20tests.md) distinguishes observations from remaining limits. Twelve automated tests, TypeScript, the client build and the changed source file's formatting passed. Browser UI checks were not rerun for this prompt-only change.

1. Have Julien and users assess the revised role's tone and discovery depth, and compare a cheaper model on the same cases before claiming economic optimality. Ambiguous refusals, long conversations and prompt-injection attempts remain untested in this latest live sample. The initial model, key and USD 5 budget are already authorised and connected; any budget extension requires separate approval.
2. Verify the existing mailbox's supported authentication, add the appropriate adapter if SMTP is unavailable, and explicitly authorise one controlled email test.
3. Agree retention, deletion, guest information and link lifetime. Implement the resulting policy before lifting the real-stay block.
4. Select hosting and database, provision the operator securely, test backups/recovery and exercise the remote database adapter before an authorised deployment. The current generation process assumes one persistent Node server.

The current preparation scope does not include direct Word/PDF import, automatic deletion, password reset, multi-operator accounts, production delivery policy, model-based evaluations, remote hosting or a research agent. Text/Markdown extracts, local manual deletion and a single operator are implemented. These limits are not hidden behind the passing simulated tests.

## Repository language and documentation — 6 October 2026

Maintained documentation and navigation were translated into English, nine documentation files were renamed, and the archived audit received an English filename without changing its contents. The start-here instructions and open questions were updated to reflect the implemented application and active conversation-v3.1. The working rules now record Julien's explicit instruction to update relevant documentation, commit and push after completed, verified work.

The language migration preserved the hashes of 154 application, prompt, DNA and original evidence files, including the renamed audit. All 74 local Markdown links and 38 source-index destinations resolved, 45 JSON files parsed, and the reported test metrics were retained. Original French source documents, exact quotations and historical test outputs remain labelled evidence rather than silently translated records. No application behaviour changed and no paid AI call was made for this documentation work. The preceding live conversation tests and their limitations remain documented above.


## Product-integrated anniversary discovery — 6 October 2026

The active runtime now selects conversation-v4 and brief-v3 and persists a compact discovery map alongside source-linked facts. The map is supplied to subsequent conversation/brief calls but withheld from the guest API. Its next-move category drives suggested readiness; ordinary completion, a declined topic and withdrawal remain separate. Legacy stays without the optional map remain compatible.

Three live HTTP journeys, covering a meeting anniversary in Nice, wedding anniversary in Bangkok and civil-partnership anniversary plus work in Paris, completed from operator creation through exported service recommendations. There were 22 live replies, three generated briefs and no failed, retried or regenerated call. Each export exactly matches the saved generation. The complete [anniversary report](Three%20anniversary%20journeys.md) records actual discoveries, proposals and remaining weaknesses. Authenticated HTTP checks and a separate simulated browser regression must not be confused with live-model browser testing.

Sixteen automated server/data checks passed, including working-state persistence and replacement, prior-state input to the real adapter under a fake HTTP transport, source-reference filtering, ordinary close versus late clarification/withdrawal, legacy providers and guest API privacy. TypeScript, Vite build, source formatting and the simulated browser journey also passed. The evidence verifier checks all 25 settled generations, transcripts, per-turn source references, hotel versions and unedited exports without further API usage. These are structural/integration checks, not an independent score of hospitality quality.

Conservative trial usage increased by USD 0.927621, leaving USD 0.604910. One older uncertain call remains retained. There were no changes to the model, cap, real-stay restriction, email settings or deployment. All original campaign outputs are preserved; no prompt correction was applied midway to conceal a weak response. Repetitive paraphrasing and uneven depth remain visible limitations.
