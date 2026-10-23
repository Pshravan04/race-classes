import { useState, useRef, useEffect, useCallback } from 'react';
import { Link } from 'react-router-dom';
import { ChevronLeft, ChevronRight, Check, MessageSquare, Clock, Sparkles } from 'lucide-react';
import type { Course } from '../data/config';
import { SITE_CONFIG } from '../data/config';

interface CourseSliderProps {
  courses: Course[];
  activeFilter: 'all' | 'career' | 'short-term';
}

const COURSE_IMAGES: Record<string, string> = {
  'basic-computer': '/images/lab-students.jpg',
  'ms-office': '/images/course-excel-office.jpg',
  'advanced-tally-with-gst': '/images/tally-practice.jpg',
  'software-development': '/images/student-coding.jpg',
  'ai-ml': '/images/course-ai-ml.jpg',
  'graphic-designing': '/images/course-graphic-design.jpg',
  'digital-marketing': '/images/course-graphic-design.jpg',
  'web-development': '/images/student-coding.jpg',
  'cyber-security': '/images/lab-students.jpg',
  'data-analytics': '/images/course-excel-office.jpg',
  'python-programming': '/images/course-ai-ml.jpg',
  'diploma-in-financial-accounting': '/images/tally-practice.jpg',
  'typing-english-marathi': '/images/student-coding.jpg',
  'ccc': '/images/lab-students.jpg',
  'gst': '/images/tally-practice.jpg',
  'dtp': '/images/course-graphic-design.jpg',
};

function getCourseImage(id: string, type: 'career' | 'short-term'): string {
  if (COURSE_IMAGES[id]) return COURSE_IMAGES[id];
  return type === 'career' ? '/images/student-coding.jpg' : '/images/lab-students.jpg';
}

