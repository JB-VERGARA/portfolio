import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";
import Cursor from "@/components/Cursor";

export const metadata: Metadata = {
  metadataBase: new URL("https://johnbryanvergara.vercel.app"),

  title: {
    default: "John Bryan Vergara — IT, Development, Design & Automation",
    template: "%s — John Bryan Vergara",
  },

  description:
    "The portfolio of John Bryan Vergara — an IT professional who builds practical software, responsive web experiences, automation tools, and thoughtful digital interfaces.",

  keywords: [
    "John Bryan Vergara",
    "Bryan Vergara",
    "IT Professional",
    "Information Technology",
    "Software Development",
    "Web Development",
    "Web Design",
    "UI Design",
    "UX Design",
    "Automation",
    "Python",
    "Next.js",
    "Portfolio",
  ],

  authors: [
    {
      name: "John Bryan Vergara",
      url: "https://johnbryanvergara.vercel.app",
    },
  ],

  creator: "John Bryan Vergara",
  publisher: "John Bryan Vergara",

  category: "technology",

  alternates: {
    canonical: "/",
  },

  openGraph: {
    title:
      "John Bryan Vergara — IT, Development, Design & Automation",
    description:
      "Explore the work of John Bryan Vergara across software development, web design, automation, IT, and visual experimentation.",
    url: "https://johnbryanvergara.vercel.app",
    siteName: "John Bryan Vergara",
    type: "website",
    locale: "en_US",
    images: [
      {
        url: "/og-image.png",
        width: 1734,
        height: 907,
        alt: "John Bryan Vergara — IT, Development, Design & Automation",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title:
      "John Bryan Vergara — IT, Development, Design & Automation",
    description:
      "Explore the work of John Bryan Vergara across software development, web design, automation, IT, and visual experimentation.",
    images: ["/og-image.png"],
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
    <html lang="en" data-scroll-behavior="smooth">
      <body>
        <Cursor />

        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-NDFLGVYVCM"
          strategy="afterInteractive"
        />

        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){window.dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-NDFLGVYVCM');
          `}
        </Script>

        {children}
      </body>
    </html>
  );
}