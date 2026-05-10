import Link from "next/link";

type Variant = "dark" | "light" | "leaf";

const styles: Record<
  Variant,
  {
    section: string;
    heading: string;
    subtext: string;
    button: string;
  }
> = {
  dark: {
    section: "bg-forest-950 text-bark-50",
    heading: "text-bark-50",
    subtext: "text-bark-200",
    button:
      "bg-amber-warm text-forest-950 ring-2 ring-amber-warm/30 hover:brightness-110",
  },
  light: {
    section: "bg-bark-100 text-forest-900",
    heading: "text-forest-900",
    subtext: "text-forest-800/85",
    button:
      "bg-forest-800 text-white shadow-md hover:bg-forest-700",
  },
  leaf: {
    section: "bg-forest-800 text-white",
    heading: "text-white",
    subtext: "text-bark-100",
    button:
      "bg-amber-warm text-forest-950 ring-2 ring-amber-warm/30 hover:brightness-110",
  },
};

export function CtaBanner({ variant = "dark" }: { variant?: Variant }) {
  const s = styles[variant];

  return (
    <section
      className={`relative overflow-hidden ${s.section}`}
      aria-labelledby={`cta-heading-${variant}`}
    >
      <div className="pointer-events-none absolute inset-0 bg-grain opacity-20" />
      <div className="relative mx-auto max-w-5xl px-4 py-14 text-center sm:px-6 sm:py-16 lg:px-8">
        <h2
          id={`cta-heading-${variant}`}
          className={`font-display text-3xl font-semibold tracking-tight sm:text-4xl ${s.heading}`}
        >
          Get a free tree care quote today
        </h2>
        <p className={`mx-auto mt-4 max-w-2xl text-base sm:text-lg ${s.subtext}`}>
          Tell us what needs doing and we&rsquo;ll respond quickly with a clear
          price.
        </p>
        <div className="mt-7">
          <Link
            href="#contact"
            className={`inline-flex items-center justify-center rounded-full px-7 py-3.5 text-base font-semibold transition ${s.button}`}
          >
            Request free quote
          </Link>
        </div>
      </div>
    </section>
  );
}
