import type { HowToPlayEntry, NewsArticle } from "@/lib/tournaments/types";

export type JuniorMajorEvent = {
  slug: string;
  name: string;
  month: string; // e.g. "January 2026"
  dates2026?: string; // optional precise date string, e.g. "June 20–22, 2026"
  // Exact ISO dates for the event (preferred over `dates2026` for resolvers).
  startDate?: string; // ISO "YYYY-MM-DD"
  endDate?: string; // ISO "YYYY-MM-DD"
  winners2026?: { boys?: string; girls?: string };
  note?: string;
    liveStatus?: "live" | "next" | "completed" | "upcoming";
    endsOn?: string; // ISO date "YYYY-MM-DD" — widget auto-hides after this date
  officialUrl?: string;
  golfGeniusUrl?: string; // live scoring link
  winners?: { year: number; champion: string }[];
  howToPlay?: HowToPlayEntry[];
  // Venue
  course?: string;
  location?: string;
  coursePar?: number;
  courseYardage?: number;
  courseDesigner?: string;
  // Format
  format?: string;
  fieldSize?: string;
  eligibility?: string;
  // Editorial
  overview?: string;
  // History
  pastResults?: { year: number; champion: string; score?: string; runnerUp?: string }[];
  // News
  news?: NewsArticle[];
};

