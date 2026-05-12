import Image from "next/image";
import Link from "next/link";

export function Hero() {
  return (
    <section
      className="relative overflow-hidden bg-forest-950"
      aria-labelledby="hero-heading"
    >
      <div className="pointer-events-none absolute inset-0 bg-grain opacity-40" />
      <div className="absolute -right-24 top-0 h-96 w-96 rounded-full bg-leaf/20 blur-3xl" />
      <div className="absolute -left-24 bottom-0 h-80 w-80 rounded-full bg-forest-600/30 blur-3xl" />

      <div className="relative mx-auto grid max-w-6xl gap-10 px-4 py-16 sm:px-6 lg:grid-cols-2 lg:items-center lg:gap-12 lg:py-24 lg:px-8">
        <div className="max-w-xl">
          <p className="mb-3 font-medium uppercase tracking-[0.2em] text-leaf-light/90">
            South Wales · Tree surgery & garden clearance
          </p>
          <h1
            id="hero-heading"
            className="font-display text-4xl font-semibold leading-tight tracking-tight text-bark-50 sm:text-5xl lg:text-[3.25rem]"
          >
            Overgrown trees &amp; gardens cleared fast in South Wales
          </h1>
          <p className="mt-5 text-lg leading-relaxed text-bark-200">
            Safe, reliable tree surgery and garden clearance for homeowners who
            want a clean, usable outdoor space again — without the hassle.
          </p>

          <ul className="mt-6 flex flex-wrap gap-x-5 gap-y-2 text-sm font-medium text-bark-100">
            <li className="flex items-center gap-2">
              <span
                className="h-1.5 w-1.5 rounded-full bg-leaf-light"
                aria-hidden
              />
              Same-day response
            </li>
            <li className="flex items-center gap-2">
              <span
                className="h-1.5 w-1.5 rounded-full bg-leaf-light"
                aria-hidden
              />
              Free quotes
            </li>
            <li className="flex items-center gap-2">
              <span
                className="h-1.5 w-1.5 rounded-full bg-leaf-light"
                aria-hidden
              />
              Fully insured local service
            </li>
          </ul>

          <div className="mt-8">
            <Link
              href="#contact"
              className="inline-flex items-center justify-center rounded-full bg-amber-warm px-7 py-3.5 text-base font-semibold text-forest-950 shadow-lg ring-2 ring-amber-warm/30 transition hover:brightness-110"
            >
              Get your free quote
            </Link>
            <p className="mt-3 text-sm text-bark-300">
              Takes less than 2 minutes. No obligation.
            </p>
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-md lg:max-w-lg lg:justify-self-end">
          <div className="absolute -inset-4 rounded-[2rem] bg-gradient-to-br from-orange-500/25 to-forest-700/40 blur-2xl" />
          <div className="relative aspect-square w-full overflow-hidden rounded-[1.75rem] border border-white/10 shadow-2xl shadow-black/40 ring-1 ring-white/20">
            <Image
              src="/images/hero-arborist.png"
              alt="Illustration of a professional arborist in hi-vis gear and ear protection using a chainsaw on a large tree"
              width={1024}
              height={1024}
              priority
              className="h-full w-full object-cover object-[center_42%]"
              sizes="(min-width: 1024px) 512px, 100vw"
            />
            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-forest-950/95 via-forest-950/50 to-transparent px-5 py-6">
              <p className="font-display text-lg font-semibold text-white">
                Treecare
              </p>
              <p className="text-sm text-bark-100">
                Tree surgeon · South Wales
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
