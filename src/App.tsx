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
  'Fresh Reef Catch',
  'Sunset Tables',
  'Private Sandbanks',
  'Overwater Dining',
  'Heritage Recipes',
  '120+ Restaurants Reviewed',
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

      <Navbar />
      <main>
        <Hero />
        <Marquee items={tickerItems} />
        <Stats />
        <Reviews />
        <Menu />
        <Gallery />
        <Testimonials />
      </main>
      <Footer />
      <BackToTop />
    </>
  );
}
