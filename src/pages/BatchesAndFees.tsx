import { Clock, Heart, MessageSquare } from 'lucide-react';
import SEO from '../components/SEO';
import RailwayTrackDivider from '../components/RailwayTrackDivider';
import { BATCHES_SCHEDULE, SITE_CONFIG } from '../data/config';

export default function BatchesAndFees() {

  return (
    <>
      <SEO
        title="Batch Timings & Fee Details | Race Reddys Virar East"
        description="Check morning, afternoon ladies, and evening batch timings at Race Reddys, Raut Arcade, opposite Virar East station. Transparent fee counseling and 50% discount."
        canonical="/batches"
      />

      {/* Header Banner */}
      <section className="bg-[#FAF7EE] border-b border-[#E8E2D5] py-10 sm:py-14">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="station-board-yellow inline-block mb-3 text-xs font-black">
              TIMETABLE &amp; FEES • बॅचेस आणि फी
            </div>
            
            <h1 className="text-3xl sm:text-4xl font-extrabold text-[#071B3A] font-serif-heading mb-3">
              Batch Schedules &amp; Transparent Fee Counseling
            </h1>
            
            <p className="text-sm sm:text-base text-[#4A5568] leading-relaxed">
              Open Monday to Saturday from 9:00 AM to 7:00 PM. Designed to fit around college lectures, office commutes on the Western Railway, and household schedules.
            </p>
          </div>
        </div>
      </section>

      {/* Main Timetable Section */}
      <section className="py-12 sm:py-16 bg-[#FBF9F5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Railway Station Board Timetable Wrapper */}
          <div className="bg-white rounded-2xl border border-[#E8E2D5] shadow-xs overflow-hidden max-w-5xl mx-auto mb-12">
            
            {/* Timetable Header */}
            <div className="bg-[#071B3A] text-white p-5 sm:p-6 border-b border-[#C59B27]/40 flex flex-wrap items-center justify-between gap-4">
              <div>
                <span className="station-board-yellow text-[10px] py-0.5 px-2">
                  VIRAR JUNCTION
                </span>
                <h2 className="text-xl sm:text-2xl font-bold font-serif-heading text-white mt-1">
                  Daily Lab Timetable (Mon–Sat)
                </h2>
              </div>

              <div className="flex items-center gap-2 text-xs text-gray-300">
                <Clock size={15} className="text-[#D8AF3E]" />
                <span>1.5 Hours Machine Time per Batch</span>
              </div>
            </div>

            {/* Timetable Rows */}
            <div className="divide-y divide-[#E8E2D5]">
              {BATCHES_SCHEDULE.map((slot, index) => {
                return (
                  <div
                    key={index}
                    className={`p-4 sm:p-5 flex flex-col sm:flex-row sm:items-center justify-between gap-4 transition-colors ${
                      slot.highlight
                        ? 'bg-[#FFFDF5] border-l-4 border-l-[#C59B27]'
                        : 'hover:bg-[#FAF7EE]'
                    }`}
                  >
                    <div className="space-y-1">
                      <div className="flex flex-wrap items-center gap-2">
                        <strong className="text-sm sm:text-base text-[#071B3A] font-bold font-serif-heading">
                          {slot.name}
                        </strong>

                        {slot.highlight && (
                          <span className="inline-flex items-center gap-1 text-[10px] font-black bg-[#C59B27] text-[#071B3A] px-2 py-0.5 rounded-full">
                            <Heart size={11} className="fill-[#071B3A]" />
                            Ladies &amp; Students Priority
                          </span>
                        )}
                      </div>

                      <p className="text-xs text-[#4A5568]">
                        Recommended for: <span className="font-medium text-[#1A2332]">{slot.targetAudience}</span>
                      </p>
                    </div>

                    <div className="flex items-center justify-between sm:justify-end gap-4 shrink-0">
                      {/* Timing Badge */}
                      <span className="font-mono text-xs sm:text-sm font-bold text-[#071B3A] bg-[#F3EFE6] px-3 py-1.5 rounded-lg border border-[#E8E2D5]">
                        {slot.timing}
                      </span>

                      {/* Status Indicator */}
                      <span
                        className={`text-[11px] font-bold px-2.5 py-1 rounded-md ${
                          slot.status === 'Special Dedicated Batch'
                            ? 'bg-[#FBF4E4] text-[#A8811C] border border-[#C59B27]/40'
                            : slot.status === 'Filling Fast'
                            ? 'bg-[#FCECEB] text-[#C0392B] border border-[#C0392B]/20'
                            : 'bg-[#EBF7EE] text-[#1E7E34] border border-[#1E7E34]/20'
                        }`}
                      >
                        {slot.status}
                      </span>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Timetable Footer Note */}
            <div className="p-4 bg-[#FAF7EE] border-t border-[#E8E2D5] text-xs text-gray-600 flex flex-wrap items-center justify-between gap-3">
              <span>* Special customized timing slots are also arranged upon request for working shift workers.</span>
              <span className="font-semibold text-[#071B3A]">Sunday: Closed for routine maintenance</span>
            </div>

          </div>

          {/* Transparent Fee Discussion & "Ask for Fee Details" CTA */}
          <div className="max-w-4xl mx-auto bg-white p-6 sm:p-8 rounded-2xl border border-[#E8E2D5] shadow-xs">
            <div className="station-board-yellow inline-block mb-3 text-xs font-black">
              TRANSPARENT FEE POLICY
            </div>
            
            <h2 className="text-2xl font-bold text-[#071B3A] font-serif-heading mb-3">
              How Our Course Fees Work (With 50% Subsidy)
            </h2>

            <p className="text-xs sm:text-sm text-[#4A5568] leading-relaxed mb-6">
              Unlike commercial training franchises that push aggressive loans or lock students into expensive contracts, Race Reddys operates on simple, honest, and affordable monthly fee installments for local families.
            </p>

            {/* 3 Fee Principles */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
              <div className="p-4 bg-[#FAF7EE] rounded-xl border border-[#E8E2D5]">
                <strong className="text-xs sm:text-sm text-[#071B3A] block mb-1">
                  1. Upfront 50% Concession
                </strong>
                <p className="text-xs text-[#526071] leading-relaxed">
                  Every enrolled student receives the current 50% fee concession automatically deducted at registration.
                </p>
              </div>

              <div className="p-4 bg-[#FAF7EE] rounded-xl border border-[#E8E2D5]">
                <strong className="text-xs sm:text-sm text-[#071B3A] block mb-1">
                  2. Monthly Easy Installments
                </strong>
                <p className="text-xs text-[#526071] leading-relaxed">
                  Pay comfortably in simple monthly installments as you learn. No interest, no third-party loan apps.
                </p>
              </div>

              <div className="p-4 bg-[#FAF7EE] rounded-xl border border-[#E8E2D5]">
                <strong className="text-xs sm:text-sm text-[#071B3A] block mb-1">
                  3. Zero Extra Exam Charges
                </strong>
                <p className="text-xs text-[#526071] leading-relaxed">
                  Lab workstation access, course notes, practice tests, and course certificate are all bundled in.
                </p>
              </div>
            </div>

            {/* The "Ask for Fee Details" Primary CTA Button */}
            <div className="p-5 bg-[#071B3A] rounded-xl text-white flex flex-col sm:flex-row items-center justify-between gap-4">
              <div>
                <h3 className="text-base font-bold font-serif-heading text-white mb-1">
                  Need Exact Fee Quote for Your Chosen Course?
                </h3>
                <p className="text-xs text-gray-300">
                  Message us the course name on WhatsApp to receive the exact fee breakdown and current batch availability within 5 minutes.
                </p>
              </div>

              <a
                href={`${SITE_CONFIG.contact.whatsapp}?text=${encodeURIComponent(
                  'Hello! I would like to ask for fee details and current batch timings for courses at Race Reddys Virar East.'
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#20BA5A] text-white font-bold text-xs sm:text-sm px-6 py-3 rounded-xl shadow-md transition-all shrink-0 active:scale-95"
              >
                <MessageSquare size={16} />
                <span>Ask for Fee Details (WhatsApp)</span>
              </a>
            </div>

          </div>

        </div>
      </section>

      <RailwayTrackDivider label="VIRAR EAST • 7:30 AM TO 7:30 PM BATCHES" />
    </>
  );
}
