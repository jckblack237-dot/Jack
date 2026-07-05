import { img, ids } from './images';
import type { MenuHighlight } from './restaurants';

export interface MenuSection {
  title: string;
  items: MenuHighlight[];
}

const dish = (id: string) => img(id, 300);

/**
 * The rest of each restaurant's menu. The four items stored on the
 * restaurant itself render first as "Chef's Signatures"; these sections
 * follow to complete the full menu.
 */
export const fullMenus: Record<string, MenuSection[]> = {
  'ithaa-undersea': [
    {
      title: 'To Begin',
      items: [
        { name: 'Oscietra Caviar Service', description: '10g, blinis, crème fraîche', price: 110, image: dish(ids.starterOysters) },
        { name: 'Yellowfin Tuna Tartare', description: 'Wasabi cream, rice crisp, shiso', price: 48, image: dish(ids.starterShrimp) },
        { name: 'Chilled Pea Velouté', description: 'Mint oil, lemon crème', price: 32, image: dish(ids.starterShells) },
      ],
    },
    {
      title: 'Mains',
      items: [
        { name: 'Butter-Poached Reef Fish', description: 'Champagne beurre blanc, sea greens', price: 86, image: dish(ids.mainWhitePlate) },
        { name: 'Duck Breast à l\'Orange', description: 'Confit leg croquette, jus gras', price: 78, image: dish(ids.mainSeafoodPlate) },
      ],
    },
    {
      title: 'Desserts',
      items: [
        { name: 'Valrhona Chocolate Sphere', description: 'Warm caramel poured tableside', price: 34, image: dish(ids.dessertBerries) },
        { name: 'Coconut Panna Cotta', description: 'Passionfruit, lime meringue', price: 28, image: dish(ids.dessertCoconutBowl) },
      ],
    },
    {
      title: 'Cellar & Bar',
      items: [
        { name: 'Champagne Pairing (per course)', description: 'Sommelier\'s undersea selection', price: 45, image: dish(ids.drinkLedge) },
        { name: 'Indian Ocean Spritz', description: 'Citrus, tonic, island botanicals', price: 22, image: dish(ids.drinkCitrus) },
      ],
    },
  ],

  'five-eight-undersea': [
    {
      title: 'From the Raw Bar',
      items: [
        { name: 'Kingfish Crudo', description: 'Green apple, finger lime, dill oil', price: 44, image: dish(ids.starterOysters) },
        { name: 'Lagoon Prawn Cocktail 5.8', description: 'Bloody-mary gel, baby gem', price: 39, image: dish(ids.starterShrimp) },
      ],
    },
    {
      title: 'Mains',
      items: [
        { name: 'Slow-Cooked Lamb Loin', description: 'Smoked aubergine, jus', price: 82, image: dish(ids.mainSeafoodPlate) },
        { name: 'Miso-Glazed Reef Fish', description: 'Pak choi, sesame, dashi butter', price: 74, image: dish(ids.mainWhitePlate) },
      ],
    },
    {
      title: 'Desserts',
      items: [
        { name: 'Chocolate & Sea Salt Reef', description: 'Plated to mirror the view', price: 30, image: dish(ids.dessertBerries) },
        { name: 'Tropical Fruit Cloud', description: 'Mango, passionfruit, coconut foam', price: 26, image: dish(ids.dessertMangoTart) },
      ],
    },
    {
      title: 'Drinks',
      items: [
        { name: 'Wine Pairing (5 courses)', description: 'Old-world leaning, half pours', price: 120, image: dish(ids.drinkLedge) },
        { name: 'Lhaviyani Sunrise (0%)', description: 'Pineapple, lime, grenadine', price: 14, image: dish(ids.drinkCitrus) },
      ],
    },
  ],

  subsix: [
    {
      title: 'Small Plates',
      items: [
        { name: 'Oysters, Champagne Mignonette', description: 'Half dozen, shucked to order', price: 42, image: dish(ids.starterOysters) },
        { name: 'Tuna Tataki', description: 'Ponzu, radish, sesame', price: 36, image: dish(ids.starterShrimp) },
      ],
    },
    {
      title: 'Mains',
      items: [
        { name: 'Grilled Reef Lobster', description: 'Café de Paris butter', price: 95, image: dish(ids.mainLobster) },
        { name: 'Wagyu Cheek Bourguignon', description: 'Pomme purée, glazed shallots', price: 76, image: dish(ids.mainSeafoodPlate) },
      ],
    },
    {
      title: 'Desserts',
      items: [
        { name: 'Glow Dessert', description: 'The party-night signature, UV-lit', price: 28, image: dish(ids.dessertBerries) },
        { name: 'Coconut Sorbet Shell', description: 'Served in the husk', price: 22, image: dish(ids.dessertCoconutBowl) },
      ],
    },
    {
      title: 'Drinks',
      items: [
        { name: 'Under the Sea Martini', description: 'Blue curaçao, citrus air', price: 24, image: dish(ids.drinkBeach) },
        { name: 'Sparkling Pairing', description: 'Per course, breakfast or dinner', price: 38, image: dish(ids.drinkLedge) },
      ],
    },
  ],

  m6m: [
    {
      title: 'To Start',
      items: [
        { name: 'Reef Fish Carpaccio', description: 'Lime, coconut vinaigrette', price: 38, image: dish(ids.starterOysters) },
        { name: 'Prawn & Taro Croquette', description: 'Curry-leaf aioli', price: 30, image: dish(ids.starterShrimp) },
      ],
    },
    {
      title: 'Mains',
      items: [
        { name: 'Steamed Grouper, Ginger-Soy', description: 'Hong-Kong style, whole fillet', price: 68, image: dish(ids.mainWhitePlate) },
        { name: 'Lobster Thermidor M6m', description: 'Gruyère glaze, herb salad', price: 92, image: dish(ids.mainLobster) },
      ],
    },
    {
      title: 'Desserts',
      items: [
        { name: 'Palm Sugar Crème Brûlée', description: 'Torched to order', price: 24, image: dish(ids.dessertMangoTart) },
        { name: 'Chocolate Reef Wall', description: 'Layered dark chocolate, sea salt', price: 28, image: dish(ids.dessertBerries) },
      ],
    },
    {
      title: 'Drinks',
      items: [
        { name: 'OZEN House Pairing', description: 'Included on the resort plan', price: 0, image: dish(ids.drinkLedge) },
        { name: 'Maadhoo Cooler', description: 'Watermelon, mint, lime', price: 16, image: dish(ids.drinkCitrus) },
      ],
    },
  ],

  'sea-fire-salt': [
    {
      title: 'Starters',
      items: [
        { name: 'Beef Carpaccio, Smoked Salt', description: 'Rocket, aged parmesan', price: 34, image: dish(ids.starterShrimp) },
        { name: 'Charred Prawn Skewers', description: 'Volcanic salt, lime butter', price: 38, image: dish(ids.starterShells) },
      ],
    },
    {
      title: 'From the Grill',
      items: [
        { name: 'Black Angus Ribeye 300g', description: 'Choice of salt, twin sauces', price: 98, image: dish(ids.mainSeafoodPlate) },
        { name: 'Half Reef Lobster, Garlic Butter', description: 'Charcoal-finished', price: 85, image: dish(ids.mainLobster) },
        { name: 'Catch of the Day, Himalayan Slab', description: 'Cooked on the salt block', price: 62, image: dish(ids.mainWhitePlate) },
      ],
    },
    {
      title: 'Desserts & Drinks',
      items: [
        { name: 'Salted Caramel Fondant', description: 'Vanilla gelato', price: 26, image: dish(ids.dessertBerries) },
        { name: 'Smoked Old Fashioned', description: 'Applewood smoke, orange oils', price: 24, image: dish(ids.drinkLedge) },
      ],
    },
  ],

  benjarong: [
    {
      title: 'Starters',
      items: [
        { name: 'Por Pia Sod', description: 'Fresh rolls, prawn, tamarind dip', price: 22, image: dish(ids.starterShrimp) },
        { name: 'Miang Kham', description: 'Betel leaf bites, royal style', price: 20, image: dish(ids.starterShells) },
      ],
    },
    {
      title: 'Curries & Mains',
      items: [
        { name: 'Gaeng Khiao Wan Gai', description: 'Green curry, chicken, thai basil', price: 38, image: dish(ids.mainSeafoodTable) },
        { name: 'Phad Cha Talay', description: 'Wok-seared seafood, holy basil, heat', price: 46, image: dish(ids.mainSeafoodPlate) },
        { name: 'Whole Crispy Reef Fish', description: 'Three-flavour sauce', price: 52, image: dish(ids.mainWhitePlate) },
      ],
    },
    {
      title: 'Desserts & Drinks',
      items: [
        { name: 'Tab Tim Grob', description: 'Water chestnut rubies, coconut ice', price: 16, image: dish(ids.dessertCoconutBowl) },
        { name: 'Lemongrass-Pandan Cooler', description: 'House infusion, chilled', price: 12, image: dish(ids.drinkCitrus) },
      ],
    },
  ],

  batheli: [
    {
      title: 'Small Plates',
      items: [
        { name: 'Gulha Trio', description: 'Smoked-fish parcels, three fillings', price: 22, image: dish(ids.starterShells) },
        { name: 'Theluli Mas', description: 'Fried spiced tuna, onion sambol', price: 24, image: dish(ids.starterShrimp) },
      ],
    },
    {
      title: 'Spice Route Mains',
      items: [
        { name: 'Kandu Kukulhu', description: 'Tuna "chicken" — the old sailors\' braise', price: 42, image: dish(ids.mainSeafoodTable) },
        { name: 'Reef Fish Malhu', description: 'Turmeric-coconut curry, roshi', price: 46, image: dish(ids.mainWhitePlate) },
      ],
    },
    {
      title: 'Desserts',
      items: [
        { name: 'Bondibaiy & Ice Cream', description: 'Sweet rice, screwpine, palm syrup', price: 18, image: dish(ids.dessertCoconutBowl) },
        { name: 'Spice Route Chocolate', description: 'Cardamom, cinnamon, dark cacao', price: 22, image: dish(ids.dessertBerries) },
      ],
    },
    {
      title: 'Drinks',
      items: [
        { name: 'Raa Toddy Mocktail', description: 'Palm essence, lime, soda', price: 14, image: dish(ids.drinkCitrus) },
        { name: 'Indian Ocean Wine Flight', description: 'Three pours with the tasting', price: 48, image: dish(ids.drinkLedge) },
      ],
    },
  ],

  'fresh-in-the-garden': [
    {
      title: 'From the Garden',
      items: [
        { name: 'Heirloom Tomato & Basil', description: 'Picked at dawn, aged balsamic', price: 26, image: dish(ids.starterShells) },
        { name: 'Moringa & Young Coconut Soup', description: 'Garden herbs, chilled', price: 24, image: dish(ids.dessertCoconutBowl) },
      ],
    },
    {
      title: 'Mains',
      items: [
        { name: 'Charred Cauliflower Steak', description: 'Coconut-husk smoke, cashew cream', price: 38, image: dish(ids.mainWhitePlate) },
        { name: 'Line-Caught Fish, Garden Broth', description: 'The one fish dish, done right', price: 56, image: dish(ids.mainSeafoodPlate) },
      ],
    },
    {
      title: 'Desserts & Drinks',
      items: [
        { name: 'Garden Herb Sorbet Trio', description: 'Basil, lemongrass, mint', price: 20, image: dish(ids.dessertBerries) },
        { name: 'Treetop Kombucha', description: 'Brewed on-island, rotating flavour', price: 12, image: dish(ids.drinkCitrus) },
      ],
    },
  ],

  'blu-landaa': [
    {
      title: 'Antipasti',
      items: [
        { name: 'Carpaccio di Tonno', description: 'Yellowfin, capers, lemon oil', price: 32, image: dish(ids.starterShrimp) },
        { name: 'Frittura di Mare', description: 'Light-fried lagoon catch, aioli', price: 30, image: dish(ids.starterShells) },
      ],
    },
    {
      title: 'Pasta & Pizza',
      items: [
        { name: 'Spaghetti alle Vongole', description: 'Local clams, white wine, chilli', price: 42, image: dish(ids.mainSeafoodPlate) },
        { name: 'Diavola', description: 'Spicy salami, fior di latte', price: 34, image: dish(ids.mainWhitePlate) },
        { name: 'Risotto al Limone', description: 'Amalfi lemons, basil', price: 38, image: dish(ids.mainSeafoodTable) },
      ],
    },
    {
      title: 'Dolci & Drinks',
      items: [
        { name: 'Panna Cotta ai Frutti', description: 'Tropical fruit, vanilla bean', price: 20, image: dish(ids.dessertBerries) },
        { name: 'Negroni Sbagliato', description: 'Prosecco, campari, sunset-timed', price: 22, image: dish(ids.drinkBeach) },
      ],
    },
  ],

  'thila-kurumba': [
    {
      title: 'Starters',
      items: [
        { name: 'Kurumba Fish Cakes', description: 'Reef fish, curry leaf, lime aioli', price: 18, image: dish(ids.starterShells) },
        { name: 'Chilled Seafood Trio', description: 'Prawn, tuna, octopus', price: 26, image: dish(ids.starterShrimp) },
      ],
    },
    {
      title: 'Mains',
      items: [
        { name: 'Seafood Platter for Two', description: 'Lobster, prawns, daily catch', price: 110, image: dish(ids.mainLobster) },
        { name: 'Maldivian Curry Feast', description: 'Three curries, roshi, sambols', price: 46, image: dish(ids.mainSeafoodTable) },
      ],
    },
    {
      title: 'Desserts & Drinks',
      items: [
        { name: 'Grilled Pineapple, Rum Caramel', description: 'Coconut ice cream', price: 15, image: dish(ids.dessertMangoTart) },
        { name: 'Vihamanaafushi Sunset', description: 'Passionfruit rum punch', price: 16, image: dish(ids.drinkBeach) },
      ],
    },
  ],

  'sala-thai-male': [
    {
      title: 'Starters',
      items: [
        { name: 'Satay Gai', description: 'Chicken skewers, peanut sauce', price: 8, image: dish(ids.starterShrimp) },
        { name: 'Tom Yum Hed', description: 'Mushroom tom yum, vegetarian', price: 7, image: dish(ids.starterShells) },
      ],
    },
    {
      title: 'Mains',
      items: [
        { name: 'Green Chicken Curry', description: 'Thai aubergine, jasmine rice', price: 14, image: dish(ids.mainSeafoodTable) },
        { name: 'Phad See Ew', description: 'Flat noodles, dark soy, egg', price: 12, image: dish(ids.mainSeafoodPlate) },
        { name: 'Garlic Pepper Prawns', description: 'The regulars\' order', price: 16, image: dish(ids.mainWhitePlate) },
      ],
    },
    {
      title: 'Desserts & Drinks',
      items: [
        { name: 'Mango Sticky Rice', description: 'In season — ask first', price: 7, image: dish(ids.dessertMangoTart) },
        { name: 'Fresh Lime Soda, Sea Salt', description: 'The Malé standard', price: 3, image: dish(ids.drinkCitrus) },
      ],
    },
  ],

  'seagull-cafe': [
    {
      title: 'Breakfast',
      items: [
        { name: 'Huvadhoo Omelette', description: 'Tuna, chilli, curry leaves', price: 6, image: dish(ids.mainWhitePlate) },
        { name: 'French Toast, Palm Syrup', description: 'Courtyard morning classic', price: 5, image: dish(ids.dessertMangoTart) },
      ],
    },
    {
      title: 'Grills & Mains',
      items: [
        { name: 'Grilled Reef Fish & Chips', description: 'Daily catch, hand-cut fries', price: 12, image: dish(ids.mainSeafoodPlate) },
        { name: 'Chicken Submarine', description: 'The after-school legend', price: 7, image: dish(ids.mainSeafoodTable) },
      ],
    },
    {
      title: 'Ice Cream & Drinks',
      items: [
        { name: 'Sundae Seagull', description: 'Three scoops, all the toppings', price: 6, image: dish(ids.dessertBerries) },
        { name: 'Fresh Mango Juice', description: 'Blended to order', price: 3.5, image: dish(ids.drinkCitrus) },
      ],
    },
  ],

  'symphony-male': [
    {
      title: 'Short Eats',
      items: [
        { name: 'Bajiya & Gulha Plate', description: 'Maldivian short eats, chutney', price: 4, image: dish(ids.starterShells) },
        { name: 'Chicken Spring Rolls', description: 'Crisp, sweet-chilli dip', price: 5, image: dish(ids.starterShrimp) },
      ],
    },
    {
      title: 'Mains',
      items: [
        { name: 'Chicken Devil', description: 'Sri Lankan style, capsicum, heat', price: 10, image: dish(ids.mainSeafoodTable) },
        { name: 'Seafood Noodles', description: 'Wok-fried, generous', price: 9, image: dish(ids.mainSeafoodPlate) },
        { name: 'Beef Steak, Pepper Sauce', description: 'The old-school plate', price: 13, image: dish(ids.mainWhitePlate) },
      ],
    },
    {
      title: 'Desserts & Drinks',
      items: [
        { name: 'Caramel Pudding', description: 'Decades on the menu', price: 4, image: dish(ids.dessertBerries) },
        { name: 'Milo Dinosaur', description: 'Iced, extra powder', price: 4, image: dish(ids.drinkLedge) },
      ],
    },
  ],

  'shell-beans-male': [
    {
      title: 'Breakfast & Snacks',
      items: [
        { name: 'Mas Huni Toastie', description: 'The national breakfast, pressed', price: 6, image: dish(ids.starterShells) },
        { name: 'Banana-Nutella Crêpe', description: 'Harbour-view indulgence', price: 6.5, image: dish(ids.dessertMangoTart) },
      ],
    },
    {
      title: 'Mains',
      items: [
        { name: 'Grilled Chicken & Rice', description: 'Garlic sauce, salad', price: 9, image: dish(ids.mainSeafoodTable) },
        { name: 'Spaghetti Tuna Arrabbiata', description: 'Local tuna, proper heat', price: 9.5, image: dish(ids.mainSeafoodPlate) },
      ],
    },
    {
      title: 'Juices & Coffee',
      items: [
        { name: 'Watermelon-Mint Crush', description: 'The upstairs-window order', price: 4, image: dish(ids.drinkCitrus) },
        { name: 'Iced Spanish Latte', description: 'Condensed milk, double shot', price: 4.5, image: dish(ids.drinkLedge) },
      ],
    },
  ],

  'lemongrass-male': [
    {
      title: 'Starters',
      items: [
        { name: 'Fried Wontons', description: 'Chicken, sweet-chilli', price: 5, image: dish(ids.starterShells) },
        { name: 'Glass Noodle Salad', description: 'Yum woon sen, lime heat', price: 7, image: dish(ids.starterShrimp) },
      ],
    },
    {
      title: 'Mains',
      items: [
        { name: 'Basil Fried Rice, Chicken', description: 'Office-lunch favourite', price: 8, image: dish(ids.mainSeafoodTable) },
        { name: 'Red Curry Beef', description: 'Bamboo shoots, thai basil', price: 9, image: dish(ids.mainSeafoodPlate) },
        { name: 'Crispy Chicken Phad Thai', description: 'House twist on the classic', price: 9, image: dish(ids.mainWhitePlate) },
      ],
    },
    {
      title: 'Desserts & Drinks',
      items: [
        { name: 'Fried Ice Cream', description: 'Crunch shell, quick hands', price: 5, image: dish(ids.dessertBerries) },
        { name: 'Lychee Iced Tea', description: 'Sweet, cold, fast', price: 3, image: dish(ids.drinkCitrus) },
      ],
    },
  ],

  'bombay-darbar-hulhumale': [
    {
      title: 'Tandoor & Starters',
      items: [
        { name: 'Chicken Tikka (8pc)', description: 'Char-marked, mint chutney', price: 8, image: dish(ids.starterShrimp) },
        { name: 'Paneer 65', description: 'South-Indian style, curry leaf', price: 7, image: dish(ids.starterShells) },
      ],
    },
    {
      title: 'Curries & Mains',
      items: [
        { name: 'Rogan Josh', description: 'Slow lamb, Kashmiri chilli', price: 11, image: dish(ids.mainSeafoodTable) },
        { name: 'Masala Dosa', description: 'Potato masala, sambar, chutneys', price: 6, image: dish(ids.mainWhitePlate) },
        { name: 'Dal Makhani', description: 'Overnight black lentils, butter', price: 7, image: dish(ids.mainSeafoodPlate) },
      ],
    },
    {
      title: 'Desserts & Drinks',
      items: [
        { name: 'Gulab Jamun (3pc)', description: 'Warm, rose syrup', price: 4, image: dish(ids.dessertBerries) },
        { name: 'Masala Chai', description: 'Boiled properly, cardamom-forward', price: 2.5, image: dish(ids.drinkLedge) },
      ],
    },
  ],

  'coffee-club-hulhumale': [
    {
      title: 'All-Day Breakfast',
      items: [
        { name: 'Smashed Avo & Feta', description: 'Sourdough, dukkah, lime', price: 11, image: dish(ids.starterShells) },
        { name: 'Pancake Stack', description: 'Maple, berries, cream', price: 10, image: dish(ids.dessertMangoTart) },
      ],
    },
    {
      title: 'Mains',
      items: [
        { name: 'Beach Club Burger', description: 'Double patty, house sauce, fries', price: 13, image: dish(ids.mainWhitePlate) },
        { name: 'Grilled Reef Fish Wrap', description: 'Slaw, chipotle mayo', price: 11, image: dish(ids.mainSeafoodPlate) },
      ],
    },
    {
      title: 'Coffee & Sweets',
      items: [
        { name: 'Iced Long Black', description: 'For the 5am arrivals', price: 4, image: dish(ids.drinkLedge) },
        { name: 'Banoffee Jar', description: 'Layered, shareable, rarely shared', price: 7, image: dish(ids.dessertBerries) },
      ],
    },
  ],

  'hard-rock-crossroads': [
    {
      title: 'Starters',
      items: [
        { name: 'Jumbo Combo', description: 'Wings, rings, tenders, dips', price: 26, image: dish(ids.starterShells) },
        { name: 'Buffalo Wings', description: 'Classic or blazing, blue cheese', price: 16, image: dish(ids.starterShrimp) },
      ],
    },
    {
      title: 'Burgers & Mains',
      items: [
        { name: 'BBQ Bacon Cheeseburger', description: 'Smoked bacon, cheddar, house BBQ', price: 24, image: dish(ids.mainWhitePlate) },
        { name: 'Grilled Reef Fish Tacos', description: 'Island twist, pico de gallo', price: 20, image: dish(ids.mainSeafoodPlate) },
        { name: 'Twisted Mac & Cheese', description: 'Cavatappi, parmesan crust', price: 18, image: dish(ids.mainSeafoodTable) },
      ],
    },
    {
      title: 'Desserts & Bar',
      items: [
        { name: 'Hot Fudge Brownie', description: 'Vanilla ice cream, sparkler', price: 14, image: dish(ids.dessertBerries) },
        { name: 'Electric Blues', description: 'Vodka, blue curaçao, lemonade', price: 15, image: dish(ids.drinkBeach) },
      ],
    },
  ],

  'ministry-of-crab-crossroads': [
    {
      title: 'To Start',
      items: [
        { name: 'Prawn Curry Bites', description: 'Clay-pot reduction on kade bread', price: 14, image: dish(ids.starterShrimp) },
        { name: 'Crab Liver Pâté', description: 'For the committed', price: 18, image: dish(ids.starterShells) },
      ],
    },
    {
      title: 'The Crabs',
      items: [
        { name: 'Butter Crab (½ kilo)', description: 'The gentlest introduction', price: 62, image: dish(ids.mainLobster) },
        { name: 'Curry Crab (1 kilo)', description: 'Sri Lankan roasted-spice gravy', price: 112, image: dish(ids.mainSeafoodTable) },
        { name: 'Garlic Chilli Prawns', description: 'When the crabs sell out', price: 34, image: dish(ids.mainSeafoodPlate) },
      ],
    },
    {
      title: 'Sides & Drinks',
      items: [
        { name: 'Kade Bread Basket', description: 'For the gravy — mandatory', price: 6, image: dish(ids.mainWhitePlate) },
        { name: 'Ginger Beer, Lime', description: 'Cuts the spice perfectly', price: 7, image: dish(ids.drinkCitrus) },
      ],
    },
  ],

  'nihonbashi-crossroads': [
    {
      title: 'Sushi & Sashimi',
      items: [
        { name: 'Chef\'s Nigiri Omakase (10pc)', description: 'The day\'s best, chef\'s order', price: 48, image: dish(ids.starterOysters) },
        { name: 'Spicy Tuna Maki', description: 'Local yellowfin, togarashi', price: 18, image: dish(ids.starterShrimp) },
      ],
    },
    {
      title: 'Robata & Mains',
      items: [
        { name: 'Robata Reef Fish, Yuzu Kosho', description: 'Charcoal-grilled, citrus heat', price: 36, image: dish(ids.mainWhitePlate) },
        { name: 'Wagyu Don', description: 'Seared wagyu over rice, onsen egg', price: 44, image: dish(ids.mainSeafoodPlate) },
      ],
    },
    {
      title: 'Desserts & Drinks',
      items: [
        { name: 'Yuzu Tart', description: 'Torched meringue, sesame', price: 12, image: dish(ids.dessertMangoTart) },
        { name: 'Junmai Sake Flight', description: 'Three pours, marina view', price: 28, image: dish(ids.drinkLedge) },
      ],
    },
  ],
};
