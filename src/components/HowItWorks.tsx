const steps = [
  {
    number: "01",
    title: "Tell us the job",
    body: "Send a quick message with what needs doing — a sentence or two is plenty.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="h-6 w-6" aria-hidden>
        <path
          d="M4 6.5A2.5 2.5 0 016.5 4h11A2.5 2.5 0 0120 6.5v8A2.5 2.5 0 0117.5 17H9l-5 4V6.5z"
          stroke="currentColor"
          strokeWidth="1.75"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
  {
    number: "02",
    title: "Get a clear quote",
    body: "We respond fast — usually within an hour — with an honest, fixed price.",
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
  {
    number: "03",
    title: "We do the work safely",
    body: "Trained climbing, proper kit, and careful work that protects your property.",
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
    number: "04",
    title: "Garden left clean",
    body: "All cuttings cleared, paths swept, and your space ready to enjoy again.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="h-6 w-6" aria-hidden>
        <path
          d="M4 14l4 4L20 6"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
] as const;

export function HowItWorks() {
  return (
    <section
      id="process"
      className="relative overflow-hidden bg-forest-900 py-20 text-bark-50 sm:py-24"
      aria-labelledby="process-heading"
    >
      <div className="pointer-events-none absolute inset-0 bg-grain opacity-20" />
      <div className="absolute -left-24 top-0 h-72 w-72 rounded-full bg-leaf/10 blur-3xl" />
      <div className="absolute -right-24 bottom-0 h-72 w-72 rounded-full bg-amber-warm/10 blur-3xl" />

      <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-amber-warm">
            How it works
          </p>
          <h2
            id="process-heading"
            className="mt-3 font-display text-3xl font-semibold tracking-tight sm:text-4xl lg:text-5xl"
          >
            Simple, fast, and stress-free
          </h2>
          <p className="mt-4 text-lg text-bark-200">
            From first message to a tidy garden — usually within days.
          </p>
        </div>

        <ol className="relative mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4 lg:gap-5">
          <div
            className="pointer-events-none absolute left-0 right-0 top-7 hidden h-px bg-gradient-to-r from-transparent via-leaf-light/40 to-transparent lg:block"
            aria-hidden
          />

          {steps.map((step) => (
            <li
              key={step.number}
              className="relative flex flex-col rounded-2xl border border-white/10 bg-forest-800/60 p-6 backdrop-blur-sm transition hover:border-amber-warm/40 hover:bg-forest-800/80"
            >
              <div className="flex items-center justify-between">
                <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-amber-warm text-forest-950 shadow-md">
                  {step.icon}
                </span>
                <span className="font-display text-3xl font-bold text-bark-50/15">
                  {step.number}
                </span>
              </div>

              <h3 className="mt-5 font-display text-xl font-semibold tracking-tight text-bark-50">
                {step.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-bark-200">
                {step.body}
              </p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
