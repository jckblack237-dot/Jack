import { useEffect, useState, type FormEvent } from 'react';
import { motion } from 'framer-motion';
import { CalendarCheck, X } from 'lucide-react';
import { restaurants } from '../data/restaurants';
import { createReservation, type Reservation } from '../lib/api';

interface BookingModalProps {
  initialRestaurantId: string | null;
  onClose: () => void;
}

const timeSlots = ['12:00', '12:30', '13:00', '13:30', '18:00', '18:30', '19:00', '19:30', '20:00', '20:30', '21:00'];

const today = () => new Date().toISOString().slice(0, 10);

const inputClass =
  'w-full rounded-xl bg-night-800 px-4 py-3 font-body text-sm text-cream-50 ring-1 ring-cream-50/15 placeholder:text-cream-100/30 focus:outline-none focus:ring-amber-400 [color-scheme:dark]';

export default function BookingModal({ initialRestaurantId, onClose }: BookingModalProps) {
  const [restaurantId, setRestaurantId] = useState(initialRestaurantId ?? restaurants[0].id);
  const [date, setDate] = useState(today());
  const [time, setTime] = useState('19:00');
  const [party, setParty] = useState(2);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [sending, setSending] = useState(false);
  const [result, setResult] = useState<{ reservation: Reservation; offline: boolean } | null>(null);

  useEffect(() => {
    document.body.style.overflow = 'hidden';
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && onClose();
    window.addEventListener('keydown', onKey);
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', onKey);
    };
  }, [onClose]);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (sending) return;
    setSending(true);
    const restaurant = restaurants.find((r) => r.id === restaurantId)!;
    const res = await createReservation({
      restaurantId,
      restaurantName: restaurant.name,
      name,
      email,
      date,
      time,
      party,
    });
    setResult(res);
    setSending(false);
  };

  const restaurant = restaurants.find((r) => r.id === restaurantId)!;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
      className="fixed inset-0 z-[110] flex items-center justify-center bg-night-950/80 p-4 backdrop-blur-sm sm:p-6"
    >
      <motion.div
        onClick={(e) => e.stopPropagation()}
        initial={{ opacity: 0, y: 24, scale: 0.97 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: 16, scale: 0.97 }}
        transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
        className="relative max-h-[90vh] w-full max-w-lg overflow-y-auto rounded-3xl bg-night-900 p-6 ring-1 ring-cream-50/10 sm:p-8"
      >
        <button
          onClick={onClose}
          aria-label="Close booking"
          className="absolute right-4 top-4 flex h-9 w-9 items-center justify-center rounded-full bg-night-800 text-cream-50 transition-colors hover:bg-amber-400 hover:text-night-950"
        >
          <X size={18} />
        </button>

        {result ? (
          <motion.div
            key="confirmed"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex flex-col items-center py-6 text-center"
          >
            <span className="flex h-14 w-14 items-center justify-center rounded-full bg-amber-400 text-night-950">
              <CalendarCheck size={26} />
            </span>
            <p className="mt-4 font-script text-xl text-amber-400">table requested</p>
            <h3 className="mt-1 font-display text-2xl font-bold text-cream-50">
              {result.reservation.restaurantName}
            </h3>
            <p className="mt-3 font-body text-sm text-cream-100/70">
              {result.reservation.date} at {result.reservation.time} · party of {result.reservation.party}
            </p>
            <p className="mt-4 rounded-full bg-night-800 px-4 py-2 font-body text-sm font-bold tracking-wider text-amber-400 ring-1 ring-cream-50/10">
              Ref {result.reservation.reference}
            </p>
            <p className="mt-4 max-w-sm font-body text-xs leading-relaxed text-cream-100/50">
              {result.offline
                ? 'Saved on this device (demo mode — no booking server reachable). The restaurant/resort confirms bookings directly.'
                : `Request received — a confirmation email goes to ${result.reservation.email}. Resort restaurants arrange transfers with the booking.`}
            </p>
            <button
              onClick={onClose}
              className="mt-6 rounded-full bg-amber-400 px-7 py-3 font-body text-xs font-bold uppercase tracking-[0.14em] text-night-950 transition-all duration-300 hover:-translate-y-0.5 hover:bg-amber-300"
            >
              Done
            </button>
          </motion.div>
        ) : (
          <motion.div key="form" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
            <p className="font-script text-lg text-amber-400">book a table</p>
            <h3 className="mt-1 font-display text-2xl font-bold text-cream-50">Reserve your evening</h3>
            <p className="mt-2 font-body text-xs text-cream-100/50">
              {restaurant.island} · {restaurant.atoll}
            </p>

            <form onSubmit={handleSubmit} className="mt-6 space-y-4">
              <label className="block">
                <span className="mb-1.5 block font-body text-xs font-bold uppercase tracking-wide text-cream-100/50">
                  Restaurant
                </span>
                <select value={restaurantId} onChange={(e) => setRestaurantId(e.target.value)} className={inputClass}>
                  {restaurants.map((r) => (
                    <option key={r.id} value={r.id}>
                      {r.name} — {r.island}
                    </option>
                  ))}
                </select>
              </label>

              <div className="grid grid-cols-2 gap-4">
                <label className="block">
                  <span className="mb-1.5 block font-body text-xs font-bold uppercase tracking-wide text-cream-100/50">
                    Date
                  </span>
                  <input
                    type="date"
                    required
                    min={today()}
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                    className={inputClass}
                  />
                </label>
                <label className="block">
                  <span className="mb-1.5 block font-body text-xs font-bold uppercase tracking-wide text-cream-100/50">
                    Time
                  </span>
                  <select value={time} onChange={(e) => setTime(e.target.value)} className={inputClass}>
                    {timeSlots.map((t) => (
                      <option key={t} value={t}>
                        {t}
                      </option>
                    ))}
                  </select>
                </label>
              </div>

              <label className="block">
                <span className="mb-1.5 block font-body text-xs font-bold uppercase tracking-wide text-cream-100/50">
                  Party size
                </span>
                <select value={party} onChange={(e) => setParty(Number(e.target.value))} className={inputClass}>
                  {[1, 2, 3, 4, 5, 6, 7, 8].map((n) => (
                    <option key={n} value={n}>
                      {n} {n === 1 ? 'guest' : 'guests'}
                    </option>
                  ))}
                </select>
              </label>

              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <label className="block">
                  <span className="mb-1.5 block font-body text-xs font-bold uppercase tracking-wide text-cream-100/50">
                    Name
                  </span>
                  <input
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Your name"
                    className={inputClass}
                  />
                </label>
                <label className="block">
                  <span className="mb-1.5 block font-body text-xs font-bold uppercase tracking-wide text-cream-100/50">
                    Email
                  </span>
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="you@email.com"
                    className={inputClass}
                  />
                </label>
              </div>

              <button
                type="submit"
                disabled={sending}
                className="mt-2 w-full rounded-full bg-amber-400 px-7 py-3.5 font-body text-xs font-bold uppercase tracking-[0.14em] text-night-950 transition-all duration-300 hover:-translate-y-0.5 hover:bg-amber-300 disabled:cursor-not-allowed disabled:opacity-60"
              >
                {sending ? 'Sending…' : 'Request Reservation'}
              </button>
            </form>
          </motion.div>
        )}
      </motion.div>
    </motion.div>
  );
}
