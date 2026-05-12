export function About() {
  return (
    <section
      id="about"
      className="bg-bark-100 py-20 sm:py-28"
      aria-labelledby="about-heading"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center lg:gap-16">
          <div>
            <h2
              id="about-heading"
              className="font-display text-3xl font-semibold tracking-tight text-forest-900 sm:text-4xl"
            >
              Meet Treecare
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-forest-800/90">
              I am a professional tree climber, working at height to reduce,
              dismantle, and remove problem trees safely. Alongside tree work, I
              trim unruly hedges, knock back overgrown grass, and leave gardens
              looking cared for—not just &ldquo;cut and gone.&rdquo;
            </p>
            <p className="mt-4 text-lg leading-relaxed text-forest-800/90">
              Based in South Wales, I take on jobs other teams might shy away
              from: tight access, awkward crowns, and plots that need a proper
              clear-up. If your trees or hedges have got too big, get in touch
              for a straight answer and a fair quote.
            </p>
          </div>
          <div className="rounded-3xl border border-forest-900/10 bg-white p-8 shadow-sm">
            <h3 className="font-display text-xl font-semibold text-forest-900">
              Why choose us
            </h3>
            <ul className="mt-6 space-y-4 text-forest-800">
              <li className="flex gap-3">
                <span
                  className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-leaf"
                  aria-hidden
                />
                <span>Qualified climbing and cutting—not guesswork from the ground.</span>
              </li>
              <li className="flex gap-3">
                <span
                  className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-leaf"
                  aria-hidden
                />
                <span>Hedges, lawns, and clearances tackled as part of the job.</span>
              </li>
              <li className="flex gap-3">
                <span
                  className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-leaf"
                  aria-hidden
                />
                <span>
                  Hundreds of locals follow the work online—reliable, visible, and
                  recommended.
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
