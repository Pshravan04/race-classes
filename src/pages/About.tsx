import { Link } from 'react-router-dom'
import { MapPin, Phone, ArrowRight, Laptop, Target, Users } from 'lucide-react'
import SEO from '../components/SEO'
import { SITE_CONFIG } from '../data/config'

export default function About() {
  return (
    <>
      <SEO
        title="About Our Institute"
        description="Learn about Race Reddys Advanced Computer Education in Virar East — our practical learning philosophy, dedicated computer labs, and skills-focused curricula."
        canonical="/about"
      />

      {/* Header Banner */}
      <section className="bg-slate-50 border-b border-slate-200 py-12 md:py-16">
        <div className="container-rr">
          <div className="max-w-2xl">
            <span className="section-eyebrow">ABOUT RACE REDDYS</span>
            <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mb-3">
              A Practical Approach to Computer Education
            </h1>
            <p className="text-base text-slate-600 leading-relaxed">
              Situated in Virar East, Race Reddys Advanced Computer Education is dedicated to empowering students, job seekers, and working professionals with industry-relevant digital competencies.
            </p>
          </div>
        </div>
      </section>

      {/* Who We Are & Narrative */}
      <section className="bg-white section-py border-b border-slate-100">
        <div className="container-rr">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">

            <div className="lg:col-span-7 flex flex-col items-start">
              <span className="section-eyebrow">OUR MISSION</span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight mb-4">
                Skills-First Learning for Academic & Career Growth
              </h2>
              <div className="flex flex-col gap-3.5 text-base text-slate-600 leading-relaxed">
                <p>
                  Race Reddys Advanced Computer Education was established with a singular objective: to bridge the gap between classroom theory and real workplace software applications in the Virar and Palghar district region.
                </p>
                <p>
                  Whether learning foundational keyboarding and MS Office, commercial accounting in Tally with GST, modern creative workflows in Photoshop and Illustrator, or software programming and AI prompt engineering, every student practices on dedicated computer workstations.
                </p>
                <p>
                  We prioritize individual pacing, direct instructor interaction, and practical exercises designed to prepare candidates for job roles and certification exams.
                </p>
              </div>

              <div className="mt-6 flex flex-wrap items-center gap-3">
                <Link to="/courses" className="btn-primary text-sm">
                  <span>Browse Our Courses</span>
                  <ArrowRight size={14} />
                </Link>
                <Link to="/contact" className="btn-secondary text-sm">
                  <span>Visit Our Lab</span>
                </Link>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="rounded-2xl overflow-hidden border border-slate-200 shadow-sm aspect-[4/3] bg-slate-100">
                <img
                  src="/instructor-teaching.jpg"
                  alt="Faculty providing individual guidance to a computer student at Race Reddys"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Learning Philosophy Grid */}
      <section className="bg-alt section-py border-b border-slate-200">
        <div className="container-rr">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="section-eyebrow">OUR TEACHING PHILOSOPHY</span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
              What Defines Training at Race Reddys
            </h2>
            <p className="text-base text-slate-600 mt-2">
              Our principles are grounded in transparent education, active practice, and supportive guidance.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="card-rr p-6 bg-white border border-slate-200">
              <div className="w-10 h-10 rounded-lg bg-blue-50 border border-blue-100 text-blue-600 flex items-center justify-center mb-3.5">
                <Laptop size={20} />
              </div>
              <h3 className="text-base font-bold text-slate-900 mb-2">Dedicated Lab Practice</h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Learners receive dedicated time on desktop computers to complete practical modules, assignments, and sample projects.
              </p>
            </div>

            <div className="card-rr p-6 bg-white border border-slate-200">
              <div className="w-10 h-10 rounded-lg bg-blue-50 border border-blue-100 text-blue-600 flex items-center justify-center mb-3.5">
                <Users size={20} />
              </div>
              <h3 className="text-base font-bold text-slate-900 mb-2">Personalized Faculty Attention</h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Small batch sizes ensure our instructors can answer doubts individually and assist beginners who have never touched a computer.
              </p>
            </div>

            <div className="card-rr p-6 bg-white border border-slate-200">
              <div className="w-10 h-10 rounded-lg bg-blue-50 border border-blue-100 text-blue-600 flex items-center justify-center mb-3.5">
                <Target size={20} />
              </div>
              <h3 className="text-base font-bold text-slate-900 mb-2">Workplace Relevance</h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Training curricula are structured around software and practices commonly required by offices, businesses, and IT firms.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Location & Accessibility Details */}
      <section className="bg-white section-py border-b border-slate-100">
        <div className="container-rr">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">

            <div className="lg:col-span-6">
              <span className="section-eyebrow">CAMPUS ACCESSIBILITY</span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight mb-4">
                Conveniently Located in Virar East
              </h2>
              <p className="text-sm text-slate-600 leading-relaxed mb-6">
                Our centre is located directly opposite the Virar East railway subway at Raut Arcade, providing seamless access for daily commuters across the Western line.
              </p>

              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 flex flex-col gap-3 text-xs sm:text-sm text-slate-700 mb-6">
                <div className="flex items-start gap-2.5">
                  <MapPin size={18} className="text-blue-600 shrink-0 mt-0.5" />
                  <span>
                    <strong>Address: </strong>
                    {SITE_CONFIG.address.line1}, {SITE_CONFIG.address.line2}, {SITE_CONFIG.address.city}, {SITE_CONFIG.address.state} {SITE_CONFIG.address.pin}
                  </span>
                </div>
                <div className="flex items-center gap-2.5">
                  <Phone size={16} className="text-blue-600 shrink-0" />
                  <span>
                    <strong>Phone / WhatsApp: </strong>
                    <a href={`tel:${SITE_CONFIG.contact.phoneRaw}`} className="text-blue-600 font-semibold">
                      {SITE_CONFIG.contact.phone}
                    </a>
                  </span>
                </div>
              </div>

              <a
                href={SITE_CONFIG.address.googleMapsSearch}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary text-xs"
              >
                <span>Open Google Maps Directions</span>
                <ArrowRight size={13} />
              </a>
            </div>

            <div className="lg:col-span-6">
              <div className="card-rr p-6 md:p-8 bg-slate-50 border border-slate-200">
                <h3 className="text-base font-bold text-slate-900 mb-4">
                  Transit & Commute Guide
                </h3>
                <ul className="flex flex-col gap-3 list-none p-0 m-0 text-xs sm:text-sm text-slate-700">
                  <li className="flex items-start gap-2.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-600 shrink-0 mt-2" />
                    <span><strong>By Local Train:</strong> Alight at Virar station (East side). Walk through or opposite the pedestrian subway to Raut Arcade (approx. 2 minutes).</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-600 shrink-0 mt-2" />
                    <span><strong>By Auto Rickshaw:</strong> Direct the driver to Raut Arcade near the Subway, Virar East.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-600 shrink-0 mt-2" />
                    <span><strong>Floor Location:</strong> Second floor, Suite 202. Our office sign is visible upon entering the arcade.</span>
                  </li>
                </ul>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Bottom CTA Banner */}
      <section className="bg-slate-900 text-white py-12">
        <div className="container-rr text-center max-w-2xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight mb-3">
            Ready to Begin Your Computer Training?
          </h2>
          <p className="text-sm text-slate-300 leading-relaxed mb-6">
            Contact us today to schedule a lab visit, discuss current admission offers, and select the right batch.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3">
            <Link to="/courses" className="btn-primary text-sm">
              <span>Explore Courses</span>
              <ArrowRight size={14} />
            </Link>
            <Link to="/contact" className="btn-secondary text-sm">
              <span>Contact Admissions</span>
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
