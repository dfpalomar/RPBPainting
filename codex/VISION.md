# RPB Painting LLC — Website Redesign: Vision & Goals

## Purpose

Redesign the website for RPB Painting LLC (rpbpainting.com) from the ground up. The current site is outdated and does not reflect the quality, professionalism, or scale of the company's work. The new website must serve as a high-converting, modern digital presence that builds trust, communicates expertise, and drives quote requests.

## Company Overview

RPB Painting LLC is a licensed painting contractor based in Melbourne, Florida, serving all of Brevard County (Space Coast). Founded in 2012 by Riveiro Palomar, the company handles both residential and commercial painting projects, including specialty finishes, texturing, wallpaper services, and power washing. They use premium paint brands (Sherwin-Williams, Benjamin Moore).

## Design Philosophy

The website must feel **premium, clean, calm, and highly intentional** — as if designed by Apple. It should communicate:

- **Professionalism** — not a small operation, but a serious, capable company
- **Reliability** — licensed, experienced, trusted by hundreds of clients
- **Scale** — capable of both residential homes and large commercial projects
- **Quality** — every pixel should reflect the craftsmanship they bring to their work

### Key Design Principles (from Design System)

1. **Solid, Not Flashy** — Confident colour choices. No gradients, no tricks.
2. **Breathe** — Generous whitespace. Let content float like an Apple product page.
3. **Effortless Navigation** — Two clicks or less. No clutter, no distraction.
4. **Craft & Authority** — Every detail communicates mastery. Precise, deliberate, premium.

### What It Must NOT Feel Like

- Industrial or contractor-generic
- Cluttered or information-dense
- Cheap or template-like
- Outdated or early-2010s aesthetic

## Design System

All visual decisions are governed by `DesignSystemV2.html`. This is the **single source of truth** for:

- **Typography**: Playfair Display (headings) + DM Sans (body)
- **Color Palette**: Wine (primary CTA), Navy (trust/authority), Slate (depth), Brass (premium/warmth), Forest (success/nature), Stone (neutral/earthy)
- **Canvas**: Warm ivory (#FAF9F6) as default background
- **Spacing**: 4px base grid, generous section spacing (80-96px between sections)
- **Border Radius**: Soft corners — sm(6px), md(10px), lg(16px), xl(24px), 2xl(32px), full(pill)
- **Shadows**: Subtle, layered. xs through xl, plus colored glows
- **Buttons**: Primary (ink-900, pill), Secondary (outlined, pill), Accent (wine-600, pill), Ghost, Pill tag
- **Transitions**: Ease-out cubic-bezier, 150-600ms duration range
- **Layout**: Max-width 1200px (default), 800px (narrow), 1440px (wide)
- **Components**: Nav bar, Hero, Service cards, Testimonial cards, Footer, Gallery layouts (masonry, featured+grid, uniform grid, detail cards), Before/After slider, Lightbox, Filter bar

### Usage Rules

- Use generous whitespace between sections (80-96px)
- Wine as the primary CTA colour
- Max 5 nav links
- Max two signature colours per section
- Avoid heavy drop shadows or hard borders
- Stick to font weights 300, 400, 500, 600
- Pick 3-4 colour stops per colour (not the full 10-step scale)
- Keep colours solid and purposeful — no decorative gradients
- Focus photography on finished spaces, not paint supplies

## Website Sections

### Required Sections (in approximate page order)

1. **Navigation** — Clean, pill-style. Logo + 5 nav links + phone CTA + "Get a Quote" button. Sticky on scroll. Mobile hamburger menu.

2. **Hero** — Strong value proposition above the fold. Headline using Playfair Display with italic emphasis. Subtext in DM Sans. Two CTAs: "Get a Free Quote" (accent) + "See Our Work" (secondary). Trust badge (years in business, projects completed).

3. **Services** — Clear breakdown using service cards (3-column grid). Categories: Residential, Commercial, Specialty Finishes. Each with icon, title, description, "Learn more" link. Expandable to show full service list.

4. **Portfolio / Gallery** — Featured projects section on homepage (Layout B: Featured + Grid). Dedicated portfolio page uses Layout A (Masonry) with filter bar. Project detail cards with metadata. Before/After slider component.

5. **Testimonials** — Customer reviews displayed in card format. Star ratings in brass color. Customer name and project type. Carousel or grid layout.

6. **About** — Company story, years of experience (since 2012), owner introduction. Values and approach. Photo of team/owner if available.

7. **Service Areas** — Map or visual showing Brevard County coverage. List of specific cities: Melbourne, Palm Bay, Viera, and surrounding areas.

8. **Trust Signals** — Licensed contractor badge. Insurance information. Paint brand partnerships (Sherwin-Williams, Benjamin Moore). Years in business counter. Projects completed counter.

9. **FAQ** — Common questions about pricing, process, timeline, paint brands, preparation. Accordion-style expand/collapse.

10. **Contact / Quote Request** — Prominent form: name, email, phone, project type, description. Phone number always visible. Physical address. Business hours (Mon-Fri 8am-5pm). Map embed optional.

11. **Footer** — Dark (ink-900) background. Logo + tagline. Service links, Company links, Contact info. Phone number prominent.

### Mobile Considerations

- Sticky call button (tap to call) on mobile
- Hamburger navigation with full-screen overlay
- Touch-friendly tap targets (min 44px)
- Single-column layouts for all grid sections
- Gallery switches to single-column masonry
- Swipe support on carousels and lightbox

## Technical Stack

- **React** with **TypeScript**
- **Vite** for build tooling
- **Tailwind CSS** configured with design system tokens
- Additional libraries allowed if stable and widely adopted (e.g., carousel/slider library)
- Single-page application with smooth scroll between sections (or multi-page with React Router)

## Technical Priorities

1. Strict adherence to the design system
2. Clean, maintainable component structure
3. Strong TypeScript typing
4. Performance optimization (lazy loading, code splitting)
5. SEO best practices (meta tags, semantic HTML, structured data)
6. Accessibility standards (WCAG 2.1 AA)
7. Mobile-first responsive design
8. Consistent spacing and layout rhythm
9. High-quality typography
10. Clear visual hierarchy

## Business Information (Source of Truth)

All factual business details are stored in `codex/BUSINESS_INFO.md`. Every session must reference this file for accurate contact details, services, and company information. No factual business details should be invented or modified unless explicitly instructed.

## Conversion Goals

The website's primary conversion action is a **quote request**. Secondary conversion is a **phone call**. The design must make both actions frictionless:

- "Get a Quote" button visible at all times (nav, hero, floating mobile CTA)
- Phone number accessible with one tap on mobile
- Multiple entry points to the quote form throughout the page
- Trust signals positioned near CTAs to reduce friction
