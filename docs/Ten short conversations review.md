# Ten short conversations — review of 5 October 2026

**Evaluation framing corrected after Julien's clarification: this campaign does not validate Canopia's intended discovery.** Scenario selection and the initial assessment favoured request qualification and operational constraints. They undervalued personal understanding, preparation and surprise possibilities, and relevant upsell potential. This was an evaluator framing error as well as a limitation in the bot.

The integration works. The bot is polite and cautious, but too often turns a first lead into a summary followed by an invitation to finish. Briefs then amplify sometimes thin discovery. The transcripts remain unchanged: technical observations still stand, but their interpretation as product-quality evidence has been corrected.

The earlier Maya/Ben trials checked integration, not interviewing quality. This campaign adds progressive replies. No prompt, model, DNA or application behaviour changed during the tests. Later improvements are documented separately in [Six discovery tests](Six%20discovery%20tests.md) and [Three conversation tests](Three%20conversation%20tests.md).

## Method and evidence

Ten fictional profiles across six hotels were defined before calls in [scenarios.json](../fixtures/evaluations/2026-10-05%20short%20replies/scenarios.json). Codex played each traveller and wrote the next reply after reading the bot's actual question. **The hidden profile was never supplied to Canopia** or included in reservation notes. Only normal stay details and Alex's booked Deluxe category were provided in advance.

Guest replies follow the question received. Preferences deliberately remained unknown when the bot did not open the subject. Two spontaneous additions at closure tested its response: Alex's work call and Nina's son's allergy. These came from guest initiative, not the bot's discovery.

Messages used the local application's guest HTTP routes. Nine normal completions triggered the real generator; withdrawal triggered the prescribed minimal record. No regeneration or output editing. Three separate conversations could receive replies concurrently, never two turns of the same conversation. Timings therefore are not a load benchmark or a measurement of human interview duration.

| Measure | Observation |
|---|---|
| Version | GPT-6.1 Sol, commit `b9884d8`, unchanged v1 prompts, six v2 DNAs |
| Guest messages | **41**, each **one or two sentences**, **3–20 words**, average **10.2 words** |
| Conversation length | 3–6 guest messages including closure; no imposed length |
| Invitation to finish | After two replies in five cases; this is not automatically a defect |
| Technical result | 41 replies without error; nine GPT briefs and one minimal record |
| Reply latency | Median 6.4 seconds; maximum 9.2 seconds |
| GPT briefs | **494–926 words**, average **632** |
| Budget | **USD 0.992361** accounted for this campaign; cumulative trial accounting **USD 1.074447**, leaving **USD 3.925553** out of USD 5 immediately after testing |

The amount is conservative application accounting, not the provider invoice. [Provenance and prompt hashes](../fixtures/evaluations/2026-10-05%20short%20replies/run.json); [messages, timings and closure signals](../fixtures/evaluations/2026-10-05%20short%20replies/turn%20review.json). All ten stays remain in the console under "First name — Short replies 01…10."

## Results by profile

