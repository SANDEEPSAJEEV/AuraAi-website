import ScrollReveal from './ScrollReveal'

const Icon = ({ name }) => {
  const icons = {
    ai: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2a2 2 0 0 1 2 2v2a2 2 0 0 1-2 2 2 2 0 0 1-2-2V4a2 2 0 0 1 2-2z" />
        <path d="M12 16a2 2 0 0 1 2 2v2a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-2a2 2 0 0 1 2-2z" />
        <path d="M4 12a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2 2 2 0 0 1-2 2H6a2 2 0 0 1-2-2z" />
        <path d="M16 12a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-2a2 2 0 0 1-2-2z" />
        <circle cx="12" cy="12" r="2" />
      </svg>
    ),
    vision: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7z" />
        <circle cx="12" cy="12" r="3" />
      </svg>
    ),
    genai: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2l2.5 6.5L21 11l-6.5 2.5L12 20l-2.5-6.5L3 11l6.5-2.5z" />
        <path d="M19 3l.8 2.2L22 6l-2.2.8L19 9l-.8-2.2L16 6l2.2-.8z" />
      </svg>
    ),
    data: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 3v18h18" />
        <path d="M7 14l4-4 4 4 6-6" />
      </svg>
    ),
    web: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="3" width="20" height="14" rx="2" />
        <path d="M8 21h8M12 17v4M6 7h.01M10 7h.01" />
      </svg>
    ),
    automation: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83" />
        <circle cx="12" cy="12" r="4" />
      </svg>
    ),
  }
  return icons[name] || null
}

const services = [
  {
    icon: 'ai',
    title: 'AI & Machine Learning',
    desc: 'Time-series forecasting, anomaly detection, classification. PyTorch and ONNX for deployment. We handle the full lifecycle, not just notebooks.',
  },
  {
    icon: 'vision',
    title: 'Computer Vision',
    desc: 'Detection-transformer models for industrial inspection, PPE compliance, and edge CV. Runs on Jetson, Coral, or CPU — not just cloud.',
  },
  {
    icon: 'genai',
    title: 'Generative AI & LLMs',
    desc: 'RAG and agentic workflows on LangGraph. Document intelligence, internal copilots, HITL review pipelines. Built to run inside your VPC if needed.',
  },
  {
    icon: 'data',
    title: 'Data Science & Analytics',
    desc: 'ETL, BI dashboards, and analytics that turn raw operational data into something a non-data team can act on. Postgres, dbt, Metabase / Superset.',
  },
  {
    icon: 'web',
    title: 'Web Development',
    desc: 'Full-stack apps with React + Node/FastAPI. Used as the wrapper around AI workflows — admin UIs, internal tools, customer-facing portals.',
  },
  {
    icon: 'automation',
    title: 'Business Automation',
    desc: 'Workflow automation across the tools your team already uses — Slack, WhatsApp, ERP, CRM. Low-friction adoption, not a rip-and-replace.',
  },
]

export default function Services() {
  return (
    <section id="services" className="relative py-20 sm:py-28 bg-[#080810]">
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6">
        <ScrollReveal>
          <div className="text-center mb-14 sm:mb-20">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-cyan-500/30 bg-cyan-500/5 text-cyan-400 text-xs font-semibold uppercase tracking-[0.15em] mb-5">
              <span className="w-1 h-1 rounded-full bg-cyan-400" />
              What We Build
            </div>
            <h2 className="text-3xl sm:text-5xl md:text-6xl font-bold text-white leading-tight">
              Six areas we focus on.
            </h2>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
          {services.map((s, idx) => (
            <ScrollReveal key={s.title} delay={idx * 80}>
              <div className="group h-full p-6 sm:p-7 rounded-2xl border border-white/5 bg-white/[0.02] hover:border-cyan-400/30 hover:bg-white/[0.04] transition-all duration-500 hover:-translate-y-1">
                <div className="text-cyan-400 mb-5 transition-transform duration-500 group-hover:scale-110 origin-left">
                  <div className="w-7 h-7">
                    <Icon name={s.icon} />
                  </div>
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{s.title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed">{s.desc}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
