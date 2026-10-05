# Six tests de découverte Canopia — 5 octobre 2026

**La version testée découvre des détails utilisables pour personnaliser le séjour et proposer des prestations pertinentes. Elle manque encore des occasions importantes et reste trop mécanique dans sa façon de converser. Je ne la considère pas encore au niveau recherché dans les exemples Sukhothai.**

Les six briefs ci-dessous sont les sorties originales, sans correction. Ils sont disponibles dans la console sous les noms « Camille — Discovery v2 01 » à « Taylor — Discovery v2 06 ».

## Ce qui a été testé

Six nouveaux profils fictifs, un par hôtel, dont trois familles : week-end à Nice, vacances à Bangkok, long week-end à Prague. **52 réponses client, toutes de une ou deux phrases, entre 4 et 23 mots.** J'ai joué chaque voyageur en lisant la question réellement posée avant de répondre. Aucun portrait complet n'a été envoyé au bot.

Les profils et leurs détails potentiels ont été définis avant les appels. Seules les réponses effectivement données et les informations ordinaires de réservation sont entrées dans l'application. Les autres détails servent à identifier les occasions manquées ; ils ne constituent pas une liste que chaque conversation devait obligatoirement épuiser.

Les prompts `conversation-v2` et `brief-v2` ont été préparés à partir du cadrage corrigé par Julien et des cas Sukhothai : découverte progressive, habitudes, détails personnels, capacités de l'hôtel en arrière-plan, préparation et composition dans le brief. Ils sont restés identiques pendant les six essais. Les anciens prompts et résultats sont conservés. Modèle réel : GPT‑6.1 Sol ; ADN version 2 pour chaque hôtel.

| Hôtel et profil | Réponses client, clôture comprise | Première proposition de terminer | Brief |
|---|---:|---:|---:|
| Hôtel Amour Nice — Camille, famille de quatre | 8 | Après la 7e réponse | 535 mots |
| Sukhothai Bangkok — Anika, Mei et Hana, dix ans | 8 | Après la 7e | 575 mots |
| Kings Court Prague — Martin, Eva et leur adolescent | 10 | Après la 9e | 575 mots |
| Golden Well Prague — Ruth et une amie récemment retraitée | 9 | Après la 8e | 554 mots |
| Pavillon de la Reine Paris — Sofia, travail puis journée personnelle | 7 | Après la 6e | 544 mots |
| Seven Secrets Lombok — Taylor et Ben, voyage de noces | 10 | Après la 9e | 529 mots |

Le client fictif accepte la clôture lorsqu'elle est proposée. Je n'ai pas ajouté ensuite les détails manquants pour améliorer artificiellement le résultat. Une seule reprise technique a été nécessaire après une expiration d'appel ; aucune réponse réussie n'a été relancée pour en obtenir une meilleure.

## 1. Hôtel Amour Nice — la famille en week-end

**Découvert.** Les parents retrouvent une ville qu'ils aimaient avant d'avoir des enfants. Noa dessine des chats ; Adam fait des photos. La famille aime marcher sans programme et terminer la journée avec du chocolat chaud et des bonbons à la fraise. Les noix ne lui plaisent pas. Camille supporte mal les chambres très parfumées et apprécie les petites histoires locales racontées par l'équipe.

La relance « What does each of you usually choose for the sweet part? » transforme une réponse vague sur le rituel du soir en préférence concrète. C'est utile à Canopia.

**Ce que le brief en tire.** Préparation limitant les parfums ; proposition de feuille à dessin avec petit mot lié aux chats ; promenade souple adaptée au dessin et à la photo ; possibilité payante d'un moment chocolat chaud/douceurs, éventuellement après un repas familial. Le brief demande de vérifier les produits et les besoins alimentaires, sans affirmer que les bonbons sont en stock ou inclus.

**Ce qui manque.** « Noa is eight, nearly nine » n'entraîne aucune relance. Dans le profil caché, l'anniversaire tombe le dimanche du séjour et Noa n'aime pas qu'on chante publiquement pour elle. Le bot n'apprend ni l'occasion ni cette limite. Il ne découvre pas non plus son goût pour les petits mots. Le brief a raison de ne pas inventer l'anniversaire, mais l'opportunité a été perdue dans la conversation.

**Verdict :** matière personnelle exploitable, avec une occasion importante manquée avant la clôture.

[Conversation complète](../fixtures/evaluations/2026-10-05%20discovery%20v2/01%20Camille%20conversation.txt) · [Brief original](../fixtures/evaluations/2026-10-05%20discovery%20v2/01%20Camille%20brief.txt)

