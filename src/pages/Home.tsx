import { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Check, 
  MapPin, 
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
import CampusCarousel from '../components/CampusCarousel';
import CourseSlider from '../components/CourseSlider';
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

  const filteredCourses =
    activeFilter === 'all'
      ? [
          ...COURSES.filter((c) => FEATURED_COURSE_IDS.includes(c.id)),
          ...COURSES.filter((c) => !FEATURED_COURSE_IDS.includes(c.id)),
        ]
      : COURSES.filter((c) => c.type === activeFilter);

  const wa = SITE_CONFIG.contact.whatsapp;
  const phone = SITE_CONFIG.contact.phone;

  return (
    <>
      <SEO
        title="Practical Computer & IT Training in Virar East | Race Reddys"
        description="Ab Mumbai jaane ki zarurat nahi. Learn Tally with GST, Typing, Web Development, MS Office, AI & ML right outside Virar East station. 100% practical lab, special ladies batch, 50% discount."
        canonical="/"
      />

      {/* ── 1. SPLIT-SCREEN HERO SECTION (Left Content, Right Full Image) ── */}
      <section className="relative w-full bg-[#F8F9FA] text-[#111827] border-b border-slate-200/80 overflow-hidden">
        <div className="w-full grid grid-cols-1 lg:grid-cols-2 min-h-[580px] lg:min-h-[680px]">

          {/* Left Column: Premium Content & CTAs */}
          <div className="flex flex-col justify-center px-6 sm:px-12 lg:px-14 xl:px-20 py-12 sm:py-16 lg:py-24 max-w-3xl lg:max-w-none ml-auto">
            
            {/* Top Badges */}
            <div className="flex flex-wrap items-center gap-2.5 mb-5">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#F5BE4F] text-[#111827] text-xs font-black uppercase tracking-wider shadow-2xs">
                <MapPin size={12} className="stroke-[2.5]" />
                Virar East · Opp. Subway
              </span>

              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white border border-slate-200 text-slate-800 text-xs font-bold shadow-2xs">
                <Sparkles size={12} className="text-[#0084FF]" />
                Flat 50% Concession Admissions Open
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-[54px] xl:text-[62px] font-black text-[#111827] tracking-tight leading-[1.08] mb-5 font-sans">
              Where your career comes together<span className="inline-block text-[#0084FF] font-light ml-1.5 -translate-y-1 transform scale-125 select-none">&#x00B4;</span>
            </h1>

            {/* Subtitle */}
            <p className="text-base sm:text-lg text-slate-600 max-w-xl leading-relaxed font-normal mb-8">
              Race Reddys makes it easy for anyone in Virar to master job-ready software, Tally Prime with GST, Typing, and Web Development with dedicated individual computers, personal instruction, and flexible daily batches.
            </p>

            {/* Dual Action Buttons */}
            <div className="flex flex-wrap items-center gap-3.5 mb-10 sm:mb-14">
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
              <span className="block text-xs font-semibold text-slate-400 uppercase tracking-wider mb-3.5">
                Trusted by 5,000+ Students &amp; Industry Standards
              </span>

              <div className="flex flex-wrap items-center gap-x-8 gap-y-3 opacity-80 grayscale hover:grayscale-0 transition-all duration-300">
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

          {/* Right Column: Full-Height, Full-Width Edge-to-Edge Image */}
          <div className="relative w-full h-[450px] sm:h-[550px] lg:h-auto min-h-[460px] lg:min-h-[660px] overflow-hidden bg-slate-900 flex flex-col justify-between p-6 sm:p-8">
            
            {/* Background Lab Photo filling 100% of the right side */}
            <img
              src="/images/hero-lab.jpg"
              alt="Students learning inside Race Reddys modern computer laboratory in Raut Arcade Virar East"
              className="absolute inset-0 w-full h-full object-cover object-center scale-102 hover:scale-105 transition-transform duration-700 ease-out"
            />

            {/* Subtle Gradient Overlays for Depth and Readability */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-black/35 pointer-events-none" />
            <div className="absolute inset-0 bg-gradient-to-r from-black/40 via-transparent to-transparent pointer-events-none hidden lg:block" />

            {/* Floating Top Right Tag */}
            <div className="relative z-10 self-end">
              <div className="bg-white/95 backdrop-blur-md px-3.5 py-2 rounded-2xl shadow-xl border border-white/60 flex items-center gap-3 text-xs">
                <span className="bg-slate-900 text-white text-[10px] font-bold px-2 py-0.5 rounded uppercase">
                  Terminal 202
                </span>
                <span className="font-semibold text-slate-800">
                  Raut Arcade · Virar East
                </span>
                <div className="bg-[#111827] text-white text-[10px] font-bold px-2 py-0.5 rounded-full flex items-center gap-1">
                  <span>4.9</span>
                  <Star size={9} className="fill-[#F5BE4F] text-[#F5BE4F]" />
                </div>
              </div>
            </div>

            {/* Floating Bottom Card Over Full Image */}
            <div className="relative z-10 max-w-md bg-white/95 backdrop-blur-md p-5 rounded-3xl shadow-2xl border border-white/60">
              <div className="flex items-center justify-between gap-3 mb-2.5">
                <div className="flex items-center gap-2">
                  <div className="w-5 h-5 rounded-full bg-emerald-500 text-white flex items-center justify-center shrink-0">
                    <Check size={12} strokeWidth={3} />
                  </div>
                  <span className="text-xs font-bold text-slate-900">1 Student : 1 Machine Lab</span>
                </div>
                <span className="bg-emerald-50 text-emerald-700 text-[10px] font-extrabold px-2 py-0.5 rounded-full border border-emerald-200">
                  Confirmed Seat
                </span>
              </div>

              <p className="text-xs text-slate-600 leading-snug">
                Every session is 100% practical on your own dedicated desktop computer. Admissions open for morning, ladies, and evening batches.
              </p>

              <div className="mt-3 pt-3 border-t border-slate-200/80 flex items-center justify-between text-[11px]">
                <span className="font-bold text-[#0084FF]">⚡ 50% Concession + Free Basic Course</span>
                <span className="text-slate-500 font-medium">Opp. Virar Station</span>
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

      {/* ── 3. PROMO OFFER BANNER (Smooth High-Conversion Card) ──────────── */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 w-full">
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-[#0B1528] via-[#080E1C] to-[#040812] text-white p-6 sm:p-9 lg:p-10 shadow-[0_20px_50px_rgba(0,0,0,0.45)] border border-white/10">
          
          {/* Subtle Ambient Glow */}
          <div className="absolute -right-16 -top-16 w-96 h-96 bg-[#0084FF]/16 rounded-full blur-[100px] pointer-events-none" />
          <div className="absolute -left-16 -bottom-16 w-96 h-96 bg-[#F5BE4F]/10 rounded-full blur-[100px] pointer-events-none" />

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
            
            {/* Left: Badge, Headlines & Highlights (7 cols) */}
            <div className="lg:col-span-7 flex flex-col justify-center pr-0 lg:pr-4">
              <div className="flex items-center gap-2 mb-3">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-400/10 border border-amber-400/25 text-[#F5BE4F] text-xs font-bold uppercase tracking-wider">
                  <Sparkles size={12} className="text-[#F5BE4F]" />
                  Limited-Time Admission Offer
                </span>
                <span className="text-[11px] text-slate-400 font-medium hidden sm:inline">
                  Virar East Campus
                </span>
              </div>

              <h3 className="text-2xl sm:text-3xl lg:text-[34px] font-black text-white tracking-tight leading-tight">
                Flat 50% Concession{' '}
                <span className="bg-gradient-to-r from-[#F5BE4F] via-[#FCE4A6] to-[#E5A93C] bg-clip-text text-transparent">
                  + Free Basic Course
                </span>
              </h3>

              <p className="text-sm sm:text-base text-slate-300 mt-3 leading-relaxed">
                Enrol in any career-track diploma program this month and receive our complete foundational{' '}
                <strong className="text-white font-bold">Basic Computer Course</strong> at zero additional cost. Includes 100% individual workstation time and recognized certification.
              </p>

              {/* Perks list */}
              <div className="flex flex-wrap items-center gap-x-3 gap-y-2 mt-5 text-xs font-semibold text-slate-300">
                <span className="flex items-center gap-1.5 bg-white/5 border border-white/10 px-2.5 py-1 rounded-lg">
                  <Check size={13} className="text-emerald-400 stroke-[3]" />
                  No Hidden Lab Fees
                </span>
                <span className="flex items-center gap-1.5 bg-white/5 border border-white/10 px-2.5 py-1 rounded-lg">
                  <Check size={13} className="text-emerald-400 stroke-[3]" />
                  Morning &amp; Ladies Slots
                </span>
                <span className="flex items-center gap-1.5 bg-white/5 border border-white/10 px-2.5 py-1 rounded-lg">
                  <Check size={13} className="text-emerald-400 stroke-[3]" />
                  Lifetime Doubt Support
                </span>
              </div>

              {/* Trust highlight chips */}
              <div className="mt-5 pt-4 border-t border-white/10 flex flex-wrap items-center gap-3 text-xs">
                <div className="bg-white/5 border border-white/10 px-3 py-1.5 rounded-full flex items-center gap-2 text-slate-300">
                  <span className="w-2 h-2 rounded-full bg-[#F5BE4F] shadow-[0_0_8px_#F5BE4F]" />
                  <span>Free Course Worth ₹3,500</span>
                </div>
                <div className="bg-white/5 border border-white/10 px-3 py-1.5 rounded-full flex items-center gap-2 text-slate-300">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 shadow-[0_0_8px_#34D399]" />
                  <span>1 Student : 1 Desktop Terminal</span>
                </div>
              </div>
            </div>

            {/* Right: Lab Image + Sleek Integrated Action Buttons (5 cols) */}
            <div className="lg:col-span-5 flex flex-col w-full">
              
              {/* Photo Card with Floating Badges */}
              <div className="relative rounded-2xl overflow-hidden border border-white/15 shadow-2xl bg-slate-900 group">
                <div className="aspect-[16/10] w-full relative overflow-hidden">
                  <img
                    src="/images/lab-students.jpg"
                    alt="Students practicing on computers in Virar East lab"
                    className="w-full h-full object-cover group-hover:scale-104 transition-transform duration-700 ease-out"
                  />
                  {/* Cinematic Vignette */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-black/10 pointer-events-none" />
                  <div className="absolute inset-0 ring-1 ring-inset ring-white/10 rounded-2xl pointer-events-none" />

                  {/* Top-left: Location Pill */}
                  <div className="absolute top-3 left-3 bg-black/55 backdrop-blur-md px-3 py-1 rounded-full border border-white/20 text-[11px] font-semibold text-white flex items-center gap-1.5 shadow-sm">
                    <Sparkles size={11} className="text-[#F5BE4F]" />
                    <span>Raut Arcade Lab 202</span>
                  </div>

                  {/* Top-right: 50% Concession Tag */}
                  <div className="absolute top-3 right-3 bg-gradient-to-r from-[#F5BE4F] to-[#E5A93C] text-slate-950 font-black text-xs px-3 py-1 rounded-full shadow-lg tracking-wider uppercase">
                    Flat 50% OFF
                  </div>

                  {/* Bottom: Floating Glass Tag */}
                  <div className="absolute bottom-3 left-3 right-3 bg-black/60 backdrop-blur-md px-3.5 py-2.5 rounded-xl border border-white/15 text-white flex items-center justify-between shadow-lg">
                    <div>
                      <span className="text-[10px] uppercase font-black text-[#F5BE4F] tracking-wider block">
                        Included Free
                      </span>
                      <strong className="text-xs sm:text-sm font-bold text-white block">
                        Basic Computer Foundation
                      </strong>
                    </div>
                    <div className="text-right shrink-0">
                      <span className="text-[10px] text-slate-300 block">Workstations</span>
                      <span className="text-xs font-bold text-emerald-400">1 Student : 1 PC</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Side-by-Side Modern Action Buttons */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 mt-3 w-full">
                <a
                  href={`${wa}?text=${encodeURIComponent('Hi! I would like to claim the 50% Admission Concession at Race Reddys Virar East.')}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 h-11 px-4 rounded-xl bg-gradient-to-r from-[#25D366] to-[#1EBE5D] hover:brightness-105 text-white text-xs sm:text-sm font-bold shadow-[0_4px_16px_rgba(37,211,102,0.25)] hover:shadow-[0_6px_22px_rgba(37,211,102,0.35)] transition-all active:scale-95 cursor-pointer"
                >
                  <MessageSquare size={16} />
                  <span>Claim on WhatsApp</span>
                </a>

                <a
                  href={`tel:${phone}`}
                  className="inline-flex items-center justify-center gap-2 h-11 px-4 rounded-xl bg-white/10 hover:bg-white/15 text-white border border-white/15 text-xs sm:text-sm font-semibold transition-all active:scale-95 cursor-pointer backdrop-blur-md"
                >
                  <Phone size={15} className="text-[#F5BE4F]" />
                  <span>Call {phone}</span>
                </a>
              </div>

              <div className="text-center text-[10px] text-slate-400 font-medium pt-1.5">
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

          {/* Course Cards Interactive Slider with Images */}
          <CourseSlider courses={filteredCourses} activeFilter={activeFilter} />

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

      {/* ── 4.5 CAMPUS & LAB INTERACTIVE CAROUSEL SLIDER ───────────── */}
      <CampusCarousel />

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
            {/* Slot 1: Live Lab Session */}
            <div className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-xs hover:shadow-md transition-shadow flex flex-col group">
              <div className="aspect-[4/3] w-full relative overflow-hidden bg-slate-900">
                <img
                  src="/images/lab-students.jpg"
                  alt="Students practicing on computers in Virar East lab"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <span className="absolute top-3 left-3 bg-[#0084FF] text-white px-2.5 py-1 rounded-full text-xs font-bold shadow-sm">
                  Live Lab Session
                </span>
                <span className="absolute bottom-3 right-3 bg-black/60 backdrop-blur-xs text-white text-[11px] font-medium px-2 py-0.5 rounded">
                  1 Student : 1 PC
                </span>
              </div>
              <div className="p-5 flex-1 flex flex-col justify-between">
                <div>
                  <h4 className="text-base text-[#000926] font-bold">Raut Arcade Lab 202</h4>
                  <p className="text-xs text-[#45464F] mt-1.5 leading-relaxed">
                    Active practical session at Raut Arcade Lab 202. Every student works on their own dedicated desktop terminal with modern core programming and accounting software.
                  </p>
                </div>
                <div className="mt-4 pt-3 border-t border-[#C5C6D0]/40 flex items-center justify-between text-xs text-[#45464F]">
                  <span className="font-semibold text-emerald-600">Individual Terminals</span>
                  <span className="text-[#1E4ED7] font-semibold">Virar East Station</span>
                </div>
              </div>
            </div>

            {/* Slot 2: 1-on-1 Faculty Mentorship */}
            <div className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-xs hover:shadow-md transition-shadow flex flex-col group">
              <div className="aspect-[4/3] w-full relative overflow-hidden bg-slate-900">
                <img
                  src="/images/ladies-guidance.jpg"
                  alt="Female instructor guiding student 1-on-1 at computer desk"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <span className="absolute top-3 left-3 bg-emerald-600 text-white px-2.5 py-1 rounded-full text-xs font-bold shadow-sm">
                  1-on-1 Mentorship
                </span>
                <span className="absolute bottom-3 right-3 bg-black/60 backdrop-blur-xs text-white text-[11px] font-medium px-2 py-0.5 rounded">
                  Ladies Special Batch
                </span>
              </div>
              <div className="p-5 flex-1 flex flex-col justify-between">
                <div>
                  <h4 className="text-base text-[#000926] font-bold">Patient Desk-to-Desk Guidance</h4>
                  <p className="text-xs text-[#45464F] mt-1.5 leading-relaxed">
                    Patient, step-by-step guidance. Our experienced instructors answer questions directly at your terminal, making it ideal for beginners, school students, and homemakers.
                  </p>
                </div>
                <div className="mt-4 pt-3 border-t border-[#C5C6D0]/40 flex items-center justify-between text-xs text-[#45464F]">
                  <span className="font-semibold text-purple-700">Ladies Batch: 12:30–4 PM</span>
                  <span className="text-[#1E4ED7] font-semibold">Safe Space</span>
                </div>
              </div>
            </div>

            {/* Slot 3: Course Completion & Certification */}
            <div className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-xs hover:shadow-md transition-shadow flex flex-col group">
              <div className="aspect-[4/3] w-full relative overflow-hidden bg-slate-900">
                <img
                  src="/images/certificate-success.jpg"
                  alt="Proud student with course completion certificate at Race Reddys"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <span className="absolute top-3 left-3 bg-amber-500 text-white px-2.5 py-1 rounded-full text-xs font-bold shadow-sm">
                  Student Success
                </span>
                <span className="absolute bottom-3 right-3 bg-black/60 backdrop-blur-xs text-white text-[11px] font-medium px-2 py-0.5 rounded">
                  5,000+ Alumni
                </span>
              </div>
              <div className="p-5 flex-1 flex flex-col justify-between">
                <div>
                  <h4 className="text-base text-[#000926] font-bold">Certified Career Diplomas</h4>
                  <p className="text-xs text-[#45464F] mt-1.5 leading-relaxed">
                    Proud students receiving recognized career certifications upon completing practical coursework. Verified credentials trusted by employers across Palghar and Mumbai MMR.
                  </p>
                </div>
                <div className="mt-4 pt-3 border-t border-[#C5C6D0]/40 flex items-center justify-between text-xs text-[#45464F]">
                  <span className="font-semibold text-sky-600">Authorized Certificate</span>
                  <span className="text-[#1E4ED7] font-semibold">Placement Help</span>
                </div>
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
