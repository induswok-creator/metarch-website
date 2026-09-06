import { useEffect, useId, useState } from 'react';
import { NAV_LINKS } from '../data.js';

export function Logo({ className = 'h-9 w-9' }) {
  const raw = useId();
  const id = `metarch-grad-${raw.replace(/[^a-zA-Z0-9]/g, '')}`;
  return (
    <svg viewBox="0 0 40 40" className={`${className} shrink-0`} aria-hidden="true">
      <defs>
        <linearGradient id={id} x1="0" y1="0" x2="40" y2="40" gradientUnits="userSpaceOnUse">
          <stop stopColor="#fbbf24" />
          <stop offset="1" stopColor="#f97316" />
        </linearGradient>
      </defs>
      <path
        d="M20 2.5 35.5 11.25v17.5L20 37.5 4.5 28.75v-17.5Z"
        fill="none"
        stroke={`url(#${id})`}
        strokeWidth="2.4"
        strokeLinejoin="round"
      />
      <path
        d="M12.5 26.5v-13l7.5 8.5 7.5-8.5v13"
        fill="none"
        stroke={`url(#${id})`}
        strokeWidth="2.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState('home');

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Highlight the section currently in view
  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && setActive(e.target.id)),
      { rootMargin: '-40% 0px -55% 0px' }
    );
    NAV_LINKS.forEach((l) => {
      const el = document.getElementById(l.id);
      if (el) obs.observe(el);
    });
    return () => obs.disconnect();
  }, []);

  // Lock body scroll while the mobile menu is open
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-[70] transition-all duration-500 ${
          scrolled ? 'glass border-b border-white/10 py-3' : 'bg-transparent py-5'
        }`}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 sm:px-8">
          <a href="#home" className="flex items-center gap-3" aria-label="Metarch — back to top">
            <Logo />
            <span className="leading-none">
              <span className="font-display block text-lg font-bold tracking-[0.18em] text-white">METARCH</span>
              <span className="mt-1 block text-[9px] font-medium uppercase tracking-[0.34em] text-zinc-500">
                Vacuum Forming
              </span>
            </span>
          </a>

          <nav className="hidden items-center gap-7 lg:flex" aria-label="Primary">
            {NAV_LINKS.map((l) => (
              <a
                key={l.id}
                href={`#${l.id}`}
                className={`relative font-display text-[13px] font-medium uppercase tracking-[0.14em] transition-colors duration-300 ${
                  active === l.id ? 'text-heat-400' : 'text-zinc-400 hover:text-white'
                }`}
              >
                {l.label}
                <span
                  className={`absolute -bottom-1.5 left-1/2 h-1 w-1 -translate-x-1/2 rounded-full bg-heat-500 transition-all duration-300 ${
                    active === l.id ? 'scale-100 opacity-100' : 'scale-0 opacity-0'
                  }`}
                />
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <a href="#contact" className="btn-primary hidden px-5 py-2.5 text-xs md:inline-flex">
              Get a Quote
            </a>
            <button
              type="button"
              className="grid h-10 w-10 place-items-center rounded-lg border border-white/10 text-zinc-200 lg:hidden"
              onClick={() => setOpen(true)}
              aria-label="Open menu"
            >
              <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
                <path d="M4 7h16M4 12h16M4 17h10" />
              </svg>
            </button>
          </div>
        </div>
      </header>

      {/* Mobile full-screen menu */}
      <div className={`fixed inset-0 z-[80] lg:hidden ${open ? '' : 'pointer-events-none'}`} aria-hidden={!open}>
        <div
          className={`absolute inset-0 bg-ink-950/95 backdrop-blur-xl transition-opacity duration-500 ${
            open ? 'opacity-100' : 'opacity-0'
          }`}
          onClick={() => setOpen(false)}
        />
        <button
          type="button"
          className="glass absolute right-5 top-5 z-10 grid h-11 w-11 place-items-center rounded-lg border border-white/10 text-white"
          onClick={() => setOpen(false)}
          aria-label="Close menu"
        >
          <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
            <path d="M6 6l12 12M18 6L6 18" />
          </svg>
        </button>
        <nav className="relative flex h-full flex-col items-center justify-center gap-1.5" aria-label="Mobile">
          {NAV_LINKS.map((l, i) => (
            <a
              key={l.id}
              href={`#${l.id}`}
              onClick={() => setOpen(false)}
              className={`font-display px-6 py-2 text-2xl font-semibold transition-all duration-500 ${
                active === l.id ? 'text-heat-400' : 'text-zinc-200 hover:text-white'
              }`}
              style={{
                transitionDelay: open ? `${120 + i * 55}ms` : '0ms',
                opacity: open ? 1 : 0,
                transform: open ? 'none' : 'translateY(22px)',
              }}
            >
              {l.label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setOpen(false)}
            className="btn-primary mt-6"
            style={{ transitionDelay: open ? '540ms' : '0ms', opacity: open ? 1 : 0 }}
          >
            Get a Quote
          </a>
        </nav>
      </div>
    </>
  );
}
