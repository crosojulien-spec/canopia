# Six Canopia discovery tests — 5 October 2026

**The tested version discovers useful details for personalising a stay and proposing relevant services. It still misses important opportunities and sounds too mechanical. It was not yet at the level sought in the Sukhothai examples.**

This is the assessment of the 5 October v2 campaign. Later role changes and tests are documented separately in [Three conversation tests](Three%20conversation%20tests.md); the observations and outputs below are retained.

All six briefs are original, unedited outputs. They remain available in the console as "Camille — Discovery v2 01" through "Taylor — Discovery v2 06."

## What was tested

Six new fictional profiles, one per hotel, including three families: a Nice weekend, Bangkok holiday and Prague long weekend. **52 guest replies, each one or two sentences and 4–23 words.** Codex played each traveller after reading the actual question. No complete persona was supplied to the bot.

Profiles and potential details were defined before the calls. Only actual guest replies and ordinary reservation information entered the application. Other details help identify missed opportunities; they are not a mandatory checklist for every conversation.

`conversation-v2` and `brief-v2` were prepared from Julien's corrected framing and the Sukhothai cases: progressive discovery, habits, personal details, hotel capabilities in the background, and preparation/composition in the brief. Both prompts stayed unchanged throughout the six tests. Older prompts and results are retained. Real model: GPT-6.1 Sol; DNA version 2 for each hotel.

| Hotel and profile | Guest replies, including closure | First offer to finish | Brief |
|---|---:|---:|---:|
| Hôtel Amour Nice — Camille, family of four | 8 | After reply 7 | 535 words |
| Sukhothai Bangkok — Anika, Mei and ten-year-old Hana | 8 | After reply 7 | 575 words |
| Kings Court Prague — Martin, Eva and their teenager | 10 | After reply 9 | 575 words |
| Golden Well Prague — Ruth and a recently retired friend | 9 | After reply 8 | 554 words |
| Pavillon de la Reine Paris — Sofia, work then a personal day | 7 | After reply 6 | 544 words |
| Seven Secrets Lombok — Taylor and Ben, honeymoon | 10 | After reply 9 | 529 words |

Each fictional guest accepted closure when offered. Missing details were not added afterwards to improve the result artificially. One technical retry was required after a timeout; no successful reply was regenerated to seek a better answer.

## 1. Hôtel Amour Nice — family weekend

**Discovered.** The parents are returning to a city they liked before having children. Noa draws cats; Adam takes photographs. The family enjoys unplanned walks and ends the day with hot chocolate and strawberry sweets. They dislike nuts. Camille dislikes strongly scented rooms and appreciates small local stories from staff.

"What does each of you usually choose for the sweet part?" turns a vague evening ritual into a concrete preference. This is useful discovery for Canopia.

**What the brief makes of it.** Low-fragrance preparation; a proposed drawing sheet with a cat-related note; a flexible walk for sketching and photography; and a possible paid hot-chocolate/sweets moment, perhaps after a family meal. The brief asks staff to check products and dietary needs without claiming sweets are in stock or included.

**Missing.** "Noa is eight, nearly nine" receives no follow-up. In the hidden profile, the birthday falls on the Sunday of the stay and Noa dislikes public singing. The bot discovers neither the occasion nor that boundary. It also misses her enjoyment of little notes. The brief correctly avoids inventing a birthday, but the conversation loses an opportunity.

**Assessment:** usable personal material, with an important occasion missed before closure.

[Full conversation](../fixtures/evaluations/2026-10-05%20discovery%20v2/01%20Camille%20conversation.txt) · [Original brief](../fixtures/evaluations/2026-10-05%20discovery%20v2/01%20Camille%20brief.txt)

## 2. Sukhothai Bangkok — first family holiday in years

**Discovered.** The bot asks where Hana's fascination with dragons comes from. It learns about bedtime stories, her own versions and her drawings. It also explores Anika's gentle yoga, coffee and free afternoons. Mei wants to understand Thai flavours; Hana prefers mild food. Mei's severe shellfish allergy, including cross-contact, is preserved. Anika sleeps warm; Mei prefers an extra blanket of her own. The family enjoys warm interaction.

**What the brief makes of it.** Blankets and preparation without added fragrance; a note inviting Hana to imagine a garden-inspired story; adult yoga followed by coffee; and a Thai dinner with culinary explanations and mild choices for Hana, subject to feasibility and allergy handling. The concierge receives focused research into motifs or stories matching Hana's interests. No external activity is invented.

**Missing.** Mei's cooking interest remains shallow: curiosity about flavours but no specific tastes. Drinks and the hidden ginger/lime preferences remain unknown. Nevertheless, the conversation yields several personal details without needing to collect everything. It does not become a presentation of hotel rules.

