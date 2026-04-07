import { useState } from "react";
import { apiPost } from "../lib/api";

export default function Contact() {
  const [loading, setLoading] = useState(false);
  const [okMsg, setOkMsg] = useState<string | null>(null);
  const [errMsg, setErrMsg] = useState<string | null>(null);

  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    message: "",
  });

  async function submit(e: React.FormEvent) {
    e.preventDefault();
    setErrMsg(null);
    setOkMsg(null);
    setLoading(true);
    try {
      const res = await apiPost<{ ok: boolean; lead_id: number }>("/api/contact", {
        ...form,
        phone: form.phone || null,
        company: form.company || null,
      });
      setOkMsg(`Submitted successfully. Lead ID: ${res.lead_id}`);
      setForm({ name: "", email: "", phone: "", company: "", message: "" });
    } catch (e: any) {
      setErrMsg(e?.message || "Failed");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="space-y-10">
      <div className="card p-8 md:p-10">
        <div className="grid lg:grid-cols-2 gap-8 items-start">
          <div>
            <div className="section-kicker">Contact</div>
            <h1 className="h2 mt-2">How can we help?</h1>
            <p className="p mt-3">
              Share your requirements. Our specialists will suggest a plan (IoT + dashboard + automation + AI agent).
            </p>

            <div className="mt-6 grid grid-cols-2 gap-3">
              <div className="card p-4">
                <div className="text-xs text-slate-600 dark:text-slate-400">Typical delivery</div>
                <div className="font-semibold mt-1">On Demand</div>
              </div>
              <div className="card p-4">
               <div className="text-xs text-slate-600 dark:text-slate-400">Location</div>
                <div className="font-semibold mt-1">Remote</div>
              </div>
            </div>

            <div className="mt-6 text-sm text-slate-600 dark:text-slate-300">
              <div><span className="font-medium text-slate-900 dark:text-white">Email:</span> your@email.com</div>
              <div className="mt-1"><span className="font-medium text-slate-900 dark:text-white">WhatsApp:</span> +923285107458</div>
            </div>
          </div>

          <form onSubmit={submit} className="card p-6 space-y-4">
            <div>
              <div className="label">Name</div>
              <input
                className="input"
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                required
              />
            </div>

            <div>
              <div className="label">Email</div>
              <input
                className="input"
                type="email"
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                required
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              <div>
                <div className="label">Phone</div>
                <input
                  className="input"
                  value={form.phone}
                  onChange={(e) => setForm({ ...form, phone: e.target.value })}
                />
              </div>
              <div>
                <div className="label">Company</div>
                <input
                  className="input"
                  value={form.company}
                  onChange={(e) => setForm({ ...form, company: e.target.value })}
                />
              </div>
            </div>

            <div>
              <div className="label">How can we help?</div>
              <textarea
                className="input"
                rows={6}
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                placeholder="Example: We need AC energy monitoring + alerts + WhatsApp AI support."
                required
              />
            </div>

            {okMsg ? <div className="text-sm text-emerald-600">{okMsg}</div> : null}
            {errMsg ? <div className="text-sm text-rose-600">{errMsg}</div> : null}

            <button className="btn btn-primary w-full" disabled={loading}>
              {loading ? "Submitting..." : "Submit"}
            </button>

            <div className="text-xs text-slate-500">
              Leads are saved locally in <code>server/app.db</code>.
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}