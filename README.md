# Treecare Website

A high-converting landing page for **Treecare**, a South Wales tree surgery and garden clearance service.

The site is built to turn visitors into enquiries with clear service messaging, repeated quote CTAs, local trust signals, before/after proof, testimonials, and a simplified contact form.

## Tech Stack

- **Next.js 15** with App Router
- **React 19**
- **TypeScript**
- **Tailwind CSS**
- **Docker** production build using Next.js standalone output

## Main Sections

- **Hero**: Conversion-focused headline, trust line, and one primary quote CTA.
- **Problem/Solution**: Explains common garden problems and positions Treecare as the fix.
- **Services**: Four photo-led service cards:
  - Tree Surgery & Removal
  - Hedge Trimming & Shaping
  - Garden Clearance & Tidy Ups
  - Safe Cutting & Clearance Work
- **Trust Section**: Fully insured, local, safe methods, clean finish, free quotes.
- **How It Works**: Four simple steps from enquiry to finished job.
- **Before & After Gallery**: Visual transformation proof.
- **Testimonials**: Structured customer reviews.
- **Repeated CTAs**: Quote banners throughout the page.
- **Contact Form**: Simple form with only name, phone, and short description.
- **Footer**: Services, navigation, contact info, trust signals, and local service areas.

## Project Structure

```text
src/
  app/
    globals.css
    icon.png
    layout.tsx
    page.tsx
  components/
    About.tsx
    Contact.tsx
    CtaBanner.tsx
    Footer.tsx
    Gallery.tsx
    Header.tsx
    Hero.tsx
    HowItWorks.tsx
    ProblemSolution.tsx
    Services.tsx
    Testimonial.tsx

public/
  images/
    garden-before-after.png
    hero-arborist.png
    service-cutting-clearance.png
    service-hedge-trimming.png
    service-tree-surgery.png
```

## Getting Started

Install dependencies:

```bash
npm install
```

Run the development server:

```bash
npm run dev
```

Open:

```text
http://localhost:3000
```

## Scripts

```bash
npm run dev
```

Starts the local development server using Turbopack.

```bash
npm run build
```

Creates a production build.

```bash
npm run start
```

Starts the production server after a successful build.

```bash
npm run lint
```

Runs Next.js linting.

## Environment Variables

Copy `.env.example` to `.env` for local/deployment configuration:

```bash
cp .env.example .env
```

Available variables:

```bash
NEXT_PUBLIC_SITE_URL=https://treecare.qubixsolution.com
NEXT_PUBLIC_FACEBOOK_URL=
NEXT_PUBLIC_CONTACT_EMAIL=
NEXT_PUBLIC_CONTACT_PHONE=07000 000000
APP_PUBLISH_PORT=3300
QUBIX_DOCKER_NETWORK=qubix-solutions_qubix-net
```

Notes:

- `NEXT_PUBLIC_SITE_URL` is used for metadata and structured data.
- `NEXT_PUBLIC_FACEBOOK_URL` enables the Facebook footer button when set.
- `NEXT_PUBLIC_CONTACT_EMAIL` is used by the contact form mail fallback.
- `NEXT_PUBLIC_CONTACT_PHONE` enables a click-to-call number in the footer.
- `APP_PUBLISH_PORT` controls the Docker host port.
- `QUBIX_DOCKER_NETWORK` should match the external reverse proxy network.

## Contact Form Behavior

The contact form is intentionally simple for better conversion:

- Name
- Phone
- Short description

If `NEXT_PUBLIC_CONTACT_EMAIL` is set, form submission opens the user's email client with a pre-filled enquiry. If it is not set, the form still shows the confirmation message, but no email client is opened.

For a production-grade enquiry flow, connect the form to a backend, CRM, or email API.

## Images

Main image assets live in `public/images/`.

Current service images:

- `service-tree-surgery.png`
- `service-hedge-trimming.png`
- `garden-before-after.png`
- `service-cutting-clearance.png`

The favicon/browser tab icon is located at:

```text
src/app/icon.png
```

Next.js automatically detects this file and uses it as the site icon.

## Deployment With Docker

Build and run:

```bash
docker compose up -d --build
```

The app listens inside the container on port `3000`.

By default, Docker publishes it locally on:

```text
127.0.0.1:3300
```

This can be changed with:

```bash
APP_PUBLISH_PORT=3300
```

The Docker setup also joins the configured Qubix reverse proxy network so an external nginx container can proxy to the app container.

## Production Build

The Docker image uses Next.js standalone output:

```ts
// next.config.ts
output: "standalone"
```

The production container runs:

```bash
node server.js
```

from the generated `.next/standalone` output.

## Styling Notes

The site uses a custom Tailwind theme with:

- Forest green tones
- Warm amber CTAs
- Bark/off-white backgrounds
- Fraunces display font
- DM Sans body font

Theme configuration is in:

```text
tailwind.config.ts
```

Global styles are in:

```text
src/app/globals.css
```

## SEO And Local Trust

The site includes:

- Local business metadata
- South Wales service targeting
- Local service area references
- Trust-focused copy
- Clear CTAs
- Structured visual sections

Metadata and JSON-LD are configured in:

```text
src/app/layout.tsx
```

## Maintenance Checklist

When updating the site:

1. Update copy in the relevant component under `src/components/`.
2. Add or replace images in `public/images/`.
3. Keep service names and CTA language consistent across sections.
4. Run a typecheck/build before deployment:

```bash
npx tsc --noEmit
npm run build
```

5. Deploy with Docker:

```bash
docker compose up -d --build
```

