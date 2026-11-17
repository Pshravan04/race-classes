import React from 'react';

interface BrandSpeedStripesProps {
  className?: string;
  size?: 'xs' | 'sm' | 'md' | 'lg';
  animated?: boolean;
}

export const BrandSpeedStripes: React.FC<BrandSpeedStripesProps> = ({
  className = '',
  size = 'md',
  animated = false,
}) => {
  const sizeMap = {
    xs: { h: 'h-3.5', w: 'w-1.5', gap: 'gap-1', skew: '-skew-x-20' },
    sm: { h: 'h-5', w: 'w-2', gap: 'gap-1.5', skew: '-skew-x-20' },
    md: { h: 'h-7', w: 'w-2.5', gap: 'gap-2', skew: '-skew-x-20' },
    lg: { h: 'h-10', w: 'w-3.5', gap: 'gap-2.5', skew: '-skew-x-25' },
  };

  const { h, w, gap, skew } = sizeMap[size];

  return (
    <div
      className={`inline-flex items-center ${gap} ${className}`}
      aria-hidden="true"
    >
      {/* Blue Bar (#0e2340) */}
      <span
        className={`${h} ${w} ${skew} rounded-sm bg-[#0e2340] shadow-xs transition-transform duration-300 ${
          animated ? 'hover:scale-y-110' : ''
        }`}
      />
      {/* Red Bar (#c6383b) */}
      <span
        className={`${h} ${w} ${skew} rounded-sm bg-[#c6383b] shadow-xs transition-transform duration-300 ${
          animated ? 'hover:scale-y-110' : ''
        }`}
      />
    </div>
  );
};

export default BrandSpeedStripes;
