import { useState, useEffect } from 'react'
import emailjs from '@emailjs/browser'

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
    <section id="contact" className="py-24 bg-[#0d0d14]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-brand-400 text-xs sm:text-sm font-semibold uppercase tracking-widest mb-3">Let's Talk</p>
          <h2 className="text-2xl sm:text-4xl md:text-5xl font-bold text-white mb-4">Start a Conversation</h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            Tell us what you're working on. We'll listen, ask the right questions, and let you know what we think is possible.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-6 sm:gap-12 max-w-6xl mx-auto">
          {/* Left info */}
          <div className="lg:col-span-2 space-y-8">
            <div>
              <h3 className="text-white font-semibold text-lg mb-6">What to Expect</h3>
              <div className="space-y-5">
                {[
                  { icon: '📧', title: 'Initial Chat', desc: 'We\'ll talk through your project, timeline, and goals. No sales pitch.' },
                  { icon: '💡', title: 'Honest Assessment', desc: 'We\'ll tell you what\'s feasible, what makes sense, and what doesn\'t.' },
                  { icon: '📋', title: 'Aligned Pricing', desc: 'Fixed project cost, outcome-based, or hybrid—whatever aligns our success with yours.' },
                  { icon: '✓', title: 'Quality Delivery', desc: 'We build production-ready systems with documentation and ongoing support.' },
                ].map(i => (
                  <div key={i.title} className="flex gap-4">
                    <div className="text-2xl">{i.icon}</div>
                    <div>
                      <div className="text-white font-medium text-sm">{i.title}</div>
                      <div className="text-slate-500 text-sm">{i.desc}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="p-5 rounded-xl border border-white/5 bg-gradient-to-br from-white/[0.02] to-white/[0.01] hover:border-cyan-500/40 hover:bg-gradient-to-br hover:from-cyan-600/10 hover:to-brand-600/10 transition-all duration-400">
              <p className="text-slate-400 text-sm mb-3">Email</p>
              <a href="mailto:sandeeps@aura-vision.tech" className="text-brand-400 hover:text-cyan-400 font-medium text-sm break-all transition-colors duration-300">
                sandeeps@aura-vision.tech
              </a>
            </div>
          </div>

          {/* Form */}
          <div className="lg:col-span-3">
            {submitted ? (
              <div className="h-full flex items-center justify-center p-6 sm:p-12 rounded-xl sm:rounded-2xl border border-emerald-500/20 bg-emerald-900/10 text-center">
                <div>
                  <div className="text-4xl sm:text-5xl mb-3 sm:mb-4">✅</div>
                  <h3 className="text-white font-bold text-xl mb-2">Message received</h3>
                  <p className="text-slate-400 text-sm">We'll review this and get back to you within 24 hours.</p>
                  <button onClick={() => setSubmitted(false)} className="mt-6 text-brand-400 hover:text-brand-300 text-sm underline">
                    Send another message
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-5 p-4 sm:p-8 rounded-xl sm:rounded-2xl border border-white/5 bg-gradient-to-br from-white/[0.02] to-white/[0.01]">
                {error && (
                  <div className="p-4 rounded-lg border border-red-500/30 bg-red-900/10 text-red-400 text-sm">
                    {error}
                  </div>
                )}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-slate-400 text-xs font-medium mb-2 uppercase tracking-wider">Name *</label>
                    <input
                      name="name" required value={form.name} onChange={handleChange}
                      placeholder="Your name"
                      className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white placeholder-slate-600 text-sm focus:outline-none focus:border-cyan-500/50 transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-slate-400 text-xs font-medium mb-2 uppercase tracking-wider">Email *</label>
                    <input
                      name="email" type="email" required value={form.email} onChange={handleChange}
                      placeholder="your@email.com"
                      className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white placeholder-slate-600 text-sm focus:outline-none focus:border-cyan-500/50 transition-colors"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-slate-400 text-xs font-medium mb-2 uppercase tracking-wider">Company</label>
                  <input
                    name="company" value={form.company} onChange={handleChange}
                    placeholder="Optional"
                    className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white placeholder-slate-600 text-sm focus:outline-none focus:border-cyan-500/50 transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-slate-400 text-xs font-medium mb-2 uppercase tracking-wider">What are you working on?</label>
                  <select
                    name="service" value={form.service} onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg bg-[#0d0d14] border border-white/10 text-slate-300 text-sm focus:outline-none focus:border-cyan-500/50 transition-colors"
                  >
                    <option value="">Select...</option>
                    <option>Computer Vision</option>
                    <option>Machine Learning</option>
                    <option>Generative AI / LLM / Chatbot</option>
                    <option>Web Application</option>
                    <option>Data Processing & Analytics</option>
                    <option>Not sure yet</option>
                  </select>
                </div>
                <div>
                  <label className="block text-slate-400 text-xs font-medium mb-2 uppercase tracking-wider">Tell us about your project *</label>
                  <textarea
                    name="message" required value={form.message} onChange={handleChange}
                    rows={4}
                    placeholder="What problem are you trying to solve? What's your timeline?"
                    className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white placeholder-slate-600 text-sm focus:outline-none focus:border-cyan-500/50 transition-colors resize-none"
                  />
                </div>
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full py-4 bg-cyan-500 hover:bg-cyan-600 disabled:bg-slate-600 text-white font-semibold rounded-lg transition-all hover:shadow-lg hover:shadow-cyan-500/30"
                >
                  {loading ? 'Sending...' : 'Send Message'}
                </button>
                <p className="text-slate-600 text-xs text-center">We respond within 24 hours.</p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
