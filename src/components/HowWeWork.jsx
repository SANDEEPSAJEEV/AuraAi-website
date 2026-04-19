import ScrollReveal from './ScrollReveal'

const steps = [
  {
    number: '01',
    title: 'Discovery',
    desc: 'Free 30-minute consultation to understand your business problem, goals, and technical requirements.',
  },
  {
    number: '02',
    title: 'Solution Design',
    desc: 'Custom architecture, tech stack, timeline, and transparent scope — no generic templates.',
  },
  {
    number: '03',
    title: 'Agile Development',
    desc: 'Iterative sprints with weekly demos. Quality-tested releases. You see progress constantly.',
  },
  {
    number: '04',
    title: 'Delivery & Support',
    desc: 'Production deployment, full documentation, and ongoing maintenance as your needs evolve.',
  },
]

export default function HowWeWork() {
  return (
    <section id="how-we-work" className="relative py-20 sm:py-28 bg-[#080810] overflow-hidden">
      <div className="absolute top-1/2 left-0 w-[400px] h-[400px] bg-cyan-500/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6">
        <ScrollReveal>
          <div className="text-center mb-14 sm:mb-20">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-cyan-500/30 bg-cyan-500/5 text-cyan-400 text-xs font-semibold uppercase tracking-[0.15em] mb-5">
              <span className="w-1 h-1 rounded-full bg-cyan-400" />
              Our Process
            </div>
            <h2 className="text-3xl sm:text-5xl md:text-6xl font-bold text-white mb-5 leading-tight">
              A structured path
              <span className="block bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                from idea to production.
              </span>
            </h2>
            <p className="text-slate-400 text-base sm:text-lg max-w-2xl mx-auto">
              Transparent, proven, and tailored to your business — so you always know what's happening with your project.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6">
          {steps.map((s, i) => (
            <ScrollReveal key={s.number} delay={i * 100}>
              <div className="group relative h-full p-6 rounded-2xl border border-white/5 bg-gradient-to-br from-white/[0.03] to-transparent hover:border-cyan-400/40 hover:bg-white/[0.05] transition-all duration-500 hover:-translate-y-2">
                {i < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-12 left-[calc(100%-12px)] w-[calc(100%-40px)] h-px bg-gradient-to-r from-cyan-500/40 to-transparent z-10" />
                )}

                <div className="relative mb-5">
                  <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-gradient-to-br from-cyan-500/20 to-blue-500/20 border border-cyan-500/30 text-cyan-400 font-bold text-xl group-hover:scale-110 group-hover:shadow-lg group-hover:shadow-cyan-500/30 transition-all">
                    {s.number}
                  </div>
                </div>
                <h3 className="text-lg font-bold text-white mb-2">{s.title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed">{s.desc}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal delay={400}>
          <div className="mt-14 sm:mt-20 grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6">
            {[
              { title: 'Quality Over Speed', desc: 'We deliver on time without cutting corners. Your product works reliably from day one.', d: 'M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z' },
              { title: 'Total Transparency', desc: 'You understand your system. Full documentation, code reviews, and honest updates.', d: 'M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7zM12 9a3 3 0 100 6 3 3 0 000-6z' },
              { title: 'Measurable Results', desc: 'Every deliverable has clear success metrics. You see ROI, not just activity.', d: 'M3 3v18h18M7 14l4-4 4 4 6-6' },
            ].map(c => (
              <div key={c.title} className="flex gap-4 p-5 sm:p-6 rounded-xl border border-white/5 bg-white/[0.02] hover:border-cyan-400/30 hover:bg-white/[0.04] transition-all duration-500">
                <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-cyan-500/10 text-cyan-400 flex items-center justify-center">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d={c.d} /></svg>
                </div>
                <div>
                  <h3 className="text-white font-semibold mb-1">{c.title}</h3>
                  <p className="text-slate-400 text-sm leading-relaxed">{c.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
