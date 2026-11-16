import React, { useState, useMemo, useEffect } from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { 
  ArrowLeft, 
  ArrowRight, 
  Clock, 
  Award, 
  MessageSquare, 
  Phone, 
  MapPin, 
  Sparkles, 
  Monitor, 
  Briefcase, 
  Download, 
  ChevronDown, 
  ChevronUp, 
  X,
  Send
} from 'lucide-react';
import SEO from '../components/SEO';
import CourseJourneyCurriculum from '../components/CourseJourneyCurriculum';
import { ToolLogo } from '../components/ToolIcons';
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
  'software-development': '/images/student-coding.jpg',
  'dfa': '/images/tally-practice.jpg',
  'animation': '/images/course-graphic-design.jpg',
  'graphic-designing': '/images/course-graphic-design.jpg',
  'ai-prompt-engineering': '/images/course-ai-ml.jpg',
  'data-science': '/images/real-data-chart-session.jpg',
  'cyber-security': '/images/real-students-presentation.jpg',
};

function getCourseImage(id: string, type: 'career' | 'short-term'): string {
  if (COURSE_IMAGES[id]) return COURSE_IMAGES[id];
  return type === 'career' ? '/images/student-coding.jpg' : '/images/real-lab-classroom.jpg';
}

export default function CourseDetail() {
  const { courseId } = useParams<{ courseId: string }>();

  // Look up course by id or aliases
  const course = COURSES.find(
    (c) => c.id === courseId || c.aliases?.includes(courseId || '')
  );

  if (!course) {
    return <Navigate to="/courses" replace />;
  }

  const isCareer = course.type === 'career';
  const courseImage = getCourseImage(course.id, course.type);

  // Related courses (prioritize same category)
  const relatedCourses = useMemo(() => {
    return COURSES.filter(
      (c) => c.id !== course.id && (c.type === course.type || c.goals.some((g) => course.goals.includes(g)))
    ).slice(0, 3);
  }, [course]);

  // Modal State for Syllabus Download & Free Demo
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalMode, setModalMode] = useState<'syllabus' | 'demo'>('syllabus');
  const [candidateName, setCandidateName] = useState('');
  const [candidatePhone, setCandidatePhone] = useState('');
  const [candidateBatch, setCandidateBatch] = useState('Morning Batch (8 AM – 11 AM)');

  const openModal = (mode: 'syllabus' | 'demo') => {
    setModalMode(mode);
    setIsModalOpen(true);
  };

  const handleModalSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!candidateName.trim() || candidatePhone.replace(/\D/g, '').length !== 10) {
      alert('Please enter your full name and a valid 10-digit mobile number.');
      return;
    }
    const purpose = modalMode === 'syllabus' ? 'Download Complete Syllabus & Fee Structure' : 'Book Free 1:1 Lab Demo';
    const text = `Hello RACE! I would like to ${purpose} for ${course.name}.
Name: ${candidateName.trim()}
Mobile: ${candidatePhone.trim()}
Preferred Timing: ${candidateBatch}
Please send syllabus details.`;
    const whatsappUrl = `${SITE_CONFIG.contact.whatsapp}?text=${encodeURIComponent(text)}`;
    window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
    setIsModalOpen(false);
    setCandidateName('');
    setCandidatePhone('');
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

  // FAQ Accordion State
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const courseFaqs = [
    {
      q: `Do I need prior coding or technical knowledge to join ${course.name}?`,
      a: 'No prior background is required. We start from ground-level foundations and advance systematically with direct 1:1 faculty guidance at your workstation.'
    },
    {
      q: 'Do students get their own computer or is machine sharing required?',
      a: 'We strictly guarantee a 1 Student : 1 PC ratio. You will never share a computer at RACE. Every minute of class is dedicated hands-on practical practice.'
    },
    {
      q: 'What batch timings are available?',
      a: 'We offer flexible Morning batches (8 AM–11 AM), Afternoon slots (12 PM–3 PM), Special Ladies Batch (1 PM–3 PM), and Evening batches (5 PM–8:30 PM). Weekend slots are also available.'
    },
    {
      q: 'Where is the institute located and how close is the station?',
      a: 'We are located at 202, 2nd Floor, Raut Arcade, directly opposite the railway station subway entrance (2-minute walk from Platform 1/2 exit). Zero Mumbai commute fatigue.'
    },
    {
      q: 'What certificate will I receive upon course completion?',
      a: `You will receive an authorized ${course.certificate} along with ISO 9001:2015 accredited course completion credentials recognized by recruiters.`
    },
    {
      q: 'How does the 50% fee concession work?',
      a: 'All enrolled students receive an upfront 50% course fee subsidy, plus the foundational Basic Computer module free of charge when joining any career diploma program.'
    }
  ];

  return (
    <>
      <SEO
        title={`${course.name} Course | RACE`}
        description={`Practical ${course.name} training at RACE, opposite Virar East station. 100% lab time, 1:1 computer guarantee, ISO 9001:2015 certificate, and 50% concession.`}
        canonical={`/courses/${course.id}`}
      />

      {/* ─── 1. Minimal Breadcrumb Bar ─── */}
      <div className="bg-white border-b border-slate-200 py-3.5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between text-xs">
          <Link
            to="/courses"
            className="inline-flex items-center gap-1.5 font-bold text-[#001752] hover:text-[#C41E1E] transition-colors"
          >
            <ArrowLeft size={14} />
            <span>Back to All Courses</span>
          </Link>
          <div className="flex items-center gap-2 text-slate-500 text-[11px] font-medium">
            <span className="hidden sm:inline">Raut Arcade 202</span>
            <span className="hidden sm:inline">•</span>
            <span className="text-[#001752] font-semibold">Opp. Virar East Station Subway</span>
          </div>
        </div>
      </div>

      {/* ─── 2. Clean, Minimal, Asymmetric Hero Section ─── */}
      <section className="bg-white border-b border-slate-200/90 py-12 sm:py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            
            {/* Left Column: Heading, Context & Clear CTAs (7 cols) */}
            <div className="lg:col-span-7 flex flex-col items-start">
              
              {/* Category Pill */}
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 text-[#001752] text-xs font-bold uppercase tracking-wider mb-4 border border-slate-200">
                <span className="w-1.5 h-1.5 rounded-full bg-[#A2D016]" />
                <span>{isCareer ? "Career Master Program" : "Professional Certificate"}</span>
              </div>

              {/* Main Course Title */}
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#001752] tracking-tight leading-[1.14] mb-4">
                {course.name}
              </h1>

              {/* Concise Description */}
              <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-normal max-w-2xl mb-6">
                {course.shortDesc}
              </p>

              {/* Minimal Quick-Facts Row */}
              <div className="flex flex-wrap items-center gap-y-2 gap-x-5 text-xs text-slate-700 font-semibold mb-8 pt-1">
                <div className="flex items-center gap-1.5">
                  <Clock size={15} className="text-[#001752]" />
                  <span>{course.durationPlaceholder.split('(')[0].trim()}</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <Monitor size={15} className="text-emerald-600" />
                  <span>1 Student : 1 PC Guaranteed</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <Award size={15} className="text-amber-600" />
                  <span>ISO 9001:2015 Accredited</span>
                </div>
              </div>

              {/* Dual Action Buttons */}
              <div className="flex flex-wrap items-center gap-3 w-full sm:w-auto">
                <button
                  type="button"
                  onClick={() => openModal('demo')}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 h-12 px-7 rounded-xl bg-[#001752] hover:bg-[#002277] text-white font-bold text-sm shadow-md transition-all active:scale-95 cursor-pointer"
                >
                  <Sparkles size={16} className="text-[#A2D016]" />
                  <span>Book Free 1:1 Lab Demo</span>
                </button>

                <button
                  type="button"
                  onClick={() => openModal('syllabus')}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 h-12 px-6 rounded-xl bg-white border border-slate-300 hover:bg-slate-50 text-slate-800 font-bold text-sm shadow-2xs transition-all active:scale-95 cursor-pointer"
                >
                  <Download size={15} className="text-slate-500" />
                  <span>Download Syllabus (PDF)</span>
                </button>

                <a
                  href={`${SITE_CONFIG.contact.whatsapp}?text=${encodeURIComponent(course.whatsappMessage)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 h-12 px-5 rounded-xl bg-[#25D366] hover:bg-[#20BA5A] text-white font-bold text-sm shadow-2xs transition-all active:scale-95"
                >
                  <MessageSquare size={16} />
                  <span>WhatsApp Counsellor</span>
                </a>
              </div>

              {/* Transparent Concession Note */}
              <div className="mt-4 flex items-center gap-2 text-xs text-slate-500 font-medium">
                <span className="w-2 h-2 rounded-full bg-emerald-500" />
                <span>Admissions open with flat 50% concession + Free Basic Computer module</span>
              </div>

            </div>

            {/* Right Column: Clean Photographic Image Frame (5 cols) */}
            <div className="lg:col-span-5 relative w-full">
              <div className="relative aspect-[16/11] w-full rounded-3xl overflow-hidden bg-slate-900 border border-slate-200/90 shadow-xl group">
                <img
                  src={courseImage}
                  alt={`${course.name} practical training at RACE`}
                  className="w-full h-full object-cover group-hover:scale-103 transition-transform duration-500"
                  loading="lazy"
                />
                
                {/* Subtle vignette gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent pointer-events-none" />

                {/* Floating Top Badge */}
                <div className="absolute top-4 left-4">
                  <span className="bg-black/60 backdrop-blur-md text-white text-[11px] font-bold px-3 py-1 rounded-full border border-white/20">
                    Raut Arcade 202 Lab
                  </span>
                </div>

                {/* Floating Bottom Card */}
                <div className="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur-md p-3.5 rounded-2xl border border-white/60 shadow-lg text-[#001752] flex items-center justify-between text-xs">
                  <div>
                    <strong className="block font-bold">100% Practical Sessions</strong>
                    <span className="text-[11px] text-slate-500">Dedicated desktop for every student</span>
                  </div>
                  <span className="bg-[#A2D016] text-[#001752] font-black text-[10.5px] px-2.5 py-1 rounded-md">
                    1:1 PC
                  </span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ─── 3. Minimal 4-Pillar Value Strip ─── */}
      <section className="bg-[#FAF9F6] border-b border-slate-200/80 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-4 lg:divide-x divide-slate-200">
            
            <div className="flex items-center gap-3 px-2">
              <div className="w-10 h-10 rounded-xl bg-white border border-slate-200 text-[#001752] flex items-center justify-center shrink-0 shadow-xs">
                <Monitor size={18} />
              </div>
              <div>
                <strong className="block text-xs sm:text-sm font-bold text-[#001752]">1:1 Dedicated PC</strong>
                <span className="text-[11px] text-slate-500">Zero machine sharing</span>
              </div>
            </div>

            <div className="flex items-center gap-3 px-2">
              <div className="w-10 h-10 rounded-xl bg-white border border-slate-200 text-[#001752] flex items-center justify-center shrink-0 shadow-xs">
                <Sparkles size={18} className="text-[#A2D016]" />
              </div>
              <div>
                <strong className="block text-xs sm:text-sm font-bold text-[#001752]">Flat 50% Concession</strong>
                <span className="text-[11px] text-slate-500">+ Free Basic Computer course</span>
              </div>
            </div>

            <div className="flex items-center gap-3 px-2">
              <div className="w-10 h-10 rounded-xl bg-white border border-slate-200 text-[#001752] flex items-center justify-center shrink-0 shadow-xs">
                <Clock size={18} />
              </div>
              <div>
                <strong className="block text-xs sm:text-sm font-bold text-[#001752]">Flexible Daily Slots</strong>
                <span className="text-[11px] text-slate-500">Morning, Ladies &amp; Evening</span>
              </div>
            </div>

            <div className="flex items-center gap-3 px-2">
              <div className="w-10 h-10 rounded-xl bg-white border border-slate-200 text-[#001752] flex items-center justify-center shrink-0 shadow-xs">
                <MapPin size={18} />
              </div>
              <div>
                <strong className="block text-xs sm:text-sm font-bold text-[#001752]">Station Subway 2-Min</strong>
                <span className="text-[11px] text-slate-500">No commute to Mumbai</span>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ─── 4. The Journey Curriculum (The Centerpiece UI) ─── */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <CourseJourneyCurriculum
          course={course}
          onDownloadBrochure={() => openModal('syllabus')}
        />
      </div>

      {/* ─── 5. Tools & Technologies Stack (Clean, Minimal Grid) ─── */}
      {course.tools && course.tools.length > 0 && (
        <section className="bg-[#FAF9F6] border-y border-slate-200/80 py-14 sm:py-18">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-2xl mb-10">
              <span className="text-xs font-bold text-slate-500 uppercase tracking-wider block mb-1">
                Practical Software Stack
              </span>
              <h2 className="text-2xl sm:text-3xl font-black text-[#001752] tracking-tight">
                Tools &amp; Technologies You Will Master
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 mt-2 leading-relaxed">
                Every software tool is pre-installed on your personal lab workstation. You practice hands-on every day.
              </p>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3.5">
              {course.tools.map((tool, idx) => (
                <div
                  key={idx}
                  className="bg-white rounded-2xl p-4 border border-slate-200/90 shadow-2xs hover:shadow-md transition-all flex flex-col items-center justify-center text-center group"
                >
                  <div className="w-10 h-10 rounded-xl bg-slate-50 flex items-center justify-center mb-2.5 group-hover:scale-110 transition-transform">
                    <ToolLogo name={tool} className="w-6 h-6 object-contain" />
                  </div>
                  <strong className="text-xs font-bold text-[#001752] line-clamp-1 w-full">
                    {tool}
                  </strong>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ─── 6. Capstone Projects Portfolio (Clean Cards) ─── */}
      {course.projects && course.projects.length > 0 && (
        <section className="bg-white py-14 sm:py-18 border-b border-slate-200/80">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-2xl mb-10">
              <span className="text-xs font-bold text-slate-500 uppercase tracking-wider block mb-1">
                Portfolio Ready
              </span>
              <h2 className="text-2xl sm:text-3xl font-black text-[#001752] tracking-tight">
                Live Capstone Projects You Build
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 mt-2 leading-relaxed">
                Real-world practical assignments to showcase on your resume and GitHub profile.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {course.projects.map((proj, idx) => (
                <div
                  key={idx}
                  className="bg-[#FAF9F6] rounded-3xl p-6 border border-slate-200/90 shadow-xs flex flex-col justify-between hover:border-slate-300 transition-all"
                >
                  <div>
                    <span className="text-[10px] font-mono text-slate-400 uppercase tracking-wider block mb-2">
                      Project 0{idx + 1}
                    </span>
                    <h3 className="text-base font-bold text-[#001752] mb-2 leading-snug">
                      {proj.title}
                    </h3>
                    <p className="text-xs text-slate-600 leading-relaxed font-sans mb-4">
                      {proj.desc}
                    </p>
                  </div>

                  <div className="pt-3 border-t border-slate-200/80 flex items-center justify-between text-xs">
                    <span className="text-[11px] font-mono font-bold text-slate-500">
                      {proj.tech}
                    </span>
                    <span className="text-emerald-700 font-semibold text-[11px]">
                      Live Capstone
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ─── 7. Career Pathways & Transparent Salary Expectations ─── */}
      {course.careerRoles && course.careerRoles.length > 0 && (
        <section className="bg-[#FAF9F6] py-14 sm:py-18 border-b border-slate-200/80">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-2xl mb-10">
              <span className="text-xs font-bold text-slate-500 uppercase tracking-wider block mb-1">
                Employment Outcomes
              </span>
              <h2 className="text-2xl sm:text-3xl font-black text-[#001752] tracking-tight">
                Target Roles &amp; Industry Placement
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 mt-2 leading-relaxed">
                Graduates are prepared to apply for technical roles across Mumbai, Thane, and remote tech companies.
              </p>
            </div>

            {/* Roles Chips */}
            <div className="flex flex-wrap gap-2.5 mb-8">
              {course.careerRoles.map((role, idx) => (
                <span
                  key={idx}
                  className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-white border border-slate-200 text-xs font-bold text-[#001752] shadow-2xs"
                >
                  <Briefcase size={12} className="text-[#001752]" />
                  <span>{role}</span>
                </span>
              ))}
            </div>

            {/* 3 Salary Progression Tiers */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="bg-white rounded-2xl p-5 border border-slate-200 shadow-2xs">
                <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider block mb-1">
                  Fresher / Entry Role
                </span>
                <strong className="text-xl font-black text-[#001752] block">
                  ₹4.0 LPA – ₹6.0 LPA
                </strong>
                <span className="text-xs text-slate-500 mt-2 block">
                  Based on hands-on capstone portfolio &amp; coding test
                </span>
              </div>

              <div className="bg-white rounded-2xl p-5 border-2 border-[#001752] shadow-xs relative">
                <span className="text-[11px] font-bold text-[#001752] uppercase tracking-wider block mb-1">
                  Mid-Level (2–4 Years)
                </span>
                <strong className="text-xl font-black text-[#001752] block">
                  ₹7.5 LPA – ₹12.0 LPA
                </strong>
                <span className="text-xs text-slate-500 mt-2 block">
                  Full stack proficiency or specialized frameworks
                </span>
              </div>

              <div className="bg-white rounded-2xl p-5 border border-slate-200 shadow-2xs">
                <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider block mb-1">
                  Senior Specialist
                </span>
                <strong className="text-xl font-black text-[#001752] block">
                  ₹14.0 LPA – ₹22.0+ LPA
                </strong>
                <span className="text-xs text-slate-500 mt-2 block">
                  System architecture, team leadership &amp; DevOps
                </span>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* ─── 8. Why RACE Over Distant Mumbai Commute ─── */}
      <section className="bg-white py-14 sm:py-18 border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-10">
            <span className="text-xs font-bold text-slate-500 uppercase tracking-wider block mb-1">
              Station Proximity Edge
            </span>
            <h2 className="text-2xl sm:text-3xl font-black text-[#001752] tracking-tight">
              Why Learn at Raut Arcade Opposite the Station?
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 mt-2 leading-relaxed">
              Suburban learners waste 3+ hours daily traveling to Andheri or Dadar. Here is why studying next to the station subway gives you an edge:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-[#FAF9F6] p-6 rounded-3xl border border-slate-200/90 shadow-2xs">
              <div className="w-10 h-10 rounded-xl bg-white border border-slate-200 text-[#001752] flex items-center justify-center font-bold text-sm mb-4 shadow-2xs">
                01
              </div>
              <h3 className="text-base font-bold text-[#001752] mb-2">
                Zero Train Commute Fatigue
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed font-sans">
                Walk 2 minutes from the Platform 1/2 subway exit. Invest your saved 3 hours into practical coding assignments and extra lab practice.
              </p>
            </div>

            <div className="bg-[#FAF9F6] p-6 rounded-3xl border border-slate-200/90 shadow-2xs">
              <div className="w-10 h-10 rounded-xl bg-white border border-slate-200 text-[#001752] flex items-center justify-center font-bold text-sm mb-4 shadow-2xs">
                02
              </div>
              <h3 className="text-base font-bold text-[#001752] mb-2">
                Guaranteed 1:1 Workstation
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed font-sans">
                Every student has their dedicated personal desktop computer. Zero machine sharing. Practice at your own pace without feeling rushed.
              </p>
            </div>

            <div className="bg-[#FAF9F6] p-6 rounded-3xl border border-slate-200/90 shadow-2xs">
              <div className="w-10 h-10 rounded-xl bg-white border border-slate-200 text-[#001752] flex items-center justify-center font-bold text-sm mb-4 shadow-2xs">
                03
              </div>
              <h3 className="text-base font-bold text-[#001752] mb-2">
                Special Ladies &amp; Flexible Batches
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed font-sans">
                Dedicated 1:00 PM – 3:00 PM slot for homemakers and women, plus early morning and evening batches for working professionals.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ─── 9. Clean, Focused Course FAQs ─── */}
      <section className="bg-[#FAF9F6] py-14 sm:py-18 border-b border-slate-200/80">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <span className="text-xs font-bold text-slate-500 uppercase tracking-wider block mb-1">
              Course Questions
            </span>
            <h2 className="text-2xl sm:text-3xl font-black text-[#001752] tracking-tight">
              Frequently Asked Questions
            </h2>
          </div>

          <div className="space-y-3">
            {courseFaqs.map((faq, idx) => {
              const isOpen = openFaq === idx;
              return (
                <div
                  key={idx}
                  className="bg-white rounded-2xl border border-slate-200/90 overflow-hidden shadow-2xs transition-all"
                >
                  <button
                    type="button"
                    onClick={() => setOpenFaq(isOpen ? null : idx)}
                    className="w-full p-4 sm:p-5 text-left flex items-center justify-between gap-4 cursor-pointer hover:bg-slate-50/70"
                  >
                    <span className="text-xs sm:text-sm font-bold text-[#001752] pr-2">
                      {faq.q}
                    </span>
                    <span className="w-6 h-6 rounded-full bg-slate-100 flex items-center justify-center shrink-0 text-slate-600">
                      {isOpen ? <ChevronUp size={14} /> : <ChevronDown size={14} />}
                    </span>
                  </button>

                  {isOpen && (
                    <div className="px-4 sm:px-5 pb-5 pt-1 text-xs sm:text-sm text-slate-600 leading-relaxed font-sans border-t border-slate-100">
                      {faq.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ─── 10. Bottom Action Banner ─── */}
      <section className="bg-white py-14 sm:py-18">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-block px-3 py-1 rounded-full bg-slate-100 text-[#001752] text-xs font-bold uppercase tracking-wider mb-3">
            Admissions Open
          </span>
          <h2 className="text-2xl sm:text-3xl font-black text-[#001752] tracking-tight mb-3">
            Ready to Begin Practical Computer Training?
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 max-w-xl mx-auto leading-relaxed mb-6">
            Visit our lab at Raut Arcade 202 opposite Virar East railway station subway, or message us on WhatsApp for fee details with 50% concession.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-3">
            <button
              type="button"
              onClick={() => openModal('demo')}
              className="inline-flex items-center gap-2 h-11 px-6 rounded-xl bg-[#001752] hover:bg-[#002277] text-white font-bold text-xs sm:text-sm shadow-md transition-all active:scale-95 cursor-pointer"
            >
              <Sparkles size={14} className="text-[#A2D016]" />
              <span>Book Free 1:1 Lab Demo</span>
            </button>

            <a
              href={`${SITE_CONFIG.contact.whatsapp}?text=${encodeURIComponent(course.whatsappMessage)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 h-11 px-5 rounded-xl bg-[#25D366] hover:bg-[#20BA5A] text-white font-bold text-xs sm:text-sm shadow-2xs transition-all active:scale-95"
            >
              <MessageSquare size={14} />
              <span>Enquire on WhatsApp</span>
            </a>

            <a
              href={`tel:${SITE_CONFIG.contact.phone}`}
              className="inline-flex items-center gap-2 h-11 px-5 rounded-xl bg-white border border-slate-300 hover:bg-slate-50 text-slate-800 font-bold text-xs sm:text-sm shadow-2xs transition-all"
            >
              <Phone size={14} className="text-[#001752]" />
              <span>Call {SITE_CONFIG.contact.phone}</span>
            </a>
          </div>
        </div>
      </section>

      {/* ─── 11. Related Practical Courses ─── */}
      {relatedCourses.length > 0 && (
        <section className="bg-[#FAF9F6] py-14 sm:py-18 border-t border-slate-200/80">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8">
              <div>
                <span className="text-xs font-bold text-slate-500 uppercase tracking-wider block mb-1">
                  Related Curriculums
                </span>
                <h2 className="text-2xl font-black text-[#001752] tracking-tight">
                  Explore Other Career Tracks
                </h2>
              </div>
              <Link
                to="/courses"
                className="inline-flex items-center gap-1.5 text-xs font-bold text-[#001752] hover:text-[#C41E1E] transition-colors"
              >
                <span>View all 23 courses</span>
                <ArrowRight size={13} />
              </Link>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {relatedCourses.map((rel) => (
                <Link
                  key={rel.id}
                  to={`/courses/${rel.id}`}
                  className="group bg-white p-5 rounded-2xl border border-slate-200 shadow-2xs hover:shadow-md transition-all flex flex-col justify-between"
                >
                  <div>
                    <span className="text-[10px] font-bold text-[#A2D016] uppercase tracking-wider block mb-1.5">
                      {rel.type === 'career' ? 'Career Diploma' : 'Certificate'}
                    </span>
                    <h3 className="text-base font-bold text-[#001752] group-hover:text-[#C41E1E] transition-colors mb-2 leading-snug">
                      {rel.name}
                    </h3>
                    <p className="text-xs text-slate-600 line-clamp-2 leading-relaxed">
                      {rel.shortDesc}
                    </p>
                  </div>
                  <div className="pt-4 mt-4 border-t border-slate-100 flex items-center justify-between text-xs font-semibold text-[#001752]">
                    <span>{rel.durationPlaceholder.split('(')[0].trim()}</span>
                    <span className="flex items-center gap-1 group-hover:translate-x-0.5 transition-transform text-[#001752] font-bold">
                      <span>View Course</span>
                      <ArrowRight size={12} />
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ─── 12. Sticky Corner Action Button for Form ─── */}
      <button
        type="button"
        onClick={() => openModal('demo')}
        className="fixed bottom-22 right-4 sm:right-6 z-40 flex items-center gap-2.5 bg-[#001752] hover:bg-[#002277] text-white px-4 py-3 rounded-full shadow-2xl border-2 border-white text-xs sm:text-sm font-bold transition-all hover:scale-105 active:scale-95 cursor-pointer group"
        aria-label="Open Course Enquiry & Demo Form"
      >
        <span className="relative flex h-2.5 w-2.5">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#A2D016] opacity-75" />
          <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#A2D016]" />
        </span>
        <Sparkles size={16} className="text-[#A2D016] group-hover:rotate-12 transition-transform" />
        <span>Enquire / Book Demo</span>
      </button>

      {/* ─── 13. Clean Interactive Modal (Download Syllabus / Book Demo) ─── */}
      {isModalOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/60 backdrop-blur-xs animate-in fade-in duration-200"
          role="dialog"
          aria-modal="true"
        >
          <div className="relative w-full max-w-md bg-white rounded-3xl p-6 sm:p-7 shadow-2xl border border-slate-200 text-[#001752]">
            
            {/* Close Button */}
            <button
              type="button"
              onClick={() => setIsModalOpen(false)}
              className="absolute top-4 right-4 w-8 h-8 rounded-full bg-slate-100 hover:bg-slate-200 flex items-center justify-center text-slate-500 cursor-pointer"
              aria-label="Close"
            >
              <X size={16} />
            </button>

            {/* Mode Switcher Tabs */}
            <div className="flex items-center gap-1.5 p-1 bg-slate-100 rounded-xl mb-4 pr-10">
              <button
                type="button"
                onClick={() => setModalMode('demo')}
                className={`flex-1 py-1.5 px-3 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                  modalMode === 'demo'
                    ? 'bg-white text-[#001752] shadow-xs'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                Book Free Demo
              </button>
              <button
                type="button"
                onClick={() => setModalMode('syllabus')}
                className={`flex-1 py-1.5 px-3 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                  modalMode === 'syllabus'
                    ? 'bg-white text-[#001752] shadow-xs'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                Syllabus &amp; Fees
              </button>
            </div>

            <div className="mb-5">
              <span className="text-[10.5px] font-bold text-[#001752] uppercase tracking-wider block mb-1">
                {modalMode === 'syllabus' ? 'Official Syllabus PDF' : 'Free 1:1 Lab Session'}
              </span>
              <h3 className="text-xl font-black text-[#001752] leading-tight">
                {modalMode === 'syllabus' ? 'Download Course Syllabus' : 'Book a 1:1 Workstation Demo'}
              </h3>
              <p className="text-xs text-slate-500 mt-1 font-sans">
                {modalMode === 'syllabus'
                  ? `Get the module-by-module breakdown and 50% concession details for ${course.name}.`
                  : `Sit at a desktop computer at Raut Arcade 202 and test-drive ${course.name}.`}
              </p>
            </div>

            <form onSubmit={handleModalSubmit} className="space-y-3.5">
              <div>
                <label className="block text-xs font-bold text-[#001752] mb-1">
                  Your Full Name <span className="text-rose-500">*</span>
                </label>
                <input
                  type="text"
                  required
                  value={candidateName}
                  onChange={(e) => setCandidateName(e.target.value)}
                  placeholder="e.g. Rahul Patil / Priya Sharma"
                  className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs sm:text-sm focus:outline-hidden focus:ring-2 focus:ring-[#001752]"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-[#001752] mb-1">
                  10-Digit Mobile Number <span className="text-rose-500">*</span>
                </label>
                <div className="relative">
                  <span className="absolute left-3 top-1/2 -translate-y-1/2 text-xs font-mono font-bold text-slate-400">
                    +91
                  </span>
                  <input
                    type="tel"
                    required
                    maxLength={10}
                    value={candidatePhone}
                    onChange={(e) => setCandidatePhone(e.target.value)}
                    placeholder="9794323963"
                    className="w-full pl-11 pr-3.5 py-2.5 rounded-xl border border-slate-200 text-xs sm:text-sm font-mono focus:outline-hidden focus:ring-2 focus:ring-[#001752]"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-[#001752] mb-1">
                  Preferred Batch Timing
                </label>
                <select
                  value={candidateBatch}
                  onChange={(e) => setCandidateBatch(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs sm:text-sm focus:outline-hidden focus:ring-2 focus:ring-[#001752] cursor-pointer"
                >
                  <option value="Morning Batch (8 AM – 11 AM)">Morning Batch (8:00 AM – 11:00 AM)</option>
                  <option value="Special Ladies Batch (1 PM – 3 PM)">Special Ladies Batch (1:00 PM – 3:00 PM)</option>
                  <option value="Evening Batch (5 PM – 8:30 PM)">Evening Batch (5:00 PM – 8:30 PM)</option>
                  <option value="Weekend Fast-Track">Weekend Fast-Track Slot</option>
                </select>
              </div>

              <button
                type="submit"
                className="w-full py-3 px-4 rounded-xl bg-[#001752] hover:bg-[#002277] text-white font-bold text-xs sm:text-sm shadow-md transition-all active:scale-95 flex items-center justify-center gap-2 cursor-pointer mt-2"
              >
                <Send size={14} />
                <span>Submit &amp; Open on WhatsApp</span>
              </button>

              <p className="text-[10px] text-center text-slate-400">
                🔒 We respect your privacy. No spam. Direct counselor guidance only.
              </p>
            </form>

          </div>
        </div>
      )}
    </>
  );
}