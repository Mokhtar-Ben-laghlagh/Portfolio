import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { profile } from "@/data/profile";

const skillColors: Record<string, string> = {
  "Java": "rgba(255, 100, 50, 0.15)",
  "JavaScript": "rgba(255, 210, 0, 0.12)",
  "Spring Boot": "rgba(100, 220, 100, 0.12)",
  "JPA/Hibernate": "rgba(0, 212, 255, 0.12)",
  "React": "rgba(0, 180, 255, 0.15)",
  "SQL": "rgba(168, 85, 247, 0.12)",
  "Git/GitHub": "rgba(255, 100, 150, 0.12)",
};

export default function Home() {
  return (
    <>
      <Helmet>
        <title>{profile.name} — Portfolio</title>
        <meta name="description" content={profile.about} />
      </Helmet>

      {/* ── Hero ── */}
      <section className="relative min-h-[85vh] flex flex-col justify-center gap-16 py-16">

        {/* Background orbs */}
        <div
          className="pointer-events-none absolute -top-20 -left-20 w-96 h-96 rounded-full opacity-20 animate-float"
          style={{ background: "radial-gradient(circle, rgba(0,212,255,0.3), transparent 70%)", filter: "blur(40px)" }}
        />
        <div
          className="pointer-events-none absolute top-1/2 -right-16 w-64 h-64 rounded-full opacity-15 animate-float"
          style={{ background: "radial-gradient(circle, rgba(168,85,247,0.4), transparent 70%)", filter: "blur(40px)", animationDelay: "3s" }}
        />

        <div className="grid md:grid-cols-2 gap-14 items-center">

          {/* ── Left: Text ── */}
          <div className="flex flex-col gap-7">

            {/* Label */}
            <div className="animate-fade-up">
              <div
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-medium uppercase tracking-widest"
                style={{ background: "var(--accent-glow)", border: "1px solid rgba(0,212,255,0.3)", color: "var(--accent)" }}
              >
                <span className="w-2 h-2 rounded-full pulse-green" style={{ backgroundColor: "var(--green)" }} />
                Disponible pour un stage PFE · avr.–mai 2026
              </div>
            </div>

            {/* Name */}
            <div className="animate-fade-up delay-100">
              <p className="text-sm font-medium mb-2" style={{ color: "var(--muted)" }}>Bonjour, je suis</p>
              <h1 className="font-display text-5xl md:text-6xl lg:text-7xl font-extrabold leading-none">
                <span style={{ color: "var(--fg)" }}>Mokhtar</span>
                <br />
                <span className="gradient-text">Ben Laghlagh</span>
              </h1>
              <p className="mt-4 text-lg font-light" style={{ color: "var(--muted)" }}>
                Étudiant Licence SIR · Développeur Java & JEE
              </p>
            </div>

            {/* About */}
            <p className="animate-fade-up delay-200 text-base leading-relaxed max-w-lg" style={{ color: "var(--muted)" }}>
              {profile.about}
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap gap-3 animate-fade-up delay-300">
              <Link
                to="/projects"
                className="px-6 py-3 rounded-2xl text-sm font-semibold transition-all duration-300"
                style={{
                  background: "linear-gradient(135deg, var(--accent), var(--accent2))",
                  color: "#050a14",
                  boxShadow: "0 0 24px var(--accent-glow)",
                }}
                onMouseEnter={e => ((e.target as HTMLElement).style.boxShadow = "0 0 36px var(--accent-glow-strong), 0 8px 24px rgba(0,0,0,0.4)")}
                onMouseLeave={e => ((e.target as HTMLElement).style.boxShadow = "0 0 24px var(--accent-glow)")}
              >
                Voir mes projets →
              </Link>
              <Link
                to="/contact"
                className="px-6 py-3 rounded-2xl text-sm font-semibold glass glass-hover"
                style={{ color: "var(--fg)" }}
              >
                Me contacter
              </Link>
            </div>

            {/* Socials */}
            <div className="flex gap-5 animate-fade-up delay-400">
              {profile.socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noreferrer"
                  className="text-sm font-medium transition-colors duration-200"
                  style={{ color: "var(--muted)" }}
                  onMouseEnter={e => ((e.target as HTMLElement).style.color = "var(--accent)")}
                  onMouseLeave={e => ((e.target as HTMLElement).style.color = "var(--muted)")}
                >
                  {s.label} ↗
                </a>
              ))}
              <a
                href="mailto:mokhtarbennlaghlagh@gmail.com"
                className="text-sm font-medium transition-colors duration-200"
                style={{ color: "var(--muted)" }}
                onMouseEnter={e => ((e.target as HTMLElement).style.color = "var(--accent)")}
                onMouseLeave={e => ((e.target as HTMLElement).style.color = "var(--muted)")}
              >
                Email ↗
              </a>
            </div>
          </div>

          {/* ── Right: Avatar ── */}
          <div className="relative flex items-center justify-center animate-fade-in delay-300">
            {/* Outer ring */}
            <div
              className="absolute w-72 h-72 rounded-full opacity-20"
              style={{
                border: "1px dashed var(--accent)",
                animation: "spin-slow 30s linear infinite",
              }}
            />
            {/* Orbit dot */}
            <div
              className="absolute w-4 h-4 rounded-full"
              style={{
                background: "var(--accent)",
                boxShadow: "0 0 12px var(--accent)",
                animation: "orbit 8s linear infinite",
                top: "50%",
                left: "50%",
                marginTop: "-8px",
                marginLeft: "-8px",
              }}
            />

            {/* Avatar card */}
            <div
              className="relative w-56 h-56 rounded-3xl flex items-center justify-center overflow-hidden animate-float"
              style={{
                background: "linear-gradient(135deg, rgba(0,212,255,0.08), rgba(168,85,247,0.08))",
                border: "1px solid rgba(0,212,255,0.3)",
                boxShadow: "0 0 60px rgba(0,212,255,0.15), 0 0 120px rgba(168,85,247,0.1)",
              }}
            >
              {/* Shimmer overlay */}
              <div
                className="absolute inset-0 opacity-30"
                style={{
                  background: "linear-gradient(135deg, transparent, rgba(0,212,255,0.15), transparent)",
                }}
              />

              <div className="relative text-center">
                <div
                  className="font-display text-7xl font-extrabold gradient-text leading-none"
                >
                  MB
                </div>
                <div className="mt-3 text-xs font-medium tracking-widest uppercase" style={{ color: "var(--muted)" }}>
                  Developer
                </div>
              </div>

              {/* Decorative corners */}
              <div className="absolute top-3 right-3 w-5 h-5" style={{ borderTop: "2px solid var(--accent)", borderRight: "2px solid var(--accent)" }} />
              <div className="absolute bottom-3 left-3 w-5 h-5" style={{ borderBottom: "2px solid var(--purple)", borderLeft: "2px solid var(--purple)" }} />
            </div>
          </div>
        </div>

        {/* ── Skills ── */}
        <div className="animate-fade-up delay-500">
          <p className="text-xs font-medium tracking-widest uppercase mb-5" style={{ color: "var(--muted)" }}>
            Stack technique
          </p>
          <div className="flex flex-wrap gap-2">
            {profile.skills.map((skill) => (
              <span
                key={skill}
                className="px-3 py-1.5 rounded-xl text-xs font-medium transition-all duration-200 cursor-default"
                style={{
                  background: skillColors[skill] || "rgba(100,180,255,0.08)",
                  border: "1px solid rgba(100,180,255,0.12)",
                  color: "var(--fg)",
                }}
                onMouseEnter={e => {
                  (e.currentTarget as HTMLElement).style.borderColor = "rgba(0,212,255,0.4)";
                  (e.currentTarget as HTMLElement).style.color = "var(--accent)";
                  (e.currentTarget as HTMLElement).style.transform = "translateY(-2px)";
                }}
                onMouseLeave={e => {
                  (e.currentTarget as HTMLElement).style.borderColor = "rgba(100,180,255,0.12)";
                  (e.currentTarget as HTMLElement).style.color = "var(--fg)";
                  (e.currentTarget as HTMLElement).style.transform = "";
                }}
              >
                {skill}
              </span>
            ))}
          </div>
        </div>

        {/* ── Stats ── */}
        <div
          className="grid grid-cols-3 gap-6 animate-fade-up delay-600 rounded-3xl p-6"
          style={{
            background: "var(--card)",
            backdropFilter: "blur(20px)",
            border: "1px solid var(--border)",
            boxShadow: "0 0 40px rgba(0,0,0,0.3)",
          }}
        >
          {[
            { value: "3+",     label: "Projets académiques", color: "var(--accent)" },
            { value: "Bac+3",  label: "Niveau d'études",     color: "var(--purple)" },
            { value: "2026",   label: "Hackathon UCA",        color: "var(--green)"  },
          ].map(({ value, label, color }) => (
            <div key={label} className="text-center group">
              <p
                className="font-display text-3xl font-extrabold transition-all duration-300 group-hover:scale-110"
                style={{ color, textShadow: `0 0 20px ${color}66` }}
              >
                {value}
              </p>
              <p className="text-xs mt-1.5" style={{ color: "var(--muted)" }}>{label}</p>
            </div>
          ))}
        </div>

      </section>
    </>
  );
}
