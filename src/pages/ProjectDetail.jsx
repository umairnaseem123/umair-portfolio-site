import { useEffect } from 'react'
import { Link, Navigate, useParams } from 'react-router-dom'
import { ArrowLeft, ArrowRight, ExternalLink, Github } from 'lucide-react'
import ProjectVisual from '../components/ProjectVisual'
import Reveal from '../components/Reveal'
import { projects } from '../data/content'

function Block({ label, children }) {
  return (
    <Reveal>
      <section className="grid gap-4 border-t border-line py-10 md:grid-cols-[200px_1fr] md:gap-10">
        <h2 className="font-mono text-[11px] uppercase tracking-[0.2em] text-accent">{label}</h2>
        <div>{children}</div>
      </section>
    </Reveal>
  )
}

export default function ProjectDetail() {
  const { slug } = useParams()
  const index = projects.findIndex((p) => p.slug === slug)
  const project = projects[index]

  useEffect(() => {
    if (project) document.title = `${project.title} — Umair Nasim`
    return () => {
      document.title = 'Umair Nasim — Full Stack Web Developer'
    }
  }, [project])

  if (!project) return <Navigate to="/" replace />

  const next = projects[(index + 1) % projects.length]
  const { title, subtitle, category, number, description, tech, features, featuresLabel, deployment, github, repos, live, visual, image } = project

  return (
    <article className="relative pb-24 pt-32 sm:pt-40">
      <div aria-hidden="true" className="bg-grid pointer-events-none absolute inset-x-0 top-0 h-[560px]" />
      <div className="container-x relative">
        <Link to="/#projects" className="link-underline inline-flex items-center gap-2 text-sm text-mute hover:text-ink">
          <ArrowLeft size={15} /> All projects
        </Link>

        <header className="mt-8 max-w-4xl">
          <p className="eyebrow">
            {number} — {category}
          </p>
          <h1 className="mt-4 font-display text-5xl font-semibold leading-[1.02] tracking-tight sm:text-6xl lg:text-7xl">
            {title}
          </h1>
          <p className="mt-4 text-lg text-mute sm:text-xl">{subtitle}</p>

          {(github || repos || live) && (
            <div className="mt-8 flex flex-wrap gap-3">
              {(repos || (github ? [{ label: '', url: github }] : [])).map((r) => (
                <a key={r.url} href={r.url} target="_blank" rel="noreferrer" className="btn-ghost">
                  <Github size={16} /> GitHub{r.label ? ` · ${r.label}` : ''}
                </a>
              ))}
              {live && (
                <a href={live} target="_blank" rel="noreferrer" className="btn-primary">
                  <ExternalLink size={16} /> Live Demo
                </a>
              )}
            </div>
          )}
        </header>

        <div className="mt-12 aspect-[16/9] overflow-hidden rounded-[24px] border border-line sm:mt-16">
          {image ? (
            <img src={image} alt={`${title} screenshot`} className="h-full w-full object-cover object-top" />
          ) : (
            <ProjectVisual type={visual} />
          )}
        </div>

        <div className="mt-16 sm:mt-20">
          <Block label="Overview">
            <p className="max-w-2xl text-lg leading-relaxed text-ink/90">{description}</p>
          </Block>

          {tech.length > 0 && (
            <Block label="Technology">
              <ul className="flex flex-wrap gap-2.5">
                {tech.map((t) => (
                  <li key={t} className="rounded-xl border border-line bg-ink/[0.03] px-4 py-2 text-sm text-ink">
                    {t}
                  </li>
                ))}
              </ul>
            </Block>
          )}

          {features.length > 0 && (
            <Block label={featuresLabel || 'Features'}>
              <ul className="grid gap-x-8 gap-y-3 text-mute sm:grid-cols-2">
                {features.map((f) => (
                  <li key={f} className="flex gap-3">
                    <span aria-hidden="true" className="mt-3 h-px w-3 shrink-0 bg-accent/70" />
                    {f}
                  </li>
                ))}
              </ul>
            </Block>
          )}

          {deployment.length > 0 && (
            <Block label="Deployment">
              <ul className="grid gap-3 sm:grid-cols-2">
                {deployment.map((d) => (
                  <li key={`${d.part}-${d.where}`} className="rounded-2xl border border-line bg-ink/[0.02] p-4">
                    <p className="font-mono text-[11px] uppercase tracking-widest text-mute">{d.part}</p>
                    <p className="mt-1 text-ink">{d.where}</p>
                  </li>
                ))}
              </ul>
            </Block>
          )}

        </div>

        <Link
          to={`/projects/${next.slug}`}
          className="group mt-8 flex items-center justify-between gap-6 rounded-[24px] border border-line bg-ink/[0.02] p-6 transition-colors hover:border-accent/40 sm:p-8"
        >
          <span>
            <span className="block font-mono text-[11px] uppercase tracking-widest text-mute">Next project</span>
            <span className="mt-2 block font-display text-2xl font-semibold sm:text-3xl">{next.title}</span>
          </span>
          <ArrowRight className="shrink-0 transition-transform duration-300 group-hover:translate-x-1" />
        </Link>
      </div>
    </article>
  )
}
