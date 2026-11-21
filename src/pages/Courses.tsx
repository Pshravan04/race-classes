import { useState, useMemo } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import {
  Search,
  RotateCcw,
  Clock,
  Monitor,
  CheckCircle2,
  ArrowRight,
  Phone,
  MapPin,
  Sparkles
} from 'lucide-react';
import SEO from '../components/SEO';
import { COURSES, SITE_CONFIG, type Course } from '../data/config';
import { ToolLogo, getCuratedToolsForCourse } from '../components/ToolIcons';

const COURSE_IMAGES: Record<string, string> = {
  'data-science-and-ai': '/images/real-data-chart-session.jpg',
  'full-stack-developer-course': '/images/student-coding.jpg',
  'english-speaking': '/images/real-students-presentation.jpg',
  'advanced-tally-with-gst': '/images/tally-practice.jpg',
  'devops-with-aws-course': '/images/real-instructor-mentoring.jpg',
  'digital-marketing-course': '/images/course-graphic-design.jpg',
  'cyber-security-ethical-hacking-with-ai-course': '/images/real-lab-classroom.jpg',
  'software-testing-course': '/images/real-lab-aisle.jpg',
  'investment-banking-course': '/images/real-teacher-lecture.jpg',
  'graphic-designing': '/images/course-graphic-design.jpg',
  'dfa': '/images/tally-practice.jpg',
  'basic-computer': '/images/ladies-guidance.jpg',
  'ms-office': '/images/course-excel-office.jpg',
  'typing-english-marathi': '/images/lab-students.jpg',
  'gst': '/images/real-data-chart-session.jpg',
  'ccc': '/images/course-excel-office.jpg',
  'illustrator': '/images/course-graphic-design.jpg',
  'photoshop': '/images/course-graphic-design.jpg',
  'html': '/images/student-coding.jpg',
  'css': '/images/student-coding.jpg',
  'hardware': '/images/real-lab-aisle.jpg',
  'a-plus-and-n-plus': '/images/real-lab-wide.jpg',
  'animation': '/images/course-graphic-design.jpg',
  'ai-prompt-engineering': '/images/course-ai-ml.jpg',
};

function getCourseImage(id: string): string {
  return COURSE_IMAGES[id] || '/images/real-lab-classroom.jpg';
}

type CategoryTab = 'all' | 'career' | 'coding-ai' | 'accounting' | 'design-media' | 'foundations';

interface CategoryFilterOption {
  id: CategoryTab;
  label: string;
}

const CATEGORY_TABS: CategoryFilterOption[] = [
  { id: 'all', label: 'All Courses' },
  { id: 'career', label: 'Career Diplomas' },
  { id: 'coding-ai', label: 'Software & AI' },
  { id: 'accounting', label: 'Accounting & Finance' },
  { id: 'design-media', label: 'Design & Media' },
  { id: 'foundations', label: 'Foundations & Basics' },
];

function getCategoryGroup(course: Course): CategoryTab {
  const id = course.id.toLowerCase();
  const name = course.name.toLowerCase();

  if (
    id.includes('full-stack') ||
    id.includes('data-science') ||
    id.includes('devops') ||
    id.includes('cyber-security') ||
    id.includes('software-testing') ||
    id.includes('html') ||
    id.includes('css') ||
    id.includes('prompt-engineering') ||
    name.includes('ai')
  ) {
    return 'coding-ai';
  }

  if (
    id.includes('tally') ||
    id.includes('gst') ||
    id.includes('dfa') ||
    id.includes('banking')
  ) {
    return 'accounting';
  }

  if (
    id.includes('graphic') ||
    id.includes('illustrator') ||
    id.includes('photoshop') ||
    id.includes('animation') ||
    id.includes('marketing')
  ) {
    return 'design-media';
  }

  return 'foundations';
}

function getCourseCategoryLabel(course: Course): string {
  if (course.type === 'career') return 'CAREER DIPLOMA';
  const id = course.id.toLowerCase();
  if (id.includes('tally') || id.includes('gst') || id.includes('dfa')) return 'ACCOUNTING & TAX';
  if (id.includes('english')) return 'COMMUNICATION';
  if (id.includes('typing')) return 'GOVT. CERTIFICATION';
  if (id.includes('graphic') || id.includes('photoshop') || id.includes('illustrator')) return 'DESIGN & MEDIA';
  return 'FOUNDATION';
}

