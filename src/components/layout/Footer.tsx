import Image from "next/image";
import Link from "next/link";
import { siteConfig } from "@/config/site";
import { Container } from "@/components/ui/Container";
import { MessageCircle, Mail, MapPin } from "lucide-react";

// Custom SVG Social Icons to ensure compatibility
const Instagram = (props: any) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
);

const Facebook = (props: any) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
);

const Linkedin = (props: any) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>
);


export function Footer() {
  return (
    <footer className="bg-white border-t py-16">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand Col */}
          <div className="space-y-6">
            <Link href="/" className="inline-block">
              <Image 
                src="/assets/Transparent%20File-01.png" 
                alt="Zipplit Logo" 
                width={160} 
                height={45} 
                className="h-12 w-auto object-contain"
              />
            </Link>
            <p className="text-stone-gray leading-relaxed text-sm">
              Delivering freshly cooked, preservative-free home-style meals across Kochi. Quality you can trust, taste you'll love.
            </p>
            <div className="flex items-center gap-3">
              <Link href={siteConfig.links.instagram} className="h-10 w-10 rounded-full bg-stone-gray/5 flex items-center justify-center text-deep-teal hover:bg-fresh-lime transition-all duration-300">
                <Instagram size={18} />
              </Link>
              <Link href={siteConfig.links.facebook} className="h-10 w-10 rounded-full bg-stone-gray/5 flex items-center justify-center text-deep-teal hover:bg-fresh-lime transition-all duration-300">
                <Facebook size={18} />
              </Link>
              <Link href={siteConfig.links.linkedin} className="h-10 w-10 rounded-full bg-stone-gray/5 flex items-center justify-center text-deep-teal hover:bg-fresh-lime transition-all duration-300">
                <Linkedin size={18} />
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
