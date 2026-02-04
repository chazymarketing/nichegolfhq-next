import Link from "next/link";
import { SiteShell } from "@/components/SiteShell";

export default function SponsorsPage() {
  return (
    <SiteShell>
      <div className="mx-auto w-full max-w-6xl px-5 py-16 text-center">
        <h1 className="text-3xl font-semibold tracking-tight">Sponsor</h1>

        <div className="mt-10 grid grid-cols-1 gap-4 md:grid-cols-4">
          <div className="rounded-2xl border border-zinc-200 bg-white p-6 text-center">
            <div className="text-sm font-semibold">Website sponsor</div>
            <div className="mt-2 text-sm text-zinc-600">
              Your logo or video assets on our website.
            </div>
          </div>

          <div className="rounded-2xl border border-zinc-200 bg-white p-6 text-center">
            <div className="text-sm font-semibold">Newsletter sponsor</div>
            <div className="mt-2 text-sm text-zinc-600">
              Integrate your brand with any of our monthly newsletters.
            </div>
          </div>

          <div className="rounded-2xl border border-zinc-200 bg-white p-6 text-center">
            <div className="text-sm font-semibold">Social media sponsor</div>
            <div className="mt-2 text-sm text-zinc-600">
              Integrate your brand across any of our social channels, Instagram or X.
            </div>
          </div>

          <div className="rounded-2xl border border-zinc-200 bg-white p-6 text-center">
            <div className="text-sm font-semibold">Digital reach</div>
            <div className="mt-2 text-sm text-zinc-600">
              Leverage our programmatic platform to extend your reach beyond nichegolfHQ.
            </div>
          </div>
        </div>

        <div className="mt-10 rounded-2xl border border-zinc-200 bg-white p-8 text-center">
          <h2 className="text-lg font-semibold">Want to sponsor?</h2>
          <p className="mx-auto mt-2 max-w-2xl text-sm text-zinc-600">
            Hit us up and we’ll put together a clean package + pricing.
          </p>
          <div className="mt-6 flex justify-center">
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
