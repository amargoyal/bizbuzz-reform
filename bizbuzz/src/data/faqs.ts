// Frequently asked questions, grouped by topic. Answers follow the original
// Office Hours & FAQs page.
import { CONTACT_EMAIL } from "@/lib/site";

export type Faq = { id: string; q: string; a: string[]; topic: FaqTopic };
export type FaqTopic = "BizBuzz" | "Camp" | "Fish Tank" | "Office hours" | "Contact";

export const FAQS: Faq[] = [
  {
    id: "what-is-bizbuzz",
    topic: "BizBuzz",
    q: "What is BizBuzz?",
    a: [
      "BizBuzz is a hands-on, completely free entrepreneurship program for students in grades 3–8. We help students turn their ideas into real business concepts through interactive sessions, mentorship, and creative challenges.",
    ],
  },
  {
    id: "experience",
    topic: "BizBuzz",
    q: "Does my child need business experience?",
    a: ["Not at all. Whether your child is brand new or already entrepreneurial, BizBuzz is designed for all experience levels."],
  },
  {
    id: "free",
    topic: "BizBuzz",
    q: "Is it really free?",
    a: [
      "Yes, 100% free. Our mission is to make entrepreneurship accessible to every student, thanks to the support of our community partners.",
    ],
  },
  {
    id: "bring",
    topic: "Camp",
    q: "What should my child bring?",
    a: ["Just the essentials: a folder, pencils, a water bottle, and (optionally) a laptop or tablet for building and researching their ideas."],
  },
  {
    id: "where",
    topic: "Camp",
    q: "Where are sessions held?",
    a: ["We host sessions at local libraries like 95th Street Library and Nichols Library. You'll always receive location details ahead of time."],
  },
  {
    id: "updates",
    topic: "Camp",
    q: "How will I stay updated?",
    a: [
      "We send regular email updates after each session with key highlights, reminders, and important links so you're always in the loop.",
    ],
  },
  {
    id: "what-is-fish-tank",
    topic: "Fish Tank",
    q: "What is Fish Tank?",
    a: [
      "Fish Tank is our final pitch competition. Think Shark Tank, but for students. Participants present their business ideas to judges, build confidence, and showcase everything they've learned.",
    ],
  },
  {
    id: "fish-tank-sign-up",
    topic: "Fish Tank",
    q: "How do we sign up for Fish Tank?",
    a: [
      "You can register through the link shared in our emails or slide decks. It only takes a few minutes.",
      `The Fish Tank 2027 dates have not been announced yet. Email ${CONTACT_EMAIL} to hear when registration opens.`,
    ],
  },
  {
    id: "fish-tank-without-camp",
    topic: "Fish Tank",
    q: "Can my child join Fish Tank without attending camp?",
    a: [
      "Absolutely. Fish Tank is open to all eligible students, even if they're not enrolled in our camp.",
      "You do not need to be a part of the BizBuzz summer program to compete in Fish Tank. Students are encouraged to work with friends who are also not part of BizBuzz this year.",
    ],
  },
  {
    id: "divisions",
    topic: "Fish Tank",
    q: "What are the divisions for Fish Tank?",
    a: [
      "Students who are enrolled in VentureLab or between the grades of 6th to 9th will participate in the VentureLab division.",
      "Students who are enrolled in KidPreneur or between the grades of 3rd to 6th will participate in the KidPreneur division.",
    ],
  },
  {
    id: "office-hours",
    topic: "Office hours",
    q: "What are office hours?",
    a: [
      "Office hours are personalized 1-on-1 sessions where students can get feedback, ask questions, and improve their ideas. Spots are limited and first come, first served.",
    ],
  },
  {
    id: "virtual",
    topic: "Office hours",
    q: "Is there a virtual option?",
    a: ["Yes. If your child can't attend in person, they can participate via Google Meet. Just coordinate with our team and we'll make it work."],
  },
  {
    id: "questions",
    topic: "Contact",
    q: "Still have questions?",
    a: [`We're here to help. Reach out to our team anytime at ${CONTACT_EMAIL}. We'd love to support you and your child.`],
  },
];

export const FAQ_TOPICS: FaqTopic[] = ["BizBuzz", "Camp", "Fish Tank", "Office hours", "Contact"];
