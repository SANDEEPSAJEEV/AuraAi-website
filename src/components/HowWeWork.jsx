const steps = [
  {
    number: '01',
    title: 'Discovery Call',
    desc: 'We understand your business problem, goals, data availability, and technical requirements in a free 30-min consultation.',
    color: 'from-brand-600 to-brand-400',
  },
  {
    number: '02',
    title: 'Solution Design',
    desc: 'We propose a tailored architecture, tech stack, timeline, and cost estimate — no generic templates, everything custom.',
    color: 'from-accent to-brand-400',
  },
  {
    number: '03',
    title: 'Agile Development',
    desc: 'Iterative sprints with weekly demos. You see progress constantly. Our QA team tests every release for quality and security.',
    color: 'from-brand-400 to-accent',
  },
  {
    number: '04',
    title: 'Delivery & Support',
    desc: 'We deploy to production, document everything, and provide ongoing maintenance and model retraining as your needs evolve.',
    color: 'from-brand-600 to-accent',
  },
]

export default function HowWeWork() {
  return (
    <section id="how-we-work" className="py-24 bg-[#0d0d14]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12 sm:mb-16">
          <p className="text-brand-400 text-xs sm:text-sm font-semibold uppercase tracking-widest mb-3">Process</p>
          <h2 className="text-2xl sm:text-4xl md:text-5xl font-bold text-white mb-3 sm:mb-4">How We Work</h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            A structured, transparent process so you always know what's happening with your project.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {steps.map((s, i) => (
            <div key={s.number} className="relative p-4 sm:p-6 rounded-xl sm:rounded-2xl border border-white/5 bg-white/[0.02]">
              {/* Connector line */}
              {i < steps.length - 1 && (
                <div className="hidden lg:block absolute top-10 left-full w-full h-px bg-gradient-to-r from-white/10 to-transparent z-10 -translate-x-1/2" />
              )}
              <div className={`inline-flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br ${s.color} text-white font-bold text-lg mb-4`}>
                {s.number}
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">{s.title}</h3>
              <p className="text-slate-400 text-sm leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>

        {/* What You Get */}
        <div className="mt-12 sm:mt-16 grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6">
          {[
            { icon: '✓', title: 'Quality Over Speed', desc: 'We deliver on time without cutting corners. Your product works reliably from day one.' },
            { icon: '🔍', title: 'Total Transparency', desc: 'You understand your system. Full documentation, code reviews, and honest progress updates.' },
            { icon: '📈', title: 'Results You Can Measure', desc: 'Every deliverable has clear success metrics. You see ROI, not just activity.' },
          ].map(c => (
            <div key={c.title} className="flex gap-3 sm:gap-4 p-4 sm:p-6 rounded-lg sm:rounded-xl border border-white/5 bg-white/[0.02] hover:border-cyan-500/30 hover:shadow-cyan-500/10 transition-all duration-300 hover:shadow-lg">
              <div className="text-2xl sm:text-3xl flex-shrink-0">{c.icon}</div>
              <div>
                <h3 className="text-white font-semibold mb-1">{c.title}</h3>
                <p className="text-slate-400 text-sm">{c.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
