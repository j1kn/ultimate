'use client'

import { motion } from 'framer-motion'

const words = [
  '"We', 'do', 'not', 'offer', 'services.',
  'We', 'offer', 'outcomes."',
]

export default function BrandStatement() {
  return (
    <section className="bg-obsidian section-py">
      <div className="container-site">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h2
            className="font-display font-light italic text-white leading-tight mb-8"
            style={{ fontSize: 'clamp(32px, 5vw, 64px)' }}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            variants={{
              hidden: {},
              visible: {
                transition: {
                  staggerChildren: 0.03,
                },
              },
            }}
          >
            {words.map((word, i) => (
              <motion.span
                key={i}
                className="inline-block mr-[0.25em]"
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: {
                    opacity: 1,
                    y: 0,
                    transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] },
                  },
                }}
              >
                {word}
              </motion.span>
            ))}
          </motion.h2>

          <motion.p
            className="text-white/60 text-base leading-relaxed max-w-[600px] mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
          >
            Every arrangement we make is crafted around a singular obsession:
            delivering the precise outcome our clients deserve, without friction,
            delay, or compromise.
          </motion.p>
        </div>
      </div>
    </section>
  )
}
