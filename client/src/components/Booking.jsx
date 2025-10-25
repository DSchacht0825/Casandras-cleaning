import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import BookingCalendar from './BookingCalendar';
import BookingForm from './BookingForm';
import { FaCalendarAlt, FaTimes } from 'react-icons/fa';
import './Booking.css';

function Booking({ isOpen, onClose }) {
  const [blockedDates, setBlockedDates] = useState([]);
  const [selectedDate, setSelectedDate] = useState(null);
  const [showForm, setShowForm] = useState(false);
  const [loading, setLoading] = useState(true);

  // Load blocked dates from JSON file
  useEffect(() => {
    const loadBlockedDates = async () => {
      try {
        const response = await fetch('/blocked-dates.json');
        const data = await response.json();
        setBlockedDates(data.blockedDates || []);
      } catch (error) {
        console.error('Error loading blocked dates:', error);
        setBlockedDates([]);
      } finally {
        setLoading(false);
      }
    };

    if (isOpen) {
      loadBlockedDates();
    }
  }, [isOpen]);

  const handleDateSelect = (slotInfo) => {
    setSelectedDate(slotInfo);
    setShowForm(true);
  };

  const handleCloseForm = () => {
    setShowForm(false);
    setSelectedDate(null);
  };

  const handleCloseBooking = () => {
    setShowForm(false);
    setSelectedDate(null);
    onClose();
  };

  if (!isOpen) return null;

  return (
    <motion.div
      className="booking-modal-overlay"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={handleCloseBooking}
    >
      <motion.div
        className="booking-modal"
        initial={{ opacity: 0, scale: 0.9, y: 50 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.9, y: 50 }}
        transition={{ duration: 0.3 }}
        onClick={(e) => e.stopPropagation()}
      >
        <button className="modal-close" onClick={handleCloseBooking}>
          <FaTimes />
        </button>

        <div className="booking-header">
          <FaCalendarAlt className="booking-icon" />
          <h2>Book Your Cleaning Service</h2>
          <p>Select an available date and time to get started</p>
        </div>

        <div className="booking-content">
          {loading ? (
            <div className="booking-loading">
              <div className="spinner"></div>
              <p>Loading availability...</p>
            </div>
          ) : showForm ? (
            <BookingForm
              selectedDate={selectedDate}
              onClose={handleCloseForm}
            />
          ) : (
            <div className="calendar-section">
              <div className="calendar-instructions">
                <p>Click on any available date/time to start your booking. Unavailable dates are marked in pink.</p>
              </div>
              <BookingCalendar
                blockedDates={blockedDates}
                onDateSelect={handleDateSelect}
                selectedDate={selectedDate}
              />
            </div>
          )}
        </div>
      </motion.div>
    </motion.div>
  );
}

export default Booking;
