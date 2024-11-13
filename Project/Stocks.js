
import React from 'react';
import './Stocks.css';

const Stocks = ({ goBack }) => {

  const stockData = [
    { name: 'Company A', price: 150, change: 2.5 },
    { name: 'Company B', price: 200, change: -1.2 },
  ];

  return (
    <div className="stocks-container">
      <h1>Stock Market Overview</h1>
      <div className="chart-container">
        {stockData.map((stock, index) => (
          <div key={index} className="stock-item">
            <h3>{stock.name}</h3>
            <div className="stock-bar">
              <div
                className="stock-bar-fill"
                style={{
                  width: `${stock.price}px`,
                  backgroundColor: stock.change >= 0 ? 'green' : 'red',
                }}
              ></div>
            </div>
            <p>Price: ${stock.price.toFixed(2)}</p>
            <p>Change: {stock.change > 0 ? `+${stock.change}%` : `${stock.change}%`}</p>
          </div>
        ))}
      </div>
      <button onClick={goBack} className="back-button">Back to Dashboard</button>
    </div>
  );
};

export default Stocks;
