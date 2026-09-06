import Reveal from './Reveal.jsx';
import Icon from './Icons.jsx';
import { EDGES } from '../data.js';

export default function Edge() {
  return (
    <section id="why" className="relative py-24 lg:py-32">
      <div className="bg-grid absolute inset-0 opacity-30 [mask-image:radial-gradient(ellipse_60%_50%_at_80%_30%,black,transparent)]" aria-hidden="true" />
      <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <Reveal>
            <p className="eyebrow">The Metarch Edge</p>
          </Reveal>
          <Reveal delay={120}>
            <h2 className="section-title mt-3">
              Why Industry Leaders <span className="text-heat">Choose Metarch</span>
            </h2>
          </Reveal>
          <Reveal delay={240}>
            <p className="mt-5 leading-relaxed text-zinc-400">
              Our vacuum forming machines are trusted by industry leaders across various sectors for their
              reliability and precision.
            </p>
          </Reveal>
        </div>

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3" style={{ perspective: '1400px' }}>
          {EDGES.map((f, i) => (
            <Reveal key={f.title} delay={(i % 3) * 130 + Math.floor(i / 3) * 80}>
              <div className="card group h-full p-7 transition-all duration-500 hover:-translate-y-2 hover:border-heat-500/40">
                <div className="absolute -right-16 -top-16 h-48 w-48 rounded-full bg-heat-500/0 blur-3xl transition-all duration-700 group-hover:bg-heat-500/15" aria-hidden="true" />
                <div className="relative">
                  <div className="grid h-12 w-12 place-items-center rounded-xl border border-heat-500/25 bg-heat-500/10 p-2.5 text-heat-400 transition-transform duration-500 group-hover:scale-110">
                    <Icon name={f.icon} className="h-6 w-6" />
                  </div>
                  <h3 className="font-display mt-5 text-lg font-semibold text-white">{f.title}</h3>
                  <p className="mt-2.5 text-sm leading-relaxed text-zinc-400">{f.text}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
