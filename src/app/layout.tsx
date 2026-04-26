import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Script from "next/script";
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
  metadataBase: new URL("https://figures.psyverse.fun"),
  title: "100 Most Influential Figures in History · Ranked | 人类历史100位最具影响力人物排行榜",
  description:
    "100 world-historical figures ranked by influence, legacy, and civilizational reach — from Jesus and Aristotle to Darwin and Einstein. Bilingual EN/中文.",
  keywords: ["most influential people", "history ranking", "Jesus", "Newton", "Einstein", "Confucius", "historical figures", "civilization", "影响力排行", "历史人物"],
  authors: [{ name: "Gewenbo", url: "https://psyverse.fun" }],
  alternates: {
    canonical: "/",
    languages: { en: "/", "zh-CN": "/", "x-default": "/" },
  },
  openGraph: {
    images: [{ url: "/opengraph-image.png", width: 1200, height: 630, alt: "100 Most Influential Figures in History" }],
    title: "100 Most Influential Figures in History · Ranked",
    description: "100 world-historical figures ranked by influence, legacy, and reach — Jesus, Newton, Darwin, Einstein and 96 more.",
    url: "https://figures.psyverse.fun/",
    siteName: "Psyverse",
    type: "website",
    locale: "en_US",
    alternateLocale: ["zh_CN"],
  },
  twitter: {
    images: ["/twitter-image.png"],
    card: "summary_large_image",
    title: "100 Most Influential Figures in History · Ranked",
    description: "100 world-historical figures ranked by influence, legacy, and civilizational reach. Bilingual EN/中文.",
  },
  robots: { index: true, follow: true },
  other: { "theme-color": "#1a1209" },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <Script src="https://analytics-dashboard-two-blue.vercel.app/tracker.js" strategy="afterInteractive" />
        {children}
      </body>
    </html>
  );
}
