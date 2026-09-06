import { useEffect, useState } from 'react';
import Reveal from './Reveal.jsx';
import Icon from './Icons.jsx';
import { APPS } from '../data.js';
import { useReducedMotion } from '../hooks/useFx.js';

export default function Applications() {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);
  const reduced = useReducedMotion();
  const app = APPS[active];

  // Auto-advance the showcase; pause while the user is hovering the section.
  useEffect(() => {
    if (paused || reduced) return;
    const id = setInterval(() => setActive((a) => (a + 1) % APPS.length), 5000);
    return () => clearInterval(id);
  }, [paused, reduced]);

  return (
    <section
      id="applications"
      className="relative bg-ink-900/60 py-24 lg:py-32"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <Reveal>
            <p className="eyebrow">Versatility in Action</p>
          </Reveal>
          <Reveal delay={120}>
            <h2 className="section-title mt-3">
              Industry <span className="text-heat">Applications</span>
            </h2>
          </Reveal>
        </div>

        <Reveal delay={240}>
          <div className="mt-14 grid gap-6 lg:grid-cols-[380px_1fr]">
            {/* Tabs */}
            <div className="flex flex-col gap-3">
              {APPS.map((a, i) => (
                <button
                  key={a.name}
                  type="button"
                  onClick={() => setActive(i)}
                  aria-pressed={i === active}
                  className={`flex items-center gap-4 rounded-xl border px-5 py-4 text-left transition-all duration-300 ${
                    i === active
                      ? 'border-heat-500/60 bg-heat-500/10 shadow-lg shadow-heat-600/10'
                      : 'border-white/10 bg-ink-800/50 hover:border-white/25'
                  }`}
                >
                  <span
                    className={`grid h-10 w-10 shrink-0 place-items-center rounded-lg transition-colors duration-300 ${
                      i === active ? 'bg-heat-500/20 text-heat-400' : 'bg-white/5 text-zinc-500'
                    }`}
                  >
                    <Icon name={a.icon} className="h-5 w-5" />
                  </span>
                  <span
                    className={`font-display flex-1 text-sm font-semibold uppercase tracking-[0.12em] transition-colors duration-300 ${
                      i === active ? 'text-white' : 'text-zinc-400'
                    }`}
                  >
                    {a.name}
                  </span>
                  <span className={`font-display text-xs ${i === active ? 'text-heat-400' : 'text-zinc-600'}`}>
                    0{i + 1}
                  </span>
                </button>
              ))}
            </div>

            {/* Panel */}
            <div className="card relative min-h-[380px] p-8 lg:p-12" style={{ perspective: '900px' }}>
              <div key={active} className="animate-panel relative">
                <div className="flex items-center gap-4">
                  <span className="grid h-14 w-14 place-items-center rounded-xl border border-heat-500/25 bg-heat-500/10 text-heat-400">
                    <Icon name={app.icon} className="h-7 w-7" />
                  </span>
                  <p className="eyebrow">{app.name}</p>
                </div>
                <h3 className="section-title mt-6">{app.title}</h3>
                <p className="mt-4 max-w-xl leading-relaxed text-zinc-400">{app.desc}</p>
                <ul className="mt-9 grid gap-3 sm:grid-cols-3">
                  {app.points.map((p) => (
                    <li key={p} className="rounded-lg border border-white/10 bg-ink-950/60 p-4 text-sm text-zinc-300">
                      {p}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="pointer-events-none absolute -right-24 -top-24 h-64 w-64 rounded-full bg-heat-600/15 blur-3xl" aria-hidden="true" />
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
