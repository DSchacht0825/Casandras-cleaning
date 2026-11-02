import { motion } from 'framer-motion';
import { FaStar, FaGoogle, FaQuoteLeft } from 'react-icons/fa';
import { REVIEWS, REVIEW_COUNT, REVIEW_RATING, reviewsLink } from '../siteData';
import './Reviews.css';

const fadeInUp = { hidden: { opacity: 0, y: 60 }, visible: { opacity: 1, y: 0 } };

function Stars({ count = 5 }) {
  return (
    <span className="review-stars" aria-label={`${count} out of 5 stars`}>
      {Array.from({ length: 5 }, (_, i) => (
        <FaStar key={i} className={i < count ? 'filled' : ''} />
      ))}
    </span>
  );
}

export default function Reviews({ cityName }) {
  return (
    <section className="reviews" id="reviews">
      <motion.div
        className="section-title"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        variants={fadeInUp}
      >
        <h2>What Our Clients Say</h2>
        <p>
          {cityName
            ? `Trusted by homeowners in ${cityName} and across DFW`
            : 'Real reviews from real clients across Arlington & DFW'}
        </p>
      </motion.div>

      <motion.a
        className="google-badge"
        href={reviewsLink}
        target="_blank"
        rel="noopener noreferrer"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.1 }}
        variants={fadeInUp}
      >
        <FaGoogle className="google-badge-icon" />
        <span className="google-badge-text">
          {REVIEW_RATING && <strong>{REVIEW_RATING.toFixed(1)}</strong>}
          {REVIEW_RATING && <Stars count={Math.round(REVIEW_RATING)} />}
          <span>{REVIEW_COUNT} Google reviews</span>
        </span>
        <span className="google-badge-cta">Read them all →</span>
      </motion.a>

      {REVIEWS.length > 0 && (
        <div className="reviews-grid">
          {REVIEWS.map((r, i) => (
            <motion.figure
              key={r.name + i}
              className="review-card"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 * (i % 3) }}
              variants={fadeInUp}
            >
              <FaQuoteLeft className="review-quote" />
              <Stars count={r.rating} />
              <blockquote>{r.text}</blockquote>
              <figcaption>
                {r.name}
                {r.city && <span> · {r.city}</span>}
                <span className="review-source"><FaGoogle /> Google</span>
              </figcaption>
            </motion.figure>
          ))}
        </div>
      )}
    </section>
  );
}
