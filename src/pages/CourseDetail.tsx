import { useState, useMemo } from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { 
  ArrowLeft, 
  ArrowRight, 
  CheckCircle2, 
  Clock, 
  Award, 
  MessageSquare, 
  Phone, 
  MapPin, 
  Sparkles, 
  Monitor, 
  ShieldCheck, 
  Tag,
  Briefcase,
  TrendingUp,
  Users,
  ChevronDown,
  ChevronUp,
  Code2,
  Terminal,
  Layers,
  Star,
  Check,
  HelpCircle,
  FileText
} from 'lucide-react';
import SEO from '../components/SEO';
import CtaBand from '../components/CtaBand';
import { COURSES, SITE_CONFIG } from '../data/config';

const COURSE_IMAGES: Record<string, string> = {
  'basic-computer': '/images/real-lab-classroom.jpg',
  'ms-office': '/images/course-excel-office.jpg',
  'advanced-tally-with-gst': '/images/tally-practice.jpg',
  'gst': '/images/real-data-chart-session.jpg',
  'ccc': '/images/course-excel-office.jpg',
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
  'dfa': '/images/tally-practice.jpg',
  'animation': '/images/course-graphic-design.jpg',
  'graphic-designing': '/images/course-graphic-design.jpg',
  'ai-prompt-engineering': '/images/course-ai-ml.jpg',
};

function getCourseImage(id: string, type: 'career' | 'short-term'): string {
  if (COURSE_IMAGES[id]) return COURSE_IMAGES[id];
  return type === 'career' ? '/images/student-coding.jpg' : '/images/real-lab-classroom.jpg';
}

