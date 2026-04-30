import { useState, useEffect } from 'react'
import emailjs from '@emailjs/browser'
import ScrollReveal from './ScrollReveal'

const SERVICE_ID = 'service_goc8gg9'
const TEMPLATE_ID = 'template_82dtv2e'
const PUBLIC_KEY = 'qBmwpYMqGmYWDK6C7'

const expectations = [
  { title: 'Initial Chat', desc: 'We\'ll talk through your project, timeline, and goals. No sales pitch.', d: 'M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z' },
  { title: 'Honest Assessment', desc: 'We\'ll tell you what\'s feasible, what makes sense, and what doesn\'t.', d: 'M9.663 17h4.673M12 3v1M3 12H2M5.636 5.636l.707.707M21 12h1M18.364 5.636l-.707.707M12 17a5 5 0 01-5-5 5 5 0 1110 0 5 5 0 01-5 5z' },
  { title: 'Aligned Pricing', desc: 'Fixed cost, outcome-based, or hybrid — whatever aligns our success with yours.', d: 'M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8v8m0 0v1m0-9V7' },
  { title: 'Quality Delivery', desc: 'Production-ready systems with documentation and ongoing support.', d: 'M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z' },
]

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', company: '', service: '', message: '' })
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  useEffect(() => {
    emailjs.init(PUBLIC_KEY)
  }, [])

  const handleChange = e => setForm(f => ({ ...f, [e.target.name]: e.target.value }))

  const handleSubmit = async e => {
    e.preventDefault()
    setError('')
    setLoading(true)

    try {
      await emailjs.send(SERVICE_ID, TEMPLATE_ID, {
        name: form.name,
        email: form.email,
        company: form.company,
        service: form.service,
        message: form.message,
      })
      setSubmitted(true)
      setForm({ name: '', email: '', company: '', service: '', message: '' })
    } catch (err) {
      setError(err.message || 'Failed to send message. Please try again.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <section id="contact" className="relative py-20 sm:py-28 bg-[#0a0a12] overflow-hidden">
      <div className="absolute top-0 right-0 w-[600px] h-[500px] bg-cyan-500/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[400px] bg-indigo-500/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6">
        <ScrollReveal>
          <div className="text-center mb-14 sm:mb-20">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-cyan-500/30 bg-cyan-500/5 text-cyan-400 text-xs font-semibold uppercase tracking-[0.15em] mb-5">
              <span className="w-1 h-1 rounded-full bg-cyan-400" />
              Let's Talk
            </div>
            <h2 className="text-3xl sm:text-5xl md:text-6xl font-bold text-white mb-5 leading-tight">
              Have a project in mind?
              <span className="block bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                We'd love to hear about it.
              </span>
            </h2>
            <p className="text-slate-400 text-base sm:text-lg max-w-2xl mx-auto">
              Tell us what you're working on. We'll listen, ask the right questions, and let you know what's possible.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-12 max-w-6xl mx-auto">
          <ScrollReveal direction="left" className="lg:col-span-2">
            <div className="space-y-6">
              <h3 className="text-white font-semibold text-lg mb-4">What to Expect</h3>
              <div className="space-y-4">
                {expectations.map(item => (
                  <div key={item.title} className="flex gap-4 p-4 rounded-xl border border-white/5 bg-white/[0.02] hover:border-cyan-400/30 hover:bg-white/[0.04] transition-all duration-400">
                    <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-cyan-500/10 text-cyan-400 flex items-center justify-center">
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d={item.d} /></svg>
                    </div>
                    <div className="flex-1">
                      <div className="text-white font-medium text-sm mb-0.5">{item.title}</div>
                      <div className="text-slate-400 text-sm">{item.desc}</div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="p-5 rounded-xl border border-cyan-500/20 bg-gradient-to-br from-cyan-500/10 to-blue-500/5">
                <p className="text-slate-400 text-xs uppercase tracking-widest mb-2">Prefer email?</p>
                <a
                  href="mailto:sales@aura-vision.tech"
                  className="text-cyan-400 hover:text-cyan-300 font-semibold text-sm break-all transition-colors inline-flex items-center gap-2"
                >
                  sales@aura-vision.tech
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M7 17L17 7M7 7h10v10" /></svg>
                </a>
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal direction="right" className="lg:col-span-3">
            {submitted ? (
              <div className="h-full flex items-center justify-center p-8 sm:p-12 rounded-2xl border border-emerald-500/30 bg-gradient-to-br from-emerald-500/10 to-cyan-500/5 text-center">
                <div>
                  <div className="w-16 h-16 mx-auto mb-5 rounded-full bg-emerald-500/20 flex items-center justify-center">
                    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#34d399" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6L9 17l-5-5" /></svg>
                  </div>
                  <h3 className="text-white font-bold text-2xl mb-2">Message received</h3>
                  <p className="text-slate-400 text-sm sm:text-base mb-6">We'll review this and get back to you within 24 hours.</p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="text-cyan-400 hover:text-cyan-300 text-sm font-medium underline underline-offset-4"
                  >
                    Send another message
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5 p-6 sm:p-8 rounded-2xl border border-white/5 bg-gradient-to-br from-white/[0.03] to-white/[0.01] backdrop-blur-sm">
                {error && (
                  <div className="p-4 rounded-lg border border-red-500/30 bg-red-500/5 text-red-400 text-sm flex items-start gap-3">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="flex-shrink-0 mt-0.5"><circle cx="12" cy="12" r="10" /><line x1="12" y1="8" x2="12" y2="12" /><line x1="12" y1="16" x2="12.01" y2="16" /></svg>
                    <span>{error}</span>
                  </div>
                )}

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-slate-300 text-xs font-semibold mb-2 uppercase tracking-wider">Name <span className="text-cyan-400">*</span></label>
                    <input
                      name="name" required value={form.name} onChange={handleChange}
                      placeholder="Your name"
                      className="w-full px-4 py-3 rounded-lg bg-white/[0.03] border border-white/10 text-white placeholder-slate-600 text-sm focus:outline-none focus:border-cyan-400/60 focus:bg-white/[0.05] transition-all"
                    />
                  </div>
                  <div>
                    <label className="block text-slate-300 text-xs font-semibold mb-2 uppercase tracking-wider">Email <span className="text-cyan-400">*</span></label>
                    <input
                      name="email" type="email" required value={form.email} onChange={handleChange}
                      placeholder="your@email.com"
                      className="w-full px-4 py-3 rounded-lg bg-white/[0.03] border border-white/10 text-white placeholder-slate-600 text-sm focus:outline-none focus:border-cyan-400/60 focus:bg-white/[0.05] transition-all"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-slate-300 text-xs font-semibold mb-2 uppercase tracking-wider">Company</label>
                  <input
                    name="company" value={form.company} onChange={handleChange}
                    placeholder="Optional"
                    className="w-full px-4 py-3 rounded-lg bg-white/[0.03] border border-white/10 text-white placeholder-slate-600 text-sm focus:outline-none focus:border-cyan-400/60 focus:bg-white/[0.05] transition-all"
                  />
                </div>

                <div>
                  <label className="block text-slate-300 text-xs font-semibold mb-2 uppercase tracking-wider">What are you working on?</label>
                  <select
                    name="service" value={form.service} onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg bg-[#0f0f17] border border-white/10 text-slate-300 text-sm focus:outline-none focus:border-cyan-400/60 transition-all cursor-pointer"
                  >
                    <option value="">Select...</option>
                    <option>AI & Machine Learning</option>
                    <option>Computer Vision</option>
                    <option>Generative AI / LLM / Chatbot</option>
                    <option>Data Science & Analytics</option>
                    <option>Web Development</option>
                    <option>Business Automation</option>
                    <option>Not sure yet</option>
                  </select>
                </div>

                <div>
                  <label className="block text-slate-300 text-xs font-semibold mb-2 uppercase tracking-wider">Project details <span className="text-cyan-400">*</span></label>
                  <textarea
                    name="message" required value={form.message} onChange={handleChange}
                    rows={4}
                    placeholder="What problem are you trying to solve? What's your timeline?"
                    className="w-full px-4 py-3 rounded-lg bg-white/[0.03] border border-white/10 text-white placeholder-slate-600 text-sm focus:outline-none focus:border-cyan-400/60 focus:bg-white/[0.05] transition-all resize-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="group w-full py-4 bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-400 hover:to-blue-400 disabled:from-slate-600 disabled:to-slate-600 disabled:cursor-not-allowed text-white font-semibold rounded-xl shadow-xl shadow-cyan-500/25 hover:shadow-cyan-500/40 transition-all duration-300 hover:scale-[1.01] flex items-center justify-center gap-2"
                >
                  {loading ? (
                    <>
                      <svg className="animate-spin" width="16" height="16" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="3" opacity="0.25" /><path fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" /></svg>
                      Sending...
                    </>
                  ) : (
                    <>
                      Send Message
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="group-hover:translate-x-1 transition-transform"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
                    </>
                  )}
                </button>

                <p className="text-slate-500 text-xs text-center">We respond within 24 hours · No spam, ever</p>
              </form>
            )}
          </ScrollReveal>
        </div>
      </div>
    </section>
  )
}
