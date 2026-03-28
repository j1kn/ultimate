import { SectionReveal } from '@/components/ui/SectionReveal'
import StatCounter from '@/components/ui/StatCounter'

const stats = [
  { value: 12, suffix: '+', label: 'YEARS IN SERVICE' },
  { value: 6, label: 'SERVICE VERTICALS' },
  { value: 30, suffix: '+', label: 'COUNTRIES SERVED' },
  { value: 100, suffix: '%', label: 'DISCRETION ASSURED' },
]

export default function StatsBar() {
  return (
    <section className="bg-white section-py border-y border-border-subtle">
      <div className="container-site">
        <SectionReveal>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-10">
            {stats.map((stat) => (
              <StatCounter
                key={stat.label}
                value={stat.value}
                suffix={stat.suffix}
                label={stat.label}
              />
            ))}
          </div>
        </SectionReveal>
      </div>
    </section>
  )
}
