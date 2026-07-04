import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Expand } from 'lucide-react';
import { galleryPhotos } from '../data/gallery';
import SectionHeading from './SectionHeading';
import Lightbox from './Lightbox';

const tallIndexes = new Set([0, 2, 5, 8]);

export default function Gallery() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="gallery" className="bg-night-950 py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeading
          eyebrow="the setting"
          title="Pictures from the places themselves"
          description="Overwater decks, sandbank tables and the sunsets that come free with every booking."
        />

        <div className="mt-14 grid grid-cols-2 auto-rows-[150px] gap-3 sm:auto-rows-[200px] sm:gap-4 md:grid-cols-3 lg:grid-cols-4">
          {galleryPhotos.map((photo, i) => (
            <motion.button
              key={photo.id}
              onClick={() => setOpenIndex(i)}
              initial={{ opacity: 0, scale: 0.92 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.45, delay: (i % 4) * 0.08, ease: 'easeOut' }}
              className={`group relative overflow-hidden rounded-2xl ring-1 ring-cream-50/8 ${
                tallIndexes.has(i) ? 'row-span-2' : ''
              }`}
            >
              <img
                src={photo.src}
                alt={photo.caption}
                loading="lazy"
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-night-950/85 via-night-950/10 to-transparent opacity-60 transition-opacity duration-300 group-hover:opacity-90" />
              <span className="absolute right-3 top-3 flex h-8 w-8 items-center justify-center rounded-full bg-night-950/50 text-amber-400 opacity-0 backdrop-blur-sm transition-opacity duration-300 group-hover:opacity-100">
                <Expand size={14} />
              </span>
              <p className="absolute inset-x-3 bottom-3 translate-y-2 font-body text-xs font-medium text-cream-50 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100 sm:text-sm">
                {photo.caption}
              </p>
            </motion.button>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {openIndex !== null && (
          <Lightbox
            photos={galleryPhotos}
            index={openIndex}
            onClose={() => setOpenIndex(null)}
            onIndexChange={setOpenIndex}
          />
        )}
      </AnimatePresence>
    </section>
  );
}
