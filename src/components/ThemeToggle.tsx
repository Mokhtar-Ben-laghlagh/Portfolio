import { useEffect, useState } from "react";

export default function ThemeToggle() {
  const [dark, setDark] = useState(() => {
    if (typeof window === "undefined") return false;
    return (
      localStorage.getItem("theme") === "dark" ||
      (!localStorage.getItem("theme") && window.matchMedia("(prefers-color-scheme: dark)").matches)
    );
  });

  useEffect(() => {
    document.documentElement.classList.toggle("dark", dark);
    localStorage.setItem("theme", dark ? "dark" : "light");
  }, [dark]);

  return (
    <button
      onClick={() => setDark((d) => !d)}
      aria-label="Basculer le thème"
      className="w-10 h-10 flex items-center justify-center rounded-xl border transition-all duration-200 hover:scale-105 active:scale-95 text-lg"
      style={{ borderColor: "var(--border)", color: "var(--muted)" }}
    >
      {dark ? "☀️" : "🌙"}
    </button>
  );
}
