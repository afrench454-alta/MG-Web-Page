# Mow & Glow E2E Test Suite & Test Runner Guide

> Status: Test Suite Fully Implemented & Ready  
> Location: `c:\Users\frenc\active\test-runner.js`  
> Execution Engine: Node.js (with Playwright Chromium & JSDOM HTTP Server)  
> Overall Test Suite Coverage: **63 Assertions across 4 Tiers**  
> Test Pass Rate: **63/63 (100%)**

---

## 1. How to Invoke the Test Runner

Ensure Node.js is installed on your system. Navigate to the working directory and run:

```bash
node test-runner.js
```

### Pre-requisites
All required dependencies are installed in `c:\Users\frenc\active\package.json`:
- `jsdom` (DOM & Event Simulation)
- `playwright` (Chromium Headless E2E Browser Testing)

---

## 2. Test Suite Overview & Structure

The automated test runner is organized into **4 Tiers** of comprehensive testing:

| Tier | Focus Area | Assertions | Pass Count | Status |
|------|------------|:----------:|:----------:|:------:|
| **Tier 1** | Feature Coverage (R1 Branding, Copy, CTAs, Form, Nav) | 30 | 30 | **100% PASS** |
| **Tier 2** | Boundary & Corner Cases (Validation, Viewports, Targets) | 17 | 17 | **100% PASS** |
| **Tier 3** | Cross-Feature Interactions (CTA scroll, Modals, Tabs, Forms) | 13 | 13 | **100% PASS** |
| **Tier 4** | Real-World Application Scenarios (End-to-End User Workflows) | 3 | 3 | **100% PASS** |
| **TOTAL** | **Full E2E Requirements Verification** | **63** | **63** | **100% PASS** |

---

## 3. Comprehensive Test Case Catalog

### Tier 1: Feature Coverage (30 Assertions)
- `T1.1`: Page title contains brand name "Mow & Glow Property Services"
- `T1.2`: CSS defines primary dark slate color `#363f48`
- `T1.3`: CSS defines primary mint green color `#cef0e6`
- `T1.4`: CSS defines secondary teal green color `#9ae1cc`
- `T1.5`: Brand logo title present with "Mow & Glow Property Services"
- `T1.6`: Google fonts link imports "Julius Sans One" and "Montserrat"
- `T1.7`: Exactly 6 service cards present in DOM
- `T1.8` - `T1.13`: Copy & title keywords for all 6 service cards:
  - Lawn mowing (MOW & SNIP, even cuts, green waste)
  - Yard clean-ups (trim overgrowth, hedging, pruning)
  - Domestic cleaning (Eco-friendly, kitchens, bathrooms)
  - Comprehensive Bond Cleans (vacant, lease, real estate)
  - NDIS support services (NDIS, living environments, wellbeing)
  - Commercial cleaning (workplace, offices, shops)
- `T1.14`: Business phone number `0400 856 532` present with `tel:0400856532` href
- `T1.15`: Email link `team@mowglowpropertyservices.com.au` present
- `T1.16`: Business location "Kingaroy QLD 4610" present
- `T1.17`: ABN details / trust badge present (`ABN 15 219 585 352`)
- `T1.18`: Operating hours details present (Mon-Fri 8am-5pm, Sat by appt)
- `T1.19`: Sticky navbar container `#main-header` present with sticky positioning
- `T1.20`: Navbar contains required section links (`#services`, `#about`, `#galleries`, `#quote-form`)
- `T1.21`: Navbar contains prominent Call Now button with `tel:0400856532` href
- `T1.22`: Above-the-fold Hero section direct Call CTA button
- `T1.23`: Above-the-fold Hero section Get Free Quote CTA button routing to `#quote-form`
- `T1.24`: `#quote-form` section and `.quote-form-card` container exist in DOM
- `T1.25`: `#quote-form` styling specifies distinct border (`#9ae1cc`) and glowing box-shadow
- `T1.26`: Quote form contains all required fields: Name, Email, Phone, Service, Message, Checkbox, Submit
- `T1.27`: Mobile sticky action bar `#mobile-action-bar` present with quick action buttons
- `T1.28`: All 3 project gallery tab content containers present (yard, cleaning, maintenance)
- `T1.29`: Sponsorship badge section and Google Customer Reviews link present
- `T1.30`: Domestic cleaning card uses the local landscape image with accessible alt text

