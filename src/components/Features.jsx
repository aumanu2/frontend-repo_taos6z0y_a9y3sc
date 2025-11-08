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
    <section className="relative bg-gradient-to-b from-gray-900 to-gray-950 border-t border-white/10">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(200px_80px_at_20%_0%,rgba(236,72,153,0.15),transparent),radial-gradient(200px_80px_at_80%_0%,rgba(99,102,241,0.15),transparent)]" />
      <div className="relative mx-auto max-w-7xl px-6 py-20">
        <div className="flex items-center gap-2 text-white/70">
          <Sparkles className="h-4 w-4 text-fuchsia-400" />
          <span className="text-xs uppercase tracking-wider">Why VibeCode</span>
        </div>
        <h2 className="mt-3 text-3xl sm:text-4xl font-bold text-white">Designed for flow</h2>
        <p className="mt-3 text-white/60 max-w-2xl">Everything you need to get from zero to shipping without leaving the browser.</p>

        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((f, i) => (
            <div key={i} className="group rounded-2xl border border-white/10 bg-white/[0.03] p-5 backdrop-blur hover:border-fuchsia-400/30 transition">
              <div className="flex items-center gap-3 text-white">
                <div className="grid h-9 w-9 place-content-center rounded-xl bg-gradient-to-br from-fuchsia-500/20 to-indigo-500/20 text-fuchsia-300 border border-white/10">
                  {f.icon}
                </div>
                <h3 className="font-semibold">{f.title}</h3>
              </div>
              <p className="mt-3 text-sm text-white/60">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
