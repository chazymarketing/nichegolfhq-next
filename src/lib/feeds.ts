export type FeedKey = "junior" | "midam" | "senior";

export type FeedConfig = {
  key: FeedKey;
  name: string;
  slug: string; // route slug
  tagline: string;
  rssUrl: string;
};

// TODO: replace RSS URLs with the BeeHiiv RSS URLs for each newsletter.
// If you prefer env vars, we can swap these to process.env.*.
export const FEEDS: FeedConfig[] = [
  {
    key: "junior",
    name: "juniorgolfHQ",
    slug: "juniorgolfhq",
    tagline: "Junior golf stories, recruiting, and competitive prep — beyond the mainstream.",
    rssUrl: "https://rss.beehiiv.com/feeds/ug2svosKWc.xml",
  },
  {
    key: "midam",
    name: "midamgolfHQ",
    slug: "midamgolfhq",
    tagline: "Mid-am life: tournaments, gear, travel, and the stuff nobody covers.",
    rssUrl: "https://rss.beehiiv.com/feeds/cUc6JEAOIK.xml",
  },
  {
    key: "senior",
    name: "seniorgolfHQ",
    slug: "seniorgolfhq",
    tagline: "Senior competitive golf — sharp coverage, smart prep, zero fluff.",
    rssUrl: "https://rss.beehiiv.com/feeds/JcpdwP5K1m.xml",
  },
];

export function getFeedBySlug(slug: string): FeedConfig | undefined {
  return FEEDS.find((f) => f.slug === slug);
}
