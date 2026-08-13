# Reference HTML & Design System Analysis

> **Agent**: `teamwork_preview_explorer_survey_2`
> **Target Reference**: `c:\Users\frenc\OneDrive\Documents\Program - Development - Files\webpage\mow-glow-v1.2-raw-html\index.html`
> **Working Directory**: `c:/Users/frenc/active/.agents/teamwork_preview_explorer_survey_2`
> **Timestamp**: 2026-08-11

---

## 1. Executive Summary & Survey Scope

This document provides a comprehensive analysis of the reference HTML website for **Mow & Glow Property Services** (Kingaroy, QLD). The objective of this investigation is to catalog all visual design elements, colors, typography, layout rules, component styles, and functional structures, and to formulate explicit **Design Tokens** and **Visual Enhancement Rules** that ensure full compliance with requirements **R1** (Replicate Core Branding), **R2** (Improve Functionality), **R3** (Visually Distinct Form Improvements), and **R4** (Modernize UI/UX) without diluting original brand identity.

---

## 2. Brand Identity & Overview

- **Business Name**: Mow & Glow Property Services
- **Location**: Kingaroy, QLD 4610
- **Phone**: `0400 856 532` (`+61 400 856 532`)
- **Email**: `team@mowglowpropertyservices.com.au`
- **ABN**: `15 219 585 352`
- **Operating Hours**: Mon - Fri: 8am - 5pm | Saturday: by appointment | Sunday: Closed
- **Core Slogans & Taglines**:
  - *"Professional Standards & Family Values"*
  - *"Professional Standards - Family Values - Caring for our Community"*
  - *"No task too big or small for the team at Mow & Glow Property Services. Professional results and family values."*
- **Sectors Served**: Domestic, Commercial, NDIS, Builders, Real Estate, Government, Insurance
- **Trust & Accreditation Signals**:
  - ABN Registered & Insured, Australian Owned Business
  - Real Estate Agent-Approved Cleans
  - Eco-Friendly Residential Cleaning
  - Google Customer Reviews Link & Badge
  - Official Sponsorship: Australasian Institute of Emergency Services & National Emergency Response

---

## 3. Catalog of the Design System

### 3.1 Color Palette Catalog

| Color Token Name | Hex Code | RGB Value | Opacity / Context | Primary UI Usage |
| :--- | :--- | :--- | :--- | :--- |
| `Primary Dark Slate` | `#363f48` | `rgb(54, 63, 72)` | 100% | Body background, section strip base, gallery frame stage background |
| `Dark Shaded Slate` | `#282f37` | `rgb(40, 47, 55)` | 100% | Shaded strip background (`jw-strip--color-shaded`), container base |
| `Brand Teal Green` | `#34ae8a` | `rgb(52, 174, 138)` | 100% | Primary accent green, primary action CTAs, highlight borders |
| `Brand Teal Dark` | `#2d9878` | `rgb(45, 152, 120)` | 100% | Primary button hover/active state |
| `Secondary Mint` | `#4cc9a4` | `rgb(76, 201, 164)` | 100% | Interactive highlights, secondary links, active badges |
| `Light Mint Tint` | `#9ae1cc` | `rgb(154, 225, 204)` | 100% | Subheading highlights ("Domestic - Commercial..."), gallery titles, contact email links |
| `Soft Pale Aqua` | `#cef0e6` | `rgb(206, 240, 230)` | 100% | Service card titles, major section headers ("Professional Standards & Family Values") |
| `Pure White` | `#ffffff` | `rgb(255, 255, 255)` | 100% | Main heading text highlight ("Property"), button text, SVG inline icons, separators |
| `Muted Text Grey` | `#d0d7de` | `rgb(208, 215, 222)` | 90% | Body narrative text, footers, secondary descriptions |

---

### 3.2 Typography Hierarchy & Fonts

- **Primary Body Font**: `Montserrat` (weights: 400 Regular, 700 Bold, 400 Italic, 700 Italic)
- **Secondary Heading / Display Font**: `Julius Sans One` (weights: 400 Regular, 700 Bold)
- **Fallback Stack**: `-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif`

