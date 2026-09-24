// News coverage and recognition, newest first. Text follows the stories as
// they appeared on the original About page, with the station name corrected
// to Naperville Community Television (NCTV17).

export type PressItem = {
  id: string;
  outlet: string;
  date: string;
  /** The published headline, or a plain description when there is none. */
  title: string;
  summary: string[];
  link?: { label: string; href: string };
  video?: { youtubeId: string; poster: string };
  image?: { src: string; alt: string; position?: string; fit?: "cover" | "contain" };
};

export const PRESS: PressItem[] = [
  {
    id: "nctv17-spotlight-2025",
    outlet: "NCTV17 Spotlight",
    date: "Summer 2025",
    title: "BizBuzz Turns Imagination into Innovation",
    summary: [
      "Over the summer, BizBuzz joined Jane Wernette with Naperville Community Television 17 and their Spotlight show to talk about our 2025 Summer Entrepreneurship Camp and the second annual Fish Tank contest at Benedictine University.",
      "This year, we came back bigger than ever, with more students, more mentors, and an incredible lineup of guest speakers like Shark Tank alum Lindsey Fleischhauer and Mayor Scott Wehrli. What started as a small idea has now grown into one of the largest youth entrepreneurship programs across the country.",
    ],
    link: {
      label: "Watch on NCTV17",
      href: "https://www.nctv17.org/spotlight/bizbuzz-turns-imagination-into-innovation/",
    },
    image: {
      src: "/news/bizbuzz-spotlight-interview.jpg",
      alt: "A Fish Tank winner holding a trophy and a $250 prize check",
      position: "30% 40%",
    },
  },
  {
    id: "tpi-2025",
    outlet: "KidsMatter Teen Philanthropy Initiative",
    date: "2025",
    title: "2025 Teen Philanthropy Initiative grant winner",
    summary: [
      "The Teen Philanthropy Initiative is a program of KidsMatter, a Naperville nonprofit. High school students in the program learn fundraising, budgeting, and grant-making, then award grants to youth-serving nonprofits.",
      "In the 2024 to 2025 application cycle, following an intensive review process and a one-hour interview, BizBuzz was awarded a $1,000 grant, the largest amount of funding given to any organization in Naperville. TPI funded BizBuzz again in 2026.",
    ],
    link: {
      label: "Learn more about the Teen Philanthropy Initiative",
      href: "https://www.kidsmatter2us.org/teen-philanthropy-initiative/",
    },
    image: {
      src: "/news/tpi-2025.jpg",
      alt: "Three BizBuzz team members holding the grant in the Naperville City Council chambers",
      position: "50% 62%",
    },
  },
  {
    id: "nctv17-studio-2024",
    outlet: "NCTV17",
    date: "Fall 2024",
    title: "The Students of BizBuzz Were Inspired by NCTV17 to Share Their Story",
    summary: [
      "In fall 2024, BizBuzz was invited to interview with Naperville Community Television 17 to share how local news has helped the organization grow.",
      "Coverage from NCTV17 has connected BizBuzz with parents looking for opportunities for their students and sponsors looking to support youth entrepreneurship. Through these connections, BizBuzz can better turn imagination into innovation.",
    ],
    link: { label: "Watch on YouTube", href: "https://www.youtube.com/watch?v=CETzJ9aPp7w" },
    video: { youtubeId: "CETzJ9aPp7w", poster: "/news/nctv-students-2024.jpg" },
  },
  {
    id: "daily-herald-2024",
    outlet: "Daily Herald",
    date: "Fall 2024",
    title: "Daily Herald interview",
    summary: [
      "During the Madison Junior High mxINCedu mentorship program, we had the opportunity to be interviewed by the Daily Herald.",
      "We discussed the importance of youth entrepreneurship, especially in Naperville, where over 90% of K–8 students lack access to business education in school.",
    ],
    image: { src: "/about/madi.png", alt: "Madison Junior High School in Naperville" },
  },
  {
    id: "nctv17-news-2024",
    outlet: "NCTV17 News",
    date: "Summer 2024",
    title: "Naperville North Juniors Hold Youth Entrepreneurship Camp for Students",
    summary: [
      "At Camp Session 5 and during the Fish Tank competition, BizBuzz had the honor of welcoming Jesus Cortez and the Naperville Community Television 17 team to join us.",
      "They conducted interviews and helped share our story with the broader community, capturing the passion, creativity, and entrepreneurial spirit that defined this year's camp and competition.",
    ],
    link: {
      label: "Read on NCTV17",
      href: "https://www.nctv17.org/news/naperville-north-juniors-hold-youth-entrepreneurship-camp-for-students/",
    },
    video: { youtubeId: "TmrK8-sFFkA", poster: "/camp_imgs/cards/session5/1.jpg" },
  },
  {
    id: "we-love-naperville-2024",
    outlet: "We Love Naperville",
    date: "Summer 2024",
    title: "Inaugural BizBuzz Camp for Kid Entrepreneurs",
    summary: [
      "Shortly after the first-ever Fish Tank contest, BizBuzz celebrated the success of its inaugural summer camp in the Chicagoland area and the success of all the young kidpreneurs who participated, including Fish Tank champion Garrett Hauk.",
    ],
    link: {
      label: "Read on We Love Naperville",
      href: "https://welovenaperville.co/article/inaugural-bizbuzz-camp-for-kid-entrepreneurs",
    },
    image: { src: "/news/welovenaperville-2024.jpg", alt: "We Love Naperville logo" },
  },
];
