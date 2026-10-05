# Plan de reconstruction proposé

Ce plan conserve la séquence proposée avant le lancement. La construction a été autorisée le 5 octobre 2026 ; voir `README.md` et `Verification report.md` pour l'état réel. Les choix techniques réversibles sont React/TypeScript, Express et PostgreSQL local via PGlite. Aucun modèle payant ni hébergement n'est choisi par ce document.

## 1. Vérifier et compléter le dossier

- Confirmer le dossier local, les outils et les accès réellement disponibles dans la nouvelle session Codex.
- Récupérer une copie filtrée du code de l'ancienne app. L'inspection antérieure concernait le projet Replit Admin-Console, commit 39caeb7 daté du 1er octobre 2026 ; la correspondance exacte avec le déploiement public n'a pas été prouvée.
- Conserver l'existant comme référence ; examiner les parties réutilisables et expliquer à Julien l'approche retenue. Ne pas supposer qu'une réécriture totale de chaque ligne est nécessaire pour disposer d'une app indépendante.
- Relire le prompt fourni, la fiche Sukhothai et au moins un ensemble conversation / brief. Relire également le dossier Seven Secrets.
- Examiner les services déjà détenus, sans afficher les secrets. Proposer un choix technique et une estimation si un coût nouveau apparaît.

Résultat : sources disponibles, accès confirmés et questions bloquantes identifiées.

## 2. Préparer les six ADN

- Conserver les fiches historiques Sukhothai et Seven Secrets ; relever les éléments datés ou non confirmés avant de les utiliser.
- Préparer Kings Court, Golden Well, Pavillon de la Reine et Hôtel Amour Nice à partir de sources publiques attribuées.
- Couvrir identité, capacités, possibilités d'adaptation, services existants, limites, rôles et fonctionnement connu. Garder un texte riche, pas un catalogue fermé.
- Séparer information publiée, observation historique, proposition de synthèse et point à confirmer.
- Faire examiner les fiches par Julien avant de les présenter comme fiches opérateur de référence. Ne pas inventer un rôle, une prestation, un budget ou une autorisation pour combler un vide.

Résultat : six dossiers utilisables pour la démonstration, avec leurs limites visibles.

## 3. Construire le socle opérateur et invité

- Console unique, protégée ; gestion des hôtels, séjours et informations de réservation.
- Consultation et modification du profil ADN avec références documentaires.
- Association explicite séjour / hôtel et création du lien invité.
- Invitation e-mail déclenchée par l'opérateur ; résultat visible, traitement d'une erreur et prévention des doubles envois.
- Expérience invitée en anglais : contexte prérempli, dialogue adapté à l'hôtel et sauvegarde de la conversation.
- Prévoir des liens invités difficiles à deviner et des accès limités au séjour concerné. Les durées d'expiration et de conservation restent à faire choisir.

Résultat : un séjour peut être créé, invité et conduire à une conversation enregistrée.

## 4. Générer et relire le brief

- Réviser les instructions historiques en montrant les changements qui affectent le produit.
- À la fin normale, déclencher la génération en anglais avec le bon ADN et la conversation complète ou une représentation dont la fidélité est vérifiée.
- Afficher séparément la fin de conversation et l'état réel de génération du brief, pour ne pas confondre « terminé » et « brief disponible ».
- Proposer des adaptations cohérentes avec les capacités. Donner des missions de recherche au concierge lorsqu'un choix externe est nécessaire.
- Router vers la réception si l'absence de concierge est connue ; demander la décision opérateur si ce rôle est inconnu.
- Permettre relecture, modification, copie et export texte. Une régénération ne doit pas effacer silencieusement le travail humain ; comportement précis à valider.
- Garder Gamma, la mise en page finale et la transmission à l'hôtel hors de l'automatisation de cette version.

Résultat : un parcours complet du séjour au brief exporté et relu humainement.

## 5. Vérifier et préparer la démonstration

- Comparer des cas historiques représentatifs : contexte riche, réponses minimales, déplacement professionnel, refus de poursuivre et contraintes alimentaires explicites.
- Vérifier l'adaptation à plusieurs hôtels, dont un établissement avec concierge connu et un cas de réception seule explicitement configuré pour test.
- Effectuer un test réel de génération IA avec un cas fictif lorsque les accès sont validés ; conserver séparément les contrôles simulés.
- Tester l'e-mail sur une adresse de test désignée par Julien, sans envoyer aux destinataires historiques.
- Préparer une démonstration stable avec une conversation et un brief déjà disponibles en cas d'indisponibilité réseau.
- Fournir les instructions de lancement, les limites connues, la structure du dépôt et la liste de ce que l'équipe construira pendant l'événement.

Résultat : un socle reprenable et une démonstration vérifiée, avec des preuves proportionnées aux vérifications effectuées.

## 6. Point d'intégration du hackathon

Prévoir un échange de données documenté entre le socle et le futur agent : intérêts déclarés, contexte de séjour, identité et liens autorisés pour les essais, version de l'ADN, résultats sourcés, propositions et sélection humaine. Ne pas lancer ce développement dans le chantier préparatoire.

Le placement précis de cette brique reste ouvert. Son résultat doit pouvoir enrichir le brief sans réécrire automatiquement une préférence explicitement exprimée par le client.
