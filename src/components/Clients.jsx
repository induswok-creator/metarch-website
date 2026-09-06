import Reveal from './Reveal.jsx';
import Marquee from './Marquee.jsx';
import { CLIENT_LOGOS } from '../data.js';

export default function Clients() {
  return (
    <section id="clients" className="relative overflow-hidden py-24 lg:py-32">
      <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <Reveal>
            <p className="eyebrow">Our Clients</p>
          </Reveal>
          <Reveal delay={120}>
            <h2 className="section-title mt-3">
              Every Client Is a <span className="text-heat">Long-Term Partner</span>
            </h2>
          </Reveal>
        </div>
      </div>

      <Reveal delay={240} className="mt-14">
        <Marquee
          speed={48}
          items={CLIENT_LOGOS}
          render={(src) => (
            <div className="mx-3 flex h-24 w-44 shrink-0 items-center justify-center rounded-xl border border-white/10 bg-white p-3.5 grayscale transition-all duration-500 hover:scale-105 hover:grayscale-0">
              <img src={src} alt="Client logo" loading="lazy" className="max-h-full max-w-full object-contain" />
            </div>
          )}
        />
      </Reveal>
    </section>
  );
}
