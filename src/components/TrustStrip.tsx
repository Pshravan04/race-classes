import { Monitor, Clock, Award, MapPin } from 'lucide-react'

const PILLARS = [
  {
    icon: Monitor,
    title: '1:1 Personal Workstations',
    desc: 'Guaranteed individual PC terminal per student with dedicated lab practice time.',
  },
  {
    icon: Award,
    title: 'Govt. Recognized Certification',
    desc: 'ISO 9001:2015, GCC-TBC, and MSBTE aligned syllabus for career readiness.',
  },
  {
    icon: Clock,
    title: 'Flexible Morning & Evening Batches',
    desc: 'Daily, alternate day, and weekend slots tailored for college students & job holders.',
  },
  {
    icon: MapPin,
    title: 'Opp. Virar East Railway Subway',
    desc: '202 Raut Arcade, 2-minute walk from Virar station platform exit.',
  },
]

export default function TrustStrip() {
  return (
    <div className="w-full bg-[#F8F9FA] border-b border-gray-200">
      {/* ─── Accreditations & Frameworks Strip (Exact Stitch Spec) ─── */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 border-b border-gray-200/80" aria-label="Accreditations">
        <p className="text-center text-xs font-semibold text-gray-500 uppercase tracking-widest mb-6">
          Syllabus Aligned With Premier Professional &amp; Govt. Frameworks
        </p>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6 items-center justify-items-center opacity-75 grayscale hover:grayscale-0 transition-all duration-300">
          <div className="flex items-center gap-2 font-bold text-xs sm:text-sm text-gray-800 tracking-tight">
            <span className="text-base font-black text-[#1556A6]">TALLY</span> AUTHORIZED SYLLABUS
          </div>
          <div className="flex items-center gap-2 font-bold text-xs sm:text-sm text-gray-800 tracking-tight">
            <span className="w-2.5 h-2.5 bg-gray-900 rounded-xs" /> GCC-TBC CERTIFIED
          </div>
          <div className="flex items-center gap-2 font-bold text-xs sm:text-sm text-gray-800 tracking-tight">
            <span className="text-[#1556A6] font-serif font-black text-sm">ISO</span> 9001:2015 CERTIFIED
          </div>
          <div className="flex items-center gap-2 font-bold text-xs sm:text-sm text-gray-800 tracking-tight">
            <span className="w-2.5 h-2.5 rounded-full border border-gray-900" /> MSBTE ALIGNED
          </div>
          <div className="flex items-center gap-2 font-bold text-xs sm:text-sm text-gray-800 tracking-tight">
            <span className="font-extrabold text-[#1556A6]">NSDC</span> SKILL RECOGNIZED
          </div>
        </div>
      </section>

      {/* ─── 4 Pillars Guarantee Strip ─── */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-10" aria-label="Key Benefits">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-0 lg:divide-x lg:divide-gray-200">
          {PILLARS.map((item, idx) => {
            const Icon = item.icon
            return (
              <div key={idx} className="flex items-start gap-4 lg:px-6">
                <div className="w-10 h-10 rounded-xl bg-white border border-gray-200 shadow-2xs flex items-center justify-center text-[#0F1E36] shrink-0">
                  <Icon size={18} aria-hidden="true" />
                </div>
                <div>
                  <h3 className="text-sm font-bold text-[#0F1E36]">
                    {item.title}
                  </h3>
                  <p className="text-xs text-gray-500 mt-1 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            )
          })}
        </div>
      </section>
    </div>
  )
}
