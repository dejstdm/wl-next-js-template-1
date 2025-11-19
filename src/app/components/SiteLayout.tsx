"use client";

import { NavBar, Footer, FacebookIcon, InstagramIcon, XTwitterIcon } from "@dejstdm/white-label-ui";

interface SiteLayoutProps {
  children: React.ReactNode;
}

export default function SiteLayout({ children }: SiteLayoutProps) {
  const navItems = [
    { label: "Home", href: "/" },
    { label: "Our Products", href: "/products" },
    { label: "Our Commitments", href: "/commitments" },
    { label: "Quality", href: "/quality" },
    { label: "Contact Us", href: "/contact" },
  ];

  const footerLinks = [
    { label: "Contact Us", href: "/contact" },
    { label: "Privacy Policy", href: "/privacy" },
    { label: "Terms of Use", href: "/terms" },
  ];

  const socialLinks = [
    {
      name: "Facebook",
      href: "https://facebook.com/lays",
      icon: <FacebookIcon size={24} />,
    },
    {
      name: "Instagram",
      href: "https://instagram.com/lays",
      icon: <InstagramIcon size={24} />,
    },
    {
      name: "YouTube",
      href: "https://youtube.com/lays",
      icon: <XTwitterIcon size={24} />,
    },
  ];

  return (
    <>
      <NavBar items={navItems} sticky />
      {children}
      <Footer
        links={footerLinks}
        socialLinks={socialLinks}
        copyright="PEPSICO"
        copyrightYear="2025"
      />
    </>
  );
}

