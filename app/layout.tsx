import type { Metadata } from "next";
import {
  Anton,
  Inter,
  JetBrains_Mono, Geist } from "next/font/google";

import "./globals.css";
import { cn } from "@/lib/utils";

const geist = Geist({subsets:['latin'],variable:'--font-sans'});

const anton = Anton({
  variable: "--font-anton",
  weight: "400",
  subsets: ["latin"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Sahil Yatam | Full-Stack Developer",
    template: "%s | Sahil Yatam",
  },
  description:
    "Full-stack developer building modern, scalable web applications with React, Next.js, Node.js, Python, and more.",

  keywords: [
    "Full-Stack Developer",
    "Web Developer",
    "Software Developer",
    "Next.js Developer",
    "React Developer",
    "Node.js Developer",
    "Python Developer",
  ],

  authors: [
    {
      name: "Sahil Yatam",
    },
  ],

  creator: "Sahil Yatam",

  openGraph: {
    type: "website",
    locale: "en_US",
    title: "Sahil Yatam | Full-Stack Developer",
    description:
      "Full-stack developer building modern, scalable web applications.",
    siteName: "Sahil Yatam Portfolio",
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
    <html
      lang="en"
      className={cn("h-full", "antialiased", anton.variable, inter.variable, jetbrainsMono.variable, "font-sans", geist.variable)}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}