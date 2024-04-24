import React, { useState } from 'react';

function CancelBooking() {
  const [bookingId, setBookingId] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleCancelBooking = async (e) => {
    e.preventDefault();
    if (!bookingId || !email) {
      setMessage('Please enter both email and booking ID.');
      return;
    }

    try {
      const response = await fetch(`http://localhost:3000/api/v1/booking/cancel`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ bookingId, email }),
      });

      const result = await response.json();
      if (response.ok) {
        setMessage('Booking successfully cancelled.');
      } else {
        setMessage(`Failed to cancel booking: ${result.message}`);
      }
    } catch (error) {
      console.error('Error cancelling booking:', error);
      setMessage('An error occurred while cancelling the booking.');
    }
    setBookingId('');
    setEmail('');
  };

  return (
    <div>
      <h2>Cancel Booking</h2>
      <form onSubmit={handleCancelBooking}>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter Email"
          required
        />
        <input
          type="text"
          value={bookingId}
          onChange={(e) => setBookingId(e.target.value)}
          placeholder="Enter Booking ID"
          required
        />
        <button type="submit">Cancel Booking</button>
      </form>
      {message && <p>{message}</p>}
    </div>
  );
}

export default CancelBooking;
