export default function Footer() {
  return (
    <footer className="relative bg-white text-black dark:bg-black dark:text-white">
      <div className="mx-auto max-w-7xl px-6 py-10">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="h-7 w-7 rounded-md" style={{ background: 'linear-gradient(135deg,#000,#000)', border: '1px solid rgba(163,230,53,0.9)' }} />
            <span className="font-semibold">VibeCode</span>
            <span className="text-black/40 dark:text-white/40">— Bright, minimal coding</span>
          </div>
          <div className="text-xs text-black/50 dark:text-white/40">© {new Date().getFullYear()} VibeCode. All rights reserved.</div>
        </div>
      </div>
    </footer>
  );
}
