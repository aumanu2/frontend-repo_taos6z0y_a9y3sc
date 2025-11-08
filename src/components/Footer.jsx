export default function Footer() {
  return (
    <footer className="relative border-t border-white/10 bg-black">
      <div className="mx-auto max-w-7xl px-6 py-10 text-white/60">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="h-7 w-7 rounded-md bg-gradient-to-br from-fuchsia-500 to-indigo-500" />
            <span className="text-white font-semibold">VibeCode</span>
            <span className="text-white/30">— Build at the speed of thought</span>
          </div>
          <div className="text-xs text-white/40">© {new Date().getFullYear()} VibeCode. All rights reserved.</div>
        </div>
      </div>
    </footer>
  );
}
