import { useState } from 'react';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment-timezone';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import './BookingCalendar.css';

// Set timezone to Central Time
moment.tz.setDefault('America/Chicago');

// Set up the localizer for react-big-calendar
const localizer = momentLocalizer(moment);

function BookingCalendar({ blockedDates, onDateSelect, selectedDate }) {
  // Convert blocked dates to calendar events
  const blockedEvents = blockedDates.map(date => ({
    title: 'Unavailable',
    start: new Date(date.start),
    end: new Date(date.end),
    allDay: date.allDay || false,
    resource: { type: 'blocked' }
  }));

  // Custom event styling
  const eventStyleGetter = (event) => {
    if (event.resource?.type === 'blocked') {
      return {
        style: {
          backgroundColor: '#FFE4F0',
          border: '2px solid #FF69B4',
          color: '#E75480',
          opacity: 0.8
        }
      };
    }
    return {};
  };

  // Handle slot selection (when user clicks a date/time)
  const handleSelectSlot = (slotInfo) => {
    const selectedDay = moment(slotInfo.start).day(); // 0 = Sunday, 6 = Saturday

    // Check if it's a weekend
    if (selectedDay === 0 || selectedDay === 6) {
      alert('Bookings are only available Monday-Friday, 9 AM - 5 PM Central Time.');
      return;
    }

    // Check if selected slot is blocked
    const isBlocked = blockedDates.some(blocked => {
      const blockedStart = new Date(blocked.start);
      const blockedEnd = new Date(blocked.end);
      return slotInfo.start >= blockedStart && slotInfo.start < blockedEnd;
    });

    if (!isBlocked) {
      onDateSelect(slotInfo);
    } else {
      alert('This time slot is unavailable. Please select another date/time.');
    }
  };

  // Style weekend days differently
  const dayPropGetter = (date) => {
    const day = moment(date).day();
    if (day === 0 || day === 6) {
      return {
        className: 'weekend-day',
        style: {
          backgroundColor: '#f8f8f8',
          color: '#ccc'
        }
      };
    }
    return {};
  };

  return (
    <div className="booking-calendar">
      <Calendar
        localizer={localizer}
        events={blockedEvents}
        startAccessor="start"
        endAccessor="end"
        style={{ height: 600 }}
        eventStyleGetter={eventStyleGetter}
        dayPropGetter={dayPropGetter}
        selectable
        onSelectSlot={handleSelectSlot}
        views={['month', 'week', 'day']}
        defaultView="month"
        step={60}
        timeslots={1}
        min={new Date(2025, 0, 1, 9, 0, 0)} // 9 AM
        max={new Date(2025, 0, 1, 17, 0, 0)} // 5 PM
      />
      <div className="calendar-legend">
        <div className="legend-item">
          <span className="legend-color blocked"></span>
          <span>Unavailable</span>
        </div>
        <div className="legend-item">
          <span className="legend-color available"></span>
          <span>Available - Monday-Friday, 9 AM - 5 PM CT</span>
        </div>
      </div>
    </div>
  );
}

export default BookingCalendar;
