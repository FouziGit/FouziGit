import type { Metadata, Viewport } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Solange — Editorial & Auction",
  description:
    "Solange is a premium fashion editorial and auction house. Discover curated collections, editorial stories, and exclusive auction events.",
  openGraph: {
    title: "Solange — Editorial & Auction",
    description:
      "Premium fashion editorial and auction house. Curated collections and exclusive events.",
    type: "website",
  },
};

export const viewport: Viewport = {
  themeColor: "#f5f0eb",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr" className={`${inter.variable} ${playfair.variable}`}>
      <body className="font-sans antialiased">{children}</body>
    </html>
  );
}
