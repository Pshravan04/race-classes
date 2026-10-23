import { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Check, 
  MapPin, 
  BadgeCheck, 
  Receipt, 
  Star,
  Laptop,
  Monitor,
  Clock,
  Award,
  MessageSquare,
  Phone,
  Sparkles
} from 'lucide-react';
import SEO from '../components/SEO';
import { COURSES, SITE_CONFIG, OFFERS_CONFIG } from '../data/config';

// 6 featured courses for homepage preview — hand-picked across both types
const FEATURED_COURSE_IDS = [
  'advanced-tally-with-gst',
  'software-development',
  'ms-office',
  'graphic-designing',
  'basic-computer',
  'ai-ml',
];

const FILTER_TABS = [
  { label: 'All (23)', value: 'all' },
  { label: 'Career Courses (11)', value: 'career' },
  { label: 'Short-Term (12)', value: 'short-term' },
];

const FAQS = [
  {
    q: '1. Do I need prior computer knowledge to join?',
    a: 'No prior experience is necessary. Our instructors begin with foundational mouse and keyboard skills before advancing into specialised accounting or programming modules.',
  },
  {
    q: '2. Is there a dedicated batch for ladies?',
    a: 'Yes. We offer comfortable afternoon and morning slots with personalised, patient guidance specifically suited for homemakers and women returning to education.',
  },
  {
    q: '3. What is included in the free Basic Computer Course offer?',
    a: 'When you enrol in any career-track diploma, the complete foundational Basic Computer module is included without tuition charge, covering Windows, Internet navigation, and typing.',
  },
  {
    q: '4. Do students receive an authorised certificate?',
    a: 'Yes. Every student who successfully finishes course requirements and practical tests receives a verified certificate from Race Reddys Advanced Computer Education.',
  },
  {
    q: '5. How can I obtain the current fee structure?',
    a: 'Please call 9794323963 or send us a WhatsApp message. Our admission counsellors will share the exact syllabus breakdown and instalment fee options transparently.',
  },
  {
    q: '6. Where is the institute located in Virar?',
    a: 'We are located at 202, 2nd Floor, Raut Arcade, directly opposite the Virar East Railway Station subway entrance. It is less than a two-minute walk from Platform 1.',
  },
];