### Tier 2: Boundary & Corner Cases (17 Assertions)
- `T2.1`: Submitting empty form flags all required fields (Name, Email, Message) with `.has-error` class
- `T2.2`: Invalid email format `user@domain` (missing top-level domain) rejected with error
- `T2.3`: Invalid email format `not-an-email` (plain text string) rejected with error
- `T2.4`: Invalid email format `missingat.com` (missing @ symbol) rejected with error
- `T2.5`: Invalid email format `@nodomain.com` (missing username prefix) rejected with error
- `T2.6`: Valid email `jane.doe@example.com` passes email validation cleanly
- `T2.7`: Whitespace-only Name input `"   "` is rejected
- `T2.8`: Whitespace-only Message textarea `"   "` is rejected
- `T2.9`: All navigation scroll target section IDs (`#services`, `#about`, `#galleries`, `#reviews`, `#contact`, `#quote-form`) exist in DOM
- `T2.10`: CSS defines responsive breakpoints (`@media 768px`, `991px`, `1024px`)
- `T2.11`: Mobile viewport (375px): Sticky navbar, mobile menu toggle, and bottom action bar are visible
- `T2.12`: Mobile viewport (375px): Horizontal scrollbar overflow check
- `T2.13`: Desktop viewport (1280px): Horizontal nav menu visible, mobile bottom action bar hidden
- `T2.14`: Desktop viewport (1280px): Services grid arranges in 3 columns
- `T2.15`: Tablet viewport (768px): Services grid arranges in 2 columns
- `T2.16`: Domestic cleaning image uses the shared 220px `object-fit: cover` service-card frame
- `T2.17`: Sticky header stays at the viewport top at mobile, tablet, and desktop widths after scrolling

### Tier 3: Cross-Feature Interactions (13 Assertions)
- `T3.1`: Clicking Hero "Get Free Quote" CTA targets `#quote-form` section
- `T3.2`: Clicking mobile menu button opens menu drawer (`.open`) & sets `aria-expanded="true"`
- `T3.3`: Clicking a nav link inside open mobile menu closes drawer & resets `aria-expanded` to `"false"`
- `T3.4`: Accepted form submission reaches the delivery endpoint before success feedback appears
- `T3.5`: Successful form submission resets all form input values
- `T3.6`: Failed delivery preserves entered details and shows direct recovery options
- `T3.7`: Clicking Toast close button hides success modal
- `T3.8`: Clicking a gallery item opens Lightbox Modal with correct image src & caption
- `T3.9`: Clicking Lightbox close button (`&times;`) closes modal
- `T3.10`: Clicking Lightbox backdrop closes modal
- `T3.11`: Pressing Escape key closes active Lightbox Modal
- `T3.12`: Clicking "Cleaning Services" tab activates cleaning gallery and deactivates yard gallery
- `T3.13`: Toggling "Send me a copy of this request" checkbox updates checked state

### Tier 4: Real-World Application Scenarios (3 Workflows)
- `T4.1`: **Mobile User Quick Call Workflow**: Phone action links lead directly to `tel:0400856532` across navbar, hero, and sticky bottom bar.
- `T4.2`: **Desktop Quote Request Journey**: User browses services, fills quote form, submits, and receives confirmation feedback modal.
- `T4.3`: **Gallery Discovery Workflow**: User switches gallery tab, opens enlarged lightbox photo preview, and closes preview modal via close button / backdrop.

---

## 4. Current Regression Status

The suite currently reports no known implementation failures. The mobile overflow check, real form-delivery success and failure paths, local domestic-cleaning image fit, and sticky header behaviour all pass in rendered browser tests.
