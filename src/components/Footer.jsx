import { Link } from 'react-router-dom'
import { Github, Mail } from 'lucide-react'
import { footerLinks, profile } from '../data/content'

export default function Footer() {
  return (
    <footer className="dark-zone relative border-t border-line bg-bg">
      <div className="container-x py-14">
        <div className="grid gap-10 md:grid-cols-3 md:items-start">
          <div>
            <p className="font-display text-lg font-semibold tracking-[0.14em]">UMAIR NASIM</p>
            <p className="mt-2 font-mono text-[11px] uppercase tracking-[0.2em] text-mute">Full Stack Web Developer</p>
          </div>

          <nav aria-label="Footer" className="md:justify-self-center">
            <ul className="flex flex-wrap gap-x-6 gap-y-3 text-sm text-mute">
              {footerLinks.map((l) => (
                <li key={l.href}>
                  <Link to={`/${l.href}`} className="link-underline transition-colors hover:text-ink">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <ul className="flex gap-3 md:justify-self-end">
            <li>
              <a
                href={profile.github}
                target="_blank"
                rel="noreferrer"
                className="btn-ghost !px-4 !py-2.5"
              >
                <Github size={16} /> GitHub
              </a>
            </li>
            <li>
              <a href={`mailto:${profile.email}`} className="btn-ghost !px-4 !py-2.5">
                <Mail size={16} /> Email
              </a>
            </li>
          </ul>
        </div>

        <div className="mt-12 flex flex-col gap-3 border-t border-line pt-6 text-xs text-mute sm:flex-row sm:items-center sm:justify-between">
          <p>© 2026 Umair Nasim. All rights reserved.</p>
          <p className="font-mono">Designed &amp; Built with React</p>
        </div>
      </div>
    </footer>
  )
}
