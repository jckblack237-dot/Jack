export interface Testimonial {
  id: string;
  name: string;
  origin: string;
  rating: number;
  quote: string;
}

export const testimonials: Testimonial[] = [
  {
    id: 't1',
    name: 'Naomi R.',
    origin: 'Cape Town',
    rating: 5,
    quote:
      'We used this guide to plan every dinner of our trip and didn\'t have a single bad meal. Faru Reef Kitchen was worth flying across the world for.',
  },
  {
    id: 't2',
    name: 'Marco D.',
    origin: 'Milan',
    rating: 5,
    quote:
      'Finally a Maldives food guide that isn\'t just resort marketing. The Hiyala House review sent us somewhere we\'d never have found ourselves, and it was the best meal of the trip.',
  },
  {
    id: 't3',
    name: 'Aiko T.',
    origin: 'Osaka',
    rating: 4,
    quote:
      'Honest about prices, honest about which sunset tables are worth the upcharge. The Driftwood Deck sandbank dinner was exactly as described.',
  },
  {
    id: 't4',
    name: 'Liam O.',
    origin: 'Dublin',
    rating: 5,
    quote:
      'The menu breakdowns saved us from over-ordering on our first night. Booked three more restaurants straight from this site.',
  },
];
