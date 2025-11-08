export default function Signup() {
  return (
    <section className="relative bg-white text-black dark:bg-black dark:text-white">
      <div className="mx-auto max-w-7xl px-6 py-20">
        <div className="mx-auto max-w-md">
          <div
            className="rounded-2xl p-8 backdrop-blur bg-white/80 dark:bg-black/40"
            style={{ border: '1px solid rgba(163,230,53,0.8)' }}
          >
            <div className="text-center">
              <h2 className="text-3xl font-bold tracking-tight">Create your account</h2>
              <p className="mt-2 text-sm text-black/60 dark:text-white/60">
                Start coding in the cloud within minutes. No credit card needed.
              </p>
            </div>

            <form className="mt-8 space-y-4">
              <div>
                <label className="block text-sm mb-1 text-black/80 dark:text-white/80">Email</label>
                <input
                  type="email"
                  placeholder="you@company.com"
                  className="w-full rounded-xl px-4 py-3 bg-white text-black dark:bg-black dark:text-white focus:outline-none"
                  style={{ border: '1px solid rgba(163,230,53,0.6)' }}
                />
              </div>
              <div>
                <label className="block text-sm mb-1 text-black/80 dark:text-white/80">Password</label>
                <input
                  type="password"
                  placeholder="Super secure password"
                  className="w-full rounded-xl px-4 py-3 bg-white text-black dark:bg-black dark:text-white focus:outline-none"
                  style={{ border: '1px solid rgba(163,230,53,0.6)' }}
                />
              </div>
              <button
                type="button"
                className="w-full rounded-xl px-4 py-3 font-medium transition bg-black text-white dark:bg-white dark:text-black hover:opacity-90"
                style={{ border: '1px solid rgba(163,230,53,0.9)' }}
              >
                Continue with Email
              </button>
            </form>

            <div className="mt-6 text-center text-xs text-black/60 dark:text-white/50">
              By continuing you agree to our Terms and Privacy Policy.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
