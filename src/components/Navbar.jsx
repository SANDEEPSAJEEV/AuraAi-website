import { useState, useEffect } from 'react'
import Logo from './Logo'

const links = [
  { label: 'What We Build', href: '#services' },
  { label: 'Process', href: '#how-we-work' },
  { label: 'Capabilities', href: '#capabilities' },
  { label: 'FAQ', href: '#faq' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('')

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 20)

      const sections = links.map(l => l.href.slice(1))
      const current = sections.find(id => {
        const el = document.getElementById(id)
        if (!el) return false
        const rect = el.getBoundingClientRect()
        return rect.top <= 100 && rect.bottom >= 100
      })
      if (current) setActiveSection(current)
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    onScroll()
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-white/90 backdrop-blur-xl border-b border-slate-200 py-3 shadow-sm'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between">
        <a href="#" className="transition-transform hover:scale-105">
          <Logo size={36} />
        </a>

        <div className="hidden lg:flex items-center gap-1">
          {links.map(l => {
            const isActive = activeSection === l.href.slice(1)
            return (
              <a
                key={l.label}
                href={l.href}
                className={`relative px-4 py-2 text-sm font-medium transition-colors ${
                  isActive ? 'text-purple-800' : 'text-slate-600 hover:text-purple-700'
                }`}
              >
                {l.label}
                {isActive && (
                  <span className="absolute left-1/2 -translate-x-1/2 bottom-0 w-1 h-1 rounded-full bg-purple-600" />
                )}
              </a>
            )
          })}
        </div>

        <a
          href="#contact"
          className="hidden lg:inline-flex items-center gap-2 px-5 py-2.5 bg-[#6b4c9a] hover:bg-[#5a3e85] text-white text-sm font-semibold rounded shadow-sm shadow-purple-900/10 hover:shadow-purple-900/20 hover:-translate-y-0.5 transition-all duration-300"
        >
          Request Demo
        </a>

        <button
          className="lg:hidden text-slate-800 p-2 -mr-2"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <div className="w-6 h-5 relative flex flex-col justify-between">
            <span className={`w-full h-0.5 bg-slate-800 rounded transition-all duration-300 ${menuOpen ? 'rotate-45 translate-y-2' : ''}`} />
            <span className={`w-full h-0.5 bg-slate-800 rounded transition-all duration-300 ${menuOpen ? 'opacity-0' : ''}`} />
            <span className={`w-full h-0.5 bg-slate-800 rounded transition-all duration-300 ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
          </div>
        </button>
      </div>

      <div
        className={`lg:hidden overflow-hidden transition-all duration-400 ${
          menuOpen ? 'max-h-96 border-t border-slate-200' : 'max-h-0'
        }`}
      >
        <div className="bg-white/95 backdrop-blur-xl px-6 py-5 flex flex-col gap-1">
          {links.map(l => (
            <a
              key={l.label}
              href={l.href}
              className="text-slate-600 hover:text-purple-700 text-sm font-medium py-3 px-2 border-b border-slate-100 transition-colors"
              onClick={() => setMenuOpen(false)}
            >
              {l.label}
            </a>
          ))}
          <a
            href="#contact"
            className="mt-4 px-5 py-3 bg-[#6b4c9a] text-white text-sm font-semibold rounded text-center shadow-sm"
            onClick={() => setMenuOpen(false)}
          >
            Request Demo
          </a>
        </div>
      </div>
    </nav>
  )
}
