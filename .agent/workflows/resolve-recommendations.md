---
description: Resolve all analysis report recommendations while preserving existing layout, fonts, and colors
---

# Resolve All Site Recommendations

> **Constraint:** Do NOT change the site layout, fonts, or color palette. All visual output must remain identical.

---

## Phase 1 — P0 Critical Fixes (Quick Wins)

### Step 1.1 — Fix SEO & Meta Tags

Edit `index.html`:

- Change `<title>` to `A.I. ARCHITECT — AI Workshop for Architects & Designers`
- Add `<meta name="description" content="Hands-on AI workshop for architects, interior designers, and construction managers. Learn to create photorealistic renders and cinematic project pitches with generative AI.">` inside `<head>`
- Add Open Graph tags (`og:title`, `og:description`, `og:type`, `og:url`, `og:image`)
- Add Twitter Card tags (`twitter:card`, `twitter:title`, `twitter:description`)
- Add `<link rel="icon" href="/favicon.ico">` (generate a simple orange square favicon if none exists)

### Step 1.2 — Remove Unused Dependencies

// turbo
Run: `npm uninstall @google/genai express dotenv better-sqlite3 lucide-react`

### Step 1.3 — Fix Duplicate Vite Dependency

Edit `package.json`:

- Remove `"vite": "^6.2.0"` from `dependencies` (keep it only in `devDependencies`)

### Step 1.4 — Remove API Key Exposure

Edit `vite.config.ts`:

- Delete the entire `define` block:
  ```diff
  -    define: {
  -      'process.env.GEMINI_API_KEY': JSON.stringify(env.GEMINI_API_KEY),
  -    },
  ```
- Remove the `loadEnv` import and `env` variable if no longer used
- Simplify the config to a plain `defineConfig({...})` if the mode parameter is no longer needed

### Step 1.5 — Generate Lockfile

// turbo
Run: `npm install`

// turbo
Run: `git add package-lock.json`

---

## Phase 2 — P1 Functional Fixes

### Step 2.1 — Make Gallery Filter Functional

Edit the `ArchiveGallery` component in `App.tsx` (or its extracted file):

- Add a `filter` field to each image object that matches the filter button values (e.g., `"FLUX.1"`, `"MIDJOURNEY"`, etc.)
- Filter the `images` array based on `activeFilter` before rendering:
  ```tsx
  const filtered =
    activeFilter === "ALL_GENS"
      ? images
      : images.filter((img) => img.filter === activeFilter);
  ```
- Render `filtered` instead of `images`

### Step 2.2 — Connect CTA Buttons

Edit all CTA buttons to add real actions:

- **"Apply Now"** buttons (header, hero, footer): Link to an external form URL or add an `onClick` that opens a modal / navigates to a form. Use `window.open()` or an `<a>` tag styled as a button.
- **"Join Waitlist"** buttons (hero, footer): Same approach — link to a waitlist form.
- **"Request Corporate Proposal"**: Add `onClick` that opens a `mailto:` link or a contact form.
- **"LOAD_MORE_ARCHIVE_DATA"**: Either implement pagination/lazy-load for the gallery, or remove the button entirely if pagination is not planned.
- **"BATCH_EXPORT", "GRID_SHARE", "EXPAND_ALL", "GLOBAL_META"**: These are decorative. Add `disabled` attribute and reduce opacity, OR remove them entirely to avoid misleading users.

> **Note:** If real form URLs are not available yet, use placeholder `href="#apply"` anchors and add a `// TODO:` comment. The user should provide actual form URLs.

### Step 2.3 — Add Mobile Hamburger Menu

Edit the `Header` component:

- Add a `useState` for `menuOpen`
- Add a hamburger icon button visible only on `lg:hidden`
- Render a slide-out or dropdown mobile menu that shows the nav links and "Apply Now" CTA
- Use Framer Motion `AnimatePresence` for smooth open/close
- Do NOT change the desktop layout — only add mobile-specific elements

### Step 2.4 — Fix Accessibility

**a) FAQ ARIA attributes:**
Edit the `FAQItem` component:

