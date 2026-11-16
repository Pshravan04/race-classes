import { MessageSquare, ArrowRight, Check, Code2 } from 'lucide-react';
import { Link } from 'react-router-dom';
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
    <div className="group flex h-full flex-col justify-between rounded-3xl border border-slate-200 bg-white overflow-hidden shadow-xs hover-lift transition-all duration-300 hover:border-[#001752]/30">
      <div>
        {/* Top Photographic Course Banner */}
        <div 
          onClick={() => onSelect(course)}
          className="relative aspect-[16/10] w-full overflow-hidden bg-slate-900 cursor-pointer block img-frame"
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
            alt={`${course.name} practical training at RACE`}
            className="w-full h-full object-cover img-zoom"
            loading="lazy"
          />

          {/* Cinematic Vignette */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-black/20 pointer-events-none" />

          {/* Top-Left Category Badge */}
          <div className="absolute top-3 left-3 z-10">
            <span
              className={`inline-flex items-center rounded-full px-2.5 py-1 text-[10px] font-black uppercase tracking-wider shadow-sm ${
                isCareer
                  ? 'bg-[#C41E1E] text-white border border-red-300/30'
                  : 'bg-[#001752] text-white border border-white/20'
              }`}
            >
              {course.badge?.split('·')[0].trim() || (isCareer ? 'Career Track' : 'Short-Term Module')}
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
              Hands-On Lab
            </span>
          </div>
        </div>

        {/* Card Body */}
        <div className="p-5">
          <div className="flex items-start justify-between gap-2 mb-1.5">
            <h3 
              onClick={() => onSelect(course)}
              className="text-base sm:text-lg font-bold text-[#001752] leading-snug transition-colors group-hover:text-[#C41E1E] cursor-pointer"
            >
              {course.name}
            </h3>
          </div>

          {/* Project & Case Studies Badge (ITVedant Style) */}
          {(course.caseStudiesCount || (course.projects && course.projects.length > 0)) && (
            <div className="mb-2.5 inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-md bg-emerald-50 border border-emerald-200 text-emerald-800 text-[11px] font-bold">
              <Code2 size={12} className="text-emerald-600" />
              <span>{course.caseStudiesCount?.split('&')[0].trim() || `${course.projects?.length} Live Projects`}</span>
            </div>
          )}

          <p className="text-xs sm:text-sm text-slate-600 leading-relaxed line-clamp-2">
            {course.shortDesc}
          </p>

          {/* Tools Preview Strip */}
          {course.tools && course.tools.length > 0 && (
            <div className="mt-3 flex flex-wrap items-center gap-1.5">
              {course.tools.slice(0, 3).map((t, idx) => (
                <span
                  key={idx}
                  className="px-2 py-0.5 rounded bg-slate-100 text-[10.5px] font-semibold text-[#001752] border border-slate-200/80"
                >
                  {t}
                </span>
              ))}
              {course.tools.length > 3 && (
                <span className="text-[10px] font-bold text-slate-400">
                  +{course.tools.length - 3} tools
                </span>
              )}
            </div>
          )}

          {/* Topics Preview */}
          <div className="mt-3.5 space-y-1.5 border-t border-slate-100 pt-3">
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
      <div className="px-5 pb-5 pt-2 flex flex-col gap-2.5 border-t border-slate-100">
        <div className="flex items-center justify-between gap-2">
          <Link
            to={`/courses/${course.id}`}
            className="inline-flex items-center gap-1 text-xs font-bold text-[#001752] transition-colors hover:text-[#C41E1E] btn-press"
            aria-label={`View full details for ${course.name}`}
          >
            <span>Full Syllabus &amp; Projects</span>
            <ArrowRight size={13} />
          </Link>

          <a
            href={`${SITE_CONFIG.contact.whatsapp}?text=${encodeURIComponent(course.whatsappMessage)}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 rounded-full bg-[#25D366]/10 px-3 py-1.5 text-xs font-bold text-[#128C7E] transition-all hover:bg-[#25D366] hover:text-white btn-press"
            aria-label={`Enquire about ${course.name} on WhatsApp`}
          >
            <MessageSquare size={13} />
            <span>Enquire</span>
          </a>
        </div>
      </div>
    </div>
  );
}
