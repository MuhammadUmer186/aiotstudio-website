import { useEffect, useState } from "react";

function getInitialTheme(): "light" | "dark" {
  const saved = localStorage.getItem("theme");
  if (saved === "dark" || saved === "light") return saved;

  const prefersDark = window.matchMedia?.("(prefers-color-scheme: dark)")?.matches;
  return prefersDark ? "dark" : "dark";
}

export default function ThemeToggle() {
  const [theme, setTheme] = useState<"light" | "dark">("dark");

  useEffect(() => {
    const initialTheme = getInitialTheme();
    setTheme(initialTheme);
    document.documentElement.classList.toggle("dark", initialTheme === "dark");
  }, []);

  function toggle() {
    const nextTheme = theme === "dark" ? "light" : "dark";
    setTheme(nextTheme);
    localStorage.setItem("theme", nextTheme);
    document.documentElement.classList.toggle("dark", nextTheme === "dark");
  }

  return (
    <button className="theme-toggle" onClick={toggle} aria-label="Toggle theme">
      <span className="theme-toggle-track">
        <span className={`theme-toggle-thumb ${theme === "dark" ? "translate-x-6" : ""}`} />
      </span>
      <span className="text-sm font-medium">{theme === "dark" ? "Dark" : "Light"}</span>
    </button>
  );
}
