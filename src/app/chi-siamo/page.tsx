import type { Metadata } from "next";
import ChiSiamoPageClient from "./chi-siamo-page-client";

export const metadata: Metadata = {
  title: "Chi Siamo — La Fermata De Gasperi 43",
  description:
    "La nostra storia: pizza al tegamino e al mattone, farinata e cucina tradizionale a Torino. Scopri chi siamo e le nostre specialità.",
};

export default function ChiSiamoPage() {
  return <ChiSiamoPageClient />;
}
