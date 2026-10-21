import { ArrowUpRight, Phone, Check } from 'lucide-react'
import { SITE_CONFIG } from '../data/config'

export default function HeroSection() {
  const handleScrollToEnquiry = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault()
    const el = document.getElementById('enquiry-section')
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-2 sm:mt-4 pt-2 pb-8 sm:pb-10" id="hero" aria-label="Hero Showcase">
      <div className="relative rounded-3xl overflow-hidden min-h-[580px] lg:min-h-[640px] flex flex-col justify-between p-6 sm:p-10 lg:p-14 text-white shadow-xl">
        
        {/* Real Lab Photo Background with Dark Cinematic Overlay */}
        <div className="absolute inset-0 z-0">
          <img
            src="/stitch-hero.png"
            alt="Race Reddys Computer Education Laboratory with students and instructor"
            className="w-full h-full object-cover object-center filter brightness-[0.45] contrast-[1.05]"
            loading="eager"
            fetchPriority="high"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#08121e]/95 via-[#0b192e]/60 to-transparent" />
        </div>

        {/* Top Row Badges */}
        <div className="relative z-10 flex flex-wrap items-center justify-between gap-4">
          {/* Review Rating Pill */}
          <div className="flex items-center gap-2.5 bg-black/40 backdrop-blur-md border border-white/15 px-3.5 py-1.5 rounded-full text-xs">
            <div className="flex items-center space-x-0.5">
              <span className="w-4 h-4 rounded-full bg-[#4285F4] text-white flex items-center justify-center text-[10px] font-bold">
                G
              </span>
              <span className="text-amber-400 font-bold ml-1">★★★★★ 4.9</span>
            </div>
            <span className="text-gray-300 border-l border-white/20 pl-2">
              98% Positive Feedback from 2,000+ Students
            </span>
          </div>

          {/* Skill Tags */}
          <div className="hidden sm:flex items-center gap-2 text-xs font-medium text-gray-300">
            <span className="px-2.5 py-1 rounded-full bg-white/10 backdrop-blur-sm">
              TallyPrime &amp; GST
            </span>
            <span className="px-2.5 py-1 rounded-full bg-white/10 backdrop-blur-sm">
              Full-Stack Coding
            </span>
            <span className="px-2.5 py-1 rounded-full bg-white/10 backdrop-blur-sm">
              Graphic Design
            </span>
          </div>
        </div>

        {/* Center / Mid Content: Headline & Subheading */}
        <div className="relative z-10 max-w-3xl my-auto py-8">
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.1] mb-5 text-white">
            Virar East’s leading <br className="hidden sm:inline" />
            IT training, <span className="serif-accent font-normal text-[#B7EB38]">done right now</span>
          </h1>

          <p className="text-base sm:text-lg text-gray-200 max-w-2xl font-light leading-relaxed mb-8">
            Hands-on practical training in TallyPrime with GST, Python Full-Stack, Advanced MS-Office, and Graphic Design. 100% individual workstation time for learners across Virar, Vasai, and Palghar.
          </p>

          {/* CTA Buttons Row */}
          <div className="flex flex-wrap items-center gap-3 sm:gap-4">
            {/* Primary CTA Button with Arrow Pill */}
            <a
              href="#enquiry-section"
              onClick={handleScrollToEnquiry}
              className="inline-flex items-center gap-3 bg-[#B7EB38] hover:bg-[#a9dc2d] text-black font-bold text-sm sm:text-base pl-5 pr-2 py-2 rounded-full transition-transform active:scale-95 shadow-lg group"
            >
              <span>Enquire About Admissions</span>
              <span className="w-8 h-8 rounded-full bg-black text-white flex items-center justify-center font-bold text-sm transition-transform group-hover:scale-105">
                <ArrowUpRight size={16} />
              </span>
            </a>

            {/* Ghost Call Button */}
            <a
              href={`tel:${SITE_CONFIG.contact.phoneRaw}`}
              className="inline-flex items-center gap-2 bg-white/15 hover:bg-white/25 border border-white/20 text-white font-medium text-sm sm:text-base px-5 py-3 rounded-full backdrop-blur-sm transition-colors"
              aria-label={`Call ${SITE_CONFIG.contact.phone}`}
            >
              <Phone size={15} className="text-[#B7EB38]" />
              <span>Call Institute</span>
              <span className="text-xs">↗</span>
            </a>
          </div>
        </div>

        {/* Bottom Row Proof & Verification Highlights */}
        <div className="relative z-10 pt-4 flex flex-col md:flex-row items-start md:items-end justify-between gap-6 border-t border-white/15">
          {/* Left Quality Assurance Claims */}
          <div className="flex items-center gap-2 text-xs text-gray-300">
            <span className="w-4 h-4 rounded-full bg-[#B7EB38] text-black flex items-center justify-center text-[10px] font-bold">
              <Check size={11} strokeWidth={3} />
            </span>
            <span>
              Govt. Recognized Certification Path • Guaranteed Personal Desktop • 10+ Years in Virar East
            </span>
          </div>

          {/* Right Floating Social Proof Badge */}
          <div className="flex items-center gap-4 bg-black/50 backdrop-blur-md p-2.5 rounded-2xl border border-white/15">
            {/* Metric Stack */}
            <div className="px-2">
              <span className="block text-2xl font-black text-white leading-none">2K+</span>
              <span className="text-[10px] uppercase font-bold text-gray-400">Trained Students</span>
              {/* Mini Avatar Stack */}
              <div className="flex -space-x-2 mt-1">
                <span className="inline-flex h-5 w-5 rounded-full ring-2 ring-black bg-blue-500 text-[8px] font-bold text-white items-center justify-center">
                  AS
                </span>
                <span className="inline-flex h-5 w-5 rounded-full ring-2 ring-black bg-amber-500 text-[8px] font-bold text-white items-center justify-center">
                  PK
                </span>
                <span className="inline-flex h-5 w-5 rounded-full ring-2 ring-black bg-emerald-500 text-[8px] font-bold text-white items-center justify-center">
                  RM
                </span>
                <span className="inline-flex h-5 w-5 rounded-full ring-2 ring-black bg-purple-500 text-[8px] font-bold text-white items-center justify-center">
                  +
                </span>
              </div>
            </div>

            {/* Video / Lab Tour Mini Thumbnail preview badge */}
            <a
              href="#about"
              className="relative w-20 h-14 rounded-xl overflow-hidden border border-white/30 bg-slate-800 flex items-center justify-center cursor-pointer group"
              title="Tour the Lab"
            >
              <img
                src="/stitch-hero.png"
                alt="Lab View Preview"
                className="w-full h-full object-cover filter brightness-75 group-hover:scale-110 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
                <span className="w-6 h-6 rounded-full bg-[#B7EB38] text-black flex items-center justify-center text-[11px] font-black pl-0.5 shadow">
                  ▶
                </span>
              </div>
            </a>
          </div>
        </div>

      </div>
    </section>
  )
}
