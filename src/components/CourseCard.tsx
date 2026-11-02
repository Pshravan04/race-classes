import { MessageSquare, ArrowRight, Check } from 'lucide-react';
import type { Course } from '../data/config';
import { SITE_CONFIG } from '../data/config';

interface CourseCardProps {
  course: Course;
  onSelect: (course: Course) => void;
}

export default function CourseCard({ course, onSelect }: CourseCardProps) {
  const isCareer = course.type === 'career';

  return (
    <div className="group flex h-full flex-col justify-between rounded-2xl border border-slate-200 bg-white p-5 shadow-xs transition-all duration-200 hover:-translate-y-0.5 hover:border-[#0084FF]/40 hover:shadow-lg">
      <div>
        <div className="flex items-center justify-between gap-2 mb-3">
          <span
            className={`inline-flex items-center rounded-full px-2.5 py-1 text-[10px] font-black uppercase tracking-wider ${
              isCareer
                ? 'bg-[#0084FF] text-white'
                : 'bg-[#F5BE4F] text-[#111827]'
            }`}
          >
            {isCareer ? 'Career Objective' : 'Short-Term Module'}
          </span>

          <span className="text-[11px] font-semibold text-slate-500">
            {course.durationPlaceholder.split('(')[0].trim()}
          </span>
        </div>

        <h3 className="text-lg font-bold text-[#111827] leading-snug transition-colors group-hover:text-[#0084FF]">
          {course.name}
        </h3>

        <p className="mt-2 text-xs sm:text-sm text-slate-600 leading-relaxed line-clamp-2">
          {course.shortDesc}
        </p>

        <div className="mt-4 space-y-1.5 border-t border-slate-100 pt-3">
          {course.topics.slice(0, 2).map((topic, i) => (
            <div key={i} className="flex items-start gap-2 text-xs text-slate-600">
              <Check size={13} className="text-[#0084FF] shrink-0 mt-0.5 stroke-[2.5]" />
              <span className="line-clamp-1">{topic}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-4 flex items-center justify-between gap-2 border-t border-slate-100 pt-3">
        <button
          type="button"
          onClick={() => onSelect(course)}
          className="inline-flex items-center gap-1 py-1 text-xs font-bold text-[#111827] transition-colors hover:text-[#0084FF] cursor-pointer"
          aria-label={`View full details for ${course.name}`}
        >
          <span>Syllabus &amp; Topics</span>
          <ArrowRight size={13} />
        </button>

        <a
          href={`${SITE_CONFIG.contact.whatsapp}?text=${encodeURIComponent(course.whatsappMessage)}`}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 rounded-full bg-[#25D366]/10 px-3 py-1.5 text-xs font-bold text-[#128C7E] transition-all hover:bg-[#25D366] hover:text-white"
          aria-label={`Enquire about ${course.name} on WhatsApp`}
        >
          <MessageSquare size={13} />
          <span>Enquire</span>
        </a>
      </div>
    </div>
  );
}
