import { CheckCircle2, MessageSquare, ArrowRight } from 'lucide-react';
import SEO from '../components/SEO';
import TicketOfferCard from '../components/TicketOfferCard';
import RailwayTrackDivider from '../components/RailwayTrackDivider';
import { OFFERS_CONFIG, SITE_CONFIG } from '../data/config';
import { Link } from 'react-router-dom';

export default function Offers() {

  return (
    <>
      <SEO
        title="Current Offers & Concessions | Race Reddys Virar East"
        description="Save 50% on computer courses in Virar East! Get a FREE Basic Computer Course when you enroll in any career track. Limited seats at Raut Arcade, opposite Virar East station."
        canonical="/offers"
      />

      {/* Header Banner */}
      <section className="bg-[#FAF7EE] border-b border-[#E8E2D5] py-10 sm:py-14">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="station-board-yellow inline-block mb-3 text-xs font-black">
              SPECIAL CONCESSION SCHEME • सवलत योजना
            </div>
            
            <h1 className="text-3xl sm:text-4xl font-extrabold text-[#071B3A] font-serif-heading mb-3">
              {OFFERS_CONFIG.bannerHeadline}
            </h1>
            
            <p className="text-sm sm:text-base text-[#4A5568] leading-relaxed">
              We believe quality computer education should be affordable to every family in Virar East and Palghar district. Avail our limited-time subsidies below.
            </p>
          </div>
        </div>
      </section>

      {/* Main Ticket Offer Section */}
      <section className="py-12 sm:py-16 bg-[#FBF9F5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Suburban Railway Pass Motif Card */}
          <TicketOfferCard />

          {/* Offer Details Breakdown in 2 Columns */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto mt-12">
            
            {/* Offer 1 Deep Dive */}
            <div className="bg-white p-6 sm:p-7 rounded-2xl border border-[#E8E2D5] shadow-xs">
              <div className="flex items-center gap-2 mb-3">
                <span className="rubber-stamp text-xs">
                  50% OFF
                </span>
                <span className="text-xs font-bold text-[#071B3A]">
                  All Courses Included
                </span>
              </div>

              <h2 className="text-xl font-bold text-[#071B3A] font-serif-heading mb-2">
                Flat 50% Concession on Standard Course Fees
              </h2>

              <p className="text-xs sm:text-sm text-[#4A5568] leading-relaxed mb-4">
                Whether you choose short-term modules like Advanced Tally with GST, MS Office, English/Marathi Typing, or long-term career programs like Web Development and Data Science, you receive an upfront 50% subsidy.
              </p>

              <ul className="space-y-2 text-xs text-[#334155] pt-3 border-t border-[#E8E2D5]">
                <li className="flex items-center gap-2">
                  <CheckCircle2 size={15} className="text-[#C59B27]" />
                  <span>No hidden lab charges or exam registration extras</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 size={15} className="text-[#C59B27]" />
                  <span>Flexible monthly installment plans available</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 size={15} className="text-[#C59B27]" />
                  <span>Applicable across morning, ladies, and evening batches</span>
                </li>
              </ul>
            </div>

            {/* Offer 2 Deep Dive */}
            <div className="bg-white p-6 sm:p-7 rounded-2xl border border-[#E8E2D5] shadow-xs">
              <div className="flex items-center gap-2 mb-3">
                <span className="station-board-yellow text-[10px] py-0.5 px-2">
                  100% FREE
                </span>
                <span className="text-xs font-bold text-[#071B3A]">
                  Career Track Bonus
                </span>
              </div>

              <h2 className="text-xl font-bold text-[#071B3A] font-serif-heading mb-2">
                FREE Basic Computer Foundation with Career Courses
              </h2>

              <p className="text-xs sm:text-sm text-[#4A5568] leading-relaxed mb-4">
                Worried your computer basics are weak? When you register for any Career-Objective course (Software Development, DFA, Web Development, Digital Marketing, AI &amp; ML, Cyber Security), you get our complete foundational Basic Computer Course at zero extra fee.
              </p>

              <ul className="space-y-2 text-xs text-[#334155] pt-3 border-t border-[#E8E2D5]">
                <li className="flex items-center gap-2">
                  <CheckCircle2 size={15} className="text-[#C59B27]" />
                  <span>Windows OS navigation &amp; keyboard shortcut mastery</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 size={15} className="text-[#C59B27]" />
                  <span>Internet browsing, online safety &amp; email etiquette</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 size={15} className="text-[#C59B27]" />
                  <span>Touch typing fundamentals to build early speed</span>
                </li>
              </ul>
            </div>

          </div>

          {/* How to Claim Offer */}
          <div className="max-w-4xl mx-auto mt-10 p-6 bg-[#FAF7EE] rounded-2xl border border-[#C59B27]/40 text-center">
            <h3 className="text-lg font-bold text-[#071B3A] font-serif-heading mb-2">
              Ready to claim your concession?
            </h3>
            <p className="text-xs sm:text-sm text-[#4A5568] max-w-xl mx-auto mb-5 leading-relaxed">
              Visit our centre at Raut Arcade, 2nd floor, opposite Virar East subway, or mention ticket code <strong className="text-[#071B3A]">{OFFERS_CONFIG.ticketCode}</strong> on WhatsApp.
            </p>

            <div className="flex flex-wrap items-center justify-center gap-3">
              <a
                href={`${SITE_CONFIG.contact.whatsapp}?text=${encodeURIComponent(
                  `Hello! I want to claim the 50% discount and Free Basic Computer Course offer at Race Reddys Virar East (Ticket Code: ${OFFERS_CONFIG.ticketCode}).`
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#20BA5A] text-white font-bold text-xs sm:text-sm px-5 py-3 rounded-xl shadow-xs transition-colors"
              >
                <MessageSquare size={16} />
                <span>Claim via WhatsApp</span>
              </a>

              <Link
                to="/courses"
                className="inline-flex items-center gap-1.5 bg-[#071B3A] hover:bg-[#0E2B5C] text-white font-bold text-xs sm:text-sm px-5 py-3 rounded-xl border border-[#C59B27] transition-colors"
              >
                <span>Browse All 23 Courses</span>
                <ArrowRight size={14} className="text-[#D8AF3E]" />
              </Link>
            </div>
          </div>

        </div>
      </section>

      <RailwayTrackDivider label="VIRAR EAST • 50% CONCESSION OPEN" />
    </>
  );
}
