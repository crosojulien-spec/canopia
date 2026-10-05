# Dix conversations courtes — revue du 5 octobre 2026

**Cadrage de l'évaluation corrigé après la clarification de Julien : cette série ne valide pas la découverte attendue de Canopia.** Le choix des situations et leur première lecture privilégiaient la qualification de demandes et les contraintes opérationnelles. Ils sous-évaluaient la richesse personnelle découverte, les possibilités de préparation et de surprise, et le potentiel d'upsell pertinent. C'est une erreur de cadrage de l'évaluateur, en plus des limites observées du bot.

Le raccordement fonctionne. Le bot est poli et prudent, mais transforme trop souvent une première piste en résumé suivi d'une invitation à terminer. Les briefs amplifient ensuite une collecte parfois mince. Les transcriptions ci-dessous sont conservées telles quelles : les observations techniques restent des faits, leur interprétation comme preuves de qualité produit est rectifiée.

Les premiers essais Maya/Ben étaient des contrôles de raccordement, pas une validation de la conduite d'entretien. Cette série les complète avec des réponses progressives. Aucun prompt, modèle, ADN ou comportement applicatif n'a été modifié pendant les essais.

## Méthode et preuves

10 profils fictifs sur les six hôtels, définis avant les appels dans [scenarios.json](../fixtures/evaluations/2026-10-05%20short%20replies/scenarios.json). Codex a joué chaque voyageur et rédigé sa prochaine réponse après lecture de la vraie question du bot. **Le profil caché n'a jamais été envoyé à Canopia**, ni inclus dans les notes de réservation. Les seuls détails fournis d'avance étaient les données normales du séjour et, pour Alex, la catégorie Deluxe réservée.

Les réponses client suivent la question reçue. Des préférences sont volontairement restées inconnues quand le bot n'a pas ouvert le sujet. Deux ajouts spontanés à la clôture testent sa capacité à reprendre : l'appel professionnel d'Alex et l'allergie du fils de Nina. Ces informations sont attribuées à l'initiative du client, pas à la découverte du bot.

Les messages passent par les routes HTTP invitées de l'application locale. Les neuf clôtures normales déclenchent le vrai générateur ; le refus déclenche le relevé minimal prévu. Pas de nouvelle génération ni de retouche des sorties. Trois conversations distinctes pouvaient recevoir une réponse en parallèle, jamais deux tours d'une même conversation. Les délais ne constituent donc pas une mesure de charge ni une durée d'entretien humain.

| Mesure | Observation |
|---|---|
| Version | GPT-6.1 Sol, commit `b9884d8`, prompts v1 inchangés, six ADN v2 |
| Messages client | **41**, chacun de **1 à 2 phrases**, entre **3 et 20 mots**, moyenne **10,2 mots** |
| Longueur des échanges | 3 à 6 messages client, clôture comprise ; aucune longueur forcée |
| Invitation à terminer | Après deux réponses dans 5 cas ; cela n'est pas automatiquement un défaut |
| Résultat technique | 41 réponses reçues sans erreur ; 9 briefs GPT et 1 relevé minimal |
| Délai des réponses | Médiane 6,4 secondes ; maximum 9,2 secondes |
| Briefs GPT | **494 à 926 mots**, moyenne **632** |
| Budget | **0,992361 USD** comptabilisé pour cette série ; cumul initial **1,074447 USD**, reste **3,925553 USD** sur 5 immédiatement après les tests |

Le montant est le compteur conservateur de l'application, pas la facture du fournisseur. [Provenance et empreintes des prompts](../fixtures/evaluations/2026-10-05%20short%20replies/run.json) ; [messages, délais et signaux de clôture](../fixtures/evaluations/2026-10-05%20short%20replies/turn%20review.json). Les dix séjours restent consultables dans la console sous « Prénom — Short replies 01…10 ».

## Résultats par profil

