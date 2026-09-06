import Reveal from './Reveal.jsx';
import TiltCard from './TiltCard.jsx';
import Icon from './Icons.jsx';
import { MACHINES } from '../data.js';

export default function Machines() {
  return (
    <section id="machines" className="relative bg-ink-900/60 py-24 lg:py-32">
      <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <Reveal>
            <p className="eyebrow">Our Catalogue</p>
          </Reveal>
          <Reveal delay={120}>
            <h2 className="section-title mt-3">
              Advanced <span className="text-heat">Engineering</span> Solutions
            </h2>
          </Reveal>
          <Reveal delay={240}>
            <p className="mt-5 leading-relaxed text-zinc-400">
              From entry-level production to high-capacity automated lines, our machines are built to deliver
              consistent quality and precision.
            </p>
          </Reveal>
        </div>

        <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3" style={{ perspective: '1400px' }}>
          {MACHINES.map((m, i) => (
            <Reveal key={m.name} delay={(i % 3) * 130}>
              <TiltCard className="card group h-full" max={8}>
                <div className={`relative h-56 overflow-hidden bg-gradient-to-b from-zinc-100 to-zinc-200 ${m.fit === 'cover' ? '' : 'p-5'}`}>
                  <img
                    src={m.img}
                    alt={m.name}
                    loading="lazy"
                    className={`h-full w-full transition-transform duration-700 group-hover:scale-105 ${
                      m.fit === 'cover' ? 'object-cover' : 'object-contain'
                    }`}
                  />
                  <span className="absolute left-4 top-4 rounded-full border border-heat-500/30 bg-ink-950/85 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.16em] text-heat-400">
                    {m.tag}
                  </span>
                </div>
                <div className="p-6">
                  <h3 className="font-display text-xl font-semibold text-white">{m.name}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-zinc-400">{m.desc}</p>
                  <ul className="mt-5 space-y-2">
                    {m.specs.map((s) => (
                      <li key={s} className="flex items-start gap-2 text-xs text-zinc-500">
                        <Icon name="check" className="mt-0.5 h-3.5 w-3.5 shrink-0 text-heat-500" />
                        {s}
                      </li>
                    ))}
                  </ul>
                  <a
                    href="#contact"
                    className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-heat-400 transition-all duration-300 hover:gap-3"
                  >
                    Enquire Now
                    <Icon name="arrow" className="h-4 w-4" />
                  </a>
                </div>
              </TiltCard>
            </Reveal>
          ))}

          {/* CTA tile */}
          <Reveal delay={260} className="h-full">
            <a
              href="#contact"
              className="card group flex h-full min-h-[320px] flex-col justify-between border-dashed p-7 transition-colors duration-500 hover:border-heat-500/60"
            >
              <div className="grid h-12 w-12 place-items-center rounded-xl bg-heat-500/10 text-heat-400 transition-transform duration-500 group-hover:rotate-90">
                <Icon name="plus" className="h-6 w-6" />
              </div>
              <div>
                <h3 className="font-display text-xl font-semibold text-white">Need something specific?</h3>
                <p className="mt-2 text-sm leading-relaxed text-zinc-400">
                  We build machines around your product — tell us your requirement and our engineers will design
                  the rest.
                </p>
                <span className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-heat-400">
                  Talk to an engineer
                  <Icon name="arrow" className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1.5" />
                </span>
              </div>
            </a>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
