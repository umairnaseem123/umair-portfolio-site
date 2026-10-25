import { useEffect } from 'react'
import { motion, useMotionValue, useSpring } from 'framer-motion'

export default function CursorGlow() {
  const x = useMotionValue(-500)
  const y = useMotionValue(-500)
  const sx = useSpring(x, { stiffness: 120, damping: 24, mass: 0.6 })
  const sy = useSpring(y, { stiffness: 120, damping: 24, mass: 0.6 })

  useEffect(() => {
    // Only on devices with a real hover-capable pointer.
    if (!window.matchMedia('(hover: hover) and (pointer: fine)').matches) return
    const move = (e) => {
      x.set(e.clientX - 250)
      y.set(e.clientY - 250)
    }
    window.addEventListener('pointermove', move)
    return () => window.removeEventListener('pointermove', move)
  }, [x, y])

  return (
    <motion.div
      aria-hidden="true"
      className="pointer-events-none fixed left-0 top-0 z-0 hidden h-[500px] w-[500px] rounded-full md:block"
      style={{
        x: sx,
        y: sy,
        background: 'radial-gradient(circle, rgba(176,138,62,0.10) 0%, rgba(176,138,62,0.05) 40%, transparent 70%)',
      }}
    />
  )
}
