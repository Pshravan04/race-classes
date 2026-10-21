import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import {
  ArrowRight,
  ArrowDown,
  Terminal,
  Menu,
  X,
  Phone,
  MapPin,
} from 'lucide-react'
import { SITE_CONFIG } from '../data/config'

export default function EditorialHero() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const handleSmoothScroll = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault()
    setMobileOpen(false)
    const el = document.getElementById(targetId)
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  return (
    <div className="w-full relative" aria-label="Hero Section">
      {/* ───────────────────────────────────────────────────────────
          1. UPPER HERO CANVAS — ELECTRIC LIME-YELLOW (#F2FF35)
         ─────────────────────────────────────────────────────────── */}
      <div className="w-full bg-[#F2FF35] text-[#080808] pt-4 sm:pt-6 pb-28 sm:pb-36 lg:pb-44 relative overflow-hidden">
        {/* Centered Main Container */}
        <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8">

          {/* ─── INLINE / STICKY HEADER ─── */}
          <header
            className={`w-full py-3 px-4 sm:px-6 rounded-2xl sm:rounded-full transition-all duration-200 mb-10 sm:mb-14 ${
              scrolled
                ? 'sticky top-3 z-50 bg-[#F2FF35]/95 backdrop-blur-md shadow-md border border-black/15'
                : 'bg-transparent border border-black/10'
            }`}
          >
            <div className="flex items-center justify-between gap-4">
              {/* Wordmark Logo on Left */}
              <Link to="/" className="flex flex-col items-start select-none group shrink-0">
                <span className="font-black text-lg sm:text-xl tracking-tight text-[#080808] leading-none group-hover:opacity-80 transition-opacity">
                  RACE REDDYS
                </span>
                <span className="text-[9px] font-black tracking-widest text-[#080808]/75 uppercase mt-0.5">
                  Advanced Computer Education
                </span>
              </Link>

              {/* Navigation Links in Center */}
              <nav
                className="hidden md:flex items-center gap-7 lg:gap-9"
                aria-label="Main Navigation"
              >
                <a
                  href="#courses"
                  onClick={(e) => handleSmoothScroll(e, 'courses')}
                  className="text-sm font-bold text-[#080808] hover:text-black/60 transition-colors"
                >
                  Courses
                </a>
                <Link
                  to="/admissions"
                  className="text-sm font-bold text-[#080808] hover:text-black/60 transition-colors"
                >
                  Admissions
                </Link>
                <a
                  href="#why-choose-us"
                  onClick={(e) => handleSmoothScroll(e, 'why-choose-us')}
                  className="text-sm font-bold text-[#080808] hover:text-black/60 transition-colors"
                >
                  Why Us
                </a>
                <Link
                  to="/about"
                  className="text-sm font-bold text-[#080808] hover:text-black/60 transition-colors"
                >
                  About
                </Link>
                <Link
                  to="/contact"
                  className="text-sm font-bold text-[#080808] hover:text-black/60 transition-colors"
                >
                  Contact
                </Link>
              </nav>

              {/* Black Pill Enquire Now Button on Right */}
              <div className="flex items-center gap-3 shrink-0">
                <a
                  href="#contact"
                  onClick={(e) => handleSmoothScroll(e, 'contact')}
                  className="bg-[#080808] hover:bg-neutral-800 text-white text-xs sm:text-sm font-bold px-5 py-2.5 rounded-full shadow-xs hover:shadow-md transition-all duration-150 whitespace-nowrap"
                >
                  Enquire Now
                </a>

                {/* Mobile Hamburger Button */}
                <button
                  type="button"
                  className="md:hidden w-9 h-9 rounded-full bg-[#080808] text-white flex items-center justify-center shrink-0"
                  onClick={() => setMobileOpen((prev) => !prev)}
                  aria-label="Toggle navigation menu"
                  aria-expanded={mobileOpen}
                >
                  {mobileOpen ? <X size={18} /> : <Menu size={18} />}
                </button>
              </div>
            </div>

            {/* Mobile Dropdown Menu */}
            {mobileOpen && (
              <div className="md:hidden pt-4 pb-3 mt-3 border-t border-black/15 flex flex-col gap-3">
                <a
                  href="#courses"
                  onClick={(e) => handleSmoothScroll(e, 'courses')}
                  className="text-sm font-bold text-[#080808] py-1"
                >
                  Courses
                </a>
                <Link
                  to="/admissions"
                  onClick={() => setMobileOpen(false)}
                  className="text-sm font-bold text-[#080808] py-1"
                >
                  Admissions
                </Link>
                <a
                  href="#why-choose-us"
                  onClick={(e) => handleSmoothScroll(e, 'why-choose-us')}
                  className="text-sm font-bold text-[#080808] py-1"
                >
                  Why Us
                </a>
                <Link
                  to="/about"
                  onClick={() => setMobileOpen(false)}
                  className="text-sm font-bold text-[#080808] py-1"
                >
                  About Our Institute
                </Link>
                <Link
                  to="/contact"
                  onClick={() => setMobileOpen(false)}
                  className="text-sm font-bold text-[#080808] py-1"
                >
                  Contact & Location
                </Link>
                <div className="pt-2 border-t border-black/10 flex flex-col gap-1 text-xs text-[#080808]/80 font-medium">
                  <a href={`tel:${SITE_CONFIG.contact.phoneRaw}`} className="flex items-center gap-2 font-bold">
                    <Phone size={13} />
                    <span>+91 97943 23963</span>
                  </a>
                  <p className="flex items-center gap-2 text-[11px] text-[#080808]/70">
                    <MapPin size={13} />
                    <span>Opp. Subway, Virar East Railway Station</span>
                  </p>
                </div>
              </div>
            )}
          </header>

          {/* ─── OVERSIZED BOLD BLACK HEADLINE ─── */}
          <div className="text-center max-w-4xl mx-auto mb-6 sm:mb-8">
            <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-[76px] font-black text-[#080808] tracking-tight sm:tracking-tighter uppercase leading-[0.96]">
              LEARN TODAY.
              <br />
              BUILD YOUR FUTURE.
            </h1>
          </div>

          {/* ─── ASYMMETRICAL SUPPORTING ELEMENTS ─── */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 max-w-2xl mx-auto mb-8 sm:mb-12">
            {/* Left: Compact black square icon + Practical Computer Education label */}
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-lg bg-[#080808] text-[#F2FF35] flex items-center justify-center shrink-0 shadow-xs">
                <Terminal size={15} />
              </div>
              <span className="text-xs sm:text-sm font-black tracking-tight text-[#080808] uppercase">
                Practical Computer Education
              </span>
            </div>

            {/* Right: Small circular student/classroom image + Explore Our Courses label */}
            <a
              href="#courses"
              onClick={(e) => handleSmoothScroll(e, 'courses')}
              className="flex items-center gap-2.5 group cursor-pointer"
            >
              <div className="w-8 h-8 rounded-full overflow-hidden border-2 border-[#080808] shrink-0 bg-white shadow-2xs">
                <img
                  src="/student-coding.jpg"
                  alt="Student at computer"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-200"
                />
              </div>
              <span className="text-xs sm:text-sm font-black tracking-tight text-[#080808] uppercase group-hover:underline flex items-center gap-1">
                <span>Explore Our Courses</span>
                <ArrowRight size={13} className="transition-transform group-hover:translate-x-0.5" />
              </span>
            </a>
          </div>

          {/* ─── SIGNATURE FEATURED CLASSROOM IMAGE: SCALLOPED 7-ARCH CUTOUT MASK ─── */}
          {/* Overlaps the seam between the lime-yellow upper canvas and the lower white section */}
          <div className="relative z-20 max-w-[680px] mx-auto -mb-28 sm:-mb-36 lg:-mb-44 select-none">
            {/* Left Floating Stat / Verifiable Badge */}
            <div className="absolute -left-3 sm:-left-8 top-16 sm:top-24 z-30 bg-[#080808] text-white px-3.5 py-2 rounded-xl text-xs font-bold shadow-xl border border-white/10 hidden xs:flex flex-col">
              <span className="text-xs font-black tracking-tight text-[#F2FF35]">
                Practical learning. Real skills.
              </span>
              <span className="text-[10px] text-neutral-300 font-medium mt-0.5">
                1-Student-1-PC Lab · Virar East
              </span>
            </div>

            {/* Right Floating Elements: Student Circle + Vertical Scroll Label */}
            <div className="absolute -right-3 sm:-right-8 top-12 sm:top-20 z-30 hidden sm:flex flex-col items-center gap-3">
              {/* Circular Student Thumbnail */}
              <div className="w-11 h-11 rounded-full overflow-hidden border-2 border-[#080808] shadow-md bg-white">
                <img
                  src="/student-coding.jpg"
                  alt="Student learning at workstation"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Vertical SCROLL TO EXPLORE label */}
              <div className="flex flex-col items-center gap-2 pt-1 select-none">
                <span
                  className="text-[10px] font-black tracking-[0.25em] uppercase text-[#080808]"
                  style={{ writingMode: 'vertical-rl' }}
                >
                  SCROLL TO EXPLORE
                </span>
                <ArrowDown size={13} className="text-[#080808] animate-bounce" />
              </div>
            </div>

            {/* The 7-Arch Continuous Scalloped SVG Mask Container */}
            <svg
              viewBox="0 0 680 400"
              className="w-full h-auto drop-shadow-2xl transition-transform duration-300 hover:scale-[1.01]"
              role="img"
              aria-label="Indian students learning at computer workstations in Race Reddys lab"
            >
              <defs>
                <clipPath id="scallopCutout">
                  {/* 7 connected vertical pill arches with symmetric crest rhythm */}
                  {/* Arch 1 (Leftmost) */}
                  <rect x="29" y="58" width="94" height="284" rx="47" ry="47" />
                  {/* Arch 2 */}
                  <rect x="111" y="34" width="98" height="332" rx="49" ry="49" />
                  {/* Arch 3 */}
                  <rect x="197" y="14" width="102" height="372" rx="51" ry="51" />
                  {/* Arch 4 (Center - Tallest) */}
                  <rect x="287" y="0" width="106" height="400" rx="53" ry="53" />
                  {/* Arch 5 */}
                  <rect x="381" y="14" width="102" height="372" rx="51" ry="51" />
                  {/* Arch 6 */}
                  <rect x="471" y="34" width="98" height="332" rx="49" ry="49" />
                  {/* Arch 7 (Rightmost) */}
                  <rect x="557" y="58" width="94" height="284" rx="47" ry="47" />
                </clipPath>
              </defs>

              {/* Single continuous image displayed seamlessly through the 7-arch mask */}
              <image
                href="/hero-lab.jpg"
                x="0"
                y="0"
                width="680"
                height="400"
                preserveAspectRatio="xMidYMid slice"
                clipPath="url(#scallopCutout)"
              />
            </svg>
          </div>

        </div>
      </div>

      {/* ───────────────────────────────────────────────────────────
          2. LOWER WHITE SECTION (Behind and emerging below the image)
         ─────────────────────────────────────────────────────────── */}
      <div className="relative z-10 w-full bg-white pt-32 sm:pt-40 lg:pt-48 pb-14 sm:pb-18 border-b border-[#E1E7EF]">
        <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-stretch">

            {/* Left Column (4 cols): Concise Educational Quote / Brand Statement */}
            <div className="lg:col-span-4 flex flex-col justify-center">
              <span className="text-[11px] font-black uppercase tracking-widest text-[#555555] mb-3">
                PRACTICAL IT EDUCATION
              </span>
              <blockquote className="text-xl sm:text-2xl font-black text-[#080808] leading-snug tracking-tight">
                “Hands-on computer training built to take you from foundational basics to real-world career confidence.”
              </blockquote>
              <div className="mt-5 flex items-center gap-2 text-xs font-bold text-[#555555]">
                <div className="w-2 h-2 rounded-full bg-[#080808]" />
                <span>Race Reddys · Raut Arcade, Virar East</span>
              </div>
            </div>

            {/* Middle Column (4 cols): Large Classroom / Faculty Photo in Crisp Panel */}
            <div className="lg:col-span-4">
              <div className="relative rounded-2xl overflow-hidden border border-[#E1E7EF] shadow-md bg-neutral-100 h-full min-h-[220px] group">
                <img
                  src="/instructor-teaching.jpg"
                  alt="Faculty guidance during computer session at Race Reddys"
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-102"
                  loading="lazy"
                />
                <div className="absolute bottom-3 left-3 bg-[#080808]/90 backdrop-blur-xs text-white text-[11px] font-semibold px-3 py-1.5 rounded-lg">
                  Faculty-Guided Practice Sessions
                </div>
              </div>
            </div>

            {/* Right Column (4 cols): Pale Mint-Green Featured-Course Card */}
            <div className="lg:col-span-4 flex">
              <div className="w-full bg-[#D8F8E1] border border-[#BDEAC8] rounded-2xl p-6 sm:p-7 flex flex-col justify-between shadow-xs">
                <div>
                  <span className="inline-block text-[11px] font-black uppercase tracking-wider text-[#080808] bg-black/10 px-2.5 py-1 rounded-md mb-4">
                    CAREER PATHWAYS
                  </span>
                  <h3 className="text-lg sm:text-xl font-black text-[#080808] tracking-tight leading-tight mb-2.5">
                    YOUR NEXT SKILL STARTS HERE
                  </h3>
                  <p className="text-xs sm:text-sm text-[#080808]/80 leading-relaxed mb-6">
                    Explore practical courses in computer fundamentals, accounting, design, software development, AI, and digital marketing.
                  </p>
                </div>
                <a
                  href="#courses"
                  onClick={(e) => handleSmoothScroll(e, 'courses')}
                  className="inline-flex items-center justify-between bg-[#080808] hover:bg-neutral-800 text-white font-bold text-xs sm:text-sm px-5 py-3 rounded-full transition-all"
                >
                  <span>Explore Courses</span>
                  <ArrowRight size={16} />
                </a>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  )
}
