import React from 'react';

const Home = () => {
  const styles = {
    backgroundImage: `url(${process.env.PUBLIC_URL}/Home.jpg)`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    height: '100vh', // Adjust this according to your layout
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: 'white', // Text color on top of the background
    textAlign: 'center'
    // Add any other styles you need
  };

  return (
    <div style={styles}>
      <h1>ConcertBuddy</h1>
    </div>
  );
};

export default Home;