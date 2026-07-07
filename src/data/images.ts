// Curated, verified Unsplash photos (royalty-free). Each helper appends
// Unsplash's image-optimization query params for the size actually needed.
const unsplash = (id: string) => `https://images.unsplash.com/photo-${id}`;

export const img = (id: string, w: number, q = 80) =>
  `${unsplash(id)}?auto=format&fit=crop&w=${w}&q=${q}`;

export const ids = {
  heroMain: '1777906718328-deb1ff1be508',
  heroWalkway: '1754745442968-b746b74340dd',

  restaurantAerial: '1562790351-d273a961e0e9',
  restaurantGarden: '1772479036537-2f24be392ab0',
  restaurantChandelier: '1780909557160-d8098883bd52',
  restaurantBeachTent: '1680956988931-e79772ac121c',
  restaurantOverwater: '1758717152007-6a2eb7299409',
  restaurantPool: '1721617864119-611e4544ff07',

  galleryAerial: '1698726654908-834d3a5330d8',
  galleryWalkway: '1719783389768-3f7f93b51a27',
  galleryStilts: '1602002418679-43121356bf41',
  galleryCandles: '1672305331208-2e92869a2e62',
  galleryFormal: '1774509625509-8c452b51649e',
  galleryPoolLounge: '1733253870394-d7feafd52891',
  galleryPalmsSunset: '1609171653225-b224655739d3',
  galleryBeachChairs: '1730944524570-44f1c584fd54',
  galleryWicker: '1758648207371-b554a65258c8',
  galleryInfinityPool: '1769149255642-c9741ad91b05',

  starterOysters: '1679694140422-aecfd3d5dd0b',
  starterShrimp: '1595579547936-c3a0e6c171fc',
  starterShells: '1618055301293-494ab4c71f9f',

  mainLobster: '1519351635902-7c60d09cb2ed',
  mainSeafoodPlate: '1572776082973-1cb8d1790872',
  mainWhitePlate: '1710508876894-59022309c1d9',
  mainSeafoodTable: '1651323018466-b36b7df1d2b1',

  dessertMangoTart: '1779608993323-39b516fceb72',
  dessertBerries: '1675809858722-f8d8402e0049',
  dessertCoconutBowl: '1760533535904-9fe667530c3b',

  drinkBeach: '1645231286309-2beccdfae91c',
  drinkLedge: '1721407435583-8d0ec0c18cc4',
  drinkCitrus: '1690085602849-4b55549f3103',

  // City (Malé / Hulhumalé) venues — urban interiors and café scenes
  cityInteriorDark: '1517248135467-4c7edcad34c4',
  cityInteriorWarm: '1552566626-52f8b828add9',
  cityCafeCounter: '1521017432531-fbd92d768814',
  cityCafePlants: '1554118811-1e0d58224f24',
  cityCafeStreet: '1559925393-8be0ec4767c8',
  cityCoffeeTable: '1445116572660-236099ec97a0',
  cityCoffeeCups: '1509042239860-f550ce710b93',
  cityBurgers: '1466978913421-dad2ebd01d17',
  cityCake: '1464349095431-e9a21285b5f3',

  // Cuisine-specific dishes for city venues
  foodIndianCurryNaan: '1565557623262-b51c2513a641',
  foodIndianKarahi: '1585937421612-70a008356fbe',
  foodIndianButterChicken: '1631452180519-c014fe946bc7',
  foodThaiPadThai: '1559314809-0d155014e29e',
  foodThaiRedCurry: '1455619452474-d2be8b1e70cd',
  foodThaiFriedRice: '1512058564366-18510be2db19',
  foodFishDinner: '1467003909585-2f8a72700288',
  foodEggToast: '1525351484163-7529414344d8',
  foodToastie: '1528735602780-2552fd46c7af',
  foodDeliSandwich: '1550507992-eb63ffee0847',
  foodChickenBurger: '1481070555726-e2fe8357725c',
  drinkMilkTea: '1544787219-7f47ccb76574',
} as const;