export default function CourseDetail() {
  const { courseId } = useParams<{ courseId: string }>();

  // Look up course by id or aliases (for backwards compatibility with existing links)
  const course = COURSES.find(
    (c) => c.id === courseId || c.aliases?.includes(courseId || '')
  );

  if (!course) {
    return <Navigate to="/courses" replace />;
  }

  const isCareer = course.type === 'career';
  const courseImage = getCourseImage(course.id, course.type);

  // Related courses (prioritize same type, exclude current)
  const relatedCourses = useMemo(() => {
    return COURSES.filter(
      (c) => c.id !== course.id && (c.type === course.type || c.goals.some((g) => course.goals.includes(g)))
    ).slice(0, 3);
  }, [course]);

  // Modules accordion state: open first 2 by default
  const [openModules, setOpenModules] = useState<Record<number, boolean>>({
    0: true,
    1: true,
  });

  const toggleModule = (index: number) => {
    setOpenModules((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

  const expandAllModules = () => {
    if (!course.modules) return;
    const allOpen: Record<number, boolean> = {};
    course.modules.forEach((_, idx) => {
      allOpen[idx] = true;
    });
    setOpenModules(allOpen);
  };

  const collapseAllModules = () => {
    setOpenModules({});
  };

  // FAQ accordion state
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  // Active section for sticky sub-nav
  const [activeNav, setActiveNav] = useState('overview');

  const scrollToSection = (sectionId: string) => {
    setActiveNav(sectionId);
    const el = document.getElementById(sectionId);
    if (el) {
      const yOffset = -130;
      const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  const courseFaqs = [
    {
      q: `Do I need prior coding or technical background to join ${course.name}?`,
      a: 'No prior experience is necessary. At RACE, we start from ground zero fundamentals and build up step-by-step to advanced concepts. Every student receives personalized faculty guidance.'
    },
    {
      q: 'Do students get their own computer or is machine sharing required?',
      a: 'We strictly guarantee a 1 Student : 1 PC ratio. You will never share a computer at RACE. Every minute of your class is dedicated to practical, hands-on lab work on your assigned system.'
    },
    {
      q: 'How does RACE help me build an industry-ready portfolio?',
      a: `In this course, you will build live capstone projects and real-world case studies. Our instructors guide you on committing clean code to GitHub, publishing live deployments, and formatting project case studies on your resume.`
    },
    {
      q: 'What batch timings are available?',
      a: 'We offer flexible Morning batches (8 AM–12 PM), Afternoon slots (12 PM–4 PM), Ladies special batches (1 PM–3 PM), and Evening batches (5 PM–9 PM). Weekend batches are also available for college students and working professionals.'
    },
    {
      q: 'Where is the institute located?',
      a: 'We are located at 202, 2nd Floor, Raut Arcade, directly opposite the railway station subway entrance (2-minute walk from Platform 1/2). You do not need an auto or bus.'
    },
    {
      q: 'What certificate will I receive upon completion?',
      a: `You will receive an authorized ${course.certificate} along with ISO 9001:2015 accredited course completion credentials, suitable for corporate resumes and MNC job interviews.`
    }
  ];

  return (
    <>
      <SEO
        title={`${course.name} Course | RACE`}
        description={`Practical ${course.name} training at RACE. ${course.caseStudiesCount || 'Hands-on projects'}, 100% individual lab workstation, recognized certification, flexible batch timings, and flat 50% discount.`}
        canonical={`/courses/${course.id}`}
      />

      {/* ─── Breadcrumb Navigation Bar ─── */}
      <div className="bg-white border-b border-slate-200 py-3 sticky top-0 z-20 shadow-xs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between text-xs">
          <Link
            to="/courses"
            className="inline-flex items-center gap-1.5 font-bold text-[#001752] hover:text-[#C41E1E] transition-colors"
          >
            <ArrowLeft size={14} />
            <span>Back to All 23 Courses</span>
          </Link>
          <div className="flex items-center gap-2">
            <span className="bg-[#F5BE4F] text-[#111827] text-[10px] font-black px-2 py-0.5 rounded uppercase tracking-wider">
              1:1 PRACTICAL LAB
            </span>
            <span className="text-slate-500 hidden sm:inline text-[11px] font-medium">
              Raut Arcade 202 · Opp. Station Subway
            </span>
          </div>
        </div>
      </div>

      {/* ─── Flagship Course Hero Banner ─── */}
      <section className="relative bg-gradient-to-br from-[#001752] via-[#000F36] to-[#00081C] text-white py-12 sm:py-16 overflow-hidden border-b border-[#002277]">
        <div className="absolute -top-32 -left-32 w-96 h-96 rounded-full bg-[#C41E1E]/20 blur-[120px] pointer-events-none" />
        <div className="absolute top-1/2 -right-24 w-96 h-96 rounded-full bg-[#002B94]/30 blur-[120px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* Left Hero Content (8 cols) */}
            <div className="lg:col-span-8 flex flex-col items-start gap-4">
              
              {/* Badges strip */}
              <div className="flex flex-wrap items-center gap-2">
                <span className={`text-xs font-black px-3.5 py-1 rounded-full uppercase tracking-wide ${
                  isCareer 
                    ? 'bg-[#C41E1E] text-white shadow-md' 
                    : 'bg-white/15 text-white border border-white/20'
                }`}>
                  {course.badge || (isCareer ? "Master's Career Program" : 'Short-Term Certificate')}
                </span>

                <span className="inline-flex items-center gap-1.5 bg-amber-400/20 text-[#F5BE4F] text-xs font-bold px-3 py-1 rounded-full border border-amber-400/30">
                  <Star size={13} className="fill-[#F5BE4F]" />
                  <span>{course.rating || '4.9/5'} ({course.reviewsCount || '5,000+ Alumni'})</span>
                </span>

                <span className="inline-flex items-center gap-1.5 bg-emerald-500/20 text-emerald-300 text-xs font-bold px-3 py-1 rounded-full border border-emerald-500/30">
                  <Monitor size={13} />
                  <span>100% Practical (1:1 Machine)</span>
                </span>
              </div>

              {/* Course Title */}
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-white leading-tight">
                {course.name}
              </h1>

              {/* Subtitle / Short Description */}
              <p className="text-base sm:text-lg text-slate-300 leading-relaxed font-normal max-w-3xl">
                {course.shortDesc}
              </p>

              {/* 4 ITVedant-Style Key Metrics Cards */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 w-full pt-2">
                <div className="bg-white/5 backdrop-blur-md px-3.5 py-3 rounded-2xl border border-white/10 flex flex-col">
                  <div className="flex items-center gap-1.5 text-[#F5BE4F] mb-1">
                    <Clock size={15} />
                    <span className="text-[11px] font-bold text-slate-300 uppercase tracking-wide">Live Lab Hours</span>
                  </div>
                  <strong className="text-base sm:text-lg font-black text-white">
                    {course.hours || course.durationPlaceholder.split('(')[0].trim()}
                  </strong>
                  <span className="text-[11px] text-emerald-400 mt-0.5">100% Hands-On</span>
                </div>

                <div className="bg-white/5 backdrop-blur-md px-3.5 py-3 rounded-2xl border border-white/10 flex flex-col">
                  <div className="flex items-center gap-1.5 text-[#F5BE4F] mb-1">
                    <Code2 size={15} />
                    <span className="text-[11px] font-bold text-slate-300 uppercase tracking-wide">Industry Projects</span>
                  </div>
                  <strong className="text-base sm:text-lg font-black text-white">
                    {course.caseStudiesCount?.split(' ')[0] || (course.projects ? `${course.projects.length}+ Projects` : '15+ Projects')}
                  </strong>
                  <span className="text-[11px] text-slate-300 mt-0.5">Live Capstones</span>
                </div>

                <div className="bg-white/5 backdrop-blur-md px-3.5 py-3 rounded-2xl border border-white/10 flex flex-col">
                  <div className="flex items-center gap-1.5 text-[#F5BE4F] mb-1">
                    <TrendingUp size={15} />
                    <span className="text-[11px] font-bold text-slate-300 uppercase tracking-wide">Target Package</span>
                  </div>
                  <strong className="text-base sm:text-lg font-black text-white">
                    {course.avgSalary || '₹4.5 LPA – ₹9.5 LPA'}
                  </strong>
                  <span className="text-[11px] text-slate-300 mt-0.5">Market Benchmark</span>
                </div>

                <div className="bg-white/5 backdrop-blur-md px-3.5 py-3 rounded-2xl border border-white/10 flex flex-col">
                  <div className="flex items-center gap-1.5 text-[#F5BE4F] mb-1">
                    <MapPin size={15} />
                    <span className="text-[11px] font-bold text-slate-300 uppercase tracking-wide">Commute Advantage</span>
                  </div>
                  <strong className="text-base sm:text-lg font-black text-white">
                    Zero Mumbai Travel
                  </strong>
                  <span className="text-[11px] text-[#F5BE4F] mt-0.5">Direct Station Access</span>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-3 pt-3">
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center gap-2 h-12 px-7 rounded-full bg-[#C41E1E] hover:bg-[#A81717] text-white font-bold text-sm shadow-lg active:scale-95 transition-all"
                >
                  <Sparkles size={16} className="text-white" />
                  <span>Book Free 1:1 Demo Lab Session</span>
                </Link>

                <a
                  href={`${SITE_CONFIG.contact.whatsapp}?text=${encodeURIComponent(course.whatsappMessage)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 h-12 px-6 rounded-full bg-[#25D366] hover:bg-[#20BA5A] text-white text-sm font-bold shadow-lg active:scale-95 transition-all"
                >
                  <MessageSquare size={16} />
                  <span>Enquire on WhatsApp &amp; Get Syllabus</span>
                </a>

                <a
                  href={`tel:${SITE_CONFIG.contact.phone}`}
                  className="inline-flex items-center justify-center gap-2 h-12 px-5 rounded-full bg-white/10 hover:bg-white/20 text-white text-sm font-semibold border border-white/20 active:scale-95 transition-colors"
                >
                  <Phone size={14} className="text-[#F5BE4F]" />
                  <span>Call {SITE_CONFIG.contact.phone}</span>
                </a>
              </div>

            </div>

            {/* Right Card: Quick Admission & Concession Callout (4 cols) */}
            <div className="lg:col-span-4 mt-6 lg:mt-0">
              <div className="bg-white rounded-3xl p-6 sm:p-7 text-[#001752] shadow-2xl border border-slate-200 flex flex-col gap-4 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-28 h-28 bg-[#C41E1E]/10 rounded-bl-full pointer-events-none" />

                {/* Course Lab Image Preview */}
                <div className="relative aspect-[16/9] w-full rounded-2xl overflow-hidden shadow-xs border border-slate-100">
                  <img
                    src={courseImage}
                    alt={`${course.name} practical training at RACE`}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent pointer-events-none" />
                  <span className="absolute bottom-2 left-2.5 text-[10px] font-bold text-white bg-black/65 backdrop-blur-xs px-2.5 py-0.5 rounded-md">
                    Dedicated Lab Workstation
                  </span>
                </div>

                <div className="flex items-center justify-between">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-red-50 text-[#C41E1E] text-xs font-bold border border-red-200">
                    <Tag size={13} className="text-[#C41E1E]" />
                    <span>Special Concession</span>
                  </span>
                  <span className="bg-[#001752] text-white text-[10px] py-0.5 px-2 font-bold rounded">
                    RAUT ARCADE 202
                  </span>
                </div>

                <div>
                  <div className="flex items-baseline gap-2">
                    <span className="text-3xl font-black text-[#C41E1E]">Flat 50% OFF</span>
                  </div>
                  <p className="text-xs text-slate-600 mt-1 font-medium leading-relaxed">
                    {isCareer 
                      ? 'Admissions Open: Includes FREE Basic Computer Course + 100% individual PC training!'
                      : 'Special student and professional discount for upcoming morning, ladies, and evening batches.'}
                  </p>
                </div>

                <div className="space-y-2 pt-2 border-t border-slate-200 text-xs">
                  <div className="flex items-center justify-between py-1 text-slate-700">
                    <span className="font-medium text-slate-500">Upcoming Batches:</span>
                    <strong className="font-bold text-[#111827]">Morning / Evening / Ladies</strong>
                  </div>
                  <div className="flex items-center justify-between py-1 text-slate-700">
                    <span className="font-medium text-slate-500">Machine Ratio:</span>
                    <strong className="font-bold text-[#C41E1E]">1 Student : 1 PC Guaranteed</strong>
                  </div>
                  <div className="flex items-center justify-between py-1 text-slate-700">
                    <span className="font-medium text-slate-500">Campus Location:</span>
                    <strong className="font-bold text-[#111827]">Opp. Railway Station Subway</strong>
                  </div>
                  <div className="flex items-center justify-between py-1 text-slate-700">
                    <span className="font-medium text-slate-500">Certification:</span>
                    <strong className="font-bold text-emerald-700">ISO 9001:2015 Recognized</strong>
                  </div>
                </div>

                <a
                  href={`${SITE_CONFIG.contact.whatsapp}?text=${encodeURIComponent(
                    `Hello! I want to confirm batch timing, fees, and concession for ${course.name} at RACE.`
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#20BA5A] text-white text-xs sm:text-sm font-bold py-3.5 rounded-full shadow-md transition-all active:scale-95"
                >
                  <MessageSquare size={16} />
                  <span>Get Complete Fee Details on WhatsApp</span>
                </a>

                <div className="text-center text-[11px] text-slate-500">
                  ⚡ Limited seats per batch to preserve 1:1 computer ratio
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ─── Sticky ITVedant-Style Sub-Navigation ─── */}
      <nav className="sticky top-12 z-10 bg-white/95 backdrop-blur-md border-b border-slate-200 shadow-xs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-1 sm:gap-2 overflow-x-auto py-3 no-scrollbar text-xs font-bold">
            <button
              onClick={() => scrollToSection('overview')}
              className={`px-3.5 py-1.5 rounded-full whitespace-nowrap transition-colors ${
                activeNav === 'overview'
                  ? 'bg-[#001752] text-white shadow-xs'
                  : 'text-slate-600 hover:text-[#001752] hover:bg-slate-100'
              }`}
            >
              Overview
            </button>

            {course.projects && course.projects.length > 0 && (
              <button
                onClick={() => scrollToSection('projects')}
                className={`px-3.5 py-1.5 rounded-full whitespace-nowrap transition-colors ${
                  activeNav === 'projects'
                    ? 'bg-[#001752] text-white shadow-xs'
                    : 'text-slate-600 hover:text-[#001752] hover:bg-slate-100'
                }`}
              >
                Capstone Projects ({course.projects.length})
              </button>
            )}

            {course.tools && course.tools.length > 0 && (
              <button
                onClick={() => scrollToSection('tools')}
                className={`px-3.5 py-1.5 rounded-full whitespace-nowrap transition-colors ${
                  activeNav === 'tools'
                    ? 'bg-[#001752] text-white shadow-xs'
                    : 'text-slate-600 hover:text-[#001752] hover:bg-slate-100'
                }`}
              >
                Tools Stack ({course.tools.length})
              </button>
            )}

            <button
              onClick={() => scrollToSection('curriculum')}
              className={`px-3.5 py-1.5 rounded-full whitespace-nowrap transition-colors ${
                activeNav === 'curriculum'
                  ? 'bg-[#001752] text-white shadow-xs'
                  : 'text-slate-600 hover:text-[#001752] hover:bg-slate-100'
              }`}
            >
              Curriculum Modules
            </button>

            {course.careerRoles && course.careerRoles.length > 0 && (
              <button
                onClick={() => scrollToSection('careers')}
                className={`px-3.5 py-1.5 rounded-full whitespace-nowrap transition-colors ${
                  activeNav === 'careers'
                    ? 'bg-[#001752] text-white shadow-xs'
                    : 'text-slate-600 hover:text-[#001752] hover:bg-slate-100'
                }`}
              >
                Career &amp; Salary
              </button>
            )}

            <button
              onClick={() => scrollToSection('why-race')}
              className={`px-3.5 py-1.5 rounded-full whitespace-nowrap transition-colors ${
                activeNav === 'why-race'
                  ? 'bg-[#001752] text-white shadow-xs'
                  : 'text-slate-600 hover:text-[#001752] hover:bg-slate-100'
              }`}
            >
              Why RACE vs Mumbai
            </button>

            <button
              onClick={() => scrollToSection('faq')}
              className={`px-3.5 py-1.5 rounded-full whitespace-nowrap transition-colors ${
                activeNav === 'faq'
                  ? 'bg-[#001752] text-white shadow-xs'
                  : 'text-slate-600 hover:text-[#001752] hover:bg-slate-100'
              }`}
            >
              FAQs
            </button>
          </div>
        </div>
      </nav>

      {/* ─── Main Course Content ─── */}
      <section className="py-12 sm:py-16 bg-[#F8F9FA]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10">
            
            {/* Left Main Column (8 cols) */}
            <div className="lg:col-span-8 space-y-12">
              
              {/* ─── 1. OVERVIEW & HIGHLIGHTS ─── */}
              <div id="overview" className="bg-white p-6 sm:p-8 rounded-3xl border border-slate-200/90 shadow-sm scroll-mt-28">
                <div className="flex items-center gap-2 mb-3">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-red-50 text-[#C41E1E] text-xs font-bold uppercase tracking-wider">
                    Course Overview
                  </span>
                  <span className="text-xs text-slate-500 font-semibold">100% Practical Focus</span>
                </div>

                <h2 className="text-2xl sm:text-3xl font-black text-[#001752] mb-4">
                  About the {course.name} Program
                </h2>

                <p className="text-sm sm:text-base text-slate-600 leading-relaxed mb-6 font-normal">
                  {course.shortDesc}
                </p>

                {/* Who is this for callout */}
                <div className="bg-[#001752]/5 border border-[#001752]/10 rounded-2xl p-5 mb-6">
                  <h3 className="text-xs font-black uppercase tracking-wider text-[#001752] mb-1.5 flex items-center gap-2">
                    <Users size={14} className="text-[#C41E1E]" />
                    Who Should Enrol in this Course?
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                    {course.whoFor}
                  </p>
                </div>

                {/* Key Course Highlights */}
                {course.highlights && course.highlights.length > 0 && (
                  <div>
                    <h3 className="text-xs font-black uppercase tracking-wider text-slate-500 mb-3">
                      Program Highlights &amp; Student Guarantees
                    </h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                      {course.highlights.map((highlight, idx) => (
                        <div key={idx} className="flex items-start gap-2.5 p-3 rounded-xl bg-slate-50 border border-slate-200/70">
                          <CheckCircle2 size={16} className="text-emerald-600 shrink-0 mt-0.5" />
                          <span className="text-xs font-semibold text-[#001752] leading-snug">
                            {highlight}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              {/* ─── 2. REAL-WORLD CAPSTONE PROJECTS (ITVedant Style) ─── */}
              {course.projects && course.projects.length > 0 && (
                <div id="projects" className="bg-white p-6 sm:p-8 rounded-3xl border border-slate-200/90 shadow-sm scroll-mt-28">
                  <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 text-emerald-800 text-xs font-bold uppercase tracking-wider border border-emerald-200">
                      <Code2 size={13} className="text-emerald-600" />
                      Project-First Learning
                    </span>
                    <span className="text-xs font-bold text-slate-500">
                      {course.caseStudiesCount || `${course.projects.length} Real-World Projects`}
                    </span>
                  </div>

                  <h2 className="text-2xl sm:text-3xl font-black text-[#001752] mb-2">
                    Real-World Projects &amp; Live Case Studies
                  </h2>
                  <p className="text-xs sm:text-sm text-slate-600 mb-6 leading-relaxed">
                    Employers do not hire based on book theory. At RACE, you build production-ready projects from scratch on your dedicated computer. Every project is formatted into a portfolio piece for your resume and technical interviews.
                  </p>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {course.projects.map((proj, idx) => (
                      <div
                        key={idx}
                        className="p-5 rounded-2xl bg-gradient-to-br from-slate-50 to-white border border-slate-200 hover:border-[#001752]/40 transition-all hover:shadow-md flex flex-col justify-between"
                      >
                        <div>
                          <div className="flex items-center justify-between gap-2 mb-2">
                            <span className="text-[10px] font-black uppercase tracking-wider px-2 py-0.5 rounded bg-[#001752] text-white">
                              Project {idx + 1}
                            </span>
                            <span className="text-[10.5px] font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-200">
                              Portfolio Ready
                            </span>
                          </div>

                          <h3 className="text-base font-bold text-[#001752] mb-2 leading-snug">
                            {proj.title}
                          </h3>

                          <p className="text-xs text-slate-600 leading-relaxed mb-4">
                            {proj.desc}
                          </p>
                        </div>

                        <div className="pt-3 border-t border-slate-200">
                          <span className="text-[10px] font-black uppercase tracking-wider text-slate-400 block mb-1">
                            Tech Stack &amp; Tools Used:
                          </span>
                          <span className="inline-block text-xs font-bold text-[#C41E1E] bg-red-50 px-2.5 py-1 rounded-md border border-red-200/60">
                            {proj.tech}
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="mt-6 p-4 rounded-2xl bg-slate-50 border border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-xl bg-[#001752] text-white flex items-center justify-center shrink-0">
                        <Terminal size={18} />
                      </div>
                      <div>
                        <strong className="text-xs sm:text-sm font-bold text-[#001752] block">
                          Want to inspect past student project demos?
                        </strong>
                        <span className="text-[11px] text-slate-500">
                          Visit our lab or request live demo repositories on WhatsApp.
                        </span>
                      </div>
                    </div>

                    <a
                      href={`${SITE_CONFIG.contact.whatsapp}?text=${encodeURIComponent(
                        `Hello! I want to see project demos and student assignments for ${course.name} at RACE.`
                      )}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-[#001752] text-white text-xs font-bold hover:bg-[#002277] transition-colors shrink-0"
                    >
                      <MessageSquare size={13} />
                      <span>Request Project Demos</span>
                    </a>
                  </div>
                </div>
              )}

              {/* ─── 3. TOOLS & TECHNOLOGIES STACK ─── */}
              {course.tools && course.tools.length > 0 && (
                <div id="tools" className="bg-white p-6 sm:p-8 rounded-3xl border border-slate-200/90 shadow-sm scroll-mt-28">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 text-[#001752] text-xs font-bold uppercase tracking-wider border border-blue-200">
                      <Layers size={13} className="text-[#001752]" />
                      Technology Stack
                    </span>
                    <span className="text-xs font-bold text-slate-500">
                      {course.tools.length} Modern Tools Mastered
                    </span>
                  </div>

                  <h2 className="text-2xl sm:text-3xl font-black text-[#001752] mb-2">
                    Industry Tools &amp; Frameworks You Will Master
                  </h2>
                  <p className="text-xs sm:text-sm text-slate-600 mb-6 leading-relaxed">
                    You practice directly on these tools during every lab session. We keep our software stack updated to current industry standards.
                  </p>

                  <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
                    {course.tools.map((tool, idx) => (
                      <div
                        key={idx}
                        className="p-3.5 rounded-2xl bg-slate-50 border border-slate-200/80 hover:border-[#C41E1E]/50 hover:bg-white hover:shadow-sm transition-all flex items-center gap-2.5"
                      >
                        <div className="w-8 h-8 rounded-lg bg-[#001752]/5 text-[#001752] flex items-center justify-center shrink-0">
                          <Code2 size={16} />
                        </div>
                        <span className="text-xs font-bold text-[#001752] truncate">
                          {tool}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* ─── 4. DETAILED CURRICULUM MODULES (Accordion) ─── */}
              <div id="curriculum" className="bg-white p-6 sm:p-8 rounded-3xl border border-slate-200/90 shadow-sm scroll-mt-28">
                <div className="flex flex-wrap items-center justify-between gap-3 mb-3">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-50 text-amber-900 text-xs font-bold uppercase tracking-wider border border-amber-200">
                    <FileText size={13} className="text-amber-700" />
                    Structured Syllabus
                  </span>

                  {course.modules && course.modules.length > 0 && (
                    <div className="flex items-center gap-2 text-xs">
                      <button
                        onClick={expandAllModules}
                        className="font-bold text-[#001752] hover:text-[#C41E1E] transition-colors"
                      >
                        Expand All
                      </button>
                      <span className="text-slate-300">|</span>
                      <button
                        onClick={collapseAllModules}
                        className="font-bold text-slate-500 hover:text-[#001752] transition-colors"
                      >
                        Collapse All
                      </button>
                    </div>
                  )}
                </div>

                <h2 className="text-2xl sm:text-3xl font-black text-[#001752] mb-2">
                  Comprehensive Practical Curriculum
                </h2>
                <p className="text-xs sm:text-sm text-slate-600 mb-6 leading-relaxed">
                  Every module is structured progressively so beginners gain confidence rapidly before advancing to enterprise workflows.
                </p>

                {/* If course has rich modules array (ITVedant style) */}
                {course.modules && course.modules.length > 0 ? (
                  <div className="space-y-3">
                    {course.modules.map((mod, idx) => {
                      const isOpen = !!openModules[idx];
                      return (
                        <div
                          key={idx}
                          className="rounded-2xl border border-slate-200 overflow-hidden transition-all"
                        >
                          <button
                            type="button"
                            onClick={() => toggleModule(idx)}
                            className="w-full p-4 sm:p-5 text-left bg-slate-50/70 hover:bg-slate-100/70 transition-colors flex items-center justify-between gap-4"
                          >
                            <div className="flex items-center gap-3">
                              <span className="w-7 h-7 rounded-lg bg-[#001752] text-white text-xs font-bold flex items-center justify-center shrink-0">
                                {idx + 1}
                              </span>
                              <div>
                                <h3 className="text-sm sm:text-base font-bold text-[#001752]">
                                  {mod.title}
                                </h3>
                                {mod.duration && (
                                  <span className="text-[11px] font-semibold text-emerald-700">
                                    Duration: {mod.duration}
                                  </span>
                                )}
                              </div>
                            </div>

                            <div className="shrink-0 text-slate-400">
                              {isOpen ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
                            </div>
                          </button>

                          {isOpen && (
                            <div className="p-4 sm:p-5 bg-white border-t border-slate-100 space-y-2.5">
                              {mod.topics.map((topic, tIdx) => (
                                <div key={tIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-600">
                                  <Check size={14} className="text-[#C41E1E] shrink-0 mt-0.5 stroke-[2.5]" />
                                  <span className="leading-relaxed">{topic}</span>
                                </div>
                              ))}
                            </div>
                          )}
                        </div>
                      );
                    })}
                  </div>
                ) : (
                  // Fallback for short-term courses
                  <div className="space-y-2.5">
                    {course.topics.map((topic, i) => (
                      <div key={i} className="flex items-start gap-3 p-3.5 bg-slate-50 rounded-2xl border border-slate-200/80">
                        <CheckCircle2 size={18} className="text-emerald-500 shrink-0 mt-0.5" />
                        <span className="text-xs sm:text-sm text-[#001752] font-medium leading-relaxed">
                          {topic}
                        </span>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              {/* ─── 5. CAREER OUTCOMES & SALARY BENCHMARKS ─── */}
              {course.careerRoles && course.careerRoles.length > 0 && (
                <div id="careers" className="bg-white p-6 sm:p-8 rounded-3xl border border-slate-200/90 shadow-sm scroll-mt-28">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-indigo-50 text-indigo-900 text-xs font-bold uppercase tracking-wider border border-indigo-200">
                      <Briefcase size={13} className="text-indigo-700" />
                      Placement &amp; Roles
                    </span>
                    <span className="text-xs font-bold text-slate-500">
                      Industry Job Pathways
                    </span>
                  </div>

                  <h2 className="text-2xl sm:text-3xl font-black text-[#001752] mb-2">
                    Career Roles &amp; Salary Expectations
                  </h2>
                  <p className="text-xs sm:text-sm text-slate-600 mb-6 leading-relaxed">
                    Graduates from this program are equipped to apply for competitive technical roles across Mumbai, Pune, and remote companies.
                  </p>

                  {/* Target job profiles pills */}
                  <div className="mb-6">
                    <span className="text-xs font-black uppercase tracking-wider text-slate-500 block mb-3">
                      Target Job Designations You Can Apply For:
                    </span>
                    <div className="flex flex-wrap gap-2">
                      {course.careerRoles.map((role, idx) => (
                        <span
                          key={idx}
                          className="px-3.5 py-1.5 rounded-full bg-slate-100 border border-slate-200 text-xs font-bold text-[#001752] flex items-center gap-1.5"
                        >
                          <Briefcase size={12} className="text-[#C41E1E]" />
                          {role}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* 3 Salary Tier Progression Cards */}
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
                    <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200">
                      <span className="text-[11px] font-bold text-slate-500 uppercase block mb-1">
                        Entry Level / Fresher
                      </span>
                      <strong className="text-xl font-black text-[#001752] block">
                        ₹4.0 LPA – ₹6.0 LPA
                      </strong>
                      <span className="text-[11px] text-slate-600 mt-1 block">
                        Based on capstone portfolio &amp; coding test
                      </span>
                    </div>

                    <div className="p-4 rounded-2xl bg-[#001752]/5 border border-[#001752]/20">
                      <span className="text-[11px] font-bold text-[#001752] uppercase block mb-1">
                        Mid-Level (2–4 Years)
                      </span>
                      <strong className="text-xl font-black text-[#C41E1E] block">
                        ₹7.5 LPA – ₹12.0 LPA
                      </strong>
                      <span className="text-[11px] text-slate-600 mt-1 block">
                        Full stack or domain specialization
                      </span>
                    </div>

                    <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200">
                      <span className="text-[11px] font-bold text-slate-500 uppercase block mb-1">
                        Senior Specialist
                      </span>
                      <strong className="text-xl font-black text-[#001752] block">
                        ₹14.0 LPA – ₹22.0+ LPA
                      </strong>
                      <span className="text-[11px] text-slate-600 mt-1 block">
                        Architecture, leadership &amp; DevOps
                      </span>
                    </div>
                  </div>

                  {/* Placement assistance 4-step roadmap */}
                  <div className="mt-8 pt-6 border-t border-slate-100">
                    <h3 className="text-xs font-black uppercase tracking-wider text-[#001752] mb-3">
                      How RACE Prepares You For Corporate Interviews:
                    </h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                      <div className="flex items-start gap-2.5 p-3 rounded-xl bg-slate-50 border border-slate-200/70">
                        <CheckCircle2 size={16} className="text-emerald-600 shrink-0 mt-0.5" />
                        <div>
                          <strong className="font-bold text-[#001752] block">1:1 Resume &amp; LinkedIn Optimization</strong>
                          <span className="text-slate-500 text-[11px]">Formatted to clear corporate ATS filters.</span>
                        </div>
                      </div>

                      <div className="flex items-start gap-2.5 p-3 rounded-xl bg-slate-50 border border-slate-200/70">
                        <CheckCircle2 size={16} className="text-emerald-600 shrink-0 mt-0.5" />
                        <div>
                          <strong className="font-bold text-[#001752] block">GitHub Portfolio Audit</strong>
                          <span className="text-slate-500 text-[11px]">Clean commit history, README docs &amp; live demos.</span>
                        </div>
                      </div>

                      <div className="flex items-start gap-2.5 p-3 rounded-xl bg-slate-50 border border-slate-200/70">
                        <CheckCircle2 size={16} className="text-emerald-600 shrink-0 mt-0.5" />
                        <div>
                          <strong className="font-bold text-[#001752] block">Mock Technical Interviews</strong>
                          <span className="text-slate-500 text-[11px]">Live whiteboard coding, system logic &amp; HR rounds.</span>
                        </div>
                      </div>

                      <div className="flex items-start gap-2.5 p-3 rounded-xl bg-slate-50 border border-slate-200/70">
                        <CheckCircle2 size={16} className="text-emerald-600 shrink-0 mt-0.5" />
                        <div>
                          <strong className="font-bold text-[#001752] block">Continuous Placement Guidance</strong>
                          <span className="text-slate-500 text-[11px]">Direct referrals to active recruitment drives.</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* ─── 6. WHY RACE VS DISTANT MUMBAI COMMUTE ─── */}
              <div id="why-race" className="bg-white p-6 sm:p-8 rounded-3xl border border-slate-200/90 shadow-sm scroll-mt-28">
                <div className="flex items-center gap-2 mb-3">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-50 text-amber-900 text-xs font-bold uppercase tracking-wider border border-amber-200">
                    <MapPin size={13} className="text-[#C41E1E]" />
                    Commute &amp; Learning Advantage
                  </span>
                  <span className="text-xs font-bold text-slate-500">
                    Smart Learning Choice
                  </span>
                </div>

                <h2 className="text-2xl sm:text-3xl font-black text-[#001752] mb-2">
                  Why Choose RACE Instead of Traveling to Distant Centers?
                </h2>
                <p className="text-xs sm:text-sm text-slate-600 mb-6 leading-relaxed">
                  Suburban students often waste 3+ hours every single day traveling in crowded local trains to institutes in Andheri, Dadar, or Thane. Here is why studying right beside the station gives you a massive advantage:
                </p>

                <div className="overflow-x-auto rounded-2xl border border-slate-200">
                  <table className="w-full text-left text-xs border-collapse">
                    <thead>
                      <tr className="bg-slate-100 text-[#001752] font-black border-b border-slate-200">
                        <th className="p-3 sm:p-4">Key Factor</th>
                        <th className="p-3 sm:p-4 bg-red-50 text-[#C41E1E]">RACE</th>
                        <th className="p-3 sm:p-4 text-slate-500">Mumbai Centers (Andheri/Dadar)</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-200 text-slate-600">
                      <tr>
                        <td className="p-3 sm:p-4 font-bold text-[#001752]">Daily Travel Time</td>
                        <td className="p-3 sm:p-4 bg-red-50/50 font-bold text-emerald-700">
                          2-minute walk from station subway (0 hrs travel fatigue)
                        </td>
                        <td className="p-3 sm:p-4 text-rose-600">
                          2.5 to 3.5 hours every day in packed local trains
                        </td>
                      </tr>
                      <tr>
                        <td className="p-3 sm:p-4 font-bold text-[#001752]">Workstation Guarantee</td>
                        <td className="p-3 sm:p-4 bg-red-50/50 font-bold text-[#C41E1E]">
                          1 Student : 1 PC Guaranteed (Never share machines)
                        </td>
                        <td className="p-3 sm:p-4">
                          Often 2 students per computer in overcrowded batches
                        </td>
                      </tr>
                      <tr>
                        <td className="p-3 sm:p-4 font-bold text-[#001752]">Practical Lab Time</td>
                        <td className="p-3 sm:p-4 bg-red-50/50 font-bold text-emerald-700">
                          Extra lab practice hours anytime during 8 AM – 8 PM
                        </td>
                        <td className="p-3 sm:p-4">
                          Strict time limits; asked to vacate for next batch
                        </td>
                      </tr>
                      <tr>
                        <td className="p-3 sm:p-4 font-bold text-[#001752]">Course Fees &amp; Savings</td>
                        <td className="p-3 sm:p-4 bg-red-50/50 font-bold text-[#001752]">
                          Flat 50% Concession + FREE Basic Computer Course
                        </td>
                        <td className="p-3 sm:p-4">
                          High Mumbai commercial overhead fees (₹60k – ₹1.2 Lakhs)
                        </td>
                      </tr>
                      <tr>
                        <td className="p-3 sm:p-4 font-bold text-[#001752]">Faculty Mentorship</td>
                        <td className="p-3 sm:p-4 bg-red-50/50 font-bold text-[#001752]">
                          Personal 1:1 attention, doubts resolved face-to-face daily
                        </td>
                        <td className="p-3 sm:p-4">
                          Large batches of 40–60 students; impersonal instruction
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              {/* ─── 7. CERTIFICATION & ACCREDITATION ─── */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="bg-white p-6 rounded-3xl border border-slate-200/90 shadow-sm flex flex-col justify-between">
                  <div>
                    <div className="w-12 h-12 rounded-2xl bg-amber-50 text-amber-600 flex items-center justify-center mb-3">
                      <Award size={24} />
                    </div>
                    <h3 className="text-base font-bold text-[#001752] mb-1.5">
                      Authorized Recognized Certification
                    </h3>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      {course.certificate}. ISO 9001:2015 certified credentials verified for company job applications, civil exams, and private sector roles.
                    </p>
                  </div>
                  <div className="mt-4 pt-3 border-t border-slate-100 flex items-center gap-2 text-[11px] font-bold text-emerald-700">
                    <CheckCircle2 size={14} />
                    <span>Authorized Verification Available</span>
                  </div>
                </div>

                <div className="bg-white p-6 rounded-3xl border border-slate-200/90 shadow-sm flex flex-col justify-between">
                  <div>
                    <div className="w-12 h-12 rounded-2xl bg-[#001752]/10 text-[#001752] flex items-center justify-center mb-3">
                      <ShieldCheck size={24} />
                    </div>
                    <h3 className="text-base font-bold text-[#001752] mb-1.5">
                      Lifetime Practical Support
                    </h3>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      Even after graduation, you can walk in to Raut Arcade 202 to clarify practical project questions, software updates, or interview technical tasks with our faculty.
                    </p>
                  </div>
                  <div className="mt-4 pt-3 border-t border-slate-100 flex items-center gap-2 text-[11px] font-bold text-[#001752]">
                    <Clock size={14} />
                    <span>Free Lifetime Doubt Clearing</span>
                  </div>
                </div>
              </div>

              {/* ─── 8. FREQUENTLY ASKED QUESTIONS ─── */}
              <div id="faq" className="bg-white p-6 sm:p-8 rounded-3xl border border-slate-200/90 shadow-sm scroll-mt-28">
                <div className="flex items-center gap-2 mb-3">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-100 text-[#001752] text-xs font-bold uppercase tracking-wider">
                    <HelpCircle size={13} className="text-[#C41E1E]" />
                    Clear Answers
                  </span>
                  <span className="text-xs font-bold text-slate-500">Student Doubts</span>
                </div>

                <h2 className="text-2xl sm:text-3xl font-black text-[#001752] mb-4">
                  Frequently Asked Questions
                </h2>

                <div className="space-y-3">
                  {courseFaqs.map((faq, idx) => {
                    const isOpen = openFaq === idx;
                    return (
                      <div
                        key={idx}
                        className="rounded-2xl border border-slate-200 overflow-hidden transition-all"
                      >
                        <button
                          type="button"
                          onClick={() => setOpenFaq(isOpen ? null : idx)}
                          className="w-full p-4 sm:p-5 text-left bg-slate-50/60 hover:bg-slate-100/60 transition-colors flex items-center justify-between gap-4"
                        >
                          <span className="text-xs sm:text-sm font-bold text-[#001752]">
                            {faq.q}
                          </span>
                          <span className="text-slate-400 shrink-0">
                            {isOpen ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
                          </span>
                        </button>

                        {isOpen && (
                          <div className="p-4 sm:p-5 bg-white border-t border-slate-100 text-xs sm:text-sm text-slate-600 leading-relaxed">
                            {faq.a}
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>

            </div>

            {/* Right Sticky Sidebar (4 cols) */}
            <div className="lg:col-span-4 space-y-6">
              
              {/* Batch Timing Card */}
              <div className="bg-white p-6 rounded-3xl border border-slate-200 shadow-sm space-y-4 sticky top-28">
                <div className="flex items-center justify-between pb-3 border-b border-slate-100">
                  <h3 className="text-sm font-black text-[#001752] uppercase tracking-wide">
                    Next Batch Schedule
                  </h3>
                  <span className="text-[10px] font-black px-2 py-0.5 rounded bg-emerald-100 text-emerald-800">
                    ADMISSIONS OPEN
                  </span>
                </div>

                <div className="space-y-2 text-xs">
                  <div className="p-2.5 rounded-xl bg-slate-50 border border-slate-200 flex items-center justify-between">
                    <span className="font-bold text-[#001752]">Morning Batch</span>
                    <span className="text-slate-500 font-medium">8:00 AM – 11:00 AM</span>
                  </div>
                  <div className="p-2.5 rounded-xl bg-slate-50 border border-slate-200 flex items-center justify-between">
                    <span className="font-bold text-[#001752]">Afternoon Slot</span>
                    <span className="text-slate-500 font-medium">12:00 PM – 3:00 PM</span>
                  </div>
                  <div className="p-2.5 rounded-xl bg-pink-50/70 border border-pink-200/70 flex items-center justify-between">
                    <span className="font-bold text-pink-900">Ladies Special Batch</span>
                    <span className="text-pink-700 font-medium">1:00 PM – 3:00 PM</span>
                  </div>
                  <div className="p-2.5 rounded-xl bg-slate-50 border border-slate-200 flex items-center justify-between">
                    <span className="font-bold text-[#001752]">Evening Slot</span>
                    <span className="text-slate-500 font-medium">5:00 PM – 8:30 PM</span>
                  </div>
                </div>

                <div className="pt-2 border-t border-slate-100 space-y-2.5">
                  <a
                    href={`${SITE_CONFIG.contact.whatsapp}?text=${encodeURIComponent(
                      `Hello! I want to book a batch slot for ${course.name} at RACE.`
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#20BA5A] text-white text-xs sm:text-sm font-bold py-3 rounded-full shadow-sm transition-all active:scale-95"
                  >
                    <MessageSquare size={15} />
                    <span>Reserve My Seat on WhatsApp</span>
                  </a>

                  <a
                    href={`tel:${SITE_CONFIG.contact.phone}`}
                    className="w-full flex items-center justify-center gap-2 bg-[#001752] hover:bg-[#002277] text-white text-xs font-bold py-3 rounded-full transition-colors"
                  >
                    <Phone size={14} className="text-[#F5BE4F]" />
                    <span>Call Counsellor: {SITE_CONFIG.contact.phone}</span>
                  </a>
                </div>

                {/* Institute location summary */}
                <div className="pt-3 border-t border-slate-100 text-[11px] text-slate-500 flex items-start gap-2">
                  <MapPin size={14} className="text-[#C41E1E] shrink-0 mt-0.5" />
                  <span>
                    <strong>Raut Arcade 202, 2nd Floor</strong>, Opposite Railway Station Subway. Just 2 mins walk.
                  </span>
                </div>
              </div>

            </div>

          </div>
        </div>
      </section>

      {/* ─── Related Career Courses ─── */}
      <section className="py-14 bg-white border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8">
            <div>
              <span className="text-xs font-black uppercase tracking-wider text-[#C41E1E]">
                Explore Alternative Career Pathways
              </span>
              <h2 className="text-2xl sm:text-3xl font-black text-[#001752] tracking-tight mt-1">
                Other Career Programs at RACE
              </h2>
            </div>
            <Link
              to="/courses"
              className="inline-flex items-center gap-1.5 text-xs font-bold text-[#001752] hover:text-[#C41E1E] transition-colors"
            >
              <span>View All 23 Courses</span>
              <ArrowRight size={14} />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {relatedCourses.map((rel) => {
              const relImage = getCourseImage(rel.id, rel.type);
              return (
                <div
                  key={rel.id}
                  className="rounded-2xl border border-slate-200 overflow-hidden bg-white shadow-xs hover:shadow-lg hover:-translate-y-1 transition-all flex flex-col justify-between group"
                >
                  <div>
                    <div className="relative aspect-[16/10] w-full overflow-hidden bg-slate-900">
                      <img
                        src={relImage}
                        alt={rel.name}
                        className="w-full h-full object-cover group-hover:scale-106 transition-transform duration-700"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-black/10 pointer-events-none" />
                      <span className="absolute top-3 left-3 bg-[#C41E1E] text-white text-[10px] font-black uppercase px-2.5 py-1 rounded-full shadow-xs">
                        {rel.badge || 'Career Track'}
                      </span>
                      <span className="absolute bottom-2.5 left-3 text-white text-[11px] font-semibold">
                        {rel.durationPlaceholder.split('(')[0].trim()}
                      </span>
                    </div>

                    <div className="p-5">
                      <h3 className="text-base font-bold text-[#001752] group-hover:text-[#C41E1E] transition-colors leading-snug">
                        {rel.name}
                      </h3>
                      <p className="mt-1.5 text-xs text-slate-600 line-clamp-2 leading-relaxed">
                        {rel.shortDesc}
                      </p>
                    </div>
                  </div>

                  <div className="px-5 pb-5 pt-2 border-t border-slate-100 flex items-center justify-between">
                    <Link
                      to={`/courses/${rel.id}`}
                      className="inline-flex items-center gap-1 text-xs font-bold text-[#001752] hover:text-[#C41E1E] transition-colors"
                    >
                      <span>Explore Details</span>
                      <ArrowRight size={13} />
                    </Link>

                    <a
                      href={`${SITE_CONFIG.contact.whatsapp}?text=${encodeURIComponent(rel.whatsappMessage)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-xs font-bold text-emerald-700 hover:text-emerald-800"
                    >
                      <MessageSquare size={13} />
                      <span>Enquire</span>
                    </a>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ─── CTA Band ─── */}
      <CtaBand
        eyebrow="Admissions Open · Raut Arcade 202"
        title="Ready to Start Your Career &amp; Project Journey?"
        description="Visit Raut Arcade 202 opposite the railway station subway. Get your free personalized counseling, hands-on lab demo, and special 50% concession."
      />
    </>
  );
}
