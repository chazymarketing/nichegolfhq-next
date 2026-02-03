import Image from "next/image";
import type { RssItem } from "@/lib/rss";

export function IssueCard({ item }: { item: RssItem }) {
  return (
    <a
      href={item.link}
      target="_blank"
      rel="noreferrer"
      className="group overflow-hidden rounded-2xl border border-zinc-200 bg-white transition hover:border-zinc-300 hover:shadow-sm dark:border-zinc-800 dark:bg-black"
    >
      {item.imageUrl ? (
        <div className="relative aspect-[16/10] w-full overflow-hidden bg-zinc-100 dark:bg-zinc-900">
          <Image
            src={item.imageUrl}
            alt=""
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            className="object-cover transition duration-300 group-hover:scale-[1.02]"
          />
        </div>
      ) : null}

      <div className="p-5">
        <div className="text-sm text-zinc-500 dark:text-zinc-400">
          {item.isoDate ? new Date(item.isoDate).toLocaleDateString() : ""}
        </div>
        <div className="mt-2 font-semibold tracking-tight group-hover:underline">
          {item.title}
        </div>
        {item.contentSnippet ? (
          <p className="mt-2 line-clamp-3 text-sm text-zinc-600 dark:text-zinc-400">
            {item.contentSnippet}
          </p>
        ) : null}
      </div>
    </a>
  );
}
