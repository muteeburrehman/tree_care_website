const reviews = [
  {
    quote:
      "Really professional service. My garden was completely overgrown and now it looks perfect again.",
    name: "Sarah",
    location: "Swansea",
  },
  {
    quote: "Quick, tidy and fairly priced. Would definitely recommend.",
    name: "James",
    location: "Cardiff",
  },
  {
    quote: "Turned up on time and left everything clean. Great work.",
    name: "David",
    location: "Newport",
  },
] as const;

function Stars() {
  return (
    <div
      className="flex items-center gap-0.5 text-amber-warm"
      aria-label="5 out of 5 stars"
    >
      {Array.from({ length: 5 }).map((_, i) => (
        <svg
          key={i}
          viewBox="0 0 24 24"
          fill="currentColor"
          className="h-4 w-4"
          aria-hidden
        >
          <path d="M12 2.5l2.94 6.36 6.96.7-5.2 4.74 1.5 6.86L12 17.77l-6.2 3.39 1.5-6.86-5.2-4.74 6.96-.7L12 2.5z" />
        </svg>
      ))}
    </div>
  );
}

export function Testimonial() {
  return (
    <section
      id="reviews"
      className="border-y border-forest-900/10 bg-white py-20 sm:py-24"
      aria-labelledby="reviews-heading"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-leaf">
            What our customers say
          </p>
          <h2
            id="reviews-heading"
            className="mt-3 font-display text-3xl font-semibold tracking-tight text-forest-900 sm:text-4xl"
          >
            Trusted by South Wales homeowners
          </h2>
        </div>

        <ul className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {reviews.map((review) => (
            <li
              key={review.name + review.location}
              className="flex h-full flex-col rounded-2xl border border-forest-900/10 bg-bark-50 p-6 shadow-sm"
            >
              <Stars />
              <blockquote className="mt-4 flex-1 text-base leading-relaxed text-forest-900 sm:text-lg">
                &ldquo;{review.quote}&rdquo;
              </blockquote>
              <p className="mt-5 text-sm font-medium text-forest-800">
                — {review.name}, {review.location}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
