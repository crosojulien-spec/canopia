# Verification report — 5 October 2026

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

A subsequent ten-case live baseline covers all six hotels using 41 adaptive guest replies of one or two sentences, 3–20 words each. Nine GPT briefs and one refusal record were produced. This establishes broader integration coverage but **does not validate conversation quality**: shallow follow-ups, unsupported interaction-style inference and disproportionately long briefs remain. Read [Revue de dix conversations courtes](Revue%20de%20dix%20conversations%20courtes.md) and its unedited transcripts before treating any case as a successful product demonstration. Prompts and app code were unchanged throughout that baseline.

Julien then identified a more fundamental evaluation error: scenarios and judgments overvalued operational request handling. The product's core is rich guest discovery, using the historical Sukhothai tests as the design baseline, to support hotel-decided preparation, adaptation, personal touches and relevant upsell. The review and project instructions reflect this correction. The ten-case corpus is retained as an imperfect baseline, not a product acceptance benchmark.

The active prompts are now `conversation-v2` and `brief-v2`, with a revised fixed introduction. Six fresh fictional profiles tested these prompts unchanged: families in Nice, Bangkok and Prague, friends reuniting at Golden Well, work plus a personal day in Paris, and a honeymoon in Lombok. All 52 guest replies were one or two sentences, 4–23 words. Six real A–F briefs were generated, 529–575 words each. Read the [six-case discovery report](Rapport%20des%20six%20tests%20de%20découverte.md) for the actual discoveries, missed cues and resulting hotel proposals, with complete unedited transcripts and briefs.

This campaign accounts for USD 1.481970, including a retained uncertain reservation following one 60.6-second chat timeout. Explicit retry succeeded without a duplicate guest message. Median successful chat latency was 10 seconds; the maximum was 20.3 seconds. The ledger after export was USD 2.556417 used, USD 2.443583 remaining, one uncertain call and no budget block. Six local HTTP guest journeys completed; no emails or real stays were created. Build, twelve server/data tests and source formatting passed after the prompt integration changes. The earlier simulated browser journey was not rerun for this campaign. A single agent played and assessed the fictional guests; this is not independent evaluation or hotel validation.

1. Address the six-case report's remaining discovery and tone issues: missed personal cues, mechanical transitions into sleep/staff-contact/closure, uneven companion discovery and brief precision. No post-campaign prompt corrections have been applied. Ambiguous refusals, long conversations and prompt-injection attempts remain untested in the live sample; v2 has no new live refusal test. The initial model, key and USD 5 budget are already authorised and connected; any budget extension requires separate approval.
2. Verify the existing mailbox's supported authentication, add the appropriate adapter if SMTP is unavailable, and explicitly authorise one controlled email test.
3. Agree retention, deletion, guest information and link lifetime. Implement the resulting policy before lifting the real-stay block.
4. Select hosting and database, provision the operator securely, test backups/recovery and exercise the remote database adapter before an authorised deployment. The current generation process assumes one persistent Node server.

The current preparation scope does not include direct Word/PDF import, automatic deletion, password reset, multi-operator accounts, production delivery policy, model-based evaluations, remote hosting or a research agent. Text/Markdown extracts, local manual deletion and a single operator are implemented. These limits are not hidden behind the passing simulated tests.
