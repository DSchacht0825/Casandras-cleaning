// Central place for business details, service-area cities and reviews.
// Edit this file to add a city page or paste in new Google reviews.

export const PHONE = '469-915-0592';
export const SITE_URL = 'https://casandrascleaning.com';

// ---- Google reviews -------------------------------------------------------
// GOOGLE_REVIEWS_URL: link to the Google Business Profile reviews.
// GOOGLE_WRITE_REVIEW_URL: the "Ask for reviews" link from Google Business
//   Profile (looks like https://g.page/r/XXXX/review). Used by /review.
// Leave either blank and the site falls back to a Google search link.
export const GOOGLE_REVIEWS_URL = '';
export const GOOGLE_WRITE_REVIEW_URL = '';
export const FACEBOOK_REVIEWS_URL = 'https://www.facebook.com/CasandrasCleaning/reviews';

export const REVIEW_COUNT = 22;
export const REVIEW_RATING = null; // e.g. 5.0 — only fill in from her Google profile

// Paste real reviews from Google here (copy text exactly; first name + last initial).
// { name: 'Jane D.', rating: 5, text: '...', city: 'Arlington' }
export const REVIEWS = [];

const GOOGLE_SEARCH_FALLBACK =
  'https://www.google.com/search?q=' + encodeURIComponent("Casandra's Cleaning Arlington TX reviews");
export const reviewsLink = GOOGLE_REVIEWS_URL || GOOGLE_SEARCH_FALLBACK;
export const writeReviewLink = GOOGLE_WRITE_REVIEW_URL || GOOGLE_REVIEWS_URL || GOOGLE_SEARCH_FALLBACK;

// ---- Service-area city pages ----------------------------------------------
// Each entry becomes its own page at /house-cleaning-<slug>-tx
export const CITIES = [
  {
    slug: 'arlington',
    name: 'Arlington',
    intro:
      "Arlington is home base for Casandra's Cleaning. From busy family homes to apartments and rentals, we bring the same careful, detail-focused clean to every space in Arlington — on a schedule that works for you, with no contracts.",
    nearby: ['Grand Prairie', 'Mansfield', 'Fort Worth', 'Kennedale'],
  },
  {
    slug: 'grand-prairie',
    name: 'Grand Prairie',
    intro:
      "Just next door to our Arlington home base, Grand Prairie homeowners and businesses count on Casandra's Cleaning for reliable, fully insured cleaning — recurring visits, one-time deep cleans, and move-in/move-out cleans.",
    nearby: ['Arlington', 'Irving', 'Mansfield'],
  },
  {
    slug: 'mansfield',
    name: 'Mansfield',
    intro:
      "Mansfield families trust Casandra's Cleaning to keep their homes spotless so they can spend their time on what matters. Choose weekly, bi-weekly or monthly service, or book a one-time deep clean.",
    nearby: ['Arlington', 'Grand Prairie', 'Kennedale'],
  },
  {
    slug: 'fort-worth',
    name: 'Fort Worth',
    intro:
      "Casandra's Cleaning serves Fort Worth homes, offices and short-term rentals with dependable, fully insured cleaning. Whether you need a recurring clean or a quick Airbnb turnover, we've got you covered.",
    nearby: ['Arlington', 'North Richland Hills', 'Hurst', 'Kennedale'],
  },
  {
    slug: 'irving',
    name: 'Irving',
    intro:
      "From homes to offices, Casandra's Cleaning helps Irving residents and businesses stay clean and welcoming. Flexible scheduling, no long-term contracts, and a satisfaction guarantee on every job.",
    nearby: ['Grand Prairie', 'Euless', 'Arlington'],
  },
  {
    slug: 'euless',
    name: 'Euless',
    intro:
      "Casandra's Cleaning serves Euless and the surrounding HEB area with professional residential, commercial and Airbnb cleaning — friendly, reliable and fully insured.",
    nearby: ['Bedford', 'Hurst', 'Irving', 'Arlington'],
  },
];

export const cityPath = (city) => `/house-cleaning-${city.slug}-tx`;

export function cityFromPath(pathname) {
  const clean = pathname.replace(/\/+$/, '');
  return CITIES.find((c) => cityPath(c) === clean) || null;
}
