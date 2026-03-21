import { Link } from 'react-router-dom'
import { BUSINESS } from '../data/constants'

export default function Footer() {
  return (
    <footer className="footer" id="site-footer">
      <div className="container">
        <div className="footer-grid">
          {/* Brand */}
          <div>
            <div className="footer-brand">
              <span className="brand-icon">A2Z</span>
              <span>{BUSINESS.name}</span>
            </div>
            <p className="footer-desc">
              Your trusted partner for all cooling and appliance solutions in Jaipur.
              Expert AC repair, geyser service, washing machine repair, and premium AC sales
              with guaranteed satisfaction.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4>Quick Links</h4>
            <div className="footer-links">
              <Link to="/">Home</Link>
              <Link to="/about">About Us</Link>
              <Link to="/services">Services</Link>
              <Link to="/testimonials">Testimonials</Link>
              <Link to="/contact">Contact Us</Link>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4>Our Services</h4>
            <div className="footer-links">
              <Link to="/services">AC Repair & Service</Link>
              <Link to="/services">Geyser Repair</Link>
              <Link to="/services">Washing Machine</Link>
              <Link to="/services">Solar AC Selling</Link>
              <Link to="/services">All Brands</Link>
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h4>Contact Info</h4>
            <div className="footer-contact-item">
              <span className="footer-contact-icon">📍</span>
              <span>{BUSINESS.address}</span>
            </div>
            <div className="footer-contact-item">
              <span className="footer-contact-icon">📞</span>
              <a href={`tel:${BUSINESS.phone}`}>{BUSINESS.phone}</a>
            </div>
            <div className="footer-contact-item">
              <span className="footer-contact-icon">✉️</span>
              <a href={`mailto:${BUSINESS.email}`}>{BUSINESS.email}</a>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p>
            ©️ Copyright 2026 | {BUSINESS.name} | All Rights Reserved | Powered by{' '}
            <a
              href="https://shapesway.in"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: '#28a745' }}
            >
              Shapesway Technologies Pvt. Ltd.
            </a>
          </p>
        </div>
      </div>
    </footer>
  )
}
