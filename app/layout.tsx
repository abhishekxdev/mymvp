import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Analytics } from "@vercel/analytics/react";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "MVP Studio",
  description: "MVP Studio",
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/logomvp.png", type: "image/png" }
    ],
    shortcut: "/favicon.ico",
    apple: "/logomvp.png",
  },
  openGraph: {
    title: "MVP Studio",
    description: "MVP Studio",
    url: "https://www.mvpstudio.in/, http://localhost:3000",
    siteName: "MVP Studio",
    images: [
      {
        url: "/opengraph-image.png", // Replace with your actual image URL
        width: 1200,
        height: 630,
        alt: "MVP Studio Preview",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "MVP Studio",
    description: "MVP Studio",
    images: ["/opengraph-image.png"], // Replace with actual image URL
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" type="image/x-icon" href="/favicon.ico" />
        <link rel="icon" type="image/png" href="/logomvp.png" />
        <link rel="shortcut icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/logomvp.png" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
        <Analytics />
      </body>
    </html>
  );
}
