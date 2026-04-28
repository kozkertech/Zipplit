import Link from "next/link";
import { siteConfig } from "@/config/site";
import { Container } from "@/components/ui/Container";
import { MessageCircle, Globe, Share2, Mail, MapPin } from "lucide-react";


export function Footer() {
  return (
    <footer className="bg-white border-t py-16">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand Col */}
          <div className="space-y-6">
            <Link href="/" className="text-2xl font-black tracking-tighter text-deep-teal">
              ZIPPLIT<span className="text-fresh-lime">.</span>
            </Link>
            <p className="text-stone-gray leading-relaxed text-sm">
              Delivering freshly cooked, preservative-free home-style meals across Kochi. Quality you can trust, taste you'll love.
            </p>
            <div className="flex items-center gap-4">
              <Link href={siteConfig.links.instagram} className="text-stone-gray hover:text-fresh-lime transition-colors">
                <Globe size={20} />
              </Link>
              <Link href={siteConfig.links.facebook} className="text-stone-gray hover:text-fresh-lime transition-colors">
                <Share2 size={20} />
              </Link>
            </div>

          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-black text-bold-black uppercase tracking-widest text-xs mb-6">Company</h4>
            <ul className="space-y-4">
              {siteConfig.nav.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="text-sm text-stone-gray hover:text-deep-teal transition-colors font-semibold">
                    {item.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-black text-bold-black uppercase tracking-widest text-xs mb-6">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-fresh-lime shrink-0" />
                <span className="text-sm text-stone-gray">{siteConfig.contact.address}</span>
              </li>
              <li className="flex items-start gap-3">
                <MessageCircle className="h-5 w-5 text-fresh-lime shrink-0" />
                <span className="text-sm text-stone-gray">{siteConfig.contact.whatsapp}</span>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="h-5 w-5 text-fresh-lime shrink-0" />
                <span className="text-sm text-stone-gray">{siteConfig.contact.email}</span>
              </li>
            </ul>
          </div>

          {/* Service Area / Legal */}
          <div>
            <h4 className="font-black text-bold-black uppercase tracking-widest text-xs mb-6">Legal</h4>
            <ul className="space-y-4">
              <li>
                <Link href="#" className="text-sm text-stone-gray hover:text-deep-teal transition-colors font-semibold">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="#" className="text-sm text-stone-gray hover:text-deep-teal transition-colors font-semibold">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-sm text-stone-gray hover:text-deep-teal transition-colors font-semibold">
                  Work with Us
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t">
          <p className="text-xs text-stone-gray/60 leading-relaxed max-w-4xl italic">
            <strong>Food Disclaimer:</strong> All meals are prepared in a kitchen that handles nuts, dairy, and gluten. Please inform us of specific allergies or dietary requirements before ordering. 
            Nutritional information is indicative and may vary. Zipplit is not responsible for individual dietary outcomes. [FSSAI Licence No. PLACEHOLDER]
          </p>
          <p className="mt-8 text-xs text-stone-gray font-bold">
            &copy; {new Date().getFullYear()} Zipplit India. All rights reserved. Built for quality.
          </p>
        </div>
      </Container>
    </footer>
  );
}
