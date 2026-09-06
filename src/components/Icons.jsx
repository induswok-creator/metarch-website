const PATHS = {
  crosshair: (
    <>
      <circle cx="12" cy="12" r="7" />
      <path d="M12 2v3M12 19v3M2 12h3M19 12h3" />
      <circle cx="12" cy="12" r="1.6" fill="currentColor" stroke="none" />
    </>
  ),
  shield: (
    <>
      <path d="M12 3l7 3.4v5.1c0 4.4-2.9 7.6-7 9.5-4.1-1.9-7-5.1-7-9.5V6.4Z" />
      <path d="M9 12l2.2 2.2L15.5 10" />
    </>
  ),
  bolt: <path d="M13 2.5L5.5 13H10l-1 8.5L16.5 11H12l1-8.5Z" />,
  sliders: (
    <>
      <path d="M4 8h9M19 8h1M4 16h3M13 16h7" />
      <circle cx="16" cy="8" r="2.2" />
      <circle cx="10" cy="16" r="2.2" />
    </>
  ),
  heart: (
    <path d="M12 20.3C7.6 16.6 4 13.6 4 9.9 4 7.2 6 5.4 8.3 5.4c1.4 0 2.8.7 3.7 1.8.9-1.1 2.3-1.8 3.7-1.8C18 5.4 20 7.2 20 9.9c0 3.7-3.6 6.7-8 10.4Z" />
  ),
  pin: (
    <>
      <path d="M12 21c-4.4-4.1-7-7.5-7-10.9a7 7 0 0114 0c0 3.4-2.6 6.8-7 10.9Z" />
      <circle cx="12" cy="10" r="2.6" />
    </>
  ),
  leaf: (
    <>
      <path d="M20 4C10.5 5.5 5 10.5 5 20c9.5 0 14.5-5.5 15-16Z" />
      <path d="M5 20c2.5-5.5 6.5-9.5 12-12" />
    </>
  ),
  car: (
    <>
      <path d="M4 16l1.6-5.2A2 2 0 017.5 9.4h9a2 2 0 011.9 1.4L20 16v3.5h-2.6v-1.7H6.6v1.7H4Z" />
      <path d="M7 13.8h.01M17 13.8h.01" />
    </>
  ),
  chip: (
    <>
      <rect x="7" y="7" width="10" height="10" rx="1.6" />
      <path d="M9.5 2.5v3M14.5 2.5v3M9.5 18.5v3M14.5 18.5v3M2.5 9.5h3M2.5 14.5h3M18.5 9.5h3M18.5 14.5h3" />
    </>
  ),
  cross: <path d="M9.5 4h5v5.5H20v5h-5.5V20h-5v-5.5H4v-5h5.5Z" />,
  sign: (
    <>
      <rect x="3" y="4.5" width="18" height="10" rx="1.6" />
      <path d="M12 14.5V19M8.5 19h7" />
    </>
  ),
  gear: (
    <>
      <circle cx="12" cy="12" r="3.4" />
      <path d="M12 2.8v2.7M12 18.5v2.7M2.8 12h2.7M18.5 12h2.7M5.5 5.5l1.9 1.9M16.6 16.6l1.9 1.9M18.5 5.5l-1.9 1.9M7.4 16.6l-1.9 1.9" />
    </>
  ),
  check: <path d="M4.5 12.5l4.8 4.8L19.5 6.8" />,
  arrow: <path d="M4 12h15.5M14 6.5l5.5 5.5-5.5 5.5" />,
  plus: <path d="M12 5v14M5 12h14" />,
  clock: (
    <>
      <circle cx="12" cy="12" r="8.5" />
      <path d="M12 7v5l3.5 2" />
    </>
  ),
  mail: (
    <>
      <rect x="3" y="5.5" width="18" height="13" rx="2" />
      <path d="M3.5 7l8.5 6 8.5-6" />
    </>
  ),
  phone: (
    <path d="M6.8 3.5h2.9l1.4 4.2-2 1.5a12.5 12.5 0 005.7 5.7l1.5-2 4.2 1.4v2.9a2 2 0 01-2.2 2A16.5 16.5 0 014.8 5.7a2 2 0 012-2.2Z" />
  ),
};

export default function Icon({ name, className = 'h-6 w-6' }) {
  return (
    <svg
      viewBox="0 0 24 24"
      className={className}
      fill="none"
      stroke="currentColor"
      strokeWidth="1.7"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      {PATHS[name] || null}
    </svg>
  );
}
