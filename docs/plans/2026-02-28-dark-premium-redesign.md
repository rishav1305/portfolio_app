# Dark Premium Portfolio Redesign — Implementation Plan

> **For Claude:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task.

**Goal:** Transform rishavchatterjee.com from a generic light-theme portfolio into a dark premium consulting site with navy + gold aesthetic, glassmorphism cards, and a focused 5-section homepage.

**Architecture:** Replace the current 12+ section homepage with 5 focused sections (Hero, Proof Bar, What I Do, Selected Work, CTA Footer). All components use a shared glass card pattern. Dark backgrounds throughout. Data layer (Supabase) stays unchanged.

**Tech Stack:** Next.js 15, Tailwind CSS 4, Playfair Display + Inter fonts (next/font/google), lucide-react icons, Supabase (existing).

**Design Doc:** `docs/plans/2026-02-28-portfolio-dark-premium-redesign-design.md`

---

## Task 1: Design System — Fonts & CSS Custom Properties

**Files:**
- Modify: `src/app/layout.tsx` (lines 2-32: font imports, line 144: body class)
- Modify: `src/app/globals.css` (full file — 66 lines)
- Modify: `tailwind.config.js` (lines 8-11: font families)

**Step 1: Update font imports in layout.tsx**

Replace the Geist + Ubuntu font imports (lines 2-32) with Playfair Display + Inter:

```tsx
import { Playfair_Display, Inter } from 'next/font/google';

const playfair = Playfair_Display({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-playfair',
  display: 'swap',
});

const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  variable: '--font-inter',
  display: 'swap',
});
```

Update the body className (line 144) to use new font variables:

```tsx
className={`${playfair.variable} ${inter.variable} antialiased min-h-screen`}
```

Also update any references to old font variables (`geistSans`, `geistMono`, `ubuntu`) throughout the file. Remove `--font-ubuntu` usage.

**Step 2: Rewrite globals.css**

Replace the entire file with the dark premium design system:

```css
@import "tailwindcss";

@theme inline {
  --font-sans: var(--font-inter);
  --font-serif: var(--font-playfair);
  --color-bg-primary: #0F172A;
  --color-bg-deeper: #020617;
  --color-accent: #CA8A04;
  --color-accent-hover: #EAB308;
  --color-text-primary: #F8FAFC;
  --color-text-muted: #94A3B8;
  --color-text-dim: #64748B;
  --color-border: #1E293B;
}

body {
  font-family: var(--font-sans), ui-sans-serif, system-ui, sans-serif;
  background-color: var(--color-bg-primary);
  color: var(--color-text-primary);
}

/* Glass card */
.glass-card {
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(12px);
  border-radius: 16px;
  transition: all 300ms ease;
}
.glass-card:hover {
  border-color: rgba(202, 138, 4, 0.3);
  transform: translateY(-2px);
}

/* Scroll-triggered fade-in */
.animate-fade-in-up {
  opacity: 0;
  transform: translateY(20px);
  transition: opacity 0.6s ease-out, transform 0.6s ease-out;
}
.animate-fade-in-up.visible {
  opacity: 1;
  transform: translateY(0);
}

/* Focus rings */
:focus-visible {
  outline: 2px solid var(--color-accent);
  outline-offset: 2px;
}

/* Scroll indicator bounce */
@keyframes bounce-gentle {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(8px); }
}
.animate-bounce-gentle {
  animation: bounce-gentle 2s ease-in-out infinite;
}
```

**Step 3: Update tailwind.config.js**

Replace font family entries (lines 8-11):

```js
fontFamily: {
  sans: ['var(--font-inter)', 'ui-sans-serif', 'system-ui', 'sans-serif'],
  serif: ['var(--font-playfair)', 'ui-serif', 'Georgia', 'serif'],
},
```

Remove the `braggadocio` font family. Keep useful animations (fadeInUp), remove `blob` animation.

**Step 4: Verify build**

Run: `npm run build`
Expected: Build succeeds with no font-related errors.

**Step 5: Commit**

