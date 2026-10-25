import { useEffect, useRef, useState } from 'react'
import { animate, useInView } from 'framer-motion'

export default function CountUp({ to, pad = 2, duration = 1.4 }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })
  const [val, setVal] = useState(0)

  useEffect(() => {
    if (!inView) return
    const controls = animate(0, to, {
      duration,
      ease: 'easeOut',
      onUpdate: (v) => setVal(Math.round(v)),
    })
    return () => controls.stop()
  }, [inView, to, duration])

  return <span ref={ref}>{String(val).padStart(pad, '0')}</span>
}
