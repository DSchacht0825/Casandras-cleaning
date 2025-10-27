import { useState } from 'react';
import { motion } from 'framer-motion';
import { FaCheckCircle } from 'react-icons/fa';
import './EstimateForm.css';

function EstimateForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    propertyType: 'residential',
    propertySize: '',
    bedrooms: '',
    bathrooms: '',
    frequency: 'one-time',
    specialRequests: ''
  });

  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    const formBody = new FormData();
    formBody.append('form-name', 'estimate');
    Object.keys(formData).forEach(key => {
      formBody.append(key, formData[key]);
    });

    try {
      const response = await fetch('/', {
        method: 'POST',
        body: formBody
      });

      if (response.ok) {
        setSubmitted(true);
        // Reset form after 5 seconds
        setTimeout(() => {
          setSubmitted(false);
          setFormData({
            name: '',
            email: '',
            phone: '',
            propertyType: 'residential',
            propertySize: '',
            bedrooms: '',
            bathrooms: '',
            frequency: 'one-time',
            specialRequests: ''
          });
        }, 5000);
      } else {
        alert('There was an issue submitting your request. Please try again or call us directly at 254-651-5868.');
      }
    } catch (error) {
      console.error('Form submission error:', error);
      alert('There was an issue submitting your request. Please try again or call us directly at 254-651-5868.');
    } finally {
      setIsSubmitting(false);
    }
  };

  if (submitted) {
    return (
      <motion.div
        className="estimate-success"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        <FaCheckCircle className="success-icon" />
        <h3>Thank You!</h3>
        <p>We've received your estimate request. Someone will contact you shortly with a detailed quote.</p>
      </motion.div>
    );
  }

  return (
    <motion.div
      className="estimate-form"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
    >
      <h3>Get a Free Estimate</h3>
      <p className="form-subtitle">Tell us about your cleaning needs and we'll provide a customized quote</p>

      <form onSubmit={handleSubmit} name="estimate">
        <input type="hidden" name="form-name" value="estimate" />

        <div className="form-row">
          <div className="form-group">
            <label htmlFor="name">Full Name *</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              placeholder="John Doe"
            />
          </div>

          <div className="form-group">
            <label htmlFor="phone">Phone Number *</label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              required
              placeholder="(254) 123-4567"
            />
          </div>
        </div>

        <div className="form-group">
          <label htmlFor="email">Email *</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            placeholder="john@example.com"
          />
        </div>

        <div className="form-row">
          <div className="form-group">
            <label htmlFor="propertyType">Property Type *</label>
            <select
              id="propertyType"
              name="propertyType"
              value={formData.propertyType}
              onChange={handleChange}
              required
            >
              <option value="residential">Residential</option>
              <option value="commercial">Commercial</option>
              <option value="airbnb">Airbnb/Vacation Rental</option>
              <option value="office">Office</option>
            </select>
          </div>

          <div className="form-group">
            <label htmlFor="propertySize">Square Footage (approx.)</label>
            <input
              type="text"
              id="propertySize"
              name="propertySize"
              value={formData.propertySize}
              onChange={handleChange}
              placeholder="e.g., 1500 sq ft"
            />
          </div>
        </div>

        <div className="form-row">
          <div className="form-group">
            <label htmlFor="bedrooms">Bedrooms</label>
            <input
              type="number"
              id="bedrooms"
              name="bedrooms"
              value={formData.bedrooms}
              onChange={handleChange}
              placeholder="Number of bedrooms"
              min="0"
            />
          </div>

          <div className="form-group">
            <label htmlFor="bathrooms">Bathrooms</label>
            <input
              type="number"
              id="bathrooms"
              name="bathrooms"
              value={formData.bathrooms}
              onChange={handleChange}
              placeholder="Number of bathrooms"
              min="0"
              step="0.5"
            />
          </div>
        </div>

        <div className="form-group">
          <label htmlFor="frequency">Service Frequency *</label>
          <select
            id="frequency"
            name="frequency"
            value={formData.frequency}
            onChange={handleChange}
            required
          >
            <option value="one-time">One-Time Deep Clean</option>
            <option value="weekly">Weekly</option>
            <option value="bi-weekly">Bi-Weekly</option>
            <option value="monthly">Monthly</option>
            <option value="move-in-out">Move In/Move Out</option>
          </select>
        </div>

        <div className="form-group">
          <label htmlFor="specialRequests">Special Requests or Details</label>
          <textarea
            id="specialRequests"
            name="specialRequests"
            value={formData.specialRequests}
            onChange={handleChange}
            rows="4"
            placeholder="Tell us about any specific cleaning needs, problem areas, pets, or special instructions..."
          ></textarea>
        </div>

        <button type="submit" className="submit-btn" disabled={isSubmitting}>
          {isSubmitting ? 'Submitting...' : 'Get My Free Estimate'}
        </button>
      </form>
    </motion.div>
  );
}

export default EstimateForm;
