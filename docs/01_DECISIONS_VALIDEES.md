# Décisions produit validées — 5 octobre 2026

Ce document consolide les réponses de Julien dans cette conversation. Les choix explicitement marqués « proposition » ailleurs ne sont pas des validations.

## But

Reconstruire une application Canopia propre, réutilisable et testable pour disposer d'un socle avant le hackathon. L'équipe travaillera pendant l'événement sur une brique additionnelle de recherche. Canopia crée de la valeur en aidant les professionnels à adapter leur expertise et leurs capacités au séjour ; la créativité fait déjà partie du produit de base.

L'événement est préparé sous le nom d'équipe Once Upon a Stay. Le nom produit reste Canopia.

## Exploitation et réservation

- Une console unique pour l'opérateur, pour cette version.
- Les informations de réservation sont communiquées à l'opérateur : nom du voyageur, e-mail, nombre de personnes, dates et autres informations disponibles. Le mode d'import automatisé n'a pas été décidé.
- L'opérateur choisit l'hôtel et crée le séjour, qui dispose de son lien invité.
- Inclure un bouton d'envoi de l'invitation depuis la console, avec un texte personnalisé, un résultat d'envoi visible et une protection contre les doubles envois.
- Le déclenchement de cet envoi reste humain. L'envoi sans clic à la création d'une réservation n'a pas été retenu comme exigence de cette version.
- L'invitation explique l'intérêt de l'échange pour préparer l'accueil et le séjour, son fonctionnement, et l'utilisation des données pour ce séjour. La rédaction exacte reste à produire ; les règles techniques de conservation restent à décider.

## Les six hôtels

| Hôtel | Lieu | Base disponible |
|---|---|---|
| Seven Secrets by Hanging Gardens | Lombok | Fiche préparatoire, conversation fictive, briefs et propositions historiques |
| The Sukhothai Bangkok | Bangkok | Fiche de huit pages, corpus de tests et instructions de brief |
| Hotel Kings Court | Prague | Sélection validée ; sources web préliminaires identifiées |
| Golden Well / U Zlaté Studně | Prague | Sélection validée ; sources web préliminaires identifiées |
| Le Pavillon de la Reine | Paris | Sélection validée ; sources web préliminaires identifiées |
| Hôtel Amour Nice | Nice | Choix explicite de Julien ; fiche et vérification des sources à faire |

Le WindsoR a été remplacé par l'Hôtel Amour Nice. La sélection comporte six hôtels, et non les cinq évoqués au début du cadrage. Aucun compte hôtel autonome n'est demandé.

## Conversation invitée

- Anglais uniquement pour cette version.
- Reprendre le contexte déjà connu de la réservation.
- Expliquer brièvement le but de la conversation.
- Comprendre pourquoi le voyageur vient et ce qui compte pour lui.
- Approfondir les pistes pertinentes en fonction de ses réponses ET des capacités de l'hôtel ; éviter de creuser des options qu'on sait impossibles.
- Recueillir les préférences pratiques lorsqu'elles sont utiles : confort, alimentation, rythme, interaction, etc. Ne pas en faire un questionnaire imposant tous les thèmes.
- Ne pas redemander une information déjà donnée. Ne pas insister à partir d'une réponse minimale.
- Permettre un dernier ajout ou une correction avant la fin normale.
- Viser un échange de 3 à 5 minutes, qui peut se prolonger si le voyageur souhaite en dire davantage. Ce n'est ni un chronomètre ni une limite automatique de messages.
- Réviser le déroulé historique pour retirer répétitions et questions hors contexte ; le déroulé de principe ci-dessus est accepté, le prompt détaillé reste à préparer et à relire.

## ADN hôtel : compréhension et composition

Julien souhaite consulter, modifier et valider les fiches dans le dashboard. L'ADN doit rester riche et souple, avec du texte et des documents, complétés par les informations structurées indispensables.

La fiche couvre l'identité, l'atmosphère, la philosophie d'accueil, le ton du service, les espaces, les équipes connues, les ressources, les savoir-faire, les partenaires identifiés, les habitudes de fonctionnement, les standards, les possibilités d'adaptation et les contraintes réelles.

Les services et packages existants sont des exemples et des capacités mobilisables. Le modèle doit pouvoir combiner et adapter ces capacités pour suggérer une attention ou une expérience nouvelle, en expliquant les confirmations nécessaires. Un manque d'information ne vaut ni autorisation, ni impossibilité démontrée.

L'ADN intervient avant et pendant le dialogue, puis à nouveau pendant la génération du brief. Il ne se limite pas à une étape de filtrage en fin de parcours.

Les informations publiques sont des sources de préparation. Une validation de l'opérateur n'est pas présentée comme une confirmation reçue de l'hôtel.

