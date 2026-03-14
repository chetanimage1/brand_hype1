import { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-logo">
          <div className="logo-container">
            <span className="logo-text">brandhype</span>
          </div>
        </Link>

        <button
          className="mobile-menu-button"
          onClick={toggleMobileMenu}
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? '✕' : '☰'}
        </button>

        <ul className={`navbar-menu ${mobileMenuOpen ? 'active' : ''}`}>
          <li><Link to="/" onClick={() => setMobileMenuOpen(false)}><span className="nav-icon">🏠</span>Home</Link></li>
          <li><Link to="/about" onClick={() => setMobileMenuOpen(false)}><span className="nav-icon">ℹ️</span>About</Link></li>
          <li><Link to="/services" onClick={() => setMobileMenuOpen(false)}><span className="nav-icon">⚡</span>Services</Link></li>
          <li><Link to="/portfolio" onClick={() => setMobileMenuOpen(false)}><span className="nav-icon">💼</span>Portfolio</Link></li>
          <li><Link to="/blog" onClick={() => setMobileMenuOpen(false)}><span className="nav-icon">📝</span>Blog</Link></li>
          <li className="navbar-cta"><Link to="/contact" onClick={() => setMobileMenuOpen(false)}><span className="nav-icon">📧</span>Contact</Link></li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
