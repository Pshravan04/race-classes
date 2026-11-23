import { Link } from 'react-router-dom';
import { 
  ArrowRight, 
  MapPin, 
  Clock, 
  Phone,
  CheckCircle2, 
  Monitor, 
  Users, 
  Award, 
  ShieldCheck, 
  Sparkles
} from 'lucide-react';
import SEO from '../components/SEO';
import { SITE_CONFIG } from '../data/config';

export default function About() {
  return (
    <>
      <SEO
        title="About Us | RACE Practical Computer Education Virar East"
        description="The story of RACE: eliminating the stressful commute to Mumbai with 100% practical computer education right opposite the Virar East railway station subway. 10+ years of empowering local learners."
        canonical="/about"
      />

      <div className="w-full text-[#0B0B0B] font-body selection:bg-[#C41E1E] selection:text-white">

        {/* ══════════════════════════════════════════════════════════════════════
            SECTION 01 – HERO (Seamless White Canvas Flowing from Header)
            ══════════════════════════════════════════════════════════════════════ */}
        <section aria-label="About RACE" className="bg-white pt-8 sm:pt-12 pb-16 sm:pb-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            
            {/* Top Red Eyebrow */}
            <div className="mb-4">
              <span className="text-[#C41E1E] text-xs font-bold tracking-wider uppercase">
                PRACTICAL IT &amp; COMPUTER EDUCATION · ESTABLISHED 2014
              </span>
            </div>

            {/* Split Top Row: Headline Left, CTAs Right */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-start mb-8 sm:mb-10">
              
              {/* Left Column: Two-line Headline + Subtitle */}
              <div className="lg:col-span-7 space-y-3">
                <h1 className="text-4xl sm:text-5xl lg:text-[60px] font-bold text-[#001752] font-heading leading-[1.08] tracking-tight">
                  Built for practical skills.<br />
                  Rooted in Vasai-Virar.
                </h1>
                <p className="text-sm sm:text-base text-slate-600 font-normal pt-1 max-w-xl">
                  We founded RACE with one clear conviction: students, homemakers, and job seekers in Vasai-Virar should never have to spend 4 exhausting hours in crowded local trains just to learn quality computer skills.
                </p>
              </div>

              {/* Right Column: Workstation Note, Dual Buttons, Subway Note */}
              <div className="lg:col-span-5 flex flex-col lg:items-end space-y-4 pt-1 lg:pt-2">
                <p className="text-xs sm:text-sm text-slate-600 lg:text-right max-w-sm">
                  100% individual workstation practice, patient desk mentoring, and recognized ISO certification right outside the station.
                </p>

                {/* Two Action Buttons Side-by-Side */}
                <div className="flex flex-wrap items-center gap-3">
                  <Link
                    to="/courses"
                    className="inline-flex items-center gap-1.5 bg-[#C41E1E] hover:bg-[#931616] text-white text-xs sm:text-sm font-bold px-5 sm:px-6 py-2.5 sm:py-3 rounded-full transition-all shadow-xs active:scale-95 cursor-pointer"
                  >
                    <span>Explore courses</span>
                    <ArrowRight size={14} />
                  </Link>

                  <Link
                    to="/contact#demo"
                    className="inline-flex items-center gap-1.5 bg-white hover:bg-slate-50 text-slate-800 border border-slate-300 text-xs sm:text-sm font-bold px-5 sm:px-6 py-2.5 sm:py-3 rounded-full transition-all active:scale-95 cursor-pointer"
                  >
                    <span>Book a lab tour</span>
                    <ArrowRight size={14} />
                  </Link>
                </div>

                <span className="text-[11px] text-slate-400 font-medium lg:text-right">
                  Opp. Virar East Railway Station Subway · Raut Arcade 202
                </span>
              </div>

            </div>

            {/* Dominant Hero Image Container with Rounded Corners */}
            <div className="relative w-full rounded-2xl sm:rounded-3xl overflow-hidden aspect-[16/9] sm:aspect-[21/9] lg:aspect-[2.35/1] bg-slate-900 border border-slate-200">
              <img
                src="/images/real-lab-classroom.jpg"
                alt="Students practicing in computer lab at RACE Virar East"
                className="w-full h-full object-cover"
                loading="eager"
                onError={(e) => {
                  (e.target as HTMLImageElement).src = '/hero-lab.jpg';
                }}
              />

              {/* Floating White Pill Inside Bottom-Left of Image */}
              <div className="absolute bottom-4 left-4 sm:bottom-6 sm:left-6 z-10">
                <div className="inline-flex items-center gap-2 bg-white/95 backdrop-blur-md px-3.5 py-1.5 rounded-full shadow-md text-[#001752] text-xs font-semibold">
                  <span className="w-2 h-2 rounded-full bg-[#10b981] animate-pulse" />
                  <span>1 Student : 1 PC Guaranteed · Air-conditioned lab</span>
                </div>
              </div>
            </div>

            {/* Caption Line Below Image */}
            <div className="flex items-center justify-between text-xs text-slate-500 pt-3.5 px-1 font-medium">
              <span>Individual machine time · No sharing</span>
              <span>Raut Arcade 202, Virar East</span>
            </div>

          </div>
        </section>


        {/* ══════════════════════════════════════════════════════════════════════
            SECTION 02 – THE SUBURBAN STORY & 3 METRIC CARDS (Pale Section)
            ══════════════════════════════════════════════════════════════════════ */}
        <section aria-label="Our Mission" className="bg-[#F6F7F9] py-16 sm:py-24 border-y border-slate-200/70">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            
            {/* Top Eyebrow */}
            <div className="mb-3">
              <span className="text-[#C41E1E] text-xs font-bold tracking-wider uppercase">
                THE SUBURBAN EDUCATION CHALLENGE
              </span>
            </div>

            {/* Top Narrative Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start mb-12 sm:mb-16">
              
              <div className="lg:col-span-7 space-y-4 text-slate-600 text-sm sm:text-base leading-relaxed font-normal">
                <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-bold text-[#001752] font-heading leading-tight tracking-tight">
                  Why spend 4 hours in crowded trains for computer training?
                </h2>
                
                <p className="pt-1">
                  Every morning, thousands of youths and college students board crowded Western Railway local trains heading toward distant city hubs like Dadar, Andheri, or CST. Many spend up to 4 exhausting hours every day just to attend a 90-minute computer or accounting class.
                </p>

                <p>
                  <strong className="text-[#001752] font-semibold">RACE was founded in 2014 to end this commute.</strong> Located on the 2nd Floor of Raut Arcade, directly opposite the Virar East railway station subway exit, we bring modern software curriculums, licensed lab workstations, and experienced faculty right to your doorstep in Vasai-Virar.
                </p>

                <p>
                  Here, students learn at their own pace with 100% individual workstation time. No sharing keyboards, no rushed theoretical lectures, and zero commute fatigue.
                </p>
              </div>

              {/* Right Side Highlight Card */}
              <div className="lg:col-span-5 pt-2">
                <div className="bg-white rounded-2xl sm:rounded-3xl p-6 sm:p-8 border border-[#E5E7EB] shadow-xs space-y-4">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FCF4F4] border border-[#F8E4E4] text-[#C41E1E] text-xs font-bold uppercase tracking-wider">
                    <Sparkles size={12} />
                    <span>The RACE Standard</span>
                  </div>

                  <h3 className="text-lg sm:text-xl font-bold text-[#001752]">
                    Dedicated Learning Environment
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                    You receive your own dedicated computer terminal during every scheduled session. Whether learning TallyPrime, full-stack programming, or graphic design, your hands stay on the keyboard from minute one.
                  </p>

                  <div className="pt-2 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
                    <span className="flex items-center gap-1.5 font-semibold text-[#001752]">
                      <MapPin size={14} className="text-[#C41E1E]" />
                      <span>Raut Arcade 202</span>
                    </span>
                    <span className="text-[#10b981] font-bold">Opp. Subway Exit</span>
                  </div>
                </div>
              </div>

            </div>

            {/* Three White Metric Cards with Subtle Red Bottom Borders */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-6">
              
              {/* Card 1 */}
              <div className="bg-white rounded-2xl p-6 sm:p-8 border border-[#E5E7EB] border-b-2 border-b-[#C41E1E] shadow-2xs flex flex-col justify-between">
                <div>
                  <span className="text-4xl sm:text-5xl font-black text-[#001752] font-heading block tracking-tight">
                    10+
                  </span>
                  <h3 className="text-sm font-bold text-slate-800 mt-2">
                    Years of practical mentorship
                  </h3>
                  <p className="text-xs text-slate-500 leading-relaxed mt-1">
                    Dedicated IT and practical computer education in Virar East since 2014.
                  </p>
                </div>
              </div>

              {/* Card 2 */}
              <div className="bg-white rounded-2xl p-6 sm:p-8 border border-[#E5E7EB] border-b-2 border-b-[#C41E1E] shadow-2xs flex flex-col justify-between">
                <div>
                  <span className="text-4xl sm:text-5xl font-black text-[#001752] font-heading block tracking-tight">
                    500+
                  </span>
                  <h3 className="text-sm font-bold text-slate-800 mt-2">
                    Students trained
                  </h3>
                  <p className="text-xs text-slate-500 leading-relaxed mt-1">
                    From beginners to working professionals across Vasai, Virar, and Palghar.
                  </p>
                </div>
              </div>

              {/* Card 3 */}
              <div className="bg-white rounded-2xl p-6 sm:p-8 border border-[#E5E7EB] border-b-2 border-b-[#C41E1E] shadow-2xs flex flex-col justify-between">
                <div>
                  <span className="text-4xl sm:text-5xl font-black text-[#001752] font-heading block tracking-tight">
                    1:1
                  </span>
                  <h3 className="text-sm font-bold text-slate-800 mt-2">
                    Student to PC guarantee
                  </h3>
                  <p className="text-xs text-slate-500 leading-relaxed mt-1">
                    Your own dedicated computer during every session. Zero machine sharing.
                  </p>
                </div>
              </div>

            </div>

          </div>
        </section>


        {/* ══════════════════════════════════════════════════════════════════════
            SECTION 03 – OUR TEACHING PHILOSOPHY (Full-Width White Section)
            ══════════════════════════════════════════════════════════════════════ */}
        <section aria-label="Our Standards" className="bg-white py-16 sm:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            
            {/* Top Eyebrow */}
            <div className="mb-3">
              <span className="text-[#C41E1E] text-xs font-bold tracking-wider uppercase">
                OUR TEACHING STANDARDS
              </span>
            </div>

            {/* Split Header */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-start mb-10 sm:mb-14">
              <div className="lg:col-span-8 space-y-2">
                <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-bold text-[#001752] font-heading leading-tight tracking-tight">
                  Confidence through practice,<br />
                  not memorized theory.
                </h2>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal max-w-2xl pt-1">
                  Education at RACE is built on hands-on practical competence. Here are the four foundational teaching standards upheld for every enrolled student.
                </p>
              </div>

              <div className="lg:col-span-4 lg:text-right pt-2 lg:pt-6">
                <Link
                  to="/courses"
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-[#001752] hover:text-[#C41E1E] transition-colors"
                >
                  <span>Explore course curriculums</span>
                  <ArrowRight size={13} />
                </Link>
              </div>
            </div>

            {/* 4 Clean Educational Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6">
              
              {/* Pillar 1 */}
              <div className="bg-white rounded-2xl p-6 border border-[#E5E7EB] hover:border-[#001752]/30 hover:shadow-md transition-all flex flex-col justify-between">
                <div>
                  <div className="w-10 h-10 rounded-xl bg-[#001752] text-white flex items-center justify-center mb-4 shadow-xs">
                    <Monitor size={18} />
                  </div>
                  <h3 className="text-base font-bold text-[#001752] mb-2">
                    100% Practical Training
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed font-normal">
                    You sit at an active workstation from day one. Concepts are practiced immediately through live voucher entries, real code, and actual datasets.
                  </p>
                </div>
                <div className="pt-4 mt-4 border-t border-slate-100">
                  <span className="text-[11px] font-bold text-[#C41E1E] tracking-wider uppercase">
                    1:1 Workstation Ratio
                  </span>
                </div>
              </div>

              {/* Pillar 2 */}
              <div className="bg-white rounded-2xl p-6 border border-[#E5E7EB] hover:border-[#001752]/30 hover:shadow-md transition-all flex flex-col justify-between">
                <div>
                  <div className="w-10 h-10 rounded-xl bg-[#001752] text-white flex items-center justify-center mb-4 shadow-xs">
                    <Users size={18} />
                  </div>
                  <h3 className="text-base font-bold text-[#001752] mb-2">
                    Patient Desk Mentoring
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed font-normal">
                    Instructors sit directly beside you to resolve doubts, correct keyboard finger placement, and walk through mistakes step by step.
                  </p>
                </div>
                <div className="pt-4 mt-4 border-t border-slate-100">
                  <span className="text-[11px] font-bold text-[#001752] tracking-wider uppercase">
                    Personalized Guidance
                  </span>
                </div>
              </div>

              {/* Pillar 3 */}
              <div className="bg-white rounded-2xl p-6 border border-[#E5E7EB] hover:border-[#001752]/30 hover:shadow-md transition-all flex flex-col justify-between">
                <div>
                  <div className="w-10 h-10 rounded-xl bg-[#001752] text-white flex items-center justify-center mb-4 shadow-xs">
                    <Award size={18} />
                  </div>
                  <h3 className="text-base font-bold text-[#001752] mb-2">
                    Recognized Certification
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed font-normal">
                    Syllabi align with MKCL patterns, GCC-TBC typing criteria, and ISO 9001:2015 standards, making certificates recognized by recruiters.
                  </p>
                </div>
                <div className="pt-4 mt-4 border-t border-slate-100">
                  <span className="text-[11px] font-bold text-[#10b981] tracking-wider uppercase">
                    ISO 9001:2015 Accredited
                  </span>
                </div>
              </div>

              {/* Pillar 4 */}
              <div className="bg-white rounded-2xl p-6 border border-[#E5E7EB] hover:border-[#001752]/30 hover:shadow-md transition-all flex flex-col justify-between">
                <div>
                  <div className="w-10 h-10 rounded-xl bg-[#001752] text-white flex items-center justify-center mb-4 shadow-xs">
                    <ShieldCheck size={18} />
                  </div>
                  <h3 className="text-base font-bold text-[#001752] mb-2">
                    Free Lifetime Support
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed font-normal">
                    Even after finishing your course, you can walk into our lab to practice, clear work doubts, or get help with workplace software queries.
                  </p>
                </div>
                <div className="pt-4 mt-4 border-t border-slate-100">
                  <span className="text-[11px] font-bold text-[#001752] tracking-wider uppercase">
                    Alumni Lab Privileges
                  </span>
                </div>
              </div>

            </div>

          </div>
        </section>


        {/* ══════════════════════════════════════════════════════════════════════
            SECTION 04 – COMMUNITY IMPACT / WHO LEARNS HERE (Pale Section)
            ══════════════════════════════════════════════════════════════════════ */}
        <section aria-label="Community" className="bg-[#F6F7F9] py-16 sm:py-24 border-y border-slate-200/70">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            
            {/* Top Eyebrow */}
            <div className="mb-3">
              <span className="text-[#C41E1E] text-xs font-bold tracking-wider uppercase">
                COMMUNITY IMPACT
              </span>
            </div>

            {/* Split Header */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 lg:gap-8 items-start mb-10 sm:mb-12">
              <div className="lg:col-span-8">
                <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-bold text-[#001752] font-heading leading-tight tracking-tight">
                  Who learns at RACE?
                </h2>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal max-w-xl pt-1">
                  Our air-conditioned classrooms welcome ambitious learners across Vasai, Virar, and Palghar with flexible schedules designed for real life.
                </p>
              </div>
            </div>

            {/* 3 Rich Cards with Photography */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              
              {/* Audience 1: College Students */}
              <div className="bg-white rounded-2xl border border-[#E5E7EB] overflow-hidden flex flex-col justify-between shadow-2xs hover:shadow-md transition-shadow group">
                <div>
                  <div className="relative aspect-[16/10] w-full overflow-hidden bg-slate-900">
                    <img
                      src="/images/student-coding.jpg"
                      alt="College students learning software development"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      loading="lazy"
                    />
                    <div className="absolute top-3 left-3">
                      <span className="bg-[#001752]/90 backdrop-blur-xs text-white text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded">
                        Students &amp; Freshers
                      </span>
                    </div>
                  </div>

                  <div className="p-6 space-y-2">
                    <h3 className="text-base font-bold text-[#001752]">
                      College Students &amp; Graduates
                    </h3>
                    <p className="text-xs text-slate-600 leading-relaxed font-normal">
                      Students from Viva College, St. Joseph, and nearby colleges gaining hands-on skills in Full Stack, Python, Data Science, and Tally before graduation.
                    </p>
                  </div>
                </div>

                <div className="p-6 pt-0">
                  <div className="py-2 px-3 rounded-lg bg-slate-50 border border-slate-100 text-[11px] font-semibold text-[#001752]">
                    ⏰ Batches before &amp; after college hours
                  </div>
                </div>
              </div>

              {/* Audience 2: Homemakers */}
              <div className="bg-white rounded-2xl border border-[#E5E7EB] overflow-hidden flex flex-col justify-between shadow-2xs hover:shadow-md transition-shadow group">
                <div>
                  <div className="relative aspect-[16/10] w-full overflow-hidden bg-slate-900">
                    <img
                      src="/images/ladies-guidance.jpg"
                      alt="Instructor mentoring female student at computer desk"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      loading="lazy"
                    />
                    <div className="absolute top-3 left-3">
                      <span className="bg-[#001752]/90 backdrop-blur-xs text-white text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded">
                        Dedicated Ladies Batch
                      </span>
                    </div>
                  </div>

                  <div className="p-6 space-y-2">
                    <h3 className="text-base font-bold text-[#001752]">
                      Homemakers &amp; Career Returners
                    </h3>
                    <p className="text-xs text-slate-600 leading-relaxed font-normal">
                      Women restarting careers or learning basic computers, typing, and office productivity in our supportive, non-intimidating afternoon batch.
                    </p>
                  </div>
                </div>

                <div className="p-6 pt-0">
                  <div className="py-2 px-3 rounded-lg bg-[#FCF4F4] border border-[#F8E4E4] text-[11px] font-semibold text-[#C41E1E]">
                    ⏰ Special ladies batch: 12:30 PM – 3:00 PM
                  </div>
                </div>
              </div>

              {/* Audience 3: Working Professionals */}
              <div className="bg-white rounded-2xl border border-[#E5E7EB] overflow-hidden flex flex-col justify-between shadow-2xs hover:shadow-md transition-shadow group">
                <div>
                  <div className="relative aspect-[16/10] w-full overflow-hidden bg-slate-900">
                    <img
                      src="/images/tally-practice.jpg"
                      alt="Accountant practicing TallyPrime GST invoicing"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      loading="lazy"
                    />
                    <div className="absolute top-3 left-3">
                      <span className="bg-[#001752]/90 backdrop-blur-xs text-white text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded">
                        Business &amp; Finance
                      </span>
                    </div>
                  </div>

                  <div className="p-6 space-y-2">
                    <h3 className="text-base font-bold text-[#001752]">
                      Working Clerks &amp; Business Owners
                    </h3>
                    <p className="text-xs text-slate-600 leading-relaxed font-normal">
                      Local shopkeepers, traders, and clerks upgrading to TallyPrime GST billing, digital marketing, and advanced Excel reporting.
                    </p>
                  </div>
                </div>

                <div className="p-6 pt-0">
                  <div className="py-2 px-3 rounded-lg bg-slate-50 border border-slate-100 text-[11px] font-semibold text-[#001752]">
                    ⏰ Early morning (8 AM) &amp; evening slots
                  </div>
                </div>
              </div>

            </div>

          </div>
        </section>


        {/* ══════════════════════════════════════════════════════════════════════
            SECTION 05 – INFRASTRUCTURE & LAB STANDARDS (Full-Width White)
            ══════════════════════════════════════════════════════════════════════ */}
        <section aria-label="Lab Infrastructure" className="bg-white py-16 sm:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            
            {/* Top Eyebrow */}
            <div className="mb-3">
              <span className="text-[#C41E1E] text-xs font-bold tracking-wider uppercase">
                INFRASTRUCTURE &amp; LAB STANDARDS
              </span>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center">
              
              {/* Left Column: Checklist of Concrete Standards */}
              <div className="lg:col-span-6 space-y-6">
                <div>
                  <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-bold text-[#001752] font-heading leading-tight tracking-tight">
                    Inside our Virar East<br />
                    air-conditioned lab.
                  </h2>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal mt-2">
                    We maintain a professional computer training facility equipped for deep concentration, fast software execution, and zero machine bottlenecks.
                  </p>
                </div>

                <div className="space-y-3.5 pt-2">
                  <div className="flex items-start gap-3">
                    <CheckCircle2 size={16} className="text-[#10b981] mt-0.5 shrink-0" />
                    <div>
                      <strong className="block text-xs sm:text-sm text-[#001752] font-bold">
                        Guaranteed 1 Student : 1 PC
                      </strong>
                      <span className="text-xs text-slate-500">
                        Zero machine sharing. Every learner practices on their own computer during every single session.
                      </span>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <CheckCircle2 size={16} className="text-[#10b981] mt-0.5 shrink-0" />
                    <div>
                      <strong className="block text-xs sm:text-sm text-[#001752] font-bold">
                        Air-Conditioned Lab Facility
                      </strong>
                      <span className="text-xs text-slate-500">
                        A clean, quiet, and comfortable learning environment designed for hours of focused technical practice.
                      </span>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <CheckCircle2 size={16} className="text-[#10b981] mt-0.5 shrink-0" />
                    <div>
                      <strong className="block text-xs sm:text-sm text-[#001752] font-bold">
                        High-Speed Fiber Connectivity &amp; Inverter Backup
                      </strong>
                      <span className="text-xs text-slate-500">
                        Smooth internet access for cloud labs and reliable power backup so your work is never lost.
                      </span>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <CheckCircle2 size={16} className="text-[#10b981] mt-0.5 shrink-0" />
                    <div>
                      <strong className="block text-xs sm:text-sm text-[#001752] font-bold">
                        2-Minute Walk from Virar East Station Subway
                      </strong>
                      <span className="text-xs text-slate-500">
                        Located at Raut Arcade 202, directly facing the station subway exit stairs. Zero auto-rickshaw fare.
                      </span>
                    </div>
                  </div>
                </div>

                <div className="pt-2 flex flex-wrap items-center gap-3">
                  <Link
                    to="/contact#demo"
                    className="inline-flex items-center gap-1.5 bg-[#001752] hover:bg-[#16345c] text-white text-xs sm:text-sm font-bold px-5 py-2.5 rounded-full transition-all shadow-xs cursor-pointer"
                  >
                    <span>Book a free demo session</span>
                    <ArrowRight size={13} />
                  </Link>

                  <a
                    href={SITE_CONFIG.address.googleMapsDirectLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs text-slate-700 hover:text-[#C41E1E] font-bold transition-colors cursor-pointer"
                  >
                    <span>View on Google Maps</span>
                    <ArrowRight size={12} />
                  </a>
                </div>
              </div>

              {/* Right Column: Lab Image with Floating Badge */}
              <div className="lg:col-span-6">
                <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden aspect-[4/3] bg-slate-900 border border-slate-200 shadow-md">
                  <img
                    src="/images/real-lab-aisle.jpg"
                    alt="RACE computer lab workstations and environment in Virar East"
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                  <div className="absolute bottom-4 left-4 right-4 bg-[#001752]/90 backdrop-blur-md p-3.5 rounded-xl border border-white/15 text-white">
                    <div className="flex items-center justify-between text-xs">
                      <span className="font-bold">Raut Arcade 202 · Virar East</span>
                      <span className="text-[#10b981] font-semibold">Open Mon–Sat</span>
                    </div>
                    <span className="text-[11px] text-slate-300 block mt-0.5">
                      Opposite Railway Station Subway Exit · 2-Minute Walk
                    </span>
                  </div>
                </div>
              </div>

            </div>

          </div>
        </section>


        {/* ══════════════════════════════════════════════════════════════════════
            SECTION 06 – FEATURED WALK-IN CALLOUT (Floating Navy Banner on White)
            ══════════════════════════════════════════════════════════════════════ */}
        <section aria-label="Visit RACE" className="bg-white py-12 sm:py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-[#001752] text-white rounded-3xl p-6 sm:p-10 lg:p-14 shadow-2xl border border-[#00113E] relative overflow-hidden">
              {/* Subtle Red/Navy Brand Gradient Accents */}
              <div className="absolute -right-20 -top-20 w-80 h-80 rounded-full bg-[#C41E1E]/20 blur-[100px] pointer-events-none" />
              <div className="absolute -left-20 -bottom-20 w-80 h-80 rounded-full bg-[#263A6C]/40 blur-[100px] pointer-events-none" />

              <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
                
                {/* Left Column: Heading, Subtitle & Buttons */}
                <div className="lg:col-span-7 space-y-4">
                  <span className="text-[#DF8383] text-xs font-bold tracking-wider uppercase block">
                    WALK IN &amp; EXPERIENCE RACE
                  </span>

                  <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-bold text-white font-heading leading-tight tracking-tight">
                    Ready to inspect our computer lab in person?
                  </h2>

                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-normal max-w-lg">
                    Walk in anytime between 9:00 AM and 7:00 PM, Monday to Saturday. Take a seat, experience a free practical demo, and inspect our computers yourself.
                  </p>

                  {/* Direct Helplines Pills */}
                  <div className="pt-2">
                    <span className="text-slate-400 text-[11px] font-semibold uppercase tracking-wider block mb-2">
                      Direct Institute Helplines:
                    </span>
                    <div className="flex flex-wrap items-center gap-2">
                      <a
                        href="tel:8793314239"
                        className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/10 hover:bg-white/20 border border-white/15 text-white text-xs font-semibold transition-colors"
                      >
                        <Phone size={12} className="text-[#DF8383]" />
                        <span>8793314239</span>
                      </a>
                      <a
                        href="tel:8482881614"
                        className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/10 hover:bg-white/20 border border-white/15 text-white text-xs font-semibold transition-colors"
                      >
                        <Phone size={12} className="text-[#DF8383]" />
                        <span>8482881614</span>
                      </a>
                      <a
                        href={SITE_CONFIG.contact.whatsapp}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-emerald-500/20 hover:bg-emerald-500/30 border border-emerald-400/30 text-emerald-300 text-xs font-semibold transition-colors"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                        <span>WhatsApp: 9794323963</span>
                      </a>
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex flex-wrap items-center gap-3 pt-3">
                    <Link
                      to="/contact#demo"
                      className="inline-flex items-center gap-1.5 bg-[#C41E1E] hover:bg-[#931616] text-white text-xs sm:text-sm font-bold px-6 py-3 rounded-full transition-all shadow-md active:scale-95 cursor-pointer"
                    >
                      <span>Book a free demo</span>
                      <ArrowRight size={14} />
                    </Link>

                    <a
                      href={SITE_CONFIG.address.googleMapsDirectLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 bg-white/10 hover:bg-white/20 text-white border border-white/20 text-xs sm:text-sm font-bold px-6 py-3 rounded-full transition-all active:scale-95 cursor-pointer"
                    >
                      <MapPin size={14} className="text-[#DF8383]" />
                      <span>Open in Google Maps</span>
                    </a>
                  </div>
                </div>

                {/* Right Column: Crisp White Card inside Navy Container */}
                <div className="lg:col-span-5 flex justify-center lg:justify-end">
                  <div className="w-full max-w-sm bg-white text-[#001752] rounded-2xl sm:rounded-3xl p-6 sm:p-8 shadow-xl space-y-4">
                    
                    <div className="flex items-center justify-between">
                      <span className="text-[10px] font-bold text-slate-500 uppercase tracking-wider">
                        PRIME STATION LOCATION
                      </span>
                      <span className="inline-flex items-center gap-1.5 text-[10px] font-bold text-[#10b981] bg-emerald-50 px-2.5 py-1 rounded-full border border-emerald-100">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#10b981] animate-pulse" />
                        <span>Open Mon–Sat</span>
                      </span>
                    </div>

                    <div>
                      <h3 className="text-xl sm:text-2xl font-bold font-heading text-[#001752] leading-tight">
                        2 Minutes on Foot from Virar Station
                      </h3>
                      <p className="text-xs text-slate-600 leading-relaxed font-normal mt-2">
                        Directly facing the Platform 1/2 subway exit stairs at Raut Arcade 202. Zero auto-rickshaw fare.
                      </p>
                    </div>

                    <div className="pt-3 border-t border-slate-100 space-y-2 text-xs text-slate-600">
                      <div className="flex items-center gap-2">
                        <MapPin size={13} className="text-[#C41E1E] shrink-0" />
                        <span className="font-medium text-slate-800">202, Raut Arcade, Station Road East</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Clock size={13} className="text-[#001752] shrink-0" />
                        <span>9:00 AM – 7:00 PM (Daily Rolling Batches)</span>
                      </div>
                    </div>

                    <div className="pt-2">
                      <div className="p-3 rounded-xl bg-slate-50 border border-slate-200 flex items-center justify-between">
                        <div>
                          <span className="text-[10px] text-slate-500 uppercase font-bold block">1:1 Workstation Demo</span>
                          <strong className="text-xs font-bold text-[#001752]">Free 30-Min Practical Session</strong>
                        </div>
                        <span className="text-xs font-bold text-[#C41E1E]">FREE</span>
                      </div>
                    </div>

                  </div>
                </div>

              </div>
            </div>
          </div>
        </section>

      </div>
    </>
  );
}
