import { Link } from 'react-router-dom'
import DynamicIcon from './DynamicIcon'
import { BUSINESS } from '../data/constants'

export default function Footer() {
  return (
    <footer className="footer" id="site-footer">
      <div className="footer-glow-1"></div>
      <div className="footer-glow-2"></div>
      
      <div className="container">
        {/* Footer Top - CTA & Social */}
        <div className="footer-top">
          <div className="footer-cta-card">
            <div className="footer-cta-content">
              <h3>Ready to experience better cooling?</h3>
              <p>Schedule your service today and join 5000+ happy customers in Jaipur.</p>
            </div>
            <div className="footer-cta-actions">
              <a href={`tel:${BUSINESS.phone}`} className="btn btn-primary btn-lg">
                <DynamicIcon name="phone" size={20} />
                Book Now
              </a>
              <a href={`https://wa.me/${BUSINESS.phoneClean}?text=${encodeURIComponent(BUSINESS.whatsappMessage)}`} 
                 target="_blank" rel="noopener noreferrer" className="btn btn-secondary btn-lg">
                <DynamicIcon name="message-circle" size={20} />
                WhatsApp Us
              </a>
            </div>
          </div>
        </div>

        <div className="footer-grid">
          {/* Brand & Social */}
          <div className="footer-brand-section">
            <div className="footer-brand">
              <img src="/logo.png" alt="A2Z Cooling Point" className="footer-logo" />
            </div>
            <p className="footer-desc">
              Your trusted partner for all cooling and appliance solutions in Jaipur. 
              Reliable service for all major brands with guaranteed satisfaction.
            </p>
            <div className="footer-social">
              <a href={BUSINESS.instagram} target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="social-link">
                <DynamicIcon name="instagram" size={18} />
              </a>
            </div>
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
          <div className="footer-bottom-content">
            <p className="copyright">
              © Copyright 2026 | <Link to="/">{BUSINESS.name}</Link> | All Rights Reserved
            </p>
            <p className="powered-by">
              Powered by{' '}
              <a
                href="https://shapesway.in"
                target="_blank"
                rel="noopener noreferrer"
              >
                Shapesway Technologies Pvt. Ltd.
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
