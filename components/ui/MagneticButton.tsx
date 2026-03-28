'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { useMagneticEffect } from '@/hooks/useMagneticEffect'
import { cn } from '@/lib/utils'

interface MagneticButtonProps {
  children: React.ReactNode
  className?: string
  onClick?: () => void
  href?: string
}

export default function MagneticButton({
  children,
  className,
  onClick,
}: MagneticButtonProps) {
  const { ref, springX, springY, handleMouseMove, handleMouseLeave } =
    useMagneticEffect(0.4)

  return (
    <motion.button
      ref={ref}
      style={{ x: springX, y: springY }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onClick={onClick}
      className={cn(
        'inline-flex items-center justify-center cursor-pointer',
        className
      )}
    >
      {children}
    </motion.button>
  )
}
