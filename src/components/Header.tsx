import { useState, useEffect } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { Menu, X, Phone, ArrowUpRight } from 'lucide-react'
import { SITE_CONFIG } from '../data/config'

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const location = useLocation()
  const navigate = useNavigate()

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    setMenuOpen(false)
  }, [location.pathname])

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string, routeFallback: string) => {
    if (location.pathname === '/') {
      e.preventDefault()
      const element = document.getElementById(targetId)
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' })
      }
    } else {
      e.preventDefault()
      navigate(routeFallback)
    }
  }

  return (
    <>
      {/* ─── Announcement Bar (Exact Stitch Spec) ─── */}
      <aside aria-label="Announcement" className="bg-[#0b1728] text-white py-2 px-4 text-xs font-medium text-center border-b border-slate-800">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-center gap-2 sm:gap-3">
          <span className="inline-flex items-center px-2 py-0.5 rounded-full text-[10px] font-bold bg-[#B7EB38] text-black">
            ADMISSIONS OPEN
          </span>
          <span className="text-slate-200">
            Summer &amp; Weekend Batches Starting at Virar East Branch • Avail{' '}
            <strong className="text-white font-bold">50% Concession</strong> for early registrations!
          </span>
          <a
            href="#enquiry-section"
            onClick={(e) => handleNavClick(e, 'enquiry-section', '/admissions')}
            className="underline text-[#B7EB38] hover:text-white font-semibold ml-1 cursor-pointer transition-colors"
          >
            Reserve Seat ↗
          </a>
        </div>
      </aside>

      {/* ─── Floating Navbar (Exact Stitch Spec) ─── */}
      <div className={`w-full px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto pt-3 sm:pt-4 z-50 transition-all ${
        scrolled ? 'sticky top-3' : 'relative'
      }`}>
        <header className="bg-white/95 backdrop-blur-md rounded-full border border-gray-200/90 shadow-sm px-4 sm:px-6 py-2.5 flex items-center justify-between transition-all">
          
          {/* Brand Logo Container */}
          <Link to="/" className="flex items-center gap-3 group shrink-0" aria-label="Race Reddys Home">
            <img
              src="/stitch-logo.png"
              alt="Race Reddys Advanced Computer Education Monogram"
              className="h-10 w-10 sm:h-11 sm:w-11 object-contain rounded-full shadow-inner border border-slate-100"
            />
            <div className="leading-tight">
              <span className="block font-black text-sm sm:text-base tracking-tight text-[#0F1E36] group-hover:text-[#1556A6] transition-colors">
                RACE REDDYS
              </span>
              <span className="text-[10px] sm:text-[11px] font-semibold text-gray-500 uppercase tracking-wider block">
                Advanced Computer Education
              </span>
            </div>
          </Link>

          {/* Center Navigation Pills */}
          <nav className="hidden lg:flex items-center gap-1 text-sm font-medium text-gray-700" aria-label="Main Navigation">
            <Link
              to="/"
              className={`px-4 py-1.5 rounded-full font-semibold transition-all ${
                location.pathname === '/'
                  ? 'bg-[#B7EB38] text-black shadow-xs'
                  : 'hover:bg-gray-100 hover:text-black'
              }`}
            >
              Home
            </Link>

            <a
              href="#about"
              onClick={(e) => handleNavClick(e, 'about', '/about')}
              className={`px-3.5 py-1.5 rounded-full transition-colors ${
                location.pathname === '/about'
                  ? 'bg-[#B7EB38] text-black font-semibold'
                  : 'hover:bg-gray-100 hover:text-black'
              }`}
            >
              About Us
            </a>

            <a
              href="#courses"
              onClick={(e) => handleNavClick(e, 'courses', '/courses')}
              className={`px-3.5 py-1.5 rounded-full transition-colors ${
                location.pathname.startsWith('/courses')
                  ? 'bg-[#B7EB38] text-black font-semibold'
                  : 'hover:bg-gray-100 hover:text-black'
              }`}
            >
              Courses
            </a>

            <a
              href="#process"
              onClick={(e) => handleNavClick(e, 'process', '/#process')}
              className="px-3.5 py-1.5 rounded-full hover:bg-gray-100 hover:text-black transition-colors"
            >
              Training Process
            </a>

            <a
              href="#enquiry-section"
              onClick={(e) => handleNavClick(e, 'enquiry-section', '/admissions')}
              className={`px-3.5 py-1.5 rounded-full transition-colors ${
                location.pathname === '/admissions'
                  ? 'bg-[#B7EB38] text-black font-semibold'
                  : 'hover:bg-gray-100 hover:text-black'
              }`}
            >
              Admissions
            </a>

            <a
              href="#contact"
              onClick={(e) => handleNavClick(e, 'contact', '/contact')}
              className={`px-3.5 py-1.5 rounded-full transition-colors ${
                location.pathname === '/contact'
                  ? 'bg-[#B7EB38] text-black font-semibold'
                  : 'hover:bg-gray-100 hover:text-black'
              }`}
            >
              Contact
            </a>
          </nav>

          {/* Right CTAs */}
          <div className="flex items-center gap-2 sm:gap-3">
            {/* Call Us Pill */}
            <a
              href={`tel:${SITE_CONFIG.contact.phoneRaw}`}
              className="hidden md:inline-flex items-center gap-2 text-xs font-semibold px-3.5 py-2 rounded-full border border-gray-200 bg-gray-50 hover:bg-gray-100 text-gray-800 transition-colors"
              aria-label={`Call ${SITE_CONFIG.contact.phone}`}
            >
              <span className="w-5 h-5 rounded-full bg-[#B7EB38] flex items-center justify-center text-black">
                <Phone size={11} className="fill-current text-black" />
              </span>
              <span className="text-gray-500 font-normal">Call Now</span>
              <span className="font-bold">{SITE_CONFIG.contact.phone}</span>
            </a>

            {/* High Contrast Free Brochure / Enquire Now Button with Circle Arrow */}
            <a
              href="#enquiry-section"
              onClick={(e) => handleNavClick(e, 'enquiry-section', '/contact')}
              className="inline-flex items-center gap-2 bg-[#121c2d] hover:bg-black text-white text-xs sm:text-sm font-semibold pl-4 pr-1.5 py-1.5 rounded-full transition-transform active:scale-95 shadow group"
            >
              <span>Get Free Brochure</span>
              <span className="w-7 h-7 rounded-full bg-[#B7EB38] text-black flex items-center justify-center font-bold text-sm transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
                <ArrowUpRight size={15} />
              </span>
            </a>

            {/* Mobile Hamburger Toggle */}
            <button
              type="button"
              className="lg:hidden w-9 h-9 rounded-full bg-gray-100 hover:bg-gray-200 text-[#0F1E36] flex items-center justify-center transition-colors border border-gray-200"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Toggle navigation menu"
              aria-expanded={menuOpen}
            >
              {menuOpen ? <X size={18} /> : <Menu size={18} />}
            </button>
          </div>

        </header>

        {/* Mobile Navigation Drawer */}
        {menuOpen && (
          <div className="lg:hidden mt-2 bg-white rounded-3xl border border-gray-200 p-4 shadow-xl flex flex-col gap-1.5 animate-in fade-in slide-in-from-top-2 duration-150">
            <Link
              to="/"
              onClick={() => setMenuOpen(false)}
              className="px-4 py-2.5 rounded-xl text-sm font-bold bg-[#B7EB38] text-black"
            >
              Home
            </Link>
            <a
              href="#about"
              onClick={(e) => {
                setMenuOpen(false)
                handleNavClick(e, 'about', '/about')
              }}
              className="px-4 py-2 rounded-xl text-sm font-medium text-gray-700 hover:bg-gray-100"
            >
              About Us
            </a>
            <a
              href="#courses"
              onClick={(e) => {
                setMenuOpen(false)
                handleNavClick(e, 'courses', '/courses')
              }}
              className="px-4 py-2 rounded-xl text-sm font-medium text-gray-700 hover:bg-gray-100"
            >
              Courses
            </a>
            <a
              href="#process"
              onClick={(e) => {
                setMenuOpen(false)
                handleNavClick(e, 'process', '/#process')
              }}
              className="px-4 py-2 rounded-xl text-sm font-medium text-gray-700 hover:bg-gray-100"
            >
              Training Process
            </a>
            <a
              href="#enquiry-section"
              onClick={(e) => {
                setMenuOpen(false)
                handleNavClick(e, 'enquiry-section', '/admissions')
              }}
              className="px-4 py-2 rounded-xl text-sm font-medium text-gray-700 hover:bg-gray-100"
            >
              Admissions (50% Off)
            </a>
            <a
              href="#contact"
              onClick={(e) => {
                setMenuOpen(false)
                handleNavClick(e, 'contact', '/contact')
              }}
              className="px-4 py-2 rounded-xl text-sm font-medium text-gray-700 hover:bg-gray-100"
            >
              Contact
            </a>

            <div className="pt-2 mt-2 border-t border-gray-100 flex flex-col gap-2">
              <a
                href={`tel:${SITE_CONFIG.contact.phoneRaw}`}
                className="flex items-center justify-center gap-2 text-xs font-bold py-2.5 rounded-xl bg-gray-100 text-gray-900"
              >
                <Phone size={13} />
                <span>Call +91 97943 23963</span>
              </a>
            </div>
          </div>
        )}

      </div>
    </>
  )
}
