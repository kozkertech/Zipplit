"use client";

import { MessageCircle } from "lucide-react";
import { siteConfig } from "@/config/site";
import { buildWhatsAppURL } from "@/lib/whatsapp";
import { Button } from "@/components/ui/Button";

export function MobileWhatsAppCTA() {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 p-4 lg:hidden pointer-events-none">
      <div className="pointer-events-auto max-w-md mx-auto">
        <Button
          variant="whatsapp"
          size="lg"
          className="w-full shadow-2xl h-14 text-lg border-2 border-white/20"
          onClick={() => window.open(buildWhatsAppURL(siteConfig.whatsappMessages.default), "_blank")}
        >
          <MessageCircle className="mr-2 h-6 w-6" />
          Order on WhatsApp
        </Button>
      </div>
    </div>
  );
}
