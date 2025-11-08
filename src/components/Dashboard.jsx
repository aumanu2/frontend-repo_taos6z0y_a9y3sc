import { Folder, Files, Settings, Terminal } from 'lucide-react';

export default function Dashboard() {
  return (
    <div className="h-full grid grid-rows-[auto_1fr] bg-[linear-gradient(to_bottom_right,rgba(17,24,39,1),rgba(2,6,23,1))] text-white">
      <header className="flex items-center justify-between px-4 py-2 border-b border-white/10 bg-white/5 backdrop-blur">
        <div className="flex items-center gap-3">
          <div className="h-6 w-6 rounded-md bg-gradient-to-br from-fuchsia-500 to-indigo-500" />
          <span className="font-medium">VibeCode</span>
        </div>
        <div className="flex items-center gap-2 text-xs text-white/60">
          <span className="hidden sm:block">main • /apps/web</span>
          <button className="rounded-md px-2 py-1 bg-white/5 border border-white/10 hover:bg-white/10">Share</button>
        </div>
      </header>

      <div className="grid grid-cols-[260px_1fr] h-[calc(100vh-48px)]">
        <aside className="border-r border-white/10 bg-white/[0.02] backdrop-blur p-3 space-y-3">
          <div className="text-xs uppercase tracking-wider text-white/40 px-1">Explorer</div>
          <nav className="space-y-1">
            {['src', 'apps', 'packages', 'README.md'].map((item) => (
              <div key={item} className="flex items-center gap-2 rounded-md px-2 py-1.5 hover:bg-white/5 cursor-default">
                <Folder className="h-4 w-4 text-white/50" />
                <span className="text-sm text-white/80">{item}</span>
              </div>
            ))}
          </nav>
        </aside>

        <main className="grid grid-rows-[auto_1fr_auto]">
          <div className="flex items-center gap-2 border-b border-white/10 bg-white/[0.02] px-3 py-2">
            {["index.tsx", "package.json", "README.md"].map((tab, i) => (
              <div key={tab} className={`rounded-md px-3 py-1.5 text-sm ${i===0 ? 'bg-white/10 text-white' : 'text-white/70 hover:bg-white/5'}`}>{tab}</div>
            ))}
            <div className="ml-auto flex items-center gap-2 text-white/50">
              <Settings className="h-4 w-4" />
            </div>
          </div>

          <div className="relative">
            <div className="absolute inset-0 bg-[radial-gradient(600px_200px_at_60%_0%,rgba(168,85,247,0.08),transparent)]" />
            <pre className="relative h-full overflow-auto p-6 text-sm leading-relaxed text-white/80">
{`export function App() {
  return (
    <div className="min-h-screen bg-slate-900 text-slate-100">
      <h1 className="text-2xl font-bold p-6">Hello, VibeCode</h1>
    </div>
  );
}
`}
            </pre>
          </div>

          <div className="border-t border-white/10 bg-black/40">
            <div className="flex items-center gap-2 px-3 py-2 text-white/60 text-xs">
              <Terminal className="h-4 w-4" />
              <span>Terminal • bash</span>
            </div>
            <div className="h-24 overflow-auto px-3 py-2 font-mono text-xs text-green-300">
              $ npm install
              <br />
              resolved 1,288 packages in 2.4s
              <br />
              ✨ done
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
