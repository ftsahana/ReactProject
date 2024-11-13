
import React, { useState } from 'react';
import './DigitalMarketingPage.css';

const DigitalMarketingPage = ({ goBack }) => {
  const [investment, setInvestment] = useState('');
  const [revenue, setRevenue] = useState('');
  const [roi, setRoi] = useState(null);

  const calculateROI = () => {
    const investmentValue = parseFloat(investment);
    const revenueValue = parseFloat(revenue);

    if (isNaN(investmentValue) || isNaN(revenueValue) || investmentValue <= 0) {
      alert('Please enter valid numbers for investment and revenue.');
      return;
    }

    const roiValue = ((revenueValue - investmentValue) / investmentValue) * 100;
    setRoi(roiValue.toFixed(2));
  };

  return (
    <div className="digital-marketing-page">
      <h1>Digital Marketing Dashboard</h1>
      <div className="marketing-content">
        <div className="marketing-section">
          <h2>Campaign Management</h2>
          <button className="marketing-button">Create New Campaign</button>
          <button className="marketing-button">View All Campaigns</button>
        </div>
        <div className="marketing-section">
          <h2>ROI Calculator</h2>
          <p>Enter your investment and revenue to calculate ROI:</p>
          <input
            type="number"
            placeholder="Investment"
            className="roi-input"
            value={investment}
            onChange={(e) => setInvestment(e.target.value)}
          />
          <input
            type="number"
            placeholder="Revenue"
            className="roi-input"
            value={revenue}
            onChange={(e) => setRevenue(e.target.value)}
          />
          <button onClick={calculateROI} className="marketing-button">Calculate ROI</button>
          {roi !== null && (
            <div className="roi-result">
              <h3>ROI Result</h3>
              <p>{roi}%</p>
            </div>
          )}
        </div>
        <div className="marketing-section">
          <h2>Social Media Planner</h2>
          <p>Plan your posts for the upcoming week:</p>
          <button className="marketing-button">Create Social Media Plan</button>
        </div>
      </div>
      <button onClick={goBack} className="back-button">Back to Dashboard</button>
    </div>
  );
};

export default DigitalMarketingPage;
