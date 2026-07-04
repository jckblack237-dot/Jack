import { img, ids } from './images';

export interface MenuHighlight {
  name: string;
  description: string;
  price: number;
}

export interface Directions {
  transfer: string;
  time: string;
  tip: string;
  mapsUrl: string;
}

export type RestaurantCategory = 'undersea' | 'overwater' | 'beach' | 'city';

export interface Restaurant {
  id: string;
  name: string;
  venue: string;
  island: string;
  atoll: string;
  category: RestaurantCategory;
  cuisine: string;
  price: '$' | '$$' | '$$$' | '$$$$';
  rating: number;
  tags: string[];
  excerpt: string;
  review: string;
  image: string;
  menu: MenuHighlight[];
  directions: Directions;
}

export const categoryFilters: { id: RestaurantCategory | 'all'; label: string }[] = [
  { id: 'all', label: 'All Tables' },
  { id: 'undersea', label: 'Undersea' },
  { id: 'overwater', label: 'Overwater' },
  { id: 'beach', label: 'Beach & Garden' },
  { id: 'city', label: 'Malé City' },
];

const maps = (query: string) =>
  `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(query)}`;

export const restaurants: Restaurant[] = [
  {
    id: 'ithaa-undersea',
    name: 'Ithaa Undersea Restaurant',
    venue: 'Conrad Maldives Rangali Island',
    island: 'Rangali Island',
    atoll: 'South Ari Atoll',
    category: 'undersea',
    cuisine: 'Contemporary European · Tasting Menu',
    price: '$$$$',
    rating: 4.8,
    tags: ['5m Below the Surface', 'Glass Dome', 'World Famous'],
    excerpt:
      'The restaurant that started it all — a glass dome five metres beneath the Indian Ocean, with reef sharks gliding over your dessert.',
    review:
      'Ithaa is the original undersea dining room and it still delivers the purest version of the fantasy: an acrylic tunnel five metres down with 180-degree views of the house reef. Lunch is the smart booking — the water is brightest at midday and the champagne menu is a little kinder to the wallet than dinner. The cooking is polished contemporary European built around lobster, wagyu and caviar, but be honest with yourself: you are here for the moment a turtle drifts over the ceiling between courses. Book weeks ahead; there are only 14 seats.',
    image: img(ids.restaurantChandelier, 1200),
    menu: [
      { name: 'Champagne Lunch (4 courses)', description: 'Set menu with a glass of champagne, mid-day reef views', price: 245 },
      { name: 'Dinner Degustation (6 courses)', description: 'Signature evening tasting, wine pairing available', price: 395 },
      { name: 'Maldivian Lobster Medallion', description: 'Poached lobster, citrus beurre blanc, keta caviar', price: 98 },
      { name: 'Wagyu Beef Tenderloin', description: 'Grade 9 wagyu, truffle jus, pommes purée', price: 120 },
    ],
    directions: {
      transfer: 'Seaplane from Malé (Velana International) to Conrad Maldives Rangali Island, arranged by the resort',
      time: 'About 30 minutes by seaplane from Malé, then a short walk along the jetty',
      tip: 'Day visitors can book Ithaa with a dining reservation — contact the resort in advance for the transfer.',
      mapsUrl: maps('Ithaa Undersea Restaurant, Conrad Maldives Rangali Island, Maldives'),
    },
  },
  {
    id: 'five-eight-undersea',
    name: '5.8 Undersea Restaurant',
    venue: 'Hurawalhi Island Resort',
    island: 'Hurawalhi Island',
    atoll: 'Lhaviyani Atoll',
    category: 'undersea',
    cuisine: 'Modern Fine Dining · Set Menus',
    price: '$$$$',
    rating: 4.9,
    tags: ['Largest Glass Restaurant', '5.8m Deep', 'Adults Only'],
    excerpt:
      'The world\'s largest all-glass undersea restaurant, 5.8 metres down, where the tasting menu competes with a coral wall for your attention.',
    review:
      'Where Ithaa is a tunnel, 5.8 is a room — the largest all-glass undersea restaurant anywhere, and the extra space changes the experience completely. Tables sit a comfortable distance apart, the ceiling arcs high enough to forget you are under pressure, and the five- and seven-course menus are genuinely ambitious rather than captive-audience cooking: think yellowfin tuna with smoked coconut, and a chocolate-and-sea-salt finale plated to mirror the reef outside. Go for lunch if you want the theatre of visibility, dinner if you want the room moodily lit and half-empty. Adults only, and worth every rufiyaa.',
    image: img(ids.restaurantOverwater, 1200),
    menu: [
      { name: '5-Course Ocean Lunch', description: 'Daytime tasting with the brightest reef visibility', price: 280 },
      { name: '7-Course Signature Dinner', description: 'The full evening degustation, candlelit', price: 395 },
      { name: 'Yellowfin Tuna, Smoked Coconut', description: 'Local line-caught tuna, coconut emulsion, finger lime', price: 88 },
      { name: 'Reef-to-Plate Ceviche', description: 'Daily reef catch, citrus leche de tigre, taro crisp', price: 72 },
    ],
    directions: {
      transfer: 'Seaplane from Malé to Hurawalhi Island Resort, booked through the resort',
      time: 'About 40 minutes by seaplane from Malé; the restaurant is at the end of the arrival jetty',
      tip: 'Sunset slots sell out first — reserve 5.8 the same day you confirm your room.',
      mapsUrl: maps('5.8 Undersea Restaurant, Hurawalhi Island Resort, Maldives'),
    },
  },
  {
    id: 'subsix',
    name: 'Subsix',
    venue: 'Niyama Private Islands',
    island: 'Embudhufushi',
    atoll: 'Dhaalu Atoll',
    category: 'undersea',
    cuisine: 'Seafood · Underwater Club Dining',
    price: '$$$$',
    rating: 4.7,
    tags: ['Speedboat Arrival', 'Glow Parties', 'Six Metres Down'],
    excerpt:
      'Part restaurant, part underwater nightclub — arrive by speedboat, descend a three-tier staircase, and dine six metres below the waves.',
    review:
      'Subsix is the loud, glamorous cousin of the undersea dining family. You reach it by speedboat from Niyama\'s jetty, descend a dramatic three-storey staircase, and surface — so to speak — in a room of anemone-shaped chandeliers and floor-to-ceiling ocean. The champagne breakfast is the sleeper hit: soft light, rays cruising past, and no DJ. Lunches lean seafood-forward (the chilled shellfish platter is superb); some evenings the tables get cleared for glow-in-the-dark parties, so check the calendar before you book a quiet dinner. It is the most fun you can have at minus six metres.',
    image: img(ids.galleryFormal, 1200),
    menu: [
      { name: 'Champagne Breakfast', description: 'Morning set with champagne, six metres under', price: 190 },
      { name: 'Chilled Shellfish Platter', description: 'Lobster, prawns, reef clams, three dressings', price: 145 },
      { name: '4-Course Ocean Dinner', description: 'Seafood-led evening menu, anemone-lit dining room', price: 325 },
      { name: 'Dhaalu Reef Ceviche', description: 'Citrus-cured reef fish, coconut, wild lime', price: 68 },
    ],
    directions: {
      transfer: 'Seaplane or domestic flight + speedboat from Malé to Niyama Private Islands, then a short dedicated speedboat hop to the restaurant',
      time: 'About 40 minutes by seaplane from Malé; Subsix itself is a 1-minute boat ride off the beach',
      tip: 'Ask the resort for the champagne breakfast slot — same view, gentler price, no crowd.',
      mapsUrl: maps('Subsix, Niyama Private Islands, Maldives'),
    },
  },
  {
    id: 'm6m',
    name: 'M6m — Minus Six Metres',
    venue: 'OZEN Life Maadhoo',
    island: 'Maadhoo Island',
    atoll: 'South Malé Atoll',
    category: 'undersea',
    cuisine: 'Fine Seafood · Degustation',
    price: '$$$$',
    rating: 4.7,
    tags: ['Closest to Malé', 'All-Glass Wall', 'Degustation'],
    excerpt:
      'The most accessible of the undersea rooms — a 45-minute speedboat from the airport, then six metres down to a wall of living reef.',
    review:
      'M6m ("Minus Six Metres") is the undersea experience for people who refuse the seaplane premium: OZEN Life Maadhoo is a straight 45-minute speedboat from the airport, no weather-dependent flights required. The dining room is smaller and quieter than its famous rivals, with one long glass wall rather than a dome, and the fixed seafood degustation is confident — a langoustine course with Maldivian curry butter was the best single plate we ate in the atoll. For guests on the resort\'s plan a meal here is often included once per stay, which makes it the best-value undersea table in the country.',
    image: img(ids.galleryCandles, 1200),
    menu: [
      { name: 'Seafood Degustation (5 courses)', description: 'The signature fixed menu against the reef wall', price: 220 },
      { name: 'Langoustine, Curry Butter', description: 'Grilled langoustine, Maldivian spice beurre', price: 85 },
      { name: 'Chilled Ocean Bisque', description: 'Reef crustacean bisque, coconut cream, lime oil', price: 42 },
      { name: 'Valrhona Reef Finale', description: 'Dark chocolate, sea salt, gold leaf', price: 36 },
    ],
    directions: {
      transfer: 'Speedboat from Malé (Velana International) direct to OZEN Life Maadhoo — no seaplane needed',
      time: 'About 45 minutes by speedboat from the airport jetty',
      tip: 'On OZEN\'s all-inclusive plan one M6m dinner is typically included — confirm when booking your stay.',
      mapsUrl: maps('M6m Restaurant, OZEN Life Maadhoo, South Malé Atoll, Maldives'),
    },
  },
  {
    id: 'sea-fire-salt',
    name: 'Sea.Fire.Salt',
    venue: 'Anantara Dhigu Maldives Resort',
    island: 'Dhigufinolhu',
    atoll: 'South Malé Atoll',
    category: 'overwater',
    cuisine: 'Grill · Steak & Seafood',
    price: '$$$',
    rating: 4.6,
    tags: ['Salt Sommelier', 'Overwater Deck', 'Open Grill'],
    excerpt:
      'An overwater grill with its own salt sommelier — pick your cut, pick your salt, and watch the lagoon turn pink while it chars.',
    review:
      'Sea.Fire.Salt does one thing and does it theatrically: protein, flame, and a salt trolley. The restaurant sits on its own jetty over the lagoon, and dinner starts with a salt sommelier walking you through smoked, volcanic and Himalayan options matched to whatever you have ordered — gimmick on paper, genuinely useful in practice, especially against the salt-baked whole red snapper, which arrives cracked open tableside. Steaks are aged and correctly rested; the surf-and-turf with reef lobster is the order for first-timers. Come at 6pm, take the deck\'s west rail, and let the sunset do the décor.',
    image: img(ids.restaurantAerial, 1200),
    menu: [
      { name: 'Salt-Baked Red Snapper', description: 'Whole reef snapper, salt crust cracked tableside', price: 68 },
      { name: 'Reef Lobster & Wagyu Surf-and-Turf', description: 'Grilled half lobster, wagyu striploin, twin sauces', price: 150 },
      { name: 'Maldivian Octopus, Charred Lime', description: 'Slow-cooked then flame-finished, smoked salt', price: 46 },
      { name: 'Sommelier\'s Salt Flight', description: 'Five salts matched to your mains', price: 18 },
    ],
    directions: {
      transfer: 'Speedboat from Malé to Anantara Dhigu; the restaurant is on the resort\'s overwater jetty',
      time: 'About 35 minutes by speedboat from the airport',
      tip: 'Non-resort guests can often book with advance notice — the resort arranges the boat with the reservation.',
      mapsUrl: maps('Sea.Fire.Salt, Anantara Dhigu Maldives Resort, Maldives'),
    },
  },
  {
    id: 'benjarong',
    name: 'Benjarong',
    venue: 'Dusit Thani Maldives',
    island: 'Mudhdhoo Island',
    atoll: 'Baa Atoll',
    category: 'overwater',
    cuisine: 'Royal Thai · Overwater',
    price: '$$$',
    rating: 4.7,
    tags: ['Royal Thai Recipes', 'Lagoon Deck', 'UNESCO Atoll'],
    excerpt:
      'Royal Thai cooking on an overwater deck in a UNESCO biosphere atoll — the tom yum alone justifies the seaplane.',
    review:
      'Benjarong translates the Dusit group\'s royal Thai heritage to a deck above a Baa Atoll lagoon, and the result is the best Thai food in the Maldives by a comfortable margin. The kitchen refuses to blunt the heat for resort palates unless you ask — the tom yum goong arrives properly hot-and-sour with river prawns the size of a fist, and the massaman lamb shank falls apart into its curry. Baa is a UNESCO biosphere reserve, so pair dinner with a manta excursion in season (June to November) and you have the perfect Maldives day. Service is Thai-gracious, sunset views are point-blank.',
    image: img(ids.restaurantGarden, 1200),
    menu: [
      { name: 'Tom Yum Goong', description: 'Hot-and-sour river prawn soup, royal recipe', price: 28 },
      { name: 'Massaman Lamb Shank', description: 'Slow-braised, roasted peanuts, jasmine rice', price: 52 },
      { name: 'Grilled Reef Fish, Nam Jim', description: 'Daily catch, three-chilli dipping sauce', price: 44 },
      { name: 'Mango Sticky Rice', description: 'Island mango, coconut cream, toasted mung beans', price: 18 },
    ],
    directions: {
      transfer: 'Seaplane from Malé to Dusit Thani Maldives (Mudhdhoo Island), arranged by the resort',
      time: 'About 35 minutes by seaplane from Malé',
      tip: 'Visit June–November and book a manta ray trip in Hanifaru Bay before dinner — same atoll, same day.',
      mapsUrl: maps('Benjarong Restaurant, Dusit Thani Maldives, Baa Atoll, Maldives'),
    },
  },
  {
    id: 'batheli',
    name: 'Ba\'theli by the Reef',
    venue: 'Milaidhoo Island Maldives',
    island: 'Milaidhoo',
    atoll: 'Baa Atoll',
    category: 'overwater',
    cuisine: 'Maldivian Heritage · Tasting',
    price: '$$$$',
    rating: 4.9,
    tags: ['Boat-Shaped Pavilions', 'Spice Route Menu', 'Only Gourmet Maldivian'],
    excerpt:
      'The country\'s first gourmet Maldivian restaurant, set in three boat-shaped pavilions in the lagoon and built on old spice-route recipes.',
    review:
      'Ba\'theli is the restaurant the Maldives always deserved: the nation\'s own cuisine, taken seriously, in three dhoni-boat-shaped pavilions standing in the lagoon. The menu traces the old spice route — cinnamon, cardamom and dried tuna threading through a tasting menu that elevates home cooking without embalming it. The garudhiya consommé poured over smoked reef fish is a genuine signature, and the kulhi boakibaa (spiced fish cake) course made our table go quiet. This is the one reservation we would defend against any undersea dome in the country. Come hungry, and come curious.',
    image: img(ids.galleryStilts, 1200),
    menu: [
      { name: 'Spice Route Tasting (6 courses)', description: 'The signature journey through Maldivian heritage cooking', price: 190 },
      { name: 'Garudhiya Consommé', description: 'Clear tuna broth, smoked reef fish, curry leaf oil', price: 38 },
      { name: 'Kulhi Boakibaa', description: 'Traditional spiced fish cake, island chutney', price: 26 },
      { name: 'Lagoon Lobster Riha', description: 'Lobster in mild Maldivian curry, roshi bread', price: 88 },
    ],
    directions: {
      transfer: 'Seaplane from Malé to Milaidhoo Island, arranged by the resort',
      time: 'About 35 minutes by seaplane from Malé; the pavilions sit just off the main jetty',
      tip: 'Ask for the sunset seating in the western pavilion — the boat\'s "bow" points straight at it.',
      mapsUrl: maps('Ba\'theli Restaurant, Milaidhoo Island, Baa Atoll, Maldives'),
    },
  },
  {
    id: 'fresh-in-the-garden',
    name: 'Fresh in the Garden',
    venue: 'Soneva Fushi',
    island: 'Kunfunadhoo Island',
    atoll: 'Baa Atoll',
    category: 'beach',
    cuisine: 'Garden-to-Table · Vegetarian-Forward',
    price: '$$$$',
    rating: 4.8,
    tags: ['Rope Bridge Entrance', 'Own Gardens', 'Barefoot Luxury'],
    excerpt:
      'Cross a rope bridge into the treetops and eat what the island grew that morning — Soneva Fushi\'s garden restaurant is barefoot luxury at its purest.',
    review:
      'You reach Fresh in the Garden by a rope bridge strung above Soneva Fushi\'s vegetable gardens, shoes long since surrendered at your villa — this is the "no news, no shoes" island, and the restaurant is its philosophy on a plate. Most of the menu was in the ground that morning: banana-blossom salads, garden greens charred over coconut husk, herbs snipped to order. It is vegetarian-forward rather than vegetarian-only, and the fish dishes are excellent, but the vegetables are the stars in a country that imports almost everything. Long lunches here, with the atoll breeze moving through the treetops, are what the word "unhurried" was invented for.',
    image: img(ids.galleryPalmsSunset, 1200),
    menu: [
      { name: 'Garden Tasting (5 courses)', description: 'That morning\'s harvest, chef\'s sequence', price: 180 },
      { name: 'Banana Blossom & Young Coconut Salad', description: 'Island-grown, lime-chilli dressing', price: 34 },
      { name: 'Coconut-Husk Charred Greens', description: 'Garden brassicas, smoked over husks, garden herbs', price: 29 },
      { name: 'Reef Fish, Garden Curry', description: 'Daily catch, curry of the morning\'s vegetables', price: 58 },
    ],
    directions: {
      transfer: 'Seaplane from Malé to Soneva Fushi (Kunfunadhoo Island), arranged by the resort',
      time: 'About 40 minutes by seaplane from Malé, then a bicycle or buggy ride through the jungle',
      tip: 'Go barefoot and take the bicycle — the sandy jungle path to the rope bridge is half the experience.',
      mapsUrl: maps('Fresh in the Garden, Soneva Fushi, Baa Atoll, Maldives'),
    },
  },
  {
    id: 'blu-landaa',
    name: 'Blu',
    venue: 'Four Seasons Resort Landaa Giraavaru',
    island: 'Landaa Giraavaru',
    atoll: 'Baa Atoll',
    category: 'beach',
    cuisine: 'Italian · Beachfront',
    price: '$$$',
    rating: 4.6,
    tags: ['Toes-in-Sand', 'Handmade Pasta', 'Manta Season'],
    excerpt:
      'Handmade pasta with your toes in the sand — Four Seasons\' beachfront Italian is the easiest great meal in Baa Atoll.',
    review:
      'Blu is proof that after three days of tasting menus, what you actually want is perfect spaghetti on a beach. The Four Seasons Landaa Giraavaru\'s Italian beach house rolls its pasta daily, splits its wood-fired pizzas between classicists and mango-chutney adventurers, and serves it all at driftwood tables where the Indian Ocean handles the white noise. The lobster linguine — local reef lobster, unreasonable amounts of butter — is the dish everyone photographs and nobody regrets. Lunch is barefoot casual; dinner adds candlelight and a short, smart Italian wine list. In manta season the resort\'s biologists sometimes give pre-dinner talks; time your negroni accordingly.',
    image: img(ids.restaurantBeachTent, 1200),
    menu: [
      { name: 'Reef Lobster Linguine', description: 'Hand-cut pasta, local lobster, butter and basil', price: 58 },
      { name: 'Wood-Fired Margherita', description: 'San Marzano, fior di latte, garden basil', price: 32 },
      { name: 'Burrata, Island Tomatoes', description: 'Flown-in burrata, hydroponic tomatoes, aged balsamic', price: 36 },
      { name: 'Tiramisù della Casa', description: 'Classic, espresso-soaked, made this morning', price: 22 },
    ],
    directions: {
      transfer: 'Seaplane from Malé to Four Seasons Landaa Giraavaru, arranged by the resort',
      time: 'About 40 minutes by seaplane from Malé; Blu sits on the western beach',
      tip: 'Book the last table before sunset and stay for the beach bonfire that follows most evenings.',
      mapsUrl: maps('Blu Restaurant, Four Seasons Resort Maldives at Landaa Giraavaru, Maldives'),
    },
  },
  {
    id: 'thila-kurumba',
    name: 'Thila',
    venue: 'Kurumba Maldives',
    island: 'Vihamanaafushi',
    atoll: 'North Malé Atoll',
    category: 'beach',
    cuisine: 'Seafood · Beachfront Grill',
    price: '$$',
    rating: 4.5,
    tags: ['10 Minutes from Airport', 'First Resort Island', 'Sunset Grill'],
    excerpt:
      'On the Maldives\' first-ever resort island, ten minutes from the airport — the easiest overwater sunset dinner in the country.',
    review:
      'Kurumba was the Maldives\' first resort island, and Thila, its seafood flagship, remains the smartest first-night or last-night dinner in the country: the speedboat from the airport takes ten minutes, which means you can land at 6pm and be eating grilled reef fish by 7:30. The kitchen keeps it honest — a daily catch display, a charcoal grill, a Maldivian curry section that locals actually order from — and the deck looks west over the lagoon for the full sunset show. It lacks the isolation romance of the outer atolls, and that is exactly the point: zero seaplanes, zero logistics, one excellent dinner.',
    image: img(ids.galleryBeachChairs, 1200),
    menu: [
      { name: 'Charcoal-Grilled Daily Catch', description: 'Pick your fish from the ice display, three marinades', price: 42 },
      { name: 'Maldivian Tuna Curry', description: 'Fresh yellowfin, coconut, curry leaves, roshi', price: 28 },
      { name: 'Grilled Tiger Prawns', description: 'Garlic-lime butter, charred lemon', price: 38 },
      { name: 'Kurumba Coconut Parfait', description: 'A nod to the island\'s name — "kurumba" means young coconut', price: 16 },
    ],
    directions: {
      transfer: 'Speedboat from Malé (Velana International) direct to Kurumba Maldives — runs frequently, day and night',
      time: 'About 10 minutes by speedboat from the airport jetty',
      tip: 'Perfect for a first or last night — evening arrivals can still make dinner. Day visits bookable with a dining reservation.',
      mapsUrl: maps('Thila Restaurant, Kurumba Maldives, North Malé Atoll, Maldives'),
    },
  },
  {
    id: 'sala-thai-male',
    name: 'Sala Thai',
    venue: 'Sala Family Restaurants',
    island: 'Malé',
    atoll: 'Kaafu Atoll (Capital)',
    category: 'city',
    cuisine: 'Thai · City Institution',
    price: '$$',
    rating: 4.5,
    tags: ['Malé Institution', 'No Resort Prices', 'Locals\' Favourite'],
    excerpt:
      'The capital\'s beloved Thai institution — resort-quality cooking at city prices, ten minutes\' walk from the airport ferry.',
    review:
      'Every Malé local has a Sala Thai story, and after one dinner you will understand why: this is polished, generous Thai cooking at a third of resort prices, in a teak-panelled dining room that has hosted half the city\'s anniversaries. The duck curry is the house legend — roast duck, lychees, a red curry with real depth — and the som tam arrives at honest Thai heat. Malé is dry (no alcohol outside resorts), so trade the wine list for a lime juice with sea salt and watch the city\'s dinner crowd come and go. If your itinerary includes a night in the capital, this is the table to book.',
    image: img(ids.galleryWicker, 1200),
    menu: [
      { name: 'Roast Duck & Lychee Curry', description: 'The house signature, red curry, jasmine rice', price: 18 },
      { name: 'Som Tam Thai', description: 'Green papaya salad, proper heat, roasted peanuts', price: 9 },
      { name: 'Pad Thai Goong', description: 'River prawns, tamarind, banana blossom', price: 14 },
      { name: 'Steamed Reef Grouper, Lime & Chilli', description: 'Whole fish, Thai-style, for two', price: 26 },
    ],
    directions: {
      transfer: 'Airport ferry or taxi across the Sinamalé Bridge from Velana International to Malé, then a short walk into the city centre',
      time: 'About 15 minutes by ferry from the airport, then a 10-minute walk',
      tip: 'Malé is alcohol-free — go for the fresh lime juice. Book ahead on weekends; it fills with local families.',
      mapsUrl: maps('Sala Thai Restaurant, Malé, Maldives'),
    },
  },
  {
    id: 'seagull-cafe',
    name: 'Seagull Café House',
    venue: 'Independent · Since 1970s',
    island: 'Malé',
    atoll: 'Kaafu Atoll (Capital)',
    category: 'city',
    cuisine: 'Café · Grills & Ice Cream',
    price: '$',
    rating: 4.4,
    tags: ['Garden Courtyard', 'Famous Ice Cream', 'Budget Friendly'],
    excerpt:
      'Malé\'s garden-courtyard café, famous for its house-made ice cream — the cheapest great meal in this guide by a mile.',
    review:
      'Seagull Café House is where Malé actually eats: a shaded garden courtyard folded improbably into the capital\'s densest blocks, serving grills, sandwiches, Maldivian breakfasts and the ice cream it has been famous for across generations. Order the mas huni with roshi in the morning like a local — smoked tuna, coconut and onion, the national breakfast — or a grilled chicken plate at lunch, and leave room for two scoops from the ice-cream counter regardless. Nothing costs more than a resort espresso. Between the fish market and the friday mosque on your city walk, this is the stop that makes the capital make sense.',
    image: img(ids.galleryPoolLounge, 1200),
    menu: [
      { name: 'Mas Huni & Roshi', description: 'The Maldivian breakfast — smoked tuna, coconut, flatbread', price: 6 },
      { name: 'Grilled Chicken Plate', description: 'Char-grilled, garlic rice, courtyard classic', price: 11 },
      { name: 'Seagull Club Sandwich', description: 'Triple-decked, the city lunch order', price: 8 },
      { name: 'House Ice Cream (2 scoops)', description: 'Made in-house for decades — try the coconut', price: 4 },
    ],
    directions: {
      transfer: 'Airport ferry or taxi to Malé; the café sits in the city centre near the northern waterfront',
      time: 'About 15 minutes by ferry from the airport, then a short walk',
      tip: 'Combine with the fish market and Old Friday Mosque for the classic two-hour Malé walking loop.',
      mapsUrl: maps('Seagull Café House, Malé, Maldives'),
    },
  },
];
