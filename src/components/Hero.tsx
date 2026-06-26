import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ChevronDown, Star } from 'lucide-react';
import { img, ids } from '../data/images';

const headline = ['Discover the Flavours', 'of the Maldives'];

const container = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.12, delayChildren: 0.3 },
  },
};

const lineVariant = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
};

export default function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] });
  const y = useTransform(scrollYProgress, [0, 1], ['0%', '35%']);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.15]);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);

  return (
    <section ref={ref} className="relative h-[100svh] min-h-[640px] w-full overflow-hidden bg-ink-950">
      <motion.div className="absolute inset-0" style={{ y, scale }}>
        <img
          src={img(ids.heroMain, 1920, 75)}
          alt="Candlelit dining table set on the sand at sunset, Maldives"
          className="h-full w-full object-cover"
        />
      </motion.div>
      <div className="absolute inset-0 bg-gradient-to-b from-ink-950/70 via-ink-950/40 to-ink-950/85" />
      <div className="absolute inset-0 bg-gradient-to-t from-sand-50 via-transparent to-transparent" />

      <motion.div
        style={{ opacity: contentOpacity }}
        className="relative z-10 mx-auto flex h-full max-w-5xl flex-col items-center justify-center px-6 text-center"
      >
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mb-6 inline-flex items-center gap-2 rounded-full border border-sand-50/25 bg-sand-50/10 px-4 py-1.5 backdrop-blur-sm"
        >
          <Star size={14} className="fill-coral-400 text-coral-400" />
          <span className="font-body text-xs font-semibold uppercase tracking-[0.2em] text-sand-50">
            Indian Ocean Food Guide
          </span>
        </motion.div>

        <motion.h1
          variants={container}
          initial="hidden"
          animate="show"
          className="font-display text-4xl font-bold leading-[1.1] text-sand-50 sm:text-6xl md:text-7xl"
        >
          {headline.map((line) => (
            <motion.span key={line} variants={lineVariant} className="block text-balance">
              {line}
            </motion.span>
          ))}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.9 }}
          className="mt-6 max-w-xl text-balance text-base text-sand-100/90 sm:text-lg"
        >
          Honest reviews, real menus and unfiltered photos from the best overwater, beachfront
          and sandbank restaurants across the Maldives.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.05 }}
          className="mt-9 flex flex-col gap-3 sm:flex-row"
        >
          <button
            onClick={() => document.getElementById('reviews')?.scrollIntoView({ behavior: 'smooth' })}
            className="rounded-full bg-coral-500 px-7 py-3.5 font-body text-sm font-bold text-sand-50 shadow-lg shadow-coral-900/30 transition-transform duration-300 hover:-translate-y-0.5 hover:bg-coral-600"
          >
            Read the Reviews
          </button>
          <button
            onClick={() => document.getElementById('menu')?.scrollIntoView({ behavior: 'smooth' })}
            className="rounded-full border border-sand-50/40 bg-sand-50/10 px-7 py-3.5 font-body text-sm font-bold text-sand-50 backdrop-blur-sm transition-all duration-300 hover:-translate-y-0.5 hover:bg-sand-50/20"
          >
            Explore the Menu
          </button>
        </motion.div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4, duration: 0.6 }}
        className="absolute bottom-20 right-6 hidden rounded-2xl border border-sand-50/15 bg-ink-950/40 px-5 py-4 backdrop-blur-md animate-float sm:right-10 sm:block lg:right-16"
      >
        <div className="flex items-center gap-1 text-coral-400">
          {Array.from({ length: 5 }).map((_, i) => (
            <Star key={i} size={14} fill="currentColor" />
          ))}
        </div>
        <p className="mt-1 font-display text-2xl font-bold text-sand-50">4.8 / 5</p>
        <p className="font-body text-xs text-sand-200/80">from 15,000+ diners</p>
      </motion.div>

      <motion.button
        onClick={() => document.getElementById('reviews')?.scrollIntoView({ behavior: 'smooth' })}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.3 }}
        className="absolute bottom-6 left-1/2 z-10 flex -translate-x-1/2 flex-col items-center gap-1 text-sand-50/80"
        aria-label="Scroll down"
      >
        <span className="font-body text-[10px] uppercase tracking-[0.25em]">Scroll</span>
        <motion.span animate={{ y: [0, 6, 0] }} transition={{ duration: 1.6, repeat: Infinity }}>
          <ChevronDown size={18} />
        </motion.span>
      </motion.button>
    </section>
  );
}
