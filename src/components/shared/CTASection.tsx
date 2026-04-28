"use client";

import { MessageCircle } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { buildWhatsAppURL } from "@/lib/whatsapp";
import { siteConfig } from "@/config/site";

interface CTASectionProps {
  title: string;
  description: string;
  buttonText?: string;
  whatsappMessage?: string;
}

export function CTASection({
  title,
  description,
  buttonText = "Order on WhatsApp Now",
  whatsappMessage = siteConfig.whatsappMessages.default,
}: CTASectionProps) {
  return (
    <Section variant="teal" className="text-center">
      <Container>
        <div className="max-w-3xl mx-auto space-y-8">
          <h2 className="text-3xl md:text-5xl font-black text-white leading-tight">
            {title}
          </h2>
          <p className="text-xl text-white/80">
            {description}
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <Button
              variant="whatsapp"
              size="lg"
              className="w-full sm:w-auto h-16 px-10 text-xl shadow-2xl"
              href={buildWhatsAppURL(whatsappMessage)}
            >
              <MessageCircle className="mr-3 h-6 w-6" />
              {buttonText}
            </Button>

          </div>
          <p className="text-sm text-white/40 uppercase tracking-[0.2em] font-bold">
            Preservative-free · Fresh ingredients · Delivered fast
          </p>
        </div>
      </Container>
    </Section>
  );
}
