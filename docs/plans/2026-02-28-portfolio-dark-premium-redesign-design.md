# Portfolio Dark Premium Redesign — Design Doc

**Date**: 2026-02-28
**Status**: Approved
**Stack**: Next.js 15, Tailwind CSS 4, Supabase (existing data layer)

## Goal

Complete visual overhaul of rishavchatterjee.com. Replace the current generic, cluttered light-theme portfolio with a dark premium aesthetic — distinctive, clean, authoritative. The kind of site where a CTO visits and thinks "I want to hire this person" within 30 seconds.

## Design System

### Color Palette (Consulting Firm — UUPM)

| Token | Hex | Usage |
|-------|-----|-------|
| `bg-primary` | `#0F172A` | Main background (navy) |
| `bg-deeper` | `#020617` | Alternating sections |
| `bg-card` | `rgba(255,255,255,0.05)` | Glass cards |
| `accent` | `#CA8A04` | CTAs, highlights, icons |
| `accent-hover` | `#EAB308` | Hover state (brighter gold) |
| `text-primary` | `#F8FAFC` | Headings, important text |
| `text-muted` | `#94A3B8` | Body text, descriptions |
| `text-dim` | `#64748B` | Captions, meta |
| `border` | `#1E293B` | Subtle dividers, card borders |
| `border-accent` | `rgba(202,138,4,0.3)` | Gold-tinted borders on hover |

### Typography

- **Headings**: Playfair Display (400, 700) via `next/font/google`
- **Body**: Inter (400, 500, 600) via `next/font/google`
- Hero name: `text-6xl md:text-8xl` Playfair
- Section headings: `text-3xl md:text-5xl` Playfair
- Body: `text-base md:text-lg` Inter, `leading-relaxed`

### Glass Card Pattern

```css
background: rgba(255, 255, 255, 0.05);
border: 1px solid rgba(255, 255, 255, 0.1);
backdrop-filter: blur(12px);
border-radius: 16px;
transition: all 300ms ease;

/* hover */
border-color: rgba(202, 138, 4, 0.3);
transform: translateY(-2px);
```

### Spacing

- Sections: `py-24 md:py-32`
- Container: `max-w-6xl mx-auto px-6 md:px-8`
- Between elements: generous `space-y-6` to `space-y-12`

## Navbar

- Fixed, `bg-[#0F172A]/90 backdrop-blur-xl`, `border-b border-[#1E293B]`
- Left: "Rishav Chatterjee" in Playfair (slides in on scroll — already built with ref-based animation)
- Right: 4 links — Work, About, Blog, Contact
- Contact styled as gold pill: `border border-[#CA8A04] text-[#CA8A04] rounded-full px-4 py-1`
- Active link: `text-[#CA8A04]` (gold, not blue)
- Mobile: Hamburger → full-screen dark overlay with centered links
- No portfolio dropdown — simplified navigation

## Homepage — 5 Sections

### 1. Hero (full viewport)

- Full-screen `min-h-screen bg-[#020617]`, centered content
- Subtle radial gradient orb: gold-tinted, 20% opacity, positioned behind text
- Name: Playfair `text-6xl md:text-8xl font-bold text-[#F8FAFC]`
- Subtitle: Inter `text-lg md:text-xl text-[#94A3B8]` — "AI Engineer & Consultant"
- Single CTA: `bg-[#CA8A04] text-[#020617] rounded-full px-8 py-3 hover:bg-[#EAB308]`
- No typewriter, no particle field, no credential pills
- Scroll indicator at bottom: gold chevron with gentle bounce animation
- `id="hero-name"` on the h1 for navbar IntersectionObserver (keep existing)

### 2. Proof Bar

- Compact strip: `bg-[#0F172A] border-t border-b border-[#1E293B] py-8`
- No section heading — just logos
- Logos: monochrome white, `opacity-50 hover:opacity-100 grayscale`, `transition-opacity 300ms`
- Desktop: static flex row, evenly spaced
- Mobile: horizontal auto-scroll marquee (reuse existing BrandMarquee logic)
- Companies: Polestar, Gartner, Novartis, IBM, Reckitt, Domino's

### 3. What I Do

- Background: `bg-[#020617]`
- Section heading: "What I Do" in Playfair `text-3xl md:text-5xl text-[#F8FAFC]`
- 3 glass cards in `grid-cols-1 md:grid-cols-3 gap-6`
- Each card:
  - Gold diamond icon at top (`◇` or lucide icon in `text-[#CA8A04]`)
  - Title: Playfair `text-xl text-[#F8FAFC]`
  - Description: Inter `text-[#94A3B8]`, 2 lines max
  - Thin gold divider `border-t border-[#CA8A04]/30 my-4`
  - Tech tags: `text-xs text-[#64748B]` inline, separated by `·`
  - Hover: gold border glow + lift
- Cards:
  1. AI System Architecture — Python, FastAPI, LangChain, RAG
  2. Data Platform Consulting — Spark, Airflow, dbt, Snowflake
  3. AI Research & Evaluation — LLMs, Benchmarks, Fine-tuning

### 4. Selected Work

