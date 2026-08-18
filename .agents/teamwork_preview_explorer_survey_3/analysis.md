# Requirements and Gap Analysis Report — Mow & Glow Property Services Landing Page

**Author**: teamwork_preview_explorer_survey_3 (Explorer Agent)  
**Date**: 2026-08-11  
**Target Directory**: `c:/Users/frenc/active`  
**Reference Source**: `c:/Users/frenc/OneDrive/Documents/Program - Development - Files/webpage/mow-glow-v1.2-raw-html/index.html`

---

## 1. Executive Summary

This report presents a thorough audit of the reference landing page HTML (`index.html`), breaks down requirements R1 through R4, identifies all functional and UI/UX gaps, and outlines an optimal code architecture and technology stack for implementing a modernized, high-converting landing page for **Mow & Glow Property Services** in `c:/Users/frenc/active`.

---

## 2. Requirement R1: Core Branding Fidelity Checklist

To ensure 100% brand preservation, the new site must faithfully replicate all identity, color, typography, messaging, and business information from the reference HTML.

### 2.1 Brand Identity & Credentials
- **Business Name**: Mow & Glow Property Services
- **Location / Service Area**: Kingaroy, QLD 4610
- **ABN**: 15 219 585 352
- **Legal Badges**: ABN Registered & Insured, Australian owned Business
- **Sponsorship**: Australasian Institute of Emergency Services & National Emergency Response

### 2.2 Contact & Operating Details
- **Phone Number**: `0400 856 532` (International: `+61 400 856 532`)
- **Email Address**: `team@mowglowpropertyservices.com.au`
- **Opening Hours**:
  - Monday – Friday: 8:00 AM – 5:00 PM
  - Saturday: By appointment
  - Sunday: Closed

### 2.3 Brand Color Palette
- **Primary Dark Background**: `#1e242b` / `#22282f` / `#363f48` (Slate charcoal gray)
- **Primary Accent Teal / Mint**: `#9ae1cc` (Used for highlighted subtext, active links, icons)
- **Secondary Light Mint**: `#cef0e6` (Used for section titles and card headings)
- **Neutral White**: `#ffffff` (High-contrast body text and highlights)

### 2.4 Brand Typography
- **Primary Headings**: `Julius Sans One` (Uppercase clean display font) / `Montserrat` (Bold 700)
- **Body & Subtitles**: `Montserrat` (Weights: 400 Regular, 700 Bold)

### 2.5 Core Service Offerings & Copy Matrix
1. **Lawn Mowing**: "Keep your yard looking neat and tidy with our reliable MOW & SNIP service. We provide even cuts, clean edges and we remove the green waste every time. Ongoing maintenance can be arranged to suit your needs & budget."
2. **Yard Clean-ups**: "Restore your outdoor spaces with our thorough yard clean‑up service. We remove debris, trim overgrowth, pruning, hedging, weeding/weed control, planting, mulching, as well as your general mow & snip. We will tailor a quote for you."
3. **Domestic Cleaning**: "Enjoy a spotless & healthy home with our residential Eco-friendly cleaning service. From kitchens and bathrooms to outdoor and indoor living spaces. Grout restoration, oven cleaning, we handle it all with budget friendly routine visits."
4. **Comprehensive Bond Cleans**: "Whether the property is vacant at the end of a lease, pre-sale, or post-renovation, our comprehensive bond clean will take care of all the details. We provide real estate agent-approved cleans you can count on."
5. **NDIS Support Services**: "We provide reliable, respectful cleaning and property support for NDIS participants, helping maintain safe, comfortable, and well‑presented living environments. Our services are tailored to individual needs, delivered with care, consistency, and a strong focus on independence and wellbeing."
6. **Commercial Cleaning**: "Keep your workplace clean, hygienic, and welcoming with our reliable commercial cleaning service. We maintain offices, shops, and business spaces to a high standard, ensuring a professional environment for staff and customers."

---

## 3. Gap Analysis for Requirements R2, R3, R4

### 3.1 Requirement R2: Navbar & Immediate Contact Improvements
| Element | Reference Site State (`index.html`) | Target Requirements | Identified Gap |
|---|---|---|---|
| **Header Navbar** | Empty menu (`<ul id="jw-menu"></ul>`), no desktop navigation links | Sticky top navigation bar with clear section links (Services, About, Gallery, Contact) | High priority: Needs clean sticky header with logo and navigation links |
| **Call CTA** | Phone buried in footer and mid-page text blocks | Prominent "Call Now: 0400 856 532" button in sticky navbar and hero | High priority: Missing instant header click-to-call button |
| **Above-The-Fold CTAs** | Static hero banner (`image-high-kn31rn.png`) without overlay text or action buttons | Clear hero heading, value proposition, "Get Free Quote" & "Call Now" CTAs | Critical priority: Hero lacks headline, copy, and immediate action buttons |
| **Route to Form** | 400+ lines of HTML scroll before reaching form; no scroll link | Smooth scroll button ("Get Free Quote") routing directly to embedded form | High priority: Needs quick anchor navigation to quote form |

