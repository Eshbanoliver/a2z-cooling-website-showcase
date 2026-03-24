import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import SectionTitle from '../components/SectionTitle'
import FaqItem from '../components/FaqItem'
import FadeInSection from '../components/FadeInSection'
import DynamicIcon from '../components/DynamicIcon'
import { BUSINESS, TESTIMONIALS, FAQS, METRICS, VALUES } from '../data/constants'

// Slider Images
import hero1 from '../assets/hero-1.jpg'
import hero2 from '../assets/hero-2.jpg'
import hero3 from '../assets/hero-3.jpg'
import aboutImg from '../assets/about-img.jpg'
import service1 from '../assets/service-1.jpg'
import service2 from '../assets/service-2.jpg'
import service3 from '../assets/service-3.jpg'
import service4 from '../assets/service-4.jpg'
import service5 from '../assets/service-5.jpg'
import service6 from '../assets/service-6.jpg'

const HERO_SLIDES = [
  {
    id: 1,
    image: hero1,
    badge: "Smart Cooling Technology",
    title: <>Precision Engineered<br /><span className="highlight">Cooling Solutions</span></>,
    description: "Experience the next level of comfort with our smart, energy-efficient split AC and centralized cooling systems for modern homes."
  },
  {
    id: 2,
    image: hero2,
    badge: "High Performance HVAC",
    title: <>Industrial Grade<br /><span className="highlight">Reliability</span></>,
    description: "From large-scale VRV systems to commercial chiller plants — we provide heavy-duty cooling installations built for Jaipur's climate."
  },
  {
    id: 3,
    image: hero3,
    badge: "Advanced Engineering",
    title: <>Expert Service &<br /><span className="highlight">Premium Maintenance</span></>,
    description: "Our certified experts use state-of-the-art diagnostic tools to ensure your appliances run at peak efficiency year-round."
  }
]

const SERVICES_DATA = [
  {
    title: 'AC Repair & Service',
    image: service1,
    icon: 'wrench',
    description: 'Complete AC repair, gas refilling, installation, and annual maintenance services for all brands. We ensure your AC runs at peak performance.',
    badge: 'Popular'
  },
  {
    title: 'Geyser Repair & Service',
    image: service2,
    icon: 'droplets',
    description: 'Expert geyser repair, thermostat replacement, element fixing, and regular maintenance for all types of water heaters.',
    badge: 'Essential'
  },
  {
    title: 'Washing Machine Repair',
    image: service3,
    icon: 'refresh-cw',
    description: 'Professional washing machine repair and service for top-load, front-load, and semi-automatic models of all major brands.',
    badge: 'Expert'
  },
  {
    title: 'Solar AC Solutions',
    image: service4,
    icon: 'sun',
    description: 'Energy-efficient solar-powered air conditioning systems. Go green while staying cool with our eco-friendly solar AC installations.',
    badge: 'Eco-Friendly'
  },
  {
    title: 'Cruise AC Excellence',
    image: service5,
    icon: 'wind',
    description: 'Authorized sales, installation, and service for Cruise AC. Premium cooling solutions with advanced technology and energy efficiency.',
    badge: 'Premium'
  },
  {
    title: 'Voltas AC Expertise',
    image: service6,
    icon: 'zap',
    description: 'Complete Voltas AC sales and service center. Expert installation, repair, and maintenance for all Voltas air conditioner models.',
    badge: 'Certified'
  }
]

