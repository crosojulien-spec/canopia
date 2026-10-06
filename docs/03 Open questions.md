# Open questions and decisions still needed

An unknown is not a demonstrated defect. Check accessible evidence first and consult Julien when the decision belongs to him. Do not reopen questions already resolved in `01 Product decisions.md`.

| Topic | Missing information or current state | When it matters |
|---|---|---|
| Historical code | Replit confirmed no screened archive or exportable repository. Read-only inspection completed; independent core built here. | No longer blocks local development |
| Technical accounts | Existing AI access is connected. Remote database, hosting and email access, terms and credits still need confirmation. | Before committing to external operation |
| Model and budget | Initial trial resolved: GPT-6.1 Sol and a USD 5 maximum explicitly approved. Model choice was reviewed on 6 October and Sol retained; any budget extension needs approval. | Before exceeding the authorised trial |
| Invitation sender | Address, display name, domain and technical sending authorisation | Before real email tests |
| Test recipient | A controlled address designated by Julien | Before any test email |
| Six hotel DNAs | Six enriched, standardised profiles in `data/dna/`, with 88 references, published menus/prices, capabilities and conditional compositions. Hotel-specific gaps and contradictions are in section 10 and the review guide. | Operator review and hotel confirmation before claiming operational capability |
| Historical profiles | Originals retained; Seven Secrets and Sukhothai now have public-source updates. Old prices, secondary information and uncorroborated historical rules remain distinct. | Do not reintroduce unverified old facts into current profiles |
| Team roles | Actual concierge, reception, guest relations and other responsibilities | DNA preparation and routing |
| Brief format | Resolved: A–F, "Experience suggestions", adapted role labels | Recorded in `01 Product decisions.md` |
| Stopping and refusal | Resolved: minimal collected record with a prominent refusal notice; no new suggestions. Retention remains open. | Branch implemented; retention required before real travellers |
| Stay data | Retention, deletion, real-use link expiry/revocation and exact guest information | Before use with real travellers |
| Editing/regeneration | Resolved: each regeneration creates a separate version; export uses the saved selection | Implemented and tested with simulated responses |
| Detailed bot instructions | Julien rejected v4 output quality and approved the full replacement role. Active v5.1 tracks coverage and uses Luna, with brief-v4.2. Actual live evidence and residual weaknesses are in Discovery v5 integration. No cross-model superiority or hotel feasibility is established; Julien's acceptance of resulting conversations remains separate. | Before claiming conversation quality is accepted |
| Operator interface | Resolved: the whole application is in English. Julien's visual review remains pending. | Screens built |
| Repository language and updates | Resolved on 6 October: maintained content in English; relevant documentation, commit and push after completed, verified work. Original-language evidence stays explicitly labelled and unaltered. | Apply on each authorised task |
| Reference cases | Final demonstration examples and accepted quality criteria | Before declaring the demonstration ready |
| Hackathon | Conditions for reusing prior code, test people/sources and the component's exact position | Before research work during the event |

## Resolved on 5 October 2026

The target folder is `C:\Users\croso\Desktop\Canopia_Codex_Preparation`. The `crosojulien-spec` GitHub account and Git connection were verified. Julien confirmed the name `canopia`; `crosojulien-spec/canopia` was created and verified as private. Hosting remains undecided.

## Historical tensions not to resolve silently

- A–F routing has been decided: proposals go to the concierge or reception. Application prompts implement this choice.
- Prompts contain detailed rules about notes, party composition, allergies and surprises. Read them alongside hotel context; do not turn an old generic suggestion into a feasibility guarantee.
- "Nationality & language" sections in old briefs do not justify unstated cultural or behavioural assumptions.
- Historical reviews may encourage broader actions than current prompt boundaries allow. Use them to understand the tests, not impose every suggestion.
- "Information used only for this stay" is an expressed requirement. It does not define an exact deletion period or authorise reusing conversations to train a model.

## How to raise a question with Julien

Observed fact → missing information or contradiction → product impact → recommendation → precise question.

Continue other work while a point is pending, provided it does not prejudge the answer.
