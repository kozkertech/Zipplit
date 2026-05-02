"use client";

import * as React from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, MessageCircle } from "lucide-react";
import { siteConfig } from "@/config/site";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { buildWhatsAppURL } from "@/lib/whatsapp";

export function Header() {
  const [isOpen, setIsOpen] = React.useState(false);
  const pathname = usePathname();

  const toggleMenu = () => setIsOpen(!isOpen);

  // Close menu on navigation
  React.useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  // Lock scroll when menu is open
  React.useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  return (
    <>
      <header className="sticky top-0 z-50 w-full border-b bg-white/80 backdrop-blur-md">
        <Container>
          <div className="flex h-20 items-center justify-between">
            {/* Logo */}
            <Link href="/" className="flex items-center">
              <Image 
                src="/assets/Transparent%20File-01.png" 
                alt="Zipplit Logo" 
                width={140} 
                height={40} 
                className="h-10 w-auto object-contain"
                priority
              />
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden lg:flex items-center gap-8">
              {siteConfig.nav.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={cn(
                    "text-sm font-bold transition-colors hover:text-fresh-lime",
                    pathname === item.href ? "text-deep-teal" : "text-stone-gray"
                  )}
                >
                  {item.title}
                </Link>
              ))}
            </nav>

            {/* Nav CTA */}
            <div className="hidden lg:flex items-center gap-4">
              <Button
                variant="whatsapp"
                size="sm"
                onClick={() => window.open(buildWhatsAppURL(siteConfig.whatsappMessages.default), "_blank")}
              >
                <MessageCircle className="mr-2 h-4 w-4" />
                Order Now
              </Button>
            </div>

            {/* Mobile Menu Toggle */}
            <button
              className="flex h-10 w-10 items-center justify-center rounded-md border lg:hidden"
              onClick={toggleMenu}
              aria-label="Toggle Menu"
            >
              {isOpen ? <X /> : <Menu />}
            </button>
          </div>
        </Container>
      </header>

      {/* Mobile Nav - Glassmorphism effect */}
      <div
        className={cn(
          "fixed inset-x-0 bottom-0 top-20 z-[60] bg-white/60 backdrop-blur-xl transition-all duration-300 lg:hidden",
          isOpen ? "translate-x-0 opacity-100 visible" : "translate-x-full opacity-0 invisible"
        )}
      >
        <Container className="py-8 h-full overflow-y-auto">
          <nav className="flex flex-col gap-6">
            {siteConfig.nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "text-2xl font-black transition-colors",
                  pathname === item.href ? "text-deep-teal" : "text-stone-gray"
                )}
              >
                {item.title}
              </Link>
            ))}
            <hr className="my-4 border-stone-gray/10" />
            <Button
              variant="whatsapp"
              size="lg"
              className="w-full"
              onClick={() => window.open(buildWhatsAppURL(siteConfig.whatsappMessages.default), "_blank")}
            >
              <MessageCircle className="mr-2 h-5 w-5" />
              Order on WhatsApp
            </Button>
          </nav>
        </Container>
      </div>
    </>
  );
}
