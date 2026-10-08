# Approved product decisions — updated 8 October 2026

This document consolidates Julien's decisions for this project. Choices explicitly labelled as proposals elsewhere are not approvals.

## Purpose

Rebuild Canopia as a clean, reusable, testable application to establish a foundation before the hackathon. During the event, the team will work on an additional research component. Canopia creates value by helping professionals adapt their expertise and capabilities to a stay; creativity already belongs in the core product.

The event team name is Once Upon a Stay. The product name remains Canopia.

## Core value — Julien's explicit clarification after the tests

Canopia gets to know travellers in the context of this stay. That understanding should help the hotel decide what it can prepare, adjust, compose or propose for these people, including things they would not have thought to request. It covers practical needs and constraints as well as wishes, enjoyment and surprises.

Discovery seeks rich material: purpose of the stay, companions and relationships, first visit or return and associated memories, relevant occasions, interests, small rituals, food and drink habits, sleep and comfort, sensory preferences, and the desired way of interacting and receiving help. These directions inform the agent's curiosity; they are neither a fixed sequence nor a requirement to fill every field.

Guests naturally reply in one or two sentences. The agent follows up, clarifies what matters, connects details and opens other useful avenues while the person participates. It should not conclude after qualifying a single service request. It seeks as much useful information as the voluntary exchange allows, without pressing a refusal or treating indifference to one subject as rejection of the whole conversation.

The Sukhothai tests supplied by Julien, together with their review notes, are the design foundation for this discovery. Examples include the son's blanket ritual and Spider-Man interest (case 02), music, coffee and nicknames in the honeymoon case (04), and separate blankets and sofa rest in case 07. These illustrate personal understanding that can inspire preparation or a thoughtful touch. They are not a catalogue to reproduce. Repetition, promises, factual errors and unconfirmed historical capabilities in those tests still need correction.

DNA works in the background: it helps the agent discover details the hotel could act on and later compose possibilities from the hotel's capabilities. The dialogue is not centred on policies, menus or prices. The traveller should not have to answer "how should we personalise your stay?" or invent every thoughtful detail. Ideas belong to the composition work; the hotel retains the decision.

Julien also confirmed the commercial objective: this knowledge should identify as many relevant upsell opportunities as the collected intentions and preferences support. The brief may distinguish preparation/adaptation, an optional personal touch, and a paid service or composition the hotel could propose. No price, availability, free inclusion, firm offer or purchase is presumed. The current scope remains an internal proposal reviewed by the operator and decided by the hotel; no automatic sale or transmission to the guest is authorised.

The main quality criterion is what has been learned and what it enables the hotel to prepare or compose for this guest. Correctly answering a pool-hours question, following a rule or ending quickly checks secondary behaviour; it does not demonstrate Canopia's value.

## Operation and reservations

- One operator console for this version.
- Reservation information is supplied to the operator: guest name, email, party size, dates and other available details. Automated import has not been decided.
- The operator selects the hotel and creates a stay with its own guest link.
- Include an invitation-send button in the console, editable text, a visible result and duplicate-send protection.
- Sending remains a human action. Automatic sending when a reservation is created is not a requirement for this version.
- The invitation explains the value of the exchange, how it works and how information will be used for this stay. Exact wording and technical retention rules still require agreement before real use.

## The six hotels

The table records sources available when the hotels were selected. All six now have enriched public-source preparation profiles in `data/dna/`; this does not establish hotel operational approval.

| Hotel | Location | Initial source material |
|---|---|---|
| Seven Secrets by Hanging Gardens | Lombok | Preparatory profile, fictional conversation, historical briefs and proposals |
| The Sukhothai Bangkok | Bangkok | Eight-page profile, test corpus and brief instructions |
| Hotel Kings Court | Prague | Approved selection; preliminary web sources identified |
| Golden Well / U Zlaté Studně | Prague | Approved selection; preliminary web sources identified |
| Le Pavillon de la Reine | Paris | Approved selection; preliminary web sources identified |
| Hôtel Amour Nice | Nice | Explicitly selected by Julien; profile and source checks subsequently completed as public preparation |

Hôtel Amour Nice replaced the WindsoR. The selection contains six hotels, rather than the five initially mentioned. Separate hotel accounts are not required.

## Guest conversation

### Approved replacement on 6 October: active discovery and adaptive pace

Julien rejected the qualitative level of the v4 anniversary journeys. Technical success and offline roleplays did not demonstrate the required guest understanding. He approved the full replacement role in `docs/Conversation agent role.md` and explicitly requested application integration, documentation updates, commit and push.

Food, drinks, snacks, comfort and everyday routines are priority material for adapting existing hotel processes and relevant paid opportunities. Scents and flowers must be explored when hotel capabilities make them useful. The agent takes initiative rather than waiting for unsolicited preferences. Purpose, companions, interests, memories, practical plans and staff interaction remain part of the discovery. The nineteen agreed information areas are grouped by the role; they are not a mandatory sequence or a requirement for every guest to answer every detail.

