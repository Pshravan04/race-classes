import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone, MessageSquare } from 'lucide-react';
import { SITE_CONFIG } from '../data/config';
import { useLanguage } from '../context/useLanguage';
import type { Language } from '../data/translations';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const { language, setLanguage, t } = useLanguage();

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
        className="bg-[#0B0F19] text-slate-300 text-[11px] py-1.5 px-4 border-b border-slate-800 select-none"
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between gap-3">
          
          {/* Station location indicator */}
          <div className="flex items-center gap-2 shrink-0">
            <span className="bg-[#F5BE4F] text-[#0B0F19] font-black text-[9px] px-1.5 py-0.5 rounded uppercase tracking-wider">
              VIRAR EAST
            </span>
            <span className="font-medium text-slate-300 text-[11px] hidden sm:inline">
              Raut Arcade 202 · Opp. Station Subway &amp; Platform 1
            </span>
          </div>

          {/* Offer highlight & Direct phone */}
          <div className="flex items-center gap-4">
            <span className="hidden md:inline font-semibold text-[#F5BE4F] text-[11px]">
              🔥 Flat 50% Concession on Career Diplomas · Limited Seats
            </span>

            <a
              href={`tel:${SITE_CONFIG.contact.phone}`}
              className="hidden lg:flex items-center gap-1 text-slate-300 hover:text-white transition-colors"
            >
              <Phone size={10} className="text-[#0084FF]" />
              <span className="font-medium">Call: {SITE_CONFIG.contact.phone}</span>
            </a>

            {/* Language Toggle: EN / हिं / मरा */}
            <div
              className="flex items-center gap-0.5 bg-slate-800/90 p-0.5 rounded-full border border-slate-700/60"
              role="group"
              aria-label="Language selection"
            >
              {(['en', 'hi', 'mr'] as Language[]).map((lang) => {
                const isActive = language === lang;
                const labels = { en: 'EN', hi: 'हिं', mr: 'मरा' };
                return (
                  <button
                    key={lang}
                    type="button"
                    onClick={() => setLanguage(lang)}
                    aria-pressed={isActive}
                    className={`px-2 py-0.5 text-[10px] font-bold rounded-full transition-all ${
                      isActive
                        ? 'bg-[#0084FF] text-white shadow-xs'
                        : 'text-slate-400 hover:text-white'
                    }`}
                  >
                    {labels[lang]}
                  </button>
                );
              })}
            </div>
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
          <Link to="/" className="flex items-center gap-3 group shrink-0" aria-label="Race Reddys Home">
            <div className="w-10 h-10 rounded-xl bg-slate-900 flex items-center justify-center p-1.5 shadow-xs group-hover:scale-105 transition-transform">
              <img
                src="/images/logo-stitch.png"
                alt="Race Reddys Emblem"
                className="w-full h-full object-contain"
                onError={(e) => {
                  (e.target as HTMLElement).style.display = 'none';
                }}
              />
            </div>

            <div className="flex flex-col">
              <span className="font-extrabold text-lg sm:text-xl tracking-tight text-[#111827] leading-none">
                RACE REDDYS
              </span>
              <span className="text-[9.5px] font-bold text-[#0084FF] tracking-wider uppercase leading-none mt-1">
                Advanced Computer Education
              </span>
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
                      ? 'text-[#0084FF] font-semibold bg-sky-50'
                      : 'hover:text-slate-900 hover:bg-slate-50'
                  }`}
                >
                  <span>{link.label}</span>
                  {link.badge && (
                    <span className="px-1.5 py-0.2 bg-amber-100 text-amber-800 text-[10px] font-bold rounded-full">
                      {link.badge}
                    </span>
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Desktop CTAs (WhatsApp quick link + Signature Blue Pill) */}
          <div className="hidden sm:flex items-center gap-3 shrink-0">
            {/* Quick WhatsApp Link */}
            <a
              href={`${SITE_CONFIG.contact.whatsapp}?text=${encodeURIComponent(
                'Hello! I would like to enquire about courses and admissions at Race Reddys Virar East.'
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden xl:inline-flex items-center gap-1.5 text-xs font-semibold text-slate-600 hover:text-emerald-600 transition-colors px-2 py-1 rounded-lg hover:bg-emerald-50/60"
            >
              <MessageSquare size={13} className="text-emerald-600" />
              <span>WhatsApp</span>
            </a>

            {/* Signature Blue Pill CTA */}
            <Link
              to="/contact#demo"
              className="inline-flex items-center justify-center bg-[#0084FF] hover:bg-[#0074E0] text-white text-xs sm:text-sm font-semibold px-5 sm:px-6 py-2.5 rounded-full shadow-sm hover:shadow-md transition-all active:scale-95 whitespace-nowrap"
            >
              Book a demo
            </Link>
          </div>

          {/* Mobile Menu Toggle Button */}
          <div className="flex items-center gap-2 lg:hidden">
            <a
              href={`${SITE_CONFIG.contact.whatsapp}?text=${encodeURIComponent(
                'Hello! I want to enquire about computer courses at Race Reddys Virar East.'
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
              className="p-2 text-[#111827] hover:bg-slate-100 rounded-lg transition-colors"
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
              <span>🔥 50% Concession on Career Diplomas</span>
              <span className="bg-[#F5BE4F] text-[#111827] font-bold text-[9px] px-1.5 py-0.5 rounded">VIRAR</span>
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
                        ? 'bg-sky-50 text-[#0084FF] font-bold'
                        : 'text-slate-700 hover:bg-slate-50'
                    }`}
                  >
                    <div className="flex items-center gap-2">
                      <span>{link.label}</span>
                      {link.badge && (
                        <span className="px-1.5 py-0.2 bg-amber-100 text-amber-800 text-[9px] font-bold rounded-full">
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
                className="flex items-center justify-center gap-1.5 bg-slate-50 border border-slate-200 text-[#111827] text-xs font-bold py-2.5 rounded-xl hover:bg-slate-100 transition-colors"
              >
                <Phone size={13} className="text-[#0084FF]" />
                <span>Call Us</span>
              </a>
              <a
                href={`${SITE_CONFIG.contact.whatsapp}?text=${encodeURIComponent(
                  'Hello! I want to enquire about computer courses at Race Reddys Virar East.'
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
              className="mt-2 w-full flex items-center justify-center bg-[#0084FF] hover:bg-[#0074E0] text-white text-xs font-bold py-3 rounded-xl shadow-sm transition-all"
            >
              Book a demo
            </Link>
          </div>
        )}
      </header>
    </>
  );
}
