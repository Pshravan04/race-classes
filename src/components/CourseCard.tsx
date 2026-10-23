import { MessageSquare, ArrowRight } from 'lucide-react';
import type { Course } from '../data/config';
import { SITE_CONFIG } from '../data/config';

interface CourseCardProps {
  course: Course;
  onSelect: (course: Course) => void;
}

export default function CourseCard({ course, onSelect }: CourseCardProps) {
  const isCareer = course.type === 'career';

  return (
    <div className="tactile-card rounded-xl p-5 flex flex-col justify-between h-full bg-white relative group">
      
      {/* Top Meta Strip */}
      <div>
        <div className="flex items-center justify-between gap-2 mb-3">
          <span
            className={`text-[10px] font-black uppercase px-2 py-0.5 rounded tracking-wide ${
              isCareer
                ? 'bg-[#071B3A] text-[#C59B27] border border-[#C59B27]/40'
                : 'bg-[#FAF7EE] text-[#071B3A] border border-[#E8E2D5]'
            }`}
          >
            {isCareer ? 'Career Objective' : 'Short-Term Module'}
          </span>

          <span className="text-[11px] font-semibold text-gray-500">
            {course.durationPlaceholder.split('(')[0]}
          </span>
        </div>

        {/* Title */}
        <h3 className="text-lg font-bold text-[#071B3A] font-serif-heading mb-2 group-hover:text-[#C59B27] transition-colors leading-snug">
          {course.name}
        </h3>

        {/* Short Description */}
        <p className="text-xs sm:text-sm text-[#4A5568] leading-relaxed mb-4 line-clamp-2">
          {course.shortDesc}
        </p>

        {/* Key Highlights / Sample Topics */}
        <div className="space-y-1.5 mb-4 pt-3 border-t border-[#E8E2D5]/80">
          {course.topics.slice(0, 2).map((topic, i) => (
            <div key={i} className="flex items-start gap-1.5 text-xs text-[#334155]">
              <span className="text-[#C59B27] font-bold mt-0.5">•</span>
              <span className="line-clamp-1">{topic}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Action Row */}
      <div className="pt-3 border-t border-[#E8E2D5] flex items-center justify-between gap-2 mt-auto">
        
        {/* Quick View Details Button */}
        <button
          type="button"
          onClick={() => onSelect(course)}
          className="text-xs font-bold text-[#071B3A] hover:text-[#C59B27] flex items-center gap-1 transition-colors py-1 cursor-pointer"
          aria-label={`View full details for ${course.name}`}
        >
          <span>Syllabus &amp; Topics</span>
          <ArrowRight size={13} />
        </button>

        {/* 1-Click WhatsApp Enquiry */}
        <a
          href={`${SITE_CONFIG.contact.whatsapp}?text=${encodeURIComponent(course.whatsappMessage)}`}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 bg-[#25D366]/10 hover:bg-[#25D366] text-[#128C7E] hover:text-white px-3 py-1.5 rounded-md text-xs font-bold transition-all"
          aria-label={`Enquire about ${course.name} on WhatsApp`}
        >
          <MessageSquare size={13} />
          <span>Enquire</span>
        </a>

      </div>

    </div>
  );
}
