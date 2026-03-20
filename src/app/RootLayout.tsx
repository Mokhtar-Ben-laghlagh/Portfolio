import { Outlet, NavLink, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import { profile } from "@/data/profile";

const navLinks = [
  { to: "/",             label: "Accueil",        icon: "◈" },
  { to: "/projects",     label: "Projets",         icon: "⬡" },
  { to: "/experience",   label: "Parcours",        icon: "◉" },
  { to: "/education",    label: "Formations",      icon: "◎" },
  { to: "/certifications", label: "Certifications", icon: "◆" },
  { to: "/contact",      label: "Contact",         icon: "◇" },
];

export default function RootLayout() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => setMobileOpen(false), [location]);

  return (
    <div className="min-h-screen flex flex-col" style={{ backgroundColor: "var(--bg)", color: "var(--fg)" }}>

      {/* ── Header ── */}
      <header
        className="sticky top-0 z-50 transition-all duration-500"
        style={{
          background: scrolled
            ? "rgba(5, 10, 20, 0.85)"
            : "rgba(5, 10, 20, 0.4)",
          backdropFilter: "blur(24px) saturate(200%)",
          WebkitBackdropFilter: "blur(24px) saturate(200%)",
          borderBottom: scrolled ? "1px solid rgba(100, 180, 255, 0.15)" : "1px solid transparent",
          boxShadow: scrolled ? "0 4px 32px rgba(0, 0, 0, 0.4)" : "none",
        }}
      >
        <nav className="mx-auto max-w-6xl flex items-center justify-between px-6 py-4">
          {/* Logo */}
          <NavLink to="/" className="flex items-center gap-2 group">
            <div
              className="w-9 h-9 rounded-xl flex items-center justify-center font-display font-bold text-sm"
              style={{
                background: "linear-gradient(135deg, var(--accent), var(--purple))",
                boxShadow: "0 0 20px var(--accent-glow)",
              }}
            >
              MB
            </div>
            <span className="font-display font-bold text-lg" style={{ color: "var(--fg)" }}>
              Mokhtar<span style={{ color: "var(--accent)" }}>.</span>
            </span>
          </NavLink>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.slice(1).map(({ to, label }) => (
              <NavLink
                key={to}
                to={to}
                className="px-4 py-2 rounded-xl text-sm font-medium transition-all duration-200"
                style={({ isActive }) => ({
                  color: isActive ? "var(--accent)" : "var(--muted)",
                  background: isActive ? "var(--accent-glow)" : "transparent",
                  border: isActive ? "1px solid rgba(0, 212, 255, 0.25)" : "1px solid transparent",
                })}
              >
                {label}
              </NavLink>
            ))}
          </div>

          {/* CTA + Mobile toggle */}
          <div className="flex items-center gap-3">
            <a
              href="/contact"
              className="hidden sm:flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-medium transition-all duration-200"
              style={{
                background: "linear-gradient(135deg, var(--accent), var(--accent2))",
                color: "#050a14",
                fontWeight: 600,
                boxShadow: "0 0 20px var(--accent-glow)",
              }}
              onMouseEnter={e => (e.currentTarget.style.boxShadow = "0 0 30px var(--accent-glow-strong)")}
              onMouseLeave={e => (e.currentTarget.style.boxShadow = "0 0 20px var(--accent-glow)")}
            >
              <span className="w-2 h-2 rounded-full pulse-green" style={{ backgroundColor: "var(--green)" }} />
              Stage disponible
            </a>

            <button
              className="md:hidden w-9 h-9 rounded-xl glass flex items-center justify-center"
              onClick={() => setMobileOpen(v => !v)}
              aria-label="Menu"
            >
              <div className="flex flex-col gap-1.5 w-5">
                <span className="block h-0.5 rounded transition-all duration-300" style={{ backgroundColor: "var(--fg)", transform: mobileOpen ? "rotate(45deg) translate(2px, 6px)" : "" }} />
                <span className="block h-0.5 rounded transition-all duration-300" style={{ backgroundColor: "var(--fg)", opacity: mobileOpen ? 0 : 1 }} />
                <span className="block h-0.5 rounded transition-all duration-300" style={{ backgroundColor: "var(--fg)", transform: mobileOpen ? "rotate(-45deg) translate(2px, -6px)" : "" }} />
              </div>
            </button>
          </div>
        </nav>

        {/* Mobile menu */}
        <div
          className="md:hidden overflow-hidden transition-all duration-300"
          style={{ maxHeight: mobileOpen ? "320px" : "0", borderTop: mobileOpen ? "1px solid var(--border)" : "none" }}
        >
          <div className="px-4 py-3 flex flex-col gap-1">
            {navLinks.map(({ to, label, icon }) => (
              <NavLink
                key={to}
                to={to}
                className="flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium transition-all duration-200"
                style={({ isActive }) => ({
                  color: isActive ? "var(--accent)" : "var(--fg)",
                  background: isActive ? "var(--accent-glow)" : "transparent",
                })}
              >
                <span style={{ color: "var(--accent)", fontSize: "16px" }}>{icon}</span>
                {label}
              </NavLink>
            ))}
          </div>
        </div>
      </header>

      {/* ── Main ── */}
      <main className="flex-1 mx-auto w-full max-w-6xl px-6 py-10">
        <Outlet />
      </main>

      {/* ── Footer ── */}
      <footer
        className="mt-auto border-t py-10"
        style={{ borderColor: "var(--border)", background: "rgba(5, 10, 20, 0.6)", backdropFilter: "blur(16px)" }}
      >
        <div className="mx-auto max-w-6xl px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div
              className="w-8 h-8 rounded-lg flex items-center justify-center text-xs font-display font-bold"
              style={{ background: "linear-gradient(135deg, var(--accent), var(--purple))" }}
            >
              MB
            </div>
            <div>
              <p className="text-sm font-medium" style={{ color: "var(--fg)" }}>{profile.name}</p>
              <p className="text-xs" style={{ color: "var(--muted)" }}>Développeur Java · Salé, Maroc</p>
            </div>
          </div>
          <div className="flex items-center gap-6">
            {profile.socials.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noreferrer"
                className="text-sm transition-colors duration-200 hover:underline underline-offset-4"
                style={{ color: "var(--muted)" }}
                onMouseEnter={e => ((e.target as HTMLElement).style.color = "var(--accent)")}
                onMouseLeave={e => ((e.target as HTMLElement).style.color = "var(--muted)")}
              >
                {s.label} ↗
              </a>
            ))}
          </div>
          <p className="text-xs" style={{ color: "var(--muted)" }}>© {new Date().getFullYear()}</p>
        </div>
      </footer>
    </div>
  );
}
