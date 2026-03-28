# iGroup Website — Multi-Page Build Brief
## COMPLETE REFERENCE FOR CODING AGENTS

---

## OVERVIEW

Build 3 HTML pages (services.html, join.html, about.html) for https://igroup-website.vercel.app.
These pages MUST look like they belong to the same site as the homepage (index.html).
The homepage uses a Webflow export design system — all new pages must use the EXACT same CSS, spacing, typography, colour palette, and component patterns.

**Repo:** monkeyracer25/igroup-website (already cloned at /tmp/igroup-v10)

---

## DESIGN SYSTEM (EXTRACTED FROM LIVE SITE)

### Colours
- Primary Accent: #0D7377 (deep teal)
- Foreground/Dark Sections: #1A1A2E (dark navy)
- Background: #FFFFFF (white)
- Alt Background: #F5F0E8 (warm cream)
- Light Grey: #f5f3f0
- Text Primary: #1A1A2E
- Text on Dark: #FFFFFF

### Typography
- Font: Manrope (Google Fonts) — ONLY font used
- Heading weight: 500 (medium), NOT bold
- Body weight: 400 (regular)
- H1: 4rem, letter-spacing -0.03em, line-height 1.1
- H2: 2.5rem, letter-spacing -0.02em, line-height 1.2
- H3: 2rem, letter-spacing -0.015em
- H4: 1.5rem
- Body: 1.25rem, line-height 1.5
- Body Small: 1.125rem

### Spacing
- Section padding: 120px vertical, 48px horizontal (desktop)
- Section padding: 80px vertical, 20px horizontal (mobile)
- Container max: 1280px (centred)
- Container wide: 1440px
- Card padding: 32px
- Card gap: 24px

### Border Radius
- Cards: 16px
- Buttons: 100vw (full pill)
- Badges: 100vw (full pill)
- Small elements: 8px

### Buttons
- Shape: Pill (border-radius: 100vw)
- Primary: background #0D7377, colour white, padding 14px 28px
- Dark: background #1A1A2E, colour white
- Outline: border 1.5px solid currentColor, transparent bg
- All buttons have arrow icon on right side
- Hover: slight lift, colour lighten

### Cards
- Background: white (on cream/dark sections) or cream (on white sections)
- Border-radius: 16px
- Padding: 32px
- Box-shadow: subtle on default, more on hover
- Hover: translateY(-2px), increased shadow
- Transition: 0.3s ease

