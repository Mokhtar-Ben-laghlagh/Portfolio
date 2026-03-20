import { Helmet } from "react-helmet-async";

const certifications = [
  {
    title: "Hibernate & JPA",
    issuer: "MLIAEdu",
    issueDate: "20 mars 2026",
    credentialId: "28-6e613696-20a3-4015-8a83-5969f1544b95-039757",
    score: 92,
    progress: 100,
    category: "JEE",
    skills: ["Hibernate", "JPA", "ORM", "JPQL", "Maven", "Java EE"],
    color: "#00d4ff",
    icon: "🗃️",
  },
  {
    title: "Développement Front-End moderne avec React",
    issuer: "MLIAEdu",
    issueDate: "18 mars 2026",
    credentialId: "26-6e613696-20a3-4015-8a83-5969f1544b95-543632",
    score: 82,
    progress: 100,
    category: "PROGRAMMATION WEB",
    skills: ["React", "JavaScript", "HTML/CSS", "Front-End"],
    color: "#a855f7",
    icon: "⚛️",
  },
];

function ScoreRing({ score, color }: { score: number; color: string }) {
  const r = 28;
  const circ = 2 * Math.PI * r;
  const dash = (score / 100) * circ;

  return (
    <div className="relative w-20 h-20 flex items-center justify-center">
      <svg width="80" height="80" viewBox="0 0 80 80" className="-rotate-90 absolute inset-0">
        <circle cx="40" cy="40" r={r} fill="none" stroke="rgba(100,180,255,0.12)" strokeWidth="6" />
        <circle
          cx="40" cy="40" r={r} fill="none"
          stroke={color} strokeWidth="6"
          strokeDasharray={`${dash} ${circ}`}
          strokeLinecap="round"
          style={{ filter: `drop-shadow(0 0 6px ${color})` }}
        />
      </svg>
      <span className="font-display font-extrabold text-lg" style={{ color }}>{score}%</span>
    </div>
  );
}

export default function CertificationsPage() {
  return (
    <>
      <Helmet>
        <title>Certifications — Mokhtar Ben Laghlagh</title>
      </Helmet>

      <section className="grid gap-10 py-8">
        <div className="animate-fade-up">
          <p className="text-xs font-medium tracking-widest uppercase mb-3" style={{ color: "var(--accent)" }}>
            Validations professionnelles
          </p>
          <h1 className="font-display text-5xl font-extrabold accent-line" style={{ color: "var(--fg)" }}>
            Certifications
          </h1>
          <p className="mt-6 text-base max-w-xl" style={{ color: "var(--muted)" }}>
            Certifications professionnelles obtenues sur la plateforme MLIAEdu — évaluées sur la qualité des réponses et la complétion des labs.
          </p>
        </div>

        {/* Certifications Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {certifications.map((cert, i) => (
            <div
              key={cert.credentialId}
              className="rounded-3xl p-7 glass glass-hover animate-fade-up flex flex-col gap-5"
              style={{ animationDelay: `${i * 150 + 200}ms` }}
            >
              {/* Header */}
              <div className="flex items-start justify-between gap-4">
                <div className="flex items-center gap-3">
                  <div
                    className="w-12 h-12 rounded-2xl flex items-center justify-center text-2xl"
                    style={{ background: `${cert.color}18`, border: `1px solid ${cert.color}30` }}
                  >
                    {cert.icon}
                  </div>
                  <div>
                    <span
                      className="text-xs font-semibold px-2.5 py-1 rounded-full"
                      style={{ background: `${cert.color}18`, border: `1px solid ${cert.color}30`, color: cert.color }}
                    >
                      {cert.category}
                    </span>
                    <p className="text-xs mt-1.5" style={{ color: "var(--muted)" }}>{cert.issuer} · {cert.issueDate}</p>
                  </div>
                </div>
                <ScoreRing score={cert.score} color={cert.color} />
              </div>

              {/* Title */}
              <h2 className="font-display font-bold text-xl leading-snug" style={{ color: "var(--fg)" }}>
                {cert.title}
              </h2>

              {/* Progress bar */}
              <div>
                <div className="flex justify-between text-xs mb-2" style={{ color: "var(--muted)" }}>
                  <span>Labs complétés</span>
                  <span style={{ color: "var(--green)" }}>{cert.progress}%</span>
                </div>
                <div className="h-1.5 rounded-full overflow-hidden" style={{ background: "rgba(100,180,255,0.1)" }}>
                  <div
                    className="h-full rounded-full transition-all duration-1000"
                    style={{
                      width: `${cert.progress}%`,
                      background: `linear-gradient(90deg, var(--green), var(--accent))`,
                      boxShadow: "0 0 8px rgba(0,255,136,0.4)",
                    }}
                  />
                </div>
              </div>

              {/* Skills */}
              <div className="flex flex-wrap gap-1.5">
                {cert.skills.map((s) => (
                  <span
                    key={s}
                    className="text-xs px-2.5 py-1 rounded-xl font-medium"
                    style={{ background: "rgba(100,180,255,0.07)", border: "1px solid var(--border)", color: "var(--fg)" }}
                  >
                    {s}
                  </span>
                ))}
              </div>

              {/* Credential ID */}
              <div
                className="flex items-center justify-between pt-4"
                style={{ borderTop: "1px solid var(--border)" }}
              >
                <div>
                  <p className="text-xs" style={{ color: "var(--muted)" }}>ID de certification</p>
                  <p className="text-xs font-mono mt-0.5" style={{ color: cert.color }}>
                    #{cert.credentialId.slice(0, 20)}…
                  </p>
                </div>
                <div
                  className="text-xs px-3 py-1.5 rounded-full font-semibold"
                  style={{ background: "rgba(0,255,136,0.1)", border: "1px solid rgba(0,255,136,0.25)", color: "var(--green)" }}
                >
                  ✓ Validée
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Stats summary */}
        <div
          className="rounded-3xl p-6 glass animate-fade-up delay-500"
          style={{ border: "1px solid var(--border)" }}
        >
          <div className="grid grid-cols-3 gap-6 text-center">
            {[
              { value: "2", label: "Certifications", color: "var(--accent)" },
              { value: "87%", label: "Score moyen", color: "var(--purple)" },
              { value: "100%", label: "Labs complétés", color: "var(--green)" },
            ].map(({ value, label, color }) => (
              <div key={label} className="group">
                <p className="font-display text-3xl font-extrabold transition-transform duration-300 group-hover:scale-110" style={{ color }}>
                  {value}
                </p>
                <p className="text-xs mt-1.5" style={{ color: "var(--muted)" }}>{label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
