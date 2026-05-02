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
      <section className="relative min-h-[600px] lg:min-h-[80vh] flex items-start overflow-hidden bg-white pt-24">
        {/* Background Layer */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/hero-background.png"
            alt="Zipplit Hero Background"
            fill
            className="object-cover object-[right_85%] brightness-[1.05] contrast-[1.03] saturate-[1.05] sharpen-sm"
            quality={100}
            priority
          />
          {/* Reduced Fade to let the image quality shine through */}
          <div className="absolute inset-0 bg-gradient-to-r from-white/80 via-white/30 to-transparent lg:from-white/95 lg:via-white/40 lg:to-transparent z-10" />
        </div>

        <Container className="relative z-20 h-full pt-4 pb-12 lg:py-20">
          <div className="grid grid-cols-1 lg:grid-cols-12 h-full items-start gap-12">
            {/* LEFT CONTENT → Text content */}
            <div className="lg:col-span-6 space-y-10 pt-4 pb-20 lg:py-0 animate-in fade-in slide-in-from-left duration-1000">
              {/* Top Tagline Pill */}
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-fresh-lime/10 backdrop-blur-sm border border-fresh-lime/20 text-deep-teal text-[11px] font-black uppercase tracking-[0.25em]">
                <Zap size={14} className="text-fresh-lime fill-fresh-lime" />
                Hyperlocal • Fresh • Kochi
              </div>
              
              {/* Main Heading */}
              <div className="space-y-0">
                <h1 className="text-6xl md:text-8xl font-black text-bold-black tracking-tighter leading-[0.95]">
                  Fresh Meals.
                </h1>
                <h1 className="text-6xl md:text-8xl font-black text-deep-teal tracking-tighter leading-[0.95]">
                  No Preservatives.
                </h1>
              </div>

              {/* Description Paragraph */}
              <p className="text-lg md:text-xl text-bold-black/70 md:text-stone-gray max-w-[540px] leading-relaxed font-semibold">
                From ready-to-eat Kerala favourites to frozen meal preps — Zipplit brings preservative-free, home-style food to working professionals and families across Kochi.
              </p>

              {/* CTA BUTTONS (Horizontal) */}
              <div className="flex flex-col sm:flex-row gap-5 pt-4">
                <Button 
                  variant="whatsapp" 
                  size="lg" 
                  className="h-16 px-12 rounded-full text-lg font-bold shadow-xl hover:scale-105 transition-transform"
                  href={buildWhatsAppURL(siteConfig.whatsappMessages.default)}
                >
                  Order on WhatsApp
                </Button>
                <Button 
                  variant="outline" 
                  size="lg" 
                  className="h-16 px-12 rounded-full text-lg font-bold border-deep-teal text-deep-teal hover:bg-deep-teal hover:text-white hover:scale-105 transition-transform bg-transparent"
                  href="/products"
                >
                  Browse Our Menu
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </div>
            </div>

            {/* RIGHT CONTENT → Badge overlapping food image area */}
            <div className="hidden lg:block lg:col-span-6 relative h-[500px]">
              {/* Floating Info Card (Bottom-Left of the food image area) */}
              <div className="absolute top-[62%] left-[5%] z-30 bg-white p-7 rounded-[1.5rem] shadow-premium border border-stone-gray/5 max-w-[280px] animate-in zoom-in duration-1000 delay-500">
                <div className="flex items-center gap-4 mb-3">
                  <div className="h-10 w-10 rounded-full bg-fresh-lime/20 flex items-center justify-center border border-fresh-lime/30 shrink-0">
                    <ShieldCheck size={22} className="text-deep-teal" />
                  </div>
                  <span className="text-[13px] font-black text-bold-black uppercase tracking-tight">100% Honest</span>
                </div>
                <p className="text-[13px] text-stone-gray leading-relaxed font-semibold">
                  No artificial additives. Just real ingredients, cooked fresh daily in our Kochi kitchen.
                </p>
              </div>
            </div>
          </div>
        </Container>
        
        {/* Subtle Edge Decoration (Star Icon) */}
        <div className="absolute bottom-10 right-10 z-20 opacity-30">
           <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="text-bold-black">
              <path d="M12 0L14.5 9.5L24 12L14.5 14.5L12 24L9.5 14.5L0 12L9.5 9.5L12 0Z" fill="currentColor"/>
           </svg>
        </div>
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
                  <Image src="/assets/Home/Why_zipplit.png" alt="Local Sourcing" fill className="object-cover" />
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
                  <Image src="/assets/Home/why_zipplit_02.png" alt="Fresh Cooking" fill className="object-cover" />
                </div>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* Iconic Product Showcase */}
      <Section className="overflow-hidden">
        <Container>
          <div className="relative rounded-[3rem] bg-deep-teal overflow-hidden p-8 md:p-16 lg:p-20">
            {/* Decorative background elements */}
            <div className="absolute top-0 right-0 w-1/2 h-full bg-fresh-lime/5 skew-x-12 translate-x-20 pointer-events-none" />
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">
              <div className="space-y-8">
                <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-fresh-lime text-deep-teal text-[11px] font-black uppercase tracking-widest">
                  Our Iconic Bestseller
                </div>
                <h2 className="text-4xl md:text-6xl font-black text-white leading-[1.1] tracking-tighter">
                  The King of Meals. <br /> 
                  <span className="text-fresh-lime">Traditional Fish Fry.</span>
                </h2>
                <h2 className="hidden text-4xl md:text-6xl font-black text-white leading-[1.1] tracking-tighter">
                  The King of Meals. <br /> 
                  <span className="text-fresh-lime">Traditional Fish Fry.</span>
                </h2>
                <p className="text-white/70 text-lg leading-relaxed max-w-lg font-medium">
                  Experience the authentic taste of coastal Kochi. Our iconic Fish Fry Meal features fresh-catch fish, marinated in our secret 12-spice home-style masala and fried to golden perfection. No preservatives, just pure tradition.
                </p>
                
                <div className="grid grid-cols-2 gap-8 pt-4">
                  <div className="space-y-2">
                    <div className="h-1 w-12 bg-fresh-lime rounded-full" />
                    <h4 className="text-white font-black text-lg">Fresh Catch</h4>
                    <p className="text-white/50 text-xs leading-relaxed">Sourced daily from Kochi's local harbours.</p>
                  </div>
                  <div className="space-y-2">
                    <div className="h-1 w-12 bg-fresh-lime rounded-full" />
                    <h4 className="text-white font-black text-lg">Secret Masala</h4>
                    <p className="text-white/50 text-xs leading-relaxed">Hand-ground spices, zero artificial additives.</p>
                  </div>
                </div>

                <div className="pt-8">
                  <Button 
                    variant="whatsapp" 
                    size="lg" 
                    className="h-16 px-10 rounded-full text-lg font-bold shadow-2xl hover:scale-105 transition-transform"
                    href={buildWhatsAppURL("I'd like to order the Iconic Fish Fry Meal!")}
                  >
                    Order This Meal Now
                  </Button>
                </div>
              </div>

              <div className="relative group lg:ml-12">
                {/* Main Image Container */}
                <div className="relative aspect-square rounded-[3rem] overflow-hidden shadow-2xl border-8 border-white/5 transform group-hover:scale-[1.02] transition-all duration-700">
                  <Image 
                    src="/assets/Home/iconic_food.png" 
                    alt="Zipplit Iconic Fish Fry Meal" 
                    fill 
                    className="object-cover"
                  />
                </div>

                {/* Floating Badges */}
                <div className="absolute -top-6 -right-6 bg-white p-5 rounded-2xl shadow-2xl z-20 hidden md:block">
                  <div className="flex flex-col items-center">
                    <span className="text-[10px] font-black text-stone-gray uppercase tracking-tighter">Today's</span>
                    <span className="text-3xl font-black text-deep-teal tracking-tighter">FRESH</span>
                  </div>
                </div>

                <div className="absolute -bottom-10 -left-6 bg-fresh-lime p-6 rounded-2xl shadow-2xl z-20 max-w-[220px] hidden md:block">
                   <p className="text-deep-teal font-black text-sm leading-tight italic">
                     "The best fish fry I've had in Kochi, bar none."
                   </p>
                   <span className="text-[10px] font-bold text-deep-teal/60 mt-3 block uppercase tracking-widest">— Rahul, Verified Customer</span>
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
                <h2 className="text-4xl md:text-5xl font-black leading-tight text-white">Be the First to Know.</h2>
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
