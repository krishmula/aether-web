import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const siteUrl = "https://aether.krishmula.dev";
const description =
  "Aether is a distributed pub-sub broker with Chandy-Lamport snapshot recovery. Kill a broker, watch it recover. Built from TCP sockets up.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Aether — distributed pub-sub with snapshot recovery",
    template: "%s · Aether",
  },
  description,
  keywords: [
    "distributed systems",
    "pub-sub",
    "message broker",
    "Chandy-Lamport",
    "gossip protocol",
    "fault tolerance",
    "Aether",
  ],
  authors: [{ name: "Krish Mula" }],
  openGraph: {
    type: "website",
    url: siteUrl,
    title: "Aether — distributed pub-sub with snapshot recovery",
    description,
    siteName: "Aether",
  },
  twitter: {
    card: "summary_large_image",
    title: "Aether — distributed pub-sub with snapshot recovery",
    description,
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export const viewport: Viewport = {
  themeColor: "#09090b",
  colorScheme: "dark",
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
      <body className="min-h-full flex flex-col bg-background text-foreground">
        {children}
        <Analytics />
      </body>
    </html>
  );
}
