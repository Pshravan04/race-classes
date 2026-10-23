import { useState } from 'react';
import { Phone, MessageSquare, MapPin, Clock, Send, CheckCircle2 } from 'lucide-react';
import SEO from '../components/SEO';
import RailwayTrackDivider from '../components/RailwayTrackDivider';
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
    // Simulate submission to backend / local storage
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 600);
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

      {/* Header Banner */}
      <section className="bg-[#FAF7EE] border-b border-[#E8E2D5] py-10 sm:py-14">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="station-board-yellow inline-block mb-3 text-xs font-black">
              CONTACT &amp; LOCATION • संपर्क आणि पत्ता
            </div>
            
            <h1 className="text-3xl sm:text-4xl font-extrabold text-[#071B3A] font-serif-heading mb-3">
              Visit Our Centre or Chat With Our Instructors
            </h1>
            
            <p className="text-sm sm:text-base text-[#4A5568] leading-relaxed">
              We are located directly opposite the Virar East railway subway. Just 2 minutes on foot from Platform 2 exit. Walk in anytime during working hours.
            </p>
          </div>
        </div>
      </section>

      {/* Main Contact Grid */}
      <section className="py-12 sm:py-16 bg-[#FBF9F5]" id="demo">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
            
            {/* Left Column: Direct Contacts & Address Cards (5 cols) */}
            <div className="lg:col-span-5 space-y-6">
              
              {/* Quick Action Buttons */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <a
                  href={`tel:${SITE_CONFIG.contact.phone}`}
                  className="flex items-center justify-center gap-2.5 bg-[#071B3A] hover:bg-[#0E2B5C] text-white p-4 rounded-xl font-bold text-sm shadow-xs transition-colors border border-[#C59B27]"
                  aria-label={`Call ${SITE_CONFIG.contact.phoneDisplay}`}
                >
                  <Phone size={18} className="text-[#D8AF3E]" />
                  <span>Call {SITE_CONFIG.contact.phone}</span>
                </a>

                <a
                  href={`${SITE_CONFIG.contact.whatsapp}?text=${encodeURIComponent(
                    'Hello! I would like to visit Race Reddys Virar East for course admission.'
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#20BA5A] text-white p-4 rounded-xl font-bold text-sm shadow-xs transition-colors"
                  aria-label="Chat with institute on WhatsApp"
                >
                  <MessageSquare size={18} />
                  <span>WhatsApp Us</span>
                </a>
              </div>

              {/* Physical Location Card */}
              <div className="bg-white p-6 rounded-2xl border border-[#E8E2D5] shadow-xs space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-xl bg-[#071B3A] text-[#C59B27] flex items-center justify-center shrink-0">
                    <MapPin size={20} />
                  </div>
                  <div>
                    <span className="text-[11px] font-bold text-gray-500 uppercase tracking-wider block">
                      Physical Address
                    </span>
                    <strong className="text-sm sm:text-base text-[#071B3A] font-bold block mt-0.5">
                      {SITE_CONFIG.address.line1}
                    </strong>
                    <span className="text-xs text-[#4A5568] block mt-0.5 leading-relaxed">
                      {SITE_CONFIG.address.line2}, {SITE_CONFIG.address.city}, {SITE_CONFIG.address.state} – {SITE_CONFIG.address.pin}
                    </span>
                    <span className="text-xs text-[#6B5A24] font-medium block mt-1">
                      Landmark: {SITE_CONFIG.address.landmark}
                    </span>
                  </div>
                </div>

                <div className="pt-3 border-t border-[#E8E2D5] flex items-start gap-3">
                  <div className="w-10 h-10 rounded-xl bg-[#FAF7EE] text-[#071B3A] flex items-center justify-center shrink-0 border border-[#E8E2D5]">
                    <Clock size={19} className="text-[#C0392B]" />
                  </div>
                  <div>
                    <span className="text-[11px] font-bold text-gray-500 uppercase tracking-wider block">
                      Working Timings
                    </span>
                    <strong className="text-xs sm:text-sm text-[#071B3A] font-bold block mt-0.5">
                      Monday to Saturday: 9:00 AM – 7:00 PM
                    </strong>
                    <span className="text-xs text-gray-500 block">
                      Sunday: Closed (Special classes by appointment)
                    </span>
                  </div>
                </div>
              </div>

              {/* Embedded Google Map */}
              <div className="bg-white p-2 rounded-2xl border border-[#E8E2D5] shadow-xs overflow-hidden">
                <div className="relative aspect-[16/10] w-full rounded-xl overflow-hidden bg-gray-100">
                  <iframe
                    title="Race Reddys Location opposite Virar East Railway Station"
                    src={SITE_CONFIG.address.googleMapsEmbedUrl}
                    className="w-full h-full border-0"
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  />
                </div>
                <div className="p-3 text-center">
                  <a
                    href={SITE_CONFIG.address.googleMapsDirectLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs font-bold text-[#071B3A] hover:text-[#C59B27] underline"
                  >
                    Open in Google Maps Application ↗
                  </a>
                </div>
              </div>

            </div>

            {/* Right Column: Admission Enquiry & Demo Booking Form (7 cols) */}
            <div className="lg:col-span-7">
              <div className="bg-white p-6 sm:p-8 rounded-2xl border border-[#E8E2D5] shadow-xs">
                
                <div className="station-board mb-3 text-xs">
                  BOOK FREE DEMO / ENQUIRY
                </div>

                <h2 className="text-2xl font-bold text-[#071B3A] font-serif-heading mb-2">
                  Admission Enquiry &amp; Demo Class Registration
                </h2>

                <p className="text-xs sm:text-sm text-[#4A5568] leading-relaxed mb-6">
                  Fill in your details below. You can submit directly or send these details to us via WhatsApp with one tap.
                </p>

                {submitted ? (
                  <div className="p-6 bg-[#FAF7EE] border border-[#C59B27] rounded-xl text-center space-y-3 animate-in fade-in">
                    <CheckCircle2 size={40} className="text-[#25D366] mx-auto" />
                    <h3 className="text-lg font-bold text-[#071B3A] font-serif-heading">
                      Thank you, {fullName}!
                    </h3>
                    <p className="text-xs sm:text-sm text-[#4A5568] max-w-md mx-auto leading-relaxed">
                      We have received your enquiry for <strong className="text-[#071B3A]">{course}</strong>. Our faculty will reach out to you shortly at <strong className="text-[#071B3A]">{phone}</strong>.
                    </p>
                    <div className="pt-2">
                      <a
                        href={getWhatsAppPrefillUrl()}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 bg-[#25D366] text-white text-xs font-bold px-4 py-2.5 rounded-lg"
                      >
                        <MessageSquare size={14} />
                        <span>Also Send to Us on WhatsApp</span>
                      </a>
                    </div>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    
                    {/* Full Name */}
                    <div>
                      <label htmlFor="fullname" className="block text-xs font-bold text-[#071B3A] mb-1">
                        Full Name <span className="text-[#C0392B]">*</span>
                      </label>
                      <input
                        id="fullname"
                        type="text"
                        required
                        placeholder="e.g. Rahul Patil / Priya Sharma"
                        value={fullName}
                        onChange={(e) => setFullName(e.target.value)}
                        className="w-full px-3.5 py-2.5 rounded-xl border border-[#E8E2D5] text-sm text-[#071B3A] focus:outline-hidden focus:border-[#C59B27] focus:ring-2 focus:ring-[#C59B27]/20"
                      />
                    </div>

                    {/* Phone Number */}
                    <div>
                      <label htmlFor="phone" className="block text-xs font-bold text-[#071B3A] mb-1">
                        Phone / WhatsApp Number <span className="text-[#C0392B]">*</span>
                      </label>
                      <input
                        id="phone"
                        type="tel"
                        required
                        placeholder="10-digit mobile number"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        className="w-full px-3.5 py-2.5 rounded-xl border border-[#E8E2D5] text-sm text-[#071B3A] focus:outline-hidden focus:border-[#C59B27] focus:ring-2 focus:ring-[#C59B27]/20"
                      />
                    </div>

                    {/* Course Selection */}
                    <div>
                      <label htmlFor="course-select" className="block text-xs font-bold text-[#071B3A] mb-1">
                        Course You Are Interested In
                      </label>
                      <select
                        id="course-select"
                        value={course}
                        onChange={(e) => setCourse(e.target.value)}
                        className="w-full px-3.5 py-2.5 rounded-xl border border-[#E8E2D5] text-sm text-[#071B3A] focus:outline-hidden focus:border-[#C59B27] bg-white"
                      >
                        <optgroup label="Short-Term Courses (12)">
                          {COURSES.filter((c) => c.type === 'short-term').map((c) => (
                            <option key={c.id} value={c.name}>
                              {c.name}
                            </option>
                          ))}
                        </optgroup>
                        <optgroup label="Career-Objective Courses (11)">
                          {COURSES.filter((c) => c.type === 'career').map((c) => (
                            <option key={c.id} value={c.name}>
                              {c.name}
                            </option>
                          ))}
                        </optgroup>
                      </select>
                    </div>

                    {/* Preferred Batch */}
                    <div>
                      <label htmlFor="batch-select" className="block text-xs font-bold text-[#071B3A] mb-1">
                        Preferred Batch Timing
                      </label>
                      <select
                        id="batch-select"
                        value={preferredBatch}
                        onChange={(e) => setPreferredBatch(e.target.value)}
                        className="w-full px-3.5 py-2.5 rounded-xl border border-[#E8E2D5] text-sm text-[#071B3A] focus:outline-hidden focus:border-[#C59B27] bg-white"
                      >
                        <option value="Morning Batch (7:30 AM – 9:00 AM)">Early Morning College Batch (7:30 AM – 9:00 AM)</option>
                        <option value="Morning Batch (9:00 AM – 10:30 AM)">Morning General Batch (9:00 AM – 10:30 AM)</option>
                        <option value="Late Morning Batch (10:30 AM – 12:00 PM)">Late Morning Batch (10:30 AM – 12:00 PM)</option>
                        <option value="Special Ladies Batch (12:30 PM – 2:00 PM)">Special Ladies &amp; Homemakers Batch (12:30 PM – 2:00 PM)</option>
                        <option value="Afternoon Practical Batch (2:30 PM – 4:00 PM)">Afternoon Lab Batch (2:30 PM – 4:00 PM)</option>
                        <option value="Late Afternoon Batch (4:30 PM – 6:00 PM)">Late Afternoon College Batch (4:30 PM – 6:00 PM)</option>
                        <option value="Evening Working Professionals (6:00 PM – 7:30 PM)">Evening Working Professionals (6:00 PM – 7:30 PM)</option>
                        <option value="Weekend Special Batch">Weekend Batch</option>
                      </select>
                    </div>

                    {/* Optional Message */}
                    <div>
                      <label htmlFor="notes" className="block text-xs font-bold text-[#071B3A] mb-1">
                        Any specific requirement or question? (Optional)
                      </label>
                      <textarea
                        id="notes"
                        rows={3}
                        placeholder="e.g. Do you have weekend slots? Want to know fees with 50% offer..."
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        className="w-full px-3.5 py-2 rounded-xl border border-[#E8E2D5] text-sm text-[#071B3A] focus:outline-hidden focus:border-[#C59B27]"
                      />
                    </div>

                    {/* Action Buttons: Submit + WhatsApp Fallback */}
                    <div className="pt-2 flex flex-col sm:flex-row gap-3">
                      <button
                        type="submit"
                        disabled={loading}
                        className="flex-1 inline-flex items-center justify-center gap-2 bg-[#071B3A] hover:bg-[#0E2B5C] text-white font-bold text-sm py-3 px-6 rounded-xl border border-[#C59B27] transition-all cursor-pointer disabled:opacity-50"
                      >
                        <Send size={16} className="text-[#D8AF3E]" />
                        <span>{loading ? 'Submitting...' : 'Submit Admission Enquiry'}</span>
                      </button>

                      <a
                        href={getWhatsAppPrefillUrl()}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#20BA5A] text-white font-bold text-sm py-3 px-5 rounded-xl transition-all"
                      >
                        <MessageSquare size={16} />
                        <span>Send via WhatsApp Fallback</span>
                      </a>
                    </div>

                    <p className="text-[11px] text-gray-500 pt-1">
                      🔒 Your phone number is kept strictly confidential. We do not spam.
                    </p>

                  </form>
                )}

              </div>
            </div>

          </div>
        </div>
      </section>

      <RailwayTrackDivider label="VIRAR EAST • OPP. SUBWAY • MON–SAT 9 AM–7 PM" />
    </>
  );
}
