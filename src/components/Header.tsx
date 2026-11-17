import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { SITE_CONFIG } from '../data/config';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 15);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { to: '/', label: 'Home' },
    { to: '/about', label: 'About Us' },
    { to: '/courses', label: 'Courses' },
    { to: '/batches', label: 'Programs' },
    { to: '/gallery', label: 'Placements' },
    { to: '/contact', label: 'Contact' },
  ];

  return (
    <header
      className={`w-full z-40 transition-all duration-200 bg-white border-b border-slate-200/90 ${
        scrolled ? 'sticky top-0 shadow-xs py-2.5' : 'relative py-3.5'
      }`}
    >
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between gap-4">
        
        {/* Brand Logo & Name */}
        <Link to="/" className="flex items-center group shrink-0" aria-label="RACE Home">
          <img
            src="/final logo 1.png"
            alt="RACE – Reddys Advanced Computer Education"
            className="h-9 sm:h-10 md:h-11 w-auto object-contain group-hover:opacity-95 transition-opacity"
          />
        </Link>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center gap-1.5 text-[13.5px] font-medium text-slate-700" aria-label="Main Navigation">
          {navLinks.map((link) => {
            const isActive = location.pathname === link.to;
            return (
              <Link
                key={link.to}
                to={link.to}
                className={`px-3.5 py-1.5 rounded-full transition-all whitespace-nowrap ${
                  isActive
                    ? 'text-[#001752] font-bold bg-[#F2F3F6]'
                    : 'hover:text-[#001752] hover:bg-slate-50'
                }`}
              >
                <span>{link.label}</span>
              </Link>
            );
          })}
        </nav>

        {/* Desktop Right Actions: Student Login + Red Enquire Now CTA */}
        <div className="hidden sm:flex items-center gap-4 shrink-0">
          <Link
            to="/contact#login"
            className="text-xs font-semibold text-slate-700 hover:text-[#001752] transition-colors px-2 py-1"
          >
            Student Login
          </Link>

          <Link
            to="/contact#enquiry"
            className="inline-flex items-center justify-center bg-[#C41E1E] hover:bg-[#931616] text-white text-xs sm:text-[13px] font-bold px-5 sm:px-6 py-2.5 rounded-full shadow-sm hover:shadow transition-all active:scale-95 whitespace-nowrap cursor-pointer"
          >
            Enquire Now
          </Link>
        </div>

        {/* Mobile Menu Toggle Button */}
        <div className="flex items-center gap-2 lg:hidden">
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
                  className={`px-3.5 py-2.5 rounded-lg text-sm font-semibold flex items-center justify-between transition-colors ${
                    isActive
                      ? 'bg-[#F2F3F6] text-[#001752] font-bold border-l-4 border-[#C41E1E]'
                      : 'text-slate-700 hover:bg-slate-50'
                  }`}
                >
                  <span>{link.label}</span>
                  <span className="text-xs text-slate-400">→</span>
                </Link>
              );
            })}
          </nav>

          <div className="space-y-2 pt-3 border-t border-slate-200">
            <div className="text-[10px] font-bold text-slate-500 uppercase tracking-wider px-1">
              Direct Helpline (Tap to Call)
            </div>
            <div className="grid grid-cols-3 gap-1.5">
              {SITE_CONFIG.contact.phones.map((p) => (
                <a
                  key={p.number}
                  href={`tel:${p.number}`}
                  className="flex flex-col items-center justify-center p-2 rounded-xl bg-slate-50 border border-slate-200 text-[#001752] hover:bg-slate-100 transition-colors text-center"
                >
                  <span className="text-[9px] text-slate-500 font-medium">{p.label}</span>
                  <span className="text-[11px] font-bold mt-0.5">{p.number}</span>
                </a>
              ))}
            </div>
          </div>

          <Link
            to="/contact#enquiry"
            onClick={() => setMobileMenuOpen(false)}
            className="mt-3 w-full flex items-center justify-center bg-[#C41E1E] hover:bg-[#931616] text-white text-xs font-bold py-3 rounded-full shadow-md transition-all"
          >
            Enquire Now
          </Link>
        </div>
      )}
    </header>
  );
}
