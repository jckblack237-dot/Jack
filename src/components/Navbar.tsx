import { useEffect, useState } from 'react';
import { AnimatePresence, LayoutGroup, motion } from 'framer-motion';
import { Menu as MenuIcon, Search, X } from 'lucide-react';

const links = [
  { id: 'home', label: 'Home' },
  { id: 'reviews', label: 'Restaurants' },
  { id: 'menu', label: 'Menu' },
  { id: 'gallery', label: 'Gallery' },
  { id: 'visit', label: 'Contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState<string>('home');
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
    if (id === 'home') window.scrollTo({ top: 0, behavior: 'smooth' });
    else document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header
      className={`sticky top-0 z-50 transition-colors duration-500 ${
        scrolled || mobileOpen
          ? 'border-b border-cream-50/10 bg-night-950/90 backdrop-blur-md'
          : 'bg-transparent'
      }`}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 sm:px-8">
        <button
          onClick={() => handleNavClick('home')}
          className="font-script text-xl text-amber-400 transition-colors hover:text-amber-300 sm:text-2xl"
        >
          Maldives Bites
        </button>

        <LayoutGroup>
          <div className="hidden items-center gap-7 md:flex">
            {links.map((link) => (
              <button
                key={link.id}
                onClick={() => handleNavClick(link.id)}
                className={`relative pb-1 font-body text-[11px] font-bold uppercase tracking-[0.22em] transition-colors duration-300 ${
                  active === link.id ? 'text-amber-400' : 'text-cream-100/60 hover:text-cream-50'
                }`}
              >
                {link.label}
                {active === link.id && (
                  <motion.span
                    layoutId="nav-underline"
                    className="absolute inset-x-0 bottom-0 h-px bg-amber-400"
                    transition={{ type: 'spring', stiffness: 380, damping: 32 }}
                  />
                )}
              </button>
            ))}
          </div>
        </LayoutGroup>

        <div className="flex items-center gap-2">
          <button
            onClick={() => handleNavClick('reviews')}
            aria-label="Search restaurants"
            className="hidden h-9 w-9 items-center justify-center rounded-full text-cream-100/60 transition-colors hover:text-amber-400 sm:flex"
          >
            <Search size={17} />
          </button>

          <button
            onClick={() => handleNavClick('visit')}
            className="hidden rounded-full bg-amber-400 px-5 py-2.5 font-body text-[11px] font-bold uppercase tracking-[0.14em] text-night-950 transition-all duration-300 hover:-translate-y-0.5 hover:bg-amber-300 sm:inline-flex"
          >
            Book a Table
          </button>

          <button
            className="flex h-10 w-10 items-center justify-center rounded-full text-cream-50 md:hidden"
            onClick={() => setMobileOpen((v) => !v)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={22} /> : <MenuIcon size={22} />}
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="overflow-hidden border-t border-cream-50/10 bg-night-950 md:hidden"
          >
            <div className="flex flex-col px-5 py-3">
              {links.map((link) => (
                <button
                  key={link.id}
                  onClick={() => handleNavClick(link.id)}
                  className={`py-3 text-left font-body text-sm font-bold uppercase tracking-[0.18em] ${
                    active === link.id ? 'text-amber-400' : 'text-cream-100/80'
                  }`}
                >
                  {link.label}
                </button>
              ))}
              <button
                onClick={() => handleNavClick('visit')}
                className="mb-2 mt-2 rounded-full bg-amber-400 px-5 py-3 text-center font-body text-xs font-bold uppercase tracking-[0.14em] text-night-950"
              >
                Book a Table
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
