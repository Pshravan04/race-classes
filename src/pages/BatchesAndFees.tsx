import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Clock, 
  Sparkles, 
  MapPin, 
  CheckCircle2, 
  Monitor, 
  Heart, 
  ChevronDown, 
  ChevronUp, 
  Phone, 
  Send, 
  Train, 
  Calendar, 
  ArrowRight,
  ArrowUpRight,
  ShieldCheck,
  CreditCard,
  Gift
} from 'lucide-react';
import SEO from '../components/SEO';
import { BATCHES_SCHEDULE, SITE_CONFIG, COURSES } from '../data/config';

interface BatchFilter {
  id: string;
  label: string;
}

const FILTERS: BatchFilter[] = [
  { id: 'all', label: 'All 8 Slots' },
  { id: 'morning', label: 'Morning (7:30 AM – 12:00 PM)' },
  { id: 'ladies', label: 'Ladies Special (12:30 PM)' },
  { id: 'afternoon', label: 'Afternoon (2:30 PM – 6:00 PM)' },
  { id: 'evening', label: 'Evening & Commuters (6:00 PM+)' },
];

const BATCH_FAQS = [
  {
    q: 'Can I switch my batch timing later if my college or work timings change?',
    a: 'Yes, absolutely! We understand that college semester timetables, train schedules, and work shifts change. You can request a batch transfer to any available morning, afternoon, or evening slot without any penalty or transfer fee.'
  },
  {
    q: 'What happens if I miss a practical lab session due to travel or illness?',
    a: 'You never lose your syllabus progress at RACE. You can book a free 1:1 backup lab session with our lab mentor to complete missed practical exercises on your dedicated computer terminal.'
  },
  {
    q: 'How does the 12:30 PM Ladies and Homemakers batch work?',
    a: 'Our 12:30 PM to 2:00 PM slot is specially reserved for women, homemakers, and female students. It provides a peaceful, supportive lab environment with patient step-by-step guidance in Marathi, Hindi, or English, so you can learn without hesitation.'
  },
  {
    q: 'How does the monthly installment payment plan work?',
    a: 'We believe education should be accessible without financial strain. You do not need to pay the entire course fee upfront. Fees can be split into comfortable monthly installments paid directly at the institute office. No third-party loan apps, no interest charges.'
  },
  {
    q: 'How do I claim the 50% Fee Concession and Free Basic Computer offer?',
    a: 'The current 50% concession is automatically applied to our career diploma and professional certifications. Additionally, enrolling in any professional program includes the complete Basic Computer foundation course completely free of charge. Contact our admissions desk to confirm your seat.'
  },
  {
    q: 'Can I attend a free demo class before finalizing my batch?',
    a: 'Yes, 100%! We strongly encourage every prospective student and parent to sit for a free 1:1 practical demo on our lab computer. Experience the teaching method and inspect our Raut Arcade facilities before taking admission.'
  }
];

