"use client";

import { useState } from "react";

const contactMail = process.env.NEXT_PUBLIC_CONTACT_EMAIL?.trim() ?? "";

export function Contact() {
  const [sent, setSent] = useState(false);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    const name = String(data.get("name") ?? "");
    const phone = String(data.get("phone") ?? "");
    const message = String(data.get("message") ?? "");

    if (contactMail) {
      const subject = encodeURIComponent(
        `AJ Treecare quote request from ${name}`,
      );
      const body = encodeURIComponent(
        `Name: ${name}\nPhone: ${phone}\n\nJob details:\n${message}`,
      );
      window.location.href = `mailto:${contactMail}?subject=${subject}&body=${body}`;
    }

    setSent(true);
    form.reset();
  }

  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-bark-50 py-20 sm:py-28"
      aria-labelledby="contact-heading"
    >
      <div className="pointer-events-none absolute inset-0 bg-grain opacity-30" />
      <div className="relative mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-5 lg:gap-12">
          <div className="lg:col-span-2">
            <p className="text-sm font-medium uppercase tracking-[0.2em] text-leaf">
              Free quote
            </p>
            <h2
              id="contact-heading"
              className="mt-3 font-display text-3xl font-semibold tracking-tight text-forest-900 sm:text-4xl"
            >
              Request your free quote
            </h2>
            <p className="mt-4 text-lg text-forest-800/90">
              Tell us what needs doing and we&rsquo;ll come back with a clear,
              honest price.
            </p>
            <p className="mt-5 inline-flex items-center gap-2 rounded-full bg-forest-900/5 px-4 py-2 text-sm font-medium text-forest-900">
              <span
                className="h-2 w-2 rounded-full bg-leaf"
                aria-hidden
              />
              We usually respond within 1 hour
            </p>

            <ul className="mt-8 space-y-3 text-sm text-forest-800">
              <li className="flex items-center gap-2">
                <span
                  className="h-1.5 w-1.5 shrink-0 rounded-full bg-amber-warm"
                  aria-hidden
                />
                Fully insured local service
              </li>
              <li className="flex items-center gap-2">
                <span
                  className="h-1.5 w-1.5 shrink-0 rounded-full bg-amber-warm"
                  aria-hidden
                />
                Free, no-obligation quote
              </li>
              <li className="flex items-center gap-2">
                <span
                  className="h-1.5 w-1.5 shrink-0 rounded-full bg-amber-warm"
                  aria-hidden
                />
                Same-day response across South Wales
              </li>
            </ul>
          </div>

          <div className="lg:col-span-3">
            <div className="rounded-3xl border border-forest-900/10 bg-white p-6 shadow-md sm:p-8">
              {sent ? (
                <div
                  role="status"
                  className="rounded-2xl bg-leaf/10 p-6 text-center"
                >
                  <p className="font-display text-xl font-semibold text-forest-900">
                    Thanks — your request is in.
                  </p>
                  <p className="mt-2 text-forest-800">
                    We usually respond within 1 hour with a clear price.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium text-forest-900"
                    >
                      Name
                    </label>
                    <input
                      id="name"
                      name="name"
                      required
                      autoComplete="name"
                      className="mt-1.5 w-full rounded-xl border border-forest-900/15 bg-bark-50 px-4 py-3 text-forest-900 outline-none ring-forest-500/30 transition focus:ring-2"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="phone"
                      className="block text-sm font-medium text-forest-900"
                    >
                      Phone
                    </label>
                    <input
                      id="phone"
                      name="phone"
                      type="tel"
                      required
                      autoComplete="tel"
                      className="mt-1.5 w-full rounded-xl border border-forest-900/15 bg-bark-50 px-4 py-3 text-forest-900 outline-none ring-forest-500/30 transition focus:ring-2"
                      placeholder="Best number to call"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="message"
                      className="block text-sm font-medium text-forest-900"
                    >
                      Short description
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={4}
                      className="mt-1.5 w-full resize-y rounded-xl border border-forest-900/15 bg-bark-50 px-4 py-3 text-forest-900 outline-none ring-forest-500/30 transition focus:ring-2"
                      placeholder="e.g. Large hedge at rear, two trees overhanging garage…"
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full rounded-xl bg-amber-warm py-3.5 text-base font-semibold text-forest-950 shadow-md ring-2 ring-amber-warm/30 transition hover:brightness-110"
                  >
                    Request free quote
                  </button>
                  <p className="text-center text-xs text-forest-700/80">
                    We usually respond within 1 hour.
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
