import { useState } from 'react';
import { Phone, MessageSquare, MapPin, Clock, Send, CheckCircle2, Sparkles, Navigation, ArrowRight } from 'lucide-react';
import SEO from '../components/SEO';
import PageHero from '../components/PageHero';
import CtaBand from '../components/CtaBand';
import { SITE_CONFIG, COURSES } from '../data/config';

export default function Contact() {
  const [fullName, setFullName] = useState('');
  const [phone, setPhone] = useState('');
  const [course, setCourse] = useState('Basic Computer');
  const [preferredBatch, setPreferredBatch] = useState('Morning Batch (9:00 AM – 10:30 AM)');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 500);
  };

  const getWhatsAppPrefillUrl = () => {
    const text = `Hello Race Reddys! My name is ${fullName || '[Name]'}.
Phone: ${phone || '[Phone]'}
Interested Course: ${course}
Preferred Batch: ${preferredBatch}
Message: ${message || 'I would like to enquire about admissions and batch availability.'}`;

    return `${SITE_CONFIG.contact.whatsapp}?text=${encodeURIComponent(text)}`;
  };

  return (
    <>
      <SEO
        title="Contact & Visit Us in Virar East | Race Reddys"
        description="Visit Race Reddys at 202, Raut Arcade, opposite Virar East railway station subway. Mon-Sat 9 AM - 7 PM. Call/WhatsApp 9794323963 or submit an enquiry."
        canonical="/contact"
      />

      <PageHero
        eyebrow="Contact &amp; Location · संपर्क आणि पत्ता"
        title="Visit Our Centre or Chat With Our Instructors"
        description="We are located directly opposite the Virar East railway subway. Just 2 minutes on foot from Platform 1/2 exit. Walk in anytime during working hours for a free demo session."
        aside={
          <div className="relative overflow-hidden rounded-3xl border border-[#002B94] bg-gradient-to-br from-[#001752] via-[#000F36] to-[#00081C] p-6 sm:p-7 text-white shadow-2xl">
            <div className="absolute -right-12 -top-12 h-48 w-48 rounded-full bg-[#C41E1E]/20 blur-[80px] pointer-events-none" />
            <div className="absolute -left-12 -bottom-12 h-48 w-48 rounded-full bg-[#002277]/30 blur-[80px] pointer-events-none" />

            <div className="relative z-10">
              <span className="inline-flex items-center gap-1.5 rounded-full bg-[#C41E1E] px-3 py-1 text-[10px] font-black uppercase tracking-wider text-white shadow-xs">
                <Sparkles size={12} />
                Quick Communication Desk
              </span>

              <h2 className="mt-4 text-2xl font-bold tracking-tight">
                Immediate Callback on WhatsApp
              </h2>
              <p className="mt-2 text-xs sm:text-sm leading-relaxed text-slate-300">
                Message our Virar East counselors directly for batch schedules, syllabus brochures, and fee concession details.
              </p>

              <div className="mt-5 space-y-2.5">
                <a
                  href={`tel:${SITE_CONFIG.contact.phone}`}
                  className="flex items-center justify-between p-3 rounded-2xl bg-white/5 border border-white/10 text-xs hover:bg-white/10 transition"
                >
                  <span className="flex items-center gap-2 text-slate-300">
                    <Phone size={14} className="text-[#C41E1E]" />
                    <span>Direct Calling:</span>
                  </span>
                  <strong className="text-white font-bold">{SITE_CONFIG.contact.phone}</strong>
                </a>

                <a
                  href={`${SITE_CONFIG.contact.whatsapp}?text=${encodeURIComponent(
                    'Hello Race Reddys! I would like to enquire about course admissions at your Virar East centre.'
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-3 rounded-2xl bg-[#C41E1E]/20 border border-[#C41E1E]/40 text-xs text-white hover:bg-[#C41E1E]/30 transition"
                >
                  <span className="flex items-center gap-2 text-slate-200">
                    <MessageSquare size={14} className="text-[#F5BE4F]" />
                    <span>WhatsApp Chat:</span>
                  </span>
                  <strong className="text-white font-bold">Start Chat ↗</strong>
                </a>
              </div>
            </div>
          </div>
        }
      />

      {/* ─── 3 Direct Contact Cards ─── */}
      <section className="bg-white py-12 sm:py-16 border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            
            <div className="p-6 rounded-3xl border border-slate-200 bg-[#F8F9FA] flex flex-col justify-between shadow-xs">
              <div>
                <div className="w-11 h-11 rounded-2xl bg-[#FDF2F2] border border-[#FAD4D4] flex items-center justify-center text-[#C41E1E] mb-4">
                  <MapPin size={20} />
                </div>
                <h3 className="font-bold text-base text-[#001752] mb-1">Campus Location</h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  {SITE_CONFIG.address.line1}, {SITE_CONFIG.address.line2}, {SITE_CONFIG.address.city}, {SITE_CONFIG.address.state} - {SITE_CONFIG.address.pin}
                </p>
              </div>
              <a
                href={SITE_CONFIG.address.googleMapsDirectLink}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-flex items-center gap-1.5 text-xs font-bold text-[#C41E1E] hover:underline"
              >
                <span>Open in Google Maps</span>
                <Navigation size={13} />
              </a>
            </div>

            <div className="p-6 rounded-3xl border border-slate-200 bg-[#F8F9FA] flex flex-col justify-between shadow-xs">
              <div>
                <div className="w-11 h-11 rounded-2xl bg-[#001752]/5 border border-[#001752]/15 flex items-center justify-center text-[#001752] mb-4">
                  <Phone size={20} />
                </div>
                <h3 className="font-bold text-base text-[#001752] mb-1">Telephone &amp; WhatsApp</h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-3">
                  Call or message for admission counseling, syllabus PDFs, and fee concession details:
                </p>
                <div className="space-y-1 text-xs">
                  <a href={`tel:${SITE_CONFIG.contact.phone}`} className="font-bold text-[#001752] block hover:text-[#C41E1E]">
                    📞 {SITE_CONFIG.contact.phone}
                  </a>
                  <span className="text-slate-500 block">WhatsApp: {SITE_CONFIG.contact.phoneDisplay}</span>
                </div>
              </div>
              <a
                href={`${SITE_CONFIG.contact.whatsapp}?text=${encodeURIComponent('Hello! I would like to enquire about computer classes at Race Reddys Virar East.')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-flex items-center gap-1.5 text-xs font-bold text-emerald-600 hover:underline"
              >
                <span>Chat on WhatsApp</span>
                <ArrowRight size={13} />
              </a>
            </div>

            <div className="p-6 rounded-3xl border border-slate-200 bg-[#F8F9FA] flex flex-col justify-between shadow-xs">
              <div>
                <div className="w-11 h-11 rounded-2xl bg-amber-50 border border-amber-100 flex items-center justify-center text-amber-600 mb-4">
                  <Clock size={20} />
                </div>
                <h3 className="font-bold text-base text-[#111827] mb-1">Centre Working Hours</h3>
                <div className="space-y-1.5 text-xs sm:text-sm text-slate-600">
                  <p><strong>Monday – Saturday:</strong> 9:00 AM – 7:00 PM</p>
                  <p><strong>Sunday:</strong> Closed for routine maintenance</p>
                </div>
              </div>
              <div className="mt-4">
                <span className="inline-flex items-center gap-1.5 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-700 px-3 py-1 text-[11px] font-bold">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                  Admissions Open Today
                </span>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ─── Main Interactive Contact & Enquiry Form ─── */}
      <section className="py-16 sm:py-20 bg-[#F8F9FA]" id="demo">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            
            {/* Left: Walking Directions & Station Proximity */}
            <div className="lg:col-span-5 space-y-6">
              <div className="bg-white p-6 sm:p-8 rounded-3xl border border-slate-200 shadow-sm space-y-4">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-400/15 text-amber-700 text-xs font-bold uppercase tracking-wider">
                  <MapPin size={12} />
                  Walking Directions
                </span>

                <h2 className="text-xl sm:text-2xl font-bold text-[#111827]">
                  How to Reach Us from Virar Station
                </h2>

                <div className="space-y-3.5 text-xs sm:text-sm text-slate-600 leading-relaxed">
                  <div className="flex items-start gap-3">
                    <span className="w-6 h-6 rounded-full bg-[#111827] text-white flex items-center justify-center font-bold text-xs shrink-0 mt-0.5">1</span>
                    <span>Get off the local train at <strong>Virar Station (Platform 1 or 2)</strong>.</span>
                  </div>

                  <div className="flex items-start gap-3">
                    <span className="w-6 h-6 rounded-full bg-[#111827] text-white flex items-center justify-center font-bold text-xs shrink-0 mt-0.5">2</span>
                    <span>Take the pedestrian subway exit toward <strong>Virar East</strong>.</span>
                  </div>

                  <div className="flex items-start gap-3">
                    <span className="w-6 h-6 rounded-full bg-[#001752] text-white flex items-center justify-center font-bold text-xs shrink-0 mt-0.5">3</span>
                    <span>As soon as you climb the subway stairs, <strong>Raut Arcade</strong> is right opposite the subway opening.</span>
                  </div>

                  <div className="flex items-start gap-3">
                    <span className="w-6 h-6 rounded-full bg-[#C41E1E] text-white flex items-center justify-center font-bold text-xs shrink-0 mt-0.5">4</span>
                    <span>Come up to the <strong>2nd Floor, Room No. 202</strong>. Our reception team will welcome you.</span>
                  </div>
                </div>

                <div className="pt-2">
                  <a
                    href={SITE_CONFIG.address.googleMapsDirectLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full inline-flex items-center justify-center gap-2 h-11 px-5 rounded-full bg-[#001752] hover:bg-[#C41E1E] text-white text-xs font-bold transition-all shadow-xs active:scale-95"
                  >
                    <Navigation size={14} className="text-[#F5BE4F]" />
                    <span>Open Live Navigation in Google Maps</span>
                  </a>
                </div>
              </div>

              {/* Lab Preview Thumbnail */}
              <div className="rounded-3xl border border-slate-200 overflow-hidden bg-white shadow-sm">
                <div className="relative aspect-[16/10] overflow-hidden bg-slate-900">
                  <img
                    src="/images/lab-students.jpg"
                    alt="Students practicing on computers at Race Reddys Virar"
                    className="w-full h-full object-cover"
                  />
                  <span className="absolute top-3 left-3 bg-[#001752] text-white text-[10px] font-bold px-2.5 py-0.5 rounded-full shadow-sm">
                    Raut Arcade Lab 202
                  </span>
                  <span className="absolute bottom-3 left-3 right-3 bg-black/60 backdrop-blur-xs text-white text-[11px] font-semibold px-3 py-1.5 rounded-xl">
                    100% Practical • 1 Student : 1 Computer
                  </span>
                </div>
              </div>
            </div>

            {/* Right: Admission & Demo Class Form */}
            <div className="lg:col-span-7 bg-white p-6 sm:p-10 rounded-3xl border border-slate-200 shadow-sm">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-red-50 text-[#C41E1E] text-xs font-bold uppercase tracking-wider mb-3">
                <Sparkles size={12} />
                Free Counseling &amp; Demo Class
              </span>

              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#001752] tracking-tight mb-2">
                Book a Free Trial Session or Ask Course Fees
              </h2>

              <p className="text-xs sm:text-sm text-slate-500 mb-6 leading-relaxed">
                Fill out the quick form below. Our Virar East counselor will contact you with the complete syllabus brochure, batch timing options, and 50% concession details.
              </p>

              {submitted ? (
                <div className="p-8 rounded-2xl bg-emerald-50 border border-emerald-200 text-center flex flex-col items-center gap-3 animate-in fade-in">
                  <CheckCircle2 size={44} className="text-emerald-600" />
                  <h3 className="font-extrabold text-lg text-emerald-950">
                    Enquiry Submitted Successfully!
                  </h3>
                  <p className="text-xs sm:text-sm text-emerald-800 leading-relaxed max-w-md">
                    Thank you, <strong>{fullName}</strong>. Our Virar East coordinator will reach out to you at <strong>{phone}</strong> regarding <strong>{course}</strong>.
                  </p>

                  <div className="flex flex-col sm:flex-row gap-3 mt-4 w-full max-w-md">
                    <a
                      href={getWhatsAppPrefillUrl()}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full bg-[#25D366] hover:bg-[#20ba5a] text-white font-bold text-xs py-3 px-4 rounded-full flex items-center justify-center gap-2 transition shadow-xs"
                    >
                      <MessageSquare size={15} />
                      <span>Continue on WhatsApp Now</span>
                    </a>
                    <button
                      type="button"
                      onClick={() => {
                        setSubmitted(false);
                        setFullName('');
                        setPhone('');
                        setMessage('');
                      }}
                      className="w-full bg-white hover:bg-slate-50 text-slate-700 border border-slate-300 font-bold text-xs py-3 px-4 rounded-full transition"
                    >
                      Submit Another Enquiry
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1" htmlFor="full-name">
                      Full Name *
                    </label>
                    <input
                      id="full-name"
                      type="text"
                      required
                      value={fullName}
                      onChange={(e) => setFullName(e.target.value)}
                      placeholder="e.g. Rahul Sharma"
                      className="w-full text-xs sm:text-sm px-4 py-3 rounded-2xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-[#C41E1E] bg-white transition"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1" htmlFor="phone-number">
                        Mobile / WhatsApp Number *
                      </label>
                      <input
                        id="phone-number"
                        type="tel"
                        required
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        placeholder="e.g. 9876543210"
                        className="w-full text-xs sm:text-sm px-4 py-3 rounded-2xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-[#C41E1E] bg-white transition"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1" htmlFor="course-select">
                        Interested Course *
                      </label>
                      <select
                        id="course-select"
                        value={course}
                        onChange={(e) => setCourse(e.target.value)}
                        className="w-full text-xs sm:text-sm px-4 py-3 rounded-2xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-[#C41E1E] bg-white transition"
                      >
                        {COURSES.map((c) => (
                          <option key={c.id} value={c.name}>
                            {c.name} ({c.type === 'career' ? 'Career Diploma' : 'Short-Term'})
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1" htmlFor="batch-timing">
                      Preferred Batch Timing
                    </label>
                    <select
                      id="batch-timing"
                      value={preferredBatch}
                      onChange={(e) => setPreferredBatch(e.target.value)}
                      className="w-full text-xs sm:text-sm px-4 py-3 rounded-2xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-[#C41E1E] bg-white transition"
                    >
                      <option>Morning Batch (9:00 AM – 10:30 AM)</option>
                      <option>Mid-Day Batch (10:30 AM – 12:00 PM)</option>
                      <option>Ladies Batch (12:30 PM – 2:00 PM)</option>
                      <option>Afternoon Batch (2:00 PM – 3:30 PM)</option>
                      <option>Evening Student Batch (4:00 PM – 5:30 PM)</option>
                      <option>Late Evening Working Batch (5:30 PM – 7:00 PM)</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1" htmlFor="enquiry-notes">
                      Any specific questions? (Optional)
                    </label>
                    <textarea
                      id="enquiry-notes"
                      rows={3}
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      placeholder="e.g. Can I start from next Monday? Is installment facility available?"
                      className="w-full text-xs sm:text-sm px-4 py-3 rounded-2xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-[#C41E1E] bg-white transition"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full inline-flex items-center justify-center gap-2 h-12 px-8 rounded-full bg-[#C41E1E] hover:bg-[#A81717] text-white font-bold text-sm shadow-md transition-all active:scale-95 disabled:opacity-50"
                  >
                    <Send size={15} className="text-white" />
                    <span>{loading ? 'Submitting Enquiry...' : 'Submit Admission Enquiry'}</span>
                  </button>

                  <p className="text-[10px] text-slate-400 text-center pt-1">
                    🔒 Privacy Guarantee: No spam calls. Your details are used strictly by our Virar East coordinator.
                  </p>
                </form>
              )}
            </div>

          </div>
        </div>
      </section>

      <CtaBand
        title="Prefer to talk directly to an instructor?"
        description="Call 9794323963 or walk directly into our lab at 202, Raut Arcade, right across the Virar East railway subway. We are happy to help."
      />
    </>
  );
}