- Add `aria-expanded={isOpen}` to the button
- Add `aria-controls={`faq-panel-${id}`}` to the button (pass an `id` prop or generate from index)
- Wrap the answer in a `<div role="region" aria-labelledby={`faq-btn-${id}`} id={`faq-panel-${id}`}>`
- Add `id={`faq-btn-${id}`}` to the button

**b) Gallery alt text:**

- Replace `"Gallery image 0"`, `"Gallery image 1"`, etc. with descriptive text for each image (e.g., `"Modern residential exterior with glass facade"`)
- Add an `alt` field to each image data object

**c) Section landmarks:**

- Add `aria-label` to each `<section>` element (e.g., `aria-label="Curriculum Modules"`, `aria-label="Instructor Bio"`)

**d) Contrast — muted text fix:**
Edit `index.css`:

- Change `--color-muted: #666666` to `--color-muted: #8a8a8a` (achieves ~5.5:1 contrast ratio on #121212 background)
- This is a contrast adjustment, NOT a color palette change — it stays within the existing grey scale

> **Important:** Do NOT change any other color tokens. Only adjust the muted grey for accessibility compliance.

---

## Phase 3 — P2 Architecture & Performance

### Step 3.1 — Split App.tsx into Components

Create a `src/components/` directory and extract each component into its own file:

// turbo
Run: `mkdir -p src/components/ui`

Create the following files by moving each component out of `App.tsx`:

| New File                               | Component(s)                               |
| -------------------------------------- | ------------------------------------------ |
| `src/components/ui/Crosshairs.tsx`     | `Crosshairs`                               |
| `src/components/Header.tsx`            | `Header` (including any mobile menu state) |
| `src/components/Hero.tsx`              | `Hero`                                     |
| `src/components/PhaseShift.tsx`        | `PhaseShift`                               |
| `src/components/GalleryPreview.tsx`    | `GalleryPreview`                           |
| `src/components/Curriculum.tsx`        | `Curriculum`                               |
| `src/components/ArchiveGallery.tsx`    | `ArchiveGallery`                           |
| `src/components/TechStack.tsx`         | `TechStack`                                |
| `src/components/Instructor.tsx`        | `Instructor`                               |
| `src/components/FAQ.tsx`               | `FAQ` + `FAQItem`                          |
| `src/components/CorporateTraining.tsx` | `CorporateTraining`                        |
| `src/components/Footer.tsx`            | `Footer`                                   |

Each file should:

- Import React and any hooks it uses
- Import Framer Motion if needed
- Import `Crosshairs` from `./ui/Crosshairs` if used
- Export the component as default

Update `App.tsx` to import all components and compose them in the render. The final `App.tsx` should be under 30 lines.

### Step 3.2 — Extract Content to Data Files

Create `src/data/content.ts`:

- Move the `modules` array from `Curriculum`
- Move the `faqs` array from `FAQ`
- Move the `images` array from `ArchiveGallery`
- Move the `filters` array from `ArchiveGallery`
- Move the `items` array from `TechStack`
- Export all as named exports with proper TypeScript interfaces

Update each component to import its data from `src/data/content.ts`.

### Step 3.3 — Self-Host Images & Add Lazy Loading

- Download all external images from `lh3.googleusercontent.com` URLs and save to `public/images/`
- Convert images to WebP format for smaller file sizes
- Update all `<img>` `src` attributes to use local paths (e.g., `/images/hero-wireframe.webp`)
- Add `loading="lazy"` to every `<img>` that is below the fold (i.e., all except the hero image)
- Add `decoding="async"` to all images
- Note: Do not add `srcset` unless multiple resolutions are generated

// turbo
Run: `mkdir -p public/images`

### Step 3.4 — Optimize Font Loading

Edit `index.html`:

- Add `<link rel="preconnect" href="https://fonts.googleapis.com">` and `<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>` before any CSS
- Move the Google Fonts `@import` calls from `index.css` to `<link>` tags in `index.html` for parallel loading:
  ```html
  <link
    rel="stylesheet"
    href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300;400;500;600;700&family=Manrope:wght@400;500;600&family=JetBrains+Mono:wght@400;500&display=swap"
  />
  <link
    rel="stylesheet"
    href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap"
  />
  ```
- Remove the two `@import url(...)` lines from `index.css`

### Step 3.5 — Add Smooth Scroll & Scroll-to-Top

Edit `index.css` base layer:

- Add `html { scroll-behavior: smooth; }` (inside the `@layer base` block)

Create a `src/components/ScrollToTop.tsx` component:

- A fixed-position button in the bottom-right corner
- Only visible when scrolled past 400px (use `useState` + `useEffect` with a scroll listener)
- Clicking calls `window.scrollTo({ top: 0, behavior: 'smooth' })`
- Style with the existing `bg-primary` and `text-white` classes
- Use a `keyboard_arrow_up` Material Symbol icon

Add `<ScrollToTop />` to `App.tsx` at the bottom of the render.

---

## Phase 4 — P3 Developer Experience

### Step 4.1 — Enable Strict TypeScript

Edit `tsconfig.json`:

- Add `"strict": true` to `compilerOptions`

// turbo
Run: `npx tsc --noEmit`

Fix any type errors that appear (likely minimal since the codebase is small). Common fixes:

- Add type annotations to event handlers
- Add null checks where `!` non-null assertions are used

### Step 4.2 — Add Basic Smoke Test

// turbo
Run: `npm install -D vitest @testing-library/react @testing-library/jest-dom jsdom`

Create `src/App.test.tsx`:

```tsx
import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import App from "./App";

describe("App", () => {
  it("renders without crashing", () => {
    render(<App />);
    expect(screen.getByText("A.I. ARCHITECT")).toBeInTheDocument();
  });

  it("renders all main sections", () => {
    render(<App />);
    expect(screen.getByText(/REVOLUTIONIZE/)).toBeInTheDocument();
    expect(screen.getByText(/CURRICULUM_MODULES/)).toBeInTheDocument();
    expect(screen.getByText(/BRAUHAUS/)).toBeInTheDocument();
    expect(screen.getByText(/Support_Protocols/)).toBeInTheDocument();
  });
});
```

Create `vitest.config.ts`:

```ts
import { defineConfig } from "vitest/config";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  test: {
    environment: "jsdom",
    setupFiles: ["./src/test-setup.ts"],
  },
});
```

Create `src/test-setup.ts`:

```ts
import "@testing-library/jest-dom";
```

Add test script to `package.json`:

```json
"test": "vitest run"
```

// turbo
Run: `npm test`

### Step 4.3 — Add CI Pipeline

Create `.github/workflows/ci.yml`:

```yaml
name: CI
on:
  push:
    branches: [main]
  pull_request:
    branches: [main]
jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with:
          node-version: 20
          cache: npm
      - run: npm ci
      - run: npm run lint
      - run: npm test
      - run: npm run build
```

### Step 4.4 — Fix React Key Anti-Pattern

Edit every `.map()` call across all components:

- Replace `key={i}` with a unique, stable key derived from the data:
  - Curriculum modules: `key={mod.num}`
  - FAQ items: `key={faq.q}` (questions are unique strings)
  - Archive gallery images: `key={img.id}`
  - Tech stack items: `key={item}`
  - Gallery filter buttons: `key={f}` (already correct)

### Step 4.5 — Add Marquee GPU Optimization

Edit `index.css`:

- Add `will-change: transform` to the marquee animation container in the `.animate-marquee` class, or apply it inline via Tailwind.

---

## Phase 5 — Verification

### Step 5.1 — Type Check

// turbo
Run: `npx tsc --noEmit`

Expect: zero errors.

### Step 5.2 — Run Tests

// turbo
Run: `npm test`

Expect: all tests pass.

### Step 5.3 — Build Check

// turbo
Run: `npm run build`

Expect: clean production build with no warnings.

### Step 5.4 — Visual Verification

// turbo
Run: `npm run dev`

Open `http://localhost:3000` in the browser and verify:

1. Layout is unchanged
2. Fonts are unchanged
3. Colors are unchanged
4. Mobile hamburger menu appears on narrow viewports
5. Gallery filter buttons actually filter the images
6. FAQ accordion has smooth animation and correct ARIA
7. Smooth scrolling works on nav links
8. Scroll-to-top button appears on scroll
9. All images load correctly (if self-hosted)
10. No console errors
