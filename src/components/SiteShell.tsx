import Image from "next/image";
import Link from "next/link";

const SOCIAL = {
  midamgolfhq: { x: "https://www.x.com/midamgolfhq", instagram: "https://www.instagram.com/midamgolfhq" },
  juniorgolfhq: { x: "https://www.x.com/juniorgolfhq", instagram: "https://www.instagram.com/juniorgolfhq" },
  seniorgolfhq: { x: "https://www.x.com/seniorgolfhq", instagram: "https://www.instagram.com/seniorgolfhq" },
} as const;

type BrandKey = keyof typeof SOCIAL;

export function SiteShell({
  children,
  brandSlug,
}: {
  children: React.ReactNode;
  brandSlug?: string;
}) {
  const hasAnySocial = (Object.keys(SOCIAL) as BrandKey[]).some(
    (k) => Boolean(SOCIAL[k].x) || Boolean(SOCIAL[k].instagram)
  );

  const headerBrand =
    brandSlug === "midamgolfhq" || brandSlug === "juniorgolfhq" || brandSlug === "seniorgolfhq"
      ? brandSlug
      : "nichegolfhq";

  return (
    <div className="min-h-screen bg-zinc-50 text-zinc-950 antialiased">
      <header className="sticky top-0 z-50 border-b border-zinc-200/70 bg-white/70 backdrop-blur">
        <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-5 py-5">
          <details className="group relative">
            <summary className="flex cursor-pointer list-none items-center gap-2 rounded-xl px-3 py-2 hover:bg-zinc-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-zinc-400/60">
              <Image
                src={`/brand/${headerBrand}/logo.png`}
                alt={headerBrand === "nichegolfhq" ? "nichegolfHQ" : headerBrand}
                width={300}
                height={60}
                priority
                className="h-10 w-auto md:h-12"
              />
              <span className="sr-only">Open brand menu</span>
              <svg
                aria-hidden="true"
                viewBox="0 0 20 20"
                className="h-5 w-5 text-zinc-500 transition-transform duration-150 group-open:rotate-180"
              >
                <path
                  fill="currentColor"
                  d="M5.25 7.5a.75.75 0 0 1 1.06 0L10 11.19l3.69-3.69a.75.75 0 1 1 1.06 1.06l-4.22 4.22a.75.75 0 0 1-1.06 0L5.25 8.56a.75.75 0 0 1 0-1.06Z"
                />
              </svg>
            </summary>

            <div className="absolute left-0 mt-2 w-64 overflow-hidden rounded-2xl border border-zinc-200 bg-white shadow-lg shadow-zinc-900/10">
              <div className="p-2">
                <Link href="/" className="block rounded-xl px-3 py-2 text-sm text-zinc-800 hover:bg-zinc-50">
                  home
                </Link>
                <Link
                  href="/midamgolfhq"
                  className="mt-1 block rounded-xl px-3 py-2 text-sm text-zinc-800 hover:bg-zinc-50"
                >
                  midamgolfHQ
                </Link>
                <Link
                  href="/juniorgolfhq"
                  className="mt-1 block rounded-xl px-3 py-2 text-sm text-zinc-800 hover:bg-zinc-50"
                >
                  juniorgolfHQ
                </Link>
                <Link
                  href="/seniorgolfhq"
                  className="mt-1 block rounded-xl px-3 py-2 text-sm text-zinc-800 hover:bg-zinc-50"
                >
                  seniorgolfHQ
                </Link>

                <div className="my-2 border-t border-zinc-200" />

                <Link href="/sponsors" className="block rounded-xl px-3 py-2 text-sm text-zinc-800 hover:bg-zinc-50">
                  sponsor
                </Link>
                <Link href="/contact" className="mt-1 block rounded-xl px-3 py-2 text-sm text-zinc-800 hover:bg-zinc-50">
                  contact us
                </Link>
              </div>
            </div>
          </details>

          <div className="hidden md:block" />

          <div className="flex items-center gap-2">
            <Link
              href="/subscribe"
              className="rounded-full bg-zinc-950 px-4 py-2 text-sm font-medium text-white hover:bg-zinc-800"
            >
              subscribe
            </Link>
          </div>
        </div>
      </header>

      <main>{children}</main>

      <footer className="border-t border-zinc-200 bg-white">
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
                  <div key={key} className="flex items-center gap-3 text-sm text-zinc-600">
                    <span className="text-zinc-900">{label}</span>
                    {x ? (
                      <a
                        className="underline decoration-zinc-300 underline-offset-4 hover:text-zinc-950"
                        href={x}
                        target="_blank"
                        rel="noreferrer"
                      >
                        X
                      </a>
                    ) : null}
                    {ig ? (
                      <a
                        className="underline decoration-zinc-300 underline-offset-4 hover:text-zinc-950"
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
            <div className="text-sm text-zinc-600">Social links coming next.</div>
          )}
        </div>
      </footer>
    </div>
  );
}
