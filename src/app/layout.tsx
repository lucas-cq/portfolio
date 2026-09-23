import type { Metadata, Viewport } from "next";
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
  title: "Lucas Cummings · Full Stack Engineer",
  description:
    "Full stack engineer, 4+ years shipping production software end to end. Owned a regulated Canadian fintech platform from architecture through APIs, cloud, security, and release. TypeScript, Node.js, React, PostgreSQL, GCP.",
  keywords: [
    "Lucas Cummings",
    "Full Stack Engineer",
    "TypeScript",
    "React",
    "Next.js",
    "Node.js",
    "PostgreSQL",
    "Google Cloud",
    "Gen AI",
    "OpenAI API",
    "Flutter",
    "Fintech",
    "Payments",
    "Calgary",
    "Remote Canada",
  ],
  authors: [{ name: "Lucas Cummings" }],
  openGraph: {
    title: "Lucas Cummings · Full Stack Engineer",
    description:
      "Full stack engineer building fintech and web products across TypeScript, React, Next.js, Node.js, and PostgreSQL.",
    type: "website",
    locale: "en_CA",
  },
  twitter: {
    card: "summary_large_image",
    title: "Lucas Cummings · Full Stack Engineer",
    description:
      "Full stack engineer building fintech and web products across TypeScript, React, Next.js, Node.js, and PostgreSQL.",
  },
};

export const viewport: Viewport = {
  themeColor: "#0b0b0d",
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
      <body className="min-h-full">{children}</body>
    </html>
  );
}
