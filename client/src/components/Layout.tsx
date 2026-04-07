import { ReactNode, useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";

const navItems = [
  { to: "/services", label: "Product" },
  { to: "/industries", label: "Solutions" },
  { to: "/pricing", label: "Pricing" },
  { to: "/demo/iot", label: "IoT Demo" },
  { to: "/demo/ai", label: "AI Demo" },
  { to: "/about", label: "Company" },
  { to: "/contact", label: "Contact" },
];



export default function Layout({ children }: { children: ReactNode }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="min-h-screen">
      {/* Background */}
      <div className="fixed inset-0 -z-10 bg-grid opacity-60" />
      <div className="fixed -top-40 left-1/2 -translate-x-1/2 -z-10 h-[520px] w-[520px] rounded-full blur-3xl bg-blue-200/40 dark:bg-blue-900/20" />
      <div className="fixed top-40 right-[-120px] -z-10 h-[420px] w-[420px] rounded-full blur-3xl bg-slate-100/80 dark:bg-slate-900/40" />

      <header className="sticky top-0 z-40 border-b border-slate-200/70 dark:border-slate-800/70 bg-white/70 dark:bg-slate-950/60 backdrop-blur">
        <div className="container-page py-4 flex items-center justify-between gap-4">
          <Link to="/" className="flex items-center gap-3">
            <div className="h-10 w-10 rounded-2xl bg-blue-600 flex items-center justify-center">
              <span className="text-white font-bold">BI</span>
            </div>
            <div className="leading-tight">
              <div className="font-semibold text-slate-900 dark:text-white">IoT + AI Studio</div>
              <div className="text-xs text-slate-600 dark:text-slate-400">
                Position • Monitor • Automate
              </div>
            </div>
          </Link>

          {/* Desktop nav */}
          <div className="hidden lg:flex items-center gap-2">
            <nav className="flex items-center gap-2">
              {navItems.map((i) => (
                <NavLink
                  key={i.to}
                  to={i.to}
                  className={({ isActive }) => `btn ${isActive ? "btn-primary" : ""}`}
                >
                  {i.label}
                </NavLink>
              ))}
            </nav>
            
            <Link to="/contact" className="btn btn-primary">Contact Specialist</Link>
          </div>

          {/* Mobile */}
          <div className="lg:hidden flex items-center gap-2">
            
            <button className="btn" onClick={() => setOpen((v) => !v)}>
              {open ? "✖" : "☰"}
            </button>
          </div>
        </div>

        {open ? (
          <div className="container-page pb-4 lg:hidden">
            <div className="card p-4">
              <nav className="flex flex-col gap-2">
                {navItems.map((i) => (
                  <NavLink
                    key={i.to}
                    to={i.to}
                    onClick={() => setOpen(false)}
                    className={({ isActive }) => `btn ${isActive ? "btn-primary" : ""}`}
                  >
                    {i.label}
                  </NavLink>
                ))}
              </nav>
            </div>
          </div>
        ) : null}
      </header>

      <main className="container-page py-10">{children}</main>

      <footer className="border-t border-slate-200/70 dark:border-slate-800/70">
        <div className="container-page py-10 grid md:grid-cols-4 gap-6">
          <div className="md:col-span-2">
            <div className="font-semibold text-lg">IoT + AI Studio</div>
            <p className="mt-2 text-sm text-slate-600 dark:text-slate-300 max-w-md">
              We build IoT monitoring dashboards, AI agents, WhatsApp automation, and reporting pipelines.
            </p>
          </div>
          <div>
            <div className="font-semibold">Links</div>
            <div className="mt-3 flex flex-col gap-2 text-sm text-slate-600 dark:text-slate-300">
              <Link to="/services" className="hover:underline">Product</Link>
              <Link to="/industries" className="hover:underline">Solutions</Link>
              <Link to="/demo/iot" className="hover:underline">IoT Demo</Link>
              <Link to="/demo/ai" className="hover:underline">AI Demo</Link>
            </div>
          </div>
          <div>
            <div className="font-semibold">Contact</div>
            <div className="mt-3 text-sm text-slate-600 dark:text-slate-300">
              <div>KSA • Pakistan</div>
              <div className="mt-1">Email: info@aiotstudio.org</div>
              <div className="mt-1">WhatsApp: +923285107458</div>
            </div>
          </div>
        </div>
        <div className="container-page pb-10 text-xs text-slate-500 dark:text-slate-500">
          © {new Date().getFullYear()} IoT + AI Studio
        </div>
      </footer>
    </div>
  );
}