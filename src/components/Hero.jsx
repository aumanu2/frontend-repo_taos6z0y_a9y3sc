import Spline from '@splinetool/react-spline';

export default function Hero({ onNavigate }) {
  return (
    <section className="relative overflow-hidden bg-white text-black dark:bg-black dark:text-white">
      {/* Spline cover */}
      <div className="relative h-[420px] sm:h-[520px] lg:h-[620px]">
        <Spline scene="https://prod.spline.design/zhZFnwyOYLgqlLWk/scene.splinecode" style={{ width: '100%', height: '100%' }} />
        {/* soft vignette to keep focus on headline */}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/40 via-transparent to-white/70 dark:from-black/40 dark:via-transparent dark:to-black/70" />
      </div>

      {/* Content overlay */}
      <div className="relative mx-auto -mt-40 sm:-mt-52 lg:-mt-64 max-w-7xl px-6 pb-16">
        <div className="grid lg:grid-cols-2 gap-10 items-end">
          <div className="order-2 lg:order-1">
            <div className="inline-flex items-center gap-2 rounded-full border border-lime-400/60 bg-white/70 px-3 py-1 text-xs text-black/80 backdrop-blur dark:bg-black/60 dark:text-white/80">
              <span className="h-1.5 w-1.5 rounded-full bg-lime-400 animate-pulse" />
              Premium Web IDE • Fast, Minimal, Powerful
            </div>
            <h1 className="mt-5 text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-tight">
              Build. Run. Ship. Faster with
              <span className="block text-lime-500"> VibeCode</span>
            </h1>
            <p className="mt-5 text-lg text-black/70 dark:text-white/70 max-w-xl">
              A bright, minimalist workspace that keeps focus on your code. Seamless projects with instant boot, Git integration, and a beautiful UI.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <button onClick={() => onNavigate('/signup')} className="group inline-flex items-center justify-center rounded-xl bg-black px-5 py-3 text-white font-medium border border-black hover:opacity-90 transition dark:bg-white dark:text-black dark:border-white">
                Get Started
                <svg className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-0.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
              </button>
              <button onClick={() => onNavigate('/dashboard')} className="rounded-xl px-5 py-3 border text-black hover:bg-black hover:text-white transition dark:text-white dark:hover:bg-white dark:hover:text-black" style={{ borderColor: 'rgba(163, 230, 53, 0.8)' }}>
                View Dashboard UI
              </button>
            </div>
          </div>

          <div className="order-1 lg:order-2" />
        </div>
      </div>
    </section>
  );
}
