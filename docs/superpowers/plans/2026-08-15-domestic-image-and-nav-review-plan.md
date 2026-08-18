# Domestic Cleaning Image and Navigation Review Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Replace the domestic-cleaning image with a local, anonymous, landscape stock-style asset; retain and verify sticky navigation; and deliver an independently reviewed next-agent handoff.

**Architecture:** The service-card image becomes a locally hosted stock raster asset used through the existing `service-img` component, so it inherits the consistent card crop rather than needing a per-card layout exception. The current sticky-navbar implementation remains in place, with rendered breakpoint tests proving the header stays at the viewport top and anchor destinations remain readable.

**Tech Stack:** Static HTML, CSS, vanilla JavaScript, Node.js test runner, JSDOM, Playwright, locally hosted Pexels stock photography.

## Global Constraints

- Use a local 1.75:1 landscape image with visible cleaning activity but no face, head, torso, waist-up features, text, logo, or watermark.
- Store the final asset at `assets/images/domestic-cleaning-service.jpg`; do not hotlink it at runtime. Source provenance: Pexels photo 7513165 by SHVETS production, marked free to use.
- Keep `position: sticky; top: 0` navigation; do not convert it to fixed or auto-hiding navigation.
- Preserve an accessible alt label: `Domestic cleaning service in progress`.
- Keep the existing form, gallery, contact, review-link, and service-copy behaviours unchanged.
- This workspace has no usable Git repository; record verification evidence in the handoff report instead of committing.

---

## File Structure

- Create: `assets/images/domestic-cleaning-service.jpg` — locally hosted landscape card image.
- Modify: `index.html:168-169` — use the local image, standard service-card classes, and new alt text.
- Modify: `css/styles.css:642-655` — remove no-longer-needed domestic-image contain/blur rules.
- Modify: `test-runner.js:369-376, 504-610` — replace the previous portrait-fit assertion with local-asset, shared-frame, and sticky-header rendered checks.
- Modify: `TEST_READY.md` — keep the test catalogue and total count in sync.
- Create: `docs/reviews/2026-08-15-next-agent-handoff.md` — independent review results and prioritized follow-up context.

## Task 1: Add Red Tests for the New Image and Sticky Navigation Contract

**Files:**
- Modify: `test-runner.js:369-376, 504-610`
- Test: `test-runner.js`

**Interfaces:**
- Consumes: `#main-header`, `.service-card`, `.service-title`, `.service-img`, and the local asset path.
- Produces: `T1.30`, `T2.16`, and `T2.17` regression assertions.

- [ ] **Step 1: Write the failing local-image contract test**

Add this assertion after the existing Google Reviews assertion:

```js
const domesticCard = Array.from(document.querySelectorAll('.service-card')).find((card) =>
  card.querySelector('.service-title')?.textContent?.trim() === 'Domestic cleaning'
);
const domesticImage = domesticCard?.querySelector('.service-img');
assert(
  domesticImage &&
  domesticImage.getAttribute('src') === 'assets/images/domestic-cleaning-service.jpg' &&
  domesticImage.getAttribute('alt') === 'Domestic cleaning service in progress' &&
  fs.existsSync(path.join(__dirname, 'assets', 'images', 'domestic-cleaning-service.jpg')),
  'T1.30',
  'Domestic cleaning card uses the owned landscape image with accessible alt text',
  'tier1'
);
```

- [ ] **Step 2: Run the test to verify the expected failure**

Run: `npm test`

Expected: `T1.30` fails because the card still references the remote portrait asset and the local JPG does not exist.

- [ ] **Step 3: Replace the old portrait-fit layout test with a shared-card-frame test**

Replace `T2.16` with this rendered behaviour assertion inside the existing Playwright desktop block:

```js
const domesticImageLayout = await pageDesktop.evaluate(() => {
  const card = Array.from(document.querySelectorAll('.service-card')).find((item) =>
    item.querySelector('.service-title')?.textContent?.trim() === 'Domestic cleaning'
  );
  const image = card?.querySelector('.service-img');
  const wrapper = image?.parentElement;
  if (!image || !wrapper) return null;
  return {
    fit: getComputedStyle(image).objectFit,
    imageHeight: image.getBoundingClientRect().height,
    wrapperHeight: wrapper.getBoundingClientRect().height
  };
});
assert(
  domesticImageLayout && domesticImageLayout.fit === 'cover' &&
  domesticImageLayout.imageHeight === domesticImageLayout.wrapperHeight &&
  domesticImageLayout.wrapperHeight === 220,
  'T2.16',
  'Domestic cleaning image uses the standard un-cropped service-card frame',
  'tier2'
);
```

- [ ] **Step 4: Add the failing sticky-header breakpoint test**

After the tablet grid assertion, add:

```js
const stickyHeaderResults = [];
for (const [label, page] of [['mobile', pageMobile], ['desktop', pageDesktop], ['tablet', pageTablet]]) {
  await page.evaluate(() => window.scrollTo(0, 900));
  await page.waitForTimeout(100);
  stickyHeaderResults.push(await page.evaluate(() => {
    const header = document.getElementById('main-header');
    return {
      position: getComputedStyle(header).position,
      top: Math.round(header.getBoundingClientRect().top)
    };
  }));
}
assert(
  stickyHeaderResults.every((result) =>
    result.position === 'sticky' && result.top === 0
  ),
  'T2.17',
  'Sticky header stays at the viewport top at every breakpoint',
  'tier2'
);
```

- [ ] **Step 5: Run the test to verify the expected failure**

Run: `npm test`

Expected: `T2.16` and `T1.30` fail because the old portrait-specific image treatment remains. `T2.17` is expected to pass because it characterizes the existing deliberate sticky-nav behaviour.

