"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Phone, Menu } from "lucide-react";
import { motion } from "framer-motion";
import { restaurantInfo } from "@/lib/restaurant-info";
import { getLocalePath } from "@/lib/translations";
import MobileNav from "@/components/mobile-nav";

const pathMap: Record<string, string> = {
  "/": "/en",
  "/menu": "/en/menu",
  "/chi-siamo": "/en/about",
  "/dove-siamo": "/en/find-us",
  "/en": "/",
  "/en/menu": "/menu",
  "/en/about": "/chi-siamo",
  "/en/find-us": "/dove-siamo",
};

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileNavOpen, setMobileNavOpen] = useState(false);
  const pathname = usePathname();
  const locale = pathname.startsWith("/en") ? "en" : "it";
  const isHome = pathname === "/" || pathname === "/en";
  const useDarkText = !isHome || scrolled;

  const navLinks =
    locale === "it"
      ? [
          { label: "Menu", href: "/menu" },
          { label: "Chi Siamo", href: "/chi-siamo" },
          { label: "Dove Siamo", href: "/dove-siamo" },
        ]
      : [
          { label: "Menu", href: "/en/menu" },
          { label: "About Us", href: "/en/about" },
          { label: "Find Us", href: "/en/find-us" },
        ];

  const switchUrl = pathMap[pathname] ?? (locale === "it" ? "/en" : "/");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <motion.header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          useDarkText
            ? "bg-[#FAF6F0]/90 backdrop-blur-md shadow-sm"
            : "bg-transparent"
        }`}
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          {/* Logo */}
          <Link
            href={locale === "it" ? "/" : "/en"}
            className={`font-[family-name:var(--font-playfair)] text-2xl font-bold tracking-[0.15em] transition-colors hover:text-[#B85C38] ${
              useDarkText ? "text-[#2C2420]" : "text-white drop-shadow-md"
            }`}
          >
            LA FERMATA
          </Link>

          {/* Desktop navigation */}
          <nav className="hidden items-center gap-8 md:flex">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`group relative font-[family-name:var(--font-dm-sans)] text-sm font-medium tracking-wide transition-colors hover:text-[#B85C38] ${
                  useDarkText ? "text-[#2C2420]" : "text-white drop-shadow-sm"
                }`}
              >
                {link.label}
                <span className="absolute -bottom-1 left-0 h-0.5 w-0 bg-[#B85C38] transition-all duration-300 group-hover:w-full" />
              </Link>
            ))}

            {/* Language switcher */}
            <div
              className={`flex items-center gap-1.5 font-[family-name:var(--font-dm-sans)] text-sm font-medium tracking-wide ${
                useDarkText ? "text-[#2C2420]" : "text-white drop-shadow-sm"
              }`}
            >
              {locale === "it" ? (
                <span className="font-bold text-[#B85C38]">IT</span>
              ) : (
                <Link href={switchUrl} className="transition-colors hover:text-[#B85C38]">
                  IT
                </Link>
              )}
              <span>|</span>
              {locale === "en" ? (
                <span className="font-bold text-[#B85C38]">EN</span>
              ) : (
                <Link href={switchUrl} className="transition-colors hover:text-[#B85C38]">
                  EN
                </Link>
              )}
            </div>

            {/* Phone */}
            <a
              href={restaurantInfo.phoneLink}
              className={`flex items-center gap-2 font-[family-name:var(--font-dm-sans)] text-sm font-medium tracking-wide transition-colors hover:text-[#B85C38] ${
                useDarkText ? "text-[#2C2420]" : "text-white drop-shadow-sm"
              }`}
            >
              <Phone size={16} />
              <span className="hidden lg:inline">{restaurantInfo.phone}</span>
            </a>
          </nav>

          {/* Mobile menu button */}
          <button
            onClick={() => setMobileNavOpen(true)}
            className={`transition-colors hover:text-[#B85C38] md:hidden ${
              useDarkText ? "text-[#2C2420]" : "text-white drop-shadow-sm"
            }`}
            aria-label="Apri menu"
          >
            <Menu size={24} />
          </button>
        </div>
      </motion.header>

      {/* Mobile navigation overlay */}
      <MobileNav
        isOpen={mobileNavOpen}
        onClose={() => setMobileNavOpen(false)}
        locale={locale}
        switchUrl={switchUrl}
      />
    </>
  );
}
