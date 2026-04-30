import Logo from './Logo'

const footerLinks = {
  Services: [
    { label: 'AI & Machine Learning', href: '#services' },
    { label: 'Computer Vision', href: '#services' },
    { label: 'Generative AI', href: '#services' },
    { label: 'Data Analytics', href: '#services' },
    { label: 'Web Development', href: '#services' },
    { label: 'Business Automation', href: '#services' },
  ],
  Company: [
    { label: 'About', href: '#team' },
    { label: 'Expertise', href: '#expertise' },
    { label: 'Our Process', href: '#how-we-work' },
    { label: 'FAQ', href: '#faq' },
    { label: 'Contact', href: '#contact' },
  ],
}

export default function Footer() {
  return (
    <footer className="relative bg-[#050508] border-t border-white/5 pt-16 pb-8 overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[400px] h-[200px] bg-cyan-500/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-12 mb-12">
          <div className="md:col-span-5">
            <Logo size={40} />
            <p className="text-slate-400 text-sm leading-relaxed mt-5 max-w-sm">
              Engineering intelligent systems that ship to production. AI, automation, and web platforms — built right, delivered reliably.
            </p>
            <a
              href="mailto:sales@aura-vision.tech"
              className="inline-flex items-center gap-2 mt-6 text-cyan-400 hover:text-cyan-300 text-sm font-medium transition-colors group"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" /><polyline points="22,6 12,13 2,6" /></svg>
              sales@aura-vision.tech
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="group-hover:translate-x-1 transition-transform"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
            </a>
          </div>

          {Object.entries(footerLinks).map(([heading, links]) => (
            <div key={heading} className="md:col-span-3">
              <h4 className="text-white font-semibold text-sm mb-5 uppercase tracking-widest text-xs">{heading}</h4>
              <ul className="space-y-3">
                {links.map(link => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-slate-400 hover:text-cyan-400 text-sm transition-colors"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div className="md:col-span-1 flex md:justify-end">
            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-400 hover:to-blue-400 text-white text-sm font-semibold rounded-lg shadow-lg shadow-cyan-500/20 transition-all hover:scale-105 whitespace-nowrap h-fit"
            >
              Get in Touch
            </a>
          </div>
        </div>

        <div className="pt-8 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <p className="text-slate-500 text-xs">
            © {new Date().getFullYear()} Aura AI · All rights reserved.
          </p>
          <p className="text-slate-600 text-xs italic">
            Quality AI · Your success · Our responsibility.
          </p>
        </div>
      </div>
    </footer>
  )
}
