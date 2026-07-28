import { SiteShell } from "@/components/SiteShell";
import { BeehiivEmbed } from "@/components/BeehiivEmbed";
import { getFeedBySlug } from "@/lib/feeds";

const ORDER = ["juniorgolfhq", "midamgolfhq", "seniorgolfhq"] as const;

// Shared height so all three subscribe boxes render at the same size on this
// page. Uses the tallest embed so no form is clipped. Per-channel heights still
// apply on individual channel home pages.
const SUBSCRIBE_EMBED_HEIGHT = 760;

export const metadata = {
  title: "Subscribe",
  description:
    "Subscribe to nichegolfHQ newsletters covering junior, mid-amateur, and senior amateur golf.",
  alternates: {
    canonical: "/subscribe",
  },
};

export default function SubscribePage() {
  const feeds = ORDER.map((slug) => {
    const feed = getFeedBySlug(slug);
    if (!feed) throw new Error(`Missing feed config for ${slug}`);
    return feed;
  });

  return (
    <SiteShell>
      <div className="mx-auto w-full max-w-3xl px-3 py-14 text-center sm:px-6">
        <h1 className="sr-only">Subscribe</h1>
        <div className="flex flex-col gap-10">
          {feeds.map((feed) => (
            <section key={feed.slug} className="flex flex-col gap-4">
              <div className="text-xs text-zinc-500">{feed.name}</div>
              <div className="mx-auto w-full">
                <BeehiivEmbed
                  src={feed.subscribeEmbedUrl}
                  height={SUBSCRIBE_EMBED_HEIGHT}
                  title={`${feed.name} subscribe`}
                />
              </div>
            </section>
          ))}
        </div>
      </div>
    </SiteShell>
  );
}
