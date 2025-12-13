import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Products (Zig-Zag) | Lay's",
  description: "Explore the Lay's range in a zig-zag layout: classic flavors, MAX, 3D, and farmhouse-style chips.",
};

export default function ProductsZigZagLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>{children}</>;
}