The path and pace adapt to the person. Follow valuable leads, accept indifference and refusal, keep useful threads for later, and distinguish an unexplored area from no preference. Short answers alone do not establish disengagement. Host-led closure needs sufficient useful material; stated time pressure or a wish to finish allows shortening. Current instructions supersede historical strict ordering and keyword-based impatience detection. The Seven Secrets example establishes the desired breadth and operational usefulness, not a conversation to reproduce verbatim.

Julien's cheaper-model request applies to the Canopia agent, not this Codex chat. Implementation selects `gpt-6-luna` for the revised role and tests it within the same original USD 5 allowance. At that stage, no budget reset, new spending allowance, deployment or real email was authorised; the later allowance change is recorded below. Live evaluation and its limits are recorded separately; approval of the role is not acceptance of every resulting conversation.


Clarifications approved on 6 October after reviewing Julien's `05_Tests.zip` archive:

- A common behaviour across all six hotels is acceptable at this stage. The stay's purpose guides the questions; DNA remains in the background without imposing identical questions on everyone.
- For a celebration, naturally start with existing plans or the person's interests. Age is not the automatic first question. The agent may initiate the idea of a little note or personal nod, then ask for a sentiment or shared reference. The guest need not write the note or design the whole attention; execution belongs to the hotel.
- For a city visit, understand the way of exploring, specific experiences and interests, and memories of previous visits. For work, prioritise the day's rhythm, meals, exercise, transport and evenings. A solo traveller is not necessarily travelling for work.
- Earlier wording treated sleep, snacks, tastes, scents, flowers and habits as possible enrichment. The approved replacement above explicitly makes everyday personalisation an active discovery priority, while preserving adaptive pace.
- Awareness of cultural habits can reveal a useful question, such as one duvet each or a shared duvet. It does not authorise assigning a preference to a nationality or inventing hotel customs or equipment. The tone may be light and playful.
- The full archive was examined as design evidence: 27 DOCX and 19 PDF files, including review notes. Old briefs and ideas remain fallible examples, not expected answers. Personal details, conditions and companions' different tastes must survive summarisation.
- Julien requested a role rewrite, a model quality/cost assessment and three new conversation tests. `conversation-v3` was tested on three new fictional guests; the subsequent `conversation-v3.1` clarified closure, previous visits and comfort after seven targeted checks. Keeping GPT-6.1 Sol is an implementation recommendation, not a demonstrated comparison against Luna or Astra. Julien's qualitative approval remains pending after reviewing the tests.

On 6 October, after the 100-case offline design workshop, Julien explicitly authorised modifying the product and running three couple/anniversary journeys from discovery through service recommendations. The resulting implementation uses `conversation-v4` and `brief-v3`, with a compact per-person/topic working map passed across turns and into the brief. This authorises the implementation and trials; it does not establish Julien's qualitative acceptance or hotel feasibility. The model and original USD 5 cap are unchanged. See [the anniversary report](Three%20anniversary%20journeys.md).

The established conversation requirements also apply:

- English only for this version.
- Use reservation context already available.
- Briefly explain the conversation's purpose.
- Understand why the traveller is coming and what matters to them.
- Deepen relevant leads according to their answers and hotel capabilities; avoid developing options known to be impossible.
- Collect practical preferences when useful: comfort, food, rhythm, interaction and similar details. Do not impose every topic.
- Do not ask again for information already given. Short answers are not disengagement: deepen a useful cue or move naturally to another subject. Respect indifference to a topic and an explicit wish to finish.
- Julien clarified on 5 October that guest replies normally contain one or two sentences. The agent should be warm, natural and inclusive, follow up intelligently, adapt its tone and stop at the right time. The Sukhothai exchanges illustrate progressive discovery, with historical caveats retained.
- Allow a final addition or correction before normal completion.
- Aim for a three-to-five-minute exchange, which can continue if the guest wants to share more. This is neither a timer nor an automatic message limit.
- Revise the historical flow to remove repetition and out-of-context questions. The general approach above is approved. On 5 October, detailed v2 prompts were prepared and tested on six new profiles; their quality was not approved. See the six-case report. This observation does not change the product definition.

## Hotel DNA: understanding and composition

Julien wants to view, edit and review DNA profiles in the dashboard. DNA should remain rich and flexible, using text and documents alongside the essential structured information.

Profiles cover identity, atmosphere, hospitality philosophy, service tone, spaces, known teams, resources, know-how, identified partners, working practices, standards, adaptation possibilities and actual limits.

Existing services and packages illustrate available capabilities. The model should be able to combine or adapt them to suggest a new personal touch or experience, explaining necessary confirmations. Missing information establishes neither permission nor impossibility.

