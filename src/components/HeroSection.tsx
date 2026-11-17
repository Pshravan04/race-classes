import { MessageSquare, Clock, MapPin, CheckCircle } from 'lucide-react';
import { SITE_CONFIG, OFFERS_CONFIG } from '../data/config';
import { useLanguage } from '../context/useLanguage';
import { Link } from 'react-router-dom';
import BrandSpeedStripes from './BrandSpeedStripes';

export default function HeroSection() {
  const { t } = useLanguage();

  return (
    <section className="relative pt-6 sm:pt-10 pb-12 sm:pb-16 overflow-hidden bg-[#FBF9F5]" aria-label="Hero Section">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Asymmetrical Editorial Layout: 7 cols text, 5 cols local visual card */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Left Column: Local Headline & Direct CTAs */}
          <div className="lg:col-span-7">
            
            {/* Practical Lab Badge with Signature Speed Stripes */}
            <div className="inline-flex items-center gap-2.5 mb-4">
              <BrandSpeedStripes size="xs" />
              <span className="station-board-yellow text-[11px] font-black uppercase tracking-wider px-2.5 py-1">
                PRACTICAL TRAINING
              </span>
              <span className="text-xs font-bold text-[#0e2340] tracking-wide">
                1 Student : 1 PC Guaranteed
              </span>
            </div>

            {/* Vasai-Virar Headline */}
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0e2340] font-serif-heading leading-[1.15] mb-4">
              Don't Just Learn Computers.{' '}
              <span className="text-[#c6383b]">
                Learn Skills That Matter.
              </span>
            </h1>

            {/* Friendly, Teacher-Like Subheading */}
            <p className="text-base sm:text-lg text-[#0e2340] font-semibold leading-relaxed mb-3">
              Get hands-on training in AI, Digital Marketing, Programming and Advanced Computer Technologies at RACE, Vasai-Virar.
            </p>

            <p className="text-sm sm:text-base text-slate-600 leading-relaxed mb-6 font-normal">
              Learn by practising on real systems, working on practical assignments and building skills that go beyond classroom theory.
            </p>

            {/* Key Selling Points Checklist */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 mb-8 text-xs sm:text-sm text-[#1A2332] font-medium">
              <div className="flex items-center gap-2 bg-white/80 border border-[#E8E2D5] px-3 py-2 rounded-lg">
                <CheckCircle size={16} className="text-[#c6383b] shrink-0" />
                <span>Practical-first learning</span>
              </div>
              <div className="flex items-center gap-2 bg-white/80 border border-[#E8E2D5] px-3 py-2 rounded-lg">
                <CheckCircle size={16} className="text-[#c6383b] shrink-0" />
                <span>Industry-relevant courses</span>
              </div>
              <div className="flex items-center gap-2 bg-white/80 border border-[#E8E2D5] px-3 py-2 rounded-lg">
                <CheckCircle size={16} className="text-[#c6383b] shrink-0" />
                <span>Personal guidance</span>
              </div>
            </div>

            {/* Primary CTAs */}
            <div className="flex flex-wrap items-center gap-3 sm:gap-4">
              {/* WhatsApp Us CTA */}
              <a
                href={`${SITE_CONFIG.contact.whatsapp}?text=${encodeURIComponent(
                  'Hello! I am looking for computer classes in Virar East. Please share course details and batch timings.'
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 bg-[#25D366] hover:bg-[#20BA5A] text-white font-bold text-sm sm:text-base px-5 py-3 rounded-xl shadow-sm hover:shadow transition-all active:scale-95"
              >
                <MessageSquare size={18} />
                <span>{t.ctaWhatsapp}</span>
              </a>

              {/* Book Free Demo Class CTA */}
              <Link
                to="/contact#demo"
                className="inline-flex items-center gap-2 bg-[#0e2340] hover:bg-[#16345c] text-white font-bold text-sm sm:text-base px-5 py-3 rounded-xl border border-[#C59B27] shadow-sm hover:shadow transition-all active:scale-95"
              >
                <Clock size={18} className="text-[#D8AF3E]" />
                <span>{t.ctaDemo}</span>
              </Link>
            </div>

            {/* Location Subtext */}
            <div className="flex items-center gap-2 mt-4 text-xs text-gray-500">
              <MapPin size={14} className="text-[#c6383b] shrink-0" />
              <span>{t.heroAddressHint}</span>
            </div>

          </div>

          {/* Right Column: Authentic Institute Card / Lab Photo with Station Ticket Tag */}
          <div className="lg:col-span-5">
            <div className="bg-white rounded-2xl border border-[#E8E2D5] p-4 sm:p-5 shadow-sm relative">
              
              {/* Authentic Photo Container */}
              <div className="relative rounded-xl overflow-hidden aspect-[4/3] bg-[#0e2340] mb-4">
                <img
                  src="/hero-lab.jpg"
                  alt="Students practicing in computer laboratory at RACE Virar East"
                  className="w-full h-full object-cover"
                  loading="eager"
                  onError={(e) => {
                    // Fallback to stitch hero if hero-lab fails
                    (e.target as HTMLImageElement).src = '/stitch-hero.png';
                  }}
                />
                
                {/* Station Tag Overlay */}
                <div className="absolute bottom-3 left-3 right-3 bg-[#0e2340]/90 backdrop-blur-xs text-white p-2.5 rounded-lg border border-[#C59B27]/40 text-xs flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-[#25D366] animate-pulse" />
                    <span className="font-bold">Live Lab Sessions</span>
                  </div>
                  <span className="text-[#D8AF3E] font-semibold text-[11px]">
                    Mon–Sat: 9 AM–7 PM
                  </span>
                </div>
              </div>

              {/* Compact Local Trust Bar */}
              <div className="p-3 bg-[#FAF7EE] rounded-xl border border-[#E8E2D5] flex items-center justify-between gap-3">
                <div className="flex items-center gap-2.5">
                  <div className="w-9 h-9 rounded-lg bg-[#0e2340] text-[#C59B27] flex items-center justify-center font-black text-sm shrink-0">
                    RR
                  </div>
                  <div className="leading-tight">
                    <span className="text-xs font-bold text-[#0e2340] block">
                      Individual Machine Guarantee
                    </span>
                    <span className="text-[11px] text-[#4A5568]">
                      1 Student = 1 PC. No sharing.
                    </span>
                  </div>
                </div>

                <div className="text-right">
                  <span className="text-xs font-black text-[#c6383b] uppercase block">
                    {OFFERS_CONFIG.badge}
                  </span>
                  <span className="text-[10px] text-gray-500 block">
                    Limited Seats
                  </span>
                </div>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
