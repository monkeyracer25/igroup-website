# iGroup Design System v1.0

> The complete design language for iGroup's multi-page website.
> Every decision here serves one goal: make contractors feel like they've found their people.

---

## 1. Brand Overview

### Positioning
iGroup is a **global AI-powered workforce management platform** that works exclusively for contractors. Not an agency. Not an umbrella. Not a middleman. The "football agent for contractors" — a trusted advisor with real technology behind it.

### Brand Personality
- **Authoritative** — We know the contractor world inside out
- **Tech-forward** — AI, dashboards, data — not clipboards and cold calls
- **Global** — London, Dubai, Isle of Man, Guernsey — and beyond
- **Warm** — We work for YOU. This is personal.
- **Premium** — Top-tier SaaS/fintech aesthetic, never recruitment-agency vibes

### Tagline
**"We work for YOU"**

### Voice
Direct. Confident. Jargon-light. Contractor-first. Every sentence answers "what's in it for me?"

---

## 2. Colour Palette

### Primary Colours

| Token | Hex | Usage |
|-------|-----|-------|
| `--color-navy` | `#0A1628` | Primary dark backgrounds, hero sections, footer, nav |
| `--color-navy-mid` | `#0D2040` | Secondary dark sections, alternating dark panels |
| `--color-teal` | `#00C4B4` | Primary accent, CTAs, links, active states, data viz |
| `--color-teal-light` | `#4DD9CC` | Hover states, secondary highlights, icon backgrounds |
| `--color-gold` | `#F5A623` | Premium features, secondary CTAs, badges, star ratings |

### Neutral Colours

| Token | Hex | Usage |
|-------|-----|-------|
| `--color-bg` | `#F4F6F9` | Page background, light sections |
| `--color-surface` | `#FFFFFF` | Cards, modals, form inputs |
| `--color-border` | `#E2E6EC` | Card borders, dividers, input borders |
| `--color-border-light` | `#F0F2F5` | Subtle separators |
| `--color-text-primary` | `#0A1628` | Headings on light backgrounds |
| `--color-text-secondary` | `#4A5568` | Body text, descriptions |
| `--color-text-muted` | `#8896A6` | Captions, timestamps, helper text |
| `--color-text-inverse` | `#FFFFFF` | Text on dark backgrounds |
| `--color-text-inverse-muted` | `#A0B0C4` | Secondary text on dark backgrounds |

### Semantic Colours

| Token | Hex | Usage |
|-------|-----|-------|
| `--color-success` | `#10B981` | Compliance verified, positive metrics |
| `--color-warning` | `#F59E0B` | Pending items, attention needed |
| `--color-error` | `#EF4444` | Errors, expired documents |
| `--color-info` | `#3B82F6` | Informational badges, tips |

### Gradients

```css
/* Hero gradient — navy to navy-mid with teal glow */
--gradient-hero: linear-gradient(135deg, #0A1628 0%, #0D2040 60%, #0A1628 100%);

/* Teal accent gradient — for CTAs, feature highlights */
--gradient-teal: linear-gradient(135deg, #00C4B4 0%, #4DD9CC 100%);

/* Gold premium gradient — for premium badges, special CTAs */
--gradient-gold: linear-gradient(135deg, #F5A623 0%, #FBBF24 100%);

/* Dark section overlay — for video/image backgrounds */
--gradient-overlay: linear-gradient(180deg, rgba(10,22,40,0.85) 0%, rgba(13,32,64,0.95) 100%);

/* Subtle radial glow — background decoration on dark sections */
--gradient-glow-teal: radial-gradient(ellipse at 30% 50%, rgba(0,196,180,0.08) 0%, transparent 60%);
--gradient-glow-gold: radial-gradient(ellipse at 70% 50%, rgba(245,166,35,0.06) 0%, transparent 60%);
```

### Colour Usage Rules
1. **Dark sections** (navy/navy-mid): Use for hero, major feature showcases, footer, alternating content breaks
2. **Light sections** (bg/surface): Use for body content, service grids, forms, comparison tables
3. **Teal**: Never use for body text. Reserve for interactive elements, accents, and data
4. **Gold**: Use sparingly — premium features, sign-up bonus, special offers only
5. **Contrast**: All text must meet WCAG AA minimum (4.5:1 body, 3:1 large text)

