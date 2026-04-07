import { Link } from "react-router-dom";
import SectionHeading from "../components/SectionHeading";

const features = [
  {
    title: "Device Integration",
    description: "Connect ESP32 devices, edge gateways, and sensor networks with a clean onboarding flow.",
    meta: "ESP32, MQTT, REST",
  },
  {
    title: "AI Automation",
    description: "Turn telemetry into decisions with automations that classify events, trigger alerts, and suggest actions.",
    meta: "Rules + AI",
  },
  {
    title: "Real-time Dashboard",
    description: "Monitor fleet health, sensor trends, and automation outcomes from one live operations workspace.",
    meta: "Live telemetry",
  },
  {
    title: "Cloud Connectivity",
    description: "Sync devices to the cloud, store historical events, and serve apps with reliable API endpoints.",
    meta: "Cloud ready",
  },
  {
    title: "Secure API Access",
    description: "Expose scoped APIs for your apps, partners, and internal tooling without rebuilding your backend.",
    meta: "Auth + webhooks",
  },
  {
    title: "Fast Deployment",
    description: "Ship prototypes and production pilots quickly with reusable interfaces, dashboards, and controls.",
    meta: "Minutes, not months",
  },
];

const useCases = [
  {
    title: "Smart Home Automation",
    description: "Coordinate devices, scenes, and AI-based triggers for comfort, safety, and energy savings.",
  },
  {
    title: "Industrial Monitoring",
    description: "Watch temperature, vibration, uptime, and anomalies across machines and production lines.",
  },
  {
    title: "Security Systems",
    description: "Combine sensors, edge processing, and AI actions to detect events and respond instantly.",
  },
  {
    title: "Energy Management",
    description: "Track consumption, optimize loads, and automate alerts when systems drift out of range.",
  },
];

const testimonials = [
  {
    quote:
      "AIoT Studio made our prototype feel production-ready in days. The dashboard and automation flow were instantly understandable.",
    name: "Amina Rahman",
    title: "Founder, VoltNest Labs",
  },
  {
    quote:
      "We connected sensors, built automation rules, and demoed a full workflow without stitching together five separate tools.",
    name: "Omar Siddiqui",
    title: "Product Lead, EdgeForge",
  },
  {
    quote:
      "The experience feels like a serious SaaS platform, not just a dashboard. It gives clients confidence immediately.",
    name: "Lucas Martin",
    title: "CTO, Signal Grid",
  },
];

const stats = [
  { value: "1,000+", label: "devices simulated" },
  { value: "99.98%", label: "event uptime target" },
  { value: "24/7", label: "AI automation monitoring" },
  { value: "10x", label: "faster prototyping" },
];

