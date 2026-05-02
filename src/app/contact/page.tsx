import { Metadata } from "next";
import { 
  MessageCircle, 
  Mail, 
  MapPin, 
  Clock, 
  ArrowRight,
  ShieldCheck,
  Zap
} from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { ContactForm } from "@/features/forms/ContactForm";
import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { siteConfig } from "@/config/site";
import { buildWhatsAppURL } from "@/lib/whatsapp";
import { Button } from "@/components/ui/Button";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Contact Zipplit — Order Support & Business Inquiries",
  description: "Get in touch with Zipplit Kochi. WhatsApp support, email inquiries, and service area information. We're here to help with your food needs.",
};

export default function ContactPage() {

  return (
    <>
      {/* Header */}
      <Section variant="light" className="pt-32 pb-16">
        <Container>
          <div className="max-w-3xl">
            <Badge variant="primary" className="mb-4">Get in Touch</Badge>
            <h1 className="text-5xl md:text-7xl font-black text-bold-black tracking-tighter leading-tight mb-6">
               Questions? <br /> <span className="text-deep-teal">Let's Talk Food.</span>
            </h1>
            <p className="text-xl text-stone-gray leading-relaxed">
              Want to place an order, enquire about business sourcing, or just know today's menu? We respond fastest on WhatsApp.
            </p>
          </div>
        </Container>
      </Section>

      {/* Contact Grid */}
      <Section className="py-12">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            {/* Info Cards */}
            <div className="lg:col-span-4 space-y-4">
              <ContactCard 
                icon={MessageCircle}
                title="WhatsApp Support"
                content={siteConfig.contact.whatsapp}
                subContent="Mon–Sun, 8AM–10PM"
                link={buildWhatsAppURL(siteConfig.whatsappMessages.contact)}
              />
              <ContactCard 
                icon={Mail}
                title="Email Us"
                content={siteConfig.contact.email}
                subContent="General Inquiries"
                link={`mailto:${siteConfig.contact.email}`}
              />
              <ContactCard 
                icon={MapPin}
                title="Our Kitchen"
                content="Kakkanad, Kochi"
                subContent="Visit for business discussions"
                link="https://maps.app.goo.gl/p1ovESZ83sp3wsbZ6?g_st=ac"
              />
            </div>

            {/* Form */}
            <div className="lg:col-span-8">
              <Card className="p-8 md:p-12">
                <SectionHeader 
                  title="Send a Message" 
                  description="Use the form below and we'll get back to you within 24 hours."
                  className="mb-8"
                />
                <ContactForm />
              </Card>
            </div>
          </div>
        </Container>
      </Section>

      {/* Service Areas */}
      <Section variant="white" className="border-t">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-6">
              <SectionHeader 
                title="Where We Deliver in Kochi" 
                description="We are expanding fast across Ernakulam. Check if we're currently serving your area."
              />
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {["Kakkanad", "Edapally", "Vytilla", "Panampilly Nagar", "Palarivattom", "Kadavanthra"].map((area) => (
                  <div key={area} className="flex items-center gap-2 font-bold text-sm text-stone-gray">
                    <Zap className="h-4 w-4 text-fresh-lime" />
                    {area}
                  </div>
                ))}
              </div>
              <div className="pt-6">
                 <Button variant="outline" size="md" href="/#waitlist">
                    Join the Area Waitlist
                    <ArrowRight className="ml-2 h-4 w-4" />
                 </Button>

              </div>
            </div>
            <div className="relative aspect-[16/9] rounded-[2rem] overflow-hidden bg-stone-gray/5 border border-stone-gray/10">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3929.117146522538!2d76.351052!3d10.007137!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b080d002a7b8e57%3A0x64719f96b6d8a39a!2sZipplit%20-%20Cloud%20Kitchen!5e0!3m2!1sen!2sin!4v1714545000000!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Zipplit Location"
              />
            </div>
          </div>
        </Container>
      </Section>

      {/* Trust Quote */}
      <Section variant="teal" className="text-center py-20">
        <Container>
           <div className="max-w-2xl mx-auto space-y-6">
              <ShieldCheck className="h-16 w-16 text-fresh-lime mx-auto opacity-50" />
              <h2 className="text-3xl font-black text-white">Always Available. <br /> Always Fresh.</h2>
              <p className="text-white/60">Quality control starts with communication. Whether you're a first-time customer or a business partner, we're here to help.</p>
           </div>
        </Container>
      </Section>
    </>
  );
}

function ContactCard({ icon: Icon, title, content, subContent, link }: { icon: any, title: string, content: string, subContent: string, link?: string }) {
  const Content = (
    <Card className="flex items-center gap-6 p-6 h-full border border-stone-gray/5 hover:border-fresh-lime/30 transition-colors">
      <div className="h-14 w-14 rounded-2xl bg-fresh-lime/10 text-deep-teal flex items-center justify-center shrink-0">
        <Icon size={24} />
      </div>
      <div>
        <h4 className="text-xs font-black text-stone-gray uppercase tracking-widest mb-1">{title}</h4>
        <p className="text-lg font-black text-bold-black leading-tight">{content}</p>
        <p className="text-xs text-stone-gray/60 font-semibold mt-1">{subContent}</p>
      </div>
    </Card>
  );

  if (link) {
    return (
      <a href={link} target="_blank" rel="noopener noreferrer" className="block">
        {Content}
      </a>
    );
  }

  return Content;
}
