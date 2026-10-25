import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'
import Magnetic from '../components/Magnetic'
import { projects } from '../data/content'


export default function Hero() {
  return (
    <section id="home" className="relative overflow-hidden pb-20 pt-32 sm:pb-28 sm:pt-40">
      <div aria-hidden="true" className="bg-grid pointer-events-none absolute inset-0" />

      <div className="container-x relative grid items-center gap-14 lg:grid-cols-[1.05fr_0.95fr] lg:gap-10">
        <div>
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="eyebrow flex items-center gap-3"
          >
            <span className="h-px w-8 bg-accent" /> Full Stack Web Developer · Karachi
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 26 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="mt-6 font-display text-[2.9rem] leading-[1.02] sm:text-6xl lg:text-[4.7rem]"
          >
            Full-stack products, <span className="gradient-text">built with care.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.45 }}
            className="mt-7 max-w-lg text-base leading-8 text-mute"
          >
            I&apos;m Umair Nasim. I design and build React and Django applications, from fintech platforms to AI health tools,
            and I teach computer science alongside my engineering work.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.6 }}
            className="mt-9 flex flex-wrap items-center gap-3"
          >
            <Magnetic>
              <Link to="/#projects" className="btn-primary">
                View case studies <ArrowUpRight size={16} />
              </Link>
            </Magnetic>
            <Magnetic>
              <Link to="/#contact" className="btn-ghost">
                Get in touch
              </Link>
            </Magnetic>
          </motion.div>

          <dl className="mt-12 grid max-w-lg grid-cols-3 gap-6 border-t border-line pt-6">
            {[
              ['React + Django', 'primary stack'],
              ['AI & Healthcare', 'focus area'],
              [`${projects.length} projects`, 'with case studies'],
            ].map(([a, b]) => (
              <div key={a}>
                <dt className="font-display text-lg leading-tight sm:text-xl">{a}</dt>
                <dd className="mt-1 font-mono text-[10px] uppercase tracking-wider text-mute">{b}</dd>
              </div>
            ))}
          </dl>
        </div>

        {/* Portrait arch: put your photo at /public/me.jpg */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
          className="relative mx-auto h-[480px] w-full max-w-[400px] sm:h-[580px] sm:max-w-[440px]"
        >
          <div className="absolute inset-0 translate-x-3 translate-y-3 rounded-t-full border border-accent/50" aria-hidden="true" />
          <div className="absolute inset-0 overflow-hidden rounded-t-full border border-line bg-bg2">
            <span aria-hidden="true" className="absolute inset-0 grid place-items-center font-display text-8xl text-ink/10">
              UN
            </span>
            <img
              src="/me.jpg"
              alt="Umair Nasim"
              className="relative h-full w-full object-cover object-top"
              onError={(e) => {
                e.currentTarget.style.display = 'none'
              }}
            />
          </div>
        </motion.div>
      </div>
    </section>
  )
}
