import Link from "next/link";
import type { Metadata } from "next";
import { SiteShell } from "@/components/SiteShell";
import { BeehiivEmbed } from "@/components/BeehiivEmbed";
import { FEEDS, getFeedBySlug } from "@/lib/feeds";
import { fetchFeedItems } from "@/lib/rss";

export function generateStaticParams() {
  // Keep this lightweight for now. We can expand to generate recent issues later.
  return [];
}

function issueSlugFromUrl(urlStr: string): string {
  try {
    const u = new URL(urlStr);
    const parts = u.pathname.split("/").filter(Boolean);
    return parts[parts.length - 1] || "issue";
  } catch {
    return "issue";
  }
}

function cleanSnippet(input?: string) {
  if (!input) return "";
  return input
    .replace(/\r\n/g, "\n")
    .replace(/\s*[—–\-_=*•·]{3,}\s*/g, " ")
    .replace(/\n{3,}/g, "\n\n")
    .replace(/\s{2,}/g, " ")
    .trim();
}

function sanitizeHtml(input?: string) {
  if (!input) return "";
  // Minimal, pragmatic sanitizer (no deps):
  // - remove scripts/styles/iframes
  // - strip on* handlers
  // - strip javascript: URLs
  // This is not perfect, but is a good MVP safety baseline.
  let html = input;
  html = html.replace(/<\s*(script|style|iframe)[^>]*>[\s\S]*?<\s*\/\s*\1\s*>/gi, "");
  html = html.replace(/\son\w+\s*=\s*"[^"]*"/gi, "");
  html = html.replace(/\son\w+\s*=\s*'[^']*'/gi, "");
  html = html.replace(/\son\w+\s*=\s*[^\s>]+/gi, "");
  html = html.replace(/(href|src)\s*=\s*"\s*javascript:[^"]*"/gi, "$1=\"#\"");
  html = html.replace(/(href|src)\s*=\s*'\s*javascript:[^']*'/gi, "$1='#'");
  return html;
}

export async function generateMetadata({
  params,
}: {
  params: { newsletter: string; issue: string } | Promise<{ newsletter: string; issue: string }>;
}): Promise<Metadata> {
  const resolved = await Promise.resolve(params);
  const feed = getFeedBySlug(resolved.newsletter);
  if (!feed) return { title: "nichegolfHQ" };

  const items = await fetchFeedItems(feed.rssUrl, 25);
  const found = items.find((it) => issueSlugFromUrl(it.link) === resolved.issue) || items[0];

  const description = cleanSnippet(found?.contentSnippet) || feed.tagline;
  return {
    title: found?.title ? `${found.title}` : `${feed.name}`,
    description,
    alternates: {
      canonical: `/${feed.slug}/issue/${resolved.issue}`,
    },
    openGraph: {
      title: found?.title || feed.name,
      description,
      type: "article",
      images: found?.imageUrl ? [{ url: found.imageUrl }] : undefined,
    },
  };
}

export default async function IssuePage({
  params,
}: {
  params: { newsletter: string; issue: string } | Promise<{ newsletter: string; issue: string }>;
}) {
  const resolved = await Promise.resolve(params);
  const feed = getFeedBySlug(resolved.newsletter);

  if (!feed) {
    return (
      <SiteShell>
        <div className="mx-auto w-full max-w-3xl px-5 py-14">
          <h1 className="text-2xl font-semibold tracking-tight">Not found</h1>
        </div>
      </SiteShell>
    );
  }

  const items = await fetchFeedItems(feed.rssUrl, 25);
  const found = items.find((it) => issueSlugFromUrl(it.link) === resolved.issue);

  if (!found) {
    return (
      <SiteShell brandSlug={feed.slug}>
        <div className="mx-auto w-full max-w-3xl px-5 py-14">
          <h1 className="text-2xl font-semibold tracking-tight">Issue not found</h1>
          <p className="mt-2 text-sm text-zinc-600">This issue may be too old for the current RSS fetch window.</p>
          <div className="mt-6">
            <Link href={`/${feed.slug}`} className="text-sm font-medium text-zinc-900 underline underline-offset-2">
              back to {feed.name}
            </Link>
          </div>
        </div>
      </SiteShell>
    );
  }

  const snippet = cleanSnippet(found.contentSnippet);
  const contentHtml = sanitizeHtml(found.contentHtml);

  return (
    <SiteShell brandSlug={feed.slug}>
      <article className="mx-auto w-full max-w-3xl px-5 py-16">
        <div className="text-xs font-semibold uppercase tracking-wider text-zinc-600">{feed.name}</div>
        <h1 className="mt-3 text-3xl font-semibold tracking-tight md:text-4xl">{found.title}</h1>
        <div className="mt-3 text-sm text-zinc-500">{found.isoDate ? new Date(found.isoDate).toLocaleDateString() : ""}</div>

        {contentHtml ? (
          <div
            className="prose prose-zinc mx-auto mt-10 max-w-none leading-7 prose-headings:tracking-tight prose-p:leading-7 prose-p:my-4 prose-ul:my-4 prose-ol:my-4 prose-li:my-1 prose-a:font-medium prose-a:text-zinc-950 prose-a:underline prose-a:underline-offset-4"
            // eslint-disable-next-line react/no-danger
            dangerouslySetInnerHTML={{ __html: contentHtml }}
          />
        ) : snippet ? (
          <p className="mt-8 text-base leading-7 text-zinc-700">{snippet}</p>
        ) : null}

        <div className="mt-12 rounded-3xl border border-zinc-200 bg-white p-8" id="subscribe">
          <div className="text-sm font-semibold text-zinc-900">Subscribe</div>
          <p className="mt-2 text-sm text-zinc-600">Get {feed.name} in your inbox. Free.</p>
          <div className="mt-6">
            <BeehiivEmbed src={feed.subscribeEmbedUrl} height={feed.subscribeEmbedHeight} title={`${feed.name} subscribe`} />
          </div>
        </div>

        <div className="mt-10">
          <Link href={`/${feed.slug}`} className="text-sm font-medium text-zinc-900 underline underline-offset-2 hover:text-zinc-700">
            back to {feed.name}
          </Link>
        </div>
      </article>

      {/* Structured data */}
      <script
        type="application/ld+json"
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline: found.title,
            datePublished: found.isoDate,
            publisher: { "@type": "Organization", name: "nichegolfHQ" },
            mainEntityOfPage: `https://www.nichegolfhq.com/${feed.slug}/issue/${resolved.issue}`,
          }),
        }}
      />
    </SiteShell>
  );
}
