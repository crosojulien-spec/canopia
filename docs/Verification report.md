# Verification report — 5 October 2026

The local implementation passes compilation, eight server workflow tests and one complete browser journey. This is a working local rehearsal with simulated responses. Live GPT quality, email delivery, remote PostgreSQL and hosting are **not verified**.

## Checks completed

| Evidence | Result and scope |
|---|---|
| `npm run build` | Strict TypeScript check and Vite production bundle pass. |
| `npm test` | Eight tests pass against real in-memory PGlite and Express endpoints; AI is simulated or deliberately made to fail. |
| `npm run test:e2e` | One full journey passes in a fresh Edge context using a separate local database. |
| `npm run format:check` | Source formatting passes. |
| Screenshot inspection | Desktop console, six-hotel collection, guest conversation on desktop/mobile, edited brief, refusal record and mobile console inspected. Mobile overflow found during testing and corrected. |
| Dependency installation audit | npm reported zero known vulnerabilities at installation time; not a security audit or a durable guarantee. |

Server scenarios cover unauthenticated and cross-origin requests; guest token expiry/revocation; omission of internal fields from guest responses; two-hotel isolation; immutable DNA snapshots and attached text in AI inputs; preserved messages and idempotent retries after a provider outage; automatic generation; optimistic edit conflicts; regeneration preserving human corrections; selected-version export; explicit historical provenance; refusal preserving raw collected statements even without successful extraction; late generation after refusal/deletion; disabled email; and restart recovery.

The browser scenario creates the operator, prepares a Sukhothai stay and invitation, opens its guest link, sends three fictional messages, finishes, reviews the automatic simulated draft, edits it, regenerates, reselects the earlier edited version and triggers export. It also verifies that a second window's unsaved edit cannot overwrite a newer saved revision after polling. A Golden Well stay tests reception routing and explicit refusal. The scenario edits hotel DNA and checks narrow-screen overflow.

Export evidence: the browser emitted a download with the expected `.txt` filename; the authenticated HTTP response was checked for the saved correction. Windows denied reading/copying the browser's temporary download file with `EPERM`. Therefore disk-level verification of that particular browser download is not claimed. The API test compares the exported response text with the selected saved version exactly.

## Sources and historical limits

The original GPT instructions, Sukhothai DNA and case 02 conversation/brief were read, along with the refusal scenario and Seven Secrets references and reviews. Historical briefs remain examples with known errors, not golden outputs. Case 02 can be loaded explicitly in the console with an unvalidated-history banner; original generation model/prompt provenance is unknown.

Four public preparation profiles were added for Kings Court, Golden Well, Pavillon de la Reine and Hôtel Amour Nice. Their URLs and checks are recorded in the profiles. Public facilities and packages do not establish permission to adapt them or operational availability. Both historical profiles still need revalidation. No hotel has approved these profiles in this session.

The Replit connector performed a read-only inspection of the old Admin Console. It reported no filtered archive or usable external Git remote. Its Replit-managed AI connection is not a portable API key. A separate local frontend prototype was inspected but did not contain the required backend. Neither old project was modified; the new code is independent.

## Before real use

1. Agree API model and test budget, connect the project key, and evaluate real responses using fictional cases (minimal replies, business trip, refusal, significant allergy, rich interests and several hotel DNAs).
2. Verify the existing mailbox's supported authentication, add the appropriate adapter if SMTP is unavailable, and explicitly authorise one controlled email test.
3. Agree retention, deletion, guest information and link lifetime. Implement the resulting policy before lifting the real-stay block.
4. Select hosting and database, provision the operator securely, test backups/recovery and exercise the remote database adapter before an authorised deployment. The current generation process assumes one persistent Node server.

The current preparation scope does not include direct Word/PDF import, automatic deletion, password reset, multi-operator accounts, production delivery policy, model-based evaluations, remote hosting or a research agent. Text/Markdown extracts, local manual deletion and a single operator are implemented. These limits are not hidden behind the passing simulated tests.
