
import React, { useState } from 'react';
import './Login.css';

const Login = ({ switchToSignUp, loginUser }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email || !password) {
      setError('Please enter both email and password.');
      return;
    }

    loginUser();
  };

  return (
    <div className="login-container">
      <div className="login-form-container">
        <h2>Welcome Back!</h2>
        <form onSubmit={handleSubmit} className="login-form">
          <input
            type="email"
            placeholder="Email Address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          
          {error && <p className="error-message">{error}</p>}
          
          <button type="submit">Login</button>
        </form>
        <p>
          Don't have an account?{' '}
          <span className="link-text" onClick={switchToSignUp}>
            Sign Up
          </span>
        </p>
      </div>
    </div>
  );
};

export default Login;
