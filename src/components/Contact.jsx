import { useState, useEffect } from 'react'
import emailjs from '@emailjs/browser'

// EmailJS credentials
const SERVICE_ID = 'service_goc8gg9'
const TEMPLATE_ID = 'template_82dtv2e'
const PUBLIC_KEY = 'qBmwpYMqGmYWDK6C7'

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', company: '', service: '', message: '' })
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  // Initialize EmailJS on component mount
  useEffect(() => {
    emailjs.init(PUBLIC_KEY)
  }, [])

  const handleChange = e => setForm(f => ({ ...f, [e.target.name]: e.target.value }))

  const handleSubmit = async e => {
    e.preventDefault()
    setError('')
    setLoading(true)

    try {
      // Send email via EmailJS
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
        <div className="text-center mb-16 animate-in fade-in slide-in-from-bottom-8 duration-700">
          <p className="text-brand-400 text-sm font-semibold uppercase tracking-widest mb-3">Ready to Succeed</p>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Let's Build It Together</h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            Tell us what you're building. We'll understand your goals, propose a realistic plan, and deliver results you can trust.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 max-w-6xl mx-auto">
          {/* Left info */}
          <div className="lg:col-span-2 space-y-8">
            <div>
              <h3 className="text-white font-semibold text-lg mb-6">Why We're Different</h3>
              <div className="space-y-5">
                {[
                  { icon: '✓', title: 'Quality Over Quantity', desc: 'No overselling. We build what actually works, not what sounds good.' },
                  { icon: '🔍', title: 'Transparent Process', desc: 'You understand how your AI works. No black boxes. No surprises.' },
                  { icon: '⚡', title: 'Get Results Fast', desc: 'From discovery to deployment in weeks, not months. Your time matters.' },
                  { icon: '🤝', title: 'True Partnership', desc: 'Your success is our responsibility. We care about your outcome, not just delivery.' },
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

            <div className="p-5 rounded-xl border border-white/5 bg-white/[0.02]">
              <p className="text-slate-400 text-sm mb-3">Reach us directly</p>
              <a href="mailto:sandeeps@aura-vision.tech" className="text-brand-400 hover:text-brand-300 font-medium text-sm break-all">
                sandeeps@aura-vision.tech
              </a>
            </div>
          </div>

          {/* Form */}
          <div className="lg:col-span-3 animate-in fade-in slide-in-from-right-8 duration-700">
            {submitted ? (
              <div className="h-full flex items-center justify-center p-12 rounded-2xl border border-emerald-500/20 bg-emerald-900/10 text-center animate-in bounce-in duration-500">
                <div>
                  <div className="text-5xl mb-4">✅</div>
                  <h3 className="text-white font-bold text-xl mb-2">Message sent successfully!</h3>
                  <p className="text-slate-400 text-sm">Thank you for reaching out. We'll review your inquiry and get back to you within 24 hours.</p>
                  <button onClick={() => setSubmitted(false)} className="mt-6 text-brand-400 hover:text-brand-300 text-sm underline">
                    Send another message
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5 p-8 rounded-2xl border border-white/5 bg-white/[0.02]">
                {error && (
                  <div className="p-4 rounded-lg border border-red-500/30 bg-red-900/10 text-red-400 text-sm">
                    {error}
                  </div>
                )}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-slate-400 text-xs font-medium mb-2 uppercase tracking-wider">Your Name *</label>
                    <input
                      name="name" required value={form.name} onChange={handleChange}
                      placeholder="John Smith"
                      className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white placeholder-slate-600 text-sm focus:outline-none focus:border-brand-500/50 transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-slate-400 text-xs font-medium mb-2 uppercase tracking-wider">Email *</label>
                    <input
                      name="email" type="email" required value={form.email} onChange={handleChange}
                      placeholder="john@company.com"
                      className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white placeholder-slate-600 text-sm focus:outline-none focus:border-brand-500/50 transition-colors"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-slate-400 text-xs font-medium mb-2 uppercase tracking-wider">Company</label>
                  <input
                    name="company" value={form.company} onChange={handleChange}
                    placeholder="Your company name"
                    className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white placeholder-slate-600 text-sm focus:outline-none focus:border-brand-500/50 transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-slate-400 text-xs font-medium mb-2 uppercase tracking-wider">Service Needed</label>
                  <select
                    name="service" value={form.service} onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg bg-[#0d0d14] border border-white/10 text-slate-300 text-sm focus:outline-none focus:border-brand-500/50 transition-colors"
                  >
                    <option value="">Select a service...</option>
                    <option>AI / Machine Learning</option>
                    <option>Computer Vision</option>
                    <option>Generative AI / LLMs / Chatbot</option>
                    <option>Data Science & Analytics</option>
                    <option>Web Development</option>
                    <option>QA & Software Testing</option>
                    <option>IT Outsourcing / Team Extension</option>
                    <option>Multiple / Not Sure</option>
                  </select>
                </div>
                <div>
                  <label className="block text-slate-400 text-xs font-medium mb-2 uppercase tracking-wider">Tell Us About Your Project *</label>
                  <textarea
                    name="message" required value={form.message} onChange={handleChange}
                    rows={4}
                    placeholder="Describe your problem, what you're trying to build, your timeline, and any relevant details..."
                    className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white placeholder-slate-600 text-sm focus:outline-none focus:border-brand-500/50 transition-colors resize-none"
                  />
                </div>
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full py-4 bg-brand-600 hover:bg-brand-500 disabled:bg-slate-600 disabled:cursor-not-allowed text-white font-semibold rounded-xl transition-all hover:shadow-lg hover:shadow-brand-600/30 text-sm"
                >
                  {loading ? 'Sending...' : 'Send Message →'}
                </button>
                <p className="text-slate-600 text-xs text-center">We respond within 24 hours. No spam, ever.</p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
