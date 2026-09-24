import raw from "./camps.json";
import { cleanDate } from "@/lib/format";

export type Speaker = {
  name: string;
  role: string;
  topic?: string;
  bio?: string;
  image?: string;
};

export type CampSession = {
  id: string;
  title: string;
  date: string;
  location: string;
  description: string;
  speaker: Speaker | null;
  speaker2?: Speaker | null;
  images: string[];
};

export type CampTrack = { title: string; sessions: CampSession[] };

export type CampYear = {
  year: number;
  title: string;
  intro: string;
  detail: string;
  dates: string;
  venues: string;
  stats: { value: string; label: string }[];
  tracks: { id: string; name: string; grades?: string; blurb: string; data: CampTrack }[];
  heroPhoto: { src: string; alt: string; caption: string; position?: string };
  highlights: string[];
};

const data = raw as unknown as Record<string, CampTrack[]>;

export const CAMP_YEARS: CampYear[] = [
  {
    year: 2026,
    title: "Summer camp 2026",
    intro:
      "Two six-session programs, KidPreneur Camp and VentureLab, helping young founders ideate, build, and pitch market-ready ventures alongside industry leaders and business experts.",
    detail:
      "The two programs ran at the same time, from June 5 to July 10, and ended in separate Fish Tank divisions.",
    dates: "June 5 to July 10, 2026",
    venues: "95th Street Library and Nichols Library, Naperville",
    stats: [
      { value: "165", label: "students taught" },
      { value: "6", label: "sessions per track" },
      { value: "2", label: "guest speakers" },
      { value: "2", label: "camp programs" },
    ],
    tracks: [
      {
        id: "kidpreneur",
        name: "KidPreneur",
        grades: "Grades 3–6",
        blurb: "For first-time founders: Networking Bingo, the Bug-Me List, BizBucks, and a Fish Tank-style mock pitch.",
        data: data["2026"][0],
      },
      {
        id: "venturelab",
        name: "VentureLab",
        grades: "Grades 6–9",
        blurb: "For students ready to go further: feasibility and market research, prototyping, project management, and Demo Day practice.",
        data: data["2026"][1],
      },
    ],
    heroPhoto: {
      src: "/camp_imgs/2026/session3kp/session3kpd.jpg",
      alt: "KidPreneur campers pointing at the camera and smiling",
      caption: "KidPreneur Session 3, 95th Street Library, June 19, 2026.",
      position: "50% 40%",
    },
    highlights: ["Isha Elandassery led the finance session", "Mayor Scott Wehrli returned for speaking skills"],
  },
  {
    year: 2025,
    title: "Summer camp 2025",
    intro:
      "Our seven-session BizBuzz Camp helps young founders ideate, build, and pitch market-ready ventures alongside Shark Tank alumni, civic leaders, and finance experts.",
    detail: "Seven intensive weeks of entrepreneurship education, hands-on activities, and mentorship from industry leaders.",
    dates: "June 6 to July 25, 2025",
    venues: "95th Street Library, Naperville",
    stats: [
      { value: "7", label: "camp sessions" },
      { value: "5", label: "guest speakers" },
      { value: "120", label: "students taught" },
    ],
    tracks: [{ id: "camp", name: "Summer camp", blurb: "", data: data["2025"][0] }],
    heroPhoto: {
      src: "/camp_imgs/2025/session7/session7b.jpg",
      alt: "Campers holding up their BizBuzz shirts at the last session of 2025",
      caption: "Session 7, Pitch Rehearsal & Preparation, July 25, 2025.",
      position: "50% 45%",
    },
    highlights: ["Shark Tank alum Lindsey Fleischhauer", "Mayor Scott Wehrli and City Director of Finance Raymond Munch"],
  },
  {
    year: 2024,
    title: "Summer camp 2024",
    intro:
      "Our six-part entrepreneurial journey takes students from idea generation to market-ready concepts through hands-on workshops and expert mentorship.",
    detail:
      "Each camp session builds upon the previous one, creating a comprehensive entrepreneurial journey that takes 3rd–8th grade students from idea generation to pitching at the Fish Tank contest.",
    dates: "June 12 to July 17, 2024",
    venues: "95th Street Library and Nichols Library, Naperville",
    stats: [
      { value: "6", label: "camp sessions" },
      { value: "7", label: "guest speakers" },
      { value: "110", label: "students taught" },
    ],
    tracks: [{ id: "camp", name: "Summer camp", blurb: "", data: data["2024"][0] }],
    heroPhoto: {
      src: "/camp_imgs/cards/session1/1.png",
      alt: "The first BizBuzz campers together in a library meeting room",
      caption: "Session 1, Ideation & Innovation, 95th Street Library, June 12, 2024.",
      position: "50% 45%",
    },
    highlights: ["Sean Riley, CEO of Dude Wipes", "Mayor Scott Wehrli", "Eddie Yoon of Category Pirates"],
  },
];

export function getCampYear(year: number) {
  return CAMP_YEARS.find((y) => y.year === year);
}

export function sessionNumber(id: string) {
  const match = id.match(/(\d+)$/);
  return match ? Number(match[1]) : 0;
}

export function sessionCaption(trackName: string | null, s: CampSession) {
  const n = sessionNumber(s.id);
  const track = trackName ? `${trackName} ` : "";
  return `${track}Session ${n}, ${s.title}. ${s.location}, ${cleanDate(s.date)}.`;
}

/** Every guest speaker since 2024, with each visit. */
export function allSpeakers() {
  const map = new Map<string, { speaker: Speaker; visits: { year: number; session: string; topic?: string; track?: string }[] }>();
  for (const cy of [...CAMP_YEARS].reverse()) {
    for (const t of cy.tracks) {
      for (const s of t.data.sessions) {
        for (const sp of [s.speaker, s.speaker2]) {
          if (!sp) continue;
          const entry = map.get(sp.name) ?? { speaker: sp, visits: [] };
          entry.visits.push({
            year: cy.year,
            session: `Session ${sessionNumber(s.id)}: ${s.title}`,
            topic: sp.topic,
            track: cy.tracks.length > 1 ? t.name : undefined,
          });
          map.set(sp.name, entry);
        }
      }
    }
  }
  return [...map.values()];
}

/** The 2026 KidPreneur arc, used to show what a summer looks like. */
export const CURRICULUM = data["2026"].map((track, i) => ({
  id: i === 0 ? "kidpreneur" : "venturelab",
  name: i === 0 ? "KidPreneur" : "VentureLab",
  sessions: track.sessions.map((s) => ({ n: sessionNumber(s.id), title: s.title, description: s.description })),
}));
