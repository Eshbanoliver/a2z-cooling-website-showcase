import { Link } from 'react-router-dom'
import PageHeader from '../components/PageHeader'
import SectionTitle from '../components/SectionTitle'
import FadeInSection from '../components/FadeInSection'
import { SERVICES, BUSINESS } from '../data/constants'

export default function Services() {
  const whatsappUrl = `https://wa.me/${BUSINESS.phoneClean}?text=${encodeURIComponent(BUSINESS.whatsappMessage)}`

  return (
    <>
      <PageHeader
        title="Our Services"
        subtitle="Comprehensive cooling and appliance solutions for your home and business"
      />

      <section className="section section-ice" id="services-list">
        <div className="container">
          <FadeInSection>
            <SectionTitle
              badge="🔧 What We Do"
              title={<>Expert Solutions for <span className="gradient-text">Every Need</span></>}
              description="From AC repair to premium AC sales, we cover all your cooling and appliance requirements with certified expertise."
            />
          </FadeInSection>
          <div className="services-page-grid">
            {SERVICES.map((service) => (
              <FadeInSection key={service.id}>
                <div className="glass-card service-page-card">
                  <div className="service-page-icon">{service.icon}</div>
                  <h3>{service.title}</h3>
                  <p>{service.description}</p>
                </div>
              </FadeInSection>
            ))}
          </div>
        </div>
      </section>

      {/* ===== CTA ===== */}
      <section className="cta-section" id="services-cta">
        <div className="container">
          <FadeInSection>
            <div className="cta-content">
              <h2>Need a Service? Let's Talk!</h2>
              <p>
                Book a service appointment today or get a free consultation from our experts.
              </p>
              <div className="cta-buttons">
                <a href={`tel:${BUSINESS.phone}`} className="btn btn-primary btn-lg">
                  📞 Call Now
                </a>
                <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="btn btn-secondary btn-lg">
                  💬 WhatsApp Us
                </a>
              </div>
            </div>
          </FadeInSection>
        </div>
      </section>
    </>
  )
}
