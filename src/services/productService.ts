import { Product, ProductCategory } from "@/features/products/types/product.types";

const products: Product[] = [
  // Snacks & Starters
  {
    id: "sn-1",
    slug: "mulakbajji-chutney",
    title: "Mulakbajji Chutney",
    description: "Crispy fried mulakbajji served with spicy chutney.",
    category: "snacks-starters",
    dietaryType: "veg",
    status: "coming_soon",
    image: {
      url: "/assets/product_images/Mulakbajji Chutney.png",
      alt: "Mulakbajji Chutney"
    }
  },
  {
    id: "sn-2",
    slug: "banana-fritters-beef-fry",
    title: "Banana Fritters & Beef Fry",
    description: "Kerala's iconic combo: sweet pazhampori with spicy beef fry.",
    category: "snacks-starters",
    dietaryType: "non-veg",
    status: "coming_soon",
    image: {
      url: "/assets/product_images/Banana Fritters & Beef Fry.png",
      alt: "Banana Fritters & Beef Fry"
    }
  },
  {
    id: "sn-3",
    slug: "sweet-coin-porotta",
    title: "Sweet Coin Porotta",
    category: "snacks-starters",
    dietaryType: "veg",
    status: "coming_soon",
    image: {
      url: "/assets/product_images/Sweet Coin Porotta.png",
      alt: "Sweet Coin Porotta"
    }
  },
  {
    id: "sn-4",
    slug: "egg-puffs-egg-roll",
    title: "Egg Puffs & Egg Roll",
    category: "snacks-starters",
    dietaryType: "non-veg",
    status: "coming_soon",
    image: {
      url: "/assets/product_images/Egg Puffs & Egg Roll.png",
      alt: "Egg Puffs & Egg Roll"
    }
  },
  {
    id: "sn-5",
    slug: "veg-puffs-veg-roll",
    title: "Veg Puffs & Veg Roll",
    category: "snacks-starters",
    dietaryType: "veg",
    status: "coming_soon",
    image: {
      url: "/assets/product_images/Veg Puffs & Veg Roll.png",
      alt: "Veg Puffs & Veg Roll"
    }
  },
  {
    id: "sn-6",
    slug: "chicken-puffs",
    title: "Chicken Puffs",
    category: "snacks-starters",
    dietaryType: "non-veg",
    status: "coming_soon",
    image: {
      url: "/assets/product_images/Chicken Puffs.png",
      alt: "Chicken Puffs"
    }
  },
  {
    id: "sn-7",
    slug: "veg-cocktail-samosa",
    title: "Veg Cocktail Samosa",
    category: "snacks-starters",
    dietaryType: "veg",
    status: "coming_soon",
    image: {
      url: "/assets/product_images/Veg Cocktail Samosa.png",
      alt: "Veg Cocktail Samosa"
    }
  },
  {
    id: "sn-8",
    slug: "chicken-cocktail-samosa",
    title: "Chicken Cocktail Samosa",
    category: "snacks-starters",
    dietaryType: "non-veg",
    status: "coming_soon",
    image: {
      url: "/assets/product_images/Chicken Cocktail Samos.png",
      alt: "Chicken Cocktail Samosa"
    }
  },
  {
    id: "sn-9",
    slug: "unnakaya",
    title: "Unnakaya",
    category: "snacks-starters",
    dietaryType: "veg",
    status: "coming_soon",
    image: {
      url: "/assets/product_images/Unnakaya.png",
      alt: "Unnakaya"
    }
  },
  {
    id: "sn-10",
    slug: "chicken-cutlet",
    title: "Chicken Cutlet",
    category: "snacks-starters",
    dietaryType: "non-veg",
    status: "coming_soon",
    image: {
      url: "/assets/product_images/Chicken Cutlet.png",
      alt: "Chicken Cutlet"
    }
  },
  {
    id: "sn-11",
    slug: "paneer-tikka",
    title: "Paneer Tikka",
    category: "snacks-starters",
    dietaryType: "veg",
    status: "coming_soon",
    image: {
      url: "/assets/product_images/Paneer Tikka.png",
      alt: "Paneer Tikka"
    }
  },
  {
    id: "sn-12",
    slug: "chicken-strips-coleslaw",
    title: "Chicken Strips & Coleslaw",
    category: "snacks-starters",
    dietaryType: "non-veg",
    status: "coming_soon",
    image: {
      url: "/assets/product_images/Chicken Strips & Coleslaw.png",
      alt: "Chicken Strips & Coleslaw"
    }
  },
  {
    id: "sn-13",
    slug: "crispy-fried-vegetables",
    title: "Crispy Fried Vegetables",
    category: "snacks-starters",
    dietaryType: "veg",
    status: "coming_soon",
    image: {
      url: "/assets/product_images/Crispy Fried Vegetables.png",
      alt: "Crispy Fried Vegetables"
    }
  },
  {
    id: "sn-14",
    slug: "chicken-roll-momos",
    title: "Chicken Roll & Momos",
    category: "snacks-starters",
    dietaryType: "non-veg",
    status: "coming_soon",
    image: {
      url: "/assets/product_images/Chicken Roll & Momos.png",
      alt: "Chicken Roll & Momos"
    }
  },
  {
    id: "sn-15",
    slug: "garlic-bread",
    title: "Garlic Bread",
    category: "snacks-starters",
    dietaryType: "veg",
    status: "coming_soon",
    image: {
      url: "/assets/product_images/Garlic Bread.png",
      alt: "Garlic Bread"
    }
  },
  {
    id: "sn-16",
    slug: "non-veg-basket",
    title: "Non Veg Basket",
    description: "Chicken, Beef, Pork",
    category: "snacks-starters",
    dietaryType: "non-veg",
    status: "coming_soon",
    image: {
      url: "/assets/product_images/Non Veg Basket (Chicken, Beef, Pork.png",
      alt: "Non Veg Basket"
    }
  },
  {
    id: "sn-17",
    slug: "cheese-rolls",
    title: "Cheese Rolls",
    category: "snacks-starters",
    dietaryType: "veg",
    status: "coming_soon",
    image: {
      url: "/assets/product_images/Cheese Rolls.png",
      alt: "Cheese Rolls"
    }
  },
  {
    id: "sn-18",
    slug: "grilled-chicken-hummus",
    title: "Grilled Chicken & Hummus",
    category: "snacks-starters",
    dietaryType: "non-veg",
    status: "coming_soon",
    image: {
      url: "/assets/product_images/Grilled Chicken & Hummus.png",
      alt: "Grilled Chicken & Hummus"
    }
  },
  {
    id: "sn-19",
    slug: "club-sandwich-veg",
    title: "Club Sandwich Veg",
    category: "snacks-starters",
    dietaryType: "veg",
    status: "coming_soon",
    image: {
      url: "/assets/product_images/Club Sandwich (Veg).png",
      alt: "Club Sandwich Veg"
    }
  },
  {
    id: "sn-20",
    slug: "club-sandwich-non-veg",
    title: "Club Sandwich Non Veg",
    category: "snacks-starters",
    dietaryType: "non-veg",
    status: "coming_soon",
    image: {
      url: "/assets/product_images/Club Sandwich (Non Veg).png",
      alt: "Club Sandwich Non Veg"
    }
  },
  {
    id: "sn-21",
    slug: "healthy-burrito-roll",
    title: "Healthy Burrito Roll",
    category: "snacks-starters",
    dietaryType: "mixed",
    status: "coming_soon",
    image: {
      url: "/assets/product_images/Healthy Burrito Roll.png",
      alt: "Healthy Burrito Roll"
    }
  },

  // Vegetarian Meal Combos
  {
    id: "v-1",
    slug: "kerala-sadhya",
    title: "Kerala Sadhya",
    category: "vegetarian-meal-combos",
    dietaryType: "veg",
    status: "coming_soon",
    isFeatured: true,
    image: {
      url: "/assets/product_images/Kerala Sadhya.png",
      alt: "Kerala Sadhya"
    }
  },
  {
    id: "v-2",
    slug: "ghee-idly-sambar-chutney",
    title: "Ghee Idly Sambar Chutney",
    category: "vegetarian-meal-combos",
    dietaryType: "veg",
    status: "coming_soon",
    image: {
      url: "/assets/product_images/Ghee Idly Sambar Chutney.png",
      alt: "Ghee Idly Sambar Chutney"
    }
  },
  {
    id: "v-3",
    slug: "curd-rice",
    title: "Curd Rice",
    category: "vegetarian-meal-combos",
    dietaryType: "veg",
    status: "coming_soon",
    image: {
      url: "/assets/product_images/Curd Rice.png",
      alt: "Curd Rice"
    }
  },
  {
    id: "v-4",
    slug: "puttu-kadala-salad",
    title: "Puttu Kadala Salad",
    category: "vegetarian-meal-combos",
    dietaryType: "veg",
    status: "coming_soon",
    image: {
      url: "/assets/product_images/Puttu Kadala Salad.png",
      alt: "Puttu Kadala Salad"
    }
  },
  {
    id: "v-5",
    slug: "veg-biryani",
    title: "Veg Biryani",
    category: "vegetarian-meal-combos",
    dietaryType: "veg",
    status: "coming_soon",
    image: {
      url: "/assets/product_images/Veg Biryani.png",
      alt: "Veg Biryani"
    }
  },
  {
    id: "v-6",
    slug: "ghee-rice-paneer-butter",
    title: "Ghee Rice (Paneer Butter)",
    category: "vegetarian-meal-combos",
    dietaryType: "veg",
    status: "coming_soon",
    image: {
      url: "/assets/product_images/Ghee Rice (Paneer Butter).png",
      alt: "Ghee Rice (Paneer Butter)"
    }
  },
  {
    id: "v-7",
    slug: "butter-naan-paneer-butter",
    title: "Butter Naan Paneer Butter",
    category: "vegetarian-meal-combos",
    dietaryType: "veg",
    status: "coming_soon",
    image: {
      url: "/assets/product_images/Butter Naan Paneer Butter.png",
      alt: "Butter Naan Paneer Butter"
    }
  },
  {
    id: "v-8",
    slug: "kerala-porotta-gobi-paneer-mixed-veg",
    title: "Kerala Porotta Gobi / Paneer / Mixed Veg",
    category: "vegetarian-meal-combos",
    dietaryType: "veg",
    status: "coming_soon",
    image: {
      url: "/assets/product_images/Kerala Porotta Gobi  Paneer  Mixed Veg.png",
      alt: "Kerala Porotta Gobi / Paneer / Mixed Veg"
    }
  },
  {
    id: "v-9",
    slug: "dosa-masala-ghee-podi-butter",
    title: "Dosa (Masala / Ghee / Podi / Butter)",
    category: "vegetarian-meal-combos",
    dietaryType: "veg",
    status: "coming_soon",
    image: {
      url: "/assets/product_images/Dosa (Masala  Ghee  Podi  Butter).png",
      alt: "Dosa (Masala / Ghee / Podi / Butter)"
    }
  },
  {
    id: "v-10",
    slug: "veg-fried-rice-gobi-manchurian",
    title: "Veg Fried Rice Gobi Manchurian",
    category: "vegetarian-meal-combos",
    dietaryType: "veg",
    status: "coming_soon",
    image: {
      url: "/assets/product_images/Veg Fried Rice Gobi Manchurian.png",
      alt: "Veg Fried Rice Gobi Manchurian"
    }
  },
  {
    id: "v-11",
    slug: "idiyapam-stew",
    title: "Idiyapam (Stew)",
    category: "vegetarian-meal-combos",
    dietaryType: "veg",
    status: "coming_soon",
    image: {
      url: "/assets/product_images/Idiyapam (Stew).png",
      alt: "Idiyapam (Stew)"
    }
  },
  {
    id: "v-12",
    slug: "veg-noodles-schezwan",
    title: "Veg Noodles Schezwan",
    category: "vegetarian-meal-combos",
    dietaryType: "veg",
    status: "coming_soon",
    image: {
      url: "/assets/product_images/Veg Noodles Schezwan.png",
      alt: "Veg Noodles Schezwan"
    }
  },
  {
    id: "v-13",
    slug: "kallapam-stew-kurma",
    title: "Kallapam (Stew / Kurma)",
    category: "vegetarian-meal-combos",
    dietaryType: "veg",
    status: "coming_soon",
    image: {
      url: "/assets/product_images/Kallapam (Stew  Kurma).png",
      alt: "Kallapam (Stew / Kurma)"
    }
  },
  {
    id: "v-14",
    slug: "thai-green-red-curry-rice-veg",
    title: "Thai Green / Red Curry Rice (Veg)",
    category: "vegetarian-meal-combos",
    dietaryType: "veg",
    status: "coming_soon",
    image: {
      url: "/assets/product_images/Thai Green  Red Curry Rice (Veg).png",
      alt: "Thai Green / Red Curry Rice (Veg)"
    }
  },
  {
    id: "v-15",
    slug: "poori-masala",
    title: "Poori Masala",
    category: "vegetarian-meal-combos",
    dietaryType: "veg",
    status: "coming_soon",
    image: {
      url: "/assets/product_images/Poori Masala.png",
      alt: "Poori Masala"
    }
  },
  {
    id: "v-16",
    slug: "pad-thai-veg",
    title: "Pad Thai Veg",
    category: "vegetarian-meal-combos",
    dietaryType: "veg",
    status: "coming_soon",
    image: {
      url: "/assets/product_images/Pad Thai Veg.png",
      alt: "Pad Thai Veg"
    }
  },
  {
    id: "v-17",
    slug: "chapati-palak-paneer",
    title: "Chapati Palak Paneer",
    category: "vegetarian-meal-combos",
    dietaryType: "veg",
    status: "coming_soon",
    image: {
      url: "/assets/product_images/Chapati Palak Paneer.png",
      alt: "Chapati Palak Paneer"
    }
  },
  {
    id: "v-18",
    slug: "chole-bhature",
    title: "Chole Bhature",
    category: "vegetarian-meal-combos",
    dietaryType: "veg",
    status: "coming_soon",
    image: {
      url: "/assets/product_images/Chole Bhature.png",
      alt: "Chole Bhature"
    }
  },
  {
    id: "v-19",
    slug: "pav-bhaji",
    title: "Pav Bhaji",
    category: "vegetarian-meal-combos",
    dietaryType: "veg",
    status: "coming_soon",
    image: {
      url: "/assets/product_images/Pav Bhaji.png",
      alt: "Pav Bhaji"
    }
  },
  {
    id: "v-20",
    slug: "samosa-chaat",
    title: "Samosa Chaat",
    category: "vegetarian-meal-combos",
    dietaryType: "veg",
    status: "coming_soon",
    image: {
      url: "/assets/product_images/Samosa Chaat.png",
      alt: "Samosa Chaat"
    }
  },

  // Non-Vegetarian Meal Combos
  {
    id: "nv-1",
    slug: "chicken-fry-rice-veggies",
    title: "Chicken Fry, Simple Chicken Curry, Rice & Veggies",
    category: "non-vegetarian-meal-combos",
    dietaryType: "non-veg",
    status: "coming_soon",
    isFeatured: true,
    image: {
      url: "/assets/product_images/Chicken Fry, Simple Chicken Curry, Rice & Veggies.png",
      alt: "Chicken Fry, Simple Chicken Curry, Rice & Veggies"
    }
  },
  {
    id: "nv-2",
    slug: "chicken-biryani",
    title: "Chicken Biryani, Pickle, Salad",
    category: "non-vegetarian-meal-combos",
    dietaryType: "non-veg",
    status: "coming_soon",
    image: {
      url: "/assets/product_images/Chicken Biryani, Pickle, Salad.png",
      alt: "Chicken Biryani, Pickle, Salad"
    }
  },
  {
    id: "nv-3",
    slug: "duck-curry-combo",
    title: "Duck Curry Combo",
    category: "non-vegetarian-meal-combos",
    dietaryType: "non-veg",
    status: "coming_soon",
    image: {
      url: "/assets/product_images/Duck Curry Combo.png",
      alt: "Duck Curry Combo"
    }
  },
  {
    id: "nv-4",
    slug: "kallapam-fish-moile",
    title: "Kallapam & Fish Moile",
    category: "non-vegetarian-meal-combos",
    dietaryType: "non-veg",
    status: "coming_soon",
    image: {
      url: "/assets/product_images/Kallapam & Fish Moile.png",
      alt: "Kallapam & Fish Moile"
    }
  },
  {
    id: "nv-5",
    slug: "ghee-rice-beef-roast-salad",
    title: "Ghee Rice Beef Roast Salad",
    category: "non-vegetarian-meal-combos",
    dietaryType: "non-veg",
    status: "coming_soon",
    image: {
      url: "/assets/product_images/Ghee Rice Beef Roast Salad.png",
      alt: "Ghee Rice Beef Roast Salad"
    }
  },
  {
    id: "nv-6",
    slug: "chicken-tikka-biryani-family-pack",
    title: "Chicken Tikka Biryani / Family Pack",
    category: "non-vegetarian-meal-combos",
    dietaryType: "non-veg",
    status: "coming_soon",
    image: {
      url: "/assets/product_images/Chicken Tikka Biryani  Family Pack.png",
      alt: "Chicken Tikka Biryani / Family Pack"
    }
  },
  {
    id: "nv-7",
    slug: "ghee-rice-butter-chicken-salad",
    title: "Ghee Rice Butter Chicken Salad",
    category: "non-vegetarian-meal-combos",
    dietaryType: "non-veg",
    status: "coming_soon",
    image: {
      url: "/assets/product_images/Ghee Rice Butter Chicken Salad.png",
      alt: "Ghee Rice Butter Chicken Salad"
    }
  },
  {
    id: "nv-8",
    slug: "butter-naan-butter-chicken",
    title: "Butter Naan Butter Chicken",
    category: "non-vegetarian-meal-combos",
    dietaryType: "non-veg",
    status: "coming_soon",
    image: {
      url: "/assets/product_images/Butter Naan Butter Chicken.png",
      alt: "Butter Naan Butter Chicken"
    }
  },
  {
    id: "nv-9",
    slug: "prawn-fried-rice-chilli-pork",
    title: "Prawn Fried Rice, Chilli Pork",
    category: "non-vegetarian-meal-combos",
    dietaryType: "non-veg",
    status: "coming_soon",
    image: {
      url: "/assets/product_images/Prawn Fried Rice, Chilli Pork.png",
      alt: "Prawn Fried Rice, Chilli Pork"
    }
  },
  {
    id: "nv-10",
    slug: "fish-curry-meals-with-fry",
    title: "Fish Curry Meals with Fry",
    category: "non-vegetarian-meal-combos",
    dietaryType: "non-veg",
    status: "coming_soon",
    image: {
      url: "/assets/product_images/Fish Curry Meals with Fry.png",
      alt: "Fish Curry Meals with Fry"
    }
  },
  {
    id: "nv-11",
    slug: "mixed-non-veg-rice",
    title: "Mixed Non Veg Rice",
    category: "non-vegetarian-meal-combos",
    dietaryType: "non-veg",
    status: "coming_soon",
    image: {
      url: "/assets/product_images/Mixed Non Veg Rice.png",
      alt: "Mixed Non Veg Rice"
    }
  },
  {
    id: "nv-12",
    slug: "kerala-porotta-chicken-roast-chicken-fry",
    title: "Kerala Porotta, Chicken Roast, Chicken Fry",
    category: "non-vegetarian-meal-combos",
    dietaryType: "non-veg",
    status: "coming_soon",
    image: {
      url: "/assets/product_images/Kerala Porotta, Chicken Roast, Chicken Fr.png",
      alt: "Kerala Porotta, Chicken Roast, Chicken Fry"
    }
  },
  {
    id: "nv-13",
    slug: "chicken-fried-rice-kung-pao-chicken",
    title: "Chicken Fried Rice Kung Pao Chicken",
    category: "non-vegetarian-meal-combos",
    dietaryType: "non-veg",
    status: "coming_soon",
    image: {
      url: "/assets/product_images/Chicken Fried Rice Kung Pao Chicken.png",
      alt: "Chicken Fried Rice Kung Pao Chicken"
    }
  },
  {
    id: "nv-14",
    slug: "fish-fry-and-fish-curry",
    title: "Fish Fry and Fish Curry",
    category: "non-vegetarian-meal-combos",
    dietaryType: "non-veg",
    status: "coming_soon",
    image: {
      url: "/assets/product_images/Fish Fry and Fish Curry.png",
      alt: "Fish Fry and Fish Curry"
    }
  },
  {
    id: "nv-15",
    slug: "puttu-chicken-curry-salad",
    title: "Puttu Chicken Curry Salad",
    category: "non-vegetarian-meal-combos",
    dietaryType: "non-veg",
    status: "coming_soon",
    image: {
      url: "/assets/product_images/Puttu Chicken Curry Salad.png",
      alt: "Puttu Chicken Curry Salad"
    }
  },
  {
    id: "nv-16",
    slug: "non-veg-sadhya-chicken-beef-pork",
    title: "Non Veg Sadhya (Chicken, Beef, Pork)",
    category: "non-vegetarian-meal-combos",
    dietaryType: "non-veg",
    status: "coming_soon",
    image: {
      url: "/assets/product_images/Non Veg Sadhya (Chicken, Beef, Pork).png",
      alt: "Non Veg Sadhya (Chicken, Beef, Pork)"
    }
  },
  {
    id: "nv-17",
    slug: "mixed-rice-pork-vindaloo",
    title: "Mixed Rice Pork Vindaloo",
    category: "non-vegetarian-meal-combos",
    dietaryType: "non-veg",
    status: "coming_soon",
    image: {
      url: "/assets/product_images/Mixed Rice Pork Vindaloo.png",
      alt: "Mixed Rice Pork Vindaloo"
    }
  },
  {
    id: "nv-18",
    slug: "chicken-tikka-pulao",
    title: "Chicken Tikka & Pulao",
    category: "non-vegetarian-meal-combos",
    dietaryType: "non-veg",
    status: "coming_soon",
    image: {
      url: "/assets/product_images/Chicken Tikka & Pulao.png",
      alt: "Chicken Tikka & Pulao"
    }
  },
];

export function getProducts(): Product[] {
  return products;
}

export function getProductsByCategory(category: ProductCategory | "all"): Product[] {
  if (category === "all") return products;
  return products.filter((p) => p.category === category);
}

export function getFeaturedProducts(): Product[] {
  return products.filter((p) => p.isFeatured);
}
