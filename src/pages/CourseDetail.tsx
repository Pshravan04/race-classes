import { useState, useMemo, useEffect } from 'react';
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
  X,
  HelpCircle,
  Download,
  Laptop
} from 'lucide-react';
import SEO from '../components/SEO';
import CtaBand from '../components/CtaBand';
import CourseJourneyCurriculum from '../components/CourseJourneyCurriculum';
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

  // FAQ accordion state
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  // Active section for sticky sub-nav
  const [activeNav, setActiveNav] = useState('overview');

  // Syllabus / Demo Request Modal state
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalMode, setModalMode] = useState<'syllabus' | 'demo'>('syllabus');
  const [candidateName, setCandidateName] = useState('');
  const [candidatePhone, setCandidatePhone] = useState('');
  const [candidateBatch, setCandidateBatch] = useState('Morning Batch (8 AM – 11 AM)');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const openModal = (mode: 'syllabus' | 'demo') => {
    setModalMode(mode);
    setIsModalOpen(true);
  };

  const handleModalSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!candidateName.trim() || !candidatePhone.trim()) {
      alert('Please provide your name and phone number so we can share the syllabus.');
      return;
    }
    setIsSubmitting(true);
    const purpose = modalMode === 'syllabus' ? 'Download Syllabus & Fee Structure' : 'Book Free 1:1 Lab Demo';
    const text = `Hello RACE! I would like to ${purpose} for ${course.name}.\n\nName: ${candidateName.trim()}\nPhone: ${candidatePhone.trim()}\nPreferred Slot: ${candidateBatch}`;
    const whatsappUrl = `${SITE_CONFIG.contact.whatsapp}?text=${encodeURIComponent(text)}`;
    window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
    setIsSubmitting(false);
    setIsModalOpen(false);
  };

  // Close modal on Escape
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isModalOpen) {
        setIsModalOpen(false);
      }
    };
    if (isModalOpen) {
      window.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    }
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'auto';
    };
  }, [isModalOpen]);

  // ScrollSpy observer to update activeNav automatically as user scrolls
  useEffect(() => {
    const sectionIds = [
      'overview',
      'projects',
      'tools',
      'curriculum',
      'careers',
      'why-race',
      'faq',
    ];

    const handleScroll = () => {
      const scrollPosition = window.scrollY + 160;
      for (let i = sectionIds.length - 1; i >= 0; i--) {
        const el = document.getElementById(sectionIds[i]);
        if (el) {
          const top = el.offsetTop;
          if (scrollPosition >= top) {
            setActiveNav(sectionIds[i]);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

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
      a: 'No prior background is required. At RACE, we start from ground zero fundamentals and build up step-by-step to advanced concepts. Every student receives personal faculty mentorship during their daily lab sessions.'
    },
    {
      q: 'Do students get their own computer or is machine sharing required?',
      a: 'We strictly guarantee a 1 Student : 1 PC ratio. You will never share a computer at RACE. Every minute of your class is dedicated to practical, hands-on lab work on your assigned machine.'
    },
    {
      q: 'How does RACE help me build an industry-ready portfolio?',
      a: `In this program, you build live capstone projects and real-world case studies. Our instructors guide you on committing clean code to GitHub, publishing live deployments, and formatting project case studies on your resume.`
    },
    {
      q: 'What batch timings are available?',
      a: 'We offer flexible Morning batches (8 AM–11 AM), Afternoon slots (12 PM–3 PM), Ladies special batches (1 PM–3 PM), and Evening batches (5 PM–8:30 PM). Weekend slots are also available for college students and working professionals.'
    },
    {
      q: 'Where is the institute located and how close is the station?',
      a: 'We are located at 202, 2nd Floor, Raut Arcade, directly opposite the railway station subway entrance (2-minute walk from Platform 1/2). You save 3+ hours daily compared to traveling to distant centers in Mumbai.'
    },
    {
      q: 'What certificate will I receive upon completion?',
      a: `You will receive an authorized ${course.certificate} along with ISO 9001:2015 accredited course completion credentials, recognized by corporate employers and MNC job interviewers.`
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
            <span className="bg-[#F5BE4F] text-[#111827] text-[10px] font-black px-2.5 py-0.5 rounded-full uppercase tracking-wider shadow-xs">
              1:1 Individual PC Guaranteed
            </span>
            <span className="text-slate-500 hidden sm:inline text-[11px] font-medium">
              Raut Arcade 202 · Opp. Station Subway
            </span>
          </div>
        </div>
      </div>

      {/* ─── Ultra-Modern ITVedant-Style Flagship Hero Banner ─── */}
      <section className="relative bg-gradient-to-br from-[#000E33] via-[#001752] to-[#00081C] text-white py-12 sm:py-16 lg:py-20 overflow-hidden border-b border-[#002277]">
        {/* Glow Spheres */}
        <div className="absolute -top-36 -left-36 w-[450px] h-[450px] rounded-full bg-[#C41E1E]/20 blur-[130px] pointer-events-none" />
        <div className="absolute top-1/3 -right-28 w-[500px] h-[500px] rounded-full bg-[#002B94]/30 blur-[140px] pointer-events-none" />
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
            
            {/* Left Column: Hero Content & 4-Metric Bento Box (8 cols) */}
            <div className="lg:col-span-8 flex flex-col items-start gap-4 sm:gap-5">
              
              {/* Badges strip */}
              <div className="flex flex-wrap items-center gap-2">
                <span className={`text-[11px] font-black px-3.5 py-1 rounded-full uppercase tracking-wider ${
                  isCareer 
                    ? 'bg-[#C41E1E] text-white shadow-md shadow-red-950/40 border border-red-500/30' 
                    : 'bg-white/15 text-white border border-white/20'
                }`}>
                  {course.badge || (isCareer ? "Master's Career Program · AI Integrated" : 'Practical Certificate Course')}
                </span>

                <span className="inline-flex items-center gap-1.5 bg-amber-400/15 text-[#F5BE4F] text-[11px] font-bold px-3 py-1 rounded-full border border-amber-400/30">
                  <Star size={12} className="fill-[#F5BE4F]" />
                  <span>{course.rating || '4.9/5'} ({course.reviewsCount || '5,200+ Alumni'})</span>
                </span>

                <span className="inline-flex items-center gap-1.5 bg-emerald-500/15 text-emerald-300 text-[11px] font-bold px-3 py-1 rounded-full border border-emerald-500/30">
                  <Monitor size={12} />
                  <span>100% Practical (1:1 Machine)</span>
                </span>
              </div>

              {/* Course Title */}
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-white leading-[1.15]">
                {course.name}
              </h1>

              {/* Subtitle / Short Description */}
              <p className="text-base sm:text-lg text-slate-200/90 leading-relaxed font-normal max-w-3xl">
                {course.shortDesc}
              </p>

              {/* 4 ITVedant-Style Key Metrics Bento Grid */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 w-full pt-2">
                <div className="bg-white/[0.07] backdrop-blur-md p-3.5 sm:p-4 rounded-2xl border border-white/15 flex flex-col justify-between hover:bg-white/[0.1] transition-colors">
                  <div className="flex items-center gap-1.5 text-[#F5BE4F] mb-1.5">
                    <Clock size={16} />
                    <span className="text-[10.5px] font-bold text-slate-300 uppercase tracking-wider">Live Lab Hours</span>
                  </div>
                  <strong className="text-base sm:text-lg font-black text-white leading-tight">
                    {course.hours || course.durationPlaceholder.split('(')[0].trim()}
                  </strong>
                  <span className="text-[10.5px] text-emerald-400 font-semibold mt-1 flex items-center gap-1">
                    <CheckCircle2 size={11} /> 100% Hands-On
                  </span>
                </div>

                <div className="bg-white/[0.07] backdrop-blur-md p-3.5 sm:p-4 rounded-2xl border border-white/15 flex flex-col justify-between hover:bg-white/[0.1] transition-colors">
                  <div className="flex items-center gap-1.5 text-[#F5BE4F] mb-1.5">
                    <Code2 size={16} />
                    <span className="text-[10.5px] font-bold text-slate-300 uppercase tracking-wider">Capstones</span>
                  </div>
                  <strong className="text-base sm:text-lg font-black text-white leading-tight">
                    {course.caseStudiesCount?.split(' ')[0] || (course.projects ? `${course.projects.length}+ Live Projects` : '15+ Projects')}
                  </strong>
                  <span className="text-[10.5px] text-slate-300 font-semibold mt-1">
                    Portfolio Ready
                  </span>
                </div>

                <div className="bg-white/[0.07] backdrop-blur-md p-3.5 sm:p-4 rounded-2xl border border-white/15 flex flex-col justify-between hover:bg-white/[0.1] transition-colors">
                  <div className="flex items-center gap-1.5 text-[#F5BE4F] mb-1.5">
                    <TrendingUp size={16} />
                    <span className="text-[10.5px] font-bold text-slate-300 uppercase tracking-wider">Target Salary</span>
                  </div>
                  <strong className="text-base sm:text-lg font-black text-white leading-tight">
                    {course.avgSalary || '₹4.5 LPA – ₹9.5 LPA'}
                  </strong>
                  <span className="text-[10.5px] text-slate-300 font-semibold mt-1">
                    Market Benchmark
                  </span>
                </div>

                <div className="bg-white/[0.07] backdrop-blur-md p-3.5 sm:p-4 rounded-2xl border border-white/15 flex flex-col justify-between hover:bg-white/[0.1] transition-colors">
                  <div className="flex items-center gap-1.5 text-[#F5BE4F] mb-1.5">
                    <MapPin size={16} />
                    <span className="text-[10.5px] font-bold text-slate-300 uppercase tracking-wider">Commute Gain</span>
                  </div>
                  <strong className="text-base sm:text-lg font-black text-white leading-tight">
                    Save 3+ Hrs Daily
                  </strong>
                  <span className="text-[10.5px] text-[#F5BE4F] font-semibold mt-1">
                    Station Subway 2 Min
                  </span>
                </div>
              </div>

              {/* Action Buttons Row */}
              <div className="flex flex-wrap items-center gap-3 pt-3 w-full sm:w-auto">
                <button
                  type="button"
                  onClick={() => openModal('syllabus')}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 h-12 px-7 rounded-full bg-[#C41E1E] hover:bg-[#A81717] text-white font-bold text-sm shadow-xl shadow-red-950/40 active:scale-95 transition-all group"
                >
                  <Download size={16} className="text-white group-hover:-translate-y-0.5 transition-transform" />
                  <span>Download Curriculum (PDF)</span>
                </button>

                <button
                  type="button"
                  onClick={() => openModal('demo')}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 h-12 px-6 rounded-full bg-white text-[#001752] hover:bg-slate-100 font-bold text-sm shadow-lg active:scale-95 transition-all"
                >
                  <Sparkles size={16} className="text-[#C41E1E]" />
                  <span>Book Free 1:1 Lab Demo</span>
                </button>

                <a
                  href={`${SITE_CONFIG.contact.whatsapp}?text=${encodeURIComponent(course.whatsappMessage)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 h-12 px-5 rounded-full bg-[#25D366] hover:bg-[#20BA5A] text-white text-sm font-bold shadow-lg active:scale-95 transition-all"
                >
                  <MessageSquare size={16} />
                  <span>WhatsApp Counsellor</span>
                </a>
              </div>

            </div>

            {/* Right Column: Admission Desk & Concession Card (4 cols) */}
            <div className="lg:col-span-4 mt-4 lg:mt-0">
              <div className="bg-white rounded-3xl p-6 sm:p-7 text-[#001752] shadow-2xl border border-slate-200 flex flex-col gap-4 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-[#C41E1E]/10 rounded-bl-full pointer-events-none" />

                {/* Course Lab Image Preview */}
                <div className="relative aspect-[16/9] w-full rounded-2xl overflow-hidden shadow-xs border border-slate-100 group">
                  <img
                    src={courseImage}
                    alt={`${course.name} practical training at RACE`}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent pointer-events-none" />
                  <span className="absolute bottom-2.5 left-3 text-[10.5px] font-bold text-white bg-black/70 backdrop-blur-xs px-2.5 py-0.5 rounded-md flex items-center gap-1.5">
                    <Laptop size={12} className="text-emerald-400" />
                    Dedicated Lab Workstation
                  </span>
                </div>

                <div className="flex items-center justify-between">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-red-50 text-[#C41E1E] text-xs font-bold border border-red-200">
                    <Sparkles size={12} className="text-[#C41E1E]" />
                    <span>Special Concession</span>
                  </span>
                  <span className="bg-[#001752] text-white text-[10px] py-0.5 px-2.5 font-black rounded-md tracking-wider">
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

                <button
                  type="button"
                  onClick={() => openModal('syllabus')}
                  className="w-full flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#20BA5A] text-white text-xs sm:text-sm font-bold py-3.5 rounded-full shadow-md transition-all active:scale-95"
                >
                  <MessageSquare size={16} />
                  <span>Get Complete Fee Details on WhatsApp</span>
                </button>

                <div className="text-center text-[11px] text-slate-500 font-medium">
                  ⚡ Limited seats per batch to preserve 1:1 computer ratio
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ─── Sticky ITVedant-Style Sub-Navigation Bar ─── */}
      <nav className="sticky top-0 lg:top-[64px] z-20 bg-white/95 backdrop-blur-md border-b border-slate-200 shadow-xs transition-all">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between py-2.5 gap-4">
            
            {/* Scrollable Tabs */}
            <div className="flex items-center gap-1.5 sm:gap-2 overflow-x-auto no-scrollbar text-xs font-bold py-1">
              <button
                onClick={() => scrollToSection('overview')}
                className={`px-3.5 py-1.5 rounded-full whitespace-nowrap transition-all ${
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
                  className={`px-3.5 py-1.5 rounded-full whitespace-nowrap transition-all ${
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
                  className={`px-3.5 py-1.5 rounded-full whitespace-nowrap transition-all ${
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
                className={`px-3.5 py-1.5 rounded-full whitespace-nowrap transition-all ${
                  activeNav === 'curriculum'
                    ? 'bg-[#001752] text-white shadow-xs'
                    : 'text-slate-600 hover:text-[#001752] hover:bg-slate-100'
                }`}
              >
                Curriculum Syllabus
              </button>

              {course.careerRoles && course.careerRoles.length > 0 && (
                <button
                  onClick={() => scrollToSection('careers')}
                  className={`px-3.5 py-1.5 rounded-full whitespace-nowrap transition-all ${
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
                className={`px-3.5 py-1.5 rounded-full whitespace-nowrap transition-all ${
                  activeNav === 'why-race'
                    ? 'bg-[#001752] text-white shadow-xs'
                    : 'text-slate-600 hover:text-[#001752] hover:bg-slate-100'
                }`}
              >
                Why RACE vs Mumbai
              </button>

              <button
                onClick={() => scrollToSection('faq')}
                className={`px-3.5 py-1.5 rounded-full whitespace-nowrap transition-all ${
                  activeNav === 'faq'
                    ? 'bg-[#001752] text-white shadow-xs'
                    : 'text-slate-600 hover:text-[#001752] hover:bg-slate-100'
                }`}
              >
                FAQs
              </button>
            </div>

            {/* Sticky Right Fast Action (Desktop Only) */}
            <div className="hidden md:flex items-center gap-2 shrink-0">
              <button
                onClick={() => openModal('demo')}
                className="inline-flex items-center gap-1.5 text-xs font-bold px-4 py-2 rounded-full bg-[#C41E1E] text-white hover:bg-[#A81717] transition-all shadow-xs"
              >
                <Sparkles size={13} />
                <span>Book Free Demo</span>
              </button>
              <button
                onClick={() => openModal('syllabus')}
                className="inline-flex items-center gap-1.5 text-xs font-bold px-3.5 py-2 rounded-full bg-slate-100 text-[#001752] hover:bg-slate-200 transition-colors"
              >
                <Download size={13} />
                <span>Syllabus</span>
              </button>
            </div>

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
              <div id="overview" className="bg-white p-6 sm:p-8 rounded-3xl border border-slate-200/90 shadow-sm scroll-mt-32">
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

                {/* Who is this for callout card */}
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
                        <div key={idx} className="flex items-start gap-2.5 p-3 rounded-xl bg-slate-50 border border-slate-200/70 hover:border-[#001752]/30 transition-colors">
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

              {/* ─── 2. REAL-WORLD CAPSTONE PROJECTS (ITVedant Style Terminal Bento) ─── */}
              {course.projects && course.projects.length > 0 && (
                <div id="projects" className="bg-white p-6 sm:p-8 rounded-3xl border border-slate-200/90 shadow-sm scroll-mt-32">
                  <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 text-emerald-800 text-xs font-bold uppercase tracking-wider border border-emerald-200">
                      <Code2 size={13} className="text-emerald-600" />
                      Project-First Pedagogy
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
                        className="rounded-2xl bg-white border border-slate-200 hover:border-[#001752]/40 transition-all hover:shadow-md flex flex-col justify-between overflow-hidden group"
                      >
                        {/* Terminal Header */}
                        <div className="bg-slate-900 px-4 py-2.5 flex items-center justify-between text-xs text-slate-300 font-mono">
                          <div className="flex items-center gap-1.5">
                            <span className="w-2.5 h-2.5 rounded-full bg-red-500 inline-block" />
                            <span className="w-2.5 h-2.5 rounded-full bg-amber-500 inline-block" />
                            <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 inline-block" />
                            <span className="text-[11px] text-slate-400 ml-2 font-sans font-bold">
                              Project #{idx + 1}
                            </span>
                          </div>
                          <span className="text-[10px] bg-white/10 text-emerald-400 px-2 py-0.5 rounded font-sans font-bold">
                            Live Capstone
                          </span>
                        </div>

                        <div className="p-5 flex-1 flex flex-col justify-between">
                          <div>
                            <h3 className="text-base font-bold text-[#001752] mb-2 leading-snug group-hover:text-[#C41E1E] transition-colors">
                              {proj.title}
                            </h3>

                            <p className="text-xs text-slate-600 leading-relaxed mb-4">
                              {proj.desc}
                            </p>
                          </div>

                          <div className="pt-3 border-t border-slate-100">
                            <span className="text-[10px] font-black uppercase tracking-wider text-slate-400 block mb-1.5">
                              Tech Stack &amp; Tools Used:
                            </span>
                            <div className="flex flex-wrap gap-1.5">
                              {proj.tech.split(',').map((t, tIdx) => (
                                <span
                                  key={tIdx}
                                  className="inline-block text-[11px] font-bold text-[#001752] bg-slate-100 px-2.5 py-0.5 rounded-md border border-slate-200"
                                >
                                  {t.trim()}
                                </span>
                              ))}
                            </div>
                          </div>
                        </div>

                        {/* Project Footer Badge */}
                        <div className="bg-slate-50 px-5 py-2.5 border-t border-slate-100 flex items-center justify-between text-[11px]">
                          <span className="text-emerald-700 font-bold flex items-center gap-1">
                            <CheckCircle2 size={12} /> GitHub Ready
                          </span>
                          <span className="text-slate-500 font-medium">
                            Live Lab Evaluated
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Student Code Demo Request Banner */}
                  <div className="mt-6 p-4 rounded-2xl bg-gradient-to-r from-slate-900 to-[#001752] text-white flex flex-col sm:flex-row items-center justify-between gap-4">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-xl bg-white/10 text-[#F5BE4F] flex items-center justify-center shrink-0 border border-white/15">
                        <Terminal size={18} />
                      </div>
                      <div>
                        <strong className="text-xs sm:text-sm font-bold text-white block">
                          Want to inspect past student project demos &amp; code repositories?
                        </strong>
                        <span className="text-[11px] text-slate-300">
                          Visit our lab in person or request live demo repositories on WhatsApp.
                        </span>
                      </div>
                    </div>

                    <a
                      href={`${SITE_CONFIG.contact.whatsapp}?text=${encodeURIComponent(
                        `Hello! I want to see project demos and student assignments for ${course.name} at RACE.`
                      )}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-[#25D366] text-white text-xs font-bold hover:bg-[#20BA5A] transition-colors shrink-0 shadow-md"
                    >
                      <MessageSquare size={13} />
                      <span>Request Live Demos</span>
                    </a>
                  </div>
                </div>
              )}

              {/* ─── 3. TOOLS & TECHNOLOGIES STACK ─── */}
              {course.tools && course.tools.length > 0 && (
                <div id="tools" className="bg-white p-6 sm:p-8 rounded-3xl border border-slate-200/90 shadow-sm scroll-mt-32">
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
                    You practice directly on these tools during every lab session. We keep our software stack updated to current enterprise standards. Every tool is installed on your personal PC for unlimited hands-on practice.
                  </p>

                  <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
                    {course.tools.map((tool, idx) => (
                      <div
                        key={idx}
                        className="p-3.5 rounded-2xl bg-slate-50 border border-slate-200/80 hover:border-[#C41E1E]/50 hover:bg-white hover:shadow-md transition-all flex items-center gap-2.5 group"
                      >
                        <div className="w-8 h-8 rounded-lg bg-[#001752]/5 text-[#001752] group-hover:bg-[#C41E1E]/10 group-hover:text-[#C41E1E] flex items-center justify-center shrink-0 transition-colors">
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

              {/* ─── 4. DETAILED CURRICULUM MODULES (ITVedant Timeline Journey) ─── */}
              <div id="curriculum" className="scroll-mt-32">
                <CourseJourneyCurriculum
                  course={course}
                  onDownloadBrochure={() => openModal('syllabus')}
                />
              </div>

              {/* ─── 5. CAREER OUTCOMES & SALARY BENCHMARKS ─── */}
              {course.careerRoles && course.careerRoles.length > 0 && (
                <div id="careers" className="bg-white p-6 sm:p-8 rounded-3xl border border-slate-200/90 shadow-sm scroll-mt-32">
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
                    Graduates from this program are equipped to apply for competitive technical roles across Mumbai, Pune, and remote tech companies.
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
                          className="px-3.5 py-1.5 rounded-full bg-slate-100 border border-slate-200 text-xs font-bold text-[#001752] flex items-center gap-1.5 hover:bg-slate-200 transition-colors"
                        >
                          <Briefcase size={12} className="text-[#C41E1E]" />
                          {role}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* 3 Salary Tier Progression Cards (ITVedant Style Ladder) */}
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
                    <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 flex flex-col justify-between">
                      <div>
                        <span className="text-[11px] font-bold text-slate-500 uppercase block mb-1">
                          Entry Level / Fresher
                        </span>
                        <strong className="text-xl font-black text-[#001752] block">
                          ₹4.0 LPA – ₹6.0 LPA
                        </strong>
                      </div>
                      <span className="text-[11px] text-slate-600 mt-2 block pt-2 border-t border-slate-200">
                        Based on capstone portfolio &amp; coding test
                      </span>
                    </div>

                    <div className="p-4 rounded-2xl bg-[#001752]/5 border-2 border-[#001752]/20 flex flex-col justify-between relative overflow-hidden">
                      <span className="absolute top-2 right-2 bg-[#C41E1E] text-white text-[9px] font-black uppercase px-2 py-0.5 rounded">
                        Fastest Growth
                      </span>
                      <div>
                        <span className="text-[11px] font-bold text-[#001752] uppercase block mb-1">
                          Mid-Level (2–4 Years)
                        </span>
                        <strong className="text-xl font-black text-[#C41E1E] block">
                          ₹7.5 LPA – ₹12.0 LPA
                        </strong>
                      </div>
                      <span className="text-[11px] text-slate-600 mt-2 block pt-2 border-t border-[#001752]/10">
                        Full stack or domain specialization
                      </span>
                    </div>

                    <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 flex flex-col justify-between">
                      <div>
                        <span className="text-[11px] font-bold text-slate-500 uppercase block mb-1">
                          Senior Specialist
                        </span>
                        <strong className="text-xl font-black text-[#001752] block">
                          ₹14.0 LPA – ₹22.0+ LPA
                        </strong>
                      </div>
                      <span className="text-[11px] text-slate-600 mt-2 block pt-2 border-t border-slate-200">
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
                          <span className="text-slate-500 text-[11px]">Formatted to clear corporate ATS screening filters.</span>
                        </div>
                      </div>

                      <div className="flex items-start gap-2.5 p-3 rounded-xl bg-slate-50 border border-slate-200/70">
                        <CheckCircle2 size={16} className="text-emerald-600 shrink-0 mt-0.5" />
                        <div>
                          <strong className="font-bold text-[#001752] block">GitHub Portfolio Audit</strong>
                          <span className="text-slate-500 text-[11px]">Clean commit history, README documentation &amp; live demos.</span>
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
              <div id="why-race" className="bg-white p-6 sm:p-8 rounded-3xl border border-slate-200/90 shadow-sm scroll-mt-32">
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
                          <span className="inline-flex items-center gap-1.5">
                            <Check size={14} className="text-emerald-600 stroke-[3]" />
                            2-min walk from subway (0 hrs train fatigue)
                          </span>
                        </td>
                        <td className="p-3 sm:p-4 text-rose-600">
                          <span className="inline-flex items-center gap-1.5">
                            <X size={14} className="text-rose-500 stroke-[3]" />
                            2.5 to 3.5 hours every day in packed local trains
                          </span>
                        </td>
                      </tr>
                      <tr>
                        <td className="p-3 sm:p-4 font-bold text-[#001752]">Workstation Guarantee</td>
                        <td className="p-3 sm:p-4 bg-red-50/50 font-bold text-[#C41E1E]">
                          <span className="inline-flex items-center gap-1.5">
                            <Check size={14} className="text-[#C41E1E] stroke-[3]" />
                            1 Student : 1 PC Guaranteed (Never share)
                          </span>
                        </td>
                        <td className="p-3 sm:p-4 text-slate-500">
                          <span className="inline-flex items-center gap-1.5">
                            <X size={14} className="text-slate-400 stroke-[3]" />
                            Often 2 students per computer in overcrowded batches
                          </span>
                        </td>
                      </tr>
                      <tr>
                        <td className="p-3 sm:p-4 font-bold text-[#001752]">Practical Lab Time</td>
                        <td className="p-3 sm:p-4 bg-red-50/50 font-bold text-emerald-700">
                          <span className="inline-flex items-center gap-1.5">
                            <Check size={14} className="text-emerald-600 stroke-[3]" />
                            Extra lab practice hours anytime during 8 AM – 8 PM
                          </span>
                        </td>
                        <td className="p-3 sm:p-4 text-slate-500">
                          <span className="inline-flex items-center gap-1.5">
                            <X size={14} className="text-slate-400 stroke-[3]" />
                            Strict time limits; asked to vacate for next batch
                          </span>
                        </td>
                      </tr>
                      <tr>
                        <td className="p-3 sm:p-4 font-bold text-[#001752]">Course Fees &amp; Savings</td>
                        <td className="p-3 sm:p-4 bg-red-50/50 font-bold text-[#001752]">
                          <span className="inline-flex items-center gap-1.5">
                            <Check size={14} className="text-emerald-600 stroke-[3]" />
                            Flat 50% Concession + FREE Basic Computer
                          </span>
                        </td>
                        <td className="p-3 sm:p-4 text-slate-500">
                          <span className="inline-flex items-center gap-1.5">
                            <X size={14} className="text-slate-400 stroke-[3]" />
                            High commercial overhead fees (₹60k – ₹1.2 Lakhs)
                          </span>
                        </td>
                      </tr>
                      <tr>
                        <td className="p-3 sm:p-4 font-bold text-[#001752]">Faculty Mentorship</td>
                        <td className="p-3 sm:p-4 bg-red-50/50 font-bold text-[#001752]">
                          <span className="inline-flex items-center gap-1.5">
                            <Check size={14} className="text-emerald-600 stroke-[3]" />
                            Personal 1:1 attention, doubts resolved face-to-face
                          </span>
                        </td>
                        <td className="p-3 sm:p-4 text-slate-500">
                          <span className="inline-flex items-center gap-1.5">
                            <X size={14} className="text-slate-400 stroke-[3]" />
                            Large batches of 40–60 students; impersonal
                          </span>
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
                    <span>Authorized Online Verification Available</span>
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
              <div id="faq" className="bg-white p-6 sm:p-8 rounded-3xl border border-slate-200/90 shadow-sm scroll-mt-32">
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
                        className="rounded-2xl border border-slate-200 overflow-hidden transition-all shadow-xs"
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
                  <span className="text-[10px] font-black px-2.5 py-0.5 rounded-full bg-emerald-100 text-emerald-800">
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
                  <button
                    type="button"
                    onClick={() => openModal('demo')}
                    className="w-full flex items-center justify-center gap-2 bg-[#C41E1E] hover:bg-[#A81717] text-white text-xs sm:text-sm font-bold py-3 rounded-full shadow-md transition-all active:scale-95"
                  >
                    <Sparkles size={15} />
                    <span>Book Free 1:1 Lab Demo</span>
                  </button>

                  <a
                    href={`${SITE_CONFIG.contact.whatsapp}?text=${encodeURIComponent(
                      `Hello! I want to book a batch slot for ${course.name} at RACE.`
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#20BA5A] text-white text-xs sm:text-sm font-bold py-3 rounded-full shadow-sm transition-all active:scale-95"
                  >
                    <MessageSquare size={15} />
                    <span>Reserve Seat on WhatsApp</span>
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
                Explore Alternative Pathways
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
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
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

      {/* ─── Interactive Syllabus & Demo Request Modal ─── */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs animate-in fade-in duration-200">
          <div className="relative w-full max-w-lg bg-white rounded-3xl shadow-2xl border border-slate-200 overflow-hidden p-6 sm:p-8 animate-in zoom-in-95 duration-200">
            
            {/* Close Button */}
            <button
              onClick={() => setIsModalOpen(false)}
              className="absolute top-4 right-4 p-2 rounded-full text-slate-400 hover:text-slate-600 hover:bg-slate-100 transition-colors"
              aria-label="Close modal"
            >
              <X size={20} />
            </button>

            {/* Modal Header */}
            <div className="mb-6">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-red-50 text-[#C41E1E] text-xs font-bold uppercase tracking-wider mb-2">
                {modalMode === 'syllabus' ? <Download size={12} /> : <Sparkles size={12} />}
                <span>{modalMode === 'syllabus' ? 'Curriculum Download' : 'Free 1:1 Lab Demo'}</span>
              </span>
              <h3 className="text-xl sm:text-2xl font-black text-[#001752] leading-tight">
                {modalMode === 'syllabus'
                  ? `Download ${course.name} Syllabus`
                  : `Book Your 1:1 Demo for ${course.name}`}
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 mt-1.5">
                We will instantly share the complete detailed syllabus, fee breakdown, and schedule options via WhatsApp.
              </p>
            </div>

            {/* Form */}
            <form onSubmit={handleModalSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-bold text-[#001752] uppercase tracking-wider mb-1.5">
                  Your Full Name *
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Rahul Sharma"
                  value={candidateName}
                  onChange={(e) => setCandidateName(e.target.value)}
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-hidden focus:ring-2 focus:ring-[#001752] text-sm text-[#001752] placeholder:text-slate-400"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-[#001752] uppercase tracking-wider mb-1.5">
                  WhatsApp / Phone Number *
                </label>
                <input
                  type="tel"
                  required
                  placeholder="e.g. 9876543210"
                  value={candidatePhone}
                  onChange={(e) => setCandidatePhone(e.target.value)}
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-hidden focus:ring-2 focus:ring-[#001752] text-sm text-[#001752] placeholder:text-slate-400"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-[#001752] uppercase tracking-wider mb-1.5">
                  Preferred Batch Timing
                </label>
                <select
                  value={candidateBatch}
                  onChange={(e) => setCandidateBatch(e.target.value)}
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-hidden focus:ring-2 focus:ring-[#001752] text-sm text-[#001752] bg-white"
                >
                  <option value="Morning Batch (8 AM – 11 AM)">Morning Batch (8 AM – 11 AM)</option>
                  <option value="Afternoon Slot (12 PM – 3 PM)">Afternoon Slot (12 PM – 3 PM)</option>
                  <option value="Special Ladies Batch (1 PM – 3 PM)">Special Ladies Batch (1 PM – 3 PM)</option>
                  <option value="Evening Slot (5 PM – 8:30 PM)">Evening Slot (5 PM – 8:30 PM)</option>
                  <option value="Weekend Batch (Flexible)">Weekend Batch (Flexible)</option>
                </select>
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full flex items-center justify-center gap-2 bg-[#C41E1E] hover:bg-[#A81717] text-white font-bold py-3.5 rounded-full shadow-lg active:scale-95 transition-all text-sm"
                >
                  <MessageSquare size={16} />
                  <span>
                    {modalMode === 'syllabus' ? 'Send Syllabus to My WhatsApp' : 'Confirm Free 1:1 Demo'}
                  </span>
                </button>
              </div>

              <div className="text-center text-[11px] text-slate-500 pt-1">
                🔒 Your number is 100% confidential. No spam calls.
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
}