---

## 3. Typography

### Font Stack

```css
/* Headings */
--font-heading: 'Be Vietnam Pro', system-ui, -apple-system, sans-serif;

/* Body */
--font-body: 'Inter', system-ui, -apple-system, sans-serif;

/* Mono (code, data, stats) */
--font-mono: 'JetBrains Mono', 'Fira Code', monospace;
```

### Loading
```html
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Be+Vietnam+Pro:wght@300;400;500;600;700;800;900&family=Inter:wght@300;400;500;600;700&display=swap" rel="stylesheet">
```

### Type Scale

| Token | Size (desktop) | Size (mobile) | Weight | Font | Line Height | Letter Spacing |
|-------|---------------|---------------|--------|------|-------------|----------------|
| `--text-display` | 72px / 4.5rem | 40px / 2.5rem | 700 | Be Vietnam Pro | 1.05 | -0.02em |
| `--text-h1` | 56px / 3.5rem | 32px / 2rem | 700 | Be Vietnam Pro | 1.1 | -0.02em |
| `--text-h2` | 40px / 2.5rem | 28px / 1.75rem | 600 | Be Vietnam Pro | 1.15 | -0.01em |
| `--text-h3` | 28px / 1.75rem | 22px / 1.375rem | 600 | Be Vietnam Pro | 1.25 | -0.01em |
| `--text-h4` | 22px / 1.375rem | 18px / 1.125rem | 600 | Be Vietnam Pro | 1.3 | 0 |
| `--text-h5` | 18px / 1.125rem | 16px / 1rem | 600 | Be Vietnam Pro | 1.4 | 0 |
| `--text-body-lg` | 18px / 1.125rem | 16px / 1rem | 400 | Inter | 1.7 | 0 |
| `--text-body` | 16px / 1rem | 16px / 1rem | 400 | Inter | 1.7 | 0 |
| `--text-body-sm` | 14px / 0.875rem | 14px / 0.875rem | 400 | Inter | 1.6 | 0 |
| `--text-caption` | 12px / 0.75rem | 12px / 0.75rem | 500 | Inter | 1.5 | 0.02em |
| `--text-overline` | 13px / 0.8125rem | 12px / 0.75rem | 600 | Inter | 1.4 | 0.08em |
| `--text-stat` | 48px / 3rem | 32px / 2rem | 800 | Be Vietnam Pro | 1.0 | -0.02em |

