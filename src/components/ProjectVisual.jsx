// Abstract, original SVG visuals for each project. They are illustrative mockups only —
// no real screenshots, brand assets or data figures are implied.

const W = 600
const H = 400

function Frame({ id, children, a = '#B08A3E', b = '#B08A3E', bg = '#0D1117' }) {
  return (
    <svg
      viewBox={`0 0 ${W} ${H}`}
      className="h-full w-full"
      preserveAspectRatio="xMidYMid slice"
      role="img"
      aria-hidden="true"
    >
      <defs>
        <linearGradient id={`g-${id}`} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor={a} />
          <stop offset="1" stopColor={b} />
        </linearGradient>
        <radialGradient id={`r-${id}`} cx="0.5" cy="0.4" r="0.7">
          <stop offset="0" stopColor={a} stopOpacity="0.28" />
          <stop offset="1" stopColor={a} stopOpacity="0" />
        </radialGradient>
        <pattern id={`p-${id}`} width="32" height="32" patternUnits="userSpaceOnUse">
          <path d="M32 0H0V32" fill="none" stroke="rgba(255,255,255,0.05)" />
        </pattern>
      </defs>
      <rect width={W} height={H} fill={bg} />
      <rect width={W} height={H} fill={`url(#p-${id})`} />
      <rect width={W} height={H} fill={`url(#r-${id})`} />
      {children}
    </svg>
  )
}

const stroke = 'rgba(255,255,255,0.14)'

function Afcip() {
  const nodes = [
    [300, 190], [170, 110], [440, 100], [120, 250], [250, 310], [430, 265], [520, 190], [330, 70],
  ]
  const edges = [[0, 1], [0, 2], [0, 3], [0, 4], [0, 5], [2, 6], [5, 6], [1, 7], [7, 2], [3, 4]]
  return (
    <Frame id="afcip" a="#B08A3E" b="#B08A3E">
      {edges.map(([i, j], k) => (
        <line
          key={k}
          x1={nodes[i][0]}
          y1={nodes[i][1]}
          x2={nodes[j][0]}
          y2={nodes[j][1]}
          stroke="url(#g-afcip)"
          strokeOpacity="0.5"
          strokeDasharray="4 6"
          className="animate-dash"
        />
      ))}
      {nodes.map(([x, y], k) => (
        <g key={k}>
          <circle cx={x} cy={y} r={k === 0 ? 26 : 12} fill="#0D1117" stroke="url(#g-afcip)" strokeWidth="1.5" />
          <circle cx={x} cy={y} r={k === 0 ? 8 : 4} fill="url(#g-afcip)" />
        </g>
      ))}
      <circle cx="300" cy="190" r="46" fill="none" stroke="#B08A3E" strokeOpacity="0.25" />
      <circle cx="300" cy="190" r="70" fill="none" stroke="#B08A3E" strokeOpacity="0.12" />
      {/* shield */}
      <g transform="translate(52 40)">
        <rect width="132" height="34" rx="9" fill="rgba(17,24,39,0.9)" stroke={stroke} />
        <path d="M18 9l7 3v6c0 5-3 8-7 9-4-1-7-4-7-9v-6z" fill="none" stroke="#60A5FA" strokeWidth="1.6" />
        <rect x="36" y="12" width="70" height="4" rx="2" fill="rgba(255,255,255,0.35)" />
        <rect x="36" y="20" width="44" height="3" rx="1.5" fill="rgba(255,255,255,0.15)" />
      </g>
      <g transform="translate(420 322)">
        <rect width="132" height="34" rx="9" fill="rgba(17,24,39,0.9)" stroke={stroke} />
        <rect x="14" y="12" width="60" height="4" rx="2" fill="rgba(255,255,255,0.35)" />
        <rect x="14" y="20" width="90" height="3" rx="1.5" fill="rgba(255,255,255,0.15)" />
        <circle cx="112" cy="17" r="5" fill="#B08A3E" />
      </g>
    </Frame>
  )
}

