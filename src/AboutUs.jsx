import React from 'react';
import './AboutUs.css';

const teamMembers = [
  {
    name: 'Mani',
    title: 'CEO & Founder',
    image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=300&q=80',
    bio: 'Visionary leader with 10+ years in the grocery industry.'
  },
  {
    name: 'Teja',
    title: 'Chief Technology Officer',
    image: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=300&q=80',
    bio: 'Tech enthusiast building seamless shopping experiences.'
  },
  {
    name: 'Priya',
    title: 'Head of Operations',
    image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=300&q=80',
    bio: 'Ensuring your groceries arrive fresh and on time.'
  },
  {
    name: 'Rahul',
    title: 'Customer Experience Lead',
    image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=300&q=80',
    bio: 'Dedicated to making every customer interaction exceptional.'
  }
];

const stats = [
  { value: '10K+', label: 'Happy Customers' },
  { value: '500+', label: 'Products Available' },
  { value: '24/7', label: 'Customer Support' },
  { value: '50+', label: 'Cities Served' }
];

const AboutUs = () => {
  return (
    <div className="about-us-page">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-content">
          <h1 className="hero-title">Fresh Groceries, <span className="highlight">Delivered</span> With Care</h1>
          <p className="hero-subtitle">
            At Big Basket, we're revolutionizing grocery shopping with quality products, 
            competitive prices, and doorstep delivery.
          </p>
          <button className="cta-button">Shop Now</button>
        </div>
        <div className="hero-image">
          <img 
            src="https://images.unsplash.com/photo-1606787366850-de6330128bfc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80" 
            alt="Fresh groceries" 
          />
        </div>
      </section>

      {/* Stats Section */}
      <section className="stats-section">
        {stats.map((stat, index) => (
          <div className="stat-card" key={index}>
            <div className="stat-value">{stat.value}</div>
            <div className="stat-label">{stat.label}</div>
          </div>
        ))}
      </section>

      {/* Mission Section */}
      <section className="mission-section">
        <div className="mission-content">
          <h2>Our <span className="highlight">Mission</span></h2>
          <p>
            We're committed to making grocery shopping convenient, affordable, and enjoyable. 
            From farm to table, we ensure the freshest products reach your kitchen.
          </p>
          <div className="mission-points">
            <div className="point">
              <div className="icon">🌱</div>
              <h3>Farm Fresh</h3>
              <p>Direct sourcing from local farmers</p>
            </div>
            <div className="point">
              <div className="icon">🚚</div>
              <h3>Fast Delivery</h3>
              <p>Same-day delivery in most areas</p>
            </div>
            <div className="point">
              <div className="icon">💚</div>
              <h3>Quality Guarantee</h3>
              <p>100% satisfaction or your money back</p>
            </div>
          </div>
        </div>
        <div className="mission-image">
          <img 
            src="https://images.unsplash.com/photo-1606787366850-de6330128bfc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80" 
            alt="Our mission" 
          />
        </div>
      </section>

     

      {/* Contact Section */}
      <section className="contact-section">
        <div className="contact-content">
          <h2>Get In <span className="highlight">Touch</span></h2>
          <p>Have questions or feedback? We'd love to hear from you!</p>
          <form className="contact-form">
            <div className="form-group">
              <input type="text" placeholder="Your Name" required />
            </div>
            <div className="form-group">
              <input type="email" placeholder="Your Email" required />
            </div>
            <div className="form-group">
              <textarea placeholder="Your Message" rows="5" required></textarea>
            </div>
            <button type="submit" className="submit-button">Send Message</button>
          </form>
        </div>
        <div className="contact-info">
          <div className="info-card">
            <i className="fas fa-map-marker-alt"></i>
            <h3>Our Location</h3>
            <p>123 Grocery Street, Hyderabad, India</p>
          </div>
          <div className="info-card">
            <i className="fas fa-phone-alt"></i>
            <h3>Call Us</h3>
            <p>+91 800 123 4567</p>
          </div>
          <div className="info-card">
            <i className="fas fa-envelope"></i>
            <h3>Email Us</h3>
            <p>contact@bigbasket.com</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;