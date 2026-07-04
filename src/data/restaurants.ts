import { img, ids } from './images';

export interface MenuHighlight {
  name: string;
  description: string;
  price: number;
  image: string;
}

export interface Directions {
  transfer: string;
  time: string;
  tip: string;
  mapsUrl: string;
}

export type RestaurantCategory = 'undersea' | 'overwater' | 'beach' | 'city';

export type CuisineKey =
  | 'maldivian'
  | 'seafood-grill'
  | 'european'
  | 'italian'
  | 'thai'
  | 'indian'
  | 'japanese'
  | 'american'
  | 'cafe'
  | 'garden';

export interface Restaurant {
  id: string;
  name: string;
  venue: string;
  island: string;
  atoll: string;
  category: RestaurantCategory;
  cuisineKey: CuisineKey;
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
  { id: 'city', label: 'Malé & Hulhumalé' },
];

export const cuisineFilters: { id: CuisineKey | 'all'; label: string }[] = [
  { id: 'all', label: 'All Cuisines' },
  { id: 'maldivian', label: 'Maldivian' },
  { id: 'seafood-grill', label: 'Seafood & Grill' },
  { id: 'european', label: 'European' },
  { id: 'italian', label: 'Italian' },
  { id: 'thai', label: 'Thai' },
  { id: 'indian', label: 'Indian' },
  { id: 'japanese', label: 'Japanese' },
  { id: 'american', label: 'American' },
  { id: 'cafe', label: 'Café & Casual' },
  { id: 'garden', label: 'Garden & Veg' },
];

const maps = (query: string) =>
  `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(query)}`;

const dish = (id: string) => img(id, 300);

