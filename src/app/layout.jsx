import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import AnimatedBackground from "@/components/AnimatedBackground";
import Header from "@/components/Header";
import HeroSection from "@/components/home/HeroSection";
import Footer from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "MiniZoo",
  description: "Made By Amtul Zahra",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <div className="relative min-h-screen overflow-hidden">
      {/* 🔽 Background behind everything */}
      <AnimatedBackground />

      {/* 🔼 Foreground content */}
      <div className="relative z-10">
        <Header />
        <HeroSection />
        {children}
        <Footer/>
      </div>
    </div>
      </body>
    </html>
  );
}
