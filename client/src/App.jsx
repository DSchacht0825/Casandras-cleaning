import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaHome, FaBuilding, FaBroom, FaStar, FaCheckCircle, FaShieldAlt, FaPhone, FaEnvelope, FaMapMarkerAlt, FaMagic, FaCalendarCheck, FaBars, FaTimes, FaFacebook, FaInstagram } from 'react-icons/fa';
import EstimateForm from './components/EstimateForm';
import EmploymentForm from './components/EmploymentForm';
import './App.css';

function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [employmentOpen, setEmploymentOpen] = useState(false);

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
          <li><a href="#contact">Contact</a></li>
          <li><a href="#" onClick={(e) => { e.preventDefault(); setEmploymentOpen(true); }}>Careers</a></li>
        </ul>
        <button className="cta-button desktop-cta" onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}>Get Estimate</button>
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
              <li><a href="#contact" onClick={() => setMobileMenuOpen(false)}>Contact</a></li>
              <li><a href="#" onClick={(e) => { e.preventDefault(); setMobileMenuOpen(false); setEmploymentOpen(true); }}>Careers</a></li>
            </ul>
            <button className="cta-button mobile-cta" onClick={() => { setMobileMenuOpen(false); document.getElementById('contact').scrollIntoView({ behavior: 'smooth' }); }}>Get Estimate</button>
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
          <h1>Professional Cleaning Services in Waco, Hewitt & Lorena TX</h1>
          <p>Experience the difference of a truly spotless home. Professional, reliable, and fully insured cleaning services for Waco, Hewitt, Lorena, Woodway, Robinson, and surrounding areas within 40 miles.</p>
          <div className="hero-buttons">
            <button className="primary-btn" onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}>Get Free Estimate</button>
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
          <h2>Our Cleaning Services in Waco & Surrounding Areas</h2>
          <p>Comprehensive cleaning solutions for homes and businesses in Waco, Hewitt, Lorena, Woodway, Robinson, Bellmead, and beyond</p>
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
            <img src="/images/IMG_4829.jpg" alt="Professional house cleaning results in Waco TX - sparkling clean home interior" />
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
            <img src="/images/IMG_4792.jpg" alt="Residential cleaning services Hewitt TX - spotless home after deep cleaning" />
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
            <img src="/images/image000007.jpg" alt="Commercial cleaning Lorena TX - quality office and business cleaning service" />
          </motion.div>
        </div>
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
            <h2>Contact Waco's Top-Rated Cleaning Service</h2>
            <p>Ready to experience the best cleaning service in Waco, Hewitt, Lorena, and surrounding areas? Call, text, or email us anytime - or fill out the form for a free estimate!</p>
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
                  <h4>Service Area</h4>
                  <p>Waco & 40-Mile Radius (Hewitt, Lorena, Woodway, Robinson, Bellmead, McGregor, China Spring, West & More)</p>
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

      {/* Employment Modal */}
      <AnimatePresence>
        {employmentOpen && (
          <EmploymentForm isOpen={employmentOpen} onClose={() => setEmploymentOpen(false)} />
        )}
      </AnimatePresence>
    </div>
  );
}

export default App;
