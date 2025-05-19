import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Brand */}
        <div className="footer-section">
          <h2 className="footer-brand">FoodieExpress</h2>
          <p>Delicious meals delivered hot and fast to your door. Order anytime, enjoy every bite!</p>
        </div>

        {/* Quick Links */}
        <div className="footer-section">
          <h3>Quick Links</h3>
          <ul className="footer-links">
            <li><a href="/">Home</a></li>
            <li><a href="/menu">Menu</a></li>
            <li><a href="/about">About</a></li>
            <li><a href="/contact">Contact</a></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div className="footer-section">
          <h3>Contact</h3>
          <p>📍 123 Food Street, Cityname</p>
          <p>✉️ support@foodieexpress.com</p>
          <p>📞 +91 98765 43210</p>
        </div>
      </div>

      <div className="footer-bottom">
        &copy; {new Date().getFullYear()} FoodieExpress. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
