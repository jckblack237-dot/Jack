import { useEffect, useState, type FormEvent } from 'react';
import { motion } from 'framer-motion';
import {
  ArrowUpRight,
  CalendarPlus,
  Clock,
  Lightbulb,
  MapPin,
  Navigation,
  Plane,
  Send,
  Star,
  Tag,
  X,
} from 'lucide-react';
import type { Restaurant } from '../data/restaurants';
import { fullMenus } from '../data/menus';
import { addReview, getReviews, type DinerReview } from '../lib/api';
import { openBooking } from '../lib/booking';
import StarRating from './StarRating';

interface RestaurantModalProps {
  restaurant: Restaurant;
  onClose: () => void;
}

type Tab = 'review' | 'menu' | 'directions' | 'diners';

const tabs: { id: Tab; label: string }[] = [
  { id: 'review', label: 'Review' },
  { id: 'menu', label: 'Menu' },
  { id: 'directions', label: 'Directions' },
  { id: 'diners', label: 'Diner Reviews' },
];

const fieldClass =
  'w-full rounded-xl bg-night-800 px-4 py-3 font-body text-sm text-cream-50 ring-1 ring-cream-50/15 placeholder:text-cream-100/30 focus:outline-none focus:ring-amber-400';

export default function RestaurantModal({ restaurant, onClose }: RestaurantModalProps) {
  const [tab, setTab] = useState<Tab>('review');
  const [reviews, setReviews] = useState<DinerReview[] | null>(null);
  const [draftName, setDraftName] = useState('');
  const [draftRating, setDraftRating] = useState(5);
  const [draftText, setDraftText] = useState('');
  const [sending, setSending] = useState(false);
  const [postedNote, setPostedNote] = useState<string | null>(null);

  useEffect(() => {
    document.body.style.overflow = 'hidden';
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && onClose();
    window.addEventListener('keydown', onKey);
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', onKey);
    };
  }, [onClose]);

  useEffect(() => {
    let cancelled = false;
    getReviews(restaurant.id).then((list) => {
      if (!cancelled) setReviews(list);
    });
    return () => {
      cancelled = true;
    };
  }, [restaurant.id]);

  const submitReview = async (e: FormEvent) => {
    e.preventDefault();
    if (sending || !draftName.trim() || !draftText.trim()) return;
    setSending(true);
    const { review, offline } = await addReview(restaurant.id, {
      name: draftName,
      rating: draftRating,
      text: draftText,
    });
    setReviews((prev) => [review, ...(prev ?? [])]);
    setDraftName('');
    setDraftText('');
    setDraftRating(5);
    setPostedNote(offline ? 'Saved on this device (demo mode — no review server reachable).' : 'Review posted — thank you!');
    setSending(false);
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
      className="fixed inset-0 z-[100] flex items-center justify-center bg-night-950/80 p-4 backdrop-blur-sm sm:p-6"
    >
      <motion.div
        onClick={(e) => e.stopPropagation()}
        initial={{ opacity: 0, y: 24, scale: 0.97 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: 16, scale: 0.97 }}
        transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
        className="relative max-h-[88vh] w-full max-w-2xl overflow-y-auto rounded-3xl bg-night-900 ring-1 ring-cream-50/10"
      >
        <div className="relative h-56 w-full overflow-hidden sm:h-72">
          <motion.img
            initial={{ scale: 1.12 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            src={restaurant.image}
            alt={restaurant.name}
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-night-900 via-night-950/30 to-transparent" />
          <button
            onClick={onClose}
            aria-label="Close"
            className="absolute right-4 top-4 flex h-10 w-10 items-center justify-center rounded-full bg-night-950/60 text-cream-50 backdrop-blur-sm transition-colors hover:bg-amber-400 hover:text-night-950"
          >
            <X size={20} />
          </button>
          <div className="absolute bottom-4 left-6 right-6 flex items-end justify-between gap-4">
            <div>
              <p className="font-script text-base text-amber-400">{restaurant.venue}</p>
              <h3 className="font-display text-2xl font-bold text-cream-50 sm:text-3xl">
                {restaurant.name}
              </h3>
            </div>
            <span className="rounded-full bg-amber-400 px-3 py-1 font-body text-sm font-bold text-night-950">
              {restaurant.price}
            </span>
          </div>
        </div>

        <div className="px-6 pt-4 sm:px-8">
          <div className="flex flex-wrap items-center gap-4">
            <StarRating rating={restaurant.rating} />
            <span className="font-body text-sm font-semibold text-cream-100/80">
              {restaurant.rating.toFixed(1)} / 5
            </span>
            <span className="flex items-center gap-1 font-body text-sm text-cream-100/50">
              <MapPin size={14} className="text-amber-400" /> {restaurant.island}, {restaurant.atoll}
            </span>
          </div>
          <p className="mt-2 font-body text-xs font-medium uppercase tracking-wide text-cream-100/50">
            {restaurant.cuisine}
          </p>

          <div className="mt-5 flex gap-6 border-b border-cream-50/10">
            {tabs.map((t) => (
              <button
                key={t.id}
                onClick={() => setTab(t.id)}
                className={`relative pb-3 font-body text-xs font-bold uppercase tracking-[0.16em] transition-colors duration-300 ${
                  tab === t.id ? 'text-amber-400' : 'text-cream-100/50 hover:text-cream-50'
                }`}
              >
                {t.label}
                <span
                  className={`absolute inset-x-0 bottom-0 h-0.5 origin-left bg-amber-400 transition-transform duration-300 ease-out ${
                    tab === t.id ? 'scale-x-100' : 'scale-x-0'
                  }`}
                />
              </button>
            ))}
          </div>
        </div>

        <div className="min-h-[260px] px-6 pb-8 pt-5 sm:px-8">
          {/* Tab panels remount on `key` and animate in; no nested AnimatePresence —
              a nested exit inside the modal's own AnimatePresence deadlocks its unmount. */}
          <div>
            {tab === 'review' && (
              <motion.div
                key="review"
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.25, ease: 'easeOut' }}
              >
                <div className="flex flex-wrap gap-2">
                  {restaurant.tags.map((t) => (
                    <span
                      key={t}
                      className="flex items-center gap-1 rounded-full bg-night-800 px-3 py-1 font-body text-xs font-semibold text-cream-100/70 ring-1 ring-cream-50/10"
                    >
                      <Tag size={11} className="text-amber-400" /> {t}
                    </span>
                  ))}
                </div>
                <p className="mt-5 font-body text-[15px] leading-relaxed text-cream-100/75">
                  {restaurant.review}
                </p>
                <button
                  onClick={() => openBooking(restaurant.id)}
                  className="mt-6 inline-flex items-center gap-2 rounded-full bg-amber-400 px-6 py-3 font-body text-xs font-bold uppercase tracking-[0.14em] text-night-950 transition-all duration-300 hover:-translate-y-0.5 hover:bg-amber-300"
                >
                  <CalendarPlus size={14} /> Book a table here
                </button>
              </motion.div>
            )}

            {tab === 'menu' && (
              <motion.div
                key="menu"
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.25, ease: 'easeOut' }}
              >
                {[{ title: "Chef's Signatures", items: restaurant.menu }, ...(fullMenus[restaurant.id] ?? [])].map(
                  (section, s) => (
                    <div key={section.title} className={s > 0 ? 'mt-7' : ''}>
                      <p className="font-script text-lg text-amber-400">{section.title}</p>
                      <ul className="mt-3 space-y-4">
                        {section.items.map((item, i) => (
                          <motion.li
                            key={item.name}
                            initial={{ opacity: 0, x: -12 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.3, delay: Math.min(s * 2 + i, 8) * 0.05 }}
                            className="flex items-center gap-4"
                          >
                            <img
                              src={item.image}
                              alt={item.name}
                              loading="lazy"
                              className="h-14 w-14 shrink-0 rounded-xl object-cover ring-1 ring-cream-50/10 sm:h-16 sm:w-16"
                            />
                            <div className="min-w-0 flex-1">
                              <div className="flex items-baseline gap-3">
                                <h4 className="font-display text-base font-bold text-cream-50 sm:text-lg">
                                  {item.name}
                                </h4>
                                <span className="flex-1 border-b border-dotted border-cream-50/20" />
                                <span className="shrink-0 font-display text-base font-bold text-amber-400">
                                  {item.price === 0 ? 'Incl.' : `$${item.price}`}
                                </span>
                              </div>
                              <p className="mt-1 font-body text-sm text-cream-100/50">{item.description}</p>
                            </div>
                          </motion.li>
                        ))}
                      </ul>
                    </div>
                  ),
                )}
                <p className="mt-7 font-body text-xs text-cream-100/40">
                  Prices in USD and subject to change with the season’s catch.
                </p>
              </motion.div>
            )}

            {tab === 'directions' && (
              <motion.div
                key="directions"
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.25, ease: 'easeOut' }}
              >
                <ul className="space-y-4">
                  <li className="flex gap-3">
                    <span className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-night-800 text-amber-400 ring-1 ring-cream-50/10">
                      <Plane size={15} />
                    </span>
                    <div>
                      <p className="font-body text-xs font-bold uppercase tracking-wide text-cream-100/50">
                        Getting there
                      </p>
                      <p className="mt-0.5 font-body text-sm leading-relaxed text-cream-100/75">
                        {restaurant.directions.transfer}
                      </p>
                    </div>
                  </li>
                  <li className="flex gap-3">
                    <span className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-night-800 text-amber-400 ring-1 ring-cream-50/10">
                      <Clock size={15} />
                    </span>
                    <div>
                      <p className="font-body text-xs font-bold uppercase tracking-wide text-cream-100/50">
                        Travel time
                      </p>
                      <p className="mt-0.5 font-body text-sm leading-relaxed text-cream-100/75">
                        {restaurant.directions.time}
                      </p>
                    </div>
                  </li>
                  <li className="flex gap-3">
                    <span className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-night-800 text-amber-400 ring-1 ring-cream-50/10">
                      <Lightbulb size={15} />
                    </span>
                    <div>
                      <p className="font-body text-xs font-bold uppercase tracking-wide text-cream-100/50">
                        Good to know
                      </p>
                      <p className="mt-0.5 font-body text-sm leading-relaxed text-cream-100/75">
                        {restaurant.directions.tip}
                      </p>
                    </div>
                  </li>
                </ul>

                <div className="mt-6 flex flex-wrap gap-3">
                  <a
                    href={restaurant.directions.mapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-full bg-amber-400 px-6 py-3 font-body text-xs font-bold uppercase tracking-[0.14em] text-night-950 transition-all duration-300 hover:-translate-y-0.5 hover:bg-amber-300"
                  >
                    <Navigation size={14} /> Open in Google Maps <ArrowUpRight size={14} />
                  </a>
                  <button
                    onClick={() => openBooking(restaurant.id)}
                    className="inline-flex items-center gap-2 rounded-full border border-cream-50/25 px-6 py-3 font-body text-xs font-bold uppercase tracking-[0.14em] text-cream-50 transition-all duration-300 hover:-translate-y-0.5 hover:border-amber-400 hover:text-amber-400"
                  >
                    <CalendarPlus size={14} /> Book a table
                  </button>
                </div>
              </motion.div>
            )}

            {tab === 'diners' && (
              <motion.div
                key="diners"
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.25, ease: 'easeOut' }}
              >
                <form onSubmit={submitReview} className="rounded-2xl bg-night-800/60 p-4 ring-1 ring-cream-50/10">
                  <p className="font-script text-lg text-amber-400">been here?</p>
                  <div className="mt-3 flex items-center gap-1.5">
                    {[1, 2, 3, 4, 5].map((n) => (
                      <button
                        key={n}
                        type="button"
                        onClick={() => setDraftRating(n)}
                        aria-label={`Rate ${n} star${n > 1 ? 's' : ''}`}
                        className="transition-transform hover:scale-110"
                      >
                        <Star
                          size={22}
                          className={n <= draftRating ? 'fill-amber-400 text-amber-400' : 'text-night-500'}
                          fill={n <= draftRating ? 'currentColor' : 'none'}
                        />
                      </button>
                    ))}
                  </div>
                  <div className="mt-3 grid gap-3 sm:grid-cols-2">
                    <input
                      value={draftName}
                      onChange={(e) => setDraftName(e.target.value)}
                      placeholder="Your name"
                      required
                      className={fieldClass}
                    />
                  </div>
                  <textarea
                    value={draftText}
                    onChange={(e) => setDraftText(e.target.value)}
                    placeholder="How was the food, the view, the trip out?"
                    required
                    rows={3}
                    className={`${fieldClass} mt-3 resize-none`}
                  />
                  <div className="mt-3 flex flex-wrap items-center gap-3">
                    <button
                      type="submit"
                      disabled={sending}
                      className="inline-flex items-center gap-2 rounded-full bg-amber-400 px-6 py-2.5 font-body text-xs font-bold uppercase tracking-[0.14em] text-night-950 transition-all duration-300 hover:-translate-y-0.5 hover:bg-amber-300 disabled:cursor-not-allowed disabled:opacity-60"
                    >
                      <Send size={13} /> {sending ? 'Posting…' : 'Post review'}
                    </button>
                    {postedNote && (
                      <span className="font-body text-xs text-amber-300/90">{postedNote}</span>
                    )}
                  </div>
                </form>

                <div className="mt-6">
                  {reviews === null ? (
                    <p className="font-body text-sm text-cream-100/50">Loading diner reviews…</p>
                  ) : reviews.length === 0 ? (
                    <p className="font-body text-sm text-cream-100/50">
                      No diner reviews yet — be the first to write one.
                    </p>
                  ) : (
                    <ul className="space-y-5">
                      {reviews.map((r) => (
                        <li key={r.id} className="border-b border-cream-50/8 pb-5 last:border-0">
                          <div className="flex items-center gap-3">
                            <span className="flex h-9 w-9 items-center justify-center rounded-full bg-amber-400 font-body text-sm font-bold text-night-950">
                              {r.name.charAt(0).toUpperCase()}
                            </span>
                            <div>
                              <p className="font-body text-sm font-bold text-cream-50">{r.name}</p>
                              <div className="mt-0.5 flex items-center gap-2">
                                <span className="flex gap-0.5">
                                  {Array.from({ length: 5 }).map((_, i) => (
                                    <Star
                                      key={i}
                                      size={11}
                                      className={i < r.rating ? 'fill-amber-400 text-amber-400' : 'text-night-500'}
                                      fill={i < r.rating ? 'currentColor' : 'none'}
                                    />
                                  ))}
                                </span>
                                <span className="font-body text-[11px] text-cream-100/40">
                                  {new Date(r.createdAt).toLocaleDateString()}
                                </span>
                              </div>
                            </div>
                          </div>
                          <p className="mt-2.5 font-body text-sm leading-relaxed text-cream-100/70">{r.text}</p>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </motion.div>
            )}
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}
