// Real screenshot inside a minimal browser frame.
export default function BrowserFrame({ src, alt, label, ratio = '', className = '' }) {
  return (
    <div
      className={`overflow-hidden rounded-xl border border-line bg-card shadow-[0_34px_70px_-36px_rgba(21,19,15,0.5)] ${className}`}
    >
      <div className="flex items-center gap-1.5 border-b border-line px-3 py-2.5">
        <span className="h-2 w-2 rounded-full bg-ink/20" />
        <span className="h-2 w-2 rounded-full bg-ink/20" />
        <span className="h-2 w-2 rounded-full bg-ink/20" />
        {label && <span className="ml-3 truncate font-mono text-[10px] text-mute">{label}</span>}
      </div>
      <img src={src} alt={alt} loading="lazy" className={`block h-auto w-full ${ratio}`} />
    </div>
  )
}
