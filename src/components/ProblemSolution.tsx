const problems = [
  {
    title: "Trees blocking light or growing too close to property?",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="h-6 w-6" aria-hidden>
        <path
          d="M12 2v20"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
        />
        <path
          d="M12 2c-4 4-4 8 0 12 4-4 4-8 0-12z"
          fill="currentColor"
          opacity="0.85"
        />
        <path
          d="M5 22h14"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
        />
      </svg>
    ),
  },
  {
    title: "Hedges too high, messy, or unsafe?",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="h-6 w-6" aria-hidden>
        <rect
          x="3"
          y="9"
          width="18"
          height="11"
          rx="1.5"
          fill="currentColor"
          opacity="0.85"
        />
        <path
          d="M5 9c0-2 2-3 4-2 1-2 4-2 5 0 1-1 3-1 4 0 1-1 2 0 2 2"
          stroke="currentColor"
          strokeWidth="1.75"
          strokeLinecap="round"
          fill="none"
        />
      </svg>
    ),
  },
  {
    title: "Garden becoming hard to manage?",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="h-6 w-6" aria-hidden>
        <path
          d="M3 21h18"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
        />
        <path
          d="M5 21c1-3 2-5 3-6m4 6c0-4 1-7 2-9m4 9c1-2 2-4 3-5"
          stroke="currentColor"
          strokeWidth="1.75"
          strokeLinecap="round"
        />
        <circle cx="8" cy="13" r="1.5" fill="currentColor" />
        <circle cx="14" cy="10" r="1.5" fill="currentColor" />
        <circle cx="18" cy="14" r="1.5" fill="currentColor" />
      </svg>
    ),
  },
] as const;

function OvergrownIllustration() {
  return (
    <svg
      viewBox="0 0 320 320"
      xmlns="http://www.w3.org/2000/svg"
      className="h-full w-full"
      aria-hidden
    >
      <defs>
        <linearGradient id="ps-bg" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#163630" />
          <stop offset="100%" stopColor="#0a1f1a" />
        </linearGradient>
        <radialGradient id="ps-glow" cx="0.5" cy="0.5" r="0.6">
          <stop offset="0%" stopColor="#d4a017" stopOpacity="0.35" />
          <stop offset="100%" stopColor="#d4a017" stopOpacity="0" />
        </radialGradient>
      </defs>

      <rect width="320" height="320" rx="28" fill="url(#ps-bg)" />
      <circle cx="220" cy="100" r="120" fill="url(#ps-glow)" />

      <g opacity="0.6">
        <path
          d="M40 60 Q50 50 55 60 M70 80 Q80 70 85 80 M100 50 Q110 40 115 50"
          stroke="#7cb342"
          strokeWidth="2"
          fill="none"
          strokeLinecap="round"
        />
      </g>

      <g>
        <ellipse cx="100" cy="150" rx="55" ry="70" fill="#1d483f" />
        <ellipse cx="80" cy="125" rx="35" ry="40" fill="#2a6b5e" />
        <ellipse cx="125" cy="120" rx="32" ry="36" fill="#558b2f" />
        <ellipse cx="100" cy="100" rx="28" ry="28" fill="#7cb342" />
        <rect x="94" y="200" width="12" height="40" fill="#3d2817" />
      </g>

      <g>
        <ellipse cx="220" cy="180" rx="50" ry="55" fill="#163630" />
        <ellipse cx="205" cy="160" rx="28" ry="30" fill="#1d483f" />
        <ellipse cx="240" cy="158" rx="26" ry="28" fill="#2a6b5e" />
        <rect x="215" y="225" width="10" height="35" fill="#3d2817" />
      </g>

      <g opacity="0.85">
        <path
          d="M0 250 Q40 240 80 248 T160 245 T240 248 T320 245 L320 280 L0 280 Z"
          fill="#102823"
        />
        <path
          d="M20 248 L22 240 M40 246 L42 236 M65 247 L67 238 M90 245 L92 234 M120 246 L122 237 M150 248 L152 239 M180 246 L182 235 M210 247 L212 238 M240 246 L242 237 M270 248 L272 239 M300 247 L302 238"
          stroke="#558b2f"
          strokeWidth="2"
          strokeLinecap="round"
        />
      </g>

      <rect x="0" y="275" width="320" height="45" fill="#0a1f1a" />

      <g opacity="0.7">
        <circle cx="280" cy="60" r="3" fill="#d4a017" />
        <circle cx="60" cy="40" r="2" fill="#7cb342" />
        <circle cx="160" cy="35" r="2" fill="#d4a017" opacity="0.7" />
      </g>

      <g transform="translate(50, 285) rotate(-15)">
        <ellipse rx="14" ry="3" fill="#558b2f" opacity="0.9" />
      </g>
      <g transform="translate(170, 290) rotate(8)">
        <ellipse rx="16" ry="3" fill="#7cb342" opacity="0.8" />
      </g>
      <g transform="translate(260, 287) rotate(-22)">
        <ellipse rx="12" ry="3" fill="#558b2f" opacity="0.85" />
      </g>
    </svg>
  );
}

