import { useState, useEffect } from 'react';
import { 
  X, 
  Sparkles, 
  CheckCircle2, 
  Phone, 
  MessageSquare, 
  Laptop, 
  Clock, 
  User, 
  Send,
  ShieldCheck,
  Star
} from 'lucide-react';
import { SITE_CONFIG } from '../data/config';

const POPUP_DISMISS_KEY = 'race_admission_popup_dismissed_v1';

export default function AdmissionPopupModal() {
  const [isOpen, setIsOpen] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [fullName, setFullName] = useState('');
  const [phone, setPhone] = useState('');
  const [course, setCourse] = useState('Advanced Tally with GST');
  const [batch, setBatch] = useState('Morning Batch (9:00 AM – 12:00 PM)');
  const [errorMsg, setErrorMsg] = useState('');

  // Top course options
  const popularCourses = [
    'Advanced Tally with GST',
    'Full-Stack Software Development',
    'Marathi & English Typing (GCC-TBC)',
    'MS Office & Advanced Excel',
    'Graphic Designing & Photoshop',
    'AI, ML & Python Basics',
    'Basic Computer & Internet',
    'Other Career Diploma'
  ];

  const batchOptions = [
    'Morning Batch (9:00 AM – 12:00 PM)',
    'Special Ladies Batch (12:30 PM – 4:00 PM)',
    'Evening Batch (4:30 PM – 7:00 PM)',
    'Weekend / Flexible Slot'
  ];

  useEffect(() => {
    // Check if user already dismissed or submitted in this session
    const isDismissed = sessionStorage.getItem(POPUP_DISMISS_KEY);
    if (isDismissed) {
      return;
    }

    // Trigger popup exactly 10 seconds after site load
    const timer = setTimeout(() => {
      setIsOpen(true);
    }, 10000);

    return () => clearTimeout(timer);
  }, []);

  // Close modal and remember dismissal for this session
  const handleClose = () => {
    setIsOpen(false);
    sessionStorage.setItem(POPUP_DISMISS_KEY, 'true');
  };

  // Close on Escape key press (Accessibility / Platform standard)
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        handleClose();
      }
    };

    if (isOpen) {
      window.addEventListener('keydown', handleKeyDown);
      // Prevent background body scroll while modal is active
      document.body.style.overflow = 'hidden';
    }

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg('');

    const cleanPhone = phone.replace(/\D/g, '');
    if (cleanPhone.length < 10) {
      setErrorMsg('Please enter a valid 10-digit mobile number');
      return;
    }

    setSubmitted(true);
    sessionStorage.setItem(POPUP_DISMISS_KEY, 'true');

    // Build prefilled WhatsApp message
    const message = `Hello Race Reddys! My name is ${fullName.trim()}. I would like to apply for admission in *${course}* (${batch}). Please share the syllabus, 50% concession fee breakdown, and reserve my demo machine.`;
    const waUrl = `${SITE_CONFIG.contact.whatsapp}?text=${encodeURIComponent(message)}`;

    // Try to open WhatsApp in a new tab smoothly
    try {
      window.open(waUrl, '_blank', 'noopener,noreferrer');
    } catch {
      // Fallback if browser popup blocked
    }
  };

  const getWhatsAppUrl = () => {
    const message = `Hello Race Reddys! My name is ${fullName.trim() || 'Student'}. I want to confirm admission in *${course}* (${batch}) under the Flat 50% Concession Offer.`;
    return `${SITE_CONFIG.contact.whatsapp}?text=${encodeURIComponent(message)}`;
  };

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-5 overflow-y-auto bg-black/60 backdrop-blur-sm animate-in fade-in duration-200"
      role="dialog"
      aria-modal="true"
      aria-labelledby="admission-modal-title"
    >
      {/* Light-dismiss backdrop click */}
      <div 
        className="fixed inset-0" 
        onClick={handleClose} 
        aria-hidden="true" 
      />

      {/* Modal Dialog Card */}
      <div className="relative w-full max-w-lg bg-white rounded-3xl shadow-2xl border border-slate-200/90 overflow-hidden z-10 animate-in zoom-in-95 duration-200 my-auto">
        
        {/* Modal Header (Obsidian Planned-Style with Glowing Accent) */}
        <div className="relative bg-[#0B0F19] text-white p-5 sm:p-6 overflow-hidden">
          {/* Subtle Ambient Glows */}
          <div className="absolute -right-10 -top-10 w-44 h-44 bg-[#0084FF]/25 rounded-full blur-2xl pointer-events-none" />
          <div className="absolute -left-10 -bottom-10 w-40 h-40 bg-[#F5BE4F]/15 rounded-full blur-2xl pointer-events-none" />

          {/* Close Button */}
          <button
            type="button"
            onClick={handleClose}
            className="absolute top-4 right-4 w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 text-slate-300 hover:text-white flex items-center justify-center transition-colors z-20"
            aria-label="Close admission form"
          >
            <X size={18} />
          </button>

          <div className="relative z-10 pr-8">
            <div className="flex items-center gap-2 mb-2">
              <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-[#F5BE4F] text-[#0B0F19] text-[10px] font-black uppercase tracking-wider">
                <Sparkles size={11} className="fill-[#0B0F19]" />
                Admissions Open · 50% Concession
              </span>
              <span className="text-[10px] text-slate-400 font-bold uppercase tracking-wide">
                Virar East Station
              </span>
            </div>

            <h2 id="admission-modal-title" className="text-xl sm:text-2xl font-black text-white tracking-tight leading-snug">
              Book Your Free Demo Class
            </h2>
            <p className="text-xs sm:text-sm text-slate-300 mt-1 leading-relaxed">
              Reserve your individual computer machine &amp; claim a complimentary <strong className="text-white font-bold">Basic Computer Course</strong> with any career diploma.
            </p>
          </div>
        </div>

        {/* Modal Content */}
        <div className="p-5 sm:p-6 text-slate-800">
          {submitted ? (
            /* Success Confirmation Screen */
            <div className="text-center py-4 space-y-4 animate-in fade-in">
              <div className="w-14 h-14 rounded-full bg-emerald-50 text-emerald-600 border border-emerald-200 flex items-center justify-center mx-auto shadow-sm">
                <CheckCircle2 size={32} />
              </div>

              <div>
                <h3 className="text-xl font-black text-slate-900 tracking-tight">
                  Admission Inquiry Reserved!
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 mt-1.5 max-w-sm mx-auto leading-relaxed">
                  Thank you, <strong className="text-slate-900">{fullName}</strong>. We have registered your inquiry for <strong className="text-[#0084FF]">{course}</strong> ({batch}).
                </p>
              </div>

              <div className="p-3 bg-slate-50 rounded-2xl border border-slate-200 text-left text-xs space-y-1.5">
                <div className="flex items-center justify-between text-slate-600">
                  <span>Concession Status:</span>
                  <span className="font-bold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-200">
                    50% Discount Applied
                  </span>
                </div>
                <div className="flex items-center justify-between text-slate-600">
                  <span>Bonus:</span>
                  <span className="font-bold text-slate-900">Free Basic Computer Course</span>
                </div>
                <div className="flex items-center justify-between text-slate-600">
                  <span>Institute Location:</span>
                  <span className="font-bold text-slate-900">Raut Arcade 202, Opp. Virar East Station</span>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-2.5 pt-2">
                <a
                  href={getWhatsAppUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 inline-flex items-center justify-center gap-2 h-11 px-5 rounded-full bg-[#25D366] hover:bg-[#20BA5A] text-white text-xs sm:text-sm font-bold shadow-md transition-all active:scale-95"
                >
                  <MessageSquare size={16} />
                  <span>Open WhatsApp to Confirm</span>
                </a>

                <a
                  href={`tel:${SITE_CONFIG.contact.phone}`}
                  className="inline-flex items-center justify-center gap-1.5 h-11 px-5 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-900 text-xs sm:text-sm font-semibold transition-all active:scale-95"
                >
                  <Phone size={14} className="text-[#0084FF]" />
                  <span>Call {SITE_CONFIG.contact.phone}</span>
                </a>
              </div>

              <button
                type="button"
                onClick={handleClose}
                className="text-xs text-slate-400 hover:text-slate-700 underline font-medium pt-1"
              >
                Close and continue browsing
              </button>
            </div>
          ) : (
            /* Admission Form */
            <form onSubmit={handleSubmit} className="space-y-3.5">
              
              {/* Full Name */}
              <div>
                <label htmlFor="popup-fullname" className="block text-xs font-bold text-slate-700 mb-1">
                  Student Name <span className="text-rose-500">*</span>
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-slate-400">
                    <User size={15} />
                  </div>
                  <input
                    id="popup-fullname"
                    type="text"
                    required
                    placeholder="e.g. Rahul Patil / Priya Sharma"
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    className="w-full pl-9 pr-3.5 py-2.5 rounded-xl border border-slate-200 text-xs sm:text-sm text-slate-900 placeholder:text-slate-400 focus:outline-hidden focus:border-[#0084FF] focus:ring-2 focus:ring-[#0084FF]/20 transition-all"
                  />
                </div>
              </div>

              {/* Mobile / WhatsApp Number */}
              <div>
                <label htmlFor="popup-phone" className="block text-xs font-bold text-slate-700 mb-1">
                  WhatsApp / Mobile Number <span className="text-rose-500">*</span>
                </label>
                <div className="relative flex">
                  <span className="inline-flex items-center px-3 rounded-l-xl border border-r-0 border-slate-200 bg-slate-50 text-slate-500 text-xs font-bold">
                    +91
                  </span>
                  <input
                    id="popup-phone"
                    type="tel"
                    required
                    maxLength={10}
                    placeholder="98XXXXXXXX"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-r-xl border border-slate-200 text-xs sm:text-sm text-slate-900 placeholder:text-slate-400 focus:outline-hidden focus:border-[#0084FF] focus:ring-2 focus:ring-[#0084FF]/20 transition-all"
                  />
                </div>
                {errorMsg && (
                  <p className="text-[11px] text-rose-600 font-semibold mt-1">{errorMsg}</p>
                )}
              </div>

              {/* Course Selection */}
              <div>
                <label htmlFor="popup-course" className="block text-xs font-bold text-slate-700 mb-1">
                  Select Course <span className="text-rose-500">*</span>
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-slate-400">
                    <Laptop size={15} />
                  </div>
                  <select
                    id="popup-course"
                    value={course}
                    onChange={(e) => setCourse(e.target.value)}
                    className="w-full pl-9 pr-8 py-2.5 rounded-xl border border-slate-200 text-xs sm:text-sm text-slate-900 bg-white focus:outline-hidden focus:border-[#0084FF] focus:ring-2 focus:ring-[#0084FF]/20 transition-all appearance-none cursor-pointer"
                  >
                    {popularCourses.map((c) => (
                      <option key={c} value={c}>{c}</option>
                    ))}
                  </select>
                  <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none text-slate-400 text-xs">
                    ▼
                  </div>
                </div>
              </div>

              {/* Preferred Batch Timing */}
              <div>
                <label htmlFor="popup-batch" className="block text-xs font-bold text-slate-700 mb-1">
                  Preferred Batch Slot
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-slate-400">
                    <Clock size={15} />
                  </div>
                  <select
                    id="popup-batch"
                    value={batch}
                    onChange={(e) => setBatch(e.target.value)}
                    className="w-full pl-9 pr-8 py-2.5 rounded-xl border border-slate-200 text-xs sm:text-sm text-slate-900 bg-white focus:outline-hidden focus:border-[#0084FF] focus:ring-2 focus:ring-[#0084FF]/20 transition-all appearance-none cursor-pointer"
                  >
                    {batchOptions.map((b) => (
                      <option key={b} value={b}>{b}</option>
                    ))}
                  </select>
                  <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none text-slate-400 text-xs">
                    ▼
                  </div>
                </div>
              </div>

              {/* Social Proof / Trust Points */}
              <div className="flex items-center justify-between text-[11px] text-slate-500 pt-1 pb-1">
                <span className="flex items-center gap-1">
                  <ShieldCheck size={13} className="text-emerald-500" />
                  1 Student : 1 Machine
                </span>
                <span className="flex items-center gap-1">
                  <Star size={13} className="fill-amber-400 text-amber-400" />
                  4.9 Rated (5,000+ Alumni)
                </span>
              </div>

              {/* Submit CTA Button */}
              <button
                type="submit"
                className="w-full flex items-center justify-center gap-2 bg-[#0084FF] hover:bg-[#0074E0] text-white text-xs sm:text-sm font-bold py-3 px-6 rounded-full shadow-md hover:shadow-lg transition-all active:scale-95 cursor-pointer"
              >
                <span>Claim 50% Concession &amp; Book Demo</span>
                <Send size={14} />
              </button>

              <div className="flex items-center justify-between text-[10px] text-slate-400 pt-1">
                <span>Raut Arcade 202 · Opp. Subway, Virar East</span>
                <a
                  href={`tel:${SITE_CONFIG.contact.phone}`}
                  className="font-bold text-slate-600 hover:text-[#0084FF]"
                >
                  Call: {SITE_CONFIG.contact.phone}
                </a>
              </div>
            </form>
          )}
        </div>

      </div>
    </div>
  );
}
