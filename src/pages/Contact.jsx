import { useState } from 'react'
import PageHeader from '../components/PageHeader'
import FadeInSection from '../components/FadeInSection'
import { BUSINESS } from '../data/constants'

export default function Contact() {
  const [form, setForm] = useState({ name: '', phone: '', email: '', message: '' })
  const [submitted, setSubmitted] = useState(false)

  const whatsappUrl = `https://wa.me/${BUSINESS.phoneClean}?text=${encodeURIComponent(BUSINESS.whatsappMessage)}`

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Build WhatsApp message with form data
    const msg = `Hello A2Z Cooling Point!%0A%0AName: ${form.name}%0APhone: ${form.phone}%0AEmail: ${form.email}%0AMessage: ${form.message}`
    window.open(`https://wa.me/${BUSINESS.phoneClean}?text=${msg}`, '_blank')
    setSubmitted(true)
    setTimeout(() => setSubmitted(false), 5000)
    setForm({ name: '', phone: '', email: '', message: '' })
  }

  return (
    <>
      <PageHeader
        title="Contact Us"
        subtitle="We'd love to hear from you. Reach out to us anytime!"
      />

      <section className="section section-ice" id="contact-section">
        <div className="container">
          <div className="contact-grid">
            {/* Contact Form */}
            <FadeInSection>
              <div className="glass-card contact-form-card">
                <div className="contact-form">
                  <h3>Send Us a Message</h3>
                  <p>Fill out the form below and we'll get back to you shortly.</p>
                  {submitted && (
                    <div style={{
                      padding: '14px 20px',
                      background: 'rgba(37, 211, 102, 0.1)',
                      border: '1px solid rgba(37, 211, 102, 0.3)',
                      borderRadius: '12px',
                      color: '#25d366',
                      fontWeight: 600,
                      fontSize: '0.9rem',
                      marginBottom: '20px'
                    }}>
                      ✅ Message sent via WhatsApp! We'll respond soon.
                    </div>
                  )}
                  <form onSubmit={handleSubmit}>
                    <div className="form-group">
                      <label htmlFor="contact-name">Full Name</label>
                      <input
                        type="text"
                        id="contact-name"
                        name="name"
                        placeholder="Your full name"
                        value={form.name}
                        onChange={handleChange}
                        required
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="contact-phone">Phone Number</label>
                      <input
                        type="tel"
                        id="contact-phone"
                        name="phone"
                        placeholder="Your phone number"
                        value={form.phone}
                        onChange={handleChange}
                        required
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="contact-email">Email Address</label>
                      <input
                        type="email"
                        id="contact-email"
                        name="email"
                        placeholder="Your email address"
                        value={form.email}
                        onChange={handleChange}
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="contact-message">Your Message</label>
                      <textarea
                        id="contact-message"
                        name="message"
                        placeholder="How can we help you?"
                        rows="5"
                        value={form.message}
                        onChange={handleChange}
                        required
                      />
                    </div>
                    <button type="submit" className="btn btn-primary" style={{ width: '100%' }}>
                      Send Message via WhatsApp 💬
                    </button>
                  </form>
                </div>
              </div>
            </FadeInSection>

            {/* Contact Info */}
            <div className="contact-info-section">
              <FadeInSection>
                <div className="glass-card contact-info-card">
                  <h3>Get In Touch</h3>
                  <div className="contact-detail">
                    <div className="contact-detail-icon">📍</div>
                    <div>
                      <h4>Our Location</h4>
                      <p>{BUSINESS.address}</p>
                    </div>
                  </div>
                  <div className="contact-detail">
                    <div className="contact-detail-icon">📞</div>
                    <div>
                      <h4>Phone Number</h4>
                      <a href={`tel:${BUSINESS.phone}`}>{BUSINESS.phone}</a>
                    </div>
                  </div>
                  <div className="contact-detail">
                    <div className="contact-detail-icon">✉️</div>
                    <div>
                      <h4>Email Address</h4>
                      <a href={`mailto:${BUSINESS.email}`}>{BUSINESS.email}</a>
                    </div>
                  </div>
                </div>
              </FadeInSection>

              <FadeInSection>
                <div className="glass-card contact-info-card">
                  <h3>Quick Connect</h3>
                  <p style={{ marginBottom: '20px', color: 'var(--gray-500)', fontSize: '0.9rem' }}>
                    Prefer a quick chat? Reach us directly through WhatsApp or give us a call.
                  </p>
                  <div className="contact-action-buttons">
                    <a
                      href={whatsappUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="contact-action-btn whatsapp"
                    >
                      💬 Chat on WhatsApp
                    </a>
                    <a
                      href={`tel:${BUSINESS.phone}`}
                      className="contact-action-btn call"
                    >
                      📞 Call Us Now
                    </a>
                  </div>
                </div>
              </FadeInSection>

              <FadeInSection>
                <div className="glass-card contact-info-card">
                  <h3>Business Hours</h3>
                  <div className="contact-detail">
                    <div className="contact-detail-icon">🕐</div>
                    <div>
                      <h4>Working Hours</h4>
                      <p>Monday – Saturday: 9:00 AM – 8:00 PM</p>
                      <p>Sunday: 10:00 AM – 4:00 PM</p>
                    </div>
                  </div>
                </div>
              </FadeInSection>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
