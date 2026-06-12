import type { Metadata } from "next";
import { Inter, Manrope } from "next/font/google";
import "./globals.css";
import content from "@/data/content.json";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: content.company.seo.title,
    template: `%s | ${content.company.shortName}`,
  },
  description: content.company.seo.description,
  keywords: content.company.seo.keywords,
  openGraph: {
    title: content.company.seo.title,
    description: content.company.seo.description,
    type: "website",
    locale: "en_IN",
    siteName: content.company.name,
  },
  twitter: {
    card: "summary_large_image",
    title: content.company.seo.title,
    description: content.company.seo.description,
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${manrope.variable}`} suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": ["LocalBusiness", "ManufacturingBusiness"],
              name: content.company.name,
              description: content.company.description,
              telephone: content.company.contact.phone,
              email: content.company.contact.email,
              address: {
                "@type": "PostalAddress",
                streetAddress: content.company.contact.address,
                addressLocality: "Bangalore",
                addressRegion: "Karnataka",
                addressCountry: "IN",
              },
              openingHours: content.company.contact.businessHours,
              sameAs: [
                content.company.contact.social.linkedin,
              ],
            }),
          }}
        />
      </head>
      <body className="min-h-screen flex flex-col antialiased" suppressHydrationWarning>
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