```bash
git add src/app/layout.tsx src/app/globals.css tailwind.config.js
git commit -m "feat: dark premium design system — Playfair + Inter fonts, navy/gold palette"
```

---

## Task 2: Navbar — Dark Theme + Gold Accents

**Files:**
- Modify: `src/components/navbar/Navbar.tsx` (350 lines)

**Step 1: Update navbar colors and links**

Change the navbar to dark theme:
- Line 107: Replace `bg-white/80 backdrop-blur-md` with `bg-[#0F172A]/90 backdrop-blur-xl border-b border-[#1E293B]`
- Replace all `text-gray-*` with `text-[#F8FAFC]` / `text-[#94A3B8]`
- Replace `text-blue-600` active states with `text-[#CA8A04]`
- Replace `hover:text-blue-600` with `hover:text-[#CA8A04]`
- Replace `shadow-md` with nothing (border-b handles the separation)

Simplify navigation links to 4 items: Work (`/projects`), About (`/about`), Blog (`/blog`), Contact (`/contact`).

Style Contact as a gold pill button:
```tsx
<Link href="/contact" className="border border-[#CA8A04] text-[#CA8A04] rounded-full px-4 py-1 hover:bg-[#CA8A04] hover:text-[#020617] transition-colors">
  Contact
</Link>
```

Remove the portfolio dropdown entirely.

**Step 2: Update mobile menu**

Replace the slide-in mobile menu with a full-screen dark overlay:
- Background: `fixed inset-0 bg-[#020617]/95 backdrop-blur-xl z-50`
- Links centered vertically, `text-2xl text-[#F8FAFC]`
- Contact as gold pill button
- Close button: `text-[#94A3B8]`

**Step 3: Update navbar name font**

Change the name span from Ubuntu to Playfair:
```tsx
style={{ fontFamily: 'var(--font-playfair)' }}
```

**Step 4: Verify locally**

Run: `npm run dev`
Check: Navbar renders with dark theme, gold accents, 4 links, mobile overlay.

**Step 5: Commit**

```bash
git add src/components/navbar/Navbar.tsx
git commit -m "feat: dark premium navbar — navy bg, gold accents, simplified 4 links"
```

---

## Task 3: Homepage Hero Section

**Files:**
- Modify: `src/app/page.tsx` (lines 45-90: hero section)
- Remove imports: ParticleField, TypewriterRole (lines 12-13)

**Step 1: Remove ParticleField and TypewriterRole from imports**

Delete ParticleField from ClientDynamicImports (line 12) and TypewriterRole import (line 13).

**Step 2: Rewrite hero section (lines 45-90)**

Replace the entire hero section with:

```tsx
{/* Hero */}
<section className="relative min-h-screen flex items-center justify-center bg-[#020617] overflow-hidden">
  {/* Gradient orb */}
  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-[#CA8A04]/10 blur-[120px] pointer-events-none" />

  <div className="relative z-10 text-center max-w-4xl px-6">
    <h1
      id="hero-name"
      className="font-serif text-6xl md:text-8xl font-bold text-[#F8FAFC] mb-6"
    >
      {siteConfig.name}
    </h1>
    <p className="text-lg md:text-xl text-[#94A3B8] mb-10">
      AI Engineer &amp; Consultant
    </p>
    <a
      href="/contact"
      className="inline-block bg-[#CA8A04] text-[#020617] font-semibold rounded-full px-8 py-3 hover:bg-[#EAB308] transition-colors"
    >
      Schedule a Call
    </a>
  </div>

  {/* Scroll indicator */}
  <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce-gentle">
    <ChevronDown className="w-6 h-6 text-[#CA8A04]" />
  </div>
</section>
```

Add `ChevronDown` import from lucide-react at the top of the file.

**Step 3: Verify locally**

Run: `npm run dev`
Check: Full-screen dark hero with name, subtitle, gold CTA, scroll indicator.

**Step 4: Commit**

```bash
git add src/app/page.tsx
git commit -m "feat: dark premium hero — full-screen navy bg, gold CTA, gradient orb"
```

