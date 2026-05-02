import { useState } from 'react'
import ScrollReveal from './ScrollReveal'

const projects = [
  {
    id: 1,
    title: 'Automated Defect Detection',
    category: 'Manufacturing • Computer Vision',
    image: '/cv_manufacturing.png',
  },
  {
    id: 2,
    title: 'Predictive Routing & Fleet Management',
    category: 'Logistics • Deep Learning',
    image: '/logistics_fleet.png',
  },
  {
    id: 3,
    title: 'Autonomous Agent Infrastructure',
    category: 'Cloud Operations • AI Agents',
    image: '/ai_agents_datacenter.png',
  },
]

export default function CaseStudies() {
  const [activeFilters, setActiveFilters] = useState(['Manufacturing', 'Computer Vision'])

  return (
    <section id="capabilities" className="py-24 bg-slate-50 border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <ScrollReveal>
          <div className="mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
              Real-world AI Impact: Capabilities & Projects
            </h2>
            <p className="text-slate-600 text-lg max-w-4xl">
              Explore potential Aura AI engagements where computer vision, deep learning and agent-based
              automation can deliver measurable business outcomes — reduced latency, improved detection
              accuracy, and real cost savings. Filter by industry and technology to find capabilities
              most relevant to your needs.
            </p>
          </div>
        </ScrollReveal>

        <div className="flex flex-col lg:flex-row gap-8 mb-12">
          {/* Filters */}
          <div className="flex-1 space-y-6">
            <div className="flex flex-wrap items-center gap-6">
              <div>
                <span className="block text-sm font-semibold text-slate-700 mb-3">Industry</span>
                <div className="flex flex-wrap gap-4">
                  {['Manufacturing', 'Logistics', 'Retail'].map(ind => (
                    <label key={ind} className="flex items-center gap-2 cursor-pointer">
                      <input type="checkbox" className="rounded border-slate-300 text-purple-600 focus:ring-purple-500" defaultChecked={ind === 'Manufacturing'} />
                      <span className="text-sm text-slate-700">{ind}</span>
                    </label>
                  ))}
                </div>
              </div>
              
              <div>
                <span className="block text-sm font-semibold text-slate-700 mb-3">Technology</span>
                <div className="flex flex-wrap gap-4">
                  {['Computer Vision (CV)', 'Deep Learning (DL)', 'Agents'].map(tech => (
                    <label key={tech} className="flex items-center gap-2 cursor-pointer">
                      <input type="checkbox" className="rounded border-slate-300 text-purple-600 focus:ring-purple-500" defaultChecked={tech.includes('Vision')} />
                      <span className="text-sm text-slate-700">{tech}</span>
                    </label>
                  ))}
                </div>
              </div>
            </div>

            <div className="relative max-w-md mt-4">
              <input
                type="text"
                placeholder="Search capabilities..."
                className="w-full pl-4 pr-10 py-2 border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent text-slate-700 bg-white"
              />
              <svg className="absolute right-3 top-2.5 h-5 w-5 text-slate-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="11" cy="11" r="8" />
                <path d="M21 21l-4.35-4.35" />
              </svg>
            </div>
          </div>

          {/* Featured Image */}
          <div className="lg:w-[45%] shrink-0">
            <div className="rounded-xl overflow-hidden border border-slate-200 shadow-sm aspect-[16/9] relative">
              <img src="/logistics_fleet.png" alt="Featured Logistics Project" className="w-full h-full object-cover" />
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-[1fr_250px] gap-8">
          {/* Projects Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {projects.map((p, idx) => (
              <ScrollReveal key={p.id} delay={idx * 100}>
                <div className="bg-white border border-slate-200 rounded-lg overflow-hidden hover:shadow-md transition-shadow h-full flex flex-col group cursor-pointer">
                  <div className="aspect-[4/3] overflow-hidden relative border-b border-slate-100">
                    <img src={p.image} alt={p.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                  </div>
                  <div className="p-5 flex-1 flex flex-col">
                    <h3 className="font-semibold text-slate-900 mb-2 leading-tight group-hover:text-purple-700 transition-colors">{p.title}</h3>
                    <p className="text-sm text-slate-500 mt-auto">{p.category}</p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>

          {/* Sidebar */}
          <div className="space-y-8">
            <div>
              <h4 className="text-sm font-semibold text-slate-500 uppercase tracking-wider mb-3">Active Filters</h4>
              <div className="flex flex-wrap gap-2">
                {activeFilters.map(f => (
                  <span key={f} className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md border border-slate-200 bg-white text-sm text-slate-700 shadow-sm">
                    {f}
                    <button className="text-slate-400 hover:text-slate-600">&times;</button>
                  </span>
                ))}
              </div>
            </div>

            <div>
              <h4 className="text-sm font-semibold text-slate-500 uppercase tracking-wider mb-3">Recent Downloads</h4>
              <ul className="space-y-3">
                {['DefectDetection_summary.pdf', 'PredictiveRouting_summary.pdf', 'AgentInfra_summary.pdf'].map(doc => (
                  <li key={doc} className="flex items-center justify-between gap-2 text-sm">
                    <span className="text-slate-700 truncate" title={doc}>{doc}</span>
                    <button className="px-2 py-1 text-xs border border-slate-300 rounded hover:bg-slate-50 text-slate-600 transition-colors shrink-0">
                      Download
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
