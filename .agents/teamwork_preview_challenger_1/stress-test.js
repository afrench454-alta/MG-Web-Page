const http = require('http');
const fs = require('fs');
const path = require('path');
const playwright = require('playwright');

const BASE_DIR = 'c:/Users/frenc/active';
const PORT = 8099;

function createServer(baseDir, port) {
  return new Promise((resolve) => {
    const server = http.createServer((req, res) => {
      let reqUrl = req.url.split('?')[0];
      let filePath = path.join(baseDir, reqUrl === '/' ? 'index.html' : reqUrl);
      const ext = path.extname(filePath);
      const contentTypeMap = {
        '.html': 'text/html',
        '.css': 'text/css',
        '.js': 'application/javascript',
        '.png': 'image/png',
        '.jpg': 'image/jpeg',
        '.svg': 'image/svg+xml'
      };
      const contentType = contentTypeMap[ext] || 'text/plain';

      fs.readFile(filePath, (err, content) => {
        if (err) {
          res.writeHead(404);
          res.end('404 Not Found');
        } else {
          res.writeHead(200, { 'Content-Type': contentType });
          res.end(content, 'utf-8');
        }
      });
    });

    server.listen(port, () => resolve(server));
  });
}

async function runStressTests() {
  const server = await createServer(BASE_DIR, PORT);
  console.log(`Test server running on port ${PORT}`);

  const browser = await playwright.chromium.launch({ headless: true });

  const viewports = [
    { width: 320, height: 568, name: '320px (Extra Small Mobile)' },
    { width: 375, height: 667, name: '375px (Mobile)' },
    { width: 768, height: 1024, name: '768px (Tablet)' },
    { width: 1280, height: 800, name: '1280px (Desktop)' }
  ];

  console.log('\n--- VIEWPORT STRESS TESTING ---');
  for (const vp of viewports) {
    const page = await browser.newPage();
    await page.setViewportSize({ width: vp.width, height: vp.height });
    await page.goto(`http://localhost:${PORT}/`);

    const scrollWidth = await page.evaluate(() => document.documentElement.scrollWidth);
    const clientWidth = await page.evaluate(() => document.documentElement.clientWidth);
    const overflow = scrollWidth > clientWidth;

    const brandTitleBox = await page.evaluate(() => {
      const el = document.querySelector('.brand-title');
      return el ? el.getBoundingClientRect() : null;
    });

    const callBtnBox = await page.evaluate(() => {
      const el = document.querySelector('#nav-call-btn');
      return el ? el.getBoundingClientRect() : null;
    });

    const toggleBox = await page.evaluate(() => {
      const el = document.querySelector('#mobile-toggle');
      return el ? el.getBoundingClientRect() : null;
    });

    console.log(`[${vp.name}]`);
    console.log(`  clientWidth: ${clientWidth}px, scrollWidth: ${scrollWidth}px | Horizontal Overflow: ${overflow ? 'FAIL (OVERFLOW DETECTED!)' : 'PASS'}`);
    if (brandTitleBox && callBtnBox && toggleBox) {
      console.log(`  Header elements bounds: brandRight=${brandTitleBox.right.toFixed(1)}, callBtnLeft=${callBtnBox.left.toFixed(1)}, toggleLeft=${toggleBox.left.toFixed(1)}`);
      if (brandTitleBox.right > callBtnBox.left && callBtnBox.width > 0) {
        console.log(`  WARNING/FAIL: Brand title overlaps Call Now button!`);
      }
    }

    await page.close();
  }

  console.log('\n--- NAVBAR STICKY BEHAVIOR TESTING ---');
  const pageNav = await browser.newPage();
  await pageNav.setViewportSize({ width: 1280, height: 800 });
  await pageNav.goto(`http://localhost:${PORT}/`);

  const initialPosition = await pageNav.evaluate(() => {
    const el = document.querySelector('#main-header');
    const style = getComputedStyle(el);
    return { position: style.position, top: style.top };
  });
  console.log(`Sticky Navbar Position CSS: position=${initialPosition.position}, top=${initialPosition.top}`);

  await pageNav.evaluate(() => window.scrollTo(0, 500));
  await pageNav.waitForTimeout(200);
  const isScrolledClassAdded = await pageNav.evaluate(() => document.querySelector('#main-header').classList.contains('scrolled'));
  console.log(`Navbar class 'scrolled' added after 500px scroll: ${isScrolledClassAdded ? 'PASS' : 'FAIL'}`);

  console.log('\n--- ANCHOR SMOOTH SCROLL TESTING ---');
  const anchorHrefs = ['#services', '#about', '#galleries', '#reviews', '#contact', '#quote-form'];
  for (const href of anchorHrefs) {
    const targetExists = await pageNav.evaluate((selector) => !!document.querySelector(selector), href);
    console.log(`Anchor ${href} target in DOM: ${targetExists ? 'PASS' : 'FAIL'}`);
  }

  // Click hero quote button and test scroll + focus
  await pageNav.click('.btn-hero-quote');
  await pageNav.waitForTimeout(500);
  const focusedInputId = await pageNav.evaluate(() => document.activeElement ? document.activeElement.id : null);
  console.log(`Clicking Hero Quote CTA focuses input: focusedId=${focusedInputId} (Expected: quote-name) -> ${focusedInputId === 'quote-name' ? 'PASS' : 'FAIL'}`);

  console.log('\n--- GALLERY & LIGHTBOX TESTING ---');
  await pageNav.click('.gallery-tab-btn[data-tab="cleaning"]');
  const isCleaningActive = await pageNav.evaluate(() => {
    const tab = document.querySelector('.gallery-tab-btn[data-tab="cleaning"]');
    const content = document.querySelector('#gallery-cleaning');
    return tab.classList.contains('active') && content.classList.contains('active');
  });
  console.log(`Gallery tab switching to 'cleaning': ${isCleaningActive ? 'PASS' : 'FAIL'}`);

  // Open Lightbox
  const galleryItem = await pageNav.$('#gallery-cleaning .gallery-item');
  if (galleryItem) {
    await galleryItem.click();
    await pageNav.waitForTimeout(200);
    const isLightboxActive = await pageNav.evaluate(() => {
      const modal = document.querySelector('#lightbox-modal');
      const img = document.querySelector('#lightbox-img');
      return modal.classList.contains('active') && !!img.src;
    });
    console.log(`Lightbox opens on gallery item click: ${isLightboxActive ? 'PASS' : 'FAIL'}`);

    // Press Escape to close
    await pageNav.keyboard.press('Escape');
    await pageNav.waitForTimeout(200);
    const isLightboxClosed = await pageNav.evaluate(() => {
      const modal = document.querySelector('#lightbox-modal');
      return !modal.classList.contains('active');
    });
    console.log(`Pressing Escape closes Lightbox: ${isLightboxClosed ? 'PASS' : 'FAIL'}`);
  }

  await browser.close();
  server.close();
  console.log('\nStress tests completed!');
}

runStressTests().catch(err => {
  console.error('Stress test error:', err);
  process.exit(1);
});
