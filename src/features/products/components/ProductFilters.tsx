"use client";

import { ProductCategory } from "../types/product.types";
import { cn } from "@/lib/utils";

interface FilterTab {
  id: ProductCategory | "all";
  label: string;
}

const tabs: FilterTab[] = [
  { id: "all", label: "All Items" },
  { id: "snacks-starters", label: "Snacks & Starters" },
  { id: "vegetarian-meal-combos", label: "Vegetarian" },
  { id: "non-vegetarian-meal-combos", label: "Non-Vegetarian" },
  { id: "frozen-ready-to-store", label: "Frozen" },
];

interface ProductFiltersProps {
  activeCategory: ProductCategory | "all";
  onCategoryChange: (category: ProductCategory | "all") => void;
}

export function ProductFilters({ activeCategory, onCategoryChange }: ProductFiltersProps) {
  return (
    <div className="relative mb-12">
      <div className="flex w-full items-center overflow-x-auto pb-4 scrollbar-hide">
        <div className="flex gap-2">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => onCategoryChange(tab.id)}
              className={cn(
                "whitespace-nowrap rounded-full px-6 py-2.5 text-sm font-bold transition-all duration-200 border-2",
                activeCategory === tab.id
                  ? "border-fresh-lime bg-fresh-lime text-deep-teal shadow-md"
                  : "border-stone-gray/10 bg-white text-stone-gray hover:border-deep-teal/20"
              )}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
