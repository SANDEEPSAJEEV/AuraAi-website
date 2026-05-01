import { useEffect, useRef, useState } from 'react'

const words = ['Vision', 'Intelligence', 'Precision', 'Tomorrow']

export default function Hero() {
  const canvasRef = useRef(null)
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

  // Neural network canvas
  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    let animId
    let time = 0
    let w, h

    const nodes = []
    const pulses = []

    const resize = () => {
      const dpr = window.devicePixelRatio || 1
      w = canvas.offsetWidth
      h = canvas.offsetHeight
      canvas.width = w * dpr
      canvas.height = h * dpr
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0)
    }
    resize()
    window.addEventListener('resize', resize)

    // Create neural network nodes — denser in center (brain-like)
    const nodeCount = Math.min(140, Math.floor(w * h / 8000))
    for (let i = 0; i < nodeCount; i++) {
      // Bias toward center for brain shape
      const cx = w / 2, cy = h / 2
      const spread = Math.random() < 0.6 ? 0.35 : 0.9
      const angle = Math.random() * Math.PI * 2
      const dist = Math.random() * Math.min(w, h) * spread
      nodes.push({
        x: cx + Math.cos(angle) * dist * (w / h),
        y: cy + Math.sin(angle) * dist,
        baseX: cx + Math.cos(angle) * dist * (w / h),
        baseY: cy + Math.sin(angle) * dist,
        r: Math.random() * 2 + 0.8,
        phase: Math.random() * Math.PI * 2,
        speed: 0.003 + Math.random() * 0.008,
        drift: 8 + Math.random() * 15,
        brightness: Math.random(),
        layer: Math.random() < 0.15 ? 'bright' : Math.random() < 0.4 ? 'mid' : 'dim',
      })
    }

    // Precompute edges (connections)
    const edges = []
    const maxDist = 130
    for (let i = 0; i < nodes.length; i++) {
      for (let j = i + 1; j < nodes.length; j++) {
        const dx = nodes[i].baseX - nodes[j].baseX
        const dy = nodes[i].baseY - nodes[j].baseY
        const d = Math.sqrt(dx * dx + dy * dy)
        if (d < maxDist) {
          edges.push({ a: i, b: j, dist: d })
        }
      }
    }

    // Spawn synaptic pulses periodically
    const spawnPulse = () => {
      if (edges.length === 0) return
      const edge = edges[Math.floor(Math.random() * edges.length)]
      const forward = Math.random() > 0.5
      pulses.push({
        edge,
        t: 0,
        speed: 0.008 + Math.random() * 0.012,
        forward,
        color: Math.random() > 0.5 ? [34, 211, 238] : [59, 130, 246],
      })
    }

    const draw = () => {
      time++
      ctx.clearRect(0, 0, w, h)

      // Spawn pulses
      if (time % 8 === 0) spawnPulse()

      // Update node positions (gentle floating)
      nodes.forEach(n => {
        n.x = n.baseX + Math.sin(time * n.speed + n.phase) * n.drift
        n.y = n.baseY + Math.cos(time * n.speed * 0.7 + n.phase) * n.drift * 0.6
      })

      // Draw edges
      edges.forEach(e => {
        const a = nodes[e.a]
        const b = nodes[e.b]
        const dx = a.x - b.x
        const dy = a.y - b.y
        const d = Math.sqrt(dx * dx + dy * dy)
        const alpha = Math.max(0, 0.08 * (1 - d / (maxDist + 40)))
        ctx.beginPath()
        ctx.moveTo(a.x, a.y)
        ctx.lineTo(b.x, b.y)
        ctx.strokeStyle = `rgba(34, 211, 238, ${alpha})`
        ctx.lineWidth = 0.5
        ctx.stroke()
      })

      // Draw synaptic pulses
      for (let i = pulses.length - 1; i >= 0; i--) {
        const p = pulses[i]
        p.t += p.speed
        if (p.t > 1) { pulses.splice(i, 1); continue }
        const a = nodes[p.edge.a]
        const b = nodes[p.edge.b]
        const t = p.forward ? p.t : 1 - p.t
        const px = a.x + (b.x - a.x) * t
        const py = a.y + (b.y - a.y) * t
        const glow = Math.sin(p.t * Math.PI) // fade in/out
        const [cr, cg, cb] = p.color
        // Glow
        const grad = ctx.createRadialGradient(px, py, 0, px, py, 12)
        grad.addColorStop(0, `rgba(${cr}, ${cg}, ${cb}, ${0.6 * glow})`)
        grad.addColorStop(1, `rgba(${cr}, ${cg}, ${cb}, 0)`)
        ctx.fillStyle = grad
        ctx.fillRect(px - 12, py - 12, 24, 24)
        // Core dot
        ctx.beginPath()
        ctx.arc(px, py, 2, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(${cr}, ${cg}, ${cb}, ${0.9 * glow})`
        ctx.fill()
      }

      // Draw nodes
      nodes.forEach(n => {
        const pulse = 0.5 + 0.5 * Math.sin(time * 0.02 + n.phase)
        let alpha, radius
        if (n.layer === 'bright') {
          alpha = 0.6 + pulse * 0.4
          radius = n.r + pulse * 1.2
          // Glow for bright nodes
          const grad = ctx.createRadialGradient(n.x, n.y, 0, n.x, n.y, radius * 6)
          grad.addColorStop(0, `rgba(34, 211, 238, ${0.15 * pulse})`)
          grad.addColorStop(1, 'rgba(34, 211, 238, 0)')
          ctx.fillStyle = grad
          ctx.fillRect(n.x - radius * 6, n.y - radius * 6, radius * 12, radius * 12)
        } else if (n.layer === 'mid') {
          alpha = 0.25 + pulse * 0.2
          radius = n.r
        } else {
          alpha = 0.08 + pulse * 0.08
          radius = n.r * 0.7
        }
        ctx.beginPath()
        ctx.arc(n.x, n.y, radius, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(34, 211, 238, ${alpha})`
        ctx.fill()
      })

      animId = requestAnimationFrame(draw)
    }
    draw()
    return () => {
      cancelAnimationFrame(animId)
      window.removeEventListener('resize', resize)
    }
  }, [])

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Neural brain background image */}
      <div
        className="absolute inset-0 bg-center bg-cover opacity-[0.15] pointer-events-none"
        style={{ backgroundImage: 'url(/neural-bg.png)' }}
      />

      {/* Neural network canvas — on top of image */}
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full pointer-events-none" style={{ opacity: 0.85 }} />

      {/* Radial ambient glows */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-[30%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[900px] bg-cyan-500/[0.03] rounded-full blur-[180px]" />
        <div className="absolute bottom-[10%] left-[20%] w-[500px] h-[500px] bg-blue-500/[0.025] rounded-full blur-[150px]" />
      </div>

      {/* Horizon line */}
      <div className="absolute bottom-[14%] left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan-500/15 to-transparent" />

      {/* Dark gradient overlay at bottom for smooth section transition */}
      <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-[#0a0a0f] to-transparent pointer-events-none" />

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 text-center pt-24 sm:pt-28 pb-20">
        {/* Kicker */}
        <div
          className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full border border-cyan-500/20 bg-cyan-500/[0.04] mb-8 sm:mb-10 opacity-0 animate-[fadeSlideUp_0.8s_0.2s_ease-out_forwards]"
        >
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-50" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-400" />
          </span>
          <span className="text-cyan-300/90 text-xs sm:text-sm font-medium tracking-wide">Engineering the future of AI</span>
        </div>

        {/* Main headline */}
        <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-black leading-[0.95] tracking-tighter mb-6 sm:mb-8">
          <span
            className="block text-white opacity-0 animate-[fadeSlideUp_0.8s_0.4s_ease-out_forwards]"
          >
            We Build
          </span>
          <span className="relative block mt-1 sm:mt-2">
            <span
              key={words[wordIndex]}
              className={`inline-block bg-gradient-to-r from-cyan-300 via-blue-400 to-cyan-300 bg-clip-text text-transparent transition-all duration-500 ${
                show ? 'opacity-100 translate-y-0 blur-0' : 'opacity-0 translate-y-4 blur-sm'
              }`}
              style={{ backgroundSize: '200% auto', animation: show ? 'gradient-shift 4s ease infinite' : 'none' }}
            >
              {words[wordIndex]}
            </span>
          </span>
        </h1>

        {/* Sub text — impactful AI → human copy */}
        <p className="text-base sm:text-lg md:text-xl text-slate-300/90 max-w-2xl mx-auto mb-10 sm:mb-14 leading-relaxed opacity-0 animate-[fadeSlideUp_0.8s_0.7s_ease-out_forwards]">
          From the deep layers of neural networks to decisions that move real businesses forward
          <span className="text-cyan-400 font-medium"> — we bridge the gap between machine intelligence and human impact.</span>
        </p>

        {/* CTA row */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-5 opacity-0 animate-[fadeSlideUp_0.8s_0.9s_ease-out_forwards]">
          <a
            href="#contact"
            className="group relative inline-flex items-center justify-center gap-2.5 px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-400 hover:to-blue-400 text-white font-semibold rounded-xl text-base shadow-lg shadow-cyan-500/20 hover:shadow-cyan-500/40 hover:scale-[1.03] transition-all duration-300"
          >
            Start your project
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="group-hover:translate-x-1 transition-transform"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
          </a>
          <a
            href="#services"
            className="group inline-flex items-center gap-2 px-6 py-4 text-slate-300 hover:text-white text-base font-medium transition-all duration-300"
          >
            Explore what we build
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="group-hover:translate-y-0.5 transition-transform"><path d="M12 5v14M5 12l7 7 7-7" /></svg>
          </a>
        </div>

        {/* Email line */}
        <p className="text-slate-500 text-sm mt-6 opacity-0 animate-[fadeSlideUp_0.8s_1.1s_ease-out_forwards]">
          or email{' '}
          <a href="mailto:sales@aura-vision.tech" className="text-slate-400 hover:text-cyan-400 underline underline-offset-4 transition-colors">
            sales@aura-vision.tech
          </a>
        </p>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 opacity-0 animate-[fadeSlideUp_0.8s_1.3s_ease-out_forwards]">
          <div className="flex flex-col items-center gap-2 text-slate-500 animate-bounce" style={{ animationDuration: '2s' }}>
            <span className="text-[10px] tracking-[0.2em] uppercase font-medium">Scroll</span>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"><path d="M12 5v14M5 12l7 7 7-7" /></svg>
          </div>
        </div>
      </div>
    </section>
  )
}
