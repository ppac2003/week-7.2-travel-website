import React, { useState } from 'react';
import londonImage from './london.jpeg';
import london2Image from './london 2.jpeg';

const DestinationsSection = () => {
  const [bookingData, setBookingData] = useState({
    destination: '',
    duration: '',
    month: '',
    email: '',
  });
  const [showBookingForm, setShowBookingForm] = useState(false);
  const [submittedData, setSubmittedData] = useState(null);
  const [backgroundColor, setBackgroundColor] = useState('');

  const handleExploreClick = (destination) => {
    setBookingData({ destination, duration: '', month: '', email: '' });
    setShowBookingForm(true);
    setBackgroundColor('');
  };

  const handleBookingSubmit = (e) => {
    e.preventDefault();
    setSubmittedData({
      destination: bookingData.destination,
      duration: bookingData.duration,
      month: bookingData.month,
      email: bookingData.email,
    });
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setBookingData({ ...bookingData, [name]: value });
  };

  const destinationImages = {
    london: londonImage,
    london2: london2Image,
  };

  const destinationDetails = {
    london: "London is the capital city of England. ",
    london2: "London 2 is a fictional destination, offering breathtaking landscapes and serene surroundings.",
  };

  return (
    <div style={{ backgroundColor: backgroundColor }}>
      {Object.keys(destinationImages).map((destination) => (
        <div key={destination} style={{ marginBottom: '20px' }}>
          <img src={destinationImages[destination]} alt={destination} />
          <button
            onClick={() => handleExploreClick(destination)}
            style={{
              backgroundColor: 'blue',
              color: 'white',
              border: 'none',
              padding: '10px',
              borderRadius: '5px',
              cursor: 'pointer',
            }}
          >
            Explore {destination}
          </button>
          {showBookingForm && bookingData.destination === destination && (
            <div>
              <h2>{destination}</h2>
              <div className="details-box">
                <h3>About {destination === 'london' ? 'London' : 'London 2'}</h3>
                <p>{destinationDetails[destination]}</p>
              </div>
              {submittedData && (
                <div className="submitted-data">
                  <h3>Booking Details</h3>
                  <p>Destination: {submittedData.destination}</p>
                  <h4>Booking Information</h4>
                  <p>Duration: {submittedData.duration}</p>
                  <p>Month: {submittedData.month}</p>
                  <p>Email: {submittedData.email}</p>
                </div>
              )}
              <form onSubmit={handleBookingSubmit}>
                <div>
                  <label>
                    Duration:
                    <input type="text" name="duration" value={bookingData.duration} onChange={handleInputChange} />
                  </label>
                </div>
                <div>
                  <label>
                    Month:
                    <input type="text" name="month" value={bookingData.month} onChange={handleInputChange} />
                  </label>
                </div>
                <div>
                  <label>
                    Email:
                    <input type="email" name="email" value={bookingData.email} onChange={handleInputChange} />
                  </label>
                </div>
                <button type="submit">Book Now</button>
              </form>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default DestinationsSection;
