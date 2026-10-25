
import { motion } from 'framer-motion'
import {
  ArrowUpRight,
  Code2,
  Layers3,
  BrainCircuit,
} from 'lucide-react'
import Reveal from '../components/Reveal'
import SectionHeader from '../components/SectionHeader'

const capabilities = [
  {
    number: '01',
    icon: Code2,
    title: 'Full-stack development',
    description:
      'Building complete digital experiences, from thoughtful interfaces to reliable application logic.',
    tags: ['React', 'TypeScript', 'Node.js'],
  },
  {
    number: '02',
    icon: BrainCircuit,
    title: 'AI-powered solutions',
    description:
      'Turning ambitious ideas into useful AI experiences designed around real problems.',
    tags: ['AI integration', 'Intelligent apps'],
  },
  {
    number: '03',
    icon: Layers3,
    title: 'Business systems',
    description:
      'Creating practical software that helps businesses manage workflows, information and operations.',
    tags: ['Dashboards', 'Management systems'],
  },
]

export default function About() {
  return (
    <section id="about" className="section relative overflow-hidden">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-0 top-40 h-72 w-72 rounded-full blur-[120px]"
        style={{ background: 'rgba(176,138,62,0.08)' }}
      />

      <div className="container-x relative">
        <SectionHeader
          eyebrow="01 / THE MIND BEHIND THE BUILD"
          title="The developer behind the products."
        />

        <div className="grid gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:gap-20">
          <div>
            <Reveal>
              <p className="max-w-2xl font-display text-2xl leading-[1.25] text-ink sm:text-3xl lg:text-[2.1rem]">
                I&apos;m Umair Nasim, a Full-Stack Developer based in Karachi, Pakistan, passionate about building modern web
                applications, AI-powered solutions, and digital products that solve real-world problems.
              </p>
            </Reveal>

            <Reveal delay={0.08}>
              <p className="mt-8 max-w-2xl text-base leading-8 text-mute">
                Currently, I work at Tafsol Software, developing across the React frontend and Python/Django backend. My journey began with self-directed learning and hands-on experimentation, evolving through internships, structured training, hackathons, and collaborative engineering projects.
              </p>
            </Reveal>

            <Reveal delay={0.16}>
              <p className="mt-5 max-w-2xl text-base leading-8 text-mute">
                My experience spans fintech, healthcare, artificial intelligence, e-commerce, and business management systems. I&apos;ve worked on an anti-financial-crime platform for UBL Hackathon 2026, developed AI HealthGuard for the Alibaba Cloud AI Hackathon Pakistan, and built full-stack applications focused on practical business needs. I approach every project with an emphasis on intuitive user experiences, thoughtful architecture, maintainable code, and reliable functionality.
              </p>
            </Reveal>

            <Reveal delay={0.24}>
              <p className="mt-5 max-w-2xl text-base leading-8 text-mute">
                Beyond my professional role, I collaborate with Anosha Ansari at Code Minds, a digital agency founded by her. Working remotely, we have completed projects for three clients, delivering websites and digital solutions tailored to their needs. This experience has allowed me to combine software engineering with client collaboration, project execution, and a deeper understanding of how technology can support business growth.
              </p>
            </Reveal>

            <Reveal delay={0.32}>
              <p className="mt-5 max-w-2xl text-base leading-8 text-mute">
                Alongside development, I teach Computer Science to Class 9 and 10 students and conduct a CIT course. Teaching has strengthened my ability to simplify complex concepts, communicate effectively, and approach technical challenges with clarity.
              </p>
            </Reveal>

            <Reveal delay={0.40}>
              <p className="mt-5 max-w-2xl text-base leading-8 text-mute">
                I believe great software goes beyond writing code. It requires understanding problems, designing thoughtful solutions, and building products that are reliable, useful, and ready to evolve. I&apos;m continuously learning, building, and refining my skills to turn ideas into meaningful digital experiences.
              </p>
            </Reveal>

            <Reveal delay={0.5}>
              <div className="mt-10 flex flex-wrap items-center justify-between gap-4 border-t border-line pt-6">
                <p className="font-display text-2xl italic text-accent sm:text-3xl">
                  Building with purpose. Engineering with impact.
                </p>
                <a
                  href="#projects"
                  className="group inline-flex items-center gap-2 text-sm font-medium text-ink transition-colors hover:text-accent"
                >
                  Explore my work
                  <ArrowUpRight
                    size={16}
                    className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                  />
                </a>
              </div>
            </Reveal>
          </div>

          <div className="space-y-4">
            {capabilities.map((item, index) => {
              const Icon = item.icon

              return (
                <Reveal key={item.number} delay={index * 0.12}>
                  <motion.article
                    whileHover={{ y: -4 }}
                    transition={{ duration: 0.25 }}
                    className="group relative overflow-hidden rounded-2xl border border-line bg-ink/[0.025] p-5 transition-colors duration-300 hover:border-accent/30 hover:bg-ink/[0.045] sm:p-6"
                  >
                    <div
                      aria-hidden="true"
                      className="pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-100"
                      style={{ background: 'rgba(176,138,62,0.13)' }}
                    />

                    <div className="relative">
                      <div className="flex items-start justify-between gap-4">
                        <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-line bg-ink/[0.04] text-accent">
                          <Icon size={20} strokeWidth={1.7} />
                        </div>
                        <span className="font-mono text-xs text-mute">
                          / {item.number}
                        </span>
                      </div>

                      <h3 className="mt-6 text-xl font-semibold tracking-tight text-ink sm:text-2xl">
                        {item.title}
                      </h3>

                      <p className="mt-3 max-w-md text-sm leading-7 text-mute sm:text-base">
                        {item.description}
                      </p>

                      <ul className="mt-5 flex flex-wrap gap-2">
                        {item.tags.map((tag) => (
                          <li key={tag} className="tag !text-xs">
                            {tag}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </motion.article>
                </Reveal>
              )
            })}

            <Reveal delay={0.38}>
              <div className="flex items-center justify-between gap-4 rounded-2xl border border-line px-5 py-4 sm:px-6">
                <div>
                  <p className="text-sm font-medium text-ink">
                    Building beyond the individual
                  </p>
                  <p className="mt-1 text-sm text-mute">
                    Collaborative work through Code Minds.
                  </p>
                </div>
                <ArrowUpRight size={20} className="shrink-0 text-accent" />
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  )
}
