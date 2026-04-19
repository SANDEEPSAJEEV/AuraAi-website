import ScrollReveal from './ScrollReveal'

const areas = [
  { label: 'Industrial AI', desc: 'Manufacturing, quality control, predictive maintenance, smart factory automation.', d: 'M12 2v20M2 12h20M4.22 4.22l15.56 15.56M19.78 4.22L4.22 19.78' },
  { label: 'Computer Vision', desc: 'Defect detection, surveillance, medical imaging, retail analytics.', d: 'M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7zM12 9a3 3 0 100 6 3 3 0 000-6z' },
  { label: 'Generative AI', desc: 'GPT-based apps, image generation, content creation, code generation.', d: 'M12 2l2.5 6.5L21 11l-6.5 2.5L12 20l-2.5-6.5L3 11l6.5-2.5z' },
  { label: 'VLM / Multimodal', desc: 'Vision-Language models for document AI, visual Q&A, scene analysis.', d: 'M4 4h16v12H4zM8 20h8M12 16v4' },
  { label: 'Deep Learning', desc: 'CNNs, Transformers, GANs — designed for real-world classification and generation.', d: 'M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5' },
  { label: 'Machine Learning', desc: 'Supervised/unsupervised learning, ensembles, feature engineering, deployment.', d: 'M21 16V8a2 2 0 00-1-1.73l-7-4a2 2 0 00-2 0l-7 4A2 2 0 003 8v8a2 2 0 001 1.73l7 4a2 2 0 002 0l7-4A2 2 0 0021 16z' },
  { label: 'Data Science', desc: 'Statistical analysis, forecasting, visualization, business intelligence.', d: 'M3 3v18h18M7 16l4-8 4 4 5-6' },
  { label: 'NLP & Text AI', desc: 'Sentiment analysis, NER, classification, summarization, translation.', d: 'M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z' },
  { label: 'IT Outsourcing', desc: 'Dedicated teams, staff augmentation, long-term technology partnerships.', d: 'M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2M9 11a4 4 0 100-8 4 4 0 000 8zM23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75' },
]

const techStack = [
  'Python', 'PyTorch', 'TensorFlow', 'OpenCV', 'HuggingFace',
  'LangChain', 'FastAPI', 'React', 'Node.js', 'PostgreSQL',
  'Docker', 'AWS', 'GCP', 'CUDA', 'Scikit-learn',
]

export default function Expertise() {
  return (
    <section id="expertise" className="relative py-20 sm:py-28 bg-[#0a0a12] overflow-hidden">
      <div className="absolute bottom-0 right-0 w-[500px] h-[400px] bg-indigo-500/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6">
        <ScrollReveal>
          <div className="text-center mb-14 sm:mb-20">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-indigo-500/30 bg-indigo-500/5 text-indigo-400 text-xs font-semibold uppercase tracking-[0.15em] mb-5">
              <span className="w-1 h-1 rounded-full bg-indigo-400" />
              Areas of Expertise
            </div>
            <h2 className="text-3xl sm:text-5xl md:text-6xl font-bold text-white mb-5 leading-tight">
              Deep expertise across
              <span className="block bg-gradient-to-r from-indigo-400 to-cyan-400 bg-clip-text text-transparent">
                every AI domain.
              </span>
            </h2>
            <p className="text-slate-400 text-base sm:text-lg max-w-2xl mx-auto">
              Real problems solved. No research papers. No experimental projects. Only systems that perform in production.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 mb-16 sm:mb-20">
          {areas.map((a, idx) => (
            <ScrollReveal key={a.label} delay={idx * 50}>
              <div className="group flex gap-4 p-5 sm:p-6 rounded-xl border border-white/5 bg-gradient-to-br from-white/[0.02] to-transparent hover:border-cyan-400/30 hover:bg-white/[0.04] transition-all duration-500 hover:-translate-y-1 h-full">
                <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-cyan-500/10 group-hover:bg-cyan-500/20 text-cyan-400 flex items-center justify-center transition-all group-hover:scale-110">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d={a.d} />
                  </svg>
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="text-white font-semibold mb-1.5 group-hover:text-cyan-300 transition-colors">{a.label}</h3>
                  <p className="text-slate-400 text-sm leading-relaxed">{a.desc}</p>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal>
          <div className="text-center">
            <p className="text-slate-500 text-xs uppercase tracking-[0.2em] mb-6">Technology Stack</p>
            <div className="flex flex-wrap justify-center gap-2 sm:gap-3">
              {techStack.map(t => (
                <span
                  key={t}
                  className="px-4 py-2 rounded-full border border-white/10 bg-white/[0.02] text-slate-300 text-xs sm:text-sm font-medium hover:border-cyan-400/40 hover:bg-cyan-500/5 hover:text-white transition-all duration-300 hover:scale-105 cursor-default"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
