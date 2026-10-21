import { useState } from 'react'
import { ArrowUpRight, Check, Send, CheckCircle2 } from 'lucide-react'
import { SITE_CONFIG } from '../data/config'

export default function AdmissionsBanner() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    course: 'TallyPrime with GST',
    preferredTime: 'Morning (10:00 AM - 1:00 PM)',
  })
  const [submitted, setSubmitted] = useState(false)
  const [error, setError] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!formData.name.trim() || !formData.phone.trim()) {
      setError('Please provide your name and phone number.')
      return
    }
    if (!/^[0-9+\s-]{10,15}$/.test(formData.phone.trim())) {
      setError('Please enter a valid 10-digit phone number.')
      return
    }
    setError('')
    setSubmitted(true)
  }

  const handleWhatsAppRedirect = () => {
    const text = encodeURIComponent(
      `Hello! I would like to book counseling & enquiry for ${formData.course} at Race Reddys Virar East. Name: ${formData.name}, Preferred Time: ${formData.preferredTime}`
    )
    window.open(`${SITE_CONFIG.contact.whatsapp}?text=${text}`, '_blank')
  }

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12" id="enquiry-section" aria-label="Fast Admission Enquiry and Special Offer">
      <div className="bg-gradient-to-br from-[#101b2b] via-[#152742] to-[#0b131f] text-white rounded-3xl p-8 sm:p-12 border border-slate-700 shadow-2xl relative overflow-hidden">
        
        {/* Background Graphic Accents */}
        <div className="absolute -right-20 -top-20 w-80 h-80 rounded-full bg-[#B7EB38]/10 blur-3xl pointer-events-none" />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center relative z-10">
          
          {/* Offer Copy */}
          <div className="lg:col-span-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#B7EB38] text-black text-xs font-bold mb-4 uppercase">
              <span>Special Limited Intake Offer</span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight mb-4 leading-tight">
              Get up to <span className="text-[#B7EB38]">50% Course Concession</span> + Free Typing Certificate.
            </h2>

            <p className="text-gray-300 text-sm leading-relaxed mb-6 font-light">
              Book your consultation today. Visit our Virar East institute to test our lab workstations, meet instructors, and inspect syllabus blueprints in person.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs text-gray-200">
              <div className="flex items-center gap-2.5">
                <span className="w-5 h-5 rounded-full bg-white/10 flex items-center justify-center text-[#B7EB38] font-bold shrink-0">
                  <Check size={12} strokeWidth={3} />
                </span>
                <span>Flexible Morning / Evening Batches</span>
              </div>
              <div className="flex items-center gap-2.5">
                <span className="w-5 h-5 rounded-full bg-white/10 flex items-center justify-center text-[#B7EB38] font-bold shrink-0">
                  <Check size={12} strokeWidth={3} />
                </span>
                <span>Zero-Cost EMI / Installments</span>
              </div>
              <div className="flex items-center gap-2.5">
                <span className="w-5 h-5 rounded-full bg-white/10 flex items-center justify-center text-[#B7EB38] font-bold shrink-0">
                  <Check size={12} strokeWidth={3} />
                </span>
                <span>Hindi / Marathi / English Instruction</span>
              </div>
              <div className="flex items-center gap-2.5">
                <span className="w-5 h-5 rounded-full bg-white/10 flex items-center justify-center text-[#B7EB38] font-bold shrink-0">
                  <Check size={12} strokeWidth={3} />
                </span>
                <span>Verified Certificate Authenticity</span>
              </div>
            </div>

            <p className="text-[11px] text-gray-400 mt-6 italic">
              * Note: Enrol in any career course to claim the advertised 50% discount &amp; free basic computer course offer. Subject to institute confirmation.
            </p>
          </div>

          {/* Fast Interactive Enquiry Form */}
          <div className="lg:col-span-6 bg-white text-gray-900 rounded-3xl p-6 sm:p-8 shadow-xl">
            <h3 className="text-xl font-extrabold text-[#0E1726] mb-1">
              Book Free Counseling &amp; Demo
            </h3>
            <p className="text-xs text-gray-500 mb-5">
              Fill in your details for an immediate callback and course syllabus PDF on WhatsApp.
            </p>

            {submitted ? (
              <div className="p-6 rounded-2xl bg-emerald-50 border border-emerald-200 text-center flex flex-col items-center gap-3 animate-in fade-in">
                <CheckCircle2 size={40} className="text-emerald-600" />
                <h4 className="font-extrabold text-base text-emerald-950">
                  Enquiry Received Successfully!
                </h4>
                <p className="text-xs text-emerald-800 leading-relaxed max-w-sm">
                  Thank you, <strong>{formData.name}</strong>. Our Virar East counsellor will contact you at <strong>{formData.phone}</strong> regarding <strong>{formData.course}</strong>.
                </p>
                <div className="flex flex-col sm:flex-row gap-2 mt-2 w-full">
                  <button
                    type="button"
                    onClick={handleWhatsAppRedirect}
                    className="w-full bg-[#25D366] hover:bg-[#20ba5a] text-[#0C2018] font-bold text-xs py-2.5 px-4 rounded-xl flex items-center justify-center gap-2 transition"
                  >
                    <span>Chat on WhatsApp Directly</span>
                    <ArrowUpRight size={14} />
                  </button>
                  <button
                    type="button"
                    onClick={() => {
                      setSubmitted(false)
                      setFormData({ name: '', phone: '', course: 'TallyPrime with GST', preferredTime: 'Morning (10:00 AM - 1:00 PM)' })
                    }}
                    className="w-full bg-gray-100 hover:bg-gray-200 text-gray-700 font-bold text-xs py-2.5 px-4 rounded-xl transition"
                  >
                    Submit Another Enquiry
                  </button>
                </div>
              </div>
            ) : (
              <form className="space-y-3.5" onSubmit={handleSubmit}>
                {error && (
                  <p className="text-xs text-rose-600 font-bold bg-rose-50 p-2.5 rounded-xl border border-rose-200">
                    {error}
                  </p>
                )}

                <div>
                  <label className="block text-xs font-semibold text-gray-700 mb-1" htmlFor="student-name">
                    Student Full Name
                  </label>
                  <input
                    id="student-name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="e.g. Rahul Sharma"
                    className="w-full text-sm px-3.5 py-2.5 rounded-xl border border-gray-300 focus:ring-2 focus:ring-[#1556A6] focus:border-transparent outline-none transition bg-white"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs font-semibold text-gray-700 mb-1" htmlFor="whatsapp-phone">
                      WhatsApp Number
                    </label>
                    <input
                      id="whatsapp-phone"
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="+91 98765 43210"
                      className="w-full text-sm px-3.5 py-2.5 rounded-xl border border-gray-300 focus:ring-2 focus:ring-[#1556A6] focus:border-transparent outline-none transition bg-white"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-gray-700 mb-1" htmlFor="course-interest">
                      Course of Interest
                    </label>
                    <select
                      id="course-interest"
                      value={formData.course}
                      onChange={(e) => setFormData({ ...formData, course: e.target.value })}
                      className="w-full text-sm px-3.5 py-2.5 rounded-xl border border-gray-300 focus:ring-2 focus:ring-[#1556A6] focus:border-transparent outline-none transition bg-white"
                    >
                      <option>TallyPrime with GST</option>
                      <option>Basic Computer &amp; Typing</option>
                      <option>Full Stack Coding (Java/Python)</option>
                      <option>Graphic Design &amp; Multimedia</option>
                      <option>AI Tools &amp; Cyber Security</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-gray-700 mb-1" htmlFor="preferred-time">
                    Preferred Time to Call
                  </label>
                  <select
                    id="preferred-time"
                    value={formData.preferredTime}
                    onChange={(e) => setFormData({ ...formData, preferredTime: e.target.value })}
                    className="w-full text-sm px-3.5 py-2.5 rounded-xl border border-gray-300 focus:ring-2 focus:ring-[#1556A6] focus:border-transparent outline-none transition bg-white"
                  >
                    <option>Morning (10:00 AM - 1:00 PM)</option>
                    <option>Afternoon (1:00 PM - 5:00 PM)</option>
                    <option>Evening (5:00 PM - 8:30 PM)</option>
                  </select>
                </div>

                <button
                  type="submit"
                  className="w-full mt-2 bg-[#121c2d] hover:bg-black text-white font-bold text-sm py-3 px-4 rounded-xl flex items-center justify-center gap-2 transition active:scale-[0.99] shadow cursor-pointer group"
                >
                  <Send size={15} />
                  <span>Submit Admission Enquiry</span>
                  <span className="w-5 h-5 rounded-full bg-[#B7EB38] text-black flex items-center justify-center text-xs font-bold transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
                    ↗
                  </span>
                </button>
              </form>
            )}

            <p className="text-[10px] text-gray-400 text-center mt-3">
              🔒 Privacy guaranteed • No spam. Direct communication with Virar East campus counselor.
            </p>
          </div>

        </div>

      </div>
    </section>
  )
}
