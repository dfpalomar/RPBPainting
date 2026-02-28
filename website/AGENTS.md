# Website Implementation — Agent Instructions

## Tailwind CSS v4 Configuration

This project uses Tailwind CSS v4 with the `@tailwindcss/vite` plugin. All design tokens are defined in `src/index.css` inside the `@theme` block. There is NO `tailwind.config.ts` file — Tailwind v4 uses CSS-based configuration.

### Available Custom Color Classes

Use these Tailwind classes (e.g., `bg-canvas`, `text-wine-600`, `border-ink-200`):

- `canvas`, `canvas-warm`, `canvas-cool` — background tones
- `ink-50` through `ink-900` — neutral text and UI chrome
- `wine-50` through `wine-900` — primary accent (CTA, hero highlights)
- `navy-50` through `navy-900` — secondary (authority, trust)
- `slate-50` through `slate-900` — depth, secondary text
- `brass-50` through `brass-900` — premium warmth, ratings
- `forest-50` through `forest-900` — success, nature
- `stone-50` through `stone-900` — neutral, earthy
- `primary`, `secondary`, `accent`, `success`, `warning`, `info`, `surface` — semantic colors

### Available Font Classes

- `font-display` — Playfair Display (headings)
- `font-body` — DM Sans (body text)

### Available Shadow Classes

- `shadow-xs`, `shadow-sm`, `shadow-md`, `shadow-lg`, `shadow-xl`
- `shadow-glow-coral`, `shadow-glow-teal`, `shadow-glow-lavender`

### Available Radius Classes

- `rounded-sm` (6px), `rounded-md` (10px), `rounded-lg` (16px), `rounded-xl` (24px), `rounded-2xl` (32px), `rounded-full` (pill)

## Component Patterns

- Buttons: pill-shaped, variants (primary/secondary/accent/ghost)
- Cards: `rounded-xl`, `shadow-sm`, hover with `translateY(-6px)` and `shadow-xl`
- Section headers: label (uppercase, tracked, xs) + title (Playfair, 4xl) + description (DM Sans, lg, ink-500)
- Navigation: logo with wine dot + nav links + phone CTA + quote button

## Key Reminders

- Always read `../codex/BUSINESS_INFO.md` for any business details
- Always reference `../DesignSystemV2.html` for visual patterns
- Run `npm run build` (from inside `website/`) to verify no TypeScript or build errors after changes — NEVER run `npm run dev` (it never exits and will hang the session)
- Generous whitespace between sections (py-20 to py-24)
- Mobile-first responsive design
