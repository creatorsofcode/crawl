const puppeteer = require('puppeteer');

const url = 'https://en.wikipedia.org/wiki/List_of_programming_languages';

async function scrapeProgrammingLanguages() {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto(url, { waitUntil: 'networkidle2' });

  const programmingLanguages = await page.evaluate(() => {
    const links = Array.from(document.querySelectorAll('.div-col li a'));
    return links.map(link => link.textContent);
  });

  await browser.close();
  return programmingLanguages;
}

scrapeProgrammingLanguages()
  .then(languages => console.log(languages))
  .catch(error => console.error('Error:', error));

