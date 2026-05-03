function TechnicalIcon({ name, className = "" }) {
  const commonProps = {
    className,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "1.8",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    "aria-hidden": "true",
  }

  const icons = {
    chip: (
      <>
        <rect x="7" y="7" width="10" height="10" rx="2" />
        <path d="M4 9h3" />
        <path d="M4 15h3" />
        <path d="M17 9h3" />
        <path d="M17 15h3" />
        <path d="M9 4v3" />
        <path d="M15 4v3" />
        <path d="M9 17v3" />
        <path d="M15 17v3" />
        <rect x="10" y="10" width="4" height="4" rx="1" />
      </>
    ),

    code: (
      <>
        <path d="M9 8l-4 4 4 4" />
        <path d="M15 8l4 4-4 4" />
        <path d="M13 5l-2 14" />
      </>
    ),

    mobile: (
      <>
        <rect x="7" y="3" width="10" height="18" rx="2" />
        <path d="M11 18h2" />
        <path d="M10 6h4" />
      </>
    ),

    cloud: (
      <>
        <path d="M7 18h10a4 4 0 0 0 .6-7.96A6 6 0 0 0 6.2 8.5 4.5 4.5 0 0 0 7 18z" />
      </>
    ),

    monitor: (
      <>
        <rect x="3" y="4" width="18" height="12" rx="2" />
        <path d="M8 20h8" />
        <path d="M12 16v4" />
      </>
    ),

    database: (
      <>
        <ellipse cx="12" cy="6" rx="7" ry="3" />
        <path d="M5 6v6c0 1.7 3.1 3 7 3s7-1.3 7-3V6" />
        <path d="M5 12v6c0 1.7 3.1 3 7 3s7-1.3 7-3v-6" />
      </>
    ),

    chart: (
      <>
        <path d="M4 19V5" />
        <path d="M4 19h16" />
        <path d="M8 15l3-4 3 2 4-6" />
        <circle cx="8" cy="15" r="1" />
        <circle cx="11" cy="11" r="1" />
        <circle cx="14" cy="13" r="1" />
        <circle cx="18" cy="7" r="1" />
      </>
    ),

    sensor: (
      <>
        <circle cx="12" cy="12" r="3" />
        <path d="M12 3v3" />
        <path d="M12 18v3" />
        <path d="M3 12h3" />
        <path d="M18 12h3" />
        <path d="M5.6 5.6l2.1 2.1" />
        <path d="M16.3 16.3l2.1 2.1" />
        <path d="M18.4 5.6l-2.1 2.1" />
        <path d="M7.7 16.3l-2.1 2.1" />
      </>
    ),

    prototype: (
      <>
        <rect x="5" y="5" width="14" height="14" rx="2" />
        <path d="M9 9h6v6H9z" />
        <path d="M3 9h2" />
        <path d="M3 15h2" />
        <path d="M19 9h2" />
        <path d="M19 15h2" />
      </>
    ),

    automation: (
      <>
        <path d="M12 3v3" />
        <path d="M12 18v3" />
        <path d="M4.2 7.5l2.6 1.5" />
        <path d="M17.2 15l2.6 1.5" />
        <path d="M19.8 7.5 17.2 9" />
        <path d="M6.8 15l-2.6 1.5" />
        <circle cx="12" cy="12" r="4" />
        <path d="M12 10v2l1.5 1.5" />
      </>
    ),

    workflow: (
      <>
        <circle cx="6" cy="6" r="2" />
        <circle cx="18" cy="6" r="2" />
        <circle cx="12" cy="18" r="2" />
        <path d="M8 6h8" />
        <path d="M7.5 7.5 11 16" />
        <path d="M16.5 7.5 13 16" />
      </>
    ),

    document: (
      <>
        <path d="M7 3h7l4 4v14H7z" />
        <path d="M14 3v5h5" />
        <path d="M9 12h6" />
        <path d="M9 16h6" />
      </>
    ),

    tools: (
      <>
        <path d="M14.7 6.3a4 4 0 0 0-5 5L4 17l3 3 5.7-5.7a4 4 0 0 0 5-5l-3 3-3-3z" />
      </>
    ),
  }

  return <svg {...commonProps}>{icons[name] ?? icons.chip}</svg>
}

export default TechnicalIcon