import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaHome, FaBuilding, FaBroom, FaStar, FaCheckCircle, FaShieldAlt, FaPhone, FaEnvelope, FaMapMarkerAlt, FaMagic, FaCalendarCheck, FaBars, FaTimes, FaFacebook, FaInstagram } from 'react-icons/fa';
import Booking from './components/Booking';
import EstimateForm from './components/EstimateForm';
import './App.css';

function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [bookingOpen, setBookingOpen] = useState(false);

  // Animation variants
  const fadeInUp = {
    hidden: { opacity: 0, y: 60 },
    visible: { opacity: 1, y: 0 }
  };

  const fadeIn = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 }
  };

  const scaleIn = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: { opacity: 1, scale: 1 }
  };

  return (
    <div className="app">
      {/* Navigation */}
      <motion.nav
        className="navbar"
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <img src="/images/logo.png" alt="Casandra's Cleaning Logo" className="logo" />
        <ul className="nav-links">
          <li><a href="#home">Home</a></li>
          <li><a href="#services">Services</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
        <button className="cta-button desktop-cta" onClick={() => setBookingOpen(true)}>Book Now</button>
        <button className="hamburger" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
          {mobileMenuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            className="mobile-menu"
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'tween', duration: 0.3 }}
          >
            <ul className="mobile-nav-links">
              <li><a href="#home" onClick={() => setMobileMenuOpen(false)}>Home</a></li>
              <li><a href="#services" onClick={() => setMobileMenuOpen(false)}>Services</a></li>
              <li><a href="#about" onClick={() => setMobileMenuOpen(false)}>About</a></li>
              <li><a href="#contact" onClick={() => setMobileMenuOpen(false)}>Contact</a></li>
            </ul>
            <button className="cta-button mobile-cta" onClick={() => { setMobileMenuOpen(false); setBookingOpen(true); }}>Book Now</button>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Hero Section */}
      <section className="hero" id="home">
        <div className="floating-element floating-1"></div>
        <div className="floating-element floating-2"></div>
        <motion.div
          className="hero-content-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          variants={fadeInUp}
        >
          <h1>Waco's <span className="highlight">Premier</span> Cleaning Service</h1>
          <p>Experience the difference of a truly spotless home. Professional, reliable, and fully insured cleaning services tailored to your needs.</p>
          <div className="hero-buttons">
            <button className="primary-btn" onClick={() => setBookingOpen(true)}>Book Now</button>
            <button className="secondary-btn" onClick={() => window.location.href = 'tel:254-651-5868'}>254-651-5868</button>
          </div>
        </motion.div>
      </section>

      {/* Services Section */}
      <section className="services" id="services">
        <motion.div
          className="section-title"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          variants={fadeInUp}
        >
          <h2>Our Services</h2>
          <p>Comprehensive cleaning solutions for every need</p>
        </motion.div>
        <div className="services-grid">
          <motion.div
            className="service-card"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            variants={scaleIn}
            whileHover={{ scale: 1.02 }}
          >
            <div className="service-icon"><FaHome /></div>
            <h3>Residential Cleaning</h3>
            <p>Keep your home sparkling clean with our regular or one-time residential cleaning services. No contracts required!</p>
          </motion.div>

          <motion.div
            className="service-card"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            variants={scaleIn}
            whileHover={{ scale: 1.02 }}
          >
            <div className="service-icon"><FaBuilding /></div>
            <h3>Commercial Cleaning</h3>
            <p>Professional office and commercial space cleaning to create a welcoming environment for your business.</p>
          </motion.div>

          <motion.div
            className="service-card"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            variants={scaleIn}
            whileHover={{ scale: 1.02 }}
          >
            <div className="service-icon"><FaCalendarCheck /></div>
            <h3>Airbnb Turnover</h3>
            <p>Quick and thorough cleaning services for your short-term rental properties to keep guests happy.</p>
          </motion.div>

          <motion.div
            className="service-card"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            variants={scaleIn}
            whileHover={{ scale: 1.02 }}
          >
            <div className="service-icon"><FaBroom /></div>
            <h3>Deep Cleaning</h3>
            <p>Intensive cleaning service including appliances, windows, carpet cleaning, and more for a complete refresh.</p>
          </motion.div>

          <motion.div
            className="service-card"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.5 }}
            variants={scaleIn}
            whileHover={{ scale: 1.02 }}
          >
            <div className="service-icon"><FaMagic /></div>
            <h3>Event Cleanup</h3>
            <p>Before and after event cleaning services to make your special occasions stress-free.</p>
          </motion.div>

          <motion.div
            className="service-card"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.6 }}
            variants={scaleIn}
            whileHover={{ scale: 1.02 }}
          >
            <div className="service-icon"><FaStar /></div>
            <h3>Regular Housekeeping</h3>
            <p>Scheduled cleaning services to maintain your home's cleanliness week after week.</p>
          </motion.div>
        </div>
      </section>

      {/* Gallery Showcase */}
      <section className="gallery-showcase">
        <motion.div
          className="section-title"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          variants={fadeInUp}
        >
          <h2>Our Work</h2>
          <p>See the difference we make</p>
        </motion.div>
        <div className="gallery-grid">
          <motion.div
            className="gallery-item"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            variants={scaleIn}
            whileHover={{ scale: 1.02 }}
          >
            <img src="/images/IMG_4829.jpg" alt="Professional cleaning result" />
          </motion.div>
          <motion.div
            className="gallery-item"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            variants={scaleIn}
            whileHover={{ scale: 1.02 }}
          >
            <img src="/images/IMG_4792.jpg" alt="Spotless home cleaning" />
          </motion.div>
          <motion.div
            className="gallery-item"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            variants={scaleIn}
            whileHover={{ scale: 1.02 }}
          >
            <img src="/images/image000007.jpg" alt="Quality cleaning service" />
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section className="about" id="about">
        <div className="about-content">
          <motion.div
            className="about-image"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            variants={fadeIn}
          >
            <img src="/images/casandra.jpg" alt="Casandra - Founder" />
          </motion.div>
          <motion.div
            className="about-text"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            variants={fadeInUp}
          >
            <h2>About Casandra</h2>
            <p>Born and raised in Waco Texas. Mom of three amazing boys. I am also a special needs mom. My youngest son was born with spina bifida and hydrocephalus. I know what it feels like to be tired and walk into a clean and tidy house, office, or salon. This feeling now opens doors to a creative mindset, puts you at ease and creates opportunities to spend your time on important things such as family, business ideas or relaxation.</p>
            <p>So when you choose Casandra's Cleaning it's not just a cleaning service, but an investment of your time. Time is something we will never get back.</p>
          </motion.div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="our-story">
        <motion.div
          className="section-title"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          variants={fadeInUp}
        >
          <h2>Our Story</h2>
        </motion.div>
        <motion.div
          className="story-content"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          variants={fadeInUp}
        >
          <p>Years ago, I watched my mother build her own cleaning business from the ground up. She did it with grit, grace, and a quiet strength that inspired everyone around her — especially me. As a young mom, I saw firsthand how her hard work provided for our family and created a sense of pride in what she built. I knew then that I wanted to follow in her footsteps.</p>

          <p>That's why I started Casandra's Cleaning — not just to make a living, but to carry forward a legacy.</p>

          <p>As a Latina woman and a mother of three, I've faced more than my share of barriers. There were moments of doubt, days where it felt like the odds were stacked against me — but I refused to let anything stop me. With every challenge, I became stronger. With every setback, more determined.</p>

          <p>What started as a small hustle has now grown into something I'm incredibly proud of: a trusted cleaning service built on integrity, excellence, and heart.</p>

          <p>To me, cleaning isn't just about sparkling floors or tidy spaces. It's about creating peace of mind — giving people the gift of time so they can focus on what matters most. It's about showing my boys that no matter where you come from, you can build something beautiful with faith, work ethic, and a whole lot of heart.</p>

          <p className="story-closing">This business is more than a job. It's my story, my passion, and my promise to every client: that when you invite Casandra's Cleaning into your space, you're not just hiring a service — you're supporting a dream.</p>
        </motion.div>
      </section>

      {/* Features Section */}
      <section className="features">
        <motion.div
          className="section-title"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          variants={fadeInUp}
        >
          <h2>Why Choose Us</h2>
          <p>Excellence in every detail</p>
        </motion.div>
        <div className="features-grid">
          <motion.div
            className="feature-item"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            variants={fadeInUp}
          >
            <div className="feature-icon"><FaCheckCircle /></div>
            <h3>100% Satisfaction</h3>
            <p>We stand behind our work with a complete satisfaction guarantee on every job.</p>
          </motion.div>

          <motion.div
            className="feature-item"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            variants={fadeInUp}
          >
            <div className="feature-icon"><FaShieldAlt /></div>
            <h3>Fully Insured</h3>
            <p>Complete insurance coverage gives you peace of mind while we work.</p>
          </motion.div>

          <motion.div
            className="feature-item"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            variants={fadeInUp}
          >
            <div className="feature-icon"><FaStar /></div>
            <h3>No Contracts</h3>
            <p>Flexible residential cleaning with no long-term commitments required.</p>
          </motion.div>

          <motion.div
            className="feature-item"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            variants={fadeInUp}
          >
            <div className="feature-icon"><FaCheckCircle /></div>
            <h3>Reliable Service</h3>
            <p>Dependable cleaning professionals who show up on time, every time.</p>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="contact" id="contact">
        <div className="contact-content">
          <motion.div
            className="contact-info"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            variants={fadeInUp}
          >
            <h2>Contact Us</h2>
            <p>Ready to experience the best cleaning service in Waco? Call, text, or email us anytime - or fill out the form for a free estimate!</p>
            <div className="contact-details">
              <div className="contact-item">
                <div className="contact-item-icon"><FaPhone /></div>
                <div className="contact-item-text">
                  <h4>Call or Text</h4>
                  <a href="tel:254-651-5868" className="contact-link">254-651-5868</a>
                </div>
              </div>
              <div className="contact-item">
                <div className="contact-item-icon"><FaEnvelope /></div>
                <div className="contact-item-text">
                  <h4>Email</h4>
                  <a href="mailto:casandra@casandrascleaning.com" className="contact-link">casandra@casandrascleaning.com</a>
                </div>
              </div>
              <div className="contact-item">
                <div className="contact-item-icon"><FaMapMarkerAlt /></div>
                <div className="contact-item-text">
                  <h4>Location</h4>
                  <p>Waco, Texas</p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            variants={fadeInUp}
          >
            <EstimateForm />
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-content">
          <div className="footer-logo">Casandra's Cleaning</div>
          <p>Waco's Premier Cleaning Service</p>
          <div className="social-links">
            <a href="https://www.facebook.com/CasandrasCleaning/" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
              <FaFacebook />
            </a>
            <a href="https://www.instagram.com/casandras.cleaning/?hl=en" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
              <FaInstagram />
            </a>
          </div>
          <p className="footer-copyright">&copy; 2025 Casandra's Cleaning. All rights reserved.</p>
        </div>
      </footer>

      {/* Booking Modal */}
      <AnimatePresence>
        {bookingOpen && (
          <Booking isOpen={bookingOpen} onClose={() => setBookingOpen(false)} />
        )}
      </AnimatePresence>
    </div>
  );
}

export default App;
