import { Link } from 'react-router-dom';
import './Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-top">
        <div className="footer-cta-content">
          <h2 className="footer-cta-title">Ready to Transform Your Business?</h2>
          <p className="footer-cta-subtitle">Let's create a winning digital strategy together</p>
          <Link to="/contact" className="footer-cta-button">Get Started Today</Link>
        </div>
      </div>

      <div className="footer-container">
        <div className="footer-section footer-brand">
          <div className="footer-logo-container">
            <span className="footer-logo-text">brandhype</span>
          </div>
          <p className="footer-description">
            Empowering businesses worldwide with innovative digital marketing strategies that drive real results and sustainable growth.
          </p>
          <div className="footer-social">
            <a href="#" className="social-icon" aria-label="Facebook">📘</a>
            <a href="#" className="social-icon" aria-label="Twitter">🐦</a>
            <a href="#" className="social-icon" aria-label="Instagram">📷</a>
            <a href="#" className="social-icon" aria-label="LinkedIn">💼</a>
            <a href="#" className="social-icon" aria-label="YouTube">📺</a>
          </div>
        </div>

        <div className="footer-section">
          <h4>Quick Links</h4>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About Us</Link></li>
            <li><Link to="/services">Services</Link></li>
            <li><Link to="/portfolio">Portfolio</Link></li>
            <li><Link to="/blog">Blog</Link></li>
          </ul>
        </div>

        <div className="footer-section">
          <h4>Our Services</h4>
          <ul>
            <li><Link to="/services">SEO Optimization</Link></li>
            <li><Link to="/services">Social Media Marketing</Link></li>
            <li><Link to="/services">Google Ads</Link></li>
            <li><Link to="/services">Content Marketing</Link></li>
            <li><Link to="/services">Email Marketing</Link></li>
          </ul>
        </div>

        <div className="footer-section">
          <h4>Get In Touch</h4>
          <div className="footer-contact-info">
            <div className="contact-item">
              <span className="contact-icon">📧</span>
              <div className="contact-text">
                <div className="contact-label">Email</div>
                <div className="contact-value">info@brandhype.com</div>
              </div>
            </div>
            <div className="contact-item">
              <span className="contact-icon">📞</span>
              <div className="contact-text">
                <div className="contact-label">Phone</div>
                <div className="contact-value">+1 (555) 123-4567</div>
              </div>
            </div>
            <div className="contact-item">
              <span className="contact-icon">📍</span>
              <div className="contact-text">
                <div className="contact-label">Location</div>
                <div className="contact-value">123 Marketing St, City, State 12345</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="footer-bottom-content">
          <p className="footer-copyright">&copy; 2024 brandhype. All rights reserved.</p>
          <div className="footer-links">
            <Link to="/privacy">Privacy Policy</Link>
            <Link to="/terms">Terms of Service</Link>
            <Link to="/cookies">Cookie Policy</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
