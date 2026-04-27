import Script from "next/script";
import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
  weight: ["400", "500"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://elenahw.com"),
  title: {
    default: "Elena Wang | Product Marketing & GTM Leader | AI Product Builder",
    template: "%s | Elena Wang",
  },
  description:
    "Product marketing and GTM leader building AI-powered products from concept to production, driving strategic positioning and measurable growth.",
  alternates: {
    canonical: "https://elenahw.com",
  },
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
  openGraph: {
    title: "Elena Wang",
    description: "Marketer who ships, builder who positions. Product marketing and GTM leader driving adoption and growth.",
    url: "https://elenahw.com",
    siteName: "Elena Wang",
    images: [
      {
        url: "/og.png",
        width: 1200,
        height: 630,
        alt: "Elena Wang — Marketer who ships, builder who positions",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Elena Wang",
    description:
      "Marketer who ships, builder who positions. Product marketing and GTM leader driving adoption and growth.",
    images: ["/og.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${jetbrainsMono.variable} antialiased`}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Elena Wang",
              url: "https://elenahw.com",
              jobTitle: "Product Marketing & GTM Leader",
              description:
                "Product marketing and GTM leader building AI-powered products from concept to production, driving strategic positioning and measurable growth.",
              knowsAbout: [
                "Product Marketing",
                "Go-to-Market Strategy",
                "AI Product Development",
                "Product-Led Growth",
                "Mobile App Development",
                "React Native",
                "Large Language Models",
              ],
              sameAs: [
                "https://www.linkedin.com/in/elenawang/",
                "https://x.com/Elena_H_W",
                "https://github.com/elena-h-w/",
                "https://www.instagram.com/elena.h.w/",
              ],
            }),
          }}
        />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              name: "Elena Wang",
              url: "https://elenahw.com",
            }),
          }}
        />

        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-HGTQYQZN1C"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-HGTQYQZN1C', { anonymize_ip: true });
          `}
        </Script>

        {children}
      </body>
    </html>
  );
}
