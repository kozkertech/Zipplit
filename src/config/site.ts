export const siteConfig = {
  name: "Zipplit",
  description: "Preservative-Free Meals & Healthy Food Delivery in Kochi",
  url: "https://zipplit.com", // Placeholder
  ogImage: "https://zipplit.com/og.jpg",
  links: {
    instagram: "https://instagram.com/zipplit",
    facebook: "https://facebook.com/zipplit",
  },
  contact: {
    email: "hello@zipplit.com",
    businessEmail: "business@zipplit.com",
    phone: "+910000000000", // Placeholder
    whatsapp: "+910000000000", // Placeholder
    address: "Kochi, Kerala, India",
  },
  whatsappMessages: {
    default: "Hi Zipplit! I'd like to place an order. Can you help me?",
    menu: "Hi Zipplit! I'd like to place an order. Please send me today's menu.",
    product: (name: string) => `Hi Zipplit! I'd like to order ${name}. Can you confirm availability and pricing?`,
    plan: (type: string) => `Hi Zipplit! I'm interested in a ${type} meal plan. Can you tell me more?`,
    business: "Hi Zipplit! I'm interested in bulk sourcing / corporate meal solutions for my business. Can we discuss options?",
    contact: "Hi Zipplit! I have a question.",
  },
  nav: [
    { title: "Home", href: "/" },
    { title: "Products", href: "/products" },
    { title: "Plans & Pricing", href: "/plans-pricing" },
    { title: "For Businesses", href: "/for-businesses" },
    { title: "About Us", href: "/about" },
    { title: "Contact", href: "/contact" },
  ],
};

export type SiteConfig = typeof siteConfig;
