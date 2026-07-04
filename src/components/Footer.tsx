import { useState, type FormEvent } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { CheckCircle2, Facebook, Instagram, Mail, MapPin, Send } from 'lucide-react';

const exploreLinks = [
  { id: 'reviews', label: 'Restaurants' },
  { id: 'menu', label: 'Menu' },
  { id: 'gallery', label: 'Gallery' },
];

export default function Footer() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!email.trim()) return;
    setSubmitted(true);
    setEmail('');
  };

  const scrollTo = (id: string) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });

  return (
    <footer id="visit" className="border-t border-cream-50/10 bg-night-950 text-cream-100">
      <div className="mx-auto max-w-7xl px-6 pb-12 pt-16">
        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-[1.3fr_0.8fr_1fr]">
          <div>
            <p className="font-script text-2xl text-amber-400">Maldives Bites</p>
            <p className="mt-4 max-w-sm font-body text-sm leading-relaxed text-cream-100/55">
              Independent reviews, menus and directions for the Maldives&rsquo; most celebrated
              restaurants — undersea, overwater and in the capital. Visited, rated and written
              up by actual diners.
            </p>
            <div className="mt-5 flex items-center gap-3">
              <a
                href="#"
                aria-label="Instagram"
                className="flex h-9 w-9 items-center justify-center rounded-full bg-night-800 ring-1 ring-cream-50/10 transition-colors hover:bg-amber-400 hover:text-night-950"
              >
                <Instagram size={16} />
              </a>
              <a
                href="#"
                aria-label="Facebook"
                className="flex h-9 w-9 items-center justify-center rounded-full bg-night-800 ring-1 ring-cream-50/10 transition-colors hover:bg-amber-400 hover:text-night-950"
              >
                <Facebook size={16} />
              </a>
              <a
                href="mailto:hello@maldivesbites.example"
                aria-label="Email"
                className="flex h-9 w-9 items-center justify-center rounded-full bg-night-800 ring-1 ring-cream-50/10 transition-colors hover:bg-amber-400 hover:text-night-950"
              >
                <Mail size={16} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-body text-xs font-bold uppercase tracking-[0.18em] text-cream-50">Explore</h4>
            <ul className="mt-4 space-y-2.5">
              {exploreLinks.map((link) => (
                <li key={link.id}>
                  <button
                    onClick={() => scrollTo(link.id)}
                    className="font-body text-sm text-cream-100/55 transition-colors hover:text-amber-400"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
            <p className="mt-6 flex items-center gap-2 font-body text-sm text-cream-100/55">
              <MapPin size={14} className="text-amber-400" /> Malé, Republic of Maldives
            </p>
          </div>

          <div>
            <h4 className="font-body text-xs font-bold uppercase tracking-[0.18em] text-cream-50">
              Get new reviews first
            </h4>
            <p className="mt-4 font-body text-sm text-cream-100/55">
              One email a month. New restaurants, menu standouts, no spam.
            </p>
            <form onSubmit={handleSubmit} className="mt-4">
              <AnimatePresence mode="wait">
                {submitted ? (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="flex items-center gap-2 rounded-full bg-amber-400/10 px-4 py-3 font-body text-sm text-amber-300 ring-1 ring-amber-400/30"
                  >
                    <CheckCircle2 size={16} /> Subscribed — see you in your inbox.
                  </motion.div>
                ) : (
                  <motion.div
                    key="form"
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="flex overflow-hidden rounded-full bg-night-800 p-1.5 ring-1 ring-cream-50/15 focus-within:ring-amber-400"
                  >
                    <input
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="you@email.com"
                      className="w-full bg-transparent px-3 font-body text-sm text-cream-50 placeholder:text-cream-100/30 focus:outline-none"
                    />
                    <button
                      type="submit"
                      aria-label="Subscribe"
                      className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-amber-400 text-night-950 transition-transform hover:scale-105"
                    >
                      <Send size={14} />
                    </button>
                  </motion.div>
                )}
              </AnimatePresence>
            </form>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-3 border-t border-cream-50/10 pt-6 sm:flex-row">
          <p className="font-body text-xs text-cream-100/40">
            © {new Date().getFullYear()} Maldives Bites. A concept food-review site, built for demo purposes.
          </p>
          <p className="font-body text-xs text-cream-100/40">Made with ❤ for the Indian Ocean</p>
        </div>
      </div>
    </footer>
  );
}
