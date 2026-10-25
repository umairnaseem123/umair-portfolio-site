import { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { AnimatePresence, motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { navLinks, profile } from '../data/content'
import Magnetic from './Magnetic'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const [active, setActive] = useState('#home')
  const { pathname } = useLocation()
  const onHome = pathname === '/'

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Highlight the section currently in view (home page only).
  useEffect(() => {
    if (!onHome) return
    const els = navLinks.map((l) => document.querySelector(l.href)).filter(Boolean)
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive(`#${e.target.id}`)
        })
      },
      { rootMargin: '-40% 0px -55% 0px' },
    )
    els.forEach((el) => io.observe(el))
    return () => io.disconnect()
  }, [onHome])

  // Lock body scroll while the mobile menu is open; close on Escape.
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    const onKey = (e) => e.key === 'Escape' && setOpen(false)
    window.addEventListener('keydown', onKey)
    return () => {
      document.body.style.overflow = ''
      window.removeEventListener('keydown', onKey)
    }
  }, [open])

  const to = (href) => `/${href}`

  return (
    <>
      <header className="fixed inset-x-0 top-0 z-50 px-3 pt-3 sm:px-6 sm:pt-4">
        <nav
          aria-label="Primary"
          className={`mx-auto flex max-w-6xl items-center justify-between rounded-2xl px-4 py-2.5 transition-all duration-300 sm:px-5 ${
            scrolled ? 'glass shadow-[0_8px_30px_-14px_rgba(21,19,15,0.3)]' : 'border border-transparent bg-transparent'
          }`}
        >
          <Link to="/" className="flex items-center gap-2.5" aria-label="Umair Nasim — home">
            <span
              className="grid h-8 w-8 place-items-center rounded-lg text-[13px] font-bold"
              style={{ background: 'linear-gradient(135deg,#B08A3E,#B08A3E)' }}
            >
              U
            </span>
            <span className="font-display text-sm font-semibold tracking-[0.14em]">{profile.shortName}</span>
          </Link>

          <ul className="hidden items-center gap-1 lg:flex">
            {navLinks.map((l) => (
              <li key={l.href}>
                <Link
                  to={to(l.href)}
                  className={`link-underline rounded-lg px-3 py-2 text-sm transition-colors hover:text-ink ${
                    onHome && active === l.href ? 'text-ink' : 'text-mute'
                  }`}
                >
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-2">
            <div className="hidden sm:block">
              <Magnetic strength={0.2}>
                <Link to="/#contact" className="btn-primary !px-5 !py-2.5">
                  Let&apos;s Talk <ArrowRight size={15} />
                </Link>
              </Magnetic>
            </div>
            <button
              type="button"
              onClick={() => setOpen((o) => !o)}
              aria-expanded={open}
              aria-controls="mobile-menu"
              aria-label={open ? 'Close menu' : 'Open menu'}
              className="relative grid h-10 w-10 place-items-center rounded-xl border border-line bg-ink/[0.03] lg:hidden"
            >
              <span className="relative block h-3.5 w-5">
                <motion.span
                  className="absolute left-0 top-0 block h-px w-5 bg-ink"
                  animate={open ? { y: 7, rotate: 45 } : { y: 0, rotate: 0 }}
                />
                <motion.span
                  className="absolute left-0 top-[7px] block h-px w-5 bg-ink"
                  animate={open ? { opacity: 0 } : { opacity: 1 }}
                />
                <motion.span
                  className="absolute left-0 top-[14px] block h-px w-5 bg-ink"
                  animate={open ? { y: -7, rotate: -45 } : { y: 0, rotate: 0 }}
                />
              </span>
            </button>
          </div>
        </nav>
      </header>

      <AnimatePresence>
        {open && (
          <motion.div
            id="mobile-menu"
            className="fixed inset-0 z-40 flex flex-col overflow-y-auto bg-bg/95 px-6 pb-8 pt-24 backdrop-blur-xl lg:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
          >
            <ul className="flex flex-col">
              {navLinks.map((l, i) => (
                <motion.li
                  key={l.href}
                  initial={{ opacity: 0, y: 18 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.06 * i + 0.1, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                  className="border-b border-line"
                >
                  <Link
                    to={to(l.href)}
                    onClick={() => setOpen(false)}
                    className="flex items-center justify-between py-3.5 font-display text-3xl sm:py-5"
                  >
                    {l.label}
                    <span className="font-mono text-xs text-mute">0{i + 1}</span>
                  </Link>
                </motion.li>
              ))}
            </ul>
            <motion.div
              className="mt-auto pt-8"
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
            >
              <Link to="/#contact" onClick={() => setOpen(false)} className="btn-primary w-full">
                Let&apos;s Talk <ArrowRight size={16} />
              </Link>
              <p className="mt-5 text-center font-mono text-xs text-mute">{profile.email}</p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
