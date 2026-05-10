import Link from "next/link";

export function Footer() {
  return (
    <footer className="border-t border-forest-900/10 bg-forest-950 text-bark-200">
      <div className="bg-forest-900/60">
        <p className="mx-auto max-w-6xl px-4 py-4 text-center text-sm font-medium tracking-wide text-bark-100 sm:px-6 lg:px-8">
          South Wales Tree Surgery <span className="mx-2 text-amber-warm">•</span>{" "}
          Garden Clearance{" "}
          <span className="mx-2 text-amber-warm">•</span> Hedge Trimming
        </p>
      </div>

      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 px-4 py-10 text-center sm:flex-row sm:px-6 sm:text-left lg:px-8">
        <p className="font-display text-lg font-semibold text-bark-50">
          AJ Treecare
        </p>
        <p className="max-w-md text-sm">
          Tree surgery, hedge trimming, and garden clearance across South Wales.
        </p>
        <Link
          href="#contact"
          className="text-sm font-medium text-amber-warm hover:underline"
        >
          Get a free quote
        </Link>
      </div>

      <p className="mx-auto max-w-6xl px-4 pb-8 text-center text-xs text-bark-300 sm:px-6 lg:px-8">
        © {new Date().getFullYear()} AJ Treecare. All rights reserved.
      </p>
    </footer>
  );
}