function HeroVisual() {
  return (
    <div className="relative">
      <div className="hero-card">
        <div className="hero-card-top">
          <div>
            <div className="eyebrow">Live Platform Preview</div>
            <div className="font-display text-2xl font-semibold text-slate-950 dark:text-white">
              Unified AIoT command center
            </div>
          </div>
          <div className="status-pill">Online</div>
        </div>

        <div className="mt-6 grid gap-4 xl:grid-cols-[1.15fr_0.85fr]">
          <div className="glass-panel p-5">
            <div className="flex items-center justify-between">
              <div>
                <div className="stat-label">Realtime telemetry</div>
                <div className="mt-1 font-display text-xl font-semibold text-slate-950 dark:text-white">
                  Plant Floor Cluster
                </div>
              </div>
              <div className="badge-soft">12 sensors</div>
            </div>

            <svg viewBox="0 0 520 240" className="mt-6 h-52 w-full">
              <defs>
                <linearGradient id="curve" x1="0%" x2="100%" y1="0%" y2="100%">
                  <stop offset="0%" stopColor="rgba(52,211,153,0.9)" />
                  <stop offset="55%" stopColor="rgba(34,211,238,0.75)" />
                  <stop offset="100%" stopColor="rgba(96,165,250,0.15)" />
                </linearGradient>
                <linearGradient id="fillCurve" x1="0%" x2="100%" y1="0%" y2="100%">
                  <stop offset="0%" stopColor="rgba(34,211,238,0.28)" />
                  <stop offset="100%" stopColor="rgba(59,130,246,0.04)" />
                </linearGradient>
              </defs>
              <path
                d="M0 178 C40 150 72 120 104 124 C138 130 160 182 196 172 C232 162 246 80 288 78 C330 76 360 140 408 122 C448 108 476 66 520 86 L520 240 L0 240 Z"
                fill="url(#fillCurve)"
              />
              <path
                d="M0 178 C40 150 72 120 104 124 C138 130 160 182 196 172 C232 162 246 80 288 78 C330 76 360 140 408 122 C448 108 476 66 520 86"
                fill="none"
                stroke="url(#curve)"
                strokeWidth="5"
                strokeLinecap="round"
              />
              <circle cx="288" cy="78" r="8" fill="#22d3ee" />
              <circle cx="408" cy="122" r="8" fill="#60a5fa" />
            </svg>

            <div className="mt-4 grid grid-cols-3 gap-3">
              <div className="mini-card">
                <div className="stat-label">Temp</div>
                <div className="mt-2 text-2xl font-semibold text-slate-950 dark:text-white">24.8C</div>
              </div>
              <div className="mini-card">
                <div className="stat-label">AI score</div>
                <div className="mt-2 text-2xl font-semibold text-slate-950 dark:text-white">92%</div>
              </div>
              <div className="mini-card">
                <div className="stat-label">Actions</div>
                <div className="mt-2 text-2xl font-semibold text-slate-950 dark:text-white">16</div>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-4">
            <div className="glass-panel p-5">
              <div className="stat-label">Device map</div>
              <div className="mt-4 space-y-3">
                {[
                  ["ESP32 Main Hub", "Healthy"],
                  ["Boiler Sensor Pack", "AI anomaly"],
                  ["Energy Relay", "Remote ready"],
                ].map(([name, state]) => (
                  <div key={name} className="flex items-center justify-between rounded-2xl border border-white/10 bg-white/5 px-4 py-3">
                    <div>
                      <div className="font-medium text-slate-900 dark:text-white">{name}</div>
                      <div className="text-sm text-slate-500 dark:text-slate-400">{state}</div>
                    </div>
                    <span className="pulse-dot" />
                  </div>
                ))}
              </div>
            </div>

            <div className="glass-panel p-5">
              <div className="stat-label">Automation pipeline</div>
              <div className="pipeline mt-4">
                {["Device", "Cloud", "AI", "Dashboard", "User"].map((label) => (
                  <div key={label} className="pipeline-node">
                    {label}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Home() {
  return (
    <div className="space-y-8">
      <section className="hero-shell">
        <div className="grid items-center gap-10 xl:grid-cols-[1.03fr_0.97fr]">
          <div className="space-y-7">
            <div className="inline-flex items-center gap-3 rounded-full border border-cyan-400/20 bg-cyan-400/10 px-4 py-2 text-sm text-cyan-200 shadow-[0_0_0_1px_rgba(34,211,238,0.08)]">
              <span className="pulse-dot" />
              AI + IoT automation platform for builders, startups, and operators
            </div>

            <div className="space-y-5">
              <h1 className="hero-title">Build AI-Powered IoT Systems Without Coding</h1>
              <p className="hero-copy">
                Connect devices, automate workflows, and deploy smart solutions in minutes.
                AIoT Studio turns ESP32 hardware, cloud connectivity, and AI logic into one
                modern operating system for intelligent products.
              </p>
            </div>

            <div className="flex flex-col gap-3 sm:flex-row">
              <Link to="/signup" className="btn btn-primary">
                Start Free
              </Link>
              <Link to="/dashboard" className="btn btn-secondary">
                View Demo
              </Link>
            </div>

            <div className="grid gap-3 sm:grid-cols-3">
              {[
                "ESP32 and sensor integration",
                "AI-driven automations and alerts",
                "Cloud dashboards with remote control",
              ].map((item) => (
                <div key={item} className="glass-panel px-4 py-4 text-sm text-slate-600 dark:text-slate-300">
                  {item}
                </div>
              ))}
            </div>
          </div>

          <HeroVisual />
        </div>
      </section>

      <section className="glass-panel section-shell">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
          <div>
            <div className="eyebrow">Built for developers and innovators</div>
            <div className="mt-2 max-w-2xl text-xl font-medium text-slate-800 dark:text-slate-100">
              AIoT Studio combines product-grade UX with real telemetry, automations, and edge-ready control flows.
            </div>
          </div>
          <a
            href="https://github.com/your-org/aiot-studio"
            target="_blank"
            rel="noreferrer"
            className="btn btn-secondary"
          >
            GitHub Placeholder
          </a>
        </div>
      </section>

      <section id="features" className="section-shell">
        <SectionHeading
          eyebrow="Features"
          title="Everything you need to launch AI + IoT products faster"
          subtitle="A premium SaaS experience for connecting devices, orchestrating automations, and exposing clean interfaces to users."
          align="center"
        />
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {features.map((feature) => (
            <div key={feature.title} className="feature-card">
              <div className="badge-soft">{feature.meta}</div>
              <div className="mt-5 font-display text-2xl font-semibold text-slate-950 dark:text-white">
                {feature.title}
              </div>
              <p className="mt-3 text-sm leading-7 text-slate-600 dark:text-slate-300">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section id="how-it-works" className="glass-panel section-shell">
        <SectionHeading
          eyebrow="How It Works"
          title="Device to insight in one continuous flow"
          subtitle="From the first packet to the final user action, every layer stays connected inside one operating model."
        />
        <div className="workflow-grid">
          {["Device", "Cloud", "AI", "Dashboard", "User"].map((step, index) => (
            <div key={step} className="workflow-card">
              <div className="workflow-index">0{index + 1}</div>
              <div className="workflow-title">{step}</div>
              <p className="workflow-copy">
                {step === "Device" && "Connect ESP32 boards, sensors, and relays with minimal setup."}
                {step === "Cloud" && "Stream telemetry, store history, and synchronize your fleet reliably."}
                {step === "AI" && "Detect patterns, classify risk, and automate decisions in real time."}
                {step === "Dashboard" && "Visualize metrics, events, and device controls with polished UX."}
                {step === "User" && "Give teams remote control, alerts, and insights they can act on instantly."}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section id="use-cases" className="section-shell">
        <SectionHeading
          eyebrow="Use Cases"
          title="One platform, multiple smart-system scenarios"
          subtitle="Use the same foundation to power homes, factories, buildings, or custom hardware products."
          align="center"
        />
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {useCases.map((useCase) => (
            <div key={useCase.title} className="use-case-card">
              <div className="font-display text-xl font-semibold text-slate-950 dark:text-white">
                {useCase.title}
              </div>
              <p className="mt-3 text-sm leading-7 text-slate-600 dark:text-slate-300">
                {useCase.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="glass-panel section-shell">
        <SectionHeading
          eyebrow="Live Demo"
          title="A modern dashboard preview your users will actually trust"
          subtitle="Sensor graphs, automation controls, and fleet visibility are presented like a real startup platform from day one."
        />
        <div className="grid gap-5 xl:grid-cols-[1.05fr_0.95fr]">
          <div className="dashboard-preview">
            <div className="dashboard-topbar">
              <div>
                <div className="stat-label">Workspace</div>
                <div className="font-display text-xl font-semibold text-slate-950 dark:text-white">
                  AIoT Command Center
                </div>
              </div>
              <div className="badge-soft">12 connected devices</div>
            </div>

            <div className="mt-6 grid gap-3 md:grid-cols-3">
              {[
                ["Edge Health", "98.2%"],
                ["Cloud Events", "24.1k"],
                ["AI Actions", "418"],
              ].map(([label, value]) => (
                <div key={label} className="mini-card">
                  <div className="stat-label">{label}</div>
                  <div className="mt-2 text-3xl font-semibold text-slate-950 dark:text-white">{value}</div>
                </div>
              ))}
            </div>

            <div className="mt-6 rounded-[28px] border border-white/10 bg-slate-950/80 p-5 text-slate-100 shadow-[inset_0_1px_0_rgba(255,255,255,0.06)]">
              <div className="grid gap-5 md:grid-cols-[0.7fr_1.3fr]">
                <div className="space-y-3">
                  {["Boiler Line", "Water Level Sensor", "HVAC Relay", "Door Lock Node"].map((name, index) => (
                    <div key={name} className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3">
                      <div className="flex items-center justify-between">
                        <div className="font-medium">{name}</div>
                        <span className={`status-pill ${index === 1 ? "status-pill-alert" : ""}`}>
                          {index === 1 ? "Review" : "Stable"}
                        </span>
                      </div>
                      <div className="mt-1 text-sm text-slate-400">Remote control enabled</div>
                    </div>
                  ))}
                </div>

                <div className="rounded-2xl border border-white/10 bg-slate-900/60 p-4">
                  <div className="stat-label text-slate-400">Sensor trend</div>
                  <svg viewBox="0 0 420 220" className="mt-4 h-48 w-full">
                    <defs>
                      <linearGradient id="purpleStroke" x1="0%" x2="100%" y1="0%" y2="0%">
                        <stop offset="0%" stopColor="#22d3ee" />
                        <stop offset="100%" stopColor="#8b5cf6" />
                      </linearGradient>
                    </defs>
                    <path
                      d="M0 145 C38 122 58 80 93 88 C131 98 149 176 188 170 C233 164 253 60 299 52 C333 46 360 122 420 95"
                      fill="none"
                      stroke="url(#purpleStroke)"
                      strokeWidth="5"
                      strokeLinecap="round"
                    />
                    <path
                      d="M0 145 C38 122 58 80 93 88 C131 98 149 176 188 170 C233 164 253 60 299 52 C333 46 360 122 420 95"
                      fill="none"
                      stroke="rgba(255,255,255,0.12)"
                      strokeDasharray="3 8"
                      strokeWidth="18"
                      strokeLinecap="round"
                    />
                  </svg>
                  <div className="mt-4 grid grid-cols-2 gap-3">
                    <div className="mini-card bg-white/5">
                      <div className="stat-label">Latency</div>
                      <div className="mt-2 text-2xl font-semibold">182ms</div>
                    </div>
                    <div className="mini-card bg-white/5">
                      <div className="stat-label">Confidence</div>
                      <div className="mt-2 text-2xl font-semibold">94%</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <div className="glass-panel p-5">
              <div className="eyebrow">Automations</div>
              <div className="mt-2 font-display text-2xl font-semibold text-slate-950 dark:text-white">
                Suggested smart actions
              </div>
              <div className="mt-4 space-y-3">
                {[
                  "If temperature rises above threshold, notify ops and increase fan speed.",
                  "If vibration drift continues for 15 minutes, flag a maintenance event.",
                  "If occupancy is low, reduce lighting and HVAC usage automatically.",
                ].map((rule) => (
                  <div key={rule} className="mini-card">
                    <p className="text-sm leading-7 text-slate-600 dark:text-slate-300">{rule}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="glass-panel p-5">
              <div className="eyebrow">Trust</div>
              <div className="mt-2 grid gap-3 sm:grid-cols-2">
                {stats.map((stat) => (
                  <div key={stat.label} className="mini-card">
                    <div className="text-3xl font-semibold text-slate-950 dark:text-white">{stat.value}</div>
                    <div className="mt-2 text-sm text-slate-600 dark:text-slate-300">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-shell">
        <SectionHeading
          eyebrow="Social Proof"
          title="Designed to feel like a real product before the first sales call"
          subtitle="These placeholder testimonials can be swapped for real customer stories once you start onboarding pilots."
          align="center"
        />
        <div className="grid gap-4 xl:grid-cols-3">
          {testimonials.map((testimonial) => (
            <div key={testimonial.name} className="glass-panel p-6">
              <p className="text-base leading-8 text-slate-700 dark:text-slate-200">"{testimonial.quote}"</p>
              <div className="mt-6">
                <div className="font-display text-lg font-semibold text-slate-950 dark:text-white">
                  {testimonial.name}
                </div>
                <div className="text-sm text-slate-500 dark:text-slate-400">{testimonial.title}</div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section id="cta" className="glass-panel cta-shell">
        <div className="relative z-10 max-w-3xl">
          <div className="eyebrow">Get Started</div>
          <h2 className="hero-title max-w-3xl text-4xl md:text-5xl">
            Start building your first AIoT project today
          </h2>
          <p className="hero-copy mt-4 max-w-2xl">
            Launch a polished AI + IoT experience with connected devices, AI automations, and modern dashboards that look ready for investors and customers.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link to="/signup" className="btn btn-primary">
              Get Started Free
            </Link>
            <Link to="/docs" className="btn btn-secondary">
              Read Docs
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