export const restaurants: Restaurant[] = [
  {
    id: 'ithaa-undersea',
    name: 'Ithaa Undersea Restaurant',
    venue: 'Conrad Maldives Rangali Island',
    island: 'Rangali Island',
    atoll: 'South Ari Atoll',
    category: 'undersea',
    cuisineKey: 'european',
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
      { name: 'Champagne Lunch (4 courses)', description: 'Set menu with a glass of champagne, mid-day reef views', price: 245, image: dish(ids.starterOysters) },
      { name: 'Dinner Degustation (6 courses)', description: 'Signature evening tasting, wine pairing available', price: 395, image: dish(ids.mainWhitePlate) },
      { name: 'Maldivian Lobster Medallion', description: 'Poached lobster, citrus beurre blanc, keta caviar', price: 98, image: dish(ids.mainLobster) },
      { name: 'Wagyu Beef Tenderloin', description: 'Grade 9 wagyu, truffle jus, pommes purée', price: 120, image: dish(ids.mainSeafoodPlate) },
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
    cuisineKey: 'european',
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
      { name: '5-Course Ocean Lunch', description: 'Daytime tasting with the brightest reef visibility', price: 280, image: dish(ids.starterShells) },
      { name: '7-Course Signature Dinner', description: 'The full evening degustation, candlelit', price: 395, image: dish(ids.mainWhitePlate) },
      { name: 'Yellowfin Tuna, Smoked Coconut', description: 'Local line-caught tuna, coconut emulsion, finger lime', price: 88, image: dish(ids.mainSeafoodPlate) },
      { name: 'Reef-to-Plate Ceviche', description: 'Daily reef catch, citrus leche de tigre, taro crisp', price: 72, image: dish(ids.starterShrimp) },
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
    cuisineKey: 'seafood-grill',
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
      { name: 'Champagne Breakfast', description: 'Morning set with champagne, six metres under', price: 190, image: dish(ids.dessertBerries) },
      { name: 'Chilled Shellfish Platter', description: 'Lobster, prawns, reef clams, three dressings', price: 145, image: dish(ids.starterShells) },
      { name: '4-Course Ocean Dinner', description: 'Seafood-led evening menu, anemone-lit dining room', price: 325, image: dish(ids.mainSeafoodPlate) },
      { name: 'Dhaalu Reef Ceviche', description: 'Citrus-cured reef fish, coconut, wild lime', price: 68, image: dish(ids.starterShrimp) },
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
    cuisineKey: 'seafood-grill',
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
      { name: 'Seafood Degustation (5 courses)', description: 'The signature fixed menu against the reef wall', price: 220, image: dish(ids.mainWhitePlate) },
      { name: 'Langoustine, Curry Butter', description: 'Grilled langoustine, Maldivian spice beurre', price: 85, image: dish(ids.mainLobster) },
      { name: 'Chilled Ocean Bisque', description: 'Reef crustacean bisque, coconut cream, lime oil', price: 42, image: dish(ids.starterShells) },
      { name: 'Valrhona Reef Finale', description: 'Dark chocolate, sea salt, gold leaf', price: 36, image: dish(ids.dessertBerries) },
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
    cuisineKey: 'seafood-grill',
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
      { name: 'Salt-Baked Red Snapper', description: 'Whole reef snapper, salt crust cracked tableside', price: 68, image: dish(ids.mainWhitePlate) },
      { name: 'Reef Lobster & Wagyu Surf-and-Turf', description: 'Grilled half lobster, wagyu striploin, twin sauces', price: 150, image: dish(ids.mainLobster) },
      { name: 'Maldivian Octopus, Charred Lime', description: 'Slow-cooked then flame-finished, smoked salt', price: 46, image: dish(ids.mainSeafoodTable) },
      { name: 'Sommelier\'s Salt Flight', description: 'Five salts matched to your mains', price: 18, image: dish(ids.starterShells) },
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
    cuisineKey: 'thai',
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
      { name: 'Tom Yum Goong', description: 'Hot-and-sour river prawn soup, royal recipe', price: 28, image: dish(ids.starterShrimp) },
      { name: 'Massaman Lamb Shank', description: 'Slow-braised, roasted peanuts, jasmine rice', price: 52, image: dish(ids.mainSeafoodTable) },
      { name: 'Grilled Reef Fish, Nam Jim', description: 'Daily catch, three-chilli dipping sauce', price: 44, image: dish(ids.mainWhitePlate) },
      { name: 'Mango Sticky Rice', description: 'Island mango, coconut cream, toasted mung beans', price: 18, image: dish(ids.dessertMangoTart) },
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
    cuisineKey: 'maldivian',
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
      { name: 'Spice Route Tasting (6 courses)', description: 'The signature journey through Maldivian heritage cooking', price: 190, image: dish(ids.mainSeafoodTable) },
      { name: 'Garudhiya Consommé', description: 'Clear tuna broth, smoked reef fish, curry leaf oil', price: 38, image: dish(ids.mainSeafoodPlate) },
      { name: 'Kulhi Boakibaa', description: 'Traditional spiced fish cake, island chutney', price: 26, image: dish(ids.starterShells) },
      { name: 'Lagoon Lobster Riha', description: 'Lobster in mild Maldivian curry, roshi bread', price: 88, image: dish(ids.mainLobster) },
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
    cuisineKey: 'garden',
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
      { name: 'Garden Tasting (5 courses)', description: 'That morning\'s harvest, chef\'s sequence', price: 180, image: dish(ids.mainWhitePlate) },
      { name: 'Banana Blossom & Young Coconut Salad', description: 'Island-grown, lime-chilli dressing', price: 34, image: dish(ids.dessertCoconutBowl) },
      { name: 'Coconut-Husk Charred Greens', description: 'Garden brassicas, smoked over husks, garden herbs', price: 29, image: dish(ids.starterShells) },
      { name: 'Reef Fish, Garden Curry', description: 'Daily catch, curry of the morning\'s vegetables', price: 58, image: dish(ids.mainSeafoodPlate) },
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
    cuisineKey: 'italian',
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
      { name: 'Reef Lobster Linguine', description: 'Hand-cut pasta, local lobster, butter and basil', price: 58, image: dish(ids.mainLobster) },
      { name: 'Wood-Fired Margherita', description: 'San Marzano, fior di latte, garden basil', price: 32, image: dish(ids.mainWhitePlate) },
      { name: 'Burrata, Island Tomatoes', description: 'Flown-in burrata, hydroponic tomatoes, aged balsamic', price: 36, image: dish(ids.starterShells) },
      { name: 'Tiramisù della Casa', description: 'Classic, espresso-soaked, made this morning', price: 22, image: dish(ids.dessertBerries) },
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
    cuisineKey: 'seafood-grill',
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
      { name: 'Charcoal-Grilled Daily Catch', description: 'Pick your fish from the ice display, three marinades', price: 42, image: dish(ids.mainWhitePlate) },
      { name: 'Maldivian Tuna Curry', description: 'Fresh yellowfin, coconut, curry leaves, roshi', price: 28, image: dish(ids.mainSeafoodTable) },
      { name: 'Grilled Tiger Prawns', description: 'Garlic-lime butter, charred lemon', price: 38, image: dish(ids.starterShrimp) },
      { name: 'Kurumba Coconut Parfait', description: 'A nod to the island\'s name — "kurumba" means young coconut', price: 16, image: dish(ids.dessertCoconutBowl) },
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
    cuisineKey: 'thai',
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
      { name: 'Roast Duck & Lychee Curry', description: 'The house signature, red curry, jasmine rice', price: 18, image: dish(ids.mainSeafoodTable) },
      { name: 'Som Tam Thai', description: 'Green papaya salad, proper heat, roasted peanuts', price: 9, image: dish(ids.starterShells) },
      { name: 'Pad Thai Goong', description: 'River prawns, tamarind, banana blossom', price: 14, image: dish(ids.starterShrimp) },
      { name: 'Steamed Reef Grouper, Lime & Chilli', description: 'Whole fish, Thai-style, for two', price: 26, image: dish(ids.mainWhitePlate) },
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
    cuisineKey: 'cafe',
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
      { name: 'Mas Huni & Roshi', description: 'The Maldivian breakfast — smoked tuna, coconut, flatbread', price: 6, image: dish(ids.mainSeafoodTable) },
      { name: 'Grilled Chicken Plate', description: 'Char-grilled, garlic rice, courtyard classic', price: 11, image: dish(ids.mainWhitePlate) },
      { name: 'Seagull Club Sandwich', description: 'Triple-decked, the city lunch order', price: 8, image: dish(ids.starterShells) },
      { name: 'House Ice Cream (2 scoops)', description: 'Made in-house for decades — try the coconut', price: 4, image: dish(ids.dessertBerries) },
    ],
    directions: {
      transfer: 'Airport ferry or taxi to Malé; the café sits in the city centre near the northern waterfront',
      time: 'About 15 minutes by ferry from the airport, then a short walk',
      tip: 'Combine with the fish market and Old Friday Mosque for the classic two-hour Malé walking loop.',
      mapsUrl: maps('Seagull Café House, Malé, Maldives'),
    },
  },
  {
    id: 'symphony-male',
    name: 'Symphony Restaurant',
    venue: 'Independent · Malé Classic',
    island: 'Malé',
    atoll: 'Kaafu Atoll (Capital)',
    category: 'city',
    cuisineKey: 'maldivian',
    cuisine: 'Maldivian & International',
    price: '$',
    rating: 4.3,
    tags: ['Decades Old', 'Local Crowd', 'Big Menu'],
    excerpt:
      'A decades-old Malé standby where office workers, families and travellers share one enormous menu of Maldivian and international staples.',
    review:
      'Symphony is the restaurant every Malé resident has been taken to by an aunt: decades old, reliably good, and blessed with a menu long enough to end any group argument. The Maldivian pages are the reason to come — fihunu mas (chilli-rubbed grilled fish), proper kulhimas with roshi, and a tuna fried rice that shows up on half the tables — but the club sandwiches and noodles hold their own for the homesick. Portions are generous, prices are city-honest, and the air conditioning is heroic after a hot lap of the capital. Not fancy; exactly right.',
    image: img(ids.heroMain, 1200),
    menu: [
      { name: 'Fihunu Mas', description: 'Chilli-and-lime rubbed reef fish, grilled whole', price: 12, image: dish(ids.mainWhitePlate) },
      { name: 'Kulhimas & Roshi', description: 'Spiced tuna simmered dark and rich, flatbread', price: 8, image: dish(ids.mainSeafoodTable) },
      { name: 'Tuna Fried Rice', description: 'The Malé office-lunch default, done properly', price: 7, image: dish(ids.mainSeafoodPlate) },
      { name: 'Fresh Watermelon Juice', description: 'Blended to order, no syrup', price: 3, image: dish(ids.drinkCitrus) },
    ],
    directions: {
      transfer: 'Airport ferry or taxi across the Sinamalé Bridge to Malé city centre',
      time: 'About 15 minutes from the airport, then a short walk or scooter-taxi hop',
      tip: 'Lunchtime gets busy with office workers between 12:30 and 2 — go early or after the rush.',
      mapsUrl: maps('Symphony Restaurant, Malé, Maldives'),
    },
  },
  {
    id: 'shell-beans-male',
    name: 'Shell Beans',
    venue: 'Independent · Waterfront',
    island: 'Malé',
    atoll: 'Kaafu Atoll (Capital)',
    category: 'city',
    cuisineKey: 'cafe',
    cuisine: 'Café · Harbourfront Bistro',
    price: '$',
    rating: 4.4,
    tags: ['Harbour Views', 'Upstairs Window Seats', 'Great Juices'],
    excerpt:
      'A harbourfront café on Malé\'s north waterfront — grab an upstairs window seat and watch the dhonis unload while you eat.',
    review:
      'Shell Beans owns the best people-watching real estate in the capital: an upstairs room over Boduthakurufaanu Magu where the window seats look straight onto the fishing harbour. Come at golden hour, order a tuna melt and one of the fresh juices the place is quietly famous for, and watch dhonis unload the catch your dinner will become elsewhere. The menu is café-simple — sandwiches, pastas, all-day breakfasts, good coffee — and the kitchen is quick, which matters when you are squeezing lunch between the fish market and the ferry. A dependable first stop off the airport boat.',
    image: img(ids.galleryWalkway, 1200),
    menu: [
      { name: 'Tuna Melt Panini', description: 'Local yellowfin, cheddar, pressed to order', price: 7, image: dish(ids.starterShells) },
      { name: 'All-Day Big Breakfast', description: 'Eggs, chicken sausage, toast, grilled tomato', price: 9, image: dish(ids.mainWhitePlate) },
      { name: 'Harbour Club Sandwich', description: 'Triple-stack with fries, window-seat classic', price: 8, image: dish(ids.mainSeafoodTable) },
      { name: 'Passion-Orange Cooler', description: 'The juice everyone orders twice', price: 4, image: dish(ids.drinkCitrus) },
    ],
    directions: {
      transfer: 'Airport ferry to Malé — the café is on the north waterfront road, minutes from the jetty',
      time: 'About 15 minutes by ferry, then a 3-minute walk along Boduthakurufaanu Magu',
      tip: 'Head upstairs — the ground floor misses the harbour view that makes the place.',
      mapsUrl: maps('Shell Beans, Boduthakurufaanu Magu, Malé, Maldives'),
    },
  },
  {
    id: 'lemongrass-male',
    name: 'Lemongrass',
    venue: 'Independent · Multiple Outlets',
    island: 'Malé',
    atoll: 'Kaafu Atoll (Capital)',
    category: 'city',
    cuisineKey: 'thai',
    cuisine: 'Thai · Casual',
    price: '$',
    rating: 4.3,
    tags: ['Quick & Busy', 'Local Lunch Spot', 'Consistent'],
    excerpt:
      'Malé\'s go-to casual Thai — fast, consistent and busy with locals, with outlets around the city.',
    review:
      'Where Sala Thai is the capital\'s special-occasion Thai, Lemongrass is its everyday one: quick, loud at lunch, and consistent in the way that keeps offices ordering from it for years. The pad krapow arrives properly funky with holy basil, the tom kha comfortingly rich, and the fried rice plates land in minutes. Décor is functional, service is brisk, and the bill for two rarely clears twenty dollars. If you are staying in the city on a budget and want a reliable dinner without thinking, this is it.',
    image: img(ids.mainSeafoodTable, 1200),
    menu: [
      { name: 'Chicken Pad Krapow', description: 'Holy basil stir-fry, fried egg, jasmine rice', price: 8, image: dish(ids.mainSeafoodTable) },
      { name: 'Tom Kha Gai', description: 'Coconut-galangal chicken soup', price: 7, image: dish(ids.starterShells) },
      { name: 'Prawn Fried Rice', description: 'Wok-fried, local prawns, cucumber', price: 9, image: dish(ids.starterShrimp) },
      { name: 'Thai Iced Tea', description: 'Sweet, strong, orange as a sunset', price: 3.5, image: dish(ids.drinkCitrus) },
    ],
    directions: {
      transfer: 'Airport ferry or taxi to Malé; outlets sit in the central shopping streets',
      time: 'About 15 minutes from the airport, then a short walk',
      tip: 'Peak lunch (12:30–2) means a short wait — worth it, or come at an off-hour.',
      mapsUrl: maps('Lemongrass Restaurant, Malé, Maldives'),
    },
  },
  {
    id: 'bombay-darbar-hulhumale',
    name: 'Bombay Darbar',
    venue: 'Independent',
    island: 'Hulhumalé',
    atoll: 'Kaafu Atoll',
    category: 'city',
    cuisineKey: 'indian',
    cuisine: 'Indian · North & South',
    price: '$',
    rating: 4.4,
    tags: ['Hulhumalé Favourite', 'Tandoor Oven', 'Near the Beach'],
    excerpt:
      'Hulhumalé\'s favourite Indian — tandoor-fresh naan and generous curries a few streets from the beach.',
    review:
      'Bombay Darbar is the restaurant Hulhumalé residents defend in arguments about where to eat on the island: a proper tandoor, butter chicken with genuine depth rather than sugar, and biryanis that arrive under a dome of steam. The menu runs both north and south — dosas alongside the kebabs — and the kitchen handles spice requests honestly. Hulhumalé\'s grid of cafés is growing fast, but this remains the reliable heart of it: five minutes from the beach, ten from the airport, and cheaper than anything you will eat once your seaplane leaves the capital. Great first dinner if you land late and overnight near the airport.',
    image: img(ids.mainWhitePlate, 1200),
    menu: [
      { name: 'Butter Chicken', description: 'Tandoor chicken, tomato-makhani gravy', price: 9, image: dish(ids.mainSeafoodTable) },
      { name: 'Hyderabadi Chicken Biryani', description: 'Sealed and steamed, raita and salan', price: 10, image: dish(ids.mainSeafoodPlate) },
      { name: 'Garlic Naan (2pc)', description: 'Tandoor-blistered, brushed with ghee', price: 2.5, image: dish(ids.starterShells) },
      { name: 'Mango Lassi', description: 'Thick, cold, made with real mango', price: 4, image: dish(ids.dessertMangoTart) },
    ],
    directions: {
      transfer: 'Taxi or bus from Velana International over the link road to Hulhumalé — no boat needed',
      time: 'About 10 minutes by taxi from the airport terminal',
      tip: 'Landing late? Hulhumalé\'s guesthouses are minutes away — dinner here beats any airport lounge.',
      mapsUrl: maps('Bombay Darbar, Hulhumalé, Maldives'),
    },
  },
  {
    id: 'coffee-club-hulhumale',
    name: 'The Coffee Club',
    venue: 'Hulhumalé Beachfront',
    island: 'Hulhumalé',
    atoll: 'Kaafu Atoll',
    category: 'city',
    cuisineKey: 'cafe',
    cuisine: 'Café · All-Day Breakfast',
    price: '$$',
    rating: 4.2,
    tags: ['Beach Strip', 'All-Day Breakfast', 'Reliable Coffee'],
    excerpt:
      'The dependable all-day café on Hulhumalé\'s beach strip — proper flat whites and big breakfasts before your flight or ferry.',
    review:
      'Hulhumalé\'s beachfront road has sprouted a strip of cafés, and The Coffee Club is the one that answers the two questions that matter near an airport: is the coffee actually good, and can I get real food at odd hours. Yes and yes — flat whites pulled properly, an all-day breakfast that lands hot and fast, and salads and burgers for everything after. Tables at the front catch the sea breeze off the artificial beach, which is livelier with local families at sunset than any resort deck. It is a franchise, it is not romantic, and when your red-eye lands at 5am it is exactly what you want.',
    image: img(ids.drinkCitrus, 1200),
    menu: [
      { name: 'The Big Breakfast', description: 'Eggs any style, chicken sausage, hash, toast', price: 12, image: dish(ids.mainWhitePlate) },
      { name: 'Eggs Benedict', description: 'Poached, hollandaise, toasted muffin', price: 10, image: dish(ids.starterShells) },
      { name: 'Grilled Chicken Caesar', description: 'The dependable lunch order', price: 11, image: dish(ids.mainSeafoodTable) },
      { name: 'Flat White', description: 'Double shot, properly textured milk', price: 4.5, image: dish(ids.drinkLedge) },
    ],
    directions: {
      transfer: 'Taxi or bus from the airport over the link road to Hulhumalé\'s beachfront road',
      time: 'About 10 minutes from the airport terminal',
      tip: 'Sunset on the public beach opposite is Hulhumalé\'s best free show — time your coffee to it.',
      mapsUrl: maps('The Coffee Club, Hulhumalé, Maldives'),
    },
  },
  {
    id: 'hard-rock-crossroads',
    name: 'Hard Rock Cafe Maldives',
    venue: 'CROSSROADS Maldives',
    island: 'Emboodhoo Lagoon',
    atoll: 'South Malé Atoll',
    category: 'city',
    cuisineKey: 'american',
    cuisine: 'American · Grill & Live Music',
    price: '$$',
    rating: 4.3,
    tags: ['15 Min from Malé', 'Live Music', 'Marina Views'],
    excerpt:
      'The world\'s most tropical Hard Rock — burgers, ribs and live music at the CROSSROADS marina, a 15-minute boat from Malé.',
    review:
      'Yes, it is a Hard Rock Cafe — and no, nothing else within twenty minutes of Malé serves ribs like this with a marina full of yachts behind them. The CROSSROADS leisure island runs scheduled boats from the capital, which makes this the rare "resort-style" night out that does not require staying at a resort: legendary burgers, a full rack of ribs, live bands most evenings, and (because CROSSROADS is licensed) the closest cold beer to the capital. Families fill the early tables, the music crowd takes over later. Touristy? Completely. Fun? Also completely.',
    image: img(ids.galleryInfinityPool, 1200),
    menu: [
      { name: 'Original Legendary Burger', description: 'Smoked bacon, cheddar, crispy onion ring', price: 22, image: dish(ids.mainWhitePlate) },
      { name: 'Hickory-Smoked Ribs (Full Rack)', description: 'House BBQ glaze, seasoned fries, slaw', price: 34, image: dish(ids.mainSeafoodTable) },
      { name: 'Classic Nachos', description: 'The shareable starter mountain', price: 18, image: dish(ids.starterShells) },
      { name: 'Hurricane', description: 'The house cocktail — CROSSROADS is licensed', price: 14, image: dish(ids.drinkBeach) },
    ],
    directions: {
      transfer: 'Scheduled CROSSROADS speedboat from Malé (or direct from the airport) to the marina',
      time: 'About 15 minutes by boat from Malé; the cafe fronts the marina boardwalk',
      tip: 'Check the live-music schedule and take the last boat back — evenings are when it earns the trip.',
      mapsUrl: maps('Hard Rock Cafe Maldives, CROSSROADS Maldives'),
    },
  },
  {
    id: 'ministry-of-crab-crossroads',
    name: 'Ministry of Crab Maldives',
    venue: 'CROSSROADS Maldives',
    island: 'Emboodhoo Lagoon',
    atoll: 'South Malé Atoll',
    category: 'city',
    cuisineKey: 'seafood-grill',
    cuisine: 'Sri Lankan · Crab Specialist',
    price: '$$$',
    rating: 4.6,
    tags: ['World-Famous Original', 'Lagoon Crab', 'Marina Boardwalk'],
    excerpt:
      'The Maldives outpost of Colombo\'s world-famous crab house — order by the kilo, roll up your sleeves.',
    review:
      'Ministry of Crab needs no introduction to anyone who has eaten in Colombo — the original is a fixture of the World\'s 50 Best conversation — and the CROSSROADS outpost brings the formula intact: enormous crabs sold by weight, cooked in pepper or garlic chilli, and eaten with your hands while the marina lights come on. The pepper crab is the order — Sri Lankan black pepper doing things cream sauces never could — with kade bread to drag through what is left. It is the best expensive meal within half an hour of Malé, and the only one that hands you a bib without irony. Book ahead; big crabs sell out first.',
    image: img(ids.mainLobster, 1200),
    menu: [
      { name: 'Pepper Crab (½ kilo)', description: 'Lagoon crab, hand-crushed Sri Lankan pepper', price: 60, image: dish(ids.mainLobster) },
      { name: 'Garlic Chilli Crab (1 kilo)', description: 'The full-size, full-mess signature', price: 110, image: dish(ids.mainSeafoodPlate) },
      { name: 'Clay-Pot Prawn Curry', description: 'River prawns, coconut, kade bread', price: 28, image: dish(ids.starterShrimp) },
      { name: 'King Coconut', description: 'Straight from the shell, the correct pairing', price: 6, image: dish(ids.dessertCoconutBowl) },
    ],
    directions: {
      transfer: 'Scheduled CROSSROADS speedboat from Malé or the airport to the marina boardwalk',
      time: 'About 15 minutes by boat from Malé',
      tip: 'Crabs are sold by weight and the biggest go early — book a prime-time table a few days out.',
      mapsUrl: maps('Ministry of Crab, CROSSROADS Maldives'),
    },
  },
  {
    id: 'nihonbashi-crossroads',
    name: 'Nihonbashi Blue',
    venue: 'CROSSROADS Maldives',
    island: 'Emboodhoo Lagoon',
    atoll: 'South Malé Atoll',
    category: 'city',
    cuisineKey: 'japanese',
    cuisine: 'Japanese · Sushi & Robata',
    price: '$$$',
    rating: 4.5,
    tags: ['Colombo Legend', 'Local Tuna Sushi', 'Marina Sunset'],
    excerpt:
      'Colombo\'s celebrated Japanese house goes island-side — Maldivian yellowfin nigiri cut metres from where it landed.',
    review:
      'Nihonbashi Blue takes Colombo\'s most celebrated Japanese kitchen and gives it the one ingredient Japan itself would envy: Maldivian yellowfin landed hours before service. The nigiri is the point — deep-red local tuna over properly seasoned rice — backed by a robata grill and a black cod miso that holds its own against far pricier rooms. The dining room looks over the CROSSROADS marina, fifteen minutes by boat from Malé, and dinner here pairs naturally with a sunset walk along the boardwalk. For sushi this serious this close to the capital, nothing else comes close.',
    image: img(ids.starterOysters, 1200),
    menu: [
      { name: 'Maldivian Tuna Nigiri (6pc)', description: 'Line-caught yellowfin, cut to order', price: 24, image: dish(ids.starterOysters) },
      { name: 'Sashimi Moriawase', description: 'Chef\'s selection of the day\'s landings', price: 38, image: dish(ids.mainSeafoodPlate) },
      { name: 'Black Cod Miso', description: 'Robata-grilled, three-day marinade', price: 42, image: dish(ids.mainWhitePlate) },
      { name: 'Matcha Soft Serve', description: 'Stone-ground matcha, sesame crumble', price: 9, image: dish(ids.dessertBerries) },
    ],
    directions: {
      transfer: 'Scheduled CROSSROADS speedboat from Malé or the airport to the marina',
      time: 'About 15 minutes by boat from Malé',
      tip: 'Sit at the sushi counter and ask what came off the boats that morning.',
      mapsUrl: maps('Nihonbashi Blue, CROSSROADS Maldives'),
    },
  },
];
