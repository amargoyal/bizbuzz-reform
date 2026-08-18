# BizBuzz NFP Website

Official website for BizBuzz NFP — turning imagination into innovation via social
entrepreneurship. Next.js 15 App Router, TypeScript, and a hand-rolled design system.

## Getting started

```bash
npm install
npm run dev     # http://localhost:3000
npm run build   # production build + type check + lint
npm start       # serve the production build
```

Node 18+.

## Routes

| Route | What it is |
| --- | --- |
| `/` | Home — hero mosaic, proof stats, pinned program panels, season rail, school marquee, press |
| `/camps` | Summer camp, with a year switcher. `#2024`–`#2027` deep-link to a season |
| `/fish-tank` | The pitch competition, with a year switcher. `#2024`–`#2026` |
| `/workshops` | School and business-fair workshops, plus the full delivery history |
| `/office-hours` | Cal.com booking embed, office-hours policy, and the FAQ accordion |
| `/about` | Story, leadership, instructors, press, and the TPI grant |
| `/sponsors` | Sponsor wall by tier, sponsorship tiers, and the cost breakdown |
| `/seasons` | The archive: every season with the numbers as they landed |

Old routes (`/camps-2025`, `/fish-tank-2024`, `/sessions`, `/years/*`) redirect
permanently in `next.config.mjs`.

## Design system

Everything visual comes from one place — no utility-class framework.

- **`src/app/globals.css`** — the whole token set (color, type, spacing, shape,
  motion) plus the `.bb-*` type and layout roles. Pages use CSS custom properties
  (`var(--space-8)`, `var(--surface-card)`) rather than hard-coded values.
- **`src/components/ds/`** — the primitives those tokens dress:
  `Button`/`ArrowCTA`, `Card`/`Chip`/`Eyebrow`/`Stat`, `MediaCard`/`Testimonial`,
  `NavBar`/`Tabs`/`Footer`, and the motion set (`Reveal`, `Parallax`, `ScrollRail`,
  `Marquee`, `CountUp`, `DrawArrow`, `DrawUnderline`).
- **`src/components/site/`** — the header and footer every page mounts. Only the
  header CTA differs page to page.

Three surfaces carry the brand: a warm cream canvas, a buzz-yellow band
(`.bb-on-buzz`), and a deep ink band (`.bb-on-ink`). Adding a fourth background
family is the one thing not to do.

Type is Newsreader (editorial serif), Figtree (sans), and JetBrains Mono (data
labels), all loaded via `next/font` in `src/app/layout.tsx`.

## Content

Page copy and lists live as typed constants at the top of each `page.tsx`. Shared
links, nav, footer columns and the Cal.com event slugs live in `src/lib/site.ts` —
change a registration form or an email address there and every page follows.

Images live in `public/`. Every photographic slot is a fixed-ratio box with a
`next/image` `fill` inside it, so new images need a `sizes` hint but no dimensions.

## Deployment

Vercel. Push to `main` and it ships.
