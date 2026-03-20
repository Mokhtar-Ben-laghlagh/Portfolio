import { Helmet } from "react-helmet-async";
import { experiences } from "@/data/experience";

export default function Experience() {
  return (
    <>
      <Helmet>
        <title>Parcours — Mokhtar Ben Laghlagh</title>
      </Helmet>

      <section className="grid gap-10 py-8">
        <div className="animate-fade-up">
          <p className="text-xs font-medium tracking-widest uppercase mb-3" style={{ color: "var(--accent)" }}>Mon parcours</p>
          <h1 className="font-display text-5xl font-extrabold accent-line" style={{ color: "var(--fg)" }}>Expériences</h1>
          <p className="mt-6 text-base max-w-xl" style={{ color: "var(--muted)" }}>
            Leadership, organisation et esprit d'équipe forgés lors d'expériences académiques et associatives.
          </p>
        </div>

        <div className="relative grid gap-6">
          {/* Timeline line */}
          <div
            className="absolute left-6 top-8 bottom-8 w-px hidden sm:block"
            style={{ background: "linear-gradient(to bottom, var(--accent), transparent)" }}
          />

          {experiences.map((exp, i) => (
            <div
              key={exp.company}
              className="relative sm:pl-16 animate-fade-up"
              style={{ animationDelay: `${i * 150 + 200}ms` }}
            >
              {/* Timeline dot */}
              <div
                className="absolute left-3.5 top-6 w-5 h-5 rounded-full hidden sm:flex items-center justify-center"
                style={{
                  background: "var(--accent)",
                  boxShadow: "0 0 12px var(--accent)",
                  zIndex: 1,
                }}
              >
                <div className="w-2 h-2 rounded-full bg-white" />
              </div>

              <div
                className="rounded-3xl p-6 glass glass-hover"
              >
                <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-3 mb-4">
                  <div>
                    <h2 className="font-display font-bold text-lg" style={{ color: "var(--fg)" }}>{exp.role}</h2>
                    <p className="text-sm font-medium mt-0.5" style={{ color: "var(--accent)" }}>{exp.company}</p>
                    {exp.location && (
                      <p className="text-xs mt-1" style={{ color: "var(--muted)" }}>📍 {exp.location}</p>
                    )}
                  </div>
                  <span
                    className="text-xs px-3 py-1.5 rounded-full font-medium whitespace-nowrap self-start"
                    style={{ background: "rgba(0,212,255,0.1)", border: "1px solid rgba(0,212,255,0.2)", color: "var(--accent)" }}
                  >
                    {exp.start.replace("-", "/")} {exp.end ? `→ ${exp.end.replace("-", "/")}` : "→ présent"}
                  </span>
                </div>

                <p className="text-sm leading-relaxed mb-4" style={{ color: "var(--muted)" }}>{exp.description}</p>

                {exp.highlights && (
                  <ul className="space-y-2 mb-4">
                    {exp.highlights.map((h) => (
                      <li key={h} className="flex items-start gap-2 text-sm" style={{ color: "var(--muted)" }}>
                        <span style={{ color: "var(--accent)", marginTop: "4px" }}>◈</span>
                        {h}
                      </li>
                    ))}
                  </ul>
                )}

                {exp.tags && (
                  <div className="flex flex-wrap gap-2">
                    {exp.tags.map((t) => (
                      <span
                        key={t}
                        className="text-xs px-2.5 py-1 rounded-xl font-medium"
                        style={{ background: "rgba(168,85,247,0.1)", border: "1px solid rgba(168,85,247,0.2)", color: "var(--purple)" }}
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
