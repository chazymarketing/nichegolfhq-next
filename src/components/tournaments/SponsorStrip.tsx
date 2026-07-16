import Image from "next/image";
import Link from "next/link";

interface SponsorStripProps {
  logoSrc: string;
  logoAlt: string;
  sponsorName: string;
  sponsorUrl: string;
  ctaText: string;
  discountCode?: string;
  discountNote?: string;
}

export function SponsorStrip({
  logoSrc,
  logoAlt,
  sponsorName,
  sponsorUrl,
  ctaText,
  discountCode,
  discountNote,
}: SponsorStripProps) {
  return (
    <>
      {/* Sponsor strip */}
      <div className="border-y border-zinc-200 bg-zinc-50">
        <div className="mx-auto flex w-full max-w-5xl flex-col items-center gap-4 px-5 py-4 sm:flex-row sm:justify-between">
          <div className="flex items-center gap-3 text-sm text-zinc-500">
            <span>midamgolfHQ coverage supported by</span>
            <Link href={sponsorUrl} target="_blank" rel="noreferrer noopener">
              <Image
                src={logoSrc}
                alt={logoAlt}
                width={80}
                height={32}
                className="h-8 w-auto"
              />
            </Link>
          </div>
          <div className="flex items-center gap-3">
            {discountCode && (
              <span className="rounded-full border border-emerald-200 bg-emerald-50 px-3 py-1 text-xs font-medium text-emerald-700">
                Code: {discountCode}
              </span>
            )}
            <Link
              href={sponsorUrl}
              target="_blank"
              rel="noreferrer noopener"
              className="inline-flex items-center gap-2 rounded-full bg-zinc-900 px-4 py-2 text-sm font-medium text-white transition hover:bg-zinc-700"
            >
              {ctaText}
              <span aria-hidden>→</span>
            </Link>
            {discountNote && <span className="text-[10px] text-zinc-400">*</span>}
          </div>
        </div>
      </div>
    </>
  );
}

export function SponsorDisclaimer({ note }: { note: string }) {
  return (
    <div className="border-t border-zinc-100 bg-zinc-50 px-5 py-3">
      <p className="mx-auto max-w-5xl text-center text-[10px] leading-relaxed text-zinc-400">
        *{note}
      </p>
    </div>
  );
}
