// Post-build: write dist/house-cleaning-<city>-tx/index.html for every city in
// src/siteData.js, each with its own <title>, description, canonical and OG
// tags so search engines index them as distinct local pages. The React app
// reads the URL and renders the city-specific content.
import { readFileSync, writeFileSync, mkdirSync } from 'node:fs';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';
import { CITIES, SITE_URL, cityPath } from '../src/siteData.js';

const dist = join(dirname(fileURLToPath(import.meta.url)), '..', 'dist');
const base = readFileSync(join(dist, 'index.html'), 'utf8');

const esc = (s) => s.replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;');

function setAttr(html, selectorRe, value) {
  if (!selectorRe.test(html)) throw new Error(`city-pages: pattern not found ${selectorRe}`);
  return html.replace(selectorRe, (m, pre, _old, post) => `${pre}${esc(value)}${post}`);
}

const meta = (attr, name) =>
  new RegExp(`(<meta ${attr}="${name.replace(/[.:]/g, '\\$&')}" content=")([^"]*)(")`);

for (const city of CITIES) {
  const url = `${SITE_URL}${cityPath(city)}`;
  const title = `House Cleaning ${city.name} TX | Casandra's Cleaning`;
  const desc = `Professional house cleaning in ${city.name}, TX. Residential, deep, move-out, commercial & Airbnb cleaning. Fully insured, no contracts. Free estimates — call 469-915-0592.`;

  let html = base.replace(/<title>[^<]*<\/title>/, `<title>${esc(title)}</title>`);
  html = setAttr(html, /(<link rel="canonical" href=")([^"]*)(")/, url);
  html = setAttr(html, meta('name', 'description'), desc);
  html = setAttr(html, meta('property', 'og:url'), url);
  html = setAttr(html, meta('property', 'og:title'), title);
  html = setAttr(html, meta('property', 'og:description'), desc);
  html = setAttr(html, meta('property', 'twitter:url'), url);
  html = setAttr(html, meta('property', 'twitter:title'), title);
  html = setAttr(html, meta('property', 'twitter:description'), desc);
  html = setAttr(html, meta('name', 'geo.placename'), `${city.name}, Texas`);

  const out = join(dist, cityPath(city).slice(1), 'index.html');
  mkdirSync(dirname(out), { recursive: true });
  writeFileSync(out, html);
  console.log(`city-pages: wrote ${cityPath(city)}`);
}
