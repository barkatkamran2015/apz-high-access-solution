// src/components/Footer.js
import React from 'react';
import { Link } from 'react-router-dom';
import '@fortawesome/fontawesome-free/css/all.min.css';
import './Footer.css'; 
import footerImage from './assets/apz.png';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section about">
        <img src={footerImage} alt="Company Logo" className="company-logo" />
          <p>Australia’s most innovative and cost-effective painting, remediation and maintenance company.
          Our aim is to serve our customers better by utilising innovation & technology to deliver the highest quality outcomes at the lowest possible costs.</p>
        </div>
        <div className="footer-section links">
          <h2>Quick Links</h2>
          <ul>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/paintingservices">Painting Services</Link></li>
            <li><Link to="/remedialservices">Remedial Services</Link></li>
            <li><Link to="/cleaningservices">Cleaning Services</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </div>
        <div className="footer-section social">
          <h2>Follow Us</h2>
          <div className="social-icons">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer"><i className="fab fa-facebook-f"></i></a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer"><i className="fab fa-twitter"></i></a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer"><i className="fab fa-instagram"></i></a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer"><i className="fab fa-linkedin-in"></i></a>
          </div>
        </div>
        <div className="footer-section contact">
          <h2>Contact Us</h2>
          <p><i className="fas fa-phone"></i> +61 045 857 9923</p>
          <p><i className="fas fa-envelope"></i> namatullah.zahidi@yahoo.com.au</p>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
