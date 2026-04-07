import { useMemo, useState } from "react";
import SectionHeading from "../components/SectionHeading";

const devices = [
  { name: "ESP32 Main Hub", location: "Factory A", state: "Online", battery: "96%" },
  { name: "Cold Room Sensor", location: "Warehouse 3", state: "Monitoring", battery: "81%" },
  { name: "Energy Relay", location: "HQ Floor 2", state: "Remote Ready", battery: "74%" },
  { name: "Perimeter Node", location: "North Gate", state: "Alert Watch", battery: "68%" },
];

const baseSeries = [44, 48, 46, 58, 63, 60, 68, 72, 70, 78, 82, 86];

export default function IoTDashboard() {
  const [automationEnabled, setAutomationEnabled] = useState(true);
  const [notificationsEnabled, setNotificationsEnabled] = useState(true);
  const [remoteAccessEnabled, setRemoteAccessEnabled] = useState(true);

  const points = useMemo(
    () =>
      baseSeries
        .map((value, index) => `${index * 44},${220 - value * 2}`)
        .join(" "),
    [],
  );

  return (
    <div className="space-y-8">
      <section className="glass-panel section-shell">
        <SectionHeading
          eyebrow="Dashboard Preview"
          title="A polished control surface for connected devices"
          subtitle="This page is intentionally UI-first: a premium product demo that shows what AIoT Studio can feel like before deeper backend integration."
        />

        <div className="grid gap-4 md:grid-cols-4">
          {[
            ["Connected Devices", "24"],
            ["Active Automations", "16"],
            ["Cloud Sync", "Healthy"],
            ["Incidents Today", "03"],
          ].map(([label, value]) => (
            <div key={label} className="mini-card">
              <div className="stat-label">{label}</div>
              <div className="mt-3 text-3xl font-semibold text-slate-950 dark:text-white">{value}</div>
            </div>
          ))}
        </div>
      </section>

      <section className="grid gap-5 xl:grid-cols-[0.9fr_1.2fr_0.9fr]">
        <div className="glass-panel p-5">
          <div className="eyebrow">Device List</div>
          <div className="mt-2 font-display text-2xl font-semibold text-slate-950 dark:text-white">
            Fleet overview
          </div>
          <div className="mt-5 space-y-3">
            {devices.map((device) => (
              <div key={device.name} className="mini-card">
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <div className="font-medium text-slate-950 dark:text-white">{device.name}</div>
                    <div className="mt-1 text-sm text-slate-500 dark:text-slate-400">
                      {device.location}
                    </div>
                  </div>
                  <span className="badge-soft">{device.state}</span>
                </div>
                <div className="mt-4 flex items-center justify-between text-sm text-slate-500 dark:text-slate-400">
                  <span>Battery</span>
                  <span>{device.battery}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="glass-panel p-5">
          <div className="flex items-center justify-between gap-3">
            <div>
              <div className="eyebrow">Sensor Data Graph</div>
              <div className="mt-2 font-display text-2xl font-semibold text-slate-950 dark:text-white">
                Temperature and anomaly score
              </div>
            </div>
            <div className="badge-soft">Realtime UI mock</div>
          </div>

          <div className="mt-6 rounded-[28px] border border-white/10 bg-slate-950/85 p-5 text-slate-100">
            <svg viewBox="0 0 520 250" className="h-64 w-full">
              <defs>
                <linearGradient id="dashboardFill" x1="0%" x2="100%" y1="0%" y2="100%">
                  <stop offset="0%" stopColor="rgba(56,189,248,0.25)" />
                  <stop offset="100%" stopColor="rgba(168,85,247,0.05)" />
                </linearGradient>
                <linearGradient id="dashboardLine" x1="0%" x2="100%" y1="0%" y2="0%">
                  <stop offset="0%" stopColor="#22d3ee" />
                  <stop offset="100%" stopColor="#8b5cf6" />
                </linearGradient>
              </defs>
              <polygon points={`0,220 ${points} 484,220`} fill="url(#dashboardFill)" />
              <polyline
                points={points}
                fill="none"
                stroke="url(#dashboardLine)"
                strokeWidth="5"
                strokeLinejoin="round"
                strokeLinecap="round"
              />
            </svg>

            <div className="mt-6 grid gap-3 md:grid-cols-3">
              {[
                ["Avg Temp", "24.8C"],
                ["Anomaly Score", "0.18"],
                ["Next Action", "Fan Boost"],
              ].map(([label, value]) => (
                <div key={label} className="mini-card bg-white/5">
                  <div className="stat-label">{label}</div>
                  <div className="mt-2 text-2xl font-semibold">{value}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="glass-panel p-5">
          <div className="eyebrow">Controls</div>
          <div className="mt-2 font-display text-2xl font-semibold text-slate-950 dark:text-white">
            Control panel
          </div>

          <div className="mt-5 space-y-4">
            {[
              ["AI automation", automationEnabled, setAutomationEnabled],
              ["Push notifications", notificationsEnabled, setNotificationsEnabled],
              ["Remote access", remoteAccessEnabled, setRemoteAccessEnabled],
            ].map(([label, enabled, setEnabled]) => (
              <button
                key={label as string}
                type="button"
                className="toggle-row"
                onClick={() => (setEnabled as React.Dispatch<React.SetStateAction<boolean>>)((value) => !value)}
              >
                <div>
                  <div className="font-medium text-slate-950 dark:text-white">{label as string}</div>
                  <div className="mt-1 text-sm text-slate-500 dark:text-slate-400">
                    {(enabled as boolean) ? "Enabled and healthy" : "Currently paused"}
                  </div>
                </div>
                <span className={`toggle-pill ${(enabled as boolean) ? "toggle-pill-on" : ""}`}>
                  <span className={`toggle-knob ${(enabled as boolean) ? "translate-x-6" : ""}`} />
                </span>
              </button>
            ))}
          </div>

          <div className="mt-6 mini-card">
            <div className="stat-label">Suggested automation</div>
            <p className="mt-3 text-sm leading-7 text-slate-600 dark:text-slate-300">
              If anomaly score exceeds 0.20 for 10 minutes, reduce load by 15 percent and notify the on-call engineer.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
