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
    <div className="mx-auto w-full max-w-sm px-5 py-4">
      <div className="overflow-hidden rounded-3xl bg-zinc-950 p-6 text-center shadow-sm shadow-zinc-900/5">
        {/* Large clickable logo */}
        <Link href={sponsorUrl} target="_blank" rel="noreferrer noopener" className="inline-block">
          <Image
            src={logoSrc}
            alt={logoAlt}
            width={240}
            height={120}
            className="mx-auto h-auto w-full max-w-[180px]"
            priority
          />
        </Link>

        {/* Attribution line */}
        <p className="mt-2 text-xs text-zinc-500">
          midamgolfHQ coverage supported by {sponsorName}
        </p>

        {/* CTA + code */}
        <div className="mt-3 flex flex-col items-center gap-3">
          <Link
            href={sponsorUrl}
            target="_blank"
            rel="noreferrer noopener"
            className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-2.5 text-sm font-medium text-zinc-900 transition hover:bg-zinc-200"
          >
            {ctaText}
            <span aria-hidden>→</span>
          </Link>
          {discountCode && (
            <span className="rounded-full bg-emerald-950/50 px-4 py-1.5 text-xs font-medium text-emerald-400">
              Code: {discountCode}
            </span>
          )}
        </div>

        {/* Fine print */}
        {discountNote && (
          <p className="mt-5 text-[10px] leading-relaxed text-zinc-600">
            *{discountNote}
          </p>
        )}
      </div>
    </div>
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
