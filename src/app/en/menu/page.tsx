import type { Metadata } from "next";
import MenuPageClientEN from "./menu-page-client";

export const metadata: Metadata = {
  title: "Menu — La Fermata De Gasperi 43",
  description:
    "Discover our menu: classic and special pizzas al tegamino and mattone, farinata, focaccia, calzoni, and much more. La Fermata De Gasperi 43, Torino.",
};

export default function MenuPageEN() {
  return <MenuPageClientEN />;
}
