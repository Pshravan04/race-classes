import { Monitor, Award, Briefcase, Clock, Heart, HelpCircle, Keyboard } from 'lucide-react';
import { useLanguage } from '../context/useLanguage';

export default function WhyRaceReddys() {
  const { t } = useLanguage();

  const reasons = [
    {
      title: t.why1Title,
      desc: t.why1Desc,
      icon: Monitor,
      stat: '100% Practical',
    },
    {
      title: t.why2Title,
      desc: t.why2Desc,
      icon: Award,
      stat: 'Industry Verified',
    },
    {
      title: t.why3Title,
      desc: t.why3Desc,
      icon: Briefcase,
      stat: 'Resume & Prep',
    },
    {
      title: t.why4Title,
      desc: t.why4Desc,
      icon: Clock,
      stat: '9 AM – 7 PM',
    },
    {
      title: t.why5Title,
      desc: t.why5Desc,
      icon: Heart,
      stat: 'Dedicated Batch',
      featured: true,
    },
    {
      title: t.why6Title,
      desc: t.why6Desc,
      icon: HelpCircle,
      stat: 'Walk-in Support',
    },
    {
      title: t.why7Title,
      desc: t.why7Desc,
      icon: Keyboard,
      stat: 'English + मराठी',
    },
  ];

  return (
    <section className="py-12 sm:py-16 bg-[#FBF9F5]" aria-labelledby="why-heading">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-10 sm:mb-12">
          <div className="station-board-yellow inline-block mb-3 text-xs font-black">
            PROVEN BENEFITS • आमची वैशिष्ट्ये
          </div>
          <h2 id="why-heading" className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#071B3A] font-serif-heading mb-3">
            {t.whyHeading}
          </h2>
          <p className="text-sm sm:text-base text-[#4A5568] leading-relaxed">
            {t.whySubheading}
          </p>
        </div>

        {/* 7 Selling Points Grid with Asymmetrical Featured Card */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {reasons.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className={`tactile-card rounded-xl p-5 sm:p-6 flex flex-col justify-between ${
                  item.featured
                    ? 'border-2 border-[#C59B27] bg-[#FFFDF9] shadow-sm'
                    : 'bg-white'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between gap-3 mb-3">
                    <span className="w-10 h-10 rounded-lg bg-[#071B3A] text-[#C59B27] flex items-center justify-center shrink-0">
                      <Icon size={20} />
                    </span>
                    <span className="text-[11px] font-bold text-[#6B5A24] bg-[#FAF7EE] border border-[#E8E2D5] px-2.5 py-0.5 rounded-full">
                      {item.stat}
                    </span>
                  </div>

                  <h3 className="text-base sm:text-lg font-bold text-[#071B3A] mb-2 font-serif-heading">
                    {item.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-[#4A5568] leading-relaxed">
                    {item.desc}
                  </p>
                </div>

                <div className="pt-3 mt-3 border-t border-[#E8E2D5] flex items-center justify-between text-[11px] text-[#718096]">
                  <span>Opp. Virar East Station</span>
                  <span className="text-[#C59B27] font-bold">Raut Arcade</span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
