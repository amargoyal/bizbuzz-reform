# Contributing to the BizBuzz website

## Layout

```
bizbuzz/
├── src/
│   ├── app/
│   │   ├── globals.css        # tokens, base, layout, and shared component styles
│   │   ├── layout.tsx         # fonts, site metadata, header and footer
│   │   ├── page.tsx           # / (with home.css)
│   │   ├── camps/             # /camps and camps/[year]/ for each season
│   │   ├── fish-tank/         # /fish-tank and fish-tank/[year]/
│   │   ├── workshops/ office-hours/ about/ sponsors/ seasons/
│   │   ├── not-found.tsx      # the 404 page
│   │   ├── robots.ts
│   │   └── sitemap.ts
│   ├── components/
│   │   ├── ui/                # shared building blocks (PageHero, Photo, Gallery…)
│   │   ├── site/              # SiteHeader, SiteFooter
│   │   └── camps|fish-tank|office-hours/   # page-specific pieces
│   ├── data/                  # every program record, team, sponsors, press, FAQs
│   └── lib/                   # site.ts (links, nav, status), format.ts, metadata.ts
└── public/                    # images, logos, school marks
```

Each route folder holds a `page.tsx` and, when it needs page-only styles, a CSS
file of the same name. Metadata comes from `pageMetadata()` in
`src/lib/metadata.ts`, which also sets the link preview. Pages are server
components; anything that needs state lives in a small client component.

## Making a change

```bash
npm run dev
npm run build   # must pass; it type-checks
npm run lint    # must pass
```

### Copy and data

Historical records and site totals live in `src/data/`: `impact.ts` contains
participation, school directories, funding and cumulative totals; the year JSON
files contain season statistics; `camps.json`, `fish-tank.json`, `workshops.json`
and `team.ts` contain program archives and biographies. Keep cumulative totals
independent of the per-season counts: `main` reports these separately.

Page-specific copy is typed constants at the top of the relevant `page.tsx`. Anything
shared across pages (registration form URLs, the contact address, nav items,
footer columns, Cal.com event slugs, the current camp and Fish Tank status)
belongs in `src/lib/site.ts`, not inline.

### Styling

Use the tokens in `globals.css`: `var(--ink)`, not `#030037`; `var(--step-3)`,
not a pixel size. If a value is missing, add a token rather than hard-coding it.
Page CSS files start with the same `@layer` order line and put their rules in
`@layer pages`.

Follow [the design notes](DESIGN.md): Big Shoulders for headings and numbers,
Figtree for text, white and paper sections with one or two navy moments, ruled
lists rather than shadowed cards, yellow for primary actions only, and sky blue
only on navy. No gradients, eyebrow labels, highlighted headline words,
counting numbers, or text entrance animations.

### Layout and responsive

Pages use a 12-column grid (`repeat(12, minmax(0, 1fr))`) inside `.container`.
Each page CSS collapses its grids at 900px (and 700px or 520px where needed).
Check every change at 390px, 820px, and 1440px wide; nothing may scroll sideways.

### Images

Put files under `public/` and reference them with an absolute path. Keep names
URL-safe: lowercase, hyphens, no spaces, no `&`. Use the `Photo` component (or
`next/image` with `fill` in a fixed-ratio box) and pass a realistic `sizes`.
Alt text describes what is in the photo; captions say who, where, and when.

### Motion

Motion only explains an interaction, like a menu opening or a photo changing,
and must respect `prefers-reduced-motion`. Text and numbers render immediately.

## Accessibility

- Keyboard reachable, with visible focus (the base layer already draws it).
- 4.5:1 contrast for text, 3:1 for UI.
- Real alt text; correct heading order.
- Semantic HTML first, ARIA only where it earns its place.

## Pull requests

Include what changed and why, plus before/after screenshots of changed pages at
desktop and mobile widths. Check white/gray surfaces, dark sections, readable
wrapping, keyboard focus, and 200% zoom. Visual comparisons are required even
when automated checks pass. `npm run lint` and `npm run build` must be clean.
