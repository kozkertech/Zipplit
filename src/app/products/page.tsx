import { Metadata } from "next";
import { ProductsClient } from "./ProductsClient";

export const metadata: Metadata = {
  title: "Zipplit Menu — Fresh Meals, Frozen Food & Healthy Snacks in Kochi",
  description: "Explore Zipplit's full menu of preservative-free meals in Kochi. Veg, non-veg, seafood, snacks, combo packs & frozen options. Order on WhatsApp.",
};

export default function ProductsPage() {
  return <ProductsClient />;
}
