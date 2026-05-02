import { useEffect, useState } from 'react'

const words = ['Vision', 'Intelligence', 'Precision', 'Tomorrow']

export default function Hero() {
  const [wordIndex, setWordIndex] = useState(0)
  const [show, setShow] = useState(false)

  // Cycle through words
  useEffect(() => {
    setShow(true)
    const interval = setInterval(() => {
      setShow(false)
      setTimeout(() => {
        setWordIndex(i => (i + 1) % words.length)
        setShow(true)
      }, 500)
    }, 3000)
    return () => clearInterval(interval)
  }, [])

  return (
    <section className="relative min-h-[90vh] flex items-center pt-20 overflow-hidden bg-white">
      {/* Background patterns */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
        <div className="absolute top-0 right-0 -mr-[20%] -mt-[10%] w-[70%] h-[70%] rounded-full bg-purple-500/[0.05] blur-3xl pointer-events-none"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Left Text Content */}
          <div className="text-left pt-12 pb-20">
            {/* Kicker */}
            <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full border border-slate-200 bg-slate-50 mb-8 animate-[fadeSlideUp_0.8s_0.2s_ease-out_both]">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-purple-400 opacity-50" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-purple-600" />
              </span>
              <span className="text-slate-600 text-xs sm:text-sm font-semibold tracking-wide uppercase">Enterprise AI Solutions</span>
            </div>

            {/* Main headline */}
            <h1 className="text-5xl sm:text-6xl md:text-7xl font-black leading-[1.1] tracking-tight mb-6 text-slate-900">
              <span className="block animate-[fadeSlideUp_0.8s_0.4s_ease-out_both]">
                We Build
              </span>
              <span className="relative block mt-2 h-[1.2em]">
                <span
                  key={words[wordIndex]}
                  className={`absolute left-0 top-0 inline-block bg-gradient-to-r from-[#6b4c9a] to-[#3b82f6] bg-clip-text text-transparent transition-all duration-500 ${
                    show ? 'opacity-100 translate-y-0 blur-0' : 'opacity-0 translate-y-4 blur-sm'
                  }`}
                >
                  {words[wordIndex]}
                </span>
              </span>
            </h1>

            {/* Sub text */}
            <p className="text-lg sm:text-xl text-slate-600 max-w-lg mb-10 leading-relaxed animate-[fadeSlideUp_0.8s_0.7s_ease-out_both]">
              From the deep layers of neural networks to decisions that move real businesses forward
              <span className="text-slate-900 font-semibold"> — we bridge the gap between machine intelligence and human impact.</span>
            </p>

            {/* CTA row */}
            <div className="flex flex-col sm:flex-row items-start gap-4 sm:gap-5 animate-[fadeSlideUp_0.8s_0.9s_ease-out_both]">
              <a
                href="#contact"
                className="group relative inline-flex items-center justify-center gap-2.5 px-8 py-3.5 bg-[#6b4c9a] hover:bg-[#5a3e85] text-white font-semibold rounded shadow-md shadow-purple-900/10 transition-all duration-300 hover:-translate-y-0.5"
              >
                Request Demo
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="group-hover:translate-x-1 transition-transform"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
              </a>
              <a
                href="#services"
                className="group inline-flex items-center gap-2 px-6 py-3.5 text-slate-600 hover:text-purple-700 font-medium transition-colors"
              >
                Explore Solutions
              </a>
            </div>
          </div>

          {/* Right Image Content */}
          <div className="hidden lg:block relative animate-[fadeSlideUp_1s_0.5s_ease-out_both]">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-slate-200/50 aspect-[4/3] transform hover:scale-[1.02] transition-transform duration-700">
              <img 
                src="/ai.avif" 
                alt="AI Technology" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-purple-900/20 to-transparent mix-blend-overlay"></div>
            </div>
            
            {/* Floating stat card */}
            <div className="absolute -bottom-6 -left-6 bg-white p-5 rounded-xl shadow-xl border border-slate-100 flex items-center gap-4 animate-[float_6s_ease-in-out_infinite]">
              <div className="w-12 h-12 rounded-full bg-purple-100 flex items-center justify-center text-purple-600">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 12h-4l-3 9L9 3l-3 9H2"/></svg>
              </div>
              <div>
                <p className="text-sm text-slate-500 font-medium mb-0.5">System Latency</p>
                <p className="text-xl font-bold text-slate-900">~45 ms</p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
