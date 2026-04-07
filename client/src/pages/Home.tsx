import { Link } from "react-router-dom";

const heroPills = [
  "Indoor/Outdoor Monitoring",
  "MQTT + REST API",
  "Dashboards & Alerts",
  "WhatsApp AI Agent",
  "PDF Reports Automation",
  "RAG Knowledge Base",
];

const productTiles = [
  { title: "IoT Devices", desc: "ESP32, sensors, gateways, trackers, BLE/Wi-Fi integrations." },
  { title: "Dashboard Platform", desc: "Real-time status, alerts, history charts, and KPIs." },
  { title: "AI Agent", desc: "WhatsApp/web assistant for FAQs, lead capture, and operations." },
  { title: "Open API", desc: "Clean API layer to integrate your ERP/CRM or mobile apps." },
];

const solutions = [
  { title: "Hospitality", bullets: ["AC & energy monitoring", "Guest WhatsApp support", "Daily ops reports"] },
  { title: "Logistics", bullets: ["Asset tracking", "Warehouse visibility", "Automated alerts"] },
  { title: "Healthcare", bullets: ["Equipment tracking", "Staff/patient flows", "Safety zones"] },
  { title: "Security", bullets: ["Restricted zones", "Real-time monitoring", "Incident reporting"] },
];

const cases = [
  { title: "AC Monitoring for Hotels", desc: "Detect anomalies early, reduce breakdowns, improve comfort." },
  { title: "Warehouse Asset Visibility", desc: "Track movement, reduce search time, boost throughput." },
  { title: "WhatsApp AI for Support", desc: "Instant answers + handoff + lead qualification." },
];

