import ScrollReveal from './ScrollReveal'

const reasons = [
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M16 21v-2a4 4 0 00-4-4H6a4 4 0 00-4-4v-2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M22 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75" />
      </svg>
    ),
    title: 'Industrial Expertise',
    desc: 'Our team consists of seasoned engineers with real-world industrial experience, not just freelancers. We bring proven methodologies and best practices from Fortune 500 companies.',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4-4v-2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75" />
      </svg>
    ),
    title: 'Dedicated Team',
    desc: 'Work with a committed team of specialists who understand your industry and business goals. We become an extension of your team.',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
      </svg>
    ),
    title: 'Cutting-Edge Technology',
    desc: 'Stay ahead of the curve with the latest in AI, ML, and cloud technologies. We continuously invest in learning and adopting emerging technologies.',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 11.08V12a10 10 0 11-5.93-9.14" />
        <polyline points="22 4 12 14.01 9 11.01" />
      </svg>
    ),
    title: 'Proven Track Record',
    desc: 'From startups to enterprise clients, we have successfully delivered complex AI/ML projects on time and within budget.',
  },
]

export default function WhyChoose() {
  return (
    <section id="why-choose" className="relative py-20 sm:py-28 bg-white">
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6">
        <ScrollReveal>
          <div className="text-center mb-14 sm:mb-20">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-purple-200 bg-purple-600/5 text-purple-600 text-xs font-semibold uppercase tracking-[0.15em] mb-5">
              <span className="w-1 h-1 rounded-full bg-cyan-400" />
              Why Us
            </div>
            <h2 className="text-3xl sm:text-5xl md:text-6xl font-bold text-slate-900 leading-tight mb-5">
              Why Choose Aura AI?
            </h2>
            <p className="text-slate-600 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
              We're not just another development team. We're your strategic technology partner.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6">
          {reasons.map((r, idx) => (
            <ScrollReveal key={r.title} delay={idx * 100}>
              <div className="group h-full p-7 sm:p-8 rounded-2xl border border-slate-200 bg-white hover:border-purple-300 hover:bg-slate-50 transition-all duration-500 hover:-translate-y-1">
                <div className="w-12 h-12 rounded-xl bg-purple-50 border border-purple-100 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500">
                  <div className="w-5 h-5 text-purple-600">
                    {r.icon}
                  </div>
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">{r.title}</h3>
                <p className="text-slate-600 text-sm leading-relaxed">{r.desc}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}

