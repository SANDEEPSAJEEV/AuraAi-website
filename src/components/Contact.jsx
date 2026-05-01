import { useState, useEffect } from 'react'
import emailjs from '@emailjs/browser'
import ScrollReveal from './ScrollReveal'

const SERVICE_ID = 'service_goc8gg9'
const TEMPLATE_ID = 'template_82dtv2e'
const PUBLIC_KEY = 'qBmwpYMqGmYWDK6C7'

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
    <section id="contact" className="relative py-20 sm:py-28 bg-[#0a0a12]">
      <div className="relative max-w-2xl mx-auto px-4 sm:px-6">
        <ScrollReveal>
          <div className="text-center mb-12 sm:mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-cyan-500/30 bg-cyan-500/5 text-cyan-400 text-xs font-semibold uppercase tracking-[0.15em] mb-5">
              <span className="w-1 h-1 rounded-full bg-cyan-400" />
              Let's Talk
            </div>
            <h2 className="text-3xl sm:text-5xl md:text-6xl font-bold text-white leading-tight mb-5">
              Tell us about your project.
            </h2>
            <p className="text-slate-400 text-base sm:text-lg leading-relaxed">
              We respond within 24 hours, usually faster. No follow-up spam.
            </p>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={100}>
          {submitted ? (
            <div className="p-8 sm:p-12 rounded-2xl border border-emerald-500/30 bg-emerald-500/[0.05] text-center">
              <div className="w-14 h-14 mx-auto mb-5 rounded-full bg-emerald-500/15 flex items-center justify-center">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#34d399" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6L9 17l-5-5" /></svg>
              </div>
              <h3 className="text-white font-bold text-2xl mb-2">Message received</h3>
              <p className="text-slate-400 text-sm sm:text-base mb-6">We'll get back to you within 24 hours.</p>
              <button
                onClick={() => setSubmitted(false)}
                className="text-cyan-400 hover:text-cyan-300 text-sm font-medium underline underline-offset-4"
              >
                Send another message
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5 p-6 sm:p-8 rounded-2xl border border-white/5 bg-white/[0.02]">
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
                    className="w-full px-4 py-3 rounded-lg bg-white/[0.03] border border-white/10 text-white placeholder-slate-600 text-sm focus:outline-none focus:border-cyan-400/60 transition-all"
                  />
                </div>
                <div>
                  <label className="block text-slate-300 text-xs font-semibold mb-2 uppercase tracking-wider">Email <span className="text-cyan-400">*</span></label>
                  <input
                    name="email" type="email" required value={form.email} onChange={handleChange}
                    placeholder="your@email.com"
                    className="w-full px-4 py-3 rounded-lg bg-white/[0.03] border border-white/10 text-white placeholder-slate-600 text-sm focus:outline-none focus:border-cyan-400/60 transition-all"
                  />
                </div>
              </div>

              <div>
                <label className="block text-slate-300 text-xs font-semibold mb-2 uppercase tracking-wider">Company</label>
                <input
                  name="company" value={form.company} onChange={handleChange}
                  placeholder="Optional"
                  className="w-full px-4 py-3 rounded-lg bg-white/[0.03] border border-white/10 text-white placeholder-slate-600 text-sm focus:outline-none focus:border-cyan-400/60 transition-all"
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
                  className="w-full px-4 py-3 rounded-lg bg-white/[0.03] border border-white/10 text-white placeholder-slate-600 text-sm focus:outline-none focus:border-cyan-400/60 transition-all resize-none"
                />
              </div>

              <button
                type="submit"
                disabled={loading}
                className="group w-full py-4 bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-400 hover:to-blue-400 disabled:from-slate-600 disabled:to-slate-600 disabled:cursor-not-allowed text-white font-semibold rounded-xl transition-all duration-300 shadow-md shadow-cyan-500/10 hover:shadow-cyan-500/20 flex items-center justify-center gap-2"
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
            </form>
          )}

          <p className="text-slate-500 text-sm text-center mt-6">
            Or email us directly:{' '}
            <a href="mailto:sales@aura-vision.tech" className="text-cyan-400 hover:text-cyan-300 underline underline-offset-4 transition-colors">
              sales@aura-vision.tech
            </a>
          </p>
        </ScrollReveal>
      </div>
    </section>
  )
}
