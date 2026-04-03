export default function Team() {
  return (
    <section id="team" className="py-24 bg-[#0a0a0f]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12 sm:mb-16">
          <p className="text-accent text-xs sm:text-sm font-semibold uppercase tracking-widest mb-3">Behind Aura AI</p>
          <h2 className="text-2xl sm:text-4xl md:text-5xl font-bold text-white mb-3 sm:mb-4">Built by Engineers</h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            Aura AI is led by AI engineers with hands-on experience across Computer Vision, Machine Learning,
            Generative AI, and full-stack development. We build what we know works in production.
          </p>
        </div>

        {/* Core Capabilities */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {[
            {
              icon: '🧠',
              title: 'AI Engineering',
              skills: ['Computer Vision', 'Machine Learning', 'Generative AI', 'NLP', 'Deep Learning', 'MLOps']
            },
            {
              icon: '🌐',
              title: 'Full-Stack Development',
              skills: ['Web Applications', 'APIs', 'Databases', 'Cloud Deployment', 'Production Systems']
            },
            {
              icon: '🛡️',
              title: 'Quality Assurance',
              skills: ['Testing & Validation', 'Security Review', 'Performance Testing', 'Production Monitoring']
            },
          ].map(area => (
            <div key={area.title} className="p-6 rounded-xl border border-white/5 bg-white/[0.02] hover:border-cyan-500/30 transition-all">
              <div className="text-3xl mb-3">{area.icon}</div>
              <h3 className="text-lg font-bold text-white mb-4">{area.title}</h3>
              <div className="space-y-2">
                {area.skills.map(skill => (
                  <div key={skill} className="flex items-center gap-2 text-sm text-slate-400">
                    <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
                    {skill}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Our Approach */}
        <div className="max-w-3xl mx-auto p-8 rounded-xl border border-white/5 bg-white/[0.02]">
          <h3 className="text-xl font-bold text-white mb-4">How We Work</h3>
          <div className="space-y-4 text-slate-400 text-sm leading-relaxed">
            <p>
              <strong className="text-white">1. Understand Your Problem</strong> — We spend time understanding what you're trying to achieve,
              your constraints, and your success metrics. No assumptions.
            </p>
            <p>
              <strong className="text-white">2. Design a Real Solution</strong> — Based on your needs, we design an architecture that's
              appropriate for your problem. No oversized or undersized systems.
            </p>
            <p>
              <strong className="text-white">3. Build with Quality</strong> — We code, test, and document thoroughly. What we deliver is
              production-ready, not a prototype.
            </p>
            <p>
              <strong className="text-white">4. Handoff & Support</strong> — We document everything and provide support during the transition.
              You own the system, we support your success.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
