# Site review

## September 23, 2026: v3 rebuild

This rebuild replaces the earlier v3 pages and the September 6 design direction.
The notes further down describe that earlier work and are kept for history.

### What changed

- New design: Big Shoulders for headings and numbers, Figtree for text, colors
  sampled from the logo, ruled lists instead of shadowed cards, and real photos
  with who, where, and when captions. See [DESIGN.md](DESIGN.md).
- One page per camp season (`/camps/2024` to `/camps/2026`) and per Fish Tank
  (`/fish-tank/2024` to `/fish-tank/2026`), linked from the `/camps` and
  `/fish-tank` hubs. Main's old addresses redirect to the matching page.
- Every page was rebuilt: home, camps, Fish Tank, workshops, office hours and
  FAQs, about, sponsors, seasons, and a new 404 page.
- Each page has its own link preview, and the sitemap lists every season page.

### Content parity with main

- Six audit passes compared main's source and rendered pages with the rebuild,
  then a final rendered-text comparison of all routes (with disclosures, tabs,
  and photo viewers opened) found no missing facts beyond deliberate changes.
- Restored from main during the rebuild: the full mission, all six news stories
  with both NCTV17 videos, the TPI photo, link, and funding claim, the 2025
  leadership team with photos, Eddie Yoon's session, the 2024 judge photos,
  judge panel descriptions, per-tier sponsor counts, the College of DuPage
  link, workshop totals (8 workshops, 18 sessions, 710 students), the office
  hours rules word for word, and photos that only appeared on main.
- An independent review compared about 250 facts with main and checked every
  page for internal contradictions; its findings were fixed.

### Deliberate changes to confirm

- Fish Tank 2024 shows 80+ competitors (main said both 100+ and 80).
- 2025 prizes read "the top five split $750", matching the five listed prizes
  (main's 2025 page said "Top 4 winners awarded $750+").
- TPI is described as a KidsMatter program, as on main's sponsors page (main's
  About page called it a national 501(c)(3)).
- The station is named Naperville Community Television (NCTV17).
- Removed images: the Daily Herald sign (it is the Provo, Utah paper) and an
  NCTV17 "Donate Today" card.
- Past registration forms and `github.com/bizbuzz` are not linked.
- Office hours say the team confirms each booking, as the calendar requires.

### Open questions from the data

- Scott Elementary: 135 or 145 students? 2024 NCBF workshops: 50 or 45?
- 2026 VentureLab grades: 6 to 9 (v3's 2026 data) or 6 to 8 (v3's 2027 data)?
- 2026 Session 3: June 19 (main) or June 26 (a slide in a June 12 photo)?
- Fish Tank 2026 at Benedictine University comes only from main's page description.
- Co-founder bios still say "is a junior"; Elite Tutoring "every year since
  2024" has no 2025 record; Office Furniture Solutions is not in the 51
  supporters; listed contributions total $11,750 against $12,487 monetary.

### Verification

- `next build` and ESLint pass; all 14 routes return 200, the 404 page returns
  404, and all 11 old addresses redirect to the right place.
- No sideways scrolling at 390, 820, or 1440 pixels on any route.
- axe-core (WCAG 2.1 A and AA plus best practices) reports no violations on
  any route with every disclosure open. One `h1` and one `main` per page, no
  heading skips, no missing anchor targets, no broken internal links.
- Keyboard and interaction checks: mobile menu (Escape returns focus), nav
  menus, photo viewer (arrows, End, Escape, focus return), FAQ search and empty
  state, booking format switch, camp track tabs, and old `#year` links.
- Cal.com is blocked in the build environment, so the live calendar was not
  loaded here; its loading, slow, and failed states were tested.

## September 14, 2026 (earlier v3 design)

### Scope and visual direction

Reviewed Home, Camps, Fish Tank, Workshops, Office Hours & FAQs, About, Sponsors, and Seasons, including their lower sections and archives. Two independent initial assessments informed the changes. Follow-up browser checks covered desktop and a 390 × 844 mobile viewport, navigation, archive selectors, galleries, FAQs, and booking calendars.

