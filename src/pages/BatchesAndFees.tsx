import { Clock, Heart, MessageSquare, Sparkles, CalendarClock } from 'lucide-react';
import SEO from '../components/SEO';
import PageHero from '../components/PageHero';
import SectionHeading from '../components/SectionHeading';
import CtaBand from '../components/CtaBand';
import { BATCHES_SCHEDULE, SITE_CONFIG } from '../data/config';

const FEE_PRINCIPLES = [
  {
    title: '1. Upfront 50% Concession',
    description: 'Every enrolled student receives the current 50% fee concession automatically deducted at registration.',
  },
  {
    title: '2. Monthly Easy Installments',
    description: 'Pay comfortably in simple monthly installments as you learn. No interest, no third-party loan apps.',
  },
  {
    title: '3. Zero Extra Exam Charges',
    description: 'Lab workstation access, course notes, practice tests, and course certificate are all bundled in.',
  },
];

function statusClasses(status: string) {
  if (status === 'Special Dedicated Batch') {
    return 'border border-[#F5BE4F]/50 bg-[#F5BE4F]/20 text-[#8A5A00]';
  }
  if (status === 'Filling Fast') {
    return 'border border-rose-200 bg-rose-50 text-rose-700';
  }
  return 'border border-emerald-200 bg-emerald-50 text-emerald-700';
}

