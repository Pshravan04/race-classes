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
  Tag 
} from 'lucide-react';
import SEO from '../components/SEO';
import RailwayTrackDivider from '../components/RailwayTrackDivider';
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

      {/* Breadcrumb Navigation Bar */}
      <div className="bg-[#FAF4E4] border-b border-[#F5BE4F]/30 py-3">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between text-xs">
          <Link
            to="/courses"
            className="inline-flex items-center gap-1.5 font-bold text-[#071B3A] hover:text-[#1E4ED7] transition-colors"
          >
            <ArrowLeft size={15} />
            <span>Back to All 23 Courses</span>
          </Link>
          <div className="flex items-center gap-2">
            <span className="station-board-yellow text-[10px] py-0.5 px-2 font-bold tracking-wider">
              VIRAR EAST LAB
            </span>
            <span className="text-slate-600 hidden sm:inline text-[11px] font-medium">
              Opp. Subway &amp; Station • Platform 1
            </span>
          </div>
        </div>
      </div>

      {/* Main Course Hero Banner */}
      <section className="relative bg-gradient-to-b from-[#071530] via-[#0B1F4B] to-[#040E20] text-white py-12 sm:py-16 overflow-hidden">
        {/* Ambient radial glows */}
        <div className="absolute -top-32 -left-32 w-96 h-96 rounded-full bg-[#1E4ED7]/25 blur-[120px] pointer-events-none" />
        <div className="absolute top-1/2 -right-24 w-96 h-96 rounded-full bg-[#F5BE4F]/15 blur-[120px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Left Content (8 cols) */}
            <div className="lg:col-span-8 flex flex-col items-start gap-4">
              
              {/* Badges strip */}
              <div className="flex flex-wrap items-center gap-2">
                <span className={`text-xs font-black px-3 py-1 rounded-full uppercase tracking-wide ${
                  isCareer 
                    ? 'bg-[#F5BE4F] text-[#2E1F00] shadow-sm' 
                    : 'bg-white/15 text-white border border-white/20'
                }`}>
                  {isCareer ? 'Career-Objective Diploma' : 'Short-Term Certificate'}
                </span>
                <span className="inline-flex items-center gap-1.5 bg-white/10 text-[#F5BE4F] text-xs font-bold px-3 py-1 rounded-full border border-white/15">
                  <Monitor size={13} />
                  <span>100% Practical Training (1:1 Machine)</span>
                </span>
                <span className="inline-flex items-center gap-1.5 bg-[#25D366]/20 text-[#25D366] text-xs font-bold px-3 py-1 rounded-full border border-[#25D366]/30">
                  <Clock size={13} />
                  <span>Duration: {course.durationPlaceholder}</span>
                </span>
              </div>

              {/* Course Title */}
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-white leading-tight">
                {course.name}
              </h1>

              {/* Description */}
              <p className="text-base sm:text-lg text-slate-200 leading-relaxed font-normal max-w-3xl">
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
                    <div key={feat.label} className="bg-white/5 backdrop-blur-md px-3 py-2 rounded-xl border border-white/10 flex flex-col">
                      <div className="flex items-center gap-1.5 text-[#F5BE4F] mb-0.5">
                        <Icon size={14} />
                        <span className="text-xs font-bold text-white">{feat.label}</span>
                      </div>
                      <span className="text-[11px] text-slate-300">{feat.sub}</span>
                    </div>
                  );
                })}
              </div>

              {/* Quick Action CTAs */}
              <div className="flex flex-wrap items-center gap-3 pt-3">
                <Link
                  to="/contact#demo"
                  className="inline-flex items-center justify-center gap-2 h-12 px-7 rounded-full bg-gradient-to-r from-[#F5BE4F] via-[#F3B33D] to-[#E5A93C] text-[#2E1F00] font-extrabold text-sm shadow-lg hover:shadow-xl hover:brightness-105 active:scale-95 transition-all"
                >
                  <Sparkles size={16} className="text-[#2E1F00]" />
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
                  className="inline-flex items-center justify-center gap-2 h-12 px-5 rounded-full bg-white/10 hover:bg-white/20 text-white text-sm font-bold border border-white/25 active:scale-95 transition-colors"
                >
                  <Phone size={15} className="text-[#F5BE4F]" />
                  <span>Call: {SITE_CONFIG.contact.phone}</span>
                </a>
              </div>

            </div>

            {/* Right Card: Quick Admission Concession Callout (4 cols) */}
            <div className="lg:col-span-4 mt-4 lg:mt-0">
              <div className="bg-white/95 backdrop-blur-md rounded-2xl p-6 text-[#141B2B] shadow-2xl border-2 border-[#F5BE4F]/50 flex flex-col gap-4">
                <div className="flex items-center justify-between">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#FAF4E4] text-[#A8811C] text-xs font-bold border border-[#F5BE4F]/40">
                    <Tag size={13} />
                    <span>Special Concession</span>
                  </span>
                  <span className="station-board-yellow text-[10px] py-0.5 px-2 font-bold">
                    RAUT ARCADE
                  </span>
                </div>

                <div>
                  <div className="flex items-baseline gap-2">
                    <span className="text-3xl font-black text-[#071B3A]">Flat 50% OFF</span>
                  </div>
                  <p className="text-xs text-slate-600 mt-1 font-medium">
                    {isCareer 
                      ? 'Limited-time admission drive + FREE Basic Computer Course with all study material included!'
                      : 'Special student and professional discount for upcoming morning and evening slots.'}
                  </p>
                </div>

                <div className="space-y-2 pt-2 border-t border-slate-200 text-xs">
                  <div className="flex items-center justify-between py-1 text-slate-700">
                    <span className="font-medium text-slate-500">Batch Timing:</span>
                    <strong className="font-bold text-[#071B3A]">Morning / Evening / Ladies</strong>
                  </div>
                  <div className="flex items-center justify-between py-1 text-slate-700">
                    <span className="font-medium text-slate-500">Machine Ratio:</span>
                    <strong className="font-bold text-[#1E4ED7]">1 Student : 1 PC</strong>
                  </div>
                  <div className="flex items-center justify-between py-1 text-slate-700">
                    <span className="font-medium text-slate-500">Institute Location:</span>
                    <strong className="font-bold text-[#071B3A]">Virar East Station Subway</strong>
                  </div>
                </div>

                <a
                  href={`${SITE_CONFIG.contact.whatsapp}?text=${encodeURIComponent(
                    `Hello! I want to confirm batch timing and fees for ${course.name} at Race Reddys Virar East.`
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#20BA5A] text-white text-xs sm:text-sm font-bold py-3 rounded-xl shadow-xs transition-all"
                >
                  <MessageSquare size={16} />
                  <span>Get Fee Structure on WhatsApp</span>
                </a>
              </div>
            </div>

          </div>
        </div>
      </section>


      {/* Course Detail Body */}
      <section className="py-12 bg-[#FBF9F5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            
            {/* Left Content (8 cols) */}
            <div className="lg:col-span-8 space-y-8">
              
              {/* Who is this course for */}
              <div className="bg-white p-6 sm:p-7 rounded-2xl border border-[#E8E2D5] shadow-xs">
                <div className="station-board mb-3 text-xs">
                  TARGET AUDIENCE
                </div>
                <h2 className="text-xl sm:text-2xl font-bold text-[#071B3A] font-serif-heading mb-3">
                  Who is this course for?
                </h2>
                <p className="text-sm sm:text-base text-[#4A5568] leading-relaxed">
                  {course.whoFor}
                </p>
              </div>

              {/* What you'll learn: Detailed Syllabus Topics */}
              <div className="bg-white p-6 sm:p-7 rounded-2xl border border-[#E8E2D5] shadow-xs">
                <div className="station-board-yellow inline-block mb-3 text-xs font-black">
                  SYLLABUS &amp; PRACTICAL MODULES
                </div>
                <h2 className="text-xl sm:text-2xl font-bold text-[#071B3A] font-serif-heading mb-4">
                  What You Will Learn Hands-On
                </h2>
                <div className="space-y-3">
                  {course.topics.map((topic, i) => (
                    <div key={i} className="flex items-start gap-3 p-3 bg-[#FAF7EE] rounded-xl border border-[#E8E2D5]">
                      <CheckCircle2 size={18} className="text-[#C59B27] shrink-0 mt-0.5" />
                      <span className="text-xs sm:text-sm text-[#1C2430] font-medium leading-relaxed">
                        {topic}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Certification & Doubt Support */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="bg-white p-5 rounded-xl border border-[#E8E2D5]">
                  <Award size={22} className="text-[#C59B27] mb-2" />
                  <h3 className="text-base font-bold text-[#071B3A] font-serif-heading mb-1">
                    Recognised Certification
                  </h3>
                  <p className="text-xs text-[#4A5568] leading-relaxed">
                    {course.certificate}. Valid for corporate resumes and interview portfolios.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-xl border border-[#E8E2D5]">
                  <Clock size={22} className="text-[#C0392B] mb-2" />
                  <h3 className="text-base font-bold text-[#071B3A] font-serif-heading mb-1">
                    Free Lifetime Doubt Support
                  </h3>
                  <p className="text-xs text-[#4A5568] leading-relaxed">
                    Walk in to Raut Arcade anytime in the future to clarify project questions with our teachers.
                  </p>
                </div>
              </div>

            </div>

            {/* Right Sidebar: Key Facts & Enquire Box (4 cols) */}
            <div className="lg:col-span-4 space-y-6">
              
              {/* Key Facts Summary Box */}
              <div className="bg-white p-6 rounded-2xl border border-[#E8E2D5] shadow-xs space-y-4">
                <h3 className="text-base font-bold text-[#071B3A] font-serif-heading border-b border-[#E8E2D5] pb-3">
                  Course Snapshot
                </h3>

                <div>
                  <span className="text-xs text-gray-500 block">Typical Duration</span>
                  <strong className="text-sm text-[#071B3A] font-semibold">
                    {course.durationPlaceholder}
                  </strong>
                </div>

                <div>
                  <span className="text-xs text-gray-500 block">Training Mode</span>
                  <strong className="text-sm text-[#071B3A] font-semibold">
                    {course.mode}
                  </strong>
                </div>

                <div>
                  <span className="text-xs text-gray-500 block">Location</span>
                  <strong className="text-sm text-[#071B3A] font-semibold">
                    202, Raut Arcade, Opp. Subway, Virar East
                  </strong>
                </div>

                <div>
                  <span className="text-xs text-gray-500 block">Batch Availability</span>
                  <strong className="text-sm text-[#071B3A] font-semibold">
                    Morning, Afternoon Ladies &amp; Evening Batches
                  </strong>
                </div>

                {/* 50% Concession Badge */}
                <div className="p-3 bg-[#FAF7EE] rounded-xl border border-[#C59B27]/40 text-xs">
                  <div className="flex items-center gap-1.5 text-[#C0392B] font-black uppercase mb-1">
                    <span>{OFFERS_CONFIG.badge}</span>
                  </div>
                  <span className="text-[#4A5568]">
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
                  className="w-full flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#20BA5A] text-white text-sm font-bold py-3 rounded-xl transition-all shadow-xs"
                >
                  <MessageSquare size={16} />
                  <span>Ask Fee Details on WhatsApp</span>
                </a>
              </div>

              {/* Lab Workstation Preview */}
              <div className="rounded-2xl border border-slate-200 overflow-hidden bg-white shadow-xs">
                <div className="relative aspect-[16/10] overflow-hidden bg-slate-900">
                  <img
                    src="/images/lab-students.jpg"
                    alt="Students learning on computers at Race Reddys Virar"
                    className="w-full h-full object-cover"
                  />
                  <span className="absolute top-2.5 left-2.5 bg-[#0084FF] text-white text-[10px] font-bold px-2 py-0.5 rounded-full shadow-sm">
                    Raut Arcade Lab 202
                  </span>
                  <span className="absolute bottom-2 left-2 right-2 bg-black/60 backdrop-blur-xs text-white text-[10px] font-semibold px-2 py-1 rounded">
                    1 Student : 1 Confirmed PC
                  </span>
                </div>
                <div className="p-3.5 text-xs text-slate-600">
                  <strong className="text-slate-900 block font-bold mb-0.5">Dedicated Hands-on Lab Time</strong>
                  Every student enrolled in {course.name} practices directly on their own desktop terminal with faculty guidance.
                </div>
              </div>

              {/* Lab Hours & Address */}
              <div className="bg-[#FAF7EE] p-5 rounded-2xl border border-[#E8E2D5] text-xs space-y-2">
                <div className="flex items-center gap-2 text-[#071B3A] font-bold">
                  <MapPin size={15} className="text-[#C0392B]" />
                  <span>Visit Lab in Person</span>
                </div>
                <p className="text-gray-600 leading-relaxed">
                  202, 2nd Floor, Raut Arcade, Opposite Virar East Railway Station subway. Monday to Saturday: 9:00 AM – 7:00 PM.
                </p>
                <a
                  href={SITE_CONFIG.address.googleMapsDirectLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block text-[#071B3A] font-bold underline hover:text-[#C59B27]"
                >
                  Open in Google Maps ↗
                </a>
              </div>

            </div>

          </div>

          {/* Related Courses Carousel / Rail */}
          {relatedCourses.length > 0 && (
            <div className="mt-14 pt-10 border-t border-[#E8E2D5]">
              <h2 className="text-xl sm:text-2xl font-bold text-[#071B3A] font-serif-heading mb-6">
                Explore Other Recommended Courses
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {relatedCourses.map((c) => (
                  <Link
                    key={c.id}
                    to={`/courses/${c.id}`}
                    className="tactile-card rounded-xl p-5 bg-white border border-[#E8E2D5] block group"
                  >
                    <span className="text-[10px] font-black uppercase text-[#C59B27] block mb-1">
                      {c.type === 'career' ? 'Career Track' : 'Short-Term Module'}
                    </span>
                    <h3 className="text-base font-bold text-[#071B3A] group-hover:text-[#C59B27] transition-colors mb-1 font-serif-heading">
                      {c.name}
                    </h3>
                    <p className="text-xs text-[#4A5568] line-clamp-2">
                      {c.shortDesc}
                    </p>
                  </Link>
                ))}
              </div>
            </div>
          )}

        </div>
      </section>

      <RailwayTrackDivider label="VIRAR EAST STATION • 2 MIN WALK" />
    </>
  );
}
