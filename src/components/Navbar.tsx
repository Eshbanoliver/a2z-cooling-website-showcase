import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import DynamicIcon from './DynamicIcon'
import { BUSINESS } from '../data/constants'

const NAV_LINKS = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About' },
  { to: '/services', label: 'Services' },
  { to: '/testimonials', label: 'Testimonials' },
  { to: '/contact', label: 'Contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    setMobileOpen(false)
  }, [location])

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [mobileOpen])

  return (
    <>
      <nav className={`navbar${scrolled ? ' scrolled' : ''}`} id="main-navbar">
        <div className="container">
          <Link to="/" className="navbar-brand" aria-label="Home">
            <span className="brand-icon">
              <DynamicIcon name="snowflake" size={24} />
            </span>
            <span>{BUSINESS.name}</span>
          </Link>

          <div className={`navbar-links${mobileOpen ? ' open' : ''}`}>
            {NAV_LINKS.map(link => (
              <Link
                key={link.to}
                to={link.to}
                className={location.pathname === link.to ? 'active' : ''}
              >
                {link.label}
              </Link>
            ))}
          </div>

          <div className="navbar-cta">
            <a
              href={`tel:${BUSINESS.phone}`}
              className="btn btn-primary btn-sm"
              aria-label="Call us"
            >
              <DynamicIcon name="phone" size={18} style={{ marginRight: '8px' }} />
              Call Now
            </a>
          </div>

          <button
            className={`navbar-toggle${mobileOpen ? ' active' : ''}`}
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle navigation menu"
            aria-expanded={mobileOpen}
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </nav>

      <div
        className={`mobile-overlay${mobileOpen ? ' active' : ''}`}
        onClick={() => setMobileOpen(false)}
        aria-hidden="true"
      />
    </>
  )
}
