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
        <circle cx="7" cy="14" r="1" fill="currentColor" />
        <circle cx="11" cy="10" r="1" fill="currentColor" />
        <circle cx="15" cy="14" r="1" fill="currentColor" />
        <circle cx="21" cy="8" r="1" fill="currentColor" />
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
    desc: 'Custom ML models, predictive analytics, and AI-powered decision systems — built for production, not proof of concept.',
    tags: ['Machine Learning', 'Deep Learning', 'AutoML', 'MLOps'],
    color: 'from-cyan-500/20 to-blue-500/10',
    border: 'group-hover:border-cyan-400/50',
    iconBg: 'bg-cyan-500/10 group-hover:bg-cyan-500/20',
    iconColor: 'text-cyan-400',
  },
  {
    icon: 'vision',
    title: 'Computer Vision',
    desc: 'Image classification, object detection, video analytics, and visual inspection systems for industrial and commercial applications.',
    tags: ['Object Detection', 'Image Segmentation', 'Video AI', 'OCR'],
    color: 'from-blue-500/20 to-indigo-500/10',
    border: 'group-hover:border-blue-400/50',
    iconBg: 'bg-blue-500/10 group-hover:bg-blue-500/20',
    iconColor: 'text-blue-400',
  },
  {
    icon: 'genai',
    title: 'Generative AI & LLMs',
    desc: 'Chatbots, AI assistants, RAG systems, fine-tuned LLMs and document intelligence using the latest GenAI models.',
    tags: ['LLMs', 'VLMs', 'RAG', 'Chatbots', 'Fine-tuning'],
    color: 'from-indigo-500/20 to-purple-500/10',
    border: 'group-hover:border-indigo-400/50',
    iconBg: 'bg-indigo-500/10 group-hover:bg-indigo-500/20',
    iconColor: 'text-indigo-400',
  },
  {
    icon: 'data',
    title: 'Data Science & Analytics',
    desc: 'End-to-end data pipelines, BI dashboards, advanced analytics, and actionable insights from your data.',
    tags: ['Data Analysis', 'BI Dashboards', 'ETL Pipelines', 'NLP'],
    color: 'from-teal-500/20 to-cyan-500/10',
    border: 'group-hover:border-teal-400/50',
    iconBg: 'bg-teal-500/10 group-hover:bg-teal-500/20',
    iconColor: 'text-teal-400',
  },
  {
    icon: 'web',
    title: 'Web Development',
    desc: 'Modern full-stack applications, SaaS platforms, business portals, and AI-integrated web tools.',
    tags: ['React', 'Node.js', 'REST APIs', 'SaaS Platforms'],
    color: 'from-sky-500/20 to-blue-500/10',
    border: 'group-hover:border-sky-400/50',
    iconBg: 'bg-sky-500/10 group-hover:bg-sky-500/20',
    iconColor: 'text-sky-400',
  },
  {
    icon: 'automation',
    title: 'Business Automation',
    desc: 'Cloud workflows, WhatsApp business integration, eCommerce automation, and seamless system integrations for operational efficiency.',
    tags: ['Cloud Automation', 'WhatsApp API', 'eCommerce', 'Workflow'],
    color: 'from-emerald-500/20 to-teal-500/10',
    border: 'group-hover:border-emerald-400/50',
    iconBg: 'bg-emerald-500/10 group-hover:bg-emerald-500/20',
    iconColor: 'text-emerald-400',
  },
]

export default function Services() {
  return (
    <section id="services" className="relative py-20 sm:py-28 bg-[#080810] overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-cyan-500/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6">
        <ScrollReveal>
          <div className="text-center mb-14 sm:mb-20">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-cyan-500/30 bg-cyan-500/5 text-cyan-400 text-xs font-semibold uppercase tracking-[0.15em] mb-5">
              <span className="w-1 h-1 rounded-full bg-cyan-400" />
              Our Services
            </div>
            <h2 className="text-3xl sm:text-5xl md:text-6xl font-bold text-white mb-5 leading-tight">
              Everything you need,
              <span className="block bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                built right the first time.
              </span>
            </h2>
            <p className="text-slate-400 text-base sm:text-lg max-w-2xl mx-auto">
              From AI strategy to production deployment — we own every layer and deliver outcomes you can measure.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
          {services.map((s, idx) => (
            <ScrollReveal key={s.title} delay={idx * 80}>
              <div className={`group relative h-full p-6 sm:p-7 rounded-2xl border border-white/5 bg-gradient-to-br from-white/[0.03] to-white/[0.01] ${s.border} transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-cyan-500/10 overflow-hidden`}>
                <div className={`absolute inset-0 bg-gradient-to-br ${s.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none`} />

                <div className="relative">
                  <div className={`inline-flex w-12 h-12 rounded-xl ${s.iconBg} ${s.iconColor} items-center justify-center mb-5 transition-all duration-500 group-hover:scale-110`}>
                    <div className="w-6 h-6">
                      <Icon name={s.icon} />
                    </div>
                  </div>

                  <h3 className="text-xl font-bold text-white mb-3">{s.title}</h3>
                  <p className="text-slate-400 text-sm leading-relaxed mb-5">{s.desc}</p>

                  <div className="flex flex-wrap gap-1.5">
                    {s.tags.map(t => (
                      <span key={t} className="px-2.5 py-1 rounded-md bg-white/[0.03] border border-white/10 text-slate-400 text-xs font-medium group-hover:border-white/20 group-hover:text-slate-300 transition-colors">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
