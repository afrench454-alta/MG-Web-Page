# E2E Test Infra: Mow & Glow Landing Page

## Test Philosophy
- Requirement-driven, opaque-box testing using Playwright / Node.js automated test runner.
- Verifies exact compliance with R1, R2, R3, R4 and user acceptance criteria without depending on internal implementation details.

## Feature Inventory & Test Mapping
| # | Feature | Requirement | Tier 1 | Tier 2 | Tier 3 | Tier 4 |
|---|---------|-------------|:------:|:------:|:------:|:------:|
| 1 | Core Branding & Colors | R1 | 5 | 5 | ✓ | ✓ |
| 2 | Navigation & Immediate CTAs | R2 | 5 | 5 | ✓ | ✓ |
| 3 | Visually Distinct Quote Form | R3 | 5 | 5 | ✓ | ✓ |
| 4 | UI/UX & Mobile Responsiveness | R4 | 5 | 5 | ✓ | ✓ |

## Test Suite Tiers
### Tier 1: Feature Coverage (20+ test cases)
- `T1.1`: Verify page title, brand header, and color tokens (`#363f48`, `#cef0e6`, `#9ae1cc`).
- `T1.2`: Verify all 6 core service cards (titles & exact copy).
- `T1.3`: Verify business info (Phone: `0400 856 532`, Email, ABN, Hours).
- `T1.4`: Verify sticky navbar presence and prominent "Call Now" button.
- `T1.5`: Verify Hero immediate contact CTA buttons above the fold.
- `T1.6`: Verify `#quote-form` element exists with distinct border and box-shadow styling.
- `T1.7`: Verify form input fields: Name, Email, Phone, Message, Copy Checkbox, Submit button.
- `T1.8`: Verify 3 project gallery sections and sponsorship badge.
- `T1.9`: Verify Google Customer Reviews CTA link.
- `T1.10`: Verify mobile sticky action bar element.

### Tier 2: Boundary & Corner Cases (20+ test cases)
- `T2.1`: Form submission with empty required fields shows validation error messages.
- `T2.2`: Form submission with invalid email format (`user@domain`) blocks submit.
- `T2.3`: Mobile viewport (375px) check: sticky navbar remains visible at top.
- `T2.4`: Mobile viewport (375px) check: hero CTAs stack cleanly without horizontal overflow.
- `T2.5`: Tablet viewport (768px) and Desktop viewport (1280px) responsive layout checks.
- `T2.6`: Smooth scroll target verification for all navigation links (`#services`, `#galleries`, `#about`, `#quote-form`).

### Tier 3: Cross-Feature Interactions
- `T3.1`: Clicking Hero "Get Free Quote" CTA smooth-scrolls page to `#quote-form` and sets focus to Name input.
- `T3.2`: Toggling mobile menu, clicking link closes menu overlay and scrolls to target section.
- `T3.3`: Successful form submit triggers confirmation alert/toast and resets form fields.

### Tier 4: Real-World Application Scenarios
- `T4.1`: Mobile user journey: User lands on page, sees phone button above fold, taps call link (`tel:0400856532`).
- `T4.2`: Quote request journey: User browses services, clicks service quote link, fills out form, receives confirmation.
- `T4.3`: Gallery discovery journey: User scrolls to galleries, views project images, clicks lightbox preview.

## Coverage Thresholds
- Tier 1: ≥20 test cases
- Tier 2: ≥20 test cases
- Tier 3: ≥5 interaction scenarios
- Tier 4: ≥3 real-world user workflows
- **Total Minimum: 48+ Test Assertions**
