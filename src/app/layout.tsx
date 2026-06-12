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
  title: "Lucas Cummings — Full Stack Engineer",
  description:
    "Full stack engineer building mobile & web products. Lead developer on Universe Money Transfer, a regulated Canadian remittance platform shipped to iOS, Android, and web.",
  keywords: [
    "Lucas Cummings",
    "Full Stack Developer",
    "Next.js",
    "Flutter",
    "Firebase",
    "Calgary",
    "Web Developer",
  ],
  authors: [{ name: "Lucas Cummings" }],
  openGraph: {
    title: "Lucas Cummings — Full Stack Engineer",
    description:
      "Full stack engineer building mobile & web products across Node.js, TypeScript, Firebase, and GCP.",
    type: "website",
    locale: "en_CA",
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
