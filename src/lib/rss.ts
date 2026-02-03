import Parser from "rss-parser";

export type RssItem = {
  title: string;
  link: string;
  isoDate?: string;
  contentSnippet?: string;
};

const parser = new Parser();

export async function fetchFeedItems(rssUrl: string, limit = 8): Promise<RssItem[]> {
  // NOTE: BeeHiiv RSS is plain XML. We fetch it server-side.
  // If any feed blocks fetch, we can route via a small proxy API route.
  const res = await fetch(rssUrl, {
    // revalidate keeps the site snappy + reduces BeeHiiv hits
    next: { revalidate: 300 },
    headers: {
      "user-agent": "nichegolfHQ (Next.js)" ,
    },
  });

  if (!res.ok) {
    return [];
  }

  const xml = await res.text();
  const feed = await parser.parseString(xml);

  return (feed.items || [])
    .slice(0, limit)
    .map((it) => ({
      title: it.title || "(untitled)",
      link: it.link || "#",
      isoDate: (it as any).isoDate,
      contentSnippet: (it as any).contentSnippet,
    }));
}
