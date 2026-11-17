import type { ReactNode } from 'react';
import BrandSpeedStripes from './BrandSpeedStripes';

interface SectionHeadingProps {
  eyebrow: string;
  title: ReactNode;
  description?: ReactNode;
  align?: 'left' | 'center';
  className?: string;
  showStripes?: boolean;
}

export default function SectionHeading({
  eyebrow,
  title,
  description,
  align = 'left',
  className = '',
  showStripes = true,
}: SectionHeadingProps) {
  const alignment = align === 'center' ? 'text-center max-w-3xl mx-auto' : 'max-w-3xl';

  return (
    <div className={`${alignment} ${className}`}>
      <div className={`inline-flex items-center gap-2 mb-1.5 ${align === 'center' ? 'justify-center' : ''}`}>
        {showStripes && <BrandSpeedStripes size="xs" />}
        <span className="text-xs text-[#c6383b] font-extrabold uppercase tracking-widest">{eyebrow}</span>
      </div>
      <h2 className="text-3xl sm:text-4xl text-[#0e2340] font-black tracking-tight mt-0.5">{title}</h2>
      {description && (
        <p className="text-sm sm:text-base text-slate-600 mt-2 leading-relaxed">{description}</p>
      )}
    </div>
  );
}
