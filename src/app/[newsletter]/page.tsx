import { SiteShell } from "@/components/SiteShell";
import { IssueCard } from "@/components/IssueCard";
import { FEEDS, getFeedBySlug } from "@/lib/feeds";
import { fetchFeedItems } from "@/lib/rss";
import type { Metadata } from "next";

export function generateStaticParams() {
  return FEEDS.map((f) => ({ newsletter: f.slug }));
}

export function generateMetadata({
  params,
}: {
  params: { newsletter: string };
}): Metadata {
  const feed = getFeedBySlug(params.newsletter);
  if (!feed) return { title: "nichegolfHQ" };
  return {
    title: `${feed.name} — nichegolfHQ`,
    description: feed.tagline,
  };
}

export default async function NewsletterPage({
  params,
}: {
  params: { newsletter: string };
}) {
  const feed = getFeedBySlug(params.newsletter);

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

  return (
    <SiteShell>
      <div className="mx-auto w-full max-w-6xl px-5 py-14">
        <div className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
          <div>
            <h1 className="text-3xl font-semibold tracking-tight">{feed.name}</h1>
            <p className="mt-2 max-w-2xl text-zinc-600">{feed.tagline}</p>
          </div>

          <a
            href="#subscribe"
            className="inline-flex w-fit items-center justify-center rounded-full bg-zinc-950 px-5 py-2.5 text-sm font-medium text-white hover:bg-zinc-800"
          >
            Subscribe free
          </a>
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
          <div className="text-sm font-semibold text-zinc-900">Subscribe</div>
          <p className="mt-2 max-w-2xl text-sm text-zinc-600">
            This is a placeholder. Once you share the BeeHiiv subscribe URL/embed for {feed.name}, we’ll wire this up.
          </p>
          <div className="mt-5 flex flex-col gap-3 sm:flex-row">
            <input
              disabled
              placeholder="Email address"
              className="h-11 w-full rounded-xl border border-zinc-200 bg-zinc-50 px-4 text-sm text-zinc-500"
            />
            <button
              disabled
              className="h-11 rounded-xl bg-zinc-200 px-5 text-sm font-medium text-zinc-500"
            >
              Join free
            </button>
          </div>
          <div className="mt-2 text-xs text-zinc-500">Wiring this to BeeHiiv takes ~5 minutes once we have the embed/snippet.</div>
        </div>
      </div>
    </SiteShell>
  );
}
