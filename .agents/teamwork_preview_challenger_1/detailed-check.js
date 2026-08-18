const http = require('http');
const fs = require('fs');
const path = require('path');
const playwright = require('playwright');

const BASE_DIR = 'c:/Users/frenc/active';
const PORT = 8098;

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

async function detailedCheck() {
  const server = await createServer(BASE_DIR, PORT);
  const browser = await playwright.chromium.launch({ headless: true });

  const viewports = [320, 375, 768, 1280];

  for (const width of viewports) {
    const page = await browser.newPage();
    await page.setViewportSize({ width, height: 700 });
    await page.goto(`http://localhost:${PORT}/`);

    const callBtnDetails = await page.evaluate(() => {
      const btn = document.querySelector('#nav-call-btn');
      if (!btn) return null;
      const rect = btn.getBoundingClientRect();
      const style = getComputedStyle(btn);
      const span = btn.querySelector('span');
      return {
        width: rect.width,
        height: rect.height,
        fontSize: style.fontSize,
        padding: style.padding,
        spanText: span ? span.textContent : '',
        display: style.display
      };
    });

    const brandDetails = await page.evaluate(() => {
      const el = document.querySelector('.brand-title');
      if (!el) return null;
      const rect = el.getBoundingClientRect();
      return {
        width: rect.width,
        height: rect.height,
        text: el.textContent
      };
    });

    const heroCallBtnDetails = await page.evaluate(() => {
      const btn = document.querySelector('.btn-hero-call');
      if (!btn) return null;
      const rect = btn.getBoundingClientRect();
      return { width: rect.width, height: rect.height };
    });

    const heroQuoteBtnDetails = await page.evaluate(() => {
      const btn = document.querySelector('.btn-hero-quote');
      if (!btn) return null;
      const rect = btn.getBoundingClientRect();
      return { width: rect.width, height: rect.height };
    });

    console.log(`\n=== Viewport Width: ${width}px ===`);
    console.log(`  Brand Title: width=${brandDetails.width.toFixed(1)}px, height=${brandDetails.height.toFixed(1)}px`);
    console.log(`  Nav Call Button: width=${callBtnDetails.width.toFixed(1)}px, height=${callBtnDetails.height.toFixed(1)}px, text="${callBtnDetails.spanText}"`);
    console.log(`  Hero Call Button: width=${heroCallBtnDetails.width.toFixed(1)}px, height=${heroCallBtnDetails.height.toFixed(1)}px`);
    console.log(`  Hero Quote Button: width=${heroQuoteBtnDetails.width.toFixed(1)}px, height=${heroQuoteBtnDetails.height.toFixed(1)}px`);

    await page.close();
  }

  await browser.close();
  server.close();
}

detailedCheck().catch(console.error);
