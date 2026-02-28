# Portfolio App — rishavchatterjee.com

Next.js 15 portfolio site. Deployed on Vercel via GitHub Actions.

## Architecture

**Data layer**: All content lives in Supabase (PostgreSQL). Content changes = update Supabase rows. No code push needed.

**UI layer**: Next.js App Router with server components. UI changes = edit code, push to GitHub, Vercel auto-deploys.

## Changing Content (Data)

Content is stored in Supabase. To update text, add testimonials, change stats, etc.:

1. Access Supabase dashboard: https://supabase.com/dashboard (project: portfolio)
2. Navigate to Table Editor
3. Edit the relevant table directly

**Supabase tables:**

| Table | What It Stores |
|-------|---------------|
| site_config | Name, title, bio, social links, domain expertise |
| experience | Work history (professional + freelance) |
| education | Degrees and certifications |
| projects | Portfolio projects |
| skills | Tech skills by category |
| services | Service offerings |
| testimonials | Client testimonials |
| case_studies | Detailed case studies |
| brands | Brand logos for marquee |
| skill_radar_data | Radar chart data points |
| stats_dashboard | Homepage stats (years exp, projects, etc.) |
| faqs | FAQ section Q&A pairs |
| chat_questions | AI chat widget suggested questions |

**To re-seed from local data:** `npx tsx scripts/seed-{table}.ts` (reads from `src/data/portfolioData.ts`)

**To recreate a table:** `npx tsx scripts/setup-{table}-db.ts` then seed it

**Environment:** Supabase credentials are in `.env.local` (NEXT_PUBLIC_SUPABASE_URL, NEXT_PUBLIC_SUPABASE_ANON_KEY)

## Changing UI

1. Edit code in `src/`
2. Verify locally: `npm run dev` (http://localhost:3000)
3. Build check: `npm run build`
4. Push to GitHub — Vercel auto-deploys from `main` branch

## Project Structure

```
src/
  app/            # Next.js pages (App Router)
  components/     # React components (ui/, seo/, navbar/)
  contexts/       # SiteConfigContext (shared site config)
  data/           # portfolioData.ts (seed source only, not used at runtime)
  services/       # Supabase fetchers (one per table)
  types/          # TypeScript types (portfolio.ts, db-rows.ts)
  lib/            # Supabase client init
scripts/          # setup-*-db.ts and seed-*.ts for each table
supabase/         # schema.sql reference
```

## Key Patterns

- **Service fetchers** (`src/services/*.ts`): Each exports a `get*()` function that queries Supabase and maps DB rows to typed objects
- **SiteConfigContext**: Fetched once in `layout.tsx` (server-side), shared via React context to all client components
- **Home page** (`page.tsx`): Async server component — fetches all data with `Promise.all`, passes as props
- **Dynamic imports**: Components using `ssr: false` are wrapped in `src/components/ui/ClientDynamicImports.tsx` (must be `'use client'`)

## Conventions

- TypeScript strict mode
- Tailwind CSS for styling
- framer-motion for animations (requires `'use client'`)
- No direct `portfolioData` imports in components — all data comes from Supabase services
- Images stay in `public/` — only metadata paths stored in Supabase

## Commands

```bash
npm run dev       # Local dev server
npm run build     # Production build (catches type errors)
npm run lint      # ESLint
```
