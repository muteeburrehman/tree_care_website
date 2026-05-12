import Link from "next/link";

const facebookHref = process.env.NEXT_PUBLIC_FACEBOOK_URL ?? "";
const contactPhone = process.env.NEXT_PUBLIC_CONTACT_PHONE?.trim() ?? "";
const contactEmail = process.env.NEXT_PUBLIC_CONTACT_EMAIL?.trim() ?? "";

const services = [
  { href: "#services", label: "Tree surgery & removal" },
  { href: "#services", label: "Hedge trimming & shaping" },
  { href: "#services", label: "Garden clearance & tidy ups" },
  { href: "#services", label: "Safe cutting & clearance" },
];

const explore = [
  { href: "#services", label: "Services" },
  { href: "#work", label: "Before & after" },
  { href: "#process", label: "How it works" },
  { href: "#reviews", label: "Reviews" },
  { href: "#about", label: "About" },
  { href: "#contact", label: "Contact" },
];

const areas = [
  "Swansea",
  "Cardiff",
  "Newport",
  "Bridgend",
  "Port Talbot",
  "Neath",
  "Llanelli",
];

export function Footer() {
  return (
    <footer className="border-t border-forest-900/10 bg-forest-950 text-bark-200">
      <div className="bg-forest-900/60">
        <p className="mx-auto max-w-6xl px-4 py-4 text-center text-sm font-medium tracking-wide text-bark-100 sm:px-6 lg:px-8">
          South Wales Tree Surgery{" "}
          <span className="mx-2 text-amber-warm">•</span> Garden Clearance{" "}
          <span className="mx-2 text-amber-warm">•</span> Hedge Trimming
        </p>
      </div>

      <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-12 lg:gap-12">
          <div className="lg:col-span-4">
            <p className="font-display text-2xl font-semibold tracking-tight text-bark-50">
              Treecare
            </p>
            <p className="mt-3 max-w-sm text-sm leading-relaxed text-bark-300">
              Tree surgery, hedge trimming, and garden clearance across South
              Wales — done safely, tidily, and on time.
            </p>

            <ul className="mt-6 space-y-2 text-sm">
              <li className="flex items-center gap-2 text-bark-200">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  className="h-4 w-4 text-leaf-light"
                  aria-hidden
                >
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
                Fully insured local service
              </li>
              <li className="flex items-center gap-2 text-bark-200">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  className="h-4 w-4 text-leaf-light"
                  aria-hidden
                >
                  <circle
                    cx="12"
                    cy="12"
                    r="9"
                    stroke="currentColor"
                    strokeWidth="1.75"
                  />
                  <path
                    d="M12 7v5l3 2"
                    stroke="currentColor"
                    strokeWidth="1.75"
                    strokeLinecap="round"
                  />
                </svg>
                Same-day response, free quotes
              </li>
            </ul>

            {facebookHref && (
              <a
                href={facebookHref}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 inline-flex items-center gap-2 rounded-full bg-forest-800 px-4 py-2 text-sm font-medium text-bark-50 transition hover:bg-forest-700"
              >
                <svg
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="h-4 w-4 text-[#1877F2]"
                  aria-hidden
                >
                  <path d="M22 12a10 10 0 10-11.6 9.9v-7H8v-3h2.4V9.7c0-2.4 1.4-3.7 3.6-3.7 1 0 2.1.2 2.1.2v2.3h-1.2c-1.2 0-1.5.7-1.5 1.5V12h2.6l-.4 3h-2.2v7A10 10 0 0022 12z" />
                </svg>
                Follow on Facebook
              </a>
            )}
          </div>

          <div className="lg:col-span-3">
            <h3 className="text-xs font-semibold uppercase tracking-[0.2em] text-amber-warm">
              Services
            </h3>
            <ul className="mt-5 space-y-3 text-sm">
              {services.map((s) => (
                <li key={s.label}>
                  <Link
                    href={s.href}
                    className="text-bark-200 transition hover:text-bark-50"
                  >
                    {s.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-2">
            <h3 className="text-xs font-semibold uppercase tracking-[0.2em] text-amber-warm">
              Explore
            </h3>
            <ul className="mt-5 space-y-3 text-sm">
              {explore.map((e) => (
                <li key={e.label}>
                  <Link
                    href={e.href}
                    className="text-bark-200 transition hover:text-bark-50"
                  >
                    {e.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-3">
            <h3 className="text-xs font-semibold uppercase tracking-[0.2em] text-amber-warm">
              Get in touch
            </h3>

            {contactPhone && (
              <a
                href={`tel:${contactPhone.replace(/\s+/g, "")}`}
                className="mt-5 block font-display text-xl font-semibold text-bark-50 transition hover:text-leaf-light"
              >
                {contactPhone}
              </a>
            )}

            {contactEmail && (
              <a
                href={`mailto:${contactEmail}`}
                className="mt-2 block break-all text-sm text-bark-200 transition hover:text-bark-50"
              >
                {contactEmail}
              </a>
            )}

            <p className="mt-4 text-sm leading-relaxed text-bark-300">
              We usually respond within 1 hour, 7 days a week.
            </p>

            <Link
              href="#contact"
              className="mt-5 inline-flex items-center gap-2 rounded-full bg-amber-warm px-5 py-2.5 text-sm font-semibold text-forest-950 shadow-md ring-2 ring-amber-warm/30 transition hover:brightness-110"
            >
              Request free quote
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

        <div className="mt-12 border-t border-white/10 pt-8">
          <h3 className="text-xs font-semibold uppercase tracking-[0.2em] text-amber-warm">
            Areas we cover
          </h3>
          <ul className="mt-4 flex flex-wrap gap-2">
            {areas.map((a) => (
              <li
                key={a}
                className="rounded-full border border-white/10 bg-forest-900/50 px-3 py-1.5 text-xs font-medium text-bark-200"
              >
                {a}
              </li>
            ))}
            <li className="rounded-full border border-amber-warm/30 bg-amber-warm/10 px-3 py-1.5 text-xs font-semibold text-amber-warm">
              + surrounding South Wales
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10 bg-forest-950">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-3 px-4 py-6 text-xs text-bark-300 sm:flex-row sm:px-6 lg:px-8">
          <p>© {new Date().getFullYear()} Treecare. All rights reserved.</p>
          <p className="text-bark-300/80">
            Tree surgery &amp; garden services · South Wales
          </p>
        </div>
      </div>
    </footer>
  );
}
