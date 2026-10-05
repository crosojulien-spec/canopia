# Canopia — préparation de la reconstruction avec Codex

Version de cadrage du 5 octobre 2026, après les décisions de Julien jusqu'à 15 h 22 (heure de Paris).

Ce dossier contient le cadrage validé, les instructions historiques et des exemples récupérés. Il ne contient pas encore la nouvelle application, l'export intégral du code Replit ni les quatre nouvelles fiches ADN complètes. Aucun développement, déploiement ou envoi d'invitation n'a été effectué pour constituer ce dossier.

## Utilisation

1. Extraire ce dossier dans un répertoire dédié sur l'ordinateur qui servira au développement.
2. Ouvrir ce répertoire dans Codex.
3. Copier le texte de `START_HERE.txt` dans la nouvelle session pour préparer le plan et vérifier les accès.
4. Résoudre avec Julien les choix bloquants, puis lancer la construction lorsqu'il le demande.

Git a été initialisé dans ce dossier le 5 octobre 2026. Le dépôt privé confirmé par Julien est [crosojulien-spec/canopia](https://github.com/crosojulien-spec/canopia), sur la branche `main`. Le commit initial `a7a9ed4` conserve le paquet de préparation original. L'environnement d'hébergement reste à choisir et le lancement de la construction reste à confirmer. Ne pas supposer que les connecteurs ou l'historique de cette conversation seront accessibles dans une autre session.

Le dépôt contient la documentation, les prompts, les fiches ADN et les exemples historiques. Le code applicatif y sera ajouté après autorisation de lancement. Les secrets, bases locales, journaux et exports non triés sont exclus par `.gitignore` ; tout nouvel import doit aussi être contrôlé avant commit. `FILE_MANIFEST.json` décrit les fichiers de préparation courants, hors lui-même et hors métadonnées Git.

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

En particulier : l'ADN est un contexte riche pour comprendre et composer du service ; la conversation s'adapte déjà à cet ADN ; le brief texte sera généré automatiquement ; sa mise en forme finale restera manuelle ; la recherche complémentaire sur la personne est une expérimentation séparée pour le hackathon.

## Statut des données incluses

Les textes historiques sont des extractions de documents, pas les fichiers Word/PDF originaux. Les conversations sont des scénarios de test ; ne pas les présenter comme des séjours clients réellement exécutés. Les briefs servent à discuter et vérifier la fidélité du produit, pas à imposer automatiquement toutes leurs recommandations.

Ce paquet est destiné au travail privé de Julien et à sa préparation. Sélectionner explicitement ce qui sera partagé avec l'équipe du hackathon ; aucune autorisation de publication publique n'est donnée par ce dossier.