---

## Task 4: Homepage Proof Bar

**Files:**
- Modify: `src/app/page.tsx` (replace company logos section)

**Step 1: Replace the current logos section**

Find the "TRUSTED BY" heading + BrandMarquee section and replace with:

```tsx
{/* Proof Bar */}
<section className="bg-[#0F172A] border-t border-b border-[#1E293B] py-8">
  <div className="max-w-6xl mx-auto px-6 flex items-center justify-center gap-12 flex-wrap opacity-50">
    {brands.map((brand) => (
      <img
        key={brand.name}
        src={brand.logoUrl}
        alt={brand.name}
        className="h-8 object-contain grayscale brightness-200 hover:opacity-100 transition-opacity"
      />
    ))}
  </div>
</section>
```

No heading, no "TRUSTED BY" text — just logos. Monochrome white via `grayscale brightness-200`.

**Step 2: Verify locally**

Check: Compact logo strip with white monochrome logos, no heading.

**Step 3: Commit**

```bash
git add src/app/page.tsx
git commit -m "feat: dark proof bar — compact monochrome logo strip"
```

---

## Task 5: Homepage "What I Do" Section

**Files:**
- Modify: `src/app/page.tsx` (replace services section)

**Step 1: Replace the current services section**

Remove the existing ServicePillars / services grid and replace with:

```tsx
{/* What I Do */}
<section className="bg-[#020617] py-24 md:py-32">
  <div className="max-w-6xl mx-auto px-6 md:px-8">
    <h2 className="font-serif text-3xl md:text-5xl text-[#F8FAFC] mb-16 text-center">
      What I Do
    </h2>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {[
        {
          icon: 'Brain',
          title: 'AI System Architecture',
          desc: 'End-to-end AI systems — from RAG pipelines to production LLM deployments.',
          tags: 'Python · FastAPI · LangChain · RAG',
        },
        {
          icon: 'Database',
          title: 'Data Platform Consulting',
          desc: 'Scalable data infrastructure that turns raw data into business decisions.',
          tags: 'Spark · Airflow · dbt · Snowflake',
        },
        {
          icon: 'FlaskConical',
          title: 'AI Research & Evaluation',
          desc: 'Benchmark, evaluate, and fine-tune models for your specific domain.',
          tags: 'LLMs · Benchmarks · Fine-tuning',
        },
      ].map((service) => (
        <div key={service.title} className="glass-card p-8">
          <div className="text-[#CA8A04] mb-4">
            <span className="text-2xl">◇</span>
          </div>
          <h3 className="font-serif text-xl text-[#F8FAFC] mb-3">
            {service.title}
          </h3>
          <p className="text-[#94A3B8] text-sm leading-relaxed mb-4">
            {service.desc}
          </p>
          <div className="border-t border-[#CA8A04]/30 pt-4">
            <span className="text-xs text-[#64748B]">{service.tags}</span>
          </div>
        </div>
      ))}
    </div>
  </div>
</section>
```

**Step 2: Verify locally**

Check: 3 glass cards, gold accents, gold border on hover.

**Step 3: Commit**

```bash
git add src/app/page.tsx
git commit -m "feat: dark 'What I Do' section — 3 glass service cards with gold accents"
```

---

## Task 6: Homepage "Selected Work" Section

**Files:**
- Modify: `src/app/page.tsx` (replace case studies / impact section)

**Step 1: Replace the case studies section**

Remove the existing ImpactMetricCard grid and replace with full-width glass panels:

