import { Link } from 'react-router-dom'
import PageHeader from '../components/PageHeader'
import SectionTitle from '../components/SectionTitle'
import FadeInSection from '../components/FadeInSection'
import DynamicIcon from '../components/DynamicIcon'
import { TESTIMONIALS } from '../data/constants'

export default function Testimonials() {
  return (
    <>
      <PageHeader
        title="Testimonials"
        subtitle="Hear what our valued customers have to say about our services"
      />

      <section className="section section-ice" id="all-testimonials">
        <div className="container">
          <FadeInSection>
            <SectionTitle
              badge="Reviews"
              title={<>Real Stories from <span className="gradient-text">Real Customers</span></>}
              description="Our customer satisfaction speaks louder than words. Here's what they have to say."
            />
          </FadeInSection>
          <div className="testimonials-page-grid">
            {TESTIMONIALS.map(t => (
              <FadeInSection key={t.id}>
                <div className="glass-card testimonial-page-card">
                  <div className="testimonial-page-quote">
                    <DynamicIcon name="quote" size={32} color="rgba(123, 184, 255, 0.3)" />
                  </div>
                  <p className="testimonial-page-text">{t.text}</p>
                  <div className="testimonial-page-author">
                    <div className="testimonial-page-avatar">{t.name.charAt(0)}</div>
                    <div className="testimonial-page-info">
                      <div className="name">{t.name}</div>
                      <div className="stars">
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
                    </div>
                  </div>
                </div>
              </FadeInSection>
            ))}
          </div>
        </div>
      </section>

      <section className="cta-section" id="testimonials-cta">
        <div className="container">
          <FadeInSection>
            <div className="cta-content">
              <h2>Join Our Growing Family of Happy Customers</h2>
              <p>
                Experience premium service and become our next success story.
              </p>
              <div className="cta-buttons">
                <Link to="/contact" className="btn btn-primary btn-lg">
                  Get Started <DynamicIcon name="arrow-right" size={18} style={{ marginLeft: '8px' }} />
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
