"use client";

import * as React from "react";
import { MessageCircle } from "lucide-react";
import { siteConfig } from "@/config/site";
import { buildWhatsAppURL } from "@/lib/whatsapp";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";

export function MobileWhatsAppCTA() {
  const [isVisible, setIsVisible] = React.useState(false);

  React.useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  return (
    <div 
      className={cn(
        "fixed bottom-0 left-0 right-0 z-50 p-4 lg:hidden pointer-events-none transition-all duration-500 transform",
        isVisible ? "translate-y-0 opacity-100" : "translate-y-20 opacity-0"
      )}
    >
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
