import Spline from '@splinetool/react-spline';

export default function Hero({ onNavigate }) {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-indigo-900/40 via-gray-900 to-gray-900" />

      <div className="relative mx-auto max-w-7xl px-6 pt-24 pb-16 sm:pt-28 sm:pb-24">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <div className="order-2 lg:order-1">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/70 backdrop-blur">
              <span className="h-1.5 w-1.5 rounded-full bg-fuchsia-400 animate-pulse" />
              Instant cloud IDE • Templates for modern stacks
            </div>
            <h1 className="mt-5 text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-tight">
              Code at the speed of thought with
              <span className="block bg-clip-text text-transparent bg-gradient-to-r from-fuchsia-400 via-indigo-400 to-cyan-400"> VibeCode</span>
            </h1>
            <p className="mt-5 text-lg text-white/70 max-w-xl">
              Spin up production-grade workspaces in seconds. Launch with pre-built templates, or clone any GitHub repo right into your browser.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <button onClick={() => onNavigate('/signup')} className="group inline-flex items-center justify-center rounded-xl bg-gradient-to-r from-fuchsia-500 to-indigo-500 px-5 py-3 text-white font-medium shadow-[0_0_0_1px_rgba(255,255,255,0.08)_inset] hover:opacity-95 transition">
                Get Started
                <svg className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-0.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
              </button>
              <button onClick={() => onNavigate('/dashboard')} className="rounded-xl px-5 py-3 text-white/80 hover:text-white border border-white/10 bg-white/5 backdrop-blur shadow-[0_0_0_1px_rgba(255,255,255,0.06)_inset] transition">
                View Dashboard UI
              </button>
            </div>
          </div>

          <div className="relative order-1 lg:order-2 h-[340px] sm:h-[420px] lg:h-[520px] rounded-2xl overflow-hidden border border-white/10 bg-white/[0.02] backdrop-blur">
            <Spline scene="https://prod.spline.design/FduaNp3csZktbOi3/scene.splinecode" style={{ width: '100%', height: '100%' }} />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-900/40 via-transparent to-transparent" />
          </div>
        </div>
      </div>

      <div className="pointer-events-none absolute -bottom-24 left-1/2 h-64 w-[120%] -translate-x-1/2 rounded-[50%] bg-[radial-gradient(circle_at_center,rgba(168,85,247,0.25),rgba(99,102,241,0.18)_35%,transparent_60%)]" />
    </section>
  );
}
