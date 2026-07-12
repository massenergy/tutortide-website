// Company-level site data. Product marketing content lives in the content
// collection (Phase 5); this is just what the nav/footer need.

export const site = {
  name: "Tutortide",
  domain: "https://tutortide.online",
  email: "massenergy2050@gmail.com",
  tagline: "Secure technology & social innovation",
};

export type ProductLink = {
  name: string;
  slug: string;         // marketing path, e.g. /jinjing
  blurb: string;        // short nav/card description
};

export const products: ProductLink[] = [
  { name: "Jinjing", slug: "/jinjing", blurb: "AI student companion" },
  { name: "Nyokavi", slug: "/nyokavi", blurb: "Business clarity from M-Pesa" },
  { name: "Waterpro", slug: "/waterpro", blurb: "Billing for water projects" },
  { name: "Tundamoto", slug: "/tundamoto", blurb: "A five-sided cash-crop platform" },
];

export const companyNav = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Products", href: "/products" },
  { name: "Contact", href: "/contact" },
];