| Cas | Ce que le bot obtient réellement | Diagnostic |
|---|---|---|
| **01 Nina — Sukhothai**, vacances en famille, 6 réponses | Rythme, intérêt du fils, âge donné dans la réponse sur ses intérêts, musique pour Nina et art pour sa femme. L'allergie et l'interdiction de surprises alimentaires sont ajoutées spontanément à la fin. | Bonne ouverture vers chaque membre de la famille, formulation inclusive. **Approfondissement insuffisant** : musique, art et Spider-Man deviennent surtout des catégories pour le concierge. L'allergie est ensuite bien conservée, sans garantie de sécurité. Brief de 926 mots, trop dispersé. |
| **02 Alex — Kings Court**, conférence, 5 réponses | Petit déjeuner avant 7 h 15. L'appel privé est ajouté par le client après la première clôture ; le bot reprend et demande le jour. | **Bon ajustement après l'ajout tardif.** Le brief respecte la catégorie Deluxe et ne présente pas le lounge comme un bureau privé. Les dates de petit déjeuner et besoins alimentaires restent à demander par la réception ; la collecte a résolu une partie du besoin. |
| **03 Sam — Amour**, anniversaire discret, 4 réponses | Repas détendu, petits plats à partager, deux personnes sans alcool, pas de mise en scène publique ; reprend « girlfriend » sans supposition. | **S'arrête avant une relance prometteuse** sur les goûts de boissons ou ce qui rendrait ce moment personnel. Gingembre/agrumes et heure d'arrivée restent inconnus ; le brief ne les invente pas. Bonne base, faible singularité. |
| **04 Rose — Golden Well**, voyage avec sa mère, 5 réponses | Bâtiments anciens/vues, vingt minutes de marche sur terrain plat, pauses assises, escaliers difficiles, refus d'une visite de trois heures. | Bonne précision d'un besoin pratique. Elle laisse peu de place à la découverte de ces deux personnes, de leur relation au voyage ou de leurs habitudes : **ce résultat ne suffit pas à valider Canopia**. Pas de diagnostic ni d'âge inventé. Brief fidèle, encore répétitif. |
| **05 Jules — Pavillon de la Reine**, pause dessin, 3 réponses | Dessiner dans le Marais, petites cours et scènes ordinaires. | **Clôture trop rapide** après deux réponses informatives. Ne précise pas le rythme de dessin ou la forme d'aide souhaitée. Le brief propose ensuite des circuits/suggestions et un repli à l'hôtel. Le régime végétalien reste inconnu : aucune conversation alimentaire n'a eu lieu, ce qui n'est pas à lui seul une faute. |
| **06 Eli — Seven Secrets**, lune de miel après trajet, 5 réponses | Fatigue, arrivée vers 23 h, repas léger végétarien ; corrige « éviter les laitages » en « yaourt accepté, pas de plat lourd au fromage ». | **Bonne correction et bonne gestion de la contrainte horaire.** Le brief conserve l'incertitude entre room service 24 h et cuisine jusqu'à 21 h. Exploration limitée à la première soirée ; la fin demandée par le client est ensuite respectée. Aucun champagne offert ou package présumé. |
| **07 Jo — Sukhothai**, escale, 3 réponses | Chambre calme, présence de 23 h 30 à 3 h 30, sommeil prioritaire. | **Brièveté adaptée.** Pas de spa ni d'itinéraire ajouté. En revanche, 494 mots pour ce besoin simple, avec plusieurs répétitions. |
| **08 Luca — Kings Court**, famille/piscine, 4 réponses | Âge de huit ans, baignade souhaitée vers 18 h, flexibilité pour le matin. | **Exemple mal ciblé pour évaluer la valeur centrale.** L'agent transforme immédiatement l'enthousiasme de l'enfant en discussion d'horaires. La cohérence de la règle vérifie une limite opérationnelle ; elle ne prouve pas la compréhension du séjour familial, de ses rituels ou de ce qui pourrait le rendre singulier. |
| **09 Morgan — Amour**, motif privé puis refus, 3 réponses | Motif familial sans détail, souhait de calme, puis retrait explicite. | **Bonne retenue et arrêt immédiat.** Aucun diagnostic, aucune demande d'explication du motif familial. Le relevé minimal interdit toute personnalisation, y compris à partir du souhait de calme précédemment partagé. |
| **10 Chris — Golden Well**, séjour sans programme, 3 réponses | Envie de se promener sans projet précis, puis fin demandée. | **Sortie adaptée**, sans refus de personnalisation erroné. Brief de 511 mots malgré très peu de matière. Les recherches ne sont proposées que si demandées, mais occupent encore beaucoup de place. |

Conversations et briefs complets :

