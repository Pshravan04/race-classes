import { useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import { Search, RotateCcw } from 'lucide-react'
import SEO from '../components/SEO'
import CourseCard from '../components/CourseCard'
import { COURSES, COURSE_CATEGORIES, type CourseCategory } from '../data/config'

export default function Courses() {
  const [searchParams, setSearchParams] = useSearchParams()
  const categoryParam = searchParams.get('category') as CourseCategory | null
  const initialCat = categoryParam && COURSE_CATEGORIES[categoryParam] ? categoryParam : 'all'

  const [activeCategory, setActiveCategory] = useState<CourseCategory | 'all'>(initialCat)
  const [searchQuery, setSearchQuery] = useState('')

  const handleCategoryChange = (cat: CourseCategory | 'all') => {
    setActiveCategory(cat)
    if (cat === 'all') {
      searchParams.delete('category')
    } else {
      searchParams.set('category', cat)
    }
    setSearchParams(searchParams, { replace: true })
  }

  const handleReset = () => {
    setActiveCategory('all')
    setSearchQuery('')
    searchParams.delete('category')
    setSearchParams(searchParams, { replace: true })
  }

  const filteredCourses = COURSES.filter((course) => {
    const matchCat = activeCategory === 'all' || course.category === activeCategory
    const matchSearch =
      searchQuery.trim() === '' ||
      course.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      course.shortDesc.toLowerCase().includes(searchQuery.toLowerCase()) ||
      course.highlights.some((h) => h.toLowerCase().includes(searchQuery.toLowerCase()))
    return matchCat && matchSearch
  })

  return (
    <>
      <SEO
        title="Courses & Programs"
        description="Explore computer courses at Race Reddys Advanced Computer Education, Virar East. Software Development, Tally Prime GST, Graphic Design, AI Prompt Engineering, Basic Computer, Cyber Security, and more."
        canonical="/courses"
      />

      {/* Header Banner */}
      <section className="bg-slate-50 border-b border-slate-200 py-12 md:py-16">
        <div className="container-rr">
          <div className="max-w-2xl">
            <span className="section-eyebrow">COURSE CATALOGUE</span>
            <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mb-3">
              Browse All Computer & IT Courses
            </h1>
            <p className="text-base text-slate-600 leading-relaxed">
              From foundational computer literacy to advanced software engineering, accounting, and creative disciplines. All courses include dedicated practical lab training.
            </p>

            {/* Search Input Box */}
            <div className="relative mt-6 max-w-lg">
              <Search size={18} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none" />
              <input
                type="text"
                placeholder="Search courses by name or skill (e.g. Tally, Python, Excel)..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                aria-label="Search all courses"
                className="w-full pl-10 pr-4 py-3 bg-white border border-slate-200 rounded-xl text-sm text-slate-900 shadow-xs focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Main Content: Categories & Courses Grid */}
      <section className="bg-white section-py">
        <div className="container-rr">

          {/* Functional Category Filter Pills */}
          <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-8 scrollbar-none" role="tablist" aria-label="Course categories filter">
            <button
              type="button"
              role="tab"
              aria-selected={activeCategory === 'all'}
              onClick={() => handleCategoryChange('all')}
              className={`filter-pill ${activeCategory === 'all' ? 'active' : ''}`}
            >
              All Courses ({COURSES.length})
            </button>
            {Object.entries(COURSE_CATEGORIES).map(([catKey, catVal]) => {
              const count = COURSES.filter((c) => c.category === catKey).length
              return (
                <button
                  key={catKey}
                  type="button"
                  role="tab"
                  aria-selected={activeCategory === catKey}
                  onClick={() => handleCategoryChange(catKey as CourseCategory)}
                  className={`filter-pill ${activeCategory === catKey ? 'active' : ''}`}
                >
                  {catVal.label} ({count})
                </button>
              )
            })}
          </div>

          {/* Filter Status Text */}
          <div className="flex items-center justify-between gap-4 mb-6 text-xs text-slate-500">
            <p>
              Showing <strong className="text-slate-800">{filteredCourses.length}</strong> of{' '}
              <strong className="text-slate-800">{COURSES.length}</strong> courses
              {activeCategory !== 'all' && ` in ${COURSE_CATEGORIES[activeCategory].label}`}
              {searchQuery && ` matching "${searchQuery}"`}
            </p>

            {(activeCategory !== 'all' || searchQuery) && (
              <button
                type="button"
                onClick={handleReset}
                className="inline-flex items-center gap-1 text-blue-600 hover:text-blue-700 font-semibold"
              >
                <RotateCcw size={12} />
                <span>Reset all filters</span>
              </button>
            )}
          </div>

          {/* Courses Grid */}
          {filteredCourses.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {filteredCourses.map((course) => (
                <CourseCard key={course.id} course={course} />
              ))}
            </div>
          ) : (
            <div className="card-rr p-12 text-center bg-slate-50 border border-slate-200 max-w-md mx-auto my-8">
              <div className="w-12 h-12 rounded-full bg-slate-200 flex items-center justify-center mx-auto mb-3 text-slate-500">
                <Search size={22} />
              </div>
              <h3 className="text-base font-bold text-slate-800">
                No matching courses found
              </h3>
              <p className="text-xs text-slate-500 mt-1 mb-5">
                We could not find any courses matching your current filter criteria.
              </p>
              <button
                type="button"
                onClick={handleReset}
                className="btn-primary text-xs py-2 px-4"
              >
                Reset Filters
              </button>
            </div>
          )}

        </div>
      </section>
    </>
  )
}
