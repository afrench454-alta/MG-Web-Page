# Domestic Cleaning Image, Sticky Navigation, and Review Handoff

## Goal

Replace the current domestic-cleaning card artwork with a local, stock-style image that communicates active residential cleaning without exposing identifiable people. Confirm the most suitable navigation behaviour for fast, low-friction browsing, then produce an independent review and a concise next-agent handoff.

## Approved Design

### Domestic-cleaning image

- Use one locally hosted, landscape stock photograph matching the service-card image frame.
- Scene: a bright home interior with a low-angle view of a cleaner's lower legs/feet using a mop beside a bucket; natural light and a neutral, welcoming palette.
- Exclusions: no face, head, torso, waist-up view, readable text, brand logos, watermark, or exaggerated/illustrative styling.
- Store the asset locally at `assets/images/domestic-cleaning-service.jpg` so the rendered page is not dependent on a third-party image host. The selected Pexels image is photo 7513165 by SHVETS production, labelled free to use on its source page; record that provenance in the handoff.
- Replace the current portrait image and remove the bespoke `contain` and blurred-background treatment. The new landscape asset uses the existing shared `service-img` frame and `object-fit: cover`, matching the remaining service cards.
- Preserve meaningful alt text: `Domestic cleaning service in progress`.

### Navigation

- Retain the existing `position: sticky; top: 0` navbar across desktop, tablet, and mobile devices.
- Do not convert it to fixed positioning. Sticky positioning keeps the header in normal layout flow, avoiding content overlap, artificial top padding, and fragile anchor offsets. It already cooperates with the mobile menu drawer and the mobile bottom action bar.
- Verify that, after scrolling, the header remains aligned at the viewport top and does not overlap anchor destinations at 375px, 768px, and 1280px wide viewports.

### Verification

- Replace the old domestic-image regression assertion with checks that the local asset is used, is landscape, renders inside the shared 220px service-card frame, and has an accessible alt label.
- Add rendered sticky-header checks at mobile, tablet, and desktop widths.
- Run the full `npm test` suite and JavaScript syntax checks.
- Perform an in-app browser visual pass at desktop and mobile sizes.

### Independent review and handoff

- Dispatch a separate code-review agent after implementation with this design, changed-file scope, test evidence, and review priorities.
- Address all critical and important findings before final verification.
- Write `docs/reviews/2026-08-15-next-agent-handoff.md` with: completed work, verified behaviours, review findings, risks, external dependencies, and prioritized follow-up ideas.

## Non-goals

- No change to domestic-cleaning copy, form delivery, business contact details, gallery assets, or review-link behaviour.
- No fixed or auto-hiding navigation redesign.
- No runtime external stock-photo dependency; the selected stock-image provenance is retained in the handoff.

## Self-review

- Asset ownership, composition, aspect ratio, placement, and accessibility requirements are explicit.
- The sticky-nav decision is evidence-based and scoped to verification rather than an unnecessary rewrite.
- Tests cover the changed visual asset and the requested navigation claim at all key breakpoints.
- The separate-perspective review and handoff-report requirements have explicit outputs and timing.
