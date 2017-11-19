import puppeteer from 'puppeteer';
import 'babel-polyfill';

let scrape = async () => {
  const browser = await puppeteer.launch({
    headless: false,
  });
  const page = await browser.newPage();
  await page.goto('http://books.toscrape.com/');
  await page.waitFor(1000);

  // Scrape
  //   await page.click(
  //     '#default > div > div > div > div > section > div:nth-child(2) > ol > li:nth-child(1) > article > div.image_container > a > img'
  //   );

  const result = await page.evaluate(() => {
    //return something
    let data = [];
    let elements = document.querySelectorAll('.product_pod');

    //  elements.map(item => {
    //    let title = document.querySelector('h3 a').innerText;
    //    let price = document.querySelector('.product_price .price_color')
    //      .innerText;
    //    data.push({ title, prices });
    //  });

    for (let element of elements) {
      let title = element.childNodes[5].innerText; // Select the title
      let price = element.childNodes[7].children[0].innerText; // Select the price
      data.push({ title, price });
    }

    return data;
  });

  browser.close();
  return result;
};

scrape().then(value => {
  console.log(value);
});
