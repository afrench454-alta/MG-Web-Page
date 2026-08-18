Active — Production readiness notes

This repository contains a static website for "Mow & Glow Property Services" and an E2E test runner (test-runner.js) that exercises the UI using JSDOM and Playwright (optional).

Quick start (local)

1. Install dependencies:
   npm ci

2. Run tests:
   npm test

   Note: Playwright browser binaries must be installed for headful/headless browser checks. Run:
     npx playwright install

3. Serve the site locally for manual inspection:
   npm start

Recommended CI steps
- checkout code
- npm ci
- npx playwright install --with-deps
- npm test
- npm run lint

Notes
- Large images live in assets/images; consider compressing and providing WebP/AVIF variants.
- No production deployment scripts are included; add a Dockerfile or deployment instructions as needed.
