import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Barbecue | Lay's",
  description: "Discover Lay's Barbecue potato chips: bold, smoky flavor made for sharing.",
};

export default function BarbecueLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>{children}</>;
}

