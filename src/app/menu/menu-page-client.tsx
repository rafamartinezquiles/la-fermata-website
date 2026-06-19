"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { menuSections, copertoPrice } from "@/lib/menu-data";
import MenuSectionComponent from "@/components/menu-section";

export default function MenuPageClient() {
  const [activeSection, setActiveSection] = useState(menuSections[0].id);
  const navRef = useRef<HTMLDivElement>(null);
  const navItemRefs = useRef<Map<string, HTMLButtonElement>>(new Map());
  const isScrollingRef = useRef(false);

  // Scroll the active nav button into view within the horizontal nav bar
  const scrollNavItemIntoView = useCallback((sectionId: string) => {
    const navEl = navRef.current;
    const btnEl = navItemRefs.current.get(sectionId);
    if (!navEl || !btnEl) return;

    const navRect = navEl.getBoundingClientRect();
    const btnRect = btnEl.getBoundingClientRect();

    const offsetLeft = btnRect.left - navRect.left + navEl.scrollLeft;
    const scrollTarget = offsetLeft - navRect.width / 2 + btnRect.width / 2;

    navEl.scrollTo({ left: scrollTarget, behavior: "smooth" });
  }, []);

  // IntersectionObserver to track current section
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (isScrollingRef.current) return;

        for (const entry of entries) {
          if (entry.isIntersecting) {
            const id = entry.target.id;
            setActiveSection(id);
            scrollNavItemIntoView(id);
          }
        }
      },
      {
        rootMargin: "-120px 0px -60% 0px",
        threshold: 0,
      }
    );

    const sectionEls = menuSections
      .map((s) => document.getElementById(s.id))
      .filter(Boolean) as HTMLElement[];

    sectionEls.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, [scrollNavItemIntoView]);

  const handleNavClick = (sectionId: string) => {
    setActiveSection(sectionId);
    scrollNavItemIntoView(sectionId);

    const el = document.getElementById(sectionId);
    if (el) {
      isScrollingRef.current = true;
      el.scrollIntoView({ behavior: "smooth" });

      // Reset the flag after scroll completes
      setTimeout(() => {
        isScrollingRef.current = false;
      }, 800);
    }
  };

  return (
    <div className="min-h-screen bg-[#FFFDF9]">
      {/* Page header */}
      <div className="pt-28 pb-8 text-center md:pt-32 md:pb-12">
        <motion.h1
          className="font-[family-name:var(--font-playfair)] text-3xl font-bold tracking-wider text-[#2C2420] md:text-5xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          Menu
        </motion.h1>
        <motion.p
          className="mt-2 font-[family-name:var(--font-dm-sans)] text-[14px] tracking-wide text-[#7A7068]"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.15, ease: "easeOut" }}
        >
          La Fermata De Gasperi 43
        </motion.p>
        <motion.div
          className="mt-4 flex items-center justify-center gap-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <div className="h-px w-20 bg-[#C8A96E]/40" />
          <div className="h-2.5 w-2.5 rotate-45 border border-[#C8A96E] bg-transparent" />
          <div className="h-px w-20 bg-[#C8A96E]/40" />
        </motion.div>
      </div>

      {/* Sticky section navigation */}
      <div className="sticky top-[72px] z-30 border-b border-[#C8A96E]/20 bg-[#FFFDF9]/95 backdrop-blur-sm">
        <div
          ref={navRef}
          className="scrollbar-hide mx-auto flex max-w-4xl gap-1 overflow-x-auto px-4 py-2"
        >
          {menuSections.map((section) => (
            <button
              key={section.id}
              ref={(el) => {
                if (el) navItemRefs.current.set(section.id, el);
              }}
              onClick={() => handleNavClick(section.id)}
              className={`shrink-0 rounded-full px-4 py-1.5 font-[family-name:var(--font-dm-sans)] text-[13px] font-medium transition-all duration-200 ${
                activeSection === section.id
                  ? "bg-[#B85C38] text-white shadow-sm"
                  : "text-[#7A7068] hover:bg-[#FAF0E4] hover:text-[#2C2420]"
              }`}
            >
              {section.title}
            </button>
          ))}
        </div>
      </div>

      {/* Menu sections */}
      <div className="mx-auto max-w-4xl space-y-16 px-4 py-12 md:space-y-20 md:px-6">
        {menuSections.map((section) => (
          <MenuSectionComponent key={section.id} section={section} />
        ))}

        {/* Coperto note */}
        <div className="border-t border-[#C8A96E]/30 pt-8 text-center">
          <div className="flex items-center justify-center gap-4 mb-4">
            <div className="h-px w-12 bg-[#C8A96E]/40" />
            <div className="h-2 w-2 rotate-45 border border-[#C8A96E] bg-transparent" />
            <div className="h-px w-12 bg-[#C8A96E]/40" />
          </div>
          <p className="font-[family-name:var(--font-playfair)] text-lg font-semibold text-[#2C2420]">
            Coperto: {copertoPrice}
          </p>
        </div>
      </div>
    </div>
  );
}
