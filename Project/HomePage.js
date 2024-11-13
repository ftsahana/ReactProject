
import React from 'react';
import './HomePage.css';

const HomePage = ({ switchToLogin, switchToSignUp }) => {
  return (
    <div className='color'>
    <div className="homepage-container">
      <div className="homepage-content">
        <h1>Welcome to Your Digital Marketing Hub</h1>
        <p>Explore the world of digital marketing with our tools and resources. Join us to start your journey!</p>
        <div className="homepage-buttons">
          <button onClick={switchToLogin}>Login</button>
          <button onClick={switchToSignUp}>Sign Up</button>
        </div>
      </div>
    </div>
    </div>
  );
};

export default HomePage;