export const JUNIOR_MAJOR_EVENTS_2026: JuniorMajorEvent[] = [
  {
    slug: "junior-orange-bowl",
    name: "Junior Orange Bowl",
    month: "January 2026",
    startDate: "2026-01-03",
    endDate: "2026-01-06",
    winners2026: { boys: "Tomas Restrepo", girls: "Charlotte Naughton" },
    officialUrl: "https://juniororangebowl.org/golf",
    golfGeniusUrl: "https://www.golfgenius.com/pages/11918494156369997059",
    course: "Biltmore Golf Course",
    location: "Coral Gables, FL",
    coursePar: 71,
    courseYardage: 7112,
    courseDesigner: "Donald Ross (1925); restored by Brian Silva (2007)",
    format: "72-hole stroke play, no cut",
    fieldSize: "Up to 72 boys, 42 girls",
    eligibility: "Invitation only; junior amateurs under age 19 who have not enrolled in college golf; includes top 25 U.S.-ranked players plus national champions from over 100 countries",
    overview: "The Junior Orange Bowl International Golf Championship is one of the world's oldest and most prestigious junior invitationals, held at the historic Donald Ross–designed Biltmore Golf Course in Coral Gables since 1964. The 72-hole, no-cut format draws players from over 100 countries and has served as an early launchpad for Tiger Woods, Sergio Garcia, Inbee Park, and Lexi Thompson. Separate boys' and girls' divisions compete simultaneously, with all players guaranteed all four rounds.",
    howToPlay: [
      { label: "Invitation only", note: "Field is built from the top 25 U.S.-ranked players, national champions from Europe, Asia, South America, and Africa, and players who advance through the tournament's automatic qualifying process." },
      { label: "Contact the Golf Committee", href: "mailto:golf@jrorangebowl.org", note: "Steven Gonzalez, Golf Committee Chair • J.R. Steinbauer, Tournament Director • (786) 266-4261" },
    ],
    pastResults: [
      { year: 2026, champion: "Boys: Tomas Restrepo / Girls: Charlotte Naughton", score: "Boys: -14 (270) / Girls: -10 (274)" },
      { year: 2025, champion: "Boys: Lorenzo Rodriguez / Girls: Shauna Liu", score: "Boys: -7 (277) / Girls: -8 (276)" },
      { year: 2024, champion: "Boys: Darren Zhou / Girls: Kayla Bryant" },
      { year: 2023, champion: "Boys: Jay Brooks / Girls: Anna Davis" },
      { year: 2022, champion: "Boys: Nicholas Prieto / Girls: Maria Jose Marin" },
      { year: 2021, champion: "Boys: Sebastian Moss / Girls: Emily Zhu" },
      { year: 2020, champion: "Boys: Andrey Borges / Girls: Mizuki Hashimoto" },
    ],
    news: [
      {
        slug: "2026-junior-orange-bowl-recap",
        title: "Restrepo Closes With 69 to Win 62nd Junior Orange Bowl as Naughton Sets Girls' Scoring Record",
        date: "2026-01-06",
        author: "juniorgolfHQ",
        summary: "Tomas Restrepo holds off Frederick Egnatios by three shots for his first Junior Orange Bowl title, while Charlotte Naughton becomes the first girl in tournament history to finish four rounds in double digits under par.",
        content: [
          "The 62nd Junior Orange Bowl International Golf Championship at the Donald Ross–designed Biltmore Golf Course delivered two decisive champions to open the 2026 junior golf calendar. Tomas Restrepo of Colombia closed with rounds of 69-68-64-69 to finish at 14-under 270, three shots clear of runner-up Frederick Egnatios, who carded 67-70-69-67 for 273 to claim low-North American honors. Restrepo became just the third Colombian boy to win the tournament, joining Camilo Benedetti (1998) and Camilo Villegas (1999).",
          "Restrepo built a five-shot cushion through 54 holes before Egnatios closed with the low round of the week among the leaders, a final-round 67. Restrepo answered with a 69 of his own to hold on for the three-shot win. Egnatios's runner-up finish came 15 strokes clear of Charlie Woods, who carded rounds of 73-72-71-72 to finish tied for 19th at 4-over.",
          "On the girls' side, England's Charlotte Naughton put together the most dominant week in tournament history. Her closing 69 pushed her to 10-under 274, seven shots clear of runner-up Nina Choe, and made her the first girl ever to finish the 72-hole championship in double digits under par. Naughton extended a 37-hole bogey-free streak into the final round and made just one bogey across her last 47 holes, capping the week with a chip-in birdie at the par-5 18th after a testing bunker recovery two holes earlier.",
          "Founded in 1964, the Junior Orange Bowl remains one of junior golf's most international invitationals, with a field built from the top 25 U.S.-ranked players, national champions from Europe, Asia, South America, and Africa, and a handful of players who earn their way in through the tournament's automatic qualifying process. Past champions at Biltmore include Tiger Woods, Sergio Garcia, Inbee Park, and Lexi Thompson, and both Restrepo and Naughton now join that list as they head into the rest of the junior season.",
        ],
      },
    ],
  },
  {
    slug: "ajga-simplify-boys-championship",
    name: "AJGA Simplify Boys Championship",
    month: "February 2026",
    startDate: "2026-02-13",
    endDate: "2026-02-16",
    officialUrl: "https://www.ajga.org/tournaments/ajga-simplify-boys-championship-at-carlton-woods",
    golfGeniusUrl: "https://www.ajga.org/tournaments/2026004/leaderboard",
    course: "The Club at Carlton Woods \u2013 Fazio Championship Course",
    location: "The Woodlands, TX",
    coursePar: 72,
    courseDesigner: "Tom Fazio",
    format: "54-hole stroke play",
    fieldSize: "72 players",
    eligibility: "AJGA Invitational \u2013 boys ages 12\u201319",
    overview: "One of the premier AJGA Invitational events, the Simplify Boys Championship is held annually at the exclusive Club at Carlton Woods in The Woodlands, Texas. The Tom Fazio-designed Championship Course provides an elite test for the nation\u2019s top junior golfers across three rounds of stroke play. The 2025 edition featured future stars including Miles Russell, who ran away with the title at 11 under par.",
    howToPlay: [
      { label: "AJGA Invitational field", note: "72 boys, ages 12\u201319, selected via Performance-Based Entry: top 15 in the Rolex AJGA Rankings are fully exempt, top 25 need 12 performance stars, and top 50 or players who make the 36-hole cut need 8 performance stars." },
      { label: "Full entry criteria", href: "https://www.ajga.org/tournaments/ajga-simplify-boys-championship-at-carlton-woods", note: "See the official tournament page for Performance-Based Entry requirements and how to gain entry into AJGA Invitational events." },
    ],
    pastResults: [
      { year: 2026, champion: "Grayson Baucom", score: "-12 (70-67-67\u2014204)", runnerUp: "T2: Jackson Ormond / Cameron Kuchar / Miles Russell (-9, 207)" },
      { year: 2025, champion: "Miles Russell", score: "-11 (64-70-71\u2014205)", runnerUp: "T2: Michael Riebe / Giuseppe Puebla (-8)" },
    ],
    winners2026: { boys: "Grayson Baucom" },
    news: [
      {
        slug: "2026-simplify-boys-championship-recap",
        title: "Grayson Baucom Rallies From Four Back to Win First AJGA Invitational at Simplify Boys Championship",
        date: "2026-02-16",
        author: "juniorgolfHQ",
        summary: "Grayson Baucom closed with a bogey-free 67, capped by a hole-out eagle at the 13th, to win by three shots at The Club at Carlton Woods.",
        content: [
          "Grayson Baucom of Hickory, North Carolina, closed the AJGA Simplify Boys Championship at Carlton Woods with a bogey-free, 5-birdie 67 to finish at 12-under 204, good for a three-shot victory and the first AJGA Invitational title of his career. Baucom opened the week with a 70 and followed with a 67 in the second round, then trailed by four shots entering the final 18 holes at The Club at Carlton Woods\u2019 Fazio Championship Course.",
          "The turning point came at the par-5 13th, where Baucom holed out for eagle to take a two-shot lead he would not relinquish, playing his final five holes in 1-under to close out the win. He finished three shots clear of a three-way tie for second at 9-under 207 that included Jackson Ormond, Cameron Kuchar, and defending champion Miles Russell, who shot a final-round 69.",
          "Ronin Banerjee and Giuseppe Puebla shared fifth at 8-under, with Chase Bauer seventh at 7-under. A 2028 graduate ranked No. 32 in the Rolex AJGA Rankings and a 2025 Rolex Junior All-American, Baucom called the win surreal given the tournament\u2019s ties to the military and armed forces community.",
          "Now in its 17th year at Carlton Woods, the Simplify Boys Championship remains one of the AJGA\u2019s premier winter invitationals, drawing 17 of the top 25 players in the Rolex AJGA Rankings to the 2026 field.",
        ],
      },
    ],
  },
  {
    slug: "fortinet-stanford-invitational",
    name: "The Fortinet Stanford Invitational hosted by Rose Zhang",
    month: "February 2026",
    startDate: "2026-02-16",
    endDate: "2026-02-18",
    officialUrl: "https://www.ajga.org/tournaments/2026005",
    golfGeniusUrl: "https://www.ajga.org/tournaments/2026005/leaderboard",
    course: "Stanford Golf Course",
    location: "Stanford, CA",
    coursePar: 71,
    courseYardage: 6098,
    courseDesigner: "George C. Thomas Jr. and William P. Bell (1930)",
    format: "54-hole stroke play",
    fieldSize: "72 players",
    eligibility: "AJGA Invitational \u2013 girls ages 12\u201319; invitation based on Rolex AJGA Rankings; top 15-ranked girls are fully exempt; AJGA membership required",
    overview: "Originally the Mariah Stackhouse Girls Invitational at its 2021 debut, the tournament became the Fortinet Stanford Invitational hosted by Rose Zhang in 2024 when the LPGA star and Stanford alumna took on the hosting role. Played on the historic George C. Thomas\u2013designed Stanford Golf Course, the event is one of the AJGA\u2019s premier all-girls invitationals. Starting in 2025, the champion receives a sponsor exemption into the Chevron Championship (LPGA major).",
    howToPlay: [
      { label: "AJGA Invitational field", note: "72 girls, ages 12\u201319, selected via Performance-Based Entry: top 15 in the Rolex AJGA Rankings are fully exempt, top 25 need 12 performance stars, and top 50 or players who make the 36-hole cut need 8 performance stars." },
      { label: "Full entry criteria", href: "https://www.ajga.org/tournaments/2026005", note: "See the official tournament page for Performance-Based Entry requirements and how to gain entry into AJGA Invitational events." },
    ],
    pastResults: [
      { year: 2026, champion: "Asterisk Talley", score: "-9 (204)", runnerUp: "Rina Kawasaki / Juliet Oh (T2, -4)" },
      { year: 2025, champion: "Asterisk Talley" },
      { year: 2024, champion: "Kristina Xu" },
      { year: 2023, champion: "Anna Song" },
      { year: 2022, champion: "Leigh Chien" },
      { year: 2021, champion: "Michelle Liu" },
    ],
    winners2026: { girls: "Asterisk Talley" },
    news: [
      {
        slug: "2026-fortinet-stanford-invitational-recap",
        title: "Asterisk Talley Goes Wire-to-Wire to Defend Fortinet Stanford Invitational Title",
        date: "2026-02-18",
        author: "juniorgolfHQ",
        summary: "Talley opened with a bogey-free 64 and closed with a 1-under 70 in the rain to win by five shots, becoming a five-time AJGA Invitational champion.",
        content: [
          "Asterisk Talley of Chowchilla, California, successfully defended her Fortinet Stanford Invitational title, closing with a 1-under 70 in rainy conditions to finish at 9-under 204 and win by five shots on the historic Stanford Golf Course. Talley set the tone in round one with a bogey-free 7-under 64, then added a 1-under 70 in round two to take a commanding lead into the final round.",
          "In the final round, Talley made birdies on the par-3 third hole and twice more on the back nine to close out the wire-to-wire victory. Runners-up Rina Kawasaki and Juliet Oh both carded 11 birdies for the week to tie for second at 4-under 209, matching career-best AJGA Invitational finishes. Honorine Ferry finished fourth at 3-under, with Kuree Little fifth at 2-under.",
          "The win was Talley\u2019s fifth AJGA Invitational title and her second straight at Stanford, played in front of the Stanford coaching staff and fellow Cardinal commits since Talley will join the program. Originally launched in 2021 as the Mariah Stackhouse Girls Invitational, the event has been hosted by LPGA star and Stanford alumna Rose Zhang since 2024, with the champion earning a sponsor exemption into the Chevron Championship.",
        ],
      },
    ],
  },
  {
    slug: "dustin-johnson-world-junior",
    name: "Dustin Johnson World Junior Golf Championship",
    month: "March 2026",
    startDate: "2026-03-06",
    endDate: "2026-03-08",
    officialUrl: "https://worldjuniorgolfchampionship.com/",
    course: "TPC Myrtle Beach",
    location: "Murrells Inlet, SC",
    coursePar: 72,
    courseYardage: 6950,
    courseDesigner: "Tom Fazio (1999)",
    format: "54-hole stroke play with cut after Round 2 (top 36 boys and ties, top 18 girls and ties advance)",
    fieldSize: "Approximately 90 players total (co-ed)",
    eligibility: "Junior amateurs ages 13\u201318 as of the first round; qualifiers through Rolex AJGA Rankings, TUGR standings, and sponsor exemptions; qualifier events held at Myrtle Beach area courses",
    overview: "Founded in 2016 by two-time major champion and South Carolina native Dustin Johnson, this tournament has quickly grown into one of the top junior events in the country. Held at the Tom Fazio-designed TPC Myrtle Beach, the co-ed field features separate boys\u2019 and girls\u2019 divisions competing simultaneously. Alumni include PGA Tour winners Akshay Bhatia and Nick Dunlap.",
    howToPlay: [
      { label: "Field entry", note: "Approximately 90 players (co-ed), ages 13\u201318, selected through the Rolex AJGA Rankings, TUGR standings, sponsor exemptions, and qualifying events held at Myrtle Beach\u2013area courses." },
      { label: "Tournament info", href: "https://worldjuniorgolfchampionship.com/2026-field/", note: "See the official site for the full field, qualifying details, and results archive." },
    ],
    pastResults: [
      { year: 2026, champion: "Boys: William Lisle / Girls: Fay Jia", score: "Boys: -4 (212) / Girls: E (216)" },
      { year: 2025, champion: "Boys: Aarav Shah / Girls: Kayla Bryant" },
      { year: 2024, champion: "Boys: Ethan Paschal / Girls: Vanessa Borovilos" },
      { year: 2023, champion: "Boys: Jackson Koivun / Girls: Ryleigh Knaub" },
      { year: 2022, champion: "Boys: Ben James / Girls: Katie Cranston" },
      { year: 2021, champion: "Boys: Nick Dunlap / Girls: Jacqueline Putrino" },
    ],
    winners2026: { boys: "William Lisle", girls: "Fay Jia" },
    news: [
      {
        slug: "2026-dustin-johnson-world-junior-recap",
        title: "William Lisle Holds Off Chase Bauer as Fay Jia Rallies to Sweep 2026 Dustin Johnson World Junior",
        date: "2026-03-08",
        author: "juniorgolfHQ",
        summary: "William Lisle closed with a 71 to win by one shot on the boys side, while Fay Jia carded an even-par 216 to win the girls title by four.",
        content: [
          "William Lisle closed the 2026 Dustin Johnson World Junior Golf Championship with a final-round 71 for a 54-hole total of 4-under 212, holding off Chase Bauer by one shot at TPC Myrtle Beach. Lisle held the 36-hole lead into the final round and steadied himself after a shaky start, making eagle on the par-5 15th and a key putt at the 16th to close out the win. Bauer, who shot the low round of the day among the leaders at 69, finished second at 3-under 213, with Theodore Snyder third at 1-under 215.",
          "On the girls\u2019 side, Fay Jia won by four shots despite trailing entering the final round, carding rounds of 71-74-71 for an even-par 216 total without watching the leaderboard down the stretch. Eileen Park, Macie Rasmussen, and Michelle Xing tied for second at 4-over 220.",
          "Founded in 2016 by two-time major champion and South Carolina native Dustin Johnson, the tournament has grown into one of the top co-ed junior events in the country, drawing roughly 90 players to the Tom Fazio\u2013designed TPC Myrtle Beach. Alumni include PGA Tour winners Akshay Bhatia and Nick Dunlap.",
        ],
      },
    ],
  },
  {
    slug: "junior-invitational-sage-valley",
    name: "Junior Invitational at Sage Valley",
    month: "March 2026",
    startDate: "2026-03-11",
    endDate: "2026-03-14",
    course: "Sage Valley Golf Club",
    location: "Graniteville, SC",
    coursePar: 72,
    courseYardage: 7437,
    courseDesigner: "Tom Fazio",
    format: "72-hole stroke play",
    fieldSize: "36 boys, 24 girls",
    eligibility: "Invitation only; field selected by the Junior Invitational committee based on national junior rankings and competitive résumé",
    winners2026: { boys: "Miles Russell", girls: "Asterisk Talley" },
    officialUrl: "https://juniorinvitational.com/",
    golfGeniusUrl: "https://svji-2026juniorinvitational.golfgenius.com",
    note: "72-hole stroke play • Sage Valley Golf Club, Graniteville, SC • Designed by Tom Fazio • Par 72, 7,437 yards • Field: 36 boys, 24 girls",
    howToPlay: [
      { label: "Invitation only", note: "Field of 36 boys and 24 girls; invitations extended by the Junior Invitational committee based on national rankings and competitive résumé." },
      { label: "Tournament info", href: "https://juniorinvitational.com/about/", note: "See the official site for field selection background and tournament history." },
    ],
    pastResults: [
      { year: 2026, champion: "Boys: Miles Russell / Girls: Asterisk Talley", score: "Boys: -15 / Girls: -8" },
      { year: 2025, champion: "Boys: Miles Russell / Girls: Aphrodite Deng" },
      { year: 2024, champion: "Boys: Giovanni Daniele Binaghi / Girls: Asterisk Talley" },
      { year: 2023, champion: "Boys: Aldrich Potgieter / Girls: Anna Davis" },
      { year: 2022, champion: "Boys: Caleb Surratt / Girls: Amalie Leth-Nissen" },
      { year: 2020, champion: "Jackson Van Paris" },
      { year: 2019, champion: "Tom McKibbin" },
      { year: 2018, champion: "Akshay Bhatia" },
      { year: 2017, champion: "Joaquin Niemann" },
      { year: 2016, champion: "Austin Eckroat" },
      { year: 2015, champion: "Marcus Kinhult" },
      { year: 2014, champion: "Scottie Scheffler" },
      { year: 2013, champion: "Carson Young" },
      { year: 2012, champion: "Zachary Olsen" },
      { year: 2011, champion: "Nicholas Reach" },
    ],
    news: [
      {
        slug: "2026-sage-valley-junior-invitational-recap",
        title: "Miles Russell and Asterisk Talley Become First Repeat Champions at Junior Invitational at Sage Valley",
        date: "2026-03-14",
        author: "juniorgolfHQ",
        summary: "Miles Russell and Asterisk Talley each closed with a final-round 67 to win by three shots, becoming the first players in tournament history to win the Junior Invitational more than once.",
        content: [
          "Miles Russell closed the 2026 Junior Invitational at Sage Valley with a 5-under 67 that included two eagles, finishing at 15-under to win by three shots and successfully defend the title he won in 2025. The victory made Russell the first two-time boys champion in the event's history. Russell trailed by three shots entering the final round and steadily worked his way up the leaderboard, crediting a shot-by-shot, even-keeled mindset for the comeback.",
          "Asterisk Talley matched Russell's final-round 67, her low round of the week, to finish at 8-under and win by three shots for her second Sage Valley title after also winning in 2024. A birdie at the par-3 16th proved decisive down the stretch as Talley closed out the win without needing to watch the rest of the leaderboard.",
          "The Junior Invitational at Sage Valley remains one of the most selective events on the junior calendar, with an invitation-only field of 36 boys and 24 girls competing over 72 holes at the Tom Fazio–designed Sage Valley Golf Club in Graniteville, South Carolina. Past champions on the boys side include Scottie Scheffler, Joaquin Niemann, and Akshay Bhatia.",
        ],
      },
    ],
  },
  {
    slug: "ajga-team-taylormade-invitational",
    name: "AJGA Team TaylorMade Invitational",
    month: "May 2026",
    startDate: "2026-05-21",
    endDate: "2026-05-24",
    officialUrl: "https://www.ajga.org/tournaments/team-taylormade-invitational",
    golfGeniusUrl: "https://www.ajga.org/tournaments/2026041/leaderboard",
    // Host course rotates annually. Listed course reflects the 2026 host.
    course: "Pelican Golf Club",
    location: "Belleair, FL",
    courseDesigner: "Donald Ross (1925); redesigned by Beau Welling (2018)",
    format: "54-hole stroke play",
    fieldSize: "72 players",
    eligibility: "AJGA Invitational – boys ages 12–19; invitation based on Rolex AJGA Rankings; top 65 ranked boys receive invitations; AJGA membership required",
    overview: "Launched in 2021 as a premier all-boys AJGA invitational in partnership with TaylorMade, this event rotates annually among elite private courses and resort tracks. The event draws the 72 highest-ranked junior boys in the country and serves as a major college recruiting showcase. Luke Ringkamp won the 2026 edition at Pelican Golf Club after a final-round 64.",
    note: "Host course rotates annually. Listed course reflects the 2026 host (Pelican Golf Club, Belleair, FL).",
    howToPlay: [
      { label: "AJGA Invitational field", note: "72 boys, ages 12–19, selected primarily from the Rolex AJGA Rankings; AJGA membership required." },
      { label: "Full entry criteria", href: "https://www.ajga.org/tournaments/2026041", note: "See the official tournament page for Performance-Based Entry requirements and how to gain entry into AJGA Invitational events." },
    ],
    winners2026: { boys: "Luke Ringkamp" },
    pastResults: [
      { year: 2026, champion: "Luke Ringkamp", score: "-13 (197)", runnerUp: "Bodie Brumlow (-10, 200)" },
      { year: 2025, champion: "Charlie Woods", score: "-15 (201)" },
      { year: 2024, champion: "Carson Bertagnole" },
      { year: 2023, champion: "Cayden Pope", score: "-16 (200)" },
      { year: 2022, champion: "Benjamin James" },
      { year: 2021, champion: "Benjamin James", score: "-14 (202)" },
    ],
    news: [
      {
        slug: "2026-team-taylormade-invitational-recap",
        title: "Luke Ringkamp Erases Five-Shot Deficit to Win Team TaylorMade Invitational by Three",
        date: "2026-05-24",
        author: "juniorgolfHQ",
        summary: "Luke Ringkamp closed with a 6-under 64 to erase a five-shot final-round deficit and win his second AJGA Invitational title at Pelican Golf Club's debut as tournament host.",
        content: [
          "Luke Ringkamp closed the 2026 AJGA Team TaylorMade Invitational with a 6-under 64, the low round of the week among contenders, to finish at 13-under 197 and win by three shots at Pelican Golf Club, hosting the event for the first time. Ringkamp opened with rounds of 65 and 68 before trailing by five shots entering the final round and running down the field with six birdies on the closing 18.",
          "Bodie Brumlow, who opened with a 9-under 61 — the lowest single-round score in AJGA Invitational history — led after 36 holes but could not sustain the pace, closing with a 2-over 72 to finish runner-up at 10-under 200. Giuseppe Puebla finished third at 8-under 202, with Landon Ashcraft and Miles Russell tied for fourth at 7-under 203.",
          "The win was Ringkamp's second AJGA Invitational title. Ranked No. 4 in the Rolex AJGA Rankings and a Pepperdine commit, Ringkamp credited the AJGA for shaping his development as a player. Launched in 2021 in partnership with TaylorMade, the Team TaylorMade Invitational draws the 72 highest-ranked junior boys in the country and rotates annually among elite private courses and resort tracks.",
        ],
      },
    ],
  },
  {
    slug: "nelly-invitational",
    name: "The Nelly Invitational presented by Chevron",
    month: "May 2026",
    startDate: "2026-05-24",
    endDate: "2026-05-26",
    officialUrl: "https://www.ajga.org/tournaments/the-nelly-invitational-presented-by-chevron",
    golfGeniusUrl: "https://www.ajga.org/tournaments/2026040/leaderboard",
    course: "The Concession Golf Club",
    location: "Bradenton, FL",
    coursePar: 72,
    courseDesigner: "Jack Nicklaus and Tony Jacklin (2006)",
    format: "54-hole stroke play",
    fieldSize: "66 players",
    eligibility: "AJGA Invitational – girls ages 12–19; invitation based on Rolex AJGA Rankings; AJGA membership required; champion receives a sponsor exemption into the Chevron Championship (LPGA major)",
    overview: "The Nelly Invitational debuted in 2024 as an AJGA all-girls invitational hosted by LPGA star Nelly Korda at The Concession Golf Club in Bradenton, Florida — a course named for Jack Nicklaus's legendary 'concession' putt to Tony Jacklin at the 1969 Ryder Cup. Chevron joined as presenting sponsor in 2025, adding a sponsor exemption into the Chevron Championship for the champion. The event has quickly established itself as one of the most prestigious stops on the junior girls calendar.",
    howToPlay: [
      { label: "AJGA Invitational field", note: "66 girls, ages 12–19, selected primarily from the Rolex AJGA Rankings; AJGA membership required." },
      { label: "Full entry criteria", href: "https://www.ajga.org/tournaments/2026040", note: "See the official tournament page for entry criteria and how to gain entry into AJGA Invitational events." },
    ],
    winners2026: { girls: "Vidhi Lakhawala" },
    pastResults: [
      { year: 2026, champion: "Vidhi Lakhawala", score: "-1 (215)", runnerUp: "Zoe Cusack / Grace Carter (T2, E, 216)" },
      { year: 2025, champion: "Shauna Liu", score: "-1 (215)", runnerUp: "Clara Ding (sudden-death playoff)" },
      { year: 2024, champion: "Aphrodite Deng", score: "-2 (214)" },
    ],
    news: [
      {
        slug: "2026-nelly-invitational-recap",
        title: "Vidhi Lakhawala Wins Third Nelly Invitational by One Shot at The Concession",
        date: "2026-05-26",
        author: "juniorgolfHQ",
        summary: "Vidhi Lakhawala closed at 1-under 215 to win the third edition of the Nelly Invitational by one shot over a tie for second at The Concession Golf Club.",
        content: [
          "Vidhi Lakhawala closed the 2026 Nelly Invitational presented by Chevron with rounds of 69-75-71 for a 1-under 215 total, winning by one shot at The Concession Golf Club in Bradenton, Florida. Zoe Cusack and Grace Carter tied for second at even-par 216, with Shauna Liu — the 2025 champion — and Amelie Zalsman tied for fourth at 1-over 217.",
          "Six players shared sixth place at 2-over 218, including Nobelle Park, Ann-Sophie Bourgault, Jude Lee, and Raegan Denton, with Iris Lee rounding out the top 10 at 3-over 219. The 66-player field saw three withdrawals over the course of the week.",
          "Now in its third year, the Nelly Invitational was launched by LPGA star Nelly Korda at The Concession Golf Club, a Jack Nicklaus and Tony Jacklin design named for Nicklaus's famous 'concession' putt to Jacklin at the 1969 Ryder Cup. Chevron joined as presenting sponsor in 2025, and the champion earns a sponsor exemption into the Chevron Championship, an LPGA major.",
        ],
      },
    ],
  },
  {
    slug: "womens-western-junior",
    name: "Women's Western Junior Championship",
    month: "June 2026",
    startDate: "2026-06-08",
    endDate: "2026-06-12",
    officialUrl: "https://womenswesternjunior.com/",
    // Host course rotates annually. Listed course reflects the 2025 host.
    course: "Meridian Hills Country Club",
    location: "Indianapolis, IN",
    coursePar: 70,
    format: "36-hole stroke play qualifying; top 16 advance to match play; four rounds of 18-hole matches to determine champion",
    fieldSize: "78 players",
    eligibility: "Girls 18 years of age or younger (not yet 19 by the final round); WHS Index not exceeding 5.4; not enrolled in college",
    overview: "First held in 1920, the Women's Western Junior is one of the oldest junior golf tournaments in the United States, conducted by the Women's Western Golf Association. Alumni have combined for over 200 LPGA Tour wins; past champions include Nancy Lopez (1972–74), Cristie Kerr (1994), and Grace Park (1993). The event rotates host courses annually.",
    note: "Host course rotates annually. 2026 host: Meridian Hills Country Club, Indianapolis, IN.",
    howToPlay: [
      {
        label: "Field entry",
        note: "78 girls qualify by WHS Index (5.4 or lower) and competitive résumé; the field plays 36 holes of stroke play, with the low 16 scorers advancing to a single-elimination match play bracket.",
      },
      {
        label: "Official entry information",
        href: "https://womenswesternjunior.com/application-information",
        note: "See the Women's Western Golf Association's official site for eligibility and application details.",
      },
    ],
    pastResults: [
      {
        year: 2026,
        champion: "Iris Lee",
        runnerUp: "Athena Singh (1-up in final)",
      },
      { year: 2025, champion: "Vidhi Lakhawala", runnerUp: "Kara An (1-up in final)" },
      { year: 2024, champion: "Samantha Brown", runnerUp: "Isabel Emanuels (4&3)" },
      { year: 2023, champion: "Suzie Tran", runnerUp: "Lisa Herman (1-up)" },
      { year: 2022, champion: "Jessica Mason" },
      { year: 2021, champion: "Mara Janess" },
    ],
    news: [
      {
        slug: "2026-womens-western-junior-recap",
        title: "13-Year-Old Iris Lee Becomes Youngest Champion in Women's Western Junior History",
        date: "2026-06-12",
        author: "juniorgolfHQ",
        summary:
          "Lee rallied from behind in the championship match to win the 99th Women's Western Junior at Meridian Hills Country Club.",
        content: [
          "Iris Lee, a 13-year-old from the Lake Nona area of Orlando, Florida, won the 99th Women's Western Junior Championship at Meridian Hills Country Club in Indianapolis, becoming the youngest champion in the tournament's history.",
          "Lee was among the top qualifiers after 36 holes of stroke play, building an early cushion before the field was cut to the top 16 for match play. She advanced through four rounds of 18-hole matches to reach the final against Athena Singh.",
          "In the championship match, Lee trailed through the first 15 holes before rallying to win the 16th and 17th holes, then closed out the victory with a par on the 18th for a 1-up win.",
          "The Women's Western Junior, first contested in 1920, is among the oldest junior golf championships in the country; its alumni have combined for more than 200 LPGA Tour victories.",
        ],
      },
    ],
  },
  {
    slug: "ajga-wyndham-invitational",
    name: "AJGA Wyndham Invitational at Sedgefield",
    month: "June 2026",
    startDate: "2026-06-08",
    endDate: "2026-06-11",
    officialUrl: "https://www.ajga.org/tournaments/2026055",
    golfGeniusUrl: "https://www.ajga.org/tournaments/2026055/leaderboard",
    course: "Sedgefield Country Club",
    location: "Greensboro, NC",
    coursePar: 70,
    courseYardage: 6982,
    courseDesigner: "Donald Ross (1926); restored by Kris Spence Golf Design (2007)",
    format: "54-hole stroke play",
    fieldSize: "72 players",
    eligibility: "AJGA Invitational – boys ages 12–19; AJGA membership required; Performance-Based Entry or exemptions",
    overview: "One of the most prestigious events on the AJGA calendar, the Wyndham Invitational has been held at historic Sedgefield Country Club for over 17 consecutive years — the only Donald Ross design in regular PGA TOUR rotation. The 2021 event made AJGA history when Maxwell Ford won, making brothers David (2020) and Maxwell Ford the first male siblings to win the same AJGA event in consecutive years.",
    howToPlay: [
      {
        label: "AJGA Invitational field",
        note: "72 boys, ages 12–19, selected via Performance-Based Entry: top 15 in the Rolex AJGA Rankings are fully exempt, top 25 need 12 performance stars, and top 50 or players who make the 36-hole cut need 8 performance stars.",
      },
      {
        label: "Full entry criteria",
        href: "https://www.ajga.org/tournaments/wyndham-invitational-presented-by-odyssey",
        note: "See the official tournament page for Performance-Based Entry requirements and how to gain entry into AJGA Invitational events.",
      },
    ],
    pastResults: [
      {
        year: 2026,
        champion: "Jessy Huebner",
        score: "-12 (65-65-68—198)",
        runnerUp: "T2: Jackson Ormond / Mingbo Jiang (-11, 199)",
      },
      { year: 2025, champion: "Willie Gordon", score: "-10 (200)" },
      { year: 2024, champion: "Asher Vargas", score: "-6 (204)" },
      { year: 2023, champion: "Blades Brown", score: "-2 (278)", runnerUp: "Henry Guan / Joshua Kim (playoff)" },
      { year: 2022, champion: "Henry Guan", score: "-7 (273)" },
      { year: 2021, champion: "Maxwell Ford", score: "-7 (273)" },
      { year: 2020, champion: "David Ford", score: "-8 (272)" },
    ],
    news: [
      {
        slug: "2026-wyndham-invitational-recap",
        title: "Jessy Huebner Fires 65-65-68 to Win 2026 Wyndham Invitational",
        date: "2026-06-11",
        author: "juniorgolfHQ",
        summary:
          "Huebner opened with back-to-back 65s and held on for a one-shot win over Jackson Ormond and Mingbo Jiang at Sedgefield.",
        content: [
          "Jessy Huebner won the 2026 Wyndham Invitational presented by Odyssey at Sedgefield Country Club, closing with a 68 for a 54-hole total of 198 (-12) and a one-shot victory.",
          "Huebner set the pace with opening rounds of 65-65 to build a comfortable cushion, then played the final round steady enough to hold off a hard-charging field on Sedgefield's Donald Ross layout.",
