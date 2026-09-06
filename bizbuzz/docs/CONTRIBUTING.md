# Contributing to the BizBuzz website

## Layout

```
bizbuzz/
├── src/
│   ├── app/
│   │   ├── globals.css        # design tokens + .bb-* type and layout roles
│   │   ├── layout.tsx         # fonts, site metadata
│   │   ├── page.tsx           # /
│   │   ├── camps/             # + fish-tank/ workshops/ office-hours/
│   │   ├── about/             # + sponsors/ seasons/
│   │   ├── robots.ts
│   │   └── sitemap.ts
│   ├── components/
│   │   ├── ds/                # the design system primitives
│   │   ├── site/              # SiteHeader, SiteFooter
│   │   └── camps|fish-tank|home|office-hours/   # page-local interactive bits
│   └── lib/site.ts            # links, nav, footer columns, Cal.com slugs
└── public/                    # images, logos, school marks
```

Each route folder holds a `page.tsx` and a `layout.tsx` that carries only the
route's `metadata`. Pages are server components; anything that needs state lives
in a small client component beside it.

## Making a change

```bash
npm run dev
npm run build   # must pass — it type-checks and lints
```

### Copy and data

Historical records and site totals live in `src/data/`: `impact.ts` contains
participation, school directories, funding and cumulative totals; the year JSON
files contain season statistics; `camps.json`, `fish-tank.json`, `workshops.json`
and `team.ts` contain program archives and biographies. Keep cumulative totals
independent of the per-season counts: `main` reports these separately.

Page-specific copy is typed constants at the top of the relevant `page.tsx`. Anything
shared across pages — registration form URLs, the contact address, nav items,
footer columns, Cal.com event slugs — belongs in `src/lib/site.ts`, not inline.

### Styling

Use the tokens. `var(--space-8)`, not `32px`. `var(--surface-card)`, not
`#fefcf6`. `className="bb-display-2"`, not a font shorthand. If you need a value
the token set does not have, add it to `globals.css` rather than hard-coding it in
one place.

Follow [the approved design direction](DESIGN.md). Use white canvas and cards,
neutral gray supporting surfaces (`.bb-on-neutral`), and navy dark sections
(`.bb-on-ink`). Restore the original sky blue/yellow pairing through selective
headline phrases, photo backings, and feature areas (`.bb-on-blue`), alongside
buttons and selected states. Use `--text-brand` for readable blue text; bright
blue and yellow text belong on navy, not white. Avoid cream and beige washes.
Use Figtree with the defined heading, body, metadata, and numeric roles. Useful
labels add information; redundant labels and decorative dots do not. Buttons
have one coherent hit target and an 8px radius. Ordinary facts are wrapping text.

### Layout and responsive

The design is authored at 1440px on a 12-column grid. Any grid using
`repeat(12, ...)` should also carry `className="bb-row-12"` so it collapses to one
column at 900px. The other collapse helpers are `bb-collapse-2` (two-column
blocks), `bb-mosaic-3/4/5` (photo mosaics), and `bb-rowlist` (the dense list rows
on Camps, Workshops and About).

### Images

Put files under `public/` and reference them with an absolute path. Keep names
URL-safe — lowercase, hyphens, no spaces, no `&`. Every photographic slot is a
positioned box with `next/image` `fill` inside; pass a realistic `sizes` so the
optimizer picks the right width. Every image needs real alt text, or `alt=""` if
it is purely decorative.

### Motion

Text and statistics render immediately. `CountUp` retains its existing formatting
contract but displays the final value without animation. Retain the existing
program panels, archive rail, and photo drift; new motion needs a defined
interaction or storytelling purpose and must respect `prefers-reduced-motion`.
Real student activity and local evidence should have visual prominence.

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