export default function Home() {
  return (
    <div className="space-y-14">
      {/* HERO */}
      <section className="section">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <div className="badge w-fit">Enterprise-ready • Local-first</div>

            <h1 className="h1 mt-4">
              Empower your business with{" "}
              <span className="text-blue-600 dark:text-blue-400">IoT + AI</span>
            </h1>

            <p className="p mt-4 max-w-xl">
              Build monitoring, tracking, dashboards, and AI automation — start locally,
              validate fast, then scale.
            </p>

            <div className="mt-6 flex flex-wrap gap-2">
              {heroPills.map((p) => (
                <span key={p} className="badge">
                  {p}
                </span>
              ))}
            </div>

            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              <Link className="btn btn-primary" to="/services">
                Learn More
              </Link>
              <Link className="btn" to="/demo/iot">
                Try a Demo
              </Link>
              <Link className="btn" to="/contact">
                Contact Specialist
              </Link>
            </div>

            <div className="mt-10 grid grid-cols-3 gap-3">
              <div className="card p-4">
                <div className="text-xs text-slate-600 dark:text-slate-400">Delivery</div>
                <div className="text-xl font-semibold mt-1">Days → Weeks</div>
              </div>
              <div className="card p-4">
                <div className="text-xs text-slate-600 dark:text-slate-400">Focus</div>
                <div className="text-xl font-semibold mt-1">ROI First</div>
              </div>
              
            </div>
          </div>

          {/* Right visual panel (PROFESSIONAL DASHBOARD PREVIEW) */}
          <div className="card p-6 md:p-8 relative overflow-hidden">
            {/* subtle gradient overlay */}
            <div className="absolute inset-0 pointer-events-none">
              <div className="absolute -top-24 -right-24 h-72 w-72 rounded-full bg-blue-500/15 blur-3xl" />
              <div className="absolute -bottom-28 -left-28 h-72 w-72 rounded-full bg-slate-500/10 blur-3xl" />
            </div>

            <div className="relative">
              <div className="flex items-center justify-between">
                <div>
                  <div className="text-sm text-slate-600 dark:text-slate-400">
                    Platform Preview
                  </div>
                  <div className="text-xl font-semibold mt-1">Operations Dashboard</div>
                </div>
                <span className="badge">Live</span>
              </div>

              {/* "Screenshot" frame */}
              <div className="mt-6 rounded-2xl border border-slate-200/70 dark:border-slate-800/70 bg-white/60 dark:bg-slate-950/60 overflow-hidden">
                {/* top bar like an app window */}
                <div className="flex items-center justify-between px-4 py-3 border-b border-slate-200/70 dark:border-slate-800/70">
                  <div className="flex items-center gap-2">
                    <span className="h-2.5 w-2.5 rounded-full bg-red-400/80" />
                    <span className="h-2.5 w-2.5 rounded-full bg-yellow-400/80" />
                    <span className="h-2.5 w-2.5 rounded-full bg-green-400/80" />
                  </div>
                  <div className="text-xs text-slate-500 dark:text-slate-400">
                    device: ESP32-DEMO-001
                  </div>
                </div>

                {/* content */}
                <div className="p-4 md:p-5">
                  <div className="grid grid-cols-2 gap-3">
                    <div className="card p-4">
                      <div className="text-xs text-slate-600 dark:text-slate-400">Status</div>
                      <div className="mt-1 font-semibold text-emerald-600">Online</div>
                    </div>
                    <div className="card p-4">
                      <div className="text-xs text-slate-600 dark:text-slate-400">Alerts</div>
                      <div className="mt-1 font-semibold">2 Active</div>
                    </div>
                    <div className="card p-4">
                      <div className="text-xs text-slate-600 dark:text-slate-400">Temperature</div>
                      <div className="mt-1 font-semibold">28.4 °C</div>
                    </div>
                    <div className="card p-4">
                      <div className="text-xs text-slate-600 dark:text-slate-400">Energy</div>
                      <div className="mt-1 font-semibold">3.2 kW</div>
                    </div>
                  </div>

                  {/* mini chart (SVG) */}
                  <div className="mt-4 card p-4">
                    <div className="text-xs text-slate-600 dark:text-slate-400">
                      Last 60 minutes
                    </div>
                    <svg viewBox="0 0 300 70" className="mt-2 w-full h-[70px]">
                      <defs>
                        <linearGradient id="g" x1="0" x2="1">
                          <stop offset="0" stopColor="rgb(59 130 246 / .45)" />
                          <stop offset="1" stopColor="rgb(59 130 246 / .05)" />
                        </linearGradient>
                      </defs>
                      <path
                        d="M0,50 C40,10 60,60 100,35 C140,10 170,55 210,30 C240,15 270,35 300,20 L300,70 L0,70 Z"
                        fill="url(#g)"
                      />
                      <path
                        d="M0,50 C40,10 60,60 100,35 C140,10 170,55 210,30 C240,15 270,35 300,20"
                        fill="none"
                        stroke="rgb(59 130 246)"
                        strokeWidth="2"
                      />
                    </svg>

                    <div className="mt-2 flex flex-wrap gap-2">
                      <span className="badge">Alerts → WhatsApp</span>
                      <span className="badge">Daily PDF Report</span>
                      <span className="badge">AI Assistant</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-4 text-xs text-slate-500 dark:text-slate-400">
                Tip: Connect real ESP32 → MQTT → backend storage → charts (next upgrade).
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PRODUCT TILES */}
      <section className="section">
        <div className="section-title">
          <div className="section-kicker">Product</div>
          <div className="h2 mt-2">A complete stack (hardware + software + API)</div>
          <p className="p mt-3 max-w-3xl mx-auto">
            Clear blocks for devices, platform, AI automation, and integration — like a tech product site.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
          {productTiles.map((t) => (
            <div key={t.title} className="card p-6">
              <div className="font-semibold">{t.title}</div>
              <p className="p mt-2 text-sm">{t.desc}</p>
              <div className="mt-4">
                <Link
                  to="/services"
                  className="text-blue-600 dark:text-blue-400 font-medium hover:underline"
                >
                  Explore →
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* SOLUTIONS */}
      <section className="section">
        <div className="section-title">
          <div className="section-kicker">Solutions</div>
          <div className="h2 mt-2">Built for multiple industries</div>
          <p className="p mt-3 max-w-3xl mx-auto">
            Choose your industry and we tailor device + dashboard + automation workflows.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
          {solutions.map((s) => (
            <div key={s.title} className="card p-6">
              <div className="font-semibold">{s.title}</div>
              <ul className="mt-3 space-y-2 text-sm text-slate-700 dark:text-slate-200 list-disc pl-5">
                {s.bullets.map((b) => (
                  <li key={b}>{b}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-6 text-center">
          <Link to="/industries" className="btn btn-primary">
            Explore More Solutions
          </Link>
        </div>
      </section>

      {/* CASE STUDIES */}
      <section className="section">
        <div className="section-title">
          <div className="section-kicker">Case Studies</div>
          <div className="h2 mt-2">See successful use cases</div>
          <p className="p mt-3 max-w-3xl mx-auto">
            Add your real projects here as you deliver clients.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-4">
          {cases.map((c) => (
            <div key={c.title} className="card p-6">
              <div className="font-semibold">{c.title}</div>
              <p className="p mt-2">{c.desc}</p>
              <div className="mt-4">
                <Link
                  to="/contact"
                  className="text-blue-600 dark:text-blue-400 font-medium hover:underline"
                >
                  Request similar solution →
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* STATS + CTA */}
      <section className="card p-8 md:p-10">
        <div className="grid md:grid-cols-4 gap-6 text-center">
          <div>
            <div className="text-3xl font-semibold text-blue-600 dark:text-blue-400">8+</div>
            <div className="text-sm text-slate-600 dark:text-slate-300">Years experience</div>
          </div>
          <div>
            <div className="text-3xl font-semibold text-blue-600 dark:text-blue-400">500+</div>
            <div className="text-sm text-slate-600 dark:text-slate-300">Clients</div>
          </div>
          <div>
            <div className="text-3xl font-semibold text-blue-600 dark:text-blue-400">1200+</div>
            <div className="text-sm text-slate-600 dark:text-slate-300">Use cases</div>
          </div>
          <div>
            <div className="text-3xl font-semibold text-blue-600 dark:text-blue-400">40+</div>
            <div className="text-sm text-slate-600 dark:text-slate-300">Countries</div>
          </div>
        </div>

        <div className="mt-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <div>
            <div className="text-xl font-semibold">Ready to start?</div>
            <p className="p mt-1">
              Contact us and we’ll propose the fastest MVP plan for your business.
            </p>
          </div>
          <div className="flex gap-2">
            <Link className="btn btn-primary" to="/contact">
              Contact Now
            </Link>
            <Link className="btn" to="/demo/iot">
              Open Demo
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}