import { Folder, Files, Settings, Terminal, Sun, Moon } from 'lucide-react';

export default function Dashboard() {
  return (
    <section className="relative bg-white text-black dark:bg-black dark:text-white">
      <div className="mx-auto max-w-7xl px-6 py-10">
        <div
          className="rounded-xl border overflow-hidden"
          style={{ borderColor: 'rgba(163,230,53,0.8)' }}
        >
          {/* Top bar */}
          <header className="flex items-center justify-between px-4 py-2 bg-white/70 text-black backdrop-blur dark:bg-black/60 dark:text-white" style={{ borderBottom: '1px solid rgba(163,230,53,0.6)' }}>
            <div className="flex items-center gap-3">
              <div className="h-6 w-6 rounded-md bg-black dark:bg-white" style={{ border: '1px solid rgba(163,230,53,0.9)' }} />
              <span className="font-medium">VibeCode</span>
            </div>
            <div className="flex items-center gap-2 text-xs opacity-80">
              <span className="hidden sm:block">main • /apps/web</span>
              <button className="rounded-md px-2 py-1 border hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black" style={{ border: '1px solid rgba(163,230,53,0.6)' }}>Share</button>
            </div>
          </header>

          {/* Workbench */}
          <div className="grid grid-cols-[220px_1fr]">
            {/* Sidebar */}
            <aside className="border-r bg-white/60 dark:bg-black/40 backdrop-blur p-3 space-y-3" style={{ borderRight: '1px solid rgba(163,230,53,0.6)' }}>
              <div className="text-xs uppercase tracking-wider opacity-60 px-1">Explorer</div>
              <nav className="space-y-1">
                {['src', 'apps', 'packages', 'README.md'].map((item) => (
                  <div key={item} className="flex items-center gap-2 rounded-md px-2 py-1.5 hover:bg-black/5 dark:hover:bg-white/5 cursor-default">
                    <Folder className="h-4 w-4 opacity-60" />
                    <span className="text-sm opacity-90">{item}</span>
                  </div>
                ))}
              </nav>
            </aside>

            {/* Editor */}
            <main className="grid grid-rows-[auto_1fr_auto]">
              {/* Tabs */}
              <div className="flex items-center gap-2 px-3 py-2 bg-white/60 dark:bg-black/40" style={{ borderBottom: '1px solid rgba(163,230,53,0.6)' }}>
                {["index.tsx", "package.json", "README.md"].map((tab, i) => (
                  <div key={tab} className={`rounded-md px-3 py-1.5 text-sm border ${i===0 ? 'bg-black text-white dark:bg-white dark:text-black' : 'hover:bg-black/5 dark:hover:bg-white/5'}`} style={{ border: '1px solid rgba(163,230,53,0.6)' }}>{tab}</div>
                ))}
                <div className="ml-auto flex items-center gap-2 opacity-70">
                  <Sun className="h-4 w-4" />
                  <Moon className="h-4 w-4" />
                  <Settings className="h-4 w-4" />
                </div>
              </div>

              {/* Code area */}
              <div className="relative">
                <div className="absolute inset-0 pointer-events-none" style={{ background: 'radial-gradient(500px_200px_at_60%_0%, rgba(163,230,53,0.12), transparent)' }} />
                <pre className="relative h-64 overflow-auto p-6 text-sm leading-relaxed opacity-90">
{`export function App() {
  return (
    <div className="min-h-screen bg-white text-black dark:bg-black dark:text-white">
      <h1 className="text-2xl font-bold p-6 border" style={{ border: '1px solid rgba(163,230,53,0.6)' }}>Hello, VibeCode</h1>
    </div>
  );
}
`}
                </pre>
              </div>

              {/* Terminal */}
              <div className="bg-white/60 dark:bg-black/40" style={{ borderTop: '1px solid rgba(163,230,53,0.6)' }}>
                <div className="flex items-center gap-2 px-3 py-2 text-xs opacity-70">
                  <Terminal className="h-4 w-4" />
                  <span>Terminal • bash</span>
                </div>
                <div className="h-24 overflow-auto px-3 py-2 font-mono text-xs text-lime-700 dark:text-lime-300">
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
      </div>
    </section>
  );
}
