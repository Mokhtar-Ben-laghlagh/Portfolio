import { Helmet } from "react-helmet-async";
import { projects } from "@/data/projects";
import { useState, useMemo } from "react";

const tagColors: Record<string, string> = {
  "Java": "rgba(255, 100, 50, 0.2)",
  "JavaScript": "rgba(255, 210, 0, 0.15)",
  "JavaFX": "rgba(0, 180, 255, 0.15)",
  "SQL": "rgba(168, 85, 247, 0.15)",
  "JDBC": "rgba(0, 212, 255, 0.15)",
  "JPA/Hibernate": "rgba(0, 212, 255, 0.2)",
  "Maven": "rgba(255, 100, 50, 0.15)",
  "JPQL": "rgba(0, 212, 255, 0.12)",
  "DAO": "rgba(100, 220, 100, 0.12)",
};

export default function Projects() {
  const [activeTag, setActiveTag] = useState<string | null>(null);

  const allTags = useMemo(
    () => Array.from(new Set(projects.flatMap((p) => p.tags))),
    []
  );

  const filtered = useMemo(
    () => activeTag ? projects.filter((p) => p.tags.includes(activeTag)) : projects,
    [activeTag]
  );

  return (
    <>
      <Helmet>
        <title>Projets — Mokhtar Ben Laghlagh</title>
        <meta name="description" content="Mes projets académiques en Java, JDBC, JPA/Hibernate." />
      </Helmet>

      <section className="grid gap-10 py-8">

        {/* Header */}
        <div className="animate-fade-up">
          <p className="text-xs font-medium tracking-widest uppercase mb-3" style={{ color: "var(--accent)" }}>
            Ce que j'ai construit
          </p>
          <h1 className="font-display text-5xl font-extrabold accent-line" style={{ color: "var(--fg)" }}>
            Projets
          </h1>
          <p className="mt-6 text-base max-w-xl" style={{ color: "var(--muted)" }}>
            Mes réalisations académiques — des applications Java complètes, des architectures DAO robustes et des intégrations ORM avancées.
          </p>
        </div>

        {/* Filters */}
        <div className="flex flex-wrap gap-2 animate-fade-up delay-100">
          <button
            onClick={() => setActiveTag(null)}
            className="px-4 py-2 rounded-2xl text-xs font-semibold transition-all duration-200"
            style={{
              background: activeTag === null ? "linear-gradient(135deg, var(--accent), var(--accent2))" : "var(--card)",
              color: activeTag === null ? "#050a14" : "var(--muted)",
              border: activeTag === null ? "none" : "1px solid var(--border)",
              backdropFilter: "blur(12px)",
              boxShadow: activeTag === null ? "0 0 16px var(--accent-glow)" : "none",
            }}
          >
            Tous ({projects.length})
          </button>
          {allTags.map((tag) => (
            <button
              key={tag}
              onClick={() => setActiveTag(tag === activeTag ? null : tag)}
              className="px-4 py-2 rounded-2xl text-xs font-semibold transition-all duration-200"
              style={{
                background: activeTag === tag ? tagColors[tag] || "var(--accent-glow)" : "var(--card)",
                color: activeTag === tag ? "var(--accent)" : "var(--muted)",
                border: `1px solid ${activeTag === tag ? "rgba(0,212,255,0.35)" : "var(--border)"}`,
                backdropFilter: "blur(12px)",
              }}
            >
              {tag}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((p, i) => (
            <article
              key={p.title}
              className="rounded-3xl p-6 flex flex-col gap-5 glass glass-hover animate-fade-up cursor-default"
              style={{ animationDelay: `${i * 80 + 200}ms` }}
            >
              {/* Top */}
              <div className="flex items-start justify-between gap-3">
                <div
                  className="w-10 h-10 rounded-2xl flex items-center justify-center text-lg flex-shrink-0"
                  style={{ background: "rgba(0,212,255,0.12)", border: "1px solid rgba(0,212,255,0.2)" }}
                >
                  {i === 0 ? "🏥" : i === 1 ? "🗄️" : "⚙️"}
                </div>
                {p.featured && (
                  <span
                    className="text-xs px-2.5 py-1 rounded-full font-semibold"
                    style={{
                      background: "linear-gradient(135deg, rgba(255,200,0,0.15), rgba(255,150,0,0.15))",
                      border: "1px solid rgba(255,180,0,0.3)",
                      color: "#ffd700",
                    }}
                  >
                    ★ Featured
                  </span>
                )}
              </div>

              {/* Title */}
              <div>
                <h2 className="font-display font-bold text-base leading-snug" style={{ color: "var(--fg)" }}>
                  {p.title}
                </h2>
                {p.period && (
                  <p className="text-xs mt-1 font-medium" style={{ color: "var(--accent)" }}>{p.period}</p>
                )}
              </div>

              {/* Summary */}
              <p className="text-sm leading-relaxed flex-1" style={{ color: "var(--muted)" }}>
                {p.summary}
              </p>

              {/* Tags */}
              <div className="flex flex-wrap gap-1.5">
                {p.tags.map((t) => (
                  <span
                    key={t}
                    className="text-xs px-2.5 py-1 rounded-xl font-medium"
                    style={{
                      background: tagColors[t] || "rgba(100,180,255,0.08)",
                      border: "1px solid rgba(100,180,255,0.12)",
                      color: "var(--fg)",
                    }}
                  >
                    {t}
                  </span>
                ))}
              </div>

              {/* Links */}
              {(p.link || p.repo) && (
                <div
                  className="flex gap-4 text-xs pt-4"
                  style={{ borderTop: "1px solid var(--border)" }}
                >
                  {p.link && (
                    <a href={p.link} target="_blank" rel="noreferrer" style={{ color: "var(--accent)" }} className="hover:underline">
                      Démo →
                    </a>
                  )}
                  {p.repo && (
                    <a href={p.repo} target="_blank" rel="noreferrer" style={{ color: "var(--muted)" }} className="hover:underline">
                      Code →
                    </a>
                  )}
                </div>
              )}
            </article>
          ))}
        </div>

      </section>
    </>
  );
}
