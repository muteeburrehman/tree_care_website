import Image from "next/image";
import Link from "next/link";

const facebookHref =
  process.env.NEXT_PUBLIC_FACEBOOK_URL ??
  "https://www.facebook.com/search/top/?q=Aj+Treecare";

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
            South Wales · Tree care & gardens
          </p>
          <h1
            id="hero-heading"
            className="font-display text-4xl font-semibold leading-tight tracking-tight text-bark-50 sm:text-5xl lg:text-[3.25rem]"
          >
            Professional tree surgery &amp; garden maintenance
          </h1>
          <p className="mt-5 text-lg leading-relaxed text-bark-200">
            Overgrown trees or hedges? Need grass and borders brought back under
            control? AJ Treecare climbs, cuts, and clears—safely and tidily—so
            your outdoor space looks sharp again.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link
              href="#contact"
              className="inline-flex items-center justify-center rounded-full bg-amber-warm px-6 py-3 text-base font-semibold text-forest-950 shadow-lg ring-2 ring-amber-warm/30 transition hover:brightness-110"
            >
              Get a free quote
            </Link>
            <a
              href={facebookHref}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-full border-2 border-bark-200/40 bg-forest-900/50 px-6 py-3 text-base font-semibold text-bark-50 backdrop-blur-sm transition hover:border-leaf-light/60 hover:bg-forest-800/70"
            >
              Message on Facebook
            </a>
          </div>
          <p className="mt-6 text-sm text-bark-300">
            Trusted local service • Before &amp; after results you can see
          </p>
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
                AJ Treecare
              </p>
              <p className="text-sm text-bark-100">Tree climber · South Wales</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
