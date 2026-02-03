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
    rssUrl: "https://example.com/juniorgolfhq/rss",
  },
  {
    key: "midam",
    name: "midamgolfHQ",
    slug: "midamgolfhq",
    tagline: "Mid-am life: tournaments, gear, travel, and the stuff nobody covers.",
    rssUrl: "https://example.com/midamgolfhq/rss",
  },
  {
    key: "senior",
    name: "seniorgolfHQ",
    slug: "seniorgolfhq",
    tagline: "Senior competitive golf — sharp coverage, smart prep, zero fluff.",
    rssUrl: "https://example.com/seniorgolfhq/rss",
  },
];

export function getFeedBySlug(slug: string): FeedConfig | undefined {
  return FEEDS.find((f) => f.slug === slug);
}