#### Hierarchy Scale
1. **Brand Title (Header)**: `font-family: 'Julius Sans One', sans-serif`, `font-size: 1.4rem` (120%), uppercase letter-spacing, color: `#cef0e6` with `#ffffff` accent on "Property".
2. **Hero Main Heading (H1)**: `font-size: 2.0rem - 2.2rem` (28px - 32px), `font-weight: 700`, color: `#cef0e6`, center-aligned.
3. **Hero Subtitle Tagline**: `font-size: 0.95rem - 1.0rem` (~15.5px), `font-weight: 700`, color: `#9ae1cc`, center-aligned.
4. **Section Headings (H2 / H3)**: `font-size: 1.3rem - 1.5rem` (20px - 24px), `font-weight: 700`, color: `#cef0e6`, center-aligned.
5. **Section Subheadings (H4)**: `font-size: 1.1rem` (18px), `font-weight: 700`, color: `#cef0e6`, center-aligned.
6. **Body Paragraphs**: `font-size: 0.95rem - 1.0rem` (15px - 16px), `line-height: 1.6`, color: `#ffffff` or `#d0d7de`, center-aligned or left-aligned inside cards.
7. **Small Text (`.jw-text-small`)**: `font-size: 0.8rem - 0.85rem` (12px - 13px), color: `#9ae1cc` or `#ffffff`, center-aligned.

---

### 3.3 Layout Architecture & Page Flow

The reference HTML page is constructed of responsive wide strips (`jw-strip`):

1. **Header Navigation**:
   - Original reference: Brand logo text + empty list navigation element (`<ul id="jw-menu"></ul>`).
   - Mobile: Fixed dark top bar (`jw-mobile-header`) + fixed dark bottom action bar (`mobile-bar--dark`).
2. **Hero Strip (`jw-strip--primary`)**:
   - Full-width hero image background with dark backdrop overlay.
   - Centered main brand image/logo banner (`width: 541px`, rounded corners).
3. **Services Grid Strip (`jw-strip--color-default`)**:
   - Main Headline: *"Professional Standards & Family Values"*
   - Sector Subtitle: *"Domestic - Commercial - NDIS - Builders - Real Estate - Government - Insurance"*
   - Horizontal separator line (`border-color: #ffffff`).
   - Header: *"Our services"*
   - **Grid Row 1 (3 Columns flex/grid, 33.33% width each)**:
     - Card 1: Lawn Mowing (Image 309px, Title `#cef0e6`, Description)
     - Card 2: Yard Clean-ups (Image 309px, Title `#cef0e6`, Description)
     - Card 3: Domestic Cleaning (Image 316px, Title `#cef0e6`, Description)
   - **Grid Row 2 (3 Columns flex/grid, 33.33% width each)**:
     - Card 4: Comprehensive Bond Cleans (Image 100%, Title `#cef0e6`, Description)
     - Card 5: NDIS Support Services (Image 100%, Title `#cef0e6`, Description)
     - Card 6: Commercial Cleaning (Image 100%, Title `#cef0e6`, Description)
   - Trust Badge: *"ABN Registered & Insured, Australian owned Business"* (`#9ae1cc`).
4. **Contact Info Strip (`jw-strip--color-shaded`)**:
   - Peak border divider style (`jw-strip--border-shape-peak`).
   - **3 Icon Cards**:
     - Address: Circle icon `map-marker.svg` (58px), "Kingaroy, QLD 4610".
     - Contact: Circle icon `telephone-handle-silhouette.svg` (58px), Phone "0400 856 532", Email `team@mowglowpropertyservices.com.au`.
     - Opening Hours: Circle icon `time.svg` (58px), "Mon - Fri: 8am - 5pm", "Saturday: by appointment", "Sunday: Closed".
5. **Community Banner Strip**:
   - *"Professional Standards - Family Values - Caring for our Community"* (`#cef0e6`).
