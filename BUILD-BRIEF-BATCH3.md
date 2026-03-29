# iGroup Website — Batch 3: Remaining Pages + Site Coherence

## OVERVIEW
Build the final 7 pages, then fix navigation across ALL 14 pages so the site works as one coherent whole.

**Repo:** /tmp/igroup-v10 (run `git pull origin main` first)

### Design System — SAME AS BATCHES 1 & 2
- Manrope font, 500 headings, 400 body
- Teal #0D7377, Dark #1A1A2E, Cream #F5F0E8, White
- Pill buttons, 16px radius cards, alternating section backgrounds
- GSAP ScrollTrigger animations, shared CSS files
- Study services.html or rate-intelligence.html as inner page reference

### Available Images (in /images/)
sector-nhs-nurse.jpg, sector-social-care.jpg, sector-it-developer.jpg, sector-rail-worker.jpg, sector-pharma.jpg, sector-energy.jpg, dashboard-mockup.jpg, compliance-passport-hero.jpg, services-hero.jpg, about-hero.jpg, about-story.jpg, join-hero.jpg, office-dubai.jpg, office-london.jpg, services-intelligence.jpg, hero-it-developer-london.jpg, hero-arab-businessman.jpg, hero-oil-rig-manager.jpg, hero-engineer-woman.jpg

---

## PAGE 1: company-formation.html — Process / Guide Page

