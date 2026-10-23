import { useState, useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Search, RotateCcw, Briefcase, Store, Sparkles, Baby, BookOpen } from 'lucide-react';
import SEO from '../components/SEO';
import CourseCard from '../components/CourseCard';
import CourseDrawer from '../components/CourseDrawer';
import RailwayTrackDivider from '../components/RailwayTrackDivider';
import { COURSES, type Course, type CourseType, type CourseGoal } from '../data/config';

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

  return (
    <>
      <SEO
        title="Courses & Programs | Race Reddys Virar East"
        description="Filter all 23 practical computer courses in Virar East: TallyPrime with GST, Typing, Web Development, Data Science, AI & ML, MS Office, Graphic Design. 50% discount available."
        canonical="/courses"
      />

      {/* Header Banner */}
      <section className="bg-[#FAF7EE] border-b border-[#E8E2D5] py-10 sm:py-14">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="station-board-yellow inline-block mb-3 text-xs font-black">
              COURSE CATALOGUE • सर्व २३ कोर्सेस
            </div>
            
            <h1 className="text-3xl sm:text-4xl font-extrabold text-[#071B3A] font-serif-heading mb-3">
              Explore All 23 Practical Computer &amp; IT Courses
            </h1>
            
            <p className="text-sm sm:text-base text-[#4A5568] leading-relaxed">
              Every course is taught on real computers with step-by-step guidance right opposite Virar East station. Filter by your career objective or learning goal below.
            </p>

            {/* Quick Search Box */}
            <div className="relative mt-6 max-w-lg">
              <Search size={18} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" />
              <input
                type="text"
                placeholder="Search by course name or topic (e.g. Tally, Python, Typing, GST)..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                aria-label="Search computer courses"
                className="w-full pl-10 pr-4 py-2.5 bg-white border border-[#E8E2D5] rounded-xl text-sm text-[#071B3A] shadow-xs focus:outline-hidden focus:border-[#C59B27] focus:ring-2 focus:ring-[#C59B27]/20"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Main Course Listing & Interactive Filters */}
      <section className="py-10 sm:py-14 bg-[#FBF9F5] min-h-[60vh]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Dual Filter Controls Bar */}
          <div className="bg-white p-4 sm:p-5 rounded-2xl border border-[#E8E2D5] shadow-xs mb-8 space-y-4">
            
            {/* Filter 1: By Course Type (Short-Term vs Career) */}
            <div>
              <span className="text-xs font-black uppercase tracking-wider text-[#6B5A24] block mb-2">
                1. Filter by Course Type:
              </span>
              <div className="flex flex-wrap items-center gap-2" role="tablist" aria-label="Course type filter">
                <button
                  type="button"
                  onClick={() => handleTypeChange('all')}
                  className={`px-3.5 py-1.5 rounded-lg text-xs font-bold transition-colors ${
                    activeType === 'all'
                      ? 'bg-[#071B3A] text-white'
                      : 'bg-[#F3EFE6] text-[#334155] hover:bg-[#E8E2D5]'
                  }`}
                >
                  All Courses ({COURSES.length})
                </button>
                <button
                  type="button"
                  onClick={() => handleTypeChange('short-term')}
                  className={`px-3.5 py-1.5 rounded-lg text-xs font-bold transition-colors ${
                    activeType === 'short-term'
                      ? 'bg-[#071B3A] text-white'
                      : 'bg-[#F3EFE6] text-[#334155] hover:bg-[#E8E2D5]'
                  }`}
                >
                  Short-Term Skill Modules ({shortTermCount})
                </button>
                <button
                  type="button"
                  onClick={() => handleTypeChange('career')}
                  className={`px-3.5 py-1.5 rounded-lg text-xs font-bold transition-colors ${
                    activeType === 'career'
                      ? 'bg-[#C59B27] text-[#071B3A]'
                      : 'bg-[#F3EFE6] text-[#334155] hover:bg-[#E8E2D5]'
                  }`}
                >
                  Career-Objective Diplomas ({careerCount})
                </button>
              </div>
            </div>

            {/* Filter 2: By Learner Goal */}
            <div className="pt-3 border-t border-[#E8E2D5]">
              <span className="text-xs font-black uppercase tracking-wider text-[#6B5A24] block mb-2">
                2. Filter by Your Learning Goal:
              </span>
              <div className="flex flex-wrap items-center gap-2">
                {[
                  { id: 'all', label: 'All Goals', icon: BookOpen },
                  { id: 'job', label: 'Job Seekers & Freshers', icon: Briefcase },
                  { id: 'business', label: 'Business & Shopkeepers', icon: Store },
                  { id: 'skill', label: 'Skill Upgrade', icon: Sparkles },
                  { id: 'kids', label: 'Kids & Beginners', icon: Baby },
                ].map((item) => {
                  const Icon = item.icon;
                  const isActive = activeGoal === item.id;
                  return (
                    <button
                      key={item.id}
                      type="button"
                      onClick={() => handleGoalChange(item.id as CourseGoal | 'all')}
                      className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-bold transition-colors ${
                        isActive
                          ? 'bg-[#C0392B] text-white'
                          : 'bg-[#F3EFE6] text-[#334155] hover:bg-[#E8E2D5]'
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
                    className="inline-flex items-center gap-1 px-3 py-1.5 rounded-lg text-xs font-bold text-[#C0392B] hover:bg-[#FCECEB] transition-colors ml-auto"
                  >
                    <RotateCcw size={13} />
                    <span>Reset Filters</span>
                  </button>
                )}
              </div>
            </div>

          </div>

          {/* Results Counter */}
          <div className="flex items-center justify-between mb-6">
            <span className="text-xs font-bold text-gray-500">
              Showing <strong className="text-[#071B3A]">{filteredCourses.length}</strong> of {COURSES.length} courses
            </span>
            <span className="text-xs text-[#C59B27] font-semibold hidden sm:inline">
              ★ All courses include 100% individual workstation training
            </span>
          </div>

          {/* Course Cards Grid */}
          {filteredCourses.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredCourses.map((course) => (
                <CourseCard
                  key={course.id}
                  course={course}
                  onSelect={(c) => setSelectedCourse(c)}
                />
              ))}
            </div>
          ) : (
            <div className="bg-white rounded-2xl border border-[#E8E2D5] p-10 text-center max-w-md mx-auto my-12">
              <p className="text-base font-bold text-[#071B3A] mb-2 font-serif-heading">
                No courses match your filter criteria
              </p>
              <p className="text-xs text-[#4A5568] mb-4">
                Try searching with different keywords or reset the filters to see all available programs.
              </p>
              <button
                type="button"
                onClick={handleReset}
                className="bg-[#071B3A] text-white text-xs font-bold px-4 py-2 rounded-lg"
              >
                Reset All Filters
              </button>
            </div>
          )}

        </div>
      </section>

      {/* Railway Track Motif */}
      <RailwayTrackDivider label="VIRAR EAST STATION • DIRECT PLATFORM ACCESS" />

      {/* Slide-out Course Detail Drawer */}
      <CourseDrawer
        course={selectedCourse}
        onClose={() => setSelectedCourse(null)}
      />
    </>
  );
}
