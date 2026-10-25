import { useState } from 'react'
import { ArrowRight, Github, Mail, MapPin } from 'lucide-react'
import Reveal from '../components/Reveal'
import Magnetic from '../components/Magnetic'
import { profile, projectTypes } from '../data/content'

const field =
  'w-full rounded-xl border border-line bg-ink/[0.03] px-4 py-3 text-sm text-ink placeholder:text-mute/60 outline-none transition-colors focus:border-accent/70 focus:bg-ink/[0.05]'

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', type: projectTypes[0], message: '' })
  const [sent, setSent] = useState(false)

  const set = (k) => (e) => setForm((f) => ({ ...f, [k]: e.target.value }))

  // No backend: the form opens the visitor's email app with the message pre-filled.
  const onSubmit = (e) => {
    e.preventDefault()
    const subject = encodeURIComponent(`${form.type} — message from ${form.name}`)
    const body = encodeURIComponent(`${form.message}\n\n— ${form.name} (${form.email})`)
    window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`
    setSent(true)
  }

  return (
    <section id="contact" className="dark-zone section overflow-hidden">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            'radial-gradient(ellipse 70% 55% at 50% 100%, rgba(176,138,62,0.22), transparent 70%), radial-gradient(ellipse 45% 40% at 85% 90%, rgba(176,138,62,0.2), transparent 70%)',
        }}
      />
      <div className="container-x relative">
        <div className="grid gap-14 lg:grid-cols-[1fr_1fr] lg:gap-20">
          <div>
            <Reveal>
              <p className="eyebrow mb-4">08 — Contact</p>
            </Reveal>
            <Reveal delay={0.08}>
              <h2 className="font-display text-5xl font-semibold leading-[1.02] tracking-tight sm:text-6xl lg:text-7xl">
                Have an idea?
                <span className="gradient-text block">Let&apos;s build it.</span>
              </h2>
            </Reveal>
            <Reveal delay={0.16}>
              <p className="mt-6 max-w-lg text-base leading-relaxed text-mute sm:text-lg">
                Whether you&apos;re building a product, improving an existing platform, or looking for a developer to
                join your team — let&apos;s talk.
              </p>
            </Reveal>

            <Reveal delay={0.24}>
              <ul className="mt-10 space-y-4">
                <li>
                  <a
                    href={`mailto:${profile.email}`}
                    className="group flex items-center gap-4 rounded-2xl border border-line bg-ink/[0.02] p-4 transition-colors hover:border-accent/40"
                  >
                    <span className="grid h-11 w-11 place-items-center rounded-xl bg-accent/10 text-accent">
                      <Mail size={18} />
                    </span>
                    <span>
                      <span className="block font-mono text-[11px] uppercase tracking-widest text-mute">Email</span>
                      <span className="text-ink">{profile.email}</span>
                    </span>
                  </a>
                </li>
                <li className="flex items-center gap-4 rounded-2xl border border-line bg-ink/[0.02] p-4">
                  <span className="grid h-11 w-11 place-items-center rounded-xl bg-accent/10 text-accent">
                    <MapPin size={18} />
                  </span>
                  <span>
                    <span className="block font-mono text-[11px] uppercase tracking-widest text-mute">Location</span>
                    <span className="text-ink">{profile.location}</span>
                  </span>
                </li>
                <li>
                  <a
                    href={profile.github}
                    target="_blank"
                    rel="noreferrer"
                    className="group flex items-center gap-4 rounded-2xl border border-line bg-ink/[0.02] p-4 transition-colors hover:border-accent/40"
                  >
                    <span className="grid h-11 w-11 place-items-center rounded-xl bg-accent/10 text-accent">
                      <Github size={18} />
                    </span>
                    <span>
                      <span className="block font-mono text-[11px] uppercase tracking-widest text-mute">GitHub</span>
                      <span className="text-ink">{profile.githubLabel}</span>
                    </span>
                  </a>
                </li>
              </ul>
            </Reveal>
          </div>

          <Reveal delay={0.15}>
            <form onSubmit={onSubmit} className="panel space-y-5 p-6 shadow-[0_40px_100px_-40px_rgba(176,138,62,0.4)] sm:p-8">
              <div>
                <label htmlFor="c-name" className="mb-2 block text-sm text-mute">
                  Name
                </label>
                <input id="c-name" required autoComplete="name" value={form.name} onChange={set('name')} className={field} placeholder="Your name" />
              </div>
              <div>
                <label htmlFor="c-email" className="mb-2 block text-sm text-mute">
                  Email
                </label>
                <input
                  id="c-email"
                  type="email"
                  required
                  autoComplete="email"
                  value={form.email}
                  onChange={set('email')}
                  className={field}
                  placeholder="you@company.com"
                />
              </div>
              <div>
                <label htmlFor="c-type" className="mb-2 block text-sm text-mute">
                  Project Type
                </label>
                <select id="c-type" value={form.type} onChange={set('type')} className={`${field} appearance-none`}>
                  {projectTypes.map((t) => (
                    <option key={t} value={t} className="bg-card">
                      {t}
                    </option>
                  ))}
                </select>
              </div>
              <div>
                <label htmlFor="c-msg" className="mb-2 block text-sm text-mute">
                  Message
                </label>
                <textarea
                  id="c-msg"
                  required
                  rows={5}
                  value={form.message}
                  onChange={set('message')}
                  className={`${field} resize-none`}
                  placeholder="Tell me about your project..."
                />
              </div>

              <Magnetic className="w-full" strength={0.12}>
                <button type="submit" className="btn-primary w-full">
                  Start a Conversation <ArrowRight size={16} />
                </button>
              </Magnetic>
              <p role="status" className="min-h-[1.25rem] text-center text-xs text-mute">
                {sent
                  ? 'Your email app should open with the message ready to send.'
                  : 'This opens your email app with your message pre-filled.'}
              </p>
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
