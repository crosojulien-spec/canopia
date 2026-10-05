# Connections and operation

The local application runs without another service account. These are the remaining connections, in the order they become useful. This guide does not authorise paid calls, invitations or deployment.

## OpenAI: conversation and brief generation

Use Julien's existing OpenAI account to access the [API platform](https://platform.openai.com/). Create or select a dedicated **Canopia** project, check its API billing/credits, agree a spending cap and create a project API key. ChatGPT and API billing are separate. The exact model and test budget still need Julien's decision.

Put the key directly into the local ignored `.env` file or process environment. Do not paste it into a conversation, browser code or Git. Codex can configure the other fields once the key is available locally, without displaying it.

```dotenv
CANOPIA_AI_MODE=openai
OPENAI_MODEL=<agreed model supporting Responses and structured output>
OPENAI_API_KEY=<local secret only>
CANOPIA_ALLOW_AI_CALLS=false
```

The final flag remains false until paid testing is authorised. Changing it to true activates calls. First use a fictional stay and review the dialogue and A–F draft against the DNA and transcript. Calls use `store:false`; this is not a guarantee of zero retention by the provider. The reservation context, hotel DNA and conversation go to the provider; the guest's email address is omitted from the AI input.

The adapter uses no automatic retries and exposes no web, booking, purchase or sending tools. Draft metadata records model, prompt and DNA versions.

Official references checked 5 October 2026: [API setup](https://developers.openai.com/api/docs/quickstart), [spend controls](https://developers.openai.com/api/docs/guides/spend-limits), [separate ChatGPT and API billing](https://help.openai.com/en/articles/9039756-managing-billing-for-chatgpt-and-the-api-platform). Check the limits actually available in the account; a warning threshold and a blocking limit serve different purposes.

## Email: check the existing mailbox first

The session's Outlook connector exposed `julien@iamnova.fr`. That access is not a reusable application sending authorisation.

The current code includes an **SMTP adapter**, not Microsoft Graph/OAuth. Verify whether the existing mailbox has a supported SMTP relay or requires Microsoft OAuth. If OAuth is required, implement that adapter after checking the mailbox configuration. Do not assume an ordinary mailbox password will work or weaken security settings.

Julien still needs to confirm the sender name/address and one test address he controls. Configuration:

| Setting | Purpose |
|---|---|
| `CANOPIA_EMAIL_MODE=smtp` | Select the implemented adapter |
| `SMTP_HOST`, `SMTP_PORT` | Provider-approved TLS endpoint |
| `SMTP_USER`, `SMTP_PASSWORD` | Approved credentials, kept local |
| `CANOPIA_EMAIL_FROM` | Approved sending identity |
| `CANOPIA_TEST_RECIPIENTS` | Explicit test recipients, comma-separated |
| `CANOPIA_ALLOW_EMAIL` | Remains false until a specific test is authorised |

Sending also requires a saved invitation and human click. The test allowlist is not a live traveller delivery policy. Uncertain delivery is marked **unknown**, with automatic retries blocked; check the mailbox/provider before resolving it.

## Hosting and database: before remote invitations

No hosting purchase or database account is needed locally. PGlite persists data in `.local/postgres`. GitHub stores the private source code; it does not host the running application or database.

Before remote use, choose an existing Node hosting account and PostgreSQL service with HTTPS, secret storage and backups. No valid hosting access was confirmed: the installed Vercel CLI's token did not authenticate. Generation currently runs inside one persistent Node process; this version must not be deployed unchanged as a short-lived serverless function.

`DATABASE_URL` selects remote PostgreSQL, but that adapter has not been tested against a remote instance. `CANOPIA_ORIGIN` must match the HTTPS origin and `CANOPIA_SECRET` must be a stable secret of at least 32 characters. Initial operator setup is local only; production provisioning and backup/restore must be completed before hosting. Do not expose the development server to the internet.

Real traveller use also requires agreed retention/deletion rules, link lifetime and guest information. This build blocks `CANOPIA_ALLOW_REAL_STAYS=true`; setting an arbitrary retention number would not implement those rules. Local test links last seven days by default. Operators can revoke a link or delete a stay with its messages and briefs.

## Local operation

Use `npm run dev` while developing. To serve the compiled interface locally, run `npm run build`, set `CANOPIA_SERVE_BUILD=true`, then `npm start`. Stop with Ctrl+C. Only one server can own a given PGlite folder. Keep `.local/installation.key` with its database when moving an installation; both contain private material and are ignored by Git.

No Gamma, Airtable, Make, Replit or research-agent account is needed for this scope. Final formatting and delivery remain manual. Supporting DNA documents are text/Markdown extracts in this version; direct Word/PDF import is not implemented.
