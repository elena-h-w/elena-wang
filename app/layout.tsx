import Script from "next/script";
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.elenahw.com"),
  title: {
    default: "Elena Wang | Product Marketing & GTM Leader | AI Product Builder",
    template: "%s | Elena Wang",
  },
  description:
    "Product marketing and GTM leader building AI-powered products from concept to production, driving strategic positioning and measurable growth.",
  alternates: {
    canonical: "https://www.elenahw.com",
  },
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
  openGraph: {
    title: "Elena Wang",
    description: "I build AI-powered tools and translate them into growth.",
    url: "https://www.elenahw.com",
    siteName: "Elena Wang",
    images: [
      {
        url: "/og.png",
        width: 1200,
        height: 630,
        alt: "Elena Wang — AI tools + growth",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Elena Wang",
    description:
      "Product marketing leader building AI-powered systems and translating them into growth.",
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
            <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Elena Wang",
              url: "https://www.elenahw.com",
              jobTitle: "Product Marketing & GTM Leader",
              sameAs: [
                "https://www.linkedin.com/in/elenawang/",
                "https://github.com/elena-h-w/",
              ],
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