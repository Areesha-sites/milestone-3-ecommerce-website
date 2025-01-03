import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { ResponsiveNav } from "./Components/ResponsiveNav";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Chow Champ",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased relative mx-auto `}
      >
        <Header />
        <ResponsiveNav />
        {children}
        <Footer />
      </body>
    </html>
  );
}
