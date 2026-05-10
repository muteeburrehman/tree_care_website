const trustPoints = [
  {
    title: "Fully insured",
    body: "Every tree surgery job carries full insurance for peace of mind.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="h-6 w-6" aria-hidden>
        <path
          d="M12 3l8 3v6c0 4.5-3.4 8.4-8 9-4.6-.6-8-4.5-8-9V6l8-3z"
          stroke="currentColor"
          strokeWidth="1.75"
          strokeLinejoin="round"
        />
        <path
          d="M9 12l2 2 4-4"
          stroke="currentColor"
          strokeWidth="1.75"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
  {
    title: "Local South Wales operator",
    body: "Independent local service — we know the area and stand by our work.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="h-6 w-6" aria-hidden>
        <path
          d="M12 21s7-6.5 7-12a7 7 0 10-14 0c0 5.5 7 12 7 12z"
          stroke="currentColor"
          strokeWidth="1.75"
          strokeLinejoin="round"
        />
        <circle cx="12" cy="9" r="2.5" stroke="currentColor" strokeWidth="1.75" />
      </svg>
    ),
  },
  {
    title: "Safe climbing & cutting",
    body: "Trained methods, proper kit, and careful work at height.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="h-6 w-6" aria-hidden>
        <path
          d="M12 3v18M6 7l12 10M18 7L6 17"
          stroke="currentColor"
          strokeWidth="1.75"
          strokeLinecap="round"
        />
      </svg>
    ),
  },
  {
    title: "Clean, professional finish",
    body: "Driveways, paths, and lawns left tidier than we found them.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="h-6 w-6" aria-hidden>
        <path
          d="M4 14l4 4L20 6"
          stroke="currentColor"
          strokeWidth="1.75"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
  {
    title: "Free no-obligation quotes",
    body: "Honest pricing up front — no surprises, no pressure.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="h-6 w-6" aria-hidden>
        <path
          d="M12 4v16M8 8h6a2 2 0 010 4h-4a2 2 0 000 4h6"
          stroke="currentColor"
          strokeWidth="1.75"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
] as const;

export function TrustSection() {
  return (
    <section
      id="trust"
      className="bg-bark-50 py-20 sm:py-24"
      aria-labelledby="trust-heading"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-leaf">
            Why homeowners choose us
          </p>
          <h2
            id="trust-heading"
            className="mt-3 font-display text-3xl font-semibold tracking-tight text-forest-900 sm:text-4xl"
          >
            Local, safe, and reliable tree care
          </h2>
        </div>

        <ul className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3 lg:gap-6">
          {trustPoints.map((point) => (
            <li
              key={point.title}
              className="flex gap-4 rounded-2xl border border-forest-900/10 bg-white p-6 shadow-sm"
            >
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-forest-900 text-amber-warm">
                {point.icon}
              </span>
              <div>
                <h3 className="font-display text-lg font-semibold text-forest-900">
                  {point.title}
                </h3>
                <p className="mt-1 text-sm leading-relaxed text-forest-800/85">
                  {point.body}
                </p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
