import React from 'react';
import './Contact.css';
import { FaEnvelope, FaPhone, FaGithub, FaLinkedin, FaGlobe } from 'react-icons/fa';

const Contact = () => {
  return (
    <div className="contact-section">
      <div className="contact-hello">
        <div className="handwriting">
          <span>H</span><span>e</span><span>l</span><span>l</span><span>o</span><span>.</span>
        </div>
      </div>
      <div className="contact-info-container">
        <h2>Let's Connect</h2>
        <div className="contact-info-item">
          <FaEnvelope className="contact-icon" />
          <a href="mailto:contact@novanet.com">contact@novanet.com</a>
        </div>
        <div className="contact-info-item">
          <FaPhone className="contact-icon" />
          <span>+1 (555) 123-4567</span>
        </div>
        <div className="social-media">
          <a href="https://github.com" target="_blank" rel="noopener noreferrer"><FaGithub /></a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
          <a href="https://buildwithmk.app" target="_blank" rel="noopener noreferrer"><FaGlobe /></a>
        </div>
      </div>
    </div>
  );
};

export default Contact;
