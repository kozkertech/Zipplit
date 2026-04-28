import { Metadata } from "next";
import { Check, MessageCircle, Star } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { siteConfig } from "@/config/site";
import { buildWhatsAppURL } from "@/lib/whatsapp";
import { cn } from "@/lib/utils";


export const metadata: Metadata = {
  title: "Meal Plans & Pricing — Zipplit Kochi",
  description: "One-time orders, daily, weekly or monthly meal plans in Kochi. Corporate solutions for 10–100+ people. No hidden fees.",
};

export default function PlansPricingPage() {

  return (
    <>
      {/* Hero */}
      <Section variant="teal" className="pt-32 pb-24 text-center">
        <Container>
          <div className="max-w-4xl mx-auto space-y-6">
            <h1 className="text-5xl md:text-7xl font-black text-white tracking-tighter leading-tight">
              Flexible Plans for <br /> Individuals & Teams
            </h1>
            <p className="text-xl text-white/80 leading-relaxed max-w-2xl mx-auto">
              From personal meals to feeding entire teams — Zipplit offers preservative-free food solutions tailored to your needs. No hidden fees. No lock-ins.
            </p>
          </div>
        </Container>
      </Section>

      {/* Individual Plans */}
      <Section>
        <Container>
          <SectionHeader 
            eyebrow="B2C Solutions"
            title="Individual Plans"
            description="Designed for individuals and families who want healthy, preservative-free meals without the hassle of cooking."
            centered
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* One-Time Order */}
            <PlanCard 
              title="One-Time Order"
              tagline="Perfect for right now."
              description="No commitment. Order exactly what you want, when you want it — single meals, snacks, or frozen packs."
              features={[
                "Fresh ingredients, prepared on order",
                "Any item from full menu",
                "WhatsApp ordering in <60s",
                "Eco-friendly packaging"
              ]}
              price="From ₹X per meal"
              buttonText="Order Now"
              whatsappMessage={siteConfig.whatsappMessages.default}
            />

            {/* Daily Plan */}
            <PlanCard 
              title="Daily Plan"
              tagline="No more decision fatigue."
              description="Subscribe to daily delivery. Fresh food arrives at your door every day, Monday to Sunday."
              features={[
                "Fresh meal every day",
                "Curated daily rotations",
                "Choose your time slot",
                "Pause/skip with 24h notice"
              ]}
              price="From ₹X/day"
              buttonText="Start Daily Plan"
              whatsappMessage={siteConfig.whatsappMessages.plan("daily")}
            />

            {/* Weekly Plan */}
            <PlanCard 
              title="Weekly Plan"
              tagline="Stress-free week."
              description="Plan your week's meals in one message. Better value than individual daily orders."
              features={[
                "7-day meal schedule",
                "Mix of fresh & frozen",
                "Better value pricing",
                "Weekend delivery available"
              ]}
              price="Save X% vs. daily"
              buttonText="Start Weekly Plan"
              whatsappMessage={siteConfig.whatsappMessages.plan("weekly")}
            />

            {/* Monthly Plan */}
            <PlanCard 
              title="Monthly Plan"
              tagline="Maximum savings."
              description="Our best-value option. Full month of home-style meals, delivered consistently."
              features={[
                "30-day subscription",
                "Deepest discounts",
                "Customisable preferences",
                "Priority WhatsApp support"
              ]}
              price="Most Popular"
              highlighted
              buttonText="Start Monthly"
              whatsappMessage={siteConfig.whatsappMessages.plan("monthly")}
            />
          </div>
        </Container>
      </Section>

      {/* Corporate Table / Banner */}
      <Section variant="light">
        <Container>
          <div className="bg-deep-teal rounded-[3rem] p-12 md:p-20 text-white relative overflow-hidden">
            <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <Badge variant="secondary">For Businesses</Badge>
                <h2 className="text-4xl md:text-5xl font-black leading-tight">Corporate Meal Solutions</h2>
                <p className="text-lg text-white/70">
                  Ideal for groups that need consistent, high-quality meals in bulk (10–100+ people). Volume-based pricing and standardized menus.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 pt-4">
                  <Button variant="whatsapp" size="lg" className="h-16 px-10 text-lg shadow-xl" asChild>
                    <a href="/for-businesses">Learn More</a>
                  </Button>
                  <Button variant="outline" size="lg" className="h-16 px-10 text-lg border-white text-white hover:bg-white hover:text-deep-teal">
                    Get a Custom Quote
                  </Button>
                </div>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <Card className="bg-white/5 border-white/10 text-white hover:bg-white/10" hoverable={false}>
                  <h4 className="font-black mb-2 uppercase tracking-widest text-xs opacity-50">Small Teams</h4>
                  <p className="text-2xl font-black">10–25 People</p>
                </Card>
                <Card className="bg-white/5 border-white/10 text-white hover:bg-white/10" hoverable={false}>
                  <h4 className="font-black mb-2 uppercase tracking-widest text-xs opacity-50">Mid-Size</h4>
                  <p className="text-2xl font-black">25–100 People</p>
                </Card>
                <Card className="bg-white/5 border-white/10 text-white hover:bg-white/10" hoverable={false}>
                  <h4 className="font-black mb-2 uppercase tracking-widest text-xs opacity-50">Large Orgs</h4>
                  <p className="text-2xl font-black">100+ People</p>
                </Card>
                <Card className="bg-white/5 border-white/10 text-white hover:bg-white/10" hoverable={false}>
                  <h4 className="font-black mb-2 uppercase tracking-widest text-xs opacity-50">Custom</h4>
                  <p className="text-2xl font-black">Events & More</p>
                </Card>
              </div>
            </div>
            <div className="absolute top-0 right-0 w-64 h-64 bg-fresh-lime/10 blur-3xl -mr-32 -mt-32" />
          </div>
        </Container>
      </Section>

      <Section>
        <Container>
          <div className="max-w-3xl mx-auto p-12 rounded-3xl bg-stone-gray/5 border border-dashed border-stone-gray/20 text-center space-y-6">
            <h3 className="text-2xl font-black text-bold-black">Ready to Start?</h3>
            <p className="text-stone-gray">All plans are fulfilled by Zipplit's centralised kitchen in Kochi. Prices confirmed on WhatsApp inquiry based on your specific requirements.</p>
            <Button 
               variant="whatsapp" 
               size="lg" 
               href={buildWhatsAppURL(siteConfig.whatsappMessages.default)}
             >
               Order on WhatsApp Now
             </Button>

          </div>
        </Container>
      </Section>
    </>
  );
}

