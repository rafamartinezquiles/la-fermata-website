import type { Metadata } from "next";
import { restaurantInfo } from "@/lib/restaurant-info";
import HomePageClientEN from "./home-page-client";

export const metadata: Metadata = {
  title: "La Fermata De Gasperi 43 | Authentic Torinese Pizzeria in Turin",
  description: restaurantInfo.metaDescription,
  openGraph: {
    title: "La Fermata De Gasperi 43 | Authentic Torinese Pizzeria in Turin",
    description: restaurantInfo.metaDescription,
    type: "website",
  },
};

export default function HomePageEN() {
  return <HomePageClientEN />;
}
