import { useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import { Search } from 'lucide-react'
import SEO from '../components/SEO'
import CourseCard from '../components/CourseCard'
import { useReveal } from '../hooks/useReveal'
import { COURSES, COURSE_CATEGORIES, type CourseCategory } from '../data/config'

function Reveal({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
  const { ref, visible } = useReveal()
  return (
    <div ref={ref} className={`reveal ${visible ? 'visible' : ''}`} style={{ transitionDelay: `${delay}ms` }}>
      {children}
    </div>
  )
}

export default function Courses() {
  const [searchParams, setSearchParams] = useSearchParams()
  const initialCat = (searchParams.get('cat') as CourseCategory) || 'all'
  const [activeCategory, setActiveCategory] = useState<CourseCategory | 'all'>(initialCat)
  const [searchQuery, setSearchQuery] = useState('')

  const handleCatChange = (cat: CourseCategory | 'all') => {
    setActiveCategory(cat)
    if (cat === 'all') {
      searchParams.delete('cat')
    } else {
      searchParams.set('cat', cat)
    }
    setSearchParams(searchParams, { replace: true })
  }

  const filteredCourses = COURSES.filter((c) => {
    const matchCat = activeCategory === 'all' || c.category === activeCategory
    const matchSearch = searchQuery.trim() === '' ||
      c.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      c.shortDesc.toLowerCase().includes(searchQuery.toLowerCase()) ||
      c.whoFor.toLowerCase().includes(searchQuery.toLowerCase())
    return matchCat && matchSearch
  })

  const groupedByCategory = Object.entries(COURSE_CATEGORIES).reduce((acc, [key]) => {
    const cat = key as CourseCategory
    const courses = filteredCourses.filter((c) => c.category === cat)
    if (courses.length) acc[cat] = courses
    return acc
  }, {} as Record<CourseCategory, typeof COURSES>)

  const showGrouped = activeCategory === 'all' && searchQuery.trim() === ''

  return (
    <>
      <SEO
        title="All Courses"
        description="Browse all computer and IT courses at Race Reddys Advanced Computer Education, Virar East — from Basic Computer to Software Development, AI, Tally with GST, Digital Marketing, Graphic Design, and Cyber Security."
        canonical="/courses"
      />

      {/* Page hero */}
      <section style={{ background: 'var(--navy)', padding: 'clamp(2.5rem, 6vw, 4.5rem) 0' }}>
        <div className="container-rr">
          <span className="section-chip" style={{ background: 'rgba(217,174,82,0.12)', color: 'var(--gold)', borderColor: 'rgba(217,174,82,0.3)' }}>
            Course Catalogue
          </span>
          <h1 style={{ color: '#fff', fontSize: 'clamp(2rem, 5vw, 3rem)', marginTop: '0.75rem', marginBottom: '0.75rem' }}>
            Find Your Course
          </h1>
          <p style={{ color: 'rgba(255,255,255,0.75)', maxWidth: 500, lineHeight: 1.7 }}>
            {COURSES.length}+ courses across computer fundamentals, design, development, AI, accounting, and more.
          </p>

          {/* Search */}
          <div className="search-wrap" style={{ maxWidth: 480, marginTop: '1.5rem' }}>
            <Search size={16} className="search-icon" aria-hidden />
            <input
              type="search"
              className="search-input"
              placeholder="Search by course name or skill…"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              aria-label="Search all courses"
              style={{ background: 'rgba(255,255,255,0.1)', border: '1.5px solid rgba(255,255,255,0.25)', color: '#fff' }}
            />
          </div>
        </div>
      </section>

      <section style={{ background: 'var(--off-white)' }} className="section-py">
        <div className="container-rr">
          {/* Category tabs */}
          <Reveal>
            <div
              style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '2.5rem' }}
              role="tablist"
              aria-label="Filter courses by category"
            >
              <button
                className={`cat-tab ${activeCategory === 'all' ? 'active' : ''}`}
                onClick={() => handleCatChange('all')}
                role="tab"
                aria-selected={activeCategory === 'all'}
              >
                All Courses
              </button>
              {Object.entries(COURSE_CATEGORIES).map(([key, val]) => (
                <button
                  key={key}
                  className={`cat-tab ${activeCategory === key ? 'active' : ''}`}
                  onClick={() => handleCatChange(key as CourseCategory)}
                  role="tab"
                  aria-selected={activeCategory === key}
                >
                  {val.emoji} {val.label}
                </button>
              ))}
            </div>
          </Reveal>

          {filteredCourses.length === 0 ? (
            <div style={{ textAlign: 'center', padding: '4rem', color: 'var(--muted)' }}>
              <Search size={48} style={{ margin: '0 auto 1rem', opacity: 0.3 }} />
              <p style={{ fontSize: '1.125rem', fontWeight: 600 }}>No courses found</p>
              <p style={{ marginTop: '0.5rem' }}>Try adjusting your search or selecting a different category.</p>
            </div>
          ) : showGrouped ? (
            // Grouped by category view
            Object.entries(groupedByCategory).map(([catKey, courses]) => (
              <div key={catKey} style={{ marginBottom: '3rem' }}>
                <Reveal>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.875rem', marginBottom: '1.5rem' }}>
                    <h2 style={{ fontSize: '1.25rem', fontWeight: 700, color: 'var(--navy)' }}>
                      {COURSE_CATEGORIES[catKey as CourseCategory].emoji}{' '}
                      {COURSE_CATEGORIES[catKey as CourseCategory].label}
                    </h2>
                    <div style={{ flex: 1, height: 1, background: 'var(--border)' }} />
                    <span style={{ fontSize: '0.8125rem', color: 'var(--muted)', fontWeight: 600 }}>
                      {courses.length} {courses.length === 1 ? 'course' : 'courses'}
                    </span>
                  </div>
                </Reveal>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '1.25rem' }}>
                  {courses.map((course, i) => (
                    <Reveal key={course.id} delay={i * 50}>
                      <CourseCard course={course} />
                    </Reveal>
                  ))}
                </div>
              </div>
            ))
          ) : (
            // Flat grid (filtered/searched)
            <>
              <p style={{ color: 'var(--muted)', fontSize: '0.9rem', marginBottom: '1.5rem' }}>
                Showing {filteredCourses.length} {filteredCourses.length === 1 ? 'course' : 'courses'}
                {activeCategory !== 'all' ? ` in ${COURSE_CATEGORIES[activeCategory as CourseCategory].label}` : ''}
                {searchQuery ? ` for "${searchQuery}"` : ''}
              </p>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '1.25rem' }}>
                {filteredCourses.map((course, i) => (
                  <Reveal key={course.id} delay={i * 40}>
                    <CourseCard course={course} />
                  </Reveal>
                ))}
              </div>
            </>
          )}
        </div>
      </section>
    </>
  )
}
