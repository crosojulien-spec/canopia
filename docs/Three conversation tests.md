# Three new conversation tests — 6 October 2026

**The role has been rewritten and activated. GPT-6.1 Sol is retained for this stage.** The three new cases yield useful conversations with personal details that survive into the briefs. They also revealed a tendency to finish early and an inconsistent completion signal; those points were refined and checked separately.

The [readable role](Conversation%20agent%20role.md) and [prompt used for the targeted checks](../prompts/conversation-v3.1.txt) reflect Julien's decisions and lessons from `05_Tests.zip`. The stay's purpose guides discovery; the agent follows specific interests, includes companions and can invite a personal note. Cultural awareness helps it identify a useful question without assigning a preference to a country. This behaviour is shared across six hotels.

## Results of the three conversations

**Elena, Daniel and Milo — birthday in Bangkok, nine guest replies.** The agent starts with celebration plans, then discovers Milo's space interest, paper rockets and "Captain Milo" nickname. It initiates the idea of a little note. Elena provides a sentiment—pride in his curiosity—without having to write the card. The conversation then includes Elena's cooking interest, Daniel's street photography, Milo's food preferences and his stuffed-fox ritual. Elena volunteers his age at the end; the agent does not open by asking it.

The brief preserves these details and proposes an illustrated note, culinary discovery, photography and a science outing, all subject to hotel checks. It treats the fox as private comfort information. Limitations: the first reply asks whether the birthday is the husband's or son's, although the son was the more likely referent; some follow-ups combine two elements. Desired staff interaction was not discovered.

**Frederik and Nora — discovering Nice, eight guest replies.** The conversation elicits Curtis Mayfield and record shops for Frederik, façade sketching for Nora, slow breakfasts, lemon, different shellfish tastes and enjoyment of chatting with people. It explicitly distinguishes dislike from allergy. When Frederik mentions opposite sleep-temperature preferences and jokes about duvet theft, the agent asks whether each would prefer a duvet, with humour and without inferring their preference from Copenhagen.

The brief distinguishes both people and gives reception concrete walking, dining and bedding possibilities. Limitations: sleep was a guest addition after the invitation to finish; the model had not discovered that this was a return visit. It also kept `readyToFinish=true` while asking the duvet clarification. The latter two findings motivated v3.1 refinements.

**Samir — solo business trip to Paris, seven guest replies.** The agent discovers counter dining, grilled fish without heavy sauces, Buddy Guy, a preference for a welcoming venue, a thirty-minute run, double espresso and an 08:15 departure. When Samir adds evening timing and needs to return to work, it closes normally without interpreting this as withdrawal from personalisation. No cultural or religious assumption is made from his name.

The brief connects these details to a running route and dinner/blues research that fits his schedule, without inventing a venue or booking. Limitation: the model had offered to finish before exploring sleep, and return/dinner timing came only from the guest's spontaneous addition.

[Complete conversations and unchanged briefs](../fixtures/evaluations/2026-10-06%20conversation%20v3/README.md) are retained. These are fictional guests played by Codex, with real API replies through the application journey. They are not validation by travellers or hotels.

## Refinements after the three cases

The v3 prompt used during the complete conversations is preserved. Active **v3.1** asks the agent to establish destination familiarity earlier, clarify useful business-travel timing and make room for a simple comfort question while the guest is participating. It specifies that a concrete preference question, even late in the exchange, keeps discovery open.

Seven additional real outputs were checked on passages from the same profiles, without replacing the original replies:

| Passage checked | Observed v3.1 result |
|---|---|
| Start of the Nice stay | Asks whether the couple has visited before. |
| Reply recalling the port and a record shop | Connects the music follow-up to that memory. |
| Business traveller's morning already understood | Asks when meetings end to fit the evening. |
| Timing clarified | Opens a question about what helps the guest sleep when travelling. |
| Opposite temperatures in bed | Offers one duvet each; `readyToFinish=false`. |
| Milo's nickname and rockets | Retains the personal-note initiative without public fuss. |
| Samir needs to return to work | Normal completion: `readyToFinish=true`, `stopRequested=false`. |

These are seven targeted checks, not three more complete v3.1 conversations. They check the observed refinements; they do not prove every future exchange will follow this exact path.

## Model, cost and limitations

The official comparison consulted on 6 October lists these Standard text rates per million tokens, before cache effects:

| Model | Input | Output | Decision for this trial |
|---|---:|---:|---|
| GPT-6.1 Sol | USD 2 | USD 10 | Retained; low reasoning for dialogue, medium for briefs. |
| GPT-6 Astra | USD 10 | USD 50 | No demonstrated benefit here justifies five times the token price. |
| GPT-6 Luna | USD 0.10 | USD 0.50 | Economic candidate at one twentieth of the token price; Canopia quality not compared. |

Source: [official OpenAI comparison](https://developers.openai.com/api/docs/models/compare). Price ratios predict neither response length nor final journey cost. Sol is retained to establish behavioural quality, not because a trial proved Luna inadequate. The final economic choice still needs measurement on matching cases.

The conservative local ledger accounted for **USD 0.732144 for the three conversations and three briefs**, approximately **USD 0.24 per case**. Seven targeted checks add USD 0.178908: **USD 0.911052 for this work in total**. **USD 1.532531** remains from the initial USD 5. The earlier uncertain call remains accounted for; no new timeout or uncertain call occurred. The ledger applies a margin over published rates and is not the provider invoice.

All 24 guest replies contain one or two sentences, 14–22 words. Median AI reply latency is 11.6 seconds; the slowest is 22.7 seconds. Behaviour is improving, but this delay remains noticeable in a conversation. The three briefs contain 542–573 words; two slightly exceed the indicative 550-word target. All 24 consolidated facts link to existing guest quotations, and their meaning was also reviewed. Important names, conditions and individual differences survive.

All 12 automated tests pass, as do TypeScript, the interface build and changed-file formatting. Technical checks remain distinct from conversation evaluation. The brief prompt stayed at v2; there were no emails, real stays or deployment. Julien and users still need to assess tone and depth: some formulations remain repetitive, and not every possible topic is deliberately covered.
