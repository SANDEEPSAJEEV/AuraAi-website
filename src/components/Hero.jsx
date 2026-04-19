import ScrollReveal from './ScrollReveal'

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-24 sm:pt-28">
      {/* Premium mesh background */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-cyan-500/10 rounded-full blur-[120px] animate-pulse" />
        <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-indigo-500/10 rounded-full blur-[120px] animate-pulse" style={{ animationDelay: '2s' }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] bg-blue-500/5 rounded-full blur-[100px]" />

        {/* Subtle grid overlay */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: 'linear-gradient(rgba(255,255,255,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.3) 1px, transparent 1px)',
            backgroundSize: '60px 60px',
          }}
        />

        {/* Floating particles */}
        <div className="absolute top-1/4 left-[15%] w-1.5 h-1.5 rounded-full bg-cyan-400 shadow-[0_0_10px_rgba(34,211,238,0.8)] animate-float" />
        <div className="absolute top-1/3 right-[20%] w-1 h-1 rounded-full bg-blue-400 shadow-[0_0_8px_rgba(96,165,250,0.8)] animate-float" style={{ animationDelay: '1.5s' }} />
        <div className="absolute bottom-1/3 left-[25%] w-1 h-1 rounded-full bg-indigo-400 shadow-[0_0_8px_rgba(129,140,248,0.8)] animate-float-slow" style={{ animationDelay: '3s' }} />
        <div className="absolute bottom-1/4 right-[15%] w-1.5 h-1.5 rounded-full bg-cyan-300 shadow-[0_0_10px_rgba(103,232,249,0.8)] animate-float" style={{ animationDelay: '4s' }} />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 text-center">
        <ScrollReveal>
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-cyan-500/30 bg-gradient-to-r from-cyan-500/10 via-blue-500/10 to-indigo-500/10 backdrop-blur-sm text-cyan-300 text-xs font-semibold uppercase tracking-[0.15em] mb-6 sm:mb-8">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75 animate-ping" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-400" />
            </span>
            Available for New Projects
          </div>
        </ScrollReveal>

        <ScrollReveal delay={100}>
          <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-[5.5rem] font-extrabold text-white leading-[1.05] tracking-tight mb-5 sm:mb-7">
            <span className="block">Engineering</span>
            <span className="block bg-gradient-to-r from-cyan-300 via-blue-400 to-indigo-400 bg-clip-text text-transparent animate-gradient-shift" style={{ backgroundSize: '200% auto' }}>
              Intelligent Systems
            </span>
            <span className="block text-2xl sm:text-3xl md:text-4xl font-semibold text-slate-300 mt-3 sm:mt-5">
              that actually ship to production.
            </span>
          </h1>
        </ScrollReveal>

        <ScrollReveal delay={200}>
          <p className="text-base sm:text-lg md:text-xl text-slate-400 max-w-3xl mx-auto mb-8 sm:mb-10 leading-relaxed">
            We build <span className="text-cyan-400 font-medium">AI-powered products</span>, <span className="text-blue-400 font-medium">automation workflows</span>, and <span className="text-indigo-400 font-medium">web platforms</span> —
            engineered for scale, tested thoroughly, delivered reliably.
          </p>
        </ScrollReveal>

        <ScrollReveal delay={300}>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center w-full px-4 sm:px-0">
            <a
              href="#contact"
              className="group w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-400 hover:to-blue-400 text-white font-semibold rounded-xl text-sm sm:text-base shadow-xl shadow-cyan-500/30 hover:shadow-cyan-500/50 hover:scale-105 transition-all duration-300"
            >
              Start Your Project
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="group-hover:translate-x-1 transition-transform"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
            </a>
            <a
              href="#services"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-4 bg-white/[0.03] hover:bg-white/[0.08] backdrop-blur-sm border border-white/10 hover:border-cyan-400/40 text-white font-semibold rounded-xl text-sm sm:text-base transition-all duration-300"
            >
              Explore Services
            </a>
          </div>
        </ScrollReveal>

        {/* Trust indicators */}
        <ScrollReveal delay={400}>
          <div className="mt-14 sm:mt-20 grid grid-cols-3 gap-4 sm:gap-8 max-w-2xl mx-auto">
            {[
              { label: 'Production-Ready', desc: 'Not prototypes' },
              { label: 'Fully Documented', desc: 'Every line' },
              { label: 'Honest Pricing', desc: 'No surprises' },
            ].map((item, i) => (
              <div key={item.label} className="flex flex-col items-center text-center">
                <div className="flex items-center gap-1.5 mb-1">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#22d3ee" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6L9 17l-5-5" /></svg>
                  <span className="text-white text-xs sm:text-sm font-semibold">{item.label}</span>
                </div>
                <span className="text-slate-500 text-[10px] sm:text-xs">{item.desc}</span>
              </div>
            ))}
          </div>
        </ScrollReveal>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-50">
        <span className="text-slate-500 text-xs tracking-widest uppercase">Scroll</span>
        <div className="w-px h-8 bg-gradient-to-b from-cyan-400 to-transparent animate-pulse" />
      </div>
    </section>
  )
}
