import type { Metadata } from "next";
import { Nunito } from "next/font/google";
import "./globals.css";
import { siteConfig } from "@/config/site";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { MobileWhatsAppCTA } from "@/components/layout/MobileWhatsAppCTA";
import { generateStructuredData, generateOrganizationSchema } from "@/lib/seo";

const nunito = Nunito({
  variable: "--font-nunito",
  subsets: ["latin"],
  weight: ["400", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: {
    default: `${siteConfig.name} — ${siteConfig.description}`,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${nunito.variable} h-full antialiased scroll-smooth`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(generateOrganizationSchema()) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(generateStructuredData()) }}
        />
      </head>
      <body className="min-h-full flex flex-col font-sans bg-white text-charcoal-gray overflow-x-hidden">
        <Header />
        <main className="flex-grow">{children}</main>
        <Footer />
        <MobileWhatsAppCTA />
      </body>
    </html>
  );
}



