# Reference Site Survey & Detailed Analysis Report: Mow & Glow Property Services

## Executive Summary
This document presents the complete content, structure, copy, asset mapping, design system, and UI/UX gap analysis of the reference HTML landing page (`mow-glow-v1.2-raw-html/index.html`) for **Mow & Glow Property Services**. The findings serve as the authoritative blueprint for rebuilding and modernizing the landing page while maintaining exact brand fidelity.

---

## 1. Business Profile & Core Information

- **Business Name**: Mow & Glow Property Services
- **Tagline**: Professional Standards & Family Values
- **Location**: Kingaroy, QLD 4610
- **Phone**: `0400 856 532` (`+61 400 856 532`)
- **Email**: `team@mowglowpropertyservices.com.au`
- **Operating Hours**:
  - Monday – Friday: 8:00 AM – 5:00 PM
  - Saturday: By appointment
  - Sunday: Closed
- **ABN**: `15 219 585 352`
- **Business Attributes**: ABN Registered & Insured, Australian Owned Business
- **Target Sectors**: Domestic, Commercial, NDIS, Builders, Real Estate, Government, Insurance
- **Sponsorships**: Australasian Institute of Emergency Services & National Emergency Response
- **Social Media Links**:
  - Facebook: `https://facebook.com/share/1KJpH4LKD5/`
  - Instagram: `https://instagram.com/mowglowps?igsh=ZW1rOG01aGoyemls`
  - WhatsApp: `https://api.whatsapp.com/send?phone=%2B61400856532`
- **Google Reviews Link**: `https://www.google.com/search?q=Mow+%26+Glow+Property+Services...#mpd=~8113006052518602069/customers/reviews`

---

## 2. Design System & Brand Identity

### 2.1 Color Palette
- **Background Slate / Dark Charcoal**: `#363f48` (RGB: 54, 63, 72)
- **Primary Mint / Light Heading Color**: `#cef0e6` (RGB: 206, 240, 230)
- **Secondary Teal / Accent & Link Color**: `#9ae1cc` (RGB: 154, 225, 204)
- **Pure White**: `#ffffff`
- **Card / Shaded Strip Background**: Dark neutral shade `#2b3238` / `#313941`

### 2.2 Typography
- **Primary Fonts (Google Fonts)**:
  - `Montserrat` (Weights: 400, 700, Italic, 700 Italic)
  - `Julius Sans One` (Weights: 400, 700, Italic, 700 Italic)
- **Font Stack**: `'Montserrat', 'Julius Sans One', sans-serif`

### 2.3 Visual Components & Styling Tokens
- **Buttons**: Rounded buttons with solid or bordered styles, hover transitions.
- **Icons**: Simple circular outline icons (Map Marker, Phone, Clock, Envelope, Thumbs Up, Social Icons).
- **Separators**: Thin horizontal rule (`hr`) with `#ffffff` border color and 2em margin.
- **Section Dividers**: Webador strip shapes (`valley`, `peak`, `none`).

---

## 3. Detailed Section Structure & Copy Mapping

### Section 1: Top Navigation Bar & Mobile Header
- **Desktop Logo**: Text logo `Mow & Glow Property Services` (Word `Property` in white `#ffffff`, rest in light mint).
- **Desktop Nav Menu**: `#jw-menu` (Empty in raw HTML — Needs full menu implementation: Services, Galleries, About/Values, Reviews, Contact / Get a Quote).
- **Mobile Header**: Centered text title matching desktop branding.

### Section 2: Hero Section
- **Background Banner Image**: `https://primary.jwwb.nl/public/j/w/b/temp-emvlsfwthmslsvmukeyz/1786013671792-standard-y55u9q.jpg`
- **Hero Title Graphic**: `https://primary.jwwb.nl/public/j/w/b/temp-emvlsfwthmslsvmukeyz/image-high-kn31rn.png` (Main branding hero graphic).

### Section 3: Tagline & Target Sectors
- **Primary Heading (`h1`)**: `Professional Standards & Family Values` (Color: `#cef0e6`)
- **Sector Subtitle (`h1`)**: `Domestic - Commercial - NDIS - Builders - Real Estate - Government - Insurance` (Color: `#9ae1cc`, Size: ~15.5px)
- **Divider**: Thin solid line.

### Section 4: Our Services (6 Core Cards)
- **Section Header**: `Our services`
- **Card 1: Lawn Mowing**
  - Image: `screenshot_20260806_005739_instagram-4-high.jpg`
  - Title: `Lawn mowing` (`#cef0e6`)
  - Copy: "Keep your yard looking neat and tidy with our reliable MOW & SNIP service. We provide even cuts, clean edges and we remove the green waste every time. Ongoing maintenance can be arranged to suit your needs & budget."
- **Card 2: Yard Clean-ups**
  - Image: `7656999.jpeg`
  - Title: `Yard clean‑ups` (`#cef0e6`)
  - Copy: "Restore your outdoor spaces with our thorough yard clean‑up service. We remove debris, trim overgrowth, pruning, hedging, weeding/weed control, planting, mulching, as well as your general mow & snip. We will tailor a quote for you."
