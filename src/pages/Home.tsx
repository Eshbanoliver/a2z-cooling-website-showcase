import { Link } from 'react-router-dom'
import SectionTitle from '../components/SectionTitle'
import FaqItem from '../components/FaqItem'
import FadeInSection from '../components/FadeInSection'
import { BUSINESS, SERVICES, TESTIMONIALS, FAQS, METRICS, VALUES } from '../data/constants'

export default function Home() {
  const whatsappUrl = `https://wa.me/${BUSINESS.phoneClean}?text=${encodeURIComponent(BUSINESS.whatsappMessage)}`

  return (
    <>
      {/* ===== HERO SECTION ===== */}
      <section className="hero-section" id="hero">
        <div className="hero-shapes">
          <div className="hero-shape hero-shape-1" />
          <div className="hero-shape hero-shape-2" />
          <div className="hero-shape hero-shape-3" />
        </div>
        <div className="container">
          <div className="hero-content">
            <span className="hero-badge">❄️ Jaipur's Trusted Cooling Experts</span>
            <h1 className="hero-title">
              Expert Cooling &<br />
              <span className="highlight">Appliance Solutions</span>
            </h1>
            <p className="hero-description">
              From AC repair to solar cooling systems — we deliver premium service for
              all your cooling and home appliance needs with guaranteed satisfaction.
            </p>
            <div className="hero-buttons">
              <Link to="/services" className="btn btn-primary btn-lg">
                Explore Services
              </Link>
              <Link to="/contact" className="btn btn-secondary btn-lg">
                Get Free Quote
              </Link>
            </div>
            <div className="hero-stats">
              <div className="hero-stat">
                <div className="hero-stat-number">10<span className="accent">+</span></div>
                <div className="hero-stat-label">Years Experience</div>
              </div>
              <div className="hero-stat">
                <div className="hero-stat-number">5K<span className="accent">+</span></div>
                <div className="hero-stat-label">Happy Clients</div>
              </div>
              <div className="hero-stat">
                <div className="hero-stat-number">8K<span className="accent">+</span></div>
                <div className="hero-stat-label">Projects Done</div>
              </div>
              <div className="hero-stat">
                <div className="hero-stat-number">4.9<span className="accent">⭐</span></div>
                <div className="hero-stat-label">Client Rating</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== ABOUT PREVIEW ===== */}
      <section className="section section-ice" id="about-preview">
        <div className="container">
          <FadeInSection>
            <div className="about-preview">
              <div className="about-preview-content">
                <span className="badge">✨ About Us</span>
                <h2>Your Reliable Partner for<br /><span className="gradient-text">Cooling Solutions</span></h2>
                <p>
                  A2Z Cooling Point has been serving Jaipur for over a decade, providing
                  top-notch cooling and appliance repair services. Our team of certified
                  technicians handles everything from AC installations to complex repairs
                  for all major brands.
                </p>
                <p>
                  We are committed to delivering quality, affordability, and customer
                  satisfaction at every step.
                </p>
                <div className="about-features">
                  <div className="about-feature">
                    <span className="about-feature-icon">✅</span>
                    <span className="about-feature-text">Certified Technicians</span>
                  </div>
                  <div className="about-feature">
                    <span className="about-feature-icon">✅</span>
                    <span className="about-feature-text">All Major Brands</span>
                  </div>
                  <div className="about-feature">
                    <span className="about-feature-icon">✅</span>
                    <span className="about-feature-text">Same Day Service</span>
                  </div>
                  <div className="about-feature">
                    <span className="about-feature-icon">✅</span>
                    <span className="about-feature-text">Genuine Spare Parts</span>
                  </div>
                </div>
                <div style={{ marginTop: '28px' }}>
                  <Link to="/about" className="btn btn-navy btn-sm">
                    Learn More About Us →
                  </Link>
                </div>
              </div>
              <div className="about-preview-image">
                <div className="about-preview-card">
                  <div className="about-card-icon">❄️</div>
                  <h3 className="about-card-title">10+ Years of Excellence</h3>
                  <p className="about-card-text">
                    Established with a vision to provide reliable and affordable cooling
                    solutions, A2Z Cooling Point has grown to become Jaipur's most trusted
                    service provider. We combine expertise with genuine care for customers.
                  </p>
                </div>
              </div>
            </div>
          </FadeInSection>
        </div>
      </section>

      {/* ===== KEY METRICS ===== */}
      <section className="metrics-section" id="metrics">
        <div className="container">
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

      {/* ===== SERVICES OVERVIEW ===== */}
      <section className="section section-gradient" id="services-overview">
        <div className="container">
          <FadeInSection>
            <SectionTitle
              badge="🔧 Our Services"
              title={<>What We <span className="gradient-text">Offer</span></>}
              description="Comprehensive cooling and appliance solutions tailored to your needs. We service all major brands with expertise and care."
            />
          </FadeInSection>
          <div className="services-grid">
            {SERVICES.slice(0, 6).map((s, i) => (
              <FadeInSection key={s.id}>
                <div className="glass-card service-card">
                  <div className="service-card-icon">{s.icon}</div>
                  <h3>{s.title}</h3>
                  <p>{s.description}</p>
                </div>
              </FadeInSection>
            ))}
          </div>
          <div style={{ textAlign: 'center', marginTop: '40px' }}>
            <FadeInSection>
              <Link to="/services" className="btn btn-outline">
                View All Services →
              </Link>
            </FadeInSection>
          </div>
        </div>
      </section>

      {/* ===== MISSION & VISION ===== */}
      <section className="section section-dark" id="mission-vision">
        <div className="container">
          <FadeInSection>
            <SectionTitle
              badge="🎯 Mission & Vision"
              title="Driving Force Behind Our Success"
              description="Our mission and vision define who we are and what drives us every single day."
            />
          </FadeInSection>
          <FadeInSection>
            <div className="mv-grid">
              <div className="glass-card-dark mv-card">
                <div className="mv-icon">🚀</div>
                <h3 style={{ color: '#fff' }}>Our Mission</h3>
                <p>
                  To provide reliable, affordable, and high-quality cooling and appliance
                  services to every household and business in Jaipur. We aim to be the first
                  call for all cooling needs, delivering excellence at every touchpoint.
                </p>
              </div>
              <div className="glass-card-dark mv-card">
                <div className="mv-icon">🔭</div>
                <h3 style={{ color: '#fff' }}>Our Vision</h3>
                <p>
                  To become Rajasthan's leading cooling solutions provider by expanding our
                  services, embracing green technology, and setting new standards in customer
                  satisfaction and technical expertise in the industry.
                </p>
              </div>
            </div>
          </FadeInSection>
        </div>
      </section>

      {/* ===== CORE VALUES ===== */}
      <section className="section section-light" id="core-values">
        <div className="container">
          <FadeInSection>
            <SectionTitle
              badge="💎 Core Values"
              title={<>Values That <span className="gradient-text">Define Us</span></>}
              description="These principles guide every decision we make and every service we deliver."
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

      {/* ===== WHY CHOOSE US ===== */}
      <section className="section section-dark" id="why-choose-us">
        <div className="container">
          <FadeInSection>
            <SectionTitle
              badge="🏆 Why Choose Us"
              title="The A2Z Advantage"
              description="Experience the difference with our customer-first approach and certified expertise."
            />
          </FadeInSection>
          <FadeInSection>
            <div className="wcu-grid">
              {[
                { icon: '⚡', title: 'Quick Response', desc: 'Same-day service with rapid turnaround times. We understand the urgency of cooling breakdowns.' },
                { icon: '🔧', title: 'Expert Technicians', desc: 'Our certified professionals are trained on the latest technologies across all major brands.' },
                { icon: '💎', title: 'Genuine Parts', desc: 'We use only original spare parts backed by manufacturer warranties for lasting repairs.' },
                { icon: '💰', title: 'Best Pricing', desc: 'Competitive and transparent pricing with no hidden charges. Get value for every rupee.' },
                { icon: '🛡️', title: 'Service Warranty', desc: 'All our repairs come with a service warranty, giving you complete peace of mind.' },
                { icon: '🌟', title: '5000+ Happy Clients', desc: 'A decade of trust and thousands of satisfied customers across Jaipur speak for our quality.' },
              ].map((item, i) => (
                <div className="glass-card-dark wcu-card" key={i}>
                  <div className="wcu-icon">{item.icon}</div>
                  <div>
                    <h3>{item.title}</h3>
                    <p>{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </FadeInSection>
        </div>
      </section>

      {/* ===== CTA SECTION ===== */}
      <section className="cta-section" id="cta">
        <div className="container">
          <FadeInSection>
            <div className="cta-content">
              <h2>Need Cooling & Appliance Help?</h2>
              <p>
                Get in touch with our expert team today for quick, reliable, and affordable service.
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

      {/* ===== TESTIMONIALS PREVIEW ===== */}
      <section className="section section-ice" id="testimonials-preview">
        <div className="container">
          <FadeInSection>
            <SectionTitle
              badge="💬 Testimonials"
              title={<>What Our Clients <span className="gradient-text">Say</span></>}
              description="Don't just take our word for it — hear from our happy customers."
            />
          </FadeInSection>
          <div className="testimonials-grid">
            {TESTIMONIALS.slice(0, 3).map(t => (
              <FadeInSection key={t.id}>
                <div className="glass-card testimonial-card">
                  <div className="testimonial-stars">{'★'.repeat(t.rating)}{'☆'.repeat(5 - t.rating)}</div>
                  <p className="testimonial-text">"{t.text}"</p>
                  <div className="testimonial-author">
                    <div className="testimonial-avatar">
                      {t.name.charAt(0)}
                    </div>
                    <div>
                      <div className="testimonial-name">{t.name}</div>
                      <div className="testimonial-role">Verified Customer</div>
                    </div>
                  </div>
                </div>
              </FadeInSection>
            ))}
          </div>
          <div style={{ textAlign: 'center', marginTop: '40px' }}>
            <FadeInSection>
              <Link to="/testimonials" className="btn btn-outline">
                Read All Reviews →
              </Link>
            </FadeInSection>
          </div>
        </div>
      </section>

      {/* ===== FAQ SECTION ===== */}
      <section className="section section-light" id="faq">
        <div className="container">
          <FadeInSection>
            <SectionTitle
              badge="❓ FAQ"
              title={<>Frequently Asked <span className="gradient-text">Questions</span></>}
              description="Find answers to common questions about our services and processes."
            />
          </FadeInSection>
          <FadeInSection>
            <div className="faq-list">
              {FAQS.map((faq, i) => (
                <FaqItem key={i} question={faq.question} answer={faq.answer} />
              ))}
            </div>
          </FadeInSection>
          <div style={{ textAlign: 'center', marginTop: '40px' }}>
            <FadeInSection>
              <Link to="/contact" className="btn btn-navy btn-sm">
                Still Have Questions? Contact Us →
              </Link>
            </FadeInSection>
          </div>
        </div>
      </section>
    </>
  )
}