### 3.2 Requirement R3: Embedded Form Improvements
| Element | Reference Site State (`index.html`) | Target Requirements | Identified Gap |
|---|---|---|---|
| **Form Container** | Plain unstyled `<form>` directly inside body container | Visually distinct card container with border, subtle shadow (`box-shadow`), elevated background | Critical priority: Form currently blends into page with zero visual distinction |
| **Input Fields** | Unstyled dark inputs, hard to see on background | Clean white background inputs with crisp borders, clear labels, focus indicators (`:focus`) | High priority: Improve input visibility and user experience |
| **Field Options** | Basic fields: Name, Email, Message, Phone | Enhanced fields: Name *, Phone *, Email *, Service Type Dropdown, Property Type, Message | Medium priority: Add service selector for better lead qualification |
| **Conversion Enhancers** | Standard "Submit" button without context | High-contrast mint/teal CTA button ("Request Free Quote"), trust micro-copy ("⚡ Response within 24h", "100% Private") | High priority: Add trust signals around submission form |

### 3.3 Requirement R4: Modern UI/UX Modernization
| Element | Reference Site State (`index.html`) | Target Requirements | Identified Gap |
|---|---|---|---|
| **Mobile Navigation** | Reliance on Webador mobile bar at bottom of screen | Mobile-first responsive sticky top header with hamburger drawer + persistent quick contact bar | High priority: Upgrade mobile UX to modern standards |
| **Trust Badges** | Text buried at line 205 ("ABN Registered & Insured") | Dedicated Trust Signals Bar below Hero with icons (Insured, ABN Registered, Local Family Owned, NDIS Ready) | High priority: Elevate trust signals near top of page |
| **Gallery System** | Heavy Fotorama jQuery gallery plugin script dependencies | Responsive CSS Grid / Flex gallery with filter tabs (Yard, Cleaning, Maintenance) & lightweight lightbox modal | High priority: Replace legacy scripts with clean modern gallery |
| **Reviews & Social Proof** | Single text link to Google Customer Reviews | Dedicated Testimonials / Review section highlighting 5-star Google rating and customer quote cards | High priority: Add visible review cards for conversion uplift |

---

## 4. Proposed Code Architecture & Tech Stack

### 4.1 Technology Stack Recommendations
- **Build Tool**: Vite (Lightning-fast dev server and bundle optimization)
- **Frontend Architecture**: Modern HTML5 / CSS3 / ES Modules (or Vite + React + Tailwind CSS)
- **Styling Strategy**: CSS Custom Properties (Design Tokens) matching brand colors `#363f48`, `#9ae1cc`, `#cef0e6`, `#ffffff`
- **Icons**: Inline SVG / Lucide Icons (Phone, Mail, Map, Clock, ShieldCheck, Star, CheckCircle, Menu, X)
- **Performance Target**: 100/100 Lighthouse performance, sub-1-second LCP (Largest Contentful Paint), 0 CLS (Cumulative Layout Shift)

### 4.2 File Structure Layout for `c:/Users/frenc/active`
```
c:/Users/frenc/active/
├── index.html
├── package.json
├── vite.config.js
├── src/
│   ├── css/
│   │   ├── main.css            # Base imports and design tokens
│   │   ├── navbar.css          # Sticky navigation & mobile drawer
│   │   ├── hero.css            # Hero section & CTA buttons
│   │   ├── trust.css           # Trust badges & credentials bar
│   │   ├── services.css        # Services grid & card hover effects
│   │   ├── reviews.css         # Customer reviews & rating section
│   │   ├── gallery.css         # Filterable gallery & lightbox modal
│   │   ├── form.css            # Visually distinct high-contrast quote form
│   │   └── footer.css          # Contact grid, map, & mobile bottom bar
│   ├── js/
│   │   ├── main.js             # Main script entry
│   │   ├── navbar.js           # Scroll detection & mobile menu handler
│   │   ├── gallery.js          # Tab filtering & image modal lightbox
│   │   ├── form.js             # Form validation & submission state UI
│   │   └── scroll.js           # Smooth scroll helper for CTAs
│   └── assets/
│       └── images/             # All optimized brand images
```

---

## 5. Next Steps for Implementation Team

1. **Scaffold Vite Project**: Initialize `package.json`, `index.html`, and `src/` assets in `c:/Users/frenc/active`.
2. **Build Header & Hero**: Implement sticky responsive navbar with "Call Now" button and high-converting Hero banner with quick route to quote form.
3. **Build Services & Trust Sections**: Implement clean responsive grid for 6 core services and trust signals bar.
4. **Build Embedded Quote Form**: Construct visually distinct form card with glowing border, shadow, high contrast fields, and fast response promise.
5. **Build Gallery & Reviews**: Create filterable gallery tabs for Yard, Cleaning, Maintenance, and display customer review cards.
6. **Verify Responsiveness & Visual Fidelity**: Perform cross-device visual and functional testing.
