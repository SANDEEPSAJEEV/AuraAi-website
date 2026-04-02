export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background gradient blobs */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-40 sm:w-64 md:w-96 h-40 sm:h-64 md:h-96 bg-brand-600/20 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-40 sm:w-60 md:w-80 h-40 sm:h-60 md:h-80 bg-accent/15 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 sm:w-96 md:w-[600px] h-48 sm:h-96 md:h-[600px] bg-brand-900/30 rounded-full blur-3xl" />
      </div>

      {/* Grid pattern overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(99,102,241,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(99,102,241,0.03)_1px,transparent_1px)] bg-[size:64px_64px]" />

      <div className="relative max-w-7xl mx-auto px-6 text-center">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-brand-500/30 bg-brand-500/10 text-brand-400 text-sm font-medium mb-8">
          <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
          Your Product. Our Responsibility.
        </div>

        <h1 className="text-3xl sm:text-5xl md:text-7xl font-extrabold text-white leading-tight tracking-tight mb-3 sm:mb-6 animate-in fade-in slide-in-from-bottom-8 duration-700">
          Ship Smarter Solutions
          <span className="block bg-gradient-to-r from-brand-400 via-accent to-brand-400 bg-clip-text text-transparent animate-in fade-in slide-in-from-bottom-8 duration-700 delay-100">
            With Quality You Can Trust
          </span>
        </h1>

        <p className="text-sm sm:text-base md:text-lg lg:text-xl text-slate-400 max-w-3xl mx-auto mb-6 sm:mb-10 leading-relaxed animate-in fade-in slide-in-from-bottom-6 duration-700 delay-200">
          We build production-grade AI systems that actually work. No fluff. No overpromises.
          Just reliable, transparent solutions designed to solve your real business problems.
        </p>

        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center animate-in fade-in slide-in-from-bottom-4 duration-700 delay-300 w-full px-4 sm:px-0">
          <a
            href="#contact"
            className="px-6 sm:px-8 py-3 sm:py-4 bg-brand-600 hover:bg-brand-500 text-white font-semibold rounded-lg sm:rounded-xl transition-all hover:shadow-lg hover:shadow-brand-600/30 text-sm sm:text-base lg:text-lg hover:scale-105 active:scale-95"
          >
            Start a Project
          </a>
          <a
            href="#services"
            className="px-6 sm:px-8 py-3 sm:py-4 bg-white/5 hover:bg-white/10 border border-white/10 text-white font-semibold rounded-lg sm:rounded-xl transition-all text-sm sm:text-base lg:text-lg hover:scale-105 active:scale-95"
          >
            Explore Services
          </a>
        </div>
      </div>
    </section>
  )
}