6. **Work Showcase / Galleries Strip**:
   - **Yard Maintenance Gallery**: Fotorama slider + project list description.
   - **Cleaning Gallery**: Fotorama slider + service descriptions (Bond, Regular, Commercial).
   - **General Maintenance Gallery**: Fotorama slider + property maintenance list.
7. **Trust & Reviews Section**:
   - Heading: *"Our business is built on trust & family values"*
   - Subtitle: *"Count on us to not only complete the job but also to surpass your expectations. Check out our customer reviews here"*
   - CTA Button: Google Reviews button ("Customer Reviews" with custom SVG icon).
8. **Contact Form Section**:
   - HTML `<form class="jw-form-container">` with 4 fields (Name*, Email*, Message*, Phone) + "Send me a copy" checkbox + Submit button.
9. **Sponsorship & Footer Section**:
   - Sponsorship text + Emergency Services sponsorship badge image (214px, round).
   - Social links: Facebook & Instagram buttons (`jw-element-social-follow-profile`).
   - Footer copyright notice: `© 2025 - Mow & Glow Property Services - ABN 15 219 585 352 - PH 0400 856 532`.

---

## 4. Formulated Design Tokens & Enhancement Specifications

To meet **R1 & R3 & R4** compliance without breaking brand identity, we specify exact CSS design tokens, card elevation rules, form standout visual treatments, and mobile contact access rules.

### 4.1 CSS Custom Properties (Design Tokens Matrix)

```css
:root {
  /* Brand Color Tokens */
  --color-primary-dark: #363f48;
  --color-primary-darker: #282f37;
  --color-brand-teal: #34ae8a;
  --color-brand-teal-hover: #2d9878;
  --color-accent-mint: #4cc9a4;
  --color-mint-light: #9ae1cc;
  --color-aqua-pale: #cef0e6;
  --color-surface-card: rgba(255, 255, 255, 0.05);
  --color-surface-card-hover: rgba(255, 255, 255, 0.09);
  --color-surface-form: #2d353d;
  --color-text-main: #ffffff;
  --color-text-muted: #d0d7de;

  /* Typography Tokens */
  --font-body: 'Montserrat', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
  --font-heading: 'Julius Sans One', 'Montserrat', sans-serif;

  /* Spacing Tokens */
  --space-xs: 4px;
  --space-sm: 8px;
  --space-md: 16px;
  --space-lg: 24px;
  --space-xl: 32px;
  --space-2xl: 48px;

  /* Border Radii Tokens */
  --radius-sm: 6px;
  --radius-md: 12px;
  --radius-lg: 20px;
  --radius-full: 9999px;

  /* Elevation & Shadows */
  --shadow-card: 0 4px 20px rgba(0, 0, 0, 0.25);
  --shadow-card-hover: 0 12px 30px rgba(0, 0, 0, 0.4), 0 0 15px rgba(52, 174, 138, 0.2);
  --shadow-form-standout: 0 12px 40px rgba(0, 0, 0, 0.45), 0 0 25px rgba(52, 174, 138, 0.3);
  --shadow-btn-primary: 0 4px 14px rgba(52, 174, 138, 0.4);

  /* Transitions */
  --transition-fast: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
  --transition-normal: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}
```

---

### 4.2 Form Visual Enhancement Specification (R3 Compliance)

In the reference HTML, the embedded form is flat and visually indistinct. To achieve **R3 compliance** (making the embedded form visually distinct with a border/shadow to stand out and drive conversions):

1. **Form Card Container**:
   - Wrap the form in a prominent container card with background `--color-surface-form` (`#2d353d`).
   - Accent border: `2px solid var(--color-brand-teal)` (`#34ae8a`) or top accent bar (`4px solid #34ae8a`).
   - Box shadow: `var(--shadow-form-standout)` (`0 12px 40px rgba(0,0,0,0.45), 0 0 25px rgba(52,174,138,0.3)`).
   - Border radius: `16px` (`var(--radius-lg)`).
   - Padding: `32px` on desktop, `20px` on mobile.