| Case | What the bot actually learns | Assessment |
|---|---|---|
| **01 Nina — Sukhothai**, family holiday, six replies | Rhythm, son's interest, age volunteered while discussing interests, music for Nina and art for her wife. Allergy and no food surprises are added spontaneously at the end. | Good, inclusive opening toward every family member. **Insufficient depth:** music, art and Spider-Man largely become concierge categories. Allergy is then preserved without a safety guarantee. A 926-word brief is too dispersed. |
| **02 Alex — Kings Court**, conference, five replies | Breakfast before 07:15. The client adds a private call after the first closing invitation; the bot resumes and asks which day. | **Good adjustment after a late addition.** The brief respects Deluxe and does not present the lounge as a private office. Reception still needs breakfast dates and dietary needs; discovery resolved only part of the need. |
| **03 Sam — Amour**, discreet birthday, four replies | Relaxed meal, small shared plates, no alcohol for either guest, no public fuss; uses "girlfriend" without assuming it. | **Stops before a promising follow-up** on drinks or what would make the moment personal. Ginger/citrus and arrival time remain unknown; the brief does not invent them. Useful basis, little individuality. |
| **04 Rose — Golden Well**, trip with her mother, five replies | Old buildings/views, twenty minutes walking on flat ground, seated breaks, difficult stairs and refusal of a three-hour tour. | Good practical precision, but little discovery of the people, their relationship to the trip or their habits: **this does not validate Canopia.** No invented diagnosis or age. Faithful but repetitive brief. |
| **05 Jules — Pavillon de la Reine**, sketching break, three replies | Drawing in the Marais, small courtyards and everyday scenes. | **Closes too quickly** after two informative replies. Does not establish drawing rhythm or preferred help. The brief proposes routes/options and an in-hotel fallback. Vegan diet remains unknown because no food discussion occurred; that alone is not a failure. |
| **06 Eli — Seven Secrets**, honeymoon after travel, five replies | Fatigue, arrival around 23:00, light vegetarian food; corrects avoiding dairy to accepting yoghurt but avoiding heavy cheese dishes. | **Good correction and timing handling.** The brief retains uncertainty between 24-hour room service and a kitchen closing at 21:00. Discovery stays limited to the first evening; the later request to finish is respected. No complimentary champagne or assumed package. |
| **07 Jo — Sukhothai**, stopover, three replies | Quiet room, presence from 23:30 to 03:30, sleep first. | **Appropriate brevity.** No spa or itinerary added. However, 494 words and repeated points are excessive for this simple need. |
| **08 Luca — Kings Court**, family/pool, four replies | Eight-year-old child, swimming around 18:00, morning flexibility. | **Poorly targeted case for core-value evaluation.** The agent immediately converts the child's enthusiasm into scheduling. A correct rule checks an operational boundary; it does not prove understanding of the family's stay, rituals or opportunities to make it personal. |
| **09 Morgan — Amour**, private reason then refusal, three replies | Family reason without details, wish for calm, then explicit withdrawal. | **Good restraint and immediate stop.** No diagnosis or demand to explain the family reason. The minimal record prohibits personalisation, including use of the earlier calm preference. |
| **10 Chris — Golden Well**, unplanned stay, three replies | Wants to wander without a fixed plan, then asks to finish. | **Appropriate ending**, without falsely treating it as withdrawal. A 511-word brief despite little material. Research is proposed only if requested, but still takes too much space. |

Full conversations and briefs:

| Case | Original exchange | Original brief |
|---|---|---|
| 01 Nina | [Conversation](../fixtures/evaluations/2026-10-05%20short%20replies/01%20Nina%20conversation.txt) | [Brief](../fixtures/evaluations/2026-10-05%20short%20replies/01%20Nina%20brief.txt) |
| 02 Alex | [Conversation](../fixtures/evaluations/2026-10-05%20short%20replies/02%20Alex%20conversation.txt) | [Brief](../fixtures/evaluations/2026-10-05%20short%20replies/02%20Alex%20brief.txt) |
| 03 Sam | [Conversation](../fixtures/evaluations/2026-10-05%20short%20replies/03%20Sam%20conversation.txt) | [Brief](../fixtures/evaluations/2026-10-05%20short%20replies/03%20Sam%20brief.txt) |
| 04 Rose | [Conversation](../fixtures/evaluations/2026-10-05%20short%20replies/04%20Rose%20conversation.txt) | [Brief](../fixtures/evaluations/2026-10-05%20short%20replies/04%20Rose%20brief.txt) |
| 05 Jules | [Conversation](../fixtures/evaluations/2026-10-05%20short%20replies/05%20Jules%20conversation.txt) | [Brief](../fixtures/evaluations/2026-10-05%20short%20replies/05%20Jules%20brief.txt) |
| 06 Eli | [Conversation](../fixtures/evaluations/2026-10-05%20short%20replies/06%20Eli%20conversation.txt) | [Brief](../fixtures/evaluations/2026-10-05%20short%20replies/06%20Eli%20brief.txt) |
| 07 Jo | [Conversation](../fixtures/evaluations/2026-10-05%20short%20replies/07%20Jo%20conversation.txt) | [Brief](../fixtures/evaluations/2026-10-05%20short%20replies/07%20Jo%20brief.txt) |
| 08 Luca | [Conversation](../fixtures/evaluations/2026-10-05%20short%20replies/08%20Luca%20conversation.txt) | [Brief](../fixtures/evaluations/2026-10-05%20short%20replies/08%20Luca%20brief.txt) |
| 09 Morgan | [Conversation](../fixtures/evaluations/2026-10-05%20short%20replies/09%20Morgan%20conversation.txt) | [Minimal record](../fixtures/evaluations/2026-10-05%20short%20replies/09%20Morgan%20brief.txt) |
| 10 Chris | [Conversation](../fixtures/evaluations/2026-10-05%20short%20replies/10%20Chris%20conversation.txt) | [Brief](../fixtures/evaluations/2026-10-05%20short%20replies/10%20Chris%20brief.txt) |

## Problems identified

### 1. Short guest replies become an assumed preference

