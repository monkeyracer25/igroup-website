# iGroup Website — Batch 2 Build Brief
## Rate Intelligence, Compliance Passport, Contractor Portal

---

## OVERVIEW

Build 3 new HTML pages matching the existing site design exactly.
The homepage (index.html) and batch 1 pages (services.html, about.html, join.html) are the reference.

**Repo:** /tmp/igroup-v10 (run `git pull origin main` first to get latest images)

### Design System (MUST MATCH)
- Font: Manrope (Google Fonts), 500 for headings, 400 for body
- Colours: Teal #0D7377, Dark #1A1A2E, White, Cream #F5F0E8
- Buttons: Pill (border-radius: 100vw), teal bg + white text
- Cards: 16px radius, 32px padding, hover lift
- Section rhythm: Alternate white → cream → dark sections
- Load shared CSS: css/normalize.css, css/webflow.css, css/ig2-c49518.webflow.css
- GSAP ScrollTrigger for animations (NOT webflow.js)
- Nav + Footer: Extract from index.html, update links

### Available Images (in /images/)
**Sector images (USE THESE throughout all 3 pages):**
- sector-nhs-nurse.jpg — NHS nurse in hospital corridor
- sector-social-care.jpg — care worker with elderly person
- sector-it-developer.jpg — developer at dual monitors, tech office
- sector-rail-worker.jpg — railway engineer in hi-vis
- sector-pharma.jpg — pharmacist reviewing tablet
- sector-energy.jpg — energy worker on offshore platform

**Product images:**
- dashboard-mockup.jpg — laptop showing SaaS dashboard with teal/navy UI
- compliance-passport-hero.jpg — floating digital credential card, holographic

**Existing hero images (reuse freely):**
- hero-it-developer-london.jpg, hero-arab-businessman.jpg, hero-oil-rig-manager.jpg, hero-engineer-woman.jpg

---

## PAGE 1: rate-intelligence.html — SaaS Product Page / Dashboard Showcase

This is THE hero feature. It should feel like Stripe's or Linear's product page — premium SaaS, data-rich, incredibly polished.

### Hero Section (Dark #1A1A2E background)
- Left side: text content
  - Eyebrow: "AI-POWERED RATE INTELLIGENCE" (teal, uppercase, small)
  - H1: "Know Your Worth. Down to the Postcode."
  - Subtext: "Our AI continuously analyses thousands of job listings across every sector and geography — delivering hyper-personalised rate benchmarks directly to you."
  - Two buttons: [See Your Rate] teal pill, [How It Works ↓] outline pill
- Right side: `dashboard-mockup.jpg` with a subtle float animation (CSS translateY oscillation)

### Section 2: The Problem (Cream #F5F0E8 background)
- H2: "Most Contractors Negotiate Blind."
- 3 stat cards in a row, each with large teal number + description:
  - "68%" — "of contractors are below market rate for their skills and location"
  - "£23,000" — "average annual underpayment identified across our contractor network"
  - "11%" — "of contractors use any form of data to negotiate their rate"
- Source line: "iGroup Market Analysis 2026" (small, muted text)

### Section 3: How It Works (White background)
- H2: "Three Steps to Knowing Your Market Value."
- 3 numbered cards (01, 02, 03) horizontal on desktop, stacked mobile:
  - **01 — We Scrape** "Our AI analyses thousands of listings daily across 50+ job boards, covering every sector and geography in the UK."
  - **02 — We Personalise** "Your sector, skills, geography, experience level, and certifications — all factored into your personalised benchmark."
  - **03 — We Deliver** "Regular reports with actionable rate recommendations. Know exactly where you stand and what to ask for."

### Section 4: Feature Deep Dive (Alternating layout — 4 features)
Each feature is a full-width section alternating image left/right:

**Feature A: Geographic Arbitrage** (Dark background)
- Image: sector-rail-worker.jpg (left)
- Text (right):
  - Eyebrow: "GEOGRAPHIC INTELLIGENCE"
  - H3: "Same Role. Different Postcode. £50/Day More."
  - Body: "Our geographic rate mapping shows you exactly where demand outstrips supply. A structural engineer in Brighton might be on £400/day — but the same role in St Albans pays £450 because fewer contractors are competing for more positions. We find these opportunities automatically."

