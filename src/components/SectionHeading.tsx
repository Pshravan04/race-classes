import type { ReactNode } from 'react';

interface SectionHeadingProps {
  eyebrow: string;
  title: ReactNode;
  description?: ReactNode;
  align?: 'left' | 'center';
  className?: string;
}

export default function SectionHeading({
  eyebrow,
  title,
  description,
  align = 'left',
  className = '',
}: SectionHeadingProps) {
  const alignment = align === 'center' ? 'text-center max-w-3xl mx-auto' : 'max-w-3xl';

  return (
    <div className={`${alignment} ${className}`}>
      <span className="text-xs text-[#C41E1E] font-extrabold uppercase tracking-widest">{eyebrow}</span>
      <h2 className="text-3xl sm:text-4xl text-[#001752] font-black tracking-tight mt-1">{title}</h2>
      {description && (
        <p className="text-sm sm:text-base text-slate-600 mt-2 leading-relaxed">{description}</p>
      )}
    </div>
  );
}
