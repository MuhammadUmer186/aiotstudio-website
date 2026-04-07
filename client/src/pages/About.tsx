import { Link } from "react-router-dom";

const values = [
  { t: "Local-first MVP", d: "We build and test locally first. Fast iteration and validation." },
  { t: "Production-ready", d: "Clean backend APIs, device pipelines, and scalable architecture." },
  { t: "Automation-first", d: "Dashboards, alerts, WhatsApp AI, and reports are built together." },
  { t: "KSA context", d: "Designed for businesses" },
];

export default function About() {
  return (
    <div className="space-y-10">
      <section className="card-pro glow p-8 md:p-10 relative overflow-hidden">
        <div className="absolute -top-24 -right-24 h-72 w-72 rounded-full bg-blue-500/15 blur-3xl" />
        <div className="absolute -bottom-28 -left-28 h-72 w-72 rounded-full bg-slate-500/10 blur-3xl" />

        <div className="relative">
          <div className="kicker">Company</div>
          <h1 className="page-title mt-2">We build IoT + AI systems for operations</h1>
          <p className="page-desc">
            From device monitoring and dashboards to WhatsApp AI support and automated reporting.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row gap-3">
            <Link to="/contact" className="btn btn-primary">Work with us</Link>
            <Link to="/services" className="btn">See services</Link>
          </div>
        </div>
      </section>

      <section className="grid md:grid-cols-2 gap-4">
        {values.map((v) => (
          <div key={v.t} className="card-pro p-7">
            <div className="text-white font-semibold">{v.t}</div>
            <p className="mt-2 text-slate-300">{v.d}</p>
          </div>
        ))}
      </section>

      <section className="card-pro p-8 md:p-10">
        <div className="text-white font-semibold text-2xl">How we deliver</div>
        <ol className="mt-4 space-y-2 text-slate-300 list-decimal pl-5">
          <li>Requirement + workflow mapping</li>
          <li>Local MVP demo for fast validation</li>
          <li>Connect real devices and store data</li>
          <li>Add alerts, reports, and WhatsApp AI automation</li>
          <li>Deploy and continuously improve</li>
        </ol>
      </section>

      <section className="card-pro glow p-8 md:p-10">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-5">
          <div>
            <div className="text-2xl font-semibold text-white">Ready to start?</div>
            <p className="mt-2 text-slate-300">
              Tell us your business and we’ll propose the fastest MVP plan.
            </p>
          </div>
          <Link to="/contact" className="btn btn-primary">Contact Specialist</Link>
        </div>
      </section>
    </div>
  );
}