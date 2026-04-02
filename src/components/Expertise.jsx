const areas = [
  { label: 'Industrial AI', icon: '🏭', desc: 'AI systems for manufacturing, quality control, predictive maintenance, and smart factory automation.' },
  { label: 'Computer Vision', icon: '🔬', desc: 'Visual AI for defect detection, surveillance, medical imaging, retail analytics, and autonomous systems.' },
  { label: 'Generative AI', icon: '🧠', desc: 'GPT-based apps, image generation, content creation, code generation, and multi-modal AI systems.' },
  { label: 'VLM / Multimodal', icon: '🖼️', desc: 'Vision-Language Models for document understanding, visual Q&A, image captioning, and scene analysis.' },
  { label: 'Deep Learning', icon: '⚡', desc: 'CNNs, Transformers, RNNs, GANs — designed and trained for real-world classification, detection, and generation tasks.' },
  { label: 'Machine Learning', icon: '📈', desc: 'Supervised/unsupervised learning, ensemble methods, feature engineering, and scalable model deployment.' },
  { label: 'Data Science', icon: '🔢', desc: 'Statistical analysis, data visualization, hypothesis testing, forecasting, and business intelligence.' },
  { label: 'NLP & Text AI', icon: '💬', desc: 'Sentiment analysis, named entity recognition, document classification, summarization, and translation.' },
  { label: 'IT Outsourcing', icon: '🤝', desc: 'Dedicated AI & dev teams, staff augmentation, project-based delivery, and long-term technology partnerships.' },
]

const techStack = [
  'Python', 'PyTorch', 'TensorFlow', 'OpenCV', 'HuggingFace',
  'LangChain', 'FastAPI', 'React', 'Node.js', 'PostgreSQL',
  'Docker', 'AWS', 'GCP', 'CUDA', 'Scikit-learn',
]

export default function Expertise() {
  return (
    <section id="expertise" className="py-24 bg-[#0a0a0f]">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-12 sm:mb-16 animate-in fade-in slide-in-from-bottom-8 duration-700">
          <p className="text-accent text-xs sm:text-sm font-semibold uppercase tracking-widest mb-3">What We Solve</p>
          <h2 className="text-2xl sm:text-4xl md:text-5xl font-bold text-white mb-3 sm:mb-4">Solutions That Work</h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            We've solved real problems across every major AI domain. No experimental projects. No research papers. Just systems that perform.
          </p>
        </div>

        {/* Expertise grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-5 mb-12 sm:mb-16">
          {areas.map((a, idx) => (
            <div key={a.label} className="flex gap-3 sm:gap-4 p-4 sm:p-5 rounded-lg sm:rounded-xl border border-white/5 bg-gradient-to-br from-white/[0.02] to-white/[0.01] hover:border-cyan-400/60 hover:bg-gradient-to-br hover:from-cyan-600/15 hover:to-brand-600/10 transition-all duration-400 hover:scale-110 hover:shadow-xl hover:shadow-cyan-500/25 animate-in fade-in slide-in-from-bottom-6 duration-500" style={{ animationDelay: `${idx * 50}ms` }}>
              <div className="text-xl sm:text-2xl flex-shrink-0 mt-0.5">{a.icon}</div>
              <div>
                <h3 className="text-white font-semibold mb-1">{a.label}</h3>
                <p className="text-slate-500 text-sm leading-relaxed">{a.desc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Tech stack */}
        <div className="text-center animate-in fade-in slide-in-from-bottom-8 duration-700 delay-200">
          <p className="text-slate-500 text-xs sm:text-sm uppercase tracking-widest mb-4 sm:mb-6">Tech Stack We Work With</p>
          <div className="flex flex-wrap justify-center gap-2 sm:gap-3">
            {techStack.map((t, idx) => (
              <span key={t} className="px-3 sm:px-4 py-1.5 sm:py-2 rounded-full border border-white/10 bg-white/[0.03] text-slate-300 text-xs sm:text-sm font-medium hover:border-brand-500/40 hover:text-white transition-all hover:scale-110 animate-in fade-in zoom-in duration-500" style={{ animationDelay: `${idx * 30}ms` }}>
                {t}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
