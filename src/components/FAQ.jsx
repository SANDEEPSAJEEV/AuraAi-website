import { useState } from 'react'
import ScrollReveal from './ScrollReveal'

const faqs = [
  {
    q: 'What does the process look like?',
    a: 'We start with a conversation to understand your problem. Then we design a solution, build it with full testing, and hand it off with documentation. Timelines vary based on complexity — we\'re honest about what\'s realistic.'
  },
  {
    q: 'How do you price projects?',
    a: 'We can work with fixed-project pricing, outcome-based models, or hybrid approaches — whatever aligns our success with yours. We discuss scope, requirements, and timeline upfront. We\'re confident enough to tie our payment to your results.'
  },
  {
    q: 'What if I\'m not sure what I need?',
    a: 'That\'s fine. We can have a conversation about your bottlenecks and talk through what solutions make sense. No obligation. We\'ll give you honest advice about what\'s worth doing and what\'s not.'
  },
  {
    q: 'Do you offer support after delivery?',
    a: 'Yes. We provide handoff support to make sure you understand the system. For ongoing maintenance, monitoring, or improvements, we can discuss options.'
  },
  {
    q: 'Can you work on ongoing projects?',
    a: 'Yes. If you need ongoing development, maintenance, or enhancements, we can structure that as a retainer or hourly engagement. Let\'s talk about what you need.'
  },
  {
    q: 'What tech stack do you use?',
    a: 'We choose based on what\'s right for your problem. Python for AI/ML, React/Node.js for web, whatever works best. We don\'t have a dogmatic preference — we use what solves your problem reliably.'
  },
]

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(0)

  return (
    <section id="faq" className="relative py-20 sm:py-28 bg-[#080810] overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[300px] bg-cyan-500/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="relative max-w-3xl mx-auto px-4 sm:px-6">
        <ScrollReveal>
          <div className="text-center mb-12 sm:mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-cyan-500/30 bg-cyan-500/5 text-cyan-400 text-xs font-semibold uppercase tracking-[0.15em] mb-5">
              <span className="w-1 h-1 rounded-full bg-cyan-400" />
              Questions
            </div>
            <h2 className="text-3xl sm:text-5xl md:text-6xl font-bold text-white mb-5 leading-tight">
              Frequently asked
              <span className="block bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                questions.
              </span>
            </h2>
            <p className="text-slate-400 text-base sm:text-lg">
              Straight answers to common questions.
            </p>
          </div>
        </ScrollReveal>

        <div className="space-y-3">
          {faqs.map((faq, idx) => (
            <ScrollReveal key={idx} delay={idx * 60}>
              <div
                className={`border rounded-xl overflow-hidden transition-all duration-400 ${
                  openIndex === idx
                    ? 'border-cyan-400/40 bg-gradient-to-br from-cyan-500/5 to-blue-500/5'
                    : 'border-white/5 bg-white/[0.02] hover:border-white/10'
                }`}
              >
                <button
                  onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
                  className="w-full p-5 sm:p-6 flex items-center justify-between gap-4 text-left"
                >
                  <h3 className={`font-semibold text-base sm:text-lg ${openIndex === idx ? 'text-white' : 'text-slate-200'}`}>
                    {faq.q}
                  </h3>
                  <div className={`flex-shrink-0 w-8 h-8 rounded-lg flex items-center justify-center transition-all duration-400 ${
                    openIndex === idx ? 'bg-cyan-500/20 text-cyan-400 rotate-45' : 'bg-white/5 text-slate-400'
                  }`}>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 5v14M5 12h14" /></svg>
                  </div>
                </button>
                <div
                  className={`overflow-hidden transition-all duration-400 ${
                    openIndex === idx ? 'max-h-64' : 'max-h-0'
                  }`}
                >
                  <div className="px-5 sm:px-6 pb-5 sm:pb-6 text-slate-400 text-sm sm:text-base leading-relaxed">
                    {faq.a}
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
