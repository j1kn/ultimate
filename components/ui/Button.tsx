'use client'

import React from 'react'
import { cn } from '@/lib/utils'

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'outlined' | 'ghost' | 'champagne'
  size?: 'sm' | 'md' | 'lg'
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      variant = 'primary',
      size = 'md',
      children,
      ...props
    },
    ref
  ) => {
    const base =
      'inline-flex items-center justify-center font-body font-500 tracking-wider uppercase text-label transition-all duration-300 ease-luxury focus-visible:outline-2 focus-visible:outline-champagne focus-visible:outline-offset-2 disabled:opacity-50 disabled:cursor-not-allowed'

    const variants = {
      primary: 'bg-obsidian text-white border border-obsidian hover:bg-surface-dark',
      outlined:
        'bg-transparent text-obsidian border border-obsidian hover:bg-obsidian hover:text-white',
      ghost: 'bg-transparent text-obsidian border border-transparent hover:border-border-subtle',
      champagne:
        'bg-champagne text-obsidian border border-champagne hover:bg-champagne-light',
    }

    const sizes = {
      sm: 'px-6 py-2.5 text-[10px]',
      md: 'px-8 py-3.5 text-[11px]',
      lg: 'px-10 py-4 text-[11px]',
    }

    return (
      <button
        ref={ref}
        className={cn(base, variants[variant], sizes[size], className)}
        style={{ borderRadius: '2px' }}
        {...props}
      >
        {children}
      </button>
    )
  }
)

Button.displayName = 'Button'

export default Button
