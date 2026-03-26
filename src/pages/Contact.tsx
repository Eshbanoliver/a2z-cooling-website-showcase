import { useState } from 'react'
import PageHeader from '../components/PageHeader'
import SectionTitle from '../components/SectionTitle'
import FadeInSection from '../components/FadeInSection'
import DynamicIcon from '../components/DynamicIcon'
import { BUSINESS } from '../data/constants'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: '',
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)

  const whatsappUrl = `https://wa.me/${BUSINESS.phoneClean}?text=${encodeURIComponent(BUSINESS.whatsappMessage)}`

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Build WhatsApp message with form data
    const msg = `Hello A2Z Cooling Point!%0A%0AName: ${formData.name}%0APhone: ${formData.phone}%0AEmail: ${formData.email}%0AService: ${formData.service}%0AMessage: ${formData.message}`
    window.open(`https://wa.me/${BUSINESS.phoneClean}?text=${msg}`, '_blank')
    
    setTimeout(() => {
      setIsSubmitting(false)
      setSubmitted(true)
      setFormData({ name: '', email: '', phone: '', service: '', message: '' })
    }, 1000)
  }

  return (
    <>
      <PageHeader
        title="Contact Us"
        subtitle="Get in touch with Jaipur's most trusted cooling experts"
      />

      <section className="section section-ice" id="contact-info">
        <div className="container">
          <FadeInSection>
            <div className="contact-grid">
              <div className="contact-details">
                <SectionTitle
                  badge="Get In Touch"
                  title={<>We're Always <span className="gradient-text">Here to Help</span></>}
                  description="Whether it's a routine service or an emergency repair, our team is ready to assist you."
                />

                <div className="contact-info-cards">
                  <div className="glass-card contact-info-card">
                    <div className="icon">
                      <DynamicIcon name="phone" size={24} />
                    </div>
                    <div>
                      <h3>Phone</h3>
                      <p><a href={`tel:${BUSINESS.phone}`}>{BUSINESS.phone}</a></p>
                    </div>
                  </div>
                  <div className="glass-card contact-info-card">
                    <div className="icon">
                      <DynamicIcon name="mail" size={24} />
                    </div>
                    <div>
                      <h3>Email</h3>
                      <p><a href={`mailto:${BUSINESS.email}`}>{BUSINESS.email}</a></p>
                    </div>
                  </div>
                  <div className="glass-card contact-info-card">
                    <div className="icon">
                      <DynamicIcon name="map-pin" size={24} />
                    </div>
                    <div>
                      <h3>Address</h3>
                      <p>{BUSINESS.address}</p>
                    </div>
                  </div>
                  <div className="glass-card contact-info-card">
                    <div className="icon">
                      <DynamicIcon name="clock-outline" size={24} />
                    </div>
                    <div>
                      <h3>Business Hours</h3>
                      <p>Mon - Sat: 9:00 AM - 9:00 PM</p>
                      <p>Sunday: 10:00 AM - 4:00 PM</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="glass-card-dark contact-form-container">
                <h3 className="form-title">Send Us a Message</h3>
                {submitted ? (
                  <div className="success-message">
                    <div className="success-icon">
                      <DynamicIcon name="check" size={48} color="#7BB8FF" />
                    </div>
                    <h4>Message Sent Successfully!</h4>
                    <p>Thank you for reaching out. We will get back to you within 24 hours.</p>
                    <button onClick={() => setSubmitted(false)} className="btn btn-outline" style={{ marginTop: '20px' }}>
                      Send Another Message
                    </button>
                  </div>
                ) : (
                  <form className="contact-form" onSubmit={handleSubmit}>
                    <div className="form-group">
                      <label htmlFor="name">Full Name</label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="e.g., Rajesh Sharma"
                        required
                      />
                    </div>
                    <div className="form-row">
                      <div className="form-group">
                        <label htmlFor="email">Email Address</label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          placeholder="e.g., rajesh.sharma@example.com"
                          required
                        />
                      </div>
                      <div className="form-group">
                        <label htmlFor="phone">Phone Number</label>
                        <input
                          type="tel"
                          id="phone"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          placeholder="e.g., +91 9876543210"
                          required
                        />
                      </div>
                    </div>
                    <div className="form-group">
                      <label htmlFor="service">Service Required</label>
                      <select id="service" name="service" value={formData.service} onChange={handleChange} required>
                        <option value="">Select a Service</option>
                        <option value="ac-repair">AC Repair & Service</option>
                        <option value="ac-installation">AC Installation</option>
                        <option value="geyser-repair">Geyser Repair</option>
                        <option value="washing-machine">Washing Machine Repair</option>
                        <option value="solar-ac">Solar AC Inquiry</option>
                        <option value="other">Other</option>
                      </select>
                    </div>
                    <div className="form-group">
                      <label htmlFor="message">Your Message</label>
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Tell us about your requirements..."
                        rows={4}
                        required
                      ></textarea>
                    </div>
                    <button type="submit" className="btn btn-primary btn-block" disabled={isSubmitting}>
                      {isSubmitting ? 'Sending...' : (
                        <>
                          Send Message <DynamicIcon name="arrow-right" size={18} style={{ marginLeft: '10px' }} />
                        </>
                      )}
                    </button>
                  </form>
                )}
                
                <div className="quick-action-divider">
                  <span>OR</span>
                </div>
                
                <div className="contact-action-buttons">
                  <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="btn btn-secondary btn-block">
                    <DynamicIcon name="whatsapp" size={18} style={{ marginRight: '10px' }} />
                    WhatsApp Us Directly
                  </a>
                </div>
              </div>
            </div>
          </FadeInSection>
        </div>
      </section>

      <section className="section section-light" id="location-map">
        <div className="container">
          <FadeInSection>
            <div className="map-container glass-card" style={{ padding: '12px', overflow: 'hidden' }}>
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3627.841115037592!2d73.7086562753624!3d24.594678978103783!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3967e5f24ab37ba1%3A0x8ca2e88e3353b68e!2sA%20to%20z%20cooling%20services!5e0!3m2!1sen!2sin!4v1774503815700!5m2!1sen!2sin" 
                width="100%" 
                height="450" 
                style={{ border: 0, borderRadius: '12px', display: 'block' }} 
                allowFullScreen={true} 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                title="A2Z Cooling Point Location"
              ></iframe>
            </div>
          </FadeInSection>
        </div>
      </section>
    </>
  )
}
