import React, { useState } from 'react';

function CancelBooking() {
  const [bookingId, setBookingId] = useState('');

  const handleCancelBooking = async () => {
    if (bookingId) {
      try {
        const response = await fetch(`http://localhost:3000/api/v1/booking/cancel/${bookingId}`, {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json',
          },
        });

        if (response.ok) {
          const result = await response.json();
          console.log(result);
          alert('Booking is cancelled');
        } else {
          alert('Failed to cancel');
        }
      } catch (error) {
        console.error('Error cancelling booking:', error);
        alert('An error occurred while cancelling the booking');
      }
    } else {
      alert('Please enter a booking ID');
    }
    setBookingId('');
  };

  return (
    <div>
      <h2>Cancel Booking</h2>
      <input
        type="text"
        value={bookingId}
        onChange={(e) => setBookingId(e.target.value)}
        placeholder="Enter Booking ID"
      />
      <button onClick={handleCancelBooking}>Cancel Booking</button>
    </div>
  );
}

export default CancelBooking;