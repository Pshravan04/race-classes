import { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  ArrowRight, 
  ChevronLeft, 
  ChevronRight, 
  Plus, 
  Minus,
  CheckCircle2
} from 'lucide-react';
import SEO from '../components/SEO';
import { SITE_CONFIG } from '../data/config';

interface CourseCardData {
  id: string;
  category: string;
  title: string;
  duration: string;
  image: string;
  link: string;
}

const COURSES_DATA: CourseCardData[] = [
  {
    id: 'advanced-tally-with-gst',
    category: 'ACCOUNTING & TAX',
    title: 'Advanced Tally with GST',
    duration: '3 Months · Daily / Weekend',
    image: '/images/tally-practice.jpg',
    link: '/courses/advanced-tally-with-gst',
  },
  {
    id: 'full-stack-developer-course',
    category: 'FULL STACK',
    title: 'Full Stack Development',
    duration: '6 Months · Project-Based',
    image: '/images/student-coding.jpg',
    link: '/courses/full-stack-developer-course',
  },
  {
    id: 'data-science-and-ai',
    category: 'DATA & AI',
    title: 'Data Science & Analytics with AI',
    duration: '6 Months · AI Tools',
    image: '/images/real-data-chart-session.jpg',
    link: '/courses/data-science-and-ai',
  },
  {
    id: 'digital-marketing-course',
    category: 'MARKETING',
    title: 'Digital Marketing',
    duration: '4 Months · Live Campaigns',
    image: '/images/course-graphic-design.jpg',
    link: '/courses/digital-marketing-course',
  },
];

const FAQS_DATA = [
  {
    q: 'Do I need prior computer knowledge to join RACE?',
    a: 'No prior experience is necessary. We start from basic computer operations, Windows navigation, and keyboard skills before advancing to specialized accounting, programming, or AI tools.',
  },
  {
    q: 'Is there an individual computer guaranteed for every student?',
    a: 'Yes, absolutely. We strictly guarantee a 1 Student : 1 PC ratio. You will never share a computer terminal with anyone. Every minute of class is dedicated hands-on practical practice.',
  },
  {
    q: 'What batch timings are available?',
    a: 'We offer flexible Morning batches (8 AM–11 AM), Afternoon slots (12 PM–3 PM), Special Ladies Batch (12:30 PM–3 PM), and Evening batches (5 PM–7:30 PM). Weekend slots are also available.',
  },
  {
    q: 'What is included in the free Basic Computer Course offer?',
    a: 'When you enroll in any career-track diploma program, the complete foundational Basic Computer module is included without extra tuition charge, covering Windows OS navigation, internet safety, and typing fundamentals.',
  },
  {
    q: 'Do students receive a verified certificate upon completion?',
    a: 'Yes. Upon successfully finishing your coursework and practical exams, you will receive an authorized certificate from RACE along with ISO 9001:2015 accredited course completion credentials recognized by recruiters.',
  },
  {
    q: 'Where is the institute located?',
    a: 'We are located at 202, 2nd Floor, Raut Arcade, directly opposite the Virar East railway station subway entrance (less than a 2-minute walk from Platform 1/2 exit).',
  },
];

