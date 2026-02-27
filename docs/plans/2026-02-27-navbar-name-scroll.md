# Navbar Name-on-Scroll Implementation Plan

> **For Claude:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task.

**Goal:** Remove the redundant navbar name, reduce navbar height, and slide "Rishav Chatterjee" into the navbar when the hero name scrolls out of view.

**Architecture:** IntersectionObserver on the hero h1 drives a state change in Navbar. The name slides in via CSS transition (opacity + translateX). No shared state or context needed — Navbar observes the DOM directly.

**Tech Stack:** Next.js 15, React 19, Tailwind CSS, IntersectionObserver API

---

### Task 1: Add id to hero h1

**Files:**
- Modify: `src/app/page.tsx:52`

**Step 1: Add the id attribute**

Change line 52 from:
```tsx
<h1 className="text-3xl md:text-5xl font-bold mb-6 tracking-tight leading-tight font-[family-name:var(--font-geist-sans)] text-gray-200">
```
to:
```tsx
<h1 id="hero-name" className="text-3xl md:text-5xl font-bold mb-6 tracking-tight leading-tight text-gray-200" style={{ fontFamily: 'var(--font-ubuntu)' }}>
```

Note: Also switches font from Geist Sans to Ubuntu (as per design), and removes the `font-[family-name:var(--font-geist-sans)]` class.

**Step 2: Verify locally**

Run: `npm run dev`
Open: http://localhost:3000
Expected: Hero name still renders identically (now in Ubuntu font). Inspect element should show `id="hero-name"`.

**Step 3: Commit**

```bash
git add src/app/page.tsx
git commit -m "feat: add id to hero name h1, switch to Ubuntu font"
```

---

### Task 2: Rewrite Navbar — remove NavbarName, add slide-in name

**Files:**
- Modify: `src/components/navbar/Navbar.tsx`
- Delete: `src/components/navbar/NavbarName.tsx`

**Step 1: Rewrite Navbar.tsx**

Replace the entire component. Key changes:
1. Remove `import NavbarName from './NavbarName'`
2. Add `heroVisible` state with `IntersectionObserver` on `#hero-name`
3. Replace `<NavbarName>` with a conditional name that slides in
4. Reduce padding from `p-4` to `py-2 px-4`

The navbar left section becomes:

```tsx
<div className="flex items-center space-x-3">
  <Link href="/" onClick={closeMenu}>
    <span
      className={`text-lg md:text-xl font-semibold transition-all duration-300 ease-out ${
        !heroVisible
          ? 'opacity-100 translate-x-0'
          : 'opacity-0 -translate-x-5 pointer-events-none'
      }`}
      style={{ fontFamily: 'var(--font-ubuntu)' }}
    >
      Rishav Chatterjee
    </span>
  </Link>
</div>
```

The IntersectionObserver logic:

```tsx
const [heroVisible, setHeroVisible] = useState(true);

useEffect(() => {
  const heroEl = document.getElementById('hero-name');
  if (!heroEl) {
    // Not on homepage — show name in navbar
    setHeroVisible(false);
    return;
  }

  const observer = new IntersectionObserver(
    ([entry]) => {
      setHeroVisible(entry.isIntersecting);
    },
    { threshold: 0.1 }
  );

  observer.observe(heroEl);
  return () => observer.disconnect();
}, [pathname]);
```

Important: The `pathname` dependency ensures the observer re-attaches when navigating between pages. On non-homepage routes, `#hero-name` won't exist, so the name always shows.

The full nav tag becomes:
```tsx
<nav
  className={`fixed top-0 left-0 right-0 z-50 py-2 px-4 transition-all duration-300 bg-white ${
    scrolled || isOpen ? 'shadow-md' : ''
  }`}
>
```

**Step 2: Delete NavbarName.tsx**

```bash
rm src/components/navbar/NavbarName.tsx
```

**Step 3: Verify locally**

Run: `npm run dev`
Open: http://localhost:3000

Expected behavior:
- Top of page: Navbar has no name, just nav links
- Scroll past hero h1: "Rishav Chatterjee" slides in from left in navbar
- Scroll back up: Name slides out / fades away
- Navigate to /blog: Name shows in navbar (no hero on that page)
- Navigate back to /: Name hidden again at top

**Step 4: Commit**

```bash
git add src/components/navbar/Navbar.tsx
git commit -m "feat: navbar name slides in on scroll, remove NavbarName component"
```

---

### Task 3: Delete Bungee Shade font and braggadocio CSS

**Files:**
- Delete: `src/styles/custom-fonts.css`
- Modify: `src/app/layout.tsx:4` — remove the import

**Step 1: Remove the import from layout.tsx**

Delete this line from `src/app/layout.tsx`:
```tsx
import "../styles/custom-fonts.css";
```

**Step 2: Delete the CSS file**

```bash
rm src/styles/custom-fonts.css
```

**Step 3: Build check**

Run: `npm run build`
Expected: Build succeeds with zero errors. No references to font-braggadocio or Bungee Shade remain.

**Step 4: Commit**

```bash
git add -u
git commit -m "perf: remove Bungee Shade font and braggadocio CSS (unused)"
```

---

### Task 4: Final verification and push

**Step 1: Full build**

Run: `npm run build`
Expected: Clean build, no warnings related to NavbarName or fonts.

**Step 2: Visual verification**

Run: `npm run dev`
Check these scenarios:
- [ ] Homepage at top: No name in navbar, compact navbar height
- [ ] Homepage scrolled: "Rishav Chatterjee" slides in smoothly from left
- [ ] Homepage scroll back up: Name slides out / fades
- [ ] /blog page: Name shows in navbar immediately
- [ ] /contact page: Name shows in navbar immediately
- [ ] Mobile responsive: Name appears/hides correctly on mobile
- [ ] Navbar shadow appears on scroll

**Step 3: Push**

```bash
git push origin main
```
