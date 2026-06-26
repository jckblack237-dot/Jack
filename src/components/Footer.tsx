import { useState, type FormEvent } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { CheckCircle2, Facebook, Instagram, Mail, MapPin, Send, Waves } from 'lucide-react';
import WaveDivider from './WaveDivider';

const exploreLinks = [
  { id: 'reviews', label: 'Reviews' },
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
    <footer id="visit" className="relative bg-ink-950 text-sand-100">
      <div className="text-ink-950">
        <WaveDivider className="bg-lagoon-50" />
      </div>

      <div className="mx-auto max-w-7xl px-6 pb-12 pt-4">
        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-[1.3fr_0.8fr_1fr]">
          <div>
            <div className="flex items-center gap-2">
              <span className="flex h-9 w-9 items-center justify-center rounded-full bg-lagoon-700 text-sand-50">
                <Waves size={18} />
              </span>
              <span className="font-display text-lg font-semibold text-sand-50">Maldives Bites</span>
            </div>
            <p className="mt-4 max-w-sm font-body text-sm leading-relaxed text-sand-200/70">
              Independent reviews, sample menus and unfiltered photos from overwater, beachfront
              and sandbank restaurants across the Maldives. Visited, rated and written up by
              actual diners.
            </p>
            <div className="mt-5 flex items-center gap-3">
              <a
                href="#"
                aria-label="Instagram"
                className="flex h-9 w-9 items-center justify-center rounded-full bg-sand-50/10 transition-colors hover:bg-coral-500"
              >
                <Instagram size={16} />
              </a>
              <a
                href="#"
                aria-label="Facebook"
                className="flex h-9 w-9 items-center justify-center rounded-full bg-sand-50/10 transition-colors hover:bg-coral-500"
              >
                <Facebook size={16} />
              </a>
              <a
                href="mailto:hello@maldivesbites.example"
                aria-label="Email"
                className="flex h-9 w-9 items-center justify-center rounded-full bg-sand-50/10 transition-colors hover:bg-coral-500"
              >
                <Mail size={16} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-body text-sm font-bold uppercase tracking-wide text-sand-50">Explore</h4>
            <ul className="mt-4 space-y-2.5">
              {exploreLinks.map((link) => (
                <li key={link.id}>
                  <button
                    onClick={() => scrollTo(link.id)}
                    className="font-body text-sm text-sand-200/70 transition-colors hover:text-coral-400"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
            <p className="mt-6 flex items-center gap-2 font-body text-sm text-sand-200/70">
              <MapPin size={14} /> 26 atolls, Republic of Maldives
            </p>
          </div>

          <div>
            <h4 className="font-body text-sm font-bold uppercase tracking-wide text-sand-50">
              Get new reviews first
            </h4>
            <p className="mt-4 font-body text-sm text-sand-200/70">
              One email a month. New restaurants, menu standouts, no spam.
            </p>
            <form onSubmit={handleSubmit} className="mt-4">
              <AnimatePresence mode="wait">
                {submitted ? (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="flex items-center gap-2 rounded-full bg-lagoon-700/30 px-4 py-3 font-body text-sm text-lagoon-200"
                  >
                    <CheckCircle2 size={16} /> Subscribed — see you in your inbox.
                  </motion.div>
                ) : (
                  <motion.div
                    key="form"
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="flex overflow-hidden rounded-full bg-sand-50/10 p-1.5 ring-1 ring-sand-50/15 focus-within:ring-coral-400"
                  >
                    <input
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="you@email.com"
                      className="w-full bg-transparent px-3 font-body text-sm text-sand-50 placeholder:text-sand-200/40 focus:outline-none"
                    />
                    <button
                      type="submit"
                      aria-label="Subscribe"
                      className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-coral-500 text-sand-50 transition-transform hover:scale-105"
                    >
                      <Send size={14} />
                    </button>
                  </motion.div>
                )}
              </AnimatePresence>
            </form>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-3 border-t border-sand-50/10 pt-6 sm:flex-row">
          <p className="font-body text-xs text-sand-200/50">
            © {new Date().getFullYear()} Maldives Bites. A concept food-review site, built for demo purposes.
          </p>
          <p className="font-body text-xs text-sand-200/50">Made with ❤ for the Indian Ocean</p>
        </div>
      </div>
    </footer>
  );
}
