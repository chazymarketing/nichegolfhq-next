import { SiteShell } from "@/components/SiteShell";
import { SponsorInquiryForm } from "@/components/SponsorInquiryForm";

export default function SponsorsPage() {
  return (
    <SiteShell>
      <div className="mx-auto w-full max-w-6xl px-5 py-16">
        <h1 className="text-3xl font-semibold tracking-tight">Sponsor</h1>

        <div className="mt-10 grid grid-cols-1 gap-4 md:grid-cols-3">
          <div className="rounded-2xl border border-zinc-200 bg-white p-6 text-sm font-semibold dark:border-zinc-800 dark:bg-black">
            Website sponsor
          </div>
          <div className="rounded-2xl border border-zinc-200 bg-white p-6 text-sm font-semibold dark:border-zinc-800 dark:bg-black">
            Newsletter sponsor
          </div>
          <div className="rounded-2xl border border-zinc-200 bg-white p-6 text-sm font-semibold dark:border-zinc-800 dark:bg-black">
            Social media sponsor
          </div>
        </div>

        <div className="mt-10">
          <SponsorInquiryForm />
        </div>
      </div>
    </SiteShell>
  );
}
