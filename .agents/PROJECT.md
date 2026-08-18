# Project: Mow & Glow Property Services Landing Page

## Architecture
- Standalone modern high-performance responsive web application built in `c:\Users\frenc\active`.
- Pure modern HTML5, CSS3 (with custom CSS variables for design tokens), and modular Vanilla JavaScript for smooth interactions, lightbox/slider features, sticky navbar, and interactive contact form.
- Asset handling: Localized/cached image assets and crisp SVG icons for maximum reliability and high-speed loading.

## Feature Inventory
| # | Feature | Description | Milestone | Source |
|---|---------|-------------|-----------|--------|
| 1 | Core Branding & Layout Replication | Exact replica of colors (#363f48, #cef0e6, #9ae1cc), logo, typography (Montserrat, Julius Sans One), content, 6 service cards, 3 galleries, quick info strip, sponsorship badge, footer | M1 | R1, survey |
| 2 | Sticky Navbar & Nav Links | Desktop & mobile sticky header with brand title, navigation menu (#services, #galleries, #about, #contact), prominent Call Now button | M2 | R2, survey |
| 3 | Above-the-Fold Immediate Contact CTAs | Dual primary call-to-action buttons in Hero section ("Call 0400 856 532" & "Get Free Quote") with smooth scroll to quote form | M2 | R2, survey |
| 4 | Visually Distinct Embedded Quote Form | High-converting form with card container, distinctive border, drop shadow, contrast background, clear fields (Name, Email, Phone, Message, Copy checkbox), and submit button | M3 | R3, survey |
| 5 | Modernized UI/UX & Responsive Polish | Mobile-first design, micro-interactions, responsive grid layouts, trust badges, smooth gallery modal/lightbox sliders, zero AI slop | M4 | R4, survey |
| 6 | E2E Testing & Hardening | 100% pass on E2E test suite (Tiers 1-4) and Tier 5 adversarial coverage hardening | M5 | acceptance |

## Milestones
| # | Name | Scope | Dependencies | Status |
|---|------|-------|-------------|--------|
| M1 | Core Branding & Layout Replication | HTML structure, CSS color tokens, 6 service cards, quick info, 3 galleries, footer | none | DONE |
| M2 | Modern Navigation & Immediate CTAs | Sticky header, nav links, Call Now CTA, Hero CTA buttons, smooth scroll | M1 | DONE |
| M3 | High-Converting Embedded Form | Distinct card container, border, shadow, form controls, validation, feedback | M1 | DONE |
| M4 | Modernized UI/UX, Trust Signals & Polish | Responsive layout, gallery lightbox/slider, trust badges, hover states | M1, M2, M3 | DONE |
| M5 | E2E Test Suite & Hardening | Pass 100% E2E tests (Tiers 1-4) & Tier 5 adversarial coverage hardening | M1-M4 | DONE |

## Interface Contracts
### Header ↔ Page Navigation
- Nav links (`#services`, `#galleries`, `#about`, `#contact`, `#quote-form`) trigger smooth scroll to respective DOM section IDs.
- Sticky navbar activates shadow/background blur on scroll.

### Hero / CTAs ↔ Quote Form
- CTA buttons `href="#quote-form"` trigger smooth scroll and highlight/focus the quote form.

### Quote Form ↔ Validation / Feedback
- Form submission validates required fields (Name, Email, Message) client-side and displays a success toast/modal state.

## Code Layout
- Target directory: `c:\Users\frenc\active\`
- Files:
  - `c:\Users\frenc\active\index.html` (Main landing page)
  - `c:\Users\frenc\active\css\styles.css` (Design tokens, layout, custom animations, responsive breakpoints)
  - `c:\Users\frenc\active\js\main.js` (Sticky nav behavior, smooth scrolling, form validation, gallery sliders)
  - `c:\Users\frenc\active\test-runner.js` (Comprehensive automated E2E test suite)
  - `c:\Users\frenc\active\TEST_READY.md` (Test suite documentation and catalog)
