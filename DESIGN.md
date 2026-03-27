# iGroup Website v5 — Design Document

## Design Direction

Inspired by **deel.com** — authoritative, global presence, clean SaaS/platform aesthetic. Established and trusted, not startup-y.

## Colour Palette

| Role | Hex | Usage |
|------|-----|-------|
| Dark Navy (Primary) | `#0f172a` | Hero backgrounds, stats section, headings |
| Blue Accent | `#2563EB` | CTAs, icons, interactive elements, links |
| Blue Accent Hover | `#1d4ed8` | Button hover states |
| Warm White | `#FAFAF9` | Page background |
| Footer BG | `#1e293b` | Footer background |
| Text Secondary | `#475569` | Body text, descriptions |

## Typography

| Role | Font | Weight | Source |
|------|------|--------|--------|
| Headings | Space Grotesk | 500, 600, 700 | Google Fonts |
| Body | Inter | 400, 500, 600, 700 | Google Fonts |

## Section Breakdown

1. **Navigation** — Fixed top nav, transparent → white on scroll. Mobile hamburger with slide-in menu.
2. **Hero** — Full-viewport dark navy gradient with decorative blur blobs. Large headline, subtext, two CTAs.
3. **Trust Bar** — Light grey background with sector pill badges (Finance, Technology, Engineering, Life Sciences, Professional Services, Government).
4. **Services** — 4 cards in responsive grid. Each has an inline SVG icon, title, description. Hover lift effect.
5. **How It Works** — 3-step timeline. Horizontal on desktop with connector line, vertical on mobile.
6. **Stats** — Dark navy gradient. Three large stat numbers with supporting text.
7. **Testimonials** — Three quote cards with star ratings, decorative quote marks, name + title.
8. **CTA Section** — Blue gradient. Headline, subtext, primary CTA button, email link.
9. **Footer** — Dark navy. Three-column layout: brand + copyright, quick links, contact info + LinkedIn.

## Technical Stack

- **Single file**: `index.html` — no build step required
- **CSS**: Tailwind CSS via Play CDN (`cdn.tailwindcss.com`) + inline `<style>` for custom animations
- **Fonts**: Google Fonts (Space Grotesk + Inter)
- **Icons**: Hand-written inline SVGs (Heroicons-style)
- **JS**: Vanilla JavaScript for nav scroll effect + mobile menu toggle
- **Smooth scroll**: Native CSS `scroll-smooth` on `<html>`

## How to Customise

### Colours
Edit the `tailwind.config` object in the `<script>` tag at the top of the file. All custom colours are defined there.

### Content
All text content is directly in the HTML. Search for section comments (e.g., `<!-- HERO -->`) to find each section.

### Adding Sections
Add new `<section>` elements between existing ones. Use the same Tailwind utility classes for consistent spacing (`py-20 md:py-28`).

### Icons
SVG icons are inline. Replace the `<svg>` elements in the service cards with any SVG icons you prefer.

## Deployment

- **Platform**: Vercel
- **Auto-deploy**: Pushes to `main` branch trigger automatic deployment
- **No build step**: Vercel serves `index.html` as a static site
- **Custom domain**: Configure in Vercel dashboard under Settings → Domains

## Browser Support

- Modern browsers (Chrome, Firefox, Safari, Edge — last 2 versions)
- Mobile Safari (iOS 14+)
- Tailwind CSS Play CDN requires JavaScript enabled
