# WaterPro Marketing Website — Product Requirements Document

**Doc:** `webpro-prd.md`
**Product:** WaterPro — billing, payments & governance software for community water projects
**Deliverable:** A marketing website (Astro) that sells WaterPro to community water projects and converts committee decision-makers into demo requests.
**Design north star:** the look & feel of [conductorai.com/platform](https://www.conductorai.com/platform) — a precise, engineered, "technical blueprint" aesthetic, adapted for water utilities.

---

## 1. Purpose & goals

WaterPro is already a working product (automated metered billing, SMS bills, M-Pesa/bank reconciliation, a member self-service portal, debt & disconnection management, project fundraising with contribution claw-back, and full financial reporting). This site's job is to **communicate that value to the people who run community water schemes** and get them to request a demo.

**Primary goal:** drive **"Request a demo"** submissions from water-project committees.
**Secondary goals:** establish credibility/trust; explain the product clearly to non-technical committee members; rank for relevant searches (e.g. "water project billing software Kenya", "M-Pesa water billing", "community borehole management software").

**Success metrics**
- Demo-request conversion rate ≥ 4% of unique visitors.
- Bounce rate < 45% on the homepage.
- Lighthouse ≥ 95 performance / 100 accessibility / 100 best-practices / 100 SEO.
- Median LCP < 1.5s on 4G mobile (most of the audience is on phones).

---

## 2. Audience

Community-managed water schemes in Kenya and East Africa (self-help groups, water user associations, borehole committees, small piped schemes serving a village/estate). Three reader types, all addressed on the site:

1. **The committee / chairperson (buyer)** — cares about the *project's* sustainability, transparency, and member trust. Often not technical.
2. **The treasurer / clerk / meter reader (operator)** — does the day-to-day billing, collections, and books. Feels the pain of spreadsheets and manual reconciliation.
3. **The member (end beneficiary)** — the household paying for water. Their experience (clear SMS bills, easy M-Pesa payment, self-service) is a selling point to the committee.

**Context that shapes tone:** low-bandwidth phones, M-Pesa/CoopBank paybill culture, mistrust born of opaque manual books, committees answerable at AGMs. Keep copy plain, concrete, and outcome-led. No Silicon Valley jargon.

---

## 3. Positioning & core message

**One-liner:** *Run your water project like a real utility — automated billing, M-Pesa reconciliation, and books your members can trust.*

**Positioning statement:** WaterPro replaces the exercise books, WhatsApp reminders, and manual M-Pesa matching that community water schemes rely on, with one system that reads meters, bills by SMS, reconciles every payment automatically, manages debt and disconnections, funds new infrastructure, and produces the reports a committee needs to stay accountable.

**Message pillars (the "why"):**
1. **Get paid.** Automated metered bills + SMS + M-Pesa reconciliation raise collection rates.
2. **Be trusted.** Every shilling is on a ledger; members see their own verified payments and balances.
3. **Stay sustainable.** Debt tracking, disconnection control, and project fundraising keep water flowing.
4. **Stop the spreadsheets.** One system instead of exercise books, WhatsApp, and manual matching.

---

## 4. Benefit narratives (the heart of the site)

Structure the site around **three benefit audiences** — Project, Admin, Member — each a distinct section with its own numbered capability list (mirrors Conductor's "01–08 Core Capabilities" pattern). Copy below is source material, not final wording.

### 4.1 Project benefits — "Run a sustainable, trusted scheme"
- **01 Every shilling on a ledger.** A complete, tamper-evident record of charges, payments, and adjustments per member — the single source of truth at every AGM.
- **02 Higher collection rates.** Automated monthly bills by SMS with a clear M-Pesa paybill mean members know what they owe and how to pay.
- **03 Automatic bank reconciliation.** M-Pesa and CoopBank payments are matched to members automatically; unmatched payments are parked, not lost.
- **04 Debt under control.** See who owes what, set thresholds, and let the system flag and disconnect defaulters on a schedule — fairly and consistently.
- **05 Fund new infrastructure.** Raise money for a borehole, a pump, or a power bill as a project, then recover members' contributions automatically through their water bills (50/50 or fixed installments).
- **06 Board-ready reports.** Profit & loss, consumption, per-cycle billing statements, and outstanding-balance reports — export to Excel, Word, or PDF.
- **07 Transparency that builds trust.** Members see their own balance and verified payments online, ending "the treasurer ate our money" suspicion.

### 4.2 Admin benefits — "Do a month's books in an afternoon"
- **01 Bill from meter readings in one flow.** Enter or upload readings, preview every bill, then send them all by SMS with one self-checking button.
- **02 No more manual matching.** Bank statements and M-Pesa payments reconcile themselves; a search tool finds any payment across years.
- **03 Meter reading on a phone.** Readers submit readings from a Telegram bot in the field — no paper sheets to re-key.
- **04 Fair, automatic tariffs.** Tiered pricing (a flat rate for the first units, then per-unit) applied consistently to everyone.
- **05 Disconnection, handled.** Automatic monthly runs and manual batches, with alert SMS and a plumber worklist — no awkward decisions or forgotten cut-offs.
- **06 One dashboard.** Members, billing cycles, payments, projects, personnel, tariffs, and areas in one place.
- **07 De-duplication & corrections.** Catch duplicate accounts and double-posted payments, and fix opening balances safely.

### 4.3 Member benefits — "Know what you owe, pay in seconds"
- **01 Clear SMS bills.** Every cycle: your reading, your consumption, your amount, and your balance — in a text.
- **02 Pay by M-Pesa.** Lipa na M-Pesa to the project paybill with your account number; the payment posts to your account automatically.
- **03 A portal in your pocket.** Log in by phone (OTP) to see your live balance, bill history, and verified payments.
- **04 Fair billing you can check.** Transparent tiered rates and a running balance you can reconcile yourself.
- **05 See your contributions.** Track what you've paid toward a community project and how much is still being clawed back on your bills.
- **06 Fewer surprises.** Payment confirmations and disconnection warnings by SMS before anything happens.

---

## 5. Information architecture

**Single primary landing page** (long-scroll, section-based) plus a few supporting pages. The homepage carries the weight; keep it fast and scannable.

**Homepage sections (in order):**
1. **Nav** — numbered, minimal: `01 Platform · 02 How it works · 03 Benefits · 04 Pricing · 05 Contact`, with a persistent **Request a demo** button.
2. **Hero** — headline + subhead + primary CTA + an animated "terminal" readout showing a billing run (readings → bills → SMS sent → payments reconciled), echoing Conductor's processing readout.
3. **Problem** — the exercise-book/WhatsApp/manual-matching status quo, in one punchy line ("Stop reconciling M-Pesa by hand.").
4. **How it works** — 4 steps: *Read meters → Send bills → Get paid → Reconcile & report*, as a numbered horizontal flow.
5. **Big stat band** — a full-bleed electric-blue section with a large display number (e.g. collection-rate uplift or "1 afternoon" for monthly books). Placeholder until real data.
6. **Benefits — Project** (§4.1) as a numbered capability grid.
7. **Benefits — Admin** (§4.2) as a numbered capability grid.
8. **Benefits — Member** (§4.3) as a numbered capability grid, with a phone mock of the SMS bill + portal.
9. **Feature deep-dives** — alternating image/text rows for: Automated billing, M-Pesa/bank reconciliation, Debt & disconnections, Project fundraising & claw-back, Reports.
10. **Trust & transparency** — ledger/audit-trail message; a testimonial quote block (placeholder attributed to a committee chair).
11. **Final CTA band** — full-bleed blue, the spark/water mark, one input + **Request a demo**.
12. **Footer** — numbered sitemap, contact, "Proudly built for community water in Kenya."

**Supporting pages:** `/how-it-works` (expanded), `/benefits` (deep dives), `/pricing` (or "Talk to us"), `/contact` / `/request-demo` (form), `/privacy`, `/terms`. Optional later: `/case-studies`, `/blog`.

---

## 6. Design direction (emulate Conductor, adapted for water)

**Overall feel:** precise, engineered, quietly confident — "infrastructure-grade software," not a cutesy NGO site. Lots of whitespace, a technical blueprint underlay, and one loud accent colour used sparingly for impact.

**Colour**
- **Canvas:** near-white with a cool tint — `#FBFDFF` (matches Conductor's `rgb(251,253,255)`).
- **Ink / body text:** `#333333` (not pure black).
- **Primary accent:** electric blue. Use a confident water-leaning blue — recommend `#0A5BFF` (keep it vivid like Conductor's blue; a slightly cyan-shifted blue nods to water without going pale). Used for CTAs, links, full-bleed bands, and the display stat.
- **Deep ink / navy:** `#0B1B2B` for occasional dark blocks / progress bars.
- **Neutrals:** grid lines and dotted textures at ~6–10% ink; card borders `#E7EDF3`.
- **Semantic (product-echo):** green for "verified/paid," amber for "due," red for "disconnected" — used lightly in illustrative UI mocks.
- Ship light theme only (audience + Conductor are both light).

**Typography**
- **Family:** **Geist** (Geist Sans) — self-hosted; **Geist Mono** for the terminal readouts, timestamps, numbers, and code-like labels. This is the single biggest driver of the Conductor feel.
- **Headings:** weight 500 (medium), tight tracking, large display sizes; hero headline can go very large. A pixel/mono treatment on one hero number (like Conductor's "10x") is encouraged.
- **Body:** 16–18px, generous line-height, short paragraphs.
- **Labels/eyebrows:** Geist Mono, uppercase, small, letter-spaced, often numbered (`01`, `02`).

**Layout & motifs (the "blueprint" language)**
- A faint **grid** and **dotted-dot** texture in section backgrounds; **`+` markers** at grid intersections; **corner registration brackets** framing key blocks. These are the signature Conductor motifs — reproduce them as lightweight SVG/CSS, not images.
- **Numbered everything:** nav items, capability cards, and steps carry `01/02/03` monospace indices.
- **Full-bleed accent bands** to punctuate the scroll (stat band, final CTA) — solid electric blue with white content.
- **Generous section padding**; content in a centered max-width (~1200px) with a visible column grid.
- **Terminal/agentic readouts:** monospace, timestamped, "processing… 100%" style animated blocks to dramatize a billing/reconciliation run. This is the hero's centerpiece.

**Motion**
- Restrained and precise: subtle fade/September-slide on scroll-in, a typing/streaming animation in the terminal readout, a count-up on the big stat, hover states on cards (border + slight lift). No parallax gimmicks. Respect `prefers-reduced-motion`.

**Imagery**
- Prefer **product UI mockups** (billing screen, SMS bill on a phone, reconciliation view, member portal) over stock photos. Where photos are used, real Kenyan water-scheme contexts (meters, kiosks, boreholes) — authentic, not stock-glossy.
- A simple **spark/droplet mark** as the logo motif (Conductor uses a lightning spark; a water droplet or a droplet-with-spark works).

**Components inventory**
Nav (numbered, sticky, demo CTA) · Hero with animated terminal readout · Numbered capability card · Numbered step/flow · Full-bleed stat band with count-up · Alternating feature row (text + UI mock) · Phone mockup (SMS + portal) · Testimonial quote block · Full-bleed CTA band with inline form · Footer with numbered sitemap · Blueprint background primitives (grid, dots, `+`, corner brackets).

---

## 7. Content & tone guidelines

- **Plain and concrete.** "Send every member's bill by SMS in one click," not "streamline stakeholder communications."
- **Outcome-first headlines**, mechanism second. Lead with the benefit (get paid, be trusted), then explain how.
- **Numbers where honest.** Use real figures once available; until then, use qualitative claims and mark placeholders — do **not** invent statistics.
- **Local and specific.** Name M-Pesa, CoopBank, paybill, AGM, committee, meter reader — the audience's own vocabulary.
- **Respect the reader.** Non-technical committee members must understand every sentence; operators should feel their pain named precisely.
- **No jargon:** avoid "leverage," "synergy," "seamless," "revolutionary." No em dashes in body copy (house style).

---

## 8. Technical requirements

- **Framework:** **Astro** (static output, islands only where interactivity is needed — the terminal animation, count-up, mobile nav, and the demo form).
- **Styling:** Tailwind CSS with a small design-token layer (colours, Geist font, spacing) so the blueprint motifs and blue accent are centralized.
- **Fonts:** self-host Geist Sans + Geist Mono (woff2, `font-display: swap`, preload the two weights used). No external font CDNs.
- **Interactivity:** minimal client JS. Terminal readout + stat count-up as a tiny Astro island or vanilla script with `IntersectionObserver`. Mobile nav as an island.
- **Forms:** "Request a demo" posts to an email/CRM endpoint (e.g. a serverless function or a form service). Capture name, water-project name, role, phone, county, members served, message. Add anti-spam (honeypot + rate limit). Confirmation state inline.
- **Analytics:** privacy-friendly (e.g. Plausible/Umami) — page views + demo-form conversions.
- **Hosting:** static host with a global CDN (the project already uses Firebase Hosting; deploying this as a third Firebase target, e.g. `hosting:web`, keeps ops consistent — or Netlify/Vercel/Cloudflare Pages). Decide at build time.
- **Performance budget:** ≤ 100KB JS on the homepage; images as AVIF/WebP with width-appropriate `srcset`; lazy-load below the fold; inline critical CSS.
- **SEO:** semantic HTML, one `h1`, descriptive `title`/`meta`, Open Graph + Twitter cards, `sitemap.xml`, `robots.txt`, JSON-LD `Organization` + `SoftwareApplication`. Target keywords in §1.
- **Accessibility:** WCAG 2.1 AA — colour contrast (verify the electric blue on white for text vs. large-only), full keyboard nav, visible focus rings, `alt` text, reduced-motion support, form labels.
- **Responsive:** mobile-first (the audience is on phones); verify at 375 / 768 / 1280. No horizontal scroll; the blueprint grid and full-bleed bands must reflow cleanly.
- **i18n-ready (phase 2):** copy structured so an English → Swahili translation can be added later without re-architecting.

---

## 9. Product facts the copy can draw on (accurate feature list)

Use these real capabilities as source material; keep claims truthful.
- **Metered billing** with a tiered tariff (flat rate covering the first units, then per-unit); one bill per member per cycle.
- **Bill delivery by SMS** (Africa's Talking), plus payment-confirmation and disconnection-alert SMS.
- **Payments** via M-Pesa/CoopBank paybill (`Paybill 400222`, account `386883#<code>`), auto-posted to the member's ledger.
- **Automatic reconciliation** of bank statements and M-Pesa, with an unmatched-payments workflow and a cross-year payment search.
- **Member self-service portal** — OTP phone login, live balance, bill & payment history, verified bank payments, projects.
- **Debt & disconnection management** — thresholds, automatic monthly runs and manual batches, alert SMS, plumber worklist, reconnection fees.
- **Project fundraising with claw-back** — raise funds for infrastructure; recover each member's contribution automatically through their bills (50/50 or fixed installments), with per-member outstanding tracking.
- **Reporting** — P&L, consumption, per-cycle billing statements, outstanding balances, split-account watch, borehole register; export to Excel/Word/PDF.
- **Field tooling** — Telegram bots for meter readers.
- **Governance** — a full per-member ledger and audit trail; de-duplication and safe balance corrections.

---

## 10. Non-goals

- No self-serve signup / online purchase — this is a demo-request funnel (sales-assisted).
- No pricing table with hard numbers unless the business confirms them (use "Talk to us" until then).
- No blog/CMS in v1 (can add Astro content collections later).
- No dark theme in v1.
- No fabricated metrics, logos, or testimonials — every stat, quote, and customer name must be real and approved before publish.

---

## 11. Open questions (confirm before build)

1. **Accent colour** — keep Conductor's near-pure electric blue, or shift toward a water-cyan? (Recommend the vivid `#0A5BFF`.)
2. **Metrics** — do we have any real numbers (collection-rate uplift, schemes served, members billed, shillings reconciled) to headline the stat band and hero?
3. **Testimonial** — can we get one approved quote from a committee chair/treasurer?
4. **Pricing** — public pricing, or "Talk to us"?
5. **Hosting target** — Firebase (`hosting:web`) to match the existing stack, or a separate host?
6. **Domain** — which domain does the marketing site live on?
7. **Swahili** — is a bilingual (EN/SW) site in scope now or phase 2?

---

## 12. Deliverables & phasing

- **Phase 1 (launch):** homepage + contact/request-demo + privacy/terms; full design system (Geist, blueprint motifs, blue accent); the animated hero readout; SEO + analytics; deployed.
- **Phase 2:** expanded `/how-it-works` and `/benefits` deep-dive pages; real metrics + testimonial; Swahili.
- **Phase 3:** case studies + blog (Astro content collections).

**Definition of done (Phase 1):** the homepage renders the three benefit sections (Project/Admin/Member), the how-it-works flow, and a working demo-request form; matches the Conductor-inspired blueprint aesthetic (Geist + electric-blue + grid/dots/registration marks); hits the Lighthouse and LCP budgets in §1; and contains no placeholder statistics presented as fact.
