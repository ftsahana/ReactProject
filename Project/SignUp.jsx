
import React, { useState } from 'react';
import './SignUp.css';

const SignUp = ({ switchToLogin }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      setError('Passwords do not match.');
      return;
    }
   
    switchToLogin();
  };

  return (
    <div className="signup-container">
      <div className="signup-form-container">
        <h2>Create Your Account</h2>
        <form onSubmit={handleSubmit} className="signup-form">
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
          
          <input
            type="password"
            placeholder="Confirm Password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
          />
          
          {error && <p className="error-message">{error}</p>}
          
          <button type="submit">Sign Up</button>
        </form>
        <p>
          Already have an account?{' '}
          <span className="link-text" onClick={switchToLogin}>
            Login
          </span>
        </p>
      </div>
    </div>
  );
};

export default SignUp;
