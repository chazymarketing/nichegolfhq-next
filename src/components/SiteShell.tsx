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

  const logoSrc = headerBrand === "nichegolfhq" ? "/brand/nichegolfhq/logo-v2.png" : `/brand/${headerBrand}/logo.png`;

  return (
    <div className="min-h-screen bg-zinc-50 text-zinc-950 antialiased">
      <header className="sticky top-0 z-50 border-b border-zinc-200/70 bg-white/70 backdrop-blur">
        <div className="mx-auto grid w-full max-w-6xl grid-cols-3 items-center px-5 py-5">
          {/* left: menu */}
          <div className="flex items-center justify-start">
            <details className="group relative">
              <summary className="inline-flex cursor-pointer list-none items-center justify-center rounded-xl p-3 hover:bg-zinc-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-zinc-400/60">
                <span className="sr-only">Open menu</span>
                <svg aria-hidden="true" viewBox="0 0 24 24" className="h-6 w-6 text-zinc-700">
                  <path
                    fill="currentColor"
                    d="M4 6.75A.75.75 0 0 1 4.75 6h14.5a.75.75 0 0 1 0 1.5H4.75A.75.75 0 0 1 4 6.75Zm0 5.25A.75.75 0 0 1 4.75 11.25h14.5a.75.75 0 0 1 0 1.5H4.75A.75.75 0 0 1 4 12Zm.75 4.5a.75.75 0 0 0 0 1.5h14.5a.75.75 0 0 0 0-1.5H4.75Z"
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
                  <Link
                    href="https://midamgolfhq.myshopify.com/?utm_source=shop_app"
                    target="_blank"
                    rel="noreferrer"
                    className="mt-1 block rounded-xl px-3 py-2 text-sm text-zinc-800 hover:bg-zinc-50"
                  >
                    shop
                  </Link>
                  <Link href="/contact" className="mt-1 block rounded-xl px-3 py-2 text-sm text-zinc-800 hover:bg-zinc-50">
                    contact us
                  </Link>
                </div>
              </div>
            </details>
          </div>

          {/* center: brand logo */}
          <div className="flex items-center justify-center">
            <Link href={headerBrand === "nichegolfhq" ? "/" : `/${headerBrand}`} className="rounded-xl px-2 py-1">
              <Image
                src={logoSrc}
                alt={headerBrand === "nichegolfhq" ? "nichegolfHQ" : headerBrand}
                width={300}
                height={60}
                priority
                className="h-11 w-auto md:h-14"
              />
            </Link>
          </div>

          {/* right: subscribe */}
          <div className="flex items-center justify-end">
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
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
              {(Object.keys(SOCIAL) as BrandKey[]).map((key) => {
                const label =
                  key === "midamgolfhq" ? "midamgolfHQ" : key === "juniorgolfhq" ? "juniorgolfHQ" : "seniorgolfHQ";
                const x = SOCIAL[key].x;
                const ig = SOCIAL[key].instagram;
                if (!x && !ig) return null;

                return (
                  <div
                    key={key}
                    className="flex items-center justify-between rounded-2xl border border-zinc-200 bg-white px-4 py-3"
                  >
                    <div className="text-sm font-medium text-zinc-900">{label}</div>

                    <div className="flex items-center gap-1">
                      {x ? (
                        <a
                          className="inline-flex h-9 w-9 items-center justify-center rounded-full text-zinc-700 hover:bg-zinc-100 hover:text-zinc-950"
                          href={x}
                          target="_blank"
                          rel="noreferrer"
                          aria-label={`${label} on X`}
                          title="X"
                        >
                          <svg aria-hidden="true" viewBox="0 0 24 24" className="h-4 w-4 fill-current">
                            <path d="M18.901 1.153h3.68l-8.04 9.19L24 22.847h-7.406l-5.8-7.584-6.636 7.584H.47l8.6-9.83L0 1.153h7.594l5.243 6.932 6.064-6.932Zm-1.29 19.493h2.04L6.49 3.24H4.304l13.307 17.406Z" />
                          </svg>
                          <span className="sr-only">X</span>
                        </a>
                      ) : null}

                      {ig ? (
                        <a
                          className="inline-flex h-9 w-9 items-center justify-center rounded-full text-zinc-700 hover:bg-zinc-100 hover:text-zinc-950"
                          href={ig}
                          target="_blank"
                          rel="noreferrer"
                          aria-label={`${label} on Instagram`}
                          title="Instagram"
                        >
                          <svg aria-hidden="true" viewBox="0 0 24 24" className="h-4 w-4 fill-current">
                            <path d="M7.5 2h9A5.5 5.5 0 0 1 22 7.5v9A5.5 5.5 0 0 1 16.5 22h-9A5.5 5.5 0 0 1 2 16.5v-9A5.5 5.5 0 0 1 7.5 2Zm0 2A3.5 3.5 0 0 0 4 7.5v9A3.5 3.5 0 0 0 7.5 20h9a3.5 3.5 0 0 0 3.5-3.5v-9A3.5 3.5 0 0 0 16.5 4h-9ZM12 7a5 5 0 1 1 0 10 5 5 0 0 1 0-10Zm0 2a3 3 0 1 0 0 6 3 3 0 0 0 0-6Zm6.2-2.3a1.1 1.1 0 1 1 0 2.2 1.1 1.1 0 0 1 0-2.2Z" />
                          </svg>
                          <span className="sr-only">Instagram</span>
                        </a>
                      ) : null}
                    </div>
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