- **Card 3: Domestic Cleaning**
  - Image: `grok-image-34a3864b-8f9a-42e9-8266-aa0e9db16959-high.jpg`
  - Title: `Domestic cleaning` (`#cef0e6`)
  - Copy: "Enjoy a spotless & healthy home with our residential Eco-friendly cleaning service. From kitchens and bathrooms to outdoor and indoor living spaces. Grout restoration, oven cleaning, we handle it all with budget friendly routine visits."
- **Card 4: Comprehensive Bond Cleans**
  - Image: `image-high-4jh37j.png`
  - Title: `Comprehensive Bond Cleans` (`#cef0e6`)
  - Copy: "Whether the property is vacant at the end of a lease, pre-sale, or post-renovation, our comprehensive bond clean will take care of all the details. We provide real estate agent-approved cleans you can count on."
- **Card 5: NDIS Support Services**
  - Image: `5206919.jpeg`
  - Title: `NDIS support services` (`#cef0e6`)
  - Copy: "We provide reliable, respectful cleaning and property support for NDIS participants, helping maintain safe, comfortable, and well‑presented living environments. Our services are tailored to individual needs, delivered with care, consistency, and a strong focus on independence and wellbeing."
- **Card 6: Commercial Cleaning**
  - Image: `comm-clean-ad_image_9_16_0624-high.png`
  - Title: `Commercial cleaning` (`#cef0e6`)
  - Copy: "Keep your workplace clean, hygienic, and welcoming with our reliable commercial cleaning service. We maintain offices, shops, and business spaces to a high standard, ensuring a professional environment for staff and customers."
- **Footer Badge**: "ABN Registered & Insured, Australian owned Business" (Color `#9ae1cc`)

### Section 5: Quick Info Strip (Address, Contact, Hours)
- **Column 1: Address**
  - Icon: `map-marker.svg`
  - Content: Kingaroy, QLD 4610
- **Column 2: Contact**
  - Icon: `telephone-handle-silhouette.svg`
  - Phone: `0400 856 532`
  - Email: `team@mowglowpropertyservices.com.au`
- **Column 3: Opening Hours**
  - Icon: `time.svg`
  - Hours: Mon - Fri: 8am - 5pm | Saturday: by appointment | Sunday: Closed

### Section 6: Values & Project Galleries
- **Banner Heading**: "Professional Standards - Family Values - Caring for our Community" (`#cef0e6`)
- **Subtitle**: "View our work"
- **Gallery 1: Yard Maintenance Gallery** (`#9ae1cc`)
  - Carousel Images: Real yard work projects (`img_20251204_133917816_hdr-high-l7u7ne.jpg`, `img_20260212_122953299_hdr-2-high.jpg`, etc.)
  - Bullet Copy:
    - "All images featured are from real projects completed by the Mow & Glow Team."
    - "Lawn care, gardens, hedges & pruning, yard cleanup, weed management, planting & mulching, green waste removal."
    - "Gutter cleaning, pressure cleaning hardscapes."
    - "From domestic care to contract work, we are ready to take on your project."
- **Gallery 2: Cleaning Gallery** (`#9ae1cc`)
  - Carousel Images: Real cleaning projects (`img_20260129_115443854-high-usvuvb.jpg`, `img_20260129_115414897-high-3cp9gw.jpg`, etc.)
  - Breakdown Copy:
    - "All images featured are from real projects completed by the Mow & Glow Team"
    - "BOND CLEAN - A comprehensive deep clean of the property at the end of a tenancy. Every detail taken care of from start to finish."
    - "REGULAR CLEAN - A deep clean of a particular area or an all over refresh"
    - "COMMERCIAL - Cleaning office spaces, shops, childcare centers etc., existing businesses or end of lease, builders cleans"
    - "From domestic care to contract work, we are ready to take on your project."
- **Gallery 3: General Maintenance Gallery** (`#9ae1cc`)
  - Carousel Images: Real maintenance projects (`img_20260406_182445360-high-q9dfmg.jpg`, `img_20260412_180927576_hdr-high-axbxvk.jpg`, etc.)
  - Maintenance Copy:
    - "All images featured are from real projects completed by the Mow & Glow Team."
    - "We focus on providing minor property maintenance to keep homes and businesses running smoothly. installations & assembly, small repairs, area painting and general maintenance."

### Section 7: Social Proof & Trust Section
- **Heading**: "Our business is built on trust & family values"
- **Subtext**: "Count on us to not only complete the job but also to surpass your expectations. Check out our customer reviews here"
- **CTA Button**: `Customer Reviews` (Google Reviews link with chat icon)

### Section 8: Contact / Quote Form
- **Form Heading / Intro**: Embedded form for quote request.
- **Fields**:
  - Name * (text, required)
  - Email address * (email, required)
  - Message * (textarea, required)
  - Phone (text, optional)
  - Checkbox: "Send me a copy"
  - Submit Button: `Submit`

