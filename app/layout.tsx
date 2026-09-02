import type { Metadata } from "next";

import "./globals.css";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Petals & Prose | Artisan Floristry",
  description:
    "Beautiful hand-crafted flower arrangements for every moment.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">

      <body>

        <Navbar />

        {children}

        <Footer />

      </body>

    </html>
  );
}