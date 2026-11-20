// Company-level site data: what the nav, footer, About and Contact pages need.

export const site = {
  name: "Tutortide",
  legalName: "Tutortide Limited",
  registration: "PVT-LRUMRDVR",   // Certificate of Incorporation, Registrar of Companies, Kenya
  incorporated: "29 October 2024",
  domain: "https://tutortide.online",
  email: "info@tutortide.online",
  phone: "+254 751 935 486",
  location: "Merisho, Kenya",
  postal: "PO Box 237-00208, Ngong, Kenya",
  linkedin: "https://www.linkedin.com/company/tutortide-limited",
  tagline: "AI tutoring and marking for schools. Built in Kenya.",
};

// The flagship product. `app` is the live application.
export const flagship = {
  name: "Tutortide AI Student Companion",
  slug: "/jinjing",
  app: "https://aistudentcompanion.tutortide.online",
};

// Facts shown on the home, About and product pages. The product has not
// launched in schools yet: when it has, change `launch` wording in `line`.
export const traction = {
  schools: "2",
  pupils: "1,200",
  country: "Kenya",
  launch: "1 December 2026",
  line: "Launching in 2 schools with 1,200 pupils in Kenya on 1 December 2026.",
};

export type TeamMember = { name: string; role: string; bio: string; linkedin: string; photo: string };

export const team: TeamMember[] = [
  {
    name: "Mike Makwani",
    role: "Co-founder & CEO",
    bio: "Builds and runs the Tutortide AI Student Companion.",
    linkedin: "https://www.linkedin.com/in/mike-makwani/",
    photo: "/team/mike-makwani.jpg",
  },
  {
    name: "Job Makwani",
    role: "Co-founder & Director",
    bio: "Software engineer and founding director of Tutortide Limited.",
    linkedin: "https://www.linkedin.com/in/job-makwani/",
    photo: "/team/job-makwani.jpg",
  },
];

export type ProductLink = {
  name: string;
  slug: string;         // marketing path, e.g. /jinjing
  blurb: string;        // short nav/card description
};

export const products: ProductLink[] = [
  { name: "AI Student Companion", slug: flagship.slug, blurb: "Meet Jinjing, your AI tutor" },
  { name: "Nyokavi", slug: "/nyokavi", blurb: "Alternative credit intelligence" },
  { name: "Waterpro", slug: "/waterpro", blurb: "Billing for water projects" },
  { name: "Tundamoto", slug: "/tundamoto", blurb: "Farm-to-Europe traceability" },
];

export const companyNav = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Team", href: "/about#team" },
  { name: "Products", href: "/products" },
  { name: "Demo", href: "/demo" },
  { name: "Contact", href: "/contact" },
];
