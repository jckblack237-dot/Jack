import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Tag, X } from 'lucide-react';
import type { Restaurant } from '../data/restaurants';
import StarRating from './StarRating';

interface RestaurantModalProps {
  restaurant: Restaurant;
  onClose: () => void;
}

export default function RestaurantModal({ restaurant, onClose }: RestaurantModalProps) {
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && onClose();
    window.addEventListener('keydown', onKey);
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', onKey);
    };
  }, [onClose]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
      className="fixed inset-0 z-[100] flex items-center justify-center bg-ink-950/70 p-4 backdrop-blur-sm sm:p-6"
    >
      <motion.div
        onClick={(e) => e.stopPropagation()}
        initial={{ opacity: 0, y: 24, scale: 0.97 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: 16, scale: 0.97 }}
        transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
        className="relative max-h-[88vh] w-full max-w-2xl overflow-y-auto rounded-3xl bg-sand-50 shadow-2xl"
      >
        <div className="relative h-64 w-full overflow-hidden sm:h-80">
          <motion.img
            layoutId={`photo-${restaurant.id}`}
            src={restaurant.image}
            alt={restaurant.name}
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-ink-950/60 via-transparent to-transparent" />
          <button
            onClick={onClose}
            aria-label="Close"
            className="absolute right-4 top-4 flex h-10 w-10 items-center justify-center rounded-full bg-ink-950/40 text-sand-50 backdrop-blur-sm transition-colors hover:bg-ink-950/60"
          >
            <X size={20} />
          </button>
          <div className="absolute bottom-4 left-5 right-5 flex items-end justify-between">
            <h3 className="font-display text-2xl font-bold text-sand-50 sm:text-3xl">{restaurant.name}</h3>
            <span className="rounded-full bg-sand-50/90 px-3 py-1 font-body text-sm font-bold text-ink-900">
              {restaurant.price}
            </span>
          </div>
        </div>

        <div className="p-6 sm:p-8">
          <div className="flex flex-wrap items-center gap-4">
            <StarRating rating={restaurant.rating} />
            <span className="font-body text-sm font-semibold text-ink-700">{restaurant.rating.toFixed(1)} / 5</span>
            <span className="flex items-center gap-1 font-body text-sm text-ink-500">
              <MapPin size={14} /> {restaurant.atoll}
            </span>
          </div>

          <p className="mt-2 font-body text-sm font-medium uppercase tracking-wide text-lagoon-600">
            {restaurant.cuisine}
          </p>

          <div className="mt-4 flex flex-wrap gap-2">
            {restaurant.tags.map((tag) => (
              <span
                key={tag}
                className="flex items-center gap-1 rounded-full bg-lagoon-50 px-3 py-1 font-body text-xs font-semibold text-lagoon-700"
              >
                <Tag size={11} /> {tag}
              </span>
            ))}
          </div>

          <p className="mt-6 font-body text-base leading-relaxed text-ink-700">{restaurant.review}</p>
        </div>
      </motion.div>
    </motion.div>
  );
}
