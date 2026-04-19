import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const outfit = Outfit({ subsets: ["latin"], variable: "--font-outfit" });

export const metadata: Metadata = {
  title: "Chorum Meenum | Authentic Kerala Meals & Fish Fry Experience",
  description: "Experience the cinematic art of Kerala cuisine. Indulge in our signature fish fry and traditional meals served with love.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${outfit.variable}`}>
      <body className="bg-[#050505] text-white antialiased font-sans">
        {children}
      </body>
    </html>
  );
}
