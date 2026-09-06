# BizBuzz visual direction

Approved September 6, 2026: clean and energetic. Real students, local programs,
and recognizable activity carry the identity. Restore the main branch’s blue/yellow
color pairing in headline phrases, photo surroundings, and selected feature sections. Keep the logo, photography,
factual copy, routes, and program/archive interactions.

## Color and type

| Role | Value |
| --- | --- |
| Canvas and cards | White `#FFFFFF` |
| Supporting surfaces | Neutral gray `#F5F6F7` |
| Borders | Gray `#D9DDE3` |
| Headings and body | Navy `#17233F` |
| Supporting text | Blue-gray `#5A6884` |
| Actions and warm brand accents | Original yellow `#FFBF00` |
| Brand surfaces and accents on navy | Original sky blue `#38B6FF` |
| Blue text on white | Accessible blue `#0072B5` |
| Photo backing and interactive hover | Light blue `#E6F5FF` |

Use semantic CSS tokens rather than hard-coded colors. Blue and yellow may decorate
important brand moments as well as controls; the site should feel lively, not
monochrome. Keep the overall canvas white and avoid cream or beige washes. Use
solid blue for selected feature areas with navy text. The original sky blue and
yellow work as text on navy; use the darker blue text role on white. Dark sections
use navy with white body text. Photo overlays provide actual contrast.
Status colors remain available for meaningful status information.

Figtree is the only loaded family. Main headlines use 700 weight at 40–72px;
section headings use 600 at 32–48px; card headings use 600 at 24–32px. Body copy
uses 400 with the established readable measure. Dates and metadata are sentence
case, at least 14px. Statistics use 600 with lining and tabular numerals. Adapt
width and spacing to the actual words; do not shrink type to preserve an old wrap.

## Before and after

| Before | Approved treatment |
| --- | --- |
| Cream canvas, beige borders, pale-yellow bands | White canvas with blue feature areas and neutral supporting sections |
| All-navy headings and gray feature cards | Selective blue phrases, blue feature surfaces, and the blue/yellow brand tagline |
| Newsreader headlines, years, quotes, and statistics | Figtree with distinct weight and size roles |
| Dotted, tracked uppercase text above headings | Remove redundancy; useful context is plain supporting text |
| Location badge above the homepage headline | Naperville, Illinois below the introduction |
| Detached circular arrow next to a pill label | One control and hit target with an 8px radius |
| Informational pills and decorative program numbers | Wrapping facts; retain actual dates, sequence, and status |
| Animated counters and text entrances | Immediately visible facts and text |
| Large decorative underline and connector arrows | Clear typography and real photographs |

Retain the existing program panels, archive rail, and photo storytelling. Respect
reduced motion. New motion must explain an interaction or have a specific
storytelling purpose. Do not wrap ordinary text in entrance animations.

## Main branch reference

Color placement was checked against `main` at `a126c5d`, especially
`ShuffleHero.tsx` (blue/yellow headline words and blue photo surround),
`ImageGallery.tsx` (the two-color “Build Biz. Bring Buzz.” tagline), and
`YearAwareProgramCards.tsx` (blue hover accents). Carry that visual identity into
the redesign without reinstating dotted labels, cream, or text entrance effects.
The homepage mission uses navy so the original bright tagline colors remain legible.

## Evidence and review

Research checked September 6, 2026. These sources describe recurring defaults,
not a reliable test of AI authorship. No typeface is intrinsically an AI font.

- [Anthropic frontend design guidance](https://github.com/anthropics/skills/blob/main/skills/frontend-design/SKILL.md): repeated editorial palettes, labels, decorative typography, and motion.
- [Anthropic model migration guidance](https://github.com/anthropics/skills/blob/main/skills/claude-api/shared/model-migration.md): persistent visual defaults and concrete alternatives.
- [Monotype, May 6, 2026](https://www.monotype.com/company/thought-leadership/why-ai-brands-are-obsessed-serif-fonts): the serif association in AI branding.
- [Production Type's Newsreader](https://github.com/productiontype/Newsreader): a legitimate typeface designed for screen reading.
- [Refero design guidance](https://github.com/referodesign/refero_skill/blob/master/skills/refero-design/references/anti-ai-slop.md): avoiding another generic editorial template.

Review every changed route at desktop and mobile sizes, including long headings,
stats, menu states, focus, zoom, and dark sections. Compare screenshots against
the approved treatment. Automated pattern detection supplements visual judgment;
the original scan missed both the serif overuse and the decorative dotted labels.
