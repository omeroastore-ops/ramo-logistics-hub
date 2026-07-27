# RAMO TRANSPORT BV — Website

Enterprise-grade B2B logistics website for **RAMO TRANSPORT BV** — a
Belgian-licensed freight & last-mile logistics provider based in
Sint-Pieters-Leeuw (Brussels).

Repository: `omeroastore-ops/RAMO-TRANSPORT-BV`

## Features

- Dark, glassmorphism UI with OKLCH design tokens (Slate Navy `#060B17`,
  Electric Cyan `#0284C7`).
- Fully responsive — mobile-first layouts, no horizontal overflow,
  wrap-safe Trust Bar.
- 5-language i18n via `react-i18next`: Dutch (default), English, French,
  German, Arabic (with automatic RTL switching).
- Belgian-law-compliant legal pages: Privacy (GDPR/AVG), Terms (CMR),
  Cookies, Legal Notice.
- Direct-contact-first CTAs — `tel:+32465395777` and `/contact` — no
  quoting or pricing calculators.
- SEO-ready per-route `head()` metadata, OpenGraph & Twitter cards.
- Cookie consent banner with essential/analytics split.
- OpenStreetMap embed centered on Sint-Pieters-Leeuw.

## Tech stack

- **TanStack Start v1** (file-based routing, SSR-capable)
- **React 19** + **TypeScript**
- **Vite 7**
- **Tailwind CSS v4** (CSS-first, `@theme` tokens in `src/styles.css`)
- **shadcn/ui** components (New York style)
- **react-i18next** for translations
- **lucide-react** icons
- **sonner** toast notifications
- **Zod** validation

## Project structure

```
src/
├── components/
│   ├── site/          # AnnouncementBar, Header, Footer, TrustBar, ...
│   └── ui/            # shadcn primitives
├── i18n/
│   ├── index.ts       # i18next init + language list
│   └── locales/       # nl.json (default), en, fr, de, ar
├── lib/               # company constants, utils
├── routes/            # TanStack Start file-based routes
│   ├── __root.tsx     # global shell (Header/Footer/Cookie/Toaster)
│   ├── index.tsx      # Home
│   ├── diensten.tsx   # Services
│   ├── over-ons.tsx   # About
│   ├── contact.tsx    # Contact (phone/email/map)
│   └── {legal pages}  # privacybeleid, algemene-voorwaarden, ...
├── styles.css         # Tailwind v4 entry + @theme + glass utilities
└── router.tsx
```

## Setup

Requirements: Node.js ≥ 20, npm.

```sh
git clone https://github.com/omeroastore-ops/RAMO-TRANSPORT-BV.git
cd RAMO-TRANSPORT-BV
npm install
npm run dev
```

Open http://localhost:8080.

## Scripts

| Command           | Purpose                              |
| ----------------- | ------------------------------------ |
| `npm run dev`     | Start Vite dev server on port 8080   |
| `npm run build`   | Production build                     |
| `npm run preview` | Preview the production build locally |

## Deployment

The app targets **edge runtimes** (Cloudflare Workers / Vercel Edge /
Netlify Edge) through the TanStack Start Vite output. Standard build:

```sh
npm run build
```

Deploy the generated `.output/` directory (or `dist/` per adapter) to
your platform of choice.

## Localization

To add or edit a translation, update the matching JSON file in
`src/i18n/locales/`. All 5 dictionaries share the exact same key
structure — keep them in sync. Arabic RTL direction is switched
automatically in `LanguageSwitcher.tsx` via
`document.documentElement.dir`.

## License

© RAMO TRANSPORT BV. All rights reserved.
