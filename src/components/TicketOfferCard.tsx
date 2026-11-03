import { ArrowRight, CheckCircle2, MessageSquare, Sparkles } from 'lucide-react';
import { OFFERS_CONFIG, SITE_CONFIG } from '../data/config';
import { useLanguage } from '../context/useLanguage';
import { Link } from 'react-router-dom';

interface TicketOfferCardProps {
  compact?: boolean;
}

export default function TicketOfferCard({ compact = false }: TicketOfferCardProps) {
  const { t } = useLanguage();

  return (
    <div className="relative max-w-5xl mx-auto overflow-hidden rounded-3xl bg-gradient-to-br from-[#001752] via-[#000F36] to-[#00081C] text-white p-6 sm:p-8 lg:p-10 shadow-[0_20px_50px_rgba(0,23,82,0.45)] border border-[#002B94]">
      <div className="absolute -right-16 -top-16 w-96 h-96 bg-[#C41E1E]/20 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute -left-16 -bottom-16 w-96 h-96 bg-[#002277]/30 rounded-full blur-[100px] pointer-events-none" />

      <div className="relative z-10">
        {/* Header */}
        <div className="flex flex-wrap items-center justify-between gap-4 pb-5 border-b border-white/10">
          <div className="flex flex-wrap items-center gap-2.5">
            <span className="inline-flex items-center gap-1.5 rounded-full bg-[#C41E1E] px-3 py-1 text-[10px] font-black uppercase tracking-wider text-white shadow-xs">
              <Sparkles size={11} />
              Special Pass
            </span>
            <span className="text-xs sm:text-sm font-bold text-white uppercase tracking-wide">
              {OFFERS_CONFIG.seasonName}
            </span>
          </div>

          <span className="inline-flex items-center rounded-full border border-red-400/40 bg-[#C41E1E]/20 px-3 py-1.5 text-xs font-black uppercase tracking-wider text-white">
            {OFFERS_CONFIG.primaryOffer.badge}
          </span>
        </div>

        {/* Offers */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-5 my-6">
          <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
            <div className="flex items-center gap-2.5 mb-2.5">
              <span className="w-7 h-7 rounded-full bg-[#C41E1E] text-white flex items-center justify-center text-xs font-black shrink-0">
                1
              </span>
              <h3 className="text-base sm:text-lg font-bold text-white">
                {OFFERS_CONFIG.primaryOffer.title}
              </h3>
            </div>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              {OFFERS_CONFIG.primaryOffer.description}
            </p>
            <div className="mt-3 flex items-start gap-2 text-xs text-[#F5BE4F] font-bold">
              <CheckCircle2 size={14} className="shrink-0 mt-0.5 text-[#C41E1E]" />
              <span>{OFFERS_CONFIG.primaryOffer.tagline}</span>
            </div>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
            <div className="flex items-center gap-2.5 mb-2.5">
              <span className="w-7 h-7 rounded-full bg-[#002277] text-white flex items-center justify-center text-xs font-black shrink-0 border border-white/20">
                2
              </span>
              <h3 className="text-base sm:text-lg font-bold text-white">
                {OFFERS_CONFIG.bonusOffer.title}
              </h3>
            </div>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              {OFFERS_CONFIG.bonusOffer.description}
            </p>
            <div className="mt-3 flex items-start gap-2 text-xs text-[#4ADE80] font-bold">
              <CheckCircle2 size={14} className="shrink-0 mt-0.5" />
              <span>{OFFERS_CONFIG.bonusOffer.tagline}</span>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="flex flex-wrap items-center justify-between gap-4 pt-5 border-t border-white/10">
          <div>
            <span className="text-[11px] text-slate-400 block">
              Ticket Ref Code:{' '}
              <strong className="text-white font-mono tracking-wide">{OFFERS_CONFIG.ticketCode}</strong>
            </span>
            <span className="text-[11px] text-slate-500 block">
              {OFFERS_CONFIG.validityNote}
            </span>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <a
              href={`${SITE_CONFIG.contact.whatsapp}?text=${encodeURIComponent(
                `Hello! I want to claim the ${OFFERS_CONFIG.badge} and Free Basic Computer Course offer at RACE Virar East (Ticket code: ${OFFERS_CONFIG.ticketCode}). Please share details.`
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-[#25D366] hover:bg-[#20BA5A] px-5 py-2.5 text-xs sm:text-sm font-bold text-white shadow-md transition-all active:scale-95"
            >
              <MessageSquare size={15} />
              <span>Claim via WhatsApp</span>
            </a>

            {!compact && (
              <Link
                to="/courses"
                className="inline-flex items-center gap-1.5 rounded-full border border-white/20 px-4 py-2.5 text-xs sm:text-sm font-bold text-white hover:bg-white/10 transition-colors"
              >
                <span>{t.ctaBrowseCourses}</span>
                <ArrowRight size={14} className="text-[#F5BE4F]" />
              </Link>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
