export type Project = {
  title: string;
  period?: string;
  tags: string[];
  summary: string;
  link?: string;
  repo?: string;
  image?: string;
  featured?: boolean;
};

export const projects: Project[] = [
  {
    title: "Application Desktop – Centre Médical",
    period: "2025",
    tags: ["Java", "SQL", "JDBC", "JavaFX"],
    summary:
      "Application Java de gestion d'un centre médical : patients, médecins, rendez-vous. " +
      "Inclut planification, suivi des actes, calcul des recettes, filtrage et graphiques de consultations.",
    featured: true,
  },
  {
    title: "Gestion des Utilisateurs & Salles",
    period: "2025",
    tags: ["Java", "JPA/Hibernate", "Maven", "JPQL"],
    summary:
      "CRUD complet avec Hibernate/JPA, requêtes JPQL, génération automatique des tables DDL et mapping ORM par annotations.",
    featured: true,
  },
  {
    title: "Gestion Machines & Employés",
    period: "2024",
    tags: ["Java", "JDBC", "DAO", "SQL"],
    summary:
      "Architecture DAO avec connexion Singleton, CRUD sécurisé via PreparedStatement et gestion de la relation Employé ↔ Machine.",
  },
];
