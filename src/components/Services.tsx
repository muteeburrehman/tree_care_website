import Image from "next/image";
import Link from "next/link";

type Item = {
  title: string;
  body: string;
  bullets: readonly string[];
  accent: string;
  iconBg: string;
  image: { src: string; alt: string; position?: string };
  icon: React.ReactNode;
};

const items: readonly Item[] = [
  {
    title: "Tree Surgery & Removal",
    body: "Safe removal or reduction of dangerous, overgrown, or unwanted trees to protect your property and improve space.",
    bullets: ["Crown reduction", "Felling & dismantling", "Stump work"],
    accent: "from-forest-900 to-forest-700",
    iconBg: "bg-amber-warm text-forest-950",
    image: {
      src: "/images/service-tree-surgery.png",
      alt: "Climbing arborist using a chainsaw on a large tree",
      position: "object-[center_30%]",
    },
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="h-7 w-7" aria-hidden>
        <path
          d="M12 3v18M8 8c2 2 4 4 4 10M16 8c-2 2-4 4-4 10"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
        />
        <path
          d="M5 14c3-1 5-3 7-5M19 14c-3-1-5-3-7-5"
          stroke="currentColor"
          strokeWidth="1.75"
          strokeLinecap="round"
        />
      </svg>
    ),
  },
  {
    title: "Hedge Trimming & Shaping",
    body: "Crisp, clean hedge cutting to restore structure, privacy, and kerb appeal.",
    bullets: ["One-off tidy", "Regular maintenance", "Reshaping & topping"],
    accent: "from-leaf to-forest-600",
    iconBg: "bg-bark-50 text-forest-900",
    image: {
      src: "/images/service-hedge-trimming.png",
      alt: "Gardener trimming a tall hedge with a hedge cutter",
      position: "object-center",
    },
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="h-7 w-7" aria-hidden>
        <path
          d="M4 18h16M5 14h14M6 10h12M7 6h10"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
        />
        <path
          d="M8 6V4M12 6V3M16 6V4"
          stroke="currentColor"
          strokeWidth="1.75"
          strokeLinecap="round"
        />
      </svg>
    ),
  },
  {
    title: "Garden Clearance & Tidy Ups",
    body: "Full garden clean-ups including long grass, waste removal, and general outdoor restoration.",
    bullets: ["Long grass cut back", "Waste removal", "Border tidy"],
    accent: "from-forest-700 to-forest-900",
    iconBg: "bg-leaf-light text-forest-950",
    image: {
      src: "/images/garden-before-after.png",
      alt: "Before and after photos of a garden cleared and restored",
      position: "object-center",
    },
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="h-7 w-7" aria-hidden>
        <path
          d="M3 20h18M5 16c2-3 5-2 7 0m4 0c2-2.5 5-3 6-4"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
        />
        <path
          d="M7 20c1-6 3-10 5-12s5 4 5 12"
          stroke="currentColor"
          strokeWidth="1.75"
          strokeLinecap="round"
        />
      </svg>
    ),
  },
  {
    title: "Safe Cutting & Clearance Work",
    body: "Professional chainsaw work with full cleanup — no mess left behind.",
    bullets: ["Chainsaw work", "Arisings cleared", "Site left tidy"],
    accent: "from-amber-warm to-leaf",
    iconBg: "bg-forest-900 text-amber-warm",
    image: {
      src: "/images/service-cutting-clearance.png",
      alt: "Worker in safety gear using a chainsaw with a wood chipper behind",
      position: "object-center",
    },
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="h-7 w-7" aria-hidden>
        <path
          d="M4 12h12l3-3 2 6-2 1-1-3-2 3H4v-4z"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinejoin="round"
        />
        <path
          d="M16 9V6M11 12H8"
          stroke="currentColor"
          strokeWidth="1.75"
          strokeLinecap="round"
        />
      </svg>
    ),
  },
];

export function Services() {
  return (
    <section
      id="services"
      className="relative overflow-hidden bg-bark-50 py-20 sm:py-28"
      aria-labelledby="services-heading"
    >
      <div className="pointer-events-none absolute inset-0 bg-grain opacity-20" />

      <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-leaf">
            What we do
          </p>
          <h2
            id="services-heading"
            className="mt-3 font-display text-3xl font-semibold tracking-tight text-forest-900 sm:text-4xl lg:text-5xl"
          >
            Tree &amp; garden services that{" "}
            <span className="text-leaf">get results</span>
          </h2>
          <p className="mt-4 text-lg text-forest-800/90">
            Practical work that restores your outdoor space — done safely,
            tidily, and on time.
          </p>
        </div>

        <ul className="mt-14 grid gap-6 md:grid-cols-2 lg:gap-7">
          {items.map((item, idx) => (
            <li
              key={item.title}
              className="group relative flex flex-col overflow-hidden rounded-3xl border border-forest-900/10 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl hover:ring-1 hover:ring-forest-700/20"
            >
              <div className="relative aspect-[4/3] w-full overflow-hidden bg-forest-900">
                <Image
                  src={item.image.src}
                  alt={item.image.alt}
                  fill
                  sizes="(min-width: 768px) 50vw, 100vw"
                  className={`object-cover transition duration-500 group-hover:scale-105 ${item.image.position ?? "object-center"}`}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-forest-950/70 via-forest-950/10 to-transparent" />

                <div
                  className={`absolute inset-x-0 bottom-0 h-1.5 bg-gradient-to-r ${item.accent}`}
                />

                <div className="absolute left-4 top-4 flex items-center gap-2 rounded-full bg-forest-950/80 px-3 py-1.5 text-xs font-semibold uppercase tracking-wider text-bark-50 backdrop-blur-sm">
                  <span
                    className="h-1.5 w-1.5 rounded-full bg-amber-warm"
                    aria-hidden
                  />
                  Service 0{idx + 1}
                </div>
              </div>

              <div className="flex flex-1 flex-col p-7 sm:p-8">
                <div className="flex items-start gap-4">
                  <span
                    className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-xl shadow-md transition group-hover:scale-105 ${item.iconBg}`}
                  >
                    {item.icon}
                  </span>
                  <h3 className="font-display text-2xl font-semibold tracking-tight text-forest-900">
                    {item.title}
                  </h3>
                </div>

                <p className="mt-4 text-forest-800/85 leading-relaxed">
                  {item.body}
                </p>

                <ul className="mt-5 flex flex-wrap gap-2">
                  {item.bullets.map((b) => (
                    <li
                      key={b}
                      className="inline-flex items-center gap-1.5 rounded-full bg-forest-900/5 px-3 py-1.5 text-xs font-medium text-forest-800"
                    >
                      <svg
                        viewBox="0 0 24 24"
                        fill="none"
                        className="h-3.5 w-3.5 text-leaf"
                        aria-hidden
                      >
                        <path
                          d="M5 13l4 4L19 7"
                          stroke="currentColor"
                          strokeWidth="3"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                      {b}
                    </li>
                  ))}
                </ul>
              </div>
            </li>
          ))}
        </ul>

        <div className="mt-14 text-center">
          <Link
            href="#contact"
            className="inline-flex items-center gap-2 rounded-full bg-forest-900 px-7 py-3.5 text-base font-semibold text-bark-50 shadow-md transition hover:bg-forest-800"
          >
            Get a free quote for your job
            <svg
              viewBox="0 0 24 24"
              fill="none"
              className="h-4 w-4"
              aria-hidden
            >
              <path
                d="M5 12h14M13 6l6 6-6 6"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}
