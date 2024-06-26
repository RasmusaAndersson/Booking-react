import React from 'react';
import ReactDOM from 'react-dom';
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.js";

import BookingRouter from './components/BookingRouter';

ReactDOM.render(
  <React.StrictMode>
    <BookingRouter />
  </React.StrictMode>,
  document.getElementById('root')
);
