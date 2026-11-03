import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone, MessageSquare } from 'lucide-react';
import { SITE_CONFIG } from '../data/config';
import { useLanguage } from '../context/useLanguage';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const { t } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 15);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { to: '/', label: t.navHome },
    { to: '/courses', label: t.navCourses },
    { to: '/batches', label: t.navBatches },
    { to: '/offers', label: t.navOffers, badge: '50%' },
    { to: '/about', label: t.navAbout },
    { to: '/gallery', label: t.navGallery },
    { to: '/contact', label: t.navContact },
  ];

  return (
    <>
      {/* ─── Sleek Top Announcement Ticker ─── */}
      <aside
        aria-label="Campus Notice"
        className="bg-[#001752] text-slate-200 text-[11px] py-1.5 px-4 border-b border-[#002277] select-none"
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between gap-3">
          
          {/* Station location indicator */}
          <div className="flex items-center gap-2 shrink-0">
            <span className="bg-[#C41E1E] text-white font-black text-[9px] px-1.5 py-0.5 rounded uppercase tracking-wider">
              VIRAR EAST
            </span>
            <span className="font-medium text-slate-200 text-[11px] hidden sm:inline">
              Raut Arcade 202 · Opp. Station Subway &amp; Platform 1
            </span>
          </div>

          {/* Offer highlight & Direct phone */}
          <div className="flex items-center gap-4">
            <span className="hidden md:inline font-bold text-[#F5BE4F] text-[11px]">
              🔥 Flat 50% Concession on Career Diplomas · Limited Seats
            </span>

            <a
              href={`tel:${SITE_CONFIG.contact.phone}`}
              className="flex items-center gap-1.5 text-slate-200 hover:text-white transition-colors text-xs font-semibold"
            >
              <Phone size={11} className="text-[#F5BE4F]" />
              <span>Call: {SITE_CONFIG.contact.phone}</span>
            </a>
          </div>

        </div>
      </aside>

      {/* ─── Main Navigation Header ─── */}
      <header
        className={`w-full z-40 transition-all duration-200 bg-white/95 backdrop-blur-md border-b border-slate-200/80 ${
          scrolled ? 'sticky top-0 shadow-xs py-2.5' : 'relative py-3.5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between gap-4">
          
          {/* Brand Logo & Name */}
          <Link to="/" className="flex items-center group shrink-0" aria-label="RACE Home">
            {/* Full Official Logo on Tablet & Desktop */}
            <img
              src="/images/logo-full.png"
              alt="RACE – Advanced Computer Education"
              className="h-10 sm:h-12 w-auto object-contain hidden sm:block group-hover:opacity-95 transition-opacity"
            />

            {/* Mobile Compact Emblem + Wordmark */}
            <div className="flex items-center gap-2.5 sm:hidden">
              <img
                src="/images/logo-icon.png"
                alt="RACE Emblem"
                className="h-9 w-auto object-contain"
              />
              <div className="flex flex-col">
                <span className="font-extrabold text-base tracking-tight text-[#001752] leading-none">
                  RACE
                </span>
                <span className="text-[8.5px] font-extrabold text-[#C41E1E] tracking-wider uppercase leading-none mt-1">
                  Advanced Computer Education
                </span>
              </div>
            </div>
          </Link>

          {/* Desktop Navigation Links (Spacious, Single-Line, Never Wraps) */}
          <nav className="hidden lg:flex items-center gap-1 text-[13.5px] font-medium text-slate-600" aria-label="Main Navigation">
            {navLinks.map((link) => {
              const isActive = location.pathname === link.to;
              return (
                <Link
                  key={link.to}
                  to={link.to}
                  className={`px-3 py-1.5 rounded-full transition-all whitespace-nowrap flex items-center gap-1.5 ${
                    isActive
                      ? 'text-[#001752] font-bold bg-[#F1F4FA] border border-[#D5DFF0]'
                      : 'hover:text-[#001752] hover:bg-slate-50'
                  }`}
                >
                  <span>{link.label}</span>
                  {link.badge && (
                    <span className="px-1.5 py-0.2 bg-[#C41E1E] text-white text-[10px] font-black rounded-full">
                      {link.badge}
                    </span>
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Desktop CTAs (WhatsApp quick link + Signature Brand Red Pill) */}
          <div className="hidden sm:flex items-center gap-3 shrink-0">
            {/* Quick WhatsApp Link */}
            <a
              href={`${SITE_CONFIG.contact.whatsapp}?text=${encodeURIComponent(
                'Hello! I would like to enquire about courses and admissions at RACE Virar East.'
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden xl:inline-flex items-center gap-1.5 text-xs font-semibold text-slate-600 hover:text-emerald-600 transition-colors px-2 py-1 rounded-lg hover:bg-emerald-50/60"
            >
              <MessageSquare size={13} className="text-emerald-600" />
              <span>WhatsApp</span>
            </a>

            {/* Signature Brand Red Pill CTA */}
            <Link
              to="/contact#demo"
              className="inline-flex items-center justify-center bg-[#C41E1E] hover:bg-[#A81717] text-white text-xs sm:text-sm font-bold px-5 sm:px-6 py-2.5 rounded-full shadow-md hover:shadow-lg transition-all active:scale-95 whitespace-nowrap"
            >
              Book a demo
            </Link>
          </div>

          {/* Mobile Menu Toggle Button */}
          <div className="flex items-center gap-2 lg:hidden">
            <a
              href={`${SITE_CONFIG.contact.whatsapp}?text=${encodeURIComponent(
                'Hello! I want to enquire about computer courses at RACE Virar East.'
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 text-[#25D366] hover:bg-green-50 rounded-lg sm:hidden"
              aria-label="WhatsApp quick chat"
            >
              <MessageSquare size={20} />
            </a>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-[#001752] hover:bg-slate-100 rounded-lg transition-colors"
              aria-expanded={mobileMenuOpen}
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>

        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="lg:hidden border-t border-slate-200 bg-white px-4 pt-4 pb-6 shadow-2xl animate-in slide-in-from-top-2">
            <div className="mb-3 px-3 py-2 rounded-xl bg-slate-50 border border-slate-200 flex items-center justify-between text-xs font-medium text-slate-700">
              <span className="font-bold text-[#C41E1E]">🔥 50% Concession on Career Diplomas</span>
              <span className="bg-[#001752] text-white font-bold text-[9px] px-1.5 py-0.5 rounded">VIRAR</span>
            </div>

            <nav className="flex flex-col gap-1 mb-4" aria-label="Mobile Navigation">
              {navLinks.map((link) => {
                const isActive = location.pathname === link.to;
                return (
                  <Link
                    key={link.to}
                    to={link.to}
                    onClick={() => setMobileMenuOpen(false)}
                    className={`px-3 py-2.5 rounded-lg text-sm font-semibold flex items-center justify-between transition-colors ${
                      isActive
                        ? 'bg-[#F1F4FA] text-[#001752] font-bold border-l-4 border-[#C41E1E]'
                        : 'text-slate-700 hover:bg-slate-50'
                    }`}
                  >
                    <div className="flex items-center gap-2">
                      <span>{link.label}</span>
                      {link.badge && (
                        <span className="px-1.5 py-0.2 bg-[#C41E1E] text-white text-[9px] font-black rounded-full">
                          {link.badge}
                        </span>
                      )}
                    </div>
                    <span className="text-xs text-slate-400">→</span>
                  </Link>
                );
              })}
            </nav>

            {/* Mobile Contact & Demo Buttons */}
            <div className="grid grid-cols-2 gap-2 pt-3 border-t border-slate-200">
              <a
                href={`tel:${SITE_CONFIG.contact.phone}`}
                className="flex items-center justify-center gap-1.5 bg-slate-50 border border-slate-200 text-[#001752] text-xs font-bold py-2.5 rounded-xl hover:bg-slate-100 transition-colors"
              >
                <Phone size={13} className="text-[#C41E1E]" />
                <span>Call Us</span>
              </a>
              <a
                href={`${SITE_CONFIG.contact.whatsapp}?text=${encodeURIComponent(
                  'Hello! I want to enquire about computer courses at RACE Virar East.'
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-1.5 bg-[#25D366] text-white text-xs font-bold py-2.5 rounded-xl hover:bg-[#20BA5A] transition-colors shadow-xs"
              >
                <MessageSquare size={13} />
                <span>WhatsApp</span>
              </a>
            </div>

            <Link
              to="/contact#demo"
              onClick={() => setMobileMenuOpen(false)}
              className="mt-2 w-full flex items-center justify-center bg-[#C41E1E] hover:bg-[#A81717] text-white text-xs font-bold py-3 rounded-xl shadow-md transition-all"
            >
              Book a demo
            </Link>
          </div>
        )}
      </header>
    </>
  );
}
