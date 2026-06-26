import { useEffect, useState } from 'react';
import { AnimatePresence, LayoutGroup, motion } from 'framer-motion';
import { Menu as MenuIcon, Waves, X } from 'lucide-react';

const links = [
  { id: 'reviews', label: 'Reviews' },
  { id: 'menu', label: 'Menu' },
  { id: 'gallery', label: 'Gallery' },
  { id: 'visit', label: 'Visit' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState<string>('');
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    const sections = links
      .map((l) => document.getElementById(l.id))
      .filter((el): el is HTMLElement => Boolean(el));

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { rootMargin: '-45% 0px -45% 0px' },
    );

    sections.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const handleNavClick = (id: string) => {
    setMobileOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-500 ${
        scrolled || mobileOpen
          ? 'bg-sand-50/95 shadow-sm backdrop-blur-md'
          : 'bg-gradient-to-b from-ink-950/50 to-transparent'
      }`}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 sm:px-8">
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="flex items-center gap-2"
        >
          <span
            className={`flex h-9 w-9 items-center justify-center rounded-full transition-colors duration-500 ${
              scrolled || mobileOpen ? 'bg-lagoon-700 text-sand-50' : 'bg-sand-50/15 text-sand-50'
            }`}
          >
            <Waves size={18} strokeWidth={2.2} />
          </span>
          <span
            className={`font-display text-lg font-semibold tracking-tight transition-colors duration-500 ${
              scrolled || mobileOpen ? 'text-ink-900' : 'text-sand-50'
            }`}
          >
            Maldives Bites
          </span>
        </button>

        <LayoutGroup>
          <div className="hidden items-center gap-1 md:flex">
            {links.map((link) => (
              <button
                key={link.id}
                onClick={() => handleNavClick(link.id)}
                className={`relative rounded-full px-4 py-2 font-body text-sm font-semibold transition-colors duration-300 ${
                  active === link.id
                    ? scrolled
                      ? 'text-lagoon-800'
                      : 'text-ink-900'
                    : scrolled
                      ? 'text-ink-600 hover:text-ink-900'
                      : 'text-sand-100 hover:text-sand-50'
                }`}
              >
                {active === link.id && (
                  <motion.span
                    layoutId="nav-active-pill"
                    className="absolute inset-0 rounded-full bg-sand-200"
                    transition={{ type: 'spring', stiffness: 380, damping: 32 }}
                  />
                )}
                <span className="relative z-10">{link.label}</span>
              </button>
            ))}
          </div>
        </LayoutGroup>

        <button
          onClick={() => handleNavClick('visit')}
          className={`hidden rounded-full px-5 py-2.5 font-body text-sm font-bold shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg sm:inline-flex ${
            scrolled ? 'bg-coral-500 text-sand-50' : 'bg-sand-50 text-ink-900'
          }`}
        >
          Plan Your Trip
        </button>

        <button
          className={`flex h-10 w-10 items-center justify-center rounded-full md:hidden ${
            scrolled || mobileOpen ? 'text-ink-900' : 'text-sand-50'
          }`}
          onClick={() => setMobileOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X size={22} /> : <MenuIcon size={22} />}
        </button>
      </nav>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="overflow-hidden border-t border-ink-100 bg-sand-50 md:hidden"
          >
            <div className="flex flex-col px-5 py-3">
              {links.map((link) => (
                <button
                  key={link.id}
                  onClick={() => handleNavClick(link.id)}
                  className="py-3 text-left font-body text-base font-semibold text-ink-800"
                >
                  {link.label}
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
