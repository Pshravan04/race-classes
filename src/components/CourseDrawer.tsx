import { X, MessageSquare, Phone, CheckCircle2, Clock, Award, Laptop } from 'lucide-react';
import type { Course } from '../data/config';
import { SITE_CONFIG, OFFERS_CONFIG } from '../data/config';

interface CourseDrawerProps {
  course: Course | null;
  onClose: () => void;
}

export default function CourseDrawer({ course, onClose }: CourseDrawerProps) {
  if (!course) return null;

  const isCareer = course.type === 'career';

  return (
    <div
      className="fixed inset-0 z-50 overflow-y-auto bg-black/60 backdrop-blur-xs flex justify-end animate-in fade-in duration-200"
      role="dialog"
      aria-modal="true"
      aria-labelledby="drawer-course-title"
    >
      {/* Background click overlay */}
      <div className="fixed inset-0" onClick={onClose} aria-hidden="true" />

      {/* Drawer Container */}
      <div className="relative w-full max-w-xl bg-[#FBF9F5] min-h-screen sm:min-h-0 sm:max-h-[96vh] sm:my-auto sm:mr-4 sm:rounded-2xl shadow-2xl border-l sm:border border-[#E8E2D5] flex flex-col z-10 overflow-hidden">
        
        {/* Drawer Header */}
        <div className="bg-[#071B3A] text-white p-5 sm:p-6 border-b border-[#C59B27]/40 flex items-start justify-between gap-4">
          <div>
            <div className="flex flex-wrap items-center gap-2 mb-2">
              <span className={`text-[11px] font-black px-2.5 py-0.5 rounded-full uppercase ${
                isCareer ? 'bg-[#C59B27] text-[#071B3A]' : 'bg-white/20 text-white'
              }`}>
                {isCareer ? 'Career-Objective Course' : 'Short-Term Skill Module'}
              </span>
              <span className="text-[11px] font-semibold text-[#D8AF3E]">
                Virar East Branch
              </span>
            </div>
            
            <h2 id="drawer-course-title" className="text-xl sm:text-2xl font-bold font-serif-heading">
              {course.name}
            </h2>
          </div>

          <button
            type="button"
            onClick={onClose}
            className="p-2 text-gray-300 hover:text-white hover:bg-white/10 rounded-full transition-colors"
            aria-label="Close course details"
          >
            <X size={20} />
          </button>
        </div>

        {/* Drawer Body - Scrollable Content */}
        <div className="p-5 sm:p-6 overflow-y-auto space-y-6 flex-1 text-[#1C2430]">
          
          {/* Quick Overview */}
          <div>
            <h3 className="text-xs font-black uppercase tracking-wider text-[#6B5A24] mb-1.5">
              Course Overview
            </h3>
            <p className="text-sm text-[#334155] leading-relaxed">
              {course.shortDesc}
            </p>
          </div>

          {/* Key Facts Pill Grid */}
          <div className="grid grid-cols-2 gap-3 bg-white p-4 rounded-xl border border-[#E8E2D5] text-xs">
            <div>
              <span className="text-gray-500 block mb-0.5 flex items-center gap-1">
                <Clock size={13} className="text-[#C59B27]" />
                Typical Duration
              </span>
              <strong className="text-[#071B3A] font-semibold">
                {course.durationPlaceholder}
              </strong>
            </div>

            <div>
              <span className="text-gray-500 block mb-0.5 flex items-center gap-1">
                <Laptop size={13} className="text-[#C59B27]" />
                Training Mode
              </span>
              <strong className="text-[#071B3A] font-semibold">
                100% Practical Lab
              </strong>
            </div>

            <div className="col-span-2 pt-2 border-t border-[#E8E2D5]">
              <span className="text-gray-500 block mb-0.5 flex items-center gap-1">
                <Award size={13} className="text-[#C59B27]" />
                Certification
              </span>
              <strong className="text-[#071B3A] font-semibold">
                {course.certificate}
              </strong>
            </div>
          </div>

          {/* Who is this for */}
          <div>
            <h3 className="text-xs font-black uppercase tracking-wider text-[#6B5A24] mb-1.5">
              Who is this course for?
            </h3>
            <div className="p-3 bg-white rounded-lg border border-[#E8E2D5] text-xs sm:text-sm text-[#334155] leading-relaxed">
              {course.whoFor}
            </div>
          </div>

          {/* What you will learn (Topic List) */}
          <div>
            <h3 className="text-xs font-black uppercase tracking-wider text-[#6B5A24] mb-2">
              What You Will Learn (Practical Modules)
            </h3>
            <ul className="space-y-2 bg-white p-4 rounded-xl border border-[#E8E2D5]">
              {course.topics.map((topic, i) => (
                <li key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-[#334155]">
                  <CheckCircle2 size={16} className="text-[#C59B27] shrink-0 mt-0.5" />
                  <span>{topic}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Special Offer Alert for this course */}
          <div className="p-4 bg-[#FAF7EE] rounded-xl border border-[#C59B27]/40 text-xs text-[#071B3A]">
            <div className="flex items-center gap-2 mb-1">
              <span className="rubber-stamp text-[10px] py-0 px-1.5">
                {OFFERS_CONFIG.badge}
              </span>
              <strong className="text-xs font-bold text-[#071B3A]">
                Concession Eligible
              </strong>
            </div>
            <p className="text-[#4A5568] leading-relaxed">
              {isCareer
                ? 'Enrolling in this career course includes a FREE Basic Computer Course + 50% discount on standard fee schedule.'
                : 'Enrolling in this short-term module qualifies for our 50% limited-time admissions discount.'}
            </p>
          </div>

        </div>

        {/* Drawer Footer Actions */}
        <div className="p-4 sm:p-5 bg-white border-t border-[#E8E2D5] flex flex-wrap items-center justify-between gap-3">
          <a
            href={`tel:${SITE_CONFIG.contact.phone}`}
            className="inline-flex items-center gap-1.5 text-xs font-bold text-[#071B3A] hover:bg-[#F3EFE6] px-3 py-2.5 rounded-lg border border-[#E8E2D5] transition-colors"
          >
            <Phone size={14} />
            <span>Call Institute</span>
          </a>

          <a
            href={`${SITE_CONFIG.contact.whatsapp}?text=${encodeURIComponent(course.whatsappMessage)}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#20BA5A] text-white text-xs sm:text-sm font-bold px-5 py-2.5 rounded-lg shadow-sm transition-all"
          >
            <MessageSquare size={16} />
            <span>Enquire on WhatsApp</span>
          </a>
        </div>

      </div>
    </div>
  );
}
