import { Link } from 'react-router-dom'
import PageHeader from '../components/PageHeader'
import SectionTitle from '../components/SectionTitle'
import FadeInSection from '../components/FadeInSection'
import { BUSINESS, VALUES, METRICS } from '../data/constants'

export default function About() {
  return (
    <>
      <PageHeader
        title="About Us"
        subtitle="Know more about A2Z Cooling Point — your trusted cooling partner in Jaipur"
      />

      {/* ===== COMPANY INTRODUCTION ===== */}
      <section className="section section-ice" id="about-intro">
        <div className="container">
          <FadeInSection>
            <div className="about-intro">
              <div className="about-content">
                <h2>Welcome to <span className="gradient-text">A2Z Cooling Point</span></h2>
                <p>
                  Founded with a passion for delivering exceptional cooling solutions,
                  A2Z Cooling Point has been proudly serving the people of Jaipur for over
                  a decade. Located at Mansarovar, we have built a strong reputation as a
                  reliable and customer-focused service provider.
                </p>
                <p>
                  Our journey started with a simple commitment — to provide honest, quality,
                  and affordable cooling and appliance services. Today, we stand as one of
                  Jaipur's most trusted names, servicing thousands of happy customers across
                  residential, commercial, and industrial segments.
                </p>
                <p>
                  We are authorized dealers for multiple premium AC brands including Voltas,
                  Godrej, Lloyd, LG, Daikin, Samsung, and Cruise. Our team stays updated
                  with the latest technologies and attends regular training sessions to
                  ensure top-notch service delivery.
                </p>
                <div className="about-expertise">
                  <div className="about-expertise-item">
                    <span className="check">✅</span>
                    <span>AC Repair & Installation</span>
                  </div>
                  <div className="about-expertise-item">
                    <span className="check">✅</span>
                    <span>Geyser & Water Heater</span>
                  </div>
                  <div className="about-expertise-item">
                    <span className="check">✅</span>
                    <span>Washing Machine Service</span>
                  </div>
                  <div className="about-expertise-item">
                    <span className="check">✅</span>
                    <span>Solar AC Solutions</span>
                  </div>
                  <div className="about-expertise-item">
                    <span className="check">✅</span>
                    <span>Multi-Brand AC Sales</span>
                  </div>
                  <div className="about-expertise-item">
                    <span className="check">✅</span>
                    <span>Annual Maintenance</span>
                  </div>
                </div>
              </div>
              <div className="about-intro-image">
                <div className="icon">🏢</div>
                <h3>A Decade of Trust</h3>
                <p>
                  Serving 5000+ happy customers across Jaipur with certified expertise,
                  genuine parts, and unmatched after-sales support.
                </p>
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
              badge="📊 Our Impact"
              title={<>Numbers That <span className="gradient-text">Speak</span></>}
              description="A track record of excellence, trust, and customer satisfaction."
            />
          </FadeInSection>
          <FadeInSection>
            <div className="metrics-grid">
              {METRICS.map((m, i) => (
                <div className="metric-card" key={i}>
                  <div className="metric-icon">{m.icon}</div>
                  <div className="metric-value">{m.value}</div>
                  <div className="metric-label">{m.label}</div>
                </div>
              ))}
            </div>
          </FadeInSection>
        </div>
      </section>

      {/* ===== MISSION, VISION, VALUES ===== */}
      <section className="section section-dark" id="about-mv">
        <div className="container">
          <FadeInSection>
            <SectionTitle
              badge="🎯 Mission & Vision"
              title="Our Guiding Principles"
              description="The beliefs and goals that shape everything we do."
            />
          </FadeInSection>
          <FadeInSection>
            <div className="mv-grid">
              <div className="glass-card-dark mv-card">
                <div className="mv-icon">🚀</div>
                <h3 style={{ color: '#fff' }}>Our Mission</h3>
                <p>
                  To deliver top-quality cooling and appliance repair services with honesty,
                  affordability, and speed. We strive to be the first choice for every home
                  and business in Jaipur by consistently exceeding customer expectations.
                </p>
              </div>
              <div className="glass-card-dark mv-card">
                <div className="mv-icon">🔭</div>
                <h3 style={{ color: '#fff' }}>Our Vision</h3>
                <p>
                  To expand across Rajasthan as the leading eco-friendly cooling solutions
                  brand, pioneering solar AC adoption and setting industry benchmarks for
                  customer care, technical innovation, and service excellence.
                </p>
              </div>
            </div>
          </FadeInSection>
        </div>
      </section>

      {/* ===== CORE VALUES ===== */}
      <section className="section section-light" id="about-values">
        <div className="container">
          <FadeInSection>
            <SectionTitle
              badge="💎 Core Values"
              title={<>Values We <span className="gradient-text">Live By</span></>}
              description="These principles are at the heart of every interaction and service we provide."
            />
          </FadeInSection>
          <div className="values-grid">
            {VALUES.map((v, i) => (
              <FadeInSection key={i}>
                <div className="glass-card value-card">
                  <div className="value-icon">{v.icon}</div>
                  <h3>{v.title}</h3>
                  <p>{v.description}</p>
                </div>
              </FadeInSection>
            ))}
          </div>
        </div>
      </section>

      {/* ===== CTA ===== */}
      <section className="cta-section" id="about-cta">
        <div className="container">
          <FadeInSection>
            <div className="cta-content">
              <h2>Ready to Experience the A2Z Difference?</h2>
              <p>
                Let our expert team handle your cooling and appliance needs today.
              </p>
              <div className="cta-buttons">
                <Link to="/contact" className="btn btn-primary btn-lg">
                  Contact Us →
                </Link>
                <Link to="/services" className="btn btn-secondary btn-lg">
                  Our Services
                </Link>
              </div>
            </div>
          </FadeInSection>
        </div>
      </section>
    </>
  )
}
