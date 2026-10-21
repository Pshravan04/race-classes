import { Link } from 'react-router-dom'
import { ArrowRight, CheckCircle, AlertCircle, Sparkles } from 'lucide-react'
import SEO from '../components/SEO'
import EnquiryForm from '../components/EnquiryForm'
import { ACTIVE_OFFER, COURSES } from '../data/config'

export default function Admissions() {
  const careerCourses = COURSES.filter((c) =>
    ['software-web', 'ai-data', 'digital-marketing', 'cyber-networking', 'design-creative', 'office-accounting'].includes(c.category)
  )

  return (
    <>
      <SEO
        title="Admissions & Special Offers"
        description="Admissions open at Race Reddys Advanced Computer Education, Virar East. Check details on the advertised 50% discount and Free Basic Computer Course offer with eligible career enrolment."
        canonical="/admissions"
      />

      {/* Header Banner */}
      <section className="bg-slate-50 border-b border-slate-200 py-12 md:py-16">
        <div className="container-rr">
          <div className="max-w-2xl">
            <span className="section-eyebrow">ADMISSIONS & BATCHES</span>
            <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mb-3">
              Join Race Reddys Computer Education
            </h1>
            <p className="text-base text-slate-600 leading-relaxed">
              Enrol in practical, career-oriented computer training in Virar East. Morning, afternoon, and evening batches available with dedicated lab access.
            </p>
          </div>
        </div>
      </section>

      {/* Special Offer Card Section */}
      {ACTIVE_OFFER.active && (
        <section className="bg-white section-py border-b border-slate-100">
          <div className="container-rr">
            <div className="rounded-2xl bg-[#102B50] text-white p-8 md:p-12 border border-[#C9A04F]/40 shadow-sm">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">

                <div className="lg:col-span-7 flex flex-col items-start">
                  <div className="inline-flex items-center gap-1.5 bg-[#C9A04F]/20 text-[#D9AE52] border border-[#C9A04F]/40 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider mb-4">
                    <Sparkles size={13} />
                    <span>Special Promotional Offer</span>
                  </div>

                  <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight mb-3">
                    {ACTIVE_OFFER.badge}: {ACTIVE_OFFER.headline}
                  </h2>

                  <p className="text-base text-slate-200 leading-relaxed mb-6">
                    {ACTIVE_OFFER.tagline}
                  </p>

                  <ul className="flex flex-col gap-2.5 mb-6 text-sm text-slate-200 list-none p-0 m-0">
                    <li className="flex items-start gap-2.5">
                      <CheckCircle size={16} className="text-[#C9A04F] shrink-0 mt-0.5" />
                      <span><strong>50% Discount:</strong> Applicable to advertised course admissions.</span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <CheckCircle size={16} className="text-[#C9A04F] shrink-0 mt-0.5" />
                      <span><strong>Free Basic Computer Course:</strong> Included when enrolling in eligible career programs.</span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <CheckCircle size={16} className="text-[#C9A04F] shrink-0 mt-0.5" />
                      <span><strong>Hands-On Practical Training:</strong> Dedicated computer workstation for every student.</span>
                    </li>
                  </ul>

                  <div className="p-3.5 rounded-lg bg-white/10 border border-white/15 text-xs text-slate-300 flex items-start gap-2">
                    <AlertCircle size={15} className="text-[#C9A04F] shrink-0 mt-0.5" />
                    <span>
                      <strong>Important Notice: </strong> {ACTIVE_OFFER.disclaimer}
                    </span>
                  </div>
                </div>

                <div className="lg:col-span-5 bg-white text-slate-900 rounded-xl p-6 border border-slate-200">
                  <h3 className="text-base font-bold text-slate-900 mb-1">
                    Ask About This Offer
                  </h3>
                  <p className="text-xs text-slate-500 mb-4">
                    Confirm current seat availability and fee discounts for your course.
                  </p>
                  <EnquiryForm compact />
                </div>

              </div>
            </div>
          </div>
        </section>
      )}

      {/* 3-Step Admission Process */}
      <section className="bg-alt section-py border-b border-slate-200">
        <div className="container-rr">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="section-eyebrow">STEP-BY-STEP</span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
              How Admission Works
            </h2>
            <p className="text-base text-slate-600 mt-2">
              Three simple, transparent steps to secure your batch at our Virar East centre.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="card-rr p-6 md:p-8 bg-white border border-slate-200 flex flex-col justify-between">
              <div>
                <span className="text-3xl font-black text-blue-600 font-mono">01</span>
                <h3 className="text-base font-bold text-slate-900 mt-3 mb-2">Explore & Select Course</h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  Browse our course catalog or speak with our counsellors to select the program matching your career aspirations.
                </p>
              </div>
            </div>

            <div className="card-rr p-6 md:p-8 bg-white border border-slate-200 flex flex-col justify-between">
              <div>
                <span className="text-3xl font-black text-blue-600 font-mono">02</span>
                <h3 className="text-base font-bold text-slate-900 mt-3 mb-2">Confirm Fees & Batch</h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  Contact us via WhatsApp or Phone to verify the fee structure, available installment plans, and morning/evening batch slots.
                </p>
              </div>
            </div>

            <div className="card-rr p-6 md:p-8 bg-white border border-slate-200 flex flex-col justify-between">
              <div>
                <span className="text-3xl font-black text-blue-600 font-mono">03</span>
                <h3 className="text-base font-bold text-slate-900 mt-3 mb-2">Visit Centre & Enrol</h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  Complete your registration in person at our Virar East centre (Raut Arcade, Opp. Subway) and start your practical training.
                </p>
              </div>
            </div>
          </div>

          <div className="p-4 rounded-xl bg-blue-50 border border-blue-100 text-xs text-blue-900 text-center max-w-xl mx-auto">
            <p>
              <strong>Payment Policy: </strong> Enrolments and fee payments are handled in person at our centre. We do not process unsolicited online payments or automated card charges.
            </p>
          </div>
        </div>
      </section>

      {/* Eligible Career Programs */}
      <section className="bg-white section-py">
        <div className="container-rr">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <span className="section-eyebrow">CURRICULUM HIGHLIGHTS</span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
              Featured Career Courses
            </h2>
            <p className="text-base text-slate-600 mt-2">
              Explore in-demand career programs with comprehensive practical lab training.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {careerCourses.map((c) => (
              <Link
                key={c.id}
                to={`/courses/${c.id}`}
                className="card-rr p-4 bg-white border border-slate-200 hover:border-blue-400 transition-colors flex items-center justify-between group"
              >
                <div>
                  <p className="text-[11px] text-blue-600 font-semibold mb-0.5">Practical Course</p>
                  <p className="text-sm font-bold text-slate-900 group-hover:text-blue-600 transition-colors">{c.name}</p>
                </div>
                <ArrowRight size={14} className="text-slate-400 group-hover:text-blue-600 transition-colors shrink-0" />
              </Link>
            ))}
          </div>

          <div className="mt-10 text-center">
            <Link to="/courses" className="btn-secondary text-sm">
              <span>View All {COURSES.length} Courses</span>
              <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
