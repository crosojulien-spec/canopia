# Canopia — preuves, historique et limites

## Objet

Ce document empêche les prototypes, campagnes passées et métriques historiques d’être confondus avec une validation actuelle.

## Ce qui existe réellement

Des artefacts locaux démontrent que le concept a été matérialisé :

- conversations et scénarios de test ;
- générateur de brief opérationnel ;
- exemples de briefs par département ;
- prototypes web ;
- pages de présentation ;
- automatisations Make historiques ;
- fichiers de prospection et séquences commerciales.

Cela prouve qu’un parcours peut être prototypé. Cela ne prouve ni l’utilité durable, ni la volonté de payer, ni l’adoption par un hôtel.

## Contradictions et dette historique

Les actifs historiques ne forment pas une source de vérité unique :

- certaines pages présentent Canopia comme un brief issu d’une conversation de deux minutes ;
- d’autres utilisent un parcours WhatsApp volontaire et insistent davantage sur le consentement ;
- des pages anciennes affichent des promesses de ROI, de conversion ou de préparation universelle qui ne sont pas étayées par une preuve fournie ;
- une page affirme « aucun changement de processus » et « aucune formation », alors qu’un usage durable peut nécessiter gouvernance, maintien des connaissances et adaptation opérationnelle ;
- certains artefacts parlent encore de « BlooM Experience Tips » dans un produit Canopia ;
- les snapshots de pipeline mentionnent des volumes différents et ne doivent pas être additionnés comme s’ils décrivaient la même période.

La présente offre et `00_PRODUCT_CONTRACT.md` priment sur ces formulations historiques.

## Historique de prospection connu

Un bilan historique de mars rapportait :

- 64 hôtels contactés ;
- aucune réponse identifiée ;
- 63 adresses génériques sur 64 ;
- aucune relance réalisée.

Un autre état des lieux mentionne un pipeline de 106 prospects et des scénarios Make. Ces chiffres appartiennent à des snapshots distincts et leur cohérence actuelle n’est pas établie.

Un travail plus récent a produit un fichier de 16 cibles en France et en République tchèque, avec quatre contacts publics vérifiés. Aucun message ni brouillon de boîte mail n’a été créé dans ce travail.

Ces éléments montrent surtout que la qualité des contacts, le ciblage et le suivi doivent être testés. Ils ne démontrent pas une demande.

## Apprentissage technique historique

Une architecture Make de détection de réponses a consommé 6 612 opérations sur 7 136 en scannant répétitivement la boîte de réception. Les scénarios ont ensuite été corrigés et laissés désactivés.

Le futur système doit donc :

- estimer le coût avant activation ;
- préférer les déclencheurs événementiels au polling ;
- limiter les volumes par run ;
- court-circuiter les runs sans résultat ;
- surveiller les premières exécutions ;
- prévoir des budgets et mécanismes d’arrêt.

## Niveau de preuve actuel

### Vérifié par les artefacts

- le parcours conversation → brief peut être prototypé ;
- le brief peut être structuré par département ;
- des règles de fidélité aux sources et de priorités P0/P1/P2 ont été formalisées ;
- plusieurs démonstrations et supports commerciaux existent.

### Non démontré

- volonté réelle des clients de participer ;
- utilité quotidienne pour les équipes ;
- taux de briefs directement utilisables ;
- résultat économique ;
- disposition d’un hôtel à payer ;
- adoption et maintien autonome ;
- répétition ou fidélité ;
- supériorité par rapport aux processus actuels.

## Règle d’utilisation

Toute métrique historique doit conserver sa date, sa source et son statut. Avant de la présenter comme actuelle, le système doit la revérifier.

Une ancienne page commerciale n’est jamais une preuve autorisée d’impact.