| Cas | Échange original | Brief original |
|---|---|---|
| 01 Nina | [Conversation](../fixtures/evaluations/2026-10-05%20short%20replies/01%20Nina%20conversation.txt) | [Brief](../fixtures/evaluations/2026-10-05%20short%20replies/01%20Nina%20brief.txt) |
| 02 Alex | [Conversation](../fixtures/evaluations/2026-10-05%20short%20replies/02%20Alex%20conversation.txt) | [Brief](../fixtures/evaluations/2026-10-05%20short%20replies/02%20Alex%20brief.txt) |
| 03 Sam | [Conversation](../fixtures/evaluations/2026-10-05%20short%20replies/03%20Sam%20conversation.txt) | [Brief](../fixtures/evaluations/2026-10-05%20short%20replies/03%20Sam%20brief.txt) |
| 04 Rose | [Conversation](../fixtures/evaluations/2026-10-05%20short%20replies/04%20Rose%20conversation.txt) | [Brief](../fixtures/evaluations/2026-10-05%20short%20replies/04%20Rose%20brief.txt) |
| 05 Jules | [Conversation](../fixtures/evaluations/2026-10-05%20short%20replies/05%20Jules%20conversation.txt) | [Brief](../fixtures/evaluations/2026-10-05%20short%20replies/05%20Jules%20brief.txt) |
| 06 Eli | [Conversation](../fixtures/evaluations/2026-10-05%20short%20replies/06%20Eli%20conversation.txt) | [Brief](../fixtures/evaluations/2026-10-05%20short%20replies/06%20Eli%20brief.txt) |
| 07 Jo | [Conversation](../fixtures/evaluations/2026-10-05%20short%20replies/07%20Jo%20conversation.txt) | [Brief](../fixtures/evaluations/2026-10-05%20short%20replies/07%20Jo%20brief.txt) |
| 08 Luca | [Conversation](../fixtures/evaluations/2026-10-05%20short%20replies/08%20Luca%20conversation.txt) | [Brief](../fixtures/evaluations/2026-10-05%20short%20replies/08%20Luca%20brief.txt) |
| 09 Morgan | [Conversation](../fixtures/evaluations/2026-10-05%20short%20replies/09%20Morgan%20conversation.txt) | [Relevé minimal](../fixtures/evaluations/2026-10-05%20short%20replies/09%20Morgan%20brief.txt) |
| 10 Chris | [Conversation](../fixtures/evaluations/2026-10-05%20short%20replies/10%20Chris%20conversation.txt) | [Brief](../fixtures/evaluations/2026-10-05%20short%20replies/10%20Chris%20brief.txt) |

## Les problèmes à corriger

### 1. La brièveté du client devient une préférence supposée

Les neuf briefs normaux décrivent des réponses brèves ou un contact bref dans « Interaction style ». Par exemple, Nina : « Brief replies » puis « Keep contact concise ». Jules reçoit aussi « Keep contact concise », sans l'avoir demandé. Certaines conclusions sont justifiées par le contexte — escale, conférence, discrétion explicitement souhaitée — mais **la longueur des messages ne suffit pas à établir le style de service recherché**. L'extraction des faits de Nina ne contient pas cette préférence ; elle est ajoutée lors de la génération du brief.

Respecter « j'ai fini de répondre » n'autorise pas à généraliser « je souhaite peu parler avec le personnel pendant mon séjour ». Cette distinction doit être explicite dans les deux prompts.

### 2. L'agent reconnaît des thèmes, puis délègue trop vite

Pour Nina, « music » et « art » deviennent des pistes de recherche sans préciser quel genre, quel format ou quelle expérience commune serait plaisante. Pour Sam, « sans alcool » reste une catégorie sans goût personnel. Pour Jules, les cours sont identifiées, mais pas la façon dont il aime y dessiner. Il ne faut pas tout approfondir : **une bonne relance sur la piste la plus féconde suffit souvent**.

Le cas Rose fournit une contrainte utile au professionnel. Le cas Luca vérifie un horaire. Leur première appréciation leur accordait trop de poids : une découverte réussie doit aussi apprendre quelque chose de personnel que l'hôtel pourrait utiliser pour adapter le séjour, au-delà du traitement immédiat d'une demande.

### 3. La prudence occupe trop de place dans la relation

Le bot rappelle fréquemment que l'équipe doit confirmer. C'est nécessaire quand il évoque disponibilité, tarif ou adaptation, mais la répétition donne un ton administratif. Il peut rester prudent tout en parlant d'abord du séjour et de la personne. L'ouverture fixe est la même pour tous les hôtels ; les différences d'ADN apparaissent surtout dans les ressources citées, moins dans la qualité du ton.

### 4. Les briefs compensent la collecte par de la longueur

Les contraintes explicites sont globalement bien conservées : allergie sévère, correction sur le yaourt, marche, âge et horaires piscine, refus. Pas de recette prétendue sûre, de prestation réservée ou de fournisseur externe inventé relevé dans cette série.