## 2. Sukhothai Bangkok — premières vacances en famille depuis longtemps

**Découvert.** Le bot demande d'où vient la fascination de Hana pour les dragons. Il apprend les histoires du coucher, ses propres versions et ses dessins. Il explore aussi ce qui compte pour Anika : yoga doux, café et après-midi libres. Mei veut comprendre les saveurs thaïes ; Hana préfère les plats doux. L'allergie sévère de Mei aux crustacés, y compris le contact croisé, est préservée. Anika dort au chaud ; Mei préfère une couverture supplémentaire à elle. La famille aime les échanges chaleureux.

**Ce que le brief en tire.** Couvertures et préparation sans parfum ajouté ; proposition de mot invitant Hana à imaginer une histoire à partir des jardins ; yoga adulte suivi d'un café ; dîner thaï avec explications culinaires et choix doux pour Hana, sous réserve de faisabilité et de prise en charge de l'allergie. Le concierge reçoit une recherche ciblée sur des motifs ou histoires correspondant à l'intérêt de Hana. Aucune activité extérieure n'est inventée.

**Ce qui manque.** La cuisine de Mei reste peu approfondie : curiosité pour les saveurs, mais pas ses goûts précis. Les boissons et préférences gingembre/citron vert prévues dans le profil restent inconnues. La conversation produit néanmoins plusieurs détails personnels sans avoir besoin de tout collecter. Elle ne bascule pas dans une présentation des règles de l'hôtel.

**Verdict :** découverte utile des trois personnes et plusieurs propositions distinctes ; profondeur encore améliorable côté goûts.

[Conversation complète](../fixtures/evaluations/2026-10-05%20discovery%20v2/02%20Anika%20conversation.txt) · [Brief original](../fixtures/evaluations/2026-10-05%20discovery%20v2/02%20Anika%20brief.txt)

## 3. Kings Court Prague — le week-end choisi par l'adolescent

**Découvert.** Leo joue de la guitare, aime le jazz et veut faire des photos de rue. Eva aime les cafés anciens et l'Art nouveau. Les parents reviennent après vingt ans. Le bot découvre les boissons de chacun, l'intolérance au lactose de Leo, les besoins de chaleur différents des parents et leur rituel de cartes après dîner. Il creuse ce dernier : rami et chocolat noir.

**Ce que le brief en tire.** Couettes séparées ; proposition de petit mot sur le retour des parents et la découverte de Leo ; possibilité de jouer aux cartes ; recherche jazz et parcours photo/architecture ; dîner ADELE adapté, éventuellement prolongé par le rami. Le chocolat noir n'est pas déclaré automatiquement compatible avec l'intolérance. Le brief conserve la catégorie Deluxe sans lui attribuer les avantages Executive.

**Ce qui manque.** Il ne demande pas ce qui plaît particulièrement à Leo dans le jazz. Les suggestions restent donc assez larges. Son âge exact reste inconnu ; le brief demande de le vérifier seulement si une sortie l'exige. Cette inconnue a moins d'importance que la profondeur de son intérêt musical.

**Verdict :** un des cas les plus utiles : le rituel découvert devient une possibilité de service propre à cette famille, au-delà d'une liste de visites.

[Conversation complète](../fixtures/evaluations/2026-10-05%20discovery%20v2/03%20Martin%20conversation.txt) · [Brief original](../fixtures/evaluations/2026-10-05%20discovery%20v2/03%20Martin%20brief.txt)

## 4. Golden Well Prague — deux amies qui se retrouvent

**Découvert.** Le sens du voyage est le temps retrouvé pour parler, après la retraite de Helen. L'agent essaie d'abord de préciser le souvenir d'un café ou d'un gâteau, puis accepte que ce ne soit pas l'essentiel. Il distingue les bibliothèques et détails architecturaux de Helen des vins locaux de Ruth. Il recueille la lecture au lit, la tisane à la menthe et les oreillers différents. Quand Ruth ne connaît pas la boisson sans alcool que Helen choisirait, il laisse cette préférence ouverte.

**Ce que le brief en tire.** Oreillers, éclairage pour lire et tisane à vérifier ; proposition de visite architecture/bibliothèques avec pause conversation ; découverte de vins tchèques pour Ruth et choix séparé pour Helen ; usage possible du salon. Il respecte la demande de ne pas faire de cérémonie autour de la retraite, sans supposer une relation romantique.

