interface MarqueeProps {
  items: string[];
}

export default function Marquee({ items }: MarqueeProps) {
  const renderItems = (key: string) => (
    <div className="flex shrink-0 items-center gap-4" key={key}>
      {items.map((item, i) => (
        <span key={i} className="flex items-center gap-4">
          <span className="font-display text-sm font-medium uppercase tracking-[0.2em] text-sand-50/90 sm:text-base">
            {item}
          </span>
          <span className="text-lg text-coral-400">✺</span>
        </span>
      ))}
    </div>
  );

  return (
    <div className="overflow-hidden bg-ink-950 py-4">
      <div className="flex w-max animate-marquee gap-4 motion-reduce:animate-none">
        {renderItems('a')}
        {renderItems('b')}
      </div>
    </div>
  );
}
