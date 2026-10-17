import { Link } from 'react-router-dom'
import { Phone, MapPin, MessageCircle } from 'lucide-react'
import { SITE_CONFIG, COURSE_CATEGORIES } from '../data/config'

const YEAR = new Date().getFullYear()

export default function Footer() {
  return (
    <footer className="footer-bg text-white" role="contentinfo">
      <div className="container-rr section-py-sm">
        {/* Top row */}
        <div className="grid gap-10" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))' }}>

          {/* Brand */}
          <div>
            <div className="mb-4">
              <img
                src="/logo-wordmark.jpg"
                alt="Race Reddys Advanced Computer Education"
                style={{ height: 60, width: 'auto', objectFit: 'contain', filter: 'brightness(0) invert(1)', opacity: 0.9 }}
                loading="lazy"
              />
            </div>
            <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: '0.9rem', lineHeight: 1.7 }}>
              Practical IT and computer skills training in Virar East, Maharashtra.
            </p>
            <div className="flex gap-3 mt-4">
              <a
                href={`${SITE_CONFIG.contact.whatsapp}?text=${SITE_CONFIG.contact.whatsappDefaultMessage}`}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  background: '#25D366',
                  color: '#fff',
                  padding: '0.4rem 0.9rem',
                  borderRadius: '6px',
                  fontSize: '0.8125rem',
                  fontWeight: 600,
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.375rem',
                }}
                aria-label="Chat on WhatsApp"
              >
                <MessageCircle size={14} />
                WhatsApp
              </a>
              <a
                href={`tel:${SITE_CONFIG.contact.phoneRaw}`}
                style={{
                  border: '1px solid rgba(255,255,255,0.3)',
                  color: '#fff',
                  padding: '0.4rem 0.9rem',
                  borderRadius: '6px',
                  fontSize: '0.8125rem',
                  fontWeight: 600,
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.375rem',
                }}
                aria-label={`Call ${SITE_CONFIG.contact.phone}`}
              >
                <Phone size={14} />
                Call Us
              </a>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h3 style={{ fontSize: '0.875rem', fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase', color: 'var(--gold)', marginBottom: '1rem' }}>
              Navigate
            </h3>
            <ul style={{ listStyle: 'none', margin: 0, padding: 0, display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
              {[
                { label: 'Home', to: '/' },
                { label: 'About the Institute', to: '/about' },
                { label: 'All Courses', to: '/courses' },
                { label: 'Admissions & Offers', to: '/admissions' },
                { label: 'Contact Us', to: '/contact' },
                { label: 'Privacy Policy', to: '/privacy' },
              ].map((l) => (
                <li key={l.to}>
                  <Link
                    to={l.to}
                    style={{ color: 'rgba(255,255,255,0.72)', fontSize: '0.9rem', transition: 'color 0.15s' }}
                    onMouseEnter={(e) => (e.currentTarget.style.color = '#fff')}
                    onMouseLeave={(e) => (e.currentTarget.style.color = 'rgba(255,255,255,0.72)')}
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Course categories */}
          <div>
            <h3 style={{ fontSize: '0.875rem', fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase', color: 'var(--gold)', marginBottom: '1rem' }}>
              Course Categories
            </h3>
            <ul style={{ listStyle: 'none', margin: 0, padding: 0, display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
              {Object.entries(COURSE_CATEGORIES).map(([key, val]) => (
                <li key={key}>
                  <Link
                    to={`/courses?cat=${key}`}
                    style={{ color: 'rgba(255,255,255,0.72)', fontSize: '0.9rem', transition: 'color 0.15s' }}
                    onMouseEnter={(e) => (e.currentTarget.style.color = '#fff')}
                    onMouseLeave={(e) => (e.currentTarget.style.color = 'rgba(255,255,255,0.72)')}
                  >
                    {val.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 style={{ fontSize: '0.875rem', fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase', color: 'var(--gold)', marginBottom: '1rem' }}>
              Visit Us
            </h3>
            <address style={{ fontStyle: 'normal', display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              <div style={{ display: 'flex', gap: '0.625rem', alignItems: 'flex-start', color: 'rgba(255,255,255,0.75)', fontSize: '0.9rem', lineHeight: 1.6 }}>
                <MapPin size={16} style={{ flexShrink: 0, marginTop: 2, color: 'var(--gold)' }} />
                <span>
                  {SITE_CONFIG.address.line1},<br />
                  {SITE_CONFIG.address.line2},<br />
                  {SITE_CONFIG.address.city}, {SITE_CONFIG.address.state} {SITE_CONFIG.address.pin}
                </span>
              </div>
              <div style={{ display: 'flex', gap: '0.625rem', alignItems: 'center', color: 'rgba(255,255,255,0.75)', fontSize: '0.9rem' }}>
                <Phone size={14} style={{ flexShrink: 0, color: 'var(--gold)' }} />
                <a
                  href={`tel:${SITE_CONFIG.contact.phoneRaw}`}
                  style={{ color: 'rgba(255,255,255,0.75)' }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = '#fff')}
                  onMouseLeave={(e) => (e.currentTarget.style.color = 'rgba(255,255,255,0.75)')}
                >
                  {SITE_CONFIG.contact.phone}
                </a>
              </div>
              <a
                href={SITE_CONFIG.address.googleMapsSearch}
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: 'var(--gold)', fontSize: '0.875rem', fontWeight: 600, marginTop: '0.25rem' }}
              >
                Get Directions →
              </a>
            </address>
          </div>
        </div>

        {/* Bottom bar */}
        <div
          className="mt-10 pt-6 flex flex-wrap gap-3 justify-between items-center"
          style={{ borderTop: '1px solid rgba(255,255,255,0.1)', fontSize: '0.8125rem', color: 'rgba(255,255,255,0.5)' }}
        >
          <p>© {YEAR} {SITE_CONFIG.fullName}. All rights reserved.</p>
          <p>202, Raut Arcade, Virar East, Maharashtra 401305</p>
        </div>
      </div>
    </footer>
  )
}
