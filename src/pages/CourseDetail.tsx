import React, { useState, useMemo, useEffect } from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { 
  ArrowLeft, 
  ArrowRight, 
  Clock, 
  Award, 
  Phone, 
  MapPin, 
  Sparkles, 
  Monitor, 
  Briefcase, 
  ChevronDown, 
  ChevronUp, 
  CheckCircle2,
  Send
} from 'lucide-react';
import SEO from '../components/SEO';
import CourseJourneyCurriculum from '../components/CourseJourneyCurriculum';
import { ToolLogo, getCuratedToolsForCourse } from '../components/ToolIcons';
import { COURSES, SITE_CONFIG } from '../data/config';

const COURSE_IMAGES: Record<string, string> = {
  'data-science-and-ai': '/images/real-data-chart-session.jpg',
  'full-stack-developer-course': '/images/student-coding.jpg',
  'english-speaking': '/images/real-students-presentation.jpg',
  'advanced-tally-with-gst': '/images/tally-practice.jpg',
  'devops-with-aws-course': '/images/real-instructor-mentoring.jpg',
  'digital-marketing-course': '/images/course-graphic-design.jpg',
  'cyber-security-ethical-hacking-with-ai-course': '/images/real-lab-classroom.jpg',
  'software-testing-course': '/images/real-lab-aisle.jpg',
  'investment-banking-course': '/images/real-teacher-lecture.jpg',
  'graphic-designing': '/images/course-graphic-design.jpg',
  'dfa': '/images/tally-practice.jpg',
  'basic-computer': '/images/ladies-guidance.jpg',
  'ms-office': '/images/course-excel-office.jpg',
  'typing-english-marathi': '/images/lab-students.jpg',
  'gst': '/images/real-data-chart-session.jpg',
  'ccc': '/images/course-excel-office.jpg',
  'illustrator': '/images/course-graphic-design.jpg',
  'photoshop': '/images/course-graphic-design.jpg',
  'html': '/images/student-coding.jpg',
  'css': '/images/student-coding.jpg',
  'hardware': '/images/real-lab-aisle.jpg',
  'a-plus-and-n-plus': '/images/real-lab-wide.jpg',
  'animation': '/images/course-graphic-design.jpg',
  'ai-prompt-engineering': '/images/course-ai-ml.jpg',
};