export default function Home() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const whatsappUrl = `https://wa.me/${BUSINESS.phoneClean}?text=${encodeURIComponent(BUSINESS.whatsappMessage)}`

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % HERO_SLIDES.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [])

  const slide = HERO_SLIDES[currentSlide]

  return (
    <>
      {/* ===== HERO SECTION ===== */}
      <section className="hero-section" id="hero">
        <div className="hero-slider">
          {HERO_SLIDES.map((s, index) => (
            <div 
              key={s.id} 
              className={`hero-slide ${index === currentSlide ? 'active' : ''}`}
              style={{ backgroundImage: `url(${s.image})` }}
            />
          ))}
          <div className="hero-overlay" />
        </div>

        <div className="hero-shapes">
          <div className="hero-shape hero-shape-1" />
          <div className="hero-shape hero-shape-2" />
          <div className="hero-shape hero-shape-3" />
        </div>

        <div className="container">
          <div className="hero-content">
            <span className="hero-badge">
              <DynamicIcon name="snowflake" size={16} style={{ marginRight: '8px' }} />
              {slide.badge}
            </span>
            <h1 className="hero-title">
              {slide.title}
            </h1>
            <p className="hero-description">
              {slide.description}
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
                <div className="hero-stat-number">
                  4.9<span className="accent"><DynamicIcon name="star" size={20} /></span>
                </div>
                <div className="hero-stat-label">Client Rating</div>
              </div>
            </div>

            <div className="hero-dots">
              {HERO_SLIDES.map((_, index) => (
                <button 
                  key={index} 
                  className={`hero-dot ${index === currentSlide ? 'active' : ''}`}
                  onClick={() => setCurrentSlide(index)}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ===== ABOUT PREVIEW ===== */}
      <section className="section about-preview-section" id="about-preview">
        <div className="section-blob section-blob-1" />
        <div className="section-blob section-blob-2" />
        
        <div className="container">
          <FadeInSection>
            <div className="about-preview">
              <div className="about-preview-content">
                <span className="badge badge-vibrant">
                  <DynamicIcon name="star" size={14} style={{ marginRight: '6px' }} />
                  About Us
                </span>
                <h2 className="title-huge">Your Reliable Partner for<br /><span className="gradient-text">Cooling Solutions</span></h2>
                <p className="description-lg">
                  A2Z Cooling Point has been serving Jaipur for over a decade, providing
                  top-notch cooling and appliance repair services. Our team of certified
                  technicians handles everything from AC installations to complex repairs
                  for all major brands.
                </p>
                <div className="about-features-vident">
                  {[
                    { text: 'Certified Technicians', icon: 'shield-check' },
                    { text: 'All Major Brands', icon: 'gem' },
                    { text: 'Same Day Service', icon: 'bolt' },
                    { text: 'Genuine Spare Parts', icon: 'wrench' }
                  ].map((item) => (
                    <div className="about-feature-item" key={item.text}>
                      <span className="about-feature-item-icon">
                        <DynamicIcon name={item.icon} size={20} />
                      </span>
                      <span className="about-feature-item-text">{item.text}</span>
                    </div>
                  ))}
                </div>
                <div className="about-cta-wrapper">
                  <Link to="/about" className="btn btn-primary btn-lg">
                    Learn More About Us <DynamicIcon name="arrow-right" size={18} style={{ marginLeft: '8px' }} />
                  </Link>
                </div>
              </div>
              <div className="about-preview-visual">
                <div className="about-main-image">
                  <img src={aboutImg} alt="Precision Cooling Tech" />
                  <div className="image-overlay-vibrant" />
                </div>
                <div className="about-floating-card glass-vibrant">
                  <div className="about-card-icon-huge">
                    <DynamicIcon name="snowflake" size={40} />
                  </div>
                  <h3>10+ Years of Excellence</h3>
                  <p>
                    Jaipur's most trusted cooling service provider.
                  </p>
                </div>
                <div className="about-experience-badge">
                  <span className="huge-number">10</span>
                  <span className="badge-text">Years of<br />Trust</span>
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

      {/* ===== SERVICES SECTION ===== */}
      <section className="section section-cloud" id="services">
        <div className="container">
          <div className="section-header text-center">
            <span className="badge badge-vibrant">Our Services</span>
            <h2 className="title-lg">What We <span className="gradient-text">Offer</span></h2>
            <p className="section-description mx-auto">
              Comprehensive cooling and appliance solutions tailored to your needs.
              We service all major brands with expertise and care.
            </p>
          </div>
          <div className="services-vibrant-grid">
            {SERVICES_DATA.map((s, i) => (
              <FadeInSection key={i} delay={i * 0.1}>
                <div className="service-vibrant-card">
                  <div className="service-card-visual">
                    <img src={s.image} alt={s.title} className="service-card-img" />
                    <div className="service-card-overlay" />
                    <div className="service-card-badge">{s.badge}</div>
                    <div className="service-card-icon-float">
                      <DynamicIcon name={s.icon} size={24} />
                    </div>
                  </div>
                  <div className="service-card-body">
                    <h3 className="service-card-title">{s.title}</h3>
                    <p className="service-card-text">{s.description}</p>
                    <Link to="/services" className="service-card-link">
                      Explore Service <DynamicIcon name="arrow-right" size={16} />
                    </Link>
                  </div>
                </div>
              </FadeInSection>
            ))}
          </div>
          <div className="services-cta">
            <Link to="/services" className="btn btn-primary btn-lg">
              View All Services <DynamicIcon name="arrow-right" size={18} style={{ marginLeft: '8px' }} />
            </Link>
          </div>
        </div>
      </section>

      {/* ===== MISSION & VISION ===== */}
      <section className="section section-dark mission-vision-vibrant" id="mission-vision">
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
      <section className="section core-values-vibrant" id="core-values">
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

      {/* ===== WHY CHOOSE US VIBRANT ===== */}
      <section className="section wcu-vibrant-section" id="why-choose-us">
        <div className="wcu-mesh-bg" />
        <div className="container relative z-10">
          <FadeInSection>
            <SectionTitle
              badge="Why Choose Us"
              badgeClass="badge-white"
              title={<span style={{ color: '#fff' }}>The A2Z <span className="gradient-text-light">Advantage</span></span>}
              description="Experience the difference with our customer-first approach, certified expertise, and unwavering commitment to quality."
            />
          </FadeInSection>
          <div className="wcu-vibrant-grid">
            {[
              { icon: 'bolt', title: 'Quick Response', desc: 'Same-day service with rapid turnaround times. We understand the urgency of cooling breakdowns.' },
              { icon: 'wrench', title: 'Expert Technicians', desc: 'Our certified professionals are trained on the latest technologies across all major brands.' },
              { icon: 'gem', title: 'Genuine Parts', desc: 'We use only original spare parts backed by manufacturer warranties for lasting repairs.' },
              { icon: 'rupee', title: 'Best Pricing', desc: 'Competitive and transparent pricing with no hidden charges. Get value for every rupee.' },
              { icon: 'shield-check', title: 'Service Warranty', desc: 'All our repairs come with a service warranty, giving you complete peace of mind.' },
              { icon: 'smile', title: '5000+ Happy Clients', desc: 'A decade of trust and thousands of satisfied customers across Jaipur speak for our quality.' },
            ].map((item, i) => (
              <FadeInSection key={i} delay={i * 0.1}>
                <div className={`wcu-vibrant-card wcu-color-${i + 1}`}>
                  <div className="wcu-icon-wrapper">
                    <DynamicIcon name={item.icon} size={28} />
                  </div>
                  <div className="wcu-content">
                    <h3 className="wcu-title">{item.title}</h3>
                    <p className="wcu-desc">{item.desc}</p>
                  </div>
                  <div className="wcu-card-accent" />
                </div>
              </FadeInSection>
            ))}
          </div>
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
                  <DynamicIcon name="phone" size={18} style={{ marginRight: '10px' }} />
                  Call Now
                </a>
                <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="btn btn-secondary btn-lg">
                   <DynamicIcon name="whatsapp" size={18} style={{ marginRight: '10px' }} />
                   WhatsApp Us
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
              badge="Testimonials"
              title={<>What Our Clients <span className="gradient-text">Say</span></>}
              description="Don't just take our word for it — hear from our happy customers."
            />
          </FadeInSection>
          <div className="testimonials-grid">
            {TESTIMONIALS.slice(0, 3).map(t => (
              <FadeInSection key={t.id}>
                <div className="glass-card testimonial-card">
                  <div className="testimonial-stars">
                    {[...Array(5)].map((_, i) => (
                      <DynamicIcon 
                        key={i} 
                        name="star" 
                        size={16} 
                        color={i < t.rating ? "#FFD700" : "#CBD5E1"}
                        style={{ fill: i < t.rating ? "#FFD700" : "none" }}
                      />
                    ))}
                  </div>
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
                Read All Reviews <DynamicIcon name="arrow-right" size={18} style={{ marginLeft: '8px' }} />
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
              badge="FAQ"
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
                Still Have Questions? Contact Us <DynamicIcon name="arrow-right" size={16} style={{ marginLeft: '8px' }} />
              </Link>
            </FadeInSection>
          </div>
        </div>
      </section>
    </>
  )
}