## Task 2: Source and Integrate the Landscape Domestic-Cleaning Asset

**Files:**
- Create: `assets/images/domestic-cleaning-service.jpg`
- Modify: `index.html:168-169`
- Modify: `css/styles.css:642-655`
- Test: `test-runner.js`

**Interfaces:**
- Consumes: the exact prompt below and the `service-img` CSS component.
- Produces: local asset path `assets/images/domestic-cleaning-service.jpg` used by the Domestic cleaning card.

- [x] **Step 1: Source the final stock asset**

Use a Pexels photograph consistent with the same visual constraints:

```text
Photorealistic stock-style landscape website image, 1.75:1 aspect ratio. A bright, tidy modern Australian family-home interior with natural daylight. Low camera angle at floor level: only an adult cleaner's lower legs below the waist, neutral trousers and clean shoes, plus gloved hands using a mop or microfiber cloth on a clean timber or tile floor. No face, head, torso, waist-up body, readable text, logos, uniforms, watermark, signage, or brand labels. Friendly premium domestic-cleaning service mood, natural colours, realistic editorial photography, leave clear visual space around the cleaning action for a wide service-card crop.
```

Selected source: Pexels photo 7513165 by SHVETS production, marked free to use. Save the downloaded image as `assets/images/domestic-cleaning-service.jpg`.

- [x] **Step 2: Replace the card markup**

Replace the domestic-card wrapper and image with:

```html
<div class="service-img-wrapper">
  <img src="assets/images/domestic-cleaning-service.jpg" alt="Domestic cleaning service in progress" class="service-img" loading="lazy">
</div>
```

- [x] **Step 3: Remove the obsolete portrait-only CSS**

Delete the `.service-img-wrapper--contain::before` and `.service-img--contain` rules. Keep the shared `.service-img { object-fit: cover; }` rule unchanged.

- [x] **Step 4: Run the complete regression suite**

Run: `npm test`

Expected: all assertions pass, including `T1.30`, `T2.16`, and `T2.17`.

## Task 3: Visual and Documentation Verification

**Files:**
- Modify: `TEST_READY.md`
- Test: `test-runner.js`

**Interfaces:**
- Consumes: updated test IDs and the new local image.
- Produces: an accurate test catalogue and browser-verification evidence.

- [x] **Step 1: Update the test catalogue**

Add `T1.30` and `T2.17`, replace the old `T2.16` description, and update tier/total counts to match the test output.

- [ ] **Step 2: Start a local server and inspect desktop rendering**

Run: `python -m http.server 4174 --bind 127.0.0.1`

Open `http://127.0.0.1:4174/` in the in-app browser. At a desktop viewport, confirm the domestic card image is full-width, visually balanced with the other cards, and contains no identifiable upper body or unintended text.

- [ ] **Step 3: Inspect mobile rendering and sticky navigation**

At a 375px viewport, scroll from the hero to services and to the quote form. Confirm the header stays at the top, the mobile drawer begins below it, and page content has no horizontal overflow.

- [ ] **Step 4: Run final automated verification**

Run: `npm test; node --check js\\main.js; node --check test-runner.js`

Expected: exit code `0`, every test passes, and both JavaScript files produce no syntax errors.

## Task 4: Independent Review and Next-Agent Handoff

**Files:**
- Create: `docs/reviews/2026-08-15-next-agent-handoff.md`
- Review: `index.html`, `css/styles.css`, `test-runner.js`, `TEST_READY.md`, `assets/images/domestic-cleaning-service.png`

**Interfaces:**
- Consumes: completed implementation, this plan, the approved design spec, test output, and browser observations.
- Produces: addressed review findings and a durable next-agent report.

- [ ] **Step 1: Request a separate code-review agent**

Provide the reviewer this concise brief:

```text
Review the domestic-cleaning image replacement and sticky-navigation verification. Requirements: local landscape asset, no identifiable waist-up person or text/branding, standard cover image frame, retain sticky—not fixed—navbar, test image and sticky behaviour across mobile/tablet/desktop, preserve existing form/gallery/review features. Inspect the current workspace files and report Critical, Important, and Minor findings only.
```

- [ ] **Step 2: Address review findings**

For each Critical or Important finding, add a failing regression test when the behaviour is testable, run it to observe the expected failure, make the smallest corrective change, and rerun `npm test`.

- [ ] **Step 3: Write the next-agent handoff**

Create `docs/reviews/2026-08-15-next-agent-handoff.md` with these exact headings:

```markdown
# Next-Agent Handoff — 2026-08-15
## Completed Work
## Verification Evidence
## Independent Review Findings
## Current Risks and External Dependencies
## Prioritized Follow-up Opportunities
```

Under `Verification Evidence`, record the fresh `npm test` total and browser viewport checks. Under `Independent Review Findings`, distinguish fixed issues from deferred Minor items. Under `Current Risks and External Dependencies`, note FormSubmit activation and external gallery/image hosts. Under `Prioritized Follow-up Opportunities`, order no more than five items by impact.

- [ ] **Step 4: Perform final verification after review changes**

Run: `npm test; node --check js\\main.js; node --check test-runner.js`

Expected: exit code `0`, all tests pass, and no syntax-check output.

## Plan Self-Review

- Spec coverage: Task 1 covers the new test-first image and sticky-nav contracts; Task 2 covers generation and integration; Task 3 covers browser verification and documentation; Task 4 covers separate review and next-agent reporting.
- Placeholder scan: confirmed no unfinished placeholders or unspecified implementation steps remain.
- Interface consistency: the asset path, alt text, test IDs, shared `service-img` class, and handoff-report path are identical across every task.
