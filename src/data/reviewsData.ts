export interface Review {
  id: string;
  author: string;
  rating: number;
  review: string;
  occasion: string;
  date: string;
  city: string;
}

export const guestReviews: Review[] = [
  {
    id: 'rev-1',
    author: 'Priya R.',
    rating: 5,
    review: 'Every dish felt thoughtfully prepared. The biryani and kebabs were exceptional, and the ambience was beautiful.',
    occasion: 'Anniversary Dinner',
    date: 'February 2026',
    city: 'Visakhapatnam'
  },
  {
    id: 'rev-2',
    author: 'Rahul M.',
    rating: 5,
    review: 'AURA manages to make traditional Indian food feel completely fresh and contemporary.',
    occasion: 'Family Celebration',
    date: 'January 2026',
    city: 'Hyderabad'
  },
  {
    id: 'rev-3',
    author: 'Sneha K.',
    rating: 5,
    review: 'Beautiful interiors, warm service and unforgettable food. Definitely a place for special occasions.',
    occasion: 'Birthday Banquet',
    date: 'February 2026',
    city: 'Bengaluru'
  },
  {
    id: 'rev-4',
    author: 'Karthik M.',
    rating: 5,
    review: 'The Chef\'s Table experience was incredible. Every course had a story behind it.',
    occasion: 'Chef\'s Table Tasting',
    date: 'March 2026',
    city: 'Visakhapatnam'
  }
];