export default function BatchesAndFees() {
  return (
    <>
      <SEO
        title="Batch Timings & Fee Details | Race Reddys Virar East"
        description="Check morning, afternoon ladies, and evening batch timings at Race Reddys, Raut Arcade, opposite Virar East station. Transparent fee counseling and 50% discount."
        canonical="/batches"
      />

      <PageHero
        eyebrow="Timetable & Fees · बॅचेस आणि फी"
        title="Batch Schedules & Transparent Fee Counseling"
        description="Open Monday to Saturday from 9:00 AM to 7:00 PM. Designed to fit around college lectures, office commutes on the Western Railway, and household schedules."
        aside={
          <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-[#0B1528] via-[#080E1C] to-[#040812] p-6 sm:p-7 text-white shadow-2xl">
            <div className="absolute -right-12 -top-12 h-48 w-48 rounded-full bg-[#0084FF]/20 blur-[80px] pointer-events-none" />
            <div className="absolute -left-12 -bottom-12 h-48 w-48 rounded-full bg-[#F5BE4F]/10 blur-[80px] pointer-events-none" />

            <div className="relative z-10">
              <span className="inline-flex items-center gap-1.5 rounded-full bg-[#F5BE4F] px-3 py-1 text-[10px] font-black uppercase tracking-wider text-[#111827]">
                <CalendarClock size={12} />
                Daily lab timetable
              </span>

              <h2 className="mt-4 text-2xl font-bold tracking-tight">
                1.5 hours of machine time per batch
              </h2>
              <p className="mt-2 text-xs sm:text-sm leading-relaxed text-slate-300">
                Eight weekday slots from early morning to evening, including a dedicated ladies and
                homemakers batch.
              </p>

              <div className="mt-5 grid grid-cols-3 gap-2 rounded-2xl border border-white/10 bg-white/5 p-3 text-center">
                <div>
                  <strong className="block text-lg font-black text-white">8</strong>
                  <span className="text-[10px] font-semibold text-slate-400">Slots</span>
                </div>
                <div className="border-x border-white/10">
                  <strong className="block text-lg font-black text-white">1.5</strong>
                  <span className="text-[10px] font-semibold text-slate-400">Hours</span>
                </div>
                <div>
                  <strong className="block text-lg font-black text-white">1:1</strong>
                  <span className="text-[10px] font-semibold text-slate-400">Machine</span>
                </div>
              </div>

              <a
                href={`${SITE_CONFIG.contact.whatsapp}?text=${encodeURIComponent(
                  'Hello! I would like to confirm current batch timings and seat availability at Race Reddys Virar East.'
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-5 inline-flex w-full items-center justify-center gap-2 rounded-full bg-[#25D366] px-5 py-3 text-xs sm:text-sm font-bold text-white transition-all hover:bg-[#20BA5A] active:scale-95"
              >
                <MessageSquare size={15} />
                <span>Check seat availability</span>
              </a>
            </div>
          </div>
        }
      />

      <section className="bg-[#F8F9FA] py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Timetable */}
          <div className="mx-auto mb-12 max-w-5xl overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm">
            <div className="flex flex-wrap items-center justify-between gap-4 border-b border-white/10 bg-[#0B0F19] p-5 text-white sm:p-6">
              <div>
                <span className="inline-flex items-center rounded-full bg-[#F5BE4F] px-2.5 py-0.5 text-[10px] font-black uppercase tracking-wider text-[#111827]">
                  Virar East
                </span>
                <h2 className="mt-2 text-xl sm:text-2xl font-bold tracking-tight text-white">
                  Daily Lab Timetable (Mon–Sat)
                </h2>
              </div>

              <div className="flex items-center gap-2 text-xs text-slate-300">
                <Clock size={15} className="text-[#0084FF]" />
                <span>1.5 Hours Machine Time per Batch</span>
              </div>
            </div>

            <div className="divide-y divide-slate-100">
              {BATCHES_SCHEDULE.map((slot, index) => (
                <div
                  key={index}
                  className={`flex flex-col justify-between gap-4 p-4 transition-colors sm:flex-row sm:items-center sm:p-5 ${
                    slot.highlight
                      ? 'border-l-4 border-[#0084FF] bg-[#F8F9FA]'
                      : 'hover:bg-[#F8F9FA]'
                  }`}
                >
                  <div className="space-y-1">
                    <div className="flex flex-wrap items-center gap-2">
                      <strong className="text-sm font-bold text-[#111827] sm:text-base">
                        {slot.name}
                      </strong>

                      {slot.highlight && (
                        <span className="inline-flex items-center gap-1 rounded-full bg-[#0084FF] px-2 py-0.5 text-[10px] font-black text-white">
                          <Heart size={10} className="fill-white" />
                          Ladies &amp; Students Priority
                        </span>
                      )}
                    </div>

                    <p className="text-xs text-slate-500">
                      Recommended for:{' '}
                      <span className="font-medium text-slate-700">{slot.targetAudience}</span>
                    </p>
                  </div>

                  <div className="flex shrink-0 items-center justify-between gap-4 sm:justify-end">
                    <span className="rounded-lg border border-slate-200 bg-[#F1F3FF] px-3 py-1.5 font-mono text-xs font-bold text-[#111827] sm:text-sm">
                      {slot.timing}
                    </span>

                    <span className={`rounded-full px-2.5 py-1 text-[11px] font-bold ${statusClasses(slot.status)}`}>
                      {slot.status}
                    </span>
                  </div>
                </div>
              ))}
            </div>

            <div className="flex flex-wrap items-center justify-between gap-3 border-t border-slate-200 bg-[#F8F9FA] p-4 text-xs text-slate-500">
              <span>* Special customized timing slots are also arranged upon request for working shift workers.</span>
              <span className="font-semibold text-[#111827]">Sunday: Closed for routine maintenance</span>
            </div>
          </div>

          {/* Fees */}
          <div className="mx-auto max-w-5xl rounded-3xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
            <SectionHeading
              eyebrow="Transparent Fee Policy"
              title="How Our Course Fees Work (With 50% Subsidy)"
              description="Unlike commercial training franchises that push aggressive loans or lock students into expensive contracts, Race Reddys operates on simple, honest, and affordable monthly fee installments for local families."
            />

            <div className="mt-7 grid grid-cols-1 gap-4 sm:grid-cols-3">
              {FEE_PRINCIPLES.map((principle) => (
                <div
                  key={principle.title}
                  className="rounded-xl border border-slate-200 bg-[#F8F9FA] p-4"
                >
                  <strong className="mb-1 block text-xs font-bold text-[#111827] sm:text-sm">
                    {principle.title}
                  </strong>
                  <p className="text-xs leading-relaxed text-slate-500">
                    {principle.description}
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-7 flex flex-col items-center justify-between gap-4 rounded-2xl bg-[#0B0F19] p-5 text-white sm:flex-row sm:p-6">
              <div>
                <div className="mb-1 flex items-center gap-2">
                  <Sparkles size={14} className="text-[#F5BE4F]" />
                  <h3 className="text-base font-bold tracking-tight text-white">
                    Need Exact Fee Quote for Your Chosen Course?
                  </h3>
                </div>
                <p className="text-xs text-slate-400">
                  Message us the course name on WhatsApp to receive the exact fee breakdown and
                  current batch availability within 5 minutes.
                </p>
              </div>

              <a
                href={`${SITE_CONFIG.contact.whatsapp}?text=${encodeURIComponent(
                  'Hello! I would like to ask for fee details and current batch timings for courses at Race Reddys Virar East.'
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex shrink-0 items-center gap-2 rounded-full bg-[#25D366] px-6 py-3 text-xs font-bold text-white shadow-md transition-all hover:bg-[#20BA5A] active:scale-95 sm:text-sm"
              >
                <MessageSquare size={16} />
                <span>Ask for Fee Details (WhatsApp)</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      <CtaBand
        eyebrow="Flexible Timetable"
        title="Need a batch timing that fits your daily routine?"
        description="Share your college lectures, office commute hours, or household timings. We will assign you a dedicated 1.5-hour machine workstation in the right batch."
      />
    </>
  );
}
