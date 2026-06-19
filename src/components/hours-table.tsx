"use client";

import { restaurantInfo } from "@/lib/restaurant-info";

const dayIndexMap: Record<string, number> = {
  "Lunedì": 1,
  "Martedì": 2,
  "Mercoledì": 3,
  "Giovedì": 4,
  "Venerdì": 5,
  Sabato: 6,
  Domenica: 0,
};

function getCurrentDayIndex(): number {
  return new Date().getDay();
}

export default function HoursTable() {
  const today = getCurrentDayIndex();

  return (
    <div className="mx-auto w-full max-w-md overflow-hidden rounded-2xl border border-[#C8A96E]/20 bg-[#FFFDF9] shadow-sm">
      <div className="border-b border-[#C8A96E]/20 px-6 py-4 text-center">
        <h3 className="font-[family-name:var(--font-playfair)] text-lg font-semibold text-[#2C2420]">
          Orari di Apertura
        </h3>
      </div>

      <table className="w-full">
        <thead>
          <tr className="border-b border-[#C8A96E]/10">
            <th className="px-6 py-3 text-left font-[family-name:var(--font-dm-sans)] text-xs font-medium uppercase tracking-wider text-[#7A7068]">
              &nbsp;
            </th>
            <th className="px-4 py-3 text-center font-[family-name:var(--font-dm-sans)] text-xs font-medium uppercase tracking-wider text-[#7A7068]">
              Pranzo
            </th>
            <th className="px-4 py-3 text-center font-[family-name:var(--font-dm-sans)] text-xs font-medium uppercase tracking-wider text-[#7A7068]">
              Cena
            </th>
          </tr>
        </thead>
        <tbody>
          {restaurantInfo.hours.map((row) => {
            const isToday = dayIndexMap[row.day] === today;
            return (
              <tr
                key={row.day}
                className={`border-b border-[#C8A96E]/10 last:border-b-0 transition-colors ${
                  isToday ? "bg-[#C8A96E]/10" : ""
                }`}
              >
                <td
                  className={`px-6 py-3 font-[family-name:var(--font-playfair)] text-sm font-medium ${
                    isToday ? "text-[#B85C38]" : "text-[#2C2420]"
                  }`}
                >
                  {row.day}
                </td>
                <td className="px-4 py-3 text-center font-[family-name:var(--font-dm-sans)] text-sm text-[#7A7068]">
                  {row.pranzo}
                </td>
                <td className="px-4 py-3 text-center font-[family-name:var(--font-dm-sans)] text-sm text-[#7A7068]">
                  {row.cena}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
