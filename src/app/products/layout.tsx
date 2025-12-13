import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Products | Lay's",
  description: "Explore the Lay's range: classic flavors, MAX, 3D, and Farmhouse-style chips.",
};

export default function ProductsLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>{children}</>;
}

