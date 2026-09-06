import Navbar from './components/Navbar.jsx';
import Hero from './components/Hero.jsx';
import About from './components/About.jsx';
import Machines from './components/Machines.jsx';
import Edge from './components/Edge.jsx';
import Applications from './components/Applications.jsx';
import Clients from './components/Clients.jsx';
import CTA from './components/CTA.jsx';
import Contact from './components/Contact.jsx';
import Footer from './components/Footer.jsx';
import Marquee from './components/Marquee.jsx';
import ScrollProgress from './components/ScrollProgress.jsx';
import CursorGlow from './components/CursorGlow.jsx';
import BackToTop from './components/BackToTop.jsx';
import { INDUSTRY_TICKER } from './data.js';

export default function App() {
  return (
    <div className="relative">
      <ScrollProgress />
      <CursorGlow />
      <Navbar />

      <main>
        <Hero />

        {/* Industry ticker strip */}
        <div className="border-y border-white/5 bg-ink-900/80 py-5">
          <Marquee
            speed={30}
            items={INDUSTRY_TICKER}
            render={(t) => (
              <span className="flex items-center">
                <span className="font-display px-8 text-sm font-semibold uppercase tracking-[0.3em] text-zinc-500">
                  {t}
                </span>
                <span className="text-heat-500/60" aria-hidden="true">
                  ◆
                </span>
              </span>
            )}
          />
        </div>

        <About />
        <Machines />
        <Edge />
        <Applications />
        <Clients />
        <CTA />
        <Contact />
      </main>

      <Footer />
      <BackToTop />
    </div>
  );
}
