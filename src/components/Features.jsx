import { Rocket, Zap, Terminal, GitBranch, Sparkles } from 'lucide-react';

const features = [
  {
    icon: <Zap className="h-5 w-5" />, title: 'Instant Environments',
    desc: 'Boot a fresh workspace in under 2 seconds with serverless containers.'
  },
  {
    icon: <Terminal className="h-5 w-5" />, title: 'Real IDE in the Browser',
    desc: 'Keyboard-first experience, command palette, panels and split views.'
  },
  {
    icon: <GitBranch className="h-5 w-5" />, title: 'GitHub Native',
    desc: 'Clone any repo and start coding immediately with auto-deps install.'
  },
  {
    icon: <Rocket className="h-5 w-5" />, title: 'Production Templates',
    desc: 'Launch-grade starters for Next.js, React, Angular, Astro, Svelte, Vue.'
  },
];

export default function Features() {
  return (
    <section className="relative bg-white text-black dark:bg-black dark:text-white">
      <div className="mx-auto max-w-7xl px-6 py-20">
        <div className="flex items-center gap-2 text-black/70 dark:text-white/70">
          <Sparkles className="h-4 w-4 text-lime-500" />
          <span className="text-xs uppercase tracking-wider">Why VibeCode</span>
        </div>
        <h2 className="mt-3 text-3xl sm:text-4xl font-bold">Designed for flow</h2>
        <p className="mt-3 text-black/60 dark:text-white/60 max-w-2xl">Everything you need to get from zero to shipping without leaving the browser.</p>

        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((f, i) => (
            <div
              key={i}
              className="group rounded-xl border p-5 backdrop-blur transition bg-white/80 text-black dark:bg-black/40 dark:text-white"
              style={{ borderColor: 'rgba(163, 230, 53, 0.8)' }}
            >
              <div className="flex items-center gap-3">
                <div className="grid h-9 w-9 place-content-center rounded-lg border text-lime-600 dark:text-lime-400"
                  style={{ borderColor: 'rgba(163, 230, 53, 0.6)' }}
                >
                  {f.icon}
                </div>
                <h3 className="font-semibold">{f.title}</h3>
              </div>
              <p className="mt-3 text-sm text-black/70 dark:text-white/70">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
