import React from 'react';
import './About.css';
import aboutImage from '../assets/about-page-network-image.webp';

const About = () => {
  return (
    <div className="about-section">
      <div className="about-content">
        <h1>Our Mission</h1>
        <p>
          At NovaNet, our mission is to simplify and automate the process of LAN installation and setup. We understand the complexities involved in configuring large-scale networks, and our goal is to provide a seamless, one-click solution that saves time and eliminates human error. By automating the installation process, we empower organizations to deploy and manage their networks with greater efficiency and confidence.
        </p>
      </div>
      <div className="about-image">
        <img src={aboutImage} alt="Network Infrastructure" />
      </div>
    </div>
  );
};

export default About;
