export type Experience = {
  company: string;
  role: string;
  location?: string;
  start: string;
  end?: string;
  description: string;
  highlights?: string[];
  tags?: string[];
};

export const experiences: Experience[] = [
  {
    company: "Université Cadi Ayyad – Hackathon SporTech Marrakech–Safi",
    role: "Chef d'équipe",
    location: "Marrakech, Maroc",
    start: "2026-01",
    description:
      "Leadership d'une équipe multidisciplinaire lors d'un hackathon universitaire axé sur le sport et la technologie.",
    highlights: [
      "Répartition des tâches et gestion du temps sous pression",
      "Conception et présentation d'une solution innovante",
      "Respect des délais imposés par le concours",
    ],
    tags: ["Leadership", "Gestion de projet", "Innovation"],
  },
  {
    company: "Club d'Échecs – FSTG",
    role: "Président",
    location: "Marrakech, Maroc",
    start: "2023-09",
    description:
      "Organisation et gestion du club d'échecs de la Faculté des Sciences et Techniques de Marrakech.",
    highlights: [
      "Organisation de tournois et événements internes",
      "Coordination et gestion d'une équipe de membres",
      "Encadrement et formation des nouveaux membres",
    ],
    tags: ["Leadership", "Organisation", "Gestion d'équipe"],
  },
];
