import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import SectionHeading from "../components/SectionHeading";
import { apiGet } from "../lib/api";

type IoT = {
  ok: boolean;
  device_id: string;
  ts: number;
  temperature_c: number;
  humidity_pct: number;
  vibration_rms: number;
  energy_kw?: number; // optional (backend may not send it)
  status: string;
};

function Stat({
  label,
  value,
  hint,
}: {
  label: string;
  value: string;
  hint?: string;
}) {
  return (
    <div className="card p-6 relative overflow-hidden">
      <div className="absolute -top-16 -right-16 h-40 w-40 rounded-full bg-blue-500/10 blur-2xl" />
      <div className="relative">
        <div className="text-xs uppercase tracking-widest text-slate-500">{label}</div>
        <div className="text-2xl font-semibold mt-2">{value}</div>
        {hint ? <div className="text-xs text-slate-500 mt-2">{hint}</div> : null}
      </div>
    </div>
  );
}

export default function IoTDashboard() {
  const [data, setData] = useState<IoT | null>(null);
  const [err, setErr] = useState<string | null>(null);

  async function load() {
    try {
      setErr(null);
      const res = await apiGet<IoT>("/api/iot/latest");
      setData(res);
    } catch (e: any) {
      setErr(e?.message || "Failed to load IoT data");
    }
  }

  useEffect(() => {
    load();
    const t = setInterval(load, 3000);
    return () => clearInterval(t);
  }, []);

  const ts = data?.ts ? new Date(data.ts * 1000).toLocaleString() : "—";

  return (
    <div className="space-y-6">
      <div className="card p-8 relative overflow-hidden">
        <div className="absolute -top-24 -right-24 h-72 w-72 rounded-full bg-blue-500/15 blur-3xl" />
        <div className="absolute -bottom-28 -left-28 h-72 w-72 rounded-full bg-slate-500/10 blur-3xl" />

        <div className="relative">
          <SectionHeading
            title="IoT Demo Dashboard"
            subtitle="Demo sensor data refreshing every 3 seconds (replace with MQTT/DB later)."
          />

          <div className="mt-5 flex flex-col sm:flex-row gap-3">
            <button className="btn btn-primary" onClick={load}>Refresh</button>
            <Link className="btn" to="/services">See Services</Link>
            <Link className="btn" to="/demo/ai">Try AI Demo</Link>
          </div>
        </div>
      </div>

      {err ? (
        <div className="card p-4 border border-rose-500/20 bg-rose-500/5 text-sm text-rose-300">
          {err}
        </div>
      ) : null}

      <div className="card p-6 flex flex-col md:flex-row md:items-center md:justify-between gap-3">
        <div>
          <div className="text-xs uppercase tracking-widest text-slate-500">Device</div>
          <div className="font-semibold mt-1">{data?.device_id || "—"}</div>
          <div className="text-slate-500 text-sm mt-1">Last update: {ts}</div>
        </div>

        <div className="badge">
          Status: <span className="ml-2 font-medium">{data?.status || "—"}</span>
        </div>
      </div>

      <div className="grid md:grid-cols-3 gap-4">
        <Stat
          label="Temperature"
          value={data ? `${Number(data.temperature_c).toFixed(1)} °C` : "—"}
          hint="Room / AC environment"
        />
        <Stat
          label="Humidity"
          value={data ? `${Number(data.humidity_pct).toFixed(0)} %` : "—"}
          hint="Comfort monitoring"
        />
        <Stat
          label="Vibration (RMS)"
          value={data ? `${Number(data.vibration_rms).toFixed(3)}` : "—"}
          hint="Motor / fault signals"
        />
      </div>

      <div className="grid md:grid-cols-2 gap-4">
        <div className="card p-6">
          <div className="font-semibold">What this demo proves</div>
          <ul className="mt-3 space-y-2 text-slate-600 list-disc pl-5">
            <li>Backend API works</li>
            <li>Frontend polls live data</li>
            <li>UI structure for real dashboard</li>
          </ul>
        </div>

        <div className="card p-6">
          <div className="font-semibold">Next step (production)</div>
          <ul className="mt-3 space-y-2 text-slate-600 list-disc pl-5">
            <li>ESP32 publishes MQTT</li>
            <li>Backend consumes + stores to DB</li>
            <li>Charts + alert rules</li>
            <li>WhatsApp notifications + PDF reports</li>
          </ul>
        </div>
      </div>
    </div>
  );
}