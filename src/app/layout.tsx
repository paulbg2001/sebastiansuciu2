import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Inter } from 'next/font/google';
import React from "react";

const inter = Inter({
    subsets: ['latin'],
    display: 'swap',
    variable: '--font-inter',
});

export const metadata: Metadata = {
  title: "Sebastian Suciu cele mai inovative Servicii Marketing",
  description: "Servicii de Marketing oferite la cel mai bun pret de pe piata doar la Sebastian Suciu Marketing. Adu-ti afacerea la nivelul urmator",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.variable}>
      <Navbar/>
        {children}
      <Footer/>
      </body>
    </html>
  );
}
