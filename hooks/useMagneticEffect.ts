'use client'

import { useRef, useCallback } from 'react'
import { useSpring, useMotionValue } from 'framer-motion'

export function useMagneticEffect(strength = 0.3) {
  const ref = useRef<HTMLButtonElement>(null)
  const x = useMotionValue(0)
  const y = useMotionValue(0)

  const springConfig = { damping: 20, stiffness: 300 }
  const springX = useSpring(x, springConfig)
  const springY = useSpring(y, springConfig)

  const handleMouseMove = useCallback(
    (e: React.MouseEvent<HTMLButtonElement>) => {
      const el = ref.current
      if (!el) return
      const rect = el.getBoundingClientRect()
      const centerX = rect.left + rect.width / 2
      const centerY = rect.top + rect.height / 2
      const distX = (e.clientX - centerX) * strength
      const distY = (e.clientY - centerY) * strength
      // Clamp to max 8px
      x.set(Math.max(-8, Math.min(8, distX)))
      y.set(Math.max(-8, Math.min(8, distY)))
    },
    [x, y, strength]
  )

  const handleMouseLeave = useCallback(() => {
    x.set(0)
    y.set(0)
  }, [x, y])

  return { ref, springX, springY, handleMouseMove, handleMouseLeave }
}
