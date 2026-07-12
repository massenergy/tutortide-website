// Product marketing content. Sourced from the existing live sites
// (Jinjing, Nyokavi, Tundamoto) and the Waterpro PRD. Placeholder items are
// marked TODO — swap for real approved copy/media before publish.
//
// Launch targets: apps live on subdomains (set up separately in Cloudflare).
// Waterpro uses its two confirmed app URLs (MOWP Members + Admins).

export type LaunchCTA = { label: string; url: string; primary?: boolean };
export type Capability = { title: string; body: string };
export type CapabilityGroup = {
  eyebrow: string;
  title: string;
  support?: string;
  items: Capability[];
};
export type FeatureRow = { title: string; body: string };
export type Faq = { q: string; a: string };
export type Stat = { value: string; caption: string };
export type ReadoutLine = { label: string; meter: string };

export type ProductContent = {
  slug: string;
  name: string;
  seoTitle: string;
  seoDescription: string;
  eyebrow: string;
  heroTitle: string;
  heroSubhead: string;
  launch: LaunchCTA[];
  readoutLabel?: string;
  readout?: ReadoutLine[];
  stats?: Stat[];
  capabilityGroups: CapabilityGroup[];
  features?: FeatureRow[];
  faqs?: Faq[];
  pricingNote?: string;
  ctaTitle: string;
  ctaLabel?: string;
};

export const jinjing: ProductContent = {
  slug: "/jinjing",
  name: "Jinjing",
  seoTitle: "Jinjing — AI Student Companion",
  seoDescription:
    "Jinjing is the mastery engine for every student: personalized Socratic tutoring, teacher automation, and national analytics, grounded on Google Vertex AI.",
  eyebrow: "AI Student Companion",
  heroTitle: "The mastery engine for every student.",
  heroSubhead:
    "Personalized Socratic tutoring, teacher automation, and national analytics. Jinjing bridges the digital divide with hallucination-free AI grounded on Google Vertex AI.",
  launch: [
    { label: "Launch app", url: "https://jinjing.tutortide.online", primary: true },
    { label: "Watch demo", url: "https://jinjing.tutortide.online" }, // TODO: real demo video URL
  ],
  readoutLabel: "Session // mastery engine",
  readout: [
    { label: "Diagnose gaps", meter: "▓▓▓▓▓▓▓▓░" },
    { label: "Backtrack foundations", meter: "▓▓▓▓▓▓░░░" },
    { label: "Socratic tutoring", meter: "▓▓▓▓▓▓▓░░" },
    { label: "Fact grounding", meter: "▓▓▓▓▓▓▓▓▓" },
  ],
  stats: [
    { value: "99.9%", caption: "Fact grounding" },
    { value: "<1s", caption: "Tutoring latency" },
    { value: "2.5x", caption: "Mastery improvement" },
    { value: "1B+", caption: "Cognitive events" },
  ],
  capabilityGroups: [
    {
      eyebrow: "For students",
      title: "Mastery and engagement.",
      support:
        "Features designed to solve real pain points for students in the modern classroom.",
      items: [
        { title: "Mastery engine", body: "The AI diagnoses gaps and backtracks to fix foundational issues before advancing." },
        { title: "Engaging UX", body: "A gamified interface with streaks and rewards keeps learners hooked on progress." },
        { title: "24/7 Socratic tutor", body: "A judgment-free, private space to ask any question at any time of day." },
        { title: "Personalized plans", body: "Weekly schedules generated from performance data to reduce study anxiety." },
      ],
    },
    {
      eyebrow: "The engine room",
      title: "Enterprise-grade AI architecture.",
      support:
        "Not just a wrapper — Jinjing uses the full spectrum of Google's GenAI stack for a zero-hallucination experience.",
      items: [
        { title: "Vertex AI orchestrator", body: "The central brain routes between specialized agents for testing, discovery, and learning." },
        { title: "Grounding & search", body: "Models are connected to a private curriculum datastore so every response is syllabus-aligned." },
        { title: "Gemini Flash & Pro", body: "Flash gives instant tutoring fluidity; Pro delivers deep reasoning for teacher grading." },
        { title: "Document AI auto-grader", body: "Ingests handwritten exams and marks them against schemes with computer vision." },
      ],
    },
  ],
  faqs: [
    { q: "Is student data used to train public models?", a: "No. Student data is never used to train public models, adhering to strict FERPA/COPPA and GDPR-S guidelines." },
    { q: "Does it work on low bandwidth?", a: "Yes — Jinjing is optimized for low-bandwidth, offline-first use so students in underserved areas can learn." },
    { q: "Who is Jinjing for?", a: "Students, parents, teachers, schools, and governments — a full-spectrum solution across the education ecosystem." },
  ],
  pricingNote: "Free for students to get started. Institutional and government plans available — talk to us.", // TODO: confirm pricing
  ctaTitle: "Scale your impact. Secure the future.",
  ctaLabel: "Launch Jinjing",
};

