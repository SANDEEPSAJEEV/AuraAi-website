import ScrollReveal from './ScrollReveal'

const capabilities = [
  {
    title: 'AI Engineering',
    skills: ['Computer Vision', 'Machine Learning', 'Generative AI', 'NLP', 'Deep Learning', 'MLOps'],
    d: 'M12 2a2 2 0 012 2v2a2 2 0 01-2 2 2 2 0 01-2-2V4a2 2 0 012-2zM12 16a2 2 0 012 2v2a2 2 0 01-2 2 2 2 0 01-2-2v-2a2 2 0 012-2zM4 12a2 2 0 012-2h2a2 2 0 012 2 2 2 0 01-2 2H6a2 2 0 01-2-2zM16 12a2 2 0 012-2h2a2 2 0 012 2 2 2 0 01-2 2h-2a2 2 0 01-2-2z',
    color: 'cyan',
  },
  {
    title: 'Full-Stack Development',
    skills: ['Web Applications', 'REST & GraphQL APIs', 'Databases', 'Cloud Deployment', 'Production Systems', 'Mobile-Responsive UI'],
    d: 'M8 3H5a2 2 0 00-2 2v3M21 8V5a2 2 0 00-2-2h-3M3 16v3a2 2 0 002 2h3M16 21h3a2 2 0 002-2v-3',
    color: 'blue',
  },
  {
    title: 'Automation & Integration',
    skills: ['Cloud Automation', 'WhatsApp Business API', 'eCommerce Integration', 'Workflow Automation', 'System Integration', 'API Management'],
    d: 'M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83',
    color: 'indigo',
  },
]

const principles = [
  { title: 'Understand Your Problem', desc: 'We spend time understanding what you\'re trying to achieve, your constraints, and your success metrics. No assumptions.' },
  { title: 'Design a Real Solution', desc: 'Based on your needs, we design an architecture that\'s appropriate for your problem. No oversized or undersized systems.' },
  { title: 'Build with Quality', desc: 'We code, test, and document thoroughly. What we deliver is production-ready, not a prototype.' },
  { title: 'Handoff & Support', desc: 'We document everything and provide support during the transition. You own the system — we support your success.' },
]

const colorMap = {
  cyan: {
    bg: 'bg-cyan-500/10 group-hover:bg-cyan-500/20',
    text: 'text-cyan-400',
    dot: 'bg-cyan-400',
    border: 'group-hover:border-cyan-400/40',
  },
  blue: {
    bg: 'bg-blue-500/10 group-hover:bg-blue-500/20',
    text: 'text-blue-400',
    dot: 'bg-blue-400',
    border: 'group-hover:border-blue-400/40',
  },
  indigo: {
    bg: 'bg-indigo-500/10 group-hover:bg-indigo-500/20',
    text: 'text-indigo-400',
    dot: 'bg-indigo-400',
    border: 'group-hover:border-indigo-400/40',
  },
}

export default function Team() {
  return (
    <section id="team" className="relative py-20 sm:py-28 bg-[#0a0a12] overflow-hidden">
      <div className="absolute top-0 right-1/4 w-[400px] h-[400px] bg-blue-500/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6">
        <ScrollReveal>
          <div className="text-center mb-14 sm:mb-20">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-blue-500/30 bg-blue-500/5 text-blue-400 text-xs font-semibold uppercase tracking-[0.15em] mb-5">
              <span className="w-1 h-1 rounded-full bg-blue-400" />
              The Team
            </div>
            <h2 className="text-3xl sm:text-5xl md:text-6xl font-bold text-white mb-5 leading-tight">
              Built by engineers
              <span className="block bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                who ship to production.
              </span>
            </h2>
            <p className="text-slate-400 text-base sm:text-lg max-w-2xl mx-auto">
              Aura AI is led by engineers with hands-on experience across Computer Vision, Machine Learning,
              Generative AI, and full-stack development. We build what we know works.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-6 mb-16 sm:mb-20">
          {capabilities.map((area, idx) => {
            const c = colorMap[area.color]
            return (
              <ScrollReveal key={area.title} delay={idx * 100}>
                <div className={`group h-full p-6 sm:p-7 rounded-2xl border border-white/5 bg-gradient-to-br from-white/[0.03] to-transparent ${c.border} hover:-translate-y-2 transition-all duration-500`}>
                  <div className={`inline-flex w-12 h-12 rounded-xl ${c.bg} ${c.text} items-center justify-center mb-5 group-hover:scale-110 transition-all`}>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                      <path d={area.d} />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-5">{area.title}</h3>
                  <ul className="space-y-2.5">
                    {area.skills.map(skill => (
                      <li key={skill} className="flex items-center gap-2.5 text-sm text-slate-400">
                        <span className={`w-1.5 h-1.5 rounded-full ${c.dot} flex-shrink-0`} />
                        {skill}
                      </li>
                    ))}
                  </ul>
                </div>
              </ScrollReveal>
            )
          })}
        </div>

        <ScrollReveal>
          <div className="max-w-4xl mx-auto p-6 sm:p-10 rounded-2xl border border-white/5 bg-gradient-to-br from-white/[0.03] to-transparent">
            <h3 className="text-xl sm:text-2xl font-bold text-white mb-6 sm:mb-8 text-center">Our Approach</h3>
            <div className="grid sm:grid-cols-2 gap-5 sm:gap-6">
              {principles.map((p, i) => (
                <div key={p.title} className="flex gap-4">
                  <div className="flex-shrink-0 w-8 h-8 rounded-lg bg-cyan-500/10 text-cyan-400 flex items-center justify-center text-sm font-bold">
                    {String(i + 1).padStart(2, '0')}
                  </div>
                  <div>
                    <h4 className="text-white font-semibold mb-1">{p.title}</h4>
                    <p className="text-slate-400 text-sm leading-relaxed">{p.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
