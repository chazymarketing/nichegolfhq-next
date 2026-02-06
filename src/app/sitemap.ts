import type { MetadataRoute } from "next";
import { FEEDS } from "@/lib/feeds";

const BASE = "https://www.nichegolfhq.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const staticUrls = ["/", "/subscribe", "/sponsors", "/contact"].map((path) => ({
    url: `${BASE}${path}`,
    lastModified: now,
    changeFrequency: "daily" as const,
    priority: path === "/" ? 1 : 0.6,
  }));

  const brandUrls = FEEDS.map((f) => ({
    url: `${BASE}/${f.slug}`,
    lastModified: now,
    changeFrequency: "daily" as const,
    priority: 0.7,
  }));

  return [...staticUrls, ...brandUrls];
}
