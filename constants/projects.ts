export const projects = [
  {
    title: "Repair Café",
    slug: "repair-cafe",
    tagline:
      "Site vitrine pour une association locale engagée dans la réparation d'objets du quotidien, pensé pour être accessible à tous.",
    overview:
      "Repair Café est un projet réalisé pour une vraie association de quartier. L'objectif était de concevoir un site simple, lisible et accessible, permettant à n'importe quel visiteur — quel que soit son niveau de familiarité avec le web — de trouver facilement les informations sur les événements et de s'inscrire. Un projet ancré dans le réel, qui m'a confronté aux enjeux concrets de l'accessibilité et de la hiérarchie visuelle.",
    features: [
      "Présentation claire de la mission et des valeurs de l'association",
      "Page d'événements avec informations pratiques",
      "Formulaire d'inscription simple et accessible",
      "Interface épurée et responsive adaptée à tous les publics",
      "Déployé sur Vercel",
    ],
    techStack: ["React", "Tailwind CSS", "Vercel"],
    challenges: [
      "Concevoir une interface accessible à un public non-technique.",
      "Hiérarchiser l'information pour guider naturellement l'utilisateur.",
      "Travailler sur un vrai besoin client avec des contraintes concrètes.",
    ],
    learnings: [
      "Meilleure compréhension des enjeux d'accessibilité web dans un contexte réel.",
      "Apprentissage de la hiérarchie visuelle et de la lisibilité comme outils de UX.",
      "Première expérience de livraison d'un projet pour un vrai commanditaire.",
    ],
    feedback: false,
    links: {
      live: "https://projet-12-repair-cafe-front.vercel.app/",
      github: "",
    },
  },
  {
    title: "Sorting Visualizer",
    slug: "sorting-visualizer",
    tagline:
      "Visualiseur interactif d'algorithmes de tri en temps réel, pour comprendre ce qui se passe sous le capot.",
    overview:
      "Sorting Visualizer est un projet d'apprentissage inspiré du tutoriel de Clément Mihailescu. Il permet de visualiser en temps réel le fonctionnement d'algorithmes de tri classiques — bubble sort, merge sort, quick sort. Au-delà de l'exercice technique, ce projet m'a aidé à mieux comprendre les structures de données et la gestion de l'état dans React.",
    features: [
      "Visualisation animée de plusieurs algorithmes de tri",
      "Contrôle de la vitesse d'exécution en temps réel",
      "Génération aléatoire de tableaux de données",
      "Interface claire mettant en évidence les comparaisons et échanges",
    ],
    techStack: ["React", "JavaScript"],
    challenges: [
      "Implémenter correctement chaque algorithme de tri et le rendre lisible visuellement.",
      "Gérer les animations en synchronisation avec la logique de tri.",
      "Maintenir des performances fluides même sur de grands tableaux.",
    ],
    learnings: [
      "Compréhension approfondie des algorithmes de tri et de leur complexité.",
      "Meilleure maîtrise de la gestion d'état et des effets de bord dans React.",
      "Apprentissage de la synchronisation entre logique métier et rendu visuel.",
    ],
    feedback: false,
    links: {
      live: "",
      github: "https://github.com/Phfyx/sorting-visualizer",
    },
  },
  {
    title: "Next.js Job Board",
    slug: "nextjs-job-board",
    tagline:
      "Job board fullstack construit pour explorer les dernières fonctionnalités de Next.js et repousser les limites du rendu côté serveur.",
    overview:
      "Next.js Job Board est un projet d'apprentissage volontairement ambitieux, conçu pour sortir de ma zone de confort. L'objectif était d'explorer les nouveautés de Next.js — Server Actions, useFormState et useFormStatus — et de mieux comprendre la frontière entre client et serveur dans une application React moderne. Un projet qui reflète ma curiosité technique et mon envie de maîtriser les outils que j'utilise en profondeur.",
    features: [
      "Création et consultation d'offres d'emploi",
      "Formulaires gérés avec Server Actions et useFormState",
      "Retour utilisateur en temps réel avec useFormStatus",
      "Interface responsive avec Tailwind CSS",
      "Déployé sur Vercel",
    ],
    techStack: ["Next.js", "React", "JavaScript", "Tailwind CSS", "Vercel"],
    challenges: [
      "Comprendre et appliquer les Server Actions dans un contexte fullstack.",
      "Gérer correctement les états de formulaire avec les nouveaux hooks React.",
      "Trouver le bon équilibre entre rendu client et rendu serveur.",
    ],
    learnings: [
      "Maîtrise des Server Actions et du modèle de rendu hybride de Next.js.",
      "Meilleure compréhension des hooks useFormState et useFormStatus.",
      "Vision plus claire de l'architecture frontend/backend dans une app Next.js.",
      "Confirmation de l'importance de construire des projets pour vraiment apprendre.",
    ],
    feedback: false,
    links: {
      live: "https://next-js-jobboard.vercel.app/",
      github: "https://github.com/Phfyx/NextJs-jobboard",
    },
  },
];