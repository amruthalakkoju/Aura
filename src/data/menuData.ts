export interface MenuItem {
  id: string;
  name: string;
  description: string;
  price: number;
  category: 'starters' | 'vegetarian' | 'non-vegetarian' | 'main-course' | 'biryani' | 'breads' | 'desserts' | 'beverages';
  isVeg: boolean;
  isSpicy?: boolean;
  isChefSpecial?: boolean;
  spiceLevel?: 1 | 2 | 3;
}

export interface MenuCategory {
  id: 'all' | 'starters' | 'vegetarian' | 'non-vegetarian' | 'main-course' | 'biryani' | 'breads' | 'desserts' | 'beverages';
  label: string;
}

export const menuCategories: MenuCategory[] = [
  { id: 'all', label: 'All Dishes' },
  { id: 'starters', label: 'Starters' },
  { id: 'vegetarian', label: 'Vegetarian' },
  { id: 'non-vegetarian', label: 'Non-Vegetarian' },
  { id: 'main-course', label: 'Main Course' },
  { id: 'biryani', label: 'Biryani' },
  { id: 'breads', label: 'Breads' },
  { id: 'desserts', label: 'Desserts' },
  { id: 'beverages', label: 'Beverages' },
];

export const fullMenuItems: MenuItem[] = [
  // Starters
  {
    id: 'm-str-1',
    name: 'Paneer Tikka',
    description: 'Char-grilled cottage cheese marinated in hung curd, yellow mustard oil, Kashmiri degi mirch, and roasted spices.',
    price: 320,
    category: 'starters',
    isVeg: true,
    spiceLevel: 2,
    isChefSpecial: true
  },
  {
    id: 'm-str-2',
    name: 'Tandoori Chicken',
    description: 'Spring chicken steeped in ginger garlic reduction, hung yoghurt, and hand-ground Garhwal spices roasted in clay tandoor.',
    price: 420,
    category: 'starters',
    isVeg: false,
    spiceLevel: 2
  },
  {
    id: 'm-str-3',
    name: 'Dahi Kebab',
    description: 'Crispy silken hung curd croquettes flavored with cardamom, green chilies, fresh coriander, and roasted cumin.',
    price: 300,
    category: 'starters',
    isVeg: true,
    spiceLevel: 1
  },
  {
    id: 'm-str-4',
    name: 'Malai Broccoli',
    description: 'Charred tender broccoli florets marinated in clotted cream, crushed green cardamom, and toasted cheddar glaze.',
    price: 340,
    category: 'starters',
    isVeg: true,
    spiceLevel: 1
  },
  {
    id: 'm-str-5',
    name: 'Chicken Seekh Kebab',
    description: 'Minced chicken skewers infused with mint, caramelized shallots, mace, and charcoal smoked in tandoor.',
    price: 390,
    category: 'starters',
    isVeg: false,
    spiceLevel: 2
  },
  {
    id: 'm-str-6',
    name: 'Amritsari Fish Tikka',
    description: 'Carom seed and gram flour crusted river sole fillets, fried crisp with spicy chaat masala dust.',
    price: 450,
    category: 'starters',
    isVeg: false,
    spiceLevel: 2
  },

  // Main Course
  {
    id: 'm-mc-1',
    name: 'Paneer Khurchan',
    description: 'Batons of artisanal cottage cheese wok-tossed with three-color peppers, crushed coriander seeds, and tangy tomato gravy.',
    price: 420,
    category: 'main-course',
    isVeg: true,
    spiceLevel: 2
  },
  {
    id: 'm-mc-2',
    name: 'Dal Makhani',
    description: 'Black lentils slow-cooked overnight over simmering embers with fresh white churned butter and San Marzano tomato puree.',
    price: 350,
    category: 'main-course',
    isVeg: true,
    spiceLevel: 1,
    isChefSpecial: true
  },
  {
    id: 'm-mc-3',
    name: 'Butter Chicken',
    description: 'Smoked tandoori chicken pulled and simmered in a velvety makhani sauce laced with fenugreek and wild blossom honey.',
    price: 480,
    category: 'main-course',
    isVeg: false,
    spiceLevel: 1,
    isChefSpecial: true
  },
  {
    id: 'm-mc-4',
    name: 'Andhra Chicken Curry',
    description: 'Spicy coastal style chicken simmered in stone-ground Guntur red chillies, poppy seed paste, and fresh curry leaves.',
    price: 460,
    category: 'main-course',
    isVeg: false,
    spiceLevel: 3
  },
  {
    id: 'm-mc-5',
    name: 'Mutton Rogan Josh',
    description: 'Slow-braised Kashmiri kid goat meat infused with ratanjot bark, sun-dried ginger, and aromatic fennel powder.',
    price: 520,
    category: 'main-course',
    isVeg: false,
    spiceLevel: 2,
    isChefSpecial: true
  },
  {
    id: 'm-mc-6',
    name: 'Palak Paneer Velvet',
    description: 'Farm-fresh spinach purée tempered with browned garlic, heirloom spices, and soft organic cottage cheese.',
    price: 390,
    category: 'main-course',
    isVeg: true,
    spiceLevel: 1
  },

  // Biryani
  {
    id: 'm-bir-1',
    name: 'Hyderabadi Chicken Biryani',
    description: 'Long-grain aged basmati rice layered with spiced marinated chicken, saffron milk, and golden onions cooked in dum.',
    price: 480,
    category: 'biryani',
    isVeg: false,
    spiceLevel: 2,
    isChefSpecial: true
  },
  {
    id: 'm-bir-2',
    name: 'Mutton Biryani',
    description: 'Tender baby goat shank slow-steamed with whole garam masalas, kewra essence, and aged basmati in sealed handi.',
    price: 560,
    category: 'biryani',
    isVeg: false,
    spiceLevel: 2,
    isChefSpecial: true
  },
  {
    id: 'm-bir-3',
    name: 'Vegetable Dum Biryani',
    description: 'Seasonal carrots, French beans, baby potatoes, and paneer cubes cooked with mint, saffron, and aromatic spices.',
    price: 380,
    category: 'biryani',
    isVeg: true,
    spiceLevel: 1
  },
  {
    id: 'm-bir-4',
    name: 'Paneer Biryani',
    description: 'Marinated cottage cheese layered with fragrant saffron rice, brown onions, fresh mint, and rose water.',
    price: 420,
    category: 'biryani',
    isVeg: true,
    spiceLevel: 2
  },

  // Breads
  {
    id: 'm-brd-1',
    name: 'Butter Naan',
    description: 'Traditional refined flour flatbread baked on the clay walls of the tandoor and brushed with salted butter.',
    price: 90,
    category: 'breads',
    isVeg: true
  },
  {
    id: 'm-brd-2',
    name: 'Garlic Naan',
    description: 'Tandoor-baked naan loaded with roasted minced garlic, fresh coriander leaves, and clarified butter.',
    price: 120,
    category: 'breads',
    isVeg: true
  },
  {
    id: 'm-brd-3',
    name: 'Tandoori Roti',
    description: 'Wholesome stone-ground whole wheat flatbread baked crisp in the clay oven.',
    price: 70,
    category: 'breads',
    isVeg: true
  },
  {
    id: 'm-brd-4',
    name: 'Laccha Paratha',
    description: 'Multi-layered flaky whole wheat bread layered with ghee and carom seeds, crisped to golden perfection.',
    price: 110,
    category: 'breads',
    isVeg: true
  },
  {
    id: 'm-brd-5',
    name: 'Truffle & Cheese Naan',
    description: 'Naan stuffed with aged sharp cheddar and drizzled with cold-pressed black truffle oil.',
    price: 190,
    category: 'breads',
    isVeg: true,
    isChefSpecial: true
  },

  // Desserts
  {
    id: 'm-des-1',
    name: 'Gulab Jamun',
    description: 'Warm reduced-milk dumplings infused with green cardamom and soaked in wild saffron and rose petal sugar syrup.',
    price: 180,
    category: 'desserts',
    isVeg: true
  },
  {
    id: 'm-des-2',
    name: 'Rasmalai',
    description: 'Delicate poached cottage cheese discs steeped in thickened saffron-cardamom clotted milk, garnished with pistachios.',
    price: 220,
    category: 'desserts',
    isVeg: true
  },
  {
    id: 'm-des-3',
    name: 'Saffron Kulfi',
    description: 'Traditional slow-reduced dense Indian ice cream flavored with Kashmiri saffron strands, chopped almonds, and silver vark.',
    price: 200,
    category: 'desserts',
    isVeg: true
  },
  {
    id: 'm-des-4',
    name: 'Gulab-e-AURA',
    description: 'Signature artisanal gulab jamun rested on whipped saffron mascarpone cream, pistachios, and 24k gold leaf.',
    price: 260,
    category: 'desserts',
    isVeg: true,
    isChefSpecial: true
  },
  {
    id: 'm-des-5',
    name: 'Baked Shahi Tukda',
    description: 'Crisp ghee-toasted brioche soaked in saffron rabri and crowned with wild fig compote and candied nuts.',
    price: 240,
    category: 'desserts',
    isVeg: true
  },

  // Beverages
  {
    id: 'm-bev-1',
    name: 'Masala Chai',
    description: 'Single-origin Assam CTC tea slow-brewed with buffalo milk, crushed ginger, green cardamom, cloves, and cinnamon.',
    price: 120,
    category: 'beverages',
    isVeg: true
  },
  {
    id: 'm-bev-2',
    name: 'Mango Lassi',
    description: 'Velvety artisanal yoghurt blended with Alphonso mango pulp, green cardamom, and sprinkled with crushed pistachios.',
    price: 180,
    category: 'beverages',
    isVeg: true
  },
  {
    id: 'm-bev-3',
    name: 'Rose Lassi',
    description: 'Chilled hand-churned yoghurt blended with organic Kannauj Damascus rose extract and dried rose petals.',
    price: 180,
    category: 'beverages',
    isVeg: true
  },
  {
    id: 'm-bev-4',
    name: 'Fresh Lime Soda',
    description: 'Freshly squeezed coastal key limes with sparkling soda water, roasted cumin pinch, rock salt, and mint.',
    price: 140,
    category: 'beverages',
    isVeg: true
  },
  {
    id: 'm-bev-5',
    name: 'AURA Signature Mocktail',
    description: 'Botanical infusion of fresh passion fruit, Indian star anise syrup, smoked rosemary, and clarified coconut water.',
    price: 260,
    category: 'beverages',
    isVeg: true,
    isChefSpecial: true
  },
  {
    id: 'm-bev-6',
    name: 'Kokum & Curry Leaf Spritzer',
    description: 'Tangy Konkan kokum fruit nectar muddled with bruised curry leaves, pink salt, and chilled sparkling spring water.',
    price: 220,
    category: 'beverages',
    isVeg: true
  }
];
