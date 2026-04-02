export default function BrandStory() {
  return (
    <section className="py-24 bg-[#0d0d14]">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-16 animate-in fade-in slide-in-from-bottom-8 duration-700">
          <p className="text-accent text-sm font-semibold uppercase tracking-widest mb-3">Who We Are</p>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Why Aura AI</h2>
        </div>

        <div className="space-y-8 animate-in fade-in slide-in-from-bottom-6 duration-700 delay-200">
          {/* Aura Definition */}
          <div className="p-8 rounded-2xl border border-brand-500/20 bg-brand-900/10">
            <h3 className="text-2xl font-bold text-white mb-4">What is an Aura?</h3>
            <p className="text-slate-300 text-lg leading-relaxed mb-4">
              An <span className="text-brand-400 font-semibold">aura</span> is an invisible energy or atmosphere that surrounds something.
              It's a <span className="text-brand-400 font-semibold">distinctive presence</span> that's felt but not directly seen—a powerful influence that transforms everything it touches.
            </p>
          </div>

          {/* Why We Chose It */}
          <div className="p-8 rounded-2xl border border-accent/20 bg-cyan-900/10">
            <h3 className="text-2xl font-bold text-white mb-6">Why We Chose It</h3>
            <div className="space-y-5">
              {[
                { icon: '✨', title: 'Invisible But Powerful', desc: 'Like AI itself, our solutions work in the background but transform everything. You feel the impact, not the complexity.' },
                { icon: '🎯', title: 'Distinctive Presence', desc: 'We bring a unique character to every project—not another AI vendor, but a partner with conviction and quality.' },
                { icon: '⚡', title: 'Impact Over Hype', desc: 'An aura is felt through results, not marketing. We focus on what matters: your success, not our credentials.' },
                { icon: '🌟', title: 'Elevation & Transformation', desc: 'Like an aura surrounding you, our solutions elevate your business, creating a visible shift in what you can achieve.' },
              ].map(item => (
                <div key={item.title} className="flex gap-4">
                  <div className="text-3xl flex-shrink-0">{item.icon}</div>
                  <div>
                    <h4 className="text-white font-semibold mb-2">{item.title}</h4>
                    <p className="text-slate-400 text-sm leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* The Promise */}
          <div className="p-8 rounded-2xl border border-white/10 bg-white/[0.02] text-center">
            <h3 className="text-2xl font-bold text-white mb-4">Our Promise</h3>
            <p className="text-slate-300 text-lg leading-relaxed">
              <span className="text-brand-400 font-semibold">Aura AI</span> creates an atmosphere of quality, trust, and results around your projects.
              We don't just deliver solutions—we elevate your entire ecosystem.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
