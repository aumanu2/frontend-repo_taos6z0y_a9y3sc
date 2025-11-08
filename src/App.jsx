import { ThemeProvider, useTheme } from 'next-themes';
import Hero from './components/Hero';
import Features from './components/Features';
import Frameworks from './components/Frameworks';
import Footer from './components/Footer';
import Dashboard from './components/Dashboard';
import Signup from './components/Signup';
import { useEffect, useState } from 'react';

export default function App() {
  const [route, setRoute] = useState('/');

  const handleNavigate = (path) => {
    setRoute(path);
    if (typeof window !== 'undefined') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const Root = (
    <div className="min-h-screen bg-white text-black dark:bg-black dark:text-white">
      <Header onNavigate={handleNavigate} />
      <Hero onNavigate={handleNavigate} />
      <Features />
      <Frameworks />
      <TestimonialsPlaceholder />
      <Footer />
    </div>
  );

  const SignupPage = (
    <div className="min-h-screen bg-white text-black dark:bg-black dark:text-white">
      <Header onNavigate={handleNavigate} />
      <Signup />
      <Footer />
    </div>
  );

  const DashboardPage = (
    <div className="min-h-screen bg-white text-black dark:bg-black dark:text-white">
      <Header onNavigate={handleNavigate} />
      <Dashboard />
    </div>
  );

  return (
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
      {route === '/dashboard' ? DashboardPage : route === '/signup' ? SignupPage : Root}
    </ThemeProvider>
  );
}

function Header({ onNavigate }) {
  const { theme, setTheme, systemTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  const current = theme === 'system' ? systemTheme : theme;
  const isDark = current === 'dark';

  return (
    <header className="sticky top-0 z-10 bg-white/70 backdrop-blur border-b text-black dark:bg-black/60 dark:text-white" style={{ borderColor: 'rgba(163, 230, 53, 0.6)', borderStyle: 'solid', borderWidth: '0 0 1px 0' }}>
      <div className="mx-auto max-w-7xl px-6 h-14 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="h-6 w-6 rounded-md" style={{ background: 'linear-gradient(135deg,#fff,#fff)', border: '1px solid rgba(163,230,53,0.9)' }} />
          <button onClick={() => onNavigate('/')} className="font-semibold tracking-tight">VibeCode</button>
        </div>
        <nav className="hidden sm:flex items-center gap-6 text-sm opacity-80">
          <button onClick={() => onNavigate('/')} className="hover:opacity-100">Home</button>
          <button onClick={() => onNavigate('/dashboard')} className="hover:opacity-100">Dashboard</button>
        </nav>
        <div className="flex items-center gap-2">
          {mounted && (
            <div className="flex items-center rounded-xl border px-1 py-1" style={{ borderColor: 'rgba(163, 230, 53, 0.8)' }}>
              <button
                aria-label="Light mode"
                onClick={() => setTheme('light')}
                className={`rounded-lg px-2 py-1 text-xs ${!isDark ? 'bg-black text-white dark:bg-white dark:text-black' : ''}`}
              >
                Light
              </button>
              <button
                aria-label="Dark mode"
                onClick={() => setTheme('dark')}
                className={`rounded-lg px-2 py-1 text-xs ${isDark ? 'bg-black text-white dark:bg-white dark:text-black' : ''}`}
              >
                Dark
              </button>
              <button
                aria-label="System theme"
                onClick={() => setTheme('system')}
                className={`rounded-lg px-2 py-1 text-xs ${(theme === 'system') ? 'bg-black text-white dark:bg-white dark:text-black' : ''}`}
              >
                Auto
              </button>
            </div>
          )}
          <button onClick={() => onNavigate('/signup')} className="rounded-xl px-3 py-1.5 text-sm border hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black" style={{ borderColor: 'rgba(163, 230, 53, 0.8)' }}>Sign in</button>
          <button onClick={() => onNavigate('/signup')} className="rounded-xl px-3 py-1.5 text-sm font-medium bg-black text-white border hover:opacity-90 dark:bg-white dark:text-black" style={{ borderColor: 'rgba(163, 230, 53, 0.9)' }}>Get Started</button>
        </div>
      </div>
    </header>
  );
}

function TestimonialsPlaceholder() {
  return (
    <section className="relative bg-white text-black dark:bg-black dark:text-white">
      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="rounded-xl p-10 text-center opacity-80" style={{ border: '1px solid rgba(163,230,53,0.8)' }}>
          <p className="text-lg">Testimonials coming soon</p>
        </div>
      </div>
    </section>
  );
}
