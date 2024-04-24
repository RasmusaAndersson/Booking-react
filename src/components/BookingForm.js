import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

function BookingForm({ bookingDetails }) {
  const [email, setEmail] = useState('');
  const navigate = useNavigate();

  const handleBooking = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:3000/api/v1/booking/book', {
        email,
        ...bookingDetails
      });

      if (response.status === 200) {
        navigate('/booking-list');
      } else {
        console.error('Failed to book', response.data);
      }
    } catch (error) {
      console.error('Error during booking:', error);
    }
  };

  return (
    <div>
      <h2>Booking Details</h2>
      <p>ID: {bookingDetails.id}</p>
      <p>Date: {bookingDetails.date}</p>
      <p>Time: {bookingDetails.time}</p>

      <form onSubmit={handleBooking}>
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <button type="submit">Book</button>
      </form>
    </div>
  );
}

export default BookingForm;