export function ProblemSolution() {
  return (
    <section
      className="relative overflow-hidden bg-bark-100 py-20 sm:py-24"
      aria-labelledby="problem-heading"
    >
      <div className="pointer-events-none absolute inset-0 bg-grain opacity-20" />
      <div className="absolute -left-24 top-10 h-72 w-72 rounded-full bg-amber-warm/10 blur-3xl" />
      <div className="absolute -right-24 bottom-10 h-72 w-72 rounded-full bg-leaf/15 blur-3xl" />

      <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-14">
          <div className="lg:col-span-7">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-amber-warm">
              Sound familiar?
            </p>
            <h2
              id="problem-heading"
              className="mt-3 font-display text-3xl font-semibold leading-tight tracking-tight text-forest-900 sm:text-4xl lg:text-5xl"
            >
              Is your garden{" "}
              <span className="relative inline-block">
                <span className="relative z-10">out of control?</span>
                <span
                  className="absolute inset-x-0 bottom-1 -z-0 h-3 bg-amber-warm/40"
                  aria-hidden
                />
              </span>
            </h2>

            <ul className="mt-10 space-y-4">
              {problems.map((p) => (
                <li
                  key={p.title}
                  className="group flex items-center gap-4 rounded-2xl border border-forest-900/10 bg-white p-5 shadow-sm transition hover:-translate-y-0.5 hover:border-forest-700/30 hover:shadow-md"
                >
                  <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-forest-900 text-amber-warm transition group-hover:bg-forest-800">
                    {p.icon}
                  </span>
                  <span className="text-base font-medium text-forest-900 sm:text-lg">
                    {p.title}
                  </span>
                </li>
              ))}
            </ul>

            <div className="mt-10 rounded-2xl border-l-4 border-amber-warm bg-forest-900 p-6 text-bark-50 shadow-lg sm:p-7">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-amber-warm">
                The fix
              </p>
              <p className="mt-2 font-display text-xl font-semibold leading-snug sm:text-2xl">
                We safely restore your outdoor space so it looks{" "}
                <span className="text-leaf-light">clean, open,</span> and easy
                to maintain again.
              </p>
            </div>
          </div>

          <div className="relative lg:col-span-5">
            <div className="relative mx-auto aspect-square max-w-md">
              <div className="absolute -inset-3 rounded-[2rem] bg-gradient-to-br from-amber-warm/40 via-leaf/30 to-forest-700/40 blur-2xl" />
              <div className="relative h-full w-full overflow-hidden rounded-[1.75rem] shadow-2xl ring-1 ring-forest-900/20">
                <OvergrownIllustration />

                <div className="absolute left-4 top-4 rounded-full bg-forest-950/90 px-3 py-1.5 text-xs font-bold uppercase tracking-widest text-amber-warm backdrop-blur-sm">
                  The problem
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
