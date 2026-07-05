import { useEffect, useMemo, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, MapPin, Search, X } from 'lucide-react';
import { restaurants } from '../data/restaurants';
import { openRestaurant } from '../lib/openRestaurant';

interface SearchOverlayProps {
  onClose: () => void;
}

export default function SearchOverlay({ onClose }: SearchOverlayProps) {
  const [query, setQuery] = useState('');
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    inputRef.current?.focus();
    document.body.style.overflow = 'hidden';
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && onClose();
    window.addEventListener('keydown', onKey);
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', onKey);
    };
  }, [onClose]);

  const results = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return restaurants;
    return restaurants.filter((r) =>
      [r.name, r.venue, r.island, r.atoll, r.cuisine]
        .join(' ')
        .toLowerCase()
        .includes(q),
    );
  }, [query]);

  const pick = (id: string) => {
    onClose();
    openRestaurant(id);
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
      className="fixed inset-0 z-[120] flex items-start justify-center bg-night-950/85 p-4 pt-[12vh] backdrop-blur-sm"
    >
      <motion.div
        onClick={(e) => e.stopPropagation()}
        initial={{ opacity: 0, y: -16, scale: 0.98 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: -12, scale: 0.98 }}
        transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
        className="w-full max-w-xl overflow-hidden rounded-3xl bg-night-900 ring-1 ring-cream-50/10"
      >
        <div className="flex items-center gap-3 border-b border-cream-50/10 px-5 py-4">
          <Search size={18} className="shrink-0 text-amber-400" />
          <input
            ref={inputRef}
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search restaurants, islands, cuisines…"
            className="w-full bg-transparent font-body text-base text-cream-50 placeholder:text-cream-100/30 focus:outline-none"
          />
          <button
            onClick={onClose}
            aria-label="Close search"
            className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-cream-100/60 transition-colors hover:bg-night-800 hover:text-cream-50"
          >
            <X size={17} />
          </button>
        </div>

        <div className="max-h-[52vh] overflow-y-auto p-2">
          {results.length === 0 ? (
            <p className="px-4 py-8 text-center font-body text-sm text-cream-100/50">
              Nothing matches &ldquo;{query}&rdquo; — try an island, a cuisine or a name.
            </p>
          ) : (
            results.map((r) => (
              <button
                key={r.id}
                onClick={() => pick(r.id)}
                className="group flex w-full items-center gap-4 rounded-2xl px-4 py-3 text-left transition-colors hover:bg-night-800"
              >
                <div className="min-w-0 flex-1">
                  <p className="truncate font-display text-base font-bold text-cream-50">{r.name}</p>
                  <p className="mt-0.5 flex items-center gap-1 truncate font-body text-xs text-cream-100/50">
                    <MapPin size={11} className="shrink-0 text-amber-400" />
                    {r.island} · {r.atoll} · {r.cuisine}
                  </p>
                </div>
                <span className="shrink-0 rounded-full bg-amber-400/10 px-2.5 py-1 font-body text-[10px] font-bold uppercase tracking-wide text-amber-400 ring-1 ring-amber-400/30">
                  {r.price}
                </span>
                <ArrowUpRight
                  size={16}
                  className="shrink-0 text-cream-100/30 transition-all group-hover:translate-x-0.5 group-hover:text-amber-400"
                />
              </button>
            ))
          )}
        </div>
      </motion.div>
    </motion.div>
  );
}
