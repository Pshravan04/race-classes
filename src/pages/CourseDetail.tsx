import { useParams, Link, Navigate } from 'react-router-dom';
import { 
  ArrowLeft, 
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
  ArrowRight
} from 'lucide-react';
import SEO from '../components/SEO';
import CtaBand from '../components/CtaBand';
import { COURSES, SITE_CONFIG, OFFERS_CONFIG } from '../data/config';

export default function CourseDetail() {
  const { courseId } = useParams<{ courseId: string }>();
  const course = COURSES.find((c) => c.id === courseId);

  if (!course) {
    return <Navigate to="/courses" replace />;
  }

  const isCareer = course.type === 'career';
  const relatedCourses = COURSES.filter((c) => c.type === course.type && c.id !== course.id).slice(0, 3);

  return (
    <>
      <SEO
        title={`${course.name} Course in Virar East | Race Reddys`}
        description={`Practical ${course.name} training at Race Reddys Virar East. Hands-on computer lab sessions, certification, flexible batch timings, and 50% discount.`}
        canonical={`/courses/${course.id}`}
      />

      {/* ─── Breadcrumb Navigation Bar ─── */}
      <div className="bg-white border-b border-slate-200 py-3">
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
              VIRAR EAST LAB
            </span>
            <span className="text-slate-500 hidden sm:inline text-[11px] font-medium">
              Raut Arcade 202 · Opp. Station Subway
            </span>
          </div>
        </div>
      </div>

      {/* ─── Course Hero Banner ─── */}
      <section className="relative bg-gradient-to-br from-[#001752] via-[#000F36] to-[#00081C] text-white py-12 sm:py-16 overflow-hidden border-b border-[#002277]">
        <div className="absolute -top-32 -left-32 w-96 h-96 rounded-full bg-[#C41E1E]/20 blur-[120px] pointer-events-none" />
        <div className="absolute top-1/2 -right-24 w-96 h-96 rounded-full bg-[#002B94]/30 blur-[120px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Left Content (8 cols) */}
            <div className="lg:col-span-8 flex flex-col items-start gap-4">
              
              {/* Badges strip */}
              <div className="flex flex-wrap items-center gap-2">
                <span className={`text-xs font-black px-3 py-1 rounded-full uppercase tracking-wide ${
                  isCareer 
                    ? 'bg-[#C41E1E] text-white shadow-xs' 
                    : 'bg-white/15 text-white border border-white/20'
                }`}>
                  {isCareer ? 'Career-Objective Diploma' : 'Short-Term Certificate'}
                </span>
                <span className="inline-flex items-center gap-1.5 bg-white/10 text-emerald-400 text-xs font-bold px-3 py-1 rounded-full border border-white/15">
                  <Monitor size={13} />
                  <span>100% Practical (1:1 Machine)</span>
                </span>
                <span className="inline-flex items-center gap-1.5 bg-red-500/20 text-red-200 text-xs font-bold px-3 py-1 rounded-full border border-red-400/30">
                  <Clock size={13} />
                  <span>Duration: {course.durationPlaceholder}</span>
                </span>
              </div>

              {/* Course Title */}
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-white leading-tight">
                {course.name}
              </h1>

              {/* Description */}
              <p className="text-base sm:text-lg text-slate-300 leading-relaxed font-normal max-w-3xl">
                {course.shortDesc}
              </p>

              {/* 4 Feature Highlights */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 w-full pt-1">
                {[
                  { icon: Monitor, label: 'Dedicated PC', sub: 'No machine sharing' },
                  { icon: Award, label: 'Certification', sub: 'Govt. Recognized' },
                  { icon: Clock, label: 'Batch Timings', sub: 'Morning & Evening' },
                  { icon: ShieldCheck, label: 'Doubt Solving', sub: 'Lifetime Support' },
                ].map((feat) => {
                  const Icon = feat.icon;
                  return (
                    <div key={feat.label} className="bg-white/5 backdrop-blur-md px-3.5 py-2.5 rounded-2xl border border-white/10 flex flex-col">
                      <div className="flex items-center gap-1.5 text-[#F5BE4F] mb-0.5">
                        <Icon size={14} />
                        <span className="text-xs font-bold text-white">{feat.label}</span>
                      </div>
                      <span className="text-[11px] text-slate-300">{feat.sub}</span>
                    </div>
                  );
                })}
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-3 pt-3">
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center gap-2 h-12 px-7 rounded-full bg-[#C41E1E] hover:bg-[#A81717] text-white font-bold text-sm shadow-md active:scale-95 transition-all"
                >
                  <Sparkles size={15} className="text-white" />
                  <span>Book Free Demo Class</span>
                </Link>

                <a
                  href={`${SITE_CONFIG.contact.whatsapp}?text=${encodeURIComponent(course.whatsappMessage)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 h-12 px-6 rounded-full bg-[#25D366] hover:bg-[#20BA5A] text-white text-sm font-bold shadow-md active:scale-95 transition-all"
                >
                  <MessageSquare size={16} />
                  <span>Enquire on WhatsApp</span>
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

            {/* Right Card: Quick Admission Concession Callout (4 cols) */}
            <div className="lg:col-span-4 mt-4 lg:mt-0">
              <div className="bg-white rounded-3xl p-6 sm:p-7 text-[#001752] shadow-2xl border border-slate-200 flex flex-col gap-4">
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
                      ? 'Limited-time admission drive + FREE Basic Computer Course with all study material included!'
                      : 'Special student and professional discount for upcoming morning, ladies, and evening slots.'}
                  </p>
                </div>

                <div className="space-y-2 pt-2 border-t border-slate-200 text-xs">
                  <div className="flex items-center justify-between py-1 text-slate-700">
                    <span className="font-medium text-slate-500">Batch Timing:</span>
                    <strong className="font-bold text-[#111827]">Morning / Evening / Ladies</strong>
                  </div>
                  <div className="flex items-center justify-between py-1 text-slate-700">
                    <span className="font-medium text-slate-500">Machine Ratio:</span>
                    <strong className="font-bold text-[#C41E1E]">1 Student : 1 PC</strong>
                  </div>
                  <div className="flex items-center justify-between py-1 text-slate-700">
                    <span className="font-medium text-slate-500">Institute Location:</span>
                    <strong className="font-bold text-[#111827]">Virar East Station Subway</strong>
                  </div>
                </div>

                <a
                  href={`${SITE_CONFIG.contact.whatsapp}?text=${encodeURIComponent(
                    `Hello! I want to confirm batch timing and fees for ${course.name} at Race Reddys Virar East.`
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#20BA5A] text-white text-xs sm:text-sm font-bold py-3 rounded-full shadow-xs transition-all active:scale-95"
                >
                  <MessageSquare size={16} />
                  <span>Get Fee Structure on WhatsApp</span>
                </a>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ─── Course Detail Body ─── */}
      <section className="py-16 sm:py-20 bg-[#F8F9FA]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10">
            
            {/* Left Content (8 cols) */}
            <div className="lg:col-span-8 space-y-8">
              
              {/* Who is this course for */}
              <div className="bg-white p-6 sm:p-8 rounded-3xl border border-slate-200/90 shadow-sm">
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-red-50 text-[#C41E1E] text-xs font-bold uppercase tracking-wider mb-3">
                  Target Audience
                </div>
                <h2 className="text-xl sm:text-2xl font-bold text-[#001752] mb-3">
                  Who is this course for?
                </h2>
                <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                  {course.whoFor}
                </p>
              </div>

              {/* What you'll learn: Detailed Syllabus Topics */}
              <div className="bg-white p-6 sm:p-8 rounded-3xl border border-slate-200/90 shadow-sm">
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-50 text-amber-800 text-xs font-bold uppercase tracking-wider mb-3 border border-amber-200">
                  Syllabus &amp; Practical Modules
                </div>
                <h2 className="text-xl sm:text-2xl font-bold text-[#001752] mb-4">
                  What You Will Learn Hands-On
                </h2>
                <div className="space-y-3">
                  {course.topics.map((topic, i) => (
                    <div key={i} className="flex items-start gap-3 p-3.5 bg-[#F8F9FA] rounded-2xl border border-slate-200/80">
                      <CheckCircle2 size={18} className="text-emerald-500 shrink-0 mt-0.5" />
                      <span className="text-xs sm:text-sm text-[#001752] font-medium leading-relaxed">
                        {topic}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Certification & Doubt Support */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="bg-white p-6 rounded-3xl border border-slate-200/90 shadow-sm">
                  <div className="w-10 h-10 rounded-2xl bg-amber-50 text-amber-600 flex items-center justify-center mb-3">
                    <Award size={20} />
                  </div>
                  <h3 className="text-base font-bold text-[#001752] mb-1">
                    Recognised Certification
                  </h3>
                  <p className="text-xs text-slate-500 leading-relaxed">
                    {course.certificate}. Authorized credentials valid for corporate resumes and interview portfolios.
                  </p>
                </div>

                <div className="bg-white p-6 rounded-3xl border border-slate-200/90 shadow-sm">
                  <div className="w-10 h-10 rounded-2xl bg-[#001752]/10 text-[#001752] flex items-center justify-center mb-3">
                    <Clock size={20} />
                  </div>
                  <h3 className="text-base font-bold text-[#001752] mb-1">
                    Free Lifetime Doubt Support
                  </h3>
                  <p className="text-xs text-slate-500 leading-relaxed">
                    Walk in to Raut Arcade anytime in the future to clarify practical questions with our teachers.
                  </p>
                </div>
              </div>

            </div>

            {/* Right Sidebar: Key Facts & Enquire Box (4 cols) */}
            <div className="lg:col-span-4 space-y-6">
              
              {/* Key Facts Summary Box */}
              <div className="bg-white p-6 sm:p-7 rounded-3xl border border-slate-200/90 shadow-sm space-y-4">
                <h3 className="text-base font-bold text-[#111827] border-b border-slate-200 pb-3">
                  Course Snapshot
                </h3>

                <div>
                  <span className="text-xs text-slate-400 block">Typical Duration</span>
                  <strong className="text-sm text-[#111827] font-bold">
                    {course.durationPlaceholder}
                  </strong>
                </div>

                <div>
                  <span className="text-xs text-slate-400 block">Training Mode</span>
                  <strong className="text-sm text-[#111827] font-bold">
                    {course.mode}
                  </strong>
                </div>

                <div>
                  <span className="text-xs text-slate-400 block">Location</span>
                  <strong className="text-sm text-[#111827] font-bold">
                    202, Raut Arcade, Opp. Subway, Virar East
                  </strong>
                </div>

                <div>
                  <span className="text-xs text-slate-400 block">Batch Availability</span>
                  <strong className="text-sm text-[#111827] font-bold">
                    Morning, Ladies &amp; Evening Batches
                  </strong>
                </div>

                {/* 50% Concession Badge */}
                <div className="p-3.5 bg-amber-50 rounded-2xl border border-amber-200 text-xs">
                  <div className="flex items-center gap-1.5 text-amber-800 font-black uppercase mb-1">
                    <Sparkles size={12} className="text-[#F5BE4F]" />
                    <span>{OFFERS_CONFIG.badge}</span>
                  </div>
                  <span className="text-slate-600 leading-snug block">
                    {isCareer
                      ? 'Free Basic Computer Course included with this career program!'
                      : 'Special 50% discount applicable for current admission intake.'}
                  </span>
                </div>

                {/* Direct Action */}
                <a
                  href={`${SITE_CONFIG.contact.whatsapp}?text=${encodeURIComponent(course.whatsappMessage)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#20BA5A] text-white text-xs sm:text-sm font-bold py-3 rounded-full transition-all shadow-xs active:scale-95"
                >
                  <MessageSquare size={16} />
                  <span>Ask Fee Details on WhatsApp</span>
                </a>
              </div>

              {/* Lab Workstation Preview */}
              <div className="rounded-3xl border border-slate-200 overflow-hidden bg-white shadow-sm">
                <div className="relative aspect-[16/10] overflow-hidden bg-slate-900">
                  <img
                    src="/images/real-instructor-mentoring.jpg"
                    alt="Students learning on computers at Race Reddys Virar"
                    className="w-full h-full object-cover"
                  />
                  <span className="absolute top-2.5 left-2.5 bg-[#001752] text-white text-[10px] font-bold px-2.5 py-0.5 rounded-full shadow-sm">
                    Raut Arcade Lab 202
                  </span>
                  <span className="absolute bottom-2.5 left-2.5 right-2.5 bg-black/60 backdrop-blur-xs text-white text-[10px] font-semibold px-2.5 py-1 rounded-xl">
                    1 Student : 1 Confirmed PC
                  </span>
                </div>
                <div className="p-4 text-xs text-slate-600">
                  <strong className="text-[#001752] block font-bold mb-0.5">Dedicated Hands-on Lab Time</strong>
                  Every student enrolled in {course.name} practices directly on their own desktop terminal with faculty guidance.
                </div>
              </div>

              {/* Lab Hours & Address */}
              <div className="bg-white p-6 rounded-3xl border border-slate-200 text-xs space-y-2.5 shadow-sm">
                <div className="flex items-center gap-2 text-[#001752] font-bold">
                  <MapPin size={15} className="text-[#C41E1E]" />
                  <span>Visit Lab in Person</span>
                </div>
                <p className="text-slate-500 leading-relaxed">
                  202, 2nd Floor, Raut Arcade, Opposite Virar East Railway Station subway. Monday to Saturday: 9:00 AM – 7:00 PM.
                </p>
                <a
                  href={SITE_CONFIG.address.googleMapsDirectLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-[#001752] hover:text-[#C41E1E] font-bold underline"
                >
                  <span>Open in Google Maps</span>
                  <ArrowRight size={12} />
                </a>
              </div>

            </div>

          </div>

          {/* Related Courses Carousel / Rail */}
          {relatedCourses.length > 0 && (
            <div className="mt-16 pt-10 border-t border-slate-200">
              <h2 className="text-xl sm:text-2xl font-bold text-[#001752] mb-6">
                Explore Other Recommended Courses
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {relatedCourses.map((c) => (
                  <Link
                    key={c.id}
                    to={`/courses/${c.id}`}
                    className="rounded-3xl p-6 bg-white border border-slate-200 shadow-sm hover:shadow-md transition-shadow block group"
                  >
                    <span className="text-[10px] font-black uppercase text-[#C41E1E] block mb-1">
                      {c.type === 'career' ? 'Career Track' : 'Short-Term Module'}
                    </span>
                    <h3 className="text-base font-bold text-[#001752] group-hover:text-[#C41E1E] transition-colors mb-1">
                      {c.name}
                    </h3>
                    <p className="text-xs text-slate-500 line-clamp-2">
                      {c.shortDesc}
                    </p>
                  </Link>
                ))}
              </div>
            </div>
          )}

        </div>
      </section>

      <CtaBand
        title={`Ready to start learning ${course.name}?`}
        description="Book your free practical demo session at Raut Arcade, Virar East. Meet your mentor, test the computer workstation, and confirm your batch timing."
      />
    </>
  );
}