export default function Home() {
  const [activeFilter, setActiveFilter] = useState<'all' | 'career' | 'short-term'>('all');
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const baseFeatured = COURSES.filter((c) => FEATURED_COURSE_IDS.includes(c.id));
  const filteredCourses =
    activeFilter === 'all'
      ? baseFeatured
      : baseFeatured.filter((c) => c.type === activeFilter);

  const wa = SITE_CONFIG.contact.whatsapp;
  const phone = SITE_CONFIG.contact.phone;

  return (
    <>
      <SEO
        title="Practical Computer & IT Training in Virar East | Race Reddys"
        description="Ab Mumbai jaane ki zarurat nahi. Learn Tally with GST, Typing, Web Development, MS Office, AI & ML right outside Virar East station. 100% practical lab, special ladies batch, 50% discount."
        canonical="/"
      />

      {/* ── 1. PLANNED-STYLE HERO SECTION ────────────────────────── */}
      <section className="relative bg-[#F8F9FA] text-[#111827] overflow-hidden pt-8 sm:pt-14 pb-16 lg:pb-24 border-b border-slate-200/60">
        
        {/* Background Ambient Curved Sand/Beige Accents */}
        <div className="absolute top-0 right-0 w-1/2 h-full pointer-events-none hidden lg:block overflow-hidden">
          <svg className="absolute -top-12 -right-12 w-[120%] h-[120%] opacity-40" viewBox="0 0 600 700" fill="none">
            <path d="M 220 0 C 140 160, 320 280, 160 480 C 100 560, 40 640, 0 700 L 600 700 L 600 0 Z" fill="#EAE4DC" />
          </svg>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">

            {/* Left Column: Big Display Typography, Dual Buttons, and Trusted By */}
            <div className="lg:col-span-7 flex flex-col items-start pt-2 lg:pt-4">
              
              {/* Main Headline with the distinctive Planned accent mark */}
              <h1 className="text-4xl sm:text-5xl lg:text-[62px] xl:text-[68px] font-black text-[#111827] tracking-tight leading-[1.08] mb-6 font-sans">
                Where your career comes together<span className="inline-block text-[#0084FF] font-light ml-1.5 -translate-y-1 transform scale-125 select-none">&#x00B4;</span>
              </h1>

              {/* Subheading copy */}
              <p className="text-base sm:text-lg text-slate-600 max-w-xl leading-relaxed font-normal mb-8">
                Race Reddys makes it easy for anyone in Virar to master job-ready software, Tally Prime with GST, Typing, and Web Development with dedicated individual computers, personal instruction, and flexible daily batches.
              </p>

              {/* Dual Action Buttons */}
              <div className="flex flex-wrap items-center gap-3.5 mb-12 sm:mb-16">
                <a
                  href={`tel:${phone}`}
                  className="inline-flex items-center justify-center h-12 sm:h-13 px-8 rounded-full bg-[#111827] hover:bg-[#1E293B] text-white font-bold text-sm sm:text-base shadow-md hover:shadow-lg active:scale-95 transition-all"
                >
                  Book a free demo
                </a>

                <Link
                  to="/courses"
                  className="inline-flex items-center justify-center h-12 sm:h-13 px-7 rounded-full bg-white text-[#111827] border border-slate-300 hover:border-[#111827] font-bold text-sm sm:text-base hover:bg-slate-50 active:scale-95 transition-all shadow-xs"
                >
                  Quick course tour
                </Link>
              </div>

              {/* Trusted By / Industry Standards Bar */}
              <div className="w-full max-w-xl pt-6 border-t border-slate-200">
                <span className="block text-xs font-semibold text-slate-400 uppercase tracking-wider mb-4">
                  Trusted by 5,000+ Students &amp; Industry Standards
                </span>

                <div className="flex flex-wrap items-center gap-x-8 gap-y-3 opacity-75 grayscale hover:grayscale-0 transition-all duration-300">
                  {/* Tally Education */}
                  <div className="flex items-center gap-1.5 font-bold text-slate-800 text-sm tracking-tight">
                    <span className="w-5 h-5 rounded-full bg-[#E51B24] text-white text-[11px] font-black flex items-center justify-center">T</span>
                    <span className="font-sans font-bold">TallyPrime</span>
                  </div>

                  {/* Microsoft */}
                  <div className="flex items-center gap-1.5 font-semibold text-slate-800 text-sm tracking-tight">
                    <span className="grid grid-cols-2 gap-0.5 w-3.5 h-3.5">
                      <span className="bg-[#F25022]"></span>
                      <span className="bg-[#7FBA00]"></span>
                      <span className="bg-[#00A4EF]"></span>
                      <span className="bg-[#FFB900]"></span>
                    </span>
                    <span className="font-sans font-semibold">Microsoft</span>
                  </div>

                  {/* ISO Certification Badge */}
                  <div className="text-[11px] font-mono font-bold border border-slate-400/80 px-2 py-0.5 rounded text-slate-700 tracking-wider">
                    ISO 9001:2015
                  </div>

                  {/* MS-CIT Standard */}
                  <div className="text-xs font-bold text-slate-800 tracking-wide">
                    MKCL Pattern
                  </div>

                  {/* Typing Board */}
                  <div className="text-xs font-semibold text-slate-700">
                    GCC-TBC Typing
                  </div>
                </div>
              </div>

            </div>

            {/* Right Column: Signature Organic Curved Photo Frame & 3 Floating UI Cards */}
            <div className="lg:col-span-5 relative flex justify-center mt-6 lg:mt-0">
              <div className="relative w-full max-w-[480px] lg:max-w-[520px]">
                
                {/* Echoing Sand/Beige Background Curve */}
                <div className="absolute -inset-3 sm:-inset-5 bg-[#EAE3D8] rounded-[40px] sm:rounded-[60px] lg:rounded-l-[180px] lg:rounded-r-[50px] -rotate-1 pointer-events-none -z-10" />

                {/* Main Organic Photo Container with Curved Border Geometry */}
                <div className="relative overflow-hidden aspect-[4/3] sm:aspect-[1/1] rounded-[36px] sm:rounded-[50px] lg:rounded-l-[170px] lg:rounded-r-[45px] shadow-2xl bg-slate-900 border-4 border-white">
                  <img
                    src="/images/hero-lab.jpg"
                    alt="Students learning inside Race Reddys modern computer laboratory in Raut Arcade Virar East"
                    className="w-full h-full object-cover scale-105"
                  />
                  {/* Subtle warm overlay to match Planned photography */}
                  <div className="absolute inset-0 bg-gradient-to-tr from-black/30 via-transparent to-amber-900/10 pointer-events-none" />
                </div>

                {/* ── CARD 1: Floating "Checklist" (Center Left) ── */}
                <div className="absolute top-1/2 -left-4 sm:-left-12 -translate-y-1/2 z-20 bg-white/95 backdrop-blur-md p-4 sm:p-5 rounded-2xl shadow-[0_20px_50px_rgba(0,0,0,0.14)] border border-slate-200/90 w-[240px] sm:w-[270px] hover:-translate-y-1 transition-transform">
                  <h3 className="text-lg sm:text-xl font-black text-[#111827] tracking-tight mb-3">
                    Checklist
                  </h3>

                  <div className="space-y-3">
                    {/* Item 1: Pending */}
                    <div>
                      <div className="flex items-center gap-2">
                        <div className="w-4 h-4 rounded border-2 border-slate-300 flex items-center justify-center shrink-0" />
                        <span className="text-xs font-semibold text-slate-800">1 Student : 1 Machine Lab</span>
                      </div>
                      <span className="text-[11px] text-[#0084FF] font-semibold block ml-6 mt-0.5 cursor-pointer hover:underline">
                        + Confirmed seat
                      </span>
                    </div>

                    {/* Item 2: Checked */}
                    <div>
                      <div className="flex items-center gap-2">
                        <div className="w-4 h-4 rounded bg-[#0084FF] text-white flex items-center justify-center shrink-0 shadow-xs">
                          <Check size={12} strokeWidth={3} />
                        </div>
                        <span className="text-xs font-bold text-slate-800">Job-Ready Certification</span>
                      </div>
                      <span className="text-[10px] text-slate-400 block ml-6 mt-0.5">
                        TallyPrime, Typing &amp; IT Skills
                      </span>
                    </div>
                  </div>
                </div>

                {/* ── CARD 2: Floating "Venue & Rating" (Top Right) ── */}
                <div className="absolute -top-4 sm:-top-6 right-2 sm:right-4 z-20 bg-white/95 backdrop-blur-md px-4 py-3 rounded-2xl shadow-[0_15px_35px_rgba(0,0,0,0.12)] border border-slate-200/90 hover:-translate-y-1 transition-transform">
                  <div className="flex items-center justify-between gap-3 text-[11px] text-slate-500 font-medium">
                    <span className="bg-slate-100 text-slate-700 px-2 py-0.5 rounded font-bold text-[10px] uppercase">
                      Terminal 202
                    </span>
                    <span className="flex items-center gap-1 text-[11px] text-slate-500">
                      <MapPin size={11} className="text-slate-400" />
                      Virar East
                    </span>
                    <div className="bg-[#111827] text-white text-[10px] font-bold px-2 py-0.5 rounded-full flex items-center gap-1">
                      <span>4.9</span>
                      <Star size={9} className="fill-[#F5BE4F] text-[#F5BE4F]" />
                    </div>
                  </div>

                  <div className="flex items-center gap-1.5 mt-2 font-black text-sm text-[#111827]">
                    <span>Advanced IT Lab</span>
                    <BadgeCheck size={16} className="text-[#0084FF] fill-[#0084FF]/20" />
                  </div>
                </div>

                {/* ── CARD 3: Floating "Payment & Discount" (Bottom Right) ── */}
                <div className="absolute -bottom-6 sm:-bottom-8 right-2 sm:right-6 z-20 bg-white/95 backdrop-blur-md p-4 sm:p-5 rounded-2xl shadow-[0_25px_60px_rgba(0,0,0,0.16)] border border-slate-200/90 w-[260px] sm:w-[290px] hover:-translate-y-1 transition-transform">
                  <h4 className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-2.5">
                    Payment schedule
                  </h4>

                  <div className="flex items-center gap-2 mb-3">
                    <div className="w-7 h-7 rounded-lg bg-amber-50 border border-amber-200/80 flex items-center justify-center text-amber-700 shrink-0">
                      <Receipt size={14} />
                    </div>
                    <span className="text-xs font-bold text-slate-900">Admission Fee</span>
                  </div>

                  <div className="grid grid-cols-2 gap-2 text-xs border-t border-slate-100 pt-2 mb-2">
                    <div>
                      <span className="text-[10px] text-slate-400 block">Concession</span>
                      <strong className="text-xs font-bold text-[#111827]">Discount 50%</strong>
                    </div>
                    <div>
                      <span className="text-[10px] text-slate-400 block">Offer Status</span>
                      <span className="inline-block bg-emerald-50 text-emerald-700 text-[10px] font-extrabold px-2 py-0.5 rounded-full border border-emerald-200">
                        Active
                      </span>
                    </div>
                  </div>

                  <div className="flex items-center justify-between text-[11px] text-slate-500 pt-1 border-t border-slate-100">
                    <span>Free Basic Course</span>
                    <span className="font-semibold text-slate-700">Starts: Monday</span>
                  </div>
                </div>

              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ── 2. CORE PILLARS & STATS (Clean Planned-Style Strip) ──────── */}
      <section className="relative z-30 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-6 sm:mt-10 w-full">
        <div className="bg-white rounded-3xl shadow-[0_12px_40px_rgba(0,0,0,0.06)] border border-slate-200/90 p-5 sm:p-7">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-4 lg:divide-x divide-slate-100">
            
            {/* Pillar 1 */}
            <div className="flex items-center gap-3.5 px-3">
              <div className="w-12 h-12 rounded-2xl bg-sky-50 border border-sky-100 flex items-center justify-center text-[#0084FF] shrink-0">
                <Laptop size={22} strokeWidth={2.2} />
              </div>
              <div>
                <div className="text-xl sm:text-2xl font-black text-[#111827] tracking-tight leading-tight">
                  23+ Courses
                </div>
                <div className="text-xs font-semibold text-slate-700 mt-0.5">
                  Job-Oriented Curriculums
                </div>
                <div className="text-[11px] text-slate-600 font-medium">
                  Tally, Web Dev, Typing &amp; IT Skills
                </div>
              </div>
            </div>

            {/* Pillar 2 */}
            <div className="flex items-center gap-3.5 px-3">
              <div className="w-12 h-12 rounded-2xl bg-emerald-50 border border-emerald-100 flex items-center justify-center text-emerald-600 shrink-0">
                <Monitor size={22} strokeWidth={2.2} />
              </div>
              <div>
                <div className="text-xl sm:text-2xl font-black text-[#111827] tracking-tight leading-tight">
                  1 : 1 Machine
                </div>
                <div className="text-xs font-semibold text-slate-700 mt-0.5">
                  100% Practical Training
                </div>
                <div className="text-[11px] text-slate-600 font-medium">
                  Confirmed desktop, zero sharing
                </div>
              </div>
            </div>

            {/* Pillar 3 */}
            <div className="flex items-center gap-3.5 px-3">
              <div className="w-12 h-12 rounded-2xl bg-amber-50 border border-amber-100 flex items-center justify-center text-amber-600 shrink-0">
                <Clock size={22} strokeWidth={2.2} />
              </div>
              <div>
                <div className="text-xl sm:text-2xl font-black text-[#111827] tracking-tight leading-tight">
                  9 AM – 7 PM
                </div>
                <div className="text-xs font-semibold text-slate-700 mt-0.5">
                  Flexible Daily Batches
                </div>
                <div className="text-[11px] text-slate-600 font-medium">
                  Morning, Evening &amp; Ladies Slots
                </div>
              </div>
            </div>

            {/* Pillar 4 */}
            <div className="flex items-center gap-3.5 px-3">
              <div className="w-12 h-12 rounded-2xl bg-indigo-50 border border-indigo-100 flex items-center justify-center text-indigo-600 shrink-0">
                <Award size={22} strokeWidth={2.2} />
              </div>
              <div>
                <div className="text-xl sm:text-2xl font-black text-[#111827] tracking-tight leading-tight">
                  Certification
                </div>
                <div className="text-xs font-semibold text-slate-700 mt-0.5">
                  Government-Pattern &amp; Industry
                </div>
                <div className="text-[11px] text-slate-600 font-medium">
                  MKCL Pattern &amp; GCC-TBC Typing
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ── 3. PROMO OFFER BANNER (Planned-Style Sleek Card) ──────────── */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 w-full">
        <div className="relative overflow-hidden rounded-3xl bg-[#0B0F19] text-white p-6 sm:p-10 shadow-2xl border border-slate-800">
          
          {/* Subtle Ambient Glow */}
          <div className="absolute -right-20 -top-20 w-80 h-80 bg-[#0084FF]/15 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute -left-20 -bottom-20 w-80 h-80 bg-[#F5BE4F]/10 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8">
            
            {/* Left: Badge & Headlines */}
            <div className="max-w-2xl">
              <div className="flex items-center gap-2 mb-3">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#F5BE4F]/15 border border-[#F5BE4F]/30 text-[#F5BE4F] text-xs font-bold uppercase tracking-wider">
                  <Sparkles size={12} className="text-[#F5BE4F]" />
                  Limited-Time Admission Offer
                </span>
                <span className="text-[11px] text-slate-400 font-medium hidden sm:inline">
                  Virar East Campus
                </span>
              </div>

              <h3 className="text-2xl sm:text-3xl lg:text-4xl font-black text-white tracking-tight leading-tight">
                Flat 50% Concession <span className="text-[#F5BE4F]">+ Free Basic Course</span>
              </h3>

              <p className="text-sm sm:text-base text-slate-300 mt-2.5 leading-relaxed">
                Enrol in any career-track diploma program this month and receive our complete foundational{' '}
                <strong className="text-white font-bold">Basic Computer Course</strong> at zero additional cost. Includes 100% individual workstation time and recognized certification.
              </p>

              {/* Perks list */}
              <div className="flex flex-wrap items-center gap-x-5 gap-y-2 mt-4 text-xs font-semibold text-slate-300">
                <span className="flex items-center gap-1.5">
                  <Check size={14} className="text-emerald-400" />
                  No Hidden Lab Fees
                </span>
                <span className="flex items-center gap-1.5">
                  <Check size={14} className="text-emerald-400" />
                  Morning &amp; Ladies Slots
                </span>
                <span className="flex items-center gap-1.5">
                  <Check size={14} className="text-emerald-400" />
                  Lifetime Doubt Support
                </span>
              </div>
            </div>

            {/* Right: Modern CTAs */}
            <div className="flex flex-col sm:flex-row lg:flex-col gap-3 shrink-0 w-full sm:w-auto lg:w-64">
              <a
                href={`${wa}?text=${encodeURIComponent('Hi! I would like to claim the 50% Admission Concession at Race Reddys Virar East.')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 h-12 px-6 rounded-full bg-[#25D366] hover:bg-[#20BA5A] text-white text-sm font-bold shadow-lg hover:shadow-xl transition-all active:scale-95"
              >
                <MessageSquare size={16} />
                <span>Claim on WhatsApp</span>
              </a>

              <a
                href={`tel:${phone}`}
                className="w-full inline-flex items-center justify-center gap-2 h-12 px-5 rounded-full bg-white/10 hover:bg-white/15 text-white border border-white/15 text-sm font-semibold transition-all active:scale-95"
              >
                <Phone size={15} className="text-[#0084FF]" />
                <span>Call {phone}</span>
              </a>

              <div className="text-center text-[10px] text-slate-400">
                {OFFERS_CONFIG.validityNote} · Raut Arcade, Virar East
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ── 4. COURSE CATALOG PREVIEW ──────────────────────────────── */}
      <section className="bg-white py-20 border-t border-[#C5C6D0]/40" id="courses">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-10">
            <div>
              <span className="text-xs text-[#1E4ED7] font-bold uppercase tracking-widest">Industry-Ready Curriculums</span>
              <h2 className="text-3xl sm:text-4xl text-[#000926] font-bold tracking-tight mt-1">
                Explore Our <span className="text-[#1E4ED7]">23 Practical Courses</span>
              </h2>
              <p className="text-base text-[#45464F] max-w-2xl mt-2">
                Choose from short-term software skills to comprehensive career-track diplomas.
              </p>
            </div>
            <div className="shrink-0">
              <span className="text-sm bg-[#E1E8FE] px-3.5 py-1.5 rounded-full text-[#141B2B] font-semibold">
                Individual Desktop for Every Learner
              </span>
            </div>
          </div>

          {/* Filter tabs */}
          <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-8" style={{ scrollbarWidth: 'none' }}>
            {FILTER_TABS.map((tab) => (
              <button
                key={tab.value}
                onClick={() => setActiveFilter(tab.value as typeof activeFilter)}
                className={`px-5 py-2.5 rounded-full text-sm font-semibold shrink-0 transition-colors ${
                  activeFilter === tab.value
                    ? 'bg-[#000926] text-white shadow-sm'
                    : 'bg-[#F1F3FF] text-[#45464F] hover:text-[#141B2B]'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Course cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredCourses.map((course, idx) => {
              const isCareer = course.type === 'career';
              const isPopular = idx === 1;
              return (
                <div
                  key={course.id}
                  className={`bg-white rounded-2xl border p-6 sm:p-7 shadow-[0_8px_24px_rgba(11,31,75,0.06)] hover:shadow-[0_16px_36px_rgba(11,31,75,0.12)] hover:-translate-y-1 transition-all flex flex-col justify-between relative overflow-hidden ${
                    isPopular ? 'border-[#1E4ED7]/30 ring-2 ring-[#1E4ED7]/10' : 'border-[#C5C6D0]'
                  }`}
                >
                  {isPopular && (
                    <div className="absolute top-0 right-0 bg-[#1E4ED7] text-white text-[10px] uppercase font-bold tracking-widest px-3 py-1 rounded-bl-lg">
                      Popular Diploma
                    </div>
                  )}
                  <div>
                    <div className="flex items-center justify-between gap-2 mb-4">
                      <span className={`px-3 py-1 rounded-md text-xs font-bold uppercase tracking-wider ${isCareer ? 'bg-[#DCE1FF] text-[#000926]' : 'bg-[#FBF3DD] text-[#996C00]'}`}>
                        {isCareer ? 'Career Diploma' : 'Short-Term'}
                      </span>
                      <span className="text-xs text-[#45464F] flex items-center gap-1 font-medium">
                        🕐 {course.durationPlaceholder}
                      </span>
                    </div>
                    <h3 className="text-lg text-[#000926] font-bold">{course.name}</h3>
                    <p className="text-sm text-[#45464F] mt-2 leading-relaxed">{course.shortDesc}</p>
                    <ul className="mt-4 space-y-2 border-t border-[#C5C6D0]/60 pt-4 text-xs text-[#141B2B]">
                      {course.topics.slice(0, 3).map((topic, i) => (
                        <li key={i} className="flex items-center gap-2">
                          <svg className="w-4 h-4 text-[#1FA855] shrink-0" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                          {topic}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="pt-6 mt-4 flex items-center gap-2 border-t border-[#C5C6D0]/40">
                    <Link
                      to={`/courses/${course.id}`}
                      className={`flex-1 inline-flex items-center justify-center h-10 px-4 rounded-full text-xs font-bold transition-colors ${
                        isPopular
                          ? 'bg-[#000926] text-white hover:bg-[#1E4ED7]'
                          : 'bg-[#E1E8FE] text-[#000926] hover:bg-[#000926] hover:text-white'
                      }`}
                    >
                      View Details
                    </Link>
                    <a
                      href={`${wa}?text=${encodeURIComponent(course.whatsappMessage)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      title="WhatsApp Enquiry"
                      className="h-10 w-10 rounded-full bg-[#1FA855] text-white flex items-center justify-center hover:brightness-110 transition-all shrink-0 text-sm"
                    >
                      💬
                    </a>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="mt-12 text-center">
            <Link
              to="/courses"
              className="inline-flex items-center justify-center h-12 px-8 rounded-full bg-[#000926] text-white text-sm font-bold shadow-md hover:bg-[#1E4ED7] transition-all"
            >
              View All 23 Courses &amp; Syllabi →
            </Link>
          </div>
        </div>
      </section>

      {/* ── 5. WHY RACE REDDYS ─────────────────────────────────────── */}
      <section className="bg-[#F1F3FF] py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="text-xs text-[#1E4ED7] font-bold uppercase tracking-widest">Built For Local Success</span>
            <h2 className="text-3xl sm:text-4xl text-[#000926] font-bold tracking-tight mt-1">
              Why Learners Choose <span className="text-[#0B1F4B]">Race Reddys</span> in Virar
            </h2>
            <p className="text-base text-[#45464F] mt-2 leading-relaxed">
              Clear, verifiable standards designed around the needs of local suburban learners.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: '🖥', bg: 'bg-[#0B1F4B]/10', title: '100% Practical Training', desc: 'Every student trains on their own dedicated desktop terminal during class hours. Zero screen sharing or passive watching.' },
              { icon: '⏰', bg: 'bg-[#F5BE4F]/20', title: 'Morning & Evening Batches', desc: 'Flexible daily timing slots between 9:00 AM and 7:00 PM to accommodate college lectures and work schedules.' },
              { icon: '👩‍💼', bg: 'bg-[#DCE1FF]', title: 'Special Batch for Ladies & Students', desc: 'A comfortable, supportive classroom environment with dedicated mentorship for homemakers and school students.' },
              { icon: '🎓', bg: 'bg-[#1FA855]/15', title: 'Free Lifetime Doubt Support', desc: 'Return to our practice lab even after course completion whenever you face technical questions in your job or business.' },
            ].map((item) => (
              <div key={item.title} className="bg-white p-7 rounded-2xl border border-[#C5C6D0] shadow-sm flex flex-col items-start">
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center text-2xl mb-5 ${item.bg}`}>{item.icon}</div>
                <h3 className="text-base text-[#000926] font-bold">{item.title}</h3>
                <p className="text-sm text-[#45464F] mt-2 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>

          <div className="mt-8 bg-white rounded-2xl border border-[#C5C6D0] p-6 sm:p-7 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-sm">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-[#1E4ED7] text-white flex items-center justify-center text-xl shrink-0">💼</div>
              <div>
                <h4 className="text-base text-[#000926] font-bold">Placement Assistance Available</h4>
                <p className="text-sm text-[#45464F] mt-0.5">We assist students with resume formatting, interview preparation, and direct local business referrals.</p>
              </div>
            </div>
            <a
              href={`tel:${phone}`}
              className="shrink-0 inline-flex items-center justify-center h-10 px-6 rounded-full bg-[#E9EDFF] text-[#000926] text-xs font-bold hover:bg-[#000926] hover:text-white transition-colors"
            >
              Discuss Career Guidance
            </a>
          </div>
        </div>
      </section>

      {/* ── 6. ADMISSION STEPS ─────────────────────────────────────── */}
      <section className="bg-white py-20 border-t border-[#C5C6D0]/40">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs text-[#1E4ED7] font-bold uppercase tracking-widest">Straightforward Process</span>
            <h2 className="text-3xl sm:text-4xl text-[#000926] font-bold tracking-tight mt-1">
              Begin Your Training in <span className="text-[#1E4ED7]">3 Simple Steps</span>
            </h2>
            <p className="text-base text-[#45464F] mt-2">Experience practical computer learning without bureaucratic delays or confusing forms.</p>
          </div>

          <div className="relative grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="hidden md:block absolute top-12 left-1/4 right-1/4 h-0.5 bg-[#C5C6D0] z-0" />
            {[
              { step: '01', color: 'bg-[#000926] text-white', border: 'border-[#C5C6D0]/80', title: 'Connect With Us', desc: 'Call or message us on WhatsApp to discuss your career goals and select the right course curriculum.', note: 'Immediate phone response' },
              { step: '02', color: 'bg-[#1E4ED7] text-white', border: 'border-[#1E4ED7]/40', title: 'Attend a Free Demo Session', desc: 'Visit our Raut Arcade lab, inspect our workstations, and experience a practical demonstration before enrolling.', note: 'Zero obligation preview' },
              { step: '03', color: 'bg-[#F5BE4F] text-[#2E1F00]', border: 'border-[#C5C6D0]/80', title: 'Select Your Batch & Start', desc: 'Choose a morning or evening timing slot that fits your routine and begin hands-on computer practice.', note: 'Flexible schedule choices' },
            ].map((s) => (
              <div key={s.step} className={`relative z-10 flex flex-col items-center text-center p-6 bg-white rounded-2xl border ${s.border} shadow-sm`}>
                <div className={`w-16 h-16 rounded-full ${s.color} flex items-center justify-center text-lg font-extrabold mb-5 shadow-md`}>{s.step}</div>
                <h3 className="text-lg text-[#000926] font-bold">{s.title}</h3>
                <p className="text-sm text-[#45464F] mt-2 leading-relaxed">{s.desc}</p>
                <div className="mt-4 pt-3 border-t border-[#C5C6D0]/40 w-full text-center">
                  <span className="text-xs text-[#1E4ED7] font-semibold">{s.note}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 7. GALLERY PREVIEW ─────────────────────────────────────── */}
      <section className="bg-[#F1F3FF] py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="text-xs text-[#1E4ED7] font-bold uppercase tracking-widest">Campus &amp; Facilities</span>
            <h2 className="text-3xl sm:text-4xl text-[#000926] font-bold tracking-tight mt-1">
              Life Inside Our <span className="text-[#C9972B]">Virar East Lab</span>
            </h2>
            <p className="text-base text-[#45464F] mt-2 leading-relaxed">Genuine glimpses of daily learning sessions at Raut Arcade.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Slot 1: actual lab image placeholder */}
            <div className="bg-white rounded-2xl border border-[#C5C6D0] overflow-hidden shadow-sm flex flex-col">
              <div className="aspect-[4/3] w-full bg-[#071B3A] relative flex items-center justify-center">
                <div className="text-center text-white/40">
                  <div className="text-4xl mb-2">📷</div>
                  <p className="text-xs font-medium">Lab Photo – To Be Added</p>
                </div>
                <span className="absolute top-3 left-3 bg-black/60 text-white px-2.5 py-1 rounded text-xs">Live Classroom</span>
              </div>
              <div className="p-5">
                <h4 className="text-base text-[#000926] font-bold">Raut Arcade Lab 202</h4>
                <p className="text-xs text-[#45464F] mt-1">Active practical session at Raut Arcade Lab 202. Students working individually on core programming and accounting software.</p>
                <div className="mt-4 pt-3 border-t border-[#C5C6D0]/40 flex items-center justify-between text-xs text-[#45464F]">
                  <span className="font-medium">Capacity: Individual terminals</span>
                  <span className="text-[#1E4ED7] font-semibold">Virar East</span>
                </div>
              </div>
            </div>

            {/* Slot 2: student story placeholder */}
            <div className="bg-white rounded-2xl border-2 border-dashed border-[#C5C6D0]/80 p-6 flex flex-col justify-between items-center text-center shadow-sm min-h-[340px]">
              <div className="my-auto flex flex-col items-center">
                <div className="w-16 h-16 rounded-full bg-[#E1E8FE] flex items-center justify-center text-3xl mb-4">📸</div>
                <span className="text-sm font-bold text-[#000926]">Student photo and quote (to be added)</span>
                <p className="text-xs text-[#45464F] mt-2 max-w-xs leading-relaxed">We collect verified feedback directly from enrolled students completing their certification courses.</p>
              </div>
              <div className="w-full py-2.5 px-3 rounded-lg bg-[#F1F3FF] text-xs text-[#45464F] border border-[#C5C6D0]/50">
                Verified local student profiles in progress
              </div>
            </div>

            {/* Slot 3: interior photo placeholder */}
            <div className="bg-white rounded-2xl border-2 border-dashed border-[#C5C6D0]/80 p-6 flex flex-col justify-between items-center text-center shadow-sm min-h-[340px]">
              <div className="my-auto flex flex-col items-center">
                <div className="w-16 h-16 rounded-full bg-[#E1E8FE] flex items-center justify-center text-3xl mb-4">🖥</div>
                <span className="text-sm font-bold text-[#000926]">Real photo of our lab (to be added)</span>
                <p className="text-xs text-[#45464F] mt-2 max-w-xs leading-relaxed">Additional photography showing student projects, instructor demonstrations, and equipment upgrades.</p>
              </div>
              <div className="w-full py-2.5 px-3 rounded-lg bg-[#F1F3FF] text-xs text-[#45464F] border border-[#C5C6D0]/50">
                Interior workstation photography
              </div>
            </div>
          </div>

          <div className="mt-10 text-center">
            <Link to="/gallery" className="inline-flex items-center gap-2 text-sm text-[#1E4ED7] font-bold hover:underline">
              View Full Gallery &amp; Student Stories →
            </Link>
          </div>
        </div>
      </section>

      {/* ── 8. FAQ ─────────────────────────────────────────────────── */}
      <section className="bg-white py-20 border-t border-[#C5C6D0]/40">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="text-xs text-[#1E4ED7] font-bold uppercase tracking-widest">Clear Information</span>
            <h2 className="text-3xl sm:text-4xl text-[#000926] font-bold tracking-tight mt-1">
              Frequently Asked <span className="text-[#0B1F4B]">Questions</span>
            </h2>
            <p className="text-base text-[#45464F] mt-2">Everything you need to know about joining our classes at Raut Arcade.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 items-start">
            <div className="space-y-4">
              {FAQS.slice(0, 3).map((faq, i) => (
                <div key={i} className="bg-[#F1F3FF] rounded-xl border border-[#C5C6D0] p-5">
                  <button className="flex items-center justify-between w-full text-left" onClick={() => setOpenFaq(openFaq === i ? null : i)}>
                    <span className="text-base text-[#000926] font-bold pr-4">{faq.q}</span>
                    <span className={`text-[#1E4ED7] text-xl shrink-0 transition-transform duration-200 ${openFaq === i ? 'rotate-45' : ''}`}>+</span>
                  </button>
                  {openFaq === i && <p className="text-sm text-[#45464F] mt-3 pt-3 border-t border-[#C5C6D0]/50 leading-relaxed">{faq.a}</p>}
                </div>
              ))}
            </div>
            <div className="space-y-4">
              {FAQS.slice(3).map((faq, i) => {
                const idx = i + 3;
                return (
                  <div key={idx} className="bg-[#F1F3FF] rounded-xl border border-[#C5C6D0] p-5">
                    <button className="flex items-center justify-between w-full text-left" onClick={() => setOpenFaq(openFaq === idx ? null : idx)}>
                      <span className="text-base text-[#000926] font-bold pr-4">{faq.q}</span>
                      <span className={`text-[#1E4ED7] text-xl shrink-0 transition-transform duration-200 ${openFaq === idx ? 'rotate-45' : ''}`}>+</span>
                    </button>
                    {openFaq === idx && <p className="text-sm text-[#45464F] mt-3 pt-3 border-t border-[#C5C6D0]/50 leading-relaxed">{faq.a}</p>}
                  </div>
                );
              })}
            </div>
          </div>

          <div className="mt-10 p-6 rounded-2xl bg-[#F1F3FF] border border-[#C5C6D0] flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <span className="text-[#1E4ED7] text-2xl">💬</span>
              <span className="text-sm text-[#141B2B]">Have a specific question not addressed above?</span>
            </div>
            <a
              href={`${wa}?text=${encodeURIComponent('Hi, I have a question about admissions at Race Reddys Virar East.')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm font-bold text-[#1E4ED7] hover:underline"
            >
              Ask our counsellor on WhatsApp →
            </a>
          </div>
        </div>
      </section>

      {/* ── 9. FINAL CTA BAND ──────────────────────────────────────── */}
      <section className="relative bg-gradient-to-r from-[#0B1F4B] via-[#07142F] to-[#0B1F4B] text-white py-16 lg:py-20 overflow-hidden">
        <div className="absolute inset-0 opacity-10 pointer-events-none" style={{ backgroundImage: 'radial-gradient(#ffffff 1px, transparent 1px)', backgroundSize: '20px 20px' }} />
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-12">
            <div className="flex-1 text-center lg:text-left">
              <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-[#F5BE4F] text-xs font-semibold uppercase tracking-wider mb-3">
                <span className="w-1.5 h-1.5 rounded-full bg-[#F5BE4F]" />
                Direct Station Access
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-tight">
                Visit Our Campus or <span className="text-[#F5BE4F]">Enquire Online</span> Today
              </h2>
              <p className="text-base text-[#757680] mt-3 max-w-2xl leading-relaxed">
                202, 2nd Floor, Raut Arcade, Opp Subway, opposite Virar East Railway Station. Open Monday to Saturday from 9:00 AM to 7:00 PM.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row items-center gap-4 shrink-0 w-full lg:w-auto">
              <a
                href={`${wa}?text=${encodeURIComponent('Hi, I would like to visit Race Reddys or enquire about admissions.')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-3.5 rounded-full bg-[#1FA855] text-white text-sm font-bold shadow-xl hover:bg-[#188E47] active:scale-95 transition-all"
              >
                💬 Chat on WhatsApp
              </a>
              <a
                href={`tel:${phone}`}
                className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-3.5 rounded-full bg-transparent text-white border border-white/30 text-sm font-bold hover:bg-white/10 active:scale-95 transition-all"
              >
                📞 Call {phone}
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