```tsx
{/* Selected Work */}
<section className="bg-[#0F172A] py-24 md:py-32">
  <div className="max-w-6xl mx-auto px-6 md:px-8">
    <h2 className="font-serif text-3xl md:text-5xl text-[#F8FAFC] mb-16 text-center">
      Selected Work
    </h2>
    <div className="space-y-6">
      {caseStudies.slice(0, 3).map((study, i) => (
        <div key={study.title} className="glass-card p-8 md:p-10">
          <span className="text-xs tracking-[0.2em] uppercase text-[#CA8A04] mb-2 block">
            Case Study {String(i + 1).padStart(2, '0')}
          </span>
          <h3 className="font-serif text-2xl text-[#F8FAFC] mb-6">
            {study.title}
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
            <div>
              <span className="text-xs tracking-[0.15em] uppercase text-[#64748B] block mb-2">Challenge</span>
              <p className="text-[#94A3B8] text-sm leading-relaxed">{study.challenge}</p>
            </div>
            <div>
              <span className="text-xs tracking-[0.15em] uppercase text-[#64748B] block mb-2">Solution</span>
              <p className="text-[#94A3B8] text-sm leading-relaxed">{study.solution}</p>
            </div>
            <div>
              <span className="text-xs tracking-[0.15em] uppercase text-[#64748B] block mb-2">Impact</span>
              <p className="text-[#94A3B8] text-sm leading-relaxed">{study.impact}</p>
            </div>
          </div>
          {study.metrics && (
            <div className="flex flex-wrap gap-6">
              {study.metrics.map((metric) => (
                <span key={metric} className="text-xl font-semibold text-[#CA8A04]">
                  {metric}
                </span>
              ))}
            </div>
          )}
        </div>
      ))}
    </div>
  </div>
</section>
```

Adapt the field names (challenge, solution, impact, metrics) based on the actual Supabase `case_studies` table schema. Check `src/services/caseStudies.ts` and `src/types/portfolio.ts` for the exact field names.

**Step 2: Verify locally**

Check: 2-3 full-width glass panels with gold labels, 3-column Challenge/Solution/Impact.

**Step 3: Commit**

```bash
git add src/app/page.tsx
git commit -m "feat: dark 'Selected Work' section — full-width glass case study panels"
```

---

## Task 7: Homepage CTA Footer

**Files:**
- Modify: `src/app/page.tsx` (replace bottom CTA + footer)

**Step 1: Replace the existing CTA and footer**

Remove the current blue gradient CTA + footer and replace with:

```tsx
{/* CTA Footer */}
<section className="bg-[#020617] py-24 md:py-32">
  <div className="max-w-4xl mx-auto px-6 text-center">
    <h2 className="font-serif text-3xl md:text-4xl text-[#F8FAFC] mb-8">
      Let&apos;s Build Something Together
    </h2>
    <a
      href="/contact"
      className="inline-block bg-[#CA8A04] text-[#020617] font-semibold rounded-full px-8 py-3 hover:bg-[#EAB308] transition-colors mb-12"
    >
      Get In Touch
    </a>
    <div className="flex items-center justify-center gap-6 mb-8">
      <a href={siteConfig.linkedinUrl} target="_blank" rel="noopener noreferrer" className="text-[#64748B] hover:text-[#CA8A04] transition-colors">
        <Linkedin className="w-5 h-5" />
      </a>
      <a href={siteConfig.githubUrl} target="_blank" rel="noopener noreferrer" className="text-[#64748B] hover:text-[#CA8A04] transition-colors">
        <Github className="w-5 h-5" />
      </a>
      <a href={`mailto:${siteConfig.email}`} className="text-[#64748B] hover:text-[#CA8A04] transition-colors">
        <Mail className="w-5 h-5" />
      </a>
    </div>
    <p className="text-xs text-[#64748B]">
      &copy; {new Date().getFullYear()} {siteConfig.name}
    </p>
  </div>
</section>
```

Add `Linkedin`, `Github`, `Mail` imports from lucide-react.

**Step 2: Remove all other homepage sections**

Delete the following sections from page.tsx (they move to sub-pages):
- About preview section
- Testimonials carousel (AutoScrollTestimonials)
- Professional Journey timeline (ExperienceTimeline)
- Freelance & Consulting grid (FreelanceGrid)
- Skills radar (SkillsRadar)
- Education section (EducationHighlight)
- Latest Insights / blog preview (BlogPreview)
- FAQ section (FAQSection)
- DomainExpertise
- StatsDashboard / AboutStats

Remove unused imports for all deleted components.

