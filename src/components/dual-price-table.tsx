"use client";

import type { MenuItem } from "@/lib/menu-data";

type DualPriceTableProps = {
  items: MenuItem[];
  labels: [string, string];
};

function getPrices(
  item: MenuItem,
  labels: [string, string]
): [string | undefined, string | undefined] {
  const [labelA, labelB] = labels;

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
}

export default function DualPriceTable({
  items,
  labels,
}: DualPriceTableProps) {
  return (
    <div className="w-full">
      {/* Column headers */}
      <div className="grid grid-cols-[1fr_80px_80px] items-end gap-2 border-b border-[#C8A96E]/30 px-3 pb-2 mb-1">
        <span className="font-[family-name:var(--font-dm-sans)] text-[12px] font-medium uppercase tracking-wider text-[#7A7068]">
          &nbsp;
        </span>
        <span className="text-center font-[family-name:var(--font-playfair)] text-[13px] font-semibold text-[#B85C38]">
          {labels[0]}
        </span>
        <span className="text-center font-[family-name:var(--font-playfair)] text-[13px] font-semibold text-[#B85C38]">
          {labels[1]}
        </span>
      </div>

      {/* Items */}
      <div className="divide-y divide-[#C8A96E]/10">
        {items.map((item, index) => {
          const [priceA, priceB] = getPrices(item, labels);
          const hasDualPrices = priceA || priceB;

          if (!hasDualPrices && item.price) {
            // Single-price item within a dual-price section (e.g. Linea Verde)
            return (
              <div
                key={index}
                className="group grid grid-cols-[1fr_auto] items-baseline gap-2 rounded-md px-3 py-2.5 transition-colors duration-200 hover:bg-[#FAF0E4]"
              >
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
            <div
              key={index}
              className="group grid grid-cols-[1fr_80px_80px] items-baseline gap-2 rounded-md px-3 py-2.5 transition-colors duration-200 hover:bg-[#FAF0E4]"
            >
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
        })}
      </div>
    </div>
  );
}
