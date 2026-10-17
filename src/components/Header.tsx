import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu, X, Phone } from 'lucide-react'
import { SITE_CONFIG, ACTIVE_OFFER } from '../data/config'

const NAV_LINKS = [
  { label: 'Home', to: '/' },
  { label: 'About', to: '/about' },
  { label: 'Courses', to: '/courses' },
  { label: 'Admissions', to: '/admissions' },
  { label: 'Contact', to: '/contact' },
]

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 24)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    setMenuOpen(false)
  }, [location.pathname])

  const isActive = (to: string) =>
    to === '/' ? location.pathname === '/' : location.pathname.startsWith(to)

  return (
    <>
      {/* Admission Announcement Strip */}
      {ACTIVE_OFFER.active && (
        <div className="offer-banner" role="banner" aria-label="Current offer">
          🎓 <strong>{ACTIVE_OFFER.headline}</strong>
          <span>— {ACTIVE_OFFER.badge}: {ACTIVE_OFFER.tagline}</span>
          <Link
            to="/admissions"
            style={{
              marginLeft: '0.75rem',
              color: 'var(--gold)',
              fontWeight: 700,
              textDecoration: 'underline',
              fontSize: '0.8125rem',
            }}
          >
            Learn more
          </Link>
        </div>
      )}

      {/* Navigation */}
      <header
        className={`sticky top-0 z-50 bg-white transition-shadow duration-200 ${
          scrolled ? 'shadow-md' : 'border-b border-gray-100'
        }`}
        role="banner"
      >
        <div className="container-rr">
          <nav
            className="flex items-center justify-between gap-4 py-3"
            aria-label="Primary navigation"
          >
            {/* Logo */}
            <Link
              to="/"
              className="flex items-center gap-3 flex-shrink-0"
              aria-label="Race Reddys — Home"
            >
              <img
                src="/logo-wordmark.jpg"
                alt="Race Reddys Advanced Computer Education"
                style={{ height: 52, width: 'auto', objectFit: 'contain' }}
                loading="eager"
              />
            </Link>

            {/* Desktop nav links */}
            <div className="hidden md:flex items-center gap-6" role="list">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  role="listitem"
                  className={`nav-link ${isActive(link.to) ? 'active' : ''}`}
                  aria-current={isActive(link.to) ? 'page' : undefined}
                >
                  {link.label}
                </Link>
              ))}
            </div>

            {/* Desktop CTA + Call */}
            <div className="hidden md:flex items-center gap-3">
              <a
                href={`tel:${SITE_CONFIG.contact.phoneRaw}`}
                className="flex items-center gap-1.5 text-sm font-medium"
                style={{ color: 'var(--muted)' }}
                aria-label={`Call ${SITE_CONFIG.contact.phone}`}
              >
                <Phone size={14} />
                <span>{SITE_CONFIG.contact.phone}</span>
              </a>
              <Link to="/contact" className="btn-primary" style={{ padding: '0.55rem 1.2rem', fontSize: '0.875rem' }}>
                Enquire Now
              </Link>
            </div>

            {/* Mobile: Call + Hamburger */}
            <div className="flex md:hidden items-center gap-2">
              <a
                href={`tel:${SITE_CONFIG.contact.phoneRaw}`}
                style={{ color: 'var(--royal)' }}
                aria-label={`Call ${SITE_CONFIG.contact.phone}`}
              >
                <Phone size={20} />
              </a>
              <button
                onClick={() => setMenuOpen((v) => !v)}
                aria-expanded={menuOpen}
                aria-controls="mobile-menu"
                aria-label={menuOpen ? 'Close menu' : 'Open menu'}
                style={{
                  background: 'none',
                  border: 'none',
                  cursor: 'pointer',
                  padding: '0.25rem',
                  color: 'var(--navy)',
                  display: 'flex',
                  alignItems: 'center',
                }}
              >
                {menuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </nav>
        </div>

        {/* Mobile Menu */}
        <div
          id="mobile-menu"
          className={`mobile-menu md:hidden bg-white border-t`}
          style={{ borderColor: 'var(--border)' }}
          aria-hidden={!menuOpen}
        >
          <div className="container-rr py-3 flex flex-col gap-1">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className={`block py-2.5 px-3 rounded-lg text-sm font-medium transition-colors ${
                  isActive(link.to)
                    ? 'bg-blue-50 text-blue-800 font-semibold'
                    : 'text-gray-700 hover:bg-gray-50'
                }`}
                aria-current={isActive(link.to) ? 'page' : undefined}
                tabIndex={menuOpen ? 0 : -1}
              >
                {link.label}
              </Link>
            ))}
            <div className="mt-2 pt-2" style={{ borderTop: '1px solid var(--border)' }}>
              <Link
                to="/contact"
                className="btn-primary w-full justify-center"
                tabIndex={menuOpen ? 0 : -1}
              >
                Enquire Now
              </Link>
            </div>
          </div>
        </div>
      </header>
    </>
  )
}
