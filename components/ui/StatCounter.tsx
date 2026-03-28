'use client'

import { useEffect, useRef, useState } from 'react'
import { useIntersectionObserver } from '@/hooks/useIntersectionObserver'
import { cn } from '@/lib/utils'

interface StatCounterProps {
  value: number | string
  suffix?: string
  prefix?: string
  label: string
  className?: string
}

export default function StatCounter({
  value,
  suffix = '',
  prefix = '',
  label,
  className,
}: StatCounterProps) {
  const [ref, isVisible] = useIntersectionObserver<HTMLDivElement>({ once: true })
  const [count, setCount] = useState(0)
  const hasAnimated = useRef(false)
  const numericValue = typeof value === 'number' ? value : parseInt(value, 10)

  useEffect(() => {
    if (!isVisible || hasAnimated.current || isNaN(numericValue)) return
    hasAnimated.current = true

    const duration = 1500
    const startTime = performance.now()

    const animate = (currentTime: number) => {
      const elapsed = currentTime - startTime
      const progress = Math.min(elapsed / duration, 1)
      // ease-out cubic
      const eased = 1 - Math.pow(1 - progress, 3)
      setCount(Math.round(eased * numericValue))

      if (progress < 1) {
        requestAnimationFrame(animate)
      }
    }

    requestAnimationFrame(animate)
  }, [isVisible, numericValue])

  const displayValue = isNaN(numericValue) ? value : count

  return (
    <div ref={ref} className={cn('text-center', className)}>
      <div className="font-display text-[clamp(40px,5vw,56px)] font-light italic text-champagne leading-none">
        {prefix}{displayValue}{suffix}
      </div>
      <div className="text-label text-text-muted mt-3 tracking-[0.15em]">{label}</div>
    </div>
  )
}