export const nyokavi: ProductContent = {
  slug: "/nyokavi",
  name: "Nyokavi",
  seoTitle: "Nyokavi — Business clarity from your M-Pesa statement",
  seoDescription:
    "Nyokavi reads your M-Pesa statement and shows exactly where your money is leaking, then gives you the bankability report a bank needs to approve a loan.",
  eyebrow: "For Jua Kali & MSMEs",
  heroTitle: "Your business is not failing. It is leaking.",
  heroSubhead:
    "Nyokavi reads your M-Pesa statement and shows exactly where your money is going, then gives you the financial report a bank needs to give you a loan.",
  launch: [
    { label: "Get my free report", url: "https://nyokavi.tutortide.online", primary: true },
  ],
  readoutLabel: "Processing // M-Pesa statement",
  readout: [
    { label: "Revenue detected", meter: "▓▓▓▓▓▓▓▓▓" },
    { label: "Leaks identified", meter: "▓▓▓▓▓▓░░░" },
    { label: "Real profit margin", meter: "▓▓▓▓░░░░░" },
    { label: "Bankability score", meter: "▓▓▓▓▓▓▓░░" },
  ],
  stats: [
    { value: "KES 6.4K", caption: "Lost / month · kibanda" },
    { value: "KES 14.5K", caption: "Lost / month · grocer" },
    { value: "27.5%", caption: "Revenue on Fuliza" },
    { value: "24h", caption: "Free teaser report" },
  ],
  capabilityGroups: [
    {
      eyebrow: "The problem",
      title: "The invisible tax killing your business.",
      support:
        "Every month your business pays a tax you never agreed to — not to KRA, but to M-Pesa fees, untracked withdrawals, and customers paying on Fuliza.",
      items: [
        { title: "Hidden fees", body: "Transaction fees quietly compound across hundreds of payments every month." },
        { title: "Untracked withdrawals", body: "Cash pulled out without a record makes real profit impossible to see." },
        { title: "Fuliza exposure", body: "Revenue riding on Fuliza is at risk the moment limits change." },
        { title: "No margin visibility", body: "Most owners have no idea what their real profit margin actually is." },
      ],
    },
    {
      eyebrow: "How it works",
      title: "Three steps. No accountant needed.",
      items: [
        { title: "01 · Download your statement", body: "Open M-Pesa → Statements → last 6 months. It downloads as a password-protected PDF. Two minutes." },
        { title: "02 · Forward it on WhatsApp", body: "Tap the button, send the PDF, its password, and your business type. Two minutes." },
        { title: "03 · Get your report", body: "We return your revenue, real profit, where money is leaking, and the bankability score banks use for loans." },
      ],
    },
  ],
  faqs: [
    { q: "Is my data safe?", a: "100% confidential. Your PDF is deleted after processing." },
    { q: "What does it cost?", a: "A free teaser report in 24 hours. The full report is KES 200." }, // TODO: confirm pricing
    { q: "What do I need to send?", a: "Your M-Pesa statement PDF, its password, and your business type — e.g. grocer, kibanda, hardware, transport." },
  ],
  pricingNote: "Free teaser in 24 hours. Full report KES 200.", // TODO: confirm pricing
  ctaTitle: "Find out where your money is leaking.",
  ctaLabel: "Get my free report",
};

