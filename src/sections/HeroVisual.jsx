
import { useRef } from 'react'
import {
  motion,
  useMotionValue,
  useSpring,
  useTransform,
} from 'framer-motion'
import {
  Activity,
  ArrowUpRight,
  BrainCircuit,
  Code2,
  GitBranch,
  Layers3,
  Server,
  Sparkles,
  Workflow,
} from 'lucide-react'
import { heroTech, profile } from '../data/content'

const badgePos = [
  { top: '4%', left: '5%', d: 0 },
  { top: '10%', right: '1%', d: 0.8 },
  { top: '43%', left: '-4%', d: 1.6 },
  { top: '53%', right: '-4%', d: 0.4 },
  { bottom: '-4%', left: '8%', d: 1.2 },
  { bottom: '-5%', right: '8%', d: 2 },
]

const capabilities = [
  { icon: Code2, label: 'FULL-STACK', value: 'Web applications' },
  { icon: BrainCircuit, label: 'AI SOLUTIONS', value: 'Intelligent products' },
  { icon: Workflow, label: 'BUSINESS SYSTEMS', value: 'Practical automation' },
]

const techStack = ['React', 'Python', 'Django']

export default function HeroVisual() {
  const ref = useRef(null)
  const mx = useMotionValue(0)
  const my = useMotionValue(0)

  const sx = useSpring(mx, { stiffness: 120, damping: 22, mass: 0.5 })
  const sy = useSpring(my, { stiffness: 120, damping: 22, mass: 0.5 })

  const rotateY = useTransform(sx, [-0.5, 0.5], [-5, 5])
  const rotateX = useTransform(sy, [-0.5, 0.5], [4, -4])

  const onMove = (event) => {
    if (event.pointerType === 'touch' || !ref.current) return

    const rect = ref.current.getBoundingClientRect()
    mx.set((event.clientX - rect.left) / rect.width - 0.5)
    my.set((event.clientY - rect.top) / rect.height - 0.5)
  }

  const reset = () => {
    mx.set(0)
    my.set(0)
  }

  return (
    <div
      ref={ref}
      onPointerMove={onMove}
      onPointerLeave={reset}
      className="relative mx-auto w-full max-w-[520px] [perspective:1200px]"
    >
      {/* Ambient light */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -inset-12 -z-10 rounded-full blur-3xl"
        style={{
          background:
            'radial-gradient(circle at 35% 35%, rgba(176,138,62,0.24), rgba(176,138,62,0.14) 48%, transparent 72%)',
        }}
      />

      <motion.div
        style={{
          rotateX,
          rotateY,
          transformStyle: 'preserve-3d',
        }}
        initial={{ opacity: 0, y: 24, scale: 0.98 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{
          duration: 0.85,
          delay: 0.25,
          ease: [0.22, 1, 0.36, 1],
        }}
        className="panel relative overflow-hidden p-4 shadow-[0_40px_100px_-30px_rgba(0,0,0,0.85)] sm:p-6"
      >
        {/* Fine gradient detail */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-x-0 top-0 h-px"
          style={{
            background:
              'linear-gradient(90deg, transparent, rgba(96,165,250,0.8), rgba(167,139,250,0.7), transparent)',
          }}
        />

        {/* Window header */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-1.5" aria-hidden="true">
            <span className="h-2.5 w-2.5 rounded-full bg-rose-400/70" />
            <span className="h-2.5 w-2.5 rounded-full bg-amber-300/70" />
            <span className="h-2.5 w-2.5 rounded-full bg-emerald-400/70" />
          </div>

          <span className="font-mono text-[9px] uppercase tracking-[0.2em] text-mute sm:text-[10px]">
            umair.nasim / workspace
          </span>

          <Sparkles size={14} className="text-accent" />
        </div>

        {/* Profile card */}
        <div className="relative mt-5 overflow-hidden rounded-2xl border border-line bg-ink/[0.025] p-4 sm:mt-6 sm:p-5">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -right-12 -top-16 h-40 w-40 rounded-full blur-3xl"
            style={{
              background:
                'radial-gradient(circle, rgba(176,138,62,0.17), transparent 70%)',
            }}
          />

          <div className="relative flex items-start justify-between gap-3">
            <div>
              <p className="font-mono text-[9px] uppercase tracking-[0.22em] text-mute sm:text-[10px]">
                THE DEVELOPER
              </p>

              <h2 className="mt-3 font-display text-2xl font-semibold tracking-tight text-ink sm:text-3xl">
                Umair Nasim<span className="text-accent">.</span>
              </h2>

              <p className="mt-1.5 text-xs text-mute sm:text-sm">
                Full-Stack Developer & AI Builder
              </p>
            </div>

            <div className="grid h-11 w-11 shrink-0 place-items-center rounded-xl border border-accent/20 bg-accent/10 sm:h-12 sm:w-12">
              <Code2 size={22} className="text-accent" />
            </div>
          </div>

          <div className="relative mt-5 flex flex-wrap items-center justify-between gap-3 border-t border-line pt-4">
            <span className="flex items-center gap-2 font-mono text-[10px] text-mute">
              <span className="relative flex h-2 w-2">
                <span className="absolute h-full w-full animate-ping rounded-full bg-emerald-400/50" />
                <span className="relative h-2 w-2 rounded-full bg-emerald-400" />
              </span>
              BUILDING DIGITAL PRODUCTS
            </span>

            <span className="font-mono text-[10px] text-mute">
              {profile.locationShort}
            </span>
          </div>
        </div>

        {/* Capabilities */}
        <div className="mt-4 grid grid-cols-3 gap-2">
          {capabilities.map(({ icon: Icon, label, value }, index) => (
            <motion.div
              key={label}
              whileHover={{ y: -3, borderColor: 'rgba(96,165,250,0.4)' }}
              transition={{ duration: 0.2 }}
              className="min-w-0 rounded-xl border border-line bg-ink/[0.02] p-2.5 sm:p-3"
            >
              <Icon
                size={17}
                className={index === 1 ? 'text-accent2' : 'text-accent'}
              />

              <p className="mt-3 break-words font-mono text-[8px] leading-relaxed tracking-wider text-mute sm:text-[9px]">
                {label}
              </p>

              <p className="mt-1 text-[10px] font-medium leading-snug text-ink sm:text-xs">
                {value}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Connected product architecture */}
        <div className="relative mt-4 overflow-hidden rounded-2xl border border-line bg-bg/60 p-3.5 sm:p-4">
          <div className="flex items-center justify-between gap-2">
            <p className="font-mono text-[9px] uppercase tracking-[0.18em] text-mute sm:text-[10px]">
              Product architecture
            </p>
            <Layers3 size={14} className="text-accent2" />
          </div>

          <div className="relative mt-4 grid grid-cols-3 items-center gap-2">
            <div
              aria-hidden="true"
              className="pointer-events-none absolute left-[16%] right-[16%] top-5 h-px"
              style={{
                background:
                  'linear-gradient(90deg, rgba(176,138,62,0.7), rgba(176,138,62,0.7))',
              }}
            />

            {[
              { icon: GitBranch, label: 'INTERFACE' },
              { icon: Server, label: 'LOGIC & API' },
              { icon: Activity, label: 'DATA' },
            ].map(({ icon: Icon, label }, index) => (
              <motion.div
                key={label}
                initial={{ opacity: 0, y: 7 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 + index * 0.12, duration: 0.4 }}
                className="relative flex min-w-0 flex-col items-center gap-2"
              >
                <div className="grid h-10 w-10 place-items-center rounded-xl border border-line bg-card shadow-lg">
                  <Icon size={17} className="text-accent" />
                </div>

                <span className="text-center font-mono text-[8px] tracking-wider text-mute sm:text-[9px]">
                  {label}
                </span>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Technology and agency footer */}
        <div className="mt-4 flex flex-wrap items-center gap-2">
          {techStack.map((tech) => (
            <span key={tech} className="tag !text-[10px]">
              {tech}
            </span>
          ))}

          <span className="ml-auto inline-flex items-center gap-1 font-mono text-[9px] text-accent2 sm:text-[10px]">
            <span className="h-1.5 w-1.5 rounded-full bg-accent2" />
            CODES MINDS
            <ArrowUpRight size={11} />
          </span>
        </div>
      </motion.div>

      {/* Floating technology badges */}
      <ul
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 hidden sm:block"
      >
        {heroTech.slice(0, 6).map((tech, index) => (
          <motion.li
            key={tech}
            className="absolute"
            style={badgePos[index]}
            initial={{ opacity: 0, scale: 0.82, y: 8 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{
              delay: 0.8 + index * 0.1,
              duration: 0.45,
              ease: 'easeOut',
            }}
          >
            <span
              className="glass inline-flex animate-float items-center gap-2 rounded-full px-3 py-1.5 font-mono text-[10px] text-ink shadow-lg sm:text-[11px]"
              style={{ animationDelay: `${badgePos[index].d}s` }}
            >
              <span className="h-1.5 w-1.5 rounded-full bg-accent" />
              {tech}
            </span>
          </motion.li>
        ))}
      </ul>
    </div>
  )
}