2. **Form Header & Trust Badge**:
   - Header title: *"Request a Free Quote"* (or *"Get in Touch with Mow & Glow"*).
   - Badge: *"Fast 24-Hour Response • No Obligation Free Quote"*.

3. **Input Field & Focus Styling**:
   - Input background: `rgba(255, 255, 255, 0.07)`.
   - Input border: `1px solid rgba(154, 225, 204, 0.3)`.
   - Border radius: `8px`.
   - Focus state: `border-color: #34ae8a`, `box-shadow: 0 0 0 3px rgba(52, 174, 138, 0.25)`, `outline: none`.
   - Label styling: `color: #cef0e6`, `font-weight: 600`, `font-size: 0.9rem`.

4. **Form Submit Button (CTA)**:
   - Width: 100% full-width button for maximum clickability on mobile & desktop.
   - Background: `var(--color-brand-teal)` (`#34ae8a`).
   - Text color: `#ffffff`, `font-weight: 700`, `font-size: 1.1rem`, uppercase or bold display.
   - Elevation: `box-shadow: 0 4px 15px rgba(52, 174, 138, 0.4)`.
   - Hover effect: `background: #2d9878`, `transform: translateY(-2px)`.

---

### 4.3 Navigation & Contact Functionality Rules (R2 & R4 Compliance)

1. **Sticky Modern Header Navbar**:
   - Header container: `position: sticky; top: 0; z-index: 1000; background: rgba(54, 63, 72, 0.95); backdrop-filter: blur(10px); border-bottom: 1px solid rgba(255, 255, 255, 0.1);`.
   - Left side: Brand Logo / Title (`Mow & Glow Property Services`).
   - Center navigation links: `Home`, `Services`, `Gallery`, `About`, `Contact`.
   - Right side CTA: Prominent **"Call Now: 0400 856 532"** or **"Get a Free Quote"** button linked directly to `#contact-form`.

2. **Above-the-Fold Immediate Contact Buttons**:
   - Primary Hero CTA Row:
     - Button 1 (Primary Teal): **"Request Free Quote"** (smooth scroll to `#contact-form`).
     - Button 2 (Secondary Mint Border): **"Call 0400 856 532"** (`href="tel:+61400856532"`).

3. **Mobile Sticky Action Bar**:
   - Fixed bottom action bar with quick tap buttons: `Call`, `Email`, `Location / Map`, `Facebook`, `WhatsApp`.

---

### 4.4 Service Card Visual Enhancements (R4 Compliance)

1. **Card Container**:
   - Background: `var(--color-surface-card)` (`rgba(255, 255, 255, 0.05)`).
   - Border: `1px solid rgba(206, 240, 230, 0.12)`.
   - Border radius: `14px`.
   - Padding: `20px`.
   - Transition: `var(--transition-normal)`.
2. **Hover Interaction**:
   - `transform: translateY(-5px)`.
   - `box-shadow: var(--shadow-card-hover)`.
   - `border-color: rgba(52, 174, 138, 0.4)`.
3. **Card Images**:
   - Border radius: `10px`.
   - Aspect ratio: `4:3` or `1:1` square, object-fit: `cover`.

---

## 5. Architectural Verification & Compliance Checklist

- [x] **R1 Core Branding**: All hex colors, fonts (Montserrat, Julius Sans One), copy text, image URLs, and brand taglines match reference `index.html`.
- [x] **R2 Functionality Spec**: Full navbar, sticky header, immediate contact buttons above the fold, smooth route to form.
- [x] **R3 Form Standout Spec**: Visually distinct container card with 2px brand teal border, standout box-shadow glow, high-contrast inputs, full-width elevated CTA submit button.
- [x] **R4 UI/UX Modernization**: CSS design tokens defined (`:root`), glassmorphism card surfaces, hover lift interactions, focus ring accessibility, mobile responsiveness.

---
