import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import Reveal from '../components/Reveal'
import SectionHeader from '../components/SectionHeader'
import { skills } from '../data/content'

function Chip({ item }) {
  const [show, setShow] = useState(false)
  return (
    <li className="relative">
      <button
        type="button"
        onMouseEnter={() => setShow(true)}
        onMouseLeave={() => setShow(false)}
        onFocus={() => setShow(true)}
        onBlur={() => setShow(false)}
        onClick={() => setShow((s) => !s)}
        aria-describedby={show ? `tip-${item.name}` : undefined}
        className="rounded-xl border border-line bg-ink/[0.03] px-4 py-2.5 text-sm text-ink transition-all duration-300 hover:-translate-y-0.5 hover:border-accent/50 hover:bg-accent/[0.07]"
      >
        {item.name}
      </button>
      <AnimatePresence>
        {show && (
          <motion.div
            id={`tip-${item.name}`}
            role="tooltip"
            initial={{ opacity: 0, y: 6, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 4 }}
            transition={{ duration: 0.18 }}
            className="glass absolute bottom-full left-0 z-20 mb-2 w-60 rounded-xl p-3.5 text-left shadow-2xl"
          >
            <p className="font-mono text-[11px] uppercase tracking-widest text-accent">{item.name}</p>
            <p className="mt-1.5 text-[13px] leading-snug text-mute">{item.info}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </li>
  )
}

export default function Skills() {
  return (
    <section id="skills" className="section bg-bg2/50">
      <div className="container-x">
        <SectionHeader
          eyebrow="04 — Technology"
          title="Technology Stack"
          subtitle="The tools and technologies I work with. Hover or tap any item for context."
        />

        <div className="grid gap-5 md:grid-cols-2">
          {skills.map((group, gi) => (
            <Reveal key={group.category} delay={(gi % 2) * 0.08} className={gi === 0 ? 'md:col-span-2' : ''}>
              <div className="panel h-full p-6 sm:p-7">
                <div className="mb-5 flex items-center justify-between">
                  <h3 className="font-display text-lg font-semibold">{group.category}</h3>
                  <span className="font-mono text-[11px] text-mute">{String(group.items.length).padStart(2, '0')}</span>
                </div>
                <ul className="flex flex-wrap gap-2.5">
                  {group.items.map((item) => (
                    <Chip key={item.name} item={item} />
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
