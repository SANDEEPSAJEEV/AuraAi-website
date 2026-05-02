import Logo from './Logo'

export default function Footer() {
  return (
    <footer className="relative bg-white border-t border-slate-200 pt-16 pb-8">
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-12 mb-12">
          <div className="md:col-span-6">
            <Logo size={40} />
            <p className="text-slate-600 text-sm leading-relaxed mt-5 max-w-md">
              Aura AI — Transforming complex data into intelligent action. We engineer enterprise-grade AI solutions that turn raw information into strategic business value.
            </p>
            <a
              href="mailto:sales@aura-vision.tech"
              className="inline-flex items-center gap-2 mt-6 text-purple-600 hover:text-cyan-300 text-sm font-medium transition-colors"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" /><polyline points="22,6 12,13 2,6" /></svg>
              sales@aura-vision.tech
            </a>
          </div>

          <div className="md:col-span-3">
            <h4 className="text-slate-900 font-semibold text-xs mb-5 uppercase tracking-widest">Services</h4>
            <ul className="space-y-3">
              <li>
                <a href="#services" className="text-slate-600 hover:text-purple-600 text-sm transition-colors">
                  What We Build
                </a>
              </li>
            </ul>
          </div>

          <div className="md:col-span-3">
            <h4 className="text-slate-900 font-semibold text-xs mb-5 uppercase tracking-widest">Company</h4>
            <ul className="space-y-3">
              <li><a href="#capabilities" className="text-slate-600 hover:text-purple-600 text-sm transition-colors">About</a></li>
              <li><a href="#how-we-work" className="text-slate-600 hover:text-purple-600 text-sm transition-colors">Our Process</a></li>
              <li><a href="#faq" className="text-slate-600 hover:text-purple-600 text-sm transition-colors">FAQ</a></li>
              <li><a href="#contact" className="text-slate-600 hover:text-purple-600 text-sm transition-colors">Contact</a></li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-3 text-center sm:text-left">
          <p className="text-slate-500 text-xs">
            © {new Date().getFullYear()} Aura AI · Based in Dubai · United Arab Emirates
          </p>
          <p className="text-slate-600 text-xs">
            All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}

