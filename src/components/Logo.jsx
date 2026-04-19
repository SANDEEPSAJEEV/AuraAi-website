export default function Logo({ size = 32, showText = true, className = '' }) {
  return (
    <div className={`flex items-center gap-2.5 ${className}`}>
      <svg
        width={size}
        height={size}
        viewBox="0 0 40 40"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="flex-shrink-0"
      >
        <defs>
          <linearGradient id="auraGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#22d3ee" />
            <stop offset="50%" stopColor="#38bdf8" />
            <stop offset="100%" stopColor="#6366f1" />
          </linearGradient>
          <filter id="auraGlow" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="2" result="coloredBlur" />
            <feMerge>
              <feMergeNode in="coloredBlur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>
        <circle cx="20" cy="20" r="18" stroke="url(#auraGradient)" strokeWidth="1.5" fill="none" opacity="0.4" />
        <path
          d="M20 8 L30 28 L28 28 L25.5 23 L14.5 23 L12 28 L10 28 Z M16 20 L24 20 L20 12 Z"
          fill="url(#auraGradient)"
          filter="url(#auraGlow)"
        />
        <circle cx="20" cy="20" r="2" fill="#22d3ee" opacity="0.9" />
      </svg>
      {showText && (
        <div className="flex flex-col leading-none">
          <span className="text-white font-bold text-base sm:text-lg tracking-tight">Aura AI</span>
          <span className="text-cyan-400/80 text-[9px] sm:text-[10px] font-medium tracking-[0.15em] uppercase mt-0.5">Vision · Intelligence</span>
        </div>
      )}
    </div>
  )
}