export const waterpro: ProductContent = {
  slug: "/waterpro",
  name: "Waterpro",
  seoTitle: "Waterpro — Billing, payments & governance for water projects",
  seoDescription:
    "Waterpro runs community water schemes like real utilities: automated metered billing, SMS bills, M-Pesa reconciliation, debt and disconnection control, and books members can trust.",
  eyebrow: "For community water projects",
  heroTitle: "Run your water project like a real utility.",
  heroSubhead:
    "Automated metered billing, SMS bills, M-Pesa and bank reconciliation, debt and disconnection control, project fundraising, and books your members can trust — one system instead of exercise books.",
  launch: [
    { label: "Member portal", url: "https://waterpro-39519.web.app/", primary: true },
    { label: "Admin login", url: "https://waterpro-39519-admin.web.app/login" },
  ],
  readoutLabel: "Processing // billing run",
  readout: [
    { label: "Read meters", meter: "▓▓▓▓▓▓▓▓▓" },
    { label: "Send SMS bills", meter: "▓▓▓▓▓▓▓░░" },
    { label: "Reconcile M-Pesa", meter: "▓▓▓▓▓▓▓▓░" },
    { label: "Report to committee", meter: "▓▓▓▓▓▓░░░" },
  ],
  stats: [
    { value: "1", caption: "Afternoon for a month's books" }, // TODO: real metric
    { value: "SMS", caption: "Every bill, every cycle" },
    { value: "M-Pesa", caption: "Auto-reconciled" },
    { value: "100%", caption: "On a tamper-evident ledger" },
  ],
  capabilityGroups: [
    {
      eyebrow: "Project benefits",
      title: "Run a sustainable, trusted scheme.",
      support: "For the committee and chairperson accountable at every AGM.",
      items: [
        { title: "Every shilling on a ledger", body: "A complete, tamper-evident record of charges, payments, and adjustments per member." },
        { title: "Higher collection rates", body: "Automated monthly SMS bills with a clear M-Pesa paybill mean members know what they owe." },
        { title: "Automatic reconciliation", body: "M-Pesa and CoopBank payments match to members automatically; unmatched payments are parked, not lost." },
        { title: "Debt under control", body: "See who owes what, set thresholds, and let the system flag and disconnect defaulters fairly." },
        { title: "Fund new infrastructure", body: "Raise money for a borehole or pump, then recover contributions automatically through water bills." },
        { title: "Board-ready reports", body: "P&L, consumption, billing statements, and outstanding balances — export to Excel, Word, or PDF." },
      ],
    },
    {
      eyebrow: "Admin benefits",
      title: "Do a month's books in an afternoon.",
      support: "For the treasurer, clerk, and meter reader doing the day-to-day work.",
      items: [
        { title: "Bill from readings in one flow", body: "Enter or upload readings, preview every bill, then send them all by SMS with one self-checking button." },
        { title: "No more manual matching", body: "Bank statements and M-Pesa reconcile themselves; a search tool finds any payment across years." },
        { title: "Meter reading on a phone", body: "Readers submit readings from a Telegram bot in the field — no paper sheets to re-key." },
        { title: "Fair, automatic tariffs", body: "Tiered pricing — a flat rate for the first units, then per-unit — applied consistently to everyone." },
        { title: "Disconnection, handled", body: "Automatic monthly runs and manual batches, with alert SMS and a plumber worklist." },
        { title: "One dashboard", body: "Members, cycles, payments, projects, personnel, tariffs, and areas all in one place." },
      ],
    },
    {
      eyebrow: "Member benefits",
      title: "Know what you owe, pay in seconds.",
      support: "For the household paying for water.",
      items: [
        { title: "Clear SMS bills", body: "Every cycle: your reading, your consumption, your amount, and your balance — in a text." },
        { title: "Pay by M-Pesa", body: "Lipa na M-Pesa to the project paybill with your account number; it posts automatically." },
        { title: "A portal in your pocket", body: "Log in by phone with OTP to see your live balance, bill history, and verified payments." },
        { title: "Fair billing you can check", body: "Transparent tiered rates and a running balance you can reconcile yourself." },
      ],
    },
  ],
  features: [
    { title: "Automated metered billing", body: "One bill per member per cycle on a tiered tariff, delivered by SMS via Africa's Talking." },
    { title: "M-Pesa & bank reconciliation", body: "Payments to the project paybill auto-post to the member's ledger, with an unmatched-payments workflow." },
    { title: "Debt & disconnections", body: "Thresholds, automatic and manual runs, alert SMS, a plumber worklist, and reconnection fees." },
    { title: "Project fundraising & claw-back", body: "Raise funds for infrastructure and recover each member's contribution through their bills." },
    { title: "Reporting & governance", body: "P&L, consumption, outstanding balances, and a full audit trail per member." },
  ],
  faqs: [
    { q: "How do members pay?", a: "By M-Pesa or CoopBank paybill with their account number — the payment posts to their ledger automatically." },
    { q: "Can members see their own balance?", a: "Yes. Members log in by phone with an OTP to see their live balance, bill history, and verified payments." },
    { q: "How are defaulters handled?", a: "Set debt thresholds and let the system run automatic or manual disconnection batches with alert SMS — fairly and consistently." },
  ],
  pricingNote: "Talk to us about your scheme.", // PRD: no public pricing until confirmed
  ctaTitle: "Stop reconciling M-Pesa by hand.",
  ctaLabel: "Request a demo",
};

