import { Link } from 'react-router-dom'
import PageHeader from '../components/PageHeader'
import SectionTitle from '../components/SectionTitle'
import FadeInSection from '../components/FadeInSection'
import DynamicIcon from '../components/DynamicIcon'
import { SERVICES, BUSINESS } from '../data/constants'
import aboutHero from '../assets/about-hero-new.png'

export default function Services() {
  const whatsappUrl = `https://wa.me/${BUSINESS.phoneClean}?text=${encodeURIComponent('Hello! I am interested in your services. Please provide more details.')}`

  return (
    <>
      <PageHeader
        title="Our Services"
        subtitle="Comprehensive cooling and appliance solutions for your home and business"
        image={aboutHero}
        fullWidth={true}
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

      {/* ===== SPECIALIZED EXPERTISE ===== */}
      <section className="section bg-gradient-vibrant" id="technical-expertise">
        <div className="container">
          <FadeInSection>
            <div className="expertise-header text-center">
              <span className="badge badge-white">Specialized Expertise</span>
              <h2 className="title-lg text-white">Advanced <span className="gradient-text-light">AC Solutions</span></h2>
              <p className="description-lg text-white-80">
                We are industry leaders in designing, installing, and maintaining 
                complex cooling systems for large residences and commercial spaces.
              </p>
            </div>
          </FadeInSection>
          
          <div className="ac-types-grid">
            {[
              { title: 'Cassette AC', desc: 'Ceiling-mounted, multi-way airflow solutions.' },
              { title: 'Ductable AC', desc: 'Centralized cooling for large open spaces.' },
              { title: 'Tower AC', desc: 'Powerful vertical cooling for high-traffic areas.' },
              { title: 'VRV & VRF Systems', desc: 'Variable Refrigerant Flow for smart temperature control.' },
              { title: 'Package AC', desc: 'Self-contained units for easy installation.' },
              { title: 'Cassette AC', desc: '360-degree cooling comfort for premium interiors.' }
            ].map((type, i) => (
              <FadeInSection key={i} delay={i * 0.1}>
                <div className="ac-type-badge">
                  <div className="badge-icon">
                    <DynamicIcon name="snowflake" size={20} />
                  </div>
                  <div className="badge-content">
                    <h4>{type.title}</h4>
                    <p>{type.desc}</p>
                  </div>
                </div>
              </FadeInSection>
            ))}
          </div>

          <div className="emergency-notice mt-12 text-center">
            <FadeInSection>
              <div className="glass-vibrant emergency-banner">
                <div className="emergency-icon-glow">
                  <DynamicIcon name="zap" size={24} />
                </div>
                <div className="emergency-text">
                  <h3>Emergency Service in Udaipur & Jaipur</h3>
                  <p>Need urgent AC repair or jet pump service? We provide rapid onsite support for all cooling emergencies.</p>
                </div>
                <a href={`tel:${BUSINESS.phone}`} className="btn btn-white btn-sm">
                   Call Now
                </a>
              </div>
            </FadeInSection>
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
