import ScrollReveal from './ScrollReveal'

const solutions = [
  {
    title: 'Vision & Perception Systems',
    desc: 'Advanced spatial intelligence for operational scale',
    bg: 'bg-purple-50',
    iconBg: 'bg-purple-100',
    iconText: 'text-purple-600',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
        <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
        <circle cx="8.5" cy="8.5" r="1.5" />
        <polyline points="21 15 16 10 5 21" />
      </svg>
    ),
  },
  {
    title: 'Predictive Analytics',
    desc: 'From data modeling to intelligent forecasting',
    bg: 'bg-blue-50',
    iconBg: 'bg-blue-100',
    iconText: 'text-blue-600',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
        <path d="M12 2v20" />
        <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
      </svg>
    ),
  },
  {
    title: 'Intelligent Automation',
    desc: 'Autonomous workflows & cognitive decision engines',
    bg: 'bg-orange-50',
    iconBg: 'bg-orange-100',
    iconText: 'text-orange-600',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
        <circle cx="12" cy="12" r="10" />
        <path d="M12 16v-4" />
        <path d="M12 8h.01" />
      </svg>
    ),
  },
  {
    title: 'Enterprise Infrastructure',
    desc: 'Secure, scalable deployment for production-grade ML',
    bg: 'bg-emerald-50',
    iconBg: 'bg-emerald-100',
    iconText: 'text-emerald-600',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
        <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
        <polyline points="3.27 6.96 12 12.01 20.73 6.96" />
        <line x1="12" y1="22.08" x2="12" y2="12" />
      </svg>
    ),
  },
]

const stats = [
  { label: 'Average model latency', value: '~45 ms', highlight: true },
  { label: 'Production uptime', value: '99.95%', highlight: false },
  { label: 'Average project length', value: '8-12 weeks', highlight: false },
  { label: 'Typical team size', value: 'Small & Agile', highlight: false },
]

export default function Services() {
  return (
    <section id="services" className="relative py-24 bg-white border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-[1.5fr_1fr] gap-16 lg:gap-24">
          
          {/* Left Column */}
          <div>
            <ScrollReveal>
              <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-6">
                Solutions & Services
              </h2>
              <p className="text-slate-600 leading-relaxed mb-10 text-lg">
                Architecting enterprise-grade AI solutions that drive measurable business impact. We partner with 
                industry leaders to deploy scalable, intelligent infrastructure that transforms operational workflows.
              </p>
            </ScrollReveal>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {solutions.map((s, idx) => (
                <ScrollReveal key={s.title} delay={idx * 100}>
                  <div className={`p-6 rounded-lg ${s.bg} border border-black/5 hover:shadow-md transition-shadow h-full flex flex-col`}>
                    <div className="flex items-start gap-4 mb-2">
                      <div className={`w-10 h-10 rounded-md ${s.iconBg} ${s.iconText} flex items-center justify-center shrink-0`}>
                        {s.icon}
                      </div>
                      <div>
                        <h3 className="font-semibold text-slate-900 leading-tight mb-1">{s.title}</h3>
                        <p className="text-sm text-slate-600 leading-snug">{s.desc}</p>
                      </div>
                    </div>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>

          {/* Right Column */}
          <div>
            <ScrollReveal delay={200}>
              <div className="bg-slate-50 p-8 rounded-xl border border-slate-200">
                <h3 className="text-lg font-semibold text-slate-800 mb-6">
                  Trusted by engineering teams
                </h3>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2 gap-4">
                  {stats.map((stat, idx) => (
                    <div 
                      key={stat.label} 
                      className={`p-5 rounded-lg bg-white ${
                        stat.highlight 
                          ? 'border-2 border-blue-400 shadow-sm' 
                          : 'border border-slate-200'
                      }`}
                    >
                      <p className="text-sm text-slate-500 mb-1">{stat.label}</p>
                      <p className="text-2xl font-bold text-slate-900">{stat.value}</p>
                    </div>
                  ))}
                </div>
              </div>
            </ScrollReveal>
          </div>

        </div>
      </div>
    </section>
  )
}
