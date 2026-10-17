import { useParams, Link, Navigate } from 'react-router-dom'
import { ArrowLeft, CheckCircle, Users, Target, Clock, Award, MessageCircle, ChevronDown, ChevronUp } from 'lucide-react'
import { useState } from 'react'
import SEO from '../components/SEO'
import EnquiryForm from '../components/EnquiryForm'
import { useReveal } from '../hooks/useReveal'
import { COURSES, COURSE_CATEGORIES, SITE_CONFIG } from '../data/config'

function Reveal({ children }: { children: React.ReactNode }) {
  const { ref, visible } = useReveal()
  return <div ref={ref} className={`reveal ${visible ? 'visible' : ''}`}>{children}</div>
}

function InfoBlock({ icon, label, content }: { icon: React.ReactNode; label: string; content: string }) {
  return (
    <div style={{ background: 'var(--off-white)', border: '1px solid var(--border)', borderRadius: 10, padding: '1.125rem', display: 'flex', gap: '0.875rem', alignItems: 'flex-start' }}>
      <div style={{ width: 36, height: 36, background: 'rgba(21,86,166,0.08)', borderRadius: 8, display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--royal)', flexShrink: 0 }}>
        {icon}
      </div>
      <div>
        <p style={{ fontSize: '0.75rem', fontWeight: 600, color: 'var(--muted)', textTransform: 'uppercase', letterSpacing: '0.06em', marginBottom: '0.2rem' }}>{label}</p>
        <p style={{ fontSize: '0.9rem', color: 'var(--charcoal)', lineHeight: 1.55 }}>{content}</p>
      </div>
    </div>
  )
}

export default function CourseDetail() {
  const { courseId } = useParams<{ courseId: string }>()
  const course = COURSES.find((c) => c.id === courseId)

  if (!course) return <Navigate to="/courses" replace />

  const category = COURSE_CATEGORIES[course.category]
  const relatedCourses = COURSES.filter((c) => c.category === course.category && c.id !== course.id).slice(0, 3)
  const [faqOpen, setFaqOpen] = useState<number | null>(null)

  const courseFAQs = [
    { q: `Who should do the ${course.name} course?`, a: course.whoFor },
    { q: 'Do I need prior experience?', a: course.prerequisites },
    { q: 'How long is this course?', a: course.durationNote },
    { q: 'What are the course fees?', a: course.feeNote },
    { q: 'Will I get a certificate?', a: course.certificateNote },
    { q: 'What will I actually learn?', a: course.topicsNote },
  ]

  const whatsappMsg = encodeURIComponent(
    `Hi! I would like to enquire about the ${course.name} course at Race Reddys Advanced Computer Education. Please share details about batches and fees.`
  )

  return (
    <>
      <SEO
        title={course.name}
        description={`${course.name} at Race Reddys Advanced Computer Education, Virar East. ${course.shortDesc}`}
        canonical={`/courses/${course.id}`}
      />

      {/* Breadcrumb */}
      <div style={{ background: '#fff', borderBottom: '1px solid var(--border)', padding: '0.75rem 0' }}>
        <div className="container-rr">
          <nav aria-label="Breadcrumb">
            <ol style={{ display: 'flex', gap: '0.5rem', alignItems: 'center', listStyle: 'none', padding: 0, margin: 0, fontSize: '0.875rem', color: 'var(--muted)' }}>
              <li><Link to="/" style={{ color: 'var(--royal)' }}>Home</Link></li>
              <li>›</li>
              <li><Link to="/courses" style={{ color: 'var(--royal)' }}>Courses</Link></li>
              <li>›</li>
              <li aria-current="page" style={{ color: 'var(--charcoal)', fontWeight: 600 }}>{course.name}</li>
            </ol>
          </nav>
        </div>
      </div>

      {/* Course Hero */}
      <section style={{ background: 'var(--navy)', padding: 'clamp(2.5rem, 6vw, 4rem) 0' }}>
        <div className="container-rr">
          <Link to="/courses" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.4rem', color: 'rgba(255,255,255,0.6)', fontSize: '0.875rem', marginBottom: '1.25rem' }}>
            <ArrowLeft size={14} />
            All Courses
          </Link>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.4rem', background: 'rgba(217,174,82,0.12)', border: '1px solid rgba(217,174,82,0.3)', borderRadius: 999, padding: '0.25rem 0.75rem', marginBottom: '1rem', color: 'var(--gold)', fontSize: '0.8125rem', fontWeight: 600 }}>
            {category.emoji} {category.label}
          </div>
          <h1 style={{ color: '#fff', fontSize: 'clamp(1.75rem, 4vw, 2.75rem)', marginBottom: '0.875rem' }}>
            {course.name}
          </h1>
          <p style={{ color: 'rgba(255,255,255,0.78)', maxWidth: 560, lineHeight: 1.7, fontSize: '1.0625rem', marginBottom: '2rem' }}>
            {course.shortDesc}
          </p>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem' }}>
            <Link to="/contact" className="btn-primary">
              Enquire About This Course
            </Link>
            <a
              href={`${SITE_CONFIG.contact.whatsapp}?text=${whatsappMsg}`}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-outline"
            >
              <MessageCircle size={15} />
              WhatsApp Us
            </a>
          </div>
        </div>
      </section>

      {/* Main content */}
      <section style={{ background: 'var(--off-white)' }} className="section-py">
        <div className="container-rr">
          <div style={{ display: 'grid', gridTemplateColumns: 'minmax(0, 1fr) 340px', gap: '2.5rem', alignItems: 'start' }}
            className="course-detail-grid">

            {/* Left: Details */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>

              {/* Quick info */}
              <Reveal>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(220px, 1fr))', gap: '0.875rem' }}>
                  <InfoBlock icon={<Users size={16} />} label="Who Is It For" content={course.whoFor} />
                  <InfoBlock icon={<Target size={16} />} label="Prerequisites" content={course.prerequisites} />
                  <InfoBlock icon={<Clock size={16} />} label="Duration" content={course.durationNote} />
                  <InfoBlock icon={<Award size={16} />} label="Certificate" content={course.certificateNote} />
                </div>
              </Reveal>

              {/* Highlights */}
              <Reveal>
                <div style={{ background: '#fff', border: '1px solid var(--border)', borderRadius: 12, padding: '1.5rem' }}>
                  <h2 style={{ fontSize: '1.125rem', fontWeight: 700, color: 'var(--navy)', marginBottom: '1.125rem' }}>
                    Course Highlights
                  </h2>
                  <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))', gap: '0.625rem' }}>
                    {course.highlights.map((h, i) => (
                      <li key={i} style={{ display: 'flex', gap: '0.5rem', alignItems: 'flex-start', color: 'var(--charcoal)', fontSize: '0.9rem', lineHeight: 1.6 }}>
                        <CheckCircle size={15} style={{ color: 'var(--royal)', flexShrink: 0, marginTop: 3 }} />
                        {h}
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>

              {/* Skills gained */}
              <Reveal>
                <div style={{ background: '#fff', border: '1px solid var(--border)', borderRadius: 12, padding: '1.5rem' }}>
                  <h2 style={{ fontSize: '1.125rem', fontWeight: 700, color: 'var(--navy)', marginBottom: '1.125rem' }}>
                    Skills You Will Develop
                  </h2>
                  <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.625rem' }}>
                    {course.skillsGained.map((s, i) => (
                      <li key={i} style={{ display: 'flex', gap: '0.625rem', alignItems: 'flex-start', color: 'var(--charcoal)', fontSize: '0.9rem', lineHeight: 1.6 }}>
                        <span style={{ width: 6, height: 6, borderRadius: '50%', background: 'var(--gold)', flexShrink: 0, marginTop: 8 }} />
                        {s}
                      </li>
                    ))}
                  </ul>
                  <p style={{ fontSize: '0.8125rem', color: 'var(--muted)', marginTop: '1rem', fontStyle: 'italic' }}>
                    {course.topicsNote}
                  </p>
                </div>
              </Reveal>

              {/* Course FAQs */}
              <Reveal>
                <div style={{ background: '#fff', border: '1px solid var(--border)', borderRadius: 12, padding: '1.5rem 1.5rem 0' }}>
                  <h2 style={{ fontSize: '1.125rem', fontWeight: 700, color: 'var(--navy)', marginBottom: '0.5rem' }}>
                    Common Questions About This Course
                  </h2>
                  {courseFAQs.map((faq, i) => (
                    <div key={i} className="faq-item">
                      <button
                        className="faq-btn"
                        onClick={() => setFaqOpen(faqOpen === i ? null : i)}
                        aria-expanded={faqOpen === i}
                      >
                        <span>{faq.q}</span>
                        {faqOpen === i
                          ? <ChevronUp size={16} style={{ flexShrink: 0, color: 'var(--royal)' }} />
                          : <ChevronDown size={16} style={{ flexShrink: 0, color: 'var(--muted)' }} />
                        }
                      </button>
                      <div className={`faq-answer ${faqOpen === i ? 'open' : ''}`} aria-hidden={faqOpen !== i}>
                        <div className="faq-answer-inner">{faq.a}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </Reveal>

              {/* Related courses */}
              {relatedCourses.length > 0 && (
                <Reveal>
                  <div>
                    <h2 style={{ fontSize: '1.125rem', fontWeight: 700, color: 'var(--navy)', marginBottom: '1rem' }}>
                      Related Courses in {category.label}
                    </h2>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(240px, 1fr))', gap: '1rem' }}>
                      {relatedCourses.map((c) => (
                        <Link
                          key={c.id}
                          to={`/courses/${c.id}`}
                          style={{
                            background: '#fff', border: '1px solid var(--border)', borderRadius: 10,
                            padding: '1rem', textDecoration: 'none', color: 'var(--navy)',
                            fontWeight: 600, fontSize: '0.9rem',
                            display: 'flex', justifyContent: 'space-between', alignItems: 'center',
                            transition: 'box-shadow 0.2s',
                          }}
                        >
                          {c.name}
                          <ChevronDown size={14} style={{ transform: 'rotate(-90deg)', color: 'var(--royal)' }} />
                        </Link>
                      ))}
                    </div>
                  </div>
                </Reveal>
              )}
            </div>

            {/* Right: Sidebar */}
            <aside style={{ position: 'sticky', top: '80px' }}>
              <div style={{
                background: '#fff', border: '1px solid var(--border)', borderRadius: 14,
                padding: '1.75rem', boxShadow: '0 8px 32px rgba(7,27,58,0.07)',
              }}>
                <h3 style={{ fontSize: '1.125rem', fontWeight: 700, color: 'var(--navy)', marginBottom: '0.375rem' }}>
                  Enquire About {course.name}
                </h3>
                <p style={{ color: 'var(--muted)', fontSize: '0.875rem', marginBottom: '1.25rem', lineHeight: 1.5 }}>
                  Get batch timings, fees, and availability — sent directly via WhatsApp.
                </p>
                <EnquiryForm preselectedCourse={course.id} compact />
                <div style={{ marginTop: '1.25rem', paddingTop: '1.25rem', borderTop: '1px solid var(--border)', textAlign: 'center' }}>
                  <a
                    href={`tel:${SITE_CONFIG.contact.phoneRaw}`}
                    style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem', color: 'var(--royal)', fontWeight: 700, fontSize: '1rem' }}
                  >
                    📞 {SITE_CONFIG.contact.phone}
                  </a>
                  <p style={{ fontSize: '0.8rem', color: 'var(--muted)', marginTop: '0.25rem' }}>Call or WhatsApp us directly</p>
                </div>
              </div>

              {/* Fee/Duration note */}
              <div style={{ background: 'rgba(21,86,166,0.05)', border: '1px solid rgba(21,86,166,0.15)', borderRadius: 10, padding: '1rem', marginTop: '1rem' }}>
                <p style={{ fontSize: '0.8125rem', color: 'var(--royal)', lineHeight: 1.6 }}>
                  <strong>💡 Note:</strong> {course.feeNote}
                </p>
              </div>
            </aside>
          </div>
        </div>
      </section>

      <style>{`
        @media (max-width: 900px) {
          .course-detail-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </>
  )
}
