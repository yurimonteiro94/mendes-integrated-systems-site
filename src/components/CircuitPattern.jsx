function CircuitPattern({ className = "" }) {
  return (
    <svg
      className={className}
      viewBox="0 0 520 360"
      fill="none"
      aria-hidden="true"
    >
      <g stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 42h82l28 28h96" />
        <path d="M0 96h120l32 32h122" />
        <path d="M24 156h82l40-40h156" />
        <path d="M0 226h92l36-36h92l32-32h86" />
        <path d="M42 300h108l42-42h140" />

        <path d="M218 70h70l34-34h112" />
        <path d="M274 128h86l44-44h98" />
        <path d="M338 190h72l38-38h62" />
        <path d="M332 258h78l42 42h56" />

        <circle cx="94" cy="42" r="7" />
        <circle cx="120" cy="96" r="7" />
        <circle cx="106" cy="156" r="7" />
        <circle cx="92" cy="226" r="7" />
        <circle cx="150" cy="300" r="7" />

        <circle cx="218" cy="70" r="7" />
        <circle cx="274" cy="128" r="7" />
        <circle cx="338" cy="190" r="7" />
        <circle cx="332" cy="258" r="7" />

        <circle cx="434" cy="36" r="7" />
        <circle cx="502" cy="84" r="7" />
        <circle cx="510" cy="152" r="7" />
        <circle cx="508" cy="300" r="7" />
      </g>
    </svg>
  )
}

export default CircuitPattern