import { useState } from 'react';
import { motion } from 'framer-motion';
import { FaCheckCircle, FaTimes } from 'react-icons/fa';
import './EmploymentForm.css';

function EmploymentForm({ isOpen, onClose }) {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    position: 'cleaner',
    experience: '',
    availability: 'full-time',
    hasTransportation: 'yes',
    hasReferences: 'yes',
    startDate: '',
    coverLetter: ''
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
    formBody.append('form-name', 'employment');
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
          setSubmitted(false);
          setFormData({
            firstName: '',
            lastName: '',
            email: '',
            phone: '',
            position: 'cleaner',
            experience: '',
            availability: 'full-time',
            hasTransportation: 'yes',
            hasReferences: 'yes',
            startDate: '',
            coverLetter: ''
          });
        }, 4000);
      } else {
        alert('There was an issue submitting your application. Please try again or call us at 254-651-5868.');
      }
    } catch (error) {
      console.error('Form submission error:', error);
      alert('There was an issue submitting your application. Please try again or call us at 254-651-5868.');
    } finally {
      setIsSubmitting(false);
    }
  };

  if (!isOpen) return null;

  return (
    <motion.div
      className="employment-modal-overlay"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
    >
      <motion.div
        className="employment-modal"
        initial={{ opacity: 0, scale: 0.9, y: 50 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.9, y: 50 }}
        transition={{ duration: 0.3 }}
        onClick={(e) => e.stopPropagation()}
      >
        <button className="modal-close" onClick={onClose}>
          <FaTimes />
        </button>

        {submitted ? (
          <motion.div
            className="employment-success"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            <FaCheckCircle className="success-icon" />
            <h3>Application Received!</h3>
            <p>Thank you for your interest in joining our team. We'll review your application and contact you soon.</p>
          </motion.div>
        ) : (
          <>
            <div className="employment-header">
              <h2>Join Our Team</h2>
              <p>We're always looking for dedicated, reliable team members who take pride in their work.</p>
            </div>

            <div className="employment-content">
              <form onSubmit={handleSubmit} name="employment" method="POST" data-netlify="true">
                <input type="hidden" name="form-name" value="employment" />

                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="firstName">First Name *</label>
                    <input
                      type="text"
                      id="firstName"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleChange}
                      required
                      placeholder="John"
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="lastName">Last Name *</label>
                    <input
                      type="text"
                      id="lastName"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleChange}
                      required
                      placeholder="Doe"
                    />
                  </div>
                </div>

                <div className="form-row">
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
                </div>

                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="position">Position Applying For *</label>
                    <select
                      id="position"
                      name="position"
                      value={formData.position}
                      onChange={handleChange}
                      required
                    >
                      <option value="cleaner">Residential Cleaner</option>
                      <option value="commercial-cleaner">Commercial Cleaner</option>
                      <option value="team-lead">Team Lead</option>
                      <option value="other">Other</option>
                    </select>
                  </div>

                  <div className="form-group">
                    <label htmlFor="availability">Availability *</label>
                    <select
                      id="availability"
                      name="availability"
                      value={formData.availability}
                      onChange={handleChange}
                      required
                    >
                      <option value="full-time">Full-Time</option>
                      <option value="part-time">Part-Time</option>
                      <option value="flexible">Flexible</option>
                    </select>
                  </div>
                </div>

                <div className="form-group">
                  <label htmlFor="experience">Years of Cleaning Experience</label>
                  <input
                    type="text"
                    id="experience"
                    name="experience"
                    value={formData.experience}
                    onChange={handleChange}
                    placeholder="e.g., 2 years, 6 months, etc."
                  />
                </div>

                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="hasTransportation">Do you have reliable transportation? *</label>
                    <select
                      id="hasTransportation"
                      name="hasTransportation"
                      value={formData.hasTransportation}
                      onChange={handleChange}
                      required
                    >
                      <option value="yes">Yes</option>
                      <option value="no">No</option>
                    </select>
                  </div>

                  <div className="form-group">
                    <label htmlFor="hasReferences">Can you provide references? *</label>
                    <select
                      id="hasReferences"
                      name="hasReferences"
                      value={formData.hasReferences}
                      onChange={handleChange}
                      required
                    >
                      <option value="yes">Yes</option>
                      <option value="no">No</option>
                    </select>
                  </div>
                </div>

                <div className="form-group">
                  <label htmlFor="startDate">When can you start?</label>
                  <input
                    type="date"
                    id="startDate"
                    name="startDate"
                    value={formData.startDate}
                    onChange={handleChange}
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="coverLetter">Tell us about yourself and why you'd be a great fit</label>
                  <textarea
                    id="coverLetter"
                    name="coverLetter"
                    value={formData.coverLetter}
                    onChange={handleChange}
                    rows="5"
                    placeholder="Share your experience, skills, and what makes you passionate about cleaning..."
                  ></textarea>
                </div>

                <button type="submit" className="submit-btn" disabled={isSubmitting}>
                  {isSubmitting ? 'Submitting...' : 'Submit Application'}
                </button>
              </form>
            </div>
          </>
        )}
      </motion.div>
    </motion.div>
  );
}

export default EmploymentForm;
