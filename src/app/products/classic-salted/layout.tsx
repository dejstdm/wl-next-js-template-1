import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Classic Salted | Lay's",
  description: "Discover Lay's Classic Salted potato chips: simple, crispy, and perfectly salted.",
};

export default function ClassicSaltedLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>{children}</>;
}

