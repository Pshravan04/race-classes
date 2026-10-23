import { GraduationCap, HeartHandshake, Briefcase, Store, Baby, ArrowRight } from 'lucide-react';
import { useLanguage } from '../context/useLanguage';
import { Link } from 'react-router-dom';

export default function WhoIsThisFor() {
  const { t } = useLanguage();

  const personas = [
    {
      title: t.whoStudentsTitle,
      desc: t.whoStudentsDesc,
      icon: GraduationCap,
      badge: 'College & School',
      filterGoal: 'job',
      color: 'border-l-4 border-l-[#071B3A]',
    },
    {
      title: t.whoLadiesTitle,
      desc: t.whoLadiesDesc,
      icon: HeartHandshake,
      badge: 'Dedicated 12:30 PM Batch',
      filterGoal: 'skill',
      color: 'border-l-4 border-l-[#C59B27]',
      highlight: true,
    },
    {
      title: t.whoJobSeekersTitle,
      desc: t.whoJobSeekersDesc,
      icon: Briefcase,
      badge: 'Career Placement',
      filterGoal: 'job',
      color: 'border-l-4 border-l-[#C0392B]',
    },
    {
      title: t.whoBusinessTitle,
      desc: t.whoBusinessDesc,
      icon: Store,
      badge: 'GST & Invoicing',
      filterGoal: 'business',
      color: 'border-l-4 border-l-[#071B3A]',
    },
    {
      title: t.whoKidsTitle,
      desc: t.whoKidsDesc,
      icon: Baby,
      badge: 'Safe Early Learning',
      filterGoal: 'kids',
      color: 'border-l-4 border-l-[#C59B27]',
    },
  ];

  return (
    <section className="py-12 sm:py-16 bg-[#F3EFE6]/50 border-y border-[#E8E2D5]" aria-labelledby="who-heading">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-10 sm:mb-12">
          <div className="station-board mb-3 text-xs">
            TARGET AUDIENCE • कोणासाठी आहे?
          </div>
          <h2 id="who-heading" className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#071B3A] font-serif-heading mb-3">
            {t.whoHeading}
          </h2>
          <p className="text-sm sm:text-base text-[#4A5568] leading-relaxed">
            {t.whoSubheading}
          </p>
        </div>

        {/* Varied Asymmetrical Persona Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {personas.map((persona, idx) => {
            const Icon = persona.icon;
            return (
              <div
                key={idx}
                className={`tactile-card rounded-xl p-5 sm:p-6 flex flex-col justify-between ${persona.color} ${
                  persona.highlight ? 'bg-[#FFFDF9] shadow-sm' : 'bg-white'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <span className="w-10 h-10 rounded-lg bg-[#071B3A] text-[#C59B27] flex items-center justify-center shrink-0">
                      <Icon size={20} />
                    </span>
                    <span className="text-[11px] font-bold text-[#6B5A24] bg-[#FAF7EE] border border-[#E8E2D5] px-2.5 py-1 rounded-full">
                      {persona.badge}
                    </span>
                  </div>

                  <h3 className="text-base sm:text-lg font-bold text-[#071B3A] mb-2 font-serif-heading">
                    {persona.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-[#4A5568] leading-relaxed mb-4">
                    {persona.desc}
                  </p>
                </div>

                <Link
                  to={`/courses?goal=${persona.filterGoal}`}
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-[#071B3A] hover:text-[#C59B27] pt-2 border-t border-[#E8E2D5] transition-colors"
                >
                  <span>Explore recommended courses</span>
                  <ArrowRight size={13} />
                </Link>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