Mais les rubriques répètent informations, inconnues et contrôles. Jules donne 30 mots au total ; le brief en fait 595. Jo donne 28 mots ; le brief en fait 494. Garder A–F est compatible avec des sections courtes. Une donnée manquante doit apparaître là où elle change une décision, pas être répétée dans plusieurs rubriques.

## Ce qu'un meilleur rebond pourrait être

Ces formulations sont des **propositions de rédaction**, pas des réponses obtenues pendant les tests ni un script à imposer :

- Après les petits plats et l'absence d'alcool de Sam : « What do you both enjoy drinking when you want something a little special without alcohol? » Une courte réponse peut ouvrir une adaptation à partir des ressources du bar, sans lui promettre une boisson.
- Après les cours et scènes de rue de Jules : « When you find a spot you like, do you tend to settle in and draw, or keep wandering with your sketchbook? » Cela distingue une bonne halte d'un parcours, sans imposer une visite guidée.
- Après les intérêts de la famille de Nina : « What kind of live music do you enjoy most? » Une seule branche pertinente à explorer, puis laisser la place aux autres besoins ; pas un interrogatoire successif sur tous les loisirs.

**Le corpus Sukhothai est la base de conception désignée par Julien**, pas une référence secondaire. Les habitudes, goûts, occasions, intentions, niveaux d'interaction et détails de vie qu'il révèle constituent la matière attendue. Les notes de revue demandent déjà de mieux rebondir : par exemple, demander quels journaux aime le voyageur qui dit en lire (cas 01), au lieu de passer à un autre thème. Le cas 04 découvre café, gourmandises, musique et surnoms ; le cas 07 découvre les deux couvertures et le canapé. Les sujets de confort, de senteur ou d'alimentation ne sont donc pas à supprimer : leur pertinence, leur formulation et leur ordre doivent suivre la personne. Corriger les répétitions, promesses et erreurs historiques ne doit pas appauvrir la découverte.

## Proposition de correction, non appliquée

1. Distinguer réponse courte informative, absence d'intérêt pour un sujet et souhait de terminer. Ne pas profiler le style d'accueil à partir du nombre de mots.
2. Repartir des découvertes concrètes du corpus Sukhothai. À partir d'un indice, approfondir ou ouvrir une autre dimension personnelle utile : intentions, rapport au lieu, habitudes, goûts, confort, occasion ou lien entre voyageurs. Ne pas limiter la conversation à la qualification d'une seule demande.
3. Utiliser l'ADN pour orienter discrètement la question et reconnaître une capacité combinable, sans réciter les services ou les réserves internes.
4. Avant de proposer la clôture, vérifier si la connaissance obtenue donne réellement matière à préparer et personnaliser ce séjour. Une réponse courte n'est pas un critère de fin. Aucun nombre minimal de tours ni toutes les rubriques obligatoires ; respecter le souhait de terminer.
5. Conserver A–F, mais rendre les briefs proportionnés aux informations collectées ; séparer faits, propositions et confirmations sans les répéter.
6. Revoir les scénarios d'après les tests Sukhothai et la valeur centrale explicitée par Julien avant toute nouvelle campagne : richesse découverte, liens entre les détails, préparations possibles, attentions et upsell pertinent soumis à l'hôtel. Conserver des contrôles de refus, de fidélité et de contraintes, sans les présenter comme le cœur de la réussite produit.

## Portée de l'évaluation

Il s'agit de jeux de rôle écrits et relus par Codex, avec de vrais appels du bot. Ce ne sont ni des entretiens avec dix voyageurs, ni une évaluation indépendante, ni un taux de réussite statistique. Une seule exécution par cas ; pas de test d'injection ni de panne dans cette série. Les attentes de collecte sont déduites des décisions produit et de l'ADN public, **elles ne constituent pas un cahier des charges validé par les six hôtels**.

Le cas Chris utilise le mot « weekend » alors que les dates de test communes sont du mardi au vendredi. C'est une incohérence du scénario ; le brief la relève en conservant les dates. Elle n'est pas utilisée pour juger la qualité de l'entretien.

Méthode de contrôle cohérente avec les [recommandations officielles d'évaluation](https://developers.openai.com/api/docs/guides/evaluation-best-practices) : scénarios liés au vrai usage, traces complètes et critères observables. Le jugement produit et les exemples ci-dessus reposent sur cette série, pas sur une note produite par une API d'évaluation.