**Ce qui manque.** Il ne creuse pas la routine de Helen : son goût pour le bain et son aversion au parfum floral restent inconnus. Les lits jumeaux ne sont pas recueillis ; le brief demande de confirmer la configuration. Détail éditorial à corriger : la section A du brief ne nomme pas explicitement l'hôtel. La formule « They were students in Prague » est aussi plus affirmative que le récit de visites à cette époque.

**Verdict :** bonne différenciation des deux personnes, mais découverte déséquilibrée en faveur de l'interlocutrice.

[Conversation complète](../fixtures/evaluations/2026-10-05%20discovery%20v2/04%20Ruth%20conversation.txt) · [Brief original](../fixtures/evaluations/2026-10-05%20discovery%20v2/04%20Ruth%20brief.txt)

## 5. Pavillon de la Reine Paris — une journée à soi après le travail

**Découvert.** Sofia veut enfin regarder ce qu'elle traverse d'habitude trop vite : portes anciennes, scènes quotidiennes, photo en noir et blanc. Elle aime le café noir et une pâtisserie au citron. Le simple fait de déjeuner assise compte. Le bot recueille chambre fraîche et calme, oreiller ferme, épaules tendues après le travail et préférence pour une reconnaissance chaleureuse sans conversation imposée.

**Ce que le brief en tire.** Préparation de chambre ; petit mot lié au temps retrouvé ; parcours photo souple ; petit-déjeuner adapté ; proposition de soin Codage ciblé de 45 minutes, fondée sur la tension des épaules et la capacité documentée du spa. Le soin reste une possibilité à discuter, sans diagnostic ni achat autorisé.

**Ce qui manque.** Il clôt après six réponses sans clarifier le jour libre ni les besoins alimentaires, alors qu'il a ouvert le sujet du petit-déjeuner. Le végétarisme reste inconnu et le brief reporte la vérification à l'équipe. Il ne creuse pas non plus ce qui l'aide habituellement à relâcher ses épaules. Le soin est donc une hypothèse pertinente du brief, pas une envie exprimée ni une vente validée. Son autre intérêt, l'opéra, n'a pas été découvert ; ce seul manque ne justifierait pas de prolonger l'échange.

**Verdict :** bonne compréhension du sens personnel du séjour et piste commerciale justifiée ; clôture un peu rapide sur les suites utiles.

[Conversation complète](../fixtures/evaluations/2026-10-05%20discovery%20v2/05%20Sofia%20conversation.txt) · [Brief original](../fixtures/evaluations/2026-10-05%20discovery%20v2/05%20Sofia%20brief.txt)

## 6. Seven Secrets Lombok — lune de miel sans programme imposé

**Découvert.** Longs petits-déjeuners, photos, couchers de soleil et cuisine indonésienne à comprendre. Ben ne boit pas d'alcool ; Taylor apprécie parfois un gin aux agrumes. L'agent précise les boissons après une réponse sur l'arrivée. Il découvre aussi les oreillers différents, les couvertures séparées et le refus d'un accueil public spectaculaire.

**Ce que le brief en tire.** Arrivée souple ; boissons distinctes ; literie adaptée si disponible ; petit mot privé ; proposition de repas indonésien avec explications et de dîner dans un cadre approprié au coucher du soleil. Il ne transforme pas automatiquement la lune de miel en droit à un package et n'invente pas un cours de cuisine.

**Ce qui manque.** Le goût pour la photo n'est pas approfondi. Leur rituel de choisir ensemble les photos du jour avec du popcorn ne ressort pas. Les surnoms et l'intérêt pour les massages restent inconnus ; aucune question intrusive sur l'intimité n'était nécessaire. Le petit mot généré — « Wishing you an unhurried honeymoon » — reste assez interchangeable. Une meilleure découverte de leur quotidien partagé aurait donné davantage de personnalité au brief.

**Verdict :** adaptations concrètes et bonnes distinctions entre les deux personnes, mais attention encore générique pour un voyage aussi personnel.

[Conversation complète](../fixtures/evaluations/2026-10-05%20discovery%20v2/06%20Taylor%20conversation.txt) · [Brief original](../fixtures/evaluations/2026-10-05%20discovery%20v2/06%20Taylor%20brief.txt)

## Ce que cette série révèle

**La découverte commence à produire la valeur attendue.** Les clients ne conçoivent pas eux-mêmes un package. Les briefs relient des indices personnels à des préparations, des attentions et des propositions payantes. Les échanges n'énumèrent ni menus, ni tarifs, ni règlements. Les préférences d'interaction sont demandées, au lieu d'être déduites de la brièveté des réponses.

