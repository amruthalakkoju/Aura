import { restaurantImages } from './assets';

export interface SignatureSpecial {
  id: string;
  name: string;
  description: string;
  price: number;
  isVeg: boolean;
  image: string;
  region: string;
  preparationNote?: string;
}

export const signatureSpecials: SignatureSpecial[] = [
  {
    id: 'special-1',
    name: 'Royal Hyderabadi Biryani',
    description: 'Fragrant basmati rice, saffron, caramelized onions and slow-cooked spices in a sealed earthen pot.',
    price: 540,
    isVeg: false,
    image: restaurantImages.biryaniRoyal,
    region: 'Nizam Courts, Hyderabad',
    preparationNote: 'Dum cooked for 6 hours with aged saffron threads'
  },
  {
    id: 'special-2',
    name: 'Smoked Paneer Tikka',
    description: 'Char-grilled artisanal cottage cheese, smoky spices, charred bell peppers and fresh mint coulis.',
    price: 360,
    isVeg: true,
    image: restaurantImages.paneerTikka,
    region: 'Punjab & Delhi',
    preparationNote: 'Smoked over live coals of dried babool wood'
  },
  {
    id: 'special-3',
    name: 'Malabar Butter Garlic Prawns',
    description: 'Coastal Bay prawns finished with roasted golden garlic, crisp curry leaves, and rich churned butter.',
    price: 580,
    isVeg: false,
    image: restaurantImages.malabarPrawns,
    region: 'Malabar Coast, Kerala',
    preparationNote: 'Pan-seared with first-press coconut oil and churned butter'
  },
  {
    id: 'special-4',
    name: 'Awadhi Galouti Kebab',
    description: 'Melt-in-the-mouth kebabs inspired by the royal kitchens of Lucknow, perfumed with 32 royal spices.',
    price: 490,
    isVeg: false,
    image: restaurantImages.galoutiKebab,
    region: 'Royal Awadh, Lucknow',
    preparationNote: 'Served atop miniature saffron sheermal crisps'
  },
  {
    id: 'special-5',
    name: 'Kerala Vegetable Stew',
    description: 'Seasonal market vegetables simmered gently in delicate coconut milk, whole cardamom, and aromatic curry leaves.',
    price: 380,
    isVeg: true,
    image: restaurantImages.keralaStew,
    region: 'Travancore, Kerala',
    preparationNote: 'Infused with freshly pressed sweet coconut milk'
  },
  {
    id: 'special-6',
    name: 'Gulab-e-AURA',
    description: 'A modern interpretation of classic gulab jamun, soaked in light rose syrup and served with rich saffron cream.',
    price: 260,
    isVeg: true,
    image: restaurantImages.gulabEAura,
    region: 'Modern Pastry Studio',
    preparationNote: 'Finished with Iranian pistachios and 24k edible gold foil'
  }
];
