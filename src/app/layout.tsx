import type { Metadata } from "next";
import "@dejstdm/white-label-ui/dist/style.css";
import "@dejstdm/white-label-ui/themes/lays/dist/theme.css";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "./globals.css";
import { NavBar, Footer } from "@dejstdm/white-label-ui";
import type { NavBarItem, FooterLink, FooterSocialLink } from "@dejstdm/white-label-ui";

export const metadata: Metadata = {
  title: "Lay's | Chip's Lay's",
  description: "Discover Lay's chips - irresistible chips to brighten up your aperitifs, summer barbecues, and picnics.",
};

const navItems: NavBarItem[] = [
  { label: "Our Products", href: "/products" },
  { label: "Our Commitments", href: "/commitments" },
  { label: "Quality", href: "/quality" },
  { label: "Contact Us", href: "/contact" },
];

const footerLinks: FooterLink[] = [
  { label: "Contact Us", href: "/contact" },
  { label: "Privacy Policy", href: "/privacy" },
  { label: "Terms of Use", href: "/terms" },
];

const socialLinks: FooterSocialLink[] = [
  {
    name: "Facebook",
    href: "https://facebook.com/lays",
    icon: "fa-brands fa-square-facebook",
  },
  {
    name: "Instagram",
    href: "https://instagram.com/lays",
    icon: "fa-brands fa-square-instagram",
  },
  {
    name: "Youtube",
    href: "https://youtube.com/lays",
    icon: "fa-brands fa-square-youtube",
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
          logoSrc="/Lays-2025-12-13/Lays-logo.png"
          logoAlt="Lay's Logo"
          items={navItems}
          sticky
        />
        {children}
        <Footer
          logoSrc="/Lays-2025-12-13/Lays-logo.png"
          logoAlt="Lay's Logo"
          links={footerLinks}
          socialLinks={socialLinks}
          copyright="PEPSICO"
          copyrightYear="2025"
        />
      </body>
    </html>
  );
}
