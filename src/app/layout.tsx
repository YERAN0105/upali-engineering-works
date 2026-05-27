import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

/* ── Page title and meta description ── */
export const metadata: Metadata = {
  title: "Upali Engineering Works – Trusted Vehicle Valuations in Sri Lanka",
  description:
    "Professional vehicle valuations for insurance, bank loans, leasing, vehicle transfers, and legal purposes. Branches in Colombo, Kandy, Galle, and Jaffna. Accepted by all major banks and insurers.",
  keywords: [
    "vehicle valuation Sri Lanka",
    "car valuation",
    "motor vehicle valuation",
    "insurance valuation",
    "bank loan valuation",
    "vehicle transfer valuation",
  ],
  /* ── Open Graph — controls the preview card on WhatsApp / Facebook ── */
  openGraph: {
    title: "Upali Engineering Works – Professional Vehicle Valuations",
    description:
      "Trusted vehicle valuations for insurance, bank loans, transfers, and legal purposes. Island-wide branches across Sri Lanka.",
    url: "https://upaliengineering.lk",
    siteName: "Upali Engineering Works",
    images: [
      {
        url: "https://upaliengineering.lk/og-image.png",
        width: 1200,
        height: 630,
        alt: "Upali Engineering Works – Vehicle Valuation Services",
      },
    ],
    locale: "en_LK",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Upali Engineering Works – Vehicle Valuations",
    description:
      "Professional vehicle valuations for insurance, bank loans, transfers, and legal purposes.",
    images: ["https://upaliengineering.lk/og-image.png"],
  },
  robots: { index: true, follow: true },
};

/* ── Local-business structured data (helps Google understand who you are) ── */
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "AutomotiveBusiness",
  name: "Upali Engineering Works",
  description:
    "Professional vehicle valuation and spare parts services across Sri Lanka.",
  url: "https://upaliengineering.lk",
  telephone: "+94771234567",
  email: "info@upaliengineering.lk",
  address: {
    "@type": "PostalAddress",
    streetAddress: "123 Galle Road",
    addressLocality: "Colombo",
    addressRegion: "Western Province",
    postalCode: "00300",
    addressCountry: "LK",
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "08:00",
      closes: "18:00",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: "Saturday",
      opens: "08:00",
      closes: "14:00",
    },
  ],
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Services",
    itemListElement: [
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Vehicle Valuation for Insurance",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Vehicle Valuation for Bank Loans",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Vehicle Valuation for Transfers",
        },
      },
      {
        "@type": "Offer",
        itemOffered: { "@type": "Service", name: "Legal Vehicle Valuation" },
      },
      {
        "@type": "Offer",
        itemOffered: { "@type": "Service", name: "Vehicle Spare Parts" },
      },
    ],
  },
  department: [
    {
      "@type": "AutomotiveBusiness",
      name: "Upali Engineering Works – Colombo Branch",
      telephone: "+94112345678",
      address: {
        "@type": "PostalAddress",
        streetAddress: "123 Galle Road",
        addressLocality: "Colombo 03",
        addressCountry: "LK",
      },
    },
    {
      "@type": "AutomotiveBusiness",
      name: "Upali Engineering Works – Kandy Branch",
      telephone: "+94812345678",
      address: {
        "@type": "PostalAddress",
        streetAddress: "456 Peradeniya Road",
        addressLocality: "Kandy",
        addressCountry: "LK",
      },
    },
    {
      "@type": "AutomotiveBusiness",
      name: "Upali Engineering Works – Galle Branch",
      telephone: "+94912345678",
      address: {
        "@type": "PostalAddress",
        streetAddress: "789 Matara Road",
        addressLocality: "Galle",
        addressCountry: "LK",
      },
    },
    {
      "@type": "AutomotiveBusiness",
      name: "Upali Engineering Works – Jaffna Branch",
      telephone: "+94212345678",
      address: {
        "@type": "PostalAddress",
        streetAddress: "321 Hospital Road",
        addressLocality: "Jaffna",
        addressCountry: "LK",
      },
    },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={`${inter.variable} font-sans antialiased text-slate-800`}>
        {children}
      </body>
    </html>
  );
}
