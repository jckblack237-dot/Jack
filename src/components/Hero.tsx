import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ChevronDown, Facebook, Instagram, Star, Twitter } from 'lucide-react';
import { img, ids } from '../data/images';

const headline = ['The Finest Tables', 'in the Maldives'];

const container = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.12, delayChildren: 0.25 },
  },
};

const lineVariant = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
};

const socials = [
  { icon: Twitter, label: 'Twitter', href: '#' },
  { icon: Facebook, label: 'Facebook', href: '#' },
  { icon: Instagram, label: 'Instagram', href: '#' },
];

export default function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] });
  const plateY = useTransform(scrollYProgress, [0, 1], [0, 90]);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.75], [1, 0]);

  const scrollTo = (id: string) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });

  return (
    <section
      id="home"
      ref={ref}
      className="relative flex min-h-[92svh] w-full items-center overflow-hidden bg-night-950"
    >
      {/* soft amber glow behind the plate */}
      <div className="pointer-events-none absolute -right-40 top-1/2 h-[620px] w-[620px] -translate-y-1/2 rounded-full bg-amber-500/10 blur-3xl" />

      <motion.div
        style={{ opacity: contentOpacity }}
        className="relative z-10 mx-auto grid w-full max-w-7xl items-center gap-14 px-6 pb-24 pt-10 sm:px-8 lg:grid-cols-[1.05fr_0.95fr] lg:gap-8 lg:pb-16"
      >
        {/* Left — copy */}
        <div className="text-center lg:text-left">
          <motion.p
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-script text-xl text-amber-400 sm:text-2xl"
          >
            island dining, reviewed
          </motion.p>

          <motion.h1
            variants={container}
            initial="hidden"
            animate="show"
            className="mt-4 font-display text-4xl font-bold leading-[1.08] text-cream-50 sm:text-6xl xl:text-7xl"
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
            transition={{ duration: 0.6, delay: 0.85 }}
            className="mx-auto mt-6 max-w-md text-balance font-body text-sm leading-relaxed text-cream-100/60 sm:text-base lg:mx-0"
          >
            Twelve celebrated restaurants — undersea domes, overwater grills and Malé
            institutions — reviewed with full menus, honest prices and exact directions
            to every table.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1 }}
            className="mt-9 flex flex-col items-center gap-3 sm:flex-row lg:justify-start sm:justify-center"
          >
            <button
              onClick={() => scrollTo('reviews')}
              className="rounded-full bg-amber-400 px-7 py-3.5 font-body text-xs font-bold uppercase tracking-[0.14em] text-night-950 shadow-lg shadow-amber-950/40 transition-all duration-300 hover:-translate-y-0.5 hover:bg-amber-300"
            >
              Explore Restaurants
            </button>
            <button
              onClick={() => scrollTo('menu')}
              className="rounded-full border border-cream-50/25 px-7 py-3.5 font-body text-xs font-bold uppercase tracking-[0.14em] text-cream-50 transition-all duration-300 hover:-translate-y-0.5 hover:border-amber-400 hover:text-amber-400"
            >
              View the Menus
            </button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1.2 }}
            className="mt-10 flex items-center justify-center gap-5 lg:justify-start"
          >
            <span className="flex items-center gap-1.5 font-body text-xs text-cream-100/70">
              <Star size={13} className="fill-amber-400 text-amber-400" />
              4.8 average rating
            </span>
            <span className="h-3 w-px bg-cream-50/20" />
            <span className="font-body text-xs text-cream-100/70">12 restaurants</span>
            <span className="h-3 w-px bg-cream-50/20" />
            <span className="font-body text-xs text-cream-100/70">7 atolls</span>
          </motion.div>
        </div>

        {/* Right — plated dish */}
        <motion.div style={{ y: plateY }} className="relative mx-auto w-[min(78vw,540px)] lg:w-full">
          <motion.div
            initial={{ opacity: 0, scale: 0.85, rotate: 8 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 0.9, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="relative aspect-square overflow-hidden rounded-full shadow-[0_45px_90px_-25px_rgba(0,0,0,0.8)] ring-1 ring-cream-50/10"
          >
            <img
              src={img(ids.mainSeafoodPlate, 1100)}
              alt="Signature seafood plate from a Maldives restaurant"
              className="h-full w-full object-cover"
            />
          </motion.div>

          {/* orbiting dashed ring */}
          <div className="pointer-events-none absolute -inset-5 animate-spin-slow rounded-full border border-dashed border-amber-400/25 motion-reduce:animate-none" />

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.3, duration: 0.6 }}
            className="absolute -left-2 bottom-8 rounded-2xl border border-cream-50/10 bg-night-900/80 px-4 py-3 backdrop-blur-md animate-float sm:-left-6"
          >
            <p className="font-display text-sm font-bold text-cream-50">Fresh reef catch</p>
            <p className="font-body text-[11px] text-cream-100/60">grilled over coconut charcoal</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: -16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.45, duration: 0.6 }}
            className="absolute -right-1 top-8 rounded-2xl border border-cream-50/10 bg-night-900/80 px-4 py-3 backdrop-blur-md animate-float-slow sm:-right-4"
          >
            <div className="flex items-center gap-1 text-amber-400">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} size={11} fill="currentColor" />
              ))}
            </div>
            <p className="mt-0.5 font-body text-[11px] text-cream-100/60">15,000+ diner reviews</p>
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Social rail (reference: right-edge icons) */}
      <motion.div
        initial={{ opacity: 0, x: 12 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 1.5, duration: 0.6 }}
        className="absolute right-6 top-1/2 z-10 hidden -translate-y-1/2 flex-col items-center gap-5 xl:flex"
      >
        <span className="h-14 w-px bg-cream-50/15" />
        {socials.map((s) => (
          <a
            key={s.label}
            href={s.href}
            aria-label={s.label}
            className="text-cream-100/50 transition-colors duration-300 hover:text-amber-400"
          >
            <s.icon size={16} />
          </a>
        ))}
        <span className="h-14 w-px bg-cream-50/15" />
      </motion.div>

      <motion.button
        onClick={() => scrollTo('reviews')}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.6 }}
        className="absolute bottom-5 left-1/2 z-10 flex -translate-x-1/2 flex-col items-center gap-1 text-cream-100/50 transition-colors hover:text-amber-400"
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