Le 5 octobre 2026, Julien a demandé un enrichissement approfondi et standardisé des six hôtels, y compris les deux fiches historiques : documents publics, menus/ingrédients, tarifs avec conditions, confort/oreillers, services et possibilités d'adaptation. L'objectif est de permettre des compositions nouvelles à partir des capacités réellement documentées. La présence d'un ingrédient ou d'un service donne une base de proposition, pas une autorisation ni une inclusion gratuite. Les inconnues, sources secondaires, informations historiques et contradictions restent explicites pour la relecture.

## Génération et usage du brief

- À la fin normale de la conversation, génération automatique d'un brouillon texte à partir du séjour, de la conversation et de la fiche ADN correspondante.
- Briefs en anglais pour tous les hôtels.
- Le brouillon apparaît dans le dashboard, rattaché au séjour.
- L'opérateur peut relire, modifier, copier et exporter le brief, notamment en fichier .txt.
- Julien réalise ensuite manuellement la mise en forme dans Gamma ou dans le template approprié à l'hôtel, puis la transmission finale.
- Structure A–F conservée après validation, « Experience suggestions » et intitulés adaptés aux rôles de chaque hôtel. Les anciens exemples restent des références avec leurs réserves, pas des sorties irréprochables.

## Propositions de service et routage

Les propositions apparaissent dans le brief concierge ; si l'hôtel n'a pas de concierge, elles vont à la réception.

Deux formes de propositions sont prévues :

1. Mobiliser, adapter ou combiner les packages, services et savoir-faire déjà identifiés dans l'ADN.
2. Donner une consigne explicite de recherche au concierge : quel type d'activité chercher, pourquoi cela correspond aux besoins possibles du client et quelles contraintes respecter.

Le socle ne recherche pas lui-même sur Internet des partenaires, événements ou activités pendant la préparation d'un séjour. Une recherche publique destinée à préparer une fiche ADN en amont est une activité de préparation différente.

Les propositions restent soumises à l'équipe de l'hôtel. Le produit ne réserve pas, ne promet pas et n'envoie pas une offre d'expérience au voyageur automatiquement.

## Construction et autonomie

### Lancement et arbitrages confirmés dans la session de développement

- Le 5 octobre 2026, Julien a demandé « Developpe » : la construction du socle est lancée dans ce projet. Les envois réels et le déploiement restent interdits sans autorisation ; les dépenses restent soumises à validation, avec l'exception d'essai IA ci-dessous.
- Après enregistrement local de sa clé, Julien a explicitement validé l'activation de GPT‑6.1 Sol avec une enveloppe maximale de 5 USD pour les premiers essais de conversation et de brief. Cette autorisation porte sur des séjours fictifs locaux, pas sur des e-mails, un déploiement, des vrais voyageurs ou une autre dépense. Le modèle est `gpt-6.1-sol` ; la clé n'est pas versionnée. Le compteur d'essai est conservé en base et ne se recharge pas au redémarrage.
- En cas d'arrêt/refus : produire un brief minimal à partir des informations déjà recueillies, avec une mention très visible du souhait du client de ne pas les voir utilisées pour personnaliser son séjour. Aucune nouvelle suggestion d'expérience dans cette branche. Le délai de conservation des données reste à décider.
- Format validé : structure A–F conservée, « BlooM Experience Tips » remplacé par « Experience suggestions », intitulés adaptés aux rôles connus de l'hôtel, réception en l'absence de concierge.
- Édition/régénération validée : chaque régénération crée une nouvelle version sans écraser les précédentes ; l'export utilise la version sélectionnée et enregistrée dans le dashboard.
- Langue confirmée : toute l'application est en anglais, y compris la console opérateur, la conversation et les briefs.

- Développement direct avec Codex, dans un projet Git indépendant et privé.
- Dépôt confirmé par Julien le 5 octobre 2026 : `crosojulien-spec/canopia`, privé, lié au dossier local `C:\Users\croso\Desktop\Canopia_Codex_Preparation`. La mise en place de Git ne vaut pas autorisation de lancer la construction.
- Développement et hébergement hors Replit ; l'ancien Replit sert de référence et doit rester intact.
- Priorité aux comptes et services existants pour l'IA, l'e-mail, la base et l'hébergement ; seule l'enveloppe IA initiale de 5 USD ci-dessus a été validée.
- Préparation ici, puis construction dans une session Codex liée au dossier local et au dépôt choisi.
- Julien doit être consulté avant de combler une inconnue ou de trancher une contradiction produit. L'agent peut avancer sur le reste.
- L'agent additionnel de recherche est réservé au hackathon. Prévoir son point de raccordement sans le construire en avance.
