import { motion } from 'framer-motion';
import { CookingPot, MapPin, Star, Users } from 'lucide-react';
import AnimatedCounter from './AnimatedCounter';
import WaveDivider from './WaveDivider';

const stats = [
  { icon: CookingPot, value: 120, suffix: '+', label: 'Restaurants Reviewed' },
  { icon: Star, value: 4.8, decimals: 1, label: 'Average Diner Rating' },
  { icon: MapPin, value: 26, label: 'Atolls Explored' },
  { icon: Users, value: 15000, suffix: '+', label: 'Reader Reviews' },
];

export default function Stats() {
  return (
    <section className="relative bg-lagoon-950 text-sand-50">
      <div className="bg-ink-950 text-lagoon-950">
        <WaveDivider />
      </div>
      <div className="mx-auto max-w-6xl px-6 pb-20 sm:pb-24">
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
              <span className="mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-sand-50/10 text-coral-400">
                <stat.icon size={22} strokeWidth={1.8} />
              </span>
              <p className="font-display text-3xl font-bold sm:text-4xl">
                <AnimatedCounter value={stat.value} suffix={stat.suffix} decimals={stat.decimals ?? 0} />
              </p>
              <p className="mt-1 font-body text-xs uppercase tracking-wide text-sand-200/70 sm:text-sm">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
      <div className="absolute inset-x-0 bottom-0 translate-y-px text-sand-50">
        <WaveDivider flip />
      </div>
    </section>
  );
}
