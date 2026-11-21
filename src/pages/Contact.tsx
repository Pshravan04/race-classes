import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Phone, 
  MapPin, 
  Clock, 
  Send, 
  CheckCircle2, 
  Sparkles, 
  ArrowUpRight, 
  Train, 
  MessageSquare, 
  Monitor, 
  ChevronDown, 
  ChevronUp,
  CreditCard,
  Navigation
} from 'lucide-react';
import SEO from '../components/SEO';
import { SITE_CONFIG, COURSES } from '../data/config';

const CONTACT_FAQS = [
  {
    q: 'Do I need an appointment before walking in for a demo session?',
    a: 'No appointment is strictly required! You can walk in anytime between 9:00 AM and 7:00 PM, Monday to Saturday. However, if you want an instructor reserved specifically for a 1:1 demo in a particular course like Full-Stack, Tally GST, or Data Science, sending a quick WhatsApp message helps us assign your workstation in advance.'
  },
  {
    q: 'How far is Raut Arcade from Virar Railway Station?',
    a: 'Raut Arcade is located directly opposite the Virar East railway subway stairs on Station Road East. It is just a 2-minute walk (less than 200 steps) from Platform 1/2 exit. You do not need an auto-rickshaw or bus.'
  },
  {
    q: 'Can parents accompany students for fee and career counseling?',
    a: 'Yes, absolutely! We warmly encourage parents to visit our centre, inspect our air-conditioned computer labs, meet the faculty, and review our transparent monthly fee installment plans before taking admission.'
  },
  {
    q: 'How does the 50% Fee Concession and Free Basic Computer offer work?',
    a: 'The current 50% institutional concession is automatically deducted on course fees upon registration. Additionally, all career diploma programs include the complete Basic Computer foundation course completely free of charge. Inquire at our reception desk for current batch availability.'
  },
  {
    q: 'What are the office hours for admissions and fee payment?',
    a: 'Our admissions desk and lab are open Monday through Saturday from 9:00 AM to 7:00 PM. We are closed on Sundays for routine lab maintenance and system upgrades.'
  },
  {
    q: 'What payment modes are accepted for monthly fee installments?',
    a: 'We accept UPI (Google Pay, PhonePe, Paytm), cash at our reception desk, bank account transfers (NEFT/IMPS), and debit/credit cards. Official printed fee receipts are issued immediately for all payments.'
  }
];

