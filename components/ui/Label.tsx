import React from 'react'
import { cn } from '@/lib/utils'

interface LabelProps {
  children: React.ReactNode
  className?: string
  color?: 'champagne' | 'muted' | 'white'
}

export default function Label({ children, className, color = 'champagne' }: LabelProps) {
  const colors = {
    champagne: 'text-champagne',
    muted: 'text-text-muted',
    white: 'text-white/60',
  }

  return (
    <span
      className={cn(
        'text-label font-body tracking-[0.15em] uppercase block',
        colors[color],
        className
      )}
    >
      {children}
    </span>
  )
}
