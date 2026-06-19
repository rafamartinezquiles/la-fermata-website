"use client";

import { useState, useEffect, useCallback } from "react";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import Image from "next/image";
import CTAButton from "@/components/cta-button";
import { restaurantInfo } from "@/lib/restaurant-info";

const slides = [
  {
    src: "/images/interior-wide.jpg",
    alt: "La Fermata dining room interior",
  },
  {
    src: "/images/exterior-storefront-hq.jpg",
    alt: "La Fermata facciata esterna con dehors",
  },
  {
    src: "/images/interior-wide-bar.jpg",
    alt: "La Fermata sala con bancone e area bar",
  },
];

export default function HeroCarousel() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [showChevron, setShowChevron] = useState(false);
  const pathname = usePathname();
  const locale = pathname.startsWith("/en") ? "en" : "it";

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  }, []);

  useEffect(() => {
    const interval = setInterval(nextSlide, 5000);
    return () => clearInterval(interval);
  }, [nextSlide]);

  useEffect(() => {
    const timer = setTimeout(() => setShowChevron(true), 1500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Slides */}
      <AnimatePresence mode="popLayout">
        <motion.div
          key={currentSlide}
          className="absolute inset-0"
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
        >
          <Image
            src={slides[currentSlide].src}
            alt={slides[currentSlide].alt}
            fill
            className="object-cover"
            sizes="100vw"
            priority={currentSlide === 0}
          />
        </motion.div>
      </AnimatePresence>

      {/* Dark overlay for text readability */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/20 to-black/50" />

      {/* Content */}
      <div className="relative z-10 flex h-full flex-col items-center justify-center px-6 text-center">
        <motion.h1
          className="font-[family-name:var(--font-playfair)] text-4xl font-bold uppercase tracking-[0.2em] text-[#FFFDF9] sm:text-5xl md:text-6xl lg:text-7xl"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          LA FERMATA
          <br />
          <span className="text-2xl tracking-[0.15em] sm:text-3xl md:text-4xl">
            DE GASPERI 43
          </span>
        </motion.h1>

        <motion.p
          className="mt-6 font-[family-name:var(--font-dm-sans)] text-lg font-light tracking-wide text-[#FFFDF9]/90 sm:text-xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          {locale === "en" ? "Authentic Torinese Pizzeria" : restaurantInfo.tagline}
        </motion.p>

        <motion.div
          className="mt-10 flex flex-col items-center gap-4 sm:flex-row"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.9 }}
        >
          <CTAButton variant="primary" href={locale === "en" ? "/en/menu" : "/menu"}>
            {locale === "en" ? "View the Menu" : "Guarda il Menu"}
          </CTAButton>
          <CTAButton variant="primary" href={restaurantInfo.phoneLink}>
            {locale === "en" ? "Order Now" : "Ordina Ora"} &mdash; {restaurantInfo.phone}
          </CTAButton>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <AnimatePresence>
        {showChevron && (
          <motion.div
            className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, y: [0, 8, 0] }}
            exit={{ opacity: 0 }}
            transition={{
              opacity: { duration: 0.5 },
              y: { duration: 1.5, repeat: Infinity, ease: "easeInOut" },
            }}
          >
            <ChevronDown size={28} className="text-[#FFFDF9]/70" />
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
