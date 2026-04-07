import { ReactNode, useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import ThemeToggle from "./ThemeToggle";

const sectionLinks = [
  { href: "/#features", label: "Features" },
  { href: "/#how-it-works", label: "How It Works" },
  { href: "/#use-cases", label: "Use Cases" },
  { href: "/docs", label: "Docs" },
];

function LogoMark() {
  return (
    <div className="logo-mark">
      <span className="logo-mark-core" />
      <span className="logo-mark-dot logo-mark-dot-one" />
      <span className="logo-mark-dot logo-mark-dot-two" />
    </div>
  );
}

export default function Layout({ children }: { children: ReactNode }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setMenuOpen(false);
  }, [location.pathname, location.hash]);

  return (
    <div className="app-shell">
      <div className="app-background">
        <div className="hero-orb hero-orb-one" />
        <div className="hero-orb hero-orb-two" />
        <div className="hero-orb hero-orb-three" />
        <div className="grid-overlay" />
      </div>

      <header className="site-header">
        <div className="container-page flex items-center justify-between gap-4 py-5">
          <Link to="/" className="flex items-center gap-4">
            <LogoMark />
            <div>
              <div className="font-display text-lg font-semibold text-slate-950 dark:text-white">
                AIoT Studio
              </div>
              <div className="text-xs uppercase tracking-[0.28em] text-slate-500 dark:text-slate-400">
                AI + IoT Platform
              </div>
            </div>
          </Link>

          <nav className="hidden items-center gap-2 lg:flex">
            {sectionLinks.map((item) => (
              <a key={item.href} href={item.href} className="nav-link">
                {item.label}
              </a>
            ))}
          </nav>

          <div className="hidden items-center gap-3 lg:flex">
            <ThemeToggle />
            <Link to="/login" className="nav-link">
              Login
            </Link>
            <Link to="/signup" className="btn btn-primary">
              Start Free
            </Link>
          </div>

          <button
            type="button"
            className="menu-button lg:hidden"
            onClick={() => setMenuOpen((value) => !value)}
            aria-label="Toggle menu"
          >
            <span />
            <span />
            <span />
          </button>
        </div>

        {menuOpen ? (
          <div className="container-page pb-5 lg:hidden">
            <div className="glass-panel flex flex-col gap-3 p-4">
              {sectionLinks.map((item) => (
                <a key={item.href} href={item.href} className="nav-link">
                  {item.label}
                </a>
              ))}
              <div className="mt-2 flex items-center justify-between gap-3">
                <ThemeToggle />
                <div className="flex gap-2">
                  <Link to="/login" className="btn btn-secondary">
                    Login
                  </Link>
                  <Link to="/signup" className="btn btn-primary">
                    Start Free
                  </Link>
                </div>
              </div>
            </div>
          </div>
        ) : null}
      </header>

      <main className="container-page pb-20 pt-8">{children}</main>

      <footer className="border-t border-white/10 pt-10 dark:border-white/10">
        <div className="container-page grid gap-10 pb-12 md:grid-cols-[1.5fr_repeat(3,1fr)]">
          <div>
            <div className="flex items-center gap-3">
              <LogoMark />
              <span className="font-display text-lg font-semibold text-slate-950 dark:text-white">
                AIoT Studio
              </span>
            </div>
            <p className="mt-4 max-w-md text-sm leading-7 text-slate-600 dark:text-slate-300">
              Build AI-powered IoT systems without wrestling with device firmware, cloud
              plumbing, and automation logic separately.
            </p>
          </div>

          <div>
            <div className="footer-title">Platform</div>
            <div className="footer-links">
              <a href="/#features">Features</a>
              <Link to="/dashboard">Dashboard</Link>
              <Link to="/docs">Docs</Link>
            </div>
          </div>

          <div>
            <div className="footer-title">Resources</div>
            <div className="footer-links">
              <a href="https://github.com/your-org/aiot-studio" target="_blank" rel="noreferrer">
                GitHub
              </a>
              <a href="mailto:contact@aiotstudio.online">Contact</a>
              <a href="/#cta">Privacy Policy</a>
            </div>
          </div>

          <div>
            <div className="footer-title">Company</div>
            <div className="footer-links">
              <Link to="/signup">Start Free</Link>
              <Link to="/login">Login</Link>
              <a href="/#use-cases">Use Cases</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
