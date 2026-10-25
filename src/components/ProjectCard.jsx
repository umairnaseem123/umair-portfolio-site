import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowUpRight, Github, ExternalLink } from 'lucide-react'
import ProjectVisual from './ProjectVisual'

export default function ProjectCard({ project, index = 0 }) {
  const { slug, number, title, subtitle, category, description, tech, github, live, featured, visual } = project

  return (
    <motion.article
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.7, delay: (index % 2) * 0.08, ease: [0.22, 1, 0.36, 1] }}
      whileHover={{ y: -6 }}
      className={`group relative isolate overflow-hidden rounded-[24px] border border-line transition-[border-color,box-shadow] duration-500 hover:border-accent/50 hover:shadow-[0_0_0_1px_rgba(176,138,62,0.25),0_30px_80px_-30px_rgba(176,138,62,0.45)] ${
        featured ? 'lg:col-span-2' : ''
      }`}
      style={{ background: 'linear-gradient(180deg,#111827,#0D1117)' }}
    >
      {/* shifting background gradient */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 opacity-0 transition-all duration-700 group-hover:opacity-100"
        style={{
          background:
            'radial-gradient(600px circle at 20% 0%, rgba(176,138,62,0.12), transparent 60%), radial-gradient(500px circle at 90% 100%, rgba(176,138,62,0.12), transparent 60%)',
        }}
      />

      <div className={featured ? 'grid lg:grid-cols-[1.15fr_1fr]' : 'flex flex-col'}>
        {/* visual */}
        <div
          className={`relative overflow-hidden ${
            featured ? 'aspect-[16/10] lg:aspect-auto lg:min-h-[440px]' : 'aspect-[16/10]'
          }`}
        >
          <div className="h-full w-full transition-transform duration-700 ease-out group-hover:scale-[1.06]">
            <ProjectVisual type={visual} />
          </div>
          <div
            aria-hidden="true"
            className="absolute inset-0 bg-gradient-to-t from-bg2/60 via-transparent to-transparent"
          />
          <span className="absolute left-5 top-5 rounded-md border border-line bg-bg/70 px-2.5 py-1 font-mono text-[11px] text-mute backdrop-blur">
            {number}
          </span>
          {featured && (
            <span className="absolute right-5 top-5 rounded-md border border-accent/40 bg-accent/10 px-2.5 py-1 font-mono text-[11px] uppercase tracking-widest text-accent backdrop-blur">
              Featured
            </span>
          )}
        </div>

        {/* body */}
        <div className="flex flex-col p-6 sm:p-8">
          <p className="eyebrow">{category}</p>
          <div className="mt-3 flex items-start justify-between gap-4">
            <div>
              <h3 className="font-display text-2xl font-semibold tracking-tight sm:text-3xl">
                <Link to={`/projects/${slug}`} className="after:absolute after:inset-0 after:z-0 after:content-['']">
                  {title}
                </Link>
              </h3>
              <p className="mt-1 text-sm text-mute">{subtitle}</p>
            </div>
            <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full border border-line text-mute transition-colors duration-300 group-hover:border-accent group-hover:text-accent">
              <ArrowUpRight
                size={18}
                className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
              />
            </span>
          </div>

          <p className="mt-5 text-[15px] leading-relaxed text-mute">{description}</p>

          {tech.length > 0 && (
            <ul className="mt-6 flex flex-wrap gap-2" aria-label="Technology stack">
              {tech.map((t, i) => (
                <li
                  key={t}
                  className="tag transition-all duration-300 group-hover:-translate-y-0.5 group-hover:border-accent/40 group-hover:text-ink"
                  style={{ transitionDelay: `${i * 40}ms` }}
                >
                  {t}
                </li>
              ))}
            </ul>
          )}

          {(github || live) && (
            <div className="relative z-10 mt-6 flex flex-wrap gap-3">
              {github && (
                <a href={github} target="_blank" rel="noreferrer" className="btn-ghost !px-4 !py-2">
                  <Github size={15} /> GitHub
                </a>
              )}
              {live && (
                <a href={live} target="_blank" rel="noreferrer" className="btn-primary !px-4 !py-2">
                  <ExternalLink size={15} /> Live Demo
                </a>
              )}
            </div>
          )}
        </div>
      </div>
    </motion.article>
  )
}
