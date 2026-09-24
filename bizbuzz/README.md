# BizBuzz NFP Website

Official website for BizBuzz NFP, turning imagination into innovation via social
entrepreneurship. Next.js 15 App Router, React 19, TypeScript, and hand-written CSS.

## Getting started

```bash
npm install
npm run dev     # http://localhost:3000
npm run build   # production build with type check
npm run lint    # ESLint
npm start       # serve the production build
```

Node 18+.

## Routes

| Route | What it is |
| --- | --- |
| `/` | Home: the four free programs, Fish Tank 2025 winners, the team, totals, past summers, news, schools, and sponsors |
| `/camps` | Summer camp: how it works, the schedule, guest speakers, and past camps |
| `/camps/2024` to `/camps/2026` | One page per camp season, with every session, speaker, and photo |
| `/fish-tank` | The pitch competition: how it works, divisions, prizes, past competitions, FAQs |
| `/fish-tank/2024` to `/fish-tank/2026` | One page per competition, with winners, judges, and photos |
| `/workshops` | Workshop formats, how to request one, and every workshop since May 2024 |
| `/office-hours` | Booking rules, the Cal.com calendar (online or in person), and searchable FAQs |
| `/about` | Mission, impact, schools, the team, and news coverage |
| `/sponsors` | Money raised, sponsorship tiers, every contribution by tier, and all supporters |
| `/seasons` | Every season side by side, with timelines, programs, stories, and photos |

Old addresses redirect in `next.config.mjs`: `/camps-2024` to `/camps/2024` (and
2025, 2026), `/camps-2027` to `/camps`, `/fish-tank-2024` to `/fish-tank/2024`
(and 2025, 2026), `/sessions` to `/office-hours`, `/years` to `/seasons`, and
`/years/2025` to `/seasons#2025`.

## Design

See [docs/DESIGN.md](docs/DESIGN.md). In short: Big Shoulders for headings and
numbers, Figtree for text, colors sampled from the logo, ruled lists instead of
cards, and real photos with real captions.

- `src/app/globals.css` holds the tokens (color, type, spacing) and the shared
  layout and component styles, in CSS cascade layers.
- Each route has its own CSS file next to its `page.tsx` for page-only styles.
- `src/components/ui/` has the shared building blocks; `src/components/site/`
  has the header and footer.

## Content

- `src/lib/site.ts`: registration links, emails, navigation, footer, Cal.com
  links, and the current camp and Fish Tank status. Change the 2027 status or a
  form link here and every page follows.
- `src/data/`: camps, Fish Tank, workshops, seasons, team, sponsors, press,
  FAQs, schools, and the all-time totals in `impact.ts`.
- `public/`: photos and logos.

## Deployment

Vercel. Pushing to `main` deploys the live site; other branches get preview URLs.
