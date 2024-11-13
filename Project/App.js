
import React, { useState } from 'react';
import HomePage from './components/HomePage';
import Login from './components/Login';
import SignUp from './components/SignUp';
import Dashboard from './components/Dashboard';
import Stocks from './components/Stocks';

const App = () => {
  const [currentView, setCurrentView] = useState('home');
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  // Functions to handle view changes
  const switchToLogin = () => setCurrentView('login');
  const switchToSignUp = () => setCurrentView('signup');
  const loginUser = () => {
    setIsAuthenticated(true);
    setCurrentView('dashboard');
  };
  const switchToDashboard = () => setCurrentView('dashboard');
  const switchToStocks = () => setCurrentView('stocks');

  return (
    <div>
      {!isAuthenticated ? (
        <>
          {currentView === 'home' && <HomePage switchToLogin={switchToLogin} switchToSignUp={switchToSignUp} />}
          {currentView === 'login' && <Login switchToSignUp={switchToSignUp} loginUser={loginUser} />}
          {currentView === 'signup' && <SignUp switchToLogin={switchToLogin} />}
        </>
      ) : (
        <>
          {currentView === 'dashboard' && <Dashboard switchToStocks={switchToStocks} />}
          {currentView === 'stocks' && <Stocks switchToDashboard={switchToDashboard} />}
        </>
      )}
    </div>
  );
};

export default App;
