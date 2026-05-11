import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";

import { ThemeProvider } from "@/components/theme-provider";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Ram Parmar | Shopify Developer & Shopify App Developer",
  description:
    "Premium single-page portfolio for Ram Parmar, a Shopify Developer crafting scalable Shopify stores, custom apps, ecommerce automation, and high-converting commerce experiences.",
  keywords: [
    "Ram Parmar",
    "Shopify Developer",
    "Shopify App Developer",
    "Shopify Plus",
    "Liquid Developer",
    "Headless Commerce",
    "Hydrogen",
    "Shopify API",
  ],
  authors: [{ name: "Ram Parmar" }],
  openGraph: {
    title: "Ram Parmar | Shopify Developer & Shopify App Developer",
    description:
      "Scalable Shopify stores, powerful Shopify apps, automation systems, and modern ecommerce solutions.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${inter.variable} ${spaceGrotesk.variable} bg-background font-sans text-foreground antialiased`}
      >
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