export default function CourseSlider({ courses }: CourseSliderProps) {
  const sliderRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);
  const [currentIndex, setCurrentIndex] = useState(0);

  const wa = SITE_CONFIG.contact.whatsapp;

  const updateScrollButtons = useCallback(() => {
    if (!sliderRef.current) return;
    const { scrollLeft, scrollWidth, clientWidth } = sliderRef.current;
    setCanScrollLeft(scrollLeft > 10);
    setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10);

    // Calculate approximate active page index
    const cardWidth = sliderRef.current.children[0]?.clientWidth || clientWidth / 3;
    const idx = Math.round(scrollLeft / cardWidth);
    setCurrentIndex(idx);
  }, []);

  useEffect(() => {
    const slider = sliderRef.current;
    if (!slider) return;

    slider.addEventListener('scroll', updateScrollButtons, { passive: true });
    updateScrollButtons();

    return () => {
      slider.removeEventListener('scroll', updateScrollButtons);
    };
  }, [courses, updateScrollButtons]);

  // Reset scroll to start when course list changes
  useEffect(() => {
    if (sliderRef.current) {
      sliderRef.current.scrollTo({ left: 0, behavior: 'smooth' });
    }
  }, [courses]);

  const slideLeft = () => {
    if (!sliderRef.current) return;
    const scrollAmount = sliderRef.current.clientWidth * 0.85;
    sliderRef.current.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
  };

  const slideRight = () => {
    if (!sliderRef.current) return;
    const scrollAmount = sliderRef.current.clientWidth * 0.85;
    sliderRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
  };

  return (
    <div className="relative">
      {/* Top Slider Navigation Controls */}
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-2">
          <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">
            Showing {courses.length} Courses
          </span>
          <span className="hidden sm:inline-block w-1.5 h-1.5 rounded-full bg-slate-300" />
          <span className="hidden sm:inline-flex items-center gap-1 text-xs text-[#0084FF] font-semibold">
            <Sparkles size={12} />
            Slide left &amp; right to explore
          </span>
        </div>

        {/* Arrow Controls */}
        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={slideLeft}
            disabled={!canScrollLeft}
            className={`w-10 h-10 rounded-full flex items-center justify-center transition-all cursor-pointer ${
              canScrollLeft
                ? 'bg-[#111827] text-white hover:bg-[#0084FF] shadow-sm active:scale-95'
                : 'bg-slate-100 text-slate-300 cursor-not-allowed'
            }`}
            aria-label="Previous courses"
          >
            <ChevronLeft size={20} />
          </button>

          <button
            type="button"
            onClick={slideRight}
            disabled={!canScrollRight}
            className={`w-10 h-10 rounded-full flex items-center justify-center transition-all cursor-pointer ${
              canScrollRight
                ? 'bg-[#111827] text-white hover:bg-[#0084FF] shadow-sm active:scale-95'
                : 'bg-slate-100 text-slate-300 cursor-not-allowed'
            }`}
            aria-label="Next courses"
          >
            <ChevronRight size={20} />
          </button>
        </div>
      </div>

      {/* Horizontal Scroll Track */}
      <div
        ref={sliderRef}
        className="flex gap-5 overflow-x-auto pb-6 pt-1 scroll-smooth snap-x snap-mandatory"
        style={{
          scrollbarWidth: 'none',
          msOverflowStyle: 'none',
        }}
      >
        {courses.map((course, idx) => {
          const isCareer = course.type === 'career';
          const isPopular = idx === 1 || course.id === 'advanced-tally-with-gst' || course.id === 'software-development';
          const courseImage = getCourseImage(course.id, course.type);

          return (
            <div
              key={course.id}
              className={`w-[85vw] sm:w-[calc(50%-12px)] lg:w-[calc(33.333%-14px)] shrink-0 snap-start bg-white rounded-2xl border overflow-hidden shadow-xs hover:shadow-lg hover:-translate-y-1 transition-all flex flex-col justify-between group ${
                isPopular ? 'border-[#0084FF]/40 ring-1 ring-[#0084FF]/20' : 'border-slate-200'
              }`}
            >
              {/* Card Image Banner */}
              <div className="relative aspect-[16/10] w-full overflow-hidden bg-slate-900 shrink-0">
                <img
                  src={courseImage}
                  alt={course.name}
                  className="w-full h-full object-cover group-hover:scale-106 transition-transform duration-700"
                  loading="lazy"
                />
                
                {/* Contrast Vignette Gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/25 to-black/15 pointer-events-none" />

                {/* Top Left: Category Badge */}
                <span
                  className={`absolute top-3 left-3 px-2.5 py-1 rounded-full text-[10px] font-black uppercase tracking-wider shadow-sm ${
                    isCareer
                      ? 'bg-[#0084FF] text-white'
                      : 'bg-[#F5BE4F] text-[#2E1F00]'
                  }`}
                >
                  {isCareer ? 'Career Diploma' : 'Short-Term Skill'}
                </span>

                {/* Top Right: Popular Badge or Duration */}
                {isPopular ? (
                  <span className="absolute top-3 right-3 bg-red-600 text-white text-[9px] uppercase font-black tracking-wider px-2.5 py-1 rounded-full shadow-sm">
                    Popular Choice
                  </span>
                ) : (
                  <span className="absolute top-3 right-3 bg-black/60 backdrop-blur-xs text-white text-[10px] font-bold px-2 py-0.5 rounded-full border border-white/20 flex items-center gap-1">
                    <Clock size={11} className="text-[#F5BE4F]" />
                    {course.durationPlaceholder.split('(')[0].trim()}
                  </span>
                )}

                {/* Bottom Overlay Pill on Image */}
                <div className="absolute bottom-2.5 left-3 right-3 flex items-center justify-between text-white text-[11px] font-semibold">
                  <span className="bg-black/65 backdrop-blur-xs px-2.5 py-1 rounded-md">
                    Raut Arcade Lab 202
                  </span>
                  <span className="text-emerald-300 bg-black/65 backdrop-blur-xs px-2.5 py-1 rounded-md">
                    1 Student : 1 PC
                  </span>
                </div>
              </div>

              {/* Card Content */}
              <div className="p-4 sm:p-5 flex-1 flex flex-col justify-between">
                <div>
                  {/* Duration row if popular */}
                  {isPopular && (
                    <div className="flex items-center gap-1.5 text-xs text-slate-500 font-semibold mb-1.5">
                      <Clock size={13} className="text-[#0084FF]" />
                      <span>Duration: {course.durationPlaceholder.split('(')[0].trim()}</span>
                    </div>
                  )}

                  {/* Course Title */}
                  <h3 className="text-base sm:text-lg font-bold text-[#111827] group-hover:text-[#0084FF] transition-colors leading-snug line-clamp-1">
                    {course.name}
                  </h3>

                  {/* Short Description */}
                  <p className="text-xs text-slate-500 mt-1.5 line-clamp-2 leading-relaxed">
                    {course.shortDesc}
                  </p>

                  {/* 2 Bullet Points */}
                  <div className="mt-3.5 pt-3 border-t border-slate-100 space-y-1.5">
                    {course.topics.slice(0, 2).map((topic, i) => (
                      <div key={i} className="flex items-start gap-2 text-[11px] text-slate-600">
                        <Check size={12} className="text-emerald-500 shrink-0 stroke-[2.5] mt-0.5" />
                        <span className="line-clamp-1">{topic}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Actions */}
                <div className="pt-4 mt-4 flex items-center gap-2 border-t border-slate-100">
                  <Link
                    to={`/courses/${course.id}`}
                    className="flex-1 inline-flex items-center justify-center h-10 px-4 rounded-full text-xs font-bold bg-[#111827] text-white hover:bg-[#0084FF] transition-all shadow-xs active:scale-95"
                  >
                    View Details &amp; Syllabus →
                  </Link>
                  <a
                    href={`${wa}?text=${encodeURIComponent(course.whatsappMessage)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    title={`WhatsApp Enquiry for ${course.name}`}
                    className="h-10 w-10 rounded-full bg-[#25D366] hover:bg-[#20BA5A] text-white flex items-center justify-center transition-all shrink-0 shadow-xs active:scale-95"
                  >
                    <MessageSquare size={16} />
                  </a>
                </div>

              </div>
            </div>
          );
        })}
      </div>

      {/* Slider Progress Bar / Dot Indicators */}
      <div className="flex items-center justify-center gap-2 mt-2">
        {Array.from({ length: Math.min(courses.length, 8) }).map((_, i) => (
          <button
            key={i}
            type="button"
            onClick={() => {
              if (!sliderRef.current) return;
              const cardWidth = sliderRef.current.children[0]?.clientWidth || 300;
              sliderRef.current.scrollTo({ left: i * cardWidth, behavior: 'smooth' });
            }}
            className={`transition-all rounded-full cursor-pointer ${
              i === currentIndex
                ? 'w-6 h-2 bg-[#0084FF]'
                : 'w-2 h-2 bg-slate-300 hover:bg-slate-400'
            }`}
            aria-label={`Go to slide ${i + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
