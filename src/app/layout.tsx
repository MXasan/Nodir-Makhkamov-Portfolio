import type { Metadata } from "next";
import { Fraunces, Inter } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Menu } from "@/components/ui/menu"
const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Nodir Makhkamov | Software Engineer",
  description: "Personal website of Nodir Makhkamov, a software engineer specializing in building high-quality web applications.",
  openGraph: {
    title: "Nodir Makhkamov | Software Engineer",
    description: "Personal website of Nodir Makhkamov, a software engineer specializing in building high-quality web applications.",
    url: "https://example.com",
    siteName: "Nodir Makhkamov",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Nodir Makhkamov | Software Engineer",
    description: "Personal website of Nodir Makhkamov, a software engineer specializing in building high-quality web applications.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${fraunces.variable} ${inter.variable} antialiased min-h-screen flex flex-col bg-background text-foreground font-sans`}
      >
        <div className="flex-1 mx-3 sm:mx-5 md:mx-7">
          <Header />
        </div>
        <main className="flex-1 px-3 sm:px-5 md:px-7">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
