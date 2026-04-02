export default function Footer() {
  return (
    <footer className="bg-[#070709] border-t border-white/5 py-12">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-brand-500 to-accent flex items-center justify-center">
              <span className="text-white font-bold text-sm">A</span>
            </div>
            <span className="text-white font-bold text-xl">Aura AI</span>
          </div>

          {/* Links */}
          <div className="flex items-center gap-8">
            {['Services', 'Expertise', 'How We Work', 'Team', 'Contact'].map(l => (
              <a
                key={l}
                href={`#${l.toLowerCase().replace(' ', '-')}`}
                className="text-slate-500 hover:text-slate-300 text-sm transition-colors"
              >
                {l}
              </a>
            ))}
          </div>

          {/* Email */}
          <a
            href="mailto:sandeeps@aura-vision.tech"
            className="text-slate-500 hover:text-brand-400 text-sm transition-colors"
          >
            sandeeps@aura-vision.tech
          </a>
        </div>

        <div className="mt-8 pt-6 border-t border-white/5 text-center text-slate-600 text-xs">
          © {new Date().getFullYear()} Aura AI. All rights reserved. Quality AI. Your success. Our responsibility.
        </div>
      </div>
    </footer>
  )
}
