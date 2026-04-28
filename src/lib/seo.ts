import { siteConfig } from "@/config/site";

export function generateStructuredData() {
  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": siteConfig.name,
    "image": siteConfig.ogImage,
    "@id": siteConfig.url,
    "url": siteConfig.url,
    "telephone": siteConfig.contact.phone,
    "address": {
      "@type": "PostalAddress",
      "streetAddress": siteConfig.contact.address,
      "addressLocality": "Kochi",
      "addressRegion": "Kerala",
      "addressCountry": "IN"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 9.9312, // Kochi approximate
      "longitude": 76.2673
    },
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday"
      ],
      "opens": "08:00",
      "closes": "22:00"
    }
  };
}

export function generateOrganizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": siteConfig.name,
    "url": siteConfig.url,
    "logo": "https://zipplit.com/logo.png",
    "sameAs": [
      siteConfig.links.instagram,
      siteConfig.links.facebook
    ]
  };
}
