import { motion } from 'framer-motion';
import { Waves } from 'lucide-react';

export default function Preloader() {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, transition: { duration: 0.5, ease: 'easeInOut' } }}
      className="fixed inset-0 z-[200] flex flex-col items-center justify-center gap-5 bg-lagoon-950"
    >
      <motion.span
        initial={{ scale: 0.6, opacity: 0, rotate: -8 }}
        animate={{ scale: 1, opacity: 1, rotate: 0 }}
        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        className="flex h-16 w-16 items-center justify-center rounded-full bg-sand-50/10 text-sand-50"
      >
        <Waves size={28} strokeWidth={2} />
      </motion.span>
      <motion.span
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.5 }}
        className="font-display text-lg font-semibold tracking-wide text-sand-50"
      >
        Maldives Bites
      </motion.span>
      <div className="h-0.5 w-40 overflow-hidden rounded-full bg-sand-50/15">
        <motion.div
          initial={{ width: '0%' }}
          animate={{ width: '100%' }}
          transition={{ duration: 1.1, ease: 'easeInOut' }}
          className="h-full bg-coral-400"
        />
      </div>
    </motion.div>
  );
}
