# RAMO TRANSPORT BV — Enterprise Logistics Website

A dark, glassmorphism-styled corporate logistics site for a Belgian BV, fully multilingual (NL default + EN/FR/DE/AR-RTL), GDPR-compliant, and legally correct for Belgian jurisdiction.

## Tech approach

- TanStack Start (existing stack), Tailwind v4 tokens in `src/styles.css`, shadcn components.
- i18n via `react-i18next` + `i18next-browser-languagedetector`, JSON dictionaries per locale under `src/i18n/locales/`. Floating language switcher persists to localStorage; document `dir="rtl"` toggled for Arabic.
- Routing (file-based, one route per page — no hash anchors):
  - `/` Home
  - `/diensten` Services
  - `/over-ons` About
  - `/contact` Contact + quote
  - `/privacybeleid`, `/algemene-voorwaarden`, `/cookiebeleid`, `/juridische-vermeldingen`
- Shared chrome in `__root.tsx`: top announcement bar, sticky glass header with nav + language switcher + "Offerte Aanvragen" CTA, footer with full Belgian legal block, cookie consent banner (localStorage-gated, Accept All / Reject Non-Essential / Settings).
- Each leaf route gets its own `head()` (unique title, description, og:*, canonical), NL copy default.

## Design system

Add to `src/styles.css` (OKLCH equivalents of the hex palette):
- `--background` deep space navy `#060B17`, elevated surface `#0A0F1D`
- `--card` translucent obsidian `#111827` / `#1E293B` with 1px `border-white/10`
- `--primary` electric cyan `#0284C7`, `--primary-glow` `#38BDF8`
- `--foreground` `#FFFFFF`, `--muted-foreground` metallic silver `#94A3B8`
- Gradients: `--gradient-hero` radial cyan glow on navy; `--gradient-card` subtle white 4% overlay; `--shadow-glow` cyan 30% blur.
- Utilities: `.glass` (backdrop-blur-xl, bg-white/5, border-white/10), `.glow-hover`, ambient animated gradient backdrop, route-line SVG animation for hero.
- Dark theme is the only theme (force `.dark` on html).

## Page contents

**Home** — announcement bar, hero (headline + subheadline in NL, dual CTAs, animated logistics route SVG backdrop), Belgian Trust Bar (4 glass tiles with green pulse dot for active status), 4-pillar value grid, 4 core service cards with icons (Truck, Package, Warehouse, ShoppingBasket from lucide), interactive freight quote widget (origin, destination, weight, cargo type, service level → estimated range, opens contact form prefilled).

**Diensten** — hero, detailed service sections (National/EU freight, Last-mile, Sorting & distribution, Retail & food cold/dry chain), fleet & technology block, SLA guarantees, CTA.

**Over Ons** — mission led by Zaakvoerder Muhanad Younes, values, Belgian compliance & sustainability, timeline/stats, CTA.

**Contact** — 3 info cards (phone tel: link, email mailto:, address), embedded OpenStreetMap iframe centered on Sint-Pieters-Leeuw (no API key needed), freight inquiry form with zod validation + mandatory GDPR checkbox, submit shows toast (no backend wired — form is presentational unless Cloud is enabled later).

**Legal pages** — full NL copy templates with `{{KBO}}` / `{{BTW}}` placeholders, referencing RPR Brussel (Nederlandstalige ondernemingsrechtbank Brussel), AVG/GBA, Belgian transport law, cookie categories.

## Placeholders & assumptions

- KBO and BTW numbers rendered as `BE 0XXX.XXX.XXX` placeholders throughout (as requested).
- No backend: quote form and contact form validate client-side and show success toast. Wiring to Lovable Cloud / email can be added later.
- Map is a public OpenStreetMap embed (no key). If you prefer Google Maps, we connect the Google Maps connector in a follow-up.
- Only freight/logistics content — no unrelated services.

## Deliverables checklist

- Palette + glass utilities in `src/styles.css`
- i18n setup + 5 locale JSON files + RTL handling for AR
- `__root.tsx` shell: announcement bar, header, footer, cookie banner
- 9 route files with per-page `head()` metadata (NL titles/descriptions)
- Reusable components: `LanguageSwitcher`, `GlassCard`, `TrustBar`, `ServiceCard`, `QuoteWidget`, `ContactForm`, `CookieBanner`, `Footer`, `Header`, `AnnouncementBar`
- All copy in NL by default, translated keys for EN/FR/DE/AR