DNA informs the dialogue from the start and is used again to generate the brief. It is not merely a final filtering step.

Public information is preparation material. Operator review must not be presented as confirmation received from the hotel.

On 5 October, Julien requested detailed, standardised enrichment for all six hotels, including both historical profiles: public documents, menus/ingredients, prices and conditions, comfort/pillows, services and adaptation possibilities. The aim is to support new compositions from documented capabilities. An ingredient or service gives grounds for a proposal, not permission or free inclusion. Unknowns, secondary sources, historical information and contradictions remain explicit for review.

## Brief generation and use

- After normal conversation completion, automatically generate a text draft from the stay, conversation and corresponding DNA.
- English briefs for all hotels.
- The draft appears in the dashboard, attached to the stay.
- The operator may review, edit, copy and export it, including as a `.txt` file.
- Julien then manually formats it in Gamma or the appropriate hotel template and delivers it.
- Keep the approved A–F structure, "Experience suggestions" and role labels adapted to each hotel. Old examples remain qualified references, not unquestionable outputs.

## Service proposals and routing

Proposals appear in the concierge brief; if the hotel has no concierge, they go to reception.

Two forms of proposal are supported:

1. Use, adapt or combine identified packages, services and know-how.
2. Give the concierge an explicit research task: what kind of activity to look for, why it fits the guest's possible needs, and which constraints to respect.

The core product does not itself search for partners, events or activities while preparing a stay. Public research to prepare a DNA profile beforehand is a separate preparation activity.

Proposals remain subject to the hotel's decision. The product does not book, promise or automatically send an experience offer to a guest.

## Construction and autonomy

### Confirmed implementation decisions

- On 5 October, Julien instructed Codex to begin development. Construction of the core product is authorised in this project. Real emails and deployment remain prohibited without authorisation; spending requires approval except for the AI trial below.
- After storing his key locally, Julien explicitly approved GPT-6.1 Sol with a maximum USD 5 allowance for initial conversation and brief tests. This covers local fictional stays, not emails, deployment, real travellers or other spending. The original model was `gpt-6.1-sol`; the approved cheaper-model migration used `gpt-6-luna` under the same cap at that time (see the replacement role decision above). The later USD 50 ceiling is recorded below. The key is not versioned. The trial ledger persists in the database and does not reset on restart.
- On withdrawal/refusal, produce a minimal record of already collected information with a prominent notice that the guest does not want it used for personalisation. No new experience suggestions in this branch. Retention remains undecided.
- Approved format: A–F retained; "BlooM Experience Tips" replaced by "Experience suggestions"; labels match known roles, with reception handling suggestions when there is no concierge.
- Approved editing/regeneration: each regeneration creates a new version without overwriting previous ones; export uses the saved version selected in the dashboard.
- The whole application is in English, including the operator console, guest dialogue and briefs.

### Local AI allowance — confirmed 8 October

Julien explicitly requested raising this installation's total AI ceiling to USD 50, replacing the original USD 5 ceiling. This is a total cumulative allowance, not USD 50 added to the remaining balance and not a monthly reset. Preserve all accounted costs, uncertain reservations and safety blocks in the existing database. The local configuration and persistent limit must both reflect USD 50; ordinary restarts or configuration edits still cannot raise a stored limit. The API key, model and other operating boundaries remain unchanged. This does not change any OpenAI account-wide billing limit or authorise a separate allowance for another installation.

### Repository language and updates — confirmed 6 October

- Maintained repository content and filenames must be in English. Conversations with Julien remain in French. Original source material, exact quotations and recorded test evidence retain their original language and are clearly labelled; translation must not alter provenance or test results.
- Update relevant documents whenever authorised work changes the product or its approved decisions. After the work is complete and verified, commit and push the task's changes to the existing private GitHub repository. Julien explicitly selected "documents up to date + commit + push" on 6 October.
- Report the actual local, committed and pushed state. Do not claim GitHub is current when work only exists locally. Do not include unrelated edits or secrets, rewrite shared history, publish the repository or deploy through this authorisation.

### Continuing boundaries

- Develop directly with Codex in an independent private Git project.
- Julien confirmed `crosojulien-spec/canopia` on 5 October, linked to `C:\Users\croso\Desktop\Canopia_Codex_Preparation`. Git setup alone did not authorise construction; the subsequent development instruction did.
- Develop and host outside Replit; the old Replit application remains a reference and must stay intact.
- Prefer existing AI, email, database and hosting accounts. The local cumulative AI allowance is USD 50 following the explicit 8 October extension above; other spending requires approval.
- Preparation and construction take place in the local project linked to the chosen repository.
- Consult Julien before resolving an unknown product decision or contradiction. Continue independent work.
- Additional research is reserved for the hackathon. Prepare its integration contract without building it in advance.
