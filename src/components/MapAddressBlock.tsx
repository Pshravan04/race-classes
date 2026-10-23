import { MapPin, Phone, MessageSquare, Clock, ArrowUpRight } from 'lucide-react';
import { SITE_CONFIG } from '../data/config';

export default function MapAddressBlock() {
  return (
    <section className="py-12 sm:py-16 bg-[#FAF7EE] border-t border-[#E8E2D5]" aria-labelledby="location-heading">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-10">
          <div className="station-board mb-3 text-xs">
            LOCATION &amp; TIMINGS • पत्ता व वेळ
          </div>
          <h2 id="location-heading" className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#071B3A] font-serif-heading mb-2">
            Right Opposite Virar East Railway Station
          </h2>
          <p className="text-sm sm:text-base text-[#4A5568]">
            No auto, no bus required. Just 2 minutes on foot from Platform 2 subway exit.
          </p>
        </div>

        {/* 2-Column Grid: Address & Info + Map Embed */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Left Info Card (5 cols) */}
          <div className="lg:col-span-5 bg-white p-6 sm:p-7 rounded-2xl border border-[#E8E2D5] shadow-xs space-y-6">
            
            <div className="flex items-start gap-3.5">
              <div className="w-10 h-10 rounded-xl bg-[#071B3A] text-[#C59B27] flex items-center justify-center shrink-0">
                <MapPin size={20} />
              </div>
              <div>
                <span className="text-[11px] font-bold text-gray-500 uppercase tracking-wider block">
                  Campus Address
                </span>
                <strong className="text-base text-[#071B3A] font-bold block mt-0.5">
                  {SITE_CONFIG.address.line1}
                </strong>
                <span className="text-xs text-[#4A5568] block mt-0.5 leading-relaxed">
                  {SITE_CONFIG.address.line2}, {SITE_CONFIG.address.city}, Maharashtra – {SITE_CONFIG.address.pin}
                </span>
                <span className="text-xs text-[#6B5A24] font-medium block mt-1">
                  Landmark: {SITE_CONFIG.address.landmark}
                </span>
              </div>
            </div>

            <div className="pt-4 border-t border-[#E8E2D5] flex items-start gap-3.5">
              <div className="w-10 h-10 rounded-xl bg-[#FAF7EE] text-[#C0392B] flex items-center justify-center shrink-0 border border-[#E8E2D5]">
                <Clock size={19} />
              </div>
              <div>
                <span className="text-[11px] font-bold text-gray-500 uppercase tracking-wider block">
                  Open Hours
                </span>
                <strong className="text-xs sm:text-sm text-[#071B3A] font-bold block mt-0.5">
                  Monday to Saturday: 9:00 AM – 7:00 PM
                </strong>
                <span className="text-xs text-gray-500 block">
                  Sunday: Closed
                </span>
              </div>
            </div>

            <div className="pt-4 border-t border-[#E8E2D5] grid grid-cols-2 gap-3">
              <a
                href={`tel:${SITE_CONFIG.contact.phone}`}
                className="flex items-center justify-center gap-2 bg-[#071B3A] hover:bg-[#0E2B5C] text-white py-2.5 px-3 rounded-lg text-xs font-bold transition-colors"
              >
                <Phone size={14} className="text-[#D8AF3E]" />
                <span>Call {SITE_CONFIG.contact.phone}</span>
              </a>

              <a
                href={`${SITE_CONFIG.contact.whatsapp}?text=${encodeURIComponent(
                  'Hello! I would like directions or details to visit Race Reddys Virar East.'
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-1.5 bg-[#25D366] hover:bg-[#20BA5A] text-white py-2.5 px-3 rounded-lg text-xs font-bold transition-colors"
              >
                <MessageSquare size={14} />
                <span>WhatsApp</span>
              </a>
            </div>

          </div>

          {/* Right Map (7 cols) */}
          <div className="lg:col-span-7 bg-white p-2.5 rounded-2xl border border-[#E8E2D5] shadow-xs overflow-hidden">
            <div className="relative aspect-[16/10] w-full rounded-xl overflow-hidden bg-gray-100">
              <iframe
                title="Race Reddys Location opposite Virar East Railway Station"
                src={SITE_CONFIG.address.googleMapsEmbedUrl}
                className="w-full h-full border-0"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
            <div className="p-2.5 text-center text-xs">
              <a
                href={SITE_CONFIG.address.googleMapsDirectLink}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#071B3A] font-bold underline hover:text-[#C59B27] inline-flex items-center gap-1"
              >
                <span>Open in Google Maps App for turn-by-turn walking directions</span>
                <ArrowUpRight size={13} />
              </a>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
