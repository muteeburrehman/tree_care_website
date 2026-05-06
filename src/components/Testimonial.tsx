export function Testimonial() {
  return (
    <section
      className="border-y border-forest-900/10 bg-white py-16 sm:py-20"
      aria-label="Customer feedback"
    >
      <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
        <blockquote className="font-display text-2xl font-medium leading-snug text-forest-900 sm:text-3xl">
          &ldquo;Overgrown grass trimmed—customer happy.&rdquo;
        </blockquote>
        <p className="mt-6 text-forest-700">
          Real feedback from recent work. We take pride in leaving gardens neat
          and homeowners smiling.
        </p>
        <div
          className="mt-6 flex items-center justify-center gap-2 text-amber-warm"
          aria-hidden
        >
          <span className="text-2xl">★★★★★</span>
        </div>
      </div>
    </section>
  );
}
