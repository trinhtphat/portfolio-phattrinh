# 3D Interactive Depth & Mobile Sticky Glass Bar Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Transform the mobile landing page experience by replacing the cluttered vertical sidebar stack with a luxury 56px sticky glass topbar and horizontal pill navigation, and add a lightweight, buttery-smooth 60–120 FPS 3D perspective tilt and dynamic specular light sheen across key cards with zero external libraries.

**Architecture:** 
1. Mobile layout refactor in `index.html`: at `<= 1024px`, convert top sidebar into a fixed 56px glass topbar (`backdrop-filter: blur(16px)`) with mini-avatar (36px), brand wordmark, quick Hub trigger, and compact language toggle, followed by a smooth horizontal-scrolling navigation strip (`overflow-x: auto`), freeing above-the-fold space for the hero.
2. 3D perspective layer: add `data-depth-card` attribute and CSS 3D perspective (`preserve-3d`, `translateZ`, `--light-x`, `--light-y`) to Hero portrait card, stat cards, pillar cards, and gallery cards.
3. Vanilla JS controller: a ~1.5KB passive pointermove/touch tracker running on `requestAnimationFrame` with linear interpolation (Lerp), pausing updates during scroll events to guarantee 0% mobile jank.

**Tech Stack:** Vanilla HTML5, CSS3 3D Transforms, Vanilla JavaScript (`requestAnimationFrame`, passive event listeners). Zero external dependencies.

**Spec:** [`docs/superpowers/specs/2026-11-04-3d-interactive-depth-design.md`](../specs/2026-11-04-3d-interactive-depth-design.md)

## Global Constraints

- Zero external libraries or CDN bundles (0 dependencies).
- Maintain existing DOM IDs: `#openDrawerBtn`, `#heroHubBtn`, `.lang-toggle`, `#openPasscodeModalBtn`.
- All 4 automated test suites in `tests/test_*.py` and `tests/portfolio_regression.html` must pass 100%.
- Respect `prefers-reduced-motion: reduce` by disabling 3D tilts and maintaining flat, accessible layouts.
- Mobile viewport 375px/390px must have zero horizontal overflow (`overflow-x: hidden` on viewport level) and no clipped headline words.

---

### Task 1: Mobile Topbar & Sidenav Refactor (CSS & Structure in `index.html`)

**Files:**
- Modify: `6. Tools - Active Projects/portfolio-phattrinh/index.html`
- Test: `tests/portfolio_regression.html` & `tests/test_portfolio_integration.py`

- [x] **Step 1: Write mobile regression checks in `tests/portfolio_regression.html`**
  Added checks verifying that on mobile view, the mobile topbar exists with brand name, lang toggle, and `#openDrawerBtn`, and `.sidenav` allows horizontal scroll without overflow.

- [x] **Step 2: Run test to verify it fails**
  Ran: `python -m unittest tests/test_portfolio_integration.py` -> Verified RED.

- [x] **Step 3: Implement Mobile Sticky Glass Topbar & Horizontal Nav in `index.html`**
  - Added markup for `.mobile-topbar` with mini avatar (36px), brand name ("Phát Trịnh"), quick Hub link (`🥃 HUB`), and compact `[EN|VI]` toggle.
  - In `@media (max-width: 1024px)`:
    - Removed redundant 90px standalone avatar.
    - Styled `.sidebar` as horizontal pill strip with `scrollbar-width: none`.
    - Clamped `--step-display` on `<= 640px` to `clamp(28px, 7.5vw, 36px)`.

- [x] **Step 4: Run test to verify it passes**
  Ran: `python -m unittest discover tests -p "test_*.py"` -> Verified GREEN.

---

### Task 2: CSS 3D Depth & Specular Light Sheen Layer in `index.html`

**Files:**
- Modify: `6. Tools - Active Projects/portfolio-phattrinh/index.html` (CSS `<style>` section)

- [x] **Step 1: Add unit check in `tests/portfolio_regression.html`**
  Verified that cards targeted for 3D depth have `data-depth-card` attributes and CSS perspective is applied.

- [x] **Step 2: Run test to verify it fails**
  Ran: `python -m unittest discover tests -p "test_*.py"` -> Verified RED (`Expected at least 8 [data-depth-card] elements, got 0`).

- [x] **Step 3: Implement CSS 3D rules and `data-depth-card` markup**
  - Tagged `.hero-portrait-card`, `.stat-card` (4x), `.pillar-card` (3x), and `.g-tile` (14x) with `data-depth-card`.
  - Added CSS 3D rules: `perspective: 1000px`, `transform-style: preserve-3d`, `translateZ(18px)` on floating elements, and `::after` dynamic specular radial gradient with `--light-x`, `--light-y`.
  - Added `@media (prefers-reduced-motion: reduce)` accessibility fallback.

- [x] **Step 4: Run test to verify it passes**
  Ran: `python -m unittest discover tests -p "test_*.py"` -> Verified GREEN.

---

### Task 3: Vanilla JS Lerp & Passive Scroll Controller in `index.html`

**Files:**
- Modify: `6. Tools - Active Projects/portfolio-phattrinh/index.html` (`<script>` section)

- [x] **Step 1: Add automated check in `tests/portfolio_regression.html`**
  Verified `initInteractiveDepth()` is initialized and handles pointermove/leave events and sets CSS variables.

- [x] **Step 2: Implement `initInteractiveDepth()` script**
  - Attached passive `pointermove`, `pointerenter`, `pointerleave` listeners to `[data-depth-card]`.
  - Normalized coordinates (-1 to 1) with 8-degree max tilt limit.
  - Integrated `requestAnimationFrame` with Lerp factor 0.12 for butter-smooth momentum.
  - Added passive window `scroll` listener pausing tilt updates during vertical scrolling (150ms debounce) for 0% mobile scroll lag.

- [x] **Step 3: Run test to verify it passes**
  Ran: `python -m unittest discover tests -p "test_*.py"` -> Verified GREEN.

---

### Task 4: Visual Regression & Mobile Inspection

**Files:**
- Output Artifacts: `preview_screenshots/12_mobile_topbar_fixed.png`, `preview_screenshots/13_desktop_3d_depth.png`, `preview_screenshots/14_desktop_pillars_3d.png`

- [x] **Step 1: Capture screenshot of mobile topbar at 390px**
  Verified: No double portrait, sticky topbar with mini avatar + branding + quick Hub link + compact EN/VI toggle, horizontal scrollable pills, hero title perfectly fitted without text clipping.

- [x] **Step 2: Capture screenshot of desktop cards**
  Verified: Desktop layout intact, cards exhibit depth perspective styling cleanly with zero regressions.

- [x] **Step 3: Final pass across all test suites**
  Ran: `python -m unittest discover -s "6. Tools - Active Projects/portfolio-phattrinh/tests" -p "test_*.py" -v`
  Result: 4/4 test suites PASS (100% GREEN).
