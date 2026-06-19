"use client";

import Link from "next/link";
import { X, Phone } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { restaurantInfo } from "@/lib/restaurant-info";
import type { Locale } from "@/lib/translations";

interface MobileNavProps {
  isOpen: boolean;
  onClose: () => void;
  locale: Locale;
  switchUrl: string;
}

const overlayVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
  exit: { opacity: 0 },
};

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.15,
    },
  },
  exit: {
    transition: {
      staggerChildren: 0.04,
      staggerDirection: -1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, ease: "easeOut" as const },
  },
  exit: { opacity: 0, y: -15, transition: { duration: 0.2 } },
};

export default function MobileNav({
  isOpen,
  onClose,
  locale,
  switchUrl,
}: MobileNavProps) {
  const navLinks =
    locale === "it"
      ? [
          { label: "Menu", href: "/menu" },
          { label: "Chi Siamo", href: "/chi-siamo" },
          { label: "Dove Siamo", href: "/dove-siamo" },
          { label: "Ordina Ora", href: restaurantInfo.phoneLink },
        ]
      : [
          { label: "Menu", href: "/en/menu" },
          { label: "About Us", href: "/en/about" },
          { label: "Find Us", href: "/en/find-us" },
          { label: "Order Now", href: restaurantInfo.phoneLink },
        ];

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 z-50 flex flex-col bg-[#2C2420]"
          variants={overlayVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
          transition={{ duration: 0.3 }}
        >
          {/* Close button */}
          <div className="flex justify-end p-6">
            <button
              onClick={onClose}
              className="text-[#FAF6F0] transition-colors hover:text-[#C8A96E]"
              aria-label="Chiudi menu"
            >
              <X size={28} />
            </button>
          </div>

          {/* Navigation links */}
          <motion.nav
            className="flex flex-1 flex-col items-center justify-center gap-8"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            {navLinks.map((link) => (
              <motion.div key={link.href} variants={itemVariants}>
                {link.href.startsWith("tel:") ? (
                  <a
                    href={link.href}
                    onClick={onClose}
                    className="font-[family-name:var(--font-playfair)] text-3xl font-medium tracking-wide text-[#FAF6F0] transition-colors hover:text-[#C8A96E]"
                  >
                    {link.label}
                  </a>
                ) : (
                  <Link
                    href={link.href}
                    onClick={onClose}
                    className="font-[family-name:var(--font-playfair)] text-3xl font-medium tracking-wide text-[#FAF6F0] transition-colors hover:text-[#C8A96E]"
                  >
                    {link.label}
                  </Link>
                )}
              </motion.div>
            ))}

            {/* Language switcher */}
            <motion.div
              variants={itemVariants}
              className="flex items-center gap-3 font-[family-name:var(--font-dm-sans)] text-xl tracking-wide"
            >
              {locale === "it" ? (
                <span className="font-bold text-[#B85C38]">IT</span>
              ) : (
                <Link
                  href={switchUrl}
                  onClick={onClose}
                  className="text-[#FAF6F0] transition-colors hover:text-[#C8A96E]"
                >
                  IT
                </Link>
              )}
              <span className="text-[#FAF6F0]/50">|</span>
              {locale === "en" ? (
                <span className="font-bold text-[#B85C38]">EN</span>
              ) : (
                <Link
                  href={switchUrl}
                  onClick={onClose}
                  className="text-[#FAF6F0] transition-colors hover:text-[#C8A96E]"
                >
                  EN
                </Link>
              )}
            </motion.div>
          </motion.nav>

          {/* Phone number */}
          <motion.div
            className="flex items-center justify-center gap-2 pb-12"
            variants={itemVariants}
            initial="hidden"
            animate="visible"
          >
            <Phone size={18} className="text-[#C8A96E]" />
            <a
              href={restaurantInfo.phoneLink}
              className="font-[family-name:var(--font-dm-sans)] text-lg tracking-wide text-[#FAF6F0] transition-colors hover:text-[#C8A96E]"
            >
              {restaurantInfo.phone}
            </a>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
