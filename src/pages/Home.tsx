import { useState, useRef, useEffect, useCallback } from 'react';
import { Link } from 'react-router-dom';
import { 
  CheckCircle2, 
  Sparkles, 
  Monitor, 
  Clock, 
  MessageSquare, 
  ArrowRight, 
  ChevronLeft, 
  ChevronRight, 
  Plus, 
  Minus, 
  ArrowUpRight,
  Users
} from 'lucide-react';
import SEO from '../components/SEO';
import BrandSpeedStripes from '../components/BrandSpeedStripes';
import { COURSES, SITE_CONFIG, OFFERS_CONFIG } from '../data/config';

// Curated featured courses for homepage carousel
const FEATURED_COURSE_IDS = [
  'data-science-and-ai',
  'full-stack-developer-course',
  'english-speaking',
  'devops-with-aws-course',
  'advanced-tally-with-gst',
  'digital-marketing-course',
  'cyber-security-ethical-hacking-with-ai-course',
  'basic-computer',
  'graphic-designing',
  'software-testing-course',
];

const COURSE_IMAGES: Record<string, string> = {
  'basic-computer': '/images/real-lab-classroom.jpg',
  'ms-office': '/images/course-excel-office.jpg',
  'advanced-tally-with-gst': '/images/tally-practice.jpg',
  'gst': '/images/real-data-chart-session.jpg',
  'ccc': '/images/course-excel-office.jpg',
  'english-speaking': '/images/real-teacher-lecture.jpg',
  'typing-english-marathi': '/images/student-coding.jpg',
  'illustrator': '/images/course-graphic-design.jpg',
  'photoshop': '/images/course-graphic-design.jpg',
  'html': '/images/student-coding.jpg',
  'css': '/images/student-coding.jpg',
  'hardware': '/images/real-lab-aisle.jpg',
  'a-plus-and-n-plus': '/images/real-lab-wide.jpg',
  'data-science-and-ai': '/images/real-data-chart-session.jpg',
  'full-stack-developer-course': '/images/student-coding.jpg',
  'devops-with-aws-course': '/images/real-lab-aisle.jpg',
  'digital-marketing-course': '/images/course-graphic-design.jpg',
  'investment-banking-course': '/images/tally-practice.jpg',
  'software-testing-course': '/images/real-students-presentation.jpg',
  'cyber-security-ethical-hacking-with-ai-course': '/images/real-instructor-mentoring.jpg',
  'software-development': '/images/student-coding.jpg',
  'graphic-designing': '/images/course-graphic-design.jpg',
};

function getCourseImage(id: string, type: 'career' | 'short-term'): string {
  if (COURSE_IMAGES[id]) return COURSE_IMAGES[id];
  return type === 'career' ? '/images/student-coding.jpg' : '/images/real-lab-classroom.jpg';
}

const FAQS = [
  {
    q: 'Do I need prior computer knowledge to join RACE?',
    a: 'No prior computer experience is necessary. Our instructors begin with foundational mouse, keyboard, and Windows OS operations before advancing into specialized accounting, coding, AI, or graphic design software. Every student receives patient 1-on-1 guidance.',
  },
  {
    q: 'Is there an individual computer guarantee for every student?',
    a: 'Yes, absolutely. We strictly guarantee a 1 Student : 1 PC ratio. You will never share a computer terminal with anyone. Every minute of class is hands-on, individual practical training on your own workstation.',
  },
  {
    q: 'What batch timings are available for students and working professionals?',
    a: 'We offer flexible batches Monday to Saturday from 9:00 AM to 7:00 PM. We have Morning slots (8 AM – 11 AM), an afternoon Special Ladies Batch (12:30 PM – 3 PM) for homemakers, and Evening slots (5 PM – 7 PM) for college commuters.',
  },
  {
    q: 'What is included in the free Basic Computer Course offer?',
    a: 'When you enroll in any career-track diploma program at RACE, the foundational Basic Computer module is included completely free of charge, covering computer fundamentals, typing, file management, and internet productivity.',
  },
  {
    q: 'Do students receive an authorized certificate upon completion?',
    a: 'Yes. Upon successfully finishing your practical tests and coursework, you will receive an authorized certificate from RACE along with ISO 9001:2015 accredited course completion credentials recognized by recruiters across Maharashtra.',
  },
  {
    q: 'Where is the institute located and how close is the railway station?',
    a: 'We are located at 202, 2nd Floor, Raut Arcade, directly opposite the Virar East railway station subway entrance. It is a 2-minute walk from Platform 1/2 exit, saving you 3+ hours of grueling Mumbai train commutes daily.',
  },
];

