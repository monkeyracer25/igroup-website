# iGroup Website — Mega-Menu Nav + SaaS Graphics Integration

## TASK 1: MEGA-MENU NAVIGATION (ALL 14 PAGES)

The current navbar has: About | Services | Insights | Pricing | Contact | [Join iGroup →]

This is too generic. Users can't find Rate Intelligence, Compliance Passport, Career Intelligence etc. from the nav.

### New Nav Structure

Replace the current nav on ALL 14 pages with a mega-menu dropdown under "Services":

```
iGroup (logo)    About    Services ▾    Insights    Pricing    Contact    [Join iGroup →]
```

When hovering/clicking "Services", show a mega-menu dropdown panel:

```
┌─────────────────────────────────────────────────────────────────────────┐
│  INTELLIGENCE              PROTECTION             CAREER               │
│  ─────────────             ──────────              ──────               │
│  📊 Rate Intelligence      🛡️ Compliance Passport   📋 CV Optimisation  │
│  📈 Career Intelligence    📄 Contract Review       🎯 Company Formation│
│  💼 Contractor Portal      🏥 Insurance             🏠 Mortgage & Finance│
│                                                                         │
│  ────────────────────────────────────────────────────────────────────── │
│  Explore all services →                                                 │
└─────────────────────────────────────────────────────────────────────────┘
```

### Implementation Requirements
- Use CSS hover/focus for desktop (no JS dependency — works without webflow.js)
- The mega-menu panel should:
  - Appear on hover over "Services" nav item
  - Have a dark navy (#1A1A2E) background with white text
  - 3-column layout: Intelligence | Protection | Career
  - Each item is a link to its page with a small icon (use emoji or inline SVG)
  - "Explore all services →" link at bottom goes to services.html
  - Smooth fade-in transition (opacity 0→1, 200ms)
  - Proper z-index (above hero content)
  - Close on mouse-leave
- Mobile: on hamburger menu, show all service links in an expandable accordion under "Services"
- The existing Webflow nav HTML structure must be preserved (data-w-id attributes, classes)
- Just ADD the mega-menu as a child element inside the Services nav-menu-item

### Link Mapping
- Rate Intelligence → rate-intelligence.html
- Career Intelligence → career-intelligence.html
- Contractor Portal → portal.html
- Compliance Passport → compliance-passport.html
- Contract Review → services.html#contract-review (anchor on services page)
- Insurance → insurance.html
- CV Optimisation → career-intelligence.html#cv (anchor on career page)
- Company Formation → company-formation.html
- Mortgage & Finance → mortgage-finance.html

### Pages to Update (ALL 14)
index.html, about.html, services.html, join.html, rate-intelligence.html, compliance-passport.html, portal.html, company-formation.html, career-intelligence.html, insurance.html, mortgage-finance.html, insights.html, contact.html, pricing.html

---

## TASK 2: SaaS PRODUCT GRAPHICS INTEGRATION

New generated images are in /images/. Replace the generic sector photography on product pages with these SaaS dashboard graphics.

### Rate Intelligence Page (rate-intelligence.html)
Replace hero/feature images with:
- `rate-trend-graph.jpg` — Use in the "How rates move over time" / trend section. Shows IT Developer London day rates £450-£650 over 12 months.
- `rate-map-heatmap.jpg` — Use in the "Regional rates" / geographic section. Shows UK heat map of DevOps rates by region.

### Career Intelligence Page (career-intelligence.html)
Replace appropriate section images with:
- `cv-skills-gap.jpg` — Use in the skills gap analysis section. Shows radar chart of current skills + gap identification (Kubernetes +£75/day, Terraform +£50/day) + AI trending note.

### Compliance Passport Page (compliance-passport.html)
Replace hero/feature images with:
- `compliance-passport-dashboard.jpg` — Use as the main product showcase. Shows the passport card with credibility score 847, verification checklist with green ticks.

### Portal Page (portal.html)
Replace dashboard showcase images with:
- `portal-dashboard-mockup.jpg` — Use as main portal preview. Shows multi-panel dashboard (rate position, sector donut chart, opportunity notification, compliance status).

### Homepage (index.html)
- `platform-features-grid.jpg` — Use in the "Built on contractor intelligence" / innovation section. Shows the Deel-style pill tag grid of all features (Rate Intelligence, Compliance Passport, CV Optimisation etc).

### Image Integration Rules
- Replace the FIRST relevant section image with the SaaS graphic
- Keep sector photography in other sections (variety is good)
- Don't replace ALL images — mix SaaS graphics with real photography
- Ensure alt text describes the graphic content
- Images are already correctly sized (1792x1024)

---

## TASK 3: DEPLOYMENT

1. Update nav on all 14 pages
2. Integrate graphics on 5 pages
3. Git add, commit, push
4. `npx vercel --prod --yes`
5. Test all 14 URLs return 200
6. Verify mega-menu works on at least 3 pages (hover on Services → dropdown appears)
