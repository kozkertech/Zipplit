"use client";

import * as React from "react";
import { MessageCircle, ShieldCheck, Heart, AlertCircle } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { ProductFilters } from "@/features/products/components/ProductFilters";
import { ProductGrid } from "@/features/products/components/ProductGrid";
import { getProductsByCategory } from "@/services/productService";
import { ProductCategory } from "@/features/products/types/product.types";
import { CTASection } from "@/components/shared/CTASection";
import { siteConfig } from "@/config/site";
import { buildWhatsAppURL } from "@/lib/whatsapp";

export function ProductsClient() {
  const [activeCategory, setActiveCategory] = React.useState<ProductCategory | "all">("all");

  const filteredProducts = getProductsByCategory(activeCategory);

  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-[80vh] flex items-start overflow-hidden bg-white pt-24">
        {/* Background Layer */}
        <div className="absolute inset-0 z-0">
          <img
            src="/assets/product_images/product_hero.png"
            alt="Zipplit Product Hero"
            className="w-full h-full object-cover object-center brightness-[0.95] pb-0"
          />
          {/* Subtle Left Fade for Text Legibility */}
          <div className="absolute inset-0 bg-gradient-to-r from-white via-white/80 to-transparent z-10" />
        </div>

        <Container className="relative z-20 h-full pt-12 pb-24">
          <div className="max-w-3xl animate-in fade-in slide-in-from-left duration-1000">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-fresh-lime/10 text-deep-teal text-[10px] font-black uppercase tracking-[0.2em] border border-fresh-lime/20 mb-8">
              <Heart size={12} className="text-deep-teal fill-deep-teal" />
              Preservative-Free · Home-Style · Kochi
            </div>
            <h1 className="text-5xl md:text-7xl font-black text-bold-black tracking-tighter leading-[1.05] mb-8">
              Fresh Meals for <br />
              <span className="text-deep-teal">Every Craving.</span>
            </h1>
            <p className="text-xl text-stone-gray leading-relaxed mb-10 max-w-xl font-medium">
              Explore our full range of preservative-free, home-style meals. From Kerala classics to global favourites — veg, non-veg, fresh, and frozen.
            </p>
            <Button
              variant="whatsapp"
              size="lg"
              className="h-16 px-12 rounded-full text-lg font-bold shadow-xl hover:scale-105 transition-transform"
              href={buildWhatsAppURL(siteConfig.whatsappMessages.menu)}
            >
              <MessageCircle className="mr-2 h-6 w-6" />
              Order on WhatsApp Now
            </Button>
          </div>
        </Container>
      </section>

      {/* Product List */}
      <Section>
        <Container>
          <ProductFilters
            activeCategory={activeCategory}
            onCategoryChange={setActiveCategory}
          />

          <ProductGrid products={filteredProducts} />
        </Container>
      </Section>

      {/* Trust Builders */}
      <Section variant="light">
        <Container className="items-center">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <div className="flex flex-col gap-4 ">
              <div className="h-12 w-12 rounded-2xl bg-white shadow-sm flex items-center justify-center text-deep-teal">
                <ShieldCheck size={24} />
              </div>
              <h4 className="text-lg font-black text-bold-black">No Preservatives</h4>
              <p className="text-sm text-stone-gray leading-relaxed">
                Zero artificial preservatives. What you taste is exactly what was cooked — nothing hidden.
              </p>
            </div>
            <div className="flex flex-col gap-4">
              <div className="h-12 w-12 rounded-2xl bg-white shadow-sm flex items-center justify-center text-deep-teal">
                <Heart size={24} />
              </div>
              <h4 className="text-lg font-black text-bold-black">Premium Quality</h4>
              <p className="text-sm text-stone-gray leading-relaxed">
                Real ingredients, fresh every day. We never cut corners on what matters for your health.
              </p>
            </div>
            <div className="flex flex-col gap-4">
              <div className="h-12 w-12 rounded-2xl bg-white shadow-sm flex items-center justify-center text-deep-teal">
                <AlertCircle size={24} />
              </div>
              <h4 className="text-lg font-black text-bold-black">Nutritious</h4>
              <p className="text-sm text-stone-gray leading-relaxed">
                Planned for balanced nutrition. Real food that your body actually benefits from.
              </p>
            </div>
            {/* <div className="flex flex-col gap-4">
              <div className="h-12 w-12 rounded-2xl bg-white shadow-sm flex items-center justify-center text-deep-teal">
                <MessageCircle size={24} />
              </div>
              <h4 className="text-lg font-black text-bold-black">Cooked Daily</h4>
              <p className="text-sm text-stone-gray leading-relaxed">
                We cook fresh every day. No cold storage for days. Prepared the day it arrives.
              </p>
            </div> */}
          </div>
        </Container>
      </Section>

      {/* Ready to Order CTA */}
      <CTASection
        title="Ready to Order?"
        description="Preservative-free · Fresh ingredients · Delivered fast to your doorstep in Kochi."
        whatsappMessage={siteConfig.whatsappMessages.menu}
      />

      {/* Dietary Notice */}
      <Section variant="white" className="py-12 border-t">
        <Container>
          <div className="flex flex-col md:flex-row items-center gap-6 p-8 rounded-3xl bg-stone-gray/5 border border-stone-gray/10">
            <AlertCircle className="h-10 w-10 text-deep-teal shrink-0" />
            <div className="space-y-2">
              <h5 className="font-extrabold text-bold-black uppercase tracking-widest text-xs">Dietary & Allergy Notice</h5>
              <p className="text-sm text-stone-gray leading-relaxed">
                All meals are prepared in a kitchen that handles nuts, dairy, dairy alternatives, and gluten. Please inform us of specific allergies or dietary requirements before placing your order. For specific ingredient information, contact us on WhatsApp before ordering.
              </p>
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
}
