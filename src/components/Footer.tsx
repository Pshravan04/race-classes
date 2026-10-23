import { Link } from 'react-router-dom';
import { Phone, MessageSquare, Clock, ArrowUpRight } from 'lucide-react';
import { SITE_CONFIG } from '../data/config';
import { useLanguage } from '../context/useLanguage';
import type { Language } from '../data/translations';

export default function Footer() {
  const { language, setLanguage, t } = useLanguage();

  return (
    <footer className="bg-[#071B3A] text-white border-t-2 border-[#C59B27] pt-14 pb-20 md:pb-12 text-xs sm:text-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top 4-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 pb-12 border-b border-white/10">
          
          {/* Column 1: Brand & Local Mission */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-[#0E2B5C] border-2 border-[#C59B27] flex items-center justify-center text-[#D8AF3E] font-black text-sm shrink-0">
                RR
              </div>
              <div>
                <span className="font-bold text-base block font-serif-heading text-white">
                  RACE REDDYS
                </span>
                <span className="text-[11px] text-[#D8AF3E] font-semibold block uppercase">
                  Advanced Computer Education
                </span>
              </div>
            </div>

            <p className="text-gray-300 text-xs leading-relaxed">
              Virar East’s dedicated computer training institute. Offering 100% practical lab training, industry certification, and personal mentoring right opposite Virar station.
            </p>

            <div className="flex items-center gap-2 pt-1">
              <span className="station-board-yellow text-[10px] py-0.5 px-2">
                VIRAR FAST
              </span>
              <span className="text-gray-400 text-[11px]">
                {t.stationTagline}
              </span>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="space-y-3">
            <h4 className="text-xs font-black uppercase tracking-wider text-[#D8AF3E]">
              Navigation Links
            </h4>
            <ul className="space-y-2 text-xs text-gray-300">
              <li>
                <Link to="/" className="hover:text-white transition-colors">
                  Home (मुख्य पृष्ठ)
                </Link>
              </li>
              <li>
                <Link to="/courses" className="hover:text-white transition-colors">
                  All 23 Computer Courses
                </Link>
              </li>
              <li>
                <Link to="/offers" className="hover:text-white transition-colors">
                  50% Discount &amp; Free Basic Course
                </Link>
              </li>
              <li>
                <Link to="/batches" className="hover:text-white transition-colors">
                  Batch Timings &amp; Fee Details
                </Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-white transition-colors">
                  About Our Virar Lab
                </Link>
              </li>
              <li>
                <Link to="/gallery" className="hover:text-white transition-colors">
                  Student Success &amp; Gallery
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-white transition-colors">
                  Contact &amp; Free Demo Class
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Popular Courses */}
          <div className="space-y-3">
            <h4 className="text-xs font-black uppercase tracking-wider text-[#D8AF3E]">
              Popular Courses
            </h4>
            <ul className="space-y-2 text-xs text-gray-300">
              <li>
                <Link to="/courses/advanced-tally-with-gst" className="hover:text-white transition-colors">
                  Advanced Tally with GST
                </Link>
              </li>
              <li>
                <Link to="/courses/typing-english-marathi" className="hover:text-white transition-colors">
                  English &amp; Marathi Typing
                </Link>
              </li>
              <li>
                <Link to="/courses/ms-office" className="hover:text-white transition-colors">
                  MS-Office (Word, Excel, PowerPoint)
                </Link>
              </li>
              <li>
                <Link to="/courses/web-and-app-development" className="hover:text-white transition-colors">
                  Full-Stack Web &amp; App Development
                </Link>
              </li>
              <li>
                <Link to="/courses/digital-marketing" className="hover:text-white transition-colors">
                  Digital Marketing &amp; SEO
                </Link>
              </li>
              <li>
                <Link to="/courses/ai-prompt-engineering" className="hover:text-white transition-colors">
                  AI Prompt Engineering
                </Link>
              </li>
              <li>
                <Link to="/courses/ccc" className="hover:text-white transition-colors">
                  CCC (Govt Exam Preparation)
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Contact & Location */}
          <div className="space-y-3 text-xs text-gray-300">
            <h4 className="text-xs font-black uppercase tracking-wider text-[#D8AF3E]">
              Visit Centre
            </h4>
            
            <p className="leading-relaxed">
              <strong className="text-white block">Race Reddys</strong>
              202, 2nd Floor, Raut Arcade, Opp. Subway / Opp. Virar East Railway Station, Virar East, Maharashtra 401305.
            </p>

            <div className="pt-1 space-y-1.5">
              <div className="flex items-center gap-2">
                <Phone size={14} className="text-[#D8AF3E]" />
                <a href={`tel:${SITE_CONFIG.contact.phone}`} className="hover:text-white font-mono font-bold">
                  {SITE_CONFIG.contact.phoneDisplay}
                </a>
              </div>

              <div className="flex items-center gap-2">
                <MessageSquare size={14} className="text-[#25D366]" />
                <a
                  href={SITE_CONFIG.contact.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white font-semibold text-[#25D366]"
                >
                  WhatsApp: 9794323963
                </a>
              </div>

              <div className="flex items-center gap-2 text-gray-400">
                <Clock size={14} />
                <span>Mon–Sat: 9:00 AM – 7:00 PM</span>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Language & Copyright Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-gray-400">
          
          {/* Language Selector */}
          <div className="flex items-center gap-2">
            <span>Select Language / भाषा निवडा:</span>
            {(['en', 'hi', 'mr'] as Language[]).map((l) => (
              <button
                key={l}
                type="button"
                onClick={() => setLanguage(l)}
                className={`px-2 py-0.5 rounded text-[11px] font-bold ${
                  language === l
                    ? 'bg-[#C59B27] text-[#071B3A]'
                    : 'bg-white/10 text-gray-300 hover:bg-white/20'
                }`}
              >
                {l === 'en' ? 'English' : l === 'hi' ? 'हिंदी' : 'मराठी'}
              </button>
            ))}
          </div>

          <div>
            © 2026 Race Reddys Advanced Computer Education. All rights reserved.
          </div>

          <div className="flex items-center gap-4 text-gray-400 text-[11px]">
            <Link to="/privacy" className="hover:text-white">
              Privacy &amp; Terms
            </Link>
            <a
              href={SITE_CONFIG.address.googleMapsDirectLink}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white flex items-center gap-1"
            >
              <span>Google Maps</span>
              <ArrowUpRight size={12} />
            </a>
          </div>

        </div>

      </div>
    </footer>
  );
}
