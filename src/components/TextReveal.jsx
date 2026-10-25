import { motion } from 'framer-motion'

// Reveals text word by word. `lines` is an array of arrays of
// { text, className } segments so parts of a line can be styled.
export default function TextReveal({ lines, className = '', delay = 0, as = 'h1' }) {
  const Tag = motion[as] || motion.h1
  let i = 0
  return (
    <Tag className={className} aria-label={lines.map((l) => l.map((s) => s.text).join(' ')).join(' ')}>
      {lines.map((line, li) => (
        <span key={li} className="block" aria-hidden="true">
          {line.map((seg, si) =>
            seg.text.split(' ').map((word) => {
              const idx = i++
              return (
                <span key={`${li}-${si}-${idx}`} className="inline-block overflow-hidden pb-[0.12em] align-bottom">
                  <motion.span
                    className={`inline-block ${seg.className || ''}`}
                    initial={{ y: '110%' }}
                    animate={{ y: 0 }}
                    transition={{ duration: 0.8, delay: delay + idx * 0.07, ease: [0.22, 1, 0.36, 1] }}
                  >
                    {word}&nbsp;
                  </motion.span>
                </span>
              )
            }),
          )}
        </span>
      ))}
    </Tag>
  )
}
