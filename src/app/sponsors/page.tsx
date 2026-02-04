import { SiteShell } from "@/components/SiteShell";
import { SponsorInquiryForm } from "@/components/SponsorInquiryForm";

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

        <div className="mt-10">
          <SponsorInquiryForm />
        </div>
      </div>
    </SiteShell>
  );
}
