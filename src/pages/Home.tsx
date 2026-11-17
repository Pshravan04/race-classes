import { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Check, 
  CheckCircle2, 
  X,
  Star, 
  Laptop, 
  Monitor, 
  Clock, 
  Award, 
  MessageSquare, 
  Phone, 
  Sparkles,
  ArrowRight,
  ChevronDown,
  ChevronUp,
  Play
} from 'lucide-react';
import SEO from '../components/SEO';
import CourseSlider from '../components/CourseSlider';
import { COURSES, SITE_CONFIG, OFFERS_CONFIG } from '../data/config';

// Featured career & foundational courses for homepage preview
const FEATURED_COURSE_IDS = [
  'english-speaking',
  'data-science-and-ai',
  'full-stack-developer-course',
  'devops-with-aws-course',
  'digital-marketing-course',
  'cyber-security-ethical-hacking-with-ai-course',
  'software-testing-course',
  'investment-banking-course',
  'advanced-tally-with-gst',
  'graphic-designing',
  'basic-computer',
];

const shortTermCount = COURSES.filter((c) => c.type === 'short-term').length;
const careerCount = COURSES.filter((c) => c.type === 'career').length;

const FILTER_TABS = [
  { label: `All Courses (${COURSES.length})`, value: 'all' },
  { label: `Career Master Programs (${careerCount})`, value: 'career' },
  { label: `Short-Term Certificates (${shortTermCount})`, value: 'short-term' },
];

