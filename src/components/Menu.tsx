import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { menu } from '../data/menu';
import SectionHeading from './SectionHeading';

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
    <section id="menu" className="bg-sand-100 py-20 sm:py-28">
      <div className="mx-auto max-w-5xl px-6">
        <SectionHeading
          eyebrow="Sample Menu"
          title="A taste of what's on the table"
          description="Dishes our reviewers kept ordering across the islands — your mileage (and final menu) will vary by restaurant."
        />

        <div className="mt-10 flex flex-wrap justify-center gap-2">
          {menu.map((c) => (
            <button
              key={c.id}
              onClick={() => setActive(c.id)}
              className={`relative rounded-full px-5 py-2.5 font-body text-sm font-bold transition-colors duration-300 ${
                active === c.id ? 'text-sand-50' : 'text-ink-600 hover:text-ink-900'
              }`}
            >
              {active === c.id && (
                <motion.span
                  layoutId="menu-tab-indicator"
                  className="absolute inset-0 rounded-full bg-lagoon-700"
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
                <motion.div
                  key={item.id}
                  variants={itemVariants}
                  className="flex gap-4 rounded-2xl bg-white p-4 shadow-sm ring-1 ring-ink-900/5"
                >
                  <div className="relative h-20 w-20 shrink-0 overflow-hidden rounded-xl sm:h-24 sm:w-24">
                    <img src={item.image} alt={item.name} className="h-full w-full object-cover" />
                    {item.tag && (
                      <span className="absolute inset-x-0 bottom-0 bg-coral-500 py-0.5 text-center font-body text-[9px] font-bold uppercase tracking-wide text-sand-50">
                        {item.tag}
                      </span>
                    )}
                  </div>
                  <div className="flex flex-1 flex-col justify-center">
                    <div className="flex items-baseline gap-2">
                      <h4 className="font-display text-base font-bold text-ink-900 sm:text-lg">{item.name}</h4>
                      <span className="flex-1 border-b border-dotted border-ink-300" />
                      <span className="shrink-0 font-display text-base font-bold text-coral-600">
                        ${item.price}
                      </span>
                    </div>
                    <p className="mt-1 line-clamp-2 font-body text-sm text-ink-500">{item.description}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
