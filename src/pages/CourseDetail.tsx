import { useParams, Link, Navigate } from 'react-router-dom'
import {
  ArrowLeft,
  CheckCircle,
  Users,
  Target,
  Clock,
  Award,
  MessageCircle,
  ChevronDown,
  ChevronUp,
  Phone,
  Sparkles,
} from 'lucide-react'
import { useState } from 'react'
import SEO from '../components/SEO'
import EnquiryForm from '../components/EnquiryForm'
import { COURSES, COURSE_CATEGORIES, SITE_CONFIG } from '../data/config'

function InfoBlock({ icon, label, content }: { icon: React.ReactNode; label: string; content: string }) {
  return (
    <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 flex gap-3.5 items-start">
      <div className="w-9 h-9 rounded-lg bg-blue-50 border border-blue-100 flex items-center justify-center text-blue-600 shrink-0">
        {icon}
      </div>
      <div>
        <p className="text-[11px] font-bold text-slate-500 uppercase tracking-wider mb-0.5">
          {label}
        </p>
        <p className="text-xs sm:text-sm text-slate-800 leading-relaxed font-medium">
          {content}
        </p>
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
    { q: `Who should enrol in ${course.name}?`, a: course.whoFor },
    { q: 'Do I need prior computer experience?', a: course.prerequisites },
    { q: 'How long is this course?', a: course.durationNote },
    { q: 'What are the fees and payment options?', a: course.feeNote },
    { q: 'Will I get an institute certificate upon completion?', a: course.certificateNote },
    { q: 'What specific topics and software will I learn?', a: course.topicsNote },
  ]

  const whatsappMsg = encodeURIComponent(
    `Hello! I would like to enquire about the ${course.name} course at Race Reddys Advanced Computer Education, Virar East. Please share details regarding fees and upcoming batch timings.`
  )

  return (
    <>
      <SEO
        title={`${course.name} Course in Virar East`}
        description={`${course.name} at Race Reddys Advanced Computer Education, Virar East. ${course.shortDesc}`}
        canonical={`/courses/${course.id}`}
      />

      {/* Breadcrumb Navigation */}
      <div className="bg-slate-50 border-b border-slate-200 py-3 text-xs text-slate-500">
        <div className="container-rr">
          <nav aria-label="Breadcrumb">
            <ol className="flex items-center gap-2 list-none p-0 m-0">
              <li>
                <Link to="/" className="text-blue-600 hover:text-blue-700">Home</Link>
              </li>
              <li>/</li>
              <li>
                <Link to="/courses" className="text-blue-600 hover:text-blue-700">Courses</Link>
              </li>
              <li>/</li>
              <li className="text-slate-800 font-semibold truncate max-w-xs" aria-current="page">
                {course.name}
              </li>
            </ol>
          </nav>
        </div>
      </div>

      {/* Course Hero Header */}
      <section className="bg-white border-b border-slate-200 py-10 md:py-14">
        <div className="container-rr">
          <div className="max-w-3xl">
            <Link
              to="/courses"
              className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-500 hover:text-blue-600 mb-4 transition-colors"
            >
              <ArrowLeft size={14} />
              <span>Back to All Courses</span>
            </Link>

            <div className="flex items-center gap-2 mb-3">
              <span className="badge-blue text-xs">
                {category?.label || 'Computer Course'}
              </span>
              <span className="badge-gold text-xs">
                <Sparkles size={11} />
                Practical Lab
              </span>
            </div>

            <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mb-4">
              {course.name}
            </h1>

            <p className="text-base text-slate-600 leading-relaxed mb-6">
              {course.shortDesc}
            </p>

            <div className="flex flex-wrap items-center gap-3">
              <a
                href="#enquiry-section"
                className="btn-primary text-sm"
              >
                Enquire for Admission
              </a>
              <a
                href={`${SITE_CONFIG.contact.whatsapp}?text=${whatsappMsg}`}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary text-sm flex items-center gap-1.5"
              >
                <MessageCircle size={15} className="text-emerald-600" />
                <span>WhatsApp Query</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Main Course Content & Sidebar Grid */}
      <section className="bg-alt section-py">
        <div className="container-rr">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">

            {/* Left Column (8 cols): Details, Highlights, Skills */}
            <div className="lg:col-span-8 flex flex-col gap-6">

              {/* Quick Info Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <InfoBlock icon={<Users size={18} />} label="Intended For" content={course.whoFor} />
                <InfoBlock icon={<Target size={18} />} label="Prerequisites" content={course.prerequisites} />
                <InfoBlock icon={<Clock size={18} />} label="Course Duration" content={course.durationNote} />
                <InfoBlock icon={<Award size={18} />} label="Certification" content={course.certificateNote} />
              </div>

              {/* Course Highlights */}
              <div className="card-rr p-6 md:p-8 bg-white border border-slate-200">
                <h2 className="text-lg font-bold text-slate-900 mb-4">
                  Key Course Topics & Highlights
                </h2>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 list-none p-0 m-0">
                  {course.highlights.map((highlight, idx) => (
                    <li key={idx} className="flex items-start gap-2.5 text-sm text-slate-700">
                      <CheckCircle size={16} className="text-blue-600 shrink-0 mt-0.5" aria-hidden="true" />
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Skills Gained */}
              <div className="card-rr p-6 md:p-8 bg-white border border-slate-200">
                <h2 className="text-lg font-bold text-slate-900 mb-4">
                  Practical Skills You Will Develop
                </h2>
                <ul className="flex flex-col gap-3 list-none p-0 m-0 mb-4">
                  {course.skillsGained.map((skill, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-sm text-slate-700">
                      <span className="w-1.5 h-1.5 rounded-full bg-blue-600 shrink-0 mt-2" />
                      <span>{skill}</span>
                    </li>
                  ))}
                </ul>
                <div className="p-3.5 bg-slate-50 rounded-lg border border-slate-200 text-xs text-slate-500">
                  <span className="font-semibold text-slate-700">Syllabus Confirmation: </span>
                  {course.topicsNote}
                </div>
              </div>

              {/* Course Specific FAQs */}
              <div className="card-rr p-6 md:p-8 bg-white border border-slate-200">
                <h2 className="text-lg font-bold text-slate-900 mb-2">
                  Frequently Asked Questions on {course.name}
                </h2>
                <p className="text-xs text-slate-500 mb-4">
                  Everything you need to know about joining this course at our Virar East centre.
                </p>

                <div className="divide-y divide-slate-100">
                  {courseFAQs.map((faq, i) => (
                    <div key={i} className="py-3">
                      <button
                        type="button"
                        onClick={() => setFaqOpen(faqOpen === i ? null : i)}
                        aria-expanded={faqOpen === i}
                        className="w-full flex items-center justify-between text-left gap-4 font-semibold text-slate-800 text-sm hover:text-blue-600 transition-colors py-1"
                      >
                        <span>{faq.q}</span>
                        <span className="text-slate-400 shrink-0">
                          {faqOpen === i ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
                        </span>
                      </button>
                      {faqOpen === i && (
                        <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mt-2 pl-1">
                          {faq.a}
                        </p>
                      )}
                    </div>
                  ))}
                </div>
              </div>

              {/* Related Courses */}
              {relatedCourses.length > 0 && (
                <div>
                  <h3 className="text-base font-bold text-slate-900 mb-4">
                    Other Recommended Courses in {category.label}
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    {relatedCourses.map((rel) => (
                      <Link
                        key={rel.id}
                        to={`/courses/${rel.id}`}
                        className="card-rr p-4 bg-white border border-slate-200 block hover:border-blue-400 transition-colors"
                      >
                        <p className="text-xs text-blue-600 font-semibold mb-1">{category.label}</p>
                        <p className="text-sm font-bold text-slate-900">{rel.name}</p>
                      </Link>
                    ))}
                  </div>
                </div>
              )}

            </div>

            {/* Right Column (4 cols): Sticky Enquiry Sidebar */}
            <aside id="enquiry-section" className="lg:col-span-4 sticky top-20">
              <div className="card-rr p-6 bg-white border border-slate-200 shadow-sm flex flex-col gap-4">
                <div>
                  <h3 className="text-base font-bold text-slate-900">
                    Enquire About {course.name}
                  </h3>
                  <p className="text-xs text-slate-500 mt-1">
                    Check batch timings, seat availability, and current fees.
                  </p>
                </div>

                <EnquiryForm preselectedCourse={course.name} compact />

                <div className="pt-3 border-t border-slate-100 text-center">
                  <p className="text-xs text-slate-500 mb-1">Prefer to talk right away?</p>
                  <a
                    href={`tel:${SITE_CONFIG.contact.phoneRaw}`}
                    className="text-sm font-bold text-blue-600 hover:text-blue-700 flex items-center justify-center gap-1.5"
                  >
                    <Phone size={14} />
                    <span>{SITE_CONFIG.contact.phone}</span>
                  </a>
                </div>
              </div>
            </aside>

          </div>
        </div>
      </section>
    </>
  )
}
