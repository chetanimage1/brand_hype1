import { Link } from 'react-router-dom';
import './Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section">
          <h3>brandhype</h3>
          <p>Transforming businesses through innovative digital marketing strategies.</p>
        </div>
        <div className="footer-section">
          <h4>Quick Links</h4>
          <ul>
            <li><Link to="/about">About Us</Link></li>
            <li><Link to="/services">Services</Link></li>
            <li><Link to="/portfolio">Portfolio</Link></li>
            <li><Link to="/blog">Blog</Link></li>
          </ul>
        </div>
        <div className="footer-section">
          <h4>Services</h4>
          <ul>
            <li><Link to="/services">SEO</Link></li>
            <li><Link to="/services">Social Media</Link></li>
            <li><Link to="/services">Google Ads</Link></li>
            <li><Link to="/services">Content Marketing</Link></li>
          </ul>
        </div>
        <div className="footer-section">
          <h4>Contact</h4>
          <p>Email: info@digitalagency.com</p>
          <p>Phone: (555) 123-4567</p>
          <p>Address: 123 Marketing St, City, State 12345</p>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2024 brandhype. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
