import { MessageSquare, ArrowRight, Check } from 'lucide-react';
import type { Course } from '../data/config';
import { SITE_CONFIG } from '../data/config';

interface CourseCardProps {
  course: Course;
  onSelect: (course: Course) => void;
}

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
  'software-development': '/images/student-coding.jpg',
  'dfa': '/images/tally-practice.jpg',
  'animation': '/images/course-graphic-design.jpg',
  'ai-ml': '/images/course-ai-ml.jpg',
  'digital-marketing': '/images/real-data-chart-session.jpg',
  'web-and-app-development': '/images/student-coding.jpg',
  'ethical-hacking': '/images/real-students-presentation.jpg',
  'ai-prompt-engineering': '/images/course-ai-ml.jpg',
  'data-science': '/images/real-data-chart-session.jpg',
  'cyber-security': '/images/real-students-presentation.jpg',
  'graphic-designing': '/images/course-graphic-design.jpg',
};

function getCourseImage(id: string, type: 'career' | 'short-term'): string {
  if (COURSE_IMAGES[id]) return COURSE_IMAGES[id];
  return type === 'career' ? '/images/student-coding.jpg' : '/images/real-lab-classroom.jpg';
}

export default function CourseCard({ course, onSelect }: CourseCardProps) {
  const isCareer = course.type === 'career';
  const courseImage = getCourseImage(course.id, course.type);

  return (
    <div className="group flex h-full flex-col justify-between rounded-2xl border border-slate-200 bg-white overflow-hidden shadow-xs transition-all duration-300 hover:-translate-y-1 hover:border-[#C41E1E]/50 hover:shadow-xl">
      <div>
        {/* Top Photographic Course Banner */}
        <div 
          onClick={() => onSelect(course)}
          className="relative aspect-[16/10] w-full overflow-hidden bg-slate-900 cursor-pointer block"
          role="button"
          tabIndex={0}
          onKeyDown={(e) => {
            if (e.key === 'Enter' || e.key === ' ') {
              e.preventDefault();
              onSelect(course);
            }
          }}
          aria-label={`View ${course.name} details`}
        >
          <img
            src={courseImage}
            alt={`${course.name} practical training at Race Reddys Virar`}
            className="w-full h-full object-cover group-hover:scale-106 transition-transform duration-700 ease-out"
            loading="lazy"
          />

          {/* Cinematic Vignette */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/25 to-black/20 pointer-events-none" />

          {/* Top-Left Category Badge */}
          <div className="absolute top-3 left-3 z-10">
            <span
              className={`inline-flex items-center rounded-full px-2.5 py-1 text-[10px] font-black uppercase tracking-wider shadow-sm ${
                isCareer
                  ? 'bg-[#C41E1E] text-white border border-red-300/30'
                  : 'bg-[#001752] text-white border border-white/20'
              }`}
            >
              {isCareer ? 'Career Track' : 'Short-Term Module'}
            </span>
          </div>

          {/* Top-Right Duration Badge */}
          <div className="absolute top-3 right-3 z-10">
            <span className="bg-black/60 backdrop-blur-md text-white text-[10.5px] font-bold px-2.5 py-0.5 rounded-full border border-white/20 shadow-xs">
              {course.durationPlaceholder.split('(')[0].trim()}
            </span>
          </div>

          {/* Bottom Overlay Label inside Image */}
          <div className="absolute bottom-2.5 left-3 right-3 z-10 flex items-center justify-between text-[11px] text-white">
            <span className="flex items-center gap-1.5 font-semibold drop-shadow-sm text-slate-200">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
              1 Student : 1 PC
            </span>
            <span className="text-[10px] font-black uppercase text-[#F5BE4F] tracking-wider drop-shadow-sm">
              Virar East Lab
            </span>
          </div>
        </div>

        {/* Card Body */}
        <div className="p-5">
          <h3 
            onClick={() => onSelect(course)}
            className="text-base sm:text-lg font-bold text-[#001752] leading-snug transition-colors group-hover:text-[#C41E1E] cursor-pointer"
          >
            {course.name}
          </h3>

          <p className="mt-2 text-xs sm:text-sm text-slate-600 leading-relaxed line-clamp-2">
            {course.shortDesc}
          </p>

          <div className="mt-4 space-y-1.5 border-t border-slate-100 pt-3">
            {course.topics.slice(0, 2).map((topic, i) => (
              <div key={i} className="flex items-start gap-2 text-xs text-slate-600">
                <Check size={13} className="text-[#C41E1E] shrink-0 mt-0.5 stroke-[2.5]" />
                <span className="line-clamp-1">{topic}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Card Footer Actions */}
      <div className="px-5 pb-5 pt-2 flex items-center justify-between gap-2 border-t border-slate-100">
        <button
          type="button"
          onClick={() => onSelect(course)}
          className="inline-flex items-center gap-1 py-1 text-xs font-bold text-[#001752] transition-colors hover:text-[#C41E1E] cursor-pointer"
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
