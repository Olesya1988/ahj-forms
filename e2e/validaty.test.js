import puppeteer from 'puppeteer';

jest.setTimeout(30000);

describe('Tooltip Form', () => {
  let browser;
  let page;

  beforeEach(async () => {
    browser = await puppeteer.launch({
      headless: false,
      slowMo: 100,
      devtools: true,
    });

    page = await browser.newPage();
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
  });
});
