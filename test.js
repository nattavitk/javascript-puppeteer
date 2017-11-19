import puppeteer from 'puppeteer';
import 'babel-polyfill';

const getPic = async () => {
  const browser = await puppeteer.launch({
    headless: false,
  });
  const page = await browser.newPage();
  await page.goto('https://google.com');
  await page.setViewport({
    width: 1000,
    height: 500,
  });
  await page.screenshot({
    path: './screenshot/google.png',
  });

  await browser.close();
};

getPic();
