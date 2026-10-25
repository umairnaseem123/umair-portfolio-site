import { useCallback, useEffect, useRef, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { ChevronLeft, ChevronRight, Download, Maximize2, X } from 'lucide-react'
import Reveal from '../components/Reveal'
import { certificates } from '../data/content'

function Lightbox({ index, onClose, onStep }) {
  const cert = certificates[index]
  const closeRef = useRef(null)

  useEffect(() => {
    closeRef.current?.focus()
    const onKey = (e) => {
      if (e.key === 'Escape') onClose()
      if (e.key === 'ArrowRight') onStep(1)
      if (e.key === 'ArrowLeft') onStep(-1)
    }
    document.addEventListener('keydown', onKey)
    const prev = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = prev
    }
  }, [onClose, onStep])

  return (
    <motion.div
      role="dialog"
      aria-modal="true"
      aria-label={`${cert.title} certificate`}
      className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-black/85 p-4 backdrop-blur-sm sm:p-8"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
    >
      <button
        ref={closeRef}
        type="button"
        onClick={onClose}
        aria-label="Close"
        className="absolute right-4 top-4 grid h-11 w-11 place-items-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/20"
      >
        <X size={20} />
      </button>

      <button
        type="button"
        onClick={(e) => {
          e.stopPropagation()
          onStep(-1)
        }}
        aria-label="Previous certificate"
        className="absolute left-2 top-1/2 grid h-11 w-11 -translate-y-1/2 place-items-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/20 sm:left-6"
      >
        <ChevronLeft size={22} />
      </button>
      <button
        type="button"
        onClick={(e) => {
          e.stopPropagation()
          onStep(1)
        }}
        aria-label="Next certificate"
        className="absolute right-2 top-1/2 grid h-11 w-11 -translate-y-1/2 place-items-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/20 sm:right-6"
      >
        <ChevronRight size={22} />
      </button>

      <motion.img
        key={cert.image}
        src={cert.image}
        alt={`${cert.title} certificate`}
        className="max-h-[78vh] max-w-full rounded-md bg-white object-contain shadow-2xl sm:max-w-[min(1100px,86vw)]"
        initial={{ opacity: 0, scale: 0.97 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.25 }}
        onClick={(e) => e.stopPropagation()}
      />

      <div className="mt-4 text-center text-white" onClick={(e) => e.stopPropagation()}>
        <p className="font-display text-xl sm:text-2xl">{cert.title}</p>
        <p className="mt-1 text-xs text-white/70 sm:text-sm">
          {cert.issuer} · {cert.date}
        </p>
        <div className="mt-3 flex items-center justify-center gap-4 text-xs text-white/60">
          <span>
            {index + 1} / {certificates.length}
          </span>
          {cert.file && (
            <a href={cert.file} target="_blank" rel="noreferrer" className="inline-flex items-center gap-1.5 text-white hover:underline">
              <Download size={14} /> Open PDF
            </a>
          )}
        </div>
      </div>
    </motion.div>
  )
}

export default function Certificates() {
  const [open, setOpen] = useState(null)
  const close = useCallback(() => setOpen(null), [])
  const step = useCallback((d) => setOpen((i) => (i === null ? i : (i + d + certificates.length) % certificates.length)), [])

  return (
    <section id="certificates" className="section bg-bg2">
      <div className="container-x">
        <Reveal className="mb-12 flex flex-wrap items-end justify-between gap-6">
          <div>
            <p className="eyebrow">Proof</p>
            <h2 className="h2 mt-4">Certificates</h2>
          </div>
          <p className="max-w-sm text-sm leading-7 text-mute">
            {certificates.length} certificates: internships, a hackathon and professional training. Click any one to view it in full.
          </p>
        </Reveal>

        <ul className="grid gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
          {certificates.map((c, i) => (
            <Reveal as="li" key={c.image} delay={(i % 3) * 0.07}>
              <button type="button" onClick={() => setOpen(i)} className="group block w-full text-left" aria-label={`View ${c.title} certificate`}>
                <div className="relative overflow-hidden rounded-lg border border-line bg-card shadow-[0_24px_50px_-34px_rgba(21,19,15,0.45)]">
                  <img src={c.image} alt={`${c.title} certificate`} loading="lazy" className="block aspect-[1.42/1] w-full object-cover object-top transition-transform duration-500 group-hover:scale-[1.03]" />
                  <span className="absolute right-3 top-3 bg-ink px-2 py-1 font-mono text-[9px] uppercase text-bg">{c.type}</span>
                  <span className="absolute bottom-3 right-3 grid h-9 w-9 place-items-center rounded-full bg-bg/90 text-ink opacity-0 transition-opacity group-hover:opacity-100">
                    <Maximize2 size={15} />
                  </span>
                </div>
                <h3 className="mt-4 font-display text-xl leading-tight">{c.title}</h3>
                <p className="mt-1 text-xs leading-5 text-mute">
                  {c.issuer} · {c.date}
                </p>
              </button>
            </Reveal>
          ))}
        </ul>
      </div>

      <AnimatePresence>{open !== null && <Lightbox key="lb" index={open} onClose={close} onStep={step} />}</AnimatePresence>
    </section>
  )
}
