import puppeteer from 'puppeteer';

jest.setTimeout(30000);

describe('Tooltip Form', () => {
  let browser;
  let page;
  let server = null;
  const baseUrl = 'http://localhost:9001';

  beforeEach(async () => {
    server = fork(`${__dirname}/e2e.server.js`);
    await new Promise((resolve, reject) => {
      server.on('error', reject);
      server.on('message', (message) => {
        if (message === 'ok') {
          resolve();
        }
      });
    });

    browser = await puppeteer.launch({
      headless: true,
      slowMo: 100,
      devtools: true,
    });

    page = await browser.newPage();
    await page.goto(baseUrl);
  });

  test('Form should render on page start', async () => {
    await page.goto('http://localhost:9000');

    await page.waitForTimeout('.widget');
  });

  test('Should add .tooltip class if btn is mouseover', async () => {
    await page.goto('http://localhost:9000');

    await page.waitForTimeout('.widget');

    const form = await page.$('.widget-form');
    const btn = await form.$('.btn');

    await btn.click();

    await page.waitForTimeout('.tooltip');
  });

  afterEach(async () => {
    await browser.close();
    server.kill();
  });
});
