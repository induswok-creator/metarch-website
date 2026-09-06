import Reveal from './Reveal.jsx';
import TiltCard from './TiltCard.jsx';
import CountUp from './CountUp.jsx';
import Icon from './Icons.jsx';
import { STATS } from '../data.js';

const BULLETS = [
  'Customized machine solutions for diverse industries',
  'Dedicated after-sales engineering support',
  'In-house design, fabrication & service under one roof',
];

export default function About() {
  return (
    <section id="about" className="relative py-24 lg:py-32">
      <div className="bg-grid absolute inset-0 opacity-40 [mask-image:radial-gradient(ellipse_60%_60%_at_20%_40%,black,transparent)]" aria-hidden="true" />
      <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
        <div className="grid gap-16 lg:grid-cols-2 lg:items-center">
          {/* Image — 3D tilt + floating badge */}
          <Reveal from="left" className="relative mx-auto w-full max-w-md lg:max-w-none">
            <div className="absolute -inset-6 rounded-3xl bg-heat-600/10 blur-3xl" aria-hidden="true" />
            <TiltCard className="card shadow-2xl shadow-black/50" max={7}>
              <img src="images/about.png" alt="Metarch vacuum forming machine" className="w-full object-cover" loading="lazy" />
            </TiltCard>
            <div className="glass animate-floaty absolute -bottom-7 -right-3 rounded-2xl border border-heat-500/30 px-5 py-4 shadow-xl shadow-black/40 sm:-right-8">
              <div className="font-display text-3xl font-bold text-heat-400">10+</div>
              <div className="mt-1 text-[10px] font-semibold uppercase leading-relaxed tracking-[0.2em] text-zinc-400">
                Years of
                <br />
                Engineering Excellence
              </div>
            </div>
          </Reveal>

          {/* Copy */}
          <div>
            <Reveal>
              <p className="eyebrow">About Our Company</p>
            </Reveal>
            <Reveal delay={120}>
              <h2 className="section-title mt-3">
                Pioneering the Future of <span className="text-heat">Vacuum Forming</span> Technology
              </h2>
            </Reveal>
            <Reveal delay={240}>
              <p className="mt-6 leading-relaxed text-zinc-400">
                Based in Mumbai, Metarch is a premier engineering firm dedicated to designing and manufacturing
                advanced vacuum forming solutions. Our journey is built on a foundation of technical expertise,
                relentless innovation, and a commitment to delivering machines that empower modern industries.
              </p>
            </Reveal>

            <div className="mt-9 grid gap-4 sm:grid-cols-2">
              <Reveal delay={320}>
                <div className="card h-full p-6 transition-colors duration-500 hover:border-heat-500/40">
                  <h3 className="font-display text-xs font-semibold uppercase tracking-[0.24em] text-heat-400">Our Mission</h3>
                  <p className="mt-3 text-sm leading-relaxed text-zinc-400">
                    To provide efficient, precise, and custom-engineered machines that solve complex manufacturing
                    challenges.
                  </p>
                </div>
              </Reveal>
              <Reveal delay={420}>
                <div className="card h-full p-6 transition-colors duration-500 hover:border-heat-500/40">
                  <h3 className="font-display text-xs font-semibold uppercase tracking-[0.24em] text-heat-400">Our Vision</h3>
                  <p className="mt-3 text-sm leading-relaxed text-zinc-400">
                    To be the global benchmark for vacuum forming excellence and industrial automation innovation.
                  </p>
                </div>
              </Reveal>
            </div>

            <Reveal delay={520}>
              <ul className="mt-8 space-y-3">
                {BULLETS.map((b) => (
                  <li key={b} className="flex items-start gap-3 text-sm text-zinc-300">
                    <span className="mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full bg-heat-500/15 text-heat-400">
                      <Icon name="check" className="h-3 w-3" />
                    </span>
                    {b}
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>
        </div>

        {/* Stats */}
        <div className="mt-24 grid grid-cols-2 gap-4 lg:grid-cols-4" style={{ perspective: '1200px' }}>
          {STATS.map((s, i) => (
            <Reveal key={s.label} delay={i * 120}>
              <div className="card group p-6 text-center transition-all duration-500 hover:-translate-y-1.5 hover:border-heat-500/40">
                <div className="font-display text-4xl font-bold text-heat-400 transition-colors duration-300 group-hover:text-heat-300 sm:text-5xl">
                  <CountUp value={s.value} suffix={s.suffix} />
                </div>
                <div className="mt-3 text-[11px] font-medium uppercase tracking-[0.18em] text-zinc-500">{s.label}</div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