export default function Courses() {
  const [searchParams, setSearchParams] = useSearchParams();

  const typeParam = searchParams.get('type');
  const catParam = (searchParams.get('category') as CategoryTab) || 'all';

  const [activeCategory, setActiveCategory] = useState<CategoryTab>(catParam);
  const [typeFilter, setTypeFilter] = useState<'all' | 'career' | 'short-term'>((typeParam as any) || 'all');
  const [searchQuery, setSearchQuery] = useState('');

  const handleCategoryChange = (cat: CategoryTab) => {
    setActiveCategory(cat);
    if (cat === 'all') {
      searchParams.delete('category');
    } else {
      searchParams.set('category', cat);
    }
    setSearchParams(searchParams, { replace: true });
  };

  const handleTypeChange = (type: 'all' | 'career' | 'short-term') => {
    setTypeFilter(type);
    if (type === 'all') {
      searchParams.delete('type');
    } else {
      searchParams.set('type', type);
    }
    setSearchParams(searchParams, { replace: true });
  };

  const handleReset = () => {
    setActiveCategory('all');
    setTypeFilter('all');
    setSearchQuery('');
    setSearchParams({}, { replace: true });
  };

  const filteredCourses = useMemo(() => {
    return COURSES.filter((course) => {
      // Type filter
      if (typeFilter !== 'all' && course.type !== typeFilter) return false;

      // Category filter
      if (activeCategory === 'career') {
        if (course.type !== 'career') return false;
      } else if (activeCategory !== 'all') {
        const group = getCategoryGroup(course);
        if (group !== activeCategory) return false;
      }

      // Search query
      if (searchQuery.trim() !== '') {
        const q = searchQuery.toLowerCase().trim();
        const matchesName = course.name.toLowerCase().includes(q);
        const matchesDesc = course.shortDesc.toLowerCase().includes(q);
        const matchesTopics = course.topics.some((t) => t.toLowerCase().includes(q));
        const matchesTools = course.tools?.some((t) => t.toLowerCase().includes(q)) ?? false;
        if (!matchesName && !matchesDesc && !matchesTopics && !matchesTools) {
          return false;
        }
      }

      return true;
    });
  }, [activeCategory, typeFilter, searchQuery]);

  const shortTermCount = COURSES.filter((c) => c.type === 'short-term').length;
  const careerCount = COURSES.filter((c) => c.type === 'career').length;

  return (
    <>
      <SEO
        title="Courses & Programs | RACE Practical Computer Education Virar East"
        description="Explore all 24 practical computer courses in Virar East: Full Stack, Data Science with AI, TallyPrime with GST, Spoken English, DevOps, Digital Marketing, Graphic Design, and Typing. 1:1 PC guarantee."
        canonical="/courses"
      />

      <div className="w-full text-[#0B0B0B] font-body selection:bg-[#C41E1E] selection:text-white">

        {/* ══════════════════════════════════════════════════════════════════════
            SECTION 01 – HERO & SEARCH (Seamless White Canvas)
            ══════════════════════════════════════════════════════════════════════ */}
        <section aria-label="Course Catalogue Hero" className="bg-white pt-8 sm:pt-12 pb-12 sm:pb-16 border-b border-slate-200/70">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            
            {/* Top Red Eyebrow */}
            <div className="mb-4">
              <span className="text-[#C41E1E] text-xs font-bold tracking-wider uppercase">
                PRACTICAL IT &amp; COMPUTER EDUCATION · ALL 24 COURSES
              </span>
            </div>

            {/* Split Top Row: Headline Left, CTAs Right */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-start mb-8 sm:mb-10">
              
              {/* Left Column: Heading + Description */}
              <div className="lg:col-span-7 space-y-3">
                <h1 className="text-4xl sm:text-5xl lg:text-[58px] font-bold text-[#001752] font-heading leading-[1.08] tracking-tight">
                  Find your course.<br />
                  Build your career.
                </h1>
                <p className="text-sm sm:text-base text-slate-600 font-normal pt-1 max-w-xl">
                  Every program is taught 100% practically on your own dedicated computer terminal. From beginner digital literacy to full-stack engineering and corporate taxation.
                </p>
              </div>

              {/* Right Column: Workstation Note & Quick Buttons */}
              <div className="lg:col-span-5 flex flex-col lg:items-end space-y-4 pt-1 lg:pt-2">
                <p className="text-xs sm:text-sm text-slate-600 lg:text-right max-w-sm">
                  100% individual workstation practice guaranteed. Flexible morning, afternoon, and evening slots.
                </p>

                <div className="flex flex-wrap items-center gap-3">
                  <Link
                    to="/contact#demo"
                    className="inline-flex items-center gap-1.5 bg-[#C41E1E] hover:bg-[#931616] text-white text-xs sm:text-sm font-bold px-5 sm:px-6 py-2.5 sm:py-3 rounded-full transition-all shadow-xs active:scale-95 cursor-pointer"
                  >
                    <span>Book a free demo</span>
                    <ArrowRight size={14} />
                  </Link>

                  <a
                    href={SITE_CONFIG.contact.whatsapp}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 bg-white hover:bg-slate-50 text-slate-800 border border-slate-300 text-xs sm:text-sm font-bold px-5 sm:px-6 py-2.5 sm:py-3 rounded-full transition-all active:scale-95 cursor-pointer"
                  >
                    <span>Chat on WhatsApp</span>
                    <ArrowRight size={14} />
                  </a>
                </div>

                <span className="text-[11px] text-slate-400 font-medium lg:text-right">
                  Opp. Virar East Railway Station Subway · Raut Arcade 202
                </span>
              </div>

            </div>

            {/* Search Input Bar + Stat Badges */}
            <div className="space-y-4">
              <div className="relative max-w-2xl">
                <Search
                  size={18}
                  className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
                />
                <input
                  type="text"
                  placeholder="Search by course name, topic, or software (e.g. Tally, Python, Typing, GST, AWS)..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  aria-label="Search computer courses"
                  className="w-full rounded-full border border-slate-300 bg-white py-3 sm:py-3.5 pl-11 pr-4 text-xs sm:text-sm text-[#001752] shadow-2xs outline-none transition-all placeholder:text-slate-400 focus:border-[#001752] focus:ring-2 focus:ring-[#001752]/10"
                />
                {searchQuery && (
                  <button
                    type="button"
                    onClick={() => setSearchQuery('')}
                    className="absolute right-4 top-1/2 -translate-y-1/2 text-xs font-bold text-slate-400 hover:text-slate-700"
                  >
                    Clear
                  </button>
                )}
              </div>

              {/* Quick Stat Pills */}
              <div className="flex flex-wrap items-center gap-2 text-xs font-semibold">
                <span className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-slate-700">
                  {COURSES.length} Courses
                </span>
                <span className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-slate-700">
                  {careerCount} Career Diplomas
                </span>
                <span className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-slate-700">
                  {shortTermCount} Short-Term Modules
                </span>
                <span className="rounded-full bg-[#FCF4F4] border border-[#F8E4E4] text-[#C41E1E] px-3 py-1 font-bold flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#10b981] animate-pulse" />
                  <span>1 Student : 1 PC Guaranteed</span>
                </span>
              </div>
            </div>

          </div>
        </section>


        {/* ══════════════════════════════════════════════════════════════════════
            SECTION 02 – INTERACTIVE FILTER TABS & COURSE CARDS (Pale Section)
            ══════════════════════════════════════════════════════════════════════ */}
        <section aria-label="Course Grid" className="bg-[#F6F7F9] py-12 sm:py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            
            {/* Filter Bar */}
            <div className="mb-8 space-y-4">
              
              {/* Category Filter Tabs */}
              <div className="flex items-center gap-2 overflow-x-auto pb-2 no-scrollbar">
                {CATEGORY_TABS.map((cat) => {
                  const isSelected = activeCategory === cat.id;
                  return (
                    <button
                      key={cat.id}
                      type="button"
                      onClick={() => handleCategoryChange(cat.id)}
                      className={`text-xs font-bold px-4 py-2 rounded-full whitespace-nowrap transition-all cursor-pointer ${
                        isSelected
                          ? 'bg-[#001752] text-white shadow-2xs'
                          : 'bg-white border border-slate-200 text-slate-700 hover:bg-slate-50'
                      }`}
                    >
                      {cat.label}
                    </button>
                  );
                })}
              </div>

              {/* Sub-Filters & Active Reset Bar */}
              <div className="flex flex-wrap items-center justify-between gap-3 pt-1">
                <div className="flex items-center gap-2">
                  <span className="text-[11px] font-bold text-slate-500 uppercase tracking-wider">
                    Format:
                  </span>
                  <button
                    type="button"
                    onClick={() => handleTypeChange('all')}
                    className={`text-[11px] font-bold px-3 py-1 rounded-full transition-colors cursor-pointer ${
                      typeFilter === 'all'
                        ? 'bg-slate-800 text-white'
                        : 'bg-white border border-slate-200 text-slate-600 hover:bg-slate-50'
                    }`}
                  >
                    All Types
                  </button>
                  <button
                    type="button"
                    onClick={() => handleTypeChange('career')}
                    className={`text-[11px] font-bold px-3 py-1 rounded-full transition-colors cursor-pointer ${
                      typeFilter === 'career'
                        ? 'bg-[#C41E1E] text-white'
                        : 'bg-white border border-slate-200 text-slate-600 hover:bg-slate-50'
                    }`}
                  >
                    Career Tracks
                  </button>
                  <button
                    type="button"
                    onClick={() => handleTypeChange('short-term')}
                    className={`text-[11px] font-bold px-3 py-1 rounded-full transition-colors cursor-pointer ${
                      typeFilter === 'short-term'
                        ? 'bg-[#001752] text-white'
                        : 'bg-white border border-slate-200 text-slate-600 hover:bg-slate-50'
                    }`}
                  >
                    Short-Term Modules
                  </button>
                </div>

                <div className="flex items-center gap-3">
                  <span className="text-xs font-medium text-slate-500">
                    Showing <strong className="text-[#001752] font-bold">{filteredCourses.length}</strong> of {COURSES.length} courses
                  </span>

                  {(activeCategory !== 'all' || typeFilter !== 'all' || searchQuery !== '') && (
                    <button
                      type="button"
                      onClick={handleReset}
                      className="inline-flex items-center gap-1 text-xs font-bold text-[#C41E1E] hover:underline cursor-pointer"
                    >
                      <RotateCcw size={12} />
                      <span>Reset</span>
                    </button>
                  )}
                </div>
              </div>

            </div>

            {/* Courses Grid */}
            {filteredCourses.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredCourses.map((course) => {
                  const tools = getCuratedToolsForCourse(course.id, course.name, course.tools);
                  const courseImage = getCourseImage(course.id);
                  const categoryLabel = getCourseCategoryLabel(course);

                  return (
                    <div
                      key={course.id}
                      className="bg-white rounded-2xl border border-[#E5E7EB] hover:border-[#001752]/40 hover:shadow-xl transition-all duration-300 flex flex-col justify-between overflow-hidden group"
                    >
                      <div>
                        {/* Top Urgency Bar */}
                        <div className="px-4 py-2 bg-slate-50/90 border-b border-slate-100 flex items-center justify-between text-[11px]">
                          <span className="text-slate-600 font-medium truncate">
                            {course.type === 'career' ? 'Next batch starts Monday' : 'Daily rolling batches'}
                          </span>
                          <span className="inline-flex items-center gap-1 text-[10px] font-bold text-[#C41E1E] bg-[#FCF4F4] border border-[#F8E4E4] px-2 py-0.5 rounded-full shrink-0">
                            <span className="w-1.5 h-1.5 rounded-full bg-[#C41E1E] animate-pulse" />
                            <span>Few seats left</span>
                          </span>
                        </div>

                        {/* Image Frame with Floating Badges */}
                        <div className="relative aspect-[16/10] w-full overflow-hidden bg-slate-900">
                          <img
                            src={courseImage}
                            alt={course.name}
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                            loading="lazy"
                            onError={(e) => {
                              (e.target as HTMLImageElement).src = '/images/real-lab-classroom.jpg';
                            }}
                          />
                          
                          {/* Floating Category Badge (Top-Left) */}
                          <div className="absolute top-3 left-3">
                            <span className="bg-[#001752]/90 backdrop-blur-xs text-white text-[10px] font-bold tracking-wider uppercase px-2.5 py-1 rounded-md shadow-xs">
                              {categoryLabel}
                            </span>
                          </div>

                          {/* Floating 1:1 PC Badge (Bottom-Left) */}
                          <div className="absolute bottom-3 left-3">
                            <span className="bg-white/95 backdrop-blur-xs text-[#001752] text-[10px] font-semibold px-2.5 py-1 rounded-full shadow-xs flex items-center gap-1.5">
                              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                              <span>1 Student : 1 PC</span>
                            </span>
                          </div>
                        </div>

                        {/* 5-Tool Logo Strip */}
                        <div className="px-4 py-2 bg-slate-50 border-b border-slate-100 flex items-center justify-between">
                          <span className="text-[10px] font-bold text-slate-500 uppercase tracking-wider">
                            Tools Mastered
                          </span>
                          <div className="flex items-center gap-1.5">
                            {tools.slice(0, 5).map((tool) => (
                              <div
                                key={tool}
                                title={tool}
                                className="w-6 h-6 rounded-md bg-white border border-slate-200 flex items-center justify-center p-0.5 shadow-2xs hover:border-[#001752] transition-colors"
                              >
                                <ToolLogo name={tool} className="w-3.5 h-3.5" />
                              </div>
                            ))}
                          </div>
                        </div>

                        {/* Card Content */}
                        <div className="p-5 space-y-3">
                          <div>
                            <h3 className="text-base sm:text-lg font-bold text-[#001752] group-hover:text-[#C41E1E] transition-colors leading-snug line-clamp-2 min-h-[2.75rem]">
                              <Link to={`/courses/${course.id}`}>
                                {course.name}
                              </Link>
                            </h3>
                          </div>

                          {/* Key Topics Checklist */}
                          <div className="space-y-1.5 pt-2 border-t border-slate-100 text-xs text-slate-700">
                            {course.topics.slice(0, 3).map((topic, idx) => (
                              <div key={idx} className="flex items-center gap-2">
                                <CheckCircle2 size={13} className="text-[#10b981] shrink-0" />
                                <span className="truncate">{topic}</span>
                              </div>
                            ))}
                          </div>

                          {/* Duration & Mode Logistics */}
                          <div className="pt-2 text-[11px] text-slate-500 space-y-1">
                            <div className="flex items-center gap-1.5">
                              <Clock size={12} className="text-slate-400 shrink-0" />
                              <span>{course.durationPlaceholder}</span>
                            </div>
                            <div className="flex items-center gap-1.5">
                              <Monitor size={12} className="text-slate-400 shrink-0" />
                              <span>{course.mode}</span>
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Dual Action Buttons Footer */}
                      <div className="p-4 pt-3 bg-slate-50/70 border-t border-slate-100 flex items-center gap-2">
                        <Link
                          to={`/courses/${course.id}`}
                          className="flex-1 text-center py-2 px-3 rounded-lg border border-slate-300 hover:border-[#001752] hover:bg-white text-xs font-bold text-slate-800 transition-all cursor-pointer"
                        >
                          View Details
                        </Link>

                        <Link
                          to={`/contact?course=${course.id}#enquiry`}
                          className="flex-1 text-center py-2 px-3 rounded-lg bg-[#C41E1E] hover:bg-[#931616] text-white text-xs font-bold transition-all shadow-xs inline-flex items-center justify-center gap-1 active:scale-95 cursor-pointer"
                        >
                          <span>Enquire Now</span>
                          <ArrowRight size={12} />
                        </Link>
                      </div>

                    </div>
                  );
                })}
              </div>
            ) : (
              <div className="mx-auto my-12 max-w-md rounded-2xl border border-slate-200 bg-white p-10 text-center shadow-xs">
                <p className="mb-2 text-base font-bold text-[#001752]">
                  No courses match your filter criteria
                </p>
                <p className="mb-4 text-xs text-slate-500 leading-relaxed">
                  Try searching with different keywords or reset your filters to see all 24 available courses.
                </p>
                <button
                  type="button"
                  onClick={handleReset}
                  className="rounded-full bg-[#001752] hover:bg-[#16345c] px-5 py-2.5 text-xs font-bold text-white transition-colors cursor-pointer"
                >
                  Reset All Filters
                </button>
              </div>
            )}

          </div>
        </section>


        {/* ══════════════════════════════════════════════════════════════════════
            SECTION 03 – ADMISSION CONCESSION HIGHLIGHT (White Section)
            ══════════════════════════════════════════════════════════════════════ */}
        <section aria-label="Course Offers" className="bg-white py-14 sm:py-20 border-b border-slate-200/70">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
              
              {/* Highlight 1: 50% Concession */}
              <div className="bg-[#F6F7F9] rounded-2xl sm:rounded-3xl p-6 sm:p-8 border border-slate-200/80 flex flex-col justify-between space-y-4">
                <div className="space-y-2">
                  <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#FCF4F4] border border-[#F8E4E4] text-[#C41E1E] text-xs font-bold uppercase tracking-wider">
                    <Sparkles size={12} />
                    <span>50% Concession Pass</span>
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold text-[#001752] font-heading">
                    Flat 50% Concession on Career Diplomas
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                    Special local student concession for college freshers, women, and early batch registrations in Vasai-Virar. Get job-ready without high Mumbai course fees.
                  </p>
                </div>

                <div className="pt-2">
                  <Link
                    to="/contact#enquiry"
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-[#C41E1E] hover:underline"
                  >
                    <span>Claim 50% Concession</span>
                    <ArrowRight size={13} />
                  </Link>
                </div>
              </div>

              {/* Highlight 2: Free Basic Computer */}
              <div className="bg-[#F6F7F9] rounded-2xl sm:rounded-3xl p-6 sm:p-8 border border-slate-200/80 flex flex-col justify-between space-y-4">
                <div className="space-y-2">
                  <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-[#10b981] text-xs font-bold uppercase tracking-wider">
                    <CheckCircle2 size={12} />
                    <span>Free Course Bonus</span>
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold text-[#001752] font-heading">
                    Free Basic Computer Course Included
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                    Enroll in any career-track diploma and get the complete foundational Basic Computer module (Windows 11, typing, internet safety) at zero extra charge.
                  </p>
                </div>

                <div className="pt-2">
                  <Link
                    to="/courses/basic-computer"
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-[#001752] hover:text-[#C41E1E] transition-colors"
                  >
                    <span>View Basic Course Syllabus</span>
                    <ArrowRight size={13} />
                  </Link>
                </div>
              </div>

            </div>
          </div>
        </section>


        {/* ══════════════════════════════════════════════════════════════════════
            SECTION 04 – FEATURED WALK-IN CTA (Contained Navy Banner on White)
            ══════════════════════════════════════════════════════════════════════ */}
        <section aria-label="Visit RACE" className="bg-white py-12 sm:py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-[#001752] text-white rounded-3xl p-6 sm:p-10 lg:p-14 shadow-2xl border border-[#00113E] relative overflow-hidden">
              {/* Subtle Red/Navy Brand Gradient Accents */}
              <div className="absolute -right-20 -top-20 w-80 h-80 rounded-full bg-[#C41E1E]/20 blur-[100px] pointer-events-none" />
              <div className="absolute -left-20 -bottom-20 w-80 h-80 rounded-full bg-[#263A6C]/40 blur-[100px] pointer-events-none" />

              <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
                
                {/* Left Column: Heading, Subtitle & Buttons */}
                <div className="lg:col-span-7 space-y-4">
                  <span className="text-[#DF8383] text-xs font-bold tracking-wider uppercase block">
                    FREE PRACTICAL COUNSELING
                  </span>

                  <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-bold text-white font-heading leading-tight tracking-tight">
                    Not sure which course is right for you?
                  </h2>

                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-normal max-w-lg">
                    Speak directly with our senior instructors. We assess your background, schedule, and career goals to recommend the ideal learning track.
                  </p>

                  {/* Direct Helplines Pills */}
                  <div className="pt-2">
                    <span className="text-slate-400 text-[11px] font-semibold uppercase tracking-wider block mb-2">
                      Direct Institute Helplines:
                    </span>
                    <div className="flex flex-wrap items-center gap-2">
                      <a
                        href="tel:8793314239"
                        className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/10 hover:bg-white/20 border border-white/15 text-white text-xs font-semibold transition-colors"
                      >
                        <Phone size={12} className="text-[#DF8383]" />
                        <span>8793314239</span>
                      </a>
                      <a
                        href="tel:8482881614"
                        className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/10 hover:bg-white/20 border border-white/15 text-white text-xs font-semibold transition-colors"
                      >
                        <Phone size={12} className="text-[#DF8383]" />
                        <span>8482881614</span>
                      </a>
                      <a
                        href={SITE_CONFIG.contact.whatsapp}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-emerald-500/20 hover:bg-emerald-500/30 border border-emerald-400/30 text-emerald-300 text-xs font-semibold transition-colors"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                        <span>WhatsApp: 9794323963</span>
                      </a>
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex flex-wrap items-center gap-3 pt-3">
                    <Link
                      to="/contact#demo"
                      className="inline-flex items-center gap-1.5 bg-[#C41E1E] hover:bg-[#931616] text-white text-xs sm:text-sm font-bold px-6 py-3 rounded-full transition-all shadow-md active:scale-95 cursor-pointer"
                    >
                      <span>Book a free demo</span>
                      <ArrowRight size={14} />
                    </Link>

                    <a
                      href={SITE_CONFIG.address.googleMapsDirectLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 bg-white/10 hover:bg-white/20 text-white border border-white/20 text-xs sm:text-sm font-bold px-6 py-3 rounded-full transition-all active:scale-95 cursor-pointer"
                    >
                      <MapPin size={14} className="text-[#DF8383]" />
                      <span>Open in Google Maps</span>
                    </a>
                  </div>
                </div>

                {/* Right Column: Crisp White Card inside Navy Container */}
                <div className="lg:col-span-5 flex justify-center lg:justify-end">
                  <div className="w-full max-w-sm bg-white text-[#001752] rounded-2xl sm:rounded-3xl p-6 sm:p-8 shadow-xl space-y-4">
                    
                    <div className="flex items-center justify-between">
                      <span className="text-[10px] font-bold text-slate-500 uppercase tracking-wider">
                        ADMISSIONS &amp; DEMOS
                      </span>
                      <span className="inline-flex items-center gap-1.5 text-[10px] font-bold text-[#10b981] bg-emerald-50 px-2.5 py-1 rounded-full border border-emerald-100">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#10b981] animate-pulse" />
                        <span>Open Mon–Sat</span>
                      </span>
                    </div>

                    <div>
                      <h3 className="text-xl sm:text-2xl font-bold font-heading text-[#001752] leading-tight">
                        Visit Our Virar East Lab
                      </h3>
                      <p className="text-xs text-slate-600 leading-relaxed font-normal mt-2">
                        Opposite Platform 1/2 subway exit stairs at Raut Arcade 202. Take a seat and test-drive our workstations.
                      </p>
                    </div>

                    <div className="pt-3 border-t border-slate-100 space-y-2 text-xs text-slate-600">
                      <div className="flex items-center gap-2">
                        <MapPin size={13} className="text-[#C41E1E] shrink-0" />
                        <span className="font-medium text-slate-800">202, Raut Arcade, Station Road East</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Clock size={13} className="text-[#001752] shrink-0" />
                        <span>9:00 AM – 7:00 PM (Daily Batches)</span>
                      </div>
                    </div>

                    <div className="pt-2">
                      <div className="p-3 rounded-xl bg-slate-50 border border-slate-200 flex items-center justify-between">
                        <div>
                          <span className="text-[10px] text-slate-500 uppercase font-bold block">1:1 Workstation Demo</span>
                          <strong className="text-xs font-bold text-[#001752]">Free 30-Min Practical Session</strong>
                        </div>
                        <span className="text-xs font-bold text-[#C41E1E]">FREE</span>
                      </div>
                    </div>

                  </div>
                </div>

              </div>
            </div>
          </div>
        </section>

      </div>
    </>
  );
}
