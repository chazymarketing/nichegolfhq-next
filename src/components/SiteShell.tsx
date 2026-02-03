import Link from "next/link";

export function SiteShell({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-zinc-50 text-zinc-950">
      <header className="sticky top-0 z-50 border-b border-zinc-200 bg-zinc-50/80 backdrop-blur">
        <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-5 py-4">
          <Link href="/" className="font-semibold tracking-tight">
            nichegolfHQ
          </Link>

          <nav className="hidden items-center gap-6 text-sm text-zinc-700 md:flex">
            <Link href="/midamgolfhq" className="hover:text-zinc-950">
              midamgolfHQ
            </Link>
            <Link href="/juniorgolfhq" className="hover:text-zinc-950">
              juniorgolfHQ
            </Link>
            <Link href="/seniorgolfhq" className="hover:text-zinc-950">
              seniorgolfHQ
            </Link>
            <Link href="/sponsors" className="hover:text-zinc-950">
              sponsor
            </Link>
          </nav>

          <div className="flex items-center gap-2">
            <a
              href="#subscribe"
              className="rounded-full bg-zinc-950 px-4 py-2 text-sm font-medium text-white hover:bg-zinc-800"
            >
              Subscribe
            </a>
          </div>
        </div>
      </header>

      <main>{children}</main>

      <footer className="border-t border-zinc-200">
        <div className="mx-auto grid w-full max-w-6xl grid-cols-1 gap-8 px-5 py-10 md:grid-cols-3">
          <div>
            <div className="font-semibold">nichegolfHQ</div>
            <p className="mt-2 text-sm text-zinc-600">
              Competitive golfers covering the game beyond the mainstream.
            </p>
          </div>

          <div>
            <div className="text-sm font-semibold text-zinc-900">Newsletters</div>
            <div className="mt-3 flex flex-col gap-2 text-sm text-zinc-600">
              <Link className="hover:text-zinc-950" href="/midamgolfhq">
                midamgolfHQ
              </Link>
              <Link className="hover:text-zinc-950" href="/juniorgolfhq">
                juniorgolfHQ
              </Link>
              <Link className="hover:text-zinc-950" href="/seniorgolfhq">
                seniorgolfHQ
              </Link>
            </div>
          </div>

          <div>
            <div className="text-sm font-semibold text-zinc-900">Work with us</div>
            <div className="mt-3 flex flex-col gap-2 text-sm text-zinc-600">
              <Link className="hover:text-zinc-950" href="/sponsors">
                Sponsorships
              </Link>
              <a className="hover:text-zinc-950" href="#subscribe">
                Subscribe
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-zinc-200 py-6 text-center text-xs text-zinc-500">
          © {new Date().getFullYear()} nichegolfHQ
        </div>
      </footer>
    </div>
  );
}