Preserved the existing Reform identity: blue, yellow and navy; Figtree typography; generous white space; and real student, speaker and event photography. The changes improve information access without replacing the site's visual direction or introducing generated imagery.

References were the current [BizBuzz website](https://bizbuzz.it/) and its source, [Junior Achievement USA](https://jausa.ja.org/), and [NFTE](https://nfte.com/). The professional references informed clear audience pathways, visible program details, evidence of impact, and straightforward ways to get involved. No reference organization's copy or claims were imported.

### Content reconciliation

- Restored the current team biographies and roles, including Amar's vice president role.
- Restored all 21 dated sponsor contributions, their descriptions, amounts and recognition tiers. The complete 51-member supporter directory remains available.
- Reconciled archived camp and workshop session objects with production. Preserved dates, venues, descriptions, speaker biographies and photographs; retained original source imagery even where a later season reuses an earlier photograph.
- Restored speaker and judge portraits, team image framing, season stories, partners, program imagery and gallery access.
- Preserved current impact figures, participation records, school and district directories, awards, office-hours requirements, registration destinations and contact details.
- Kept annual and cumulative totals separate because the source reports them independently. The comparison table states this explicitly.
- Preserved historical grade ranges. Unannounced 2027 venues are identified as pending; future program copy no longer presents an unconfirmed location as settled.
- Corrected the 2024 homepage Fish Tank participation figure to 80 and removed copy implying that VentureLab attendance is required to enter the competition.
- Matched sponsorship benefits to production. Removed unsupported itemized program costs and promises of personalized sponsor reporting from the redesign copy.
- Restored the production canonical domain and conditional Vercel analytics. Preview assets retain the GitHub Pages path prefix.

### Route-by-route findings and changes

| Surface | Finding | Result |
| --- | --- | --- |
| Home | The season rail intercepted scrolling, keyboard control was limited, and one historical figure conflicted with the archive. | Native horizontal scrolling, previous/next controls, working season links, corrected participation and pause controls for moving logo rows. |
| Camps | Long archives made dates and locations difficult to scan; speaker photos and full-size event photos were missing. | Page shortcuts, a compact schedule with session links, restored portraits, keyboard-friendly year/track controls, and a photo viewer. |
| Fish Tank | Division copy implied a prerequisite contradicted by the FAQ; archive portraits and winning entries were hard to discover. | Clear division information, a correct division shortcut, restored judge images, and winners expanded by default. |
| Workshops | A fixed session count became stale and narrow cards overflowed. | Stable headings, responsive grids, page shortcuts and accessible archive photography. |
| Office Hours & FAQs | Copy promised immediate confirmation despite calendar approval requirements; questions were difficult to search. | Accurate request/confirmation instructions, preparation requirements before booking, direct calendar recovery links, and searchable FAQs with result counts and an empty-state recovery action. |
| About | Current biographies and photograph positioning were missing. | Current team records, preserved portraits and framing, shortcuts to long sections, and retained school/impact directories. |
| Sponsors | A curated logo wall omitted contribution records and original benefits. | Complete contribution directory with year filter, expandable context, dates, amounts and tiers; restored recognition benefits and source-grounded funding information. |
| Seasons | Comparing years required reading long sections; some historical context and imagery were omitted. | A year comparison table, jump links, restored stories and partner names, program photographs and a gallery. |
| Shared navigation | Mobile archives crowded out primary routes; selected controls and keyboard behavior were unclear. | Compact expandable archive menus, a skip link, active-page semantics, arrow/Home/End selector support and a clear email link. |
| Shared layout | Fixed grid minima caused horizontal overflow at phone widths. | Responsive minima across the site; all eight reviewed routes fit the mobile viewport. |
| Error and motion states | Missing pages offered no useful onward path; motion lacked explicit controls. | A branded missing-page screen, useful program links, pause/resume buttons, reduced-motion support and improved focus behavior in the pinned program section. |

### Verification

- ESLint and Next.js type validation passed.
- Both the GitHub Pages static export and the production Next.js build passed on Next.js 15.5.25.
- Dependency audit reported zero known vulnerabilities after compatible dependency updates and a PostCSS override.
- Export inspection checked all eight main pages: one main landmark and one H1 per page, same-page anchor targets, internal route destinations, and case-sensitive image paths. The inspection covered 303 image references and 385 links with no errors at that checkpoint.
- Browser checks confirmed sponsor filtering (six contributions for 2026), expandable contribution details, FAQ matches and empty-state recovery, year/track selection by keyboard, mobile menu opening/Escape behavior, and photo viewer loading, next/previous navigation, Escape dismissal and focus restoration.
- All eight production routes returned HTTP 200, and all ten configured legacy redirects returned the expected permanent redirect and destination.
- The design detector reported no findings. This is an automated check, not a substitute for the visual review.

### Practical limits

External Google Forms and Cal.com remain owned by their existing providers. Their original destinations are preserved; no registration or booking was submitted during this review. The calendar now requests a light theme, verified in the final browser check. Direct calendar and email links provide a fallback if the embed cannot load.

This was a practical visual, content, keyboard and responsive review, not a formal accessibility certification or a measured Core Web Vitals assessment. The work updates the preview and the open pull request; production changes take effect only when that pull request is merged and deployed.

## September 15 visual refinement

The follow-up prioritizes program choice and real photography. The homepage now opens with one camp photograph and a direct introduction, followed immediately by all four programs with audience cues. Compact photo-and-copy rows replace the four full-height pinned scenes. Duplicate audience cards were removed; parent guidance remains directly beneath the programs.

Section spacing is tighter throughout the site, impact figures are smaller, and several headings now identify their content directly. News coverage uses a lead story and a compact reading list rather than repeated framed cards. The existing logo, Figtree type, blue/yellow/navy palette, program archives, directories and contact destinations remain.

The Spotlight image previously contained an unrelated donation graphic. Its replacement is the publisher's actual [video thumbnail](https://vimeo.com/1101292306), obtained from Vimeo oEmbed. The homepage description is grounded in the [July 14, 2025 NCTV17 article](https://www.nctv17.org/spotlight/bizbuzz-turns-imagination-into-innovation/), replacing an unverified quotation attribution. The thumbnail shows a Fish Tank award winner; the alt text describes that image.

Follow-up validation: ESLint and both Next.js builds passed. The static export check covered eight routes, 294 image references and 384 links with no missing image paths, internal routes or same-page anchors. All eight exported routes fit a 390px viewport without document overflow and have one H1. The homepage was also checked at 820px and 1440px, including program selection and news; the other seven desktop openings were reviewed for consistency. The final news-page browser check reported no console errors, and the design detector returned no findings.

## September 15 About page restructuring

The previous About page repeated the founding story, delayed the team until 2,683px down the desktop page, gave instructors a long half-empty layout, and repeated the TPI award in a separate large section. At a 1440 × 1000 viewport, the collapsed page was 9,060px tall.

The founding story now sits beside the group photograph. Three primary impact figures lead into expandable funding, participation and school records. The team starts at 1,358px, with 2026 leadership, co-founders, instructors and youth leadership clearly grouped; the 2025 leadership archive follows the current team. Portraits use compact rows and complete biographies remain available. Five press and recognition items form one reading list, with the TPI grant details consolidated into its award entry. On phones, expanded press descriptions use the full content width. The collapsed desktop page is now 5,486px tall, approximately 39% shorter.

Verification: preview and production builds passed, including type and lint checks; standalone ESLint passed. Browser review covered desktop (1440px), tablet (820px) and phone (390px), with no horizontal document overflow at the checked widths. Expanded biographies, the 2025 archive, funding totals, school records and award details were checked; the program shortcut reaches the homepage program section. The final mobile browser check reported no console errors. Export reconciliation confirmed all 42 current and archived team records, eight impact figures, 16 participation records and 110 school/district entries, with no missing About image paths or same-page anchors. All five press items remain. The design detector returned no findings.
