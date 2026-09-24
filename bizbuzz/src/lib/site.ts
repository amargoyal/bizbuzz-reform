export const SITE_URL = "https://bizbuzz.it";
/** Path prefix this build is served under. Empty at the domain root. */
export const BASE_PATH = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

export const ORG_NAME = "BizBuzz NFP";
export const CONTACT_EMAIL = "bizbuzznfp@gmail.com";

/** The season the site is currently promoting. */
export const CURRENT = {
  campYear: 2027,
  campStatus: "Registration open",
  fishTankYear: 2027,
  fishTankStatus: "Dates to be announced",
} as const;

/** External destinations. The Google Form is the one the org already uses. */
export const LINKS = {
  campRegistration:
    "https://docs.google.com/forms/d/e/1FAIpQLSe_MouwxaWfjA6UeibsY2lrZoZky-n13jffMH7aP1UNiuDGzQ/viewform",
  email: `mailto:${CONTACT_EMAIL}`,
  sponsorEmail: `mailto:${CONTACT_EMAIL}?subject=Sponsorship%20Inquiry`,
  workshopEmail: `mailto:${CONTACT_EMAIL}?subject=Workshop%20request`,
  joinEmail: `mailto:${CONTACT_EMAIL}?subject=Joining%20the%20BizBuzz%20team`,
  fishTankEmail: `mailto:${CONTACT_EMAIL}?subject=Fish%20Tank%202027`,
  officeHoursEmail: `mailto:${CONTACT_EMAIL}?subject=Office%20hours`,
  instagram: "https://www.instagram.com/bizbuzznfp",
  linkedin: "https://www.linkedin.com/company/bizbuzznfp",
} as const;

/** Cal.com event slugs behind the office-hours booking calendar. */
export const CAL_LINKS = {
  online: "bizbuzz-nfp/office-hours-online",
  inPerson: "bizbuzz-nfp/office-hours-in-person",
} as const;

export type NavChild = { label: string; href: string; note?: string; open?: boolean };
export type NavItem = { label: string; href: string; children?: NavChild[] };

export const CAMP_YEARS = [2026, 2025, 2024] as const;
export const FISH_TANK_YEARS = [2026, 2025, 2024] as const;
export const SEASON_YEARS = [2026, 2025, 2024] as const;

export const NAV_ITEMS: NavItem[] = [
  {
    label: "Camps",
    href: "/camps",
    children: [
      { label: "Summer 2027", href: "/camps", note: "Registration open", open: true },
      { label: "2026 camp", href: "/camps/2026", note: "KidPreneur and VentureLab" },
      { label: "2025 camp", href: "/camps/2025", note: "7 sessions" },
      { label: "2024 camp", href: "/camps/2024", note: "The first summer" },
    ],
  },
  {
    label: "Fish Tank",
    href: "/fish-tank",
    children: [
      { label: "How Fish Tank works", href: "/fish-tank" },
      { label: "Fish Tank 2026", href: "/fish-tank/2026", note: "Two divisions" },
      { label: "Fish Tank 2025", href: "/fish-tank/2025", note: "Benedictine University" },
      { label: "Fish Tank 2024", href: "/fish-tank/2024", note: "College of DuPage" },
    ],
  },
  { label: "Workshops", href: "/workshops" },
  { label: "Office Hours & FAQs", href: "/office-hours" },
  { label: "About Us", href: "/about" },
  { label: "Sponsors", href: "/sponsors" },
];

export const FOOTER_COLUMNS: { title: string; links: { label: string; href: string }[] }[] = [
  {
    title: "Programs",
    links: [
      { label: "Summer camp", href: "/camps" },
      { label: "Fish Tank", href: "/fish-tank" },
      { label: "Workshops", href: "/workshops" },
      { label: "1:1 mentorship", href: "/office-hours" },
    ],
  },
  {
    title: "Seasons",
    links: [
      { label: "All seasons", href: "/seasons" },
      { label: "2026", href: "/seasons#2026" },
      { label: "2025", href: "/seasons#2025" },
      { label: "2024", href: "/seasons#2024" },
    ],
  },
  {
    title: "Organization",
    links: [
      { label: "About us", href: "/about" },
      { label: "Our team", href: "/about#team" },
      { label: "In the news", href: "/about#press" },
      { label: "Sponsors", href: "/sponsors" },
    ],
  },
  {
    title: "Get in touch",
    links: [
      { label: CONTACT_EMAIL, href: `mailto:${CONTACT_EMAIL}` },
      { label: "Office hours & FAQs", href: "/office-hours" },
      { label: "Instagram", href: LINKS.instagram },
      { label: "LinkedIn", href: LINKS.linkedin },
    ],
  },
];

export const TAGLINE = "Turning imagination into innovation via social entrepreneurship.";
export const FOOTER_NOTE = "Making entrepreneurship education accessible to students everywhere.";

/** True for links that leave bizbuzz.it (forms, press, social). */
export function isExternal(href: string) {
  return /^https?:\/\//.test(href);
}
