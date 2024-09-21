// BookingForm.js
import React, { useState } from 'react';

const formStyle = {
    display: 'grid',
    maxWidth: '200px',
    gap: '10px',
  };

const BookingForm = ({ availableTimes, updateTimes, submitForm }) => {
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [guests, setGuests] = useState(1);
  const [occasion, setOccasion] = useState('');

  const handleDateChange = (e) => {
    const newDate = e.target.value;
    setDate(newDate);
    updateTimes(new Date(newDate));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = {
      date,
      time,
      guests,
      occasion,
    };
    submitForm(formData);
  };

  return (
    <form onSubmit={handleSubmit} style={formStyle}>
      <label htmlFor="res-date">Choose date</label>
      <input
        type="date"
        id="res-date"
        value={date}
        onChange={handleDateChange}
        required
      />

      <label htmlFor="res-time">Choose time</label>
      <select
        id="res-time"
        value={time}
        onChange={(e) => setTime(e.target.value)}
        required
      >
        {availableTimes.map((time) => (
          <option key={time}>{time}</option>
        ))}
      </select>

      <label htmlFor="guests">Number of guests</label>
      <input
        type="number"
        id="guests"
        min="1"
        max="10"
        value={guests}
        onChange={(e) => setGuests(parseInt(e.target.value))}
        required
      />

      <label htmlFor="occasion">Occasion</label>
      <select
        id="occasion"
        value={occasion}
        onChange={(e) => setOccasion(e.target.value)}
        required
      >
        <option value="">Select an occasion</option>
        <option value="Birthday">Birthday</option>
        <option value="Anniversary">Anniversary</option>
      </select>

      <button type="submit">Make Your reservation</button>
    </form>
  );
};

export default BookingForm;
