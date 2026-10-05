# Critères de vérification proposés

Ces critères traduisent les décisions produit. Leur état d'exécution et leurs limites sont décrits dans `Verification report.md` ; un critère listé ici n'est pas automatiquement validé.

| Parcours / risque | Vérification utile |
|---|---|
| Bon hôtel | Deux séjours liés à deux hôtels différents gardent le bon ADN dans la conversation, la génération et le dashboard. |
| Réservation | Les informations déjà connues sont reprises ; le client n'est pas invité à ressaisir les mêmes éléments sans raison. |
| Invitation | L'opérateur vérifie le destinataire et déclenche l'envoi ; succès ou erreur sont visibles ; un double clic ne crée pas deux invitations involontaires. |
| Confidentialité d'accès | L'accès invité donne accès à son séjour seulement ; la console opérateur est protégée. |
| Conversation souple | Un intérêt pertinent entraîne un approfondissement ; une réponse courte ou un sujet absent n'impose pas un questionnaire complet. |
| Découverte personnelle — critère central | À partir de réponses de une ou deux phrases, l'agent fait émerger des intentions, goûts, habitudes ou détails propres aux personnes, comme dans les cas Sukhothai. Distinguer ce qu'il a découvert par ses relances de ce que le client a spontanément ajouté. |
| Potentiel de personnalisation et d'upsell | Les informations découvertes donnent à l'hôtel des possibilités concrètes de préparation, d'adaptation, d'attention et de prestations payantes pertinentes. Le client n'a pas à concevoir lui-même ces possibilités ; chaque proposition garde sa justification et la décision de l'hôtel. |
| Rôle de la conversation | L'ADN oriente les rebonds sans transformer l'échange en présentation des règles, des menus ou des tarifs. Une bonne vérification d'horaire ne suffit pas à valider la découverte. |
| Style d'interaction | Le brief ne déduit pas une préférence de discrétion ou de faible interaction de la seule brièveté des réponses ; cette préférence doit être comprise auprès du voyageur. |
| Adaptation aux capacités | Le bot ne développe pas une option connue comme indisponible et peut explorer une adaptation réaliste d'une capacité existante. |
| Génération automatique | Une fin normale déclenche un brouillon ; une erreur IA reste visible et ne présente pas le brief comme prêt. |
| Fidélité | Les préférences explicites et contraintes importantes du transcript sont conservées ; les inconnues restent identifiables. |
| Créativité | Une suggestion peut combiner des capacités sans prétendre qu'elle existe déjà comme prestation commercialisée. |
| Concierge / réception | Les propositions arrivent au bon rôle ; l'absence connue de concierge entraîne le routage vers la réception. |
| Recherche locale dans le socle | Le brief formule une mission de recherche lorsqu'une activité externe est à identifier ; aucun appel web de recherche de prestataire n'est déclenché dans ce parcours. |
| Refus / retrait | La branche suit la décision validée avec Julien ; aucune expérience personnalisée n'est générée en contradiction avec le refus exprimé. |
| Travail humain | Une modification du brouillon reste conservée lors des opérations de consultation/export ; une régénération ne l'efface pas silencieusement. |
| Export | Le texte copié ou téléchargé correspond à la version choisie, est lisible et ne contient pas d'artefacts de système ni de références techniques. |
| Langue | Conversation invitée et brief en anglais. Le traitement d'un texte de note explicitement fourni dans une autre langue doit être cohérent avec la règle de fidélité à faire confirmer si nécessaire. |
| Démonstration | Un cas fictif complet est reproductible et un exemple déjà généré est disponible en solution de repli. |

## Comparaison avec l'historique

Le corpus contient des erreurs connues. Évaluer la fidélité et l'utilité de la nouvelle sortie ; ne pas exiger qu'elle répète exactement toutes les anciennes propositions.

Les anciens contrôles Replit avaient réussi 18 assertions serveur avec des services simulés et révélé 8 erreurs TypeScript. Ces résultats ne valent pas validation de la nouvelle app et ne démontrent pas le bon fonctionnement actuel des appels IA, e-mails ou services externes.

## Critère de remise

Présenter un parcours réellement vérifié, les versions des prompts et ADN utilisées, les commandes de lancement, les tests pertinents exécutés et les limites restantes. Distinguer une démonstration utilisable d'une validation opérationnelle avec un hôtel réel.
