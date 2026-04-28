import { siteConfig } from "@/config/site";

/**
 * Builds a WhatsApp URL with a pre-filled message.
 * @param message The message to pre-fill.
 * @returns A formatted WhatsApp URL.
 */
export function buildWhatsAppURL(message: string): string {
  const phoneNumber = siteConfig.contact.whatsapp.replace(/\+/g, "").replace(/\s/g, "");
  const encodedMessage = encodeURIComponent(message);
  return `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
}