**Feature B: Sector Benchmarking** (Cream background)
- Text (left):
  - Eyebrow: "SECTOR BENCHMARKING"
  - H3: "Know Where You Sit. Top 5%? Or Leaving Money on the Table?"
  - Body: "See exactly where your rate positions you within your sector. Are you in the top quartile? The bottom? Our benchmarking shows your precise position and — critically — what it would take to move up."
- Image: sector-it-developer.jpg (right)

**Feature C: Trend Alerts** (White background)
- Image: sector-nhs-nurse.jpg (left)
- Text (right):
  - Eyebrow: "REAL-TIME ALERTS"
  - H3: "Your Sector Rate Just Jumped 12%. Time to Renegotiate."
  - Body: "Markets move. Budgets shift. New projects launch. When rates in your sector and geography change significantly, you'll know about it before your next contract renewal — not after."

**Feature D: Negotiation Ammunition** (Dark background)
- Text (left):
  - Eyebrow: "NEGOTIATION SUPPORT"
  - H3: "Walk Into Your Next Rate Review With Data, Not Hope."
  - Body: "We generate evidence packs showing current market rates, sector trends, and your competitive position. When an agency says 'the budget is fixed,' you'll have the data to challenge that."
- Image: sector-energy.jpg (right)

### Section 5: Sectors We Cover (Cream background)
- H2: "15+ Sectors. Thousands of Data Points."
- Grid of sector tags/badges (6 across, 3 rows — pill-shaped badges with sector icons):
  IT & Technology | Engineering | Finance & Banking | Energy & Utilities | Construction | Pharma & Life Sciences | NHS & Healthcare | Social Care | Rail & Transport | Defence & Security | Telecoms | Oil & Gas | Manufacturing | Public Sector | Professional Services
- Below: "And growing. New sectors added monthly."

### Section 6: Testimonial (White background)
- Large testimonial card, centred:
  - Big teal quotation mark (decorative)
  - Quote: "iGroup's rate data got me a £75/day increase on my last renewal. That's £19,500 a year I was leaving on the table."
  - Name: "Sarah Mitchell"
  - Role: "IT Programme Manager, London"
  - Image: sector-pharma.jpg or hero-engineer-woman.jpg (circular avatar)

### Section 7: FAQ (Cream background)
- H2: "Frequently Asked Questions"
- 5 accordion items:
  1. "How often are rate reports updated?" — "Your personalised rate intelligence is updated monthly, with real-time alerts for significant market movements in your sector and geography."
  2. "Which sectors do you cover?" — "We currently cover 15+ sectors including IT, engineering, finance, healthcare, energy, construction, rail, pharma, and more. New sectors are added monthly."
  3. "How personalised is the analysis?" — "Completely. We factor in your specific sector, skills, certifications, experience level, and exact geographic area — not just broad regional averages."
  4. "Do I need to share my current rate?" — "It helps us give you a more accurate benchmark, but it's not required. We can still deliver valuable market intelligence based on your sector and location."
  5. "Is rate intelligence included in my membership?" — "All iGroup members receive quarterly rate reports. Professional and Enterprise members receive monthly reports plus real-time alerts."

