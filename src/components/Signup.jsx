export default function Signup() {
  return (
    <div className="min-h-[80vh] bg-gradient-to-b from-gray-950 to-black py-24">
      <div className="mx-auto max-w-md px-6">
        <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-8 backdrop-blur">
          <h2 className="text-3xl font-bold text-white">Create your account</h2>
          <p className="mt-2 text-white/60">Start coding in the cloud within minutes. No credit card needed.</p>

          <form className="mt-8 space-y-4">
            <div>
              <label className="block text-sm text-white/70 mb-1">Email</label>
              <input type="email" placeholder="you@company.com" className="w-full rounded-xl bg-white/5 border border-white/10 px-4 py-3 text-white placeholder-white/30 focus:outline-none focus:ring-2 focus:ring-fuchsia-500/40" />
            </div>
            <div>
              <label className="block text-sm text-white/70 mb-1">Password</label>
              <input type="password" placeholder="Super secure password" className="w-full rounded-xl bg-white/5 border border-white/10 px-4 py-3 text-white placeholder-white/30 focus:outline-none focus:ring-2 focus:ring-fuchsia-500/40" />
            </div>
            <button type="button" className="w-full rounded-xl bg-gradient-to-r from-fuchsia-500 to-indigo-500 px-4 py-3 text-white font-medium hover:opacity-95">
              Continue with Email
            </button>
          </form>

          <div className="mt-6 text-center text-xs text-white/50">
            By continuing you agree to our Terms and Privacy Policy.
          </div>
        </div>
      </div>
    </div>
  );
}
