import { Boxes, Braces, Box, Hexagon, SquareStack, PanelsTopLeft, GitBranch } from 'lucide-react';

const stacks = [
  { name: 'Next.js', icon: Boxes },
  { name: 'React', icon: Braces },
  { name: 'Angular', icon: Hexagon },
  { name: 'Astro', icon: PanelsTopLeft },
  { name: 'Svelte', icon: Box },
  { name: 'Vue', icon: SquareStack },
  { name: 'GitHub Import', icon: GitBranch },
];

export default function Frameworks() {
  return (
    <section className="relative border-t border-white/10 bg-gradient-to-b from-gray-950 to-black">
      <div className="relative mx-auto max-w-7xl px-6 py-20">
        <h2 className="text-3xl sm:text-4xl font-bold text-white">Ship with your stack</h2>
        <p className="mt-3 text-white/60 max-w-2xl">Start from curated templates that include best practices, sensible defaults, and CI-ready configs.</p>

        <div className="mt-10 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
          {stacks.map(({ name, icon: Icon }) => (
            <div key={name} className="group rounded-2xl border border-white/10 bg-white/[0.03] backdrop-blur p-5 hover:border-cyan-400/30 transition">
              <div className="flex items-center gap-3 text-white">
                <div className="grid h-10 w-10 place-content-center rounded-xl bg-white/5 text-cyan-300 border border-white/10">
                  <Icon className="h-5 w-5" />
                </div>
                <div>
                  <p className="font-medium">{name}</p>
                  <p className="text-xs text-white/50">Template available</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