### Section 9: Sponsorship & Location Badge
- **Title**: `SPONSORSHIP`
- **Copy**: "Proud sponsors of Australasian Institute of Emergency Services & the National Emergency Response"
- **Badge Logo**: `inshot_20260505_113053132-1-high-q426hd.png` (Circular image, 214px)
- **Location Tag**: `Kingaroy, QLD`

### Section 10: Footer & Socials
- **Email Info**: `team@mowglowpropertyservices.com.au` (Envelope icon)
- **Socials Info**: Facebook & Instagram buttons (Thumbs Up icon)
- **Copyright Text**: `© 2025 - Mow & Glow Property Services - ABN 15 219 585 352 - PH 0400 856 532`
- **Credits**: `Powered by Webador`

### Section 11: Mobile Sticky Action Bar
- **Actions**: Email, Phone (`0400 856 532`), Map (Kingaroy), Facebook, WhatsApp

---

## 4. Asset & Resource Mapping Table

| Asset Type | Source URL / Path | Description / Usage |
|---|---|---|
| Image | `https://primary.jwwb.nl/public/j/w/b/temp-emvlsfwthmslsvmukeyz/image-high-478a4f.png` | OG & Header Logo |
| Image | `https://primary.jwwb.nl/public/j/w/b/temp-emvlsfwthmslsvmukeyz/1786013671792-standard-y55u9q.jpg` | Hero Strip Background |
| Image | `https://primary.jwwb.nl/public/j/w/b/temp-emvlsfwthmslsvmukeyz/image-high-kn31rn.png` | Hero Banner Graphic |
| Image | `https://primary.jwwb.nl/public/j/w/b/temp-emvlsfwthmslsvmukeyz/screenshot_20260806_005739_instagram-4-high.jpg` | Lawn Mowing Service Image |
| Image | `https://primary.jwwb.nl/pexels/76/7656999.jpeg` | Yard Clean-ups Service Image |
| Image | `https://primary.jwwb.nl/public/j/w/b/temp-emvlsfwthmslsvmukeyz/grok-image-34a3864b-8f9a-42e9-8266-aa0e9db16959-high.jpg` | Domestic Cleaning Service Image |
| Image | `https://primary.jwwb.nl/public/j/w/b/temp-emvlsfwthmslsvmukeyz/image-high-4jh37j.png` | Comprehensive Bond Cleans Service Image |
| Image | `https://primary.jwwb.nl/pexels/52/5206919.jpeg` | NDIS Support Services Image |
| Image | `https://primary.jwwb.nl/public/j/w/b/temp-emvlsfwthmslsvmukeyz/comm-clean-ad_image_9_16_0624-high.png` | Commercial Cleaning Service Image |
| Image | `https://primary.jwwb.nl/public/j/w/b/temp-emvlsfwthmslsvmukeyz/inshot_20260505_113053132-1-high-q426hd.png` | Emergency Services Sponsorship Badge |
| Icon SVG | `https://assets.jwwb.nl/assets/img/icons/map-marker.svg` | Address Icon |
| Icon SVG | `https://assets.jwwb.nl/assets/img/icons/telephone-handle-silhouette.svg` | Phone Icon |
| Icon SVG | `https://assets.jwwb.nl/assets/img/icons/time.svg` | Clock Icon |
| Icon SVG | `https://assets.jwwb.nl/assets/img/icons/envelope.svg` | Envelope Icon |
| Icon SVG | `https://assets.jwwb.nl/assets/img/icons/thumbs-up-hand-symbol.svg` | Social Thumbs Up Icon |
| Font | `https://gfonts.jwwb.nl/css?family=Montserrat:400,700|Julius+Sans+One:400,700` | Primary Google Fonts |

---

## 5. UI/UX Improvement Opportunities (Requirements R2 - R4)

1. **Sticky Header Navbar (R2 & Acceptance Criteria)**:
   - The reference site lacks working navigation links in desktop view.
   - Implement a modern sticky navbar with smooth-scroll anchors (`#services`, `#galleries`, `#about`, `#reviews`, `#contact`).
   - Add a prominent CTA button: `"Call Now: 0400 856 532"` and `"Get a Free Quote"`.

2. **Above-the-Fold Immediate Contact Buttons (R2 & Acceptance Criteria)**:
   - Add primary CTAs directly in the hero section ("Call 0400 856 532" & "Request a Quote").

3. **Form Enhancement & Conversion Optimization (R3 & Acceptance Criteria)**:
   - The original form is plain and blends into the background.
   - Enhance the quote form with a prominent card container, crisp border, subtle drop shadow, clear section header ("Get Your Free Quote Today"), interactive field states, and instant validation.

4. **Modern UI/UX Refinement (R4)**:
   - Replace heavy Webador/Fotorama scripts with clean, responsive modern CSS/JS image sliders/lightboxes.
   - Improve responsive typography hierarchy and spacing.
   - Add subtle hover micro-interactions to service cards, contact buttons, and trust badges.
   - Ensure fast loading times and clean semantic markup.
