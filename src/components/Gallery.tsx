import Image from "next/image";

type Card = {
  id: string;
  caption: string;
  accent: string;
  image: { src: string; alt: string; position?: string };
  hasEmbeddedLabels?: boolean;
  featured?: boolean;
};

const cards: Card[] = [
  {
    id: "garden",
    caption: "Overgrown garden transformed into usable outdoor space",
    accent: "Garden restoration",
    image: {
      src: "/images/garden-before-after.png",
      alt: "Before and after of an overgrown garden cleared and restored to a tidy lawn",
      position: "object-center",
    },
    hasEmbeddedLabels: true,
    featured: true,
  },
  {
    id: "tree",
    caption: "Large unsafe tree safely reduced to improve light & safety",
    accent: "Tree reduction",
    image: {
      src: "/images/service-tree-surgery.png",
      alt: "Arborist climbing and reducing a large tree with a chainsaw",
      position: "object-[center_25%]",
    },
  },
  {
    id: "hedge",
    caption: "Hedge reshaped for clean kerb appeal",
    accent: "Hedge shaping",
    image: {
      src: "/images/service-hedge-trimming.png",
      alt: "Crisp shaped hedge being maintained with a hedge cutter",
      position: "object-center",
    },
  },
  {
    id: "clearance",
    caption: "Full garden clearance completed in one visit",
    accent: "Garden clearance",
    image: {
      src: "/images/service-cutting-clearance.png",
      alt: "Operator clearing felled timber with a chipper on site",
      position: "object-center",
    },
  },
];

export function Gallery() {
  return (
    <section
      id="work"
      className="relative overflow-hidden bg-forest-950 py-20 text-bark-50 sm:py-28"
      aria-labelledby="gallery-heading"
    >
      <div className="pointer-events-none absolute inset-0 bg-grain opacity-30" />
      <div className="absolute -right-32 top-20 h-80 w-80 rounded-full bg-leaf/10 blur-3xl" />
      <div className="absolute -left-32 bottom-20 h-80 w-80 rounded-full bg-amber-warm/10 blur-3xl" />

      <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-leaf-light/90">
            Before &amp; after
          </p>
          <h2
            id="gallery-heading"
            className="mt-3 font-display text-3xl font-semibold tracking-tight sm:text-4xl lg:text-5xl"
          >
            Real transformations from recent jobs
          </h2>
          <p className="mt-4 text-lg text-bark-200">
            Every visit ends with a tidy garden, a clear plan, and a safer
            outdoor space.
          </p>
        </div>

        <ul className="mt-14 grid gap-6 sm:grid-cols-2 lg:gap-8">
          {cards.map((card) => (
            <li
              key={card.id}
              className={`group relative overflow-hidden rounded-3xl border border-white/10 bg-forest-900 shadow-2xl shadow-black/40 transition duration-300 hover:-translate-y-1 hover:shadow-black/60 ${
                card.featured ? "sm:col-span-2" : ""
              }`}
            >
              <div
                className={`relative w-full overflow-hidden ${
                  card.featured ? "aspect-[16/9]" : "aspect-[5/3]"
                }`}
              >
                <Image
                  src={card.image.src}
                  alt={card.image.alt}
                  fill
                  sizes={
                    card.featured
                      ? "(min-width: 1024px) 1024px, 100vw"
                      : "(min-width: 640px) 50vw, 100vw"
                  }
                  className={`object-cover transition duration-500 group-hover:scale-[1.02] ${card.image.position ?? "object-center"}`}
                  priority={card.featured}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-forest-950/60 via-transparent to-transparent" />

                <div className="absolute left-4 top-4 flex items-center gap-2 rounded-full bg-forest-950/85 px-3 py-1.5 text-xs font-semibold uppercase tracking-wider text-bark-50 backdrop-blur-sm">
                  <span
                    className="h-1.5 w-1.5 rounded-full bg-amber-warm"
                    aria-hidden
                  />
                  {card.accent}
                </div>

                {!card.hasEmbeddedLabels && (
                  <div className="absolute right-4 top-4 flex items-center gap-1.5 rounded-full bg-amber-warm px-3 py-1.5 text-[10px] font-bold uppercase tracking-widest text-forest-950 shadow-md">
                    Real job
                  </div>
                )}

                {card.featured && (
                  <div className="absolute right-4 top-4 rounded-full bg-amber-warm px-3 py-1.5 text-[10px] font-bold uppercase tracking-widest text-forest-950 shadow-md">
                    Featured transformation
                  </div>
                )}
              </div>

              <div className="bg-forest-900 p-6 sm:p-7">
                <p className="font-display text-lg font-semibold leading-snug text-bark-50 sm:text-xl">
                  {card.caption}
                </p>
                <div className="mt-4 flex items-center gap-2 text-xs font-medium uppercase tracking-wider text-leaf-light">
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    className="h-4 w-4"
                    aria-hidden
                  >
                    <path
                      d="M5 13l4 4L19 7"
                      stroke="currentColor"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  Completed by AJ Treecare
                </div>
              </div>
            </li>
          ))}
        </ul>

        <p className="mt-10 text-center text-sm text-bark-300">
          Want to see more? Ask for recent project photos when you book your
          quote.
        </p>
      </div>
    </section>
  );
}
