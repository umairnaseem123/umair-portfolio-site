import { motion } from 'framer-motion'
import SectionHeader from '../components/SectionHeader'
import { process } from '../data/content'

export default function Process() {
  return (
    <section id="process" className="section">
      <div className="container-x">
        <SectionHeader eyebrow="05 — Approach" title="How I work" subtitle="A simple process that keeps projects clear and moving." />

        <ol className="relative grid gap-5 md:grid-cols-4">
          <div
            aria-hidden="true"
            className="absolute left-[27px] top-6 hidden h-px w-[calc(100%-54px)] bg-gradient-to-r from-accent/60 via-accent2/60 to-transparent md:block"
          />
          {process.map((s, i) => (
            <motion.li
              key={s.number}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.7, delay: i * 0.12, ease: [0.22, 1, 0.36, 1] }}
              className="relative"
            >
              <div className="relative z-10 grid h-14 w-14 place-items-center rounded-2xl border border-line bg-card font-mono text-sm text-accent">
                {s.number}
              </div>
              <h3 className="mt-6 font-display text-2xl font-semibold">{s.title}</h3>
              <p className="mt-3 text-[15px] leading-relaxed text-mute">{s.text}</p>
            </motion.li>
          ))}
        </ol>
      </div>
    </section>
  )
}
