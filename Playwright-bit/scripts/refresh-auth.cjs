const { chromium } = require('@playwright/test');
const path = require('node:path');

async function refreshAuth() {
  const browser = await chromium.launch({ channel: 'chrome', headless: false });
  try {
    const context = await browser.newContext({
      viewport: { width: 412, height: 915 },
      isMobile: true,
    });
    const page = await context.newPage();
    await page.goto('https://bit.omidpayment.ir/auth');
    console.log('Complete login and verification in Chrome. You have five minutes.');
    const cardButton = page.getByRole('button', { name: 'کارت به کارت', exact: true });
    const understandButton = page.getByRole('button', { name: /متوجه شدم/i });
    await cardButton.or(understandButton).first().waitFor({ timeout: 300_000 });
    if (await understandButton.isVisible()) {
      await understandButton.click();
    }
    await cardButton.waitFor({ state: 'visible' });
    await context.storageState({ path: path.resolve(__dirname, '../storageState.json') });
    console.log('Authenticated session saved. You can now run the card tests.');
  } finally {
    await browser.close();
  }
}

refreshAuth().catch((error) => {
  console.error('Could not refresh the login session:', error.message);
  process.exitCode = 1;
});