function PlanCard({ 
  title, 
  tagline, 
  description, 
  features, 
  price, 
  highlighted = false, 
  buttonText,
  whatsappMessage 
}: { 
  title: string; 
  tagline: string; 
  description: string; 
  features: string[]; 
  price: string;
  highlighted?: boolean;
  buttonText: string;
  whatsappMessage: string;
}) {
  return (
    <Card 
      className={cn(
        "flex flex-col h-full relative",
        highlighted ? "border-2 border-fresh-lime ring-4 ring-fresh-lime/5 scale-105 z-10" : "border-2 border-transparent"
      )}
    >
      {highlighted && (
        <Badge variant="secondary" className="absolute -top-3 left-1/2 -translate-x-1/2 shadow-sm font-black whitespace-nowrap">
          Most Popular
        </Badge>
      )}
      <div className="mb-6">
        <h3 className="text-2xl font-black text-bold-black leading-tight mb-2">{title}</h3>
        <p className="text-xs font-black text-deep-teal uppercase tracking-widest mb-4">{tagline}</p>
        <p className="text-sm text-stone-gray leading-relaxed">{description}</p>
      </div>

      <div className="flex-grow space-y-4 mb-8">
        {features.map((feature) => (
          <div key={feature} className="flex gap-3 text-sm">
            <div className="h-5 w-5 rounded-full bg-fresh-lime/10 flex items-center justify-center shrink-0">
              <Check className="h-3 w-3 text-deep-teal" />
            </div>
            <span className="text-stone-gray font-semibold">{feature}</span>
          </div>
        ))}
      </div>

      <div className="pt-6 border-t border-stone-gray/5">
        <p className="text-lg font-black text-bold-black mb-4">{price}</p>
        <Button 
          variant={highlighted ? "whatsapp" : "outline"} 
          size="md" 
          className="w-full"
          href={buildWhatsAppURL(whatsappMessage)}
        >
          {buttonText}
        </Button>

      </div>
    </Card>
  );
}
