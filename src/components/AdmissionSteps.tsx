import { MessageSquare, Laptop, CheckCircle, ArrowRight } from 'lucide-react';
import { useLanguage } from '../context/useLanguage';
import { SITE_CONFIG } from '../data/config';

export default function AdmissionSteps() {
  const { t } = useLanguage();

  const steps = [
    {
      num: '01',
      title: t.step1Title,
      desc: t.step1Desc,
      icon: MessageSquare,
      badge: 'Step 1: Contact',
    },
    {
      num: '02',
      title: t.step2Title,
      desc: t.step2Desc,
      icon: Laptop,
      badge: 'Step 2: Experience',
    },
    {
      num: '03',
      title: t.step3Title,
      desc: t.step3Desc,
      icon: CheckCircle,
      badge: 'Step 3: Begin',
    },
  ];

  return (
    <section className="py-12 sm:py-16 bg-[#F3EFE6]/60 border-y border-[#E8E2D5]" aria-labelledby="steps-heading">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-10 sm:mb-12">
          <div className="station-board mb-3 text-xs">
            ADMISSION PROCESS • प्रवेश प्रक्रिया
          </div>
          <h2 id="steps-heading" className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#071B3A] font-serif-heading mb-3">
            {t.stepsHeading}
          </h2>
          <p className="text-sm sm:text-base text-[#4A5568] leading-relaxed">
            {t.stepsSubheading}
          </p>
        </div>

        {/* 3 Step Connected Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative">
          {steps.map((step, idx) => {
            const Icon = step.icon;
            return (
              <div
                key={idx}
                className="tactile-card rounded-xl p-6 bg-white relative flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between gap-3 mb-4">
                    <span className="font-serif-heading font-black text-3xl sm:text-4xl text-[#C59B27]/50">
                      {step.num}
                    </span>
                    <span className="inline-flex items-center gap-1.5 text-[11px] font-bold text-[#071B3A] bg-[#FAF7EE] border border-[#E8E2D5] px-2.5 py-1 rounded-full">
                      <Icon size={13} className="text-[#C59B27]" />
                      <span>{step.badge}</span>
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-[#071B3A] mb-2 font-serif-heading">
                    {step.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-[#4A5568] leading-relaxed mb-4">
                    {step.desc}
                  </p>
                </div>

                <div className="pt-3 border-t border-[#E8E2D5] flex items-center justify-between">
                  <span className="text-xs font-semibold text-[#071B3A]">
                    {idx === 0 && 'No pre-registration fee'}
                    {idx === 1 && '100% Free Demo Session'}
                    {idx === 2 && '50% Concession Applied'}
                  </span>
                  <span className="text-xs text-[#C59B27] font-bold">✓</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Quick Action Strip */}
        <div className="mt-8 p-4 sm:p-5 bg-white rounded-xl border border-[#E8E2D5] flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <span className="w-9 h-9 rounded-full bg-[#071B3A] text-white flex items-center justify-center text-sm font-bold shrink-0">
              ?
            </span>
            <div className="text-xs sm:text-sm">
              <strong className="text-[#071B3A] block">Have questions about syllabus or batches?</strong>
              <span className="text-[#4A5568]">Our teachers are available on call or WhatsApp from 9:00 AM to 7:00 PM.</span>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <a
              href={`${SITE_CONFIG.contact.whatsapp}?text=${encodeURIComponent(
                'Hello! I would like to book a free demo class at Race Reddys Virar East.'
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#25D366] text-white text-xs sm:text-sm font-bold px-4 py-2 rounded-lg"
            >
              <span>{t.ctaDemo}</span>
              <ArrowRight size={14} />
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}
