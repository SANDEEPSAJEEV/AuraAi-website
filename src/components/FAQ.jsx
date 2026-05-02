import ScrollReveal from './ScrollReveal'

const faqs = [
  {
    q: 'What does the process look like?',
    a: '30-min call → written scope → build with weekly demos → handoff with docs. Most projects run 4–12 weeks.'
  },
  {
    q: 'How do you price projects?',
    a: 'Fixed-fee for well-scoped work. Hourly or retainer for ongoing. Discovery call is free. We\'ll quote in writing before any work starts.'
  },
  {
    q: 'What if I\'m not sure what I need?',
    a: 'Common starting point. Book the discovery call — we\'ll walk through what\'s possible and what isn\'t, no pitch.'
  },
  {
    q: 'Do you offer support after delivery?',
    a: 'Yes. Either as a retainer or hourly. We also document everything so your team can take it over if you prefer.'
  },
  {
    q: 'Can you work on ongoing projects?',
    a: 'Yes. Most engagements end up as ongoing work after the first delivery.'
  },
  {
    q: 'What tech stack do you use?',
    a: 'Python, PyTorch, LangGraph, FastAPI, React, Postgres, Docker, AWS/GCP. Edge inference on Jetson and Coral. We adapt to your stack where it makes sense.'
  },
]

export default function FAQ() {
  return (
    <section id="faq" className="relative py-20 sm:py-28 bg-white">
      <div className="relative max-w-3xl mx-auto px-4 sm:px-6">
        <ScrollReveal>
          <div className="text-center mb-12 sm:mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-purple-200 bg-purple-600/5 text-purple-600 text-xs font-semibold uppercase tracking-[0.15em] mb-5">
              <span className="w-1 h-1 rounded-full bg-cyan-400" />
              Questions
            </div>
            <h2 className="text-3xl sm:text-5xl md:text-6xl font-bold text-slate-900 leading-tight">
              Frequently asked questions.
            </h2>
          </div>
        </ScrollReveal>

        <div className="space-y-4">
          {faqs.map((faq, idx) => (
            <ScrollReveal key={idx} delay={idx * 60}>
              <div className="border border-slate-200 rounded-xl bg-white p-5 sm:p-6">
                <h3 className="font-semibold text-slate-900 text-base sm:text-lg mb-2">
                  {faq.q}
                </h3>
                <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                  {faq.a}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}

