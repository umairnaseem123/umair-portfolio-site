import Reveal from './Reveal'

export default function SectionHeader({ eyebrow, title, subtitle, className = '' }) {
  return (
    <div className={`mb-14 max-w-3xl sm:mb-20 ${className}`}>
      <Reveal>
        <p className="eyebrow mb-4">{eyebrow}</p>
      </Reveal>
      <Reveal delay={0.08}>
        <h2 className="h2">{title}</h2>
      </Reveal>
      {subtitle && (
        <Reveal delay={0.16}>
          <p className="mt-5 text-base text-mute sm:text-lg">{subtitle}</p>
        </Reveal>
      )}
    </div>
  )
}
