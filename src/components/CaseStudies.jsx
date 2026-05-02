import ScrollReveal from './ScrollReveal'

const industries = [
  {
    name: 'Manufacturing & Industrial',
    description: 'End-to-end production automation and predictive quality control.',
    image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=800&q=80'
  },
  {
    name: 'Logistics & Supply Chain',
    description: 'Dynamic routing optimization and seamless global fleet management.',
    image: 'https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?auto=format&fit=crop&w=800&q=80'
  },
  {
    name: 'Architecture & Construction',
    description: 'Seamless workflow designing end to end and intelligent asset management.',
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=800&q=80'
  },
  {
    name: 'Finance & Fintech',
    description: 'Fraud detection and complete workflow designing, automating financial operations.',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80'
  },
  {
    name: 'Healthcare & Healthtech',
    description: 'Clinical trial intelligence and fully optimized entire hospital ops.',
    image: 'https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=800&q=80'
  },
  {
    name: 'Retail & Consumer Goods',
    description: 'Intelligent demand forecasting and automated visual merchandising.',
    image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=800&q=80'
  },
  {
    name: 'Energy & Utilities',
    description: 'Predictive infrastructure maintenance and autonomous safety monitoring.',
    image: 'https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?auto=format&fit=crop&w=800&q=80'
  },
  {
    name: 'Professional Services',
    description: 'Knowledge management and autonomous research workflows.',
    image: 'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&w=800&q=80'
  }
]

export default function CaseStudies() {
  return (
    <section id="capabilities" className="py-24 bg-slate-50 border-t border-slate-100 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 mb-16">
        <ScrollReveal>
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl sm:text-5xl font-bold text-slate-900 mb-6">
              Industry Capabilities
            </h2>
            <p className="text-slate-600 text-lg leading-relaxed">
              Explore how Aura AI delivers measurable business outcomes across sectors.
              We partner with industry leaders to design and implement intelligent,
              end-to-end operational workflows.
            </p>
          </div>
        </ScrollReveal>
      </div>

      {/* Marquee Wrapper */}
      <div className="relative w-full pb-10 pause-marquee flex gap-8">
        
        {/* Left/Right Fade Overlays for cleaner look on large screens */}
        <div className="absolute top-0 left-0 w-24 h-full bg-gradient-to-r from-slate-50 to-transparent z-10 pointer-events-none hidden md:block"></div>
        <div className="absolute top-0 right-0 w-24 h-full bg-gradient-to-l from-slate-50 to-transparent z-10 pointer-events-none hidden md:block"></div>

        {/* Tracks (rendered twice for seamless loop) */}
        {[1, 2].map((trackIdx) => (
          <div key={trackIdx} className="flex gap-8 animate-marquee shrink-0">
            {industries.map((ind, idx) => (
              <div 
                key={`${trackIdx}-${ind.name}`} 
                className="relative w-[320px] sm:w-[420px] h-[300px] shrink-0 rounded-2xl overflow-hidden shadow-[0_4px_20px_-4px_rgba(0,0,0,0.1)] group cursor-pointer border border-slate-200"
              >
                {/* Background Image */}
                <div className="absolute inset-0">
                  <img 
                    src={ind.image} 
                    alt={ind.name} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/95 via-slate-900/40 to-transparent mix-blend-multiply"></div>
                  <div className="absolute inset-0 bg-gradient-to-t from-[#6b4c9a]/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </div>

                {/* Content Overlay */}
                <div className="absolute inset-0 flex flex-col justify-end p-6 sm:p-8">
                  <h3 className="text-xl sm:text-2xl font-bold text-white mb-2 leading-tight">
                    {ind.name}
                  </h3>
                  <div className="w-10 h-1 bg-purple-400 mb-4 transition-all duration-500 group-hover:w-full opacity-80 rounded-full"></div>
                  <p className="text-slate-200 text-sm sm:text-base leading-relaxed opacity-90 group-hover:opacity-100 transition-opacity">
                    {ind.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        ))}
      </div>
    </section>
  )
}