export const tundamoto: ProductContent = {
  slug: "/tundamoto",
  name: "Tundamoto",
  seoTitle: "Tundamoto — A platform, a cash crop, a cure for poverty",
  seoDescription:
    "Tundamoto is a five-sided platform and cash-crop project with open transparency and automated, end-to-end data capture across land owners, financiers, off-takers, and more.",
  eyebrow: "A five-sided platform",
  heroTitle: "A platform. A cash crop. A cure for poverty.",
  heroSubhead:
    "If poverty is a disease, there must be cures for it. Tundamoto wraps a platform around a new cash crop and enables its meaningful implementation — with open transparency for every party.",
  launch: [
    { label: "Launch platform", url: "https://tundamoto.tutortide.online", primary: true },
    { label: "View pitch deck", url: "https://tundamoto.tutortide.online" }, // TODO: real deck link
  ],
  readoutLabel: "Platform // five sides",
  readout: [
    { label: "Land owners", meter: "▓▓▓▓▓▓▓░░" },
    { label: "Financiers", meter: "▓▓▓▓▓▓░░░" },
    { label: "Off-takers", meter: "▓▓▓▓▓▓▓░░" },
    { label: "Transparency", meter: "▓▓▓▓▓▓▓▓▓" },
  ],
  capabilityGroups: [
    {
      eyebrow: "The platform",
      title: "Open transparency, automated end to end.",
      support:
        "Key metrics are visible to all parties, and data is captured at the point of source. Think of the cash crop and the platform as UNIX and C — one solves the problem, the other showcases the capability.",
      items: [
        { title: "Land owners", body: "Yield in kilograms, expected flat income, yearly bonus, and comparison data for the four nearest farms." },
        { title: "Financiers", body: "Assets financed, outputs generated, expected income and bonus, and comparison data." },
        { title: "Produce off-takers", body: "Quantities committed, quality indicators, set price in US$, servicing farms, and point of delivery." },
        { title: "EPC & operators", body: "Engineering, procurement, and construction data captured across the delivery chain." },
      ],
    },
  ],
  faqs: [
    { q: "What is Tundamoto?", a: "Both a platform and a cash-crop project — a fruit, and a cure for poverty. The platform enables the crop's meaningful implementation." },
    { q: "Who is it for?", a: "Land owners, financiers, produce off-takers, EPC partners, and operators — five sides on one transparent platform." },
    { q: "Where can I learn more?", a: "View the pitch deck and founder videos, available as PPT, PDF, and on YouTube." }, // TODO: real links
  ],
  ctaTitle: "See the platform behind the cash crop.",
  ctaLabel: "Get in touch",
};

export const allProducts: Record<string, ProductContent> = {
  jinjing,
  nyokavi,
  waterpro,
  tundamoto,
};
