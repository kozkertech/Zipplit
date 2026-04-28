import Image from "next/image";
import Link from "next/link";
import { 
  ArrowRight, 
  Leaf, 
  Clock, 
  ShieldCheck, 
  Smartphone, 
  Zap,
  Users,
  Dumbbell,
  Building2,
  GraduationCap
} from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { FeatureCard } from "@/components/shared/FeatureCard";
import { StepCard } from "@/components/shared/StepCard";
import { CTASection } from "@/components/shared/CTASection";

import { WaitlistForm } from "@/features/forms/WaitlistForm";
import { buildWhatsAppURL } from "@/lib/whatsapp";
import { siteConfig } from "@/config/site";

export default function HomePage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center pt-20 pb-12 overflow-hidden bg-white">
        <Container className="relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8 animate-in fade-in slide-in-from-left duration-1000">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-fresh-lime/10 text-deep-teal text-sm font-black uppercase tracking-widest">
                <Zap size={16} className="text-fresh-lime fill-fresh-lime" />
                Hyperlocal · Fresh · Kochi
              </div>
              <h1 className="text-5xl md:text-7xl font-black text-bold-black tracking-tighter leading-[0.9]">
                Fresh Meals. <br />
                <span className="text-deep-teal">No Preservatives.</span>
              </h1>
              <p className="text-xl text-stone-gray max-w-lg leading-relaxed">
                From ready-to-eat Kerala favourites to frozen meal preps — Zipplit brings preservative-free, home-style food to working professionals and families across Kochi.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Button 
                  variant="whatsapp" 
                  size="lg" 
                  className="h-16 px-10 text-lg shadow-xl"
                  href={buildWhatsAppURL(siteConfig.whatsappMessages.default)}
                >
                  Order on WhatsApp
                </Button>
                <Button 
                  variant="outline" 
                  size="lg" 
                  className="h-16 px-10 text-lg"
                  href="/products"
                >
                  Browse Our Menu
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>

              </div>
            </div>
            <div className="relative aspect-square lg:aspect-[4/5] rounded-[2rem] overflow-hidden shadow-2xl animate-in fade-in slide-in-from-right duration-1000 delay-200">
              <div className="absolute inset-0 bg-gradient-to-tr from-deep-teal/20 to-transparent z-10" />
              <Image
                src="/hero-food.jpg" // Placeholder path
                alt="Zipplit Fresh Meal"
                fill
                className="object-cover"
                priority
              />
              {/* Floating Badge */}
              <div className="absolute bottom-8 left-8 z-20 bg-white/90 backdrop-blur-md p-6 rounded-2xl shadow-premium border border-stone-gray/5 max-w-[240px]">
                <div className="flex items-center gap-3 mb-2">
                  <div className="h-10 w-10 rounded-full bg-fresh-lime flex items-center justify-center">
                    <ShieldCheck className="text-deep-teal" />
                  </div>
                  <span className="text-sm font-black text-bold-black uppercase tracking-tight">100% Honest</span>
                </div>
                <p className="text-xs text-stone-gray leading-tight">
                  No artificial additives. Just real ingredients, cooked fresh daily in our Kochi kitchen.
                </p>
              </div>
            </div>
          </div>
        </Container>
        {/* Background Elements */}
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-fresh-lime/5 rounded-full blur-3xl" />
        <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-deep-teal/5 rounded-full blur-3xl" />
      </section>

      {/* Why Zipplit - Philosophy */}
      <Section variant="light">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <SectionHeader 
                eyebrow="Why Zipplit Exists"
                title="We believe modern life shouldn't come at the cost of eating well."
                description="Zipplit was born in Kochi from a simple frustration: most delivery options were either unhealthy, loaded with preservatives, or nothing like home cooking."
              />
              <div className="space-y-8 mt-12">
                <div className="flex gap-6">
                  <div className="h-14 w-14 rounded-2xl bg-white shadow-sm flex items-center justify-center shrink-0 text-deep-teal font-black text-xl">01</div>
                  <div>
                    <h4 className="text-xl font-black text-bold-black mb-2">Our Quality Obsession</h4>
                    <p className="text-stone-gray text-sm leading-relaxed">
                      Every ingredient is sourced from trusted local suppliers. Disches are prepared fresh in our centralised kitchen, without artificial preservatives.
                    </p>
                  </div>
                </div>
                <div className="flex gap-6">
                  <div className="h-14 w-14 rounded-2xl bg-white shadow-sm flex items-center justify-center shrink-0 text-deep-teal font-black text-xl">02</div>
                  <div>
                    <h4 className="text-xl font-black text-bold-black mb-2">Seamless Convenience</h4>
                    <p className="text-stone-gray text-sm leading-relaxed">
                      From ordering on WhatsApp in seconds to doorstep delivery across Kochi — we've stripped away the friction.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4 pt-12">
                <div className="aspect-[3/4] bg-white rounded-3xl overflow-hidden shadow-premium relative">
                  <Image src="/philosophy-1.jpg" alt="Local Sourcing" fill className="object-cover opacity-80" />
                </div>
                <div className="aspect-square bg-fresh-lime rounded-3xl flex items-center justify-center p-8 text-deep-teal">
                  <Leaf size={64} strokeWidth={1} />
                </div>
              </div>
              <div className="space-y-4">
                <div className="aspect-square bg-deep-teal rounded-3xl flex items-center justify-center p-8 text-fresh-lime">
                  <ShieldCheck size={64} strokeWidth={1} />
                </div>
                <div className="aspect-[3/4] bg-white rounded-3xl overflow-hidden shadow-premium relative">
                  <Image src="/philosophy-2.jpg" alt="Fresh Cooking" fill className="object-cover opacity-80" />
                </div>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* Differentiators */}
      <Section>
        <Container>
          <SectionHeader 
            title="What Makes Us Different" 
            centered 
            className="max-w-3xl mx-auto"
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <FeatureCard 
              icon={Clock}
              title="Fresh & Frozen Options"
              description="Eat fresh today or stock your freezer for the week — we offer both freshly cooked and chef-prepared frozen options."
            />
            <FeatureCard 
              icon={ShieldCheck}
              title="Zero Preservatives. Always."
              description="No artificial additives. No compromise. Every Zipplit meal is preservative-free, made with real ingredients."
            />
            <FeatureCard 
              icon={Smartphone}
              title="Always Available"
              description="From morning breakfast boxes to late-night combos, we fit your schedule. Order any time on WhatsApp."
            />
          </div>
        </Container>
      </Section>

      {/* Use Cases */}
      <Section variant="light">
        <Container>
          <SectionHeader 
            title="Built for the Way Kochi Actually Lives" 
            centered 
            className="max-w-3xl mx-auto"
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="flex flex-col gap-4 text-center items-center py-10">
              <div className="h-16 w-16 rounded-full bg-stone-gray/5 flex items-center justify-center text-deep-teal">
                <Building2 size={32} strokeWidth={1.5} />
              </div>
              <h4 className="text-lg font-black">Busy Professionals</h4>
              <p className="text-sm text-stone-gray">Dinner sorted in minutes — no compromise on nutrition.</p>
            </Card>
            <Card className="flex flex-col gap-4 text-center items-center py-10">
              <div className="h-16 w-16 rounded-full bg-stone-gray/5 flex items-center justify-center text-deep-teal">
                <GraduationCap size={32} strokeWidth={1.5} />
              </div>
              <h4 className="text-lg font-black">Students</h4>
              <p className="text-sm text-stone-gray">Home-style food without the home. Fresh and filling.</p>
            </Card>
            <Card className="flex flex-col gap-4 text-center items-center py-10">
              <div className="h-16 w-16 rounded-full bg-stone-gray/5 flex items-center justify-center text-deep-teal">
                <Dumbbell size={32} strokeWidth={1.5} />
              </div>
              <h4 className="text-lg font-black">Fitness & Health</h4>
              <p className="text-sm text-stone-gray">Macros matter. Portion-controlled, clean meals.</p>
            </Card>
            <Card className="flex flex-col gap-4 text-center items-center py-10">
              <div className="h-16 w-16 rounded-full bg-stone-gray/5 flex items-center justify-center text-deep-teal">
                <Users size={32} strokeWidth={1.5} />
              </div>
              <h4 className="text-lg font-black">Corporate Teams</h4>
              <p className="text-sm text-stone-gray">Consistently feeding your workforce, affordably.</p>
            </Card>
          </div>
        </Container>
      </Section>

      {/* How it Works */}
      <Section>
        <Container>
          <SectionHeader 
            title="Ordering is as Easy as Texting a Friend" 
            centered 
            className="max-w-3xl mx-auto"
          />
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 relative">
            {/* Connecting lines for desktop */}
            <div className="hidden md:block absolute top-12 left-[15%] right-[15%] h-0.5 bg-stone-gray/10 -z-10" />
            
            <StepCard 
              step={1} 
              title="Explore" 
              description="Browse our menu of fresh meals, frozen options, and combo packs." 
            />
            <StepCard 
              step={2} 
              title="Customise" 
              description="Pick your meal, choose your plan, and tell us your delivery area." 
            />
            <StepCard 
              step={3} 
              title="Order" 
              description="Place your order directly on WhatsApp — no app needed." 
            />
            <StepCard 
              step={4} 
              title="Enjoy" 
              description="Your preservative-free meal arrives fresh at your doorstep." 
            />
          </div>
        </Container>
      </Section>

      {/* Main CTA */}
      <CTASection 
        title="Fresh Meals for Kochi. Delivered on Your Terms."
        description="Ready to taste the Zipplit difference? Join thousands of happy customers in Kochi who trust us for their daily meals."
      />

      {/* Waitlist Section */}
      <Section id="waitlist">
        <Container>
          <div className="max-w-5xl mx-auto rounded-[3rem] overflow-hidden bg-deep-teal flex flex-col lg:row items-stretch shadow-2xl">
            <div className="grid grid-cols-1 lg:grid-cols-2">
              <div className="p-12 md:p-16 text-white space-y-6">
                <h2 className="text-4xl md:text-5xl font-black leading-tight">Be the First to Know.</h2>
                <p className="text-white/70 text-lg">
                  Zipplit is growing fast across Kochi. Join our waitlist to get early access to new areas, exclusive launch offers, and updates.
                </p>
                <div className="pt-8 flex flex-col gap-4">
                  <div className="flex items-center gap-4">
                    <div className="h-10 w-10 rounded-full bg-fresh-lime/20 flex items-center justify-center text-fresh-lime">
                      <Zap size={20} />
                    </div>
                    <span className="font-bold">Priority Access to Kochi Districts</span>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="h-10 w-10 rounded-full bg-fresh-lime/20 flex items-center justify-center text-fresh-lime">
                      <Zap size={20} />
                    </div>
                    <span className="font-bold">Exclusive Launch Invitations</span>
                  </div>
                </div>
              </div>
              <div className="bg-white p-12 md:p-16 flex flex-col justify-center">
                <WaitlistForm />
              </div>
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
}
