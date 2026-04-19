import { useEffect, useRef, useState } from 'react'

export default function ScrollReveal({ children, delay = 0, direction = 'up', className = '' }) {
  const ref = useRef(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) {
      setVisible(true)
      return
    }

    if (typeof IntersectionObserver === 'undefined') {
      setVisible(true)
      return
    }

    const rect = el.getBoundingClientRect()
    const inViewport = rect.top < window.innerHeight && rect.bottom > 0
    if (inViewport) {
      const t = setTimeout(() => setVisible(true), delay)
      return () => clearTimeout(t)
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => setVisible(true), delay)
          observer.unobserve(entry.target)
        }
      },
      { threshold: 0.05, rootMargin: '0px 0px -40px 0px' }
    )
    observer.observe(el)

    const fallback = setTimeout(() => setVisible(true), 1500)

    return () => {
      observer.disconnect()
      clearTimeout(fallback)
    }
  }, [delay])

  const translate = {
    up: visible ? 'translate-y-0' : 'translate-y-6',
    down: visible ? 'translate-y-0' : '-translate-y-6',
    left: visible ? 'translate-x-0' : '-translate-x-6',
    right: visible ? 'translate-x-0' : 'translate-x-6',
  }[direction]

  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ease-out ${visible ? 'opacity-100' : 'opacity-0'} ${translate} ${className}`}
    >
      {children}
    </div>
  )
}
