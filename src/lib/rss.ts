import Parser from "rss-parser";

export type RssItem = {
  title: string;
  link: string;
  isoDate?: string;
  contentSnippet?: string;
  contentHtml?: string;
  imageUrl?: string;
};

const parser = new Parser({
  customFields: {
    item: [
      ["media:thumbnail", "mediaThumbnail"],
      ["media:content", "mediaContent"],
      ["content:encoded", "contentEncoded"],
    ],
  },
});

function pickImageUrl(it: any): string | undefined {
  // Common RSS patterns: enclosure, media:thumbnail, media:content.
  if (it?.enclosure?.url) return String(it.enclosure.url);

  const mt = it?.mediaThumbnail;
  if (typeof mt === "string") return mt;
  if (mt?.$?.url) return String(mt.$.url);
  if (mt?.url) return String(mt.url);

  const mc = it?.mediaContent;
  // rss-parser may give media:content as an array or object
  const mcArr = Array.isArray(mc) ? mc : mc ? [mc] : [];
  for (const x of mcArr) {
    if (x?.$?.url) return String(x.$.url);
    if (x?.url) return String(x.url);
  }

  return undefined;
}

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
    .map((it) => {
      const anyIt = it as any;
      const imageUrl = pickImageUrl(anyIt);

      // BeeHiiv sometimes puts a hero image in the HTML body too; if needed we can
      // parse contentEncoded and extract first <img>. Keeping it simple for now.

      const contentHtml =
        typeof anyIt?.contentEncoded === "string"
          ? anyIt.contentEncoded
          : typeof (it as any)?.content === "string"
            ? (it as any).content
            : undefined;

      return {
        title: it.title || "(untitled)",
        link: it.link || "#",
        isoDate: anyIt.isoDate,
        contentSnippet: anyIt.contentSnippet,
        contentHtml,
        imageUrl,
      };
    });
}
