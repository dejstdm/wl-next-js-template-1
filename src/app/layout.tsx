import type { Metadata } from "next";
import "@dejstdm/white-label-ui/dist/style.css";
import "@dejstdm/white-label-ui/themes/lays/dist/theme.css";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "./globals.css";
import { NavBar, Footer } from "@dejstdm/white-label-ui";

export const metadata: Metadata = {
  title: "Lay's - Premium Potato Chips & Snacks",
  description: "Discover the crispy taste of Lay's premium potato chips and snacks. Explore our variety of delicious flavors.",
};

const navBarMenuItems = [
  { label: "Home", href: "/" },
  { label: "Products", href: "#products" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

const footerLinks = [
  { label: "About", href: "#about" },
  { label: "Careers", href: "#careers" },
  { label: "Sustainability", href: "#sustainability" },
  { label: "Impressum", href: "#impressum" },
  { label: "Contact", href: "#contact" },
];

const socialLinks = [
  {
    name: "Facebook",
    href: "https://www.facebook.com/lays",
    icon: "fa-brands fa-square-facebook",
  },
  {
    name: "Instagram",
    href: "https://www.instagram.com/lays",
    icon: "fa-brands fa-square-instagram",
  },
  {
    name: "Twitter",
    href: "https://www.twitter.com/lays",
    icon: "fa-brands fa-square-x-twitter",
  },
];

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-theme="lays">
      <body>
        <NavBar
          logo="https://cdn.builder.io/api/v1/image/assets%2F9cbbb97b27784086a538ac468ac265d8%2Ff90543d3bd8946ac8d5992589ed55cf6?format=webp&width=800"
          menuItems={navBarMenuItems}
          sticky={true}
        />
        {children}
        <Footer
          logo="https://cdn.builder.io/api/v1/image/assets%2F9cbbb97b27784086a538ac468ac265d8%2Ff90543d3bd8946ac8d5992589ed55cf6?format=webp&width=800"
          links={footerLinks}
          socialLinks={socialLinks}
          copyright="© 2025 Lay's. All rights reserved."
          copyrightYear="2025"
        />
      </body>
    </html>
  );
}
