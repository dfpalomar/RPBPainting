# RPB Painting LLC — Website Redesign

## Project Overview

You are building a modern, premium website for RPB Painting LLC, a licensed painting contractor in Melbourne, Florida. The website uses React, TypeScript, Vite, and Tailwind CSS.

## Critical: Read These Files First

Before starting ANY work, you MUST read these files in order:

1. **`codex/VISION.md`** — Project vision, design philosophy, section requirements, and technical priorities
2. **`codex/WORKLOG.md`** — What has been completed, decisions made, assumptions, and what remains
3. **`codex/BUSINESS_INFO.md`** — All factual business details (phone, address, services, hours, credentials)
4. **`DesignSystemV2.html`** — The design system with all visual tokens, components, and patterns

These are your source of truth. Follow them strictly.

## Task System

- Tasks are defined in `codex/TASKS.md` — each session works on one task
- After completing a task, append a session entry to `codex/WORKLOG.md`
- Update the task status in `codex/TASKS.md` from `pending` to `completed`

## Rules

### Business Information
- ALL business information must come from `codex/BUSINESS_INFO.md`
- Do NOT invent, guess, or modify any factual business details (phone, address, services, etc.)
- Phone: (401) 365-8336 | Address: 1741 Guava Ave, Melbourne, FL 32935

### Design System
- ALL visual styling must follow `DesignSystemV2.html` tokens exactly
- Fonts: Playfair Display (headings), DM Sans (body)
- Primary color: Wine (#8B2A3E) | Secondary: Navy (#384D6E) | Accent: Brass (#B59A4A)
- Background: Canvas (#FAF9F6)
- Section spacing: 80-96px between sections
- Maximum 5 navigation links
- Maximum 2 signature colors per section
- Buttons are pill-shaped (border-radius: 9999px)
- Font weights: 300, 400, 500, 600 only
- No decorative gradients — keep colors solid and purposeful

### Code Standards
- Use TypeScript with strict typing throughout
- Follow existing component patterns and folder structure
- Keep code clean, maintainable, and well-organized
- Test that `npm run dev` and `npm run build` work without errors after your changes

### Project Structure
```
website/                    # Vite + React + TypeScript app
  src/
    components/
      layout/               # Header, Footer, Container
      sections/             # Hero, Services, Portfolio, etc.
      ui/                   # Button, Input, Tag, Card
    data/                   # Static content data files
    hooks/                  # Custom React hooks
    types/                  # TypeScript type definitions
    utils/                  # Utility functions
    App.tsx
    main.tsx
    index.css               # Tailwind + design system tokens
codex/                      # Orchestration and context files
  VISION.md
  BUSINESS_INFO.md
  WORKLOG.md
  TASKS.md
DesignSystemV2.html         # Design system (single source of truth)
```

## Build & Dev Commands

```bash
cd website
npm install        # Install dependencies
npm run dev        # Start dev server
npm run build      # Production build (also runs tsc)
```

## Dependencies

- React 19 + TypeScript
- Vite 7
- Tailwind CSS v4 (configured via @tailwindcss/vite plugin, tokens in @theme block in index.css)
- lucide-react (icons)
