import { Helmet } from "react-helmet-async";
import { education } from "@/data/education";

export default function EducationPage() {
  return (
    <>
      <Helmet>
        <title>Formations — Mokhtar Ben Laghlagh</title>
      </Helmet>

      <section className="grid gap-10 py-8">
        <div className="animate-fade-up">
          <p className="text-xs font-medium tracking-widest uppercase mb-3" style={{ color: "var(--accent)" }}>
            Mon cursus
          </p>
          <h1 className="font-display text-5xl font-extrabold accent-line" style={{ color: "var(--fg)" }}>Formations</h1>
          <p className="mt-6 text-base max-w-xl" style={{ color: "var(--muted)" }}>
            Parcours académique en informatique — des fondamentaux aux architectures distribuées.
          </p>
        </div>

        <div className="grid gap-6">
          {education.map((edu, i) => (
            <div
              key={`${edu.school}-${edu.degree}`}
              className="rounded-3xl p-8 glass glass-hover animate-fade-up"
              style={{ animationDelay: `${i * 150 + 200}ms` }}
            >
              <div className="flex flex-col md:flex-row md:items-start justify-between gap-4 mb-6">
                <div>
                  <div className="flex items-center gap-3 mb-2">
                    <div
                      className="w-10 h-10 rounded-2xl flex items-center justify-center text-lg"
                      style={{ background: "rgba(0,212,255,0.1)", border: "1px solid rgba(0,212,255,0.2)" }}
                    >
                      🎓
                    </div>
                    <div>
                      <h2 className="font-display font-bold text-xl" style={{ color: "var(--fg)" }}>
                        {edu.degree} {edu.field && <span className="gradient-text">– {edu.field}</span>}
                      </h2>
                      <p className="text-sm font-medium" style={{ color: "var(--accent)" }}>{edu.school}</p>
                    </div>
                  </div>
                  {edu.location && (
                    <p className="text-xs ml-13" style={{ color: "var(--muted)" }}>📍 {edu.location}</p>
                  )}
                </div>

                <div className="flex flex-col items-start md:items-end gap-2">
                  <span
                    className="text-xs px-3 py-1.5 rounded-full font-medium whitespace-nowrap"
                    style={{ background: "rgba(0,212,255,0.1)", border: "1px solid rgba(0,212,255,0.2)", color: "var(--accent)" }}
                  >
                    {edu.start.slice(0, 4)} → {edu.end ? edu.end.slice(0, 4) : "présent"}
                  </span>
                  {edu.highlights?.map((h) => (
                    <span
                      key={h}
                      className="text-xs px-3 py-1 rounded-full font-semibold"
                      style={{ background: "rgba(0,255,136,0.1)", border: "1px solid rgba(0,255,136,0.25)", color: "var(--green)" }}
                    >
                      {h}
                    </span>
                  ))}
                </div>
              </div>

              {edu.courses && (
                <div>
                  <p className="text-xs font-medium tracking-widest uppercase mb-3" style={{ color: "var(--muted)" }}>
                    Matières principales
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {edu.courses.map((c) => (
                      <span
                        key={c}
                        className="text-xs px-3 py-1.5 rounded-xl font-medium transition-all duration-200 hover:-translate-y-0.5 cursor-default"
                        style={{ background: "rgba(100,180,255,0.08)", border: "1px solid var(--border)", color: "var(--fg)" }}
                      >
                        {c}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
