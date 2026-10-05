# Canopia — application locale

État du 5 octobre 2026. La construction a été lancée par Julien dans cette session.

Ce dossier contient maintenant l'application locale, le cadrage validé, les prompts, six fiches ADN enrichies et les exemples historiques. La console, la conversation et les briefs sont en anglais. Aucun appel IA payant, envoi d'e-mail ou déploiement n'a été effectué. Les six ADN ont été documentés sur le web le 5 octobre 2026, avec menus, prix, capacités, propositions et limites distincts ; ils ne sont pas validés par les hôtels. Le [guide de relecture](data/dna/Review%20guide.md) décrit leur structure, les manques et l'import versionné qui protège les corrections et les anciens séjours.

## Utilisation

Node.js 22.12+ requis (24.18 utilisé ici). Depuis ce dossier :

```powershell
npm ci
npm run dev
```

Ouvrir **http://127.0.0.1:4310**, puis créer ton compte opérateur avec ton propre mot de passe. Aucun compte n'est préconfiguré. Les données persistent dans `.local/postgres` et une clé locale est créée dans `.local/installation.key`. Conserver ces deux éléments ensemble pour déplacer une installation. Ils sont exclus de Git.

L'IA et l'envoi d'e-mails sont désactivés par défaut. Pour répéter le parcours sans appel externe, avec une base distincte :

```powershell
$env:CANOPIA_AI_MODE='simulation'
$env:CANOPIA_DATA_DIR='.local/rehearsal'
npm run dev
```

Le raccourci `npm run demo` active aussi ce mode avec une base distincte et force les connexions externes à rester désactivées. Les réponses simulées sont fixes et explicitement signalées. Elles ne prouvent ni la qualité du dialogue GPT ni la faisabilité des propositions. Fermer la session PowerShell pour retirer ses réglages temporaires. Ne pas lancer deux serveurs sur le même dossier de données.

Git a été initialisé dans ce dossier le 5 octobre 2026. Le dépôt privé confirmé par Julien est [crosojulien-spec/canopia](https://github.com/crosojulien-spec/canopia), sur la branche `main`. Le commit initial `a7a9ed4` conserve le paquet de préparation original. L'environnement d'hébergement reste à choisir. Ne pas supposer que les connecteurs ou l'historique de cette conversation seront accessibles dans une autre session.

Le dépôt contient le code applicatif, la documentation, les prompts, les fiches ADN et les exemples historiques. Les secrets, bases locales, journaux et exports non triés sont exclus par `.gitignore`. `FILE_MANIFEST.json` décrit les fichiers versionnés, hors lui-même et hors métadonnées Git.

## Fonctionnalités et vérification

Console protégée par mot de passe, ADN versionnés avec documents texte/Markdown, création de séjour, lien invité aléatoire expirant et révocable, invitation éditable, conversation, génération automatique, relecture, versions séparées et export `.txt`. Un refus produit un relevé minimal qui interdit clairement la personnalisation. Les corrections enregistrées sont protégées contre les sauvegardes concurrentes.

React/TypeScript/Vite pour les écrans ; Express pour le serveur ; PostgreSQL local avec PGlite. `DATABASE_URL` permet un raccordement PostgreSQL ultérieur, non testé à distance. L'ancien Replit reste intact. L'agent de recherche n'est pas construit : seul son contrat de raccordement existe.

```powershell
npm run build
npm test
npm run test:e2e
```

Les essais navigateur utilisent une base isolée sur le port 4311 et un profil Edge/Chrome de test, sans ouvrir ton profil personnel. Les captures sont dans `.local/screenshots`. Les appels OpenAI et SMTP réels restent à vérifier après autorisation. Les vrais séjours sont bloqués tant que les règles de conservation et l'information voyageur ne sont pas décidées et implémentées.

Voir [Connections and operation](docs/Connections%20and%20operation.md) pour les accès nécessaires et [Verification report](docs/Verification%20report.md) pour la portée des contrôles. `.env.example` contient seulement les noms de configuration. Aucune clé réelle ne doit être copiée dans le code ou la conversation.

## Ordre de lecture

| Fichier | Utilité |
|---|---|
| `AGENTS.md` | Règles de travail et gestion des inconnues |
| `docs/01_DECISIONS_VALIDEES.md` | Périmètre produit de référence |
| `docs/02_PLAN_DE_RECONSTRUCTION.md` | Ordre de travail proposé, sans choix technique imposé |
| `docs/03_QUESTIONS_OUVERTES.md` | Choix restant à résoudre, avec leur impact |
| `docs/04_CRITERES_DE_VERIFICATION.md` | Comment vérifier le produit reconstruit |
| `docs/05_EXTENSION_HACKATHON.md` | Brique à construire pendant l'événement |
| `data/hotel_selection.json` | Les six hôtels retenus et l'état de leur documentation |
| `prompts/legacy/hotel_ops_brief_v1.txt` | Instructions complètes copiées du GPT fourni par Julien |
| `references/knowledge/` | Textes extraits des deux fiches hôtel historiques |
| `fixtures/historical/` | Dix conversations Sukhothai, onze briefs et dossier Seven Secrets |
| `sources/source_index.json` | Origine et statut de chaque texte extrait |
| `references/audit/` | Rapport antérieur de 17 pages, conservé comme historique |

## Ce qui prime

Les nouvelles instructions de Julien priment sur ce dossier. Dans ce dossier, `docs/01_DECISIONS_VALIDEES.md` prime sur les anciens prompts, les briefs de test et le rapport d'audit. Un document historique n'établit pas à lui seul qu'une fonction est active ou correcte.

En particulier : l'ADN est un contexte riche pour comprendre et composer du service ; le brief texte est généré automatiquement à la clôture normale ; la qualité du dialogue réel reste à évaluer avec le modèle choisi. La mise en forme finale et la transmission restent manuelles. La recherche complémentaire est réservée au hackathon.

## Statut des données incluses

Les textes historiques sont des extractions de documents, pas les fichiers Word/PDF originaux. Les conversations sont des scénarios de test ; ne pas les présenter comme des séjours clients réellement exécutés. Les briefs servent à discuter et vérifier la fidélité du produit, pas à imposer automatiquement toutes leurs recommandations.

Ce paquet est destiné au travail privé de Julien et à sa préparation. Sélectionner explicitement ce qui sera partagé avec l'équipe du hackathon ; aucune autorisation de publication publique n'est donnée par ce dossier.
