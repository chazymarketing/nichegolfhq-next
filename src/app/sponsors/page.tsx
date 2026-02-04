import Link from "next/link";
import { SiteShell } from "@/components/SiteShell";

export default function SponsorsPage() {
  return (
    <SiteShell>
      <div className="mx-auto w-full max-w-6xl px-5 py-16">
        <h1 className="text-3xl font-semibold tracking-tight">Sponsor</h1>

        <div className="mt-10 grid grid-cols-1 gap-4 md:grid-cols-4">
          <div className="rounded-2xl border border-zinc-200 bg-white p-6 text-sm font-semibold">
            Website sponsor
          </div>
          <div className="rounded-2xl border border-zinc-200 bg-white p-6 text-sm font-semibold">
            Newsletter sponsor
          </div>
          <div className="rounded-2xl border border-zinc-200 bg-white p-6 text-sm font-semibold">
            Social media sponsor
          </div>
          <div className="rounded-2xl border border-zinc-200 bg-white p-6 text-sm font-semibold">
            Digital reach
          </div>
        </div>

        <div className="mt-10 rounded-2xl border border-zinc-200 bg-white p-8">
          <h2 className="text-lg font-semibold">Want to sponsor?</h2>
          <p className="mt-2 text-sm text-zinc-600">
            Hit us up and we’ll put together a clean package + pricing.
          </p>
          <div className="mt-6">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-xl bg-zinc-950 px-5 py-3 text-sm font-semibold text-white hover:bg-zinc-800"
            >
              Contact us
            </Link>
          </div>
        </div>
      </div>
    </SiteShell>
  );
}
