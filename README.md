# Metarch — Interactive Website (React + Vite + Tailwind CSS)

A modern, fully responsive redesign of **metarch.org** with 3D parallax scrolling,
mouse-driven 3D tilt effects, and scroll-triggered animations.

## ✨ Features

- **3D parallax hero** — background photo, glow orbs, headline, and floating spec chips
  each move on their own depth plane (scroll parallax + mouse parallax with smooth lerp).
- **3D scroll reveals** — every section rotates/slides into place (rotateX/rotateY) as it
  enters the viewport, staggered per card.
- **3D tilt cards** — product cards rotate toward your cursor with a tracking light glare.
- **Animated counters** — stats count up when scrolled into view.
- **Infinite marquees** — industry ticker + client logo wall (pause on hover).
- **Interactive applications showcase** — auto-advancing industry tabs with 3D panel transitions.
- **Parallax CTA banner** — background drifts slower than the page.
- **Scroll progress bar**, cursor glow follower, back-to-top button, sticky glass navbar
  with active-section highlighting, full-screen animated mobile menu.
- **Fully responsive** (mobile → desktop) and respects `prefers-reduced-motion`.
- **Quote form** with client-side validation and a success state.

## 🧱 Tech stack

| Layer   | Technology                          |
| ------- | ----------------------------------- |
| UI      | React 18                            |
| Styling | Tailwind CSS 3.4                    |
| Build   | Vite 5                              |
| Motion  | Custom hooks (rAF + IntersectionObserver, zero animation libraries) |

## 🚀 Getting started

```bash
npm install
npm run dev        # local dev server with HMR
npm run build      # production build → dist/
npm run preview    # serve the production build
```

## ☁️ Deploying

The project is a standard Vite app — deploy `dist/` anywhere:

- **Vercel / Netlify**: import the repo → build command `npm run build`, output directory `dist`.
- **Any static host**: run `npm run build` and upload `dist/`.

## ✏️ Customising

- **All content** (nav, products, features, industries, client logos, contact details)
  lives in one file: `src/data.js`.
- **Images**: `public/images/` (downloaded from the current metarch.org — swap freely).
- **Quote form**: open `src/components/Contact.jsx` and replace the `TODO` in `submit()`
  with a call to your backend or an email service (Formspree, EmailJS, etc.).
- **Theme colours**: `tailwind.config.js` → `ink` (darks) and `heat` (orange accents).

## 📁 Structure

```
metarch/
├── index.html
├── public/            # favicon + brand images
└── src/
    ├── App.jsx        # page assembly
    ├── data.js        # all site content
    ├── hooks/useFx.js # useInView / useCountUp / useBgParallax / reduced-motion
    └── components/    # Navbar, Hero, About, Machines, Edge, Applications,
                       # Clients, CTA, Contact, Footer + effect primitives
                       # (Reveal, TiltCard, Marquee, CountUp, CursorGlow, …)
```
