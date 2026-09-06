import { Logo } from './Navbar.jsx';
import { NAV_LINKS, MACHINES, CONTACT } from '../data.js';

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-ink-950">
      <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-[1.5fr_1fr_1fr_1.3fr]">
          <div>
            <a href="#home" className="flex items-center gap-3" aria-label="Metarch — back to top">
              <Logo className="h-10 w-10" />
              <span className="leading-none">
                <span className="font-display block text-lg font-bold tracking-[0.18em] text-white">METARCH</span>
                <span className="mt-1 block text-[9px] font-medium uppercase tracking-[0.34em] text-zinc-500">
                  Vacuum Forming
                </span>
              </span>
            </a>
            <p className="mt-5 max-w-xs text-sm leading-relaxed text-zinc-500">
              Precision vacuum forming machines engineered in Mumbai for modern manufacturing — built to perform,
              designed to last.
            </p>
            <p className="mt-5 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3.5 py-1.5 text-[11px] text-zinc-500">
              <span className="h-1.5 w-1.5 rounded-full bg-heat-500" />
              Built with React · Tailwind CSS · Vite
            </p>
          </div>

          <div>
            <h4 className="font-display text-xs font-semibold uppercase tracking-[0.24em] text-zinc-400">Explore</h4>
            <ul className="mt-5 space-y-3">
              {NAV_LINKS.map((l) => (
                <li key={l.id}>
                  <a href={`#${l.id}`} className="text-sm text-zinc-500 transition-colors duration-300 hover:text-heat-400">
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-display text-xs font-semibold uppercase tracking-[0.24em] text-zinc-400">Machines</h4>
            <ul className="mt-5 space-y-3">
              {MACHINES.map((m) => (
                <li key={m.name}>
                  <a href="#machines" className="text-sm text-zinc-500 transition-colors duration-300 hover:text-heat-400">
                    {m.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-display text-xs font-semibold uppercase tracking-[0.24em] text-zinc-400">Contact</h4>
            <ul className="mt-5 space-y-3 text-sm text-zinc-500">
              <li className="leading-relaxed">{CONTACT.address}</li>
              <li>
                <a href={CONTACT.phoneHref} className="transition-colors duration-300 hover:text-heat-400">
                  {CONTACT.phone}
                </a>
              </li>
              {CONTACT.emails.map((e) => (
                <li key={e}>
                  <a href={`mailto:${e}`} className="transition-colors duration-300 hover:text-heat-400">
                    {e}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="hairline my-10" />

        <div className="flex flex-col items-center justify-between gap-3 text-xs text-zinc-600 sm:flex-row">
          <p>© {new Date().getFullYear()} Metarch. All rights reserved.</p>
          <p>Mira Road East, Mumbai, Maharashtra, India</p>
        </div>
      </div>
    </footer>
  );
}
