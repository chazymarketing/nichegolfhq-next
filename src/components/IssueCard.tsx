import type { RssItem } from "@/lib/rss";

export function IssueCard({ item }: { item: RssItem }) {
  return (
    <a
      href={item.link}
      target="_blank"
      rel="noreferrer"
      className="group rounded-2xl border border-zinc-200 bg-white p-5 transition hover:border-zinc-300 hover:shadow-sm"
    >
      <div className="text-sm text-zinc-500">
        {item.isoDate ? new Date(item.isoDate).toLocaleDateString() : ""}
      </div>
      <div className="mt-2 font-semibold tracking-tight group-hover:underline">
        {item.title}
      </div>
      {item.contentSnippet ? (
        <p className="mt-2 line-clamp-3 text-sm text-zinc-600">{item.contentSnippet}</p>
      ) : null}
    </a>
  );
}
