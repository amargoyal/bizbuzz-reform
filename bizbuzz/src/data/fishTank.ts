import raw from "./fish-tank.json";

export type Judge = { name: string; title: string; bio?: string; image?: string | null };
export type Winner = { placement: string; team: string; project: string; image: string; description: string; prize?: number };
export type Step = { title: string; date?: string; body?: string; points?: string[] };

export type FishTankMeta = {
  title: string;
  edition: string;
  dates: string;
  startISO?: string;
  endISO?: string;
  venue: string | null;
  city?: string;
  venueUrl?: string;
  eligibility: string;
  summary: string;
  /** One or two sentences under "How it worked". */
  formatIntro?: string;
  note?: string;
  stats: { value: string; label: string }[];
  steps?: Step[];
  highlights?: { title: string; body: string }[];
  tracks?: { title: string; for: string; body: string }[];
};

export type FishTankYear = {
  year: number;
  meta: FishTankMeta;
  winners: Winner[];
  judges: { title: string; intro?: string; judges: Judge[] }[];
  gallery: string[];
  captions?: Record<string, string>;
};

const data = raw as unknown as Record<string, Omit<FishTankYear, "year">>;

export const FISH_TANK_YEARS: FishTankYear[] = Object.entries(data)
  .map(([year, v]) => ({ year: Number(year), ...v }))
  .sort((a, b) => b.year - a.year);

export function getFishTankYear(year: number) {
  return FISH_TANK_YEARS.find((y) => y.year === year);
}

export const PRIZES = [
  { place: "1st", amount: 250, words: "Two hundred fifty" },
  { place: "2nd", amount: 200, words: "Two hundred" },
  { place: "3rd", amount: 150, words: "One hundred fifty" },
  { place: "4th", amount: 100, words: "One hundred" },
  { place: "5th", amount: 50, words: "Fifty" },
];

/** Photos for the top of each season page. */
export const FISH_TANK_HERO: Record<number, { src: string; alt: string; caption: string; position?: string }> = {
  2026: {
    src: "/camp_imgs/2026/session2vl/session2vlb.jpg",
    alt: "KidPreneur and VentureLab campers together in a large library meeting room",
    caption: "The 2026 campers at Nichols Library, June 12, 2026. Both tracks went on to compete at Fish Tank.",
  },
  2025: {
    src: "/fish_tank/2025/images/standing-image.jpg",
    alt: "A student in a suit pitching his business at Fish Tank 2025",
    caption: "Pitching at Fish Tank 2025, Benedictine University, Lisle.",
    position: "50% 30%",
  },
  2024: {
    src: "/fish_tank/overall.jpg",
    alt: "The 2024 Fish Tank winners holding their checks at College of DuPage",
    caption: "The first Fish Tank winners, College of DuPage, July 25, 2024.",
  },
};
