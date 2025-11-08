import { useState } from 'react';
import Hero from './components/Hero';
import Features from './components/Features';
import Frameworks from './components/Frameworks';
import Footer from './components/Footer';
import Dashboard from './components/Dashboard';
import Signup from './components/Signup';

export default function App() {
  const [route, setRoute] = useState('/');

  const handleNavigate = (path) => {
    // UI-only routing for preview (no auth/session logic here)
    setRoute(path);
    // Scroll to top on navigation
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  if (route === '/dashboard') {
    return (
      <div className="min-h-screen bg-gray-950">
        <Header onNavigate={handleNavigate} />
        <Dashboard />
      </div>
    );
  }

  if (route === '/signup') {
    return (
      <div className="min-h-screen bg-gray-950">
        <Header onNavigate={handleNavigate} />
        <Signup />
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-950 text-white">
      <Header onNavigate={handleNavigate} />
      <Hero onNavigate={handleNavigate} />
      <Features />
      <Frameworks />
      <TestimonialsPlaceholder />
      <Footer />
    </div>
  );
}

function Header({ onNavigate }) {
  return (
    <header className="sticky top-0 z-10 border-b border-white/10 bg-black/40 backdrop-blur">
      <div className="mx-auto max-w-7xl px-6 h-14 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="h-6 w-6 rounded-md bg-gradient-to-br from-fuchsia-500 to-indigo-500" />
          <button onClick={() => onNavigate('/')} className="text-white font-semibold tracking-tight">VibeCode</button>
        </div>
        <nav className="hidden sm:flex items-center gap-6 text-sm text-white/70">
          <button onClick={() => onNavigate('/')} className="hover:text-white">Home</button>
          <button onClick={() => onNavigate('/dashboard')} className="hover:text-white">Dashboard</button>
        </nav>
        <div className="flex items-center gap-2">
          <button onClick={() => onNavigate('/signup')} className="rounded-xl px-3 py-1.5 text-sm text-white/80 hover:text-white border border-white/10 bg-white/5">Sign in</button>
          <button onClick={() => onNavigate('/signup')} className="rounded-xl bg-gradient-to-r from-fuchsia-500 to-indigo-500 px-3 py-1.5 text-sm font-medium text-white hover:opacity-95">Get Started</button>
        </div>
      </div>
    </header>
  );
}

function TestimonialsPlaceholder() {
  return (
    <section className="relative border-t border-white/10 bg-black">
      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-10 text-center text-white/70">
          <p className="text-lg">Testimonials coming soon</p>
        </div>
      </div>
    </section>
  );
}
