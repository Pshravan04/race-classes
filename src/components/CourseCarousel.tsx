import { useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { ArrowUpRight, ChevronLeft, ChevronRight } from 'lucide-react'

interface FeaturedCourse {
  id: string
  title: string
  tag: string
  isPopular?: boolean
  icon: string
  description: string
  bgImage: string
}

const FEATURED_COURSES: FeaturedCourse[] = [
  {
    id: 'basic-computer',
    title: 'Computer Basics & GCC-TBC Typing',
    tag: 'Foundation',
    icon: '⌨',
    description: 'Master typing speed 30/40 wpm, MS Word, Excel, and essential office internet tools.',
    bgImage: '/hero-lab.jpg',
  },
  {
    id: 'tally-gst',
    title: 'Advanced TallyPrime with GST',
    tag: 'Most Popular',
    isPopular: true,
    icon: '📊',
    description: 'E-way bills, TDS, payroll, auditing, and corporate balance sheet management.',
    bgImage: '/student-coding.jpg',
  },
  {
    id: 'full-stack-python',
    title: 'Full Stack Software Development',
    tag: 'Career Track',
    icon: '</>',
    description: 'Python, Java OOPs, React, JavaScript, SQL databases, and real Git deployment.',
    bgImage: '/stitch-hero.png',
  },
  {
    id: 'graphic-design',
    title: 'Graphic Design & Multimedia',
    tag: 'Creative',
    icon: '🎨',
    description: 'Photoshop, Illustrator, CorelDRAW, typography, UI principles, and brand design.',
    bgImage: '/instructor-teaching.jpg',
  },
  {
    id: 'ai-prompt-engineering',
    title: 'AI Tools & Modern Tech Skills',
    tag: 'Next-Gen',
    icon: '⚡',
    description: 'ChatGPT for business, automations, cybersecurity basics, and modern workflows.',
    bgImage: '/hero-lab.jpg',
  },
]

export default function CourseCarousel() {
  const scrollRef = useRef<HTMLDivElement>(null)
  const [activeFilter, setActiveFilter] = useState<'all' | 'popular' | 'career'>('all')

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const scrollAmount = direction === 'left' ? -320 : 320
      scrollRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' })
    }
  }

  const displayedCourses = FEATURED_COURSES.filter((course) => {
    if (activeFilter === 'popular') return course.isPopular
    if (activeFilter === 'career') return course.tag === 'Career Track' || course.tag === 'Creative'
    return true
  })

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 border-b border-gray-200" id="courses" aria-label="Our Courses">
      {/* Section Title & Carousel Controls Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 pb-4 border-b border-gray-200 gap-4">
        <div>
          <div className="flex items-center gap-2 text-xs font-bold tracking-wider text-gray-500 uppercase mb-1">
            <span className="w-2 h-2 rounded-full bg-black" />
            <span>OUR COURSES</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-[#0F1E36]">
            Everything your career needs
          </h2>
        </div>

        <div className="flex items-center gap-4">
          <p className="text-xs sm:text-sm text-gray-500 max-w-xs text-right hidden sm:block">
            We handle the full learning cycle — no juggling multiple coaching classes.
          </p>
          {/* Arrow Navigation Buttons replicating reference */}
          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={() => scroll('left')}
              aria-label="Previous Course"
              className="w-9 h-9 rounded-full border border-gray-300 flex items-center justify-center text-gray-600 hover:bg-gray-100 transition-colors active:scale-95"
            >
              <ChevronLeft size={18} />
            </button>
            <button
              type="button"
              onClick={() => scroll('right')}
              aria-label="Next Course"
              className="w-9 h-9 rounded-full bg-[#121c2d] text-white flex items-center justify-center hover:bg-black transition-colors active:scale-95 shadow-sm"
            >
              <ChevronRight size={18} />
            </button>
          </div>
        </div>
      </div>

      {/* Filter Tabs */}
      <div className="flex items-center gap-2 mb-6 overflow-x-auto pb-2 no-scrollbar">
        <button
          type="button"
          onClick={() => setActiveFilter('all')}
          className={`text-xs font-bold px-4 py-1.5 rounded-full transition-all ${
            activeFilter === 'all'
              ? 'bg-[#0F1E36] text-white'
              : 'bg-white text-gray-600 border border-gray-200 hover:bg-gray-100'
          }`}
        >
          All 5 Programs
        </button>
        <button
          type="button"
          onClick={() => setActiveFilter('popular')}
          className={`text-xs font-bold px-4 py-1.5 rounded-full transition-all ${
            activeFilter === 'popular'
              ? 'bg-[#0F1E36] text-white'
              : 'bg-white text-gray-600 border border-gray-200 hover:bg-gray-100'
          }`}
        >
          Most Popular
        </button>
        <button
          type="button"
          onClick={() => setActiveFilter('career')}
          className={`text-xs font-bold px-4 py-1.5 rounded-full transition-all ${
            activeFilter === 'career'
              ? 'bg-[#0F1E36] text-white'
              : 'bg-white text-gray-600 border border-gray-200 hover:bg-gray-100'
          }`}
        >
          Career Tracks
        </button>
        <Link
          to="/courses"
          className="ml-auto text-xs font-bold text-[#1556A6] hover:underline flex items-center gap-1"
        >
          <span>View Full Catalog (30+ Courses)</span>
          <ArrowUpRight size={13} />
        </Link>
      </div>

      {/* 5 Course Cards Grid / Carousel */}
      <div
        ref={scrollRef}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4"
      >
        {displayedCourses.map((course) => (
          <div
            key={course.id}
            className="group relative rounded-3xl overflow-hidden h-96 flex flex-col justify-between p-5 bg-slate-900 shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
          >
            {/* Card Background Image */}
            <img
              src={course.bgImage}
              alt={course.title}
              className="absolute inset-0 w-full h-full object-cover filter brightness-[0.42] group-hover:scale-105 transition-transform duration-500"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/40 to-transparent" />

            {/* Top Pill & Icon */}
            <div className="relative z-10 flex items-center justify-between">
              <span
                className={`text-[10px] font-bold px-2.5 py-1 rounded-full uppercase tracking-wider ${
                  course.isPopular
                    ? 'bg-[#B7EB38] text-black font-extrabold'
                    : 'bg-white/20 backdrop-blur-md text-white'
                }`}
              >
                {course.tag}
              </span>
              <span className="w-7 h-7 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white text-xs">
                {course.icon}
              </span>
            </div>

            {/* Bottom Content */}
            <div className="relative z-10">
              <h3 className="text-lg font-bold text-white mb-1.5 leading-snug">
                {course.title}
              </h3>
              <p className="text-xs text-gray-300 mb-4 line-clamp-2">
                {course.description}
              </p>
              <Link
                to={`/courses/${course.id}`}
                className="inline-flex items-center gap-1.5 bg-white/90 hover:bg-white text-black text-xs font-bold px-3 py-1.5 rounded-full transition-colors group-hover:shadow"
              >
                <span>Learn More</span>
                <span className="text-xs">↗</span>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