function Nexe() {
  return (
    <Frame id="nexe" a="#B08A3E" b="#06B6D4">
      <rect x="70" y="60" width="460" height="280" rx="18" fill="rgba(17,24,39,0.92)" stroke={stroke} />
      <rect x="70" y="60" width="460" height="40" rx="18" fill="rgba(255,255,255,0.03)" />
      {[0, 1, 2].map((i) => (
        <circle key={i} cx={92 + i * 16} cy="80" r="4" fill="rgba(255,255,255,0.2)" />
      ))}
      {/* calendar column */}
      <g transform="translate(92 120)">
        {Array.from({ length: 4 }).map((_, r) =>
          Array.from({ length: 5 }).map((_, c) => (
            <rect
              key={`${r}-${c}`}
              x={c * 34}
              y={r * 34}
              width="28"
              height="28"
              rx="7"
              fill={r === 1 && c === 2 ? 'url(#g-nexe)' : 'rgba(255,255,255,0.05)'}
            />
          )),
        )}
      </g>
      {/* meeting list */}
      <g transform="translate(294 120)">
        {[0, 1, 2].map((i) => (
          <g key={i} transform={`translate(0 ${i * 62})`}>
            <rect width="212" height="50" rx="12" fill="rgba(255,255,255,0.04)" stroke={stroke} />
            <circle cx="24" cy="25" r="11" fill="url(#g-nexe)" opacity={1 - i * 0.2} />
            <circle cx="40" cy="25" r="11" fill="#0D1117" stroke="url(#g-nexe)" />
            <rect x="64" y="16" width="90" height="5" rx="2.5" fill="rgba(255,255,255,0.4)" />
            <rect x="64" y="28" width="60" height="4" rx="2" fill="rgba(255,255,255,0.15)" />
            <rect x="170" y="18" width="30" height="14" rx="7" fill="rgba(176,138,62,0.25)" />
          </g>
        ))}
      </g>
    </Frame>
  )
}

function Ecommerce() {
  return (
    <Frame id="ecom" a="#A8A29E" b="#B08A3E" bg="#0D1117">
      {/* concrete vessel */}
      <g transform="translate(120 70)">
        <path d="M30 40h110l14 190a14 14 0 0 1-14 14H30a14 14 0 0 1-14-14z" fill="url(#g-ecom)" opacity="0.9" />
        <ellipse cx="85" cy="40" rx="58" ry="12" fill="#1f2937" />
        <path d="M30 40h110" stroke="rgba(255,255,255,0.3)" />
      </g>
      {/* candle */}
      <g transform="translate(330 120)">
        <rect x="20" y="40" width="96" height="120" rx="12" fill="rgba(255,255,255,0.06)" stroke={stroke} />
        <rect x="64" y="14" width="3" height="30" rx="1.5" fill="rgba(255,255,255,0.5)" />
        <path d="M66 0c8 10 8 18 0 22-8-4-8-12 0-22z" fill="#F59E0B" opacity="0.9" />
      </g>
      {/* product tag */}
      <g transform="translate(400 52)">
        <rect width="130" height="38" rx="10" fill="rgba(17,24,39,0.92)" stroke={stroke} />
        <rect x="14" y="12" width="64" height="5" rx="2.5" fill="rgba(255,255,255,0.4)" />
        <rect x="14" y="23" width="40" height="4" rx="2" fill="rgba(255,255,255,0.15)" />
        <rect x="92" y="10" width="24" height="18" rx="6" fill="url(#g-ecom)" />
      </g>
      <rect x="120" y="332" width="360" height="1" fill="rgba(255,255,255,0.1)" />
    </Frame>
  )
}

function Health() {
  const pts = '40,250 100,250 125,250 145,170 170,310 195,210 215,250 300,250 330,250 350,200 372,280 392,250 560,250'
  return (
    <Frame id="health" a="#10B981" b="#B08A3E">
      <polyline points={pts} fill="none" stroke="url(#g-health)" strokeWidth="2.5" strokeLinejoin="round" strokeLinecap="round" />
      <polyline points={pts} fill="none" stroke="#10B981" strokeOpacity="0.2" strokeWidth="8" strokeLinejoin="round" />
      {[0, 1, 2].map((i) => (
        <g key={i} transform={`translate(${52 + i * 172} 60)`}>
          <rect width="156" height="70" rx="14" fill="rgba(17,24,39,0.92)" stroke={stroke} />
          <circle cx="30" cy="35" r="14" fill="none" stroke="url(#g-health)" strokeWidth="3" strokeDasharray={`${40 + i * 14} 100`} />
          <rect x="56" y="24" width="70" height="5" rx="2.5" fill="rgba(255,255,255,0.4)" />
          <rect x="56" y="37" width="46" height="4" rx="2" fill="rgba(255,255,255,0.15)" />
        </g>
      ))}
      <g transform="translate(52 320)">
        {[28, 52, 36, 66, 44, 74, 58].map((h, i) => (
          <rect key={i} x={i * 20} y={60 - h} width="12" height={h} rx="3" fill="url(#g-health)" opacity={0.35 + i * 0.08} />
        ))}
      </g>
    </Frame>
  )
}

