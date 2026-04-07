import { useState } from "react";
import { apiPost } from "../lib/api";
import { Link } from "react-router-dom";

type AiOut = { ok: boolean; text: string };


export default function AIDemo() {
  const [q, setQ] = useState(
    "I run a small hotel in Madinah. I want IoT monitoring for AC and energy + WhatsApp AI support. Suggest a plan."
  );
  const [loading, setLoading] = useState(false);
  const [answer, setAnswer] = useState<string>("");
  const [err, setErr] = useState<string | null>(null);

  async function run() {
    setLoading(true);
    setErr(null);
    setAnswer("");
    try {
      const r = await apiPost<{ ok: boolean; text: string }>("/api/ai/demo", { prompt: q });
      setAnswer(r.text);

    } catch (e: any) {
      setErr(e?.message || "Failed");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="space-y-10">
      <section className="card-pro glow p-8 md:p-10 relative overflow-hidden">
        <div className="absolute -top-24 -right-24 h-72 w-72 rounded-full bg-blue-500/15 blur-3xl" />
        <div className="absolute -bottom-28 -left-28 h-72 w-72 rounded-full bg-slate-500/10 blur-3xl" />

        <div className="relative">
          <div className="kicker">AI Demo</div>
          <h1 className="page-title mt-2">AI consultant for your business</h1>
          <p className="page-desc">
            Uses your OpenAI key on the backend. Next upgrade: RAG from your uploaded PDFs and business data.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row gap-3">
            <button className="btn btn-primary" onClick={run} disabled={loading}>
              {loading ? "Generating..." : "Generate"}
            </button>
            <Link className="btn" to="/services">What we build</Link>
          </div>
        </div>
      </section>

      <section className="grid lg:grid-cols-2 gap-4">
        <div className="card-pro p-7">
          <div className="text-white font-semibold">Ask something</div>
          <textarea
            className="input mt-3"
            rows={10}
            value={q}
            onChange={(e) => setQ(e.target.value)}
          />
          <div className="mt-3 text-xs text-slate-400">
            Tip: Ask for a project plan, architecture, or pricing proposal.
          </div>
        </div>

        <div className="card-pro p-7">
          <div className="text-white font-semibold">AI response</div>

          {err ? (
            <div className="mt-3 rounded-2xl border border-rose-800/40 bg-rose-950/30 p-4 text-rose-300">
              {err}
            </div>
          ) : null}

          {answer ? (
            <pre className="mt-3 whitespace-pre-wrap text-slate-200 leading-relaxed">
              {answer}
            </pre>
          ) : (
            <div className="mt-3 text-slate-400">
              Click <span className="text-white">Generate</span> to see the response here.
            </div>
          )}
        </div>
      </section>

      <section className="card-pro p-8">
        <div className="text-white font-semibold text-lg">Next upgrade (RAG)</div>
        <p className="mt-2 text-slate-300">
          We can connect your PDFs, policies, price list, FAQs, and services data so the AI answers using your documents.
        </p>
        <div className="mt-4 flex gap-2">
          <Link to="/contact" className="btn btn-primary">Request RAG Setup</Link>
          <Link to="/demo/iot" className="btn">See IoT Demo</Link>
        </div>
      </section>
    </div>
  );
}