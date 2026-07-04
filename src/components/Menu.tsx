import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { menu } from '../data/menu';
import { restaurants } from '../data/restaurants';
import { openRestaurant } from '../lib/openRestaurant';
import SectionHeading from './SectionHeading';

const restaurantName = (id: string) => restaurants.find((r) => r.id === id)?.name ?? '';

const containerVariants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.07 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 18 },
  show: { opacity: 1, y: 0, transition: { duration: 0.4, ease: 'easeOut' } },
};

export default function Menu() {
  const [active, setActive] = useState(menu[0].id);
  const category = menu.find((c) => c.id === active)!;

  return (
    <section id="menu" className="bg-night-900 py-20 sm:py-28">
      <div className="mx-auto max-w-5xl px-6">
        <SectionHeading
          eyebrow="the menu"
          title="Signature dishes across the islands"
          description="The plates our reviewers kept ordering, atoll after atoll. Tap any dish to jump to its restaurant — full menus live inside each card in the directory above."
        />

        <div className="mt-10 flex flex-wrap justify-center gap-2">
          {menu.map((c) => (
            <button
              key={c.id}
              onClick={() => setActive(c.id)}
              className={`relative rounded-full px-5 py-2.5 font-body text-[11px] font-bold uppercase tracking-[0.14em] transition-colors duration-300 ${
                active === c.id ? 'text-night-950' : 'text-cream-100/60 hover:text-cream-50'
              }`}
            >
              {active === c.id && (
                <motion.span
                  layoutId="menu-tab-indicator"
                  className="absolute inset-0 rounded-full bg-amber-400"
                  transition={{ type: 'spring', stiffness: 380, damping: 32 }}
                />
              )}
              <span className="relative z-10">{c.label}</span>
            </button>
          ))}
        </div>

        <div className="relative mt-10 min-h-[200px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={active}
              variants={containerVariants}
              initial="hidden"
              animate="show"
              exit={{ opacity: 0, transition: { duration: 0.15 } }}
              className="grid gap-5 sm:grid-cols-2"
            >
              {category.items.map((item) => (
                <motion.button
                  key={item.id}
                  variants={itemVariants}
                  onClick={() => openRestaurant(item.restaurantId)}
                  className="group flex gap-4 rounded-2xl bg-night-800 p-4 text-left ring-1 ring-cream-50/8 transition-all duration-300 hover:-translate-y-0.5 hover:ring-amber-400/40"
                >
                  <div className="relative h-20 w-20 shrink-0 overflow-hidden rounded-xl sm:h-24 sm:w-24">
                    <img src={item.image} alt={item.name} className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110" />
                    {item.tag && (
                      <span className="absolute inset-x-0 bottom-0 bg-amber-400 py-0.5 text-center font-body text-[9px] font-bold uppercase tracking-wide text-night-950">
                        {item.tag}
                      </span>
                    )}
                  </div>
                  <div className="flex flex-1 flex-col justify-center">
                    <div className="flex items-baseline gap-2">
                      <h4 className="font-display text-base font-bold text-cream-50 sm:text-lg">{item.name}</h4>
                      <span className="flex-1 border-b border-dotted border-cream-50/20" />
                      <span className="shrink-0 font-display text-base font-bold text-amber-400">
                        ${item.price}
                      </span>
                    </div>
                    <p className="mt-1 line-clamp-2 font-body text-sm text-cream-100/50">{item.description}</p>
                    <span className="mt-1.5 inline-flex items-center gap-1 font-body text-xs font-semibold text-amber-400/90 transition-transform duration-300 group-hover:translate-x-0.5">
                      at {restaurantName(item.restaurantId)} <ArrowUpRight size={12} />
                    </span>
                  </div>
                </motion.button>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
