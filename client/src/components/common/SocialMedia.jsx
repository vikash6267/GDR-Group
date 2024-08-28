import React, { useState } from 'react';
import { FaFacebookF, FaWhatsapp, FaEnvelope, FaInstagram, FaTimes } from 'react-icons/fa';
import './SocialMediaBar.css';

const SocialMediaBar = () => {
  const [isContactFormOpen, setContactFormOpen] = useState(false);

  const handleContactFormOpen = () => {
    setContactFormOpen(true);
  };

  const handleContactFormClose = () => {
    setContactFormOpen(false);
  };

  return (
    <div className="social-media-bar">
      <div 
        className="social-icon contact-us" 
        onMouseEnter={handleContactFormOpen}
        onMouseLeave={handleContactFormClose}
      >
        <FaEnvelope />
        <span className="icon-name">Contact Us</span>
        {isContactFormOpen && (
          <div className="contact-form">
            <button className="close-button" onClick={handleContactFormClose}>
              <FaTimes />
            </button>
            <h3>Contact Us</h3>
            <form>
              <input type="text" placeholder="Your Name" />
              <input type="email" placeholder="Your Email" />
              <textarea placeholder="Your Message"></textarea>
              <button type="submit" className='sendbutton'>Send</button>
            </form>
          </div>
        )}
      </div>
      <div className="social-icon bg-blue-800">
        <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
          <FaFacebookF />
          <span className="icon-name">Facebook</span>
        </a>
      </div>
      <div className="social-icon bg-green-600">
        <a href="https://wa.me/9893730005" target="_blank" rel="noopener noreferrer">
          <FaWhatsapp />
          <span className="icon-name">WhatsApp</span>
        </a>
      </div>
      <div className="social-icon bg-red-500">
        <a href="https://www.instagram.com/rks.homes/" target="_blank" rel="noopener noreferrer">
          <FaInstagram />
          <span className="icon-name ">Instagram</span>
        </a>
      </div>
    </div>
  );
};

export default SocialMediaBar;
