# BizBuzz design

Updated September 23, 2026. This replaces the September 6 direction (Figtree only,
cream-free white canvas, blue feature panels), which the v3 rebuild superseded.

## The idea

A local program, run by high school students, shown through real photos, real
names, real dates, and real numbers. The look borrows from a community bulletin
and a scoreboard: condensed display type, big numerals, ruled lists, and one
yellow action color. Nothing on the page should look like a template.

## Type

| Role | Face | Notes |
| --- | --- | --- |
| Headings, numbers, years | Big Shoulders, 800 | Variable, weights 100 to 900, optical sizes 10 to 72. Designed by Patric King and used by the City of Chicago. |
| Text, labels, buttons | Figtree, 400 to 700 | Variable, weights 300 to 900. Body is 17 to 18px with a 1.6 line height. |

Both fonts are self-hosted from `src/app/fonts` with `next/font/local` (licenses
sit next to the files). The type scale is fluid: `--step--1` to `--step-6` in
`globals.css`. Numbers that matter (prizes, students, years) are set large in
Big Shoulders; that is the site's signature, so use it for facts, not decoration.

## Color

Sampled from the logo. Use the tokens in `globals.css`, never raw hex values.

| Token | Value | Use |
| --- | --- | --- |
| `--navy` / `--ink` | `#030037` | Headings, dark sections, outlines |
| `--ink-body` | `#23264A` | Body text |
| `--ink-muted` | `#585D7B` | Secondary text (passes AA on white and paper) |
| `--yellow` | `#FFC629` | Primary buttons and link underlines. Never text on white. |
| `--sky` | `#38B6FF` | Brand accent on navy only. It fails contrast on white. |
| `--blue` | `#0A66C2` | Links on white |
| `--paper` | `#F4F6FB` | Alternate sections |
| `--line`, `--line-strong` | `#DDE2EC`, `#B9C1D1` | Rules |
| `--open`, `--soon` | `#1C6B45`, `#7A4D00` | Status labels, each on its own tint |

Sections alternate white and paper. Each page gets at most one or two navy
moments (winners, a request, the closing call to action). Muted text on navy uses
`--on-navy-muted`; `.lead` and `.muted` switch automatically inside `.section--navy`.

## Layout

- 12-column grid, 1280px content width, gutter `clamp(20px, 4vw, 56px)`.
- Section heading pattern `.sh`: the title on the left, one sentence of context on the right.
- Lists are ruled rows (a 2px ink rule on top, 1px rules between items). No cards with shadows.
- Photos sit in fixed-ratio frames with `next/image` `fill`, so new images only need a `sizes` hint.
- Every photo caption says who, where, and when. If we don't know, we say less rather than guess.

## Homepage hierarchy

The homepage introduces the programs, then shows one student outcome, the team,
selected impact figures, press, and community support. Season archives, the full
school directory, and complete winners lists live on their dedicated pages.
The opening photo shares the desktop hero with the introduction and follows it
on phones. Keep registration timing beside the first action, including any
unannounced dates or venues. Program descriptions use language families can
understand; sponsor copy leads with the educational work their support enables.

## Components

`src/components/ui`: `PageHero`, `Facts`, `Scoreboard`, `Photo`, `Gallery` (with a
keyboard and swipe photo viewer), `Disclosure` and `More` (native `<details>`),
`VideoEmbed` (loads YouTube only on play), `YearNav` and `PrevNext`, `Button`,
`GoLink`, `TextLink`, `Status`, `Icon`.

`src/components/site`: `SiteHeader` (split-button menus for Camps and Fish Tank, a
dialog menu on phones) and `SiteFooter`.

Page pieces live next to their pages: camps (`SessionList`, `SpeakerCard`,
`TrackTabs`), Fish Tank (`PrizeChecks`, `JudgeList`), office hours (`CalBooking`,
`FaqSearch`).

## Rules we hold to

These keep the site from looking machine-made or templated:

- No gradients, glows, glass effects, blobs, or decorative background patterns.
- No cream or beige canvas.
- No small uppercase labels above headings, and no highlighted words inside headlines.
- No counting-up numbers, marquees, parallax, or text that animates in.
- No colored stripes on cards, no emoji, no stock illustrations or generated images.
- Left-aligned, asymmetric layouts. Centered stacks only where a single action matters.
- Motion only explains an interaction (a menu opening, a photo changing) and respects reduced motion.
- Copy states facts plainly: names, places, dates, amounts. No hype words.

## Accessibility

One `h1` per page, a skip link, visible 3px focus rings, 44px minimum targets,
native `<details>` and `<dialog>`, `aria-pressed` on toggles, roving focus on tabs,
alt text that describes the photo (or empty alt when the name is right beside a
portrait), and contrast of at least 4.5:1 for text.

## References

- [Big Shoulders on Google Fonts](https://fonts.google.com/specimen/Big+Shoulders) and the [Chicago Design System typography page](https://design.chicago.gov/typography/)
- [Anthropic frontend design guidance](https://github.com/anthropics/skills/blob/main/skills/frontend-design/SKILL.md) on repeated defaults to avoid
- [Refero anti-slop reference](https://github.com/referodesign/refero_skill/blob/master/skills/refero-design/references/anti-ai-slop.md)