const FAQS = [
  {
    q: 'Do I need prior computer knowledge to join?',
    a: 'No prior experience is necessary. Our instructors begin with foundational mouse and keyboard skills before advancing into specialized accounting, programming, or AI modules. Every student receives patient 1:1 guidance.',
  },
  {
    q: 'Is there a dedicated batch for ladies and homemakers?',
    a: 'Yes. We offer special afternoon slots (12:30 PM – 2:00 PM and 1:00 PM – 3:00 PM) with personalized, patient guidance specifically suited for homemakers, working women, and first-time female learners.',
  },
  {
    q: 'What is included in the free Basic Computer Course offer?',
    a: 'When you enroll in any career-track diploma program, the complete foundational Basic Computer module is included without extra tuition charge, covering Windows OS navigation, internet safety, and typing fundamentals.',
  },
  {
    q: 'Do students receive an authorized certificate upon completion?',
    a: 'Yes. Every student who successfully finishes course requirements and practical tests receives a verified certificate from RACE along with ISO 9001:2015 accredited credentials recognized by employers.',
  },
  {
    q: 'How can I obtain the current fee structure?',
    a: 'Please call our admissions desk at 8793314239 / 8482881614 / 9794323963 or send us a WhatsApp message. Our counselors share the exact syllabus breakdown and installment fee options transparently with zero hidden costs.',
  },
  {
    q: 'Where is the institute located and how close is the station?',
    a: 'We are located at 202, 2nd Floor, Raut Arcade, directly opposite the railway station subway entrance. It is less than a two-minute walk from Platform 1/2 exit, saving you 3+ hours daily compared to Mumbai commutes.',
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
        title="Don't Just Learn Computers. Learn Skills That Matter | RACE"
        description="Get hands-on training in AI, Digital Marketing, Programming and Advanced Computer Technologies at RACE. 100% practical-first learning on real systems."
        canonical="/"
      />

      {/* ─── 1. HERO SECTION (Split-Screen, Content Left, Real Lab Photo Right) ─── */}
      <section className="relative w-full bg-[#F8F9FA] text-[#001752] border-b border-slate-200/80 overflow-hidden">
        <div className="w-full grid grid-cols-1 lg:grid-cols-12 min-h-[580px] lg:min-h-[660px]">

          {/* Left Column: Authentic Copy & Actions (7 cols) */}
          <div className="lg:col-span-7 flex flex-col justify-center px-6 sm:px-10 lg:px-14 xl:px-18 py-12 sm:py-16 lg:py-20 max-w-3xl lg:max-w-none ml-auto">
            
            {/* Top Badges */}
            <div className="flex flex-wrap items-center gap-2 mb-4">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#C41E1E] text-white text-[11px] font-black uppercase tracking-wider shadow-xs">
                <Monitor size={12} className="stroke-[2.5]" />
                100% Practical Training
              </span>

              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white border border-slate-200 text-[#001752] text-[11px] font-bold shadow-xs">
                <Sparkles size={12} className="text-[#C41E1E]" />
                Flat 50% Concession Admissions Open
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[44px] xl:text-[50px] font-black text-[#001752] tracking-tight leading-[1.14] mb-4">
              Don't Just Learn Computers.{' '}
              <span className="text-[#C41E1E]">Learn Skills That Matter.</span>
            </h1>

            {/* Subtitle / Lead */}
            <p className="text-base sm:text-lg text-[#001752] font-semibold max-w-xl leading-snug mb-3">
              Get hands-on training in AI, Digital Marketing, Programming and Advanced Computer Technologies at RACE.
            </p>

            {/* Practical Proof Description */}
            <p className="text-sm sm:text-base text-slate-600 max-w-xl leading-relaxed mb-6 font-normal">
              Learn by practising on real systems, working on practical assignments and building skills that go beyond classroom theory.
            </p>

            {/* 3 Core Value Pillars */}
            <div className="flex flex-wrap items-center gap-2 sm:gap-2.5 mb-8">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-slate-200/90 text-[#001752] text-xs sm:text-sm font-bold shadow-xs hover-lift">
                <CheckCircle2 size={15} className="text-[#C41E1E] shrink-0" />
                <span>Practical-first learning</span>
              </div>
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-slate-200/90 text-[#001752] text-xs sm:text-sm font-bold shadow-xs hover-lift">
                <CheckCircle2 size={15} className="text-[#C41E1E] shrink-0" />
                <span>Industry-relevant courses</span>
              </div>
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-slate-200/90 text-[#001752] text-xs sm:text-sm font-bold shadow-xs hover-lift">
                <CheckCircle2 size={15} className="text-[#C41E1E] shrink-0" />
                <span>Personal guidance</span>
              </div>
            </div>

            {/* Dual Action Buttons */}
            <div className="flex flex-wrap items-center gap-3.5 mb-10">
              <a
                href={`tel:${phone}`}
                className="inline-flex items-center justify-center h-12 sm:h-13 px-8 rounded-full bg-[#C41E1E] hover:bg-[#A81717] text-white font-bold text-sm sm:text-base shadow-lg shadow-[#C41E1E]/25 btn-press transition-all"
              >
                Book a Free Demo
              </a>

              <Link
                to="/courses"
                className="inline-flex items-center justify-center h-12 sm:h-13 px-7 rounded-full bg-white text-[#001752] border border-[#001752] hover:bg-[#001752] hover:text-white font-bold text-sm sm:text-base btn-press transition-all shadow-xs"
              >
                Explore All 23 Courses
              </Link>
            </div>

            {/* Trusted Industry Standards & Accredited Certifications */}
            <div className="w-full max-w-xl pt-5 border-t border-slate-200">
              <span className="block text-[11px] font-bold text-slate-400 uppercase tracking-wider mb-3">
                Accredited Standards &amp; Industry Alignment
              </span>

              <div className="flex flex-wrap items-center gap-x-6 gap-y-2.5 text-xs text-slate-700 font-semibold">
                <div className="flex items-center gap-1.5">
                  <span className="w-4 h-4 rounded-full bg-[#E51B24] text-white text-[9px] font-black flex items-center justify-center">T</span>
                  <span>TallyPrime Authorised</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <span className="grid grid-cols-2 gap-0.5 w-3 h-3">
                    <span className="bg-[#F25022]"></span>
                    <span className="bg-[#7FBA00]"></span>
                    <span className="bg-[#00A4EF]"></span>
                    <span className="bg-[#FFB900]"></span>
                  </span>
                  <span>Microsoft Standard</span>
                </div>
                <div className="border border-slate-300 px-2 py-0.5 rounded text-[10.5px] font-bold text-slate-700">
                  ISO 9001:2015
                </div>
                <div className="text-slate-600">
                  MKCL Pattern
                </div>
                <div className="text-slate-600">
                  GCC-TBC Typing
                </div>
              </div>
            </div>

          </div>

          {/* Right Column: Real Lab Photo (5 cols) */}
          <div className="lg:col-span-5 relative w-full h-[420px] sm:h-[500px] lg:h-auto overflow-hidden bg-slate-900 flex flex-col justify-between p-6 sm:p-8 img-frame group">
            
            {/* Background Lab Photo */}
            <img
              src="/images/real-lab-classroom.jpg"
              alt="Students learning inside RACE computer laboratory"
              className="absolute inset-0 w-full h-full object-cover object-center img-zoom"
            />

            {/* Vignette Overlays for Contrast */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/25 to-black/30 pointer-events-none" />
            <div className="absolute inset-0 bg-gradient-to-r from-black/40 via-transparent to-transparent pointer-events-none hidden lg:block" />

            {/* Top Right Proximity Tag */}
            <div className="relative z-10 self-end">
              <div className="bg-white/95 backdrop-blur-md px-3.5 py-1.5 rounded-2xl shadow-xl border border-white/60 flex items-center gap-2.5 text-xs">
                <span className="bg-[#001752] text-white text-[10px] font-black px-2 py-0.5 rounded uppercase">
                  Terminal 202
                </span>
                <span className="font-bold text-[#001752]">
                  Station Subway 2 Min
                </span>
                <div className="bg-[#C41E1E] text-white text-[10px] font-black px-1.5 py-0.5 rounded-full flex items-center gap-0.5">
                  <span>4.9</span>
                  <Star size={9} className="fill-white text-white" />
                </div>
              </div>
            </div>

            {/* Bottom Verification Card */}
            <div className="relative z-10 max-w-sm bg-white/95 backdrop-blur-md p-4 sm:p-5 rounded-3xl shadow-2xl border border-white/60">
              <div className="flex items-center justify-between gap-3 mb-2">
                <div className="flex items-center gap-2">
                  <div className="w-5 h-5 rounded-full bg-emerald-500 text-white flex items-center justify-center shrink-0">
                    <Check size={12} strokeWidth={3} />
                  </div>
                  <span className="text-xs font-bold text-[#001752]">1 Student : 1 Machine Lab</span>
                </div>
                <span className="bg-red-50 text-[#C41E1E] text-[10px] font-black px-2 py-0.5 rounded-full border border-red-200">
                  Confirmed PC
                </span>
              </div>

              <p className="text-xs text-slate-600 leading-snug">
                Every session is 100% practical on your own dedicated desktop computer. Admissions open for morning, ladies, and evening batches.
              </p>

              <div className="mt-3 pt-2.5 border-t border-slate-200/80 flex items-center justify-between text-[11px]">
                <span className="font-extrabold text-[#C41E1E]">⚡ 50% Concession Available</span>
                <span className="text-slate-500 font-medium">Opp. Station Subway</span>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* ─── 2. CORE PILLARS & STATS (Clean 4-Box Bento Strip) ─── */}
      <section className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-6 sm:-mt-8 w-full">
        <div className="bg-white rounded-3xl shadow-xl border border-slate-200/90 p-5 sm:p-7">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-4 lg:divide-x divide-slate-100">
            
            {/* Pillar 1 */}
            <div className="flex items-center gap-3.5 px-3">
              <div className="w-12 h-12 rounded-2xl bg-[#FDF2F2] border border-[#FAD4D4] flex items-center justify-center text-[#C41E1E] shrink-0">
                <Laptop size={22} strokeWidth={2.2} />
              </div>
              <div>
                <div className="text-xl sm:text-2xl font-black text-[#001752] tracking-tight leading-tight">
                  23+ Courses
                </div>
                <div className="text-xs font-semibold text-slate-700 mt-0.5">
                  Job-Oriented Curriculums
                </div>
                <div className="text-[11px] text-slate-500 font-medium">
                  AI, Full Stack, Tally, Testing &amp; Design
                </div>
              </div>
            </div>

            {/* Pillar 2 */}
            <div className="flex items-center gap-3.5 px-3">
              <div className="w-12 h-12 rounded-2xl bg-emerald-50 border border-emerald-100 flex items-center justify-center text-emerald-600 shrink-0">
                <Monitor size={22} strokeWidth={2.2} />
              </div>
              <div>
                <div className="text-xl sm:text-2xl font-black text-[#001752] tracking-tight leading-tight">
                  1 : 1 Machine
                </div>
                <div className="text-xs font-semibold text-slate-700 mt-0.5">
                  100% Practical Guarantee
                </div>
                <div className="text-[11px] text-slate-500 font-medium">
                  Dedicated PC, zero machine sharing
                </div>
              </div>
            </div>

            {/* Pillar 3 */}
            <div className="flex items-center gap-3.5 px-3">
              <div className="w-12 h-12 rounded-2xl bg-[#001752]/5 border border-[#001752]/15 flex items-center justify-center text-[#001752] shrink-0">
                <Clock size={22} strokeWidth={2.2} />
              </div>
              <div>
                <div className="text-xl sm:text-2xl font-black text-[#001752] tracking-tight leading-tight">
                  8 AM – 8:30 PM
                </div>
                <div className="text-xs font-semibold text-slate-700 mt-0.5">
                  Flexible Daily Batches
                </div>
                <div className="text-[11px] text-slate-500 font-medium">
                  Morning, Evening &amp; Ladies Slots
                </div>
              </div>
            </div>

            {/* Pillar 4 */}
            <div className="flex items-center gap-3.5 px-3">
              <div className="w-12 h-12 rounded-2xl bg-amber-50 border border-amber-100 flex items-center justify-center text-amber-600 shrink-0">
                <Award size={22} strokeWidth={2.2} />
              </div>
              <div>
                <div className="text-xl sm:text-2xl font-black text-[#001752] tracking-tight leading-tight">
                  Certification
                </div>
                <div className="text-xs font-semibold text-slate-700 mt-0.5">
                  Authorized &amp; ISO 9001:2015
                </div>
                <div className="text-[11px] text-slate-500 font-medium">
                  MNC, Corporate &amp; Exam Recognized
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ─── 3. COURSE CATALOG PREVIEW ─── */}
      <section className="bg-white py-16 sm:py-20 border-t border-slate-200 mt-12" id="courses">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-8">
            <div>
              <span className="text-xs text-[#C41E1E] font-extrabold uppercase tracking-widest">
                Career &amp; Project-Oriented Pedagogy
              </span>
              <h2 className="text-3xl sm:text-4xl text-[#001752] font-black tracking-tight mt-1">
                Explore Our <span className="text-[#C41E1E]">23 Practical Courses</span>
              </h2>
              <p className="text-sm sm:text-base text-slate-600 max-w-2xl mt-1.5 leading-relaxed">
                Choose from foundational software modules to comprehensive career-track master programs with live capstones.
              </p>
            </div>
            <div className="shrink-0">
              <span className="text-xs bg-[#F1F4FA] border border-[#D5DFF0] px-3.5 py-1.5 rounded-full text-[#001752] font-bold">
                1:1 Individual Workstation Guaranteed
              </span>
            </div>
          </div>

          {/* Filter tabs */}
          <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-8 no-scrollbar">
            {FILTER_TABS.map((tab) => (
              <button
                key={tab.value}
                type="button"
                onClick={() => setActiveFilter(tab.value as typeof activeFilter)}
                className={`px-5 py-2 rounded-full text-xs sm:text-sm font-bold shrink-0 transition-all cursor-pointer ${
                  activeFilter === tab.value
                    ? 'bg-[#001752] text-white shadow-xs'
                    : 'bg-[#F1F4FA] text-slate-600 hover:text-[#001752] hover:bg-slate-200/70'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Course Cards Interactive Slider */}
          <CourseSlider courses={filteredCourses} activeFilter={activeFilter} />

          <div className="mt-10 text-center">
            <Link
              to="/courses"
              className="inline-flex items-center justify-center h-12 px-8 rounded-full bg-[#001752] hover:bg-[#C41E1E] text-white text-xs sm:text-sm font-bold shadow-md transition-all active:scale-95"
            >
              <span>View All 23 Course Syllabi &amp; Modules</span>
              <ArrowRight size={14} className="ml-2" />
            </Link>
          </div>
        </div>
      </section>

      {/* ─── 4. WHY RACE OVER 3-HOUR DISTANT COMMUTE (Comparison Matrix) ─── */}
      <section className="bg-[#F8F9FA] py-16 sm:py-20 border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-xs text-[#C41E1E] font-extrabold uppercase tracking-widest">
              Smart Suburban Learning Choice
            </span>
            <h2 className="text-3xl sm:text-4xl text-[#001752] font-black tracking-tight mt-1">
              Why Choose RACE Over <span className="text-[#C41E1E]">Traveling to Distant Centers?</span>
            </h2>
            <p className="text-sm sm:text-base text-slate-600 mt-2 leading-relaxed">
              Suburban learners often waste 3+ hours every day in packed local trains to institutes in Andheri, Dadar, or Thane. Here is why studying right beside the railway subway gives you a massive practical edge:
            </p>
          </div>

          <div className="overflow-x-auto rounded-3xl border border-slate-200 bg-white shadow-sm">
            <table className="w-full text-left text-xs sm:text-sm border-collapse">
              <thead>
                <tr className="bg-slate-100 text-[#001752] font-black border-b border-slate-200">
                  <th className="p-4 sm:p-5">Key Factor</th>
                  <th className="p-4 sm:p-5 bg-red-50 text-[#C41E1E] font-black">RACE (Station Subway)</th>
                  <th className="p-4 sm:p-5 text-slate-500 font-bold">Distant Mumbai Centers (Andheri/Dadar)</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200 text-slate-700">
                <tr>
                  <td className="p-4 sm:p-5 font-bold text-[#001752]">Daily Travel Time</td>
                  <td className="p-4 sm:p-5 bg-red-50/50 font-bold text-emerald-700">
                    <span className="inline-flex items-center gap-1.5">
                      <Check size={15} className="text-emerald-600 stroke-[3]" />
                      2-min walk from subway (0 hrs train fatigue)
                    </span>
                  </td>
                  <td className="p-4 sm:p-5 text-rose-600">
                    <span className="inline-flex items-center gap-1.5">
                      <X size={15} className="text-rose-500 stroke-[3]" />
                      2.5 to 3.5 hours every day in crowded local trains
                    </span>
                  </td>
                </tr>
                <tr>
                  <td className="p-4 sm:p-5 font-bold text-[#001752]">Workstation Guarantee</td>
                  <td className="p-4 sm:p-5 bg-red-50/50 font-bold text-[#C41E1E]">
                    <span className="inline-flex items-center gap-1.5">
                      <Check size={15} className="text-[#C41E1E] stroke-[3]" />
                      1 Student : 1 PC Guaranteed (Never share machines)
                    </span>
                  </td>
                  <td className="p-4 sm:p-5 text-slate-500">
                    <span className="inline-flex items-center gap-1.5">
                      <X size={15} className="text-slate-400 stroke-[3]" />
                      Often 2 students per computer in overcrowded batches
                    </span>
                  </td>
                </tr>
                <tr>
                  <td className="p-4 sm:p-5 font-bold text-[#001752]">Practical Lab Time</td>
                  <td className="p-4 sm:p-5 bg-red-50/50 font-bold text-emerald-700">
                    <span className="inline-flex items-center gap-1.5">
                      <Check size={15} className="text-emerald-600 stroke-[3]" />
                      Extra lab practice hours anytime during 8 AM – 8 PM
                    </span>
                  </td>
                  <td className="p-4 sm:p-5 text-slate-500">
                    <span className="inline-flex items-center gap-1.5">
                      <X size={15} className="text-slate-400 stroke-[3]" />
                      Strict time limits; asked to vacate for next batch
                    </span>
                  </td>
                </tr>
                <tr>
                  <td className="p-4 sm:p-5 font-bold text-[#001752]">Course Fees &amp; Savings</td>
                  <td className="p-4 sm:p-5 bg-red-50/50 font-bold text-[#001752]">
                    <span className="inline-flex items-center gap-1.5">
                      <Check size={15} className="text-emerald-600 stroke-[3]" />
                      Flat 50% Concession + FREE Basic Computer Course
                    </span>
                  </td>
                  <td className="p-4 sm:p-5 text-slate-500">
                    <span className="inline-flex items-center gap-1.5">
                      <X size={15} className="text-slate-400 stroke-[3]" />
                      High commercial overhead fees (₹60k – ₹1.2 Lakhs)
                    </span>
                  </td>
                </tr>
                <tr>
                  <td className="p-4 sm:p-5 font-bold text-[#001752]">Faculty Mentorship</td>
                  <td className="p-4 sm:p-5 bg-red-50/50 font-bold text-[#001752]">
                    <span className="inline-flex items-center gap-1.5">
                      <Check size={15} className="text-emerald-600 stroke-[3]" />
                      Personal 1:1 desk coaching, questions answered face-to-face
                    </span>
                  </td>
                  <td className="p-4 sm:p-5 text-slate-500">
                    <span className="inline-flex items-center gap-1.5">
                      <X size={15} className="text-slate-400 stroke-[3]" />
                      Large batches of 40–60 students; impersonal instruction
                    </span>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* ─── 5. AUTHENTIC LAB & CAMPUS SHOWCASE (Bento Grid, No Captions) ─── */}
      <section className="bg-white py-16 sm:py-20 border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
            <div>
              <span className="text-xs text-[#C41E1E] font-extrabold uppercase tracking-widest">
                Genuine Campus Facilities
              </span>
              <h2 className="text-3xl sm:text-4xl text-[#001752] font-black tracking-tight mt-1">
                Life Inside Our <span className="text-[#C41E1E]">Computer Lab</span>
              </h2>
              <p className="text-sm sm:text-base text-slate-600 max-w-2xl mt-1.5 leading-relaxed">
                Authentic glimpses of daily sessions at Raut Arcade 202. Dedicated desktop computers, desk-to-desk mentorship, and quiet study booths.
              </p>
            </div>

            <Link
              to="/gallery"
              className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold text-[#001752] hover:text-[#C41E1E] transition-colors shrink-0"
            >
              <span>View Full Campus Photo Gallery</span>
              <ArrowRight size={14} />
            </Link>
          </div>

          {/* Bento Photo Grid (House Rule 1: No captions underneath) */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-5">
            
            {/* Big Feature Photo: Main Lab */}
            <div className="md:col-span-7 rounded-3xl overflow-hidden bg-slate-900 border border-slate-200 shadow-sm img-frame group relative aspect-[16/10] sm:aspect-[16/11]">
              <img
                src="/images/real-lab-classroom.jpg"
                alt="Students practicing on computers in RACE laboratory"
                className="w-full h-full object-cover img-zoom"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent pointer-events-none" />
              <div className="absolute top-4 left-4">
                <span className="bg-[#001752] text-white text-[11px] font-bold px-3 py-1 rounded-full shadow-xs">
                  Active Practical Session
                </span>
              </div>
              <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-white text-xs">
                <span className="font-bold">Raut Arcade Lab 202</span>
                <span className="text-emerald-400 font-semibold bg-black/60 px-2.5 py-0.5 rounded-md">
                  1 Student : 1 PC
                </span>
              </div>
            </div>

            {/* Side Stack 1: Instructor Mentoring */}
            <div className="md:col-span-5 rounded-3xl overflow-hidden bg-slate-900 border border-slate-200 shadow-sm img-frame group relative aspect-[16/10] sm:aspect-[16/11]">
              <img
                src="/images/real-instructor-mentoring.jpg"
                alt="Instructor providing 1-on-1 desk coaching at RACE"
                className="w-full h-full object-cover img-zoom"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent pointer-events-none" />
              <div className="absolute top-4 left-4">
                <span className="bg-[#C41E1E] text-white text-[11px] font-bold px-3 py-1 rounded-full shadow-xs">
                  1-on-1 Desk Coaching
                </span>
              </div>
              <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-white text-xs">
                <span className="font-bold">Personalized Guidance</span>
                <span className="text-slate-300 font-medium">Ladies Special Batch</span>
              </div>
            </div>

            {/* Bottom Stack 1: Whiteboard Lecture */}
            <div className="md:col-span-4 rounded-3xl overflow-hidden bg-slate-900 border border-slate-200 shadow-sm img-frame group relative aspect-[16/10]">
              <img
                src="/images/real-teacher-lecture.jpg"
                alt="Interactive whiteboard lecture at RACE"
                className="w-full h-full object-cover img-zoom"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent pointer-events-none" />
              <div className="absolute top-4 left-4">
                <span className="bg-emerald-700 text-white text-[10.5px] font-bold px-2.5 py-0.5 rounded-full shadow-xs">
                  Concept Clarity
                </span>
              </div>
              <div className="absolute bottom-4 left-4 right-4 text-white text-xs font-bold">
                Daily Theory &amp; Whiteboard Prep
              </div>
            </div>

            {/* Bottom Stack 2: Data Analytics & Tally */}
            <div className="md:col-span-4 rounded-3xl overflow-hidden bg-slate-900 border border-slate-200 shadow-sm img-frame group relative aspect-[16/10]">
              <img
                src="/images/real-data-chart-session.jpg"
                alt="Data chart and accounting analysis session"
                className="w-full h-full object-cover img-zoom"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent pointer-events-none" />
              <div className="absolute top-4 left-4">
                <span className="bg-[#001752] text-white text-[10.5px] font-bold px-2.5 py-0.5 rounded-full shadow-xs">
                  Tally &amp; Excel Lab
                </span>
              </div>
              <div className="absolute bottom-4 left-4 right-4 text-white text-xs font-bold">
                Live Business Accounts Practice
              </div>
            </div>

            {/* Bottom Stack 3: Lab 202 Video Walkthrough */}
            <Link
              to="/gallery"
              className="md:col-span-4 rounded-3xl overflow-hidden bg-slate-900 border border-slate-200 shadow-sm img-frame group relative aspect-[16/10] block"
              aria-label="Watch Lab 202 Video Tour in Gallery"
            >
              <img
                src="/images/real-lab-wide.jpg"
                alt="Full panoramic view of workstation aisles and lab video tour"
                className="w-full h-full object-cover img-zoom opacity-90"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent pointer-events-none" />
              <div className="absolute top-4 left-4">
                <span className="bg-[#C41E1E] text-white text-[10.5px] font-bold px-2.5 py-0.5 rounded-full shadow-xs flex items-center gap-1">
                  <Play size={10} className="fill-current" />
                  <span>Video Tour</span>
                </span>
              </div>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-11 h-11 rounded-full bg-white/95 text-[#001752] flex items-center justify-center shadow-lg transition-transform group-hover:scale-110 group-hover:bg-[#A2D016]">
                  <Play size={18} className="fill-current ml-0.5" />
                </div>
              </div>
              <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-white text-xs font-bold">
                <span>Lab 202 Walkthrough</span>
                <span className="text-[#A2D016] font-mono text-[10px] bg-black/60 px-2 py-0.5 rounded-md">
                  1:15 min
                </span>
              </div>
            </Link>

          </div>
        </div>
      </section>

      {/* ─── 6. ADMISSION PROCESS (3-Step Practical Flow) ─── */}
      <section className="bg-[#F8F9FA] py-16 sm:py-20 border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="text-xs text-[#C41E1E] font-extrabold uppercase tracking-widest">
              Straightforward Enrolment
            </span>
            <h2 className="text-3xl sm:text-4xl text-[#001752] font-black tracking-tight mt-1">
              Begin Your Training in <span className="text-[#C41E1E]">3 Simple Steps</span>
            </h2>
            <p className="text-sm sm:text-base text-slate-600 mt-2 leading-relaxed">
              Experience practical computer learning without bureaucratic delays or confusing forms.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 sm:p-7 bg-white rounded-3xl border border-slate-200 shadow-sm flex flex-col justify-between hover-lift">
              <div>
                <span className="w-12 h-12 rounded-2xl bg-[#001752] text-white text-base font-black flex items-center justify-center mb-5">
                  01
                </span>
                <h3 className="text-lg font-bold text-[#001752] mb-2">
                  Connect &amp; Free Counseling
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  Call or WhatsApp our team. Discuss your goals whether you want a corporate job, want to manage family business accounts, or are starting from scratch.
                </p>
              </div>
              <div className="mt-5 pt-3 border-t border-slate-100 text-xs font-semibold text-[#001752]">
                Instant WhatsApp guidance
              </div>
            </div>

            <div className="p-6 sm:p-7 bg-white rounded-3xl border border-[#C41E1E]/40 shadow-sm flex flex-col justify-between hover-lift relative overflow-hidden">
              <span className="absolute top-3 right-3 bg-red-50 text-[#C41E1E] text-[10px] font-black uppercase px-2.5 py-0.5 rounded-full border border-red-200">
                Zero Obligation
              </span>
              <div>
                <span className="w-12 h-12 rounded-2xl bg-[#C41E1E] text-white text-base font-black flex items-center justify-center mb-5 shadow-md shadow-red-950/20">
                  02
                </span>
                <h3 className="text-lg font-bold text-[#001752] mb-2">
                  Attend a Free 1:1 Lab Demo
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  Visit our Raut Arcade lab opposite the subway. Sit at a workstation, experience a practical lesson, and inspect the curriculum firsthand before enrolling.
                </p>
              </div>
              <div className="mt-5 pt-3 border-t border-slate-100 text-xs font-semibold text-[#C41E1E]">
                1:1 Computer test drive
              </div>
            </div>

            <div className="p-6 sm:p-7 bg-white rounded-3xl border border-slate-200 shadow-sm flex flex-col justify-between hover-lift">
              <div>
                <span className="w-12 h-12 rounded-2xl bg-[#001752] text-white text-base font-black flex items-center justify-center mb-5">
                  03
                </span>
                <h3 className="text-lg font-bold text-[#001752] mb-2">
                  Allot Workstation &amp; Start
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  Pick your preferred timing slot (Morning, Afternoon, Ladies Special, or Evening) and get your dedicated PC allotted immediately with your 50% concession.
                </p>
              </div>
              <div className="mt-5 pt-3 border-t border-slate-100 text-xs font-semibold text-emerald-700">
                100% individual PC training
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── 7. CONCESSION OFFER BANNER (Placed at the bottom side) ─── */}
      <section className="bg-[#F8F9FA] py-16 sm:py-20 border-t border-slate-200" id="concession">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-[#000E33] via-[#001752] to-[#00081C] text-white p-6 sm:p-9 lg:p-11 shadow-2xl border border-[#002B94]">
            
            {/* Subtle Mesh Ambient Glow */}
            <div className="absolute -right-20 -top-20 w-[420px] h-[420px] bg-[#C41E1E]/20 rounded-full blur-[110px] pointer-events-none" />
            <div className="absolute -left-20 -bottom-20 w-[420px] h-[420px] bg-[#002277]/35 rounded-full blur-[120px] pointer-events-none" />

            <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
              
              {/* Left Column: Headlines & Highlights (7 cols) */}
              <div className="lg:col-span-7 flex flex-col justify-center pr-0 lg:pr-4">
                <div className="flex items-center gap-2 mb-3">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#C41E1E] text-white text-xs font-black uppercase tracking-wider shadow-xs">
                    <Sparkles size={12} className="text-white" />
                    Limited-Time Admission Offer
                  </span>
                  <span className="text-[11px] text-slate-300 font-medium hidden sm:inline">
                    Terminal 202
                  </span>
                </div>

                <h3 className="text-2xl sm:text-3xl lg:text-[34px] font-black text-white tracking-tight leading-tight">
                  Flat 50% Concession{' '}
                  <span className="text-[#F5BE4F]">
                    + Free Basic Computer Course
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
                    <span className="w-2 h-2 rounded-full bg-[#C41E1E]" />
                    <span>Free Course Worth ₹3,500</span>
                  </div>
                  <div className="bg-white/5 border border-white/10 px-3 py-1.5 rounded-full flex items-center gap-2 text-slate-300">
                    <span className="w-2 h-2 rounded-full bg-emerald-400" />
                    <span>1 Student : 1 Desktop Terminal</span>
                  </div>
                </div>
              </div>

              {/* Right Column: Lab Photo & Dual Actions (5 cols) */}
              <div className="lg:col-span-5 flex flex-col w-full">
                
                {/* Photo Card with Floating Badges */}
                <div className="relative rounded-2xl overflow-hidden border border-white/15 shadow-2xl bg-slate-900 group img-frame">
                  <div className="aspect-[16/10] w-full relative overflow-hidden">
                    <img
                      src="/images/real-instructor-mentoring.jpg"
                      alt="Instructor guiding students hands-on at computer workstation"
                      className="w-full h-full object-cover img-zoom"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-black/10 pointer-events-none" />

                    {/* Top-left: Location Pill */}
                    <div className="absolute top-3 left-3 bg-black/60 backdrop-blur-md px-3 py-1 rounded-full border border-white/20 text-[11px] font-semibold text-white flex items-center gap-1.5">
                      <Sparkles size={11} className="text-[#F5BE4F]" />
                      <span>Raut Arcade Lab 202</span>
                    </div>

                    {/* Top-right: 50% Concession Tag */}
                    <div className="absolute top-3 right-3 bg-[#C41E1E] text-white font-black text-xs px-3 py-1 rounded-full shadow-lg tracking-wider uppercase border border-red-400/40">
                      Flat 50% OFF
                    </div>

                    {/* Bottom: Floating Glass Tag */}
                    <div className="absolute bottom-3 left-3 right-3 bg-black/60 backdrop-blur-md px-3.5 py-2.5 rounded-xl border border-white/15 text-white flex items-center justify-between">
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

                {/* Side-by-Side Action Buttons */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 mt-3 w-full">
                  <a
                    href={`${wa}?text=${encodeURIComponent('Hi! I would like to claim the 50% Admission Concession at RACE.')}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 h-11 px-4 rounded-xl bg-[#C41E1E] hover:bg-[#A81717] text-white text-xs sm:text-sm font-bold shadow-lg btn-press cursor-pointer"
                  >
                    <MessageSquare size={16} />
                    <span>Claim on WhatsApp</span>
                  </a>

                  <a
                    href={`tel:${phone}`}
                    className="inline-flex items-center justify-center gap-2 h-11 px-4 rounded-xl bg-white/10 hover:bg-white/20 text-white border border-white/20 text-xs sm:text-sm font-bold btn-press cursor-pointer backdrop-blur-md"
                  >
                    <Phone size={15} className="text-[#F5BE4F]" />
                    <span>Call {phone}</span>
                  </a>
                </div>

                <div className="text-center text-[10px] text-slate-400 font-medium pt-1.5">
                  {OFFERS_CONFIG.validityNote} · Raut Arcade 202
                </div>

              </div>

            </div>
          </div>
        </div>
      </section>

      {/* ─── 8. FREQUENTLY ASKED QUESTIONS ─── */}
      <section className="bg-white py-16 sm:py-20 border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-xs text-[#C41E1E] font-extrabold uppercase tracking-widest">
              Clear Information
            </span>
            <h2 className="text-3xl sm:text-4xl text-[#001752] font-black tracking-tight mt-1">
              Frequently Asked <span className="text-[#C41E1E]">Questions</span>
            </h2>
            <p className="text-sm sm:text-base text-slate-600 mt-2">
              Everything you need to know about joining our classes at Raut Arcade.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-start max-w-5xl mx-auto">
            {FAQS.map((faq, idx) => {
              const isOpen = openFaq === idx;
              return (
                <div
                  key={idx}
                  className="rounded-2xl border border-slate-200 bg-[#F8F9FA] overflow-hidden transition-all shadow-xs"
                >
                  <button
                    type="button"
                    onClick={() => setOpenFaq(isOpen ? null : idx)}
                    className="w-full p-4 sm:p-5 text-left flex items-center justify-between gap-3 cursor-pointer hover:bg-slate-100/70 transition-colors"
                  >
                    <span className="text-xs sm:text-sm font-bold text-[#001752]">
                      {faq.q}
                    </span>
                    <span className="text-slate-400 shrink-0">
                      {isOpen ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
                    </span>
                  </button>

                  {isOpen && (
                    <div className="p-4 sm:p-5 bg-white border-t border-slate-200 text-xs sm:text-sm text-slate-600 leading-relaxed">
                      {faq.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          <div className="mt-10 p-5 rounded-2xl bg-[#F8F9FA] border border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4 max-w-5xl mx-auto">
            <div className="flex items-center gap-3">
              <span className="text-[#C41E1E] text-2xl">💬</span>
              <span className="text-xs sm:text-sm text-[#001752] font-medium">
                Have a specific question not addressed above?
              </span>
            </div>
            <a
              href={`${wa}?text=${encodeURIComponent('Hi! I have a question about admissions at RACE.')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold text-[#C41E1E] hover:underline shrink-0"
            >
              <span>Ask our counsellor on WhatsApp</span>
              <ArrowRight size={14} />
            </a>
          </div>
        </div>
      </section>

      {/* ─── 9. FINAL CTA BAND ─── */}
      <section className="relative bg-gradient-to-r from-[#000E33] via-[#001752] to-[#000E33] text-white py-16 sm:py-20 overflow-hidden border-t border-[#002277]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-12">
            <div className="flex-1 text-center lg:text-left">
              <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-white text-xs font-bold uppercase tracking-wider mb-3 border border-white/15">
                <span className="w-2 h-2 rounded-full bg-[#C41E1E]" />
                Direct Station Subway Access
              </span>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black tracking-tight text-white leading-tight">
                Visit Our Campus or <span className="text-[#F5BE4F]">Enquire Online</span> Today
              </h2>
              <p className="text-xs sm:text-sm text-slate-300 mt-2 max-w-2xl leading-relaxed">
                202, 2nd Floor, Raut Arcade, opposite railway station subway entrance. Open Monday to Saturday from 8:00 AM to 8:30 PM.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row items-center gap-3.5 shrink-0 w-full lg:w-auto">
              <a
                href={`${wa}?text=${encodeURIComponent('Hi, I would like to visit RACE or enquire about admissions.')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center px-7 py-3.5 rounded-full bg-[#C41E1E] hover:bg-[#A81717] text-white text-xs sm:text-sm font-bold shadow-xl btn-press"
              >
                <MessageSquare size={16} className="mr-2" />
                Chat on WhatsApp
              </a>
              <a
                href={`tel:${phone}`}
                className="w-full sm:w-auto inline-flex items-center justify-center px-7 py-3.5 rounded-full bg-white/10 text-white border border-white/20 text-xs sm:text-sm font-bold hover:bg-white/20 btn-press"
              >
                <Phone size={15} className="mr-2 text-[#F5BE4F]" />
                Call {phone}
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
