import React, { useState, useEffect } from 'react';
import { MDBListGroup, MDBListGroupItem } from 'mdb-react-ui-kit';

const ConcertList = () => {
  const [concerts, setConcerts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://concertbuddyconcert.uc.r.appspot.com/api/v1/concerts?page=0&size=5');
        const data = await response.json();
        setConcerts(data); // Assuming data is an array of concert objects
        setIsLoading(false);
      } catch (error) {
        console.error('Error fetching data:', error);
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      {isLoading ? (
        <p>Loading...</p>
      ) : (
    <MDBListGroup>
      {concerts.map((concert, index) => (
        <MDBListGroupItem key={index}>
          {/* Render concert details here */}
          <h5>{concert.name}</h5>
          <p>Artist: {concert.performingArtist}</p>
          {/* Add more details as needed */}
        </MDBListGroupItem>
      ))}
    </MDBListGroup>
    )}
    </div>
  );
};

export default ConcertList;
