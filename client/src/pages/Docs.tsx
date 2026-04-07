import { Link } from "react-router-dom";
import SectionHeading from "../components/SectionHeading";

const quickStartSteps = [
  "Register a workspace and create your first project.",
  "Connect an ESP32 or sensor gateway with REST or MQTT credentials.",
  "Define AI rules to classify events, trigger automations, or summarize anomalies.",
  "Deploy dashboards, alerts, and device controls for your team.",
];

const snippets = [
  {
    title: "Publish sensor telemetry",
    code: `POST /api/devices/telemetry\n{\n  "deviceId": "esp32-line-01",\n  "temperature": 24.8,\n  "humidity": 49,\n  "status": "online"\n}`,
  },
  {
    title: "Create AI automation",
    code: `if temperature > 28:\n  notify("Ops Team")\n  classify("Cooling anomaly")\n  trigger("fan_boost")`,
  },
];

export default function Docs() {
  return (
    <div className="space-y-8">
      <section className="glass-panel section-shell">
        <SectionHeading
          eyebrow="Docs"
          title="Developer-friendly building blocks for smart systems"
          subtitle="AIoT Studio gives teams a clear path from devices to automations, dashboards, and secure APIs."
        />

        <div className="grid gap-4 md:grid-cols-4">
          {quickStartSteps.map((step, index) => (
            <div key={step} className="mini-card">
              <div className="stat-label">Step {index + 1}</div>
              <p className="mt-3 text-sm leading-7 text-slate-600 dark:text-slate-300">{step}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="grid gap-4 lg:grid-cols-[1.1fr_0.9fr]">
        <div className="glass-panel section-shell">
          <SectionHeading
            eyebrow="Capabilities"
            title="Built for rapid prototyping and production handoff"
            subtitle="Use reusable APIs and automations for smart home, industrial, security, and energy scenarios."
          />
          <div className="grid gap-3 md:grid-cols-2">
            <div className="mini-card">
              <div className="font-display text-lg font-semibold">MQTT + REST</div>
              <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">
                Connect microcontrollers and gateways with protocols your team already uses.
              </p>
            </div>
            <div className="mini-card">
              <div className="font-display text-lg font-semibold">Role-based dashboards</div>
              <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">
                Give operators, developers, and founders the right level of visibility.
              </p>
            </div>
            <div className="mini-card">
              <div className="font-display text-lg font-semibold">AI event engine</div>
              <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">
                Turn raw telemetry into suggested actions, summaries, and automated decisions.
              </p>
            </div>
            <div className="mini-card">
              <div className="font-display text-lg font-semibold">Secure API access</div>
              <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">
                Integrate with your cloud stack, mobile apps, or internal tooling.
              </p>
            </div>
          </div>
        </div>

        <div className="space-y-4">
          {snippets.map((snippet) => (
            <div key={snippet.title} className="glass-panel p-5">
              <div className="font-display text-lg font-semibold text-slate-950 dark:text-white">
                {snippet.title}
              </div>
              <pre className="code-block mt-4">{snippet.code}</pre>
            </div>
          ))}
          <div className="glass-panel p-5">
            <div className="font-display text-lg font-semibold text-slate-950 dark:text-white">
              Need a custom onboarding flow?
            </div>
            <p className="mt-2 text-sm leading-7 text-slate-600 dark:text-slate-300">
              We can tailor the UI, rules engine, and deployment model around your hardware stack.
            </p>
            <div className="mt-5 flex gap-3">
              <Link to="/signup" className="btn btn-primary">
                Start Free
              </Link>
              <a href="/#cta" className="btn btn-secondary">
                Talk to Sales
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
