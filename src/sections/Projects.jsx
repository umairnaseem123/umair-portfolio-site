import { Link } from 'react-router-dom'
import { ArrowUpRight } from 'lucide-react'
import Reveal from '../components/Reveal'
import BrowserFrame from '../components/BrowserFrame'
import { projects, secondaryProjects } from '../data/content'

function Row({ p, i }) {
  const flip = i % 2 === 1
  const chips = (p.tech.length ? p.tech : p.category.split('/').map((t) => t.trim())).slice(0, 5)
  const label = p.live ? p.live.replace(/^https?:\/\//, '').replace(/\/$/, '') : p.title.toLowerCase().replace(/\s+/g, '-')
  return (
    <Reveal className="grid items-center gap-8 border-t border-line py-14 lg:grid-cols-12 lg:gap-14 lg:py-20">
      <Link
        to={`/projects/${p.slug}`}
        className={`group block lg:col-span-7 ${flip ? 'lg:order-2' : ''}`}
        aria-label={`${p.title} case study`}
      >
        <div className="transition-transform duration-500 group-hover:-translate-y-1.5">
          <BrowserFrame src={p.image} alt={`${p.title} screenshot`} label={label} />
        </div>
      </Link>

      <div className={`lg:col-span-5 ${flip ? 'lg:order-1' : ''}`}>
        <p className="eyebrow">
          {p.number} — {p.category}
        </p>
        <h3 className="mt-4 font-display text-4xl leading-[1.05] sm:text-5xl">{p.title}</h3>
        <p className="mt-2 font-display text-lg italic text-mute">{p.subtitle}</p>
        <p className="mt-5 text-sm leading-7 text-mute">{p.description}</p>
        <ul className="mt-5 flex flex-wrap gap-2">
          {chips.map((t) => (
            <li key={t} className="tag">
              {t}
            </li>
          ))}
        </ul>
        <div className="mt-7 flex flex-wrap items-center gap-5 text-sm font-medium">
          <Link to={`/projects/${p.slug}`} className="link-underline inline-flex items-center gap-1.5">
            Read case study <ArrowUpRight size={15} />
          </Link>
          {(p.repos || (p.github ? [{ label: '', url: p.github }] : [])).map((r) => (
            <a key={r.url} href={r.url} target="_blank" rel="noreferrer" className="link-underline inline-flex items-center gap-1.5 text-mute hover:text-ink">
              GitHub{r.label ? ` (${r.label})` : ''} <ArrowUpRight size={15} />
            </a>
          ))}
          {p.live && (
            <a href={p.live} target="_blank" rel="noreferrer" className="link-underline inline-flex items-center gap-1.5 text-mute hover:text-ink">
              Live site <ArrowUpRight size={15} />
            </a>
          )}
        </div>
      </div>
    </Reveal>
  )
}

export default function Projects() {
  return (
    <section id="projects" className="section">
      <div className="container-x">
        <Reveal className="mb-6 flex flex-wrap items-end justify-between gap-6">
          <div>
            <p className="eyebrow">Selected work</p>
            <h2 className="h2 mt-4">Case studies</h2>
          </div>
          <p className="max-w-sm text-sm leading-7 text-mute">
            Real products, shown with real screenshots: fintech, healthcare, AI, hospitality and e-commerce.
          </p>
        </Reveal>

        {projects.map((p, i) => (
          <Row key={p.slug} p={p} i={i} />
        ))}

        <Reveal className="border-t border-line pt-12">
          <h3 className="font-display text-3xl">More work</h3>
          <ul className="mt-6 divide-y divide-line">
            {secondaryProjects.map((p) => (
              <li key={p.title} className="flex flex-wrap items-center justify-between gap-2 py-4 text-sm">
                <span className="font-medium">{p.title}</span>
                <span className="font-mono text-[11px] uppercase text-mute">{p.category}</span>
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  )
}
