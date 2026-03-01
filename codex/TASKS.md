# RPB Painting — Codex Task Sequence

> **Instructions for Codex**: Each task below is designed to be completed in a single session.
> Before starting any task, read these files in order:
> 1. `codex/VISION.md` — project vision and design philosophy
> 2. `codex/WORKLOG.md` — what has been done so far
> 3. `codex/BUSINESS_INFO.md` — factual business details
> 4. `DesignSystemV2.html` — design system tokens and patterns
>
> After completing a task, append a session entry to `codex/WORKLOG.md`.

---

## Task 1: Project Scaffolding & Tailwind Configuration

**Status**: completed
**Estimated scope**: Small

### Instructions

1. Initialize a Vite + React + TypeScript project in a `website/` subdirectory
2. Install dependencies: `tailwindcss`, `postcss`, `autoprefixer`, `@tailwindcss/vite` (or equivalent Vite plugin), `lucide-react`
3. Configure Tailwind v4 tokens in `website/src/index.css` `@theme` with ALL design system tokens from `DesignSystemV2.html`:
   - Colors: canvas, ink (50-900), wine (50-900), navy (50-900), slate (50-900), brass (50-900), forest (50-900), stone (50-900)
   - Semantic colors: primary (wine-600), secondary (navy-600), accent (brass-500), success (forest-500), warning (brass-500), info (navy-500)
   - Typography: font-display (Playfair Display), font-body (DM Sans)
   - Font sizes: xs through 7xl with exact rem values
   - Line heights: tight (1.15), snug (1.3), normal (1.6), relaxed (1.75)
   - Letter spacing: tight (-0.025em), normal (0), wide (0.025em), wider (0.05em), widest (0.1em)
   - Spacing: 1-32 scale matching the design system exactly
   - Border radius: sm(6px), md(10px), lg(16px), xl(24px), 2xl(32px), full(9999px)
   - Box shadows: xs, sm, md, lg, xl, glow-coral, glow-teal, glow-lavender
   - Transitions: ease-out, ease-spring with specified cubic-bezier values
   - Max-width: default(1200px), narrow(800px), wide(1440px)
4. Set up `src/index.css` with Google Fonts imports (Playfair Display + DM Sans) and Tailwind directives
5. Create the base folder structure:
   ```
   website/src/
     components/
       layout/        # Header, Footer, Container
       sections/      # Hero, Services, Portfolio, etc.
       ui/            # Button, Input, Tag, Card
     data/            # Static content data files
     hooks/           # Custom React hooks
     types/           # TypeScript type definitions
     utils/           # Utility functions
     App.tsx
     main.tsx
     index.css
   ```
6. Create a minimal `App.tsx` that renders a "Hello RPB Painting" placeholder with the correct background color and font
7. Verify the build succeeds without errors: run `npm run build` inside `website/`

### Acceptance Criteria