Remove unused data fetches from the `Promise.all` — keep only: siteConfig, brands, caseStudies. Remove: testimonials, skillRadarData, experience, education if no longer used on homepage.

**Step 3: Verify build**

Run: `npm run build`
Expected: Build succeeds with no unused import warnings.

**Step 4: Commit**

```bash
git add src/app/page.tsx
git commit -m "feat: dark CTA footer + strip homepage to 5 focused sections"
```

---

## Task 8: Remove Layout Clutter

**Files:**
- Modify: `src/app/layout.tsx` (lines 6-8: remove ContactSidebar, AIChatWidget imports; lines 149-152: remove renders)

**Step 1: Remove ContactSidebar and AIChatWidget from layout**

Remove the imports (lines 6-7) and the rendered components (lines 149-152). Keep HydrationErrorSuppressor.

**Step 2: Verify build**

Run: `npm run build`
Expected: No errors.

**Step 3: Commit**

```bash
git add src/app/layout.tsx
git commit -m "feat: remove ContactSidebar and AIChatWidget from layout"
```

---

## Task 9: Sub-page — About (Dark Theme + Merged Skills)

**Files:**
- Modify: `src/app/about/page.tsx` (260 lines)

**Step 1: Convert about page to dark theme**

- Change all `bg-white`, `bg-gray-50`, `bg-slate-50` backgrounds to `bg-[#0F172A]` / `bg-[#020617]`
- Change text colors: headings to `text-[#F8FAFC]`, body to `text-[#94A3B8]`, captions to `text-[#64748B]`
- Change cards to use `glass-card` class
- Change links/accents from `text-blue-600` to `text-[#CA8A04]`
- Change buttons from `bg-blue-600` to `bg-[#CA8A04] text-[#020617]`
- Update breadcrumb: `text-[#64748B]` with gold active state

**Step 2: Merge skills section into about page**

If skills are not already on the about page, add a skills section below the bio using the glass card pattern. Pull skills data from the existing Supabase service.

**Step 3: Verify locally**

Check: About page renders with dark theme, glass cards, gold accents.

**Step 4: Commit**

```bash
git add src/app/about/page.tsx
git commit -m "feat: dark premium about page with merged skills"
```

---

## Task 10: Sub-page — Experience (Dark Theme)

**Files:**
- Modify: `src/app/experience/page.tsx` (139 lines)

**Step 1: Convert experience page to dark theme**

- Same color replacements as about page
- Timeline line: `border-[#1E293B]` instead of `border-gray-200`
- Timeline dots: `bg-[#CA8A04]` instead of `bg-blue-600`
- Experience cards: `glass-card` class
- Metric numbers: `text-[#CA8A04]`
- Expand/collapse buttons: `text-[#CA8A04]`

**Step 2: Verify locally**

Check: Timeline renders with dark theme, gold dots, glass cards.

**Step 3: Commit**

```bash
git add src/app/experience/page.tsx
git commit -m "feat: dark premium experience page"
```

---

## Task 11: Sub-page — Projects (Dark Theme)

**Files:**
- Modify: `src/app/projects/page.tsx`
- Modify: `src/components/ui/ProjectCard.tsx` (87 lines)

**Step 1: Convert projects page to dark theme**

- Dark backgrounds, gold filter buttons (active: `bg-[#CA8A04] text-[#020617]`, inactive: `border border-[#1E293B] text-[#94A3B8]`)
- Update breadcrumb

**Step 2: Convert ProjectCard to glass card**

- Replace `bg-white shadow-lg` with `glass-card` class
- Status badges: keep green/orange but dimmer on dark bg
- Title: `text-[#F8FAFC]`
- Description: `text-[#94A3B8]`
- Tags: `text-[#64748B] bg-[#1E293B]` pills
- Link: `text-[#CA8A04]`

**Step 3: Verify locally and commit**

```bash
git add src/app/projects/page.tsx src/components/ui/ProjectCard.tsx
git commit -m "feat: dark premium projects page + glass project cards"
```

---

## Task 12: Sub-page — Blog (Dark Theme)

