export type Education = {
  school: string;
  degree: string;
  field?: string;
  location?: string;
  start: string;
  end?: string;
  gpa?: string;
  courses?: string[];
  highlights?: string[];
};

export const education: Education[] = [
  {
    school: "Faculté des Sciences et Techniques",
    degree: "Licence",
    field: "Systèmes Informatiques Répartis (SIR)",
    location: "Marrakech, Maroc",
    start: "2025-09",
    courses: [
      "Architectures réparties",
      "Bases de données avancées",
      "Réseaux et systèmes",
      "Technologies Java",
      "Systèmes distribués",
    ],
    highlights: ["En cours – Bac+3"],
  },
  {
    school: "Faculté des Sciences et Techniques",
    degree: "DEUST",
    field: "Mathématiques, Informatique, Physique, Chimie (MIPC)",
    location: "Marrakech, Maroc",
    start: "2023-09",
    end: "2025-06",
    courses: [
      "Algorithmique & C",
      "Java & POO",
      "Bases de données SQL",
      "Réseaux TCP/IP",
      "HTML/CSS & JavaScript",
    ],
  },
];
