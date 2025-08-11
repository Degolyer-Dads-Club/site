import type { Metadata } from "next";
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
  title: "DeGolyer Elementary Dads Club",
  description: "Official website for the DeGolyer Elementary Dads Club PTO. Supporting our school community through involvement, fundraising, and fun!",
  keywords: ["DeGolyer Elementary", "Dads Club", "PTO", "Dallas ISD", "Elementary School", "Parent Organization"],
  authors: [{ name: "DeGolyer Elementary Dads Club" }],
  creator: "DeGolyer Elementary Dads Club",
  publisher: "DeGolyer Elementary Dads Club",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://degolyer-dads-club.org'),
  openGraph: {
    title: "DeGolyer Elementary Dads Club",
    description: "Supporting our school community through involvement, fundraising, and fun!",
    url: "https://degolyer-dads-club.org",
    siteName: "DeGolyer Elementary Dads Club",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "DeGolyer Elementary Dads Club",
    description: "Supporting our school community through involvement, fundraising, and fun!",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
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
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
