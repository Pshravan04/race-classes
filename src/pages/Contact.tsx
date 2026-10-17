import { MapPin, Phone, MessageCircle, Clock, ArrowRight } from 'lucide-react'
import SEO from '../components/SEO'
import EnquiryForm from '../components/EnquiryForm'
import { useReveal } from '../hooks/useReveal'
import { SITE_CONFIG } from '../data/config'

function Reveal({ children }: { children: React.ReactNode }) {
  const { ref, visible } = useReveal()
  return <div ref={ref} className={`reveal ${visible ? 'visible' : ''}`}>{children}</div>
}

export default function Contact() {
  return (
    <>
      <SEO
        title="Contact Us"
        description="Contact Race Reddys Advanced Computer Education in Virar East. Call or WhatsApp +91 97943 23963. Located at 202 Raut Arcade, near Virar East Railway Station."
        canonical="/contact"
      />

      {/* Hero */}
      <section style={{ background: 'var(--navy)', padding: 'clamp(2.5rem, 6vw, 4.5rem) 0' }}>
        <div className="container-rr">
          <span className="section-chip" style={{ background: 'rgba(217,174,82,0.12)', color: 'var(--gold)', borderColor: 'rgba(217,174,82,0.3)' }}>
            Get in Touch
          </span>
          <h1 style={{ color: '#fff', fontSize: 'clamp(2rem, 5vw, 3rem)', marginTop: '0.75rem', marginBottom: '0.75rem' }}>
            Contact Race Reddys
          </h1>
          <p style={{ color: 'rgba(255,255,255,0.75)', maxWidth: 480, lineHeight: 1.7 }}>
            Have questions about courses, admissions, or our current offers? We are here to help. Reach out by phone, WhatsApp, or visit us in person.
          </p>
        </div>
      </section>

      {/* Contact content */}
      <section style={{ background: 'var(--off-white)' }} className="section-py">
        <div className="container-rr">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2.5rem', alignItems: 'start' }}>

            {/* Contact info */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>

              {/* Phone */}
              <Reveal>
                <div style={{ background: '#fff', border: '1px solid var(--border)', borderRadius: 12, padding: '1.5rem' }}>
                  <div style={{ display: 'flex', gap: '0.875rem', alignItems: 'center', marginBottom: '0.75rem' }}>
                    <div style={{ width: 44, height: 44, background: 'rgba(21,86,166,0.08)', borderRadius: 10, display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--royal)' }}>
                      <Phone size={20} />
                    </div>
                    <h2 style={{ fontSize: '1.0625rem', fontWeight: 700, color: 'var(--navy)' }}>Call or WhatsApp</h2>
                  </div>
                  <a
                    href={`tel:${SITE_CONFIG.contact.phoneRaw}`}
                    style={{ display: 'block', fontSize: '1.375rem', fontWeight: 800, color: 'var(--navy)', marginBottom: '0.375rem', textDecoration: 'none' }}
                  >
                    {SITE_CONFIG.contact.phone}
                  </a>
                  <p style={{ color: 'var(--muted)', fontSize: '0.875rem', marginBottom: '1rem' }}>
                    Available during institute hours. WhatsApp preferred for quick responses.
                  </p>
                  <div style={{ display: 'flex', gap: '0.625rem', flexWrap: 'wrap' }}>
                    <a
                      href={`tel:${SITE_CONFIG.contact.phoneRaw}`}
                      className="btn-primary"
                      style={{ padding: '0.55rem 1rem', fontSize: '0.875rem' }}
                    >
                      <Phone size={14} />
                      Click to Call
                    </a>
                    <a
                      href={`${SITE_CONFIG.contact.whatsapp}?text=${SITE_CONFIG.contact.whatsappDefaultMessage}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{
                        background: '#25D366', color: '#fff',
                        padding: '0.55rem 1rem', borderRadius: 6, fontSize: '0.875rem', fontWeight: 700,
                        display: 'inline-flex', alignItems: 'center', gap: '0.4rem',
                        textDecoration: 'none',
                      }}
                    >
                      <MessageCircle size={14} />
                      WhatsApp
                    </a>
                  </div>
                </div>
              </Reveal>

              {/* Address */}
              <Reveal>
                <div style={{ background: '#fff', border: '1px solid var(--border)', borderRadius: 12, padding: '1.5rem' }}>
                  <div style={{ display: 'flex', gap: '0.875rem', alignItems: 'center', marginBottom: '0.75rem' }}>
                    <div style={{ width: 44, height: 44, background: 'rgba(21,86,166,0.08)', borderRadius: 10, display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--royal)' }}>
                      <MapPin size={20} />
                    </div>
                    <h2 style={{ fontSize: '1.0625rem', fontWeight: 700, color: 'var(--navy)' }}>Visit Us</h2>
                  </div>
                  <address style={{ fontStyle: 'normal', color: 'var(--charcoal)', lineHeight: 1.75, marginBottom: '1rem' }}>
                    <strong>{SITE_CONFIG.fullName}</strong><br />
                    {SITE_CONFIG.address.line1},<br />
                    {SITE_CONFIG.address.line2},<br />
                    {SITE_CONFIG.address.city}, {SITE_CONFIG.address.state} — {SITE_CONFIG.address.pin}
                  </address>
                  <a
                    href={SITE_CONFIG.address.googleMapsSearch}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-outline-navy"
                    style={{ padding: '0.5rem 1rem', fontSize: '0.875rem', display: 'inline-flex' }}
                  >
                    <MapPin size={14} />
                    Get Directions <ArrowRight size={14} />
                  </a>
                </div>
              </Reveal>

              {/* Hours note */}
              <Reveal>
                <div style={{ background: 'rgba(21,86,166,0.05)', border: '1px solid rgba(21,86,166,0.15)', borderRadius: 10, padding: '1.125rem', display: 'flex', gap: '0.75rem', alignItems: 'flex-start' }}>
                  <Clock size={18} style={{ color: 'var(--royal)', flexShrink: 0, marginTop: 2 }} />
                  <div>
                    <h3 style={{ fontSize: '0.9375rem', fontWeight: 700, color: 'var(--navy)', marginBottom: '0.25rem' }}>Hours of Operation</h3>
                    <p style={{ color: 'var(--muted)', fontSize: '0.875rem', lineHeight: 1.6 }}>
                      Contact the institute directly to confirm current office and batch hours. Hours may vary by season or batch schedule.
                    </p>
                  </div>
                </div>
              </Reveal>

              {/* Directions */}
              <Reveal>
                <div style={{ background: '#fff', border: '1px solid var(--border)', borderRadius: 10, padding: '1.25rem' }}>
                  <h3 style={{ fontSize: '0.9375rem', fontWeight: 700, color: 'var(--navy)', marginBottom: '0.875rem' }}>How to Reach Us</h3>
                  <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.625rem', fontSize: '0.875rem', color: 'var(--charcoal)', lineHeight: 1.6 }}>
                    <li>🚂 <strong>Train:</strong> Virar station, East exit — 2-minute walk to Raut Arcade</li>
                    <li>🛺 <strong>Auto:</strong> Ask for Raut Arcade, near Subway, Virar East</li>
                    <li>📍 <strong>Landmark:</strong> Opposite Subway restaurant, 2nd Floor</li>
                  </ul>
                </div>
              </Reveal>
            </div>

            {/* Enquiry form */}
            <Reveal>
              <div style={{ background: '#fff', border: '1px solid var(--border)', borderRadius: 14, padding: 'clamp(1.5rem, 4vw, 2rem)' }}>
                <h2 style={{ fontSize: '1.25rem', fontWeight: 700, color: 'var(--navy)', marginBottom: '0.375rem' }}>
                  Send an Enquiry
                </h2>
                <p style={{ color: 'var(--muted)', fontSize: '0.875rem', marginBottom: '1.5rem', lineHeight: 1.6 }}>
                  Share your details and we'll get back to you via WhatsApp with course and batch information.
                </p>
                <EnquiryForm />
              </div>
            </Reveal>
          </div>
        </div>
      </section>
    </>
  )
}
