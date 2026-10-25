import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'
import { GraduationCap } from 'lucide-react'
import Reveal from '../components/Reveal'
import SectionHeader from '../components/SectionHeader'
import { experience, teaching } from '../data/content'

export default function Experience() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start 70%', 'end 60%'] })
  const height = useTransform(scrollYProgress, [0, 1], ['0%', '100%'])

  return (
    <section id="experience" className="section bg-bg2/50">
      <div className="container-x">
        <SectionHeader eyebrow="02 — Experience" title="Experience" subtitle="Where I have been building and learning." />

        <div ref={ref} className="relative">
          {/* timeline rail */}
          <div aria-hidden="true" className="absolute bottom-0 left-[11px] top-2 w-px bg-line md:left-[19px]">
            <motion.div className="w-full origin-top bg-gradient-to-b from-accent to-accent2" style={{ height }} />
          </div>

          <ol className="space-y-10 sm:space-y-14">
            {experience.map((job, i) => (
              <li key={job.company} className="relative pl-10 md:pl-16">
                <span
                  aria-hidden="true"
                  className="absolute left-0 top-1.5 grid h-6 w-6 place-items-center rounded-full border border-accent/50 bg-bg md:left-2"
                >
                  <span className="h-2 w-2 rounded-full bg-accent" />
                </span>

                <Reveal delay={0.05}>
                  <div className="panel p-6 transition-colors duration-300 hover:border-accent/40 sm:p-8">
                    <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
                      <div>
                        <h3 className="font-display text-2xl font-semibold tracking-tight sm:text-3xl">{job.company}</h3>
                        <p className="mt-1 text-accent">{job.role}</p>
                      </div>
                      <div className="sm:text-right">
                        <p className="font-mono text-xs uppercase tracking-widest text-mute">{job.period}</p>
                        {job.meta && <p className="mt-1 font-mono text-xs text-mute/70">{job.meta}</p>}
                      </div>
                    </div>

                    <ul className="mt-6 grid gap-x-8 gap-y-2.5 text-[15px] text-mute sm:grid-cols-2">
                      {job.points.map((p) => (
                        <li key={p} className="flex gap-3">
                          <span aria-hidden="true" className="mt-2.5 h-px w-3 shrink-0 bg-accent/70" />
                          {p}
                        </li>
                      ))}
                    </ul>
                  </div>
                </Reveal>
              </li>
            ))}
          </ol>
        </div>

        {/* teaching — visually secondary */}
        <Reveal className="mt-16 sm:mt-24">
          <div className="rounded-2xl border border-line bg-ink/[0.015] p-6 sm:p-8">
            <div className="flex items-center gap-3">
              <GraduationCap size={18} className="text-mute" />
              <h3 className="font-display text-lg font-medium text-ink">Teaching experience</h3>
            </div>
            <ul className="mt-6 grid gap-4 sm:grid-cols-3">
              {teaching.map((t) => (
                <li key={t.school} className="border-l border-line pl-4">
                  <p className="text-sm font-medium text-ink">{t.school}</p>
                  <p className="mt-1 text-sm text-mute">{t.role}</p>
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
