import type { NavItem } from "@/components/ds/NavBar";

export const SITE_URL = "https://www.bizbuzz.it";
/** Path prefix this build is served under. Empty at the domain root. */
export const BASE_PATH = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

export const CONTACT_EMAIL = "bizbuzznfp@gmail.com";

/** Registration forms. These are the live Google Forms the org already uses. */
export const LINKS = {
  campRegistration:
    "https://docs.google.com/forms/d/e/1FAIpQLSe_MouwxaWfjA6UeibsY2lrZoZky-n13jffMH7aP1UNiuDGzQ/viewform",
  fishTankEntry:
    "https://docs.google.com/forms/d/e/1FAIpQLSdTtlWLYIGdU0cVxt2JRIrtS7eEk40Tk0v1IsW6CiZ4mrRtDg/viewform",
  sponsorEmail: `mailto:${CONTACT_EMAIL}?subject=Sponsorship`,
  workshopEmail: `mailto:${CONTACT_EMAIL}?subject=Workshop%20request`,
  joinEmail: `mailto:${CONTACT_EMAIL}?subject=Joining%20BizBuzz`,
  email: `mailto:${CONTACT_EMAIL}`,
  instagram: "https://www.instagram.com/bizbuzznfp",
  linkedin: "https://www.linkedin.com/company/bizbuzznfp",
} as const;

/** Cal.com event slugs backing the office-hours booking embed. */
export const CAL_LINKS = {
  online: "bizbuzz-nfp/office-hours-online",
  inPerson: "bizbuzz-nfp/office-hours-in-person",
} as const;

export const NAV_ITEMS: NavItem[] = [
  {
    label: "Camps",
    href: "/camps",
    children: [
      { label: "2027 Camps", href: "/camps#2027" },
      { label: "2026 Camps", href: "/camps#2026" },
      { label: "2025 Camps", href: "/camps#2025" },
      { label: "2024 Camps", href: "/camps#2024" },
    ],
  },
  {
    label: "Fish Tank",
    href: "/fish-tank",
    children: [
      { label: "2026 Fish Tank", href: "/fish-tank#2026" },
      { label: "2025 Fish Tank", href: "/fish-tank#2025" },
      { label: "2024 Fish Tank", href: "/fish-tank#2024" },
    ],
  },
  { label: "Workshops", href: "/workshops" },
  { label: "Office Hours & FAQs", href: "/office-hours" },
  { label: "About Us", href: "/about" },
  { label: "Sponsors", href: "/sponsors" },
];

export const FOOTER_COLUMNS = [
  {
    title: "Programs",
    links: [
      { label: "Summer Camp", href: "/camps" },
      { label: "Fish Tank", href: "/fish-tank" },
      { label: "Workshops", href: "/workshops" },
      { label: "1:1 Mentorship", href: "/office-hours" },
    ],
  },
  {
    title: "By season",
    links: [
      { label: "2027", href: "/camps#2027" },
      { label: "2026", href: "/seasons#2026" },
      { label: "2025", href: "/seasons#2025" },
      { label: "2024", href: "/seasons#2024" },
    ],
  },
  {
    title: "Organization",
    links: [
      { label: "About Us", href: "/about" },
      { label: "Our team", href: "/about#team" },
      { label: "Press", href: "/about#press" },
      { label: "Sponsors", href: "/sponsors" },
    ],
  },
  {
    title: "Get in touch",
    links: [
      { label: CONTACT_EMAIL, href: LINKS.email },
      { label: "Book office hours", href: "/office-hours" },
      { label: "Become a sponsor", href: "/sponsors" },
    ],
  },
];

export const SOCIAL = [
  { label: "Instagram", href: LINKS.instagram },
  { label: "LinkedIn", href: LINKS.linkedin },
];

export const FOOTER_TAGLINE =
  "Turning imagination into innovation via social entrepreneurship. Free entrepreneurship education for grades 3–8 in Naperville, Illinois.";