**Assessment:** useful discovery of all three people and several distinct proposals; more depth on tastes would help.

[Full conversation](../fixtures/evaluations/2026-10-05%20discovery%20v2/02%20Anika%20conversation.txt) · [Original brief](../fixtures/evaluations/2026-10-05%20discovery%20v2/02%20Anika%20brief.txt)

## 3. Kings Court Prague — a teenager's chosen weekend

**Discovered.** Leo plays guitar, likes jazz and wants to take street photographs. Eva enjoys old cafés and Art Nouveau. The parents are returning after twenty years. The bot discovers individual drinks, Leo's lactose intolerance, the parents' different warmth needs and their after-dinner card ritual. It follows up: rummy and dark chocolate.

**What the brief makes of it.** Separate duvets; a proposed note about the parents' return and Leo's discovery; a chance to play cards; jazz research and a photography/architecture walk; an adapted ADELE dinner, perhaps followed by rummy. Dark chocolate is not declared automatically suitable for lactose intolerance. The brief preserves the Deluxe category without granting Executive benefits.

**Missing.** It does not ask what Leo especially enjoys in jazz, so suggestions remain broad. His exact age is unknown; the brief asks staff to check only if an outing requires it. This matters less than understanding his musical interest.

**Assessment:** one of the most useful cases: a discovered ritual becomes a service possibility specific to this family, beyond a sightseeing list.

[Full conversation](../fixtures/evaluations/2026-10-05%20discovery%20v2/03%20Martin%20conversation.txt) · [Original brief](../fixtures/evaluations/2026-10-05%20discovery%20v2/03%20Martin%20brief.txt)

## 4. Golden Well Prague — two friends reunited

**Discovered.** The trip is about making time to talk after Helen's retirement. The agent first tries to clarify a café or cake memory, then accepts that this is not the main point. It distinguishes Helen's libraries and architectural details from Ruth's local wines. It learns about reading in bed, peppermint tea and different pillows. When Ruth does not know Helen's preferred non-alcoholic drink, it leaves that open.

**What the brief makes of it.** Pillows, reading light and tea to check; an architecture/library visit with time to talk; Czech wine discovery for Ruth and a separate choice for Helen; possible use of the lounge. It respects the wish to avoid a retirement ceremony and assumes no romantic relationship.

**Missing.** Helen's routine is not explored: her enjoyment of baths and dislike of floral perfume remain unknown. Twin beds are not elicited; the brief asks staff to confirm the configuration. Editorial issue: section A does not explicitly name the hotel. "They were students in Prague" is also stronger than the account of visiting during their student years.

**Assessment:** good differentiation between the two people, but discovery favours the speaker.

[Full conversation](../fixtures/evaluations/2026-10-05%20discovery%20v2/04%20Ruth%20conversation.txt) · [Original brief](../fixtures/evaluations/2026-10-05%20discovery%20v2/04%20Ruth%20brief.txt)

## 5. Pavillon de la Reine Paris — a personal day after work

**Discovered.** Sofia wants time to notice what she normally rushes past: old doors, everyday scenes and black-and-white photographs. She likes black coffee and lemon pastry. Simply sitting down for lunch matters. The bot collects a cool, quiet room, firm pillow, shoulder tension after work, and a preference for warm recognition without imposed conversation.

**What the brief makes of it.** Room preparation; a note about reclaimed time; a flexible photography walk; adapted breakfast; a proposed 45-minute targeted Codage treatment, grounded in shoulder tension and documented spa capability. The treatment remains an option to discuss, not a diagnosis or authorised purchase.

**Missing.** It offers closure after six replies without clarifying the free day or dietary needs, despite opening the breakfast topic. Vegetarianism remains unknown and the brief defers the check to staff. It also does not explore what usually helps her shoulders relax. The treatment is therefore a relevant brief hypothesis, not an expressed wish or validated sale. Her opera interest is not discovered; that alone would not justify extending the exchange.

**Assessment:** good understanding of the stay's personal meaning and a reasoned commercial possibility; slightly early closure on useful follow-up.

[Full conversation](../fixtures/evaluations/2026-10-05%20discovery%20v2/05%20Sofia%20conversation.txt) · [Original brief](../fixtures/evaluations/2026-10-05%20discovery%20v2/05%20Sofia%20brief.txt)

## 6. Seven Secrets Lombok — honeymoon without an imposed schedule

**Discovered.** Long breakfasts, photographs, sunsets and an interest in understanding Indonesian cooking. Ben does not drink alcohol; Taylor sometimes enjoys gin with citrus. The agent clarifies drinks after an arrival answer. It also discovers different pillows, separate blankets and dislike of a spectacular public welcome.

