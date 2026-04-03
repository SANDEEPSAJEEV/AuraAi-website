import { useState } from 'react'

const faqs = [
  {
    q: 'What does the process look like?',
    a: 'We start with a conversation to understand your problem. Then we design a solution, build it with full testing, and hand it off with documentation. Timelines vary based on complexity—we\'re honest about what\'s realistic.'
  },
  {
    q: 'How do you price projects?',
    a: 'We can work with fixed-project pricing, outcome-based models, or hybrid approaches—whatever aligns our success with yours. We discuss scope, requirements, and timeline upfront. We\'re confident enough to tie our payment to your results.'
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
    a: 'We choose based on what\'s right for your problem. Python for AI/ML, React/Node.js for web, whatever works best. We don\'t have a dogmatic preference—we use what solves your problem reliably.'
  },
]

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null)

  return (
    <section className="py-24 bg-[#0d0d14]">
      <div className="max-w-3xl mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-accent text-xs sm:text-sm font-semibold uppercase tracking-widest mb-3">Questions</p>
          <h2 className="text-2xl sm:text-4xl md:text-5xl font-bold text-white mb-4">FAQs</h2>
          <p className="text-slate-400 text-lg">
            Straight answers to common questions.
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, idx) => (
            <div
              key={idx}
              className="border border-white/5 rounded-lg overflow-hidden hover:border-cyan-500/30 transition-colors"
            >
              <button
                onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
                className="w-full p-6 flex items-center justify-between hover:bg-white/[0.02] transition-colors text-left"
              >
                <h3 className="font-semibold text-white text-lg">{faq.q}</h3>
                <div className={`text-2xl text-cyan-400 transition-transform ${openIndex === idx ? 'rotate-180' : ''}`}>
                  ↓
                </div>
              </button>
              {openIndex === idx && (
                <div className="px-6 pb-6 border-t border-white/5 text-slate-400 leading-relaxed">
                  {faq.a}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
