const items = [
  {
    title: "Tree climbing & removal",
    body: "Difficult trees, heavy reductions, and safe dismantling where access is tight—we climb so your garden does not have to suffer.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="h-6 w-6" aria-hidden>
        <path
          d="M12 3v18M8 8c2 2 4 4 4 10M16 8c-2 2-4 4-4 10"
          stroke="currentColor"
          strokeWidth="1.75"
          strokeLinecap="round"
        />
        <path
          d="M5 14c3-1 5-3 7-5M19 14c-3-1-5-3-7-5"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
      </svg>
    ),
  },
  {
    title: "Hedge trimming & shaping",
    body: "Overgrown hedges brought back to crisp lines and manageable height. Regular cuts or one-off tidy-ups.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="h-6 w-6" aria-hidden>
        <path
          d="M4 18h16M5 14h14M6 10h12M7 6h10"
          stroke="currentColor"
          strokeWidth="1.75"
          strokeLinecap="round"
        />
        <path
          d="M8 6V4M12 6V3M16 6V4"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
      </svg>
    ),
  },
  {
    title: "Grass & garden tidy-ups",
    body: "Long grass cut back, rough edges neatened, and outdoor areas cleared so the whole plot feels cared for again.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="h-6 w-6" aria-hidden>
        <path
          d="M3 20h18M5 16c2-3 5-2 7 0m4 0c2-2.5 5-3 6-4"
          stroke="currentColor"
          strokeWidth="1.75"
          strokeLinecap="round"
        />
        <path
          d="M7 20c1-6 3-10 5-12s5 4 5 12"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
      </svg>
    ),
  },
  {
    title: "Cutting & clearing",
    body: "Chainsaw work and arisings cleared efficiently. We leave drives, paths, and lawns as tidy as we found them—or better.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="h-6 w-6" aria-hidden>
        <path
          d="M4 12h12l3-3 2 6-2 1-1-3-2 3H4v-4z"
          stroke="currentColor"
          strokeWidth="1.75"
          strokeLinejoin="round"
        />
        <path
          d="M16 9V6M11 12H8"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
      </svg>
    ),
  },
] as const;

export function Services() {
  return (
    <section
      id="services"
      className="bg-bark-50 py-20 sm:py-28"
      aria-labelledby="services-heading"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <h2
            id="services-heading"
            className="font-display text-3xl font-semibold tracking-tight text-forest-900 sm:text-4xl"
          >
            What we do
          </h2>
          <p className="mt-4 text-lg text-forest-800/90">
            Hands-on tree and garden services for homes across South Wales—
            straight talk, solid work, and results you will notice from the kerb.
          </p>
        </div>

        <ul className="mt-14 grid gap-6 sm:grid-cols-2 lg:gap-8">
          {items.map((item) => (
            <li
              key={item.title}
              className="group flex gap-5 rounded-2xl border border-forest-900/10 bg-white p-6 shadow-sm transition hover:shadow-md hover:ring-1 hover:ring-forest-800/15"
            >
              <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-forest-900 text-amber-warm transition group-hover:bg-forest-800">
                {item.icon}
              </span>
              <div>
                <h3 className="font-display text-xl font-semibold text-forest-900">
                  {item.title}
                </h3>
                <p className="mt-2 text-forest-800/85 leading-relaxed">
                  {item.body}
                </p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
