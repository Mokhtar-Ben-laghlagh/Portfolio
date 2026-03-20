import { Helmet } from "react-helmet-async";
import { profile } from "@/data/profile";
import { useState } from "react";

export default function Contact() {
  const [copied, setCopied] = useState<string | null>(null);

  const copy = (text: string, label: string) => {
    navigator.clipboard.writeText(text);
    setCopied(label);
    setTimeout(() => setCopied(null), 2000);
  };

  return (
    <>
      <Helmet>
        <title>Contact — Mokhtar Ben Laghlagh</title>
      </Helmet>

      <section className="grid gap-10 py-8 max-w-3xl mx-auto">

        {/* Header */}
        <div className="animate-fade-up text-center">
          <p className="text-xs font-medium tracking-widest uppercase mb-3" style={{ color: "var(--accent)" }}>
            Travaillons ensemble
          </p>
          <h1 className="font-display text-5xl font-extrabold" style={{ color: "var(--fg)" }}>
            Me <span className="gradient-text">contacter</span>
          </h1>
          <p className="mt-6 text-base max-w-lg mx-auto" style={{ color: "var(--muted)" }}>
            Je suis à la recherche d'un stage PFE (Bac+3) de deux mois entre avril et mai 2026.
            N'hésitez pas à me contacter pour discuter de vos projets.
          </p>

          {/* Available badge */}
          <div
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full mt-5 text-sm font-medium"
            style={{ background: "rgba(0,255,136,0.1)", border: "1px solid rgba(0,255,136,0.3)", color: "var(--green)" }}
          >
            <span className="w-2 h-2 rounded-full pulse-green" style={{ backgroundColor: "var(--green)" }} />
            Disponible · avr.–mai 2026
          </div>
        </div>

        {/* Contact cards */}
        <div className="grid sm:grid-cols-2 gap-4 animate-fade-up delay-200">
          {/* Email */}
          <button
            onClick={() => copy(profile.email, "email")}
            className="rounded-3xl p-6 text-left glass glass-hover group"
          >
            <div className="flex items-start justify-between">
              <div
                className="w-10 h-10 rounded-2xl flex items-center justify-center text-lg mb-4"
                style={{ background: "rgba(0,212,255,0.1)", border: "1px solid rgba(0,212,255,0.2)" }}
              >
                ✉️
              </div>
              {copied === "email" ? (
                <span className="text-xs font-medium" style={{ color: "var(--green)" }}>✓ Copié !</span>
              ) : (
                <span className="text-xs opacity-0 group-hover:opacity-100 transition-opacity" style={{ color: "var(--muted)" }}>
                  Cliquer pour copier
                </span>
              )}
            </div>
            <p className="text-xs font-medium uppercase tracking-widest mb-1" style={{ color: "var(--muted)" }}>Email</p>
            <p className="text-sm font-semibold" style={{ color: "var(--fg)" }}>{profile.email}</p>
          </button>

          {/* Phone */}
          <button
            onClick={() => copy(profile.phone, "phone")}
            className="rounded-3xl p-6 text-left glass glass-hover group"
          >
            <div className="flex items-start justify-between">
              <div
                className="w-10 h-10 rounded-2xl flex items-center justify-center text-lg mb-4"
                style={{ background: "rgba(168,85,247,0.1)", border: "1px solid rgba(168,85,247,0.2)" }}
              >
                📱
              </div>
              {copied === "phone" ? (
                <span className="text-xs font-medium" style={{ color: "var(--green)" }}>✓ Copié !</span>
              ) : (
                <span className="text-xs opacity-0 group-hover:opacity-100 transition-opacity" style={{ color: "var(--muted)" }}>
                  Cliquer pour copier
                </span>
              )}
            </div>
            <p className="text-xs font-medium uppercase tracking-widest mb-1" style={{ color: "var(--muted)" }}>Téléphone</p>
            <p className="text-sm font-semibold" style={{ color: "var(--fg)" }}>{profile.phone}</p>
          </button>
        </div>

        {/* Social links */}
        <div className="grid sm:grid-cols-2 gap-4 animate-fade-up delay-300">
          {profile.socials.map((s, i) => (
            <a
              key={s.label}
              href={s.href}
              target="_blank"
              rel="noreferrer"
              className="rounded-3xl p-6 flex items-center gap-4 glass glass-hover group"
            >
              <div
                className="w-12 h-12 rounded-2xl flex items-center justify-center text-xl flex-shrink-0"
                style={{
                  background: i === 0 ? "rgba(0,212,255,0.1)" : "rgba(0,100,200,0.1)",
                  border: i === 0 ? "1px solid rgba(0,212,255,0.2)" : "1px solid rgba(0,100,200,0.2)",
                }}
              >
                {i === 0 ? "🐙" : "💼"}
              </div>
              <div className="flex-1">
                <p className="font-semibold text-sm" style={{ color: "var(--fg)" }}>{s.label}</p>
                <p className="text-xs mt-0.5 truncate" style={{ color: "var(--muted)" }}>{s.href.replace("https://", "")}</p>
              </div>
              <span className="text-lg opacity-0 group-hover:opacity-100 transition-all duration-200 group-hover:translate-x-1" style={{ color: "var(--accent)" }}>→</span>
            </a>
          ))}
        </div>

        {/* Location */}
        <div
          className="rounded-3xl p-6 glass text-center animate-fade-up delay-400"
          style={{ border: "1px solid var(--border)" }}
        >
          <div className="text-3xl mb-3">🇲🇦</div>
          <p className="font-display font-bold text-xl" style={{ color: "var(--fg)" }}>{profile.location}</p>
          <p className="text-sm mt-1" style={{ color: "var(--muted)" }}>Disponible pour des opportunités à distance ou sur site</p>
        </div>

      </section>
    </>
  );
}
