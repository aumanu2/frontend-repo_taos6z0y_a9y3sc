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
    <section className="relative bg-white text-black dark:bg-black dark:text-white">
      <div className="mx-auto max-w-7xl px-6 py-20">
        <h2 className="text-3xl sm:text-4xl font-bold">Ship with your stack</h2>
        <p className="mt-3 text-black/60 dark:text-white/60 max-w-2xl">Start from curated templates that include best practices, sensible defaults, and CI-ready configs.</p>

        <div className="mt-10 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
          {stacks.map(({ name, icon: Icon }) => (
            <div key={name} className="group rounded-xl p-5 backdrop-blur transition bg-white/80 dark:bg-black/40"
              style={{ border: '1px solid rgba(163, 230, 53, 0.8)' }}
            >
              <div className="flex items-center gap-3">
                <div className="grid h-10 w-10 place-content-center rounded-lg border text-lime-700 dark:text-lime-400"
                  style={{ borderColor: 'rgba(163, 230, 53, 0.6)' }}
                >
                  <Icon className="h-5 w-5" />
                </div>
                <div>
                  <p className="font-medium">{name}</p>
                  <p className="text-xs text-black/50 dark:text-white/50">Template available</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
