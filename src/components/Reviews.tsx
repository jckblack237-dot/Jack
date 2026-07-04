import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { ArrowUpRight, MapPin } from 'lucide-react';
import { categoryFilters, restaurants, type Restaurant, type RestaurantCategory } from '../data/restaurants';
import SectionHeading from './SectionHeading';
import StarRating from './StarRating';
import RestaurantModal from './RestaurantModal';

type Filter = RestaurantCategory | 'all';

export default function Reviews() {
  const [selected, setSelected] = useState<Restaurant | null>(null);
  const [filter, setFilter] = useState<Filter>('all');

  const visible = filter === 'all' ? restaurants : restaurants.filter((r) => r.category === filter);

  return (
    <section id="reviews" className="bg-night-950 py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeading
          eyebrow="the directory"
          title="Every table worth flying for"
          description="The Maldives' most celebrated restaurants — undersea domes, overwater decks and Malé institutions — each with its menu, an honest review and directions to the table."
        />

        <div className="mt-10 flex flex-wrap justify-center gap-2">
          {categoryFilters.map((c) => (
            <button
              key={c.id}
              onClick={() => setFilter(c.id)}
              className={`relative rounded-full px-5 py-2.5 font-body text-[11px] font-bold uppercase tracking-[0.14em] transition-colors duration-300 ${
                filter === c.id ? 'text-night-950' : 'text-cream-100/60 hover:text-cream-50'
              }`}
            >
              {filter === c.id && (
                <motion.span
                  layoutId="directory-filter-pill"
                  className="absolute inset-0 rounded-full bg-amber-400"
                  transition={{ type: 'spring', stiffness: 380, damping: 32 }}
                />
              )}
              <span className="relative z-10">{c.label}</span>
            </button>
          ))}
        </div>

        <motion.div layout className="mt-12 grid gap-7 sm:grid-cols-2 lg:grid-cols-3">
          <AnimatePresence mode="popLayout">
            {visible.map((restaurant) => (
              <motion.button
                layout
                key={restaurant.id}
                onClick={() => setSelected(restaurant)}
                initial={{ opacity: 0, y: 28, scale: 0.96 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true, margin: '-60px' }}
                exit={{ opacity: 0, scale: 0.94, transition: { duration: 0.2 } }}
                transition={{ duration: 0.45, ease: 'easeOut' }}
                whileHover={{ y: -6 }}
                className="group flex flex-col overflow-hidden rounded-3xl bg-night-800 text-left ring-1 ring-cream-50/8 transition-shadow duration-300 hover:shadow-2xl hover:shadow-night-950/80 hover:ring-amber-400/40"
              >
                <div className="relative h-56 w-full overflow-hidden">
                  <img
                    src={restaurant.image}
                    alt={restaurant.name}
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-night-950/70 via-transparent to-transparent" />
                  <span className="absolute right-4 top-4 rounded-full bg-amber-400 px-3 py-1 font-body text-xs font-bold text-night-950">
                    {restaurant.price}
                  </span>
                  <span className="absolute bottom-4 left-4 flex items-center gap-1 rounded-full bg-night-950/60 px-2.5 py-1 font-body text-xs text-cream-100 backdrop-blur-sm">
                    <MapPin size={11} className="text-amber-400" /> {restaurant.island} · {restaurant.atoll}
                  </span>
                </div>

                <div className="flex flex-1 flex-col p-6">
                  <div className="flex items-center gap-2">
                    <StarRating rating={restaurant.rating} size={14} />
                    <span className="font-body text-xs font-bold text-cream-100/70">
                      {restaurant.rating.toFixed(1)}
                    </span>
                  </div>

                  <h3 className="mt-3 font-display text-xl font-bold text-cream-50">{restaurant.name}</h3>
                  <p className="mt-0.5 font-body text-[11px] font-semibold uppercase tracking-wide text-amber-400/90">
                    {restaurant.venue}
                  </p>
                  <p className="mt-1 font-body text-xs text-cream-100/50">{restaurant.cuisine}</p>

                  <p className="mt-3 line-clamp-3 flex-1 font-body text-sm leading-relaxed text-cream-100/60">
                    {restaurant.excerpt}
                  </p>

                  <span className="mt-4 inline-flex items-center gap-1 font-body text-sm font-bold text-amber-400 transition-transform duration-300 group-hover:translate-x-1">
                    Menu, review &amp; directions <ArrowUpRight size={15} />
                  </span>
                </div>
              </motion.button>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      <AnimatePresence>
        {selected && <RestaurantModal restaurant={selected} onClose={() => setSelected(null)} />}
      </AnimatePresence>
    </section>
  );
}
