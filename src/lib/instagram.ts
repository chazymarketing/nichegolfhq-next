export type InstagramMediaItem = {
  id: string;
  caption?: string;
  media_type?: string;
  media_url?: string;
  thumbnail_url?: string;
  permalink?: string;
  timestamp?: string;
};

export async function fetchInstagramMedia(brandSlug: string): Promise<{ ok: boolean; items: InstagramMediaItem[] }> {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "";
  const url = baseUrl
    ? `${baseUrl.replace(/\/$/, "")}/api/social/instagram?brand=${encodeURIComponent(brandSlug)}`
    : `/api/social/instagram?brand=${encodeURIComponent(brandSlug)}`;

  // In production, NEXT_PUBLIC_SITE_URL should be set; otherwise this will still work on the client,
  // but this function is intended for server components.
  const res = await fetch(url, { next: { revalidate: 1800 } });
  if (!res.ok) return { ok: false, items: [] };

  const json = await res.json();
  if (!json?.ok || !Array.isArray(json?.items)) return { ok: false, items: [] };
  return { ok: true, items: json.items as InstagramMediaItem[] };
}
