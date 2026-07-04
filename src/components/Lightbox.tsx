import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { ChevronLeft, ChevronRight, X } from 'lucide-react';
import type { GalleryPhoto } from '../data/gallery';

interface LightboxProps {
  photos: GalleryPhoto[];
  index: number;
  onClose: () => void;
  onIndexChange: (index: number) => void;
}

const variants = {
  enter: (direction: number) => ({ opacity: 0, x: direction * 80 }),
  center: { opacity: 1, x: 0 },
  exit: (direction: number) => ({ opacity: 0, x: -direction * 80 }),
};

export default function Lightbox({ photos, index, onClose, onIndexChange }: LightboxProps) {
  const [direction, setDirection] = useState(1);

  const go = (next: number, dir: number) => {
    setDirection(dir);
    onIndexChange((next + photos.length) % photos.length);
  };

  useEffect(() => {
    document.body.style.overflow = 'hidden';
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowRight') go(index + 1, 1);
      if (e.key === 'ArrowLeft') go(index - 1, -1);
    };
    window.addEventListener('keydown', onKey);
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', onKey);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [index]);

  const photo = photos[index];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
      className="fixed inset-0 z-[100] flex items-center justify-center bg-night-950/95 p-4 backdrop-blur-sm"
    >
      <button
        onClick={(e) => {
          e.stopPropagation();
          onClose();
        }}
        aria-label="Close"
        className="absolute right-4 top-4 flex h-10 w-10 items-center justify-center rounded-full bg-cream-50/10 text-cream-50 transition-colors hover:bg-amber-400 hover:text-night-950 sm:right-6 sm:top-6"
      >
        <X size={22} />
      </button>

      <span className="absolute left-4 top-4 font-body text-sm text-cream-100/60 sm:left-6 sm:top-6">
        {index + 1} / {photos.length}
      </span>

      <button
        onClick={(e) => {
          e.stopPropagation();
          go(index - 1, -1);
        }}
        aria-label="Previous photo"
        className="absolute left-2 flex h-11 w-11 items-center justify-center rounded-full bg-cream-50/10 text-cream-50 transition-colors hover:bg-amber-400 hover:text-night-950 sm:left-5"
      >
        <ChevronLeft size={24} />
      </button>

      <div className="flex max-h-[80vh] w-full max-w-4xl flex-col items-center" onClick={(e) => e.stopPropagation()}>
        <div className="relative flex max-h-[70vh] w-full items-center justify-center overflow-hidden rounded-2xl">
          <AnimatePresence mode="wait" custom={direction} initial={false}>
            <motion.img
              key={photo.id}
              src={photo.full}
              alt={photo.caption}
              custom={direction}
              variants={variants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.35, ease: 'easeInOut' }}
              className="max-h-[70vh] w-full rounded-2xl object-contain"
            />
          </AnimatePresence>
        </div>
        <p className="mt-4 text-center font-body text-sm text-cream-100/70">{photo.caption}</p>
      </div>

      <button
        onClick={(e) => {
          e.stopPropagation();
          go(index + 1, 1);
        }}
        aria-label="Next photo"
        className="absolute right-2 flex h-11 w-11 items-center justify-center rounded-full bg-cream-50/10 text-cream-50 transition-colors hover:bg-amber-400 hover:text-night-950 sm:right-5"
      >
        <ChevronRight size={24} />
      </button>
    </motion.div>
  );
}
