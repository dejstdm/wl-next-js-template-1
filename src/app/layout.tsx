import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "@dejstdm/white-label-ui/dist/style.css";
import "@dejstdm/white-label-ui/themes/lays/dist/theme.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "./globals.css";
import SiteLayout from "./components/SiteLayout";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "White Label UI - Next.js Template",
  description: "Next.js template using @dejstdm/white-label-ui component library",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-theme="lays">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <SiteLayout>{children}</SiteLayout>
      </body>
    </html>
  );
}
