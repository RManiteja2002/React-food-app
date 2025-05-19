import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

const Home = () => {
  return (
    <div className="home-container">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <h1>Fresh Groceries Delivered to Your Doorstep</h1>
          <p>Explore our wide range of fresh vegetables, dairy, meats, and more.</p>
          <Link to="/veg" className="cta-button">Shop Now</Link>
        </div>
        <div className="hero-image">
          <img src="public/Images/food-dilivery.jpg" alt="Fresh Groceries" />
        </div>
      </section>

      {/* Categories Section */}
      <section className="categories">
        <h2>Shop by Category</h2>
        <div className="category-grid">
          <Link to="/veg" className="category-card">
            <img src="public/Images/tamoto.jpg" alt="Vegetables" />
            <h3>Vegetables</h3>
          </Link>
          <Link to="/nonveg" className="category-card">
            <img src="public/Images/Chicken.jpg" alt="Non-Veg" />
            <h3>Non-Veg</h3>
          </Link>
          <Link to="/dairy" className="category-card">
            <img src="public/Images/Milk.jpg" alt="Dairy" />
            <h3>Dairy</h3>
          </Link>
          <Link to="/chocolates" className="category-card">
            <img src="public/Images/Chocolate.jpg" alt="Chocolates" />
            <h3>Chocolates</h3>
          </Link>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="features">
        <h2>Why Choose FoodieExpress?</h2>
        <div className="features-grid">
          <div className="feature-card">
            <img src="public/Images/freshly picked.webp" alt="Freshly Picked" />
            <h4>Freshly Picked</h4>
            <p>Only the best and freshest ingredients make it to your kitchen.</p>
          </div>
          <div className="feature-card">
            <img src="public/Images/fast delivery.avif" alt="Fast Delivery" />
            <h4>Fast Delivery</h4>
            <p>We guarantee on-time delivery straight to your doorstep.</p>
          </div>
          <div className="feature-card">
            <img src="public/Images/secure payment.jpg" alt="Secure Payments" />
            <h4>Secure Payments</h4>
            <p>Safe and encrypted transactions every time you order.</p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-container">
          <div className="footer-section">
            <h2>FoodieExpress</h2>
            <p>Your trusted online grocery partner, delivering freshness every day.</p>
          </div>
          <div className="footer-section">
            <h3>Quick Links</h3>
            <ul>
              <li><Link to="/about">About Us</Link></li>
              <li><Link to="/veg">Vegetables</Link></li>
              <li><Link to="/contact">Contact</Link></li>
            </ul>
          </div>
          <div className="footer-section">
            <h3>Contact</h3>
            <p>📍 123 Market Lane, Hyderabad</p>
            <p>✉️ support@foodieexpress.com</p>
            <p>📞 +91 98765 43210</p>
          </div>
        </div>
        <div className="footer-bottom">
          &copy; {new Date().getFullYear()} FoodieExpress. All rights reserved.
        </div>
      </footer>
    </div>
  );
};

export default Home;
