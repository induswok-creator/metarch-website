import Reveal from './Reveal.jsx';
import { useBgParallax } from '../hooks/useFx.js';
import { CONTACT } from '../data.js';

/** Parallax call-to-action banner (background drifts slower than the page). */
export default function CTA() {
  const bgRef = useBgParallax(0.16);

  return (
    <section className="relative overflow-hidden py-28 lg:py-36">
      <div
        ref={bgRef}
        className="absolute inset-x-0 -inset-y-[18%] will-change-transform"
        style={{ transform: 'translate3d(0, var(--py, 0px), 0)' }}
        aria-hidden="true"
      >
        <img src="images/quote.jpg" alt="" className="h-full w-full object-cover" />
      </div>
      <div className="absolute inset-0 bg-ink-950/80" />
      <div className="bg-grid absolute inset-0 opacity-30" aria-hidden="true" />

      <div className="relative z-10 mx-auto max-w-4xl px-5 text-center sm:px-8">
        <Reveal>
          <h2 className="section-title">
            Let&apos;s Engineer Your <span className="text-heat">Next Production Line</span>
          </h2>
        </Reveal>
        <Reveal delay={150}>
          <p className="mx-auto mt-5 max-w-2xl leading-relaxed text-zinc-300">
            Tell us about your product and production goals — our engineers will design a machine specification
            built entirely around your requirements.
          </p>
        </Reveal>
        <Reveal delay={300}>
          <div className="mt-9 flex flex-wrap justify-center gap-4">
            <a href="#contact" className="btn-primary">
              Get a Quote
            </a>
            <a href={CONTACT.phoneHref} className="btn-ghost">
              Call {CONTACT.phone}
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
