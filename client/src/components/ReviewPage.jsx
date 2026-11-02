import { FaGoogle, FaFacebook, FaHeart } from 'react-icons/fa';
import { writeReviewLink, FACEBOOK_REVIEWS_URL } from '../siteData';
import './ReviewPage.css';

// casandrascleaning.com/review — short link to text clients after each clean.
export default function ReviewPage() {
  return (
    <main className="review-page">
      <div className="review-page-card">
        <img src="/images/newlogo.jpeg" alt="Casandra's Cleaning" className="review-page-logo" />
        <FaHeart className="review-page-heart" />
        <h1>Thank you for choosing Casandra's Cleaning!</h1>
        <p>
          If you loved your clean, a quick review helps other families find us.
          It only takes a minute and means the world to our small business.
        </p>
        <a className="primary-btn review-page-btn" href={writeReviewLink}>
          <FaGoogle /> Leave a Google Review
        </a>
        <a className="secondary-btn review-page-btn" href={FACEBOOK_REVIEWS_URL}>
          <FaFacebook /> Review us on Facebook
        </a>
        <a className="review-page-home" href="/">Back to casandrascleaning.com</a>
      </div>
    </main>
  );
}
