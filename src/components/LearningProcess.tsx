import { ArrowDown, Check } from 'lucide-react'

export default function LearningProcess() {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 border-b border-gray-200" id="process" aria-label="Our Process">
      {/* Header with Subtitle and downward arrow indicator */}
      <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between mb-8 pb-3 border-b border-gray-200 gap-3">
        <div>
          <div className="flex items-center gap-2 text-xs font-bold tracking-wider text-gray-500 uppercase mb-1">
            <span className="w-2 h-2 rounded-full bg-black" />
            <span>OUR PROCESS</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-[#0F1E36]">
            How we work, start to finish
          </h2>
        </div>

        <div className="flex items-center gap-3">
          <p className="text-xs sm:text-sm text-gray-500 sm:text-right max-w-xs">
            Industry-calibrated practical pedagogy built around personal workstations.
          </p>
          <span className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center text-xs font-bold text-gray-700 shrink-0">
            <ArrowDown size={14} />
          </span>
        </div>
      </div>

      {/* Bento Grid Container */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-5">
        
        {/* Step 01: Tall Left Card (Occupies 4 cols on lg) with photo at base */}
        <div className="lg:col-span-4 bg-white rounded-3xl p-6 border border-gray-200 shadow-sm flex flex-col justify-between">
          <div>
            <span className="text-xs font-semibold text-gray-400 block mb-2">Step 01</span>
            <h3 className="text-xl font-bold text-gray-900 mb-2">Free skill &amp; career assessment</h3>
            <p className="text-xs text-gray-500 leading-relaxed">
              1-on-1 counseling to match your academic background (10th, 12th, Commerce, or Graduate) with high-demand job roles.
            </p>
          </div>

          {/* Lab Image Base */}
          <div className="mt-8 rounded-2xl overflow-hidden border border-gray-100 shadow-sm">
            <img
              src="/instructor-teaching.jpg"
              alt="One-on-one student mentor consultation at Race Reddys"
              className="w-full h-48 object-cover"
              loading="lazy"
            />
          </div>
        </div>

        {/* Right 8 Cols containing Steps 02, 03, 04 */}
        <div className="lg:col-span-8 flex flex-col gap-5">
          
          {/* Top Row: Step 02 & Step 03 Side-by-Side */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            
            {/* Step 02: Machine Schedule Card with circular radar illustration */}
            <div className="bg-white rounded-3xl p-6 border border-gray-200 shadow-sm flex flex-col justify-between relative overflow-hidden">
              <div>
                <span className="text-xs font-semibold text-gray-400 block mb-1">Step 02</span>
                <h3 className="text-lg font-bold text-gray-900 mb-1.5">Track your machine schedule</h3>
                <p className="text-xs text-gray-500 leading-relaxed">
                  Guaranteed individual desktop terminal with high-speed internet and zero sharing.
                </p>
              </div>

              {/* Circular graphic illustration mimicking Stitch step 2 */}
              <div className="h-32 flex items-center justify-center relative mt-4">
                <div className="w-24 h-24 rounded-full border border-[#B7EB38]/60 glow-circle flex items-center justify-center relative">
                  <div className="w-16 h-16 rounded-full border border-[#B7EB38] flex items-center justify-center">
                    <div className="w-8 h-8 rounded-full bg-[#121c2d] flex items-center justify-center text-[#B7EB38] text-xs font-bold">
                      PC
                    </div>
                  </div>
                  {/* Satellite badges */}
                  <span className="absolute -top-1 left-2 w-5 h-5 rounded-full bg-[#B7EB38] text-black text-[9px] flex items-center justify-center font-bold shadow-2xs">
                    ✓
                  </span>
                  <span className="absolute -bottom-1 right-2 w-5 h-5 rounded-full bg-blue-100 text-blue-800 text-[9px] flex items-center justify-center font-bold shadow-2xs">
                    1:1
                  </span>
                </div>
              </div>
            </div>

            {/* Step 03: Live practical portfolio with photo card below */}
            <div className="bg-white rounded-3xl p-6 border border-gray-200 shadow-sm flex flex-col justify-between">
              <div>
                <span className="text-xs font-semibold text-gray-400 block mb-1">Step 03</span>
                <h3 className="text-lg font-bold text-gray-900 mb-1.5">Live practical portfolio</h3>
                <p className="text-xs text-gray-500 leading-relaxed">
                  Build real GST balance sheets, dynamic websites, or creative client brandings.
                </p>
              </div>
              <div className="mt-4 rounded-xl overflow-hidden border border-gray-100 shadow-2xs">
                <img
                  src="/student-coding.jpg"
                  alt="Student practical project on screen at Race Reddys"
                  className="w-full h-24 object-cover object-bottom"
                  loading="lazy"
                />
              </div>
            </div>

          </div>

          {/* Bottom Row: Step 04 Wide card matching the reference satisfaction/checklist card */}
          <div className="bg-gradient-to-r from-[#0F223D] to-[#15345C] text-white rounded-3xl p-6 sm:p-7 border border-blue-900 shadow-md relative overflow-hidden flex flex-col sm:flex-row items-center justify-between gap-6">
            <div className="max-w-md">
              <span className="text-xs font-bold uppercase tracking-wider text-[#B7EB38] block mb-1">
                Step 04 • Placement &amp; Certification
              </span>
              <h3 className="text-xl sm:text-2xl font-bold mb-2">We don’t stop until you’re job-ready</h3>
              <p className="text-xs text-blue-100 leading-relaxed mb-4">
                Every course is backed by our thorough completion diploma, mock interview rounds, and direct local employment recommendations across Vasai-Virar industrial corridors.
              </p>
              <div className="inline-flex items-center gap-2 bg-white/10 px-3 py-1 rounded-full text-[11px] font-semibold text-white">
                <span>★ ISO 9001:2015 Recognized Assessment</span>
              </div>
            </div>

            {/* Completion Checklist Graphic Container */}
            <div className="w-full sm:w-64 bg-white text-gray-800 p-4 rounded-2xl shadow-xl border border-gray-100 text-xs shrink-0">
              <div className="flex items-center justify-between border-b pb-2 mb-2.5">
                <span className="font-bold text-[11px] uppercase tracking-wide text-gray-500">Completion Checklist</span>
                <span className="text-[#1556A6] font-bold">100%</span>
              </div>
              <ul className="space-y-1.5 text-[11px]">
                <li className="flex items-center gap-2">
                  <span className="w-4 h-4 rounded-full bg-[#B7EB38] text-black font-bold flex items-center justify-center text-[9px]">
                    <Check size={10} strokeWidth={3} />
                  </span>
                  <span>Practical Lab Exam Passed</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-4 h-4 rounded-full bg-[#B7EB38] text-black font-bold flex items-center justify-center text-[9px]">
                    <Check size={10} strokeWidth={3} />
                  </span>
                  <span>Real Project Submission</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-4 h-4 rounded-full bg-[#B7EB38] text-black font-bold flex items-center justify-center text-[9px]">
                    <Check size={10} strokeWidth={3} />
                  </span>
                  <span>Govt. Diploma / Certificate</span>
                </li>
              </ul>
            </div>
          </div>

        </div>

      </div>
    </section>
  )
}
