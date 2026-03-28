# iGroup Design System — As Built (v10)
## Reference for all new pages — match this exactly

---

## Overview

The iGroup website is built from a Verdentix Webflow export with surgical content/image replacement. The design language, animation system, and component library from the Webflow source are the design system. All new pages MUST match this aesthetic.

**DO NOT** use the iGroup Brand Guidelines document (BRAND-GUIDELINES.md) for the website. That's a separate exercise. The website design system is what's documented here — extracted from the live site.

---

## Colour Palette (As Built)

### CSS Custom Properties

```css
--_colors---background: #fff;
--_colors---foreground: #1A1A2E;
--_colors---brand-primary: #0D7377;        /* Deep teal — primary accent */
--_colors---text-primary: #1A1A2E;         /* Dark navy/charcoal */
--_colors---text-secondary: color-mix(in hsl, #1A1A2E 85%, #fff 15%);
```

### Colour Usage

| Colour | Hex | Usage |
|--------|-----|-------|
| Deep Teal | `#0D7377` | Primary accent, CTAs, links, icons, badges, hover borders |
| Dark Foreground | `#1A1A2E` | Headings, body text, dark section backgrounds |
| White | `#FFFFFF` | Page background, card backgrounds, text on dark |
| Cream/Off-White | `#F5F0E8` | Alternate section backgrounds, soft contrast |
| Light Grey | `#f5f3f0` | Section backgrounds, card alt |
| Border Grey | `#e3e8f0` | Borders, dividers |