**What the brief makes of it.** Flexible arrival; separate drinks; suitable bedding if available; a private note; an Indonesian meal with explanations; and dinner in a sunset-appropriate setting. It does not turn the honeymoon into package entitlement or invent a cooking class.

**Missing.** Photography is not deepened. Their ritual of choosing the day's photographs together over popcorn does not emerge. Nicknames and massage interest remain unknown; no intrusive intimacy question was necessary. The generated note, "Wishing you an unhurried honeymoon," is still interchangeable. Better discovery of their shared daily life would have given the brief more personality.

**Assessment:** concrete adaptations and good individual distinctions, but a generic attention for a personal trip.

[Full conversation](../fixtures/evaluations/2026-10-05%20discovery%20v2/06%20Taylor%20conversation.txt) · [Original brief](../fixtures/evaluations/2026-10-05%20discovery%20v2/06%20Taylor%20brief.txt)

## What this campaign reveals

**Discovery is beginning to deliver the intended value.** Guests do not design a package themselves. Briefs connect personal cues with preparation, thoughtful touches and paid proposals. Exchanges do not recite menus, prices or rules. Interaction preferences are asked about instead of inferred from short replies.

**Behaviour remains too similar across hotels.** All six conversations pass through comfort/sleep, then staff interaction, then closure. Wording changes, but the sequence becomes visible. "Lovely" appears in 21 of 52 model replies. The tone is friendly but not yet natural or individual enough. A sleep question should not displace a birthday, taste or ritual cue that deserves follow-up. This finding concerns mechanical sequencing, not a requirement for six different behavioural policies; Julien later accepted a common role across hotels.

**Briefs use capabilities better than conversations do.** Proposals match the DNA: Greek food in Nice, Celadon/yoga in Bangkok, ADELE in Prague, bedding/dining/guiding at Golden Well, targeted treatment in Paris, and meals/dining settings in Lombok. This does not prove that the dialogue itself adapts sufficiently to each hotel. Briefs remain dense at 529–575 words, with repeated information and checks deferred to reception.

**Upsell is identified potential.** These tests show reasons to propose a meal, treatment or targeted service. They measure neither acceptance nor revenue. A paid concert ticket, for example, is not automatically hotel revenue.

### Recommendations made after the campaign

1. Prioritise promising personal cues over automatic sleep/interaction/closure transitions. Noa's birthday is the clearest example.
2. Explore companions too: Helen's habit, Taylor and Ben's ritual, or Mei's specific taste. Do not require every topic for every guest.
3. Vary reactions and transitions; remove systematically enthusiastic paraphrases. Keep questions concise.
4. Close according to what is understood and which threads remain open. Address a relevant concrete clarification before offering to finish instead of routinely deferring it to the hotel.
5. Make briefs more selective, check headings and limit paraphrases that assert more than the guest said.

These were recommendations from the observed results. **No prompt was edited during or immediately after this six-case campaign**, and improved reruns do not replace its original outputs. Later changes are recorded in the separate three-case report.

## Technical evidence and limitations

All six conversations used local guest HTTP routes and the real API. Each normal completion produced an automatic English A–F brief with adapted roles. All 51 retained structured facts have a matching user-message quotation; this provenance check does not guarantee every paraphrase or brief inference is correct.

Median successful chat latency: **10 seconds**; maximum: **20.3 seconds**. One Nice closing-turn call timed out after **60.6 seconds**; an explicit retry succeeded without adding a duplicate guest message. Its budget reservation remains retained because its actual cost is unknown. Real human interview duration was not measured: the six conversations were played in an interleaved sequence.

Conservative accounting for this campaign, including the uncertain reservation: **USD 1.481970**. Initial-trial cumulative accounting: **USD 2.556417 out of USD 5**; balance after export: **USD 2.443583**. The local ledger is not an OpenAI invoice.

Type checking and build passed, as did 12 server/data tests and source formatting. Earlier browser testing used simulated AI and was not rerun for this campaign. These tests check real HTTP dialogue and generation, not a new complete visual review. No email, real stay, hotel purchase or deployment occurred. DNA profiles remain public preparation without hotel operational confirmation.

Limitations: one run per hotel, guests played by Codex, no independent evaluation or real users. The cases do not cover all refusals, prompt attacks, long interruptions or difficult reply styles. They support precise diagnosis, not claims of field validation.

[Profiles defined before the tests](../fixtures/evaluations/2026-10-05%20discovery%20v2/scenarios.json) · [Versions and hashes](../fixtures/evaluations/2026-10-05%20discovery%20v2/run.json) · [Measurements and checks](../fixtures/evaluations/2026-10-05%20discovery%20v2/verification.json) · [Call log, including error and retry](../fixtures/evaluations/2026-10-05%20discovery%20v2/call%20log.json)
