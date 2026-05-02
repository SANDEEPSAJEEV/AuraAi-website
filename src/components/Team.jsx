import ScrollReveal from './ScrollReveal'

const capabilities = [
  {
    title: 'AI Engineering',
    skills: ['Computer Vision', 'Machine Learning', 'Generative AI', 'NLP', 'Deep Learning', 'MLOps'],
    d: 'M12 2a2 2 0 012 2v2a2 2 0 01-2 2 2 2 0 01-2-2V4a2 2 0 012-2zM12 16a2 2 0 012 2v2a2 2 0 01-2 2 2 2 0 01-2-2v-2a2 2 0 012-2zM4 12a2 2 0 012-2h2a2 2 0 012 2 2 2 0 01-2 2H6a2 2 0 01-2-2zM16 12a2 2 0 012-2h2a2 2 0 012 2 2 2 0 01-2 2h-2a2 2 0 01-2-2z',
  },
  {
    title: 'Full-Stack Development',
    skills: ['Web Applications', 'REST & GraphQL APIs', 'Databases', 'Cloud Deployment', 'Production Systems', 'Mobile-Responsive UI'],
    d: 'M8 3H5a2 2 0 00-2 2v3M21 8V5a2 2 0 00-2-2h-3M3 16v3a2 2 0 002 2h3M16 21h3a2 2 0 002-2v-3',
  },
  {
    title: 'Automation & Integration',
    skills: ['Cloud Automation', 'WhatsApp Business API', 'eCommerce Integration', 'Workflow Automation', 'System Integration', 'API Management'],
    d: 'M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83',
  },
]

export default function Team() {
  return (
    <section id="capabilities" className="relative py-20 sm:py-28 bg-white">
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6">
        <ScrollReveal>
          <div className="text-center mb-14 sm:mb-20">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-purple-200 bg-purple-600/5 text-purple-600 text-xs font-semibold uppercase tracking-[0.15em] mb-5">
              <span className="w-1 h-1 rounded-full bg-cyan-400" />
              Capabilities
            </div>
            <h2 className="text-3xl sm:text-5xl md:text-6xl font-bold text-slate-900 leading-tight mb-5">
              What the team handles
            </h2>
            <p className="text-slate-600 text-base sm:text-lg max-w-2xl mx-auto">
              Below is the breakdown of what the team works across day-to-day. Real team profiles coming soon.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-6">
          {capabilities.map((area, idx) => (
            <ScrollReveal key={area.title} delay={idx * 100}>
              <div className="group h-full p-6 sm:p-7 rounded-2xl border border-slate-200 bg-white hover:border-cyan-400/30 hover:bg-slate-50 hover:-translate-y-1 transition-all duration-500">
                <div className="text-purple-600 mb-5 transition-transform duration-500 group-hover:scale-110 origin-left">
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d={area.d} />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-5">{area.title}</h3>
                <ul className="space-y-2.5">
                  {area.skills.map(skill => (
                    <li key={skill} className="flex items-center gap-2.5 text-sm text-slate-600">
                      <span className="w-1 h-1 rounded-full bg-cyan-400/70 flex-shrink-0" />
                      {skill}
                    </li>
                  ))}
                </ul>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}

