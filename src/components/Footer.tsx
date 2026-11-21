import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';
import { SITE_CONFIG } from '../data/config';

export default function Footer() {
  return (
    <footer className="relative bg-[#001752] text-white pt-16 pb-0 text-xs sm:text-sm overflow-hidden select-none">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top 4 Columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-white/10">
          
          {/* Column 1: RACE Brand (4 cols) */}
          <div className="lg:col-span-4 space-y-4">
            <div>
              <span className="text-2xl sm:text-3xl font-black text-white tracking-tight font-heading block">
                RACE
              </span>
              <span className="text-xs font-semibold text-[#DF8383] tracking-wide block mt-0.5">
                Reddys Advanced Computer Education
              </span>
            </div>

            <p className="text-slate-300 text-xs sm:text-[13px] leading-relaxed max-w-sm font-normal">
              Practical IT &amp; computer training in Vasai-Virar. Guaranteed 1 Student : 1 PC ratio, hands-on lab projects, and ISO 9001:2015 accredited certifications.
            </p>

            <div className="text-xs text-slate-300 space-y-1 pt-1">
              <p className="font-medium text-white">Raut Arcade 202, 2nd Floor</p>
              <p className="text-slate-400">Opp. Subway / Virar East Railway Station, Maharashtra 401305.</p>
            </div>
          </div>

          {/* Column 2: Courses (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">
              Courses
            </h4>
            <ul className="space-y-2 text-xs text-slate-300">
              <li>
                <Link to="/courses/advanced-tally-with-gst" className="hover:text-white transition-colors">
                  Advanced Tally with GST
                </Link>
              </li>
              <li>
                <Link to="/courses/full-stack-developer-course" className="hover:text-white transition-colors">
                  Full Stack Development
                </Link>
              </li>
              <li>
                <Link to="/courses/data-science-and-ai" className="hover:text-white transition-colors">
                  Data Science &amp; Analytics with AI
                </Link>
              </li>
              <li>
                <Link to="/courses/english-speaking" className="hover:text-white transition-colors">
                  Spoken English &amp; Personality
                </Link>
              </li>
              <li>
                <Link to="/courses/digital-marketing-course" className="hover:text-white transition-colors">
                  Digital Marketing
                </Link>
              </li>
              <li className="pt-1">
                <Link to="/courses" className="text-[#DF8383] hover:text-white font-bold transition-colors inline-flex items-center gap-1">
                  <span>View all 23 courses</span>
                  <ArrowUpRight size={12} />
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Information (2 cols) */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">
              Information
            </h4>
            <ul className="space-y-2 text-xs text-slate-300">
              <li>
                <Link to="/about" className="hover:text-white transition-colors">
                  About RACE
                </Link>
              </li>
              <li>
                <Link to="/batches" className="hover:text-white transition-colors">
                  Batch Timings
                </Link>
              </li>
              <li>
                <Link to="/contact#demo" className="hover:text-white transition-colors">
                  Free Demo Class
                </Link>
              </li>
              <li>
                <Link to="/offers" className="hover:text-white transition-colors">
                  50% Concession Pass
                </Link>
              </li>
              <li>
                <Link to="/gallery" className="hover:text-white transition-colors">
                  Campus Facilities
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-white transition-colors">
                  Contact Admissions
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Contact Us (3 cols) */}
          <div className="lg:col-span-3 space-y-3 text-xs text-slate-300">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">
              Contact Us
            </h4>

            <div className="space-y-2">
              <div>
                <span className="text-[11px] text-slate-400 block">Admissions Helpline:</span>
                <div className="font-bold text-white text-xs sm:text-sm mt-0.5 space-x-2">
                  <a href="tel:8793314239" className="hover:text-[#DF8383] transition-colors">8793314239</a>
                  <span>/</span>
                  <a href="tel:8482881614" className="hover:text-[#DF8383] transition-colors">8482881614</a>
                </div>
              </div>

              <div>
                <span className="text-[11px] text-slate-400 block">Direct WhatsApp Desk:</span>
                <a
                  href={SITE_CONFIG.contact.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-bold text-[#4ADE80] hover:underline"
                >
                  9794323963
                </a>
              </div>

              <div className="text-slate-300">
                <span className="text-[11px] text-slate-400 block">Centre Timing:</span>
                <span>Mon–Sat: 9:00 AM – 7:00 PM (Sunday Closed)</span>
              </div>
            </div>
          </div>

        </div>

        {/* Middle Address Bar */}
        <div className="py-6 border-b border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <p>
            202, 2nd Floor, Raut Arcade, Directly Opposite Virar East Railway Station Subway, Maharashtra 401305.
          </p>
          <a
            href={SITE_CONFIG.address.googleMapsDirectLink}
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-[#DF8383] font-semibold inline-flex items-center gap-1 transition-colors shrink-0"
          >
            <span>Get directions</span>
            <ArrowUpRight size={13} />
          </a>
        </div>

        {/* Bottom Copyright Bar */}
        <div className="py-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-400">
          <div>
            © 2026 RACE – Reddys Advanced Computer Education. All rights reserved.
          </div>
          <div className="flex items-center gap-4 text-xs">
            <Link to="/privacy" className="hover:text-white transition-colors">
              Privacy Policy
            </Link>
            <span>·</span>
            <Link to="/privacy" className="hover:text-white transition-colors">
              Terms &amp; Conditions
            </Link>
          </div>
        </div>

      </div>

      {/* Giant Watermark Touching the Very Bottom Edge */}
      <div className="w-full text-center overflow-hidden select-none pointer-events-none pt-4 -mb-3 sm:-mb-6 md:-mb-8 lg:-mb-10">
        <span className="text-[10px] sm:text-[11px] font-mono tracking-[0.28em] uppercase text-slate-400/80 block mb-1">
          LEARN. PRACTICE. PROGRESS.
        </span>
        <div className="text-[110px] sm:text-[170px] md:text-[230px] lg:text-[290px] xl:text-[340px] font-black text-white/[0.06] leading-[0.8] font-heading tracking-tight select-none">
          RACE
        </div>
      </div>
    </footer>
  );
}
