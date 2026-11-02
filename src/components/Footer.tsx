import { Link } from 'react-router-dom';
import { Phone, MessageSquare, Clock, ArrowUpRight, MapPin } from 'lucide-react';
import { SITE_CONFIG } from '../data/config';
import { useLanguage } from '../context/useLanguage';
import type { Language } from '../data/translations';

export default function Footer() {
  const { language, setLanguage, t } = useLanguage();

  return (
    <footer className="relative bg-[#001752] text-white border-t border-[#002277] pt-14 pb-24 md:pb-12 text-xs sm:text-sm overflow-hidden">
      <div className="absolute -right-24 top-0 w-80 h-80 bg-[#C41E1E]/15 rounded-full blur-[110px] pointer-events-none" />
      <div className="absolute -left-24 bottom-0 w-80 h-80 bg-[#002B94]/25 rounded-full blur-[110px] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-white/10">
          {/* Brand */}
          <div className="space-y-5">
            <div>
              <div className="bg-white rounded-2xl p-2.5 inline-block shadow-lg border border-white/20">
                <img
                  src="/images/logo-full.png"
                  alt="RACE - Reddy's Advanced Computer Education"
                  className="h-10 sm:h-11 w-auto object-contain"
                />
              </div>
            </div>

            <p className="text-slate-300 text-xs leading-relaxed">
              Virar East’s dedicated computer training institute. Offering 100% practical lab training,
              industry certification, and personal mentoring right opposite Virar station.
            </p>

            <div className="flex items-center gap-2">
              <span className="inline-flex items-center gap-1.5 rounded-full bg-[#C41E1E] px-3 py-1 text-[10px] font-black uppercase tracking-wider text-white">
                <MapPin size={11} />
                Virar Fast
              </span>
              <span className="text-slate-300 text-[11px]">{t.stationTagline}</span>
            </div>
          </div>

          {/* Navigation */}
          <div className="space-y-3">
            <h4 className="text-[11px] font-black uppercase tracking-wider text-[#F5BE4F]">
              Navigation Links
            </h4>
            <ul className="space-y-2.5 text-xs text-slate-300">
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

          {/* Popular courses */}
          <div className="space-y-3">
            <h4 className="text-[11px] font-black uppercase tracking-wider text-[#F5BE4F]">
              Popular Courses
            </h4>
            <ul className="space-y-2.5 text-xs text-slate-300">
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

          {/* Visit centre */}
          <div className="space-y-3 text-xs text-slate-300">
            <h4 className="text-[11px] font-black uppercase tracking-wider text-[#F5BE4F]">
              Visit Centre
            </h4>

            <p className="leading-relaxed">
              <strong className="text-white block mb-1">Race Reddys</strong>
              202, 2nd Floor, Raut Arcade, Opp. Subway / Opp. Virar East Railway Station,
              Virar East, Maharashtra 401305.
            </p>

            <div className="pt-1 space-y-2">
              <div className="flex items-center gap-2">
                <Phone size={14} className="text-[#C41E1E]" />
                <a href={`tel:${SITE_CONFIG.contact.phone}`} className="hover:text-white font-bold">
                  {SITE_CONFIG.contact.phoneDisplay}
                </a>
              </div>

              <div className="flex items-center gap-2">
                <MessageSquare size={14} className="text-[#25D366]" />
                <a
                  href={SITE_CONFIG.contact.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white font-semibold text-[#4ADE80]"
                >
                  WhatsApp: 9794323963
                </a>
              </div>

              <div className="flex items-center gap-2 text-slate-400">
                <Clock size={14} className="text-[#F5BE4F]" />
                <span>Mon–Sat: 9:00 AM – 7:00 PM</span>
              </div>
            </div>

            <a
              href={SITE_CONFIG.address.googleMapsDirectLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 rounded-full border border-white/15 bg-white/5 px-3 py-1.5 text-[11px] font-semibold text-slate-200 hover:bg-white/10 hover:text-white transition-colors"
            >
              <span>Get directions</span>
              <ArrowUpRight size={12} className="text-[#F5BE4F]" />
            </a>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-7 flex flex-col lg:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <div className="flex flex-wrap items-center justify-center gap-2" role="group" aria-label="Language selection">
            <span>Select Language / भाषा निवडा:</span>
            <div className="flex items-center gap-0.5 rounded-full border border-white/10 bg-white/5 p-0.5">
              {(['en', 'hi', 'mr'] as Language[]).map((l) => (
                <button
                  key={l}
                  type="button"
                  onClick={() => setLanguage(l)}
                  aria-pressed={language === l}
                  className={`px-2.5 py-1 rounded-full text-[11px] font-bold transition-colors ${
                    language === l
                      ? 'bg-[#C41E1E] text-white shadow-xs'
                      : 'text-slate-300 hover:text-white'
                  }`}
                >
                  {l === 'en' ? 'English' : l === 'hi' ? 'हिंदी' : 'मराठी'}
                </button>
              ))}
            </div>
          </div>

          <div className="text-center">
            © 2026 Race Reddys Advanced Computer Education. All rights reserved.
          </div>

          <div className="flex items-center gap-4 text-slate-400 text-[11px]">
            <Link to="/privacy" className="hover:text-white transition-colors">
              Privacy &amp; Terms
            </Link>
            <a
              href={SITE_CONFIG.address.googleMapsDirectLink}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white flex items-center gap-1 transition-colors"
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
