# Orchestrator Master Plan — Mow & Glow Property Services Landing Page

## Objective
Replicate the core branding, design, colors, and layout from the reference `index.html` located at `c:\Users\frenc\OneDrive\Documents\Program - Development - Files\webpage\mow-glow-v1.2-raw-html\index.html` into `c:\Users\frenc\active`, while significantly improving navbar functionality, CTA placement, embedded form conversion styling, mobile responsiveness, and overall modern UI/UX architecture.

---

## Phase 0: Survey & Technical Mapping
- [ ] Spawn 3 parallel `teamwork_preview_explorer` subagents to analyze:
  - Explorer 1: Reference HTML structure, text copy, component layout, and asset files.
  - Explorer 2: Color schemes, typography, CSS styling rules, visual tokens, and branding identity.
  - Explorer 3: Requirements R1-R4 mapping, target environment setup (`c:\Users\frenc\active`), framework/HTML selection strategy, and UI/UX conversion recommendations.
- [ ] Aggregate survey findings into `PROJECT.md § Feature Inventory` and `TEST_INFRA.md`.

---

## Phase 1: Architectural Decomposition & Contracts
- [ ] Define global `PROJECT.md` at `c:\Users\frenc\active\.agents\PROJECT.md`:
  - Feature Inventory (all features mapped to milestones).
  - Architecture and layout specification.
  - Code layout definition for `c:\Users\frenc\active`.
- [ ] Define `TEST_INFRA.md` at `c:\Users\frenc\active\.agents\TEST_INFRA.md`:
  - E2E Testing strategy (Tiers 1 to 4).

---

## Phase 2: Dual-Track Execution

### Track A: Implementation Track
- [ ] Milestone 1: Core Layout & Branding Replication (R1)
  - HTML structure, colors, typography, assets, hero section, services, pricing, gallery, testimonials, footer.
- [ ] Milestone 2: Modern Navigation & Immediate CTAs (R2)
  - Sticky mobile navbar, prominent "Call Now" / "Contact" button, immediate CTAs above the fold, quick scroll to quote form.
- [ ] Milestone 3: High-Converting Embedded Form (R3)
  - Visually distinct embedded form with modern border, shadow, clear form fields, focus states, and conversion styling.
- [ ] Milestone 4: Modernized UI/UX, Trust Signals & Responsiveness (R4)
  - Pro-level visual design, animations/micro-interactions, mobile-first responsive layout, trust badges, clear visual hierarchy.
- [ ] Milestone 5: Pass 100% E2E Tests & Adversarial Hardening
  - Run full E2E test suite, fix any issues, and perform Tier 5 adversarial coverage hardening.

### Track B: E2E Testing Track
- [ ] E2E Test Suite Development
  - Build test runner / test scripts covering Tier 1 (Feature Coverage), Tier 2 (Boundary & Corner Cases), Tier 3 (Cross-Feature), Tier 4 (Real-World Application Scenarios).
  - Publish `TEST_READY.md`.

---

## Phase 3: Rigorous Verification & Quality Gating
- [ ] Iteration Gate Verification per milestone / final build:
  - Reviewer 1 & Reviewer 2 approval (Code quality, responsiveness, requirement compliance).
  - Challenger 1 & Challenger 2 verification (Visual consistency, mobile test, form functionality).
  - Forensic Auditor (`teamwork_preview_auditor`) binary integrity check.

---

## Phase 4: Final Victory Claim
- [ ] Verify build/site locally, confirm all requirements R1-R4 and acceptance criteria pass.
- [ ] Send victory notification to parent via `send_message`.
