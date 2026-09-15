# Site review — September 14, 2026

## Scope and visual direction

Reviewed Home, Camps, Fish Tank, Workshops, Office Hours & FAQs, About, Sponsors, and Seasons, including their lower sections and archives. Two independent initial assessments informed the changes. Follow-up browser checks covered desktop and a 390 × 844 mobile viewport, navigation, archive selectors, galleries, FAQs, and booking calendars.

Preserved the existing Reform identity: blue, yellow and navy; Figtree typography; generous white space; and real student, speaker and event photography. The changes improve information access without replacing the site's visual direction or introducing generated imagery.

References were the current [BizBuzz website](https://bizbuzz.it/) and its source, [Junior Achievement USA](https://jausa.ja.org/), and [NFTE](https://nfte.com/). The professional references informed clear audience pathways, visible program details, evidence of impact, and straightforward ways to get involved. No reference organization's copy or claims were imported.

## Content reconciliation

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

## Route-by-route findings and changes

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

## Verification

- ESLint and Next.js type validation passed.
- Both the GitHub Pages static export and the production Next.js build passed on Next.js 15.5.25.
- Dependency audit reported zero known vulnerabilities after compatible dependency updates and a PostCSS override.
- Export inspection checked all eight main pages: one main landmark and one H1 per page, same-page anchor targets, internal route destinations, and case-sensitive image paths. The inspection covered 303 image references and 385 links with no errors at that checkpoint.
- Browser checks confirmed sponsor filtering (six contributions for 2026), expandable contribution details, FAQ matches and empty-state recovery, year/track selection by keyboard, mobile menu opening/Escape behavior, and photo viewer loading, next/previous navigation, Escape dismissal and focus restoration.
- All eight production routes returned HTTP 200, and all ten configured legacy redirects returned the expected permanent redirect and destination.
- The design detector reported no findings. This is an automated check, not a substitute for the visual review.

## Practical limits

External Google Forms and Cal.com remain owned by their existing providers. Their original destinations are preserved; no registration or booking was submitted during this review. Cal.com still displays its account-controlled dark calendar inside the light site even with a light-theme request. Direct calendar and email links provide a fallback if the embed cannot load.

This was a practical visual, content, keyboard and responsive review, not a formal accessibility certification or a measured Core Web Vitals assessment. The work updates the preview and the open pull request; production changes take effect only when that pull request is merged and deployed.