export default function Contact() {
  const [fullName, setFullName] = useState('');
  const [phone, setPhone] = useState('');
  const [course, setCourse] = useState('Full Stack Developer Course');
  const [preferredBatch, setPreferredBatch] = useState('Morning Batch (9:00 AM – 10:30 AM)');
  const [inquiryGoal, setInquiryGoal] = useState<'demo' | 'fees' | 'counseling'>('demo');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!fullName.trim() || phone.replace(/\D/g, '').length !== 10) {
      alert('Please enter your full name and a valid 10-digit mobile number.');
      return;
    }

    setLoading(true);

    const goalLabel = 
      inquiryGoal === 'demo' ? 'Book Free 1:1 Demo Class' :
      inquiryGoal === 'fees' ? 'Fee Breakdown & 50% Concession' : 'Career Counseling';

    const text = `Hello RACE Computer Education! I want to submit an enquiry.
*Name:* ${fullName.trim()}
*Phone:* ${phone.trim()}
*Course:* ${course}
*Preferred Batch:* ${preferredBatch}
*Inquiry Goal:* ${goalLabel}
${message ? `*Notes:* ${message.trim()}` : ''}
*Location:* 202, Raut Arcade, Opp. Virar East Railway Station`;

    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
      window.open(`${SITE_CONFIG.contact.whatsapp}?text=${encodeURIComponent(text)}`, '_blank');
    }, 400);
  };

  return (
    <>
      <SEO
        title="Contact &amp; Location | RACE Computer Education Virar East"
        description="Visit RACE at 202, 2nd Floor, Raut Arcade, directly opposite Virar East railway station subway. Call 8793314239 / 8482881614 or WhatsApp 9794323963 for admissions and free demo."
        canonical="/contact"
      />

      {/* ══════════════════════════════════════════════════════════════════════
          SECTION 01 – EDITORIAL HERO
          ══════════════════════════════════════════════════════════════════════ */}
      <section aria-label="Contact Hero" className="bg-[#001752] text-white pt-10 sm:pt-14 pb-16 sm:pb-20 relative overflow-hidden border-b border-white/10">
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#C41E1E]/15 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          {/* Breadcrumbs */}
          <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-xs text-slate-300 mb-8 font-medium">
            <Link to="/" className="hover:text-white transition-colors">Home</Link>
            <span>/</span>
            <span className="text-white font-bold">Contact &amp; Location</span>
            <span className="hidden sm:inline text-slate-400">·</span>
            <span className="hidden sm:inline text-slate-400">Raut Arcade 202, Opp. Virar East Railway Station</span>
          </nav>

          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/15 text-xs font-bold tracking-wider uppercase mb-4 text-[#DF8383]">
              <Sparkles size={13} />
              <span>Directly Opposite Virar Railway Subway Exit</span>
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold font-heading text-white tracking-tight leading-[1.15] mb-5">
              Visit Our Lab at <span className="text-[#DF8383]">Raut Arcade 202</span> or Connect Instantly
            </h1>

            <p className="text-sm sm:text-base text-slate-200 leading-relaxed font-normal mb-8 max-w-2xl">
              Located on the 2nd Floor of Raut Arcade, directly facing the pedestrian subway stairs on Station Road East. Walk straight off the platform into our computer lab in just 2 minutes without needing an auto-rickshaw.
            </p>

            {/* Quick Action Badges */}
            <div className="flex flex-wrap gap-3">
              <a
                href="tel:8793314239"
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-full bg-white text-[#001752] text-xs font-bold hover:bg-slate-100 transition-all shadow-sm active:scale-95"
              >
                <Phone size={14} className="text-[#C41E1E]" />
                <span>Call Admissions: 8793314239</span>
              </a>

              <a
                href={`${SITE_CONFIG.contact.whatsapp}?text=${encodeURIComponent('Hello RACE! I want to visit for a free demo session.')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-full bg-[#25D366] hover:bg-[#20BA5A] text-white text-xs font-bold transition-all shadow-sm active:scale-95"
              >
                <Send size={14} />
                <span>WhatsApp Desk: 9794323963</span>
              </a>

              <a
                href={SITE_CONFIG.address.googleMapsDirectLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-full bg-white/10 hover:bg-white/15 border border-white/20 text-white text-xs font-bold transition-all"
              >
                <Navigation size={14} className="text-[#DF8383]" />
                <span>Live Google Maps Route</span>
              </a>
            </div>
          </div>

        </div>
      </section>


      {/* ══════════════════════════════════════════════════════════════════════
          SECTION 02 – 3 DIRECT COMMUNICATION CARDS
          ══════════════════════════════════════════════════════════════════════ */}
      <section aria-label="Direct Channels" className="bg-[#F6F7F9] py-10 sm:py-14 border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6" data-gsap="stagger-cards">
            
            {/* Card 1: Telephone Lines */}
            <div className="bg-white p-6 sm:p-7 rounded-3xl border border-slate-200/80 shadow-2xs hover:shadow-md transition-all flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-2xl bg-[#FCF4F4] text-[#C41E1E] flex items-center justify-center mb-4 border border-[#F8E4E4]">
                  <Phone size={22} />
                </div>
                <h3 className="font-bold text-base text-[#001752] mb-1">
                  Direct Institute Helplines
                </h3>
                <p className="text-xs text-slate-500 leading-relaxed mb-4">
                  Speak directly with our academic counselors for batch schedules and fee details:
                </p>

                <div className="space-y-2 mb-4">
                  {SITE_CONFIG.contact.phones.map((p) => (
                    <a
                      key={p.number}
                      href={`tel:${p.number}`}
                      className="flex items-center justify-between p-2.5 rounded-xl bg-[#F6F7F9] hover:bg-slate-100 transition-colors text-xs"
                    >
                      <span className="font-medium text-slate-600">{p.label}:</span>
                      <strong className="font-bold text-[#001752]">📞 {p.number}</strong>
                    </a>
                  ))}
                </div>
              </div>

              <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-[11px] text-slate-400 font-medium">
                <span>Mon–Sat: 9:00 AM – 7:00 PM</span>
                <span className="text-[#10b981] font-bold">● Active</span>
              </div>
            </div>

            {/* Card 2: WhatsApp Communication Desk */}
            <div className="bg-white p-6 sm:p-7 rounded-3xl border-2 border-[#10b981]/40 shadow-xs hover:shadow-md transition-all flex flex-col justify-between relative overflow-hidden">
              <div className="absolute top-0 right-0 bg-[#10b981] text-white text-[9.5px] font-black uppercase px-3 py-1 rounded-bl-xl tracking-wider">
                FASTEST REPLY
              </div>

              <div>
                <div className="w-12 h-12 rounded-2xl bg-emerald-50 text-[#10b981] flex items-center justify-center mb-4 border border-emerald-100">
                  <MessageSquare size={22} />
                </div>
                <h3 className="font-bold text-base text-[#001752] mb-1">
                  WhatsApp Support Desk
                </h3>
                <p className="text-xs text-slate-500 leading-relaxed mb-4">
                  Get PDF syllabus brochures, batch vacancy status, and fee concession charts within 5 minutes on WhatsApp:
                </p>

                <div className="bg-emerald-50/70 p-3 rounded-xl border border-emerald-100 text-xs mb-4">
                  <div className="font-bold text-[#065F46] mb-0.5">Direct Desk Number:</div>
                  <div className="text-base font-black text-[#047857] font-mono">9794323963</div>
                </div>
              </div>

              <a
                href={`${SITE_CONFIG.contact.whatsapp}?text=${encodeURIComponent('Hello RACE! I want to inquire about course admissions and fees.')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3 px-4 rounded-xl bg-[#25D366] hover:bg-[#20BA5A] text-white text-xs font-bold flex items-center justify-center gap-2 transition-all shadow-xs active:scale-95 cursor-pointer"
              >
                <Send size={14} />
                <span>Chat on WhatsApp Now</span>
              </a>
            </div>

            {/* Card 3: Campus Location & Hours */}
            <div className="bg-white p-6 sm:p-7 rounded-3xl border border-slate-200/80 shadow-2xs hover:shadow-md transition-all flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-2xl bg-[#001752]/5 text-[#001752] flex items-center justify-center mb-4 border border-slate-200">
                  <MapPin size={22} className="text-[#C41E1E]" />
                </div>
                <h3 className="font-bold text-base text-[#001752] mb-1">
                  Campus Address &amp; Timings
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed mb-3">
                  <strong>202, 2nd Floor, Raut Arcade</strong>, Directly Opposite Virar East Railway Station Subway, Station Road, Virar East, Maharashtra 401305.
                </p>

                <div className="space-y-1.5 text-xs text-slate-500 bg-[#F6F7F9] p-3 rounded-xl border border-slate-200/60 mb-4">
                  <div><strong>Monday – Saturday:</strong> 9:00 AM – 7:00 PM</div>
                  <div><strong>Sunday:</strong> Closed for routine maintenance</div>
                </div>
              </div>

              <a
                href={SITE_CONFIG.address.googleMapsDirectLink}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-2.5 px-4 rounded-xl bg-slate-100 hover:bg-[#001752] text-[#001752] hover:text-white text-xs font-bold flex items-center justify-center gap-2 transition-all border border-slate-200 cursor-pointer"
              >
                <span>Get Walking Directions</span>
                <ArrowUpRight size={14} />
              </a>
            </div>

          </div>
        </div>
      </section>


      {/* ══════════════════════════════════════════════════════════════════════
          SECTION 03 – TWO-COLUMN INTERACTIVE FORM & WALKING DIRECTIONS
          ══════════════════════════════════════════════════════════════════════ */}
      <section className="py-14 sm:py-20 bg-white border-b border-slate-200/70" id="enquiry">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start" data-gsap="fade-up">
            
            {/* Left Column: Station Subway Walking Route & Live Photo */}
            <div className="lg:col-span-5 space-y-6">
              
              {/* Walking Directions Guide */}
              <div className="bg-[#F6F7F9] p-6 sm:p-8 rounded-3xl border border-slate-200 shadow-2xs">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#FCF4F4] text-[#C41E1E] text-xs font-bold uppercase tracking-wider mb-3">
                  <Train size={12} />
                  <span>2-Minute Walking Guide</span>
                </span>

                <h2 className="text-xl sm:text-2xl font-bold font-heading text-[#001752] tracking-tight mb-2">
                  How to Walk In from Virar Station
                </h2>
                <p className="text-xs text-slate-600 leading-relaxed mb-6">
                  Follow these 4 simple steps after getting off the local train:
                </p>

                <div className="space-y-4 text-xs sm:text-sm text-slate-700 leading-relaxed">
                  <div className="flex items-start gap-3">
                    <span className="w-7 h-7 rounded-xl bg-[#001752] text-white flex items-center justify-center font-bold text-xs shrink-0 mt-0.5">
                      1
                    </span>
                    <div>
                      <strong className="text-[#001752] block font-bold">Platform 1 or 2 (Western Railway)</strong>
                      <span className="text-slate-500 text-xs">Alight your local train and proceed to the center pedestrian subway stairs.</span>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <span className="w-7 h-7 rounded-xl bg-[#001752] text-white flex items-center justify-center font-bold text-xs shrink-0 mt-0.5">
                      2
                    </span>
                    <div>
                      <strong className="text-[#001752] block font-bold">Follow Subway Toward Virar East</strong>
                      <span className="text-slate-500 text-xs">Walk through the underground subway toward the Station Road East exit.</span>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <span className="w-7 h-7 rounded-xl bg-[#C41E1E] text-white flex items-center justify-center font-bold text-xs shrink-0 mt-0.5">
                      3
                    </span>
                    <div>
                      <strong className="text-[#001752] block font-bold">Raut Arcade Opposite the Subway Stairs</strong>
                      <span className="text-slate-500 text-xs">As you climb up to the road, Raut Arcade is standing directly in front of you.</span>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <span className="w-7 h-7 rounded-xl bg-[#001752] text-white flex items-center justify-center font-bold text-xs shrink-0 mt-0.5">
                      4
                    </span>
                    <div>
                      <strong className="text-[#001752] block font-bold">Room 202, 2nd Floor</strong>
                      <span className="text-slate-500 text-xs">Take the stairs to the second floor. Our academic reception desk will guide you in.</span>
                    </div>
                  </div>
                </div>

                <div className="pt-6 mt-6 border-t border-slate-200">
                  <a
                    href={SITE_CONFIG.address.googleMapsDirectLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full inline-flex items-center justify-center gap-2 py-3 px-5 rounded-xl bg-[#001752] hover:bg-[#C41E1E] text-white text-xs font-bold transition-all shadow-sm active:scale-95 cursor-pointer"
                  >
                    <Navigation size={14} className="text-[#DF8383]" />
                    <span>Open Live Route on Google Maps</span>
                  </a>
                </div>
              </div>

              {/* Lab Visual Preview Card */}
              <div className="rounded-3xl border border-slate-200 overflow-hidden bg-[#001752] shadow-sm relative group">
                <div className="relative aspect-[16/10] overflow-hidden">
                  <img
                    src="/images/hero-lab.jpg"
                    alt="Authentic Computer Lab Workstations at RACE Virar East"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#001752]/80 via-transparent to-transparent" />
                  
                  <span className="absolute top-3 left-3 bg-[#001752]/90 backdrop-blur-xs text-white text-[10px] font-bold px-3 py-1 rounded-full shadow-sm">
                    Raut Arcade Lab 202
                  </span>

                  <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-white text-xs font-semibold">
                    <span className="bg-black/50 backdrop-blur-xs px-2.5 py-1 rounded-md text-[11px]">
                      1 Student : 1 Dedicated Workstation
                    </span>
                    <span className="text-[#10b981] font-bold text-[11px]">
                      ● Free Demos Daily
                    </span>
                  </div>
                </div>
              </div>

            </div>

            {/* Right Column: Admission & Free Demo Pass Form */}
            <div className="lg:col-span-7 bg-white p-6 sm:p-10 rounded-3xl border border-slate-200 shadow-md relative overflow-hidden">
              
              {/* Corner Concession Ribbon */}
              <div className="absolute top-0 right-0 overflow-hidden w-28 h-28 pointer-events-none">
                <div className="absolute transform rotate-45 bg-[#C41E1E] text-white text-[9.5px] font-black uppercase py-1 right-[-32px] top-[18px] w-[125px] text-center shadow-md tracking-wider">
                  ★ 50% OFF
                </div>
              </div>

              <div className="mb-6">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#FCF4F4] text-[#C41E1E] text-xs font-bold uppercase tracking-wider mb-2">
                  <Sparkles size={12} />
                  <span>Free Practical Demo Class</span>
                </span>

                <h2 className="text-2xl sm:text-3xl font-bold font-heading text-[#001752] tracking-tight leading-snug">
                  Book a Free Trial Class or Request Fee Slabs
                </h2>

                <p className="text-xs sm:text-sm text-slate-500 mt-2 leading-relaxed">
                  Fill in your details below. Our academic counseling coordinator will reach out with complete syllabus PDFs, batch timings, and the 50% fee concession chart.
                </p>
              </div>

              {submitted ? (
                <div className="p-8 rounded-2xl bg-[#F0FDF4] border border-[#BBF7D0] text-center flex flex-col items-center gap-3 animate-in fade-in">
                  <div className="w-14 h-14 rounded-full bg-[#10b981] text-white flex items-center justify-center mb-1">
                    <CheckCircle2 size={32} />
                  </div>
                  <h3 className="font-bold text-xl text-[#166534]">
                    Enquiry Submitted Successfully!
                  </h3>
                  <p className="text-xs sm:text-sm text-[#15803D] leading-relaxed max-w-md">
                    Thank you, <strong>{fullName}</strong>. Our admissions desk has received your request regarding <strong>{course}</strong>.
                  </p>

                  <div className="flex flex-col sm:flex-row gap-3 mt-4 w-full max-w-md">
                    <a
                      href={`${SITE_CONFIG.contact.whatsapp}?text=${encodeURIComponent(`Hello RACE! Following up on my enquiry for ${fullName} (${course})`)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full bg-[#25D366] hover:bg-[#20BA5A] text-white font-bold text-xs py-3.5 px-4 rounded-xl flex items-center justify-center gap-2 transition-all shadow-xs cursor-pointer"
                    >
                      <MessageSquare size={15} />
                      <span>Continue Chat on WhatsApp</span>
                    </a>
                    <button
                      type="button"
                      onClick={() => {
                        setSubmitted(false);
                        setFullName('');
                        setPhone('');
                        setMessage('');
                      }}
                      className="w-full bg-white hover:bg-slate-50 text-slate-700 border border-slate-300 font-bold text-xs py-3.5 px-4 rounded-xl transition-all cursor-pointer"
                    >
                      Submit Another Query
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  
                  {/* Inquiry Goal Selector */}
                  <div>
                    <label className="block text-xs font-bold text-[#001752] mb-1.5">
                      What is your primary goal?
                    </label>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                      <button
                        type="button"
                        onClick={() => setInquiryGoal('demo')}
                        className={`py-2 px-3 rounded-xl text-xs font-bold border transition-all cursor-pointer flex items-center justify-center gap-1.5 ${
                          inquiryGoal === 'demo'
                            ? 'bg-[#001752] text-white border-[#001752]'
                            : 'bg-[#F6F7F9] text-slate-700 border-slate-200 hover:bg-slate-100'
                        }`}
                      >
                        <Monitor size={13} />
                        <span>Book 1:1 Demo Class</span>
                      </button>

                      <button
                        type="button"
                        onClick={() => setInquiryGoal('fees')}
                        className={`py-2 px-3 rounded-xl text-xs font-bold border transition-all cursor-pointer flex items-center justify-center gap-1.5 ${
                          inquiryGoal === 'fees'
                            ? 'bg-[#001752] text-white border-[#001752]'
                            : 'bg-[#F6F7F9] text-slate-700 border-slate-200 hover:bg-slate-100'
                        }`}
                      >
                        <CreditCard size={13} />
                        <span>Syllabus &amp; Fee Details</span>
                      </button>

                      <button
                        type="button"
                        onClick={() => setInquiryGoal('counseling')}
                        className={`py-2 px-3 rounded-xl text-xs font-bold border transition-all cursor-pointer flex items-center justify-center gap-1.5 ${
                          inquiryGoal === 'counseling'
                            ? 'bg-[#001752] text-white border-[#001752]'
                            : 'bg-[#F6F7F9] text-slate-700 border-slate-200 hover:bg-slate-100'
                        }`}
                      >
                        <Phone size={13} />
                        <span>Career Counseling</span>
                      </button>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-[#001752] mb-1">
                      Full Name <span className="text-[#C41E1E]">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      value={fullName}
                      onChange={(e) => setFullName(e.target.value)}
                      placeholder="e.g. Rahul Sharma / Pooja Patil"
                      className="w-full text-xs sm:text-sm px-4 py-3 rounded-xl border border-slate-300 focus:outline-none focus:ring-1 focus:ring-[#001752] focus:border-[#001752] bg-white transition text-slate-800"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-[#001752] mb-1">
                        Mobile / WhatsApp Number <span className="text-[#C41E1E]">*</span>
                      </label>
                      <div className="flex items-center rounded-xl border border-slate-300 overflow-hidden focus-within:border-[#001752] focus-within:ring-1 focus-within:ring-[#001752]">
                        <span className="bg-slate-100 px-3 py-3 text-xs font-bold text-slate-600 border-r border-slate-300 shrink-0">
                          +91
                        </span>
                        <input
                          type="tel"
                          required
                          maxLength={10}
                          value={phone}
                          onChange={(e) => setPhone(e.target.value.replace(/\D/g, ''))}
                          placeholder="10-digit mobile number"
                          className="w-full text-xs sm:text-sm px-3.5 py-3 outline-none text-slate-800"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-[#001752] mb-1">
                        Interested Course <span className="text-[#C41E1E]">*</span>
                      </label>
                      <select
                        value={course}
                        onChange={(e) => setCourse(e.target.value)}
                        className="w-full text-xs sm:text-sm px-4 py-3 rounded-xl border border-slate-300 focus:outline-none focus:ring-1 focus:ring-[#001752] focus:border-[#001752] bg-white transition text-slate-800 cursor-pointer"
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
                    <label className="block text-xs font-bold text-[#001752] mb-1">
                      Preferred Batch Timing Slot
                    </label>
                    <select
                      value={preferredBatch}
                      onChange={(e) => setPreferredBatch(e.target.value)}
                      className="w-full text-xs sm:text-sm px-4 py-3 rounded-xl border border-slate-300 focus:outline-none focus:ring-1 focus:ring-[#001752] focus:border-[#001752] bg-white transition text-slate-800 cursor-pointer"
                    >
                      <option>Early Morning College Slot (7:30 AM – 9:00 AM)</option>
                      <option>Morning Batch (9:00 AM – 10:30 AM)</option>
                      <option>Mid-Day Batch (10:30 AM – 12:00 PM)</option>
                      <option>Special Ladies Batch (12:30 PM – 2:00 PM)</option>
                      <option>Afternoon Lab Session (2:30 PM – 4:00 PM)</option>
                      <option>Late Afternoon College Batch (4:30 PM – 6:00 PM)</option>
                      <option>Evening Working Commuters (6:00 PM – 7:30 PM)</option>
                      <option>Saturday Special Weekend Batch</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-[#001752] mb-1">
                      Any questions or specific requirements? (Optional)
                    </label>
                    <textarea
                      rows={3}
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      placeholder="e.g. Can I start from next Monday? Is installment facility available for students?"
                      className="w-full text-xs sm:text-sm px-4 py-3 rounded-xl border border-slate-300 focus:outline-none focus:ring-1 focus:ring-[#001752] focus:border-[#001752] bg-white transition text-slate-800 placeholder:text-slate-400"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full py-4 px-6 rounded-xl bg-[#C41E1E] hover:bg-[#931616] text-white font-bold text-xs sm:text-sm flex items-center justify-center gap-2 shadow-md transition-all active:scale-95 disabled:opacity-50 cursor-pointer mt-2"
                  >
                    <Send size={15} />
                    <span>{loading ? 'Opening WhatsApp...' : 'Submit Admission Enquiry via WhatsApp'}</span>
                  </button>

                  <p className="text-[11px] text-slate-400 text-center pt-1 font-medium">
                    🔒 Zero spam guarantee. Your details are strictly handled by our Raut Arcade admissions desk.
                  </p>
                </form>
              )}
            </div>

          </div>
        </div>
      </section>


      {/* ══════════════════════════════════════════════════════════════════════
          SECTION 04 – FREQUENTLY ASKED QUESTIONS ACCORDION
          ══════════════════════════════════════════════════════════════════════ */}
      <section aria-label="FAQs" className="bg-[#F6F7F9] py-14 sm:py-20 border-b border-slate-200/70">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <span className="text-[#C41E1E] text-xs font-bold tracking-wider uppercase block mb-1">
              VISITING &amp; ADMISSIONS
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold font-heading text-[#001752] tracking-tight">
              Frequently Asked Questions
            </h2>
          </div>

          <div className="space-y-3">
            {CONTACT_FAQS.map((faq, idx) => {
              const isOpen = openFaq === idx;
              return (
                <div
                  key={idx}
                  className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-2xs transition-all"
                >
                  <button
                    type="button"
                    onClick={() => setOpenFaq(isOpen ? null : idx)}
                    className="w-full p-5 text-left flex items-center justify-between gap-4 cursor-pointer hover:bg-slate-50/70"
                  >
                    <span className="text-xs sm:text-sm font-bold text-[#001752] pr-2">
                      {faq.q}
                    </span>
                    <span className="w-7 h-7 rounded-full bg-slate-100 flex items-center justify-center shrink-0 text-[#001752]">
                      {isOpen ? <ChevronUp size={15} /> : <ChevronDown size={15} />}
                    </span>
                  </button>

                  {isOpen && (
                    <div className="px-5 pb-5 text-xs text-slate-600 leading-relaxed border-t border-slate-100 pt-3">
                      {faq.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>


      {/* ══════════════════════════════════════════════════════════════════════
          SECTION 05 – FEATURED STATION WALK-IN CTA
          ══════════════════════════════════════════════════════════════════════ */}
      <section aria-label="Walk-in CTA" className="bg-white py-14 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-[#001752] rounded-3xl p-8 sm:p-12 text-white relative overflow-hidden shadow-xl border border-[#001752]">
            <div className="absolute top-0 right-0 w-80 h-80 bg-[#C41E1E]/20 rounded-full blur-3xl pointer-events-none" />

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
              
              <div className="lg:col-span-7">
                <span className="text-[#DF8383] text-xs font-bold tracking-wider uppercase block mb-1">
                  READY TO INSPECT OUR LAB?
                </span>
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold font-heading text-white tracking-tight mb-3">
                  Visit Raut Arcade Opposite the Station Today
                </h2>
                <p className="text-xs sm:text-sm text-slate-200 leading-relaxed mb-6 max-w-xl">
                  Walk in between 9:00 AM and 7:00 PM, Monday to Saturday. Take a seat on a dedicated desktop computer, meet our instructors, and experience a practical demo class yourself.
                </p>

                {/* Direct Helplines */}
                <div className="flex flex-wrap gap-2.5 mb-6">
                  <a
                    href="tel:8793314239"
                    className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-white/10 hover:bg-white/15 border border-white/15 text-xs font-bold text-white transition-colors"
                  >
                    <Phone size={13} className="text-[#DF8383]" />
                    <span>Admissions: 8793314239</span>
                  </a>

                  <a
                    href="tel:8482881614"
                    className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-white/10 hover:bg-white/15 border border-white/15 text-xs font-bold text-white transition-colors"
                  >
                    <Phone size={13} className="text-[#DF8383]" />
                    <span>Counseling: 8482881614</span>
                  </a>

                  <a
                    href="https://wa.me/919794323963"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-white/10 hover:bg-white/15 border border-white/15 text-xs font-bold text-white transition-colors"
                  >
                    <Send size={13} className="text-[#25D366]" />
                    <span>WhatsApp: 9794323963</span>
                  </a>
                </div>

                <div className="flex flex-wrap items-center gap-4">
                  <a
                    href={`${SITE_CONFIG.contact.whatsapp}?text=${encodeURIComponent(
                      'Hello! I want to visit Raut Arcade 202 for a free demo session.'
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-6 py-3.5 rounded-xl bg-[#C41E1E] hover:bg-[#931616] text-white text-xs font-bold transition-all shadow-md active:scale-95 cursor-pointer"
                  >
                    Book a Free Demo Pass →
                  </a>

                  <a
                    href={SITE_CONFIG.address.googleMapsDirectLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-5 py-3.5 rounded-xl bg-white/10 hover:bg-white/20 text-white text-xs font-bold border border-white/20 transition-all cursor-pointer"
                  >
                    <span>Open in Google Maps</span>
                    <ArrowUpRight size={14} />
                  </a>
                </div>
              </div>

              {/* Station Proximity Card */}
              <div className="lg:col-span-5 bg-white rounded-2xl p-6 text-[#001752] border border-white/20 shadow-lg">
                <div className="flex items-center gap-2 text-xs font-bold text-[#C41E1E] uppercase tracking-wider mb-2">
                  <span className="w-2 h-2 rounded-full bg-[#10b981] animate-pulse" />
                  <span>Direct Subway Location</span>
                </div>
                <h3 className="text-lg font-bold text-[#001752] mb-2 leading-snug">
                  2 Minutes on Foot from Virar Railway Station
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed mb-4">
                  Located on the 2nd Floor of Raut Arcade, directly facing the pedestrian subway stairs on Station Road East. You can walk straight in after getting off the train without needing an auto-rickshaw.
                </p>

                <div className="pt-3 border-t border-slate-100 flex flex-col gap-1.5 text-xs text-slate-500">
                  <div className="flex items-center gap-2">
                    <MapPin size={13} className="text-[#C41E1E]" />
                    <span>202, Raut Arcade, Station Road, Virar East</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock size={13} className="text-[#C41E1E]" />
                    <span>Mon–Sat: 9:00 AM – 7:00 PM (Sunday Closed)</span>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>
    </>
  );
}
