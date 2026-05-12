import type { Metadata } from "next";
import type { ReactNode } from "react";
import { DM_Sans, Fraunces } from "next/font/google";
import "./globals.css";

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
  display: "swap",
});

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
  display: "swap",
});

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://treecare.example.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Treecare | Tree Surgeon & Garden Maintenance in South Wales",
    template: "%s | Treecare",
  },
  description:
    "Professional tree climbing, tree removal, hedge trimming, and garden maintenance across South Wales. Free quotes — overgrown trees and hedges tackled safely.",
  keywords: [
    "tree surgeon South Wales",
    "tree removal",
    "hedge trimming",
    "garden maintenance",
    "tree climber",
    "grass cutting",
    "Treecare",
  ],
  openGraph: {
    title: "Treecare | Tree Surgery & Landscaping in South Wales",
    description:
      "Expert tree care, hedge trimming, and garden maintenance. Message us for a free quote.",
    locale: "en_GB",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "/",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "Treecare",
    description:
      "Tree surgery, hedge trimming, and garden maintenance in South Wales.",
    areaServed: {
      "@type": "AdministrativeArea",
      name: "South Wales",
    },
    url: siteUrl,
    priceRange: "££",
  };

  return (
    <html lang="en-GB" className={`${dmSans.variable} ${fraunces.variable}`}>
      <body className="font-sans antialiased" suppressHydrationWarning>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}
