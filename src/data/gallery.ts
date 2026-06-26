import { img, ids } from './images';

export interface GalleryPhoto {
  id: string;
  src: string;
  full: string;
  caption: string;
}

export const galleryPhotos: GalleryPhoto[] = [
  {
    id: 'aerial',
    src: img(ids.galleryAerial, 800),
    full: img(ids.galleryAerial, 1600),
    caption: 'Golden hour over the house reef',
  },
  {
    id: 'walkway',
    src: img(ids.galleryWalkway, 800),
    full: img(ids.galleryWalkway, 1600),
    caption: 'The boardwalk leading to the overwater tables',
  },
  {
    id: 'stilts',
    src: img(ids.galleryStilts, 800),
    full: img(ids.galleryStilts, 1600),
    caption: 'Private dining villas above the lagoon',
  },
  {
    id: 'candles',
    src: img(ids.galleryCandles, 800),
    full: img(ids.galleryCandles, 1600),
    caption: 'Candlelit table settings as the sun goes down',
  },
  {
    id: 'formal',
    src: img(ids.galleryFormal, 800),
    full: img(ids.galleryFormal, 1600),
    caption: 'Fine china and crystal, every single evening',
  },
  {
    id: 'pool-lounge',
    src: img(ids.galleryPoolLounge, 800),
    full: img(ids.galleryPoolLounge, 1600),
    caption: 'Poolside lounging before the dinner service',
  },
  {
    id: 'palms-sunset',
    src: img(ids.galleryPalmsSunset, 800),
    full: img(ids.galleryPalmsSunset, 1600),
    caption: 'The view that keeps guests coming back',
  },
  {
    id: 'beach-chairs',
    src: img(ids.galleryBeachChairs, 800),
    full: img(ids.galleryBeachChairs, 1600),
    caption: 'Beachside seating for sunset cocktails',
  },
  {
    id: 'wicker',
    src: img(ids.galleryWicker, 800),
    full: img(ids.galleryWicker, 1600),
    caption: 'Intimate seating for two, lit by candlelight',
  },
  {
    id: 'infinity-pool',
    src: img(ids.galleryInfinityPool, 800),
    full: img(ids.galleryInfinityPool, 1600),
    caption: 'Where the sundowners get poured',
  },
];
