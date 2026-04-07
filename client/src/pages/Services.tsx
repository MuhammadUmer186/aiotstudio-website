import { Link } from "react-router-dom";

type Svc = {
  title: string;
  desc: string;
  icon: string;
  bullets: string[];
};

const services: Svc[] = [
  {
    title: "IoT Device Integration",
    desc: "Connect ESP32, sensors, gateways, and existing devices. Reliable data pipelines with MQTT/HTTP.",
    icon: "🛰️",
    bullets: ["ESP32 / Raspberry Pi", "MQTT / HTTP / WebSockets", "Sensors & actuators", "Edge + local servers"],
  },
  {
    title: "Dashboards & Monitoring",
    desc: "Real-time status, alerts, history and KPI views designed for operators and owners.",
    icon: "📊",
    bullets: ["Live device status", "Alerts & thresholds", "History charts", "Role-based access (optional)"],
  },
  {
    title: "AI Automation & Agents",
    desc: "AI assistants that answer customers, summarize documents, and automate workflows.",
    icon: "🤖",
    bullets: ["WhatsApp AI (support & sales)", "PDF summaries + reports", "Knowledge base (RAG)", "CRM/email automation"],
  },
  {
    title: "Custom Software Development",
    desc: "Full-stack web apps, admin panels, integrations, and deployment-ready backend APIs.",
    icon: "⚙️",
    bullets: ["Web apps", "APIs", "Admin panels", "Integrations with existing tools"],
  },
];

const process = [
  { n: "01", t: "Discovery", d: "We understand your operations and define KPIs + alerts." },
  { n: "02", t: "Local MVP", d: "We deliver a working demo locally (fast validation)." },
  { n: "03", t: "Connect Devices", d: "Integrate real sensors/devices, store data, build dashboards." },
  { n: "04", t: "Automation", d: "WhatsApp AI, reports, notifications, and continuous improvement." },
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

export default function Services() {
  return (
    <div className="space-y-10">
      {/* Header */}
      <section className="card-pro glow p-8 md:p-10 relative overflow-hidden">
        <div className="absolute -top-24 -right-24 h-72 w-72 rounded-full bg-blue-500/15 blur-3xl" />
        <div className="absolute -bottom-28 -left-28 h-72 w-72 rounded-full bg-slate-500/10 blur-3xl" />

        <div className="relative">
          <div className="kicker">Services</div>
          <h1 className="page-title mt-2">Build an IoT + AI automation system</h1>
          <p className="page-desc">
            Pick a package or mix & match. We build local-first systems that can scale to production.
          </p>

          <div className="mt-6 flex flex-wrap gap-2">
            <span className="icon-pill">⚡ Real-time</span>
            <span className="icon-pill">🔔 Alerts</span>
            <span className="icon-pill">📄 Reports</span>
            <span className="icon-pill">🤖 WhatsApp AI</span>
            <span className="icon-pill">🧠 RAG</span>
          </div>

          <div className="mt-8 flex flex-col sm:flex-row gap-3">
            <Link to="/contact" className="btn btn-primary">
              Contact Specialist
            </Link>
            <Link to="/demo/iot" className="btn">
              View IoT Demo
            </Link>
            <Link to="/demo/ai" className="btn">
              View AI Demo
            </Link>
          </div>
        </div>
      </section>

      {/* Services grid */}
      <section className="grid lg:grid-cols-2 gap-4">
        {services.map((s) => (
          <div key={s.title} className="card-pro p-7 hover:-translate-y-0.5 transition-transform">
            <div className="flex items-start justify-between gap-4">
              <div className="icon-pill">
                <span>{s.icon}</span>
                <span className="font-medium">{s.title}</span>
              </div>
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

      {/* Process */}
      <section className="card-pro p-8 md:p-10">
        <div className="kicker">Delivery</div>
        <h2 className="text-2xl md:text-3xl font-semibold mt-2 text-white">How we work</h2>
        <p className="mt-3 text-slate-300 max-w-3xl">
          We deliver a local MVP quickly, then connect real devices and automate reporting + WhatsApp support.
        </p>

        <div className="mt-6 grid md:grid-cols-4 gap-4">
          {process.map((p) => (
            <div key={p.n} className="rounded-2xl border border-slate-800/70 bg-slate-950/40 p-6">
              <div className="text-xs tracking-widest text-slate-400">{p.n}</div>
              <div className="mt-2 font-semibold text-white">{p.t}</div>
              <p className="mt-2 text-sm text-slate-300">{p.d}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="card-pro glow p-8 md:p-10">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-5">
          <div>
            <div className="text-2xl font-semibold text-white">Want a proposal for your business?</div>
            <p className="mt-2 text-slate-300">
              Share your requirements (hotel, warehouse, restaurant, etc.) and we’ll recommend the fastest MVP plan.
            </p>
          </div>
          <div className="flex gap-2">
            <Link to="/contact" className="btn btn-primary">Get Proposal</Link>
            <Link to="/pricing" className="btn">See Pricing</Link>
          </div>
        </div>
      </section>
    </div>
  );
}