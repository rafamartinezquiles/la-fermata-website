import type { Metadata } from "next";
import { restaurantInfo } from "@/lib/restaurant-info";
import HomePageClient from "./home-page-client";

export const metadata: Metadata = {
  title: "La Fermata De Gasperi 43 | Pizzeria Torino",
  description: restaurantInfo.metaDescription,
  openGraph: {
    title: "La Fermata De Gasperi 43 | Pizzeria Torino",
    description: restaurantInfo.metaDescription,
    type: "website",
  },
};

export default function HomePage() {
  return <HomePageClient />;
}
