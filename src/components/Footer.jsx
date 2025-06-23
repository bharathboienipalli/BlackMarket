import React from 'react';
import './App.css';
import { SiAmazonsimpleemailservice } from "react-icons/si";
import { FaPhoneAlt, FaWhatsapp, FaFacebook, FaLinkedin, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer-main">
      <div className="footer-top">
        <div className="footer-contact">
          <p><SiAmazonsimpleemailservice /> bharath987654@gmail.com</p>
          <p><FaPhoneAlt /> All India Toll Free: 9876543210</p>
          <p><FaWhatsapp /> WhatsApp: +91 9876543210</p>
          <div className="social-icons">
            <FaFacebook />
            <FaLinkedin />
            <FaTwitter />
          </div>
        </div>

        <div className="footer-columns">
          <div>
            <h4>Company Info</h4>
            <p>Home</p>
            <p>About Us</p>
            <p>Testimonials</p>
            <p>Media</p>
          </div>
          <div>
            <h4>Learn More</h4>
            <p>Pricing</p>
            <p>Licensing</p>
            <p>Terms of Use</p>
            <p>Privacy Policy</p>
          </div>
          <div>
            <h4>Need Help?</h4>
            <p>Contact Us</p>
            <p>FAQs</p>
            <p>Support</p>
            <p>Search Tips</p>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© 2025 BlackMarket. A division of Bharath Reddy Enterprises. All rights reserved.</p>
        <p>
          <span>Terms of Use</span> | <span>Privacy Policy</span> | <span>FAQs</span>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
