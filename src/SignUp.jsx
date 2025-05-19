import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import './SignUp.css';
import { useNavigate } from 'react-router-dom';
import { registerUser } from './store';

function SignUp() {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [number,setNumber] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(registerUser({ email, password, name, number}));
    alert("Registration successfull!");
    navigate('/Login');
  };

  return (
    <div className="signup-container">
      <div className="login-card">
        <h3>Sign Up</h3>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Name</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Enter your Name"
              required
            />
            <label>MobileNo</label>
            <input
              type="tel"
              value={number}
              onChange={(e) => setNumber(e.target.value)}
              placeholder="Enter your Mobile No"
              required
            />
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
          <button type="submit">Sign Up</button>

        </form>
      </div>
    </div>
  );
}

export default SignUp;