**Files:**
- Modify: `src/app/blog/page.tsx`
- Modify: `src/components/ui/BlogPreview.tsx`

**Step 1: Convert blog page and BlogPreview to dark theme**

- Same pattern: dark backgrounds, glass cards, gold accents
- Featured post: glass-card with larger layout
- Blog cards: glass-card with `text-[#F8FAFC]` titles, `text-[#94A3B8]` excerpts
- Tags: `bg-[#CA8A04]/20 text-[#CA8A04]` pills
- Read links: `text-[#CA8A04]`

**Step 2: Verify locally and commit**

```bash
git add src/app/blog/page.tsx src/components/ui/BlogPreview.tsx
git commit -m "feat: dark premium blog page + glass blog cards"
```

---

## Task 13: Sub-page — Contact (Dark Theme)

**Files:**
- Modify: `src/app/contact/page.tsx` (229 lines)
- Modify: `src/components/ui/ContactForm.tsx`

**Step 1: Convert contact page to dark theme**

- Background: `bg-[#0F172A]`
- Form inputs: `bg-[#020617] border-[#1E293B] text-[#F8FAFC] focus:border-[#CA8A04]`
- Labels: `text-[#94A3B8]`
- Submit button: `bg-[#CA8A04] text-[#020617] hover:bg-[#EAB308]`
- Contact info cards: `glass-card`

**Step 2: Verify locally and commit**

```bash
git add src/app/contact/page.tsx src/components/ui/ContactForm.tsx
git commit -m "feat: dark premium contact page with glass form inputs"
```

---

## Task 14: Sub-page — Testimonials (Dark Theme)

**Files:**
- Modify: `src/app/testimonials/page.tsx`

**Step 1: Convert testimonials page to dark theme**

- Glass cards for each testimonial
- Quote text: `text-[#F8FAFC]` with `font-serif` for the quote itself
- Client name: `text-[#F8FAFC]`, title: `text-[#94A3B8]`
- Remove star ratings — just glass quote blocks
- Gold quote mark icon: `text-[#CA8A04]` large quote at top of each card

**Step 2: Verify locally and commit**

```bash
git add src/app/testimonials/page.tsx
git commit -m "feat: dark premium testimonials page"
```

---

## Task 15: Cleanup — Remove Unused Components

**Files:**
- Delete: `src/components/ui/ParticleField.tsx`
- Delete: `src/components/ui/TypewriterRole.tsx`
- Delete: `src/components/ui/AIChatWidget.tsx`
- Delete: `src/components/ui/ContactSidebar.tsx`
- Modify: `src/components/ui/ClientDynamicImports.tsx` — remove ParticleField, AIChatWidget exports

**Step 1: Delete unused component files**

```bash
rm src/components/ui/ParticleField.tsx
rm src/components/ui/TypewriterRole.tsx
rm src/components/ui/AIChatWidget.tsx
rm src/components/ui/ContactSidebar.tsx
```

**Step 2: Update ClientDynamicImports.tsx**

Remove the dynamic imports for ParticleField, AIChatWidget from this file. Keep SkillsRadar, AutoScrollTestimonials, ExperienceTimeline if still used on sub-pages.

**Step 3: Verify build**

Run: `npm run build`
Expected: No missing import errors. No unused files.

**Step 4: Commit**

```bash
git add -A
git commit -m "chore: remove unused components — ParticleField, TypewriterRole, AIChatWidget, ContactSidebar"
```

---

## Task 16: Final Build Verification & Push

**Step 1: Full build check**

Run: `npm run build`
Expected: Build succeeds with zero errors.

**Step 2: Local smoke test**

Run: `npm run dev`
Verify each page loads correctly:
- `/` — 5-section dark homepage
- `/about` — dark with glass cards
- `/experience` — dark timeline
- `/projects` — dark grid with glass cards
- `/blog` — dark blog listing
- `/contact` — dark form
- `/testimonials` — dark quote blocks

**Step 3: Push to GitHub**

```bash
git push origin main
```

Verify Vercel deploys successfully.
