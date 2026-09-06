import { useState } from 'react';
import Reveal from './Reveal.jsx';
import Icon from './Icons.jsx';
import { CONTACT } from '../data.js';

const INITIAL = { first: '', last: '', email: '', phone: '', subject: '', timeline: 'asap', message: '' };

const INFO = [
  { icon: 'pin', label: 'Address', lines: ['Head Office', CONTACT.address] },
  { icon: 'clock', label: 'Office Hours', lines: [CONTACT.hours] },
  { icon: 'mail', label: 'Email', lines: CONTACT.emails, hrefs: CONTACT.emails.map((e) => `mailto:${e}`) },
  { icon: 'phone', label: 'Phone', lines: [CONTACT.phone], hrefs: [CONTACT.phoneHref] },
];

export default function Contact() {
  const [form, setForm] = useState(INITIAL);
  const [errors, setErrors] = useState({});
  const [sent, setSent] = useState(false);

  const set = (k) => (e) => setForm({ ...form, [k]: e.target.value });

  const submit = (e) => {
    e.preventDefault();
    const errs = {};
    if (!form.first.trim()) errs.first = 'First name is required';
    if (!form.last.trim()) errs.last = 'Last name is required';
    if (!/^\S+@\S+\.\S+$/.test(form.email)) errs.email = 'Enter a valid email address';
    if (!form.message.trim()) errs.message = 'Tell us a little about your requirement';
    setErrors(errs);
    if (Object.keys(errs).length) return;

    // TODO: wire this to your backend or an email service, e.g.
    // await fetch('/api/quote', { method: 'POST', headers: {'Content-Type':'application/json'}, body: JSON.stringify(form) })
    setSent(true);
  };

  return (
    <section id="contact" className="relative bg-ink-900/60 py-24 lg:py-32">
      <div className="bg-grid absolute inset-0 opacity-30 [mask-image:radial-gradient(ellipse_60%_60%_at_85%_60%,black,transparent)]" aria-hidden="true" />
      <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <Reveal>
            <p className="eyebrow">Get a Quote</p>
          </Reveal>
          <Reveal delay={120}>
            <h2 className="section-title mt-3">
              Request a Quote for Your <span className="text-heat">Next Project</span>
            </h2>
          </Reveal>
          <Reveal delay={240}>
            <p className="mt-5 text-zinc-400">We&apos;ll get back to you shortly.</p>
          </Reveal>
        </div>

        <div className="mt-16 grid gap-8 lg:grid-cols-[1fr_400px]">
          {/* Form */}
          <Reveal from="left">
            <div className="card p-7 sm:p-9">
              {sent ? (
                <div className="flex min-h-[420px] flex-col items-center justify-center text-center">
                  <span className="grid h-16 w-16 place-items-center rounded-full bg-heat-500/15 text-heat-400">
                    <Icon name="check" className="h-8 w-8" />
                  </span>
                  <h3 className="font-display mt-6 text-2xl font-semibold text-white">
                    Thank you, {form.first}!
                  </h3>
                  <p className="mt-3 max-w-sm text-sm leading-relaxed text-zinc-400">
                    Your request has been noted. Our engineers will get back to you shortly.
                  </p>
                  <button
                    type="button"
                    className="btn-ghost mt-8"
                    onClick={() => {
                      setForm(INITIAL);
                      setSent(false);
                    }}
                  >
                    Send Another Request
                  </button>
                </div>
              ) : (
                <form onSubmit={submit} noValidate>
                  <div className="grid gap-5 sm:grid-cols-2">
                    <div>
                      <label htmlFor="cf-first" className="mb-2 block text-xs font-semibold uppercase tracking-[0.16em] text-zinc-400">
                        First name *
                      </label>
                      <input id="cf-first" className="input" value={form.first} onChange={set('first')} placeholder="Rahul" />
                      {errors.first && <p className="mt-1.5 text-xs text-red-400">{errors.first}</p>}
                    </div>
                    <div>
                      <label htmlFor="cf-last" className="mb-2 block text-xs font-semibold uppercase tracking-[0.16em] text-zinc-400">
                        Last name *
                      </label>
                      <input id="cf-last" className="input" value={form.last} onChange={set('last')} placeholder="Sharma" />
                      {errors.last && <p className="mt-1.5 text-xs text-red-400">{errors.last}</p>}
                    </div>
                    <div>
                      <label htmlFor="cf-email" className="mb-2 block text-xs font-semibold uppercase tracking-[0.16em] text-zinc-400">
                        Email *
                      </label>
                      <input id="cf-email" type="email" className="input" value={form.email} onChange={set('email')} placeholder="you@company.com" />
                      {errors.email && <p className="mt-1.5 text-xs text-red-400">{errors.email}</p>}
                    </div>
                    <div>
                      <label htmlFor="cf-phone" className="mb-2 block text-xs font-semibold uppercase tracking-[0.16em] text-zinc-400">
                        Phone
                      </label>
                      <input id="cf-phone" type="tel" className="input" value={form.phone} onChange={set('phone')} placeholder="+91 …" />
                    </div>
                    <div>
                      <label htmlFor="cf-subject" className="mb-2 block text-xs font-semibold uppercase tracking-[0.16em] text-zinc-400">
                        Subject
                      </label>
                      <input id="cf-subject" className="input" value={form.subject} onChange={set('subject')} placeholder="New machine enquiry" />
                    </div>
                    <div>
                      <label htmlFor="cf-timeline" className="mb-2 block text-xs font-semibold uppercase tracking-[0.16em] text-zinc-400">
                        When are you looking to start?
                      </label>
                      <select id="cf-timeline" className="input" value={form.timeline} onChange={set('timeline')}>
                        <option value="asap">Start immediately</option>
                        <option value="1-3">Within 1–3 months</option>
                        <option value="3-6">In 3–6 months</option>
                        <option value="exploring">Just exploring</option>
                      </select>
                    </div>
                    <div className="sm:col-span-2">
                      <label htmlFor="cf-message" className="mb-2 block text-xs font-semibold uppercase tracking-[0.16em] text-zinc-400">
                        What do you want to build? *
                      </label>
                      <textarea
                        id="cf-message"
                        rows={5}
                        className="input resize-none"
                        value={form.message}
                        onChange={set('message')}
                        placeholder="Describe your product, material, and production volume…"
                      />
                      {errors.message && <p className="mt-1.5 text-xs text-red-400">{errors.message}</p>}
                    </div>
                  </div>
                  <button type="submit" className="btn-primary mt-7 w-full sm:w-auto">
                    Get a Quote
                    <Icon name="arrow" className="h-4 w-4" />
                  </button>
                </form>
              )}
            </div>
          </Reveal>

          {/* Info */}
          <div className="space-y-4">
            {INFO.map((c, i) => (
              <Reveal key={c.label} from="right" delay={i * 110}>
                <div className="card flex gap-4 p-6 transition-colors duration-500 hover:border-heat-500/40">
                  <span className="grid h-11 w-11 shrink-0 place-items-center rounded-lg bg-heat-500/10 text-heat-400">
                    <Icon name={c.icon} className="h-5 w-5" />
                  </span>
                  <div className="min-w-0">
                    <h4 className="font-display text-xs font-semibold uppercase tracking-[0.2em] text-zinc-500">{c.label}</h4>
                    {c.lines.map((line, j) => (
                      <p key={line} className="mt-1 break-words text-sm leading-relaxed text-zinc-300">
                        {c.hrefs ? (
                          <a href={c.hrefs[j]} className="transition-colors hover:text-heat-400">
                            {line}
                          </a>
                        ) : (
                          line
                        )}
                      </p>
                    ))}
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