### Hero (Dark background)
- Image: hero-arab-businessman.jpg as background with dark overlay
- Eyebrow: "COMPANY FORMATION"
- H1: "Your Limited Company. Set Up in Days, Not Weeks."
- Sub: "We handle the paperwork, the bank accounts, the registrations — so you can focus on what you're actually good at."
- Buttons: [Start Your Company] teal, [What's Involved? ↓] outline

### Section 2: Why Go Limited? (Cream)
- H2: "Three Reasons to Make the Move."
- 3 cards:
  - **Tax Efficiency** — "Keep more of what you earn. Limited company contractors typically take home 10-15% more than umbrella equivalents."
  - **Professional Credibility** — "Clients and agencies prefer working with PSCs. A limited company signals commitment and professionalism."
  - **Career Control** — "You're the director. You choose your assignments, set your terms, and build equity in your own business."

### Section 3: The Process (White)
- H2: "Five Steps. Five Days. Done."
- Vertical stepper timeline (5 steps with connecting line):
  1. **Initial Consultation** — "We understand your situation and confirm limited is right for you. No hard sell."
  2. **Company Incorporation** — "We file with Companies House. Your company exists within 24 hours."
  3. **Bank Account Setup** — "Business account opened with our banking partners. Funds flowing within days."
  4. **HMRC Registration** — "Corporation tax, PAYE, VAT if needed — all registered correctly first time."
  5. **Ready to Trade** — "Your PSC is live. Compliance Passport started. First assignment ready."

### Section 4: What's Included (Dark)
- H2: "Everything You Need. Nothing You Don't."
- 2-column checklist (teal checkmarks):
  ✓ Companies House filing | ✓ Memorandum & Articles
  ✓ Bank account introduction | ✓ HMRC registrations
  ✓ Registered office address | ✓ First-year compliance setup
  ✓ Insurance guidance | ✓ Compliance Passport initiated

### Section 5: Common Concerns FAQ (Cream)
- H2: "Questions We Hear Every Day."
- 5 accordion items:
  1. "Is it complicated?" — "Not with us. We handle the paperwork. You sign where we tell you."
  2. "How much does it cost?" — "Our formation service is included in your iGroup membership. No hidden fees."
  3. "What about IR35?" — "We provide full IR35 status determination support. You'll know exactly where you stand before you start."
  4. "Can I switch back to umbrella?" — "Of course. But in our experience, once contractors see the difference, they never go back."
  5. "How long does it take?" — "Company live in 24 hours. Bank account in 3-5 days. Trading within a week."

### Section 6: Testimonial (White)
- Quote: "I'd been putting off going limited for 2 years. iGroup had my company set up in 3 days and I saved £8,000 in the first year."
- Name: "James Hartley", Role: "Mechanical Engineer, Manchester"
- Image: sector-energy.jpg (circular avatar)

### CTA (Teal)
- "Ready to keep more of what you earn?" [Start Your Company] + [Join iGroup — It's Free]

---

## PAGE 2: career-intelligence.html — Data Showcase Page

### Hero (Dark)
- Eyebrow: "CAREER INTELLIGENCE"
- H1: "Stop Drifting. Start Strategising."
- Sub: "Skills gap analysis, market benchmarking, retirement modelling, and negotiation coaching — powered by data, delivered by experts."
- 3 animated stat counters: "£47K average rate uplift" / "89% untapped potential" / "15+ sectors benchmarked"

### Section 2: Skills Gap Analysis (Cream)
- Split: radar chart concept (left) + text (right)
- H3: "Find Your Fastest Path to Higher Earnings."
- "Our AI analyses real market data to show exactly which certifications, skills, and experience will increase your rate the most."
- Example callout: "Adding AWS Solutions Architect = +£75/day based on current market data"
- Image: sector-it-developer.jpg

### Section 3: Benchmarking (White)
- Split: text (left) + image (right)
- H3: "Know Where You Sit."
- "See exactly where your rate positions you within your sector. Top quartile? Bottom? Our benchmarking shows your precise position and what it takes to move up."
- Image: sector-nhs-nurse.jpg

### Section 4: Retirement Modelling (Dark)
- H3: "When Could You Stop? What Do You Need to Save?"
- Warm, aspirational section with timeline concept showing: current earnings → projected savings → retirement date
- "At your current trajectory, you could step back at 55. Add one certification and bring that forward to 53."
- Image: sector-social-care.jpg

### Section 5: Negotiation Coaching (Cream)
- H3: "Walk In Prepared. Walk Out Paid."
- 3 scenario cards:
  - "First Rate Negotiation" — Know your market value, present evidence, set the anchor
  - "Renewal Discussion" — Market movement data, competitor analysis, value justification
  - "Market Downturn" — Diversification strategies, rate protection, sector switching
- Image: hero-arab-businessman.jpg

### Section 6: Diversification (White)
- H3: "Don't Put All Your Eggs in One Sector."
- "Contractors with experience across 2+ sectors command 18% higher rates on average."
- Visual: sector tag badges showing diversification concept
- Image: sector-rail-worker.jpg

### CTA (Teal)
- "Your career deserves a strategy." [Get Your Career Report] + [Join iGroup]

---

## PAGE 3: insurance.html — Comparison / Trust Page

### Hero (Dark)
- Image: hero-engineer-woman.jpg background with overlay
- Eyebrow: "INSURANCE & PROTECTION"
- H1: "Corporate-Level Cover. Contractor-Level Pricing."
- Sub: "Group buying power means you pay less for more."
- Buttons: [See Group Rates] teal, [Get a Quote] outline

### Section 2: The Group Advantage (Cream)
- Large stat: "35%" with "average savings on insurance premiums vs individual policies"
- Explanation of group buying power (2-3 sentences)

### Section 3: Coverage Options (White)
- H2: "Six Types of Cover. One Group Rate."
- 3×2 card grid:
  - **Professional Indemnity** — "Required by most clients. We negotiate bulk terms." From £XX/month
  - **Public Liability** — "On-site work covered. Group policy, individual protection." From £XX/month
  - **Income Protection** — "If you can't work, your income doesn't stop." From £XX/month
  - **Cyber Insurance** — "Increasingly required for IT contractors." From £XX/month
  - **Private Health** — "Corporate-grade private medical. No waiting lists." From £XX/month
  - **Life & Critical Illness** — "Protect your family at group rates." From £XX/month

### Section 4: Comparison Table (Dark)
- H2: "Individual vs iGroup Group Rates"
- Table: Coverage Type | Individual | iGroup | You Save
- 6 rows (one per insurance type) with example savings
- Total annual saving highlighted in teal at bottom

### Section 5: How It Works (Cream)
- 3 steps: Choose your cover → We handle the admin → Pay less, worry less
- Image: sector-pharma.jpg

### CTA (Teal)
- "Better cover. Lower cost. Zero hassle." [Get Your Group Rate Quote]

---

## PAGE 4: mortgage-finance.html — Empathetic / Pain-Point Page

### Hero (Dark, empathetic tone)
- Image: about-story.jpg background with warm dark overlay
- Eyebrow: "MORTGAGE & FINANCE"
- H1: "Getting a Mortgage Shouldn't Be This Hard."
- Sub: "Contractors are turned down more than any other professional group. We change that."
- Buttons: [Talk to a Specialist] teal, [How We Help ↓] outline

### Section 2: The Pain (Cream)
- H2: "Sound Familiar?"
- 3 scenario cards (slightly red/grey tinted):
  - "Your mortgage application was rejected because you don't have 3 years of accounts"
  - "The bank doesn't understand contractor income and wants payslips"
  - "You've been told to wait until you've been trading for 2 years"
- Below: "We hear this every day. There's a better way."

### Section 3: Our Solution (White)
- H2: "Specialist Brokers Who Understand Contractors."
- 3 icon+text blocks:
  - Rate data proves income stability
  - Compliance Passport proves professional status
  - Specialist brokers understand day rates
- Image: sector-social-care.jpg

### Section 4: Pension Consolidation (Dark)
- H2: "You've Got Pension Pots Everywhere."
- Visual concept: scattered pots → consolidated
- "Multiple umbrellas, scattered contributions, lost track. We help you find, consolidate, and plan."
- Image: sector-energy.jpg

### Section 5: Banking Partnerships (Cream)
- H2: "Business Banking That Actually Works."
- "Preferential rates and terms negotiated by iGroup for our members."
- Partner mentions: Tide, Starling, etc.

### Section 6: Testimonial (White)
- "After being rejected by 3 high street banks, iGroup's mortgage broker got me approved in 2 weeks."
- Name: "David Chen", Role: "DevOps Engineer, Bristol"

### CTA (Teal)
- "Your income is legitimate. Your mortgage should be too." [Connect with a Mortgage Specialist]

---

## PAGE 5: insights.html — Content Grid / Blog Hub

### Hero (Dark, typographic — no background image)
- Eyebrow: "INSIGHTS & INTELLIGENCE"
- H1: "Market Intelligence. Delivered."
- Sub: "Rate trends, regulatory updates, sector analysis, and career advice — from the team that lives and breathes contractor intelligence."

### Section 2: Featured Article (Cream)
- Large featured card: image (services-hero.jpg), title "IR35 in 2026: What Every Contractor Needs to Know", excerpt, date, read time
- Full width, prominent

### Section 3: Category Filters (White)
- Horizontal tag bar: All | Rate Trends | Regulatory | Sector Analysis | Career Advice | IR35 | Tax Updates
- Clickable (filters grid below — JS toggle visibility)

### Section 4: Article Grid (White, continuation)
- 3-column grid, 6 articles:
  1. "Chapter 11: What Joint & Several Liability Means for You" — sector-nhs-nurse.jpg
  2. "Contractor Rates Q1 2026: The Sectors Paying Most" — sector-it-developer.jpg
  3. "5 Certifications That Will Increase Your Day Rate" — sector-rail-worker.jpg
  4. "Mortgage Success: How Contractors Are Getting Approved" — about-story.jpg
  5. "The Rise of AI in Contractor Management" — dashboard-mockup.jpg
  6. "Pension Planning: Don't Leave It Until It's Too Late" — sector-social-care.jpg
- Each card: thumbnail (16:9), category tag, title, excerpt (2 lines), date

### Section 5: Newsletter CTA (Teal)
- "Get the weekly intelligence briefing. Every Monday."
- Email input + [Subscribe] button

---

## PAGE 6: contact.html — Clean Professional

### Hero (Dark, minimal — no image)
- H1: "Let's Talk."
- Sub: "Whether you're ready to join or just have questions — we're here."

### Section 2: Contact Methods (Cream)
- 3 cards:
  - **Email** — hello@igroup.com, "Response within 24 hours"
  - **Phone** — +44 (0) 1624 555 000, "Mon-Fri, 9am-6pm GMT"
  - **Live Chat** — "Chat with our team", "Available during business hours"

### Section 3: Contact Form (White)
- Fields: Name, Email, Phone (optional), "I'm interested in..." (dropdown: Joining iGroup / Rate Intelligence / Company Formation / Compliance Passport / Partnership / Other), Message
- [Send Message] teal button
- Success state on submit

### Section 4: Global Offices (Dark)
- H2: "Four Offices. One Platform."
- 4 cards:
  - **Isle of Man (HQ)** — office-london.jpg (reuse), "Global headquarters"
  - **London** — office-london.jpg, "UK operations"
  - **Guernsey** — hero-engineer-woman.jpg, "Regulatory centre"
  - **Dubai** — office-dubai.jpg, "International expansion"

### Section 5: FAQ (Cream)
- 5 items: How much does it cost? / How quickly can I start? / Do I need a limited company? / What sectors? / Try before commit?

### CTA (Teal)
- "Ready to take control?" [Join iGroup]

---

## PAGE 7: pricing.html — Pricing Grid

### Hero (Dark, minimal)
- Eyebrow: "PRICING"
- H1: "Transparent. Fair. Built for Contractors."
- Sub: "No hidden fees. No lock-in. Start free, upgrade when you're ready."

### Section 2: Pricing Tiers (Cream)
- 3 cards, centre one highlighted (teal border, "Most Popular" badge):

**Starter (Free)**
- Rate intelligence (quarterly)
- Compliance Passport (basic)
- Market intelligence newsletter
- Community access
- [Join Free] teal outline

**Professional (£49/month)** ⭐ RECOMMENDED
- Everything in Starter, plus:
- Monthly rate intelligence + alerts
- Full Compliance Passport
- Credibility Score
- CV & LinkedIn optimisation
- Contract review (2/year)
- Group insurance access
- Dedicated relationship manager
- [Start Professional] teal solid

**Enterprise (Custom)**
- Everything in Professional, plus:
- Unlimited contract reviews
- Priority career consulting
- Retirement modelling
- Mortgage broker introduction
- Pension consolidation
- API access (when available)
- [Contact Us] teal outline

### Section 3: Feature Comparison Table (White)
- Detailed table: rows for every feature, columns for 3 tiers
- Teal ✓ for included, — for not included
- Expandable category sections

### Section 4: FAQ (Dark)
- 6 items: Change tiers? / Contract? / £250 bonus? / VAT? / Expense it? / Between assignments?

### Section 5: ROI Calculator (Cream)
- H2: "What's iGroup Worth to You?"
- Interactive: slider for current day rate (£200-£1000), slider for days worked (100-260)
- Output: "If rate intelligence increases your rate by just £25/day, you'd earn an extra £X,XXX/year. That's Xx your membership."
- [Join Free] button

### CTA (Teal)
- "Start free. See the value. Upgrade when you're ready." [Join iGroup — It's Free]

---

## SITE COHERENCE FIX (CRITICAL — DO THIS AFTER ALL PAGES BUILT)

After all 7 pages are built, update the navigation on EVERY page (including index.html and all batch 1+2 pages) to be consistent:

### Navbar Links (all pages)
```
About → about.html
Services → services.html (with dropdown/mega-menu if possible, otherwise just link)
Insights → insights.html
Pricing → pricing.html
Contact → contact.html
[Join iGroup] → join.html (teal CTA button)
```

### Footer Links (all pages — 4 columns)
**Company:** About | Careers | Contact | Pricing
**Services:** Rate Intelligence | Compliance Passport | Contractor Portal | Company Formation | Career Intelligence | Insurance | Mortgage & Finance
**Resources:** Insights & Blog | Market Reports | IR35 Guide | FAQ
**Legal:** Privacy Policy | Terms of Service | Cookie Policy

### Cross-Page Links
- Service cards on services.html should link to their respective pages
- "Learn more →" links should work
- CTAs should point to join.html
- Footer consistent across ALL 14 pages

### Nav Updates Required On:
- index.html
- services.html
- about.html
- join.html
- rate-intelligence.html
- compliance-passport.html
- portal.html
- company-formation.html (new)
- career-intelligence.html (new)
- insurance.html (new)
- mortgage-finance.html (new)
- insights.html (new)
- contact.html (new)
- pricing.html (new)

