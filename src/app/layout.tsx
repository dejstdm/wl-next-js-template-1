import type { Metadata } from "next";
import "@dejstdm/white-label-ui/dist/white-label-ui.css";
import "./globals.css";

export const metadata: Metadata = {
  title: "White Label UI - Next.js Template",
  description: "Next.js template using @dejstdm/white-label-ui component library for Builder.io",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
