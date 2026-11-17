import { useState, useRef, useEffect, useCallback } from 'react';
import { ChevronLeft, ChevronRight, Sparkles } from 'lucide-react';
import type { Course } from '../data/config';
import CourseCard from './CourseCard';

interface CourseSliderProps {
  courses: Course[];
  activeFilter?: 'all' | 'career' | 'short-term';
}

export default function CourseSlider({ courses }: CourseSliderProps) {
  const sliderRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);
  const [currentIndex, setCurrentIndex] = useState(0);

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
          <span className="hidden sm:inline-flex items-center gap-1 text-xs text-[#0e2340] font-semibold">
            <Sparkles size={12} className="text-[#A2D016]" />
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
                ? 'bg-[#0e2340] text-white hover:bg-[#c6383b] shadow-sm active:scale-95'
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
                ? 'bg-[#0e2340] text-white hover:bg-[#c6383b] shadow-sm active:scale-95'
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
        {courses.map((course) => (
          <div
            key={course.id}
            className="w-[88vw] sm:w-[calc(50%-12px)] lg:w-[calc(33.333%-14px)] shrink-0 snap-start flex flex-col"
          >
            <CourseCard course={course} />
          </div>
        ))}
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
                ? 'w-6 h-2 bg-[#0e2340]'
                : 'w-2 h-2 bg-slate-300 hover:bg-slate-400'
            }`}
            aria-label={`Go to slide ${i + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
