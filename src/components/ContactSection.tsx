import { useState } from 'react'
import { MapPin, Phone, MessageCircle, ArrowUpRight, Send, CheckCircle2 } from 'lucide-react'
import { SITE_CONFIG, COURSES } from '../data/config'

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    course: '',
    message: '',
  })
  const [errors, setErrors] = useState<Record<string, string>>({})
  const [submitted, setSubmitted] = useState(false)

  const validate = () => {
    const errs: Record<string, string> = {}
    if (!formData.name.trim()) errs.name = 'Please provide your full name.'
    if (!formData.phone.trim()) {
      errs.phone = 'Please provide your phone number.'
    } else if (!/^[0-9+\s-]{10,15}$/.test(formData.phone.trim())) {
      errs.phone = 'Please enter a valid phone number (at least 10 digits).'
    }
    return errs
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const errs = validate()
    if (Object.keys(errs).length > 0) {
      setErrors(errs)
      return
    }
    setErrors({})
    setSubmitted(true)
  }

  return (
    <section id="contact" className="w-full bg-white py-16 sm:py-20 lg:py-24 border-b border-gray-200" aria-label="Contact and Admissions">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14">

          {/* Left Column: Direct Contact Details & WhatsApp Action */}
          <div className="lg:col-span-5 flex flex-col justify-between">
            <div>
              <div className="inline-flex items-center gap-1.5 text-xs font-black uppercase tracking-wider text-[#0F1E36] bg-gray-100 px-3.5 py-1.5 rounded-full border border-gray-200 mb-3">
                <span>CONNECT WITH US</span>
              </div>
              <h2 className="text-2xl sm:text-4xl lg:text-[42px] font-black text-[#0F1E36] tracking-tight leading-tight mb-4 font-heading">
                Visit or call our{' '}
                <span className="serif-accent font-normal text-[#1556A6]">
                  Virar East centre.
                </span>
              </h2>
              <p className="text-sm sm:text-base text-[#606A61] leading-relaxed mb-8">
                We are glad to answer questions, explain syllabi, and show you our practical training labs in person. Reach out via call, WhatsApp, or an in-person visit.
              </p>

              <div className="flex flex-col gap-6 mb-8">
                {/* Physical Address */}
                <div className="flex items-start gap-4">
                  <div className="w-11 h-11 rounded-xl bg-[#F5F6F2] border border-[#E7EAE2] flex items-center justify-center text-[#102B20] shrink-0 mt-0.5">
                    <MapPin size={20} aria-hidden="true" />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-[#606A61] uppercase tracking-wider">Centre Address</p>
                    <p className="text-sm font-bold text-[#17251B] mt-0.5">
                      {SITE_CONFIG.address.line1}, {SITE_CONFIG.address.line2}
                    </p>
                    <p className="text-xs text-[#606A61]">
                      {SITE_CONFIG.address.city}, {SITE_CONFIG.address.state} {SITE_CONFIG.address.pin}
                    </p>
                    <a
                      href={SITE_CONFIG.address.googleMapsSearch}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-xs text-[#102B20] hover:underline font-bold mt-1.5"
                    >
                      <span>View on Google Maps</span>
                      <ArrowUpRight size={13} />
                    </a>
                  </div>
                </div>

                {/* Telephone */}
                <div className="flex items-start gap-4">
                  <div className="w-11 h-11 rounded-xl bg-[#F5F6F2] border border-[#E7EAE2] flex items-center justify-center text-[#102B20] shrink-0 mt-0.5">
                    <Phone size={20} aria-hidden="true" />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-[#606A61] uppercase tracking-wider">Direct Telephone</p>
                    <a
                      href={`tel:${SITE_CONFIG.contact.phoneRaw}`}
                      className="text-lg font-black text-[#17251B] hover:text-[#102B20] transition-colors inline-block mt-0.5 font-heading"
                    >
                      {SITE_CONFIG.contact.phone}
                    </a>
                    <p className="text-xs text-[#606A61] mt-0.5">
                      Call for admissions & batch inquiries
                    </p>
                  </div>
                </div>

                {/* WhatsApp Action */}
                <div className="flex items-start gap-4">
                  <div className="w-11 h-11 rounded-xl bg-[#25D366]/10 border border-[#25D366]/20 flex items-center justify-center text-[#25D366] shrink-0 mt-0.5">
                    <MessageCircle size={20} aria-hidden="true" />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-[#606A61] uppercase tracking-wider">WhatsApp Admissions</p>
                    <a
                      href={`${SITE_CONFIG.contact.whatsapp}?text=${SITE_CONFIG.contact.whatsappDefaultMessage}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm font-bold text-[#102B20] hover:underline inline-flex items-center gap-1 mt-0.5"
                    >
                      <span>Chat on WhatsApp (+91 97943 23963)</span>
                      <ArrowUpRight size={13} />
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* In-Person Consultation Notice */}
            <div className="p-4 rounded-2xl bg-[#F5F6F2] border border-[#E7EAE2] text-xs text-[#606A61] leading-relaxed">
              <span className="font-bold text-[#17251B]">Visiting Tip: </span>
              Our centre is located right opposite the subway staircase on the East side of Virar Railway Station for convenient daily commuting.
            </div>
          </div>

          {/* Right Column: Admission Enquiry Form */}
          <div className="lg:col-span-7 bg-[#F5F6F2] rounded-3xl p-6 sm:p-10 border border-[#E7EAE2] shadow-xs">
            <h3 className="text-xl sm:text-2xl font-black text-[#17251B] tracking-tight mb-2 font-heading">
              Enquire About Courses & Batches
            </h3>
            <p className="text-xs sm:text-sm text-[#606A61] leading-relaxed mb-6">
              Fill in your details and our team will contact you with batch schedules, syllabus details, and admission requirements.
            </p>

            {submitted ? (
              <div className="p-6 rounded-2xl bg-white border border-[#B9E64C] shadow-xs text-center flex flex-col items-center">
                <div className="w-12 h-12 rounded-full bg-[#B9E64C]/20 text-[#102B20] flex items-center justify-center mb-3">
                  <CheckCircle2 size={24} />
                </div>
                <h4 className="text-lg font-black text-[#17251B] font-heading mb-1">
                  Thank You, {formData.name}!
                </h4>
                <p className="text-xs sm:text-sm text-[#606A61] max-w-sm mb-5">
                  Your enquiry has been received. Our counsellors will reach out to you shortly on <strong>{formData.phone}</strong>.
                </p>
                <button
                  type="button"
                  onClick={() => {
                    setSubmitted(false)
                    setFormData({ name: '', phone: '', course: '', message: '' })
                  }}
                  className="text-xs font-bold text-[#102B20] hover:underline"
                >
                  Submit another enquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-4" noValidate>
                {/* Full Name */}
                <div>
                  <label htmlFor="contact-name" className="block text-xs font-bold text-[#17251B] uppercase tracking-wider mb-1.5">
                    Full Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    id="contact-name"
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="Enter your name"
                    className={`w-full px-4 py-3 rounded-xl bg-white border ${
                      errors.name ? 'border-red-500' : 'border-[#E7EAE2]'
                    } text-sm text-[#17251B] focus:outline-none focus:ring-2 focus:ring-[#102B20]`}
                  />
                  {errors.name && <p className="text-xs text-red-600 mt-1">{errors.name}</p>}
                </div>

                {/* Phone Number */}
                <div>
                  <label htmlFor="contact-phone" className="block text-xs font-bold text-[#17251B] uppercase tracking-wider mb-1.5">
                    Phone / Mobile Number <span className="text-red-500">*</span>
                  </label>
                  <input
                    id="contact-phone"
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="e.g. 9794323963"
                    className={`w-full px-4 py-3 rounded-xl bg-white border ${
                      errors.phone ? 'border-red-500' : 'border-[#E7EAE2]'
                    } text-sm text-[#17251B] focus:outline-none focus:ring-2 focus:ring-[#102B20]`}
                  />
                  {errors.phone && <p className="text-xs text-red-600 mt-1">{errors.phone}</p>}
                </div>

                {/* Course Selection */}
                <div>
                  <label htmlFor="contact-course" className="block text-xs font-bold text-[#17251B] uppercase tracking-wider mb-1.5">
                    Course of Interest (Optional)
                  </label>
                  <select
                    id="contact-course"
                    value={formData.course}
                    onChange={(e) => setFormData({ ...formData, course: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-white border border-[#E7EAE2] text-sm text-[#17251B] focus:outline-none focus:ring-2 focus:ring-[#102B20]"
                  >
                    <option value="">Select a course or learning track</option>
                    {COURSES.map((c) => (
                      <option key={c.id} value={c.name}>
                        {c.name}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Message / Question */}
                <div>
                  <label htmlFor="contact-msg" className="block text-xs font-bold text-[#17251B] uppercase tracking-wider mb-1.5">
                    Message or Questions (Optional)
                  </label>
                  <textarea
                    id="contact-msg"
                    rows={3}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Ask about batch timings, fee offers, or syllabus details..."
                    className="w-full px-4 py-3 rounded-xl bg-white border border-[#E7EAE2] text-sm text-[#17251B] focus:outline-none focus:ring-2 focus:ring-[#102B20]"
                  />
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  className="w-full bg-[#102B20] hover:bg-[#183d2e] text-white font-bold text-sm py-3.5 rounded-xl shadow-xs hover:shadow-md transition-all flex items-center justify-center gap-2 mt-2"
                >
                  <span>Submit Admission Enquiry</span>
                  <Send size={15} />
                </button>
              </form>
            )}
          </div>

        </div>
      </div>
    </section>
  )
}
