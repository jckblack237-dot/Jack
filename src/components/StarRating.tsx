import { motion } from 'framer-motion';
import { Star } from 'lucide-react';

interface StarRatingProps {
  rating: number;
  size?: number;
  className?: string;
}

export default function StarRating({ rating, size = 16, className = '' }: StarRatingProps) {
  const percent = Math.max(0, Math.min(1, rating / 5)) * 100;

  return (
    <div className={`relative inline-flex ${className}`} aria-label={`Rated ${rating} out of 5`}>
      <div className="flex gap-0.5 text-ink-200">
        {Array.from({ length: 5 }).map((_, i) => (
          <Star key={i} size={size} strokeWidth={1.5} fill="currentColor" />
        ))}
      </div>
      <motion.div
        className="absolute inset-0 flex gap-0.5 overflow-hidden text-coral-500"
        initial={{ width: 0 }}
        whileInView={{ width: `${percent}%` }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: 'easeOut', delay: 0.2 }}
      >
        {Array.from({ length: 5 }).map((_, i) => (
          <Star key={i} size={size} strokeWidth={1.5} fill="currentColor" className="shrink-0" />
        ))}
      </motion.div>
    </div>
  );
}
