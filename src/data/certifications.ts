export type Certification = {
  title: string;
  issuer: string;
  issueDate: string;
  credentialId?: string;
  skills?: string[];
  tags?: string[];
  score?: number;
  progress?: number;
  category?: string;
  status?: "active" | "expired";
};

export const certifications: Certification[] = [
  {
    title: "Certification Professionnelle Hibernate & JPA",
    issuer: "MLIAEdu",
    issueDate: "2026-03-20",
    credentialId: "28-6e613696-20a3-4015-8a83-5969f1544b95-039757",
    score: 92,
    progress: 100,
    category: "JEE",
    skills: ["Hibernate", "JPA", "ORM", "JPQL", "Maven", "Java EE"],
    tags: ["Java", "JEE", "Base de données"],
    status: "active",
  },
  {
    title: "Développement Front-End moderne avec React",
    issuer: "MLIAEdu",
    issueDate: "2026-03-18",
    credentialId: "26-6e613696-20a3-4015-8a83-5969f1544b95-543632",
    score: 82,
    progress: 100,
    category: "PROGRAMMATION WEB",
    skills: ["React", "JavaScript", "HTML/CSS", "Front-End"],
    tags: ["JavaScript", "React", "Web"],
    status: "active",
  },
];