export default function Home() {
  const [courseCategory, setCourseCategory] = useState<'all' | 'career' | 'short-term'>('all');
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const sliderRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  // Filtered courses for slider
  const displayedCourses = COURSES.filter((c) => {
    if (courseCategory === 'all') {
      return FEATURED_COURSE_IDS.includes(c.id);
    }
    return c.type === courseCategory;
  });

  const updateScrollButtons = useCallback(() => {
    if (!sliderRef.current) return;
    const { scrollLeft, scrollWidth, clientWidth } = sliderRef.current;
    setCanScrollLeft(scrollLeft > 10);
    setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10);
  }, []);

  useEffect(() => {
    const slider = sliderRef.current;
    if (!slider) return;
    slider.addEventListener('scroll', updateScrollButtons, { passive: true });
    updateScrollButtons();
    return () => slider.removeEventListener('scroll', updateScrollButtons);
  }, [displayedCourses, updateScrollButtons]);

  const slideLeft = () => {
    if (!sliderRef.current) return;
    sliderRef.current.scrollBy({ left: -sliderRef.current.clientWidth * 0.75, behavior: 'smooth' });
  };

  const slideRight = () => {
    if (!sliderRef.current) return;
    sliderRef.current.scrollBy({ left: sliderRef.current.clientWidth * 0.75, behavior: 'smooth' });
  };

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <>
      <SEO
        title="RACE | Practical Computer & IT Training Institute Virar East"
        description="Learn practical computer courses in Virar East. 1 Student : 1 PC guaranteed, 100% lab practice, ISO 9001:2015 certification, and 50% concession on career diplomas. Directly opposite railway station subway."
        canonical="/"
      />

      <div className="bg-[#F6F7F9] min-h-screen text-[#0B0B0B] font-body selection:bg-[#C41E1E] selection:text-white pb-16">
        
        {/* Outer Canvas Container */}
        <div className="max-w-[1440px] mx-auto px-3 sm:px-5 lg:px-8 pt-4 sm:pt-6 space-y-6 sm:space-y-8">

          {/* ══════════════════════════════════════════════════════════════════════
              SECTION 01 – HEADER AND HERO (Rounded Editorial Hero Container)
              ══════════════════════════════════════════════════════════════════════ */}
          <section 
            aria-label="Hero Section"
            className="relative bg-white rounded-[28px] sm:rounded-[36px] border border-[#E5E7EB] shadow-xs p-6 sm:p-10 lg:p-14 overflow-hidden"
          >
            {/* Top Micro-bar: Subtle Status & Subway Tag */}
            <div className="flex flex-wrap items-center justify-between gap-3 mb-8 sm:mb-12 border-b border-slate-100 pb-5">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#F2F3F6] border border-[#E0E3EA] text-xs font-semibold text-[#001752]">
                <BrandSpeedStripes size="xs" />
                <span className="font-bold tracking-tight">RACE · Practical IT &amp; Computer Education</span>
              </div>

              <div className="hidden sm:flex items-center gap-2 text-xs font-medium text-slate-500">
                <span className="w-2 h-2 rounded-full bg-[#10b981] animate-pulse" />
                <span>1 Student : 1 PC Guaranteed · Opp. Virar East Subway</span>
              </div>
            </div>

            {/* Editorial Split Hero Layout */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start mb-8 sm:mb-12">
              
              {/* Left Column: Massive Bold Heading & Two Action Buttons */}
              <div className="lg:col-span-7 space-y-6">
                <h1 className="text-4xl sm:text-5xl lg:text-[64px] font-black tracking-tight text-[#001752] font-heading leading-[1.08]">
                  Build Skills.<br />
                  <span className="text-[#C41E1E]">Shape Your Future.</span>
                </h1>

                <p className="text-base sm:text-lg text-[#444444] leading-relaxed max-w-xl font-normal">
                  Practical, career-focused computer education in Vasai-Virar. Learn in modern air-conditioned labs with dedicated 1:1 workstations, personalized faculty mentorship, and industry-recognized certifications.
                </p>

                {/* Two Action Buttons: Explore Courses & Enquire Now */}
                <div className="flex flex-wrap items-center gap-3.5 pt-2">
                  <Link
                    to="/courses"
                    className="inline-flex items-center justify-center gap-2 bg-[#C41E1E] hover:bg-[#931616] text-white font-bold text-sm sm:text-base px-7 py-3.5 rounded-full shadow-md hover:shadow-lg transition-all active:scale-95 cursor-pointer btn-press"
                  >
                    <span>Explore Courses</span>
                    <ArrowRight size={16} />
                  </Link>

                  <Link
                    to="/contact#enquiry"
                    className="inline-flex items-center justify-center gap-2 bg-transparent hover:bg-[#001752] text-[#001752] hover:text-white border-2 border-[#001752] font-bold text-sm sm:text-base px-7 py-3.5 rounded-full transition-all active:scale-95 cursor-pointer"
                  >
                    <span>Enquire Now</span>
                  </Link>
                </div>
              </div>

              {/* Right Column: Editorial Overview & Trust Capsule */}
              <div className="lg:col-span-5 flex flex-col justify-between h-full space-y-6 lg:pl-6 lg:border-l border-slate-100">
                <div className="space-y-4">
                  <span className="text-xs font-bold uppercase tracking-widest text-[#C41E1E] block">
                    Why Commute To Mumbai?
                  </span>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    Founded for ambitious local learners, RACE eliminates 4 hours of exhausting local train travel. Get direct hands-on practice on real business software right across Platform 1/2 subway.
                  </p>
                </div>

                <div className="p-4 rounded-2xl bg-[#F6F7F9] border border-[#E5E7EB] space-y-2.5">
                  <div className="flex items-center justify-between text-xs font-bold text-[#001752]">
                    <span>Admissions Open (2026 Batch)</span>
                    <span className="text-[#C41E1E] uppercase">{OFFERS_CONFIG.badge}</span>
                  </div>
                  <div className="w-full bg-slate-200 h-1.5 rounded-full overflow-hidden">
                    <div className="bg-[#C41E1E] h-full w-4/5 rounded-full" />
                  </div>
                  <div className="flex items-center justify-between text-[11px] text-slate-500">
                    <span>Fast-filling weekend &amp; weekday slots</span>
                    <span className="font-semibold text-slate-700">Limited Seats</span>
                  </div>
                </div>
              </div>

            </div>

            {/* Dominant Hero Image: Wide, Rounded, Editorial Photography */}
            <div className="relative w-full rounded-2xl sm:rounded-3xl overflow-hidden aspect-[16/9] sm:aspect-[21/9] lg:aspect-[2.4/1] bg-slate-900 border border-slate-200 shadow-md group">
              <img
                src="/hero-lab.jpg"
                alt="Students practicing in computer lab at RACE Virar East"
                className="w-full h-full object-cover group-hover:scale-102 transition-transform duration-700"
                loading="eager"
                onError={(e) => {
                  (e.target as HTMLImageElement).src = '/images/real-lab-classroom.jpg';
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#00113E]/80 via-transparent to-transparent pointer-events-none" />

              {/* Floating Live Lab Tag */}
              <div className="absolute bottom-4 left-4 right-4 sm:bottom-6 sm:left-6 sm:right-6 flex flex-wrap items-center justify-between gap-3 text-white text-xs z-10">
                <div className="flex items-center gap-2.5 bg-black/60 backdrop-blur-md px-3.5 py-2 rounded-full border border-white/20">
                  <span className="w-2 h-2 rounded-full bg-[#10b981] animate-pulse" />
                  <span className="font-bold">Live Lab Sessions at Raut Arcade 202</span>
                  <span className="text-slate-300 hidden sm:inline">· 1 Student : 1 PC</span>
                </div>

                <div className="hidden sm:flex items-center gap-3 bg-white/95 text-[#001752] px-4 py-2 rounded-full font-bold shadow-md">
                  <Clock size={14} className="text-[#C41E1E]" />
                  <span>Mon–Sat: 9:00 AM – 7:00 PM</span>
                </div>
              </div>
            </div>

          </section>


          {/* ══════════════════════════════════════════════════════════════════════
              SECTION 02 – RACE INTRODUCTION AND KEY HIGHLIGHTS (3 Metric Cards)
              ══════════════════════════════════════════════════════════════════════ */}
          <section 
            aria-label="Institute Overview and Highlights"
            className="relative bg-[#F2F3F6] rounded-[28px] sm:rounded-[36px] border border-[#E0E3EA] p-6 sm:p-10 lg:p-14 overflow-hidden"
          >
            {/* Top Two-Column Editorial Introduction */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-10 items-start mb-10 sm:mb-14">
              
              <div className="lg:col-span-7 space-y-3">
                <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#C41E1E]">
                  <BrandSpeedStripes size="xs" />
                  <span>Institutional Heritage</span>
                </div>
                <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-black text-[#001752] font-heading leading-tight tracking-tight">
                  Empowering the Next Generation with Digital Skills
                </h2>
                <p className="text-sm sm:text-base text-[#444444] leading-relaxed pt-1">
                  Since 2014, Reddys Advanced Computer Education has set the benchmark for practical, job-oriented learning in the Vasai-Virar region. We bridge the gap between abstract academic theory and actual workplace software proficiency.
                </p>
              </div>

              <div className="lg:col-span-5 lg:pl-6 lg:border-l border-slate-300/60 pt-2 lg:pt-6">
                <p className="text-sm text-slate-600 leading-relaxed font-normal">
                  Our classroom philosophy is built on genuine desk-to-desk coaching: every student learns on an individual desktop computer, working through live company case studies, business invoices, and functional software projects with immediate faculty support.
                </p>
              </div>

            </div>

            {/* Three Large White Metric Cards with Subtle Red Bottom Accents */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              
              {/* Card 1: Experience */}
              <div className="bg-white rounded-3xl p-6 sm:p-8 border border-[#E5E7EB] shadow-xs relative overflow-hidden flex flex-col justify-between hover:shadow-md transition-shadow group">
                <div className="flex items-start justify-between gap-4 mb-6">
                  <div>
                    <span className="text-4xl sm:text-5xl lg:text-6xl font-black text-[#001752] font-heading block tracking-tight">
                      10+
                    </span>
                    <span className="text-sm font-bold text-slate-500 uppercase tracking-wider block mt-1">
                      Years Experience
                    </span>
                  </div>
                  <div className="w-10 h-10 rounded-2xl bg-[#F2F3F6] text-[#001752] flex items-center justify-center shrink-0">
                    <Sparkles size={18} />
                  </div>
                </div>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  Over a decade of dedicated computer education and practical skills development directly opposite Virar East railway subway.
                </p>
                {/* Subtle Red Bottom Accent */}
                <div className="w-full h-1.5 bg-[#C41E1E] rounded-full mt-6" />
              </div>

              {/* Card 2: Students Trained */}
              <div className="bg-white rounded-3xl p-6 sm:p-8 border border-[#E5E7EB] shadow-xs relative overflow-hidden flex flex-col justify-between hover:shadow-md transition-shadow group">
                <div className="flex items-start justify-between gap-4 mb-6">
                  <div>
                    <span className="text-4xl sm:text-5xl lg:text-6xl font-black text-[#001752] font-heading block tracking-tight">
                      5,000+
                    </span>
                    <span className="text-sm font-bold text-slate-500 uppercase tracking-wider block mt-1">
                      Students Trained
                    </span>
                  </div>
                  <div className="w-10 h-10 rounded-2xl bg-[#F2F3F6] text-[#001752] flex items-center justify-center shrink-0">
                    <Users size={18} />
                  </div>
                </div>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  Local graduates, school students, homemakers, and professionals certified across IT, software, accounting, and office skills.
                </p>
                {/* Subtle Red Bottom Accent */}
                <div className="w-full h-1.5 bg-[#C41E1E] rounded-full mt-6" />
              </div>

              {/* Card 3: 1:1 PC Ratio */}
              <div className="bg-white rounded-3xl p-6 sm:p-8 border border-[#E5E7EB] shadow-xs relative overflow-hidden flex flex-col justify-between hover:shadow-md transition-shadow group">
                <div className="flex items-start justify-between gap-4 mb-6">
                  <div>
                    <span className="text-4xl sm:text-5xl lg:text-6xl font-black text-[#001752] font-heading block tracking-tight">
                      100%
                    </span>
                    <span className="text-sm font-bold text-slate-500 uppercase tracking-wider block mt-1">
                      1:1 Dedicated PC
                    </span>
                  </div>
                  <div className="w-10 h-10 rounded-2xl bg-[#F2F3F6] text-[#001752] flex items-center justify-center shrink-0">
                    <Monitor size={18} />
                  </div>
                </div>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  Guaranteed individual workstation for every enrolled student. Zero machine sharing during your entire training tenure.
                </p>
                {/* Subtle Red Bottom Accent */}
                <div className="w-full h-1.5 bg-[#C41E1E] rounded-full mt-6" />
              </div>

            </div>

          </section>


          {/* ══════════════════════════════════════════════════════════════════════
              SECTION 03 – EXPLORE OUR COURSES (Editorial Split + Horizontal Slider)
              ══════════════════════════════════════════════════════════════════════ */}
          <section 
            aria-label="Course Programs"
            className="bg-white rounded-[28px] sm:rounded-[36px] border border-[#E5E7EB] shadow-xs p-6 sm:p-10 lg:p-14 overflow-hidden"
          >
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
              
              {/* Left Column: Heading, Paragraph, Filter Pills, and Carousel Arrows */}
              <div className="lg:col-span-4 space-y-6">
                <div>
                  <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#C41E1E] mb-2">
                    <BrandSpeedStripes size="xs" />
                    <span>Explore Courses</span>
                  </div>
                  <h2 className="text-3xl sm:text-4xl font-black text-[#001752] font-heading leading-tight tracking-tight">
                    Find the Right Course for Your Future
                  </h2>
                </div>

                <p className="text-sm text-slate-600 leading-relaxed">
                  Choose from 23 certified programs tailored for complete beginners, high-school students, and ambitious career switchers. All taught with hands-on lab assignments.
                </p>

                {/* Filter Tabs */}
                <div className="flex flex-wrap gap-2">
                  <button
                    type="button"
                    onClick={() => setCourseCategory('all')}
                    className={`px-3.5 py-1.5 rounded-full text-xs font-bold transition-all cursor-pointer ${
                      courseCategory === 'all'
                        ? 'bg-[#001752] text-white shadow-xs'
                        : 'bg-[#F2F3F6] text-slate-700 hover:bg-slate-200'
                    }`}
                  >
                    All Featured
                  </button>
                  <button
                    type="button"
                    onClick={() => setCourseCategory('career')}
                    className={`px-3.5 py-1.5 rounded-full text-xs font-bold transition-all cursor-pointer ${
                      courseCategory === 'career'
                        ? 'bg-[#001752] text-white shadow-xs'
                        : 'bg-[#F2F3F6] text-slate-700 hover:bg-slate-200'
                    }`}
                  >
                    Career Diplomas
                  </button>
                  <button
                    type="button"
                    onClick={() => setCourseCategory('short-term')}
                    className={`px-3.5 py-1.5 rounded-full text-xs font-bold transition-all cursor-pointer ${
                      courseCategory === 'short-term'
                        ? 'bg-[#001752] text-white shadow-xs'
                        : 'bg-[#F2F3F6] text-slate-700 hover:bg-slate-200'
                    }`}
                  >
                    Short-Term Certificates
                  </button>
                </div>

                {/* Carousel Controls: Circular Left / Right Arrow Buttons */}
                <div className="pt-2 flex items-center gap-3">
                  <button
                    type="button"
                    onClick={slideLeft}
                    disabled={!canScrollLeft}
                    className={`w-11 h-11 rounded-full flex items-center justify-center transition-all cursor-pointer ${
                      canScrollLeft
                        ? 'bg-[#001752] text-white hover:bg-[#263A6C] shadow-sm'
                        : 'bg-slate-100 text-slate-300 cursor-not-allowed'
                    }`}
                    aria-label="Previous courses"
                  >
                    <ChevronLeft size={20} />
                  </button>

                  <button
                    type="button"
                    onClick={slideRight}
                    disabled={!canScrollRight}
                    className={`w-11 h-11 rounded-full flex items-center justify-center transition-all cursor-pointer ${
                      canScrollRight
                        ? 'bg-[#001752] text-white hover:bg-[#263A6C] shadow-sm'
                        : 'bg-slate-100 text-slate-300 cursor-not-allowed'
                    }`}
                    aria-label="Next courses"
                  >
                    <ChevronRight size={20} />
                  </button>

                  <Link
                    to="/courses"
                    className="text-xs font-bold text-[#C41E1E] hover:underline ml-2"
                  >
                    View All 23 Courses →
                  </Link>
                </div>
              </div>

              {/* Right Column: Horizontal Scrolling Course Cards */}
              <div className="lg:col-span-8 overflow-hidden">
                <div
                  ref={sliderRef}
                  className="flex gap-5 overflow-x-auto no-scrollbar scroll-smooth pb-4 pt-1 snap-x snap-mandatory"
                  tabIndex={0}
                  role="region"
                  aria-label="Courses Carousel"
                >
                  {displayedCourses.map((c) => {
                    const isCareer = c.type === 'career';
                    const img = getCourseImage(c.id, c.type);

                    return (
                      <div
                        key={c.id}
                        className="w-[280px] sm:w-[320px] shrink-0 snap-start bg-[#F6F7F9] rounded-3xl border border-[#E5E7EB] overflow-hidden flex flex-col justify-between hover:shadow-lg transition-all duration-300 group"
                      >
                        {/* Course Image */}
                        <div>
                          <div className="relative aspect-[16/10] w-full overflow-hidden bg-slate-900">
                            <img
                              src={img}
                              alt={c.name}
                              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                              loading="lazy"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent pointer-events-none" />
                            
                            <div className="absolute top-3 left-3 z-10">
                              <span className="bg-[#001752]/90 backdrop-blur-xs text-white text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-md border border-white/20">
                                {isCareer ? 'Career Program' : 'Certificate'}
                              </span>
                            </div>

                            <div className="absolute bottom-2.5 left-3 right-3 flex items-center justify-between text-[10px] text-white font-bold z-10">
                              <span className="bg-black/60 px-2 py-0.5 rounded-sm">
                                100% Practical
                              </span>
                              <span className="bg-[#C41E1E] px-2 py-0.5 rounded-sm">
                                1:1 PC
                              </span>
                            </div>
                          </div>

                          {/* Card Content */}
                          <div className="p-5">
                            <h3 className="text-base font-bold text-[#001752] mb-1.5 line-clamp-1 group-hover:text-[#C41E1E] transition-colors">
                              <Link to={`/courses/${c.id}`}>
                                {c.name}
                              </Link>
                            </h3>
                            <p className="text-xs text-slate-600 leading-relaxed line-clamp-2 min-h-[2.5rem] mb-3">
                              {c.shortDesc}
                            </p>
                            
                            <div className="flex items-center gap-2 text-xs font-medium text-slate-500 pt-2 border-t border-slate-200">
                              <Clock size={13} className="text-[#C41E1E]" />
                              <span>{c.durationPlaceholder.split('(')[0].trim()}</span>
                            </div>
                          </div>
                        </div>

                        {/* Card Action Buttons */}
                        <div className="p-5 pt-0 grid grid-cols-2 gap-2">
                          <Link
                            to={`/courses/${c.id}`}
                            className="py-2.5 px-3 rounded-xl border border-slate-300 bg-white hover:bg-slate-100 text-[#001752] text-xs font-bold text-center transition-colors"
                          >
                            View Details
                          </Link>
                          <Link
                            to="/contact#enquiry"
                            className="py-2.5 px-3 rounded-xl bg-[#C41E1E] hover:bg-[#931616] text-white text-xs font-bold text-center transition-colors shadow-2xs"
                          >
                            Enquire Now
                          </Link>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

            </div>
          </section>


          {/* ══════════════════════════════════════════════════════════════════════
              SECTION 04 – HOW WE HELP YOU LEARN (Asymmetrical Process Layout)
              ══════════════════════════════════════════════════════════════════════ */}
          <section 
            aria-label="Training Methodology"
            className="bg-[#F2F3F6] rounded-[28px] sm:rounded-[36px] border border-[#E0E3EA] p-6 sm:p-10 lg:p-14 overflow-hidden"
          >
            <div className="max-w-3xl mb-10 sm:mb-12">
              <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#C41E1E] mb-2">
                <BrandSpeedStripes size="xs" />
                <span>Our Learning Blueprint</span>
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-black text-[#001752] font-heading leading-tight tracking-tight">
                From Learning to Real-World Skills.
              </h2>
              <p className="text-sm sm:text-base text-[#444444] mt-2 leading-relaxed">
                A structured, practical four-stage training methodology engineered to turn beginners into capable, industry-ready professionals.
              </p>
            </div>

            {/* Asymmetrical Process Grid: 3 Vertical Cards on Top, Wide Navy Card on Bottom */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
              
              {/* Step 01: Understand Your Goals */}
              <div className="bg-white rounded-3xl p-6 sm:p-7 border border-[#E5E7EB] shadow-xs flex flex-col justify-between hover:shadow-md transition-shadow">
                <div>
                  <span className="text-xs font-mono font-black text-[#C41E1E] uppercase tracking-wider block mb-3">
                    Step 01
                  </span>
                  <h3 className="text-xl font-bold text-[#001752] mb-3">
                    Understand Your Goals
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-5">
                    Personalized 1-on-1 counseling to evaluate your academic qualification, time availability, and career aspirations before choosing a track.
                  </p>
                </div>
                <div className="relative rounded-2xl overflow-hidden aspect-[4/3] bg-slate-900 border border-slate-100">
                  <img
                    src="/images/real-instructor-mentoring.jpg"
                    alt="Student counseling at RACE"
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </div>
              </div>

              {/* Step 02: Learn Through Practical Training */}
              <div className="bg-white rounded-3xl p-6 sm:p-7 border border-[#E5E7EB] shadow-xs flex flex-col justify-between hover:shadow-md transition-shadow">
                <div>
                  <span className="text-xs font-mono font-black text-[#C41E1E] uppercase tracking-wider block mb-3">
                    Step 02
                  </span>
                  <h3 className="text-xl font-bold text-[#001752] mb-3">
                    Learn Through Practical Training
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-5">
                    100% lab practice on your personal workstation. You write code, enter Tally vouchers, and design graphics directly on software tools.
                  </p>
                </div>
                <div className="relative rounded-2xl overflow-hidden aspect-[4/3] bg-slate-900 border border-slate-100">
                  <img
                    src="/images/real-lab-classroom.jpg"
                    alt="Practical training at RACE lab"
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </div>
              </div>

              {/* Step 03: Build Real Projects */}
              <div className="bg-white rounded-3xl p-6 sm:p-7 border border-[#E5E7EB] shadow-xs flex flex-col justify-between hover:shadow-md transition-shadow">
                <div>
                  <span className="text-xs font-mono font-black text-[#C41E1E] uppercase tracking-wider block mb-3">
                    Step 03
                  </span>
                  <h3 className="text-xl font-bold text-[#001752] mb-3">
                    Build Real Projects
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-5">
                    Execute real-world portfolio projects: balance sheet reconciliations, live web apps, database pipelines, and branding kits.
                  </p>
                </div>
                <div className="relative rounded-2xl overflow-hidden aspect-[4/3] bg-slate-900 border border-slate-100">
                  <img
                    src="/images/student-coding.jpg"
                    alt="Student working on projects"
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </div>
              </div>

            </div>

            {/* Step 04: Wide Deep Navy Card */}
            <div className="bg-[#001752] text-white rounded-3xl p-6 sm:p-9 lg:p-10 border border-[#00113E] shadow-xl relative overflow-hidden">
              <div className="absolute -right-20 -top-20 w-80 h-80 bg-[#C41E1E]/20 rounded-full blur-[90px] pointer-events-none" />
              
              <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-center">
                <div className="lg:col-span-8 space-y-3">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-[#DF8383] text-xs font-mono font-bold uppercase tracking-wider border border-white/15">
                    Step 04 · Career Acceleration
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-black text-white font-heading tracking-tight">
                    Prepare for Career Opportunities &amp; Verified Certification
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed max-w-2xl">
                    Upon module completion, students participate in resume formatting workshops, mock technical interviews, and receive an ISO 9001:2015 accredited course certificate recognized by recruiters across Mumbai MMR.
                  </p>
                </div>

                <div className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col gap-3 justify-end items-start lg:items-end">
                  <Link
                    to="/contact#demo"
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#C41E1E] hover:bg-[#931616] text-white font-bold text-xs sm:text-sm px-6 py-3 rounded-xl shadow-md transition-all active:scale-95 text-center"
                  >
                    <span>Book Free Lab Demo</span>
                    <ArrowRight size={14} />
                  </Link>
                  <span className="text-[11px] text-slate-300 font-medium">
                    Opp. Virar East Railway Station Subway
                  </span>
                </div>
              </div>
            </div>

          </section>


          {/* ══════════════════════════════════════════════════════════════════════
              SECTION 05 – THE RACE EXPERIENCE / VISUAL GALLERY (Editorial Masonry)
              ══════════════════════════════════════════════════════════════════════ */}
          <section 
            aria-label="Campus Experience"
            className="bg-white rounded-[28px] sm:rounded-[36px] border border-[#E5E7EB] shadow-xs p-6 sm:p-10 lg:p-14 overflow-hidden"
          >
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start mb-10 sm:mb-12">
              
              {/* Left Column: Heading, Description & Gallery CTA */}
              <div className="lg:col-span-5 space-y-5">
                <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#C41E1E]">
                  <BrandSpeedStripes size="xs" />
                  <span>Campus Life</span>
                </div>

                <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-black text-[#001752] font-heading leading-tight tracking-tight">
                  More Than Just Learning. It's About Building Your Future.
                </h2>

                <p className="text-sm text-slate-600 leading-relaxed font-normal">
                  Take an authentic look inside our computer labs at Raut Arcade 202. Real students, real workstations, and patient 1-on-1 faculty coaching—no artificial stock photos.
                </p>

                {/* Micro Features */}
                <ul className="space-y-2.5 text-xs sm:text-sm text-slate-700 font-medium pt-2">
                  <li className="flex items-center gap-2.5">
                    <CheckCircle2 size={16} className="text-[#C41E1E] shrink-0" />
                    <span>2-minute walk from Virar East station subway</span>
                  </li>
                  <li className="flex items-center gap-2.5">
                    <CheckCircle2 size={16} className="text-[#C41E1E] shrink-0" />
                    <span>Dedicated 1 Student : 1 PC terminal guarantee</span>
                  </li>
                  <li className="flex items-center gap-2.5">
                    <CheckCircle2 size={16} className="text-[#C41E1E] shrink-0" />
                    <span>Fully air-conditioned lab with individual power backups</span>
                  </li>
                  <li className="flex items-center gap-2.5">
                    <CheckCircle2 size={16} className="text-[#C41E1E] shrink-0" />
                    <span>Special afternoon slots for ladies and homemakers</span>
                  </li>
                </ul>

                <div className="pt-2">
                  <Link
                    to="/gallery"
                    className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold text-[#001752] hover:text-[#C41E1E] transition-colors"
                  >
                    <span>View All Campus Photos &amp; Video Tour</span>
                    <ArrowUpRight size={16} />
                  </Link>
                </div>
              </div>

              {/* Right Column: Asymmetric Masonry Image Grid */}
              <div className="lg:col-span-7 grid grid-cols-2 sm:grid-cols-3 gap-3.5 sm:gap-4">
                
                {/* Image 1: Tall */}
                <div className="sm:row-span-2 relative rounded-2xl overflow-hidden bg-slate-900 border border-slate-200 group">
                  <img
                    src="/images/real-instructor-mentoring.jpg"
                    alt="Faculty 1-on-1 coaching"
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-104 transition-all duration-500"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent pointer-events-none" />
                  <span className="absolute bottom-3 left-3 text-[11px] font-bold text-white bg-black/60 px-2 py-0.5 rounded backdrop-blur-xs">
                    1-on-1 Mentoring
                  </span>
                </div>

                {/* Image 2: Wide */}
                <div className="sm:col-span-2 relative rounded-2xl overflow-hidden aspect-[16/9] bg-slate-900 border border-slate-200 group">
                  <img
                    src="/images/real-lab-classroom.jpg"
                    alt="RACE Computer Laboratory"
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-104 transition-all duration-500"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent pointer-events-none" />
                  <span className="absolute bottom-3 left-3 text-[11px] font-bold text-white bg-black/60 px-2 py-0.5 rounded backdrop-blur-xs">
                    Air-Conditioned Lab 202
                  </span>
                </div>

                {/* Image 3: Square */}
                <div className="relative rounded-2xl overflow-hidden aspect-square bg-slate-900 border border-slate-200 group">
                  <img
                    src="/images/student-coding.jpg"
                    alt="Student coding exercises"
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-104 transition-all duration-500"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent pointer-events-none" />
                  <span className="absolute bottom-2.5 left-2.5 text-[10px] font-bold text-white bg-black/60 px-2 py-0.5 rounded backdrop-blur-xs">
                    Coding Practice
                  </span>
                </div>

                {/* Image 4: Square */}
                <div className="relative rounded-2xl overflow-hidden aspect-square bg-slate-900 border border-slate-200 group">
                  <img
                    src="/images/real-data-chart-session.jpg"
                    alt="Advanced Excel and Tally"
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-104 transition-all duration-500"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent pointer-events-none" />
                  <span className="absolute bottom-2.5 left-2.5 text-[10px] font-bold text-white bg-black/60 px-2 py-0.5 rounded backdrop-blur-xs">
                    Tally &amp; GST Live
                  </span>
                </div>

              </div>

            </div>
          </section>


          {/* ══════════════════════════════════════════════════════════════════════
              SECTION 06 – FEATURED CTA (Large Navy Promotional Banner)
              ══════════════════════════════════════════════════════════════════════ */}
          <section 
            aria-label="Promotional Admission Banner"
            className="relative bg-gradient-to-br from-[#00113E] via-[#001752] to-[#263A6C] rounded-[28px] sm:rounded-[36px] p-8 sm:p-12 lg:p-16 text-white overflow-hidden shadow-2xl border border-[#00113E]"
          >
            {/* Red Accent Radial Glow */}
            <div className="absolute -right-20 -top-20 w-[450px] h-[450px] bg-[#C41E1E]/25 rounded-full blur-[120px] pointer-events-none" />
            <div className="absolute -left-20 -bottom-20 w-[350px] h-[350px] bg-[#263A6C]/40 rounded-full blur-[100px] pointer-events-none" />

            <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
              
              {/* Left Column: Headlines & Dual CTAs */}
              <div className="lg:col-span-8 space-y-5">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#C41E1E] text-white text-xs font-bold uppercase tracking-wider shadow-xs">
                  <Sparkles size={12} />
                  <span>Limited-Time 50% Concession Pass</span>
                </div>

                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-white font-heading leading-tight">
                  Ready to Take the Next Step in Your Career?
                </h2>

                <p className="text-sm sm:text-base text-slate-200 leading-relaxed max-w-2xl">
                  Discover practical learning opportunities and build the skills that move your future forward. Enquire today to claim an upfront 50% fee concession on career diplomas, plus a foundational Basic Computer course free of charge.
                </p>

                {/* Primary & Secondary Action Buttons */}
                <div className="flex flex-wrap items-center gap-4 pt-2">
                  <Link
                    to="/courses"
                    className="inline-flex items-center justify-center gap-2 bg-[#C41E1E] hover:bg-[#931616] text-white font-bold text-sm sm:text-base px-7 py-3.5 rounded-full shadow-lg transition-all active:scale-95 cursor-pointer"
                  >
                    <span>Explore Courses</span>
                    <ArrowRight size={16} />
                  </Link>

                  <Link
                    to="/contact"
                    className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 text-white border border-white/30 font-bold text-sm sm:text-base px-7 py-3.5 rounded-full transition-all active:scale-95 cursor-pointer backdrop-blur-xs"
                  >
                    <span>Contact RACE</span>
                  </Link>
                </div>

                <div className="pt-2 text-xs text-slate-300 font-medium">
                  Direct Admissions Helpline: <strong className="text-white">8793314239</strong> / <strong className="text-white">8482881614</strong> / <strong className="text-white">9794323963</strong>
                </div>
              </div>

              {/* Right Column: Visual Terminal Feature Card */}
              <div className="lg:col-span-4 relative">
                <div className="bg-white/10 backdrop-blur-md rounded-3xl p-6 border border-white/20 shadow-2xl space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold text-[#DF8383] uppercase tracking-wider">
                      Batch Guarantee
                    </span>
                    <span className="w-2.5 h-2.5 rounded-full bg-[#10b981] animate-pulse" />
                  </div>

                  <div className="space-y-1">
                    <span className="text-2xl font-black text-white font-heading block">
                      1 Student = 1 PC
                    </span>
                    <p className="text-xs text-slate-300">
                      Zero machine sharing. Dedicated terminal for practical learning every single day.
                    </p>
                  </div>

                  <div className="pt-3 border-t border-white/15 space-y-2 text-xs text-slate-200">
                    <div className="flex items-center justify-between">
                      <span className="text-slate-300">Station Proximity:</span>
                      <strong className="text-white">2 Min Subway Walk</strong>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-slate-300">Accreditation:</span>
                      <strong className="text-white">ISO 9001:2015</strong>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </section>


          {/* ══════════════════════════════════════════════════════════════════════
              SECTION 07 – FAQ (Two-Column: Info Card Left + Accordion Right)
              ══════════════════════════════════════════════════════════════════════ */}
          <section 
            id="faq"
            aria-label="Frequently Asked Questions"
            className="bg-white rounded-[28px] sm:rounded-[36px] border border-[#E5E7EB] shadow-xs p-6 sm:p-10 lg:p-14 overflow-hidden"
          >
            {/* Centered Heading */}
            <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-14">
              <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#C41E1E] mb-2">
                <BrandSpeedStripes size="xs" />
                <span>Got Questions?</span>
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-black text-[#001752] font-heading leading-tight tracking-tight">
                Frequently Asked Questions
              </h2>
              <p className="text-sm text-slate-600 mt-2">
                Clear, transparent answers about our computer courses, batch schedules, certifications, and admissions.
              </p>
            </div>

            {/* Two-Column Layout */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
              
              {/* Left Column: Deep Navy / Red Visual Information Card */}
              <div className="lg:col-span-4 bg-[#001752] text-white rounded-3xl p-6 sm:p-8 border border-[#00113E] shadow-lg space-y-6 relative overflow-hidden">
                <div className="w-12 h-12 rounded-2xl bg-[#C41E1E] flex items-center justify-center text-white shrink-0 shadow-md">
                  <MessageSquare size={22} />
                </div>

                <div className="space-y-2">
                  <h3 className="text-xl sm:text-2xl font-bold font-heading text-white">
                    Have Questions About Our Courses?
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                    Our expert counsellors are available daily from 9:00 AM to 7:00 PM at Raut Arcade 202, right opposite Virar East station subway.
                  </p>
                </div>

                <div className="space-y-3 pt-2">
                  <Link
                    to="/contact#demo"
                    className="w-full inline-flex items-center justify-center gap-2 bg-[#C41E1E] hover:bg-[#931616] text-white font-bold text-xs sm:text-sm py-3 px-5 rounded-xl transition-all shadow-md active:scale-95"
                  >
                    <span>Contact Admissions Desk</span>
                  </Link>

                  <a
                    href={`${SITE_CONFIG.contact.whatsapp}?text=${encodeURIComponent(
                      'Hello! I have questions regarding course admissions and fees at RACE.'
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 text-white font-bold text-xs sm:text-sm py-3 px-5 rounded-xl transition-all border border-white/20"
                  >
                    <MessageSquare size={14} className="text-[#10b981]" />
                    <span>Chat on WhatsApp</span>
                  </a>
                </div>

                <div className="pt-2 border-t border-white/15 text-[11px] text-slate-300">
                  Call helpline: <a href="tel:8793314239" className="text-white font-bold underline">8793314239</a>
                </div>
              </div>

              {/* Right Column: Elegant Accordion */}
              <div className="lg:col-span-8 space-y-3">
                {FAQS.map((faq, idx) => {
                  const isOpen = openFaq === idx;

                  return (
                    <div
                      key={idx}
                      className="border border-[#E5E7EB] rounded-2xl overflow-hidden transition-colors bg-white hover:border-slate-300"
                    >
                      <button
                        type="button"
                        onClick={() => toggleFaq(idx)}
                        className="w-full p-5 text-left flex items-center justify-between gap-4 font-bold text-sm sm:text-base text-[#001752] hover:text-[#C41E1E] transition-colors cursor-pointer"
                        aria-expanded={isOpen}
                      >
                        <span className="leading-snug">{faq.q}</span>
                        <div className="w-8 h-8 rounded-full bg-[#F2F3F6] flex items-center justify-center shrink-0 text-[#001752]">
                          {isOpen ? <Minus size={16} /> : <Plus size={16} />}
                        </div>
                      </button>

                      {isOpen && (
                        <div className="px-5 pb-5 pt-1 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-100 bg-[#F6F7F9]/50 animate-in fade-in duration-200">
                          {faq.a}
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>

            </div>
          </section>

        </div>
      </div>
    </>
  );
}
