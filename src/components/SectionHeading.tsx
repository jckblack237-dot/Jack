import { motion } from 'framer-motion';

interface SectionHeadingProps {
  eyebrow: string;
  title: string;
  description?: string;
  align?: 'left' | 'center';
  light?: boolean;
}

export default function SectionHeading({
  eyebrow,
  title,
  description,
  align = 'center',
  light = false,
}: SectionHeadingProps) {
  const isCenter = align === 'center';

  return (
    <div className={`flex flex-col ${isCenter ? 'items-center text-center' : 'items-start text-left'}`}>
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
        className={`mb-4 flex items-center gap-3 ${isCenter ? 'justify-center' : ''}`}
      >
        <span className={`h-px w-8 ${light ? 'bg-coral-300' : 'bg-coral-500'}`} />
        <span
          className={`font-body text-xs font-bold uppercase tracking-[0.25em] ${
            light ? 'text-coral-300' : 'text-coral-600'
          }`}
        >
          {eyebrow}
        </span>
        <span className={`h-px w-8 ${light ? 'bg-coral-300' : 'bg-coral-500'}`} />
      </motion.div>

      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, ease: 'easeOut', delay: 0.05 }}
        className={`text-balance font-display text-3xl font-semibold sm:text-4xl md:text-5xl ${
          light ? 'text-sand-50' : 'text-ink-900'
        }`}
      >
        {title}
      </motion.h2>

      {description && (
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: 'easeOut', delay: 0.12 }}
          className={`mt-4 max-w-2xl text-balance text-base leading-relaxed sm:text-lg ${
            light ? 'text-sand-200/80' : 'text-ink-600'
          }`}
        >
          {description}
        </motion.p>
      )}
    </div>
  );
}
