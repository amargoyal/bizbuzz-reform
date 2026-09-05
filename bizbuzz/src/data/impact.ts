// Site figures and directories carried over from main. Keep cumulative totals
// separate from season figures: main reports them independently.

export const IMPACT_STATS = [
  { label: "Students Taught", value: "1,584+", description: "across camps, competitions, and workshops since 2024" },
  { label: "Schools Engaged", value: "81", description: "elementary, middle, and high schools represented across Illinois" },
  { label: "Funding Raised", value: "$15,000+", description: "from 51 community partners, organizations, and sponsors" },
  { label: "Student Staff", value: "129", description: "high school instructors, volunteers, and judges" },
  { label: "Sessions Delivered", value: "35", description: "camp and workshop sessions run since 2024" },
  { label: "Office Hours", value: "830", description: "hours of one-on-one mentoring logged with students" },
  { label: "School Districts", value: "29", description: "public and private districts served across Chicagoland" },
  { label: "Community Partners", value: "51", description: "organizations, sponsors, and in-kind supporters" }
];

export const PROGRAM_PARTICIPATION = [
  { total: 145, label: "2024 Scott Elementary School talk" },
  { total: 60, label: "2024 Crone Middle School talk" },
  { total: 110, label: "2024 Entrepreneurship Camp" },
  { total: 80, label: "2024 Fish Tank competition" },
  { total: 45, label: "2024 Naperville Children's Business Fair workshops" },
  { total: 150, label: "2024 Naperville Children's Business Fair" },
  { total: 90, label: "2024 Madison Junior High mxINCedu mentorship program" },
  { total: 20, label: "2024 Brookdale Business Bootcamp" },
  { total: 20, label: "2024 BestBrains workshops" },
  { total: 30, label: "2025 DuPage Children's Business Fair workshops" },
  { total: 120, label: "2025 Entrepreneurship Camp" },
  { total: 70, label: "2025 Fish Tank competition" },
  { total: 150, label: "2025 Naperville Children's Business Fair" },
  { total: 165, label: "2026 Entrepreneurship Camp" },
  { total: 100, label: "2026 Fish Tank competition" },
  { total: "100+", label: "2026 Naperville Children's Business Fair" }
];

export const SCHOOL_DIRECTORY = [
  {
    title: "High Schools (8)",
    items: [
      "Naperville North", "Naperville Central", "Neuqua Valley", "Waubonsie Valley", "Benet", "Metea",
      "Glenbrook North", "Illinois Mathematics & Science Academy"
    ]
  },
  {
    title: "Middle Schools (23)",
    items: [
      "Avery Coonley", "Bednarcik", "Calvary", "Cass", "Crone", "Gregory", "Granger", "Heritage Grove",
      "Hinsdale", "Homer", "Ira Jones", "Jefferson", "John F. Kennedy (Plainfield)", "Kennedy",
      "Lake Zurich North", "Lincoln", "Madison", "Margaret Mead", "Scullen", "Still", "Summit Hill",
      "Twin Groves", "Virgil I. Grissom"
    ]
  },
  {
    title: "Elementary Schools (50)",
    items: [
      "Adlai Stevenson", "Beebe", "Brooks", "Builta", "Clow", "Concord", "Cowlishaw", "DuPage Montessori",
      "Eagle Point", "Elmwood", "Erickson", "Fairview", "Frank C. Whiteley", "Freedom", "Fry", "Graham",
      "Georgetown", "Hillcrest", "Highlands", "Holmes", "Kendall", "Kindi", "Kingsley", "Longfellow",
      "Maercker", "May Watts", "McDole", "Meadow Glens", "Mill Street", "Nancy Young",
      "National Christian Academy", "Nerge", "Owen", "Patterson", "Peterson", "Prairie", "Ranchview",
      "River Woods", "Scott", "Southbury", "Springbrook", "Steeple Run", "Sts. Peter and Paul Catholic School",
      "Swift", "Wallin Oaks", "Walkers Grove", "Welch", "Wheatlands", "Wolf's Crossing", "Western Trails"
    ]
  },
  {
    title: "School Districts (29)",
    items: [
      "203", "204", "Benet (Priv)", "299", "308", "Calvary (Priv)", "63", "202", "181", "33C", "95",
      "54", "161", "96", "140", "125", "DuPage Montessori (Priv)", "13", "72", "15", "100", "58", "97",
      "Kindi (Priv)", "60", "302", "National Christian Academy (Priv)",
      "Sts. Peter and Paul Catholic School (Priv)", "93"
    ]
  }
];

export const FUNDING_SUMMARY = [
  { label: "Total Raised", value: "$15,000+", helper: "51 organizations" },
  { label: "Monetary Funding", value: "$12,487" },
  { label: "In-kind Donations", value: "$2,959" }
];

export const SUPPORTERS = [
  "Andy's Ice Cream", "AT&T", "Alive Center", "Annex Naperville Running Company", "Benedictine University",
  "Best Brains", "Business for Kids", "Category Pirates", "Centennial Beach", "Center for Future Innovators",
  "Chicago Wolves", "College of DuPage", "Conference Planning Resources", "Costco", "D203", "D204",
  "DuPage Children's Business Fair", "DuPage Children's Museum", "Elite Tutoring Place", "Fort Hill",
  "Fresh Thyme", "Gia Mia", "Gourmet Gift Baskets", "Hiren Patel", "Kabat American", "Kendra Scott",
  "Illinois State University", "Kane County Cougars", "Kids Matter", "La Sorella di Francesca", "MOD Pizza",
  "Midwest Badminton", "Nandos", "Naper Nuts & Sweets", "Naperville Children's Business Fair",
  "Naperville Park District", "Naperville Public Libraries", "Nara Rosie", "NCTV17", "Nothing Bundt Cakes", "Potbelly",
  "Potters Place", "Right Choice Dental Care", "River Run Raptors Swim Team", "Samantha Zylstra & Associates", "SteamDream Team",
  "Steeple Run Stingrays Swim Team", "Stillwater Starz Swim Team", "Teen Philanthropy Initiative",
  "White Sox", "Wise Youth"
];

export const IMPACT = {
  students: 1584,
  schools: 81,
  funding: 15000,
  staff: 129,
  sessions: 35,
  officeHours: 830,
  districts: 29,
  partners: 51,
} as const;

/** Participation rows for school talks, workshops, mentorship and business fairs. */
export const WORKSHOP_PARTICIPATION = PROGRAM_PARTICIPATION.filter(
  (program) => !/Entrepreneurship Camp|Fish Tank competition/.test(program.label),
);
export const WORKSHOP_STUDENTS = WORKSHOP_PARTICIPATION.reduce(
  (total, program) => total + parseInt(String(program.total), 10), 0,
);
