import Link from "next/link";

export function Footer() {
  return (
    <footer className="border-t border-forest-900/10 bg-forest-950 py-10 text-bark-200">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 px-4 text-center sm:flex-row sm:px-6 sm:text-left lg:px-8">
        <p className="font-display text-lg font-semibold text-bark-50">
          AJ Treecare
        </p>
        <p className="max-w-md text-sm">
          Tree surgery, hedge trimming, and garden maintenance in South Wales.
        </p>
        <Link
          href="#contact"
          className="text-sm font-medium text-amber-warm hover:underline"
        >
          Get a quote
        </Link>
      </div>
      <p className="mx-auto mt-8 max-w-6xl px-4 text-center text-xs text-bark-300 sm:px-6 lg:px-8">
        © {new Date().getFullYear()} AJ Treecare. All rights reserved.
      </p>
    </footer>
  );
}