### Section Pattern
Sections alternate between:
1. White background
2. Cream (#F5F0E8) background
3. Dark (#1A1A2E) background with white text
This creates visual rhythm. Every page must follow this alternating pattern.

### Icons
- Style: Simple SVG, 2px stroke or filled
- Teal (#0D7377) on light backgrounds
- White on dark backgrounds
- Sizes: 20-24px inline, 32-48px feature

---

## SHARED CSS FILES (MUST LOAD ON EVERY PAGE)

Every page loads these CSS files which contain all design tokens:
```html
<link href="css/normalize.css" rel="stylesheet">
<link href="css/webflow.css" rel="stylesheet">  
<link href="css/ig2-c49518.webflow.css" rel="stylesheet">
```

Then add page-specific styles in a `<style>` tag or `css/pages.css`.

---

## ANIMATIONS

Use GSAP ScrollTrigger (NOT webflow.js — that's homepage-only):

```html
<script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.14.2/gsap.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.14.2/ScrollTrigger.min.js"></script>
```

### Required Animation Patterns:
1. **Fade-up on scroll** — elements start opacity:0, translateY(40px), animate to visible when scrolled into view
2. **Stagger** — multiple cards/items animate in sequence with 0.1s delay
3. **Counter** — stat numbers count from 0 to target over 1.5s
4. **Card hover lift** — translateY(-4px) on hover, 0.3s transition
5. **Navbar** — transparent over hero, solid background on scroll

### Example GSAP Code:
```javascript
gsap.registerPlugin(ScrollTrigger);

// Fade-up all elements with .animate-in class
gsap.utils.toArray('.animate-in').forEach(el => {
  gsap.from(el, {
    opacity: 0,
    y: 40,
    duration: 0.8,
    ease: 'power2.out',
    scrollTrigger: {
      trigger: el,
      start: 'top 85%',
      toggleActions: 'play none none none'
    }
  });
});

// Stagger cards
gsap.utils.toArray('.card-grid').forEach(grid => {
  const cards = grid.querySelectorAll('.card');
  gsap.from(cards, {
    opacity: 0,
    y: 30,
    duration: 0.6,
    stagger: 0.1,
    ease: 'power2.out',
    scrollTrigger: {
      trigger: grid,
      start: 'top 80%'
    }
  });
});

// Counter animation
gsap.utils.toArray('.counter').forEach(counter => {
  const target = parseInt(counter.getAttribute('data-target'));
  gsap.to(counter, {
    innerText: target,
    duration: 1.5,
    snap: { innerText: 1 },
    scrollTrigger: {
      trigger: counter,
      start: 'top 85%'
    }
  });
});
```

---

## WHAT iGROUP IS

A global AI-powered workforce management platform built exclusively for professional contractors.
Tagline: "We work for YOU"
The "football agent for contractors" — works FOR the contractor, not the agency, not the client.

### NEVER MENTION:
- Ricson, RPS, supply chain, fee structure, margin, undisclosed agency
- Any suggestion iGroup is part of a larger chain

### Offices: Isle of Man (HQ), London, Guernsey, Dubai

---

## PAGE 1: services.html — Services Hub

### Hero Section (Dark #1A1A2E background)
- Eyebrow text: "WHAT WE DO" (small, teal, uppercase, letter-spacing 0.16em)
- H1: "Everything a Contractor Needs. Nothing They Don't."
- Subtext: "From company formation to retirement planning — every service designed to make your contracting career more profitable, more secure, and more rewarding."
- Two buttons: [Explore Services] teal pill, [Join iGroup — It's Free] outline pill
- Right side: Abstract arrangement of 9 teal-outlined icon tiles in a 3x3 grid (using SVG icons from the /images/ folder)

### Section 2: Intelligence & Advisory (Cream #F5F0E8 background)
- Section number: "01" in large teal text
- H2: "Intelligence & Advisory"
- Subtext: "Data-driven decisions, not gut feeling."
- 4 cards in a 2x2 grid:
  1. **Rate Intelligence** ⭐ — "AI analyses thousands of listings to deliver hyper-personalised rate benchmarks by sector, geography, and skill." Icon: chart
  2. **Career Intelligence** — "Skills gap analysis, market benchmarking, retirement modelling, and negotiation coaching — powered by data." Icon: target
  3. **Contract & Compliance Review** — "Assignment terms reviewed before you accept. Onerous clauses flagged. Insurance and certifications monitored." Icon: shield
  4. **IR35 Support** — "Understand your status determination. Challenge guidance. Working practices advisory to mitigate risk." Icon: document

### Section 3: Business & Formation (White background)
- Section number: "02"
- H2: "Business & Formation"
- Subtext: "From incorporation to optimisation."
- 4 cards:
  1. **Company Formation** — "Limited company set up in days. Companies House, bank accounts, HMRC registrations — we handle all of it." Icon: building
  2. **Income Optimisation** — "Beyond salary vs dividend. Holistic income structuring factoring pension, expenses, and allowances." Icon: trending-up
  3. **CV & Profile Services** — "AI-assisted CV rewriting, PSC website generation, and LinkedIn optimisation based on what hiring managers search for." Icon: user
  4. **Registered Office** — "Professional Companies House address in Isle of Man, London, or Guernsey. Not your living room." Icon: map-pin

### Section 4: Protection & Finance (Dark #1A1A2E background, white text)
- Section number: "03"
- H2: "Protection & Finance"
- Subtext: "Corporate-level cover at contractor-level pricing."
- 4 cards (dark card variant — slightly lighter bg #1A3A5C or rgba(255,255,255,0.05)):
  1. **Insurance & Protection** — "Group PI, PL, income protection, cyber, health, and life insurance — all at rates you can't get alone." Icon: shield
  2. **Mortgage & Finance** — "Specialist contractor mortgage brokers who understand day rates. Plus pension consolidation and retirement planning." Icon: home
  3. **Pension Planning** — "Scattered pension pots from multiple umbrellas? We help you find them, consolidate them, and plan properly." Icon: piggy-bank
  4. **Banking Partnerships** — "Preferential rates with contractor-friendly banks. Business accounts that actually work for how you earn." Icon: credit-card

### Section 5: Platform & Community (Cream background)
- Section number: "04"
- H2: "Platform & Community"
- Subtext: "Technology and people, working together."
- 4 cards:
  1. **Contractor Portal** ⭐ — "Your entire contracting career in one dashboard. Rate intelligence, compliance tracking, CV management, and career strategy." Icon: layout-dashboard
  2. **Compliance Passport** ⭐ — "One verified credential proving right to work, insurance, certifications, and compliance. Onboarding in minutes, not weeks." Icon: badge-check
  3. **Credibility Score** — "Like a credit score for contracting. Builds over time with every completed assignment. Your professional trust signal." Icon: award
  4. **Community** — "Sector networking, mentorship matching, co-working partnerships, professional body memberships, and wellbeing support." Icon: users

### Section 6: The Contractor Lifecycle (White background)
- H2: "With You at Every Stage"
- Horizontal timeline (5 stages) connected by a line:
  1. Formation → 2. First Assignment → 3. Ongoing Management → 4. Growth & Strategy → 5. Retirement Planning
- Each stage has an icon, title, and 1-line description
- On mobile: vertical timeline instead of horizontal

### Section 7: iGroup vs Going It Alone (Dark background)
- H2: "iGroup vs. Going It Alone"
- Comparison table, 2 columns:
  | Area | Going It Alone | With iGroup |
  |------|---------------|-------------|
  | Rate Negotiation | Gut feeling, no data | AI-powered benchmarks by postcode |
  | Compliance | DIY paperwork, chase renewals | Compliance Passport — one credential |
  | Career Strategy | Reactive, ad hoc | Data-driven, proactive |
  | Insurance | Retail prices, admin yourself | Group rates, we handle it |
  | Mortgage | Rejected by high street banks | Specialist broker, approved in weeks |
  | Company Setup | Weeks of research | Done in days, guided throughout |
- iGroup column has teal checkmarks, "Alone" column has grey X marks

### Section 8: CTA (Teal #0D7377 background, white text)
- H2: "Ready to take control of your contracting career?"
- Two buttons: [See Pricing] white outline pill, [Join iGroup — It's Free] white pill

### Footer (same as homepage)

---

## PAGE 2: join.html — Conversion / Sign-Up

### Hero Section (Dark #1A1A2E background)
- Eyebrow: "JOIN iGROUP"
- H1: "Welcome to the Smart Side of Contracting."
- Subtext: "Free to join. £250 welcome bonus. AI-powered intelligence from day one."
- Button: [Start Your Application ↓] teal pill (scrolls to form)
- Social proof line: "Join 500+ contractors already on the platform"

### Section 2: What You Get (Cream background)
- H2: "Everything You Need. From Day One."
- 2-column checklist (4 items per column), each with a teal checkmark icon:
  ✓ Personalised rate intelligence report (within 48 hours)
  ✓ Compliance Passport setup initiated
  ✓ Access to Contractor Portal
  ✓ £250 welcome bonus on a pre-paid card
  ✓ Dedicated relationship manager
  ✓ Group insurance access
  ✓ Market intelligence briefings
  ✓ Career strategy consultation

### Section 3: How It Works (White background)
- H2: "Up and Running in Three Steps."
- 3 cards in a row, each numbered:
  **01 — Apply** "Two-minute form. No commitment. We just need to know who you are and what you do."
  **02 — Welcome Call** "We learn about your career, your goals, and your current situation. You learn what iGroup can do for you."
  **03 — Intelligence Activated** "Your personalised rate report arrives within 48 hours. Portal access granted. Compliance Passport started."

### Section 4: £250 Welcome Bonus (Dark background)
- H2: "Your £250 Welcome Bonus"
- Visual: stylised pre-paid card graphic (teal gradient card with "iGroup" branding, chip, £250)
- Text: "Loaded within 7 days of your first assignment. Our way of saying thank you for choosing intelligent contracting."
- This should be a visually striking section — the card graphic is prominent

### Section 5: Application Form (Cream background)
- H2: "Start Your Application"
- Clean form layout, single column, generous spacing:
  - Full Name (text input)
  - Email Address (email input)
  - Phone Number (tel input)
  - Current Status (dropdown: Contracting via umbrella / Contracting via PSC / Permanent — considering contracting / Other)
  - Primary Sector (dropdown: IT & Technology / Engineering / Finance / Energy & Utilities / Construction / Pharma & Life Sciences / Other)
  - Current Day Rate (optional, text input, placeholder "£000/day — helps us prepare your rate report")
  - How did you hear about us? (dropdown: LinkedIn / Colleague / Google / Event / Other)
  - [Submit Application] teal pill button, full-width
  - Small print: "No commitment. No obligation. We'll call within 24 hours."
- Form doesn't need to actually submit — just show a success state on click

### Section 6: Trust Signals (White background, compact)
- 4 items in a row with small icons:
  🔒 GDPR Compliant | 🛡️ Data Encrypted | 💰 No Hidden Fees | ❌ Cancel Anytime
- Small, reassuring, understated

### CTA (Teal background)
- "Still have questions?" [Contact Us] outline button | [Back to Services] outline button

### Footer

---

## PAGE 3: about.html — Story / Editorial

### Hero Section (Dark #1A1A2E background, full-width)
- Uses hero image as background with dark gradient overlay (reuse images/hero-it-developer-london.jpg)
- H1: "Built by Contractors, for Contractors."
- Subtext: "We've been where you are. That's why we built something better."
- No CTA button — this is a story page

### Section 2: Our Story (White background)
- 2-column layout: text left (60%), image right (40%)
- H2: "We Started as Contractors Ourselves."
- 3 paragraphs of origin story (professional, authentic):
  "iGroup was born from frustration. Our founders spent decades contracting across engineering, IT, and finance — and saw the same problems everywhere. Contractors negotiating blind. Compliance eating into productive hours. Careers drifting without strategy."
  "We asked a simple question: why don't contractors have access to the same intelligence and support that Fortune 500 companies give their permanent workforce?"
  "So we built it. An AI-powered platform that analyses market rates in real time, manages compliance automatically, and provides genuine career intelligence. Not another umbrella. Not another agency. A platform that works exclusively for you."
- Image: Use one of the hero images

### Section 3: The Mission (Teal #0D7377 background, white text)
- Full-width banner, centred text
- Large quote marks (decorative, faint white)
- Quote: "Every contractor deserves the same intelligence and support that Fortune 500 companies give their permanent workforce."
- Attribution: "— iGroup"

### Section 4: Timeline (Cream background)
- H2: "From Idea to Intelligence Platform"
- Vertical timeline with connecting line:
  1. **The Idea** — "A group of contractors asked: why are we negotiating blind?"
  2. **The Research** — "Two years analysing rate data across 15+ sectors and 200+ geographies"
  3. **The Platform** — "AI-powered rate intelligence engine goes live"
  4. **The Network** — "500+ contractors joined. £12M+ in rate uplifts identified."
  5. **The Future** — "Global expansion. Full contractor portal. The standard for professional contracting."
- Timeline points have teal dot markers, connecting line in light grey

### Section 5: Our Values (White background)
- H2: "Six Values. One Purpose."
- 2×3 card grid:
  1. **Independence** — "Your career, your choices. We provide intelligence — you make the decisions."
  2. **Intelligence** — "Every recommendation backed by data. Every insight earned through analysis."
  3. **Integrity** — "Transparent pricing. Honest advice. We succeed when you succeed."
  4. **Innovation** — "AI-powered tools that give you an unfair advantage in the market."
  5. **Inclusion** — "Every sector. Every geography. Every contractor deserves world-class support."
  6. **Impact** — "Measurable results. Higher rates. Better protection. Stronger careers."
- Each card has a teal number (01-06) and icon

### Section 6: Global Presence (Dark background)
- H2: "Four Offices. One Platform."
- 4 office cards in a row:
  **Isle of Man (HQ)** — "Global headquarters. Strategy and platform development."
  **London** — "UK operations. Client services and partnerships."
  **Guernsey** — "Regulatory and compliance centre."
  **Dubai** — "Middle East and international expansion."
- Each card has a map-pin icon and the office name
- Background: could have a subtle world map outline or just dark with cards

### Section 7: Stats Bar (Teal background)
- 4 stats in a row with counter animation:
  **500+** Contractors | **15+** Sectors | **4** Global Offices | **98%** Retention Rate

### Section 8: CTA (Dark background)
- H2: "Your Career Is the Constant. Let Us Handle the Rest."
- Button: [Join iGroup] teal pill

### Footer

---

## TECHNICAL REQUIREMENTS

1. Each page is a single HTML file in the repo root
2. Load shared CSS: normalize.css, webflow.css, ig2-c49518.webflow.css
3. Page-specific styles in <style> block or css/pages.css
4. GSAP animations via CDN (gsap.min.js + ScrollTrigger.min.js)
5. Nav and footer extracted from index.html (update links)
6. Mobile responsive: 992px, 768px, 480px breakpoints
7. Navbar: transparent on dark hero sections, solid on scroll
8. Every `.animate-in` element fades up on scroll
9. Card grids stagger in
10. Counter stats animate
11. Form has basic client-side validation and shows success state on submit

## NAV LINKS (update in all pages)
- About → about.html
- Services → services.html  
- Solutions → #section-solutions (homepage) or services.html
- Blog → #section-blogs (homepage)
- Contact → #section-contact (homepage)
- CTA button: "Join iGroup" → join.html

