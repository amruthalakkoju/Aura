import { restaurantImages } from './assets';

export interface Chef {
  id: string;
  name: string;
  role: string;
  bio: string;
  speciality: string;
  experience: string;
  philosophy: string;
  image: string;
  signatureDish: string;
}

export const chefsData: Chef[] = [
  {
    id: 'chef-1',
    name: 'Amrutha Arun Kumar',
    role: 'Head Chef & Culinary Director',
    bio: 'Leading AURA’s culinary vision with a passion for bringing together traditional Indian flavours and contemporary presentation.',
    speciality: 'Modern Heritage Indian Gastronomy & Menu Architecture',
    experience: '18+ Years',
    philosophy: 'Indian food is sacred memory elevated through scientific precision and heartfelt warmth.',
    image: restaurantImages.chefAmrutha,
    signatureDish: 'Deconstructed Galouti on Saffron Sheermal'
  },
  {
    id: 'chef-2',
    name: 'Arun',
    role: 'Head Chef — North Indian Cuisine',
    bio: 'A specialist in rich North Indian flavours, tandoor techniques, kebabs, gravies and royal Indian recipes.',
    speciality: 'Mughlai & Awadhi Dum Pukht, Clay Tandoor Roasting',
    experience: '15+ Years',
    philosophy: 'True richness comes from time; our gravies simmer until spices reach their peak harmonic resonance.',
    image: restaurantImages.chefArun,
    signatureDish: 'Awadhi Mutton Rogan Josh & Truffle Naan'
  },
  {
    id: 'chef-3',
    name: 'Manasa',
    role: 'Head Chef — South Indian Cuisine',
    bio: 'Celebrating the diverse flavours of South India through regional ingredients, traditional recipes and modern culinary techniques.',
    speciality: 'Coastal Seafood, Malabar Spice Roasting & Coconut Infusions',
    experience: '14+ Years',
    philosophy: 'From the Malabar coast to the Bay of Bengal, the ocean and fresh curry leaf dictate our craft.',
    image: restaurantImages.chefManasa,
    signatureDish: 'Malabar Butter Garlic Prawns'
  },
  {
    id: 'chef-4',
    name: 'Akshaya',
    role: 'Head Chef — Pastry & Desserts',
    bio: 'Creating elegant desserts that blend classic Indian sweets with contemporary presentation and unexpected flavours.',
    speciality: 'Avant-Garde Mithai, Saffron Ganaches & Floral Infusions',
    experience: '12+ Years',
    philosophy: 'The finale of an Indian banquet must linger like poetry—fragrant, delicate, and deeply indulgent.',
    image: restaurantImages.chefAkshaya,
    signatureDish: 'Gulab-e-AURA with 24k Gold'
  }
];