### Typography Rules
1. **Headings on dark backgrounds**: `--color-text-inverse` (#FFFFFF), weight 700
2. **Headings on light backgrounds**: `--color-navy` (#0A1628), weight 600–700
3. **Body text**: Always `--color-text-secondary` (#4A5568) on light, `--color-text-inverse-muted` (#A0B0C4) on dark
4. **Overline text**: Always uppercase, `--color-teal` on both light and dark
5. **Stats/numbers**: Use `--text-stat` with `--font-mono` for data-heavy displays
6. **Max line width**: 680px for body text (readability)
7. **Heading hierarchy**: Never skip levels (h1 → h2 → h3)

---

## 4. Spacing & Layout

### Spacing Scale

| Token | Value |
|-------|-------|
| `--space-1` | 4px |
| `--space-2` | 8px |
| `--space-3` | 12px |
| `--space-4` | 16px |
| `--space-5` | 20px |
| `--space-6` | 24px |
| `--space-8` | 32px |
| `--space-10` | 40px |
| `--space-12` | 48px |
| `--space-16` | 64px |
| `--space-20` | 80px |
| `--space-24` | 96px |
| `--space-32` | 128px |

### Grid System

```css
/* Container */
--container-max: 1280px;
--container-padding: 24px; /* mobile: 16px */

/* Grid */
--grid-columns: 12;
--grid-gap: 24px; /* mobile: 16px */
```

### Section Spacing
- **Between major sections**: `--space-24` (96px) desktop, `--space-16` (64px) mobile
- **Within sections**: `--space-12` (48px) desktop, `--space-8` (32px) mobile
- **Card internal padding**: `--space-8` (32px) desktop, `--space-6` (24px) mobile

---

## 5. Component Library

### 5.1 Buttons

#### Primary (Teal)
```css
.btn-primary {
  background: var(--color-teal);
  color: #FFFFFF;
  font-family: var(--font-body);
  font-weight: 600;
  font-size: 15px;
  padding: 14px 28px;
  border-radius: 3px;
  border: none;
  cursor: pointer;
  transition: all 0.2s ease;
}
.btn-primary:hover {
  background: var(--color-teal-light);
  transform: translateY(-1px);
  box-shadow: 0 4px 12px rgba(0,196,180,0.3);
}
```

#### Premium (Gold)
```css
.btn-gold {
  background: var(--gradient-gold);
  color: #0A1628;
  /* Same sizing as primary */
}
```

#### Secondary (Outline)
```css
.btn-secondary {
  background: transparent;
  color: var(--color-teal);
  border: 1.5px solid var(--color-teal);
  border-radius: 3px;
  /* Same sizing as primary */
}
.btn-secondary:hover {
  background: rgba(0,196,180,0.08);
}
```

#### Ghost (Dark backgrounds)
```css
.btn-ghost {
  background: transparent;
  color: #FFFFFF;
  border: 1.5px solid rgba(255,255,255,0.25);
  border-radius: 3px;
}
.btn-ghost:hover {
  border-color: rgba(255,255,255,0.5);
  background: rgba(255,255,255,0.05);
}
```

#### Button Sizes
| Size | Padding | Font Size |
|------|---------|-----------|
| `sm` | 10px 20px | 13px |
| `md` (default) | 14px 28px | 15px |
| `lg` | 18px 36px | 16px |

#### Button with Icon
Icons sit left of label with 8px gap. Arrow icons sit right with 8px gap.

### 5.2 Cards

#### Standard Card
```css
.card {
  background: var(--color-surface);
  border-radius: 12px;
  padding: 32px;
  box-shadow: 0 1px 3px rgba(10,22,40,0.06), 0 1px 2px rgba(10,22,40,0.04);
  transition: all 0.3s ease;
}
.card:hover {
  box-shadow: 0 4px 12px rgba(10,22,40,0.08), 0 2px 4px rgba(10,22,40,0.04);
  transform: translateY(-2px);
}
```

#### Feature Card (with icon)
- 48px icon container top-left (teal background with 8px radius, icon in white)
- H4 title
- Body description
- Optional "Learn more →" link in teal

#### Stat Card
- Large stat number (`--text-stat`, `--font-mono`, teal or gold)
- Label below (`--text-caption`, `--color-text-muted`)
- Optional trend indicator (↑ green, ↓ red)

#### Testimonial Card
- Quote in `--text-body-lg`, italic
- Avatar (48px circle), name, role, company
- Star rating in gold
- Subtle left border in teal (3px)

#### Service Card (clickable)
- Icon + service name (H4)
- One-line description
- Right arrow indicator
- Entire card is clickable link
- Hover: teal left border appears (3px)

#### Dark Card (for use on light backgrounds to create contrast)
- Background: `--color-navy`
- Text: inverse colours
- Good for "highlight" features within a light section

### 5.3 Navigation

#### Desktop Nav
- Fixed top, `--color-navy` background with 95% opacity + backdrop-blur(12px)
- Logo left, links center, CTA right
- Links: `--color-text-inverse`, 14px, weight 500
- Active link: `--color-teal` underline (2px, 4px below text)
- Dropdown menus for Services (mega menu with icons + descriptions)
- Height: 72px
- Transition: shrink to 60px on scroll

#### Mobile Nav
- Hamburger icon (animated to X on open)
- Full-screen overlay, `--color-navy` background
- Links stacked, 48px touch targets
- Services accordion expand
- CTA button at bottom

#### Services Mega Menu (desktop)
- Full-width dropdown, max 1280px
- 3-column grid:
  - Col 1: Core Services (with icons)
  - Col 2: Financial & Protection
  - Col 3: Community & Platform
- Each item: icon (24px) + name + one-line description
- Featured callout for Rate Intelligence and Compliance Passport (teal background strip)

### 5.4 Badges

```css
.badge {
  font-size: 12px;
  font-weight: 600;
  padding: 4px 10px;
  border-radius: 100px;
  text-transform: uppercase;
  letter-spacing: 0.05em;
}
.badge-teal { background: rgba(0,196,180,0.12); color: #00C4B4; }
.badge-gold { background: rgba(245,166,35,0.12); color: #F5A623; }
.badge-success { background: rgba(16,185,129,0.12); color: #10B981; }
.badge-navy { background: rgba(10,22,40,0.08); color: #0A1628; }
```

Uses: "AI-Powered", "New", "Premium", "Verified", "Popular", "Coming Soon"

### 5.5 Stats / Metrics Display

#### Inline Stat Row
```
[Icon] 2,400+ | [Icon] 18 Countries | [Icon] £12M+ Saved | [Icon] 98% Retention
```
- Horizontal on desktop, 2×2 grid on mobile
- Numbers in `--text-stat` or `--text-h2` weight 800
- Labels in `--text-body-sm`
- Optional counting animation on scroll-in

#### Dashboard Stat Card
- Mini chart/sparkline background (decorative)
- Large number
- Trend arrow + percentage
- Period label ("vs last quarter")

### 5.6 Accordion / FAQ

```css
.accordion-item {
  border-bottom: 1px solid var(--color-border);
  padding: 24px 0;
}
.accordion-trigger {
  font-family: var(--font-heading);
  font-size: 18px;
  font-weight: 600;
  color: var(--color-navy);
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
  width: 100%;
}
.accordion-icon {
  transition: transform 0.3s ease;
  color: var(--color-teal);
}
.accordion-item[open] .accordion-icon {
  transform: rotate(45deg);
}
.accordion-content {
  padding-top: 16px;
  color: var(--color-text-secondary);
  line-height: 1.7;
  max-width: 680px;
}
```

### 5.7 Forms

#### Input Fields
```css
.input {
  font-family: var(--font-body);
  font-size: 15px;
  padding: 14px 16px;
  border: 1.5px solid var(--color-border);
  border-radius: 3px;
  background: var(--color-surface);
  color: var(--color-navy);
  transition: border-color 0.2s ease;
  width: 100%;
}
.input:focus {
  border-color: var(--color-teal);
  outline: none;
  box-shadow: 0 0 0 3px rgba(0,196,180,0.1);
}
.input::placeholder {
  color: var(--color-text-muted);
}
```

#### Form Layout
- Labels above inputs, `--text-body-sm`, weight 600
- Error messages below in `--color-error`, `--text-caption`
- Required indicator: teal asterisk
- Form groups spaced `--space-6` apart

### 5.8 Process / Timeline

#### Horizontal Steps (desktop)
```
[1]——————[2]——————[3]——————[4]
Company    Bank     Insurance   You're
Formation  Account  Setup       Live
```
- Numbered circles (40px, teal border, navy fill when complete)
- Connecting line (2px, teal gradient)
- Step title + description below each

#### Vertical Timeline (mobile / editorial)
- Left-aligned dots with connecting line
- Content cards to the right
- Alternating left/right on desktop for editorial feel

### 5.9 Comparison Tables

#### Feature Comparison
| Feature | Without iGroup | With iGroup |
| --- | ❌ / ⚠️ | ✅ / ⭐ |

- "Without" column: muted, grey
- "With iGroup" column: teal highlight, bold
- Mobile: stacks to cards, each row = card

#### Pricing Comparison
- Column-based
- Highlighted/recommended tier with teal top border and "Most Popular" badge
- Toggle for monthly/annual (if applicable)

### 5.10 Tooltips & Popovers
- Dark background (`--color-navy`), white text
- 8px radius, max-width 280px
- Arrow pointing to trigger
- 200ms fade-in

### 5.11 Section Dividers

#### Wave Divider
SVG wave between dark→light and light→dark sections. Subtle, 60px height.

#### Gradient Fade
CSS gradient from one section colour to the next. 120px transition zone.

#### Angled Cut
CSS clip-path with 2-3° angle for dynamic section transitions.

---

## 6. Animation System

### Philosophy
Animations serve comprehension, not decoration. Every animation should either:
1. Guide the eye to important content
2. Provide spatial context (where did this come from?)
3. Create a feeling of quality and polish

### GSAP ScrollTrigger (keep from current build)

```javascript
// Standard fade-up for content blocks
gsap.from('.animate-up', {
  scrollTrigger: {
    trigger: '.animate-up',
    start: 'top 85%',
    toggleActions: 'play none none none'
  },
  y: 40,
  opacity: 0,
  duration: 0.8,
  ease: 'power2.out'
});
```

### Animation Patterns by Type

#### Hero Animations
- **Text**: Staggered word/line reveal (clip-path or y-translate), 0.1s stagger
- **Background**: Subtle parallax on scroll (0.3x speed)
- **Video**: Fade-in on load, slow Ken Burns effect
- **Stats**: Count-up animation on entry (countUp.js or GSAP)
- **CTA**: Slight delay (0.6s) after text reveals, scale from 0.95

#### Card Grid Animations
- **Staggered entry**: Cards fade-up with 0.1s stagger per card
- **Hover**: translateY(-2px) + shadow increase, 0.3s ease
- **Mobile**: Simpler — opacity fade only, no stagger (performance)

#### Data/Dashboard Animations
- **Charts**: Draw-in animation (SVG path length)
- **Numbers**: Count-up from 0 to value over 1.5s
- **Progress bars**: Width animation from 0% to target
- **Data points**: Sequential dot-reveal with connecting lines

#### Page Transitions
- Content fades in from slight translateY(20px) on route change
- Skeleton placeholders for dynamic content areas
- Nav stays fixed, content scrolls underneath

#### Scroll-Linked
- **Parallax layers**: Background elements at 0.2-0.5x scroll speed
- **Progress indicator**: Teal bar at top of page showing read progress
- **Sticky elements**: Service nav, pricing table header

### Reduced Motion
```css
@media (prefers-reduced-motion: reduce) {
  *, *::before, *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
    scroll-behavior: auto !important;
  }
}
```

### Performance Rules
1. Use `will-change` sparingly — only on actively animating elements
2. Prefer `transform` and `opacity` (GPU-composited)
3. Debounce scroll handlers (16ms / requestAnimationFrame)
4. Lazy-load GSAP ScrollTrigger instances outside viewport
5. Mobile: reduce particle counts, disable parallax, simplify stagger

---

## 7. Responsive Strategy

### Breakpoints

| Token | Width | Target |
|-------|-------|--------|
| `--bp-sm` | 640px | Large phones landscape |
| `--bp-md` | 768px | Tablets portrait |
| `--bp-lg` | 1024px | Tablets landscape, small laptops |
| `--bp-xl` | 1280px | Desktops |
| `--bp-2xl` | 1536px | Large screens |

### Mobile-First Approach
All CSS written mobile-first. `min-width` media queries to progressively enhance.

### Layout Patterns by Breakpoint

| Component | Mobile (<768) | Tablet (768-1024) | Desktop (1024+) |
|-----------|---------------|-------------------|-----------------|
| Nav | Hamburger overlay | Hamburger overlay | Full links + mega menu |
| Hero text | Full-width, stacked | Full-width, stacked | Split or centered |
| Card grid | 1 column | 2 columns | 3-4 columns |
| Stats row | 2×2 grid | 4 across | 4 across |
| Comparison table | Stacked cards | Horizontal scroll | Full table |
| Process steps | Vertical timeline | Horizontal | Horizontal |
| Footer | Stacked sections | 2-column | 4-column |
| Pricing grid | Stacked, swipeable | 2 across | 3 across |

### Touch Targets
- Minimum 44px × 44px for all interactive elements on mobile
- 48px for primary CTAs
- 12px minimum spacing between touch targets

### Mobile-Specific Patterns
- **Sticky CTA bar**: Fixed bottom bar on service pages ("Get Started" / "Join Free")
- **Swipeable cards**: Horizontal scroll for card groups on mobile
- **Collapsible sections**: Auto-collapse long content sections
- **Bottom sheet**: Mobile mega menu and filters

---

## 8. Image & Asset Guidelines

### Photography Direction
- **Real people**: Diverse, global, professional but approachable
- **Environments**: Modern offices, co-working spaces, home offices, cityscapes (London, Dubai, Singapore, Sydney, New York)
- **Mood**: Confident, focused, successful — never stock-photo cheesy
- **Treatment**: Slight desaturation, navy overlay for dark sections
- **NO**: Generic handshakes, people pointing at screens, "business meeting" clichés

### Video
- **Hero backgrounds**: 15-30 second loops, muted, ambient
- **Format**: MP4 (H.264), WebM fallback
- **Loading**: Poster image first, lazy-load video
- **Mobile**: Static image fallback (save bandwidth)
- **Content**: Global cityscapes with people working, time-lapses, aerial shots

### Image Formats & Sizes
```
Hero images: 1920×1080 max, WebP + JPEG fallback
Card thumbnails: 400×300, WebP
Avatars/testimonials: 96×96, WebP
Blog featured: 800×450, WebP
Icons/illustrations: SVG only
OG/social cards: 1200×630
```

### Dashboard Mockups
- Use Figma or similar to create realistic portal/dashboard screenshots
- Match the iGroup colour palette in the mockup UI
- Show real-looking (but fictional) data — rates, charts, compliance status
- Both desktop and mobile mockup variants
- Apply subtle perspective transform + shadow for hero display

### Illustration Style (if used)
- Geometric, minimal, line-based
- Teal + gold accent colours on navy
- Consistent stroke width (1.5-2px)
- No cartoon/childish styles — keep it fintech-grade

---

## 9. Icon System

### Library: Lucide Icons
**Replace all Ikonik icons with [Lucide](https://lucide.dev/)** — open source, MIT licensed, consistent 24×24 grid, 1.5px stroke.

### Usage

```html
<!-- Inline SVG (preferred for animation control) -->
<svg class="icon icon-md" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
  <!-- path data -->
</svg>
```

### Icon Sizes

| Token | Size | Usage |
|-------|------|-------|
| `icon-sm` | 16px | Inline with text, badges |
| `icon-md` | 24px | Default, nav, buttons |
| `icon-lg` | 32px | Feature cards, service items |
| `icon-xl` | 48px | Hero features, section headers |

### Icon Containers
For feature cards, wrap icons in a coloured container:
```css
.icon-container {
  width: 48px;
  height: 48px;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
}
.icon-container-teal {
  background: rgba(0,196,180,0.1);
  color: var(--color-teal);
}
.icon-container-gold {
  background: rgba(245,166,35,0.1);
  color: var(--color-gold);
}
.icon-container-navy {
  background: rgba(10,22,40,0.08);
  color: var(--color-navy);
}
```

### Service Icon Mapping

| Service | Lucide Icon |
|---------|-------------|
| Rate Intelligence | `trending-up` or `bar-chart-3` |
| Company Formation | `building-2` |
| Compliance Review | `file-check` |
| IR35 Support | `shield-check` |
| Income Optimisation | `wallet` |
| CV Services | `file-text` |
| Career Intelligence | `compass` |
| Contractor Portal | `layout-dashboard` |
| Relationship Management | `users` |
| Market Intelligence | `newspaper` |
| Sign-Up Bonus | `gift` |
| Mortgage Brokering | `home` |
| Pension Planning | `piggy-bank` |
| Insurance | `umbrella` |
| Banking Partnerships | `landmark` |
| Registered Office | `map-pin` |
| Compliance Passport | `badge-check` |
| Reference Management | `star` |
| Credibility Score | `award` |
| Co-working | `coffee` |
| Professional Bodies | `graduation-cap` |
| Software/Hardware | `laptop` |
| Networking | `network` |
| Mental Health | `heart` |

---

## 10. Shadow System

### Elevation Levels

```css
/* Resting state — cards, containers */
--shadow-sm: 0 1px 3px rgba(10,22,40,0.06), 0 1px 2px rgba(10,22,40,0.04);

/* Hover state — interactive cards */
--shadow-md: 0 4px 12px rgba(10,22,40,0.08), 0 2px 4px rgba(10,22,40,0.04);

/* Elevated — dropdowns, modals, sticky nav */
--shadow-lg: 0 12px 24px rgba(10,22,40,0.1), 0 4px 8px rgba(10,22,40,0.06);

/* Prominent — hero cards, featured content */
--shadow-xl: 0 20px 40px rgba(10,22,40,0.12), 0 8px 16px rgba(10,22,40,0.06);

/* Teal glow — CTAs, active elements */
--shadow-teal: 0 4px 16px rgba(0,196,180,0.25);

/* Gold glow — premium elements */
--shadow-gold: 0 4px 16px rgba(245,166,35,0.25);
```

---

## 11. Dark Section Patterns

Many pages alternate between light and dark sections. Rules for dark sections:

### On `--color-navy` or `--color-navy-mid` backgrounds:
- Headings: `#FFFFFF`
- Body text: `#A0B0C4`
- Cards: `rgba(255,255,255,0.05)` background, `rgba(255,255,255,0.08)` border
- Dividers: `rgba(255,255,255,0.08)`
- Links/accents: `--color-teal` (stays the same)
- Buttons: Primary teal works. Ghost variant for secondary.
- Decorative: Use `--gradient-glow-teal` or `--gradient-glow-gold` as background decoration

---

## 12. Motion & Interaction Tokens

```css
/* Timing */
--duration-fast: 150ms;
--duration-normal: 300ms;
--duration-slow: 500ms;
--duration-entrance: 800ms;

/* Easing */
--ease-default: cubic-bezier(0.4, 0, 0.2, 1);
--ease-in: cubic-bezier(0.4, 0, 1, 1);
--ease-out: cubic-bezier(0, 0, 0.2, 1);
--ease-bounce: cubic-bezier(0.34, 1.56, 0.64, 1);

/* Standard transition */
--transition-default: all var(--duration-normal) var(--ease-default);
```

---

## 13. Code Architecture Notes

### CSS Custom Properties
Define all tokens as CSS custom properties on `:root`. This enables:
- Theme switching (future dark mode toggle)
- Component-level overrides
- Easy maintenance

### File Structure (suggested)
```
styles/
├── _variables.css      /* All tokens */
├── _reset.css          /* Normalize + base reset */
├── _typography.css     /* Type scale, font loading */
├── _layout.css         /* Grid, container, spacing */
├── _buttons.css        /* All button variants */
├── _cards.css          /* All card variants */
├── _forms.css          /* Inputs, selects, checkboxes */
├── _nav.css            /* Navigation + mega menu */
├── _accordion.css      /* FAQ + collapsible */
├── _badges.css         /* Badge variants */
├── _animations.css     /* Keyframes + GSAP setup */
├── _utilities.css      /* Helper classes */
└── pages/
    ├── _home.css
    ├── _about.css
    ├── _services.css
    └── ...
```

### Naming Convention
BEM-inspired but not strict:
```css
.card { }
.card-feature { }
.card-feature__icon { }
.card-feature__title { }
.card-feature--highlighted { }
```

---

## 14. Accessibility

### Requirements
- WCAG 2.1 AA compliance minimum
- Keyboard navigation for all interactive elements
- Focus indicators: 2px teal outline, 2px offset
- Screen reader text for icon-only buttons
- `aria-expanded` on accordions
- `aria-current="page"` on active nav links
- Skip-to-content link (hidden until focused)
- Alt text on all images
- Captions for video content (where applicable)

### Focus Ring
```css
:focus-visible {
  outline: 2px solid var(--color-teal);
  outline-offset: 2px;
}
```

---

*This design system is the single source of truth for iGroup's web presence. Every component, colour, and animation decision should reference this document. When in doubt, choose the option that makes the contractor feel confident, informed, and valued.*
