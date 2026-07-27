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
    <Link
      href={sponsorUrl}
      target="_blank"
      rel="noreferrer noopener"
      className="group block rounded-2xl border border-zinc-200 bg-white p-5 text-center shadow-sm transition hover:border-zinc-300"
    >
      {/* Attribution */}
      <p className="text-xs font-semibold tracking-widest text-zinc-700 text-center">
        midamgolfHQ coverage supported by IBT Golf Travel
      </p>

      {/* Logo — the hero of the box */}
      <Image
        src={logoSrc}
        alt={logoAlt}
        width={400}
        height={200}
        className="mx-auto mt-3 h-auto w-full"
        priority
      />

      {/* Code pill */}
      {discountCode && (
        <span className="mt-3 inline-block rounded-full bg-emerald-50 px-3 py-1 text-[10px] font-medium text-emerald-700">
          Code: {discountCode}
        </span>
      )}

      {/* Fine print */}
      {discountNote && (
        <p className="mt-4 text-[9px] leading-relaxed text-zinc-400">
          *{discountNote}
        </p>
      )}
    </Link>
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
