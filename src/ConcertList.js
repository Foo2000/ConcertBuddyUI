import React, { useState, useEffect } from 'react';
import { MDBListGroup, MDBListGroupItem } from 'mdb-react-ui-kit';

const ConcertList = () => {
  const [concerts, setConcerts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://concertbuddyconcert.uc.r.appspot.com/api/v1/concerts?page=0&size=5');
        const data = await response.json();
        setConcerts(data); // Assuming data is an array of concert objects
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <MDBListGroup>
      {concerts.map((concert, index) => (
        <MDBListGroupItem key={index}>
          {/* Render concert details here */}
          <h5>{concert.name}</h5>
          <p>UUID: {concert.id}</p>
          <p>Artist: {concert.performingArtist}</p>
          <p>Date: {concert.dateTime}</p>
          <p>Venue: {concert.venue}</p>
          {/* Add more details as needed */}
        </MDBListGroupItem>
      ))}
    </MDBListGroup>
  );
};

export default ConcertList;
