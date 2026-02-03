import Image from "next/image";
import { SiteShell } from "@/components/SiteShell";
import { BeehiivEmbed } from "@/components/BeehiivEmbed";
import { getFeedBySlug } from "@/lib/feeds";

const ORDER = ["juniorgolfhq", "midamgolfhq", "seniorgolfhq"] as const;

export default function SubscribePage() {
  const feeds = ORDER.map((slug) => {
    const feed = getFeedBySlug(slug);
    if (!feed) throw new Error(`Missing feed config for ${slug}`);
    return feed;
  });

  return (
    <SiteShell>
      <div className="mx-auto w-full max-w-2xl px-5 py-14 text-center">
        <h1 className="sr-only">Subscribe</h1>

        <div className="flex flex-col gap-10">
          {feeds.map((feed) => (
            <section key={feed.slug} className="flex flex-col gap-4">
              <div className="flex flex-col items-center gap-3">
                <Image
                  src={`/brand/${feed.slug}/logo.png`}
                  alt={feed.name}
                  width={320}
                  height={64}
                  className="h-7 w-auto dark:invert"
                />
                <div className="text-xs text-zinc-500">{feed.name}</div>
              </div>

              <div className="mx-auto w-full md:max-w-lg">
                <BeehiivEmbed
                src={feed.subscribeEmbedUrl}
                height={feed.subscribeEmbedHeight}
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
