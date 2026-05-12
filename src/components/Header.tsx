import Link from "next/link";

const nav = [
  { href: "#services", label: "Services" },
  { href: "#work", label: "Before & after" },
  { href: "#reviews", label: "Reviews" },
  { href: "#about", label: "About" },
  { href: "#contact", label: "Contact" },
];

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-forest-900/10 bg-bark-50/90 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-3 sm:px-6 lg:px-8">
        <Link
          href="/"
          className="font-display text-lg font-semibold tracking-tight text-forest-900 sm:text-xl"
        >
          Treecare
        </Link>
        <nav className="hidden items-center gap-8 text-sm font-medium text-forest-800 md:flex">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="transition hover:text-leaf"
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <Link
          href="#contact"
          className="rounded-full bg-amber-warm px-4 py-2 text-sm font-semibold text-forest-950 shadow-md ring-2 ring-amber-warm/30 transition hover:brightness-110"
        >
          Free quote
        </Link>
      </div>
      <nav
        className="flex gap-4 overflow-x-auto border-t border-forest-900/10 px-4 py-2.5 text-sm font-medium text-forest-800 md:hidden"
        aria-label="Sections"
      >
        {nav.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className="shrink-0 rounded-full bg-forest-900/5 px-3 py-1 transition hover:bg-forest-900/10"
          >
            {item.label}
          </Link>
        ))}
      </nav>
    </header>
  );
}
