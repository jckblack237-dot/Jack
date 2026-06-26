import { img, ids } from './images';

export interface Restaurant {
  id: string;
  name: string;
  atoll: string;
  cuisine: string;
  price: '$$$' | '$$$$';
  rating: number;
  tags: string[];
  excerpt: string;
  review: string;
  image: string;
}

export const restaurants: Restaurant[] = [
  {
    id: 'faru-reef-kitchen',
    name: 'Faru Reef Kitchen',
    atoll: 'Baa Atoll',
    cuisine: 'Seafood · Tasting Menu',
    price: '$$$$',
    rating: 4.9,
    tags: ['Overwater', 'Sunset Views', 'Chef\'s Table'],
    excerpt:
      'A glass-floored deck suspended over the house reef, where the tasting menu changes with the morning catch.',
    review:
      'Faru Reef Kitchen earns every bit of its reputation as the atoll\'s most romantic table. We arrived for the last seating before sunset and watched reef sharks circle beneath our feet through the glass floor panels while the seven-course tasting menu unfolded. The smoked sailfish course alone is worth the seaplane transfer — delicate, smoky, plated with charred lime and a coconut-sambol foam that somehow doesn\'t feel gimmicky. Service is unhurried but precise, and the sommelier pairs each course with a half-glass pour so you actually finish the flight without rolling out of your chair. Book the 6:15pm slot if you can; the light show alone justifies the price tag.',
    image: img(ids.restaurantOverwater, 1200),
  },
  {
    id: 'the-coral-table',
    name: 'The Coral Table',
    atoll: 'North Malé Atoll',
    cuisine: 'Mediterranean-Maldivian Fusion',
    price: '$$$',
    rating: 4.7,
    tags: ['Beachfront', 'Live Grill', 'Date Night'],
    excerpt:
      'Driftwood tables on the sand and a live charcoal grill turning out reef fish with a Mediterranean accent.',
    review:
      'The Coral Table is the rare resort restaurant that feels like a neighbourhood favourite despite the five-star setting. Tables are scattered directly on the sand, lanterns strung between palms, and the open charcoal grill sits close enough that you can watch your grouper go from ice to flame. The hummus-and-reef-fish mezze starter is unexpectedly the highlight — bright, garlicky, made for sharing. Portions run generous and the house white (a crisp Assyrtiko) is criminally underpriced for the setting. Go for the 7pm seating and ask for a table at the tideline; by dessert the water is lapping a few feet from your sandals.',
    image: img(ids.restaurantBeachTent, 1200),
  },
  {
    id: 'driftwood-deck',
    name: 'Driftwood Deck',
    atoll: 'Raa Atoll',
    cuisine: 'Sandbank Dining · Grill',
    price: '$$$$',
    rating: 4.8,
    tags: ['Private Sandbank', 'Champagne Pairing', 'Sunset'],
    excerpt:
      'A private speedboat transfer to a sandbank table set for two, with a five-course menu cooked beachside.',
    review:
      'This is the splurge experience everyone\'s Maldives photos are secretly chasing. A short boat ride drops you on a sandbank that disappears entirely at high tide, where a single table is set under a canvas canopy with your own private chef. The lobster thermidor course was the best thing we ate all trip, and the staff time the dessert course to land exactly as the sun drops below the horizon — choreographed, sure, but it works. Weather-dependent and not cheap, but for an anniversary dinner there is nothing else in the Maldives that comes close.',
    image: img(ids.restaurantPool, 1200),
  },
  {
    id: 'anbara-overwater',
    name: 'Anbara Overwater',
    atoll: 'Lhaviyani Atoll',
    cuisine: 'Pan-Asian Seafood',
    price: '$$$',
    rating: 4.6,
    tags: ['Lagoon Views', 'Sushi Counter', 'Family Friendly'],
    excerpt:
      'A breezy lagoon-front dining room with a sushi counter up front and a Pan-Asian menu built around the day\'s reef catch.',
    review:
      'Anbara Overwater is the most versatile restaurant we tried — equally good for a quick lunch in board shorts or a proper anniversary dinner. The sushi counter at the entrance turns local tuna and trevally into a tight, well-edited omakase, while the main dining room leans into bigger Pan-Asian flavours: a tamarind-glazed reef fish, a green curry with local clams that has real depth of spice. The kids\' menu is one of the better ones we\'ve seen, which matters when half the dining room is families. Request the corner table by the open shutters for the best lagoon breeze.',
    image: img(ids.restaurantGarden, 1200),
  },
  {
    id: 'hiyala-house',
    name: 'Hiyala House',
    atoll: 'Addu Atoll',
    cuisine: 'Heritage Maldivian',
    price: '$$$',
    rating: 4.8,
    tags: ['Local Recipes', 'Garudhiya', 'Cultural Evenings'],
    excerpt:
      'The most authentic Maldivian menu we found on the trip, served in a restored stilt house with nightly Bodu Beru drumming.',
    review:
      'If you only eat at one truly Maldivian restaurant on your trip, make it Hiyala House. Skip the resort-fusion menus elsewhere and order the garudhiya — a clear, intensely savoury tuna broth with rice, lime and chilli that locals eat for breakfast — alongside mas huni and fresh roshi. The dining room is a restored stilt house with woven palm walls, and most nights end with a short Bodu Beru drumming performance that spills out onto the sand. It\'s less polished than the overwater fine-dining spots, and that\'s exactly the point: this is the food the islands actually eat.',
    image: img(ids.restaurantChandelier, 1200),
  },
  {
    id: 'thila-horizon',
    name: 'Thila Horizon',
    atoll: 'Ari Atoll',
    cuisine: 'Grill · Sundowner Lounge',
    price: '$$$$',
    rating: 4.7,
    tags: ['Infinity Pool', 'Cocktail Pairing', 'Sunset'],
    excerpt:
      'Part infinity-pool lounge, part grill restaurant, built around watching the sun drop into the Ari Atoll channel.',
    review:
      'Thila Horizon does double duty as the resort\'s sunset cocktail bar and its best grill restaurant, and somehow nails both. Arrive an hour before your table for a cocktail at the infinity pool\'s submerged bar stools, then move to a low-lit table for char-grilled reef snapper and a short, well-chosen list of natural wines. The kitchen\'s saffron seafood rice is the dish to order — smoky, generous with prawns and squid, clearly built for sharing. It\'s loud with applause most evenings around 6:45, when the entire pool deck stops to watch the sun finally drop into the channel.',
    image: img(ids.restaurantAerial, 1200),
  },
];
