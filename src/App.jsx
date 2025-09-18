import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import './App.css';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';

function App() {
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);
  const [menuOpen, setMenuOpen] = useState(false);

  const handleScroll = () => {
    const currentScrollPos = window.pageYOffset;
    setVisible(prevScrollPos > currentScrollPos || currentScrollPos < 10);
    setPrevScrollPos(currentScrollPos);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [prevScrollPos, visible, handleScroll]);

  return (
    <Router>
      <div className="App">
        <nav className={`navbar ${!visible ? 'navbar--hidden' : ''}`}>
          <div className="nav-container container">
            <div className="nav-logo">
              <Link to="/"><h2>NovaNet</h2></Link>
            </div>
            <div className="menu-icon" onClick={() => setMenuOpen(!menuOpen)}>
              <div />
              <div />
              <div />
            </div>
            <ul className={`nav-menu ${menuOpen ? 'active' : ''}`}>
              <li className="nav-item">
                <Link to="/" className="nav-link" onClick={() => setMenuOpen(false)}>Home</Link>
              </li>
              <li className="nav-item">
                <HashLink smooth to="/#features" className="nav-link" onClick={() => setMenuOpen(false)}>Features</HashLink>
              </li>
              <li className="nav-item">
                <Link to="/about" className="nav-link" onClick={() => setMenuOpen(false)}>About</Link>
              </li>
              <li className="nav-item">
                <Link to="/contact" className="nav-link" onClick={() => setMenuOpen(false)}>Contact</Link>
              </li>
              <li className="nav-item">
                <HashLink smooth to="/#download" className="nav-link" onClick={() => setMenuOpen(false)}>Download</HashLink>
              </li>
            </ul>
          </div>
        </nav>
        <div className="content-wrap">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </div>
        <footer className="footer">
          <div className="container">
            <p>&copy; 2024 LAN Auto Installer. All rights reserved.</p>
          </div>
        </footer>
      </div>
    </Router>
  );
}

export default App;
