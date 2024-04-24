import React from 'react';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';

import Header from './Header';
import Home from './Home';
import BookingList from './BookingList';
import CancelBooking from './CancelBooking';
import About from './About';

function BookingRouter() {
    return (
      <Router>
        <Header />
        <Routes>
          <Route path="/booking-list" element={<BookingList />} />
          <Route path="/cancel-booking" element={<CancelBooking />} />
          <Route path="/about" element={<About />} />
          <Route path="/" element={<Home />} />
        </Routes>
      </Router>
    );
  }
  
  export default BookingRouter;