import { Link } from 'react-router-dom'
import PageHeader from '../components/PageHeader'
import SectionTitle from '../components/SectionTitle'
import FadeInSection from '../components/FadeInSection'
import DynamicIcon from '../components/DynamicIcon'
import { BUSINESS, VALUES, METRICS } from '../data/constants'
import aboutHero from '../assets/about-hero-new.png'
import trustVisual from '../assets/trust-visual.png'

export default function About() {
  return (
    <>
      <PageHeader
        title="About Us"
        subtitle="Know more about A2Z Cooling Point — your trusted cooling partner in Jaipur"
        image={aboutHero}
        fullWidth={true}
      />

      {/* ===== COMPANY INTRODUCTION ===== */}
      <section className="section section-ice" id="about-intro">
        <div className="container">
          <FadeInSection>
            <div className="about-intro">
              <div className="about-content">
                <span className="badge">Established Expertise</span>
                <h2>Welcome to <span className="gradient-text">A2Z Cooling Point</span></h2>
                <p>
                  Founded with a passion for delivering exceptional cooling solutions,
                  A2Z Cooling Point has been proudly serving the people of Jaipur for over
                  a decade. Located at Mansarovar, we have built a strong reputation as a
                  reliable and customer-focused service provider.
                </p>
                <div className="about-expertise">
                  {[
                    'AC Repair & Installation',
                    'Geyser & Water Heater',
                    'Washing Machine Service',
                    'Solar AC Solutions',
                    'Multi-Brand AC Sales',
                    'Annual Maintenance'
                  ].map((item, index) => (
                    <FadeInSection key={item} delay={index * 0.1}>
                      <div className="about-expertise-item">
                        <span className="check">
                          <DynamicIcon name="check" size={14} />
                        </span>
                        <span>{item}</span>
                      </div>
                    </FadeInSection>
                  ))}
                </div>
              </div>
              <div className="about-intro-image">
                <div 
                  className="about-intro-image-bg" 
                  style={{ backgroundImage: `url(${trustVisual})` }}
                ></div>
                <div className="about-intro-overlay"></div>
                <div className="content">
                  <div className="icon-box">
                    <DynamicIcon name="map-pin" size={40} />
                  </div>
                  <h3>A Decade of Trust</h3>
                  <p>
                    Serving 5000+ happy customers across Jaipur with certified expertise and unmatched support.
                  </p>
                </div>
              </div>
            </div>
          </FadeInSection>
        </div>
      </section>

      {/* ===== EXPERIENCE & METRICS ===== */}
      <section className="metrics-section" id="about-metrics">
        <div className="container">
          <FadeInSection>
            <SectionTitle
              badge="Our Impact"
              title={<>Numbers That <span className="gradient-text">Speak</span></>}
              description="A track record of excellence, trust, and customer satisfaction."
            />
          </FadeInSection>
          <FadeInSection>
            <div className="metrics-grid">
              {METRICS.map((m, i) => (
                <div className="metric-card" key={i}>
                  <div className="metric-icon">
                    <DynamicIcon name={m.icon} size={32} />
                  </div>
                  <div className="metric-value">{m.value}</div>
                  <div className="metric-label">{m.label}</div>
                </div>
              ))}
            </div>
          </FadeInSection>
        </div>
      </section>

      {/* ===== MISSION & VISION ===== */}
      <section className="section section-dark mission-vision-vibrant" id="about-mv">
        <div className="mv-backdrop-glow" />
        <div className="container">
          <FadeInSection>
            <SectionTitle
              badge="Mission & Vision"
              badgeClass="badge-blue"
              title={<span style={{ color: '#fff' }}>Driving Force Behind Our <span className="gradient-text">Success</span></span>}
              description="Our mission and vision define who we are and what drives us every single day."
            />
          </FadeInSection>
          <div className="mv-vibrant-grid">
            <FadeInSection delay={0.2}>
              <div className="mv-card-vibrant mission-card">
                <div className="mv-icon-float">
                  <DynamicIcon name="rocket" size={40} />
                </div>
                <div className="mv-content">
                  <h3 className="mv-title">Our Mission</h3>
                  <div className="mv-divider" />
                  <p className="mv-text">
                    To provide reliable, affordable, and high-quality cooling and appliance
                    services for every household and business in Jaipur. We strive for 
                    unmatched reliability in every repair.
                  </p>
                </div>
                <div className="mv-card-glow" />
              </div>
            </FadeInSection>
            
            <FadeInSection delay={0.4}>
              <div className="mv-card-vibrant vision-card">
                <div className="mv-icon-float">
                  <DynamicIcon name="search" size={40} />
                </div>
                <div className="mv-content">
                  <h3 className="mv-title">Our Vision</h3>
                  <div className="mv-divider" />
                  <p className="mv-text">
                    To become Rajasthan's leading cooling solutions provider by expanding our
                    footprint, embracing green technology, and setting industry-leading 
                    maintenance standards.
                  </p>
                </div>
                <div className="mv-card-glow" />
              </div>
            </FadeInSection>
          </div>
        </div>
      </section>

      {/* ===== CORE VALUES SECTION ===== */}
      <section className="section core-values-vibrant" id="about-values">
        <div className="section-blob section-blob-3" />
        <div className="container">
          <FadeInSection>
            <SectionTitle
              badge="Core Values"
              badgeClass="badge-blue"
              title={<>Values That <span className="gradient-text">Define Us</span></>}
              description="These principles guide every decision we make and every service we deliver. We are committed to excellence in every repair."
            />
          </FadeInSection>
          <div className="values-vibrant-grid">
            {VALUES.map((v, i) => (
              <FadeInSection key={i} delay={i * 0.1}>
                <div className="value-vibrant-card">
                  <div className="value-icon-container">
                    <DynamicIcon name={v.icon} size={32} />
                  </div>
                  <h3 className="value-title">{v.title}</h3>
                  <div className="value-accent-line" />
                  <p className="value-description">{v.description}</p>
                </div>
              </FadeInSection>
            ))}
          </div>
        </div>
      </section>

      {/* ===== CTA SECTION ===== */}
      <section className="cta-section" id="about-cta" style={{ marginBottom: '100px', borderRadius: '40px' }}>
        <div className="container">
          <FadeInSection>
            <div className="cta-content">
              <h2>Ready to Experience the A2Z Difference?</h2>
              <p>
                Let our expert team handle your cooling and appliance needs today.
              </p>
              <div className="cta-buttons">
                <Link to="/contact" className="btn btn-primary btn-lg">
                  Contact Us <DynamicIcon name="arrow-right" size={18} style={{ marginLeft: '8px' }} />
                </Link>
                <Link to="/services" className="btn btn-secondary btn-lg">
                  Explore Services
                </Link>
              </div>
            </div>
          </FadeInSection>
        </div>
      </section>
    </>
  )
}
