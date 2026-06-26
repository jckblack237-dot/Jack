import { useEffect, useRef, useState } from 'react';
import { AnimatePresence, motion, type PanInfo } from 'framer-motion';
import { ChevronLeft, ChevronRight, Quote, Star } from 'lucide-react';
import { testimonials } from '../data/testimonials';

export default function Testimonials() {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(1);
  const paused = useRef(false);

  const go = (next: number, dir: number) => {
    setDirection(dir);
    setIndex((next + testimonials.length) % testimonials.length);
  };

  useEffect(() => {
    const id = setInterval(() => {
      if (!paused.current) go(index + 1, 1);
    }, 5500);
    return () => clearInterval(id);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [index]);

  const onDragEnd = (_: unknown, info: PanInfo) => {
    if (info.offset.x < -80) go(index + 1, 1);
    else if (info.offset.x > 80) go(index - 1, -1);
  };

  const t = testimonials[index];

  return (
    <section
      className="relative overflow-hidden bg-lagoon-50 py-20 sm:py-28"
      onMouseEnter={() => (paused.current = true)}
      onMouseLeave={() => (paused.current = false)}
    >
      <Quote className="absolute left-1/2 top-10 h-40 w-40 -translate-x-1/2 text-lagoon-700/5 sm:h-56 sm:w-56" />

      <div className="relative mx-auto max-w-3xl px-6 text-center">
        <span className="font-body text-xs font-bold uppercase tracking-[0.25em] text-coral-600">
          Guest Stories
        </span>
        <h2 className="mt-3 font-display text-3xl font-semibold text-ink-900 sm:text-4xl">
          What other diners are saying
        </h2>

        <div className="relative mt-12 flex min-h-[260px] items-center justify-center sm:min-h-[220px]">
          <AnimatePresence mode="wait" custom={direction} initial={false}>
            <motion.div
              key={t.id}
              custom={direction}
              initial={{ opacity: 0, x: direction * 60 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -direction * 60 }}
              transition={{ duration: 0.4, ease: 'easeOut' }}
              drag="x"
              dragConstraints={{ left: 0, right: 0 }}
              dragElastic={0.3}
              onDragEnd={onDragEnd}
              className="absolute inset-0 flex cursor-grab flex-col items-center justify-center active:cursor-grabbing"
            >
              <div className="flex gap-1 text-coral-500">
                {Array.from({ length: t.rating }).map((_, i) => (
                  <Star key={i} size={16} fill="currentColor" />
                ))}
              </div>
              <p className="mt-5 text-balance font-display text-xl italic leading-relaxed text-ink-800 sm:text-2xl">
                &ldquo;{t.quote}&rdquo;
              </p>
              <div className="mt-6 flex items-center gap-3">
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-lagoon-700 font-body text-sm font-bold text-sand-50">
                  {t.name.charAt(0)}
                </span>
                <div className="text-left">
                  <p className="font-body text-sm font-bold text-ink-900">{t.name}</p>
                  <p className="font-body text-xs text-ink-500">{t.origin}</p>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        <div className="mt-8 flex items-center justify-center gap-4">
          <button
            onClick={() => go(index - 1, -1)}
            aria-label="Previous testimonial"
            className="flex h-9 w-9 items-center justify-center rounded-full bg-white text-ink-600 shadow-sm transition-colors hover:bg-lagoon-700 hover:text-sand-50"
          >
            <ChevronLeft size={16} />
          </button>

          <div className="flex items-center gap-2">
            {testimonials.map((item, i) => (
              <button
                key={item.id}
                onClick={() => go(i, i > index ? 1 : -1)}
                aria-label={`Go to testimonial ${i + 1}`}
                className="relative h-2.5 w-2.5 rounded-full bg-ink-900/15"
              >
                {i === index && (
                  <motion.span
                    layoutId="testimonial-dot"
                    className="absolute inset-0 rounded-full bg-coral-500"
                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                  />
                )}
              </button>
            ))}
          </div>

          <button
            onClick={() => go(index + 1, 1)}
            aria-label="Next testimonial"
            className="flex h-9 w-9 items-center justify-center rounded-full bg-white text-ink-600 shadow-sm transition-colors hover:bg-lagoon-700 hover:text-sand-50"
          >
            <ChevronRight size={16} />
          </button>
        </div>
      </div>
    </section>
  );
}
