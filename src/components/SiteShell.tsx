import Link from "next/link";
import { ThemeToggle } from "@/components/ThemeToggle";

const SOCIAL = {
  midamgolfhq: { x: "https://www.x.com/midamgolfhq", instagram: "https://www.instagram.com/midamgolfhq" },
  juniorgolfhq: { x: "https://www.x.com/juniorgolfhq", instagram: "https://www.instagram.com/juniorgolfhq" },
  seniorgolfhq: { x: "https://www.x.com/seniorgolfhq", instagram: "https://www.instagram.com/seniorgolfhq" },
} as const;

type BrandKey = keyof typeof SOCIAL;

export function SiteShell({ children }: { children: React.ReactNode }) {
  const hasAnySocial = (Object.keys(SOCIAL) as BrandKey[]).some(
    (k) => Boolean(SOCIAL[k].x) || Boolean(SOCIAL[k].instagram)
  );

  return (
    <div className="min-h-screen bg-zinc-50 text-zinc-950 antialiased dark:bg-black dark:text-zinc-50">
      <header className="sticky top-0 z-50 border-b border-zinc-200/70 bg-white/70 backdrop-blur dark:border-zinc-800/70 dark:bg-black/60">
        <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-5 py-4">
          <Link href="/" className="font-semibold tracking-tight">
            nichegolfHQ
          </Link>

          <nav className="hidden items-center gap-6 text-sm text-zinc-700 md:flex dark:text-zinc-300">
            <Link href="/midamgolfhq" className="hover:text-zinc-950 dark:hover:text-zinc-50">
              midamgolfHQ
            </Link>
            <Link href="/juniorgolfhq" className="hover:text-zinc-950 dark:hover:text-zinc-50">
              juniorgolfHQ
            </Link>
            <Link href="/seniorgolfhq" className="hover:text-zinc-950 dark:hover:text-zinc-50">
              seniorgolfHQ
            </Link>
            <Link href="/sponsors" className="hover:text-zinc-950 dark:hover:text-zinc-50">
              sponsor
            </Link>
          </nav>

          <div className="flex items-center gap-2">
            <a
              href="#subscribe"
              className="rounded-full bg-zinc-950 px-4 py-2 text-sm font-medium text-white hover:bg-zinc-800 dark:bg-zinc-50 dark:text-zinc-950 dark:hover:bg-white"
            >
              Subscribe
            </a>
            <ThemeToggle />
          </div>
        </div>
      </header>

      <main>{children}</main>

      <footer className="border-t border-zinc-200 bg-white dark:border-zinc-800 dark:bg-black">
        <div className="mx-auto w-full max-w-6xl px-5 py-8">
          {hasAnySocial ? (
            <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
              {(Object.keys(SOCIAL) as BrandKey[]).map((key) => {
                const label =
                  key === "midamgolfhq" ? "midamgolfHQ" : key === "juniorgolfhq" ? "juniorgolfHQ" : "seniorgolfHQ";
                const x = SOCIAL[key].x;
                const ig = SOCIAL[key].instagram;
                if (!x && !ig) return null;

                return (
                  <div key={key} className="flex items-center gap-3 text-sm text-zinc-600 dark:text-zinc-400">
                    <span className="text-zinc-900 dark:text-zinc-50">{label}</span>
                    {x ? (
                      <a
                        className="underline decoration-zinc-300 underline-offset-4 hover:text-zinc-950 dark:decoration-zinc-700 dark:hover:text-zinc-50"
                        href={x}
                        target="_blank"
                        rel="noreferrer"
                      >
                        X
                      </a>
                    ) : null}
                    {ig ? (
                      <a
                        className="underline decoration-zinc-300 underline-offset-4 hover:text-zinc-950 dark:decoration-zinc-700 dark:hover:text-zinc-50"
                        href={ig}
                        target="_blank"
                        rel="noreferrer"
                      >
                        Instagram
                      </a>
                    ) : null}
                  </div>
                );
              })}
            </div>
          ) : (
            <div className="text-sm text-zinc-600 dark:text-zinc-400">Social links coming next.</div>
          )}
        </div>
      </footer>
    </div>
  );
}
