export default function Guarantee() {
  return (
    <section className="py-16 sm:py-24 bg-gradient-to-r from-cyan-900/20 via-brand-900/20 to-cyan-900/20 border-y border-cyan-500/20">
      <div className="max-w-3xl mx-auto px-6 text-center">
        <h2 className="text-2xl sm:text-4xl font-bold text-white mb-4">
          Your Success Is Our Success
        </h2>
        <p className="text-slate-400 text-lg leading-relaxed mb-6">
          We're confident in what we build. That's why we can discuss outcome-based or hybrid engagement models
          where our payment reflects the value delivered. The solution matters more than the process.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center text-sm">
          <div className="flex items-start gap-3">
            <span className="text-cyan-400 font-bold text-lg">✓</span>
            <div className="text-left">
              <div className="text-white font-semibold">Fixed Project Cost</div>
              <div className="text-slate-500">Clear scope, clear price</div>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <span className="text-cyan-400 font-bold text-lg">✓</span>
            <div className="text-left">
              <div className="text-white font-semibold">Outcome-Based</div>
              <div className="text-slate-500">We succeed when you do</div>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <span className="text-cyan-400 font-bold text-lg">✓</span>
            <div className="text-left">
              <div className="text-white font-semibold">Hybrid Models</div>
              <div className="text-slate-500">Let's design what works</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
