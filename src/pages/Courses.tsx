import { useState, useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';
import {
  Search,
  RotateCcw,
  Briefcase,
  Store,
  Sparkles,
  Baby,
  BookOpen,
  MessageSquare,
  Phone,
} from 'lucide-react';
import SEO from '../components/SEO';
import PageHero from '../components/PageHero';
import CourseCard from '../components/CourseCard';
import CourseDrawer from '../components/CourseDrawer';
import CtaBand from '../components/CtaBand';
import { COURSES, SITE_CONFIG, type Course, type CourseType, type CourseGoal } from '../data/config';

export default function Courses() {
  const [searchParams, setSearchParams] = useSearchParams();

  const typeParam = searchParams.get('type') as CourseType | null;
  const goalParam = searchParams.get('goal') as CourseGoal | null;

  const [activeType, setActiveType] = useState<CourseType | 'all'>(typeParam || 'all');
  const [activeGoal, setActiveGoal] = useState<CourseGoal | 'all'>(goalParam || 'all');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCourse, setSelectedCourse] = useState<Course | null>(null);

  const handleTypeChange = (type: CourseType | 'all') => {
    setActiveType(type);
    if (type === 'all') {
      searchParams.delete('type');
    } else {
      searchParams.set('type', type);
    }
    setSearchParams(searchParams, { replace: true });
  };

  const handleGoalChange = (goal: CourseGoal | 'all') => {
    setActiveGoal(goal);
    if (goal === 'all') {
      searchParams.delete('goal');
    } else {
      searchParams.set('goal', goal);
    }
    setSearchParams(searchParams, { replace: true });
  };

  const handleReset = () => {
    setActiveType('all');
    setActiveGoal('all');
    setSearchQuery('');
    setSearchParams({}, { replace: true });
  };

  const filteredCourses = useMemo(() => {
    return COURSES.filter((course) => {
      const matchType = activeType === 'all' || course.type === activeType;
      const matchGoal = activeGoal === 'all' || course.goals.includes(activeGoal);
      const query = searchQuery.toLowerCase().trim();
      const matchSearch =
        query === '' ||
        course.name.toLowerCase().includes(query) ||
        course.shortDesc.toLowerCase().includes(query) ||
        course.topics.some((topic) => topic.toLowerCase().includes(query));

      return matchType && matchGoal && matchSearch;
    });
  }, [activeType, activeGoal, searchQuery]);

  const shortTermCount = COURSES.filter((c) => c.type === 'short-term').length;
  const careerCount = COURSES.filter((c) => c.type === 'career').length;

  const goalFilters = [
    { id: 'all', label: 'All Goals', icon: BookOpen },
    { id: 'job', label: 'Job Seekers & Freshers', icon: Briefcase },
    { id: 'business', label: 'Business & Shopkeepers', icon: Store },
    { id: 'skill', label: 'Skill Upgrade', icon: Sparkles },
    { id: 'kids', label: 'Kids & Beginners', icon: Baby },
  ];

  return (
    <>
      <SEO
        title="Courses & Programs | Race Reddys Virar East"
        description="Filter all 23 practical computer courses in Virar East: TallyPrime with GST, Typing, Web Development, Data Science, AI & ML, MS Office, Graphic Design. 50% discount available."
        canonical="/courses"
      />

      <PageHero
        eyebrow="Course Catalogue · सर्व २३ कोर्सेस"
        title="Explore All 23 Practical Computer & IT Courses"
        description="Every course is taught on real computers with step-by-step guidance right opposite Virar East station. Filter by your career objective or learning goal below."
        aside={
          <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-[#0B1528] via-[#080E1C] to-[#040812] p-6 text-white shadow-2xl sm:p-7">
            <div className="absolute -right-12 -top-12 h-48 w-48 rounded-full bg-[#0084FF]/20 blur-[80px] pointer-events-none" />
            <div className="absolute -left-12 -bottom-12 h-48 w-48 rounded-full bg-[#F5BE4F]/10 blur-[80px] pointer-events-none" />

            <div className="relative z-10">
              <span className="inline-flex items-center gap-1.5 rounded-full bg-[#F5BE4F] px-3 py-1 text-[10px] font-black uppercase tracking-wider text-[#111827]">
                <Sparkles size={11} />
                Need help choosing?
              </span>

              <h2 className="mt-4 text-2xl font-bold tracking-tight">
                Find the right course for your goal
              </h2>
              <p className="mt-2 text-xs leading-relaxed text-slate-300 sm:text-sm">
                Tell us whether you are preparing for a job, running a shop, or starting from
                scratch. Our counsellor will suggest a course and batch that fits your routine.
              </p>

              <div className="mt-5 grid grid-cols-2 gap-2.5">
                <a
                  href={`${SITE_CONFIG.contact.whatsapp}?text=${encodeURIComponent(
                    'Hello! I need help choosing the right computer course at Race Reddys Virar East.'
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-1.5 rounded-full bg-[#25D366] px-4 py-2.5 text-xs font-bold text-white transition-all hover:bg-[#20BA5A] active:scale-95"
                >
                  <MessageSquare size={14} />
                  <span>WhatsApp</span>
                </a>
                <a
                  href={`tel:${SITE_CONFIG.contact.phone}`}
                  className="inline-flex items-center justify-center gap-1.5 rounded-full border border-white/20 bg-white/5 px-4 py-2.5 text-xs font-bold text-white transition-colors hover:bg-white/10"
                >
                  <Phone size={13} className="text-[#F5BE4F]" />
                  <span>Call</span>
                </a>
              </div>

              <div className="mt-4 border-t border-white/10 pt-3 text-[10px] font-medium text-slate-400">
                Opp. Virar East Station Subway · Mon–Sat 9 AM–7 PM
              </div>
            </div>
          </div>
        }
      >
        <div className="flex flex-col gap-4">
          <div className="relative max-w-lg">
            <Search
              size={18}
              className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
            />
            <input
              type="text"
              placeholder="Search by course name or topic (e.g. Tally, Python, Typing, GST)..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              aria-label="Search computer courses"
              className="w-full rounded-full border border-slate-200 bg-white py-3 pl-11 pr-4 text-sm text-[#111827] shadow-sm outline-none transition-all placeholder:text-slate-400 focus:border-[#0084FF] focus:ring-2 focus:ring-[#0084FF]/20"
            />
          </div>

          <div className="flex flex-wrap items-center gap-2 text-[11px] font-semibold">
            <span className="rounded-full border border-slate-200 bg-white px-3 py-1 text-slate-600">
              {COURSES.length} Courses
            </span>
            <span className="rounded-full border border-slate-200 bg-white px-3 py-1 text-slate-600">
              {shortTermCount} Short-Term
            </span>
            <span className="rounded-full border border-slate-200 bg-white px-3 py-1 text-slate-600">
              {careerCount} Career Tracks
            </span>
            <span className="rounded-full bg-[#F5BE4F] px-3 py-1 text-[#111827]">
              1 Student : 1 PC
            </span>
          </div>
        </div>
      </PageHero>

      <section className="bg-[#F8F9FA] py-12 sm:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Filters */}
          <div className="mb-8 space-y-4 rounded-3xl border border-slate-200 bg-white p-4 shadow-sm sm:p-5">
            <div>
              <span className="mb-2 block text-[11px] font-black uppercase tracking-wider text-[#111827]">
                1. Filter by Course Type
              </span>
              <div
                className="flex flex-wrap items-center gap-2"
                role="group"
                aria-label="Course type filter"
              >
                <button
                  type="button"
                  onClick={() => handleTypeChange('all')}
                  aria-pressed={activeType === 'all'}
                  className={`rounded-full px-3.5 py-1.5 text-xs font-bold transition-colors ${
                    activeType === 'all'
                      ? 'bg-[#111827] text-white'
                      : 'bg-[#F1F3FF] text-[#334155] hover:bg-slate-200'
                  }`}
                >
                  All Courses ({COURSES.length})
                </button>
                <button
                  type="button"
                  onClick={() => handleTypeChange('short-term')}
                  aria-pressed={activeType === 'short-term'}
                  className={`rounded-full px-3.5 py-1.5 text-xs font-bold transition-colors ${
                    activeType === 'short-term'
                      ? 'bg-[#111827] text-white'
                      : 'bg-[#F1F3FF] text-[#334155] hover:bg-slate-200'
                  }`}
                >
                  Short-Term Skill Modules ({shortTermCount})
                </button>
                <button
                  type="button"
                  onClick={() => handleTypeChange('career')}
                  aria-pressed={activeType === 'career'}
                  className={`rounded-full px-3.5 py-1.5 text-xs font-bold transition-colors ${
                    activeType === 'career'
                      ? 'bg-[#111827] text-white'
                      : 'bg-[#F1F3FF] text-[#334155] hover:bg-slate-200'
                  }`}
                >
                  Career-Objective Diplomas ({careerCount})
                </button>
              </div>
            </div>

            <div className="border-t border-slate-100 pt-4">
              <span className="mb-2 block text-[11px] font-black uppercase tracking-wider text-[#111827]">
                2. Filter by Your Learning Goal
              </span>
              <div className="flex flex-wrap items-center gap-2">
                {goalFilters.map((item) => {
                  const Icon = item.icon;
                  const isActive = activeGoal === item.id;
                  return (
                    <button
                      key={item.id}
                      type="button"
                      onClick={() => handleGoalChange(item.id as CourseGoal | 'all')}
                      aria-pressed={isActive}
                      className={`inline-flex items-center gap-1.5 rounded-full px-3 py-1.5 text-xs font-bold transition-colors ${
                        isActive
                          ? 'bg-[#0084FF] text-white'
                          : 'bg-[#F1F3FF] text-[#334155] hover:bg-slate-200'
                      }`}
                    >
                      <Icon size={13} />
                      <span>{item.label}</span>
                    </button>
                  );
                })}

                {(activeType !== 'all' || activeGoal !== 'all' || searchQuery !== '') && (
                  <button
                    type="button"
                    onClick={handleReset}
                    className="ml-auto inline-flex items-center gap-1 rounded-full px-3 py-1.5 text-xs font-bold text-rose-600 transition-colors hover:bg-rose-50"
                  >
                    <RotateCcw size={13} />
                    <span>Reset Filters</span>
                  </button>
                )}
              </div>
            </div>
          </div>

          {/* Results */}
          <div className="mb-5 flex items-center justify-between">
            <span className="text-xs font-bold text-slate-500">
              Showing <strong className="text-[#111827]">{filteredCourses.length}</strong> of{' '}
              {COURSES.length} courses
            </span>
            <span className="hidden text-xs font-semibold text-[#0084FF] sm:inline">
              ★ All courses include 100% individual workstation training
            </span>
          </div>

          {filteredCourses.length > 0 ? (
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {filteredCourses.map((course) => (
                <CourseCard
                  key={course.id}
                  course={course}
                  onSelect={(c) => setSelectedCourse(c)}
                />
              ))}
            </div>
          ) : (
            <div className="mx-auto my-12 max-w-md rounded-2xl border border-slate-200 bg-white p-10 text-center shadow-sm">
              <p className="mb-2 text-base font-bold text-[#111827]">
                No courses match your filter criteria
              </p>
              <p className="mb-4 text-xs text-slate-500">
                Try searching with different keywords or reset the filters to see all available
                programs.
              </p>
              <button
                type="button"
                onClick={handleReset}
                className="rounded-full bg-[#111827] px-5 py-2.5 text-xs font-bold text-white transition-colors hover:bg-[#0084FF]"
              >
                Reset All Filters
              </button>
            </div>
          )}
        </div>
      </section>

      <CtaBand
        title="Still deciding which course to start with?"
        description="Talk to our counsellor about your background, available time, and career goal. We will shortlist the right course and batch for you."
      />

      <CourseDrawer course={selectedCourse} onClose={() => setSelectedCourse(null)} />
    </>
  );
}
