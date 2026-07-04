import { useEffect, useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import Preloader from './components/Preloader';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Marquee from './components/Marquee';
import Stats from './components/Stats';
import Reviews from './components/Reviews';
import Menu from './components/Menu';
import Gallery from './components/Gallery';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';
import BackToTop from './components/BackToTop';

const tickerItems = [
  'Undersea Dining',
  'Overwater Grills',
  'Heritage Maldivian',
  'Malé Institutions',
  'Sunset Tables',
  'Seaplane Transfers',
];

export default function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1300);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    document.body.style.overflow = loading ? 'hidden' : '';
  }, [loading]);

  return (
    <>
      <AnimatePresence>{loading && <Preloader />}</AnimatePresence>

      {/* Amber page frame: body is marigold, the site lives on a rounded charcoal canvas.
          overflow-clip (not hidden) so the sticky navbar keeps working. */}
      <div className="p-2 sm:p-3">
        <div className="relative overflow-clip rounded-2xl bg-night-950 ring-1 ring-night-700/70 sm:rounded-[1.75rem]">
          <Navbar />
          <main>
            <Hero />
            <Marquee items={tickerItems} />
            <Reviews />
            <Menu />
            <Stats />
            <Gallery />
            <Testimonials />
          </main>
          <Footer />
        </div>
      </div>
      <BackToTop />
    </>
  );
}