- Background: `bg-[#0F172A]`
- Section heading: "Selected Work" in Playfair `text-3xl md:text-5xl text-[#F8FAFC]`
- 2-3 full-width glass panels, stacked vertically with `space-y-6`
- Each panel:
  - Label: `text-xs tracking-[0.2em] uppercase text-[#CA8A04]` — "CASE STUDY 01"
  - Project name: Playfair `text-2xl text-[#F8FAFC]`
  - 3-column layout: Challenge | Solution | Impact — Inter `text-[#94A3B8]`
  - Metric stats: `text-2xl font-semibold text-[#CA8A04]` (e.g., "40% faster", "$2M saved")
  - "View Details →" link in `text-[#CA8A04] hover:text-[#EAB308]`
- Curated selection — show best 2-3 from existing case studies

### 5. CTA Footer

- Background: `bg-[#020617]`
- Heading: Playfair `text-3xl md:text-4xl text-[#F8FAFC]` — "Let's Build Something Together"
- Gold CTA button (same style as hero)
- Social links: LinkedIn, GitHub, Email — `text-[#64748B] hover:text-[#CA8A04]` with lucide icons
- Copyright: `text-xs text-[#64748B]` — "© 2026 Rishav Chatterjee"

## Sub-pages

All sub-pages share the dark theme:
- Backgrounds: `#0F172A` / `#020617`
- Glass card components
- Playfair headings + Inter body
- Gold accents for links and CTAs
- Breadcrumb: `text-[#64748B]` with `>` separators

### Page Structure

| Route | Content | Notes |
|-------|---------|-------|
| `/about` | Bio, stats, education, skills radar | Merge tech-skills into here |
| `/experience` | Timeline with glass cards | Merge timeline page into here |
| `/projects` | Full project grid + filters | Glass cards, gold filter buttons |
| `/blog` | Blog listing | Glass cards, featured post hero |
| `/contact` | Contact form | Glass input fields, gold submit |
| `/testimonials` | Large quote blocks | Glass cards with client photos |

### Pages Removed/Merged

- `/tech-skills` → merged into `/about`
- `/timeline` → merged into `/experience`
- `/resume` → PDF download link from `/about`

## Interactions & Animation

- **Scroll fade-in**: Elements fade up 20px, `opacity 0→1` on viewport entry via IntersectionObserver (existing pattern)
- **Card hovers**: Gold border glow + `translateY(-2px)`, 300ms ease
- **CTA hover**: `#CA8A04 → #EAB308`, `scale(1.02)`
- **Logo bar**: Continuous horizontal scroll on mobile
- **Reduced motion**: All animations wrapped in `prefers-reduced-motion` check
- **Page transitions**: None — keep Next.js default instant navigation

### Removed Effects

- Particle field (ParticleField component)
- Typewriter animation (TypewriterRole)
- AI chat widget (AIChatWidget)
- Blob animations
- "CONNECT" floating badge
- Star ratings on testimonials

## Accessibility

- Color contrast: `#F8FAFC` on `#0F172A` = 15.4:1 ratio (exceeds AAA)
- Gold `#CA8A04` on `#0F172A` = 5.2:1 ratio (passes AA)
- Focus rings: `ring-2 ring-[#CA8A04] ring-offset-2 ring-offset-[#0F172A]`
- Touch targets: minimum 44x44px
- Semantic HTML: proper heading hierarchy, landmark regions
- Alt text on all images

## Performance

- Remove unused fonts (Geist Sans, Geist Mono, Ubuntu, Braggadocio)
- Add only Playfair Display + Inter via next/font
- Remove particle field canvas (heavy on mobile)
- Remove chat widget scripts
- Glass blur on cards: use `will-change: transform` for GPU acceleration
- Lazy load below-fold sections

## Files to Modify

### Core Changes
- `src/app/globals.css` — New CSS custom properties, dark theme defaults
- `src/app/layout.tsx` — New fonts (Playfair Display, Inter), remove old fonts
- `src/app/page.tsx` — Complete homepage rebuild (5 sections)
- `src/components/navbar/Navbar.tsx` — Dark theme, gold accents, 4 links
- `tailwind.config.ts` — Custom colors, remove unused animations

### New Components
- `src/components/ui/GlassCard.tsx` — Reusable glass card
- `src/components/ui/GoldButton.tsx` — Gold CTA button
- `src/components/home/Hero.tsx` — New hero section
- `src/components/home/ProofBar.tsx` — Logo trust strip
- `src/components/home/WhatIDo.tsx` — Services section
- `src/components/home/SelectedWork.tsx` — Case studies
- `src/components/home/CTAFooter.tsx` — Bottom CTA + footer

### Sub-page Updates
- `src/app/about/page.tsx` — Dark theme + merged skills
- `src/app/experience/page.tsx` — Dark theme + merged timeline
- `src/app/projects/page.tsx` — Dark theme + glass cards
- `src/app/blog/page.tsx` — Dark theme + glass cards
- `src/app/contact/page.tsx` — Dark theme + glass form
- `src/app/testimonials/page.tsx` — Dark theme + glass quotes

### Components to Remove
- `src/components/ui/ParticleField.tsx`
- `src/components/ui/TypewriterRole.tsx`
- `src/components/ui/AIChatWidget.tsx`
- `src/styles/custom-fonts.css` (already deleted)

### Components to Update
- `src/components/ui/ProjectCard.tsx` — Glass card style
- `src/components/ui/ExperienceCard.tsx` — Glass card style
- `src/components/ui/BlogPreview.tsx` — Glass card style
