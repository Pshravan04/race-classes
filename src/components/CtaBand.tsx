import type { ReactNode } from 'react';
import { MessageSquare, Phone } from 'lucide-react';
import { SITE_CONFIG } from '../data/config';

interface CtaBandProps {
  title: ReactNode;
  description: ReactNode;
  eyebrow?: string;
  children?: ReactNode;
}

export default function CtaBand({
  title,
  description,
  eyebrow = 'Direct Station Access',
  children,
}: CtaBandProps) {
  const wa = SITE_CONFIG.contact.whatsapp;
  const phone = SITE_CONFIG.contact.phone;

  return (
    <section className="relative bg-gradient-to-r from-[#0B1F4B] via-[#07142F] to-[#0B1F4B] text-white py-16 lg:py-20 overflow-hidden">
      <div
        className="absolute inset-0 opacity-10 pointer-events-none"
        style={{ backgroundImage: 'radial-gradient(#ffffff 1px, transparent 1px)', backgroundSize: '20px 20px' }}
      />
      <div className="absolute -right-20 top-0 w-80 h-80 bg-[#0084FF]/20 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute -left-20 bottom-0 w-80 h-80 bg-[#F5BE4F]/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-12">
          <div className="flex-1 text-center lg:text-left">
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-[#F5BE4F] text-xs font-semibold uppercase tracking-wider mb-3">
              <span className="w-1.5 h-1.5 rounded-full bg-[#F5BE4F]" />
              {eyebrow}
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-tight">
              {title}
            </h2>
            <p className="text-sm sm:text-base text-slate-300 mt-3 max-w-2xl leading-relaxed mx-auto lg:mx-0">
              {description}
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-3 shrink-0 w-full lg:w-auto">
            {children ?? (
              <>
                <a
                  href={`${wa}?text=${encodeURIComponent('Hi, I would like to enquire about admissions at Race Reddys Virar East.')}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full bg-[#25D366] text-white text-sm font-bold shadow-xl hover:bg-[#20BA5A] active:scale-95 transition-all"
                >
                  <MessageSquare size={16} />
                  <span>Chat on WhatsApp</span>
                </a>
                <a
                  href={`tel:${phone}`}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full bg-white/10 text-white border border-white/25 text-sm font-bold hover:bg-white/15 active:scale-95 transition-all"
                >
                  <Phone size={15} className="text-[#F5BE4F]" />
                  <span>Call {phone}</span>
                </a>
              </>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
