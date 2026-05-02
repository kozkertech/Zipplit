import { Metadata } from "next";
import Image from "next/image";
import {
  History,
  Target,
  Eye,
  Award,
  Users2,
  PackageCheck,
  Globe,
  Leaf,
  CheckCircle2
} from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";

export const metadata: Metadata = {
  title: "About Zipplit — Our Mission & Quality Promise",
  description: "Learn about the mission, vision and history of Zipplit. Redefining food delivery in Kochi with preservative-free, honest ingredients.",
};

export default function AboutPage() {

  return (
    <>
      {/* Hero */}
      <Section variant="teal" className="pt-32 pb-24 relative overflow-hidden">
        <Container className="relative z-10">
          <div className="max-w-3xl space-y-6">
            <Badge className="bg-fresh-lime text-deep-teal px-4 py-1.5 text-sm font-black border-none shadow-sm">Our Journey</Badge>
            <h1 className="text-5xl md:text-7xl font-black text-white tracking-tighter leading-tight">
              Built for Convenience. <br />
              <span className="text-fresh-lime">Driven by Quality.</span>
            </h1>
            <p className="text-xl text-white/80 leading-relaxed max-w-2xl">
              We're redefining what food delivery can be — combining the speed of modern delivery with the care and integrity of home-cooked food.
            </p>
          </div>
        </Container>
        {/* Dynamic Background Elements */}
        <div className="absolute bottom-0 right-0 w-1/2 h-full opacity-10 pointer-events-none">
          <svg viewBox="0 0 400 400" className="w-full h-full">
            <circle cx="400" cy="400" r="400" fill="white" />
          </svg>
        </div>
      </Section>

      {/* Our Story */}
      <Section>
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div className="relative">
              <div className="aspect-[4/5] rounded-[3rem] overflow-hidden shadow-2xl relative z-10">
                <Image src="/assets/about/About_01.png" alt="Zipplit Kitchen" fill className="object-cover opacity-90" />
              </div>
              <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-fresh-lime rounded-[3rem] -z-10 hidden md:block" />
            </div>
            <div className="space-y-8">
              <SectionHeader title="Our Story" />
              <div className="space-y-6 text-lg text-stone-gray leading-relaxed font-semibold">
                <p>
                  Zipplit started with a simple, stubborn belief: people in Kochi deserve better food options. Not just faster delivery — better food. Preservative-free. Honestly made.
                </p>
                <p>
                  We saw that most delivery options fell into one of two categories: fast and unhealthy, or healthy but inconvenient. We decided to bridge that gap.
                </p>
                <p>
                  Today, Zipplit operates out of a centralised kitchen in Kochi, serving multiple neighbourhoods across Ernakulam. Our mission hasn't changed: source local, cook fresh, and deliver without delay.
                </p>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* Mission & Vision */}
      <Section variant="light">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="p-12 space-y-6 bg-white border-b-8 border-fresh-lime">
              <div className="h-16 w-16 rounded-full bg-fresh-lime/10 flex items-center justify-center text-deep-teal">
                <Target size={32} />
              </div>
              <h3 className="text-3xl font-black text-bold-black">Our Mission</h3>
              <p className="text-lg text-stone-gray leading-relaxed">
                To make preservative-free, home-style food accessible and affordable for every household and business in Kochi — delivered with honesty and care.
              </p>
            </Card>
            <Card className="p-12 space-y-6 bg-white border-b-8 border-deep-teal">
              <div className="h-16 w-16 rounded-full bg-deep-teal/10 flex items-center justify-center text-deep-teal">
                <Eye size={32} />
              </div>
              <h3 className="text-3xl font-black text-bold-black">Our Vision</h3>
              <p className="text-lg text-stone-gray leading-relaxed">
                To become Kerala's most trusted hyperlocal food brand — known for the integrity of every ingredient, every preparation, and every delivery.
              </p>
            </Card>
          </div>
        </Container>
      </Section>

      {/* What We Do */}
      <Section>
        <Container>
          <SectionHeader title="How We Work" centered />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mt-16">
            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <div className="h-10 w-10 rounded-xl bg-deep-teal text-fresh-lime flex items-center justify-center font-black">1</div>
                <h4 className="text-xl font-black">Sourcing</h4>
              </div>
              <p className="text-stone-gray text-sm leading-relaxed">
                We partner with trusted local farmers across Kerala. We visit our suppliers and know where your food comes from. Every ingredient verified for freshness.
              </p>
            </div>
            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <div className="h-10 w-10 rounded-xl bg-deep-teal text-fresh-lime flex items-center justify-center font-black">2</div>
                <h4 className="text-xl font-black">Preparation</h4>
              </div>
              <p className="text-stone-gray text-sm leading-relaxed">
                Our culinary team prepares meals fresh daily in our centralised Kochi kitchen. No artificial preservatives. No flavour enhancers. Just real food.
              </p>
            </div>
            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <div className="h-10 w-10 rounded-xl bg-deep-teal text-fresh-lime flex items-center justify-center font-black">3</div>
                <h4 className="text-xl font-black">Logistics</h4>
              </div>
              <p className="text-stone-gray text-sm leading-relaxed">
                Hot meals in insulated packaging. Frozen items in cold-chain. Every order tracked until it reaches your door across our neighbourhoods.
              </p>
            </div>
          </div>
        </Container>
      </Section>

      {/* Our Promise */}
      <Section variant="light">
        <Container>
          <SectionHeader title="Our Promise to You" centered />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            <div className="bg-white p-8 rounded-3xl space-y-4 shadow-premium">
              <div className="flex items-center gap-3 text-deep-teal">
                <CheckCircle2 size={24} className="text-fresh-lime" />
                <h4 className="font-black text-lg">Transparency</h4>
              </div>
              <p className="text-sm text-stone-gray leading-relaxed">
                You always know what's in your food. We publish sourcing standards and ingredient policies openly. No hidden ingredients.
              </p>
            </div>
            <div className="bg-white p-8 rounded-3xl space-y-4 shadow-premium">
              <div className="flex items-center gap-3 text-deep-teal">
                <Leaf size={24} className="text-fresh-lime" />
                <h4 className="font-black text-lg">Sustainability</h4>
              </div>
              <p className="text-sm text-stone-gray leading-relaxed">
                Reducing food miles by sourcing local. Using 100% plastic-free, biodegradable packaging wherever possible.
              </p>
            </div>
            <div className="bg-white p-8 rounded-3xl space-y-4 shadow-premium">
              <div className="flex items-center gap-3 text-deep-teal">
                <Globe size={24} className="text-fresh-lime" />
                <h4 className="font-black text-lg">Inclusivity</h4>
              </div>
              <p className="text-sm text-stone-gray leading-relaxed">
                Options for all — vegetarian, vegan, gluten-aware — at prices that make healthy food accessible to everyone.
              </p>
            </div>
          </div>
        </Container>
      </Section>

      {/* Team / Founder */}
      <Section>
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
            <div className="lg:col-span-4 h-[400px] bg-stone-gray/10 rounded-[3rem] items-center justify-center flex text-stone-gray">
              <Users2 size={120} strokeWidth={0.5} opacity={0.2} />
            </div>
            <div className="lg:col-span-8 space-y-6">
              <SectionHeader title="The People Behind Zipplit" eyebrow="The Team" />
              <div className="space-y-4 text-stone-gray text-lg leading-relaxed italic">
                <p>"We're not just building a food brand; we're building a way for people to eat better without trying harder. Zipplit is our solution to the compromise we all used to make every single day."</p>
              </div>
              <div>
                <p className="font-black text-bold-black text-xl">Zipplit Founders</p>
                <p className="text-stone-gray font-bold">Kochi, Kerala</p>
              </div>
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
}
