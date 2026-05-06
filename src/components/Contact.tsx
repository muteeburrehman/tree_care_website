"use client";

import { useState } from "react";

const facebookHref =
  process.env.NEXT_PUBLIC_FACEBOOK_URL ??
  "https://www.facebook.com/search/top/?q=Aj+Treecare";

const contactMail =
  process.env.NEXT_PUBLIC_CONTACT_EMAIL?.trim() ?? "";

export function Contact() {
  const [sent, setSent] = useState(false);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    const name = String(data.get("name") ?? "");
    const phone = String(data.get("phone") ?? "");
    const email = String(data.get("email") ?? "");
    const message = String(data.get("message") ?? "");
    const subject = encodeURIComponent(`AJ Treecare enquiry from ${name}`);
    const body = encodeURIComponent(
      `Name: ${name}\nPhone: ${phone}\nEmail: ${email}\n\n${message}`,
    );
    const addr = contactMail ? contactMail : "";
    window.location.href = `mailto:${addr}?subject=${subject}&body=${body}`;
    setSent(true);
  }

  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-bark-50 py-20 sm:py-28"
      aria-labelledby="contact-heading"
    >
      <div className="pointer-events-none absolute inset-0 bg-grain opacity-30" />
      <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <h2
              id="contact-heading"
              className="font-display text-3xl font-semibold tracking-tight text-forest-900 sm:text-4xl"
            >
              Request a free quote
            </h2>
            <p className="mt-4 text-lg text-forest-800/90">
              Describe your trees, hedges, or garden job and we will come back to
              you. Prefer social? Message the page on Facebook—we reply there
              too.
            </p>
            <div className="mt-8 rounded-2xl border border-forest-900/10 bg-white p-6 shadow-sm">
              <p className="font-semibold text-forest-900">Also on Facebook</p>
              <p className="mt-2 text-sm text-forest-700">
                Connect with hundreds of local followers and see recent jobs.
              </p>
              <a
                href={facebookHref}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-flex rounded-full bg-[#1877F2] px-5 py-2.5 text-sm font-semibold text-white transition hover:brightness-110"
              >
                Open Facebook
              </a>
            </div>
          </div>

          <div className="rounded-3xl border border-forest-900/10 bg-white p-6 shadow-md sm:p-8">
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-forest-900">
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
              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-forest-900">
                    Phone
                  </label>
                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    autoComplete="tel"
                    className="mt-1.5 w-full rounded-xl border border-forest-900/15 bg-bark-50 px-4 py-3 text-forest-900 outline-none ring-forest-500/30 transition focus:ring-2"
                    placeholder="Best number to call"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-forest-900">
                    Email
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    className="mt-1.5 w-full rounded-xl border border-forest-900/15 bg-bark-50 px-4 py-3 text-forest-900 outline-none ring-forest-500/30 transition focus:ring-2"
                    placeholder="you@example.com"
                  />
                </div>
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-forest-900">
                  Job details
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
                className="w-full rounded-xl bg-forest-800 py-3.5 text-base font-semibold text-white shadow-md transition hover:bg-forest-700"
              >
                Email your enquiry
              </button>
              {sent && (
                <p className="text-center text-sm text-leaf" role="status">
                  If your mail app opened, send the message and we will reply
                  shortly.
                </p>
              )}
              <p className="text-center text-xs text-forest-700/80">
                Opens your email app with this enquiry. Set{" "}
                <span className="font-mono text-[0.7rem]">
                  NEXT_PUBLIC_CONTACT_EMAIL
                </span>{" "}
                so messages go straight to your inbox.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
