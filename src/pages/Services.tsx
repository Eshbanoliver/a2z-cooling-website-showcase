import { Link } from 'react-router-dom'
import PageHeader from '../components/PageHeader'
import SectionTitle from '../components/SectionTitle'
import FadeInSection from '../components/FadeInSection'
import DynamicIcon from '../components/DynamicIcon'
import { SERVICES, BUSINESS } from '../data/constants'

export default function Services() {
  const whatsappUrl = `https://wa.me/${BUSINESS.phoneClean}?text=${encodeURIComponent('Hello! I am interested in your services. Please provide more details.')}`

  return (
    <>
      <PageHeader
        title="Our Services"
        subtitle="Comprehensive cooling and appliance solutions for your home and business"
      />

      <section className="section section-ice" id="services-grid">
        <div className="container">
          <FadeInSection>
            <SectionTitle
              badge="Expert Solutions"
              title={<>Solutions for <span className="gradient-text">Every Need</span></>}
              description="From AC repair to premium AC sales, we cover all your cooling and appliance requirements with certified expertise."
            />
          </FadeInSection>

          <div className="services-grid">
            {SERVICES.map((s) => (
              <FadeInSection key={s.id}>
                <div className="glass-card service-card">
                  <div className="service-card-icon">
                    <DynamicIcon name={s.icon} size={36} />
                  </div>
                  <h3>{s.title}</h3>
                  <p>{s.description}</p>
                </div>
              </FadeInSection>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-light" id="detailed-cta">
        <div className="container">
          <FadeInSection>
            <div className="cta-banner">
              <div className="cta-banner-content">
                <h2>Looking for something else?</h2>
                <p>We provide custom solutions for residential and commercial cooling needs. Get in touch with our experts now.</p>
              </div>
              <div className="cta-banner-buttons">
                <a href={`tel:${BUSINESS.phone}`} className="btn btn-navy">
                  <DynamicIcon name="phone" size={18} style={{ marginRight: '8px' }} />
                  Call Now
                </a>
                <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="btn btn-primary">
                  <DynamicIcon name="whatsapp" size={18} style={{ marginRight: '8px' }} />
                  WhatsApp
                </a>
              </div>
            </div>
          </FadeInSection>
        </div>
      </section>

      <section className="section section-ice">
        <div className="container" style={{ textAlign: 'center' }}>
          <FadeInSection>
            <Link to="/contact" className="btn btn-outline btn-lg">
              Still Have Questions? Contact Us <DynamicIcon name="arrow-right" size={18} style={{ marginLeft: '8px' }} />
            </Link>
          </FadeInSection>
        </div>
      </section>
    </>
  )
}
