import React from 'react';
import { HashLink } from 'react-router-hash-link';
import '../App.css';

const Home = () => {
  const handleDownload = () => {
    window.location.href = '/novanet.zip';
  };

  return (
    <>
      {/* Hero Section */}
      <section id="home" className="hero-section">
        <div className="hero-content">
          <h1 className="hero-title">LAN Auto Installer</h1>
          <p className="hero-subtitle">Streamline your network installations with our automated solution</p>
          <HashLink smooth to="/#download" className="cta-button">
            Download Now
          </HashLink>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="features-section">
        <div className="container">
          <h2 className="section-title">Key Features</h2>
          <div className="features-grid">
            <div className="feature-card">
              <h3>Fast Installation</h3>
              <p>Quick and efficient installation process across your LAN network</p>
            </div>
            <div className="feature-card">
              <h3>Secure Transfer</h3>
              <p>Encrypted file transfer ensures your data remains protected</p>
            </div>
            <div className="feature-card">
              <h3>Easy Configuration</h3>
              <p>Simple setup process with intuitive user interface</p>
            </div>
          </div>
        </div>
      </section>

      {/* Download Section */}
      <section id="download" className="download-section">
        <div className="container">
          <div className="download-grid">
            <div className="download-info">
              <h2 className="section-title">Download LAN Auto Installer</h2>
              <p className="download-description">
                Get started with our powerful LAN installation tool. Compatible with Windows systems.
              </p>
            </div>
            <div className="download-options">
              <div className="download-card">
                <h3>Windows Installer</h3>
                <p>Compatible with Windows 10 and above</p>
                <button className="download-button" onClick={handleDownload}>
                  Download .zip
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
