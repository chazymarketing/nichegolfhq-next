export function BeehiivEmbed({
  src,
  height,
  title = "Subscribe",
}: {
  src: string;
  height: number;
  title?: string;
}) {
  return (
    <div className="overflow-hidden rounded-2xl border border-zinc-200 bg-white">
      <iframe
        title={title}
        src={src}
        className="w-full"
        style={{ height }}
        frameBorder={0}
        scrolling="no"
      />
    </div>
  );
}
