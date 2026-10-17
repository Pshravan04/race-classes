import { Link } from 'react-router-dom'
import { MapPin, Phone, ArrowRight, CheckCircle } from 'lucide-react'
import SEO from '../components/SEO'
import { useReveal } from '../hooks/useReveal'
import { SITE_CONFIG } from '../data/config'

function Reveal({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
  const { ref, visible } = useReveal()
  return (
    <div ref={ref} className={`reveal ${visible ? 'visible' : ''}`} style={{ transitionDelay: `${delay}ms` }}>
      {children}
    </div>
  )
}

export default function About() {
  return (
    <>
      <SEO
        title="About the Institute"
        description="Learn about Race Reddys Advanced Computer Education in Virar East — our mission, approach to practical IT training, and commitment to student growth."
        canonical="/about"
      />

      {/* Page Hero */}
      <section style={{ background: 'var(--navy)', padding: 'clamp(2.5rem, 6vw, 4.5rem) 0' }}>
        <div className="container-rr">
          <span className="section-chip" style={{ background: 'rgba(217,174,82,0.12)', color: 'var(--gold)', borderColor: 'rgba(217,174,82,0.3)' }}>
            About the Institute
          </span>
          <h1 style={{ color: '#fff', fontSize: 'clamp(2rem, 5vw, 3rem)', marginTop: '0.75rem', marginBottom: '0.75rem' }}>
            Race Reddys Advanced Computer Education
          </h1>
          <p style={{ color: 'rgba(255,255,255,0.75)', maxWidth: 560, lineHeight: 1.7, fontSize: '1.0625rem' }}>
            A dedicated computer training centre in the heart of Virar East, committed to helping every learner build practical, career-ready skills.
          </p>
        </div>
      </section>

      {/* About content */}
      <section style={{ background: '#fff' }} className="section-py">
        <div className="container-rr">
          <Reveal>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '3rem', alignItems: 'center' }}>
              <div>
                <span className="section-chip">Who We Are</span>
                <h2 style={{ fontSize: 'clamp(1.625rem, 3.5vw, 2.25rem)', color: 'var(--navy)', marginTop: '0.75rem', marginBottom: '1rem' }}>
                  Training the Next Generation of IT Professionals
                </h2>
                <div className="divider" />
                <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', marginTop: '1rem', color: 'var(--charcoal)', lineHeight: 1.8 }}>
                  <p>
                    Race Reddys Advanced Computer Education is a professional computer training institute located at Raut Arcade, near Virar East Railway Station. We serve students, working professionals, homemakers, and job seekers across the Virar region with practical, skills-first computer education.
                  </p>
                  <p>
                    Our courses range from introductory computer literacy to advanced career programmes in Software Development, AI & Machine Learning, Digital Marketing, Cyber Security, and more. We believe that the best way to learn technology is to use it — every session involves direct, hands-on work.
                  </p>
                  <p>
                    We are committed to making quality IT education accessible to the community of Virar East and the surrounding areas, with practical training, career guidance, and placement support.
                  </p>
                </div>
              </div>

              <div style={{ borderRadius: 14, overflow: 'hidden' }}>
                <img
                  src="/instructor-teaching.jpg"
                  alt="An instructor teaching software concepts at Race Reddys computer education centre"
                  style={{ width: '100%', height: 420, objectFit: 'cover' }}
                  loading="lazy"
                />
                <p style={{ fontSize: '0.75rem', color: 'var(--muted)', padding: '0.5rem', background: 'var(--off-white)', textAlign: 'center', fontStyle: 'italic' }}>
                  Illustrative photo representing our teaching environment.
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Our approach */}
      <section style={{ background: 'var(--off-white)' }} className="section-py">
        <div className="container-rr">
          <Reveal>
            <div style={{ textAlign: 'center', marginBottom: '2.5rem' }}>
              <span className="section-chip">Our Approach</span>
              <h2 style={{ fontSize: 'clamp(1.625rem, 3.5vw, 2.25rem)', color: 'var(--navy)', marginTop: '0.75rem' }}>
                What Makes Our Training Different
              </h2>
            </div>
          </Reveal>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))', gap: '1.25rem' }}>
            {[
              { title: 'Practical First', desc: 'Every course is structured around hands-on practice. Students work on computers throughout the programme — not just in designated "lab sessions".' },
              { title: 'Real-World Tools', desc: 'We teach industry-standard software and tools used in actual workplaces — Tally, MS Office, Adobe Creative Suite, VS Code, and more.' },
              { title: 'Structured Learning', desc: 'Courses are carefully sequenced so you build confidence step by step, from basics to advanced applications.' },
              { title: 'Beginner-Friendly', desc: 'Our Basic Computer course starts from the very beginning. You don\'t need any prior experience to join.' },
              { title: 'Career Guidance', desc: 'We provide support and guidance to help students understand career paths and opportunities in their chosen field.' },
              { title: 'Accessible Location', desc: 'Just steps from Virar East Railway Station — easily reachable by local train, bus, or auto.' },
            ].map((item, i) => (
              <Reveal key={i} delay={i * 60}>
                <div className="card" style={{ padding: '1.5rem' }}>
                  <div style={{ display: 'flex', gap: '0.5rem', alignItems: 'flex-start', marginBottom: '0.625rem' }}>
                    <CheckCircle size={18} style={{ color: 'var(--royal)', marginTop: 2, flexShrink: 0 }} />
                    <h3 style={{ fontSize: '1rem', fontWeight: 700, color: 'var(--navy)' }}>{item.title}</h3>
                  </div>
                  <p style={{ fontSize: '0.875rem', color: 'var(--muted)', lineHeight: 1.7, paddingLeft: '1.75rem' }}>{item.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Location */}
      <section style={{ background: '#fff' }} className="section-py">
        <div className="container-rr">
          <Reveal>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '3rem', alignItems: 'start' }}>
              <div>
                <span className="section-chip">Location</span>
                <h2 style={{ fontSize: 'clamp(1.625rem, 3.5vw, 2.25rem)', color: 'var(--navy)', marginTop: '0.75rem', marginBottom: '1.25rem' }}>
                  Conveniently Located in Virar East
                </h2>
                <address style={{ fontStyle: 'normal', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                  <div style={{ display: 'flex', gap: '0.75rem', alignItems: 'flex-start', color: 'var(--charcoal)', lineHeight: 1.7 }}>
                    <MapPin size={18} style={{ color: 'var(--royal)', marginTop: 2, flexShrink: 0 }} />
                    <div>
                      <strong style={{ display: 'block', marginBottom: '0.2rem' }}>{SITE_CONFIG.fullName}</strong>
                      {SITE_CONFIG.address.line1},<br />
                      {SITE_CONFIG.address.line2},<br />
                      {SITE_CONFIG.address.city}, {SITE_CONFIG.address.state} {SITE_CONFIG.address.pin}
                    </div>
                  </div>
                  <div style={{ display: 'flex', gap: '0.75rem', alignItems: 'center', color: 'var(--charcoal)' }}>
                    <Phone size={16} style={{ color: 'var(--royal)', flexShrink: 0 }} />
                    <a href={`tel:${SITE_CONFIG.contact.phoneRaw}`} style={{ fontWeight: 600 }}>
                      {SITE_CONFIG.contact.phone}
                    </a>
                  </div>
                </address>
                <a
                  href={SITE_CONFIG.address.googleMapsSearch}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary"
                  style={{ marginTop: '1.5rem', display: 'inline-flex' }}
                >
                  <MapPin size={15} />
                  Get Directions on Google Maps
                </a>
              </div>
              <div>
                <div style={{ background: 'var(--off-white)', border: '1px solid var(--border)', borderRadius: 12, padding: '1.5rem' }}>
                  <h3 style={{ color: 'var(--navy)', marginBottom: '1rem', fontSize: '1.0625rem' }}>How to Reach Us</h3>
                  <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.75rem', color: 'var(--charcoal)', fontSize: '0.9375rem', lineHeight: 1.6 }}>
                    <li>🚂 <strong>By Train:</strong> Virar East station (Western Railway) — 2-minute walk</li>
                    <li>🚌 <strong>By Bus:</strong> Virar East bus stand — nearby</li>
                    <li>🛺 <strong>By Auto:</strong> Ask for Raut Arcade, near Subway, Virar East</li>
                  </ul>
                  <div style={{ marginTop: '1.25rem', paddingTop: '1.25rem', borderTop: '1px solid var(--border)' }}>
                    <p style={{ color: 'var(--muted)', fontSize: '0.875rem', marginBottom: '0.5rem' }}>Landmark: Opposite Subway restaurant</p>
                    <p style={{ color: 'var(--muted)', fontSize: '0.875rem' }}>Building: Raut Arcade, 2nd Floor, Room 202</p>
                  </div>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* CTA */}
      <section style={{ background: 'linear-gradient(135deg, var(--navy) 0%, var(--royal) 100%)', padding: 'clamp(2.5rem, 5vw, 4rem) 0' }}>
        <div className="container-rr" style={{ textAlign: 'center' }}>
          <h2 style={{ color: '#fff', fontSize: 'clamp(1.625rem, 3.5vw, 2.25rem)', marginBottom: '1rem' }}>
            Ready to Start Learning?
          </h2>
          <p style={{ color: 'rgba(255,255,255,0.8)', maxWidth: 480, margin: '0 auto 2rem', lineHeight: 1.7 }}>
            Explore our courses and enquire about the current batch schedule and admission offers.
          </p>
          <div style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap', gap: '0.875rem' }}>
            <Link to="/courses" className="btn-primary">Explore Courses <ArrowRight size={16} /></Link>
            <Link to="/contact" className="btn-outline">Enquire About Admissions</Link>
          </div>
        </div>
      </section>
    </>
  )
}
