export type ProductStatus = "coming_soon" | "available" | "out_of_stock";

export type ProductCategory =
  | "snacks-starters"
  | "vegetarian-meal-combos"
  | "non-vegetarian-meal-combos"
  | "frozen-ready-to-store"
  | "best-sellers";

export interface ProductImage {
  url: string;
  alt: string;
}

export interface Product {
  id: string;
  slug: string;
  title: string;
  description?: string;
  category: ProductCategory;
  dietaryType?: "veg" | "non-veg" | "mixed";
  tags?: string[];
  price?: number | null;
  image?: ProductImage | null;
  status: ProductStatus;
  isFeatured?: boolean;
}
