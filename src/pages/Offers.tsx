import { CheckCircle2, MessageSquare, ArrowRight, Sparkles, Ticket } from 'lucide-react';
import SEO from '../components/SEO';
import PageHero from '../components/PageHero';
import TicketOfferCard from '../components/TicketOfferCard';
import CtaBand from '../components/CtaBand';
import { OFFERS_CONFIG, SITE_CONFIG } from '../data/config';
import { Link } from 'react-router-dom';

const CONCESSION_POINTS = [
  'No hidden lab charges or exam registration extras',
  'Flexible monthly installment plans available',
  'Applicable across morning, ladies, and evening batches',
];

const BONUS_POINTS = [
  'Windows OS navigation & keyboard shortcut mastery',
  'Internet browsing, online safety & email etiquette',
  'Touch typing fundamentals to build early speed',
];

export default function Offers() {
  return (
    <>
      <SEO
        title="Current Offers & Concessions | Race Reddys Virar East"
        description="Save 50% on computer courses in Virar East! Get a FREE Basic Computer Course when you enroll in any career track. Limited seats at Raut Arcade, opposite Virar East station."
        canonical="/offers"
      />

      <PageHero
        eyebrow="Special Concession Scheme · सवलत योजना"
        title={OFFERS_CONFIG.bannerHeadline}
        description="We believe quality computer education should be affordable to every family in Virar East and Palghar district. Avail our limited-time subsidies below."
      />

      <section className="bg-[#F8F9FA] py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <TicketOfferCard />

          <div className="mx-auto mt-10 grid max-w-5xl grid-cols-1 gap-5 md:grid-cols-2">
            {/* Concession detail */}
            <div className="rounded-3xl border border-slate-200 bg-white p-6 sm:p-7 shadow-sm">
              <div className="mb-4 flex flex-wrap items-center gap-2">
                <span className="inline-flex items-center rounded-full bg-[#C41E1E] px-3 py-1 text-[10px] font-black uppercase tracking-wider text-white shadow-xs">
                  50% Off
                </span>
                <span className="text-xs font-bold text-[#001752]">All Courses Included</span>
              </div>

              <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-[#001752]">
                Flat 50% Concession on Standard Course Fees
              </h2>

              <p className="mt-2 text-xs sm:text-sm leading-relaxed text-slate-600">
                Whether you choose short-term modules like Advanced Tally with GST, MS Office,
                English/Marathi Typing, or long-term career programs like Web Development and Data
                Science, you receive an upfront 50% subsidy.
              </p>

              <ul className="mt-5 space-y-2.5 border-t border-slate-100 pt-4">
                {CONCESSION_POINTS.map((point) => (
                  <li key={point} className="flex items-start gap-2 text-xs text-[#334155]">
                    <CheckCircle2 size={15} className="mt-0.5 shrink-0 text-[#C41E1E]" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Bonus detail */}
            <div className="rounded-3xl border border-slate-200 bg-white p-6 sm:p-7 shadow-sm">
              <div className="mb-4 flex flex-wrap items-center gap-2">
                <span className="inline-flex items-center rounded-full bg-[#001752] px-3 py-1 text-[10px] font-black uppercase tracking-wider text-white">
                  100% Free
                </span>
                <span className="text-xs font-bold text-[#001752]">Career Track Bonus</span>
              </div>

              <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-[#001752]">
                FREE Basic Computer Foundation with Career Courses
              </h2>

              <p className="mt-2 text-xs sm:text-sm leading-relaxed text-slate-600">
                Worried your computer basics are weak? When you register for any Career-Objective
                course (Software Development, DFA, Web Development, Digital Marketing, AI &amp; ML,
                Cyber Security), you get our complete foundational Basic Computer Course at zero
                extra fee.
              </p>

              <ul className="mt-5 space-y-2.5 border-t border-slate-100 pt-4">
                {BONUS_POINTS.map((point) => (
                  <li key={point} className="flex items-start gap-2 text-xs text-[#334155]">
                    <CheckCircle2 size={15} className="mt-0.5 shrink-0 text-[#C41E1E]" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* How to claim */}
          <div className="mx-auto mt-10 max-w-5xl overflow-hidden rounded-3xl border border-slate-200 bg-white p-6 sm:p-8 text-center shadow-sm">
            <div className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-2xl bg-[#FDF2F2] text-[#C41E1E] border border-[#FAD4D4]">
              <Ticket size={22} />
            </div>

            <span className="inline-flex items-center gap-1.5 rounded-full bg-[#C41E1E]/15 px-3 py-1 text-[10px] font-black uppercase tracking-wider text-[#C41E1E]">
              <Sparkles size={11} />
              Claim in one step
            </span>

            <h3 className="mt-3 text-xl sm:text-2xl font-bold tracking-tight text-[#001752]">
              Ready to claim your concession?
            </h3>

            <p className="mx-auto mt-2 max-w-2xl text-xs sm:text-sm leading-relaxed text-slate-600">
              Visit our centre at Raut Arcade, 2nd floor, opposite Virar East subway, or mention
              ticket code{' '}
              <strong className="rounded bg-[#F1F4FA] px-1.5 py-0.5 font-mono text-[#001752] font-bold">
                {OFFERS_CONFIG.ticketCode}
              </strong>{' '}
              on WhatsApp.
            </p>

            <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
              <a
                href={`${SITE_CONFIG.contact.whatsapp}?text=${encodeURIComponent(
                  `Hello! I want to claim the 50% discount and Free Basic Computer Course offer at Race Reddys Virar East (Ticket Code: ${OFFERS_CONFIG.ticketCode}).`
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-[#C41E1E] hover:bg-[#A81717] px-6 py-3 text-xs sm:text-sm font-bold text-white shadow-md transition-all active:scale-95"
              >
                <MessageSquare size={16} />
                <span>Claim via WhatsApp</span>
              </a>

              <Link
                to="/courses"
                className="inline-flex items-center gap-1.5 rounded-full bg-[#001752] hover:bg-[#C41E1E] px-6 py-3 text-xs sm:text-sm font-bold text-white transition-colors"
              >
                <span>Browse All 23 Courses</span>
                <ArrowRight size={14} className="text-[#F5BE4F]" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <CtaBand
        eyebrow="Limited Concession Seats"
        title="Claim your 50% discount & reserve your workstation"
        description="Seats in morning and ladies batches are allocated on a first-come, first-served basis. Visit our Raut Arcade centre or message us on WhatsApp with code RACE50."
      />
    </>
  );
}
