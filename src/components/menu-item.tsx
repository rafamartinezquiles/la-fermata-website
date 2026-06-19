"use client";

import type { MenuItem } from "@/lib/menu-data";

type MenuItemRowProps = {
  item: MenuItem;
  dualPrice?: boolean;
  dualPriceLabels?: [string, string];
};

export default function MenuItemRow({
  item,
  dualPrice,
  dualPriceLabels,
}: MenuItemRowProps) {
  // Determine dual-price keys from the labels
  const getDualPrices = (): [string | undefined, string | undefined] => {
    if (!dualPrice || !dualPriceLabels) return [undefined, undefined];

    const [labelA, labelB] = dualPriceLabels;

    if (labelA === "Tegamino" && labelB === "Mattone") {
      return [item.priceTegamino, item.priceMattone];
    }
    if (labelA === "Piccola" && labelB === "Media") {
      return [item.pricePiccola, item.priceMedia];
    }
    if (labelA === "Bionda" && labelB === "Rossa") {
      return [item.priceBionda, item.priceRossa];
    }

    return [undefined, undefined];
  };

  if (dualPrice && dualPriceLabels) {
    const [priceA, priceB] = getDualPrices();

    // If the item has a single price instead of dual (e.g. Linea Verde),
    // display it spanning both columns
    if (!priceA && !priceB && item.price) {
      return (
        <div className="group grid grid-cols-[1fr_auto] items-baseline gap-2 rounded-md px-3 py-2.5 transition-colors duration-200 hover:bg-[#FAF0E4]">
          <div className="min-w-0">
            <span className="font-[family-name:var(--font-playfair)] text-[15px] font-semibold text-[#2C2420]">
              {item.name}
            </span>
            {item.description && (
              <p className="mt-0.5 font-[family-name:var(--font-dm-sans)] text-[13px] leading-snug text-[#7A7068]">
                {item.description}
              </p>
            )}
          </div>
          <span className="font-[family-name:var(--font-dm-sans)] text-[14px] font-medium text-[#2C2420] whitespace-nowrap">
            {item.price}
          </span>
        </div>
      );
    }

    return (
      <div className="group grid grid-cols-[1fr_80px_80px] items-baseline gap-2 rounded-md px-3 py-2.5 transition-colors duration-200 hover:bg-[#FAF0E4]">
        <div className="min-w-0">
          <span className="font-[family-name:var(--font-playfair)] text-[15px] font-semibold text-[#2C2420]">
            {item.name}
          </span>
          {item.description && (
            <p className="mt-0.5 font-[family-name:var(--font-dm-sans)] text-[13px] leading-snug text-[#7A7068]">
              {item.description}
            </p>
          )}
        </div>
        <span className="text-center font-[family-name:var(--font-dm-sans)] text-[14px] font-medium text-[#2C2420] whitespace-nowrap">
          {priceA ?? "—"}
        </span>
        <span className="text-center font-[family-name:var(--font-dm-sans)] text-[14px] font-medium text-[#2C2420] whitespace-nowrap">
          {priceB ?? "—"}
        </span>
      </div>
    );
  }

  // Detect inline dual prices (e.g. Piccola/Media or Bionda/Rossa without
  // the section-level dualPrice flag)
  if (item.pricePiccola || item.priceMedia) {
    return (
      <div className="group flex flex-wrap items-baseline gap-2 rounded-md px-3 py-2.5 transition-colors duration-200 hover:bg-[#FAF0E4]">
        <span className="font-[family-name:var(--font-playfair)] text-[15px] font-semibold text-[#2C2420]">
          {item.name}
        </span>
        <span className="flex-1 min-w-[40px] border-b border-dotted border-[#C8A96E]/50" />
        <span className="font-[family-name:var(--font-dm-sans)] text-[13px] text-[#7A7068] whitespace-nowrap">
          Piccola {item.pricePiccola}
        </span>
        <span className="font-[family-name:var(--font-dm-sans)] text-[13px] text-[#7A7068] whitespace-nowrap">
          Media {item.priceMedia}
        </span>
      </div>
    );
  }

  if (item.priceBionda || item.priceRossa) {
    return (
      <div className="group flex flex-wrap items-baseline gap-2 rounded-md px-3 py-2.5 transition-colors duration-200 hover:bg-[#FAF0E4]">
        <span className="font-[family-name:var(--font-playfair)] text-[15px] font-semibold text-[#2C2420]">
          {item.name}
        </span>
        <span className="flex-1 min-w-[40px] border-b border-dotted border-[#C8A96E]/50" />
        <span className="font-[family-name:var(--font-dm-sans)] text-[13px] text-[#7A7068] whitespace-nowrap">
          Bionda {item.priceBionda}
        </span>
        <span className="font-[family-name:var(--font-dm-sans)] text-[13px] text-[#7A7068] whitespace-nowrap">
          Rossa {item.priceRossa}
        </span>
      </div>
    );
  }

  // Standard single-price item with dotted leader
  return (
    <div className="group rounded-md px-3 py-2.5 transition-colors duration-200 hover:bg-[#FAF0E4]">
      <div className="flex items-baseline gap-2">
        <span className="font-[family-name:var(--font-playfair)] text-[15px] font-semibold text-[#2C2420] min-w-0">
          {item.name}
        </span>
        {item.price && (
          <span className="flex-1 min-w-[20px] border-b border-dotted border-[#C8A96E]/50 translate-y-[-3px] shrink-0" />
        )}
        {item.price && (
          <span className="font-[family-name:var(--font-dm-sans)] text-[14px] font-medium text-[#2C2420] whitespace-nowrap shrink-0">
            {item.price}
          </span>
        )}
      </div>
      {item.description && (
        <p className="mt-0.5 font-[family-name:var(--font-dm-sans)] text-[13px] leading-snug text-[#7A7068]">
          {item.description}
        </p>
      )}
    </div>
  );
}
