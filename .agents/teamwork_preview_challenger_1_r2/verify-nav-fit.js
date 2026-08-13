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

async function verifyNav() {
  const server = await createServer(BASE_DIR, PORT);
  const browser = await playwright.chromium.launch({ headless: true });

  const viewports = [320, 375, 576, 768, 1280];

  for (const width of viewports) {
    const page = await browser.newPage();
    await page.setViewportSize({ width, height: 700 });
    await page.goto(`http://localhost:${PORT}/`);

    const headerMetrics = await page.evaluate(() => {
      const header = document.querySelector('#main-header');
      const container = document.querySelector('.nav-container');
      const brandTitle = document.querySelector('.brand-title');
      const callBtn = document.querySelector('#nav-call-btn');
      const mobileToggle = document.querySelector('.mobile-toggle');

      const headerRect = header ? header.getBoundingClientRect() : null;
      const containerRect = container ? container.getBoundingClientRect() : null;
      const brandRect = brandTitle ? brandTitle.getBoundingClientRect() : null;
      const callBtnRect = callBtn ? callBtn.getBoundingClientRect() : null;
      const toggleRect = mobileToggle ? mobileToggle.getBoundingClientRect() : null;

      const brandStyle = brandTitle ? getComputedStyle(brandTitle) : {};
      const callBtnStyle = callBtn ? getComputedStyle(callBtn) : {};

      // Estimate line count by line-height or height / font-size ratio
      const brandHeight = brandRect ? brandRect.height : 0;
      const brandFontSize = parseFloat(brandStyle.fontSize || '16');
      const isSingleLine = brandHeight <= brandFontSize * 1.8;

      return {
        headerHeight: headerRect ? headerRect.height : 0,
        containerHeight: containerRect ? containerRect.height : 0,
        brandWidth: brandRect ? brandRect.width : 0,
        brandHeight: brandRect ? brandRect.height : 0,
        brandWhiteSpace: brandStyle.whiteSpace,
        brandFontSize: brandStyle.fontSize,
        isSingleLine,
        callBtnDisplay: callBtnStyle.display,
        callBtnWidth: callBtnRect ? callBtnRect.width : 0,
        callBtnHeight: callBtnRect ? callBtnRect.height : 0,
        toggleWidth: toggleRect ? toggleRect.width : 0,
        toggleHeight: toggleRect ? toggleRect.height : 0
      };
    });

    console.log(`\n--- Viewport Width: ${width}px ---`);
    console.log(`Header Height: ${headerMetrics.headerHeight.toFixed(1)}px (Target: <= 72px)`);
    console.log(`Nav Container Height: ${headerMetrics.containerHeight.toFixed(1)}px`);
    console.log(`Brand Title: width=${headerMetrics.brandWidth.toFixed(1)}px, height=${headerMetrics.brandHeight.toFixed(1)}px, font-size=${headerMetrics.brandFontSize}, white-space=${headerMetrics.brandWhiteSpace}, singleLine=${headerMetrics.isSingleLine}`);
    console.log(`Nav Call Btn: display=${headerMetrics.callBtnDisplay}, size=${headerMetrics.callBtnWidth.toFixed(1)}x${headerMetrics.callBtnHeight.toFixed(1)}px`);
    console.log(`Mobile Toggle: size=${headerMetrics.toggleWidth.toFixed(1)}x${headerMetrics.toggleHeight.toFixed(1)}px`);

    await page.close();
  }

  await browser.close();
  server.close();
}

verifyNav().catch(console.error);
