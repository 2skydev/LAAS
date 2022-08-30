import { BrowserContext } from 'playwright';
import { chromium } from 'playwright-extra';
import StealthPlugin from 'puppeteer-extra-plugin-stealth';

chromium.use(StealthPlugin());

export class LAAS {
  browser: BrowserContext;

  async launch() {
    this.browser = await chromium.launchPersistentContext('./user-data', { headless: false });
  }

  async test() {
    const page = await this.browser.newPage();

    console.log('Testing the stealth plugin..');
    await page.goto('https://bot.sannysoft.com', { waitUntil: 'networkidle' });
    await page.screenshot({ path: 'stealth.png', fullPage: true });

    console.log('All done, check the screenshot. ✨');
  }
}