All nine normal briefs describe brief replies or brief contact under "Interaction style." Nina's brief, for example, says "Brief replies" then "Keep contact concise." Jules also receives "Keep contact concise" without requesting it. Some conclusions have contextual support—a stopover, conference or explicitly requested discretion—but **message length alone cannot establish the desired service style**. Nina's extracted facts contain no such preference; it is added during brief generation.

Respecting a guest who has finished answering does not justify generalising that they want little staff conversation throughout their stay. Both prompts should make this distinction explicit.

### 2. The agent recognises themes, then delegates too quickly

For Nina, "music" and "art" become research leads without a genre, format or shared experience. For Sam, no alcohol remains a category without personal tastes. For Jules, courtyards are identified without learning how he likes to draw there. Not every subject needs deep exploration: **one good follow-up on the most promising lead is often enough**.

Rose's case supplies a useful practical constraint. Luca's checks a schedule. The first assessment gave these too much weight: successful discovery should also reveal something personal the hotel can use to adapt the stay, beyond immediately handling a request.

### 3. Caution takes too much conversational space

The bot frequently reminds guests that the team must confirm. That matters for availability, pricing or adaptations, but repetition creates an administrative tone. It can remain careful while speaking first about the person and stay. The fixed greeting is shared across hotels; DNA differences appear mainly in cited resources rather than tone quality.

### 4. Brief length compensates for thin discovery

Explicit constraints are generally preserved: severe allergy, yoghurt correction, walking limits, age/pool timing and refusal. This campaign revealed no claimed-safe recipe, booked service or invented external provider.

However, sections repeat facts, unknowns and checks. Jules supplies 30 words in total; the brief contains 595. Jo supplies 28 words; the brief contains 494. Keeping A–F is compatible with short sections. Missing information should appear where it changes a decision rather than repeatedly across sections.

## Possible better follow-ups

These are **writing proposals**, not outputs observed in the tests or a mandatory script:

- After Sam's shared plates and no alcohol: "What do you both enjoy drinking when you want something a little special without alcohol?" A short answer may support a bar adaptation without promising a drink.
- After Jules's courtyards and street scenes: "When you find a spot you like, do you tend to settle in and draw, or keep wandering with your sketchbook?" This distinguishes a useful stopping place from a route without imposing a guided tour.
- After Nina's family interests: "What kind of live music do you enjoy most?" Explore one relevant branch, then leave space for other needs; do not interrogate every hobby in turn.

**Julien designated the Sukhothai corpus as the design foundation**, not a secondary reference. Its habits, tastes, occasions, intentions, interaction preferences and personal details are the intended material. Review notes already ask for better follow-up: for example, ask which newspapers a guest reads (case 01) rather than moving to another topic. Case 04 discovers coffee, treats, music and nicknames; case 07 discovers two blankets and sofa rest. Comfort, scents and food should not be removed: their relevance, wording and order should follow the person. Correcting historical repetition, promises and errors must not impoverish discovery.

## Corrections proposed at the time

These proposals were not applied during this ten-case campaign. Later work is documented in the six- and three-case reports.

1. Distinguish an informative short answer, indifference to one subject and a wish to finish. Do not profile desired hospitality from word count.
2. Start from concrete Sukhothai discoveries. Follow a cue or open another useful personal dimension: purpose, destination relationship, habits, tastes, comfort, occasion or companionship. Do not limit dialogue to qualifying one request.
3. Use DNA quietly to guide a question and recognise capabilities that could be combined, without reciting services or internal caveats.
4. Before closure, assess whether what is known actually supports preparation and personalisation. A short answer is not a completion criterion. No minimum number of turns or mandatory coverage of every topic; respect a wish to finish.
5. Keep A–F but make briefs proportional to the information collected; separate facts, proposals and confirmations without repeating them.
6. Review scenarios against Sukhothai and Julien's clarified core value before another campaign: depth of discovery, connections between details, preparation, personal touches and relevant hotel-decided upsell. Retain refusal, fidelity and constraint checks without presenting them as the core of product success.

## Evaluation scope

These are roleplays written and assessed by Codex, with real bot API calls. They are not interviews with ten travellers, an independent evaluation or a statistical success rate. Each case ran once; no injection or outage test was included. Discovery expectations derive from product decisions and public DNA; **they are not requirements approved by the six hotels**.

Chris uses "weekend" although the common test dates run Tuesday to Friday. This is a scenario inconsistency; the brief flags it while preserving the dates. It is not used to judge interview quality.

The method is consistent with [official evaluation guidance](https://developers.openai.com/api/docs/guides/evaluation-best-practices): actual-use scenarios, complete traces and observable criteria. Product judgments and examples here come from this campaign, not a score generated by an evaluation API.