function getCourseImage(id: string): string {
  return COURSE_IMAGES[id] || '/images/real-lab-classroom.jpg';
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
  const courseImage = getCourseImage(course.id);
  const tools = getCuratedToolsForCourse(course.id, course.name, course.tools);

  // Related courses (prioritize same category)
  const relatedCourses = useMemo(() => {
    return COURSES.filter(
      (c) => c.id !== course.id && (c.type === course.type || c.goals.some((g) => course.goals.includes(g)))
    ).slice(0, 3);
  }, [course]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [courseId]);

  // Inline Form State
  const [candidateName, setCandidateName] = useState('');
  const [candidatePhone, setCandidatePhone] = useState('');
  const [candidateBatch, setCandidateBatch] = useState('Morning Batch (8:00 AM – 11:00 AM)');
  const [candidateGoal, setCandidateGoal] = useState<'demo' | 'fees' | 'call'>('demo');
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!candidateName.trim() || candidatePhone.replace(/\D/g, '').length !== 10) {
      alert('Please enter your full name and a valid 10-digit mobile number.');
      return;
    }

    const goalText =
      candidateGoal === 'demo'
        ? 'Book Free 1:1 Lab Demo'
        : candidateGoal === 'fees'
        ? 'Get Complete Syllabus & 50% Concession Fee Details'
        : 'Request Counseling Call';

    const text = `Hello RACE! I would like to ${goalText} for ${course.name}.
Name: ${candidateName.trim()}
Mobile: ${candidatePhone.trim()}
Preferred Slot: ${candidateBatch}
Institute Location: Opposite Virar East Railway Station Subway.`;

    const whatsappUrl = `${SITE_CONFIG.contact.whatsapp}?text=${encodeURIComponent(text)}`;
    window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
    setFormSubmitted(true);
  };

  // FAQ Accordion State
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const courseFaqs = [
    {
      q: `Do I need prior technical background to join ${course.name}?`,
      a: 'No prior technical background is necessary. All courses start from foundational basics, and instructors provide 1:1 personalized desk guidance right at your computer terminal.'
    },
    {
      q: 'Is an individual computer guaranteed during every class?',
      a: 'Yes, absolutely. RACE strictly upholds a 1 Student : 1 PC ratio. You will never share a computer screen or keyboard with anyone.'
    },
    {
      q: 'What batch timings are available?',
      a: 'We offer flexible Morning batches (8 AM–11 AM), Afternoon slots (12 PM–3 PM), Special Ladies Batch (12:30 PM–3 PM), and Evening batches (5 PM–8:30 PM). Weekend options are also available.'
    },
    {
      q: 'Where is the institute located and how close is the station?',
      a: 'We are located at 202, 2nd Floor, Raut Arcade, directly opposite the Virar East railway station subway exit (less than a 2-minute walk from Platform 1/2 exit stairs).'
    },
    {
      q: 'What certificate will I receive upon course completion?',
      a: `Upon successful completion, you will receive an authorized ${course.certificate} along with ISO 9001:2015 accredited course completion credentials recognized by recruiters.`
    },
    {
      q: 'How does the 50% fee concession work?',
      a: 'Enrolled students receive an upfront 50% local community concession on career diplomas, plus the complete foundational Basic Computer module included at zero extra charge.'
    }
  ];

  return (
    <>
      <SEO
        title={`${course.name} Course in Virar East | RACE`}
        description={`Practical ${course.name} training at RACE, opposite Virar East station subway. 100% lab time, 1 Student : 1 PC guarantee, ISO 9001:2015 certificate, and 50% concession.`}
        canonical={`/courses/${course.id}`}
      />

      <div className="w-full text-[#0B0B0B] font-body selection:bg-[#C41E1E] selection:text-white">

        {/* ══════════════════════════════════════════════════════════════════════
            BREADCRUMB BAR (Minimal)
            ══════════════════════════════════════════════════════════════════════ */}
        <div className="bg-white border-b border-slate-200/80 py-3">
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
              <span className="text-[#001752] font-semibold">Opp. Virar East Railway Station Subway</span>
            </div>
          </div>
        </div>


        {/* ══════════════════════════════════════════════════════════════════════
            SECTION 01 – HERO WITH INLINE ENROLLMENT & DEMO FORM (White Canvas)
            ══════════════════════════════════════════════════════════════════════ */}
        <section aria-label="Course Overview" className="bg-white pt-8 sm:pt-12 pb-14 sm:pb-18 border-b border-slate-200/70">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
              
              {/* Left Column: Course Details, Badges & Hero Image (7 cols) */}
              <div className="lg:col-span-7 space-y-5">
                
                {/* Red Eyebrow */}
                <div>
                  <span className="text-[#C41E1E] text-xs font-bold tracking-wider uppercase">
                    {isCareer ? "CAREER DIPLOMA PROGRAM" : "PRACTICAL CERTIFICATION"} · 100% HANDS-ON
                  </span>
                </div>

                {/* Main Course Title */}
                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#001752] font-heading leading-tight tracking-tight">
                  {course.name}
                </h1>

                {/* Description */}
                <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-normal">
                  {course.shortDesc}
                </p>

                {/* Quick Logistics Badges */}
                <div className="flex flex-wrap items-center gap-3 pt-1 text-xs text-slate-700 font-semibold">
                  <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-slate-50 border border-slate-200">
                    <Clock size={14} className="text-[#001752]" />
                    <span>{course.durationPlaceholder.split('(')[0].trim()}</span>
                  </div>

                  <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-800">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#10b981] animate-pulse" />
                    <Monitor size={14} className="text-emerald-700" />
                    <span>1 Student : 1 PC Guaranteed</span>
                  </div>

                  <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-slate-50 border border-slate-200">
                    <Award size={14} className="text-[#C41E1E]" />
                    <span>ISO 9001:2015 Accredited</span>
                  </div>
                </div>

                {/* Dominant Real Image Container */}
                <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden aspect-[16/10] bg-slate-900 border border-slate-200 shadow-sm group">
                  <img
                    src={courseImage}
                    alt={`${course.name} practical training at RACE Virar East`}
                    className="w-full h-full object-cover group-hover:scale-103 transition-transform duration-500"
                    loading="eager"
                  />
                  
                  {/* Floating Pill Inside Bottom */}
                  <div className="absolute bottom-4 left-4 right-4 bg-[#001752]/90 backdrop-blur-md p-3 rounded-xl border border-white/20 text-white flex items-center justify-between text-xs">
                    <div>
                      <span className="font-bold block">100% Hands-on Practical Training</span>
                      <span className="text-[11px] text-slate-300">Raut Arcade 202 · Air-conditioned lab opposite subway</span>
                    </div>
                    <span className="bg-[#C41E1E] text-white font-bold text-[10px] px-2.5 py-1 rounded-full uppercase tracking-wider">
                      1:1 PC
                    </span>
                  </div>
                </div>

                {/* Subtitle Station Note */}
                <div className="flex items-center justify-between text-xs text-slate-500 font-medium px-1">
                  <span>Zero machine sharing during class</span>
                  <span>Opposite Virar East Station Subway Exit</span>
                </div>

              </div>

              {/* Right Column: Prominent Inline Enrollment & Demo Form (5 cols) */}
              <div className="lg:col-span-5 w-full">
                <div className="bg-[#F6F7F9] rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-sm space-y-5 sticky top-24">
                  
                  {/* Form Header */}
                  <div className="border-b border-slate-200/80 pb-4">
                    <div className="flex items-center justify-between mb-1.5">
                      <span className="text-[10px] font-bold text-[#C41E1E] uppercase tracking-wider">
                        LIMITED SEATS · ADMISSION OPEN
                      </span>
                      <span className="inline-flex items-center gap-1 text-[10px] font-bold text-emerald-700 bg-emerald-50 border border-emerald-200 px-2 py-0.5 rounded-full">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#10b981] animate-pulse" />
                        <span>Few Seats Left</span>
                      </span>
                    </div>
                    <h2 className="text-xl sm:text-2xl font-bold font-heading text-[#001752]">
                      Enquire &amp; Book Free Demo
                    </h2>
                    <p className="text-xs text-slate-600 font-normal mt-1 leading-relaxed">
                      Experience a 30-minute practical session on your own computer workstation before enrolling.
                    </p>
                  </div>

                  {/* Form */}
                  {!formSubmitted ? (
                    <form onSubmit={handleFormSubmit} className="space-y-4">
                      
                      {/* Full Name */}
                      <div>
                        <label className="block text-xs font-bold text-[#001752] mb-1.5">
                          Your Full Name <span className="text-[#C41E1E]">*</span>
                        </label>
                        <input
                          type="text"
                          required
                          value={candidateName}
                          onChange={(e) => setCandidateName(e.target.value)}
                          placeholder="e.g. Rahul Patil / Priya Sharma"
                          className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 bg-white text-xs sm:text-sm text-slate-900 focus:outline-hidden focus:border-[#001752] focus:ring-2 focus:ring-[#001752]/10"
                        />
                      </div>

                      {/* Mobile Number */}
                      <div>
                        <label className="block text-xs font-bold text-[#001752] mb-1.5">
                          10-Digit Mobile Number <span className="text-[#C41E1E]">*</span>
                        </label>
                        <div className="relative">
                          <span className="absolute left-3.5 top-1/2 -translate-y-1/2 text-xs font-mono font-bold text-slate-400">
                            +91
                          </span>
                          <input
                            type="tel"
                            required
                            maxLength={10}
                            value={candidatePhone}
                            onChange={(e) => setCandidatePhone(e.target.value)}
                            placeholder="9794323963"
                            className="w-full pl-12 pr-3.5 py-2.5 rounded-xl border border-slate-300 bg-white text-xs sm:text-sm font-mono text-slate-900 focus:outline-hidden focus:border-[#001752] focus:ring-2 focus:ring-[#001752]/10"
                          />
                        </div>
                      </div>

                      {/* Preferred Batch Timing */}
                      <div>
                        <label className="block text-xs font-bold text-[#001752] mb-1.5">
                          Preferred Batch Timing
                        </label>
                        <select
                          value={candidateBatch}
                          onChange={(e) => setCandidateBatch(e.target.value)}
                          className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 bg-white text-xs sm:text-sm text-slate-900 focus:outline-hidden focus:border-[#001752] focus:ring-2 focus:ring-[#001752]/10 cursor-pointer"
                        >
                          <option value="Morning Batch (8:00 AM – 11:00 AM)">Morning Batch (8:00 AM – 11:00 AM)</option>
                          <option value="Special Ladies Batch (12:30 PM – 3:00 PM)">Special Ladies Batch (12:30 PM – 3:00 PM)</option>
                          <option value="Evening Batch (5:00 PM – 8:00 PM)">Evening Batch (5:00 PM – 8:00 PM)</option>
                          <option value="Weekend Fast-Track Slot">Weekend Fast-Track Slot</option>
                        </select>
                      </div>

                      {/* What would you like? */}
                      <div>
                        <span className="block text-xs font-bold text-[#001752] mb-2">
                          I would like to:
                        </span>
                        <div className="grid grid-cols-2 gap-2 text-xs">
                          <button
                            type="button"
                            onClick={() => setCandidateGoal('demo')}
                            className={`p-2.5 rounded-xl border text-center font-bold transition-all cursor-pointer ${
                              candidateGoal === 'demo'
                                ? 'bg-[#001752] text-white border-[#001752]'
                                : 'bg-white text-slate-700 border-slate-200 hover:bg-slate-50'
                            }`}
                          >
                            Book Free 1:1 Demo
                          </button>
                          <button
                            type="button"
                            onClick={() => setCandidateGoal('fees')}
                            className={`p-2.5 rounded-xl border text-center font-bold transition-all cursor-pointer ${
                              candidateGoal === 'fees'
                                ? 'bg-[#001752] text-white border-[#001752]'
                                : 'bg-white text-slate-700 border-slate-200 hover:bg-slate-50'
                            }`}
                          >
                            Get Syllabus &amp; Fees
                          </button>
                        </div>
                      </div>

                      {/* Submit Button */}
                      <button
                        type="submit"
                        className="w-full py-3 px-5 rounded-full bg-[#C41E1E] hover:bg-[#931616] text-white font-bold text-xs sm:text-sm shadow-md transition-all active:scale-95 flex items-center justify-center gap-2 cursor-pointer mt-2"
                      >
                        <Send size={14} />
                        <span>Book Demo on WhatsApp</span>
                      </button>

                      <div className="pt-2 text-center space-y-1">
                        <span className="text-[11px] text-slate-500 font-medium block">
                          Direct Admissions Helplines:
                        </span>
                        <div className="text-xs font-bold text-[#001752] space-x-2">
                          <a href="tel:8793314239" className="hover:text-[#C41E1E]">8793314239</a>
                          <span>·</span>
                          <a href="tel:8482881614" className="hover:text-[#C41E1E]">8482881614</a>
                        </div>
                      </div>

                    </form>
                  ) : (
                    <div className="bg-white rounded-2xl p-6 text-center space-y-3 border border-slate-200">
                      <div className="w-12 h-12 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center mx-auto">
                        <CheckCircle2 size={24} />
                      </div>
                      <h3 className="text-base font-bold text-[#001752]">
                        Enquiry Ready!
                      </h3>
                      <p className="text-xs text-slate-600 leading-relaxed">
                        We have opened WhatsApp to connect you directly with our admissions counselor opposite Virar East station.
                      </p>
                      <button
                        type="button"
                        onClick={() => setFormSubmitted(false)}
                        className="text-xs font-bold text-[#C41E1E] hover:underline cursor-pointer"
                      >
                        Submit another inquiry
                      </button>
                    </div>
                  )}

                </div>
              </div>

            </div>
          </div>
        </section>


        {/* ══════════════════════════════════════════════════════════════════════
            SECTION 02 – FOUR PRACTICAL STANDARDS STRIP (Pale Section)
            ══════════════════════════════════════════════════════════════════════ */}
        <section aria-label="Course Standards" className="bg-[#F6F7F9] py-8 border-b border-slate-200/70">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              
              <div className="bg-white rounded-2xl p-4 border border-[#E5E7EB] flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-[#001752] text-white flex items-center justify-center shrink-0">
                  <Monitor size={18} />
                </div>
                <div>
                  <strong className="block text-xs sm:text-sm font-bold text-[#001752]">1:1 Dedicated PC</strong>
                  <span className="text-[11px] text-slate-500">Zero machine sharing</span>
                </div>
              </div>

              <div className="bg-white rounded-2xl p-4 border border-[#E5E7EB] flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-[#001752] text-white flex items-center justify-center shrink-0">
                  <Sparkles size={18} className="text-[#C41E1E]" />
                </div>
                <div>
                  <strong className="block text-xs sm:text-sm font-bold text-[#001752]">Flat 50% Concession</strong>
                  <span className="text-[11px] text-slate-500">Local student subsidy</span>
                </div>
              </div>

              <div className="bg-white rounded-2xl p-4 border border-[#E5E7EB] flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-[#001752] text-white flex items-center justify-center shrink-0">
                  <Award size={18} />
                </div>
                <div>
                  <strong className="block text-xs sm:text-sm font-bold text-[#001752]">Free Basic Computer</strong>
                  <span className="text-[11px] text-slate-500">Foundation module included</span>
                </div>
              </div>

              <div className="bg-white rounded-2xl p-4 border border-[#E5E7EB] flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-[#001752] text-white flex items-center justify-center shrink-0">
                  <MapPin size={18} className="text-[#C41E1E]" />
                </div>
                <div>
                  <strong className="block text-xs sm:text-sm font-bold text-[#001752]">Station Subway 2-Min</strong>
                  <span className="text-[11px] text-slate-500">No commute to Mumbai</span>
                </div>
              </div>

            </div>
          </div>
        </section>


        {/* ══════════════════════════════════════════════════════════════════════
            SECTION 03 – COURSE JOURNEY & CURRICULUM (White Canvas)
            ══════════════════════════════════════════════════════════════════════ */}
        <section aria-label="Curriculum" className="bg-white py-14 sm:py-20 border-b border-slate-200/70">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <CourseJourneyCurriculum
              course={course}
              onDownloadBrochure={() => {
                const text = `Hello RACE! Please share the complete curriculum brochure and 50% concession fee breakdown for ${course.name}.`;
                window.open(`${SITE_CONFIG.contact.whatsapp}?text=${encodeURIComponent(text)}`, '_blank');
              }}
            />
          </div>
        </section>


        {/* ══════════════════════════════════════════════════════════════════════
            SECTION 04 – PRACTICAL SOFTWARE TOOLS STACK (Pale Section)
            ══════════════════════════════════════════════════════════════════════ */}
        {tools && tools.length > 0 && (
          <section aria-label="Software Stack" className="bg-[#F6F7F9] py-14 sm:py-18 border-b border-slate-200/70">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="max-w-2xl mb-10">
                <span className="text-[#C41E1E] text-xs font-bold tracking-wider uppercase block mb-1">
                  PRACTICAL SOFTWARE STACK
                </span>
                <h2 className="text-2xl sm:text-3xl font-bold font-heading text-[#001752] tracking-tight">
                  Tools &amp; Technologies You Will Master
                </h2>
                <p className="text-xs sm:text-sm text-slate-600 mt-2 leading-relaxed">
                  Every software tool is pre-installed on your dedicated lab computer terminal. You practice hands-on during every session.
                </p>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
                {tools.map((tool, idx) => (
                  <div
                    key={idx}
                    className="bg-white rounded-2xl p-5 border border-[#E5E7EB] shadow-2xs hover:border-[#001752]/40 hover:shadow-md transition-all flex flex-col items-center justify-center text-center group"
                  >
                    <div className="w-12 h-12 rounded-xl bg-slate-50 flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
                      <ToolLogo name={tool} className="w-7 h-7 object-contain" />
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


        {/* ══════════════════════════════════════════════════════════════════════
            SECTION 05 – LIVE CAPSTONE PROJECTS (White Canvas)
            ══════════════════════════════════════════════════════════════════════ */}
        {course.projects && course.projects.length > 0 && (
          <section aria-label="Projects" className="bg-white py-14 sm:py-18 border-b border-slate-200/70">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="max-w-2xl mb-10">
                <span className="text-[#C41E1E] text-xs font-bold tracking-wider uppercase block mb-1">
                  PORTFOLIO READY
                </span>
                <h2 className="text-2xl sm:text-3xl font-bold font-heading text-[#001752] tracking-tight">
                  Live Capstone Projects You Build
                </h2>
                <p className="text-xs sm:text-sm text-slate-600 mt-2 leading-relaxed">
                  Practical commercial assignments to showcase directly on your resume and interview portfolios.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {course.projects.map((proj, idx) => (
                  <div
                    key={idx}
                    className="bg-[#F6F7F9] rounded-2xl p-6 border border-slate-200/80 shadow-2xs flex flex-col justify-between hover:border-slate-300 transition-all"
                  >
                    <div>
                      <span className="text-[10px] font-mono text-slate-400 uppercase tracking-wider block mb-2 font-bold">
                        Project 0{idx + 1}
                      </span>
                      <h3 className="text-base font-bold text-[#001752] mb-2 leading-snug">
                        {proj.title}
                      </h3>
                      <p className="text-xs text-slate-600 leading-relaxed mb-4">
                        {proj.desc}
                      </p>
                    </div>

                    <div className="pt-3 border-t border-slate-200/80 flex items-center justify-between text-xs">
                      <span className="text-[11px] font-mono font-bold text-[#001752]">
                        {proj.tech}
                      </span>
                      <span className="text-[#10b981] font-bold text-[11px]">
                        Live Assignment
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}


        {/* ══════════════════════════════════════════════════════════════════════
            SECTION 06 – CAREER ROLES & SALARY TIERS (Pale Section)
            ══════════════════════════════════════════════════════════════════════ */}
        {course.careerRoles && course.careerRoles.length > 0 && (
          <section aria-label="Career Outcomes" className="bg-[#F6F7F9] py-14 sm:py-18 border-b border-slate-200/70">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="max-w-2xl mb-10">
                <span className="text-[#C41E1E] text-xs font-bold tracking-wider uppercase block mb-1">
                  EMPLOYMENT OUTCOMES
                </span>
                <h2 className="text-2xl sm:text-3xl font-bold font-heading text-[#001752] tracking-tight">
                  Target Roles &amp; Industry Placement
                </h2>
                <p className="text-xs sm:text-sm text-slate-600 mt-2 leading-relaxed">
                  Graduates are prepared to apply for technical and accounting roles across Mumbai, Thane, and remote firms.
                </p>
              </div>

              {/* Roles Chips */}
              <div className="flex flex-wrap gap-2.5 mb-8">
                {course.careerRoles.map((role, idx) => (
                  <span
                    key={idx}
                    className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-white border border-[#E5E7EB] text-xs font-bold text-[#001752] shadow-2xs"
                  >
                    <Briefcase size={12} className="text-[#C41E1E]" />
                    <span>{role}</span>
                  </span>
                ))}
              </div>

              {/* 3 Salary Progression Tiers */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                <div className="bg-white rounded-2xl p-6 border border-[#E5E7EB] shadow-2xs">
                  <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider block mb-1">
                    Fresher / Entry Role
                  </span>
                  <strong className="text-2xl font-bold text-[#001752] font-heading block">
                    ₹3.5 LPA – ₹5.5 LPA
                  </strong>
                  <span className="text-xs text-slate-500 mt-2 block">
                    Based on practical capstone portfolio &amp; technical assessment
                  </span>
                </div>

                <div className="bg-white rounded-2xl p-6 border-2 border-[#001752] shadow-xs relative">
                  <span className="text-[11px] font-bold text-[#C41E1E] uppercase tracking-wider block mb-1">
                    Mid-Level (2–4 Years)
                  </span>
                  <strong className="text-2xl font-bold text-[#001752] font-heading block">
                    ₹6.5 LPA – ₹10.0 LPA
                  </strong>
                  <span className="text-xs text-slate-500 mt-2 block">
                    Specialized framework execution &amp; independent client deliverables
                  </span>
                </div>

                <div className="bg-white rounded-2xl p-6 border border-[#E5E7EB] shadow-2xs">
                  <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider block mb-1">
                    Senior Specialist
                  </span>
                  <strong className="text-2xl font-bold text-[#001752] font-heading block">
                    ₹12.0 LPA – ₹18.0+ LPA
                  </strong>
                  <span className="text-xs text-slate-500 mt-2 block">
                    Project architecture, corporate finance, or team mentorship
                  </span>
                </div>
              </div>
            </div>
          </section>
        )}


        {/* ══════════════════════════════════════════════════════════════════════
            SECTION 07 – WHY RACE VIRAR EAST (White Canvas)
            ══════════════════════════════════════════════════════════════════════ */}
        <section aria-label="Station Advantage" className="bg-white py-14 sm:py-18 border-b border-slate-200/70">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mb-10">
              <span className="text-[#C41E1E] text-xs font-bold tracking-wider uppercase block mb-1">
                STATION PROXIMITY EDGE
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold font-heading text-[#001752] tracking-tight">
                Why Learn at Raut Arcade Opposite the Station?
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 mt-2 leading-relaxed">
                Suburban learners waste 3 to 4 hours daily commuting to Andheri or Dadar. Here is why studying next to the Virar East station subway gives you an edge:
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-[#F6F7F9] p-6 rounded-2xl border border-slate-200 shadow-2xs">
                <div className="w-10 h-10 rounded-xl bg-[#001752] text-white flex items-center justify-center font-bold text-sm mb-4">
                  01
                </div>
                <h3 className="text-base font-bold text-[#001752] mb-2">
                  Zero Train Commute Fatigue
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Walk 2 minutes from Platform 1/2 subway exit. Invest your saved 3 hours into practical coding assignments and extra lab practice.
                </p>
              </div>

              <div className="bg-[#F6F7F9] p-6 rounded-2xl border border-slate-200 shadow-2xs">
                <div className="w-10 h-10 rounded-xl bg-[#001752] text-white flex items-center justify-center font-bold text-sm mb-4">
                  02
                </div>
                <h3 className="text-base font-bold text-[#001752] mb-2">
                  Guaranteed 1:1 Workstation
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Every student has their own dedicated desktop computer. Zero machine sharing. Practice at your own pace without feeling rushed.
                </p>
              </div>

              <div className="bg-[#F6F7F9] p-6 rounded-2xl border border-slate-200 shadow-2xs">
                <div className="w-10 h-10 rounded-xl bg-[#001752] text-white flex items-center justify-center font-bold text-sm mb-4">
                  03
                </div>
                <h3 className="text-base font-bold text-[#001752] mb-2">
                  Flexible Daily Slots
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Dedicated 12:30 PM – 3:00 PM slot for homemakers and women, plus early morning and evening batches for working clerks and students.
                </p>
              </div>
            </div>
          </div>
        </section>


        {/* ══════════════════════════════════════════════════════════════════════
            SECTION 08 – FREQUENTLY ASKED QUESTIONS (Pale Section)
            ══════════════════════════════════════════════════════════════════════ */}
        <section aria-label="FAQs" className="bg-[#F6F7F9] py-14 sm:py-18 border-b border-slate-200/70">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-10">
              <span className="text-[#C41E1E] text-xs font-bold tracking-wider uppercase block mb-1">
                COURSE QUESTIONS
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold font-heading text-[#001752] tracking-tight">
                Frequently Asked Questions
              </h2>
            </div>

            <div className="space-y-3">
              {courseFaqs.map((faq, idx) => {
                const isOpen = openFaq === idx;
                return (
                  <div
                    key={idx}
                    className="bg-white rounded-2xl border border-[#E5E7EB] overflow-hidden shadow-2xs transition-all"
                  >
                    <button
                      type="button"
                      onClick={() => setOpenFaq(isOpen ? null : idx)}
                      className="w-full p-5 text-left flex items-center justify-between gap-4 cursor-pointer hover:bg-slate-50/70"
                    >
                      <span className="text-xs sm:text-sm font-bold text-[#001752] pr-2">
                        {faq.q}
                      </span>
                      <span className="w-6 h-6 rounded-full bg-slate-100 flex items-center justify-center shrink-0 text-slate-600">
                        {isOpen ? <ChevronUp size={14} /> : <ChevronDown size={14} />}
                      </span>
                    </button>

                    {isOpen && (
                      <div className="px-5 pb-5 pt-1 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-100">
                        {faq.a}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </section>


        {/* ══════════════════════════════════════════════════════════════════════
            SECTION 09 – RELATED COURSES (White Canvas)
            ══════════════════════════════════════════════════════════════════════ */}
        {relatedCourses.length > 0 && (
          <section aria-label="Related Courses" className="bg-white py-14 sm:py-18 border-b border-slate-200/70">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8">
                <div>
                  <span className="text-[#C41E1E] text-xs font-bold tracking-wider uppercase block mb-1">
                    RELATED CURRICULUMS
                  </span>
                  <h2 className="text-2xl font-bold font-heading text-[#001752] tracking-tight">
                    Explore Other Practical Tracks
                  </h2>
                </div>
                <Link
                  to="/courses"
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-[#001752] hover:text-[#C41E1E] transition-colors"
                >
                  <span>View all 24 courses</span>
                  <ArrowRight size={13} />
                </Link>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {relatedCourses.map((rel) => (
                  <Link
                    key={rel.id}
                    to={`/courses/${rel.id}`}
                    className="group bg-white p-5 rounded-2xl border border-[#E5E7EB] hover:border-[#001752]/40 hover:shadow-md transition-all flex flex-col justify-between"
                  >
                    <div>
                      <span className="text-[10px] font-bold text-[#C41E1E] uppercase tracking-wider block mb-1.5">
                        {rel.type === 'career' ? 'Career Diploma' : 'Certificate'}
                      </span>
                      <h3 className="text-base font-bold text-[#001752] group-hover:text-[#C41E1E] transition-colors mb-2 leading-snug">
                        {rel.name}
                      </h3>
                      <p className="text-xs text-slate-600 line-clamp-2 leading-relaxed font-normal">
                        {rel.shortDesc}
                      </p>
                    </div>
                    <div className="pt-4 mt-4 border-t border-slate-100 flex items-center justify-between text-xs font-semibold text-[#001752]">
                      <span>{rel.durationPlaceholder.split('(')[0].trim()}</span>
                      <span className="flex items-center gap-1 group-hover:translate-x-0.5 transition-transform text-[#001752] font-bold">
                        <span>View Details</span>
                        <ArrowRight size={12} />
                      </span>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </section>
        )}


        {/* ══════════════════════════════════════════════════════════════════════
            SECTION 10 – FEATURED WALK-IN CTA (Contained Navy Banner on White)
            ══════════════════════════════════════════════════════════════════════ */}
        <section aria-label="Visit RACE" className="bg-white py-12 sm:py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-[#001752] text-white rounded-3xl p-6 sm:p-10 lg:p-14 shadow-2xl border border-[#00113E] relative overflow-hidden">
              {/* Subtle Red/Navy Brand Gradient Accents */}
              <div className="absolute -right-20 -top-20 w-80 h-80 rounded-full bg-[#C41E1E]/20 blur-[100px] pointer-events-none" />
              <div className="absolute -left-20 -bottom-20 w-80 h-80 rounded-full bg-[#263A6C]/40 blur-[100px] pointer-events-none" />

              <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
                
                {/* Left Column: Heading, Subtitle & Buttons */}
                <div className="lg:col-span-7 space-y-4">
                  <span className="text-[#DF8383] text-xs font-bold tracking-wider uppercase block">
                    WALK IN &amp; EXPERIENCE RACE
                  </span>

                  <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-bold text-white font-heading leading-tight tracking-tight">
                    Visit our lab in person opposite Virar East station.
                  </h2>

                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-normal max-w-lg">
                    Walk in anytime between 9:00 AM and 7:00 PM, Monday to Saturday. Take a seat, experience a free practical demo, and inspect our computers yourself.
                  </p>

                  {/* Direct Helplines Pills */}
                  <div className="pt-2">
                    <span className="text-slate-400 text-[11px] font-semibold uppercase tracking-wider block mb-2">
                      Direct Institute Helplines:
                    </span>
                    <div className="flex flex-wrap items-center gap-2">
                      <a
                        href="tel:8793314239"
                        className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/10 hover:bg-white/20 border border-white/15 text-white text-xs font-semibold transition-colors"
                      >
                        <Phone size={12} className="text-[#DF8383]" />
                        <span>8793314239</span>
                      </a>
                      <a
                        href="tel:8482881614"
                        className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/10 hover:bg-white/20 border border-white/15 text-white text-xs font-semibold transition-colors"
                      >
                        <Phone size={12} className="text-[#DF8383]" />
                        <span>8482881614</span>
                      </a>
                      <a
                        href={SITE_CONFIG.contact.whatsapp}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-emerald-500/20 hover:bg-emerald-500/30 border border-emerald-400/30 text-emerald-300 text-xs font-semibold transition-colors"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                        <span>WhatsApp: 9794323963</span>
                      </a>
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex flex-wrap items-center gap-3 pt-3">
                    <Link
                      to="/contact#demo"
                      className="inline-flex items-center gap-1.5 bg-[#C41E1E] hover:bg-[#931616] text-white text-xs sm:text-sm font-bold px-6 py-3 rounded-full transition-all shadow-md active:scale-95 cursor-pointer"
                    >
                      <span>Book a free demo</span>
                      <ArrowRight size={14} />
                    </Link>

                    <a
                      href={SITE_CONFIG.address.googleMapsDirectLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 bg-white/10 hover:bg-white/20 text-white border border-white/20 text-xs sm:text-sm font-bold px-6 py-3 rounded-full transition-all active:scale-95 cursor-pointer"
                    >
                      <MapPin size={14} className="text-[#DF8383]" />
                      <span>Open in Google Maps</span>
                    </a>
                  </div>
                </div>

                {/* Right Column: Crisp White Card inside Navy Container */}
                <div className="lg:col-span-5 flex justify-center lg:justify-end">
                  <div className="w-full max-w-sm bg-white text-[#001752] rounded-2xl sm:rounded-3xl p-6 sm:p-8 shadow-xl space-y-4">
                    
                    <div className="flex items-center justify-between">
                      <span className="text-[10px] font-bold text-slate-500 uppercase tracking-wider">
                        ADMISSIONS &amp; DEMOS
                      </span>
                      <span className="inline-flex items-center gap-1.5 text-[10px] font-bold text-[#10b981] bg-emerald-50 px-2.5 py-1 rounded-full border border-emerald-100">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#10b981] animate-pulse" />
                        <span>Open Mon–Sat</span>
                      </span>
                    </div>

                    <div>
                      <h3 className="text-xl sm:text-2xl font-bold font-heading text-[#001752] leading-tight">
                        Visit Our Virar East Lab
                      </h3>
                      <p className="text-xs text-slate-600 leading-relaxed font-normal mt-2">
                        Directly facing the Platform 1/2 subway exit stairs at Raut Arcade 202. Take a seat and test-drive our workstations.
                      </p>
                    </div>

                    <div className="pt-3 border-t border-slate-100 space-y-2 text-xs text-slate-600">
                      <div className="flex items-center gap-2">
                        <MapPin size={13} className="text-[#C41E1E] shrink-0" />
                        <span className="font-medium text-slate-800">202, Raut Arcade, Station Road East</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Clock size={13} className="text-[#001752] shrink-0" />
                        <span>9:00 AM – 7:00 PM (Daily Rolling Batches)</span>
                      </div>
                    </div>

                    <div className="pt-2">
                      <div className="p-3 rounded-xl bg-slate-50 border border-slate-200 flex items-center justify-between">
                        <div>
                          <span className="text-[10px] text-slate-500 uppercase font-bold block">1:1 Workstation Demo</span>
                          <strong className="text-xs font-bold text-[#001752]">Free 30-Min Practical Session</strong>
                        </div>
                        <span className="text-xs font-bold text-[#C41E1E]">FREE</span>
                      </div>
                    </div>

                  </div>
                </div>

              </div>
            </div>
          </div>
        </section>

      </div>
    </>
  );
}
