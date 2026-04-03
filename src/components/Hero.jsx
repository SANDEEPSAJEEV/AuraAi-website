export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Animated background gradient */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-20 right-20 w-80 h-80 bg-gradient-to-br from-cyan-600/20 to-transparent rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 left-20 w-60 h-60 bg-gradient-to-tr from-brand-600/20 to-transparent rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 text-center">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-cyan-500/30 bg-cyan-500/10 text-cyan-400 text-xs sm:text-sm font-semibold uppercase tracking-wider mb-6 sm:mb-8">
          <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
          AI Engineering + Production Systems
        </div>

        <h1 className="text-3xl sm:text-5xl md:text-7xl font-extrabold text-white leading-tight tracking-tight mb-3 sm:mb-6">
          Production-Grade AI
          <span className="block bg-gradient-to-r from-brand-400 via-cyan-400 to-brand-400 bg-clip-text text-transparent">
            Built Right, Delivered Reliably
          </span>
        </h1>

        <p className="text-sm sm:text-base md:text-lg text-slate-400 max-w-3xl mx-auto mb-6 sm:mb-10 leading-relaxed">
          We build AI systems that work in production. Computer Vision, Machine Learning, Generative AI, Web Platforms —
          engineered for scale, tested thoroughly, documented completely. No shortcuts. No overselling.
        </p>

        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center w-full px-4 sm:px-0">
          <a
            href="#contact"
            className="px-6 sm:px-8 py-3 sm:py-4 bg-cyan-500 hover:bg-cyan-600 text-white font-semibold rounded-lg sm:rounded-xl transition-all text-sm sm:text-base hover:shadow-2xl hover:shadow-cyan-500/50"
          >
            Start a Conversation
          </a>
          <a
            href="#services"
            className="px-6 sm:px-8 py-3 sm:py-4 bg-white/5 hover:bg-white/10 border border-white/10 hover:border-cyan-400/60 text-white font-semibold rounded-lg sm:rounded-xl transition-all text-sm sm:text-base"
          >
            See What We Do
          </a>
        </div>
      </div>
    </section>
  )
}