export default function Home() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const [courseIndex, setCourseIndex] = useState(0);

  const toggleFaq = (idx: number) => {
    setOpenFaq(openFaq === idx ? null : idx);
  };

  const nextCourses = () => {
    setCourseIndex((prev) => (prev + 1) % COURSES_DATA.length);
  };

  const prevCourses = () => {
    setCourseIndex((prev) => (prev - 1 + COURSES_DATA.length) % COURSES_DATA.length);
  };

  const visibleCourses = [
    ...COURSES_DATA.slice(courseIndex),
    ...COURSES_DATA.slice(0, courseIndex),
  ];

  return (
    <>
      <SEO
        title="RACE | Practical Computer & IT Training Institute Virar East"
        description="Build skills. Shape your future. Practical, career-focused computer education in Vasai-Virar. 1 Student : 1 PC guarantee, air-conditioned lab opposite station subway."
        canonical="/"
      />

      {/* Outer Canvas Background */}
      <div className="bg-[#F6F7F9] min-h-screen text-[#0B0B0B] font-body selection:bg-[#C41E1E] selection:text-white pb-20">
        
        <div className="max-w-[1400px] mx-auto px-3 sm:px-6 lg:px-8 pt-4 sm:pt-6 space-y-8 sm:space-y-12">

          {/* ══════════════════════════════════════════════════════════════════════
              SECTION 01 – HERO (White Rounded Container Matching Mockup)
              ══════════════════════════════════════════════════════════════════════ */}
          <section 
            aria-label="Hero"
            className="bg-white rounded-[24px] sm:rounded-[32px] p-6 sm:p-10 lg:p-12 border border-[#E5E7EB] shadow-2xs"
          >
            {/* Top Red Eyebrow */}
            <div className="mb-4">
              <span className="text-[#C41E1E] text-xs font-bold tracking-wider uppercase">
                PRACTICAL IT &amp; COMPUTER EDUCATION
              </span>
            </div>

            {/* Split Top Row: Headline Left, CTAs Right */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-start mb-8 sm:mb-10">
              
              {/* Left Column: Two-line Headline + Subtitle */}
              <div className="lg:col-span-7 space-y-3">
                <h1 className="text-4xl sm:text-5xl lg:text-[62px] font-bold text-[#001752] font-heading leading-[1.08] tracking-tight">
                  Build skills.<br />
                  Shape your future.
                </h1>
                <p className="text-sm sm:text-base text-slate-600 font-normal pt-1 max-w-lg">
                  Practical, career-focused computer education in Vasai-Virar.
                </p>
              </div>

              {/* Right Column: Workstation Note, Dual Buttons, Subway Note */}
              <div className="lg:col-span-5 flex flex-col lg:items-end space-y-4 pt-1 lg:pt-2">
                <p className="text-xs sm:text-sm text-slate-600 lg:text-right max-w-sm">
                  100% individual workstation time, certification, and flexible batches.
                </p>

                {/* Two Action Buttons Side-by-Side */}
                <div className="flex flex-wrap items-center gap-3">
                  <Link
                    to="/courses"
                    className="inline-flex items-center gap-1.5 bg-[#C41E1E] hover:bg-[#931616] text-white text-xs sm:text-sm font-bold px-5 sm:px-6 py-2.5 sm:py-3 rounded-full transition-all shadow-xs active:scale-95 cursor-pointer"
                  >
                    <span>Explore courses</span>
                    <ArrowRight size={14} />
                  </Link>

                  <Link
                    to="/contact#demo"
                    className="inline-flex items-center gap-1.5 bg-white hover:bg-slate-50 text-slate-800 border border-slate-300 text-xs sm:text-sm font-bold px-5 sm:px-6 py-2.5 sm:py-3 rounded-full transition-all active:scale-95 cursor-pointer"
                  >
                    <span>Book a demo</span>
                    <ArrowRight size={14} />
                  </Link>
                </div>

                <span className="text-[11px] text-slate-400 font-medium lg:text-right">
                  Opp. Virar East Railway Station Subway
                </span>
              </div>

            </div>

            {/* Dominant Hero Image Container with Rounded Corners */}
            <div className="relative w-full rounded-2xl sm:rounded-3xl overflow-hidden aspect-[16/9] sm:aspect-[21/9] lg:aspect-[2.35/1] bg-slate-900 border border-slate-200">
              <img
                src="/hero-lab.jpg"
                alt="Students practicing in computer lab at RACE Virar East"
                className="w-full h-full object-cover"
                loading="eager"
                onError={(e) => {
                  (e.target as HTMLImageElement).src = '/images/real-lab-classroom.jpg';
                }}
              />

              {/* Floating White Pill Inside Bottom-Left of Image */}
              <div className="absolute bottom-4 left-4 sm:bottom-6 sm:left-6 z-10">
                <div className="inline-flex items-center gap-2 bg-white/95 backdrop-blur-md px-3.5 py-1.5 rounded-full shadow-md text-[#001752] text-xs font-semibold">
                  <span className="w-2 h-2 rounded-full bg-[#10b981] animate-pulse" />
                  <span>1 Student : 1 PC Guaranteed · Air-conditioned lab</span>
                </div>
              </div>
            </div>

            {/* Caption Line Below Image */}
            <div className="flex items-center justify-between text-xs text-slate-500 pt-3.5 px-1 font-medium">
              <span>Individual machine time · No sharing</span>
              <span>Raut Arcade 202, Virar East</span>
            </div>

          </section>


          {/* ══════════════════════════════════════════════════════════════════════
              SECTION 02 – INTRODUCTION & 3 METRIC CARDS
              ══════════════════════════════════════════════════════════════════════ */}
          <section 
            aria-label="Digital Skills Today"
            className="bg-[#F6F7F9] rounded-[24px] sm:rounded-[32px] p-6 sm:p-10 lg:p-12 border border-[#E5E7EB]"
          >
            {/* Top Eyebrow */}
            <div className="mb-3">
              <span className="text-[#C41E1E] text-xs font-bold tracking-wider uppercase">
                DIGITAL SKILLS TODAY
              </span>
            </div>

            {/* Top Text Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-10 items-start mb-8 sm:mb-10">
              <div className="lg:col-span-7 space-y-2">
                <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-bold text-[#001752] font-heading leading-tight tracking-tight">
                  Digital skills today.<br />
                  New possibilities tomorrow.
                </h2>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal pt-1 max-w-xl">
                  Since 2014, Reddys Advanced Computer Education has helped ambitious learners in Vasai-Virar build practical skills. Through 1:1 desk coaching, we make tech careers accessible without the daily Mumbai commute.
                </p>
              </div>

              <div className="lg:col-span-5 flex flex-col lg:items-end justify-center space-y-1 text-xs text-slate-500 lg:text-right pt-2 lg:pt-6 font-medium">
                <p className="text-slate-700 font-semibold">Air-conditioned labs, 1:1 desk support.</p>
                <p>Opposite subway, Virar East station.</p>
              </div>
            </div>

            {/* Three White Metric Cards with Subtle Red Bottom Borders */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-6">
              
              {/* Card 1 */}
              <div className="bg-white rounded-2xl p-6 sm:p-8 border border-[#E5E7EB] border-b-2 border-b-[#C41E1E] shadow-2xs flex flex-col justify-between">
                <div>
                  <span className="text-4xl sm:text-5xl font-black text-[#001752] font-heading block tracking-tight">
                    10+
                  </span>
                  <h3 className="text-sm font-bold text-slate-800 mt-2">
                    Years of experience
                  </h3>
                  <p className="text-xs text-slate-500 leading-relaxed mt-1">
                    Dedicated practical computer training for learners of all backgrounds.
                  </p>
                </div>
              </div>

              {/* Card 2 */}
              <div className="bg-white rounded-2xl p-6 sm:p-8 border border-[#E5E7EB] border-b-2 border-b-[#C41E1E] shadow-2xs flex flex-col justify-between">
                <div>
                  <span className="text-4xl sm:text-5xl font-black text-[#001752] font-heading block tracking-tight">
                    5,000+
                  </span>
                  <h3 className="text-sm font-bold text-slate-800 mt-2">
                    Students trained
                  </h3>
                  <p className="text-xs text-slate-500 leading-relaxed mt-1">
                    From beginners to working professionals across Vasai, Virar, and Palghar.
                  </p>
                </div>
              </div>

              {/* Card 3 */}
              <div className="bg-white rounded-2xl p-6 sm:p-8 border border-[#E5E7EB] border-b-2 border-b-[#C41E1E] shadow-2xs flex flex-col justify-between">
                <div>
                  <span className="text-4xl sm:text-5xl font-black text-[#001752] font-heading block tracking-tight">
                    1:1
                  </span>
                  <h3 className="text-sm font-bold text-slate-800 mt-2">
                    Student to PC guarantee
                  </h3>
                  <p className="text-xs text-slate-500 leading-relaxed mt-1">
                    Your own dedicated computer during every session. Zero machine sharing.
                  </p>
                </div>
              </div>

            </div>
          </section>


          {/* ══════════════════════════════════════════════════════════════════════
              SECTION 03 – FIND YOUR NEXT STEP (Course Cards)
              ══════════════════════════════════════════════════════════════════════ */}
          <section 
            aria-label="Courses"
            className="bg-white rounded-[24px] sm:rounded-[32px] p-6 sm:p-10 lg:p-12 border border-[#E5E7EB] shadow-2xs"
          >
            {/* Top Eyebrow */}
            <div className="mb-4">
              <span className="text-[#C41E1E] text-xs font-bold tracking-wider uppercase">
                EXPLORE OUR COURSES
              </span>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
              
              {/* Left Column: Heading, Subtitle, All Courses Link, Nav Arrows */}
              <div className="lg:col-span-3 space-y-4">
                <h2 className="text-3xl sm:text-4xl font-bold text-[#001752] font-heading leading-tight tracking-tight">
                  Find your<br />
                  next step.
                </h2>

                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  Practical programs tailored for career growth.
                </p>

                <div className="pt-2">
                  <Link
                    to="/courses"
                    className="text-xs font-bold text-slate-900 hover:text-[#C41E1E] transition-colors inline-flex items-center gap-1"
                  >
                    <span>All 23 courses</span>
                    <ArrowRight size={13} />
                  </Link>
                </div>

                {/* Circular Arrow Dots */}
                <div className="pt-4 flex items-center gap-2">
                  <button
                    type="button"
                    onClick={prevCourses}
                    className="w-8 h-8 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-700 flex items-center justify-center transition-colors cursor-pointer"
                    aria-label="Previous courses"
                  >
                    <ChevronLeft size={16} />
                  </button>
                  <button
                    type="button"
                    onClick={nextCourses}
                    className="w-8 h-8 rounded-full bg-[#001752] hover:bg-[#16345c] text-white flex items-center justify-center transition-colors cursor-pointer"
                    aria-label="Next courses"
                  >
                    <ChevronRight size={16} />
                  </button>
                </div>
              </div>

              {/* Right Column: 4 Course Cards Grid */}
              <div className="lg:col-span-9 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {visibleCourses.map((course) => (
                  <div
                    key={course.id}
                    className="bg-white rounded-2xl border border-[#E5E7EB] overflow-hidden flex flex-col justify-between hover:shadow-md transition-shadow group"
                  >
                    <div>
                      {/* Image Frame */}
                      <div className="relative aspect-[4/3] w-full overflow-hidden bg-slate-900">
                        <img
                          src={course.image}
                          alt={course.title}
                          className="w-full h-full object-cover group-hover:scale-103 transition-transform duration-500"
                          loading="lazy"
                        />
                        <div className="absolute top-2.5 left-2.5">
                          <span className="bg-[#001752]/90 backdrop-blur-xs text-white text-[9px] font-bold uppercase tracking-wider px-2 py-0.5 rounded">
                            {course.category}
                          </span>
                        </div>
                      </div>

                      {/* Content */}
                      <div className="p-4 space-y-1.5">
                        <h3 className="text-sm font-bold text-[#001752] leading-snug line-clamp-2 min-h-[2.5rem]">
                          <Link to={course.link} className="hover:text-[#C41E1E] transition-colors">
                            {course.title}
                          </Link>
                        </h3>
                        <p className="text-[11px] text-slate-500 font-medium">
                          {course.duration}
                        </p>
                      </div>
                    </div>

                    {/* Bottom Red Link */}
                    <div className="p-4 pt-0">
                      <Link
                        to={course.link}
                        className="text-xs font-bold text-[#C41E1E] hover:underline inline-flex items-center gap-1"
                      >
                        <span>View details</span>
                        <ArrowRight size={12} />
                      </Link>
                    </div>
                  </div>
                ))}
              </div>

            </div>
          </section>


          {/* ══════════════════════════════════════════════════════════════════════
              SECTION 04 – FROM LEARNING TO REAL-WORLD SKILLS (Process Grid)
              ══════════════════════════════════════════════════════════════════════ */}
          <section 
            aria-label="Process"
            className="bg-[#F6F7F9] rounded-[24px] sm:rounded-[32px] p-6 sm:p-10 lg:p-12 border border-[#E5E7EB]"
          >
            {/* Top Eyebrow */}
            <div className="mb-3">
              <span className="text-[#C41E1E] text-xs font-bold tracking-wider uppercase">
                HOW WE WORK, START TO FINISH
              </span>
            </div>

            {/* Heading & Subtitle */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 lg:gap-8 items-start mb-8 sm:mb-10">
              <div className="lg:col-span-7">
                <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-bold text-[#001752] font-heading leading-tight tracking-tight">
                  From learning to<br />
                  real-world skills.
                </h2>
              </div>
              <div className="lg:col-span-5 lg:text-right pt-1 lg:pt-3">
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                  A structured four-step path to build practical skills that lead to real career opportunities.
                </p>
              </div>
            </div>

            {/* Top Row: 3 White Step Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-6 mb-6">
              
              {/* Step 01 */}
              <div className="bg-white rounded-2xl p-5 sm:p-6 border border-[#E5E7EB] shadow-2xs flex flex-col justify-between">
                <div>
                  <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider block mb-1">
                    Step 01
                  </span>
                  <h3 className="text-base font-bold text-[#001752] mb-1.5">
                    Understand your goals
                  </h3>
                  <p className="text-xs text-slate-500 leading-relaxed mb-4">
                    1-on-1 personalized counseling to align your learning with your career objectives.
                  </p>
                </div>
                <div className="relative rounded-xl overflow-hidden aspect-[16/10] bg-slate-900">
                  <img
                    src="/images/ladies-guidance.jpg"
                    alt="Counseling session at RACE"
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </div>
              </div>

              {/* Step 02 */}
              <div className="bg-white rounded-2xl p-5 sm:p-6 border border-[#E5E7EB] shadow-2xs flex flex-col justify-between">
                <div>
                  <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider block mb-1">
                    Step 02
                  </span>
                  <h3 className="text-base font-bold text-[#001752] mb-1.5">
                    Learn by doing
                  </h3>
                  <p className="text-xs text-slate-500 leading-relaxed mb-4">
                    100% lab practice on your own PC. Live demos, syntax, and step-by-step exercises.
                  </p>
                </div>
                <div className="relative rounded-xl overflow-hidden aspect-[16/10] bg-slate-900">
                  <img
                    src="/images/real-lab-classroom.jpg"
                    alt="Practical lab session"
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </div>
              </div>

              {/* Step 03 */}
              <div className="bg-white rounded-2xl p-5 sm:p-6 border border-[#E5E7EB] shadow-2xs flex flex-col justify-between">
                <div>
                  <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider block mb-1">
                    Step 03
                  </span>
                  <h3 className="text-base font-bold text-[#001752] mb-1.5">
                    Build real projects
                  </h3>
                  <p className="text-xs text-slate-500 leading-relaxed mb-4">
                    Company vouchers, dynamic web apps, database models, and live campaigns.
                  </p>
                </div>
                <div className="relative rounded-xl overflow-hidden aspect-[16/10] bg-slate-900">
                  <img
                    src="/images/student-coding.jpg"
                    alt="Student coding projects"
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </div>
              </div>

            </div>

            {/* Bottom Row: Wide Split Navy Card */}
            <div className="bg-[#001752] text-white rounded-2xl sm:rounded-3xl overflow-hidden shadow-lg border border-[#00113E] grid grid-cols-1 lg:grid-cols-12">
              {/* Left Content */}
              <div className="lg:col-span-6 p-6 sm:p-8 lg:p-10 flex flex-col justify-between space-y-6">
                <div>
                  <span className="text-[11px] font-bold text-[#DF8383] uppercase tracking-wider block mb-2">
                    STEP 04 · CAREER ACCELERATION
                  </span>
                  <h3 className="text-2xl sm:text-3xl font-bold font-heading text-white tracking-tight leading-tight mb-3">
                    More than a course.<br />
                    A career-ready you.
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed max-w-md">
                    Resume workshops, mock interviews, and ISO 9001:2015 certification recognized across Mumbai.
                  </p>
                </div>

                <div>
                  <Link
                    to="/contact#demo"
                    className="inline-flex items-center gap-1.5 bg-white hover:bg-slate-100 text-[#001752] text-xs sm:text-sm font-bold px-5 py-2.5 rounded-full transition-all shadow-xs"
                  >
                    <span>Book a free demo</span>
                    <ArrowRight size={13} />
                  </Link>
                </div>
              </div>

              {/* Right Image */}
              <div className="lg:col-span-6 relative aspect-[16/9] lg:aspect-auto min-h-[220px] bg-slate-900">
                <img
                  src="/images/real-students-presentation.jpg"
                  alt="Presentation at RACE lab"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
            </div>

          </section>


          {/* ══════════════════════════════════════════════════════════════════════
              SECTION 05 – THE RACE EXPERIENCE (Bento Image Grid)
              ══════════════════════════════════════════════════════════════════════ */}
          <section 
            aria-label="Gallery"
            className="bg-white rounded-[24px] sm:rounded-[32px] p-6 sm:p-10 lg:p-12 border border-[#E5E7EB] shadow-2xs"
          >
            {/* Top Eyebrow */}
            <div className="mb-3">
              <span className="text-[#C41E1E] text-xs font-bold tracking-wider uppercase">
                THE RACE EXPERIENCE
              </span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-bold text-[#001752] font-heading leading-tight tracking-tight mb-2">
              More than learning.<br />
              Building your future.
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 font-normal mb-8">
              Inside the classrooms and computer labs of RACE, Virar East.
            </p>

            {/* Bento Grid Layout Matching Mockup */}
            <div className="space-y-4">
              
              {/* Row 1: Lab classroom (wide) + Coding session + Campus Card + 1:1 desk mentoring (tall) */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-4">
                
                {/* Photo 1: Lab Classroom (3 cols) */}
                <div className="lg:col-span-3 relative rounded-2xl overflow-hidden aspect-[4/3] bg-slate-900 group">
                  <img
                    src="/images/real-lab-classroom.jpg"
                    alt="Air-conditioned lab 202"
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-transparent pointer-events-none" />
                  <span className="absolute bottom-2.5 left-2.5 text-[10px] font-bold text-white bg-black/60 px-2 py-0.5 rounded backdrop-blur-xs">
                    Air-conditioned lab 202
                  </span>
                </div>

                {/* Photo 2: Coding session (3 cols) */}
                <div className="lg:col-span-3 relative rounded-2xl overflow-hidden aspect-[4/3] bg-slate-900 group">
                  <img
                    src="/images/student-coding.jpg"
                    alt="Coding session"
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-transparent pointer-events-none" />
                  <span className="absolute bottom-2.5 left-2.5 text-[10px] font-bold text-white bg-black/60 px-2 py-0.5 rounded backdrop-blur-xs">
                    Coding session
                  </span>
                </div>

                {/* Card: A Campus Built Around You (3 cols) */}
                <div className="lg:col-span-3 bg-[#F6F7F9] rounded-2xl p-5 border border-slate-200 flex flex-col justify-between">
                  <div>
                    <h3 className="text-base font-bold text-[#001752] leading-snug mb-3">
                      A campus built<br />around you.
                    </h3>
                    <ul className="space-y-2 text-xs text-slate-600">
                      <li className="flex items-center gap-1.5">
                        <CheckCircle2 size={13} className="text-[#C41E1E] shrink-0" />
                        <span>2 min from Virar East station</span>
                      </li>
                      <li className="flex items-center gap-1.5">
                        <CheckCircle2 size={13} className="text-[#C41E1E] shrink-0" />
                        <span>1 Student : 1 PC guaranteed</span>
                      </li>
                      <li className="flex items-center gap-1.5">
                        <CheckCircle2 size={13} className="text-[#C41E1E] shrink-0" />
                        <span>Air-conditioned labs</span>
                      </li>
                      <li className="flex items-center gap-1.5">
                        <CheckCircle2 size={13} className="text-[#C41E1E] shrink-0" />
                        <span>Special ladies batch (12:30–3 PM)</span>
                      </li>
                    </ul>
                  </div>
                </div>

                {/* Photo 3: 1:1 Desk Mentoring (3 cols) */}
                <div className="lg:col-span-3 relative rounded-2xl overflow-hidden aspect-[4/3] sm:aspect-auto bg-slate-900 group">
                  <img
                    src="/images/real-instructor-mentoring.jpg"
                    alt="1:1 desk mentoring"
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-transparent pointer-events-none" />
                  <span className="absolute bottom-2.5 left-2.5 text-[10px] font-bold text-white bg-black/60 px-2 py-0.5 rounded backdrop-blur-xs">
                    1:1 desk mentoring
                  </span>
                </div>

              </div>

              {/* Row 2: 4 Photos (Practical lab, Personal workstation, Computer workstations, Job-ready skills) */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                
                {/* Photo 4 */}
                <div className="relative rounded-2xl overflow-hidden aspect-[4/3] bg-slate-900 group">
                  <img
                    src="/images/real-lab-wide.jpg"
                    alt="Practical lab"
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-transparent pointer-events-none" />
                  <span className="absolute bottom-2.5 left-2.5 text-[10px] font-bold text-white bg-black/60 px-2 py-0.5 rounded backdrop-blur-xs">
                    Practical lab
                  </span>
                </div>

                {/* Photo 5 */}
                <div className="relative rounded-2xl overflow-hidden aspect-[4/3] bg-slate-900 group">
                  <img
                    src="/images/real-data-chart-session.jpg"
                    alt="Personal workstation"
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-transparent pointer-events-none" />
                  <span className="absolute bottom-2.5 left-2.5 text-[10px] font-bold text-white bg-black/60 px-2 py-0.5 rounded backdrop-blur-xs">
                    Personal workstation
                  </span>
                </div>

                {/* Photo 6 */}
                <div className="relative rounded-2xl overflow-hidden aspect-[4/3] bg-slate-900 group">
                  <img
                    src="/images/lab-students.jpg"
                    alt="Computer workstations"
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-transparent pointer-events-none" />
                  <span className="absolute bottom-2.5 left-2.5 text-[10px] font-bold text-white bg-black/60 px-2 py-0.5 rounded backdrop-blur-xs">
                    Computer workstations
                  </span>
                </div>

                {/* Photo 7 */}
                <div className="relative rounded-2xl overflow-hidden aspect-[4/3] bg-slate-900 group">
                  <img
                    src="/images/certificate-success.jpg"
                    alt="Job-ready skills"
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-transparent pointer-events-none" />
                  <span className="absolute bottom-2.5 left-2.5 text-[10px] font-bold text-white bg-black/60 px-2 py-0.5 rounded backdrop-blur-xs">
                    Job-ready skills
                  </span>
                </div>

              </div>

            </div>

            {/* Bottom Caption Line */}
            <div className="mt-4 pt-4 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 font-medium">
              <span>A training environment that feels like a real office.</span>
              <span>Opposite Virar East subway, Platform 1/2.</span>
            </div>

          </section>


          {/* ══════════════════════════════════════════════════════════════════════
              SECTION 06 – FEATURED CTA (Navy Container + 50% Concession Card)
              ══════════════════════════════════════════════════════════════════════ */}
          <section 
            aria-label="Call to Action"
            className="bg-[#001752] text-white rounded-[24px] sm:rounded-[32px] p-6 sm:p-10 lg:p-12 shadow-xl border border-[#00113E]"
          >
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              
              {/* Left Column: Headlines & Dual Buttons */}
              <div className="lg:col-span-8 space-y-4">
                <span className="text-[11px] font-bold text-[#DF8383] uppercase tracking-wider block">
                  LIMITED SEATS · ADMISSION OPEN
                </span>

                <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-bold font-heading text-white tracking-tight leading-tight">
                  Ready to take the next<br />
                  step in your career?
                </h2>

                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed max-w-xl">
                  Build the practical skills that move your future forward. Enquire today for 50% concession on career diplomas and a free Basic Computer module.
                </p>

                <div className="flex flex-wrap items-center gap-3 pt-2">
                  <Link
                    to="/contact#enquiry"
                    className="inline-flex items-center gap-1.5 bg-[#C41E1E] hover:bg-[#931616] text-white text-xs sm:text-sm font-bold px-6 py-3 rounded-full transition-all shadow-md active:scale-95"
                  >
                    <span>Enquire now</span>
                    <ArrowRight size={14} />
                  </Link>

                  <Link
                    to="/courses"
                    className="inline-flex items-center gap-1.5 bg-white/10 hover:bg-white/20 text-white border border-white/30 text-xs sm:text-sm font-bold px-6 py-3 rounded-full transition-all"
                  >
                    <span>View all courses</span>
                  </Link>
                </div>
              </div>

              {/* Right Column: White 50% Concession Pass Card */}
              <div className="lg:col-span-4 flex justify-center lg:justify-end">
                <div className="w-full max-w-xs bg-white text-[#001752] rounded-2xl sm:rounded-3xl p-6 sm:p-8 text-center shadow-xl space-y-2">
                  <span className="text-[10px] font-bold text-slate-500 uppercase tracking-wider block">
                    SPECIAL CONCESSION PASS
                  </span>

                  <div className="text-5xl sm:text-6xl font-black text-[#C41E1E] font-heading tracking-tight">
                    50%
                  </div>

                  <span className="text-xs font-black tracking-widest uppercase text-[#001752] block">
                    CONCESSION
                  </span>

                  <p className="text-[11px] text-slate-600 leading-tight pt-1">
                    On all career diploma programs
                  </p>

                  <div className="pt-3 border-t border-slate-100 text-[10px] text-slate-400 font-medium">
                    Limited seats available for 2026 batches
                  </div>
                </div>
              </div>

            </div>
          </section>


          {/* ══════════════════════════════════════════════════════════════════════
              SECTION 07 – FAQ (Centered Heading + Left Navy Card + Right Accordion)
              ══════════════════════════════════════════════════════════════════════ */}
          <section 
            id="faq"
            aria-label="Frequently Asked Questions"
            className="bg-white rounded-[24px] sm:rounded-[32px] p-6 sm:p-10 lg:p-12 border border-[#E5E7EB] shadow-2xs"
          >
            {/* Top Red Eyebrow */}
            <div className="text-center mb-2">
              <span className="text-[#C41E1E] text-xs font-bold tracking-wider uppercase">
                HAVE QUESTIONS? WE ARE HERE TO HELP.
              </span>
            </div>

            {/* Centered Heading & Subtitle */}
            <div className="text-center max-w-xl mx-auto mb-8 sm:mb-10 space-y-1.5">
              <h2 className="text-3xl sm:text-4xl font-bold text-[#001752] font-heading tracking-tight leading-tight">
                Frequently asked questions
              </h2>
              <p className="text-xs sm:text-sm text-slate-600">
                Everything you need to know about courses, admissions, and training methods at RACE.
              </p>
            </div>

            {/* Two-Column Grid: Left Navy Card + Right Accordion */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-start mb-6">
              
              {/* Left Column: Navy Question Card */}
              <div className="lg:col-span-4 bg-[#001752] text-white rounded-2xl p-6 sm:p-7 space-y-4 shadow-md">
                <span className="text-[10px] font-bold text-[#DF8383] uppercase tracking-wider block">
                  ADMISSIONS HELP
                </span>

                <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white text-xl font-bold">
                  ?
                </div>

                <div className="space-y-1">
                  <h3 className="text-lg sm:text-xl font-bold font-heading text-white leading-snug">
                    You're not alone.<br />
                    Our guidance.
                  </h3>
                  <p className="text-xs text-slate-300 leading-relaxed pt-1">
                    Our counselors are available Monday to Saturday, 9 AM – 7 PM to answer any questions.
                  </p>
                </div>

                <div className="pt-2 space-y-2">
                  <Link
                    to="/contact#demo"
                    className="w-full inline-flex items-center justify-center gap-1.5 bg-white hover:bg-slate-100 text-[#001752] text-xs font-bold py-2.5 px-4 rounded-full transition-all shadow-xs"
                  >
                    <span>Contact admissions desk</span>
                    <ArrowRight size={13} />
                  </Link>

                  <a
                    href={SITE_CONFIG.contact.whatsapp}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full block text-center text-xs font-semibold text-[#4ADE80] hover:underline pt-1"
                  >
                    WhatsApp: 9794323963
                  </a>
                </div>
              </div>

              {/* Right Column: Clean Accordion List */}
              <div className="lg:col-span-8 space-y-2.5">
                {FAQS_DATA.map((faq, idx) => {
                  const isOpen = openFaq === idx;

                  return (
                    <div
                      key={idx}
                      className="border border-[#E5E7EB] rounded-xl overflow-hidden bg-white transition-colors"
                    >
                      <button
                        type="button"
                        onClick={() => toggleFaq(idx)}
                        className="w-full p-4 sm:p-5 text-left flex items-center justify-between gap-4 font-semibold text-xs sm:text-sm text-[#001752] hover:text-[#C41E1E] transition-colors cursor-pointer"
                        aria-expanded={isOpen}
                      >
                        <span className="leading-snug">{faq.q}</span>
                        <div className="w-6 h-6 rounded-full bg-slate-100 flex items-center justify-center shrink-0 text-slate-700">
                          {isOpen ? <Minus size={13} /> : <Plus size={13} />}
                        </div>
                      </button>

                      {isOpen && (
                        <div className="px-4 sm:px-5 pb-4 pt-0 text-xs text-slate-600 leading-relaxed border-t border-slate-100 bg-[#F6F7F9]/40">
                          <p className="pt-2">{faq.a}</p>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>

            </div>

            {/* Bottom Centered Subtitle */}
            <div className="text-center text-xs text-slate-400 pt-4 border-t border-slate-100">
              Raut Arcade 202, 2nd Floor, Opposite Subway / Opposite Virar East Railway Station, Maharashtra 401305.
            </div>

          </section>

        </div>

      </div>
    </>
  );
}
