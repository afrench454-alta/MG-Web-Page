const http = require('http');
const fs = require('fs');
const path = require('path');
const playwright = require('playwright');

const BASE_DIR = 'c:/Users/frenc/active';
const PORT = 8097;

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

async function check320px() {
  const server = await createServer(BASE_DIR, PORT);
  const browser = await playwright.chromium.launch({ headless: true });
  const page = await browser.newPage();
  await page.setViewportSize({ width: 320, height: 568 });
  await page.goto(`http://localhost:${PORT}/`);

  const sections = ['#hero', '.trust-bar-section', '#about', '#services', '#contact', '#galleries', '#reviews', '#quote-form', '.sponsorship-section', '.main-footer', '#mobile-action-bar'];

  console.log('Checking sections at 320px width:');
  for (const s of sections) {
    const info = await page.evaluate((sel) => {
      const el = document.querySelector(sel);
      if (!el) return null;
      const rect = el.getBoundingClientRect();
      return {
        width: rect.width,
        height: rect.height,
        scrollWidth: el.scrollWidth,
        clientWidth: el.clientWidth
      };
    }, s);
    if (info) {
      console.log(`  ${s}: width=${info.width.toFixed(1)}px, scrollWidth=${info.scrollWidth}px, clientWidth=${info.clientWidth}px`);
    } else {
      console.log(`  ${s}: NOT FOUND`);
    }
  }

  await browser.close();
  server.close();
}

check320px().catch(console.error);
