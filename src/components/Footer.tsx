import { Link } from 'react-router-dom'
import DynamicIcon from './DynamicIcon'
import { BUSINESS } from '../data/constants'

export default function Footer() {
  return (
    <footer className="footer" id="site-footer">
      <div className="container">
        <div className="footer-grid">
          {/* Brand */}
          <div className="footer-brand-section">
            <div className="footer-brand">
              <span className="brand-icon">
                <DynamicIcon name="snowflake" size={24} />
              </span>
              <span>{BUSINESS.name}</span>
            </div>
            <p className="footer-desc">
              Your trusted partner for all cooling and appliance solutions in Jaipur. 
              Reliable service for all major brands with guaranteed satisfaction.
            </p>
          </div>

          {/* Quick Links */}
          <div className="footer-links-group">
            <h4>Quick Links</h4>
            <div className="footer-links">
              <Link to="/">Home</Link>
              <Link to="/about">About Us</Link>
              <Link to="/services">Our Services</Link>
              <Link to="/testimonials">Testimonials</Link>
              <Link to="/contact">Contact Us</Link>
            </div>
          </div>

          {/* Services */}
          <div className="footer-links-group">
            <h4>Our Services</h4>
            <div className="footer-links">
              <Link to="/services">AC Repair & Service</Link>
              <Link to="/services">Geyser Repair</Link>
              <Link to="/services">Washing Machine</Link>
              <Link to="/services">Solar AC Selling</Link>
              <Link to="/services">Annual Maintenance</Link>
            </div>
          </div>

          {/* Contact Info */}
          <div className="footer-contact-info">
            <h4>Contact Info</h4>
            <div className="footer-contact-item">
              <span className="footer-contact-icon">
                <DynamicIcon name="map-pin" size={18} />
              </span>
              <span>{BUSINESS.address}</span>
            </div>
            <div className="footer-contact-item">
              <span className="footer-contact-icon">
                <DynamicIcon name="phone" size={18} />
              </span>
              <a href={`tel:${BUSINESS.phone}`}>{BUSINESS.phone}</a>
            </div>
            <div className="footer-contact-item">
              <span className="footer-contact-icon">
                <DynamicIcon name="mail" size={18} />
              </span>
              <a href={`mailto:${BUSINESS.email}`}>{BUSINESS.email}</a>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p>
            &copy; 2026 {BUSINESS.name}. All Rights Reserved. Powered by{' '}
            <a
              href="https://shapesway.in"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: '#7BB8FF' }}
            >
              Shapesway Technologies
            </a>
          </p>
        </div>
      </div>
    </footer>
  )
}
