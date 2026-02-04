import Image from "next/image";
import { SiteShell } from "@/components/SiteShell";
import { IssueCard } from "@/components/IssueCard";
import { BeehiivEmbed } from "@/components/BeehiivEmbed";
import { FEEDS, getFeedBySlug } from "@/lib/feeds";
import { fetchFeedItems } from "@/lib/rss";
import type { Metadata } from "next";

export function generateStaticParams() {
  return FEEDS.map((f) => ({ newsletter: f.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: { newsletter: string } | Promise<{ newsletter: string }>;
}): Promise<Metadata> {
  const resolved = await Promise.resolve(params);
  const feed = getFeedBySlug(resolved.newsletter);
  if (!feed) return { title: "nichegolfHQ" };
  return {
    title: `${feed.name} — nichegolfHQ`,
    description: feed.tagline,
  };
}

export default async function NewsletterPage({
  params,
}: {
  params: { newsletter: string } | Promise<{ newsletter: string }>;
}) {
  const resolved = await Promise.resolve(params);
  const feed = getFeedBySlug(resolved.newsletter);

  if (!feed) {
    return (
      <SiteShell>
        <div className="mx-auto w-full max-w-6xl px-5 py-16">
          <h1 className="text-2xl font-semibold">Not found</h1>
        </div>
      </SiteShell>
    );
  }

  const items = await fetchFeedItems(feed.rssUrl, 12);
  const logoSrc = `/brand/${feed.slug}/logo.png`;

  return (
    <SiteShell brandSlug={feed.slug}>
      <div className="mx-auto w-full max-w-6xl px-5 py-14">
        <div className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
          <div>
            <div className="flex items-center gap-3">
              <Image
                src={logoSrc}
                alt={feed.name}
                width={320}
                height={64}
                className="h-32 w-auto md:h-40"
              />
              <h1 className="sr-only">{feed.name}</h1>
            </div>
            {/* tagline removed */}
          </div>

          {/* subscribe button removed (header already has one) */}
        </div>

        <div className="mt-10 grid grid-cols-1 gap-4 md:grid-cols-2">
          {items.length ? (
            items.map((it) => <IssueCard key={it.link + it.title} item={it} />)
          ) : (
            <div className="rounded-2xl border border-zinc-200 bg-white p-6 text-sm text-zinc-600">
              No posts yet (or RSS URL not configured). Once we drop in the BeeHiiv RSS URL, this will populate automatically.
            </div>
          )}
        </div>

        <div id="subscribe" className="mt-14 rounded-3xl border border-zinc-200 bg-white p-8">
          <div className="flex flex-col gap-6 md:flex-row md:items-start md:justify-between">
            <div className="max-w-xl">
              <div className="text-sm font-semibold text-zinc-900">Subscribe</div>
              <p className="mt-2 text-sm text-zinc-600">
                Get {feed.name} in your inbox. Free.
              </p>
              <p className="mt-2 text-xs text-zinc-500">No spam. Unsubscribe anytime.</p>
            </div>

            <div className="w-full md:max-w-sm">
              <BeehiivEmbed
                src={feed.subscribeEmbedUrl}
                height={feed.subscribeEmbedHeight}
                title={`${feed.name} subscribe`}
              />
            </div>
          </div>
        </div>
      </div>
    </SiteShell>
  );
}
