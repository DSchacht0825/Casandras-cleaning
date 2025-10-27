import { useState } from 'react';
import { motion } from 'framer-motion';
import { FaCheckCircle } from 'react-icons/fa';
import moment from 'moment';
import './BookingForm.css';

function BookingForm({ selectedDate, onClose }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    serviceType: 'residential',
    message: '',
    preferredDate: selectedDate ? moment(selectedDate.start).format('YYYY-MM-DD') : '',
    preferredTime: selectedDate ? moment(selectedDate.start).format('HH:mm') : ''
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

    // Netlify Forms requires a form submission with proper encoding
    const formBody = new FormData();
    formBody.append('form-name', 'booking');
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
        setTimeout(() => {
          onClose();
        }, 3000);
      } else {
        alert('There was an issue submitting your booking. Please try again or call us directly.');
      }
    } catch (error) {
      console.error('Form submission error:', error);
      alert('There was an issue submitting your booking. Please try again or call us directly.');
    } finally {
      setIsSubmitting(false);
    }
  };

  if (submitted) {
    return (
      <motion.div
        className="booking-success"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        <FaCheckCircle className="success-icon" />
        <h3>Thank You!</h3>
        <p>Someone will contact you shortly with confirmation and pricing.</p>
      </motion.div>
    );
  }

  return (
    <motion.div
      className="booking-form"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
    >
      <h3>Complete Your Booking</h3>
      {selectedDate && (
        <div className="selected-date-display">
          <p><strong>Selected Date:</strong> {moment(selectedDate.start).format('MMMM D, YYYY')}</p>
          <p><strong>Time:</strong> {moment(selectedDate.start).format('h:mm A')}</p>
        </div>
      )}

      <form onSubmit={handleSubmit} name="booking">
        <input type="hidden" name="form-name" value="booking" />

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

        <div className="form-group">
          <label htmlFor="serviceType">Service Type *</label>
          <select
            id="serviceType"
            name="serviceType"
            value={formData.serviceType}
            onChange={handleChange}
            required
          >
            <option value="residential">Residential Cleaning</option>
            <option value="commercial">Commercial Cleaning</option>
            <option value="airbnb">Airbnb Turnover</option>
            <option value="deep">Deep Cleaning</option>
            <option value="event">Event Cleanup</option>
            <option value="regular">Regular Housekeeping</option>
          </select>
        </div>

        <div className="form-row">
          <div className="form-group">
            <label htmlFor="preferredDate">Preferred Date *</label>
            <input
              type="date"
              id="preferredDate"
              name="preferredDate"
              value={formData.preferredDate}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="preferredTime">Preferred Time *</label>
            <input
              type="time"
              id="preferredTime"
              name="preferredTime"
              value={formData.preferredTime}
              onChange={handleChange}
              required
            />
          </div>
        </div>

        <div className="form-group">
          <label htmlFor="message">Additional Details</label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            rows="4"
            placeholder="Tell us about your cleaning needs, special requests, or questions..."
          ></textarea>
        </div>

        <div className="form-actions">
          <button type="button" className="cancel-btn" onClick={onClose}>
            Cancel
          </button>
          <button type="submit" className="submit-btn" disabled={isSubmitting}>
            {isSubmitting ? 'Submitting...' : 'Request Booking'}
          </button>
        </div>
      </form>
    </motion.div>
  );
}

export default BookingForm;
