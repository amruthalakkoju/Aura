import { restaurantImages } from './assets';

export interface GalleryItem {
  id: string;
  title: string;
  category: 'Food' | 'Interiors' | 'Chefs' | 'Dining';
  image: string;
  subtitle: string;
  aspect?: string;
}

export const galleryItems: GalleryItem[] = [
  {
    id: 'gal-1',
    title: 'The Grand Dining Hall',
    category: 'Interiors',
    image: restaurantImages.interiorMain,
    subtitle: 'Carved teakwood screens and warm amber chandeliers',
    aspect: 'wide'
  },
  {
    id: 'gal-2',
    title: 'Royal Hyderabadi Dum Biryani',
    category: 'Food',
    image: restaurantImages.biryaniRoyal,
    subtitle: 'Aged basmati and saffron slow-steamed in brass handi',
    aspect: 'square'
  },
  {
    id: 'gal-3',
    title: 'Chef Amrutha Arun Kumar',
    category: 'Chefs',
    image: restaurantImages.chefAmrutha,
    subtitle: 'Directing the evening pass at AURA',
    aspect: 'portrait'
  },
  {
    id: 'gal-4',
    title: 'The Intimate Chef\'s Table',
    category: 'Dining',
    image: restaurantImages.chefTable,
    subtitle: 'Seven-course private tasting salon',
    aspect: 'wide'
  },
  {
    id: 'gal-5',
    title: 'Smoked Paneer Tikka in Embers',
    category: 'Food',
    image: restaurantImages.paneerTikka,
    subtitle: 'Charred babool wood smoke and coriander coulis',
    aspect: 'square'
  },
  {
    id: 'gal-6',
    title: 'Artisanal Botanical Mocktails',
    category: 'Dining',
    image: restaurantImages.cocktails,
    subtitle: 'Passion fruit, star anise, and smoked rosemary elixir',
    aspect: 'square'
  },
  {
    id: 'gal-7',
    title: 'Chef Arun at the Clay Tandoor',
    category: 'Chefs',
    image: restaurantImages.chefArun,
    subtitle: 'Mastering the ancient art of live-fire roasting',
    aspect: 'portrait'
  },
  {
    id: 'gal-8',
    title: 'Awadhi Galouti Kebabs',
    category: 'Food',
    image: restaurantImages.galoutiKebab,
    subtitle: 'Melt-in-mouth patties on crisp saffron sheermal',
    aspect: 'square'
  },
  {
    id: 'gal-9',
    title: 'Chef Manasa Curating Coastal Spices',
    category: 'Chefs',
    image: restaurantImages.chefManasa,
    subtitle: 'Selecting stone-ground spices from coastal groves',
    aspect: 'portrait'
  },
  {
    id: 'gal-10',
    title: 'Gulab-e-AURA with 24k Gold',
    category: 'Food',
    image: restaurantImages.gulabEAura,
    subtitle: 'Rose-infused dumpling on whipped saffron mascarpone',
    aspect: 'square'
  },
  {
    id: 'gal-11',
    title: 'Chef Akshaya Pastry Workshop',
    category: 'Chefs',
    image: restaurantImages.chefAkshaya,
    subtitle: 'Handcrafting delicate mithai and modern confectionery',
    aspect: 'portrait'
  },
  {
    id: 'gal-12',
    title: 'Candlelit Evening Banquet',
    category: 'Dining',
    image: restaurantImages.hero,
    subtitle: 'Unforgettable gatherings overlooking Beach Road',
    aspect: 'wide'
  }
];
