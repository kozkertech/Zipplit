import { Product } from "../types/product.types";
import { ProductCard } from "./ProductCard";
import { cn } from "@/lib/utils";

interface ProductGridProps {
  products: Product[];
  className?: string;
}

export function ProductGrid({ products, className }: ProductGridProps) {
  if (products.length === 0) {
    return (
      <div className="flex min-h-[400px] flex-col items-center justify-center rounded-2xl bg-stone-gray/5 p-12 text-center">
        <p className="text-xl font-bold text-stone-gray">No items found in this category.</p>
        <p className="text-sm text-stone-gray/60 mt-2">Check back soon for new additions to our menu!</p>
      </div>
    );
  }

  return (
    <div
      className={cn(
        "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8",
        className
      )}
    >
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
}
