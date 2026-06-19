"use client";

import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { ChevronDown } from "lucide-react";
import type { MenuSection } from "@/lib/menu-data";
import MenuItemRow from "@/components/menu-item";
import DualPriceTable from "@/components/dual-price-table";

type MenuSectionProps = {
  section: MenuSection;
};

function SectionHeading({
  title,
  isAccordion,
  isOpen,
  onToggle,
}: {
  title: string;
  isAccordion: boolean;
  isOpen: boolean;
  onToggle: () => void;
}) {
  const content = (
    <>
      <h2 className="font-[family-name:var(--font-playfair)] text-2xl font-bold tracking-wide text-[#2C2420] md:text-3xl">
        {title}
      </h2>
      {/* Ornamental divider */}
      <div className="mt-3 flex items-center justify-center gap-3">
        <div className="h-px w-16 bg-[#C8A96E]/50" />
        <div className="h-2 w-2 rotate-45 border border-[#C8A96E] bg-transparent" />
        <div className="h-px w-16 bg-[#C8A96E]/50" />
      </div>
    </>
  );

  if (isAccordion) {
    return (
      <button
        onClick={onToggle}
        className="flex w-full flex-col items-center text-center md:hidden"
        aria-expanded={isOpen}
      >
        <div className="flex items-center gap-3">
          <h2 className="font-[family-name:var(--font-playfair)] text-2xl font-bold tracking-wide text-[#2C2420]">
            {title}
          </h2>
          <ChevronDown
            size={20}
            className={`text-[#C8A96E] transition-transform duration-300 ${
              isOpen ? "rotate-180" : ""
            }`}
          />
        </div>
        <div className="mt-3 flex items-center justify-center gap-3">
          <div className="h-px w-16 bg-[#C8A96E]/50" />
          <div className="h-2 w-2 rotate-45 border border-[#C8A96E] bg-transparent" />
          <div className="h-px w-16 bg-[#C8A96E]/50" />
        </div>
      </button>
    );
  }

  return <div className="flex flex-col items-center text-center">{content}</div>;
}

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.04,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 12 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.35, ease: "easeOut" as const },
  },
};

export default function MenuSectionComponent({ section }: MenuSectionProps) {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });
  const [isOpen, setIsOpen] = useState(false);

  const renderItems = () => {
    // Dual price section (no subsections) — use DualPriceTable
    if (section.dualPrice && section.dualPriceLabels && section.items && !section.subsections) {
      return (
        <DualPriceTable
          items={section.items}
          labels={section.dualPriceLabels}
        />
      );
    }

    // Direct items only (no subsections)
    if (section.items && !section.subsections) {
      return (
        <div className="space-y-0.5">
          {section.items.map((item, index) => (
            <motion.div key={index} variants={itemVariants}>
              <MenuItemRow item={item} />
            </motion.div>
          ))}
        </div>
      );
    }

    // Subsections (optionally followed by standalone items)
    if (section.subsections) {
      return (
        <div className="space-y-8">
          {section.subsections.map((subsection, subIndex) => {
            const hasPiccolaMedia = subsection.items.some(
              (i) => i.pricePiccola || i.priceMedia
            );
            const hasBiondaRossa = subsection.items.some(
              (i) => i.priceBionda || i.priceRossa
            );

            return (
              <div key={subIndex}>
                <h3 className="mb-3 border-b border-[#C8A96E]/20 pb-2 font-[family-name:var(--font-playfair)] text-lg font-semibold text-[#4A5D3A]">
                  {subsection.title}
                </h3>
                {hasPiccolaMedia ? (
                  <DualPriceTable
                    items={subsection.items}
                    labels={["Piccola", "Media"]}
                  />
                ) : hasBiondaRossa ? (
                  <DualPriceTable
                    items={subsection.items}
                    labels={["Bionda", "Rossa"]}
                  />
                ) : (
                  <div className="space-y-0.5">
                    {subsection.items.map((item, itemIndex) => (
                      <motion.div key={itemIndex} variants={itemVariants}>
                        <MenuItemRow item={item} />
                      </motion.div>
                    ))}
                  </div>
                )}
              </div>
            );
          })}
          {section.items && (
            <div className="space-y-0.5">
              {section.items.map((item, index) => (
                <motion.div key={`standalone-${index}`} variants={itemVariants}>
                  <MenuItemRow item={item} />
                </motion.div>
              ))}
            </div>
          )}
        </div>
      );
    }

    return null;
  };

  return (
    <section ref={ref} id={section.id} className="scroll-mt-32">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        className="mx-auto max-w-2xl"
      >
        {/* Desktop heading (always visible) */}
        <div className="mb-6 hidden md:block">
          <SectionHeading
            title={section.title}
            isAccordion={false}
            isOpen={true}
            onToggle={() => {}}
          />
          {section.description && (
            <p className="mt-3 text-center font-[family-name:var(--font-dm-sans)] text-[14px] leading-relaxed text-[#7A7068]">
              {section.description}
            </p>
          )}
          {section.note && (
            <p className="mt-2 text-center font-[family-name:var(--font-dm-sans)] text-[13px] italic leading-relaxed text-[#7A7068]">
              {section.note}
            </p>
          )}
        </div>

        {/* Mobile heading (accordion) */}
        <div className="mb-4 md:hidden">
          <SectionHeading
            title={section.title}
            isAccordion={true}
            isOpen={isOpen}
            onToggle={() => setIsOpen((prev) => !prev)}
          />
          {section.description && (
            <p className="mt-3 text-center font-[family-name:var(--font-dm-sans)] text-[13px] leading-relaxed text-[#7A7068]">
              {section.description}
            </p>
          )}
          {section.note && (
            <p className="mt-2 text-center font-[family-name:var(--font-dm-sans)] text-[12px] italic leading-relaxed text-[#7A7068]">
              {section.note}
            </p>
          )}
        </div>

        {/* Desktop content (always visible) */}
        <div className="hidden md:block">
          <motion.div variants={itemVariants}>{renderItems()}</motion.div>
        </div>

        {/* Mobile content (collapsible) */}
        <motion.div
          className="overflow-hidden md:hidden"
          initial={false}
          animate={{
            height: isOpen ? "auto" : 0,
            opacity: isOpen ? 1 : 0,
          }}
          transition={{ duration: 0.35, ease: "easeInOut" }}
        >
          <div className="pt-2">{renderItems()}</div>
        </motion.div>
      </motion.div>
    </section>
  );
}