**Le comportement reste trop semblable d'un hôtel à l'autre.** Les six conversations passent par le confort/sommeil, puis le rapport à l'équipe, puis la clôture. Les mots changent, mais cet enchaînement devient visible. « Lovely » apparaît dans 21 des 52 réponses du modèle. Le ton est aimable ; il n'est pas encore assez naturel ni singulier. Une question sur le sommeil ne doit pas effacer un indice d'anniversaire, de goût ou de rituel qui méritait un rebond.

**Les briefs exploitent mieux les capacités que la conversation.** Les propositions correspondent aux ADN : cuisine grecque à Nice, Celadon/yoga à Bangkok, ADELE à Prague, literie/restaurant/guidage au Golden Well, soin ciblé à Paris, repas et lieux de dîner à Lombok. Cela ne prouve pas que le dialogue lui-même s'adapte suffisamment à chaque hôtel. Les briefs restent denses, entre 529 et 575 mots, avec quelques reprises d'information et vérifications reportées à la réception.

**L'upsell est un potentiel identifié.** Ces essais montrent des raisons de proposer un repas, un soin ou un service ciblé. Ils ne mesurent ni acceptation, ni revenu. Un billet de concert payant, par exemple, n'est pas automatiquement du revenu hôtelier.

### Corrections recommandées après lecture

1. Faire passer les indices personnels prometteurs avant la transition automatique vers sommeil/interaction/clôture. L'anniversaire de Noa est le cas le plus clair.
2. Approfondir aussi les compagnons : une habitude de Helen, un rituel de Taylor et Ben, un goût précis de Mei. Ne pas imposer toutes les rubriques à tous les voyageurs.
3. Varier les réactions et les transitions ; supprimer les reformulations systématiquement enthousiastes. Garder la concision des questions.
4. Clore en fonction de ce qui a été compris et des pistes encore ouvertes. Avant de proposer de finir, traiter une clarification concrète déjà pertinente plutôt que la reporter systématiquement à l'hôtel.
5. Rendre les briefs plus sélectifs, vérifier les intitulés et limiter les reformulations qui deviennent des faits plus affirmatifs que le client.

Ces corrections sont des recommandations tirées des résultats. **Les prompts n'ont pas été retouchés après la campagne** et aucun deuxième passage amélioré ne remplace les premières sorties.

## Preuves techniques et limites

Les six conversations ont utilisé les routes invitées de l'application locale et la véritable API. Les six clôtures ont produit leur brief automatique, en anglais, avec sections A–F et rôles adaptés. Les 51 faits structurés conservés possèdent tous une citation correspondant à un message client ; ce contrôle de provenance ne garantit pas que chaque paraphrase ou déduction du brief soit parfaite.

Temps médian des appels de conversation réussis : **10 secondes**, maximum **20,3 secondes**. Un appel de clôture conversationnelle à Nice a expiré après **60,6 secondes** ; une reprise explicite a réussi sans ajouter un deuxième message client. Sa réservation budgétaire reste conservée car son coût exact est inconnu. La durée vécue par un vrai voyageur n'a pas été mesurée : les six dialogues ont été joués de façon entrelacée.

Coût conservateur comptabilisé pour cette série, réservation incertaine comprise : **1,481970 USD**. Cumul de l'essai initial : **2,556417 USD sur 5 USD** ; solde après export : **2,443583 USD**. Ce compteur local n'est pas la facture OpenAI.

Compilation et bundle réussis, 12 tests serveur/données réussis, format du code vérifié. Le test navigateur antérieur utilisait une IA simulée ; il n'a pas été rejoué dans cette campagne. Ces six essais vérifient le dialogue et la génération réels via HTTP, pas une nouvelle revue visuelle complète. Aucun e-mail, vrai séjour, achat hôtelier ou déploiement. Les ADN restent des préparations publiques sans validation opérationnelle des hôtels.

Limites : un seul passage par hôtel, voyageurs joués par Codex, sans évaluation indépendante ni vrais clients. Ils ne couvrent pas tous les refus, les attaques de prompt, les interruptions longues ou les styles de réponse difficiles. Ils servent à diagnostiquer précisément le produit, pas à annoncer sa validation terrain.

[Profils définis avant les essais](../fixtures/evaluations/2026-10-05%20discovery%20v2/scenarios.json) · [Versions et empreintes](../fixtures/evaluations/2026-10-05%20discovery%20v2/run.json) · [Mesures et contrôles](../fixtures/evaluations/2026-10-05%20discovery%20v2/verification.json) · [Journal des appels, erreur et reprise comprises](../fixtures/evaluations/2026-10-05%20discovery%20v2/call%20log.json)
