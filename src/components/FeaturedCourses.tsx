import { useState } from 'react';
import { ArrowRight } from 'lucide-react';
import { COURSES, type Course } from '../data/config';
import CourseCard from './CourseCard';
import CourseDrawer from './CourseDrawer';
import { useLanguage } from '../context/useLanguage';
import { Link } from 'react-router-dom';

export default function FeaturedCourses() {
  const { t } = useLanguage();
  const [selectedCourse, setSelectedCourse] = useState<Course | null>(null);

  // 6 curated featured courses for Virar audience:
  // 1. Advanced Tally with GST
  // 2. Typing (English and Marathi)
  // 3. Web & App Development
  // 4. MS-Office (Word, Excel, PowerPoint)
  // 5. AI Prompt Engineering
  // 6. Digital Marketing
  const featuredIds = [
    'advanced-tally-with-gst',
    'typing-english-marathi',
    'web-and-app-development',
    'ms-office',
    'ai-prompt-engineering',
    'digital-marketing',
  ];

  const featuredCourses = COURSES.filter((c) => featuredIds.includes(c.id));

  return (
    <section className="py-12 sm:py-16 bg-[#FBF9F5]" aria-labelledby="featured-heading">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10">
          <div>
            <div className="station-board-yellow inline-block mb-3 text-xs font-black">
              POPULAR CHOICES • लोकप्रिय कोर्सेस
            </div>
            <h2 id="featured-heading" className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#071B3A] font-serif-heading">
              Featured Job-Ready Courses
            </h2>
            <p className="text-sm sm:text-base text-[#4A5568] mt-1 max-w-xl">
              High-demand practical skills for students, commerce graduates, and business owners in Virar.
            </p>
          </div>

          <Link
            to="/courses"
            className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold text-[#071B3A] hover:text-[#C59B27] py-2 transition-colors shrink-0"
          >
            <span>{t.ctaBrowseCourses}</span>
            <ArrowRight size={15} />
          </Link>
        </div>

        {/* 6 Grid Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {featuredCourses.map((course) => (
            <CourseCard
              key={course.id}
              course={course}
              onSelect={(c) => setSelectedCourse(c)}
            />
          ))}
        </div>

        {/* Bottom Banner to Browse All */}
        <div className="mt-10 p-5 bg-[#FAF7EE] rounded-2xl border border-[#E8E2D5] flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div>
            <strong className="text-sm sm:text-base text-[#071B3A] font-serif-heading block">
              Looking for something else?
            </strong>
            <span className="text-xs text-[#526071]">
              We offer 23 courses including Python, Data Science, Ethical Hacking, Animation, CCC, Hardware, and A+/N+.
            </span>
          </div>

          <Link
            to="/courses"
            className="inline-flex items-center gap-2 bg-[#071B3A] hover:bg-[#0E2B5C] text-white text-xs sm:text-sm font-bold px-5 py-2.5 rounded-xl border border-[#C59B27] transition-colors shrink-0"
          >
            <span>View All 23 Courses</span>
            <ArrowRight size={14} className="text-[#D8AF3E]" />
          </Link>
        </div>

      </div>

      {/* Slide-out detail drawer */}
      <CourseDrawer
        course={selectedCourse}
        onClose={() => setSelectedCourse(null)}
      />
    </section>
  );
}
