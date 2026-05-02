import { Metadata } from "next";
import Image from "next/image";
import {
  Building2,
  ChefHat,
  Truck,
  Store,
  UtensilsCrossed,
  Factory,
  CheckCircle2,
  BarChart3,
  Rocket,
  Zap,
  MessageCircle
} from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { BusinessInquiryForm } from "@/features/forms/BusinessInquiryForm";
import { buildWhatsAppURL } from "@/lib/whatsapp";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "B2B & Corporate Food Solutions — Zipplit Kochi",
  description: "Bulk sourcing, corporate meal solutions, and supply support for restaurants, cloud kitchens, and offices in Kochi.",
};

export default function ForBusinessesPage() {

  return (
    <>
      {/* Hero */}
      <Section variant="white" className="min-h-[80vh] flex items-start pt-4 lg:pt-0 relative overflow-hidden">
        {/* Background Image & Overlay */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/assets/for%20Bussiness/for_business_hero.png"
            alt="Zipplit For Business"
            fill
            className="object-cover object-right brightness-[1.05] contrast-[1.02] saturate-[1.05]"
            quality={100}
            priority
          />
          {/* Subtle Overlay for Text Legibility */}
          <div className="absolute inset-0 bg-gradient-to-r from-white via-white/90 to-transparent lg:from-white lg:via-white/80 lg:to-transparent z-10" />
        </div>

        <Container className="relative z-20 h-full pt-20 pb-24">
          <div className="max-w-3xl space-y-8 animate-in fade-in slide-in-from-left duration-1000">
            <Badge className="bg-fresh-lime text-deep-teal px-4 py-1.5 text-sm font-black border-none shadow-sm">
              Reliable Food Partner in Kochi
            </Badge>
            <h1 className="text-5xl md:text-7xl font-black text-bold-black tracking-tighter leading-tight">
              Scale Your <br /> Hospitality <br /> <span className="text-deep-teal">with Zipplit.</span>
            </h1>
            <p className="text-xl text-stone-gray leading-relaxed max-w-lg font-semibold">
              From hotels needing supply support to offices looking for healthy lunches and cloud kitchens seeking reliable solutions — we provide bulk sourcing and supply to keep you running.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button variant="secondary" size="lg" className="h-16 px-10 text-lg" href="#inquiry">
                Partner With Us
              </Button>
              <Button
                variant="whatsapp"
                size="lg"
                className="h-16 px-10 text-lg shadow-xl"
                href={buildWhatsAppURL(siteConfig.whatsappMessages.business)}
              >
                <MessageCircle className="mr-2 h-6 w-6" />
                Chat on WhatsApp
              </Button>
            </div>
          </div>
        </Container>
      </Section>

      {/* Who This Is For */}
      <Section>
        <Container>
          <SectionHeader
            title="Who This Is For"
            centered
            className="mb-16"
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <BusinessCard
              icon={ChefHat}
              title="Restaurants & Cafes"
              description="Supplement your fresh produce supply with consistent-quality ingredients and pre-prepared bases. Reduce prep time and wastage."
            />
            <BusinessCard
              icon={Rocket}
              title="Cloud Kitchens"
              description="Pre-marinated proteins, sauce bases, and ready-to-cook items designed to fit seamlessly into your production workflow."
            />
            {/* <BusinessCard 
              icon={Building2}
              title="Corporate Offices"
              description="Daily meal delivery for offices of all sizes. One vendor, consistent quality, reliable scheduling (10–1,000+ meals)."
            /> */}
            <BusinessCard
              icon={Store}
              title="Supermarkets & Retail"
              description="Stock your shelves with Zipplit's preservative-free frozen range. White-label and retail-ready options available."
            />
            <BusinessCard
              icon={UtensilsCrossed}
              title="Catering Services"
              description="Supply bulk-prepared meal components and ready-to-serve dishes to caterers handling large events and functions."
            />
            <BusinessCard
              icon={Factory}
              title="Food Processing Units"
              description="Source fresh produce, dairy, and seafood in large volumes directly through Zipplit. Consistent supply, guaranteed quality."
            />
          </div>
        </Container>
      </Section>

      {/* Advantage / Numbers */}
      <Section variant="teal">
        <Container>
          <SectionHeader
            title="The Numbers Make Sense"
            inverse
            centered
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center space-y-4">
              <div className="text-5xl font-black text-fresh-lime">₹0</div>
              <p className="font-bold text-white uppercase tracking-widest text-xs">Middlemen Fees</p>
              <p className="text-sm text-white/60">We source directly, passing savings to you.</p>
            </div>
            <div className="text-center space-y-4">
              <div className="text-5xl font-black text-fresh-lime">100%</div>
              <p className="font-bold text-white uppercase tracking-widest text-xs">Cold Chain</p>
              <p className="text-sm text-white/60">Temperature-maintained logistics for all deliveries.</p>
            </div>
            <div className="text-center space-y-4">
              <div className="text-5xl font-black text-fresh-lime">24/7</div>
              <p className="font-bold text-white uppercase tracking-widest text-xs">Operational Support</p>
              <p className="text-sm text-white/60">Dedicated account managers for your business.</p>
            </div>
            <div className="text-center space-y-4">
              <div className="text-5xl font-black text-fresh-lime">0%</div>
              <p className="font-bold text-white uppercase tracking-widest text-xs">Preservatives</p>
              <p className="text-sm text-white/60">Clean labels that your customers will trust.</p>
            </div>
          </div>
        </Container>
      </Section>

      {/* How it Works B2B */}
      <Section>
        <Container>
          <SectionHeader title="Simple to Start. Easy to Scale." centered />
          <div className="max-w-4xl mx-auto space-y-12">
            <B2BStep
              num={1}
              title="Consultation"
              description="Tell us your volume requirements and frequency. We'll design a sourcing plan around your needs."
            />
            <B2BStep
              num={2}
              title="Sampling"
              description="We send you product samples for quality evaluation. Try our ingredients before committing."
            />
            <B2BStep
              num={3}
              title="Integration"
              description="We integrate Zipplit's delivery schedule with your operations. Manage via WhatsApp or automated workflows."
            />
            <B2BStep
              num={4}
              title="Fulfilment"
              description="Regular, reliable delivery on your agreed schedule. Consistent quality. Dedicated point of contact."
            />
          </div>
        </Container>
      </Section>

      {/* Inquiry Form */}
      <Section variant="light" id="inquiry">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
            <div className="lg:col-span-5 space-y-8">
              <SectionHeader
                eyebrow="Partner With Us"
                title="Ready to Optimise Your Food Supply?"
                description="Tell us about your business and we'll get back to you within 24 hours with a tailored proposal."
              />
              <div className="space-y-6">
                <div className="flex gap-4 p-6 rounded-2xl bg-white shadow-premium">
                  <CheckCircle2 className="h-6 w-6 text-fresh-lime shrink-0" />
                  <p className="font-bold text-bold-black">Volume-Based Pricing Benefits</p>
                </div>
                <div className="flex gap-4 p-6 rounded-2xl bg-white shadow-premium">
                  <CheckCircle2 className="h-6 w-6 text-fresh-lime shrink-0" />
                  <p className="font-bold text-bold-black">Reduced Vendor Dependency</p>
                </div>
                <div className="flex gap-4 p-6 rounded-2xl bg-white shadow-premium">
                  <CheckCircle2 className="h-6 w-6 text-fresh-lime shrink-0" />
                  <p className="font-bold text-bold-black">Scalable Volume Capabilities</p>
                </div>
              </div>
            </div>
            <div className="lg:col-span-7">
              <Card className="p-8 md:p-12">
                <BusinessInquiryForm />
              </Card>
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
}

function BusinessCard({ icon: Icon, title, description }: { icon: any, title: string, description: string }) {
  return (
    <Card className="p-8 space-y-4 hover:shadow-premium border border-stone-gray/5">
      <div className="h-14 w-14 rounded-2xl bg-fresh-lime/10 text-deep-teal flex items-center justify-center">
        <Icon size={28} />
      </div>
      <h3 className="text-xl font-black text-bold-black">{title}</h3>
      <p className="text-sm text-stone-gray leading-relaxed">{description}</p>
    </Card>
  );
}

function B2BStep({ num, title, description }: { num: number, title: string, description: string }) {
  return (
    <div className="flex gap-8 items-start group">
      <div className="h-16 w-16 rounded-full border-4 border-fresh-lime/20 flex items-center justify-center shrink-0 font-black text-2xl text-deep-teal transition-all group-hover:bg-fresh-lime group-hover:border-fresh-lime group-hover:scale-110">
        {num}
      </div>
      <div className="pt-2">
        <h4 className="text-2xl font-black text-bold-black mb-2">{title}</h4>
        <p className="text-stone-gray text-lg leading-relaxed">{description}</p>
      </div>
    </div>
  );
}