- `npm run build` completes without errors
- Page renders with canvas (#FAF9F6) background and DM Sans font
- Tailwind classes for all design system tokens work correctly
- All folder structure is in place
- TypeScript compiles without errors

---

## Task 2: UI Primitives — Button, Input, Tag, Container

**Status**: completed
**Estimated scope**: Small

### Instructions

1. Read the design system's component section (buttons, inputs, tags) carefully
2. Create `src/components/ui/Button.tsx`:
   - Variants: primary, secondary, accent, ghost, pill
   - Sizes: default, lg
   - Props: variant, size, children, href (renders as `<a>` if provided), onClick, className, type
   - All styles must match DesignSystemV2.html exactly (colors, padding, border-radius, hover states, transitions)
3. Create `src/components/ui/Input.tsx`:
   - Standard text input with design system styling
   - Focus states with wine-400 border and wine-100 ring
   - Placeholder styling
4. Create `src/components/ui/Tag.tsx`:
   - Color variants: coral/wine, teal/navy, lavender/slate, ochre/brass, sage/forest, sky/stone
   - Design system sizing and typography
5. Create `src/components/ui/Container.tsx`:
   - Centered max-width wrapper (1200px default, narrow 800px, wide 1440px)
   - Horizontal padding
6. Create `src/components/ui/SectionHeader.tsx`:
   - Section label (uppercase, tracked, small)
   - Section title (Playfair Display, 36px)
   - Section description (DM Sans, 18px, muted)
7. Export all from `src/components/ui/index.ts`

### Acceptance Criteria

- All components match the design system pixel-for-pixel
- Hover states, transitions, and focus states work correctly
- TypeScript props are well-typed
- Components are reusable and composable

---

## Task 3: Layout Components — Header & Footer

**Status**: completed
**Estimated scope**: Medium

### Instructions

1. Create `src/components/layout/Header.tsx`:
   - Logo: Wine dot + "RPB Painting" in Playfair Display
   - Navigation links: Home, Services, Portfolio, About, Contact (max 5)
   - Right side: Phone number (ghost button with tel: link), "Get a Quote" (primary button)
   - Sticky on scroll with subtle shadow
   - Mobile: Hamburger icon that opens full-screen overlay menu
   - Mobile menu: All nav links + phone + quote CTA
   - Use actual phone number from BUSINESS_INFO.md: (401) 365-8336
2. Create `src/components/layout/Footer.tsx`:
   - Dark background (ink-900)
   - 4-column grid: Brand + tagline | Services links | Company links | Contact info
   - Brand section: Logo + tagline from BUSINESS_INFO.md
   - Contact: Phone number, address, business hours
   - Responsive: 2-column on tablet, stacked on mobile
   - Bottom bar with copyright year
3. Create `src/components/layout/MobileCallButton.tsx`:
   - Fixed bottom-right floating button (visible only on mobile)
   - Phone icon + "Call Now" or just phone icon
   - Links to tel:(401) 365-8336
   - Wine-600 background, white icon
4. Wire Header, Footer, and MobileCallButton into `App.tsx`

### Acceptance Criteria

- Header is sticky and transitions smoothly
- Mobile hamburger menu opens/closes with animation
- Phone number links work (tel: protocol)
- Footer matches design system footer example
- Mobile call button appears only on small screens
- All business information is accurate per BUSINESS_INFO.md

---

## Task 4: Hero Section

**Status**: completed
**Estimated scope**: Small

### Instructions

1. Create `src/components/sections/Hero.tsx`:
   - Trust badge at top: "✦ Serving Brevard County Since 2012" (pill style, wine-50 bg, wine-700 text)
   - Main headline: Playfair Display, large (clamp text-4xl to text-6xl), with italic emphasis on a key word
   - Subtitle: DM Sans, text-lg, ink-500, font-weight 300, max-width 520px
   - Two CTA buttons: "Get a Free Quote" (accent, lg) + "See Our Work" (secondary, lg)
   - Background: Subtle radial gradient blobs (wine-100 and brass-100) as decorative elements, low opacity
   - Centered layout with generous padding (space-16 top/bottom)
2. Content must reflect RPB Painting's actual business — residential and commercial painting in Brevard County
3. Mobile: Stack buttons vertically, adjust heading size

### Acceptance Criteria

- Hero matches the design system's hero example pattern
- Responsive: looks great on mobile and desktop
- CTAs are prominent and properly styled
- Decorative background elements are subtle and don't interfere with readability
- Smooth fade-in animation on load

---

## Task 5: Services Section

**Status**: completed
**Estimated scope**: Medium

### Instructions

1. Create `src/components/sections/Services.tsx`:
   - Section header: "Our Services" with label and description
   - 3-column grid of service cards (matches design system pattern)
   - Card 1: Residential — interior/exterior painting, custom painting, wallpaper
   - Card 2: Commercial — offices, retail, large venues, minimal disruption
   - Card 3: Specialty — faux finishes, texturing (knockdown, orange peel, popcorn), decorative
   - Each card: Icon (emoji or Lucide icon), title (Playfair Display), description, "Learn more" link
   - Colored top border on hover (wine, navy, brass) — matches design system
   - Cards elevate on hover with shadow-xl
2. Below the cards, add an expandable "Full Service List" that shows all services from BUSINESS_INFO.md
3. Include paint brand badges (Sherwin-Williams, Benjamin Moore) as trust elements
4. Responsive: single column on mobile

### Acceptance Criteria

- Service cards match design system service card pattern exactly
- Hover animations (translateY, shadow, top border) work smoothly
- All services from BUSINESS_INFO.md are represented
- Mobile layout stacks to single column
- Paint brand mention adds credibility

---

## Task 6: Portfolio / Gallery Section

**Status**: completed
**Estimated scope**: Large

### Instructions

1. Create `src/components/sections/Portfolio.tsx` for the homepage:
   - Section header: "Our Work" with description
   - Use Layout B (Featured + Grid): 1 hero project + 2 side projects
   - Each project: placeholder colored div (using design system colors), overlay with title/location/type
   - "View All Projects" button at bottom
2. Create `src/components/sections/PortfolioFull.tsx` for a full gallery view:
   - Filter bar with pill-style buttons: All, Residential, Commercial, Exterior, Specialty
   - Layout A (Masonry grid) with 9+ placeholder projects
   - Each item has hover overlay with project title, location, category tag, arrow icon
   - "Load More" button with count indicator
3. Create reusable components:
   - `src/components/ui/GalleryItem.tsx` — individual gallery item with overlay
   - `src/components/ui/FilterBar.tsx` — filter button group
4. Use placeholder project data in `src/data/projects.ts`:
   - Create 12+ sample projects with names, locations (Brevard County cities), categories, descriptions
   - All locations must be in the actual service area (Melbourne, Palm Bay, Viera, Brevard County)
5. Responsive: Masonry goes to 2 columns on tablet, 1 on mobile

### Acceptance Criteria

- Homepage portfolio uses Featured + Grid layout
- Full gallery uses Masonry with working filter buttons
- Hover overlays animate correctly (opacity, gradient)
- Project data uses real service area locations
- Filter actually filters the displayed projects
- Responsive layouts work correctly

---

## Task 7: Before & After Section

**Status**: completed
**Estimated scope**: Medium

### Instructions

1. Create `src/components/sections/BeforeAfter.tsx`:
   - Section header with description
   - Interactive before/after slider component
   - Draggable divider line with circular handle
   - "Before" label on left, "After" label on right
   - Uses placeholder colored backgrounds (darker for before, lighter for after)
   - Touch/drag support for mobile
2. Create `src/components/ui/BeforeAfterSlider.tsx` as a reusable component:
   - Accept before/after image sources (or background colors for placeholders)
   - Mouse drag and touch drag support
   - Smooth sliding with the design system's border-radius-2xl
   - Labels styled per design system (pill badges)
3. Show 2-3 before/after comparisons (can be in a simple row or carousel)

### Acceptance Criteria

- Slider is fully interactive (mouse + touch)
- Visual styling matches design system before/after pattern
- Responsive and works well on mobile
- Smooth performance without jank

---

## Task 8: Testimonials Section

**Status**: completed
**Estimated scope**: Small

### Instructions

1. Create `src/components/sections/Testimonials.tsx`:
   - Section header: "What Our Clients Say"
   - Grid or carousel of testimonial cards (design system pattern)
   - Each card: 5 stars (brass-400), quote text (Playfair Display, italic), author name, role/location
   - Use realistic but clearly placeholder testimonials for Brevard County homeowners and businesses
   - 4-6 testimonials
2. Create `src/data/testimonials.ts` with testimonial data
3. Stars must use brass-400 color per design system
4. Carousel with dot navigation, or responsive grid (3 columns desktop, 1 mobile)

### Acceptance Criteria

- Testimonial cards match design system pattern
- Star color is correct (brass-400)
- Typography: quote in Playfair Display italic, name/role in DM Sans
- Responsive layout
- Testimonials feel realistic for a Florida painting company

---

## Task 9: About Section

**Status**: completed
**Estimated scope**: Small

### Instructions

1. Create `src/components/sections/About.tsx`:
   - Split layout: content on left, placeholder image on right
   - Content: Company story, founded in 2012, Riveiro Palomar (owner), Brevard County
   - Key stats: "13+ Years Experience", "Licensed & Insured", "Brevard County"
   - Values or approach bullet points
   - "Meet the Team" or "Learn More" CTA
2. Use real information from BUSINESS_INFO.md
3. Placeholder image area using a design system color
4. Stats displayed as inline badges or a small grid

### Acceptance Criteria

- All factual information matches BUSINESS_INFO.md
- Layout is balanced and visually appealing
- Responsive: stacks vertically on mobile
- Typography and spacing follow design system

---

## Task 10: Service Areas Section

**Status**: completed
**Estimated scope**: Small

### Instructions

1. Create `src/components/sections/ServiceAreas.tsx`:
   - Section header: "Areas We Serve"
   - Visual representation of Brevard County / Space Coast coverage
   - List of specific cities: Melbourne, Palm Bay, Viera, and surrounding areas
   - Can use a styled card grid, a simple list with location pins, or a decorative map outline
   - "Serving All of Brevard County" as a prominent statement
2. Include a CTA: "Not sure if we serve your area? Call us!"
3. Phone number linked

### Acceptance Criteria

- Service area information matches BUSINESS_INFO.md
- Clean, visually interesting layout (not just a plain list)
- Phone number is clickable
- Responsive

---

## Task 11: Trust Signals & FAQ Sections

**Status**: completed
**Estimated scope**: Medium

### Instructions

1. Create `src/components/sections/TrustSignals.tsx`:
   - Row of trust badges/icons: Licensed Contractor, Insured, 13+ Years, Premium Paints, 5-Star Rated
   - Clean horizontal layout with icons and short labels
   - Subtle background (canvas-warm or canvas-cool)
2. Create `src/components/sections/FAQ.tsx`:
   - Section header: "Frequently Asked Questions"
   - Accordion-style Q&A (click to expand/collapse)
   - 8-10 relevant questions about painting services, process, pricing, timeline, preparation
   - Smooth expand/collapse animation
   - Only one item open at a time
3. Create `src/data/faq.ts` with question/answer data
4. FAQ answers should reference real details where possible (paint brands, service area, etc.)

### Acceptance Criteria

- Trust signals are visually clean and prominent
- FAQ accordion works smoothly with animation
- Content is relevant and professional
- Responsive on all screen sizes
- Only one FAQ item can be open at a time

---

## Task 12: Contact / Quote Request Section

**Status**: completed
**Estimated scope**: Medium

### Instructions

1. Create `src/components/sections/Contact.tsx`:
   - Split layout: Quote form on left, contact info on right
   - Form fields (using design system Input component):
     - Full Name (required)
     - Email (required)
     - Phone (required)
     - Project Type (select: Residential Interior, Residential Exterior, Commercial, Specialty Finish, Other)
     - Project Description (textarea)
     - Submit button: "Request a Free Quote" (accent, lg)
   - Contact info side:
     - Phone: (401) 365-8336 with click-to-call
     - Address: 1741 Guava Ave, Melbourne, FL 32935
     - Hours: Mon-Fri 8am-5pm
     - Brief message about response time
2. Form submission: Console log for now (real integration in a later task if needed)
3. Basic client-side validation (required fields, email format)
4. Success state after submission

### Acceptance Criteria

- Form styling matches design system inputs and buttons
- Client-side validation works
- Phone number is clickable
- Business info is accurate per BUSINESS_INFO.md
- Responsive: stacks vertically on mobile
- Focus states on inputs match design system (wine-400 border, wine-100 ring)

---

## Task 13: Assembly, Smooth Scroll & Scroll Animations

**Status**: completed
**Estimated scope**: Medium

### Instructions

1. Wire all sections into `App.tsx` in the correct order:
   Header > Hero > Services > Portfolio > BeforeAfter > Testimonials > About > ServiceAreas > TrustSignals > FAQ > Contact > Footer
2. Add section IDs for smooth scroll navigation (e.g., `id="services"`, `id="portfolio"`, etc.)
3. Update Header nav links to scroll to corresponding sections
4. Implement scroll-triggered fade-in animations:
   - Use Intersection Observer
   - `fadeInUp` animation (opacity 0 + translateY 20px → opacity 1 + translateY 0)
   - Staggered delays for child elements within sections
   - Duration and easing from design system tokens
5. Add smooth scroll behavior to HTML
6. Update active nav link based on scroll position

### Acceptance Criteria

- All sections render in the correct order
- Navigation scrolls smoothly to sections
- Scroll animations trigger as sections enter viewport
- Active nav link updates on scroll
- Page loads fast and animations don't cause jank
- No layout shifts during animation

---

## Task 14: SEO, Meta Tags & Performance

**Status**: completed
**Estimated scope**: Small

### Instructions

1. Add comprehensive `<head>` meta tags:
   - Title: "RPB Painting LLC | Professional Painting Services in Brevard County, FL"
   - Description: Relevant meta description with keywords
   - Open Graph tags (title, description, type, url)
   - Twitter card tags
2. Ensure semantic HTML throughout:
   - Proper heading hierarchy (h1 > h2 > h3)
   - `<main>`, `<section>`, `<nav>`, `<footer>` elements
   - Alt text on all images (even placeholders)
   - ARIA labels where needed
3. Add structured data (JSON-LD) for:
   - LocalBusiness schema with business info from BUSINESS_INFO.md
   - Service schema
4. Performance:
   - Verify Tailwind purges unused CSS
   - Add `loading="lazy"` to images below the fold
   - Check bundle size
5. Add a favicon (can be a simple colored square matching the wine-600 brand color)

### Acceptance Criteria

- Meta tags render correctly in the document head
- Structured data validates (test with Google's tool)
- Semantic HTML is correct throughout
- No unnecessary CSS in production build
- Favicon displays

---

## Task 15: Final Polish, Accessibility & QA

**Status**: completed
**Estimated scope**: Medium

### Instructions

1. Accessibility audit:
   - All interactive elements are keyboard navigable
   - Focus indicators are visible
   - Color contrast meets WCAG AA (check ink colors against canvas)
   - Screen reader landmarks are correct
   - Images have alt text
   - Form labels are associated with inputs
   - Skip-to-content link at top
2. Visual QA:
   - Check every section on mobile (375px), tablet (768px), and desktop (1280px)
   - Verify spacing consistency (80-96px between sections)
   - Check typography hierarchy is correct throughout
   - Verify all hover/focus states
   - Check that no text is cut off or overflowing
3. Fix any visual bugs or inconsistencies
4. Verify `npm run build` produces a clean production build
5. Final worklog entry

### Acceptance Criteria

- No accessibility violations
- Consistent appearance across all breakpoints
- Clean production build with no errors or warnings
- All interactive states work correctly
- Typography, spacing, and colors match design system throughout
