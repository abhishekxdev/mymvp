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
  title: "MVP",
  description: "Anubhav's MVP Agency",
  openGraph: {
    title: "MVP",
    description: "Anubhav's MVP Agency",
    url: "https://www.mvpexperience.agency, http://localhost:3000",
    siteName: "MVP",
    images: [
      {
        url: "/opengraph-image.png", // Replace with your actual image URL
        width: 1200,
        height: 630,
        alt: "MVP Agency Preview",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "MVP",
    description: "Anubhav's MVP Agency",
    images: ["/opengraph-image.png"], // Replace with actual image URL
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
        <Analytics />
      </body>
    </html>
  );
}
