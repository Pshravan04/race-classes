import { Phone, MessageSquare, Clock } from 'lucide-react';
import { SITE_CONFIG } from '../data/config';
import { Link } from 'react-router-dom';

export default function MobileStickyBar() {
  return (
    <div className="md:hidden fixed bottom-0 left-0 right-0 z-50 bg-[#001752]/98 backdrop-blur-md border-t border-[#002277] px-3 py-2 shadow-2xl">
      <div className="grid grid-cols-3 gap-2 max-w-md mx-auto">
        <a
          href={`tel:${SITE_CONFIG.contact.phone}`}
          className="flex flex-col items-center justify-center min-h-[48px] bg-white/5 hover:bg-white/10 text-white rounded-xl px-2 py-1 text-center transition-colors border border-white/10 active:scale-95"
          aria-label={`Call ${SITE_CONFIG.contact.phoneDisplay}`}
        >
          <Phone size={18} className="text-[#C41E1E] mb-0.5" />
          <span className="text-[11px] font-bold leading-tight">Call Us</span>
        </a>

        <a
          href={`${SITE_CONFIG.contact.whatsapp}?text=${encodeURIComponent(
            'Hello! I am contacting you from the RACE website. I would like to know more about courses, fees, and batch timings.'
          )}`}
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center justify-center min-h-[48px] bg-[#25D366] hover:bg-[#20BA5A] text-white rounded-xl px-2 py-1 text-center transition-colors active:scale-95 shadow-xs"
          aria-label="Chat on WhatsApp"
        >
          <MessageSquare size={18} className="text-white mb-0.5" />
          <span className="text-[11px] font-bold leading-tight">WhatsApp</span>
        </a>

        <Link
          to="/contact#demo"
          className="flex flex-col items-center justify-center min-h-[48px] bg-[#C41E1E] hover:bg-[#A81717] text-white rounded-xl px-2 py-1 text-center font-bold transition-colors active:scale-95 shadow-xs"
          aria-label="Book Free Demo Class"
        >
          <Clock size={18} className="text-white mb-0.5" />
          <span className="text-[11px] font-bold leading-tight">Free Demo</span>
        </Link>
      </div>
    </div>
  );
}
