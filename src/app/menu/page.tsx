import type { Metadata } from "next";
import MenuPageClient from "./menu-page-client";

export const metadata: Metadata = {
  title: "Menu — La Fermata De Gasperi 43",
  description:
    "Scopri il nostro menu: pizze classiche e speciali al tegamino e mattone, farinata, focaccia, calzoni, e molto altro. La Fermata De Gasperi 43, Torino.",
};

export default function MenuPage() {
  return <MenuPageClient />;
}
