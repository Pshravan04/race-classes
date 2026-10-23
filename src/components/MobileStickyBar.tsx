import { Phone, MessageSquare, Clock } from 'lucide-react';
import { SITE_CONFIG } from '../data/config';
import { Link } from 'react-router-dom';

export default function MobileStickyBar() {

  return (
    <div className="md:hidden fixed bottom-0 left-0 right-0 z-50 bg-[#071B3A] border-t border-[#C59B27]/40 px-3 py-2 shadow-2xl safe-area-bottom">
      <div className="grid grid-cols-3 gap-2 max-w-md mx-auto">
        {/* 1. Direct Click-to-Call */}
        <a
          href={`tel:${SITE_CONFIG.contact.phone}`}
          className="flex flex-col items-center justify-center min-h-[48px] bg-[#0E2B5C] hover:bg-[#153E82] text-white rounded-lg px-2 py-1 text-center transition-colors border border-white/10 active:scale-95"
          aria-label={`Call ${SITE_CONFIG.contact.phoneDisplay}`}
        >
          <Phone size={18} className="text-[#D8AF3E] mb-0.5" />
          <span className="text-[11px] font-bold leading-tight">Call Us</span>
        </a>

        {/* 2. WhatsApp Direct Chat */}
        <a
          href={`${SITE_CONFIG.contact.whatsapp}?text=${encodeURIComponent(
            'Hello! I am contacting you from the Race Reddys website. I would like to know more about courses, fees, and batch timings.'
          )}`}
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center justify-center min-h-[48px] bg-[#25D366] hover:bg-[#20BA5A] text-white rounded-lg px-2 py-1 text-center transition-colors active:scale-95 shadow-xs"
          aria-label="Chat on WhatsApp"
        >
          <MessageSquare size={18} className="text-white mb-0.5" />
          <span className="text-[11px] font-bold leading-tight">WhatsApp</span>
        </a>

        {/* 3. Book Free Demo */}
        <Link
          to="/contact#demo"
          className="flex flex-col items-center justify-center min-h-[48px] bg-[#C59B27] hover:bg-[#D8AF3E] text-[#071B3A] rounded-lg px-2 py-1 text-center font-bold transition-colors active:scale-95"
          aria-label="Book Free Demo Class"
        >
          <Clock size={18} className="text-[#071B3A] mb-0.5" />
          <span className="text-[11px] font-bold leading-tight">Free Demo</span>
        </Link>
      </div>
    </div>
  );
}
