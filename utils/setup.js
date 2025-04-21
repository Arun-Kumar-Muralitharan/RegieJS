const { chromium } = require('playwright');

const EDGE_PATH = 'C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe';

async function setupBrowser(browserType = 'chromium') {
  switch (browserType.toLowerCase()) {
    case 'chromium':
      return await chromium.launch({ headless: false });

    case 'firefox':
      return await firefox.launch({ headless: false });

    case 'webkit':
      return await webkit.launch({ headless: false });

    case 'edge':
      return await chromium.launch({
        headless: false,
        executablePath: EDGE_PATH,
      });

    default:
      throw new Error(`Unsupported browser type: ${browserType}`);
  }
}

async function teardownBrowser(browser, page, context) {
    if (browser) {
      await page.close();
      await context.close();
      await browser.close();
      console.log('Browser closed successfully.');
    }
  }
  
  module.exports = { setupBrowser, teardownBrowser };
  