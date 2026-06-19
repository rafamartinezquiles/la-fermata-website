"use client";

import Link from "next/link";
import { motion } from "framer-motion";

interface CTAButtonProps {
  variant: "primary" | "secondary";
  href: string;
  children: React.ReactNode;
}

export default function CTAButton({ variant, href, children }: CTAButtonProps) {
  const baseClasses =
    "inline-flex items-center justify-center rounded-lg px-8 py-3.5 text-sm font-medium tracking-wide uppercase transition-colors duration-200";

  const variantClasses =
    variant === "primary"
      ? "bg-[#B85C38] text-[#FFFDF9] hover:bg-[#9A4D2F]"
      : "border-2 border-[#B85C38] text-[#B85C38] hover:bg-[#B85C38]/10";

  const className = `${baseClasses} ${variantClasses}`;

  const isExternal = href.startsWith("http") || href.startsWith("tel:");

  if (isExternal) {
    return (
      <motion.a
        href={href}
        className={className}
        target={href.startsWith("tel:") ? undefined : "_blank"}
        rel={href.startsWith("tel:") ? undefined : "noopener noreferrer"}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
      >
        {children}
      </motion.a>
    );
  }

  return (
    <Link href={href} passHref legacyBehavior>
      <motion.a
        className={className}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
      >
        {children}
      </motion.a>
    </Link>
  );
}