function Fabric() {
  return (
    <Frame id="fabric" a="#F59E0B" b="#EF4444" bg="#0D1117">
      <defs>
        <pattern id="weave" width="14" height="14" patternUnits="userSpaceOnUse">
          <rect width="14" height="14" fill="#111827" />
          <path d="M0 7h14M7 0v14" stroke="rgba(255,255,255,0.10)" strokeWidth="3" />
          <path d="M0 0h7v7H0zM7 7h7v7H7z" fill="rgba(255,255,255,0.03)" />
        </pattern>
      </defs>
      <rect x="80" y="60" width="440" height="280" rx="14" fill="url(#weave)" stroke={stroke} />
      {/* scan line */}
      <rect x="80" y="180" width="440" height="2" fill="url(#g-fabric)" className="animate-pulseDot" />
      <rect x="80" y="150" width="440" height="60" fill="url(#g-fabric)" opacity="0.07" />
      {/* detection boxes */}
      <g fill="none" stroke="#F59E0B" strokeWidth="1.6">
        <rect x="170" y="110" width="64" height="44" rx="4" strokeDasharray="5 4" />
        <rect x="360" y="230" width="84" height="52" rx="4" strokeDasharray="5 4" />
      </g>
      <g>
        <rect x="170" y="94" width="44" height="14" rx="4" fill="#F59E0B" />
        <rect x="360" y="214" width="44" height="14" rx="4" fill="#F59E0B" />
      </g>
      {/* corner brackets */}
      <g stroke="rgba(255,255,255,0.4)" strokeWidth="2" fill="none">
        <path d="M80 90V60h30M520 90V60h-30M80 310v30h30M520 310v30h-30" />
      </g>
    </Frame>
  )
}

function CodesMinds() {
  return (
    <Frame id="cm" a="#A855F7" b="#7C3AED" bg="#0A0510">
      <circle cx="300" cy="200" r="130" fill="none" stroke="#A855F7" strokeOpacity="0.18" />
      <circle cx="300" cy="200" r="90" fill="none" stroke="#A855F7" strokeOpacity="0.28" />
      <circle cx="300" cy="200" r="52" fill="rgba(168,85,247,0.12)" stroke="#A855F7" strokeOpacity="0.6" />
      <text x="300" y="206" textAnchor="middle" fontFamily="JetBrains Mono, monospace" fontSize="30" fill="#E9D5FF" style={{ filter: 'drop-shadow(0 0 10px rgba(168,85,247,0.8))' }}>
        {'</>'}
      </text>
      {[[120, 90], [470, 110], [500, 280], [110, 300]].map(([x, y], i) => (
        <g key={i}>
          <rect x={x - 38} y={y - 16} width="76" height="32" rx="9" fill="rgba(124,58,237,0.16)" stroke="#A855F7" strokeOpacity="0.5" />
          <rect x={x - 24} y={y - 4} width="40" height="4" rx="2" fill="rgba(233,213,255,0.6)" />
          <rect x={x - 24} y={y + 4} width="24" height="3" rx="1.5" fill="rgba(233,213,255,0.25)" />
        </g>
      ))}
    </Frame>
  )
}

function Agency() {
  return (
    <Frame id="agency" a="#B08A3E" b="#64748B">
      <rect x="90" y="56" width="420" height="288" rx="16" fill="rgba(17,24,39,0.92)" stroke={stroke} />
      <rect x="90" y="56" width="420" height="34" rx="16" fill="rgba(255,255,255,0.03)" />
      <rect x="110" y="68" width="60" height="9" rx="4.5" fill="url(#g-agency)" />
      {[0, 1, 2].map((i) => (
        <rect key={i} x={360 + i * 42} y="70" width="30" height="5" rx="2.5" fill="rgba(255,255,255,0.25)" />
      ))}
      <rect x="116" y="116" width="220" height="14" rx="7" fill="rgba(255,255,255,0.55)" />
      <rect x="116" y="140" width="160" height="14" rx="7" fill="rgba(255,255,255,0.35)" />
      <rect x="116" y="172" width="120" height="30" rx="15" fill="url(#g-agency)" />
      {[0, 1, 2].map((i) => (
        <g key={i} transform={`translate(${116 + i * 130} 236)`}>
          <rect width="116" height="82" rx="12" fill="rgba(255,255,255,0.04)" stroke={stroke} />
          <circle cx="24" cy="24" r="9" fill="url(#g-agency)" opacity={1 - i * 0.2} />
          <rect x="14" y="46" width="70" height="5" rx="2.5" fill="rgba(255,255,255,0.35)" />
          <rect x="14" y="58" width="48" height="4" rx="2" fill="rgba(255,255,255,0.14)" />
        </g>
      ))}
      <rect x="360" y="108" width="126" height="106" rx="12" fill="rgba(176,138,62,0.1)" stroke="rgba(176,138,62,0.35)" />
    </Frame>
  )
}

const map = {
  afcip: Afcip,
  nexe: Nexe,
  ecommerce: Ecommerce,
  health: Health,
  fabric: Fabric,
  codesminds: CodesMinds,
  agency: Agency,
}

export default function ProjectVisual({ type }) {
  const V = map[type] || Agency
  return <V />
}
