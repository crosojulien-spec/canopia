# Three anniversary journeys — 6 October 2026

Historical v4 campaign. Julien subsequently rejected its qualitative level; it is retained as unedited evidence, not current acceptance. See [the v5 replacement](Discovery%20v5%20integration.md).

**The product was changed and three new fictional couples completed the real application flow from discovery to exported service recommendations.** There were 22 live conversation replies and three live briefs, using GPT-6.1 Sol. All three exports exactly match the generated drafts. The local allowance accounted for **USD 0.927621**, leaving **USD 0.604910** of the original USD 5.

These are diagnostic roleplays with actual model outputs. Codex authored and played the guests and assessed the results. They are not independent guest feedback, hotel approval or proof of an improvement rate against the old version. The hundred earlier offline simulations informed the design; they were not model training.

## What changed in the product

The active instructions are [conversation-v4](../prompts/conversation-v4.txt) and [brief-v3](../prompts/brief-v3.txt). They integrate the workshop's purpose-led discovery, individual preferences, boundaries, proportionate follow-ups, mixed-purpose check and single closing invitation. The [readable role](Conversation%20agent%20role.md) explains their scope.

The conversation now returns a compact internal working map alongside its reply and extracted facts, within the same model call. Up to twelve threads distinguish an open lead, sufficient understanding, something the speaker does not know, indifference and a declined topic. Each records the person, topic, relevant conditions and supporting user-message references. The map is saved with the stay and supplied to the next reply and the brief. It is a fallible interpretation; the transcript remains authoritative. It is not a completeness score or a list that the guest must fill.

The application derives its suggested finish state from the kind of reply: an active question, closing invitation, ordinary farewell or withdrawal. This removes a separate, potentially contradictory readiness boolean from the model's response. It does not guarantee that the model correctly classifies every sentence. Guests can still finish early; explicit withdrawal still produces only the minimal record.

The brief now explicitly reconciles the working map with the transcript and preserves people, corrections, conditions and preference domains. No model change, extra planning-model call, automatic sale or new budget was introduced. Existing stays without a map remain compatible. The map is internal; there is no new operator editing interface for it.

## 1. Leonie and Marc — ten years since meeting, Nice

**7 guest replies; 504-word brief.** [Complete conversation](../fixtures/evaluations/2026-10-06%20anniversary%20journeys/01%20conversation.txt) · [Original brief](../fixtures/evaluations/2026-10-06%20anniversary%20journeys/01%20brief.txt)

The couple returns to Nice, where they met near the port over a badly folded paper map. The host asks about that memory and existing plans, then initiates a private note. Leonie supplies a sentiment—still happily getting lost together—without having to write the note. She rules out public fuss and rose petals. Further questions discover her façade sketching, Marc's old soul records and Bill Withers, their slow wandering and long coffee stops, and one duvet each despite sharing a double bed. Marc gets cold; Leonie sleeps warm. Pillow indifference is accepted.

The resulting reception-led brief connects these answers to:

- A simple, optional hotel-authored note reflecting their sentiment, with no staged celebration.
- A paper map as a practical nod to their meeting, if available and approved.
- Flexible port, façade and secondhand-record pointers, with opening days and stock to research.
- Two separate duvets, with different weights only if the room and linen stock permit.
- An optional paid coffee break at the hotel's bar/restaurant, with current service and pricing to check.

The link from memory to preparation is convincing, and the brief does not confuse a return to Nice with a return to this hotel. The paid coffee idea is modest and could fit many guests; coffee tastes, food preferences and desired staff interaction were not explored. The host also says “there’s a useful lead”, which sounds like internal evaluation rather than hospitality. These remain weaknesses, not reasons to discard the useful discoveries.

## 2. Aisha and Tom — twentieth wedding anniversary, Bangkok

**7 guest replies; 525-word brief.** [Complete conversation](../fixtures/evaluations/2026-10-06%20anniversary%20journeys/02%20conversation.txt) · [Original brief](../fixtures/evaluations/2026-10-06%20anniversary%20journeys/02%20brief.txt)

For their first Bangkok visit, they want one special dinner and unhurried exploring. Aisha enjoys Thai home cooking and fragrant curries; Tom photographs gardens and architectural details. A food question reveals Aisha's severe peanut allergy and Tom's absence of reported food restrictions. The host acknowledges the required kitchen checks, then continues discovering the couple rather than turning the exchange into an allergy interview.

A private note is welcome: Tom still makes Aisha laugh after twenty years. Public singing and cake are refused. They prefer independent exploring with a few pointers, a quiet cool room without added fragrance, and a soft pillow for Tom; Aisha has no pillow preference.

The concierge brief proposes:

- One possible paid Celadon dinner, grounded in the documented Thai restaurant and Aisha's interests, conditional on kitchen assessment of the severe allergy, current menu, availability and quote.
- An untimed photography outing around gardens and architectural details, with access and travel checks, plus suitable hotel viewpoints where access permits.
- A private hotel-authored anniversary note and individual room preparations, with no cake or public celebration.

