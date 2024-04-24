import React, {useState} from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const BookingList = () => {
  const baseURL = "http://localhost:8080/api/v1/booking";

  const navigate = useNavigate();

  const [bookings, setBookings] = useState([]);

  const getBookingsClickHandler = async () => {
    console.log("Start");

    await axios
      .get(baseURL + "http://localhost:8080/api/v1/booking/from/1/to/8")
      .then((response) => {
        console.log("RESPONSE", response);

        if (response.status === 200) {
          console.log("DATA", response.data);
          setBookings(response.data);
        }
      })
      .catch((error) => {
        console.log("ERROR: ", error);
      });

    console.log("End");
  };
  

  const bookBookingClickHandler = async (id, email) => {
    axios
      .post(baseURL + "/api/v1/booking/book", { id, email })
      .then((response) => {
        console.log("RESPONSE: ", response);
      })
      .catch((error) => {
        console.error("ERROR: ", error);

        if (error.response) {
          console.log(error.response.data);
        }
      });

    getBookingsClickHandler();
  };

  return (
    <div className="container mt-5 ">
      <div className="row">
        <div className="col">
          <button className="btn btn-info" onClick={getBookingsClickHandler}>
            Get Bookings
          </button>
          <a className="btn btn-outline-danger mx-1" onClick={() => navigate(-1)}>Back</a>

        </div>
      </div>

      <div className="col mt-3">
        {bookings.map((booking) => (
          <div key={booking.id} className="card mb-4 col-mb-3">
            <div className="card-body">
              <h5 className="card-title">{booking.dateTime}</h5>
              <button className="btn btn-info" onClick={() => navigate('/details/'+ booking.id)}>Details</button>
            </div>

            <div className="d-grid card-footer">
              <button
                className={`btn btn-${booking.booked ? "danger" : "success"}`}
                disabled={`${booking.booked ? "disabled" : ""}`}
                onClick={() =>
                  bookBookingClickHandler(booking.id, "test.test@lexicon.se")
                }
              >
                {booking.booked ? "Booked" : "Available"}
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BookingList;
