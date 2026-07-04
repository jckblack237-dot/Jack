import { motion } from 'framer-motion';

export default function Preloader() {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, transition: { duration: 0.5, ease: 'easeInOut' } }}
      className="fixed inset-0 z-[200] flex flex-col items-center justify-center gap-5 bg-night-950"
    >
      <motion.span
        initial={{ scale: 0.7, opacity: 0, rotate: -6 }}
        animate={{ scale: 1, opacity: 1, rotate: 0 }}
        transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
        className="font-script text-4xl text-amber-400 sm:text-5xl"
      >
        Maldives Bites
      </motion.span>
      <motion.span
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.25, duration: 0.5 }}
        className="font-body text-[11px] font-semibold uppercase tracking-[0.3em] text-cream-100/50"
      >
        Island Dining, Reviewed
      </motion.span>
      <div className="h-0.5 w-40 overflow-hidden rounded-full bg-cream-50/10">
        <motion.div
          initial={{ width: '0%' }}
          animate={{ width: '100%' }}
          transition={{ duration: 1.1, ease: 'easeInOut' }}
          className="h-full bg-amber-400"
        />
      </div>
    </motion.div>
  );
}