The severe allergy stays attached to Aisha, and independent exploring does not become a group tour. Quiet sleep does not become a preference for distant staff. However, Tom's dining tastes, drink preferences and preferred dinner evening remain unknown. The brief correctly leaves these for a relevant follow-up; it does not invent them. The hidden guest profile's alcohol preferences and orange-blossom memory were never disclosed, so this run does **not** test whether those particular details would have been handled correctly.

## 3. Theo and Gabriel — civil-partnership anniversary with work, Paris

**8 guest replies; 551-word brief.** [Complete conversation](../fixtures/evaluations/2026-10-06%20anniversary%20journeys/03%20conversation.txt) · [Original brief](../fixtures/evaluations/2026-10-06%20anniversary%20journeys/03%20brief.txt)

The couple marks five years since their civil partnership. They immediately decline notes, decorations and anniversary surprises. The host accepts this and asks about a welcome alternative that they themselves raised: a relaxed bistro dinner. Monday is already booked elsewhere; Tuesday is open. Theo expects to finish a Tuesday meeting at 18:30, while Gabriel is free all day.

The conversation also learns that Gabriel is visiting Paris for the first time and likes architecture; Theo has visited for work and browses secondhand poetry books. Both want a few pointers rather than a timetable. Gabriel reads late while Theo sleeps early, so a reading light away from Theo's pillow would help. A final clarification states that avoiding heavy cream sauces is a taste preference, not an intolerance. The host acknowledges it and closes without another invitation or question.

The concierge brief retains these distinctions and recommends:

- Researching suitable Tuesday bistros with cheese choices for Gabriel and lighter dishes for Theo; timing, budget and booking remain to be agreed.
- Architecture pointers for Gabriel's free Tuesday and combined architecture/bookshop wandering on shared days.
- Linking shared-day pointers with a leisurely bistro lunch, distinct from their preference for a shorter evening dinner.
- Checking the allocated room's actual lighting and layout, without inventing a movable lamp or seating area.

No anniversary package or replacement surprise appears. The late clarification survives into the brief. The recommendations are useful but mainly external concierge research; this case does not demonstrate new hotel-operated paid-service composition. The tone still relies heavily on restating each answer before the next question.

## What the three runs establish, and what remains weak

The chain works: real operator stay creation and guest-link retrieval, live discovery, persisted facts and working map, normal guest completion, automatic brief generation, operator readback and text export. All three conversations offered one closing invitation, then stopped. No substantive discovery question was marked ready to finish in this sample. There was no generation failure, retry, regeneration or manual editing of a generated reply or brief.

The most useful observed behaviours are personal-note initiative without a writing workshop, individual comfort preferences, retained refusals, mixed work/leisure availability, and concrete recommendations tied to the couple. The strongest remaining editorial issue is repetitive paraphrasing. Discovery also leaves some actionable areas thin—particularly the second person's food tastes in Bangkok—and service proposals are sometimes modest. This is a usable iteration to review, not a claim that the agent is finished or consistently excellent.

All guests were cooperative, text exchanges were in English, and only three of the six hotels were used. Longer or contradictory conversations, cultural cues, prompt attacks, disengagement and real withdrawals were not tested live in this campaign. Earlier evidence and simulated regression checks must not be presented as new live coverage. Hotel DNA remains public preparation, not operational approval.

## Execution and evidence

The scenarios were written before the calls. Only ordinary reservation fields went into stay creation; hidden profiles were withheld from the model. Codex answered each actual question in one or two short sentences, 3–31 words. Missing details were not dumped into the closing answer to rescue the interview. Prompts and runtime files stayed unchanged for the whole campaign; hashes and budget readings are in [run.json](../fixtures/evaluations/2026-10-06%20anniversary%20journeys/run.json).

The three live journeys used local HTTP routes. A temporary local operator session was issued for the harness without changing the existing account or password, then revoked after export. This is not a live browser-login test. Separately, the automated Edge/Chrome browser journey passed with explicitly simulated AI, covering guest flow, review, versions, export and refusal. Sixteen server/data tests, TypeScript, the client build and source formatting also passed.

Median observed chat latency was **16.5 seconds**, maximum **29.1 seconds**, including local HTTP handling and the evidence readback. Briefs contained 504, 525 and 551 words. The map and source-linked facts add tokens; this campaign is not a controlled model-cost comparison. The approved model remains unchanged because this task did not compare alternatives.

All 25 generations returned usage. The conservative ledger moved from USD 3.467469 to USD 4.395090. The one uncertain call from an older campaign remains accounted for; none was added here. These are local allowance amounts, not invoices. No email, booking, purchase, hotel contact, deployment or real stay occurred.

The [evidence folder](../fixtures/evaluations/2026-10-06%20anniversary%20journeys/README.md) contains unedited transcripts and briefs, per-turn retained facts and discovery states, hotel snapshots and measured usage. `node scripts/verify-anniversary-evidence.mjs` checks their consistency without any model call. Structural checks establish provenance and completion, not semantic truth or hospitality quality.
