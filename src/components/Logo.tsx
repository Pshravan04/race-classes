interface LogoProps {
  variant?: 'dark' | 'light'
  size?: 'sm' | 'md' | 'lg'
}

export default function Logo({ variant = 'dark', size = 'md' }: LogoProps) {
  const isDark = variant === 'dark'

  const iconSizes = {
    sm: 'w-8 h-8 text-base',
    md: 'w-10 h-10 text-xl',
    lg: 'w-12 h-12 text-2xl',
  }

  const titleSizes = {
    sm: 'text-base',
    md: 'text-lg',
    lg: 'text-xl',
  }

  const subSizes = {
    sm: 'text-[9px] tracking-[0.12em]',
    md: 'text-[10px] tracking-[0.14em]',
    lg: 'text-[11px] tracking-[0.16em]',
  }

  return (
    <div className="flex items-center gap-3 select-none">
      {/* Crisp Vector Crest Icon */}
      <div
        className={`${iconSizes[size]} rounded-xl flex items-center justify-center font-black shrink-0 shadow-xs transition-transform duration-200 hover:scale-105`}
        style={{
          background: isDark
            ? 'linear-gradient(135deg, #102B50 0%, #0A1D35 100%)'
            : 'linear-gradient(135deg, #C9A04F 0%, #D9AE52 100%)',
          border: isDark ? '1.5px solid #C9A04F' : '1.5px solid rgba(255, 255, 255, 0.4)',
          color: isDark ? '#C9A04F' : '#0A1D35',
        }}
        aria-hidden="true"
      >
        <span>R</span>
      </div>

      {/* Typography Lockup */}
      <div className="flex flex-col leading-none">
        <span
          className={`font-black tracking-tight ${titleSizes[size]}`}
          style={{ color: isDark ? '#102B50' : '#FFFFFF' }}
        >
          RACE REDDYS
        </span>
        <span
          className={`font-bold uppercase mt-1 ${subSizes[size]}`}
          style={{ color: isDark ? '#C9A04F' : '#E2E8F0' }}
        >
          Advanced Computer Education
        </span>
      </div>
    </div>
  )
}
