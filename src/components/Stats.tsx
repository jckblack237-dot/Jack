import { motion } from 'framer-motion';
import { Anchor, CookingPot, MapPin, Star } from 'lucide-react';
import AnimatedCounter from './AnimatedCounter';

const stats = [
  { icon: CookingPot, value: 12, label: 'Celebrated Tables' },
  { icon: Anchor, value: 4, label: 'Undersea Restaurants' },
  { icon: MapPin, value: 11, label: 'Islands Visited' },
  { icon: Star, value: 4.8, decimals: 1, label: 'Average Rating' },
];

export default function Stats() {
  return (
    <section className="border-y border-cream-50/10 bg-night-950 py-16 sm:py-20">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid grid-cols-2 gap-8 sm:grid-cols-4">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1, ease: 'easeOut' }}
              className="flex flex-col items-center text-center"
            >
              <span className="mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-night-800 text-amber-400 ring-1 ring-cream-50/10">
                <stat.icon size={22} strokeWidth={1.8} />
              </span>
              <p className="font-display text-3xl font-bold text-cream-50 sm:text-4xl">
                <AnimatedCounter value={stat.value} decimals={stat.decimals ?? 0} />
              </p>
              <p className="mt-1 font-body text-xs uppercase tracking-wide text-cream-100/50 sm:text-sm">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
