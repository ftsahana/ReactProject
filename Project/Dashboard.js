import React, { useState, useEffect } from 'react';
import ProfilePage from './ProfilePage';
import DigitalMarketingPage from './DigitalMarketingPage';
import Stocks from './Stocks';
import axios from 'axios'; // Import Axios
import './Dashboard.css';

const Dashboard = () => {
  const [currentPage, setCurrentPage] = useState('dashboard');
  const [profileData, setProfileData] = useState(null); // Store profile data
  const [digitalMarketingData, setDigitalMarketingData] = useState(null); // Store digital marketing data
  const [stockData, setStockData] = useState(null); // Store stock data

  useEffect(() => {
    
    axios.get('/api/profile')
      .then(response => {
        setProfileData(response.data);
      })
      .catch(error => {
        console.error('Error fetching profile data:', error);
      });

    // Fetch digital marketing data using Axios
    axios.get('/api/digitalMarketing')
      .then(response => {
        setDigitalMarketingData(response.data);
      })
      .catch(error => {
        console.error('Error fetching digital marketing data:', error);
      });

    // Fetch stock data using Axios
    axios.get('/api/stocks')
      .then(response => {
        setStockData(response.data);
      })
      .catch(error => {
        console.error('Error fetching stock data:', error);
      });
  }, []);

  const renderPage = () => {
    switch (currentPage) {
      case 'profile':
        return <ProfilePage goBack={() => setCurrentPage('dashboard')} profileData={profileData} />;
      case 'digitalMarketing':
        return <DigitalMarketingPage goBack={() => setCurrentPage('dashboard')} digitalMarketingData={digitalMarketingData} />;
      case 'stocks':
        return <Stocks goBack={() => setCurrentPage('dashboard')} stockData={stockData} />;
      default:
        return (
            <div className='color1'>
          <div className="dashboard-home colorful-background">
            <h1>Welcome to Your Dashboard</h1>
            <div className="quick-stats">
              <div className="stat-item">Active Campaigns: 5</div>
              <div className="stat-item">New Messages: 12</div>
              <div className="stat-item">Pending Tasks: 7</div>
            </div>
            <div className="notifications">
              <h2>Notifications</h2>
              <ul>
                <li>Campaign "SEO Boost" completed successfully.</li>
                <li>New message from client XYZ.</li>
                <li>Reminder: Update your profile details.</li>
              </ul>
            </div>
            <div className="dashboard-content">
              <button onClick={() => setCurrentPage('profile')} className="dashboard-button">Profile</button>
              <button onClick={() => setCurrentPage('digitalMarketing')} className="dashboard-button">Digital Marketing</button>
              <button onClick={() => setCurrentPage('stocks')} className="dashboard-button">Stocks</button>
            </div>
          </div>
          </div>
        );
    }
  };

  return <div>{renderPage()}</div>;
};

export default Dashboard;
