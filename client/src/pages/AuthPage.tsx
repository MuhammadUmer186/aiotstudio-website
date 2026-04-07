import { Link } from "react-router-dom";

export default function AuthPage({ mode }: { mode: "login" | "signup" }) {
  const isSignup = mode === "signup";

  return (
    <div className="mx-auto max-w-xl">
      <div className="glass-panel section-shell">
        <div className="eyebrow">{isSignup ? "Get Started" : "Welcome Back"}</div>
        <h1 className="section-title">{isSignup ? "Create your AIoT Studio account" : "Sign in to your workspace"}</h1>
        <p className="section-copy">
          This is a polished auth placeholder so the product flow feels complete while you wire up real authentication later.
        </p>

        <div className="mt-8 space-y-4">
          <label className="block">
            <span className="label">Work email</span>
            <input className="input mt-2" placeholder="founder@aiotstudio.online" />
          </label>
          <label className="block">
            <span className="label">Password</span>
            <input className="input mt-2" type="password" placeholder="Enter password" />
          </label>
          {isSignup ? (
            <label className="block">
              <span className="label">Company or project name</span>
              <input className="input mt-2" placeholder="AIoT Lab" />
            </label>
          ) : null}
        </div>

        <div className="mt-6 flex flex-col gap-3 sm:flex-row">
          <button className="btn btn-primary flex-1">{isSignup ? "Create Account" : "Sign In"}</button>
          <Link to="/" className="btn btn-secondary flex-1">
            Back to Home
          </Link>
        </div>

        <p className="mt-6 text-sm text-slate-500 dark:text-slate-400">
          {isSignup ? "Already have an account?" : "Need an account?"}{" "}
          <Link to={isSignup ? "/login" : "/signup"} className="text-cyan-500 hover:text-cyan-400">
            {isSignup ? "Sign in" : "Start free"}
          </Link>
        </p>
      </div>
    </div>
  );
}
