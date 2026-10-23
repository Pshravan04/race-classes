interface RailwayTrackDividerProps {
  label?: string;
  badge?: string;
  className?: string;
}

export default function RailwayTrackDivider({ label, badge, className = '' }: RailwayTrackDividerProps) {
  return (
    <div className={`w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 my-8 sm:my-12 ${className}`} aria-hidden="true">
      <div className="relative flex items-center justify-center">
        {/* The double track rails */}
        <div className="absolute inset-0 flex flex-col justify-between py-1.5 pointer-events-none">
          <div className="w-full h-[1.5px] bg-[#C59B27]/40" />
          <div className="w-full h-[10px] opacity-40 bg-[repeating-linear-gradient(90deg,transparent,transparent_16px,#8C98A4_16px,#8C98A4_18px)]" />
          <div className="w-full h-[1.5px] bg-[#C59B27]/40" />
        </div>

        {/* Center Station Badge or Label */}
        {label ? (
          <div className="relative z-10 bg-[#FBF9F5] px-4 py-1 flex items-center gap-2 border border-[#E8E2D5] rounded-full shadow-xs">
            <span className="w-2 h-2 rounded-full bg-[#C0392B] animate-pulse" />
            <span className="text-xs font-bold text-[#071B3A] tracking-wider uppercase font-serif-heading">
              {label}
            </span>
            {badge && (
              <span className="text-[10px] font-black bg-[#C59B27] text-[#071B3A] px-2 py-0.5 rounded-full">
                {badge}
              </span>
            )}
          </div>
        ) : (
          <div className="relative z-10 bg-[#FBF9F5] px-3 py-1 flex items-center gap-2">
            <span className="text-[11px] font-bold text-[#C59B27] uppercase tracking-widest">
              VIRAR EAST • LOCAL FAST
            </span>
          </div>
        )}
      </div>
    </div>
  );
}
