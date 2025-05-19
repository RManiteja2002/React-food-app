import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import './Login.css';
import { loginUser } from './store';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    
    e.preventDefault();
    dispatch(loginUser({ email, password }));

  };

  return (
    <div className="login-container">
      <div className="login-card">
        <h3>Sign In</h3>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              required
            />
          </div>
          <div className="form-group">
            <label>Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter your password"
              required
            />
          </div>
          <button type="submit">Sign In</button>
           New User ? <a href='/SignUp'> SignUp </a>
        </form>
      </div>
    </div>
  );
}

export default Login;
