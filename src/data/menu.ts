import { img, ids } from './images';

export interface MenuItem {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  tag?: string;
  restaurantId: string;
}

export interface MenuCategory {
  id: string;
  label: string;
  items: MenuItem[];
}

export const menu: MenuCategory[] = [
  {
    id: 'starters',
    label: 'Starters',
    items: [
      {
        id: 'reef-oyster-platter',
        name: 'Reef Oyster Platter',
        description: 'Chilled local oysters, lime, chilli mignonette',
        price: 18,
        image: img(ids.starterOysters, 700),
        tag: 'Chef\'s Pick',
        restaurantId: 'nihonbashi-crossroads',
      },
      {
        id: 'tiger-prawn-salad',
        name: 'Maldivian Tiger Prawn Salad',
        description: 'Charred prawns, green papaya, cashew, lime dressing',
        price: 16,
        image: img(ids.starterShrimp, 700),
        restaurantId: 'benjarong',
      },
      {
        id: 'chilled-shellfish-bowl',
        name: 'Chilled Shellfish Bowl',
        description: 'Reef clams and shells, coconut-lime broth, herbs',
        price: 14,
        image: img(ids.starterShells, 700),
        restaurantId: 'subsix',
      },
    ],
  },
  {
    id: 'mains',
    label: 'Mains & Seafood',
    items: [
      {
        id: 'grilled-reef-lobster',
        name: 'Grilled Reef Lobster',
        description: 'Butter-poached, garlic, herb oil, charred lime',
        price: 48,
        image: img(ids.mainLobster, 700),
        tag: 'Signature',
        restaurantId: 'sea-fire-salt',
      },
      {
        id: 'garudhiya-catch',
        name: 'Garudhiya Catch',
        description: 'Clear tuna broth, steamed rice, lime, fresh chilli',
        price: 32,
        image: img(ids.mainSeafoodPlate, 700),
        restaurantId: 'batheli',
      },
      {
        id: 'chefs-catch-platter',
        name: "Chef's Catch of the Day",
        description: 'Mixed grilled reef fish, island vegetables, sambol',
        price: 38,
        image: img(ids.mainWhitePlate, 700),
        restaurantId: 'thila-kurumba',
      },
      {
        id: 'saffron-seafood-rice',
        name: 'Saffron Seafood Rice',
        description: 'Prawns, squid and reef fish, saffron, local spice',
        price: 36,
        image: img(ids.mainSeafoodTable, 700),
        tag: 'Sharing',
        restaurantId: 'symphony-male',
      },
    ],
  },
  {
    id: 'desserts',
    label: 'Desserts',
    items: [
      {
        id: 'mango-coconut-tart',
        name: 'Mango & Coconut Cream Tart',
        description: 'Island mango, toasted coconut cream, lime zest',
        price: 14,
        image: img(ids.dessertMangoTart, 700),
        restaurantId: 'fresh-in-the-garden',
      },
      {
        id: 'tropical-berry-pavlova',
        name: 'Tropical Berry Pavlova',
        description: 'Passionfruit curd, fresh berries, meringue',
        price: 13,
        image: img(ids.dessertBerries, 700),
        restaurantId: 'subsix',
      },
      {
        id: 'coconut-sticky-rice',
        name: 'Coconut Sticky Rice Bowl',
        description: 'Fresh fruit, toasted coconut, palm sugar syrup',
        price: 12,
        image: img(ids.dessertCoconutBowl, 700),
        restaurantId: 'batheli',
      },
    ],
  },
  {
    id: 'drinks',
    label: 'Drinks',
    items: [
      {
        id: 'sunset-reef-punch',
        name: 'Sunset Reef Punch',
        description: 'Spiced rum, passionfruit, lime, falernum',
        price: 15,
        image: img(ids.drinkBeach, 700),
        tag: 'Sundowner',
        restaurantId: 'hard-rock-crossroads',
      },
      {
        id: 'lagoon-breeze',
        name: 'Lagoon Breeze',
        description: 'Gin, cucumber, mint, tonic, sea salt rim',
        price: 14,
        image: img(ids.drinkLedge, 700),
        restaurantId: 'thila-kurumba',
      },
      {
        id: 'island-citrus-cooler',
        name: 'Island Citrus Cooler',
        description: 'Fresh orange, mint, soda — non-alcoholic',
        price: 9,
        image: img(ids.drinkCitrus, 700),
        restaurantId: 'shell-beans-male',
      },
    ],
  },
];