### Section 8: CTA (Teal #0D7377 background, white text)
- H2: "Stop Guessing. Start Knowing."
- Subtext: "Your personalised rate report, delivered within 48 hours of joining."
- Button: [Join iGroup — It's Free] white pill button

### Footer (same as homepage)

---

## PAGE 2: compliance-passport.html — Product Page (Apple-Style)

This is the "genius" feature (Jonny's word). It should feel like an Apple product launch — clean, aspirational, making the product feel inevitable.

### Hero Section (Dark #1A1A2E background)
- Centre-aligned text:
  - Eyebrow: "COMPLIANCE PASSPORT"
  - H1: "One Credential. Every Assignment. Zero Friction."
  - Subtext: "A single verified digital credential proving your right to work, insurance, certifications, clearances, and compliance status. Hand it to any client and start immediately."
  - Two buttons: [Get Your Passport] teal pill, [See How It Works ↓] outline pill
- Below text: `compliance-passport-hero.jpg` (floating passport card, centred, with subtle shadow)

### Section 2: The Pain (Cream background)
- Two columns:
  - Left column (muted/grey tint): "WITHOUT Compliance Passport"
    - Icon: ✗ (red/grey)
    - "Email 15 documents to a new agency"
    - "Wait 3-4 weeks for compliance checks"
    - "Chase insurance renewals yourself"
    - "Re-verify everything for every new assignment"
    - "Lose billable days to admin"
  - Right column (teal tint): "WITH Compliance Passport"
    - Icon: ✓ (teal)
    - "Share one verified credential"
    - "Onboard the same day"
    - "Automatic renewal monitoring"
    - "Verified once, trusted everywhere"
    - "Start billing immediately"
- Bottom stat: "Average contractor onboarding: 3-4 weeks. With Compliance Passport: same day."

### Section 3: What's Inside (White background)
- H2: "Everything Verified. In One Place."
- 8 verification items in a 2x4 or 4x2 grid, each with a teal checkmark icon + label:
  - ✓ Right to Work
  - ✓ Professional Indemnity Insurance
  - ✓ Public Liability Insurance
  - ✓ Professional Certifications
  - ✓ Security Clearances
  - ✓ Companies House Status
  - ✓ Tax Compliance
  - ✓ Training Records
- Each card has the checkmark, title, and a 1-line description

### Section 4: How It Builds Over Time (Dark background)
- H2: "The Longer You Stay, the Stronger It Gets."
- Horizontal timeline (3 stages):
  - **Month 1 — Foundation** "Basic compliance verified: right to work, insurance, Companies House status."
  - **Month 6 — Comprehensive** "Full certification portfolio, training records, reference history added."
  - **Year 1 — Gold Standard** "Complete verified professional profile. Assignments verified. Credibility Score active."
- Key message: "Your Compliance Passport builds value over time. Starting from scratch elsewhere means losing everything you've built."
- Image: sector-social-care.jpg alongside the timeline

### Section 5: For Clients & Agencies (Cream background)
- H2: "When They Ask 'Are They Compliant?' — One Click."
- Two columns:
  - Left: text explaining agency/client view. "When a new client or agency asks about your compliance status, you don't scramble for documents. You share your Compliance Passport — a single, verified credential that answers every question instantly."
  - Right: image showing concept of verification (use hero-arab-businessman.jpg)

### Section 6: Connected to Credibility Score (White background)
- H2: "Your Passport Feeds Your Credibility Score."
- Teaser section for the Credibility Score:
  - "Like a credit score for contracting. Every verified credential, every completed assignment, every clean compliance record adds to your score."
  - "The higher your score, the faster you onboard, the more trust you carry."
  - "Coming soon: shareable Credibility Score for agencies and clients."
- Visual: large number "847" in teal (example score) with a circular progress indicator

### Section 7: CTA (Teal background)
- H2: "Start Building Your Compliance Passport Today."
- Subtext: "Your first verification completed within 7 days of joining. Free."
- Button: [Join iGroup] white pill

### Footer

---

## PAGE 3: portal.html — SaaS Product Page / Feature Tour

The platform is "THE PRODUCT". This page should make contractors desperate to log in. SaaS waitlist energy.

### Hero Section (Dark #1A1A2E background)
- Full-width `dashboard-mockup.jpg` as background with dark gradient overlay
- Centre text:
  - Eyebrow: "THE CONTRACTOR PORTAL"
  - H1: "Your Entire Contracting Career. One Dashboard."
  - Subtext: "Rate intelligence, compliance tracking, CV management, market insights, and career strategy — all in one place."
  - Two buttons: [Join the Waitlist] teal pill, [Take the Tour ↓] outline pill
- Social proof: "487 contractors already on the waitlist" (small, below buttons)

### Section 2: Feature Tabs (Cream background)
- H2: "Six Powerful Modules. One Platform."
- Interactive tabbed interface (6 tabs):
  Tab labels: Dashboard | Rate Intelligence | Documents | CV & Profile | Market Insights | Career Strategy
  
  Each tab shows:
  - Title + 3-4 bullet descriptions
  - Image from the sector images (different per tab)
  
  **Dashboard tab:**
  - "Your command centre. Key stats, upcoming assignment dates, compliance status, rate position — everything at a glance."
  - Bullets: Real-time compliance status / Assignment calendar / Rate position indicator / Action items
  - Image: dashboard-mockup.jpg
  
  **Rate Intelligence tab:**
  - "Personalised rate charts, sector comparisons, geographic data, and trend alerts."
  - Bullets: Interactive rate charts / Sector benchmarking / Geographic heat map / Trend notifications
  - Image: sector-it-developer.jpg
  
  **Documents tab:**
  - "Your Compliance Passport, contracts, insurance certificates, and secure document vault."
  - Bullets: Compliance Passport / Contract archive / Insurance certificates / Secure sharing
  - Image: sector-pharma.jpg
  
  **CV & Profile tab:**
  - "AI-assisted CV management, PSC website preview, and LinkedIn optimisation."
  - Bullets: AI CV rewriting / PSC website builder / LinkedIn sync / Skills tracking
  - Image: sector-nhs-nurse.jpg
  
  **Market Insights tab:**
  - "Sector reports, regulatory updates, and personalised market intelligence."
  - Bullets: Weekly intelligence briefing / Sector-specific analysis / IR35 updates / Budget impact reports
  - Image: sector-rail-worker.jpg
  
  **Career Strategy tab:**
  - "Skills gap analysis, benchmarking, retirement modelling, and negotiation coaching."
  - Bullets: Skills gap radar / Certification ROI analysis / Retirement projections / Negotiation toolkit
  - Image: sector-energy.jpg

### Section 3: Mobile (White background)
- H2: "Your Career Intelligence. In Your Pocket."
- Split layout: text left, phone mockup concept right
  - "Push notifications for rate changes and market movements"
  - "Share your Compliance Passport with a tap"
  - "Assignment calendar synced to your phone"
  - "Secure document access anywhere"
- Use hero-it-developer-london.jpg or similar as the visual

### Section 4: Security (Dark background)
- H2: "Your Data Is Yours."
- 4 trust cards in a row:
  - 🔒 End-to-End Encryption — "All data encrypted in transit and at rest"
  - 🛡️ GDPR Compliant — "Full GDPR compliance, data stored in the UK"
  - 📋 SOC 2 (Planned) — "Enterprise-grade security certification in progress"
  - 🏢 ISO 27001 (Planned) — "Information security management standard"
- Below: "We never share your data with agencies or clients without your explicit consent."

### Section 5: Roadmap (Cream background)
- H2: "What's Coming Next."
- 3 cards with timeline:
  - **Q2 2026** — "Rate Intelligence v2" — "Enhanced geographic mapping, real-time rate alerts, and sector prediction models."
  - **Q3 2026** — "Mobile App" — "Native iOS and Android app with push notifications and biometric login."
  - **Q4 2026** — "API & Integrations" — "Connect your accounting software, invoicing tools, and agency portals directly."

### Section 6: Early Adopter (Teal #0D7377 background)
- H2: "Join Now and Shape the Product."
- 4 benefit bullets:
  - Priority access to new features
  - Direct input on the product roadmap
  - Founding Member badge on your profile
  - Locked-in pricing (current rate guaranteed)
- Large counter: "487 contractors on the waitlist" (animated counter)
- Button: [Join the Waitlist] white pill

### Footer

---

## TECHNICAL REQUIREMENTS

1. Each page: single HTML file in repo root
2. Load shared CSS (normalize.css, webflow.css, ig2-c49518.webflow.css)
3. Page-specific styles in <style> block
4. GSAP animations: fade-ups, staggers, counters, tab switching
5. Nav + footer from index.html (updated links)
6. Mobile responsive: 992px, 768px, 480px breakpoints
7. Tab interface: JavaScript click handlers, content panels cross-fade
8. All sector images MUST be used — spread across all 3 pages
9. ZERO mentions of Ricson, RPS, supply chain, fees, margin

## NAV LINKS
About → about.html | Services → services.html | Join → join.html | Rate Intelligence → rate-intelligence.html | Compliance Passport → compliance-passport.html | Portal → portal.html

