import { ArrowRight, CheckCircle2 } from 'lucide-react';
import { OFFERS_CONFIG, SITE_CONFIG } from '../data/config';
import { useLanguage } from '../context/useLanguage';
import { Link } from 'react-router-dom';

interface TicketOfferCardProps {
  compact?: boolean;
}

export default function TicketOfferCard({ compact = false }: TicketOfferCardProps) {
  const { t } = useLanguage();

  return (
    <div className="ticket-card p-6 sm:p-8 max-w-4xl mx-auto my-6 relative overflow-hidden bg-[#FFFDF9] border-2 border-dashed border-[#C59B27] rounded-2xl shadow-md">
      
      {/* Ticket Header Strip */}
      <div className="flex flex-wrap items-center justify-between gap-4 pb-4 border-b border-dashed border-[#C59B27]/40">
        <div className="flex items-center gap-2.5">
          <span className="station-board-yellow text-[11px] font-black uppercase tracking-wider px-2 py-0.5">
            SPECIAL PASS
          </span>
          <span className="text-xs font-bold text-[#071B3A] uppercase tracking-wide">
            {OFFERS_CONFIG.seasonName}
          </span>
        </div>
        
        {/* Rubber Stamp 50% OFF */}
        <div className="rubber-stamp">
          {OFFERS_CONFIG.primaryOffer.badge}
        </div>
      </div>

      {/* Main Ticket Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-6">
        
        {/* Offer 1: 50% Concession */}
        <div className="bg-[#FAF7EE] p-5 rounded-xl border border-[#E8E2D5]">
          <div className="flex items-center gap-2 mb-2">
            <span className="w-6 h-6 rounded-full bg-[#C0392B] text-white flex items-center justify-center text-xs font-black">
              1
            </span>
            <h3 className="text-lg font-bold text-[#071B3A] font-serif-heading">
              {OFFERS_CONFIG.primaryOffer.title}
            </h3>
          </div>
          <p className="text-xs sm:text-sm text-[#4A5568] leading-relaxed mb-3">
            {OFFERS_CONFIG.primaryOffer.description}
          </p>
          <div className="flex items-center gap-2 text-xs text-[#6B5A24] font-medium">
            <CheckCircle2 size={14} className="text-[#C59B27]" />
            <span>{OFFERS_CONFIG.primaryOffer.tagline}</span>
          </div>
        </div>

        {/* Offer 2: FREE Basic Computer Course */}
        <div className="bg-[#FAF7EE] p-5 rounded-xl border border-[#E8E2D5]">
          <div className="flex items-center gap-2 mb-2">
            <span className="w-6 h-6 rounded-full bg-[#C59B27] text-[#071B3A] flex items-center justify-center text-xs font-black">
              2
            </span>
            <h3 className="text-lg font-bold text-[#071B3A] font-serif-heading">
              {OFFERS_CONFIG.bonusOffer.title}
            </h3>
          </div>
          <p className="text-xs sm:text-sm text-[#4A5568] leading-relaxed mb-3">
            {OFFERS_CONFIG.bonusOffer.description}
          </p>
          <div className="flex items-center gap-2 text-xs text-[#6B5A24] font-medium">
            <CheckCircle2 size={14} className="text-[#C59B27]" />
            <span>{OFFERS_CONFIG.bonusOffer.tagline}</span>
          </div>
        </div>

      </div>

      {/* Ticket Footer / Action Row */}
      <div className="flex flex-wrap items-center justify-between gap-4 pt-4 border-t border-dashed border-[#C59B27]/40">
        <div>
          <span className="text-[11px] text-gray-500 block">
            Ticket Ref Code: <strong className="text-[#071B3A] font-mono">{OFFERS_CONFIG.ticketCode}</strong>
          </span>
          <span className="text-[11px] text-gray-500 block">
            {OFFERS_CONFIG.validityNote}
          </span>
        </div>

        <div className="flex flex-wrap items-center gap-3">
          <a
            href={`${SITE_CONFIG.contact.whatsapp}?text=${encodeURIComponent(
              `Hello! I want to claim the ${OFFERS_CONFIG.badge} and Free Basic Computer Course offer at Race Reddys Virar East (Ticket code: ${OFFERS_CONFIG.ticketCode}). Please share details.`
            )}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-[#071B3A] hover:bg-[#0E2B5C] text-white text-xs sm:text-sm font-bold px-4 py-2.5 rounded-lg border border-[#C59B27] shadow-xs transition-colors"
          >
            <span>Claim via WhatsApp</span>
            <ArrowRight size={14} className="text-[#D8AF3E]" />
          </a>

          {!compact && (
            <Link
              to="/courses"
              className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold text-[#071B3A] hover:text-[#C59B27] px-3 py-2 transition-colors"
            >
              <span>{t.ctaBrowseCourses} →</span>
            </Link>
          )}
        </div>
      </div>

    </div>
  );
}
