import { useEffect, useRef } from 'react';
import { X, MessageSquare, Phone, CheckCircle2, Clock, Award, Laptop } from 'lucide-react';
import type { Course } from '../data/config';
import { SITE_CONFIG, OFFERS_CONFIG } from '../data/config';

interface CourseDrawerProps {
  course: Course | null;
  onClose: () => void;
}

export default function CourseDrawer({ course, onClose }: CourseDrawerProps) {
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const onCloseRef = useRef(onClose);
  onCloseRef.current = onClose;

  useEffect(() => {
    if (!course) return;

    const previousFocus = document.activeElement as HTMLElement | null;
    const previousOverflow = document.body.style.overflow;

    document.body.style.overflow = 'hidden';
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') onCloseRef.current();
    };
    document.addEventListener('keydown', handleKeyDown);
    closeButtonRef.current?.focus();

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = previousOverflow;
      previousFocus?.focus?.();
    };
  }, [course]);

  if (!course) return null;

  const isCareer = course.type === 'career';

  return (
    <div
      className="fixed inset-0 z-50 overflow-y-auto bg-slate-950/60 backdrop-blur-sm flex justify-end animate-in fade-in duration-200"
      role="dialog"
      aria-modal="true"
      aria-labelledby="drawer-course-title"
    >
      <div className="fixed inset-0" onClick={onClose} aria-hidden="true" />

      <div className="relative w-full max-w-xl bg-[#F8F9FA] min-h-screen sm:min-h-0 sm:max-h-[96vh] sm:my-auto sm:mr-4 sm:rounded-3xl shadow-2xl border-l sm:border border-slate-200 flex flex-col z-10 overflow-hidden">
        {/* Header */}
        <div className="relative bg-[#0B0F19] text-white p-5 sm:p-6 border-b border-white/10 flex items-start justify-between gap-4 overflow-hidden">
          <div className="absolute -right-10 -top-10 w-40 h-40 bg-[#0084FF]/25 rounded-full blur-2xl pointer-events-none" />
          <div className="relative z-10">
            <div className="flex flex-wrap items-center gap-2 mb-2">
              <span
                className={`text-[10px] font-black px-2.5 py-1 rounded-full uppercase tracking-wider ${
                  isCareer ? 'bg-[#F5BE4F] text-[#111827]' : 'bg-white/10 text-white border border-white/15'
                }`}
              >
                {isCareer ? 'Career-Objective Course' : 'Short-Term Skill Module'}
              </span>
              <span className="text-[11px] font-semibold text-[#0084FF]">
                Virar East Branch
              </span>
            </div>

            <h2 id="drawer-course-title" className="text-xl sm:text-2xl font-bold tracking-tight">
              {course.name}
            </h2>
          </div>

          <button
            ref={closeButtonRef}
            type="button"
            onClick={onClose}
            className="relative z-10 p-2 text-slate-300 hover:text-white hover:bg-white/10 rounded-full transition-colors"
            aria-label="Close course details"
          >
            <X size={20} />
          </button>
        </div>

        {/* Body */}
        <div className="p-5 sm:p-6 overflow-y-auto space-y-5 flex-1 text-[#111827]">
          <div>
            <h3 className="text-[11px] font-black uppercase tracking-wider text-[#1E4ED7] mb-1.5">
              Course Overview
            </h3>
            <p className="text-sm text-slate-600 leading-relaxed">
              {course.shortDesc}
            </p>
          </div>

          <div className="grid grid-cols-2 gap-3 bg-white p-4 rounded-2xl border border-slate-200 text-xs">
            <div>
              <span className="text-slate-500 block mb-1 flex items-center gap-1">
                <Clock size={13} className="text-[#0084FF]" />
                Typical Duration
              </span>
              <strong className="text-[#111827] font-semibold">
                {course.durationPlaceholder}
              </strong>
            </div>

            <div>
              <span className="text-slate-500 block mb-1 flex items-center gap-1">
                <Laptop size={13} className="text-[#0084FF]" />
                Training Mode
              </span>
              <strong className="text-[#111827] font-semibold">
                100% Practical Lab
              </strong>
            </div>

            <div className="col-span-2 pt-3 border-t border-slate-100">
              <span className="text-slate-500 block mb-1 flex items-center gap-1">
                <Award size={13} className="text-[#0084FF]" />
                Certification
              </span>
              <strong className="text-[#111827] font-semibold">
                {course.certificate}
              </strong>
            </div>
          </div>

          <div>
            <h3 className="text-[11px] font-black uppercase tracking-wider text-[#1E4ED7] mb-1.5">
              Who is this course for?
            </h3>
            <div className="p-4 bg-white rounded-xl border border-slate-200 text-xs sm:text-sm text-slate-600 leading-relaxed">
              {course.whoFor}
            </div>
          </div>

          <div>
            <h3 className="text-[11px] font-black uppercase tracking-wider text-[#1E4ED7] mb-2">
              What You Will Learn (Practical Modules)
            </h3>
            <ul className="space-y-2.5 bg-white p-4 rounded-2xl border border-slate-200">
              {course.topics.map((topic, i) => (
                <li key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-600">
                  <CheckCircle2 size={16} className="text-[#0084FF] shrink-0 mt-0.5" />
                  <span>{topic}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="p-4 bg-[#F1F3FF] rounded-2xl border border-[#0084FF]/20 text-xs text-[#111827]">
            <div className="flex items-center gap-2 mb-1.5">
              <span className="rounded-full bg-[#F5BE4F] px-2.5 py-0.5 text-[10px] font-black text-[#111827]">
                {OFFERS_CONFIG.badge}
              </span>
              <strong className="text-xs font-bold text-[#111827]">
                Concession Eligible
              </strong>
            </div>
            <p className="text-slate-600 leading-relaxed">
              {isCareer
                ? 'Enrolling in this career course includes a FREE Basic Computer Course + 50% discount on standard fee schedule.'
                : 'Enrolling in this short-term module qualifies for our 50% limited-time admissions discount.'}
            </p>
          </div>
        </div>

        {/* Footer */}
        <div className="p-4 sm:p-5 bg-white border-t border-slate-200 flex flex-wrap items-center justify-between gap-3">
          <a
            href={`tel:${SITE_CONFIG.contact.phone}`}
            className="inline-flex items-center gap-1.5 text-xs font-bold text-[#111827] hover:bg-slate-50 px-3 py-2.5 rounded-full border border-slate-200 transition-colors"
          >
            <Phone size={14} className="text-[#0084FF]" />
            <span>Call Institute</span>
          </a>

          <a
            href={`${SITE_CONFIG.contact.whatsapp}?text=${encodeURIComponent(course.whatsappMessage)}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#20BA5A] text-white text-xs sm:text-sm font-bold px-5 py-2.5 rounded-full shadow-sm transition-all active:scale-95"
          >
            <MessageSquare size={16} />
            <span>Enquire on WhatsApp</span>
          </a>
        </div>
      </div>
    </div>
  );
}
