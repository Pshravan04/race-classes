import type { ReactNode } from 'react';
import { MapPin, Sparkles } from 'lucide-react';

interface PageHeroProps {
  eyebrow: string;
  title: ReactNode;
  description: ReactNode;
  aside?: ReactNode;
  children?: ReactNode;
}

export default function PageHero({ eyebrow, title, description, aside, children }: PageHeroProps) {
  return (
    <section className="relative w-full bg-[#F8F9FA] text-[#001752] border-b border-slate-200/80 overflow-hidden">
      <div className="absolute -right-24 -top-24 w-[26rem] h-[26rem] bg-[#001752]/10 rounded-full blur-[110px] pointer-events-none" />
      <div className="absolute -left-20 bottom-0 w-80 h-80 bg-[#C41E1E]/10 rounded-full blur-[110px] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
        <div className={aside ? 'grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center' : 'max-w-4xl'}>
          <div className={aside ? 'lg:col-span-7' : ''}>
            <div className="flex flex-wrap items-center gap-2.5 mb-5">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#C41E1E] text-white text-xs font-black uppercase tracking-wider shadow-2xs">
                <MapPin size={12} className="stroke-[2.5]" />
                Virar East · Opp. Subway
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white border border-slate-200 text-slate-800 text-xs font-bold shadow-2xs">
                <Sparkles size={12} className="text-[#C41E1E]" />
                {eyebrow}
              </span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#001752] tracking-tight leading-[1.08]">
              {title}
            </h1>

            <p className="text-base sm:text-lg text-slate-600 max-w-2xl leading-relaxed mt-4">
              {description}
            </p>

            {children && <div className="mt-7">{children}</div>}
          </div>

          {aside && <div className="lg:col-span-5">{aside}</div>}
        </div>
      </div>
    </section>
  );
}
