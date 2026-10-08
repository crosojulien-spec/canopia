# Current model and allowance

Following Julien's explicit cheaper-Canopia-model request and approval of the replacement role, the local application selects GPT-6 Luna. Julien raised the total local ceiling to USD 50 on 8 October 2026. The older uncertain call and all accounted costs are preserved. New Sol calls are rejected rather than used as a silent fallback. The new live campaign is recorded in [Discovery v5 integration](Discovery%20v5%20integration.md).

Official [Luna documentation](https://developers.openai.com/api/docs/models/gpt-6-luna) confirms Responses, structured output, medium reasoning and Standard text rates of USD 0.10/0.50 per million input/output tokens. Token unit rates are 20 times lower than Sol's published USD 2/10; actual journey costs depend on token counts, reasoning and corrective calls. This does not establish equivalent quality or a comparison against all models.

## Authorised ceiling change — 8 October 2026

Julien requested a total USD 50 ceiling for this existing installation, replacing USD 5. The schema and runtime now accept a maximum of USD 50. The schema migration only widens the constraint; it does not raise existing stored limits. The authorised local update changes the persistent limit and ignored configuration together, retaining every call and any safety block. Ordinary restarts still cannot replenish or increase the allowance. This is not an OpenAI billing setting or a separate USD 50 allowance for each copied installation.

The local update was verified on 8 October: USD 50.000000 limit, USD 4.599348 accounted, USD 45.400652 remaining, and the same one uncertain call. All 228 ledger rows retained the same SHA-256 fingerprint before and after the update and database reopening. A local backup was taken before migration. Build, formatting and all 19 automated tests passed, including migration of the old USD 5 constraint, preservation across restarts, the maximum USD 50 bound and existing safety blocks. No live generation or provider billing change was made for this update.

# Initial GPT trial — historical authorisation of 6 October 2026

Julien authorised GPT-6.1 Sol and up to USD 5 for the first fictional local conversation/brief trials. Email, real stays and deployment remain disabled. The API key is in the ignored local .env file and is never returned to the browser or written to source control.

## Using the trial

Run the regular server with npm start (or npm run dev), not npm run demo: the latter deliberately forces scripted responses. Keep CANOPIA_DATA_DIR=.local/rehearsal to retain the current local operator account, six active DNA profiles and test stays. Only one process may open this PGlite directory at a time.

Create a new fictional stay in the console, choose a hotel and handoff, open the guest view, converse in English, and select Finish and share. The automatic A–F draft appears in Brief & review. Existing stays retain their original DNA snapshot. A guest who declines personalisation receives a minimal record, without experience suggestions.

The initial greeting is a fixed application introduction. Subsequent replies and the normal brief call the model. The active prompts are conversation-v5.1 and brief-v4.2, with the discovery output contract and illustrative moves. Previous versions remain in source control. Both dialogue and briefs use medium reasoning on GPT-6 Luna. Both use the full selected DNA, reservation context, transcript, retained facts and the internal discovery map, with store:false, no tools and no automatic SDK retries. The guest email is omitted from model input. This is not a promise of zero provider retention.

## How the local allowance works

The ai_budget and ai_calls database tables persist the initial allowance and each request. They store usage metadata, not prompts, secrets or guest messages. The allowance does not reset monthly or on restart, and editing .env cannot increase an already-created allowance. There is no refill button.

Before generation, the server asks OpenAI to count the exact text input, instructions and output schema. It reserves that input plus 512 framing tokens and the full allowed output: 7,000 tokens for chat and 7,000 for a brief. A premature host-led closing can cause one corrective generation, also preflighted and charged to this same ledger. Output limits include reasoning tokens. Requests above 100,000 input tokens are refused, keeping the trial below long-context pricing thresholds. Only the approved model is accepted, with Standard processing explicitly requested.

Allowance accounting for new Luna calls is deliberately conservative: USD 0.15 per million input tokens and USD 0.60 per million output tokens, versus published Standard rates of USD 0.10 and USD 0.50 on 6 October. Fractional microdollar results round up. Historical Sol calls retain their original USD 3/12 conservative rates and previously accounted amounts; settlement uses the model recorded on each call. Cached inputs receive no discount in the allowance, and the input margin covers the published cache-write rate. The provider invoice can therefore be lower than the displayed amount. This is an application usage allowance, not a claim about the final tax-inclusive invoice or other applications using the account.

A database transaction serialises reservations, including concurrent conversations. An API response with usage replaces the maximum reservation with its conservatively accounted usage. A timeout, cancellation, missing usage or uncertain outcome retains the full reservation. Unexpected processing tiers or usage above a reservation pause further calls for review. An output-format failure is still accounted for. A restart never clears uncertain calls. Budget errors preserve the guest message; they do not create a fabricated reply.

The Connections screen shows the limit, accounted amount and remaining allowance. It is not the OpenAI billing dashboard. Keep this database and ledger together; deleting or cloning an installation is not a way to obtain a new authorised budget. Any extension needs Julien's explicit approval and an auditable update.

## Evidence and limitations

Automated checks exercise concurrent reservations, refusal before dispatch, uncertain network outcomes, repeated settlement, blocked usage anomalies and restart persistence. Existing workflow and browser tests remain simulated and are reported separately from live trials. A few real fictional scenarios establish that the integration works; they do not validate conversation quality across all hotels and guest situations.

The first live checks covered two chat turns and a normal A–F brief for Hôtel Amour Nice, plus a refusal turn and deterministic minimal record for Golden Well. All passed through the application service. The conservative allowance accounted for USD 0.082086 across four generations, leaving USD 4.917914 immediately after these checks, with no uncertain calls. See the [verification report](Verification%20report.md) for observations and limits. The console was then restarted in OpenAI mode with the same local account and database.

Following the ten-case baseline, six new discovery profiles used 52 short guest replies and generated six live briefs. That campaign accounted for USD 1.481970, including the retained reservation for one timed-out chat call. A deliberate retry succeeded; the uncertain reservation was not removed or refunded. After export, cumulative accounting was USD 2.556417, leaving USD 2.443583 of the original USD 5, with one uncertain call. These are dated ledger readings, not a provider invoice or a claim about subsequent use. See the [six-case report](Six%20discovery%20tests.md).

On 6 October, three new fictional conversations with conversation-v3 produced 24 live replies and three unchanged brief-v2 drafts. The campaign accounted for USD 0.732144. Seven targeted live checks of the refined conversation-v3.1 accounted for another USD 0.178908. Cumulative accounting after these checks was USD 3.467469, leaving USD 1.532531 of the original allowance. The one uncertain call from 5 October remains retained; there were no new failed or uncertain calls in this campaign. These are conservative local amounts, not invoices. See the [three-case report](Three%20conversation%20tests.md).

At the earlier v3 evaluation, GPT-6.1 Sol was retained. The 6 October [official model comparison](https://developers.openai.com/api/docs/models/compare) lists Standard text input/output per million tokens at USD 2/10 for Sol, 10/50 for Astra and 0.10/0.50 for Luna, before cache effects. The measured local average was approximately USD 0.24 per complete test conversation plus brief. No Astra or Luna calls were made: the price comparison is documented, while any claim of equivalent or inferior Canopia quality on those models remains untested. No model migration, budget reset or spending-limit change was made.

Official OpenAI documentation checked on 5 October 2026, with model comparison refreshed on 6 October:

- [Model capabilities and pricing](https://developers.openai.com/api/docs/models/gpt-6.1-sol)
- [Input token counting and output-limit semantics](https://developers.openai.com/api/docs/guides/token-counting)
- [Provider spend limits](https://developers.openai.com/api/docs/guides/spend-limits): provider enforcement can be delayed; this local pre-dispatch allowance is separate. No account-wide setting was changed.


The subsequent product-integrated anniversary campaign used conversation-v4 and brief-v3 for three new couples. Twenty-two live chat replies and three briefs accounted for USD 0.927621. The ledger ended at USD 4.395090 accounted and USD 0.604910 remaining, with the same one older uncertain call and no new uncertainty. Prompts and runtime stayed frozen during the campaign; all three exported drafts match their original generations. See [Three anniversary journeys](Three%20anniversary%20journeys.md). No budget extension or model comparison was performed.

The subsequent Luna integration and corrections accounted for USD 0.204258 across the three full journeys, six targeted chat replays and six additional brief generations. The final ledger is USD 4.599348 accounted and USD 0.400652 remaining; the same older uncertain call remains. See [Discovery v5 integration](Discovery%20v5%20integration.md) for raw evidence, residual quality failures and the distinction between full journeys and replays.