export default function BatchesAndFees() {
  const [selectedFilter, setSelectedFilter] = useState('all');
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  // Form State
  const [studentName, setStudentName] = useState('');
  const [studentPhone, setStudentPhone] = useState('');
  const [selectedCourse, setSelectedCourse] = useState('Full Stack Developer Course');
  const [selectedBatchSlot, setSelectedBatchSlot] = useState('Morning Batch (9:00 AM – 10:30 AM)');
  const [formSubmitted, setFormSubmitted] = useState(false);

  // Filter batches
  const filteredBatches = BATCHES_SCHEDULE.filter((slot) => {
    if (selectedFilter === 'all') return true;
    if (selectedFilter === 'morning') {
      return slot.timing.includes('AM') || slot.name.toLowerCase().includes('morning');
    }
    if (selectedFilter === 'ladies') {
      return slot.highlight || slot.name.toLowerCase().includes('ladies');
    }
    if (selectedFilter === 'afternoon') {
      return slot.timing.includes('2:30') || slot.timing.includes('4:30') || slot.name.toLowerCase().includes('afternoon');
    }
    if (selectedFilter === 'evening') {
      return slot.timing.includes('6:00') || slot.name.toLowerCase().includes('evening') || slot.name.toLowerCase().includes('weekend');
    }
    return true;
  });

  const handleSeatFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!studentName.trim() || studentPhone.replace(/\D/g, '').length !== 10) {
      alert('Please enter your full name and a valid 10-digit mobile number.');
      return;
    }

    const message = `Hello RACE Institute! I want to check seat availability & book a demo.
*Name:* ${studentName.trim()}
*Phone:* ${studentPhone.trim()}
*Course:* ${selectedCourse}
*Preferred Slot:* ${selectedBatchSlot}
*Location:* Raut Arcade 202, Opp Virar East Station`;

    window.open(`${SITE_CONFIG.contact.whatsapp}?text=${encodeURIComponent(message)}`, '_blank');
    setFormSubmitted(true);
  };

  return (
    <>
      <SEO
        title="Daily Batch Timings & Fee Slabs | RACE Computer Institute Virar East"
        description="View 8 daily 1.5-hour practical batch slots from 7:30 AM to 7:30 PM at RACE Virar East. Dedicated ladies batch, 1:1 PC guarantee, and transparent monthly fee installments."
        canonical="/batches"
      />

      {/* ══════════════════════════════════════════════════════════════════════
          SECTION 01 – EDITORIAL HERO WITH QUICK RESERVATION CARD
          ══════════════════════════════════════════════════════════════════════ */}
      <section aria-label="Hero" className="bg-[#001752] text-white pt-10 sm:pt-14 pb-16 sm:pb-20 relative overflow-hidden border-b border-white/10">
        {/* Subtle Brand Background Accents */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#C41E1E]/15 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          {/* Breadcrumbs */}
          <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-xs text-slate-300 mb-8 font-medium">
            <Link to="/" className="hover:text-white transition-colors">Home</Link>
            <span>/</span>
            <span className="text-white font-bold">Batches &amp; Timetable</span>
            <span className="hidden sm:inline text-slate-400">·</span>
            <span className="hidden sm:inline text-slate-400">Raut Arcade 202, Opp Virar Station Subway</span>
          </nav>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
            
            {/* Left Column – Timetable Overview & Highlights */}
            <div className="lg:col-span-7">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/15 text-xs font-bold tracking-wider uppercase mb-4 text-[#DF8383]">
                <Clock size={13} />
                <span>Daily Lab Timetable · Monday to Saturday</span>
              </div>

              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold font-heading text-white tracking-tight leading-[1.15] mb-5">
                8 Flexible Daily Slots with <span className="text-[#DF8383]">1:1 Dedicated PC</span> Guarantee
              </h1>

              <p className="text-sm sm:text-base text-slate-200 leading-relaxed max-w-2xl mb-8 font-normal">
                Batches run Monday to Saturday from <strong>7:30 AM to 7:30 PM</strong>. Designed to fit comfortably around college lectures, household routines, and Mumbai local train commutes.
              </p>

              {/* 3 Value Metrics */}
              <div className="grid grid-cols-3 gap-3 sm:gap-4 max-w-xl mb-8">
                <div className="bg-white/10 backdrop-blur-xs rounded-2xl p-4 border border-white/15 text-center">
                  <strong className="block text-xl sm:text-2xl font-bold text-white font-heading">
                    8 Slots
                  </strong>
                  <span className="text-[11px] sm:text-xs text-slate-300 font-medium">
                    7:30 AM – 7:30 PM
                  </span>
                </div>

                <div className="bg-white/10 backdrop-blur-xs rounded-2xl p-4 border border-white/15 text-center">
                  <strong className="block text-xl sm:text-2xl font-bold text-white font-heading">
                    1.5 Hrs
                  </strong>
                  <span className="text-[11px] sm:text-xs text-slate-300 font-medium">
                    Daily Machine Time
                  </span>
                </div>

                <div className="bg-white/10 backdrop-blur-xs rounded-2xl p-4 border border-white/15 text-center">
                  <strong className="block text-xl sm:text-2xl font-bold text-[#10b981] font-heading">
                    1:1 PC
                  </strong>
                  <span className="text-[11px] sm:text-xs text-slate-300 font-medium">
                    Zero Screen Sharing
                  </span>
                </div>
              </div>

              {/* Station Proximity Badge */}
              <div className="flex items-center gap-3 text-xs sm:text-sm text-slate-300">
                <div className="w-8 h-8 rounded-full bg-[#C41E1E] text-white flex items-center justify-center shrink-0">
                  <Train size={16} />
                </div>
                <span>
                  <strong>2 Minutes on Foot:</strong> Directly facing Virar East railway subway stairs at Raut Arcade 202.
                </span>
              </div>
            </div>

            {/* Right Column – Instant Slot Reservation Form */}
            <div className="lg:col-span-5">
              <div className="bg-white rounded-3xl p-6 sm:p-8 shadow-2xl border border-slate-100 text-[#001752] relative overflow-hidden">
                
                {/* Ribbon Tag on Form */}
                <div className="absolute top-0 right-0 overflow-hidden w-28 h-28 pointer-events-none">
                  <div className="absolute transform rotate-45 bg-[#C41E1E] text-white text-[9.5px] font-black uppercase py-1 right-[-32px] top-[18px] w-[125px] text-center shadow-md tracking-wider">
                    ★ 50% OFF
                  </div>
                </div>

                <div className="mb-6">
                  <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-[#FCF4F4] text-[#C41E1E] text-[11px] font-bold uppercase tracking-wider mb-2">
                    <Sparkles size={11} />
                    <span>Free 1:1 Demo Pass</span>
                  </span>
                  <h2 className="text-xl sm:text-2xl font-bold font-heading text-[#001752] leading-snug">
                    Reserve Your Preferred Timing Slot
                  </h2>
                  <p className="text-xs text-slate-500 mt-1">
                    Lock in your machine workstation &amp; confirm seat availability.
                  </p>
                </div>

                {formSubmitted ? (
                  <div className="bg-[#F0FDF4] border border-[#BBF7D0] rounded-2xl p-6 text-center">
                    <div className="w-12 h-12 rounded-full bg-[#10b981] text-white flex items-center justify-center mx-auto mb-3">
                      <CheckCircle2 size={24} />
                    </div>
                    <h3 className="text-base font-bold text-[#166534] mb-1">
                      Slot Reservation Request Sent!
                    </h3>
                    <p className="text-xs text-[#15803D] leading-relaxed mb-4">
                      Our admissions coordinator is reviewing seat availability for your selected batch slot.
                    </p>
                    <a
                      href={`${SITE_CONFIG.contact.whatsapp}?text=${encodeURIComponent(`Hello RACE! Checking slot status for ${studentName}`)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#25D366] text-white text-xs font-bold hover:bg-[#1EBE5D] transition-colors"
                    >
                      <Send size={13} />
                      <span>Continue Chat on WhatsApp</span>
                    </a>
                  </div>
                ) : (
                  <form onSubmit={handleSeatFormSubmit} className="space-y-4">
                    <div>
                      <label className="block text-xs font-bold text-[#001752] mb-1">
                        Full Name <span className="text-[#C41E1E]">*</span>
                      </label>
                      <input
                        type="text"
                        required
                        value={studentName}
                        onChange={(e) => setStudentName(e.target.value)}
                        placeholder="e.g. Rohini Patil / Amit Sharma"
                        className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-xs sm:text-sm focus:border-[#001752] focus:ring-1 focus:ring-[#001752] outline-none text-slate-800 transition-all placeholder:text-slate-400"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-[#001752] mb-1">
                        WhatsApp Mobile Number <span className="text-[#C41E1E]">*</span>
                      </label>
                      <div className="flex items-center rounded-xl border border-slate-300 overflow-hidden focus-within:border-[#001752] focus-within:ring-1 focus-within:ring-[#001752]">
                        <span className="bg-slate-100 px-3 py-2.5 text-xs font-bold text-slate-600 border-r border-slate-300 shrink-0">
                          +91
                        </span>
                        <input
                          type="tel"
                          required
                          maxLength={10}
                          value={studentPhone}
                          onChange={(e) => setStudentPhone(e.target.value.replace(/\D/g, ''))}
                          placeholder="10-digit mobile number"
                          className="w-full px-3.5 py-2.5 text-xs sm:text-sm outline-none text-slate-800 placeholder:text-slate-400"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-[#001752] mb-1">
                        Interested Course
                      </label>
                      <select
                        value={selectedCourse}
                        onChange={(e) => setSelectedCourse(e.target.value)}
                        className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-xs sm:text-sm focus:border-[#001752] focus:ring-1 focus:ring-[#001752] outline-none text-slate-800 bg-white cursor-pointer"
                      >
                        {COURSES.slice(0, 10).map((c) => (
                          <option key={c.id} value={c.name}>{c.name}</option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-[#001752] mb-1">
                        Preferred Batch Timing Slot
                      </label>
                      <select
                        value={selectedBatchSlot}
                        onChange={(e) => setSelectedBatchSlot(e.target.value)}
                        className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-xs sm:text-sm focus:border-[#001752] focus:ring-1 focus:ring-[#001752] outline-none text-slate-800 bg-white cursor-pointer"
                      >
                        {BATCHES_SCHEDULE.map((s, idx) => (
                          <option key={idx} value={`${s.name} (${s.timing})`}>
                            {s.name} — {s.timing}
                          </option>
                        ))}
                      </select>
                    </div>

                    <button
                      type="submit"
                      className="w-full py-3.5 px-6 rounded-xl bg-[#C41E1E] hover:bg-[#931616] text-white font-bold text-xs sm:text-sm flex items-center justify-center gap-2 shadow-md transition-all active:scale-95 cursor-pointer mt-2"
                    >
                      <Send size={15} />
                      <span>Check Seat Availability via WhatsApp</span>
                    </button>

                    <div className="flex items-center justify-between text-[11px] text-slate-400 pt-2 font-medium">
                      <span>✓ 1:1 Demo on Real Machine</span>
                      <span>✓ Direct Admission Helpline</span>
                    </div>
                  </form>
                )}
              </div>
            </div>

          </div>
        </div>
      </section>


      {/* ══════════════════════════════════════════════════════════════════════
          SECTION 02 – 4-PILLAR PRACTICAL LAB ADVANTAGE STRIP
          ══════════════════════════════════════════════════════════════════════ */}
      <section aria-label="Key Advantages" className="bg-[#F6F7F9] py-8 border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
            <div className="flex items-center gap-3 bg-white p-4 rounded-2xl border border-slate-200 shadow-2xs">
              <div className="w-10 h-10 rounded-xl bg-[#FCF4F4] text-[#C41E1E] flex items-center justify-center shrink-0">
                <Monitor size={20} />
              </div>
              <div>
                <strong className="block text-xs sm:text-sm font-bold text-[#001752]">1:1 Dedicated PC</strong>
                <span className="text-[11px] text-slate-500">Zero machine sharing</span>
              </div>
            </div>

            <div className="flex items-center gap-3 bg-white p-4 rounded-2xl border border-slate-200 shadow-2xs">
              <div className="w-10 h-10 rounded-xl bg-[#FCF4F4] text-[#C41E1E] flex items-center justify-center shrink-0">
                <CreditCard size={20} />
              </div>
              <div>
                <strong className="block text-xs sm:text-sm font-bold text-[#001752]">Monthly Slabs</strong>
                <span className="text-[11px] text-slate-500">Pay-as-you-learn easily</span>
              </div>
            </div>

            <div className="flex items-center gap-3 bg-white p-4 rounded-2xl border border-slate-200 shadow-2xs">
              <div className="w-10 h-10 rounded-xl bg-[#FCF4F4] text-[#C41E1E] flex items-center justify-center shrink-0">
                <Heart size={20} />
              </div>
              <div>
                <strong className="block text-xs sm:text-sm font-bold text-[#001752]">Ladies 12:30 PM</strong>
                <span className="text-[11px] text-slate-500">Exclusive peaceful batch</span>
              </div>
            </div>

            <div className="flex items-center gap-3 bg-white p-4 rounded-2xl border border-slate-200 shadow-2xs">
              <div className="w-10 h-10 rounded-xl bg-[#FCF4F4] text-[#C41E1E] flex items-center justify-center shrink-0">
                <MapPin size={20} />
              </div>
              <div>
                <strong className="block text-xs sm:text-sm font-bold text-[#001752]">Opp. Subway 2-Min</strong>
                <span className="text-[11px] text-slate-500">Raut Arcade 2nd Floor</span>
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* ══════════════════════════════════════════════════════════════════════
          SECTION 03 – INTERACTIVE DAILY TIMETABLE SCHEDULE (White Canvas)
          ══════════════════════════════════════════════════════════════════════ */}
      <section aria-label="Timetable Schedule" className="bg-white py-14 sm:py-20 border-b border-slate-200/70">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
            <div>
              <span className="text-[#C41E1E] text-xs font-bold tracking-wider uppercase block mb-1">
                LAB TIMETABLE
              </span>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold font-heading text-[#001752] tracking-tight">
                Daily Practical Lab Timetable (Mon–Sat)
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 mt-2 leading-relaxed max-w-2xl">
                Every batch includes 1.5 hours of continuous workstation access with active instructor guidance. Click a category below to filter suitable slots:
              </p>
            </div>

            {/* Quick Status Legend */}
            <div className="flex items-center gap-4 text-xs font-semibold shrink-0">
              <div className="flex items-center gap-1.5">
                <span className="w-2.5 h-2.5 rounded-full bg-[#10b981]" />
                <span className="text-slate-700">Available</span>
              </div>
              <div className="flex items-center gap-1.5">
                <span className="w-2.5 h-2.5 rounded-full bg-[#F59E0B]" />
                <span className="text-slate-700">Filling Fast</span>
              </div>
              <div className="flex items-center gap-1.5">
                <span className="w-2.5 h-2.5 rounded-full bg-[#C41E1E]" />
                <span className="text-slate-700">Special Batch</span>
              </div>
            </div>
          </div>

          {/* Timing Filters Pills */}
          <div className="flex flex-wrap gap-2 mb-8">
            {FILTERS.map((f) => (
              <button
                key={f.id}
                type="button"
                onClick={() => setSelectedFilter(f.id)}
                className={`px-4 py-2 rounded-full text-xs font-bold transition-all cursor-pointer ${
                  selectedFilter === f.id
                    ? 'bg-[#001752] text-white shadow-xs'
                    : 'bg-[#F6F7F9] text-slate-700 hover:bg-slate-200 border border-slate-200'
                }`}
              >
                {f.label}
              </button>
            ))}
          </div>

          {/* Batches Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            {filteredBatches.map((slot, index) => {
              const isLadies = slot.highlight;
              const isFillingFast = slot.status === 'Filling Fast';

              return (
                <div
                  key={index}
                  className={`rounded-3xl p-6 transition-all flex flex-col justify-between relative group ${
                    isLadies
                      ? 'bg-[#FFF9F9] border-2 border-[#C41E1E] shadow-sm hover:shadow-md'
                      : 'bg-[#F6F7F9] border border-slate-200 hover:border-[#001752]/40 hover:bg-white hover:shadow-md'
                  }`}
                >
                  {/* Ladies Priority Badge or Filling Fast Pill */}
                  {isLadies && (
                    <div className="absolute -top-3 left-5 bg-gradient-to-r from-[#C41E1E] to-[#931616] text-white text-[10px] font-black uppercase tracking-wider px-3 py-0.5 rounded-full shadow-xs flex items-center gap-1">
                      <Heart size={10} className="fill-white" />
                      <span>Dedicated Ladies Batch</span>
                    </div>
                  )}

                  <div>
                    {/* Timing Header */}
                    <div className="flex items-center justify-between gap-2 mb-3">
                      <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-white border border-slate-200 text-xs font-mono font-bold text-[#001752]">
                        <Clock size={12} className="text-[#C41E1E]" />
                        <span>{slot.timing}</span>
                      </span>

                      <span
                        className={`text-[10px] font-extrabold uppercase px-2 py-0.5 rounded-full ${
                          isLadies
                            ? 'bg-[#C41E1E]/10 text-[#C41E1E]'
                            : isFillingFast
                            ? 'bg-amber-100 text-amber-800'
                            : 'bg-emerald-100 text-emerald-800'
                        }`}
                      >
                        {slot.status}
                      </span>
                    </div>

                    <h3 className="text-base font-bold text-[#001752] mb-2 leading-snug">
                      {slot.name}
                    </h3>

                    <p className="text-xs text-slate-600 leading-relaxed mb-4">
                      <strong>Recommended for:</strong> {slot.targetAudience}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-slate-200/80">
                    <div className="flex items-center justify-between text-[11px] text-slate-500 mb-3 font-medium">
                      <span>Machine Ratio</span>
                      <strong className="text-[#001752]">1:1 Dedicated PC</strong>
                    </div>

                    <a
                      href={`${SITE_CONFIG.contact.whatsapp}?text=${encodeURIComponent(
                        `Hello! I want to confirm seat availability for the "${slot.name}" (${slot.timing}) at RACE Virar East.`
                      )}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`w-full py-2.5 px-3 rounded-xl text-xs font-bold flex items-center justify-center gap-1.5 transition-all shadow-2xs cursor-pointer ${
                        isLadies
                          ? 'bg-[#C41E1E] hover:bg-[#931616] text-white'
                          : 'bg-white hover:bg-[#001752] text-[#001752] hover:text-white border border-slate-200'
                      }`}
                    >
                      <span>Check Slot Seats</span>
                      <ArrowRight size={13} />
                    </a>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Timetable Footnote */}
          <div className="mt-8 p-4 rounded-2xl bg-[#F6F7F9] border border-slate-200/80 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-600">
            <div className="flex items-center gap-2">
              <Calendar size={15} className="text-[#001752]" />
              <span><strong>Shift Worker Customization:</strong> Need a customized rotating timing slot? Contact our desk.</span>
            </div>
            <span className="font-semibold text-[#C41E1E]">Sundays: Closed for routine system updates</span>
          </div>

        </div>
      </section>


      {/* ══════════════════════════════════════════════════════════════════════
          SECTION 04 – SPECIAL SPOTLIGHT: LADIES & HOMEMAKERS BATCH
          ══════════════════════════════════════════════════════════════════════ */}
      <section aria-label="Ladies Batch" className="bg-[#F6F7F9] py-14 sm:py-20 border-b border-slate-200/70">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-3xl border border-slate-200/80 overflow-hidden shadow-sm grid grid-cols-1 lg:grid-cols-12 items-center">
            
            {/* Image Column */}
            <div className="lg:col-span-5 relative h-72 sm:h-96 lg:h-full min-h-[300px]">
              <img
                src="/images/ladies-guidance.jpg"
                alt="Supportive ladies computer training session at RACE Virar East"
                className="w-full h-full object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#001752]/70 via-transparent to-transparent" />
              <div className="absolute bottom-5 left-5 right-5 text-white">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#C41E1E] text-white text-[10px] font-black uppercase tracking-wider shadow-sm mb-2">
                  <Heart size={10} className="fill-white" />
                  <span>Exclusive 12:30 PM Slot</span>
                </span>
                <p className="text-xs font-semibold text-slate-200">
                  Quiet, supportive, and respectful atmosphere for women learners of all ages.
                </p>
              </div>
            </div>

            {/* Content Column */}
            <div className="lg:col-span-7 p-6 sm:p-10 lg:p-12">
              <span className="text-[#C41E1E] text-xs font-bold tracking-wider uppercase block mb-1">
                SPECIAL DEDICATED INITIATIVE
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold font-heading text-[#001752] tracking-tight mb-4">
                Special Ladies &amp; Homemakers Batch (12:30 PM – 2:00 PM)
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-6">
                Designed specifically for homemakers, working women, and mothers who have completed morning family responsibilities and want to learn computer skills, Tally, Excel, or typing at their own comfortable pace.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                <div className="flex items-start gap-3">
                  <div className="w-7 h-7 rounded-lg bg-[#FCF4F4] text-[#C41E1E] flex items-center justify-center shrink-0 mt-0.5">
                    <CheckCircle2 size={16} />
                  </div>
                  <div>
                    <strong className="text-xs font-bold text-[#001752] block">Marathi &amp; Hindi Medium</strong>
                    <span className="text-[11px] text-slate-500">Explained in simple, non-technical everyday words.</span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-7 h-7 rounded-lg bg-[#FCF4F4] text-[#C41E1E] flex items-center justify-center shrink-0 mt-0.5">
                    <CheckCircle2 size={16} />
                  </div>
                  <div>
                    <strong className="text-xs font-bold text-[#001752] block">Zero Rush, Infinite Patience</strong>
                    <span className="text-[11px] text-slate-500">Practice mouse, keyboard, and shortcuts until 100% confident.</span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-7 h-7 rounded-lg bg-[#FCF4F4] text-[#C41E1E] flex items-center justify-center shrink-0 mt-0.5">
                    <CheckCircle2 size={16} />
                  </div>
                  <div>
                    <strong className="text-xs font-bold text-[#001752] block">Safe Station Location</strong>
                    <span className="text-[11px] text-slate-500">Directly facing Virar East station subway stairs in Raut Arcade.</span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-7 h-7 rounded-lg bg-[#FCF4F4] text-[#C41E1E] flex items-center justify-center shrink-0 mt-0.5">
                    <CheckCircle2 size={16} />
                  </div>
                  <div>
                    <strong className="text-xs font-bold text-[#001752] block">Free Demo Trial</strong>
                    <span className="text-[11px] text-slate-500">Sit for a free 1-day demo before paying any admission fees.</span>
                  </div>
                </div>
              </div>

              <a
                href={`${SITE_CONFIG.contact.whatsapp}?text=${encodeURIComponent(
                  'Hello! I would like to enquire about the special 12:30 PM Ladies Batch at RACE Virar East.'
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[#001752] hover:bg-[#001038] text-white text-xs font-bold transition-all shadow-md active:scale-95 cursor-pointer"
              >
                <Heart size={14} className="text-[#DF8383]" />
                <span>Enquire About Ladies Batch on WhatsApp</span>
              </a>
            </div>

          </div>
        </div>
      </section>


      {/* ══════════════════════════════════════════════════════════════════════
          SECTION 05 – TRANSPARENT FEE POLICY & 50% CONCESSION
          ══════════════════════════════════════════════════════════════════════ */}
      <section aria-label="Fee Policy" className="bg-white py-14 sm:py-20 border-b border-slate-200/70">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="max-w-3xl mb-12">
            <span className="text-[#C41E1E] text-xs font-bold tracking-wider uppercase block mb-1">
              HONEST &amp; AFFORDABLE
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold font-heading text-[#001752] tracking-tight">
              Transparent Fee Counseling &amp; Monthly Slabs
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 mt-2.5 leading-relaxed">
              Unlike commercial training chains that trap students into predatory third-party NBFC loan apps, RACE operates on transparent, honest, and affordable monthly fee installments for local Virar families.
            </p>
          </div>

          {/* 3 Fee Principles */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            
            <div className="bg-[#F6F7F9] p-6 rounded-3xl border border-slate-200/80 shadow-2xs relative overflow-hidden">
              <div className="w-12 h-12 rounded-2xl bg-white text-[#C41E1E] flex items-center justify-center font-bold mb-4 shadow-2xs border border-slate-200">
                <Gift size={22} />
              </div>
              <h3 className="text-base font-bold text-[#001752] mb-2">
                1. Flat Upfront 50% Concession
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed mb-4">
                Every admitted student receives the current 50% institutional fee concession automatically deducted at registration. No hidden coupon codes or conditions.
              </p>
              <div className="text-[11px] font-bold text-[#C41E1E]">
                ✓ Applicable across all diploma programs
              </div>
            </div>

            <div className="bg-[#F6F7F9] p-6 rounded-3xl border border-slate-200/80 shadow-2xs relative overflow-hidden">
              <div className="w-12 h-12 rounded-2xl bg-white text-[#001752] flex items-center justify-center font-bold mb-4 shadow-2xs border border-slate-200">
                <CreditCard size={22} />
              </div>
              <h3 className="text-base font-bold text-[#001752] mb-2">
                2. Monthly Easy Installments
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed mb-4">
                Pay comfortably in simple monthly installments as you learn. Zero interest, zero processing fees, and zero third-party loan commitments.
              </p>
              <div className="text-[11px] font-bold text-[#001752]">
                ✓ Pay month-by-month at institute office
              </div>
            </div>

            <div className="bg-[#F6F7F9] p-6 rounded-3xl border border-slate-200/80 shadow-2xs relative overflow-hidden">
              <div className="w-12 h-12 rounded-2xl bg-white text-[#10b981] flex items-center justify-center font-bold mb-4 shadow-2xs border border-slate-200">
                <ShieldCheck size={22} />
              </div>
              <h3 className="text-base font-bold text-[#001752] mb-2">
                3. Zero Extra Exam or Lab Fees
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed mb-4">
                Your workstation access, printed study materials, practical assignment tests, and ISO 9001:2015 accredited certificate are 100% all-inclusive.
              </p>
              <div className="text-[11px] font-bold text-[#10b981]">
                ✓ 100% transparent fee receipt guarantee
              </div>
            </div>

          </div>

          {/* WhatsApp Fee Breakdown Callout Strip */}
          <div className="bg-[#001752] rounded-3xl p-6 sm:p-8 text-white flex flex-col md:flex-row items-center justify-between gap-6 shadow-sm border border-[#001752]">
            <div className="max-w-xl">
              <span className="text-[#DF8383] text-xs font-bold tracking-wider uppercase block mb-1">
                INSTANT WHATSAPP QUOTE
              </span>
              <h3 className="text-xl sm:text-2xl font-bold font-heading text-white tracking-tight mb-2">
                Need the exact installment schedule for your course?
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                Send us a message with your selected course. We will send you the exact month-by-month fee breakdown with the 50% concession applied within 5 minutes.
              </p>
            </div>

            <a
              href={`${SITE_CONFIG.contact.whatsapp}?text=${encodeURIComponent(
                'Hello! Please send me the fee breakdown, installment schedule, and 50% discount details for courses at RACE Virar East.'
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-[#C41E1E] hover:bg-[#931616] text-white text-xs sm:text-sm font-bold transition-all shadow-md active:scale-95 shrink-0 cursor-pointer"
            >
              <Send size={15} />
              <span>Get Exact Fee Quote (WhatsApp)</span>
            </a>
          </div>

        </div>
      </section>


      {/* ══════════════════════════════════════════════════════════════════════
          SECTION 06 – BATCHES & ADMISSIONS FAQ ACCORDION
          ══════════════════════════════════════════════════════════════════════ */}
      <section aria-label="FAQs" className="bg-[#F6F7F9] py-14 sm:py-20 border-b border-slate-200/70">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <span className="text-[#C41E1E] text-xs font-bold tracking-wider uppercase block mb-1">
              ADMISSIONS &amp; TIMINGS
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold font-heading text-[#001752] tracking-tight">
              Frequently Asked Questions
            </h2>
          </div>

          <div className="space-y-3">
            {BATCH_FAQS.map((faq, idx) => {
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
          SECTION 07 – FEATURED STATION WALK-IN CTA
          ══════════════════════════════════════════════════════════════════════ */}
      <section aria-label="Walk-in CTA" className="bg-white py-14 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-[#001752] rounded-3xl p-8 sm:p-12 text-white relative overflow-hidden shadow-xl border border-[#001752]">
            <div className="absolute top-0 right-0 w-80 h-80 bg-[#C41E1E]/20 rounded-full blur-3xl pointer-events-none" />

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
              
              <div className="lg:col-span-7">
                <span className="text-[#DF8383] text-xs font-bold tracking-wider uppercase block mb-1">
                  WALK IN &amp; SIT FOR A FREE DEMO
                </span>
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold font-heading text-white tracking-tight mb-3">
                  Inspect Our Computer Lab Opposite Virar Station Today
                </h2>
                <p className="text-xs sm:text-sm text-slate-200 leading-relaxed mb-6 max-w-xl">
                  Walk in anytime between 9:00 AM and 7:00 PM, Monday to Saturday. Sit on a dedicated computer workstation, meet the faculty, and experience a practical lesson in person.
                </p>

                {/* Direct Verified Institute Helplines */}
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
                      'Hello! I want to book a free demo session at RACE Virar East.'
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-6 py-3 rounded-xl bg-[#C41E1E] hover:bg-[#931616] text-white text-xs font-bold transition-all shadow-md active:scale-95 cursor-pointer"
                  >
                    Book a Free Demo Pass →
                  </a>

                  <a
                    href={SITE_CONFIG.address.googleMapsDirectLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-white/10 hover:bg-white/20 text-white text-xs font-bold border border-white/20 transition-all cursor-pointer"
                  >
                    <span>Open in Google Maps</span>
                    <ArrowUpRight size={14} />
                  </a>
                </div>
              </div>

              {/* Station Proximity Box */}
              <div className="lg:col-span-5 bg-white rounded-2xl p-6 text-[#001752] border border-white/20 shadow-lg">
                <div className="flex items-center gap-2 text-xs font-bold text-[#C41E1E] uppercase tracking-wider mb-2">
                  <span className="w-2 h-2 rounded-full bg-[#10b981] animate-pulse" />
                  <span>Prime Station Location</span>
                </div>
                <h3 className="text-lg font-bold text-[#001752] mb-2 leading-snug">
                  2 Minutes on Foot from Virar Railway Station
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed mb-4">
                  Located on the 2nd Floor of Raut Arcade, directly facing the railway subway stairs on Station Road East. You can walk straight in after getting off the train without needing an auto-rickshaw.
                </p>

                <div className="pt-3 border-t border-slate-100 flex flex-col gap-1.5 text-xs text-slate-500">
                  <div className="flex items-center gap-2">
                    <MapPin size={13} className="text-[#C41E1E]" />
                    <span>202, Raut Arcade, Station Road, Virar East</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock size={13} className="text-[#C41E1E]" />
                    <span>Mon–Sat: 7:30 AM – 7:30 PM (Sunday Closed)</span>
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
