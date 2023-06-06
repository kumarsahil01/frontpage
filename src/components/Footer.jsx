import React from 'react';
import { AiOutlineInstagram, AiOutlineYoutube, AiOutlineWhatsApp } from 'react-icons/ai';
import './Footer.scss'; // Import the SCSS file for styling

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h1 className="footer-heading">E-commerce</h1>
          <div className="social-icons">
            <AiOutlineInstagram size={18} />
            <AiOutlineWhatsApp size={18} />
            <AiOutlineYoutube size={18} />
          </div>
        </div>
        <div className="footer-section">
          <h1>Company</h1>
          <a className="footer-link" href="/">About us</a>
          <a className="footer-link" href="/">Contact Us</a>
          <a className="footer-link" href="/">Services</a>
          <a className="footer-link" href="/">Blog</a>
        </div>
        <div className="footer-section">
          <h1>Company</h1>
          <a className="footer-link" href="/">About us</a>
          <a className="footer-link" href="/">Contact Us</a>
          <a className="footer-link" href="/">Services</a>
          <a className="footer-link" href="/">Blog</a>
        </div>
        <div className="footer-section">
          <h1>Company</h1>
          <a className="footer-link" href="/">About us</a>
          <a className="footer-link" href="/">Contact Us</a>
          <a className="footer-link" href="/">Services</a>
          <a className="footer-link" href="/">Blog</a>
        </div>
      </div>
      <div className="footer-bottom">
        <p>copy &copy;2023 <span className="footer-bold">E-commerce</span> All Rights Reserved</p>
      </div>
    </footer>
  );
}

export default Footer;
