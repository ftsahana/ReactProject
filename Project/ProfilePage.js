
import React from 'react';
import './ProfilePage.css';

const ProfilePage = ({ goBack }) => {
  return (
    <div className="profile-page">
      <div className="profile-header">
        <img 
          src="https://wallpapers.com/images/hd/professional-profile-pictures-1080-x-1080-460wjhrkbwdcp1ig.jpg" 
          alt="User Avatar" 
          className="profile-avatar" 
        />
        <h1>Mark lee</h1>
        <p className="profile-bio">Web Developer & Digital Marketer</p>
      </div>
      <div className="profile-content">
        <div className="profile-section">
          <h2>Personal Details</h2>
          <p>Email: MarkLee@gmail.com</p>
          <p>Phone: +123456789</p>
          <p>Location: New York, USA</p>
        </div>
        <div className="profile-section">
          <h2>Account Settings</h2>
          <button className="profile-button">Change Password</button>
          <button className="profile-button">Privacy Settings</button>
        </div>
      </div>
      <button onClick={goBack} className="back-button">Back to Dashboard</button>
    </div>
  );
};

export default ProfilePage;
