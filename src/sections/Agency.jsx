import { ArrowUpRight } from 'lucide-react'
import Reveal from '../components/Reveal'
import { agency } from '../data/content'

const GithubIcon = (props) => (
  <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor" aria-hidden="true" {...props}>
    <path d="M12 .5A11.5 11.5 0 0 0 .5 12c0 5.08 3.29 9.38 7.86 10.9.58.1.79-.25.79-.56v-2c-3.2.7-3.87-1.37-3.87-1.37-.52-1.33-1.28-1.69-1.28-1.69-1.04-.71.08-.7.08-.7 1.15.08 1.76 1.18 1.76 1.18 1.02 1.75 2.68 1.25 3.34.95.1-.74.4-1.25.72-1.54-2.55-.29-5.24-1.28-5.24-5.69 0-1.26.45-2.28 1.18-3.08-.12-.29-.51-1.46.11-3.05 0 0 .96-.31 3.15 1.18a10.9 10.9 0 0 1 5.74 0c2.19-1.49 3.15-1.18 3.15-1.18.62 1.59.23 2.76.11 3.05.74.8 1.18 1.82 1.18 3.08 0 4.42-2.69 5.39-5.25 5.68.41.36.78 1.06.78 2.14v3.17c0 .31.21.67.8.56A11.5 11.5 0 0 0 23.5 12 11.5 11.5 0 0 0 12 .5Z" />
  </svg>
)
const LinkedinIcon = (props) => (
  <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor" aria-hidden="true" {...props}>
    <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.03-3.04-1.85-3.04-1.86 0-2.14 1.45-2.14 2.94v5.67H9.34V9h3.42v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28ZM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12ZM7.12 20.45H3.56V9h3.56v11.45ZM22.22 0H1.77C.79 0 0 .77 0 1.73v20.54C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.73V1.73C24 .77 23.2 0 22.22 0Z" />
  </svg>
)

function SocialLink({ href, label, children }) {
  if (!href) return null
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      aria-label={label}
      className="grid h-10 w-10 place-items-center rounded-full border border-line text-ink transition-colors hover:border-accent hover:text-accent"
    >
      {children}
    </a>
  )
}

export default function Agency() {
  return (
    <section id="agency" className="section bg-bg2">
      <div className="container-x grid gap-14 lg:grid-cols-[1.05fr_0.95fr] lg:gap-20">
        <Reveal>
          <p className="eyebrow">The agency</p>
          <h2 className="h2 mt-4">
            {agency.name}, <span className="gradient-text">a digital agency.</span>
          </h2>
          <p className="mt-6 max-w-xl text-base leading-8 text-mute">
            Code Minds is a digital agency founded by Anosha Ansari. I collaborate with her remotely, and together we have
            completed projects for three clients, delivering websites and digital solutions tailored to their needs.
          </p>
          <ul className="mt-7 flex max-w-xl flex-wrap gap-2">
            {agency.services.map((s) => (
              <li key={s} className="tag">
                {s}
              </li>
            ))}
          </ul>
          <a href={agency.url} target="_blank" rel="noreferrer" className="btn-primary mt-9">
            Visit the agency site <ArrowUpRight size={16} />
          </a>
        </Reveal>

        <div className="space-y-4 self-center">
          {agency.team.map((m, i) => (
            <Reveal key={m.name} delay={i * 0.1}>
              <article className="panel flex items-center justify-between gap-4 p-6">
                <div className="flex items-center gap-4">
                  <div className="grid h-14 w-14 shrink-0 place-items-center rounded-full bg-ink font-display text-xl text-bg">
                    {m.name.split(' ').map((w) => w[0]).join('')}
                  </div>
                  <div>
                    <h3 className="font-display text-2xl leading-tight">{m.name}</h3>
                    <p className="mt-1 font-mono text-[11px] uppercase tracking-wider text-mute">{m.role}</p>
                  </div>
                </div>
                <div className="flex gap-2">
                  <SocialLink href={m.github} label={`${m.name} on GitHub`}>
                    <GithubIcon />
                  </SocialLink>
                  <SocialLink href={m.linkedin} label={`${m.name} on LinkedIn`}>
                    <LinkedinIcon />
                  </SocialLink>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
