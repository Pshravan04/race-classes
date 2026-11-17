import { Link } from 'react-router-dom';
import { Phone, MessageSquare, Clock, ArrowUpRight, MapPin } from 'lucide-react';
import { SITE_CONFIG } from '../data/config';
import { useLanguage } from '../context/useLanguage';
import BrandSpeedStripes from './BrandSpeedStripes';

export default function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="relative bg-[#001752] text-white border-t border-[#00113E] pt-16 pb-24 md:pb-12 text-xs sm:text-sm overflow-hidden select-none">
      {/* Subtle Glows */}
      <div className="absolute -right-24 top-0 w-80 h-80 bg-[#C41E1E]/15 rounded-full blur-[110px] pointer-events-none" />
      <div className="absolute -left-24 bottom-0 w-80 h-80 bg-[#263A6C]/30 rounded-full blur-[110px] pointer-events-none" />

      {/* Subtle Oversized Brand Watermark */}
      <div 
        className="absolute bottom-6 right-6 text-white/[0.03] text-[120px] sm:text-[180px] lg:text-[240px] font-black tracking-tighter leading-none pointer-events-none select-none font-heading"
        aria-hidden="true"
      >
        RACE
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-white/10">
          
          {/* Brand & Introduction Column (4 cols) */}
          <div className="lg:col-span-4 space-y-5">
            <div>
              <div className="bg-white rounded-2xl p-2.5 inline-block shadow-lg border border-white/20">
                <img
                  src="/final logo 1.png"
                  alt="RACE – Advanced Computer Education"
                  className="h-10 sm:h-12 w-auto object-contain"
                />
              </div>
            </div>

            <p className="text-slate-300 text-xs sm:text-[13px] leading-relaxed max-w-sm">
              Dedicated practical computer education institute in Vasai-Virar offering 100% individual workstation time, industry-standard certifications, and 1:1 desk mentorship right opposite Virar East railway station subway.
            </p>

            <div className="flex items-center gap-3">
              <span className="inline-flex items-center gap-1.5 rounded-full bg-[#C41E1E] px-3 py-1 text-[10px] font-black uppercase tracking-wider text-white shadow-xs">
                <MapPin size={11} />
                Opp. Station Subway
              </span>
              <BrandSpeedStripes size="xs" />
              <span className="text-slate-300 text-[11px] font-medium">{t.stationTagline}</span>
            </div>
          </div>

          {/* Column 1: Company (2 cols) */}
          <div className="lg:col-span-2 space-y-3.5">
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#F5BE4F]">
              Company
            </h4>
            <ul className="space-y-2.5 text-xs text-slate-300">
              <li>
                <Link to="/about" className="hover:text-white transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/about#team" className="hover:text-white transition-colors">
                  Our Faculty &amp; Team
                </Link>
              </li>
              <li>
                <Link to="/gallery" className="hover:text-white transition-colors">
                  Campus Facilities
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-white transition-colors">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 2: Courses (3 cols) */}
          <div className="lg:col-span-3 space-y-3.5">
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#F5BE4F]">
              Courses &amp; Programs
            </h4>
            <ul className="space-y-2 text-xs text-slate-300">
              <li>
                <Link to="/courses/data-science-and-ai" className="hover:text-white transition-colors">
                  Data Science &amp; AI
                </Link>
              </li>
              <li>
                <Link to="/courses/full-stack-developer-course" className="hover:text-white transition-colors">
                  Full Stack Development
                </Link>
              </li>
              <li>
                <Link to="/courses/english-speaking" className="hover:text-white transition-colors">
                  Spoken English &amp; Personality
                </Link>
              </li>
              <li>
                <Link to="/courses/advanced-tally-with-gst" className="hover:text-white transition-colors">
                  Advanced Tally with GST
                </Link>
              </li>
              <li>
                <Link to="/courses/digital-marketing-course" className="hover:text-white transition-colors">
                  Digital Marketing with AI
                </Link>
              </li>
              <li className="pt-1">
                <Link to="/courses" className="text-[#DF8383] hover:text-white font-bold transition-colors inline-flex items-center gap-1">
                  <span>View All 23 Courses</span>
                  <ArrowUpRight size={12} />
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Support & Admissions (3 cols) */}
          <div className="lg:col-span-3 space-y-3 text-xs text-slate-300">
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#F5BE4F]">
              Support &amp; Admissions
            </h4>

            <p className="leading-relaxed">
              <strong className="text-white block mb-0.5">RACE Campus:</strong>
              202, 2nd Floor, Raut Arcade, Directly Opposite Virar East Railway Station Subway, Maharashtra 401305.
            </p>

            <div className="pt-1 space-y-2.5">
              <div className="flex items-start gap-2">
                <Phone size={14} className="text-[#C41E1E] mt-0.5 shrink-0" />
                <div className="space-y-0.5 text-xs">
                  <div className="text-[11px] text-slate-400 font-medium">Helpline &amp; Enquiries:</div>
                  <div className="flex flex-wrap items-center gap-x-2 gap-y-0.5 font-bold">
                    <a href="tel:8793314239" className="hover:text-white transition-colors">
                      8793314239
                    </a>
                    <span className="text-slate-600 font-normal">/</span>
                    <a href="tel:8482881614" className="hover:text-white transition-colors">
                      8482881614
                    </a>
                    <span className="text-slate-600 font-normal">/</span>
                    <a href="tel:9794323963" className="hover:text-white transition-colors">
                      9794323963
                    </a>
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <MessageSquare size={14} className="text-[#25D366] shrink-0" />
                <a
                  href={SITE_CONFIG.contact.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white font-semibold text-[#4ADE80] text-xs"
                >
                  WhatsApp: 9794323963
                </a>
              </div>

              <div className="flex items-center gap-2 text-slate-400 text-xs">
                <Clock size={14} className="text-[#F5BE4F] shrink-0" />
                <span>Mon–Sat: 9:00 AM – 7:00 PM</span>
              </div>
            </div>

            <div className="pt-1">
              <a
                href={SITE_CONFIG.address.googleMapsDirectLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 rounded-full border border-white/15 bg-white/5 px-3 py-1 text-[11px] font-semibold text-slate-200 hover:bg-white/10 hover:text-white transition-colors"
              >
                <span>Google Maps Directions</span>
                <ArrowUpRight size={12} className="text-[#F5BE4F]" />
              </a>
            </div>
          </div>

        </div>

        {/* Bottom Bar: Copyright & Terms */}
        <div className="pt-7 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <div className="text-center sm:text-left">
            © 2026 RACE – Reddys Advanced Computer Education. All rights reserved.
          </div>

          <div className="flex items-center gap-4 text-slate-400 text-[11px]">
            <Link to="/privacy" className="hover:text-white transition-colors">
              Privacy Policy &amp; Terms
            </Link>
            <span>•</span>
            <Link to="/batches" className="hover:text-white transition-colors">
              Batch Schedules
            </Link>
            <span>•</span>
            <Link to="/offers" className="hover:text-white transition-colors">
              50% Concession Pass
            </Link>
          </div>
        </div>
      </div>

      {/* Signature RACE Dual Speed Stripes Accent Bar */}
      <div className="w-full h-1.5 flex mt-8" aria-hidden="true">
        <div className="w-2/3 bg-[#001752]" />
        <div className="w-1/3 bg-[#C41E1E]" />
      </div>
    </footer>
  );
}
