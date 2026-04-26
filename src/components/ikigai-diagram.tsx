"use client";

// Mindvalley design tokens - purple palette on dark surface
const MV = {
  purple:      "#7a12d4",
  purpleLight: "#c084fc",  // 7.1:1 on black ✅
  purpleDim:   "rgba(122, 18, 212, 0.18)",
  purpleStroke:"rgba(192, 132, 252, 0.55)",
  textOnDark:  "rgba(255, 255, 255, 0.85)",
  textMuted:   "rgba(255, 255, 255, 0.45)",
} as const;

export default function IkigaiDiagram() {
  // Diamond layout: top, right, bottom, left
  // Center: (270, 270), radius: 112, offset from center: 100
  const cx = 270, cy = 270, r = 112, off = 100;

  return (
    <svg
      viewBox="30 30 480 480"
      width="100%"
      className="max-w-md mx-auto block"
      role="img"
      aria-label="Ikigai диаграма - четири пресичащи се кръга"
    >
      {/* Purple radial glow at center */}
      <defs>
        <radialGradient id="mv-glow" cx="50%" cy="50%" r="50%">
          <stop offset="0%"   stopColor="#7a12d4" stopOpacity="0.35" />
          <stop offset="60%"  stopColor="#7a12d4" stopOpacity="0.08" />
          <stop offset="100%" stopColor="#7a12d4" stopOpacity="0" />
        </radialGradient>
        <radialGradient id="mv-center" cx="50%" cy="50%" r="50%">
          <stop offset="0%"   stopColor="#c084fc" stopOpacity="0.3" />
          <stop offset="100%" stopColor="#7a12d4" stopOpacity="0" />
        </radialGradient>
      </defs>

      {/* Background glow */}
      <circle cx={cx} cy={cy} r="160" fill="url(#mv-glow)" />

      {/* Four overlapping circles */}
      {[
        { x: cx,       y: cy - off }, // top
        { x: cx + off, y: cy       }, // right
        { x: cx,       y: cy + off }, // bottom
        { x: cx - off, y: cy       }, // left
      ].map((c, i) => (
        <circle
          key={i}
          cx={c.x}
          cy={c.y}
          r={r}
          fill={MV.purpleDim}
          stroke={MV.purpleStroke}
          strokeWidth="1"
        />
      ))}

      {/* Center highlight */}
      <circle cx={cx} cy={cy} r="42" fill="url(#mv-center)" />
      <circle
        cx={cx}
        cy={cy}
        r="42"
        fill="none"
        stroke="rgba(192,132,252,0.5)"
        strokeWidth="1"
      />

      {/* Center label - IKIGAI */}
      <text
        x={cx}
        y={cy - 5}
        textAnchor="middle"
        fill={MV.purpleLight}
        fontSize="13"
        fontFamily="var(--font-mv, sans-serif)"
        fontWeight="800"
        letterSpacing="3"
      >
        IKIGAI
      </text>
      <text
        x={cx}
        y={cy + 12}
        textAnchor="middle"
        fill={MV.textMuted}
        fontSize="8"
        fontFamily="var(--font-mv, sans-serif)"
        letterSpacing="1"
      >
        смисъл на живота
      </text>

      {/* Intersection labels */}
      {[
        { label: "СТРАСТ",    x: cx + 54, y: cy - 50 },
        { label: "ПРОФЕСИЯ",  x: cx + 54, y: cy + 60 },
        { label: "ПРИЗВАНИЕ", x: cx - 54, y: cy + 60 },
        { label: "МИСИЯ",     x: cx - 54, y: cy - 50 },
      ].map((i) => (
        <text
          key={i.label}
          x={i.x}
          y={i.y}
          textAnchor="middle"
          fill={MV.purpleLight}
          fontSize="8"
          fontFamily="var(--font-mv, sans-serif)"
          fontWeight="700"
          letterSpacing="1.5"
          opacity="0.9"
        >
          {i.label}
        </text>
      ))}

      {/* Outer labels - outside each circle */}
      {/* Top: Обичаш */}
      <text
        x={cx}
        y={cy - off - r - 16}
        textAnchor="middle"
        fill={MV.textOnDark}
        fontSize="13"
        fontFamily="var(--font-mv, sans-serif)"
        fontWeight="600"
      >
        Обичаш
      </text>
      <text
        x={cx}
        y={cy - off - r - 2}
        textAnchor="middle"
        fill={MV.textMuted}
        fontSize="9"
        fontFamily="var(--font-mv, sans-serif)"
      >
        what you love
      </text>

      {/* Right: В което си добър */}
      <text
        x={cx + off + r + 14}
        y={cy - 8}
        textAnchor="start"
        fill={MV.textOnDark}
        fontSize="12"
        fontFamily="var(--font-mv, sans-serif)"
        fontWeight="600"
      >
        В което
      </text>
      <text
        x={cx + off + r + 14}
        y={cy + 7}
        textAnchor="start"
        fill={MV.textOnDark}
        fontSize="12"
        fontFamily="var(--font-mv, sans-serif)"
        fontWeight="600"
      >
        си добър
      </text>
      <text
        x={cx + off + r + 14}
        y={cy + 22}
        textAnchor="start"
        fill={MV.textMuted}
        fontSize="9"
        fontFamily="var(--font-mv, sans-serif)"
      >
        what you&apos;re good at
      </text>

      {/* Bottom: Платено */}
      <text
        x={cx}
        y={cy + off + r + 22}
        textAnchor="middle"
        fill={MV.textOnDark}
        fontSize="13"
        fontFamily="var(--font-mv, sans-serif)"
        fontWeight="600"
      >
        Платено
      </text>
      <text
        x={cx}
        y={cy + off + r + 36}
        textAnchor="middle"
        fill={MV.textMuted}
        fontSize="9"
        fontFamily="var(--font-mv, sans-serif)"
      >
        what you&apos;re paid for
      </text>

      {/* Left: Нужда */}
      <text
        x={cx - off - r - 14}
        y={cy - 8}
        textAnchor="end"
        fill={MV.textOnDark}
        fontSize="12"
        fontFamily="var(--font-mv, sans-serif)"
        fontWeight="600"
      >
        Нужда
      </text>
      <text
        x={cx - off - r - 14}
        y={cy + 7}
        textAnchor="end"
        fill={MV.textOnDark}
        fontSize="12"
        fontFamily="var(--font-mv, sans-serif)"
        fontWeight="600"
      >
        на света
      </text>
      <text
        x={cx - off - r - 14}
        y={cy + 22}
        textAnchor="end"
        fill={MV.textMuted}
        fontSize="9"
        fontFamily="var(--font-mv, sans-serif)"
      >
        what world needs
      </text>
    </svg>
  );
}
