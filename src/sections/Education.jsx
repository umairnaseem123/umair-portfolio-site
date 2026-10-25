import { Award } from 'lucide-react'
import Reveal from '../components/Reveal'
import SectionHeader from '../components/SectionHeader'
import { education, certifications } from '../data/content'

export default function Education() {
  return (
    <section id="education" className="section bg-bg2/50">
      <div className="container-x">
        <div className="grid gap-16 lg:grid-cols-[1.1fr_0.9fr] lg:gap-20">
          <div>
            <SectionHeader eyebrow="06 — Education" title="Education" className="!mb-10 sm:!mb-12" />
            <ol className="relative space-y-8 border-l border-line pl-7">
              {education.map((e) => (
                <li key={e.school} className="relative">
                  <span
                    aria-hidden="true"
                    className="absolute -left-[33px] top-1.5 h-2.5 w-2.5 rounded-full border border-accent bg-bg"
                  />
                  <Reveal>
                    <p className="font-mono text-xs uppercase tracking-widest text-mute">{e.period}</p>
                    <h3 className="mt-2 font-display text-xl font-semibold">{e.program}</h3>
                    <p className="mt-1 text-mute">{e.school}</p>
                    {e.status && (
                      <p className="mt-3 inline-flex items-center gap-2 rounded-md border border-amber-400/30 bg-amber-400/[0.07] px-2.5 py-1 font-mono text-[11px] text-amber-300">
                        Status: {e.status}
                      </p>
                    )}
                  </Reveal>
                </li>
              ))}
            </ol>
          </div>

          <div>
            <SectionHeader eyebrow="07 — Certifications" title="Certifications" className="!mb-10 sm:!mb-12" />
            <ul className="grid gap-3 sm:grid-cols-2">
              {certifications.map((c, i) => (
                <li key={c}>
                  <Reveal delay={i * 0.05} className="h-full">
                    <div className="flex h-full items-center gap-3 rounded-2xl border border-line bg-ink/[0.02] p-4 transition-all duration-300 hover:-translate-y-0.5 hover:border-accent/40">
                      <span className="grid h-9 w-9 shrink-0 place-items-center rounded-xl bg-accent/10 text-accent">
                        <Award size={17} />
                      </span>
                      <span className="text-sm font-medium text-ink">{c}</span>
                    </div>
                  </Reveal>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
