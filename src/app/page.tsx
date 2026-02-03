import Link from "next/link";
import { SiteShell } from "@/components/SiteShell";
import { IssueCard } from "@/components/IssueCard";
import { FEEDS } from "@/lib/feeds";
import { fetchFeedItems } from "@/lib/rss";

export default async function Home() {
  const results = await Promise.all(
    FEEDS.map(async (f) => ({ feed: f, items: await fetchFeedItems(f.rssUrl, 4) }))
  );

  // Homepage “Latest issue” should always feature midamgolfHQ.
  const midam = results.find((r) => r.feed.slug === "midamgolfhq");
  const featured = midam
    ? midam.items
        .map((it) => ({ ...it, feedName: midam.feed.name, feedSlug: midam.feed.slug }))
        .sort((a, b) => {
          const da = a.isoDate ? new Date(a.isoDate).getTime() : 0;
          const db = b.isoDate ? new Date(b.isoDate).getTime() : 0;
          return db - da;
        })
        .slice(0, 1)[0]
    : undefined;

  return (
    <SiteShell>
      <section className="mx-auto w-full max-w-6xl px-5 py-16">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 md:items-center">
          <div>
            <div className="text-xs font-semibold uppercase tracking-wider text-zinc-600">
              Competitive golf beyond the mainstream
            </div>
            <h1 className="mt-3 text-4xl font-semibold tracking-tight md:text-5xl">
              Overlooked stories. Sharp opinions. Zero fluff.
            </h1>
            <p className="mt-4 max-w-xl text-lg leading-8 text-zinc-600">
              nichegolfHQ pulls together three newsletters for serious golfers (mid-am, senior, junior).
            </p>

            <div className="mt-7 flex flex-col gap-3 sm:flex-row">
              <Link
                href="#latest"
                className="inline-flex items-center justify-center rounded-full bg-zinc-950 px-6 py-3 text-sm font-medium text-white hover:bg-zinc-800"
              >
                Browse newsletters
              </Link>
              <Link
                href="/subscribe"
                className="inline-flex items-center justify-center rounded-full border border-zinc-300 bg-white px-6 py-3 text-sm font-medium text-zinc-900 hover:bg-zinc-50"
              >
                Subscribe free
              </Link>
            </div>
          </div>

          <div className="rounded-3xl border border-zinc-200 bg-white p-6">
            <div className="text-sm font-semibold">Latest issue</div>
            <p className="mt-1 text-sm text-zinc-600">Most recent post across all three newsletters.</p>
            <div className="mt-4">
              {featured ? (
                <IssueCard item={featured} />
              ) : (
                <div className="rounded-2xl border border-zinc-200 bg-zinc-50 p-5 text-sm text-zinc-600">
                  Once we plug in the BeeHiiv RSS URLs, this will populate automatically.
                </div>
              )}
              {featured?.feedSlug ? (
                <div className="mt-3 text-xs text-zinc-500">
                  From{" "}
                  <Link className="underline hover:text-zinc-900" href={`/${featured.feedSlug}`}>
                    {featured.feedName}
                  </Link>
                </div>
              ) : null}
            </div>
          </div>
        </div>
      </section>

      <section id="latest" className="mx-auto w-full max-w-6xl px-5 pb-20">
        <div className="flex items-end justify-between">
          <h2 className="text-xl font-semibold tracking-tight">Newsletters</h2>
          <Link href="/sponsors" className="text-sm text-zinc-600 hover:text-zinc-950">
            Sponsor →
          </Link>
        </div>

        <div className="mt-6 grid grid-cols-1 gap-10">
          {results.map(({ feed, items }) => (
            <div key={feed.slug} className="rounded-3xl border border-zinc-200 bg-white p-6">
              <div className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
                <div>
                  <div className="text-sm font-semibold">{feed.name}</div>
                  <div className="mt-1 text-sm text-zinc-600">{feed.tagline}</div>
                </div>

                <div className="flex flex-col gap-2 sm:flex-row">
                  <Link
                    href={`/${feed.slug}`}
                    className="inline-flex items-center justify-center rounded-full border border-zinc-300 bg-white px-4 py-2 text-sm font-medium text-zinc-900 hover:bg-zinc-50"
                  >
                    View archive
                  </Link>
                  <Link
                    href={`/${feed.slug}#subscribe`}
                    className="inline-flex items-center justify-center rounded-full bg-zinc-950 px-4 py-2 text-sm font-medium text-white hover:bg-zinc-800"
                  >
                    Subscribe
                  </Link>
                </div>
              </div>

              <div className="mt-5 grid grid-cols-1 gap-4 md:grid-cols-2">
                {items.length ? (
                  items.map((it) => <IssueCard key={it.link + it.title} item={it} />)
                ) : (
                  <div className="rounded-2xl border border-zinc-200 bg-zinc-50 p-5 text-sm text-zinc-600">
                    No posts yet (or RSS URL not configured).
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </section>
    </SiteShell>
  );
}
