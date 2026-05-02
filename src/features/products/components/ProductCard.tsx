"use client";

import Image from "next/image";
import { MessageCircle } from "lucide-react";
import { Product } from "../types/product.types";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { PlaceholderImage } from "@/components/ui/PlaceholderImage";
import { cn } from "@/lib/utils";
import { buildWhatsAppURL } from "@/lib/whatsapp";
import { siteConfig } from "@/config/site";

interface ProductCardProps {
  product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
  const isComingSoon = product.status === "coming_soon";



  return (
    <div className="group relative flex flex-col overflow-hidden rounded-2xl bg-white shadow-premium transition-all duration-300 hover:shadow-lg">
      {/* Image Area */}
      <div className="relative aspect-[4/3] w-full overflow-hidden">
        {product.image ? (
          <Image
            src={product.image.url}
            alt={product.image.alt}
            fill
            className={cn(
              "object-cover transition-transform duration-500 group-hover:scale-105",
              isComingSoon && "blur-[2px] opacity-80"
            )}
          />
        ) : (
          <PlaceholderImage 
            text={product.title} 
            className={cn(isComingSoon && "blur-[2px] opacity-80")}
          />
        )}

        {/* Coming Soon Overlay */}
        {isComingSoon && (
          <div className="absolute inset-0 z-10 flex items-center justify-center bg-black/10 backdrop-blur-[1px]">
            <Badge variant="secondary" className="px-4 py-1.5 text-sm shadow-sm backdrop-blur-md">
              Coming Soon
            </Badge>
          </div>
        )}

        {/* Dietary Badge */}
        {product.dietaryType && !isComingSoon && (
          <div className="absolute left-3 top-3 z-10">
            <Badge 
              variant={product.dietaryType === "veg" ? "success" : "primary"}
              className="bg-white/90 backdrop-blur-sm"
            >
              {product.dietaryType}
            </Badge>
          </div>
        )}
      </div>

      {/* Content Area */}
      <div className="flex flex-grow flex-col p-5">
        <div className="mb-2 flex items-start justify-between gap-2">
          <h3 className="line-clamp-2 text-lg font-extrabold text-bold-black leading-tight">
            {product.title}
          </h3>
        </div>

        <div className="mb-3">
          <span className="text-sm font-bold text-deep-teal/60">
            {product.price ? `₹${product.price}` : "Currently Unavailable"}
          </span>
        </div>
        
        {product.description && (
          <p className="mb-4 line-clamp-2 text-sm text-stone-gray leading-relaxed">
            {product.description}
          </p>
        )}

        <div className="mt-auto pt-4 border-t border-stone-gray/5">
          <Button
            variant="ghost"
            size="sm"
            className="w-full justify-between px-0 hover:bg-transparent hover:text-fresh-lime"
            href={buildWhatsAppURL(siteConfig.whatsappMessages.product(product.title))}
          >
            <span className="text-sm font-bold uppercase tracking-wider">Enquire on WhatsApp</span>
            <MessageCircle className="h-4 w-4" />
          </Button>

        </div>
      </div>
    </div>
  );
}
