import { Link } from "react-router-dom";

const solutions = [
  {
    title: "Hotels & Hospitality",
    icon: "🏨",
    desc: "AC runtime + energy monitoring, guest support automation, and daily reports.",
    bullets: ["AC & energy dashboards", "Fault alerts → WhatsApp", "Guest FAQ bot", "Daily/weekly PDF reports"],
  },
  {
    title: "Restaurants & Retail",
    icon: "🍽️",
    desc: "Smart operations: inventory alerts, temperature sensors, and AI support.",
    bullets: ["Cold room temperature", "Stock alerts", "Sales/ops reporting", "WhatsApp assistant"],
  },
  {
    title: "Logistics & Warehouse",
    icon: "📦",
    desc: "Asset tracking, movement visibility, alerting, and operational KPIs.",
    bullets: ["Asset tracking", "Zone alerts", "Ops dashboard", "Auto incident reports"],
  },
  {
    title: "Manufacturing",
    icon: "🏭",
    desc: "Predictive maintenance, machine monitoring, downtime analytics.",
    bullets: ["Vibration + temperature", "Downtime detection", "Predictive insights", "Maintenance reporting"],
  },
  {
    title: "Healthcare",
    icon: "🏥",
    desc: "Secure monitoring and tracking for equipment and staff flows.",
    bullets: ["Equipment tracking", "Secure dashboards", "Audit logs (optional)", "Alerts & reports"],
  },
  {
    title: "Real Estate / Smart Buildings",
    icon: "🏢",
    desc: "Energy, water-leak detection, HVAC optimization and reporting.",
    bullets: ["Energy monitoring", "Water-leak sensors", "HVAC optimization", "Tenant reports"],
  },
];

function CheckItem({ text }: { text: string }) {
  return (
    <li className="flex gap-3 text-slate-300">
      <span className="mt-1 inline-flex h-5 w-5 items-center justify-center rounded-full bg-blue-600/20 text-blue-300 border border-blue-600/30">
        ✓
      </span>
      <span>{text}</span>
    </li>
  );
}

export default function Industries() {
  return (
    <div className="space-y-10">
      {/* Header */}
      <section className="card-pro glow p-8 md:p-10 relative overflow-hidden">
        <div className="absolute -top-24 -right-24 h-72 w-72 rounded-full bg-blue-500/15 blur-3xl" />
        <div className="absolute -bottom-28 -left-28 h-72 w-72 rounded-full bg-slate-500/10 blur-3xl" />

        <div className="relative">
          <div className="kicker">Solutions</div>
          <h1 className="page-title mt-2">Built for real operations</h1>
          <p className="page-desc">
            Choose your industry and we tailor devices, dashboards, alerts, and AI automation to your workflow.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row gap-3">
            <Link to="/contact" className="btn btn-primary">Get a Proposal</Link>
            <Link to="/demo/iot" className="btn">Open IoT Demo</Link>
          </div>
        </div>
      </section>

      {/* Grid */}
      <section className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
        {solutions.map((s) => (
          <div key={s.title} className="card-pro p-7 hover:-translate-y-0.5 transition-transform">
            <div className="icon-pill w-fit">
              <span>{s.icon}</span>
              <span className="font-medium">{s.title}</span>
            </div>

            <p className="mt-4 text-slate-300">{s.desc}</p>

            <ul className="mt-5 space-y-3">
              {s.bullets.map((b) => (
                <CheckItem key={b} text={b} />
              ))}
            </ul>
          </div>
        ))}
      </section>

      {/* CTA */}
      <section className="card-pro glow p-8 md:p-10">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-5">
          <div>
            <div className="text-2xl font-semibold text-white">Want a solution like these?</div>
            <p className="mt-2 text-slate-300">
              Tell us your use case (hotel, warehouse, shop) and we’ll build a local MVP first.
            </p>
          </div>
          <div className="flex gap-2">
            <Link to="/contact" className="btn btn-primary">Contact Specialist</Link>
            <Link to="/pricing" className="btn">View Pricing</Link>
          </div>
        </div>
      </section>
    </div>
  );
}