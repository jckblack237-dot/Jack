import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { ArrowUpRight, MapPin } from 'lucide-react';
import { restaurants, type Restaurant } from '../data/restaurants';
import SectionHeading from './SectionHeading';
import StarRating from './StarRating';
import RestaurantModal from './RestaurantModal';

export default function Reviews() {
  const [selected, setSelected] = useState<Restaurant | null>(null);

  return (
    <section id="reviews" className="bg-sand-50 py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeading
          eyebrow="Field Notes"
          title="Restaurants worth the boat ride"
          description="Six tables our editors returned to more than once, picked from over a hundred restaurants visited across the atolls."
        />

        <div className="mt-14 grid gap-7 sm:grid-cols-2 lg:grid-cols-3">
          {restaurants.map((restaurant, i) => (
            <motion.button
              key={restaurant.id}
              onClick={() => setSelected(restaurant)}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.5, delay: (i % 3) * 0.12, ease: 'easeOut' }}
              whileHover={{ y: -6 }}
              className="group flex flex-col overflow-hidden rounded-3xl bg-white text-left shadow-md ring-1 ring-ink-900/5 transition-shadow duration-300 hover:shadow-xl"
            >
              <div className="relative h-56 w-full overflow-hidden">
                <motion.img
                  layoutId={`photo-${restaurant.id}`}
                  src={restaurant.image}
                  alt={restaurant.name}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink-950/50 via-transparent to-transparent" />
                <span className="absolute right-4 top-4 rounded-full bg-sand-50/90 px-3 py-1 font-body text-xs font-bold text-ink-900">
                  {restaurant.price}
                </span>
                <span className="absolute bottom-4 left-4 flex items-center gap-1 rounded-full bg-ink-950/50 px-2.5 py-1 font-body text-xs text-sand-50 backdrop-blur-sm">
                  <MapPin size={11} /> {restaurant.atoll}
                </span>
              </div>

              <div className="flex flex-1 flex-col p-6">
                <div className="flex items-center gap-2">
                  <StarRating rating={restaurant.rating} size={14} />
                  <span className="font-body text-xs font-bold text-ink-600">{restaurant.rating.toFixed(1)}</span>
                </div>

                <h3 className="mt-3 font-display text-xl font-bold text-ink-900">{restaurant.name}</h3>
                <p className="mt-0.5 font-body text-xs font-semibold uppercase tracking-wide text-lagoon-600">
                  {restaurant.cuisine}
                </p>

                <p className="mt-3 line-clamp-3 flex-1 font-body text-sm leading-relaxed text-ink-600">
                  {restaurant.excerpt}
                </p>

                <span className="mt-4 inline-flex items-center gap-1 font-body text-sm font-bold text-coral-600 transition-transform duration-300 group-hover:translate-x-1">
                  Read full review <ArrowUpRight size={15} />
                </span>
              </div>
            </motion.button>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {selected && <RestaurantModal restaurant={selected} onClose={() => setSelected(null)} />}
      </AnimatePresence>
    </section>
  );
}
