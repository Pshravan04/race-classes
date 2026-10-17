import { Link } from 'react-router-dom'
import { ArrowRight, CheckCircle, AlertCircle } from 'lucide-react'
import SEO from '../components/SEO'
import EnquiryForm from '../components/EnquiryForm'
import { useReveal } from '../hooks/useReveal'
import { ACTIVE_OFFER, COURSES } from '../data/config'

function Reveal({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
  const { ref, visible } = useReveal()
  return (
    <div ref={ref} className={`reveal ${visible ? 'visible' : ''}`} style={{ transitionDelay: `${delay}ms` }}>
      {children}
    </div>
  )
}

export default function Admissions() {
  return (
    <>
      <SEO
        title="Admissions & Offers"
        description="Admissions open at Race Reddys Advanced Computer Education, Virar East. Learn about current offers including 50% discount and free Basic Computer Course with eligible career course enrolment."
        canonical="/admissions"
      />

      {/* Hero */}
      <section style={{ background: 'var(--navy)', padding: 'clamp(2.5rem, 6vw, 4.5rem) 0' }}>
        <div className="container-rr">
          <span className="section-chip" style={{ background: 'rgba(217,174,82,0.12)', color: 'var(--gold)', borderColor: 'rgba(217,174,82,0.3)' }}>
            Admissions Open
          </span>
          <h1 style={{ color: '#fff', fontSize: 'clamp(2rem, 5vw, 3rem)', marginTop: '0.75rem', marginBottom: '0.75rem' }}>
            Join Race Reddys
          </h1>
          <p style={{ color: 'rgba(255,255,255,0.75)', maxWidth: 520, lineHeight: 1.7 }}>
            Enrol in a practical computer or IT course. Limited seats are available per batch — enquire early to secure your place.
          </p>
        </div>
      </section>

      {/* Offer Section */}
      {ACTIVE_OFFER.active && (
        <section style={{ background: 'linear-gradient(135deg, #0A2358 0%, var(--royal) 100%)' }} className="section-py-sm">
          <div className="container-rr">
            <Reveal>
              <div style={{
                background: 'rgba(255,255,255,0.06)',
                border: '1.5px solid rgba(217,174,82,0.4)',
                borderRadius: 16,
                padding: 'clamp(1.5rem, 4vw, 2.5rem)',
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
                gap: '2rem',
                alignItems: 'center',
              }}>
                <div>
                  <div style={{ display: 'flex', gap: '0.75rem', alignItems: 'center', marginBottom: '0.875rem', flexWrap: 'wrap' }}>
                    <span style={{
                      background: 'var(--gold)', color: 'var(--navy)',
                      fontWeight: 800, padding: '0.25rem 1rem',
                      borderRadius: 999, fontSize: '1rem', letterSpacing: '-0.01em',
                    }}>
                      {ACTIVE_OFFER.badge}
                    </span>
                    <h2 style={{ color: '#fff', fontSize: 'clamp(1.25rem, 3vw, 1.75rem)', fontWeight: 800, margin: 0 }}>
                      {ACTIVE_OFFER.headline}
                    </h2>
                  </div>

                  <p style={{ color: 'rgba(255,255,255,0.87)', fontSize: '1.0625rem', lineHeight: 1.7, marginBottom: '1rem' }}>
                    {ACTIVE_OFFER.tagline}
                  </p>

                  <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.625rem', marginBottom: '1.25rem' }}>
                    {[
                      '50% discount on selected courses',
                      'Free Basic Computer Course with eligible career course enrolment',
                      'Limited seats per batch — early enquiry recommended',
                      'Placement assistance for career programme learners',
                    ].map((point, i) => (
                      <li key={i} style={{ display: 'flex', gap: '0.5rem', alignItems: 'flex-start', color: 'rgba(255,255,255,0.82)', fontSize: '0.9375rem' }}>
                        <CheckCircle size={16} style={{ color: 'var(--gold)', marginTop: 3, flexShrink: 0 }} />
                        {point}
                      </li>
                    ))}
                  </ul>

                  <div style={{ background: 'rgba(255,255,255,0.08)', borderRadius: 8, padding: '0.875rem 1rem', display: 'flex', gap: '0.5rem', alignItems: 'flex-start' }}>
                    <AlertCircle size={16} style={{ color: 'var(--gold)', flexShrink: 0, marginTop: 2 }} />
                    <p style={{ color: 'rgba(255,255,255,0.65)', fontSize: '0.85rem', lineHeight: 1.6 }}>
                      <strong style={{ color: 'rgba(255,255,255,0.85)' }}>Important:</strong> {ACTIVE_OFFER.disclaimer}
                    </p>
                  </div>
                </div>

                <div>
                  <div style={{ background: '#fff', borderRadius: 12, padding: '1.75rem' }}>
                    <h3 style={{ fontSize: '1.125rem', fontWeight: 700, color: 'var(--navy)', marginBottom: '1.25rem' }}>
                      Enquire About the Offer
                    </h3>
                    <EnquiryForm compact />
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </section>
      )}

      {/* How it works */}
      <section style={{ background: 'var(--off-white)' }} className="section-py" aria-labelledby="steps-heading">
        <div className="container-rr">
          <Reveal>
            <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
              <span className="section-chip">Admission Process</span>
              <h2 id="steps-heading" style={{ fontSize: 'clamp(1.625rem, 3.5vw, 2.25rem)', color: 'var(--navy)', marginTop: '0.75rem' }}>
                Three Simple Steps to Enrol
              </h2>
            </div>
          </Reveal>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '1.5rem' }}>
            {[
              {
                num: '01', title: 'Browse and Choose',
                desc: 'Explore the course catalogue and select the programme that matches your goals and skill level.',
              },
              {
                num: '02', title: 'Contact and Confirm',
                desc: 'Call or WhatsApp us to discuss the course, check batch timings, confirm current offers, and discuss fees.',
              },
              {
                num: '03', title: 'Visit and Enrol',
                desc: 'Visit our centre at Raut Arcade, Virar East to complete your enrolment and begin your learning journey.',
              },
            ].map((step, i) => (
              <Reveal key={i} delay={i * 100}>
                <div style={{ background: '#fff', border: '1px solid var(--border)', borderRadius: 12, padding: '2rem 1.5rem', textAlign: 'center' }}>
                  <div style={{ width: 52, height: 52, borderRadius: '50%', background: 'var(--navy)', color: 'var(--gold)', fontWeight: 800, fontSize: '1.125rem', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 1.25rem' }}>
                    {step.num}
                  </div>
                  <h3 style={{ fontSize: '1.0625rem', fontWeight: 700, color: 'var(--navy)', marginBottom: '0.625rem' }}>{step.title}</h3>
                  <p style={{ color: 'var(--muted)', fontSize: '0.9rem', lineHeight: 1.7 }}>{step.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal>
            <div style={{ textAlign: 'center', marginTop: '2.5rem' }}>
              <p style={{ color: 'var(--muted)', fontSize: '0.9rem', marginBottom: '1.25rem', fontStyle: 'italic' }}>
                ℹ️ There is no online payment system. Enrolment is completed in person at the institute.
              </p>
              <div style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap', gap: '0.875rem' }}>
                <Link to="/courses" className="btn-outline-navy">
                  Browse Courses <ArrowRight size={16} />
                </Link>
                <Link to="/contact" className="btn-primary">
                  Enquire Now <ArrowRight size={16} />
                </Link>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Career courses highlight */}
      <section style={{ background: '#fff' }} className="section-py">
        <div className="container-rr">
          <Reveal>
            <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
              <span className="section-chip">Career Courses</span>
              <h2 style={{ fontSize: 'clamp(1.625rem, 3.5vw, 2.25rem)', color: 'var(--navy)', marginTop: '0.75rem' }}>
                Our Career-Oriented Programmes
              </h2>
              <p style={{ color: 'var(--muted)', maxWidth: 480, margin: '0.75rem auto 0', lineHeight: 1.7, fontSize: '0.9375rem' }}>
                These longer programmes are designed for learners seeking to build a career in technology. Contact us for current batch and fee details.
              </p>
            </div>
          </Reveal>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))', gap: '0.875rem' }}>
            {COURSES.filter(c => ['software-web', 'ai-data', 'digital-marketing', 'cyber-networking', 'design-creative'].includes(c.category)).map((c, i) => (
              <Reveal key={c.id} delay={i * 40}>
                <Link
                  to={`/courses/${c.id}`}
                  style={{
                    background: 'var(--off-white)',
                    border: '1px solid var(--border)',
                    borderRadius: 10,
                    padding: '1rem 1.125rem',
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    textDecoration: 'none',
                    color: 'var(--navy)',
                    fontWeight: 600,
                    fontSize: '0.9rem',
                    transition: 'background 0.15s, border-color 0.15s',
                  }}
                >
                  {c.name}
                  <ArrowRight size={14} style={{ color: 'var(--royal)', flexShrink: 0 }} />
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
