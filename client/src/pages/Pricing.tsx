import { Link } from "react-router-dom";

type Plan = {
  name: string;
  price: string;
  tag?: string;
  desc: string;
  bullets: string[];
};

const plans: Plan[] = [
  {
    name: "Starter MVP",
    price: "Best for small businesses",
    tag: "Fast launch",
    desc: "Local demo + basic dashboard + alerts.",
    bullets: ["Local MVP (Fast)", "1–3 devices demo", "Dashboard + basic alerts", "Setup guidance"],
  },
  {
    name: "Business",
    price: "Most popular",
    tag: "Recommended",
    desc: "Real devices + storage + reporting automation.",
    bullets: ["Device integration", "Data history + charts", "Alerts → WhatsApp/email", "Weekly reports (PDF)"],
  },
  {
    name: "Enterprise",
    price: "Custom",
    tag: "Scale",
    desc: "Fleet management + security + integrations.",
    bullets: ["Role-based access", "Audit logs (optional)", "Integrations (CRM/ERP)", "Monitoring + support"],
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

export default function Pricing() {
  return (
    <div className="space-y-10">
      <section className="card-pro glow p-8 md:p-10 relative overflow-hidden">
        <div className="absolute -top-24 -right-24 h-72 w-72 rounded-full bg-blue-500/15 blur-3xl" />
        <div className="absolute -bottom-28 -left-28 h-72 w-72 rounded-full bg-slate-500/10 blur-3xl" />

        <div className="relative">
          <div className="kicker">Pricing</div>
          <h1 className="page-title mt-2">Simple packages, flexible scope</h1>
          <p className="page-desc">
            Start with a local MVP. Upgrade when you’re ready to connect real devices and automate operations.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row gap-3">
            <Link to="/contact" className="btn btn-primary">Request Quote</Link>
            <Link to="/services" className="btn">See Services</Link>
          </div>
        </div>
      </section>

      <section className="grid lg:grid-cols-3 gap-4">
        {plans.map((p) => (
          <div key={p.name} className="card-pro p-7 hover:-translate-y-0.5 transition-transform">
            <div className="flex items-start justify-between gap-3">
              <div>
                <div className="text-xl font-semibold text-white">{p.name}</div>
                <div className="mt-1 text-slate-300">{p.price}</div>
              </div>
              {p.tag ? <div className="icon-pill">{p.tag}</div> : null}
            </div>

            <p className="mt-4 text-slate-300">{p.desc}</p>

            <ul className="mt-5 space-y-3">
              {p.bullets.map((b) => (
                <CheckItem key={b} text={b} />
              ))}
            </ul>

            <div className="mt-6">
              <Link to="/contact" className="btn btn-primary w-full">
                Choose {p.name}
              </Link>
            </div>
          </div>
        ))}
      </section>

      <section className="card-pro p-8 md:p-10">
        <div className="text-2xl font-semibold text-white">Need a custom plan?</div>
        <p className="mt-2 text-slate-300 max-w-3xl">
          If you want WhatsApp AI + RAG + device fleet + integrations, we’ll create a proposal based on your workflow.
        </p>
        <div className="mt-6 flex gap-2">
          <Link to="/contact" className="btn btn-primary">Contact Specialist</Link>
          <Link to="/demo/ai" className="btn">Try AI Demo</Link>
        </div>
      </section>
    </div>
  );
}