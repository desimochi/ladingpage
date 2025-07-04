import { Geist, Mulish } from "next/font/google";
import { GoogleAnalytics } from '@next/third-parties/google'
 import { GoogleTagManager } from '@next/third-parties/google'

import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import TimerSection from "@/components/LandingPage2/TimerSection";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const mulish = Mulish({
  variable: "--font-mulish",
  subsets: ["latin"],
  display: 'swap',
});


export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
   const targetDate = '2025-07-15T23:59:59';
  return (
    <html lang="en">
       <GoogleTagManager gtmId="GTM-MVN6NVR" />
      <body
        className={`${geistSans.variable} ${mulish.className} antialiased`}
      >
        <TimerSection targetDate={targetDate} />
        <Navbar />
        {children}
        <Footer/>
        <GoogleAnalytics gaId="G-YTTTXDKSTX" />
      </body>
    </html>
  );
}
