# Brand Logo Bar Redesign

**Date:** 2026-02-28
**Status:** Approved

## Problem

Homepage brand logos are barely visible and inconsistent:
- Mixed file formats (SVG, PNG, JPG, WebP) with some having opaque backgrounds
- Bitwise (JPG) and Jubilant (PNG) render as dark rectangles
- Dettol renders as a tiny circle
- Wildly inconsistent perceived sizes (Novartis huge, TWC tiny)
- Double-invert CSS filter fails on non-transparent backgrounds
- 11 logos wrap to 2 rows unevenly

## Design

White-on-dark logo bar. All logos uniform height, single row, no wrapping.

### Logo file replacements

| Brand | Current | Action |
|-------|---------|--------|
| TWC | twc.svg | Keep |
| IBM | ibm.svg | Keep |
| Bitwise | bitwise.jpg | Replace with transparent PNG |
| Gartner | gartner.svg | Keep |
| Novartis | novartis.svg | Keep |
| Polestar | polestar.svg | Keep |
| Jubilant | jubilant.png | Replace with transparent PNG |
| Dominos | dominos.png | Switch to existing dominos.svg |
| Reckitt | reckitt.svg | Keep |
| Dettol | dettol.png | Replace with transparent PNG/SVG |
| IndiaMart | indiamart.webp | Replace with transparent PNG |

### CSS changes (page.tsx proof bar)

- Filter: `brightness(0) invert(1)` (clean white conversion)
- Opacity: `opacity-50 hover:opacity-100 transition-opacity`
- Height: `h-7` uniform for all
- Gap: `gap-8` to fit single row
- Container: `max-w-7xl`

### Supabase updates

Update `brands.logo` column for replaced files to point to new filenames.

## Implementation steps

1. Download transparent-background logos for Bitwise, Jubilant, Dettol, IndiaMart
2. Save to `public/images/brands/`
3. Update Supabase `brands` table logo paths
4. Fix CSS in `src/app/page.tsx` proof bar section
5. Verify in browser
6. Commit and push
