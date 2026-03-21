import { Link } from 'react-router-dom'
import PageHeader from '../components/PageHeader'
import SectionTitle from '../components/SectionTitle'
import FadeInSection from '../components/FadeInSection'
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
              badge="💬 Customer Reviews"
              title={<>Real Stories from <span className="gradient-text">Real Customers</span></>}
              description="Our customer satisfaction speaks louder than words. Here's what they have to say."
            />
          </FadeInSection>
          <div className="testimonials-page-grid">
            {TESTIMONIALS.map(t => (
              <FadeInSection key={t.id}>
                <div className="glass-card testimonial-page-card">
                  <div className="testimonial-page-quote">❝</div>
                  <p className="testimonial-page-text">{t.text}</p>
                  <div className="testimonial-page-author">
                    <div className="testimonial-page-avatar">{t.name.charAt(0)}</div>
                    <div className="testimonial-page-info">
                      <div className="name">{t.name}</div>
                      <div className="stars">{'★'.repeat(t.rating)}{'☆'.repeat(5 - t.rating)}</div>
                    </div>
                  </div>
                </div>
              </FadeInSection>
            ))}
          </div>
        </div>
      </section>

      {/* ===== CTA ===== */}
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
                  Get Started →
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
