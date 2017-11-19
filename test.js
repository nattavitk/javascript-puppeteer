import puppeteer from 'puppeteer';
import 'babel-polyfill';

const getPic = async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto('https://google.com');
  await page.screenshot({
    path: './screenshot/google.png',
  });

  await browser.close();
};

getPic();
