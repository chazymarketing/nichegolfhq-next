import { SiteShell } from "@/components/SiteShell";

export default function SponsorsPage() {
  return (
    <SiteShell>
      <div className="mx-auto w-full max-w-6xl px-5 py-16">
        <div className="max-w-2xl">
          <h1 className="text-3xl font-semibold tracking-tight">Sponsor nichegolfHQ</h1>
          <p className="mt-3 text-zinc-600">
            High-intent readers. Competitive golfers. Clean placements. This page is intentionally simple — we can expand once we lock the sponsorship packages.
          </p>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-4 md:grid-cols-3">
          <div className="rounded-2xl border border-zinc-200 bg-white p-6">
            <div className="text-sm font-semibold">Newsletter sponsorship</div>
            <p className="mt-2 text-sm text-zinc-600">
              Primary placement inside one (or all) of the newsletters.
            </p>
          </div>
          <div className="rounded-2xl border border-zinc-200 bg-white p-6">
            <div className="text-sm font-semibold">Evergreen guide sponsor</div>
            <p className="mt-2 text-sm text-zinc-600">
              Own a topic page that stays live and compounds.
            </p>
          </div>
          <div className="rounded-2xl border border-zinc-200 bg-white p-6">
            <div className="text-sm font-semibold">Custom</div>
            <p className="mt-2 text-sm text-zinc-600">
              Giveaways, gear tests, tournament tie-ins, content packages.
            </p>
          </div>
        </div>

        <div className="mt-12 rounded-3xl border border-zinc-200 bg-white p-8">
          <div className="text-sm font-semibold text-zinc-900">Contact</div>
          <p className="mt-2 max-w-2xl text-sm text-zinc-600">
            Placeholder. We can wire this to an email address, BeeHiiv form, or a simple contact form once you tell me what you prefer.
          </p>
          <div className="mt-5 grid grid-cols-1 gap-3 sm:grid-cols-2">
            <input
              disabled
              placeholder="Name"
              className="h-11 w-full rounded-xl border border-zinc-200 bg-zinc-50 px-4 text-sm text-zinc-500"
            />
            <input
              disabled
              placeholder="Email"
              className="h-11 w-full rounded-xl border border-zinc-200 bg-zinc-50 px-4 text-sm text-zinc-500"
            />
            <textarea
              disabled
              placeholder="What are you trying to promote?"
              className="min-h-28 w-full rounded-xl border border-zinc-200 bg-zinc-50 px-4 py-3 text-sm text-zinc-500 sm:col-span-2"
            />
            <button
              disabled
              className="h-11 rounded-xl bg-zinc-200 text-sm font-medium text-zinc-500 sm:col-span-2"
            >
              Send
            </button>
          </div>
        </div>
      </div>
    </SiteShell>
  );
}
