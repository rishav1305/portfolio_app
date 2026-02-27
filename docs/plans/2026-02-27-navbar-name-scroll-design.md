# Navbar Name-on-Scroll Design

## Problem

The name "RISHAV" appears in both the navbar (Braggadocio font with animated sweep) and the hero section ("Rishav Chatterjee" in Geist Sans). This is redundant and wastes navbar space.

## Solution: CSS Position Morph (Approach A)

Remove the name from the navbar initially. When the user scrolls past the hero name, "Rishav Chatterjee" slides into the navbar from the left with a smooth CSS transition. This creates the illusion of the name flying from hero to navbar.

## Design

### Hero Section
- "Rishav Chatterjee" in Ubuntu font, `text-3xl md:text-5xl`, `font-bold`, gray-200 text
- Add `id="hero-name"` to the h1 for IntersectionObserver targeting
- No other changes to typewriter or tagline

### Navbar — Initial State (top of page)
- No name on the left side
- Nav links right-aligned as current
- Reduced height: `py-2 px-4` (compact, ~48px)
- White background, no shadow

### Navbar — Scrolled State (hero name leaves viewport)
- "Rishav Chatterjee" slides in: `opacity 0->1` + `translateX -20px->0`, 300ms ease-out
- Ubuntu font, `text-lg md:text-xl`, `font-semibold`, black text
- Navbar gets shadow-md

### Scroll Detection
- IntersectionObserver on `#hero-name` element
- Not intersecting = show navbar name
- Intersecting = hide navbar name
- More reliable than fixed scroll pixel threshold

### Communication Pattern
Navbar uses IntersectionObserver to watch `#hero-name` directly from the DOM. No context/events needed. Falls back gracefully if the element doesn't exist (non-homepage).

## Files Changed

| File | Action |
|------|--------|
| `src/components/navbar/Navbar.tsx` | Remove NavbarName import, add IntersectionObserver logic, add slide-in name |
| `src/components/navbar/NavbarName.tsx` | Delete |
| `src/app/page.tsx` | Add `id="hero-name"` to hero h1 |
| `src/app/globals.css` | Add slide-in animation class |
| `src/styles/custom-fonts.css` | Delete Bungee Shade import + font-braggadocio class |

## What Gets Deleted
- NavbarName.tsx component
- Bungee Shade font import (only used by NavbarName)
- font-braggadocio CSS class
