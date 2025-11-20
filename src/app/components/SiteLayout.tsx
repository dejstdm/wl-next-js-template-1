"use client";

import { NavBar, Footer } from "@dejstdm/white-label-ui";

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
      icon: "fa-brands fa-square-facebook",
    },
    {
      name: "Twitter",
      href: "https://twitter.com/lays",
      icon: "fa-brands fa-square-x-twitter",
    },
  ];

  return (
    <>
      <NavBar 
        items={navItems} 
        sticky 
        logoSrc="/images/logo.png"
        logoAlt="Lay's Logo"
      />
      {children}
      <Footer
        links={footerLinks}
        socialLinks={socialLinks}
        copyright="PEPSICO"
        copyrightYear="2025"
        logoSrc="/images/logo.png"
        logoAlt="Lay's Logo"
      />
    </>
  );
}

