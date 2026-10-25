import Reveal from '../components/Reveal'
import { trustCompanies } from '../data/content'

export default function TrustStrip() {
  return (
    <section aria-label="Experience across" className="border-y border-line bg-bg2/60">
      <Reveal className="container-x flex flex-col gap-5 py-8 md:flex-row md:items-center md:gap-12">
        <p className="shrink-0 font-mono text-[11px] uppercase tracking-[0.2em] text-mute/80">Experience across</p>
        <ul className="grid flex-1 grid-cols-2 gap-x-6 gap-y-4 sm:flex sm:flex-wrap sm:items-center sm:justify-between">
          {trustCompanies.map((c) => (
            <li
              key={c}
              className="font-display text-sm font-medium tracking-wide text-mute/70 transition-colors hover:text-ink sm:text-base"
            >
              {c}
            </li>
          ))}
        </ul>
      </Reveal>
    </section>
  )
}
