import React, { useState, useEffect } from 'react';

function BookingList() {
  const [bookings, setBookings] = useState([]);

  const fetchBookings = async (from, to) => {
    try {
      const response = await fetch(`/api/v1/booking/from/${from}/to/${to}`);
      if (!response.ok) {
        throw new Error('No response');
      }
      const data = await response.json();
      setBookings(data);
    } catch (error) {
      console.error('There is an issue with your :', error);
    }
  };

  useEffect(() => {
    fetchBookings('2024-01-01', '2024-12-31');
  }, []);

  return (
    <div>
      <h2>Booking List</h2>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Date/Time</th>
            <th>Booked</th>
          </tr>
        </thead>
        <tbody>
          {bookings.map((booking) => (
            <tr key={booking.id}>
              <td>{booking.id}</td>
              <td>{booking.dateTime}</td>
              <td>{booking.booked ? 'Yes' : 'No'}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default BookingList;
