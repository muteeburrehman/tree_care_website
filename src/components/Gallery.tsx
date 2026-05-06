import Image from "next/image";

const shots = [
  {
    src: "https://images.unsplash.com/photo-1599599810769-bcde5a160d32?auto=format&fit=crop&w=800&q=80",
    alt: "Residential garden with mature trees and tidy lawn",
    label: "Large trees — residential tidy",
  },
  {
    src: "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?auto=format&fit=crop&w=800&q=80",
    alt: "Neat hedge line along a garden path",
    label: "Hedges shaped and maintained",
  },
  {
    src: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=800&q=80",
    alt: "Open lawn and garden after maintenance",
    label: "Grass and borders brought back",
  },
  {
    src: "https://images.unsplash.com/photo-1464226184884-fa280b87c399?auto=format&fit=crop&w=800&q=80",
    alt: "Tree canopy and sky",
    label: "Safe reductions and crown work",
  },
  {
    src: "https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?auto=format&fit=crop&w=800&q=80",
    alt: "Tree trunk detail and greenery",
    label: "Professional cuts, clean finish",
  },
  {
    src: "https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=800&q=80",
    alt: "Well-kept front garden and path",
    label: "Kerbside appeal restored",
  },
] as const;

export function Gallery() {
  return (
    <section
      id="work"
      className="bg-forest-950 py-20 text-bark-50 sm:py-28"
      aria-labelledby="gallery-heading"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <h2
            id="gallery-heading"
            className="font-display text-3xl font-semibold tracking-tight sm:text-4xl"
          >
            Our work
          </h2>
          <p className="mt-4 text-lg text-bark-200">
            Swap these sample photos for your own before-and-after shots—driveways
            cleared, grass cut back, trees and hedges under control.
          </p>
        </div>

        <ul className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {shots.map((shot) => (
            <li
              key={shot.src}
              className="group overflow-hidden rounded-2xl border border-white/10 bg-forest-900/40 shadow-lg"
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src={shot.src}
                  alt={shot.alt}
                  fill
                  className="object-cover transition duration-500 group-hover:scale-105"
                  sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-forest-950/90 via-transparent to-transparent opacity-90" />
                <p className="absolute bottom-0 left-0 right-0 p-4 font-medium text-white">
                  {shot.label}
                </p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
