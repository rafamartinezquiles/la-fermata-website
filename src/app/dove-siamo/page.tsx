import type { Metadata } from "next";
import DoveSiamoPageClient from "./dove-siamo-page-client";

export const metadata: Metadata = {
  title: "Dove Siamo — La Fermata De Gasperi 43",
  description:
    "Trovaci in Corso Alcide De Gasperi 43, Torino. Orari di apertura, mappa e indicazioni per raggiungerci. Chiama per prenotare: 011 305 4718.",
};

export default function DoveSiamoPage() {
  return <DoveSiamoPageClient />;
}
