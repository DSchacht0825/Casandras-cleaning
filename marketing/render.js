// Renders templates/*.html → print-ready/*.pdf (vector text, exact trim + bleed)
// plus a 300-DPI PNG of every page (for print sites that want images).
// Usage: node render.js [name ...]
const fs = require('fs');
const path = require('path');
const { execFileSync } = require('child_process');
const puppeteer = require('puppeteer-core');
const { PDFDocument } = require('pdf-lib');

const CHROME = '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome';
const DPI = 300;
const OUT = path.join(__dirname, 'print-ready');
fs.mkdirSync(OUT, { recursive: true });

const only = process.argv.slice(2);
const names = fs.readdirSync(path.join(__dirname, 'templates'))
  .filter((f) => f.endsWith('.html'))
  .map((f) => f.replace(/\.html$/, ''))
  .filter((n) => !only.length || only.includes(n));

(async () => {
  const browser = await puppeteer.launch({ executablePath: CHROME, headless: true, args: ['--allow-file-access-from-files'] });
  for (const name of names) {
    const page = await browser.newPage();
    await page.goto('file://' + path.join(__dirname, 'templates', name + '.html'), { waitUntil: 'networkidle0' });
    await page.evaluate(() => document.fonts.ready);

    const pdf = await page.pdf({ preferCSSPageSize: true, printBackground: true });
    fs.writeFileSync(path.join(OUT, name + '.pdf'), pdf);
    const doc = await PDFDocument.load(pdf);
    const sizes = doc.getPages().map((p) => `${(p.getWidth() / 72).toFixed(3)}x${(p.getHeight() / 72).toFixed(3)}in`);

    // 300-DPI PNG per page. Chrome saves screenshots tagged 72 DPI, so re-stamp
    // the density metadata or print sites will think the file is huge/low-res.
    const first = await page.$('.page');
    const box = await first.boundingBox();
    await page.setViewport({ width: Math.ceil(box.width), height: Math.ceil(box.height), deviceScaleFactor: DPI / 96 });
    const pages = await page.$$('.page');
    for (let i = 0; i < pages.length; i++) {
      const suffix = pages.length > 1 ? (i === 0 ? '-front' : '-back') : '';
      const png = path.join(OUT, `${name}${suffix}-300dpi.png`);
      await pages[i].screenshot({ path: png });
      execFileSync('magick', [png, '-units', 'PixelsPerInch', '-density', String(DPI), png]);
    }
    console.log(`${name}.pdf  pages=${sizes.length}  ${[...new Set(sizes)].join(', ')}`);
    await page.close();
  }
  await browser.close();
})();
