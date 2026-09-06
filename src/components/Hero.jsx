import { useEffect, useRef } from 'react';
import { HERO_CHIPS } from '../data.js';
import { useReducedMotion } from '../hooks/useFx.js';

/**
 * 3D parallax hero.
 * A single rAF loop tracks scroll position + mouse position (smoothed with
 * lerp) and publishes them as CSS variables; each layer translates/rotates at
 * a different depth for the 3D parallax effect. No React re-renders per frame.
 */
export default function Hero() {
  const ref = useRef(null);
  const reduced = useReducedMotion();

  useEffect(() => {
    const el = ref.current;
    if (!el || reduced) return;
    let raf = 0;
    let mx = 0;
    let my = 0;
    let cmx = 0;
    let cmy = 0;
    let sc = 0;
    const onMove = (e) => {
      mx = (e.clientX / window.innerWidth) * 2 - 1;
      my = (e.clientY / window.innerHeight) * 2 - 1;
    };
    const tick = () => {
      cmx += (mx - cmx) * 0.055;
      cmy += (my - cmy) * 0.055;
      sc += (window.scrollY - sc) * 0.12;
      el.style.setProperty('--mx', cmx.toFixed(4));
      el.style.setProperty('--my', cmy.toFixed(4));
      el.style.setProperty('--sc', sc.toFixed(1));
      raf = requestAnimationFrame(tick);
    };
    window.addEventListener('mousemove', onMove, { passive: true });
    raf = requestAnimationFrame(tick);
    return () => {
      window.removeEventListener('mousemove', onMove);
      cancelAnimationFrame(raf);
    };
  }, [reduced]);

  return (
    <section id="home" ref={ref} className="relative flex min-h-screen items-center overflow-hidden pt-32 pb-24">
      {/* Layer 0 — background photo (slowest, ken-burns breathing) */}
      <div className="hero-layer hero-bg absolute inset-0">
        <img src="images/hero.jpg" alt="" className="animate-kenburns h-full w-full object-cover opacity-70" />
      </div>
      <div className="absolute inset-0 bg-gradient-to-r from-ink-950 via-ink-950/75 to-ink-950/30" />
      <div className="absolute inset-0 bg-gradient-to-b from-ink-950/70 via-transparent to-ink-950" />
      <div className="bg-grid absolute inset-0 opacity-60 [mask-image:radial-gradient(ellipse_75%_65%_at_35%_45%,black,transparent)]" />

      {/* Layer 1 — glowing orbs (fast drift) */}
      <div className="hero-layer hero-orbs pointer-events-none absolute inset-0" aria-hidden="true">
        <div className="absolute left-[6%] top-[16%] h-72 w-72 rounded-full bg-heat-600/20 blur-[110px]" />
        <div className="absolute right-[4%] top-[52%] h-80 w-80 rounded-full bg-heat-500/10 blur-[120px]" />
        <div className="absolute bottom-[12%] left-[38%] h-56 w-56 rounded-full bg-sky-500/10 blur-[100px]" />
      </div>

      {/* Layer 2 — content (3D rotate toward cursor + scroll fade) */}
      <div className="relative z-10 mx-auto w-full max-w-7xl px-5 sm:px-8">
        <div className="hero-layer hero-content max-w-3xl">
          <div className="animate-rise inline-flex items-center gap-2.5 rounded-full border border-heat-500/25 bg-heat-500/10 px-4 py-2" style={{ animationDelay: '120ms' }}>
            <span className="animate-pulse-dot h-1.5 w-1.5 rounded-full bg-heat-400" />
            <span className="font-display text-[10px] font-semibold uppercase tracking-[0.3em] text-heat-300">
              Leading Innovations in India
            </span>
          </div>

          <h1
            className="font-display mt-7 text-4xl font-bold leading-[1.06] text-white sm:text-6xl lg:text-7xl"
            style={{ animationDelay: '300ms' }}
          >
            <span className="animate-rise inline-block" style={{ animationDelay: '300ms' }}>
              Precision{' '}
            </span>
            <span className="animate-rise text-heat inline-block" style={{ animationDelay: '420ms' }}>
              Vacuum Forming Machines
            </span>{' '}
            <span className="animate-rise inline-block" style={{ animationDelay: '540ms' }}>
              for Modern Manufacturing
            </span>
          </h1>

          <p className="animate-rise mt-6 max-w-xl text-base leading-relaxed text-zinc-400 sm:text-lg" style={{ animationDelay: '680ms' }}>
            Metarch designs and manufactures high-performance industrial machines engineered for accuracy,
            durability, and customized solutions.
          </p>

          <div className="animate-rise mt-9 flex flex-wrap gap-4" style={{ animationDelay: '820ms' }}>
            <a href="#contact" className="btn-primary">
              Contact Our Engineers
              <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M4 12h15.5M14 6.5l5.5 5.5-5.5 5.5" />
              </svg>
            </a>
            <a href="#machines" className="btn-ghost">
              Explore Our Machines
            </a>
          </div>
        </div>

        {/* Layer 3 — floating spec chips (counter-drift) */}
        <div className="hero-layer hero-chips relative mt-14 flex flex-wrap gap-3">
          {HERO_CHIPS.map((c, i) => (
            <div
              key={c.label}
              className={`chip animate-rise ${c.hideOnMobile ? 'hidden sm:inline-flex' : ''}`}
              style={{ animationDelay: `${950 + i * 130}ms` }}
            >
              <span className="animate-pulse-dot h-1.5 w-1.5 rounded-full bg-heat-500" />
              {c.label}
            </div>
          ))}
        </div>
      </div>

      {/* Scroll hint */}
      <div
        className="absolute bottom-7 left-1/2 z-10 flex -translate-x-1/2 flex-col items-center gap-2 text-zinc-500"
        style={{ opacity: 'calc(1 - var(--sc, 0) / 320)' }}
        aria-hidden="true"
      >
        <span className="font-display text-[10px] font-semibold uppercase tracking-[0.3em]">Scroll</span>
        <div className="flex h-9 w-5 items-start justify-center rounded-full border border-white/20 p-1.5">
          <div className="animate-scroll-hint h-2 w-1 rounded-full bg-heat-400" />
        </div>
      </div>
    </section>
  );
}
