const teams = [
  {
    title: 'AI Engineering Team',
    icon: '🧠',
    color: 'border-brand-500/30 bg-brand-900/20',
    badge: 'bg-brand-900/50 text-brand-400 border-brand-800/50',
    members: 'Team of specialized AI engineers',
    skills: [
      'Industrial AI & Edge AI',
      'Computer Vision & VLMs',
      'Generative AI & LLMs',
      'Deep Learning (CNN, Transformer, GAN)',
      'Machine Learning & AutoML',
      'NLP & Text Analytics',
      'Data Science & Analytics',
      'MLOps & Model Deployment',
    ],
  },
  {
    title: 'Web Development Team',
    icon: '🌐',
    color: 'border-accent/30 bg-cyan-900/10',
    badge: 'bg-cyan-900/30 text-cyan-400 border-cyan-800/50',
    members: 'Full-stack developers',
    skills: [
      'SaaS & Business Portals',
      'AI-integrated Web Apps',
      'Database Design',
      'Cloud Deployment (AWS, GCP)',
      'Mobile-responsive UI/UX',
    ],
  },
  {
    title: 'QA & Testing Team',
    icon: '🛡️',
    color: 'border-emerald-500/30 bg-emerald-900/10',
    badge: 'bg-emerald-900/30 text-emerald-400 border-emerald-800/50',
    members: 'QA engineers & security testers',
    skills: [
      'Functional & Regression Testing',
      'Security Vulnerability Assessment',
      'Performance & Load Testing',
      'Automated Test Suites',
      'API Testing',
      'AI Model Validation',
      'CI/CD Pipeline Integration',
      'Bug Reporting & Fixing',
    ],
  },
]

export default function Team() {
  return (
    <section id="team" className="py-24 bg-[#0a0a0f]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12 sm:mb-16">
          <p className="text-accent text-xs sm:text-sm font-semibold uppercase tracking-widest mb-3">Built for Results</p>
          <h2 className="text-2xl sm:text-4xl md:text-5xl font-bold text-white mb-3 sm:mb-4">Experts Who Deliver</h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            Every team is built around one principle: shipping solutions that work. No shortcuts. No excuses.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-16">
          {teams.map((t, idx) => (
            <div key={t.title} className={`p-4 sm:p-6 rounded-xl sm:rounded-2xl border transition-all duration-400 hover:scale-105 hover:shadow-xl hover:shadow-cyan-500/30 hover:border-cyan-500/50 animate-in fade-in slide-in-from-bottom-6 duration-700 ${t.color}`} style={{ animationDelay: `${idx * 150}ms` }}>
              <div className="text-3xl sm:text-4xl mb-3 sm:mb-4">{t.icon}</div>
              <h3 className="text-xl font-bold text-white mb-1">{t.title}</h3>
              <p className="text-slate-500 text-sm mb-5">{t.members}</p>
              <ul className="space-y-2">
                {t.skills.map(s => (
                  <li key={s} className="flex items-center gap-2 text-sm text-slate-300">
                    <span className="w-1.5 h-1.5 rounded-full bg-current opacity-60 flex-shrink-0" />
                    {s}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Our Commitment */}
        <div className="max-w-3xl mx-auto p-6 sm:p-8 rounded-xl sm:rounded-2xl border border-brand-500/20 bg-gradient-to-br from-brand-900/20 to-brand-900/10 hover:border-brand-500/50 hover:shadow-lg hover:shadow-brand-500/20 transition-all duration-400 text-center animate-in fade-in slide-in-from-bottom-8 duration-700">
          <div className="text-3xl sm:text-4xl mb-3 sm:mb-4">🎯</div>
          <h3 className="text-lg sm:text-xl font-bold text-white mb-3">Our Promise</h3>
          <p className="text-slate-400 text-sm leading-relaxed">
            We don't hire more people to impress you. We hire the right people to deliver results.
            Your success isn't a side project—it's our entire focus. We take responsibility for every line of code,
            every model, and every outcome. That's not a slogan. That's how we work.
          </p>
        </div>
      </div>
    </section>
  )
}