### Section Colour Pattern
The homepage alternates:
1. White sections (about, FAQ)
2. Cream/off-white sections (innovations, blog)
3. Dark navy (#1A1A2E) sections (solutions, CTA)

New pages should follow this alternating light/dark rhythm.

---

## Typography

### Fonts

```css
--fonts--normal-font: Manrope, sans-serif;    /* Everything */
--fonts--special-font: Manrope, sans-serif;   /* Mega headings (footer "iGROUP") */
```

Manrope is loaded via Google Fonts (weights 300-700).

### Type Scale

| Level | Size (desktop) | Size (mobile) | Weight | Letter Spacing | Line Height |
|-------|---------------|---------------|--------|---------------|-------------|
| Mega | 12rem | 5rem | 500 | -0.03em | 0.85 |
| H1 | 4rem | 2.5rem | 500 | -0.03em | 1.1 |
| H2 | 2.5rem | 1.75rem | 500 | -0.02em | 1.2 |
| H3 | 2rem | 1.5rem | 500 | -0.015em | 1.3 |
| H4 | 1.5rem | 1.25rem | 500 | -0.01em | 1.3 |
| H5 | 1.25rem | 1.125rem | 500 | -0.005em | 1.4 |
| H6 | 1.125rem | 1rem | 500 | 0 | 1.5 |
| Body | 1.25rem | 1rem | 400 | 0 | 1.5 |
| Body Large | 1.375rem | 1.25rem | 400 | 0 | 1.5 |
| Body Small | 1.125rem | 1rem | 400 | 0 | 1.5 |

Font weight 500 (medium) is the standard heading weight — NOT bold (700).

---

## Spacing & Sizing

### Section Padding

```css
--_sizing---section--section-padding-y: 120px;   /* Desktop: 120px */
--_sizing---section--section-padding-x: 48px;     /* Desktop: 48px */
/* Mobile: 80px vertical, 20px horizontal */
```

### Spacing Tokens

| Token | Desktop | Mobile |
|-------|---------|--------|
| spacing-xs | 4px | 4px |
| spacing-sm | 16px | 12px |
| spacing-md | 24px | 16px |
| spacing-lg | 48px | 32px |
| spacing-xl | 64px | 48px |
| spacing-2xl | 96px | 64px |

### Container Widths

```css
--_sizing---container--small: 1280px;
--_sizing---container--large: 1440px;
--_sizing---container--full: 100vw;
```

### Border Radius

| Token | Desktop | Mobile |
|-------|---------|--------|
| radius-none | 0 | 0 |
| radius-xs | 4px | 2px |
| radius-sm | 8px | 6px |
| radius-md | 12px | 8px |
| radius-lg | 16px | 12px |
| radius-xl | 24px | 20px |
| radius-2xl | 32px | 24px |
| radius-full | 100vw | 100vw |

---

## Components (As Built)

### Navigation (Sticky)

- Height: ~72px
- Background: transparent over hero → solid on scroll
- Logo: "iGroup" text in Manrope 500, 22px, #0D7377, letter-spacing -0.5px
- Nav links: Manrope 400, text-primary colour
- 5 nav links + 1 CTA button
- CTA button: teal background, white text, radius-full (pill), arrow icon
- Mobile: hamburger toggle → vertical icon animation

### Buttons

**Primary (Teal Pill)**
```css
background: #0D7377;
color: white;
border-radius: 100vw;   /* Full pill */
padding: 14px 28px;
font: Manrope 500 1rem;
/* Hover: slight lighten, icon slides */
```

**Dark Button**
```css
background: #1A1A2E;
color: white;
border-radius: 100vw;
/* Used in dark sections */
```

**Outline/Ghost**
```css
background: transparent;
border: 1.5px solid currentColor;
border-radius: 100vw;
```

All buttons use the Verdentix slide-up text reveal on hover + arrow-circle icon pattern.

### Cards

**Service/Innovation Card**
- Background: white or cream
- Radius: radius-lg (16px)
- Padding: 32px
- Hover: translateY(-2px), subtle shadow increase
- Number prefix: "01" "02" "03" in teal, large weight

**Solution Card (Dark)**
- Background: dark section inline
- Numbered list with teal numbers
- Stats inline with icon circles

**Blog Card**
- Image top (16:9), radius on top corners
- Title, excerpt, date, read time
- Hover: image slight zoom

**Stats Card (Hero)**
- Compact, overlaid on hero
- Large number (teal), label below
- Counter animation on scroll

### Badges

**Section Badge (Eyebrow)**
- Small teal icon + text
- Font: Manrope 500, small
- Colour: teal
- Used above section headings: "01", "02", etc.

### Accordion (FAQ)

- Question: Manrope 500, 1.25rem
- Toggle: + / − icon, rotates on open
- Answer: body text, fades in
- Border-bottom divider between items
- Smooth height transition

### Footer

- Background: #1A1A2E (dark)
- "iGROUP" mega text: special font, ~12rem, very faint white (opacity ~0.03)
- 4-column link grid
- Social icons: LinkedIn, Twitter/X, Facebook, Instagram
- Copyright bar at bottom

---

## Animation System (GSAP/Webflow IX2)

### Engine
The homepage uses Webflow's IX2 interaction engine (webflow.js) with GSAP 3.14.2:
- `gsap.min.js`
- `ScrollTrigger.min.js`
- `SplitText.min.js`

IX2 binds via `data-w-id` attributes on elements. The `data-wf-page` and `data-wf-site` attributes on `<html>` are REQUIRED for animations to fire.

### Animation Patterns Used

1. **Letter-by-Letter Reveal** — `.gsap_split_letter` class. SplitText splits heading into chars, each fades in with 0.02s stagger. Triggered on scroll.
2. **Word-by-Word Reveal** — `.gsap_split_word` class. Same but word-level.
3. **Section Fade-Up** — Elements start opacity:0, translateY(40px). Animate to visible on scroll entry. Stagger: 0.1s.
4. **Counter Animation** — Stat numbers count from 0 to target over ~1.5s on scroll.
5. **Card Hover Lift** — translateY(-4px) + shadow increase on hover, 250ms ease.
6. **Carousel** — Horizontal scroll for service cards.
7. **Accordion Expand** — max-height + opacity for FAQ items.
8. **Hero Image Crossfade** — 4 rotating images, 5-second interval, opacity transition 1.2s ease-in-out.
9. **Navbar Transition** — transparent → solid background on scroll.

### For New Pages

New pages should use GSAP ScrollTrigger directly (NOT webflow.js — that's homepage-specific). Replicate the same patterns:

```html
<!-- Load in every page -->
<script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.14.2/gsap.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.14.2/ScrollTrigger.min.js"></script>
```

Implement fade-ups, letter reveals, and counters with vanilla GSAP ScrollTrigger. Match timing and easing from the homepage.

---

## Responsive Breakpoints

| Breakpoint | Width | Target |
|-----------|-------|--------|
| Desktop | 992px+ | Full layout |
| Tablet | 768px–991px | 2-col grids, reduced padding |
| Mobile landscape | 480px–767px | Single column, hamburger nav |
| Mobile portrait | <480px | Compact, stacked |

### Key Responsive Rules
- Hero text scales down via CSS clamp or media queries
- Card grids: 3-col → 2-col → 1-col
- Navigation: full bar → hamburger at ≤991px
- Section padding: 120px → 80px vertical
- Images: lazy-load all below fold
- Tables: stack to cards on mobile

---

## Icon System

### Current: Custom SVGs (Ikonik-derived, replaced)
All icons are inline SVGs in the `/images/` directory. Current set:

| Icon File | Represents | Used In |
|-----------|-----------|---------|
| icon_farm_white.svg | Shield / Compliance | Stats sections |
| icon_tractor_white.svg | Briefcase / Business | Solution stats |
| icon_leaf_green.svg | Checkmark / Verified | About badges |
| icon_brain_green.svg | Chart / Analytics | About badges |
| icon_rocket_green.svg | Globe / Global (teal) | About badges |
| icon_rocket_white.svg | Globe / Global (white) | Dark sections |
| icon_map_white.svg | Document / Contract | Multiple sections |
| icon_right*.svg | Arrow right | Buttons, links |
| icon_arrow_white.svg | Arrow diagonal | CTA links |
| icon_play/pause.svg | Media controls | Hero video |

### For New Pages: Lucide Icons
Use Lucide (https://lucide.dev) for any new icons needed. Download as individual SVGs, match the 2px stroke weight, set `stroke="currentColor"` for theming. Colour via CSS or inline `fill`/`stroke` matching #0D7377 (teal) or white.

---

## Image Guidelines

### Photography
- Diverse, international professionals
- Cities: London, Dubai, New York, Singapore, Sydney
- Industries: IT, engineering, finance, energy, construction, pharma
- Tone: confident, global, purposeful
- Source: AI-generated (Nano Banana Pro) or stock (Unsplash)

### Formats
- Hero images: JPG, max 400KB, loaded eager
- Card thumbnails: JPG/WebP, max 100KB
- Icons/logos: SVG always
- Dashboard mockups: PNG or WebP

### Existing Hero Images (Reusable)
- `hero-it-developer-london.jpg` — IT contractor in London
- `hero-arab-businessman.jpg` — Business professional
- `hero-oil-rig-manager.jpg` — Engineering/energy
- `hero-engineer-woman.jpg` — Female engineer on site

---

## File Structure (Multi-Page)

```
/
├── index.html                    (Homepage — DO NOT CHANGE DESIGN)
├── about.html
├── services.html
├── rate-intelligence.html
├── compliance-passport.html
├── portal.html
├── company-formation.html
├── career-intelligence.html
├── insurance.html
├── mortgage-finance.html
├── insights.html
├── contact.html
├── join.html
├── pricing.html
├── css/
│   ├── normalize.css             (Shared)
│   ├── webflow.css               (Shared)
│   ├── ig2-c49518.webflow.css    (Shared — contains all design tokens)
│   └── pages.css                 (NEW — any page-specific overrides)
├── js/
│   ├── webflow.js                (Homepage IX2 — DO NOT MODIFY)
│   ├── gsap.min.js               (CDN or local)
│   ├── ScrollTrigger.min.js      (CDN or local)
│   └── pages.js                  (NEW — GSAP animations for inner pages)
├── images/                       (All images, icons, logos)
└── videos/                       (Video backgrounds if used)
```

### Critical Rule
New pages load the SAME CSS files (normalize.css, webflow.css, ig2-c49518.webflow.css) to inherit all design tokens, typography, spacing, component styles. They add `pages.css` for any overrides. They do NOT load webflow.js (that's homepage IX2 only) — they use GSAP directly via `pages.js`.

---

## Page Template

Every new page should follow this HTML skeleton:

```html
<!DOCTYPE html>
<html lang="en" data-wf-page="" data-wf-site="">
<head>
  <meta charset="utf-8">
  <title>[Page Title] | iGroup</title>
  <meta name="description" content="[Page description]">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <link href="css/normalize.css" rel="stylesheet">
  <link href="css/webflow.css" rel="stylesheet">
  <link href="css/ig2-c49518.webflow.css" rel="stylesheet">
  <link href="css/pages.css" rel="stylesheet">
  <link href="https://fonts.googleapis.com/css2?family=Manrope:wght@300;400;500;600;700&display=swap" rel="stylesheet">
</head>
<body>
  <!-- Navbar (same as homepage) -->
  <!-- Page sections -->
  <!-- Footer (same as homepage) -->
  
  <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.14.2/gsap.min.js"></script>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.14.2/ScrollTrigger.min.js"></script>
  <script src="js/pages.js"></script>
</body>
</html>
```

---

*This is the source of truth for how the iGroup website looks. Match this. Don't improvise.*
