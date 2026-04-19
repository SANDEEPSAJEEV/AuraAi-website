import { useEffect, useRef, useState } from 'react'

export default function ScrollReveal({ children, delay = 0, direction = 'up', className = '' }) {
  const ref = useRef(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => setVisible(true), delay)
          observer.unobserve(entry.target)
        }
      },
      { threshold: 0.1, rootMargin: '-50px' }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [delay])

  const translate = {
    up: visible ? 'translate-y-0' : 'translate-y-8',
    down: visible ? 'translate-y-0' : '-translate-y-8',
    left: visible ? 'translate-x-0' : '-translate-x-8',
    right: visible ? 'translate-x-0' : 'translate-x-8',
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
