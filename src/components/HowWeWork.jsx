import ScrollReveal from './ScrollReveal'

const steps = [
  {
    number: '01',
    title: 'Discovery',
    desc: '30-minute call to scope the problem. No pitch, no slide deck.',
  },
  {
    number: '02',
    title: 'Solution Design',
    desc: 'Architecture, tech stack, and a written scope. You see the design before we build.',
  },
  {
    number: '03',
    title: 'Agile Development',
    desc: 'Weekly demos. Tested releases. You can run it yourself end-of-sprint.',
  },
  {
    number: '04',
    title: 'Delivery & Support',
    desc: 'Production deployment plus documentation. Ongoing support if you want it.',
  },
]

export default function HowWeWork() {
  return (
    <section id="how-we-work" className="relative py-20 sm:py-28 bg-white">
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6">
        <ScrollReveal>
          <div className="text-center mb-14 sm:mb-20">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-purple-200 bg-purple-600/5 text-purple-600 text-xs font-semibold uppercase tracking-[0.15em] mb-5">
              <span className="w-1 h-1 rounded-full bg-cyan-400" />
              Our Process
            </div>
            <h2 className="text-3xl sm:text-5xl md:text-6xl font-bold text-slate-900 leading-tight">
              From idea to production.
            </h2>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6">
          {steps.map((s, i) => (
            <ScrollReveal key={s.number} delay={i * 100}>
              <div className="group relative h-full p-6 rounded-2xl border border-slate-200 bg-white hover:border-cyan-400/30 hover:bg-slate-50 transition-all duration-500 hover:-translate-y-1">
                {i < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-12 left-[calc(100%-12px)] w-[calc(100%-40px)] h-px bg-gradient-to-r from-cyan-500/30 to-transparent z-10" />
                )}
                <div className="text-purple-600 font-bold text-2xl mb-4">
                  {s.number}
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-2">{s.title}</h3>
                <p className="text-slate-600 text-sm leading-relaxed">{s.desc}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}

