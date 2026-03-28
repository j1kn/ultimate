import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './lib/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'obsidian': '#0A0A0A',
        'champagne': '#C9A96E',
        'champagne-light': '#E8D5A8',
        'pearl': '#F5F4F1',
        'slate-luxury': '#8B9099',
        'border-subtle': '#E8E6E1',
        'surface-dark': '#111111',
        'text-muted': '#9A9A9A',
        'text-secondary': '#5C5C5C',
      },
      fontFamily: {
        'display': ['Cormorant Garamond', 'Georgia', 'serif'],
        'body': ['DM Sans', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        'hero': ['clamp(52px, 8vw, 100px)', { lineHeight: '1.05', fontWeight: '300' }],
        'section': ['clamp(36px, 5vw, 64px)', { lineHeight: '1.1', fontWeight: '300' }],
        'subheading': ['clamp(18px, 2.5vw, 28px)', { lineHeight: '1.3', fontWeight: '300' }],
        'label': ['11px', { lineHeight: '1.4', fontWeight: '500', letterSpacing: '0.15em' }],
        'small': ['13px', { lineHeight: '1.5', fontWeight: '400' }],
      },
      borderRadius: {
        'card': '4px',
        'btn': '2px',
        'input': '2px',
        DEFAULT: '2px',
      },
      transitionTimingFunction: {
        'luxury': 'cubic-bezier(0.16, 1, 0.3, 1)',
      },
      transitionDuration: {
        'fast': '200ms',
        'default': '400ms',
        'slow': '800ms',
      },
      spacing: {
        'section': 'clamp(80px, 10vw, 120px)',
      },
      maxWidth: {
        'site': '1440px',
      },
      animation: {
        'pulse-ring': 'pulseRing 2s cubic-bezier(0.455, 0.03, 0.515, 0.955) infinite',
        'ken-burns': 'kenBurns 20s linear forwards',
        'bounce-slow': 'bounceSlow 2s ease-in-out infinite',
      },
      keyframes: {
        pulseRing: {
          '0%': { transform: 'scale(1)', opacity: '0.8' },
          '100%': { transform: 'scale(1.5)', opacity: '0' },
        },
        kenBurns: {
          '0%': { transform: 'scale(1)' },
          '100%': { transform: 'scale(1.04)' },
        },
        bounceSlow: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(6px)' },
        },
      },
    },
  },
  plugins: [],
}

export default config
