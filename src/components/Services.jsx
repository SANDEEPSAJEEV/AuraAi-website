const services = [
  {
    icon: '🤖',
    title: 'AI & Machine Learning',
    desc: 'Custom ML models, predictive analytics, intelligent automation pipelines, and AI-powered decision systems built for production.',
    tags: ['Machine Learning', 'Deep Learning', 'AutoML', 'MLOps'],
  },
  {
    icon: '👁️',
    title: 'Computer Vision',
    desc: 'Image classification, object detection, video analytics, defect detection, and visual inspection systems for industrial and commercial use.',
    tags: ['Object Detection', 'Image Segmentation', 'Video AI', 'OCR'],
  },
  {
    icon: '✨',
    title: 'Generative AI & LLMs',
    desc: 'Chatbots, AI assistants, RAG systems, fine-tuned LLMs, VLMs, and document intelligence solutions using the latest GenAI models.',
    tags: ['LLMs', 'VLMs', 'RAG', 'Chatbots', 'Fine-tuning'],
  },
  {
    icon: '📊',
    title: 'Data Science & Analytics',
    desc: 'End-to-end data pipelines, business intelligence dashboards, advanced analytics, and actionable insights from your data.',
    tags: ['Data Analysis', 'BI Dashboards', 'ETL Pipelines', 'NLP'],
  },
  {
    icon: '🌐',
    title: 'Web Development',
    desc: 'Modern full-stack web applications, business portals, SaaS platforms, and AI-integrated web tools built with latest frameworks.',
    tags: ['React', 'Node.js', 'REST APIs', 'SaaS Platforms'],
  },
  {
    icon: '⚙️',
    title: 'Business Automation & Integration',
    desc: 'Cloud automation, AI-powered workflows, WhatsApp business integration, eCommerce automation, and seamless system integration for operational efficiency.',
    tags: ['Cloud Automation', 'WhatsApp API', 'eCommerce Integration', 'Workflow Automation'],
  },
]

export default function Services() {
  return (
    <section id="services" className="py-24 bg-[#0d0d14]">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-12 sm:mb-16 animate-in fade-in slide-in-from-bottom-8 duration-700">
          <p className="text-brand-400 text-xs sm:text-sm font-semibold uppercase tracking-widest mb-3">How We Help</p>
          <h2 className="text-2xl sm:text-4xl md:text-5xl font-bold text-white mb-3 sm:mb-4">Services Built for Outcomes</h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            From strategy to production — we own every layer of your AI system and deliver it reliably.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s, idx) => (
            <div
              key={s.title}
              className="group relative p-4 sm:p-6 rounded-xl sm:rounded-2xl border border-white/5 bg-gradient-to-br from-white/[0.02] to-white/[0.01] hover:bg-gradient-to-br hover:from-cyan-600/10 hover:to-brand-600/10 hover:border-cyan-500/50 transition-all duration-400 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/30 animate-in fade-in slide-in-from-bottom-6 duration-700"
              style={{ animationDelay: `${idx * 100}ms` }}
            >
              <div className="text-3xl sm:text-4xl mb-3 sm:mb-4">{s.icon}</div>
              <h3 className="text-lg sm:text-xl font-semibold text-white mb-2">{s.title}</h3>
              <p className="text-slate-400 text-sm leading-relaxed mb-4">{s.desc}</p>
              <div className="flex flex-wrap gap-2">
                {s.tags.map(t => (
                  <span key={t} className="px-2.5 py-1 rounded-md bg-brand-900/50 text-brand-400 text-xs font-medium border border-brand-800/50">
                    {t}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
